import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { SUPPORTED_CURRENCIES } from '@/src/common/types/constants';
import { ICurrencyInfo } from '@/src/common/types/currency.type';
import logger from '@/src/common/utils/logger.util';
import { CurrencyRateContextType } from './types';

const CurrencyRateContext = createContext<CurrencyRateContextType | undefined>(
  undefined,
);

export const useCurrencyRate = (): CurrencyRateContextType => {
  const context = useContext(CurrencyRateContext);
  if (!context) {
    throw new Error(
      'useCurrencyRate must be used within a CurrencyRateProvider',
    );
  }
  return context;
};

export const CurrencyRateProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [currencies, setCurrencies] =
    useState<ICurrencyInfo[]>(SUPPORTED_CURRENCIES);
  const [history, setHistory] = useState<ICurrencyInfo[]>([]);
  const [resultsList, setResultsList] = useState<ICurrencyInfo[]>([]);

  const addCurrency = useCallback((currency: ICurrencyInfo) => {
    setCurrencies(prev => {
      const exists = prev.find(c => c.code === currency.code);
      if (exists) {
        logger(`Currency ${currency.code} already exists`, 'warn');
        // Update existing currency instead of ignoring
        return prev.map(c => (c.code === currency.code ? currency : c));
      }
      logger(`Adding currency: ${currency.code} with rate ${currency.amount}`);
      return [...prev, currency];
    });
  }, []);

  const removeCurrency = useCallback((code: string) => {
    setCurrencies(prev => {
      const filtered = prev.filter(c => c.code !== code);
      logger(`Removed currency: ${code}`);
      return filtered;
    });
  }, []);

  const updateCurrency = useCallback(
    (code: string, updatedData: Partial<ICurrencyInfo>) => {
      setCurrencies(prev =>
        prev.map(c => {
          if (c.code === code) {
            logger(
              `Updated currency: ${code} ${JSON.stringify(updatedData)}`,
              'info',
            );
            return { ...c, ...updatedData };
          }
          return c;
        }),
      );
    },
    [],
  );

  const getCurrency = useCallback(
    (code: string): ICurrencyInfo | undefined => {
      return currencies.find(c => c.code === code);
    },
    [currencies],
  );

  const clearHistory = useCallback(() => {
    setHistory([]);
    logger('Conversion history cleared');
  }, []);

  const convertCurrency = useCallback(
    (amount: number, fromCode: string): ICurrencyInfo[] => {
      const fromCurrency = getCurrency(fromCode);
      const result: ICurrencyInfo[] = [];

      logger(`[Context] Converting ${amount} ${fromCode}`);

      if (!fromCurrency || fromCurrency.amount === undefined) {
        logger(
          `[Context] Cannot convert: ${fromCode} not found or has no exchange rate`,
          'error',
        );
        setResultsList([]);
        return result;
      }

      // Add to conversion history
      setHistory(prev => [...prev, { ...fromCurrency, amount }]);

      // Convert to USD first (assuming all rates are relative to USD)
      const amountInUSD = amount / fromCurrency.amount;
      logger(`[Context] Amount in USD: ${amountInUSD.toFixed(2)}`);

      // Convert to all currencies that have an exchange rate
      currencies.forEach(currency => {
        if (currency.amount !== undefined && currency.code !== fromCode) {
          const convertedAmount = amountInUSD * currency.amount;
          result.push({
            ...currency,
            amount: convertedAmount,
          });
          logger(
            `[Context] ${fromCode} → ${
              currency.code
            }: ${convertedAmount.toFixed(2)}`,
          );
        }
      });

      logger(`[Context] Conversion complete. ${result.length} results`);
      setResultsList(result);
      return result;
    },
    [getCurrency, currencies],
  );

  const value: CurrencyRateContextType = useMemo(
    () => ({
      state: {
        history,
        currencies,
        resultsList,
      },
      functions: {
        addCurrency,
        removeCurrency,
        updateCurrency,
        convertCurrency,
        getCurrency,
        clearHistory,
      },
    }),
    [
      currencies,
      history,
      resultsList,
      addCurrency,
      removeCurrency,
      updateCurrency,
      convertCurrency,
      getCurrency,
      clearHistory,
    ],
  );

  return (
    <CurrencyRateContext.Provider value={value}>
      {children}
    </CurrencyRateContext.Provider>
  );
};

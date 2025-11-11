import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import { ICurrencyInfo } from '@/src/common/types/currency.type';
import logger from '@/src/common/utils/logger.util';
import storage, { STORAGE_KEYS } from '@/src/common/utils/storage.util';
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
  const [currencies, setCurrencies] = useState<ICurrencyInfo[]>([]);
  const [history, setHistory] = useState<ICurrencyInfo[]>([]);
  const [resultsList, setResultsList] = useState<ICurrencyInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load data from storage on mount
  useEffect(() => {
    loadStoredData();
  }, []);

  // Save currencies to storage whenever they change
  useEffect(() => {
    if (!isLoading) {
      storage.setItem(STORAGE_KEYS.CURRENCIES, currencies);
    }
  }, [currencies, isLoading]);

  // Save history to storage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      storage.setItem(STORAGE_KEYS.HISTORY, history);
    }
  }, [history, isLoading]);

  const loadStoredData = async () => {
    try {
      const data = await storage.multiGet<ICurrencyInfo[]>([
        STORAGE_KEYS.CURRENCIES,
        STORAGE_KEYS.HISTORY,
      ]);

      const storedCurrencies = data[STORAGE_KEYS.CURRENCIES];
      const storedHistory = data[STORAGE_KEYS.HISTORY];

      if (storedCurrencies) {
        setCurrencies(storedCurrencies);
        logger(`Loaded ${storedCurrencies.length} currencies from storage`);
      }

      if (storedHistory) {
        setHistory(storedHistory);
        logger(`Loaded ${storedHistory.length} history items from storage`);
      }
    } catch (error) {
      logger(`Error loading data from storage: ${error}`, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const addCurrency = (currency: ICurrencyInfo) => {
    setCurrencies(prev => {
      const exists = prev.find(c => c.code === currency.code);
      if (exists) {
        logger(`Currency ${currency.code} already exists`, 'warn');
        return prev.map(c => (c.code === currency.code ? currency : c));
      }
      logger(`Adding currency: ${currency.code} with rate ${currency.amount}`);
      return [...prev, currency];
    });
  };

  const removeCurrency = (code: string) => {
    setCurrencies(prev => {
      const filtered = prev.filter(c => c.code !== code);
      logger(`Removed currency: ${code}`);
      return filtered;
    });
  };

  const updateCurrency = (
    code: string,
    updatedData: Partial<ICurrencyInfo>,
  ) => {
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
  };

  const getCurrency = (code: string): ICurrencyInfo | undefined => {
    return currencies.find(c => c.code === code);
  };

  const clearHistory = async () => {
    setHistory([]);
    await storage.removeItem(STORAGE_KEYS.HISTORY);
    logger('Conversion history cleared');
  };

  const convertCurrency = (amount: number, fromCode: string): void => {
    const fromCurrency = getCurrency(fromCode);
    const result: ICurrencyInfo[] = [];

    logger(`[Context] Converting ${amount} ${fromCode}`);

    if (!fromCurrency || fromCurrency.amount === undefined) {
      logger(
        `[Context] Cannot convert: ${fromCode} not found or has no exchange rate`,
        'error',
      );
      setResultsList([]);
      return;
    }

    setHistory(prev => [...prev, { ...fromCurrency, amount }]);

    const amountInUSD = amount / fromCurrency.amount;
    logger(`[Context] Amount in USD: ${amountInUSD.toFixed(2)}`);

    currencies.forEach(currency => {
      if (currency.amount !== undefined && currency.code !== fromCode) {
        const convertedAmount = amountInUSD * currency.amount;
        result.push({
          ...currency,
          amount: convertedAmount,
        });
        logger(
          `[Context] ${fromCode} → ${currency.code}: ${convertedAmount.toFixed(
            2,
          )}`,
        );
      }
    });

    logger(`[Context] Conversion complete. ${result.length} results`);
    setResultsList(result);
  };

  const value: CurrencyRateContextType = {
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
  };

  return (
    <CurrencyRateContext.Provider value={value}>
      {children}
    </CurrencyRateContext.Provider>
  );
};

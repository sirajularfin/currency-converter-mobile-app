import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';

import { ICurrencyInfo } from '@/src/common/types/currency.type';
import { CurrencyRateContextType } from './types';

const CurrencyRateContext = createContext<CurrencyRateContextType | undefined>(
  undefined,
);

export const useCurrencyRate = () => {
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

  const addCurrency = (currency: ICurrencyInfo) => {
    setCurrencies(prev => {
      const exists = prev.find(c => c.code === currency.code);
      if (exists) {
        return prev;
      }
      return [...prev, currency];
    });
  };

  const removeCurrency = (code: string) => {
    setCurrencies(prev => prev.filter(c => c.code !== code));
  };

  const updateCurrency = (
    code: string,
    updatedData: Partial<ICurrencyInfo>,
  ) => {
    setCurrencies(prev =>
      prev.map(c => (c.code === code ? { ...c, ...updatedData } : c)),
    );
  };

  const getCurrency = useCallback(
    (code: string) => {
      return currencies.find(c => c.code === code);
    },
    [currencies],
  );

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  const convertCurrency = useCallback(
    (amount: number, fromCode: string) => {
      const fromCurrency = getCurrency(fromCode);
      const result: ICurrencyInfo[] = [];

      if (!fromCurrency || fromCurrency.amount === undefined) {
        return result;
      }

      // Convert to USD first
      setHistory(prev => [...prev, fromCurrency]);
      const amountInUSD = amount / fromCurrency.amount;

      // Convert to all currencies that have a current rate
      currencies.forEach(currency => {
        if (currency.amount !== undefined) {
          result.push({
            ...currency,
            amount: amountInUSD * currency.amount,
          });
        }
      });
      setResultsList(result);
    },
    [getCurrency, currencies],
  );

  const value: CurrencyRateContextType = React.useMemo(
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
      clearHistory,
      convertCurrency,
      getCurrency,
    ],
  );

  return (
    <CurrencyRateContext.Provider value={value}>
      {children}
    </CurrencyRateContext.Provider>
  );
};

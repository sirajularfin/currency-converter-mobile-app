import { ICurrencyInfo } from '@/src/common/types/currency.type';
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';
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

  const getStoredRate = useCallback(() => {
    const result = currencies.filter(c => c.currentRate);
    return result.length > 0 ? result : undefined;
  }, [currencies]);

  const convertCurrency = useCallback(
    (amount: number, fromCode: string): Record<string, number> => {
      const fromCurrency = getCurrency(fromCode);
      const result: Record<string, number> = {};

      if (!fromCurrency || fromCurrency.currentRate === undefined) {
        return result;
      }

      // Convert to USD first
      const amountInUSD = amount / fromCurrency.currentRate;

      // Convert to all currencies that have a current rate
      currencies.forEach(currency => {
        if (currency.currentRate !== undefined) {
          result[currency.code] = amountInUSD * currency.currentRate;
        }
      });

      return result;
    },
    [getCurrency, currencies],
  );

  const value: CurrencyRateContextType = React.useMemo(
    () => ({
      state: {
        currencies,
      },
      functions: {
        addCurrency,
        removeCurrency,
        updateCurrency,
        convertCurrency,
        getCurrency,
        getStoredRate,
      },
    }),
    [convertCurrency, currencies, getCurrency, getStoredRate],
  );

  return (
    <CurrencyRateContext.Provider value={value}>
      {children}
    </CurrencyRateContext.Provider>
  );
};

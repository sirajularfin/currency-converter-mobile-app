import { act, renderHook } from '@testing-library/react-hooks';
import React from 'react';

import { ICurrencyInfo } from '@/src/common/types/currency.type';
import { CurrencyRateProvider, useCurrencyRate } from './CurrencyRateContext';

describe('CurrencyRateContext', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <CurrencyRateProvider>{children}</CurrencyRateProvider>
  );

  const mockCurrencyINR: ICurrencyInfo = {
    code: 'INR',
    name: 'Indian Rupee',
    origin: 'India',
    amount: 1,
    flag: 'https://flagcdn.com/w40/in.png',
  };

  const mockCurrencyEUR: ICurrencyInfo = {
    code: 'EUR',
    amount: 0.85,
    name: 'Euro',
    origin: 'European Union',
    flag: 'https://flagcdn.com/w40/eu.png',
  };

  const mockCurrencyGBP: ICurrencyInfo = {
    code: 'GBP',
    amount: 0.73,
    name: 'British Pound',
    origin: 'United Kingdom',
    flag: 'https://flagcdn.com/w40/gb.png',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('hook usage', () => {
    it('should throw error when used outside provider', () => {
      const { result } = renderHook(() => useCurrencyRate());
      expect(result.error).toEqual(
        Error('useCurrencyRate must be used within a CurrencyRateProvider'),
      );
    });

    it('should return context value when used within provider', () => {
      const { result } = renderHook(() => useCurrencyRate(), { wrapper });
      expect(result.current).toBeDefined();
      expect(result.current.state).toBeDefined();
      expect(result.current.functions).toBeDefined();
    });
  });

  describe('initial state', () => {
    it('should have empty currencies, history, and resultsList', () => {
      const { result } = renderHook(() => useCurrencyRate(), { wrapper });

      expect(result.current.state.currencies).toEqual([]);
      expect(result.current.state.history).toEqual([]);
      expect(result.current.state.resultsList).toEqual([]);
    });
  });

  describe('addCurrency', () => {
    it('should add a new currency', () => {
      const { result } = renderHook(() => useCurrencyRate(), { wrapper });

      act(() => {
        result.current.functions.addCurrency(mockCurrencyINR);
      });

      expect(result.current.state.currencies).toHaveLength(1);
      expect(result.current.state.currencies[0]).toEqual(mockCurrencyINR);
    });

    it('should update existing currency when adding duplicate', () => {
      const { result } = renderHook(() => useCurrencyRate(), { wrapper });

      const updatedCurrency: ICurrencyInfo = {
        ...mockCurrencyINR,
        amount: 1.1,
      };

      act(() => {
        result.current.functions.addCurrency(mockCurrencyINR);
      });

      act(() => {
        result.current.functions.addCurrency(updatedCurrency);
      });

      expect(result.current.state.currencies).toHaveLength(1);
      expect(result.current.state.currencies[0].amount).toBe(1.1);
    });

    it('should add multiple different currencies', () => {
      const { result } = renderHook(() => useCurrencyRate(), { wrapper });

      act(() => {
        result.current.functions.addCurrency(mockCurrencyINR);
        result.current.functions.addCurrency(mockCurrencyEUR);
        result.current.functions.addCurrency(mockCurrencyGBP);
      });

      expect(result.current.state.currencies).toHaveLength(3);
    });
  });

  describe('removeCurrency', () => {
    it('should remove a currency by code', () => {
      const { result } = renderHook(() => useCurrencyRate(), { wrapper });

      act(() => {
        result.current.functions.addCurrency(mockCurrencyINR);
        result.current.functions.addCurrency(mockCurrencyEUR);
      });

      expect(result.current.state.currencies).toHaveLength(2);

      act(() => {
        result.current.functions.removeCurrency('INR');
      });

      expect(result.current.state.currencies).toHaveLength(1);
      expect(result.current.state.currencies[0].code).toBe('EUR');
    });

    it('should handle removing non-existent currency gracefully', () => {
      const { result } = renderHook(() => useCurrencyRate(), { wrapper });

      act(() => {
        result.current.functions.addCurrency(mockCurrencyINR);
      });

      act(() => {
        result.current.functions.removeCurrency('XYZ');
      });

      expect(result.current.state.currencies).toHaveLength(1);
      expect(result.current.state.currencies[0].code).toBe('INR');
    });
  });

  describe('updateCurrency', () => {
    it('should update currency data', () => {
      const { result } = renderHook(() => useCurrencyRate(), { wrapper });

      act(() => {
        result.current.functions.addCurrency(mockCurrencyINR);
      });

      act(() => {
        result.current.functions.updateCurrency('INR', { amount: 1.5 });
      });

      expect(result.current.state.currencies[0].amount).toBe(1.5);
    });

    it('should not update non-existent currency', () => {
      const { result } = renderHook(() => useCurrencyRate(), { wrapper });

      act(() => {
        result.current.functions.addCurrency(mockCurrencyINR);
      });

      const initialLength = result.current.state.currencies.length;

      act(() => {
        result.current.functions.updateCurrency('EUR', { amount: 0.9 });
      });

      expect(result.current.state.currencies).toHaveLength(initialLength);
      expect(result.current.state.currencies[0].code).toBe('INR');
    });

    it('should partially update currency fields', () => {
      const { result } = renderHook(() => useCurrencyRate(), { wrapper });

      act(() => {
        result.current.functions.addCurrency(mockCurrencyINR);
      });

      act(() => {
        result.current.functions.updateCurrency('INR', {
          name: 'Updated Rupee',
        });
      });

      expect(result.current.state.currencies[0].name).toBe('Updated Rupee');
      expect(result.current.state.currencies[0].code).toBe('INR');
    });
  });

  describe('getCurrency', () => {
    it('should return currency by code', () => {
      const { result } = renderHook(() => useCurrencyRate(), { wrapper });

      act(() => {
        result.current.functions.addCurrency(mockCurrencyINR);
      });

      const currency = result.current.functions.getCurrency('INR');
      expect(currency).toEqual(mockCurrencyINR);
    });

    it('should return undefined for non-existent currency', () => {
      const { result } = renderHook(() => useCurrencyRate(), { wrapper });

      const currency = result.current.functions.getCurrency('XYZ');
      expect(currency).toBeUndefined();
    });
  });

  describe('clearHistory', () => {
    it('should clear conversion history', () => {
      const { result } = renderHook(() => useCurrencyRate(), { wrapper });

      act(() => {
        result.current.functions.addCurrency(mockCurrencyINR);
        result.current.functions.addCurrency(mockCurrencyEUR);
      });

      act(() => {
        result.current.functions.convertCurrency(100, 'INR');
      });

      expect(result.current.state.history.length).toBeGreaterThan(0);

      act(() => {
        result.current.functions.clearHistory();
      });

      expect(result.current.state.history).toHaveLength(0);
    });
  });

  describe('convertCurrency', () => {
    it('should convert currency to all other currencies', () => {
      const { result } = renderHook(() => useCurrencyRate(), { wrapper });

      act(() => {
        result.current.functions.addCurrency(mockCurrencyINR);
        result.current.functions.addCurrency(mockCurrencyEUR);
        result.current.functions.addCurrency(mockCurrencyGBP);
      });

      act(() => {
        result.current.functions.convertCurrency(100, 'INR');
      });

      expect(result.current.state.resultsList).toHaveLength(2);
    });

    it('should add conversion to history', () => {
      const { result } = renderHook(() => useCurrencyRate(), { wrapper });

      act(() => {
        result.current.functions.addCurrency(mockCurrencyINR);
        result.current.functions.addCurrency(mockCurrencyEUR);
      });

      act(() => {
        result.current.functions.convertCurrency(100, 'INR');
      });

      expect(result.current.state.history).toHaveLength(1);
      expect(result.current.state.history[0].amount).toBe(100);
      expect(result.current.state.history[0].code).toBe('INR');
    });

    it('should return empty array for non-existent currency', () => {
      const { result } = renderHook(() => useCurrencyRate(), { wrapper });

      act(() => {
        result.current.functions.convertCurrency(100, 'XYZ');
      });

      expect(result.current.state.resultsList).toHaveLength(0);
    });

    it('should not include source currency in conversion results', () => {
      const { result } = renderHook(() => useCurrencyRate(), { wrapper });

      act(() => {
        result.current.functions.addCurrency(mockCurrencyINR);
        result.current.functions.addCurrency(mockCurrencyEUR);
      });

      act(() => {
        result.current.functions.convertCurrency(100, 'INR');
      });

      expect(
        result.current.state.resultsList.find(c => c.code === 'INR'),
      ).toBeUndefined();
    });

    it('should correctly convert between non-USD currencies', () => {
      const { result } = renderHook(() => useCurrencyRate(), { wrapper });

      act(() => {
        result.current.functions.addCurrency(mockCurrencyEUR);
        result.current.functions.addCurrency(mockCurrencyGBP);
      });

      act(() => {
        result.current.functions.convertCurrency(85, 'EUR');
      });

      expect(result.current.state.resultsList).toHaveLength(1);
      expect(
        result.current.state.resultsList.find(c => c.code === 'GBP')?.amount,
      ).toBeCloseTo(73, 0);
    });

    it('should handle multiple conversions and maintain history', () => {
      const { result } = renderHook(() => useCurrencyRate(), { wrapper });

      act(() => {
        result.current.functions.addCurrency(mockCurrencyINR);
        result.current.functions.addCurrency(mockCurrencyEUR);
      });

      act(() => {
        result.current.functions.convertCurrency(100, 'INR');
        result.current.functions.convertCurrency(50, 'EUR');
      });

      expect(result.current.state.history).toHaveLength(2);
    });
  });

  describe('edge cases', () => {
    it('should handle zero amount conversion', () => {
      const { result } = renderHook(() => useCurrencyRate(), { wrapper });

      act(() => {
        result.current.functions.addCurrency(mockCurrencyINR);
        result.current.functions.addCurrency(mockCurrencyEUR);
      });

      act(() => {
        result.current.functions.convertCurrency(0, 'INR');
      });

      expect(result.current.state.resultsList).toHaveLength(1);
      expect(result.current.state.resultsList[0].amount).toBe(0);
    });

    it('should handle negative amount conversion', () => {
      const { result } = renderHook(() => useCurrencyRate(), { wrapper });

      act(() => {
        result.current.functions.addCurrency(mockCurrencyINR);
        result.current.functions.addCurrency(mockCurrencyEUR);
      });

      act(() => {
        result.current.functions.convertCurrency(-100, 'INR');
      });

      expect(result.current.state.resultsList).toHaveLength(1);
      expect(result.current.state.resultsList[0].amount).toBeLessThan(0);
    });

    it('should handle very large amounts', () => {
      const { result } = renderHook(() => useCurrencyRate(), { wrapper });

      act(() => {
        result.current.functions.addCurrency(mockCurrencyINR);
        result.current.functions.addCurrency(mockCurrencyEUR);
      });

      act(() => {
        result.current.functions.convertCurrency(1000000, 'INR');
      });

      expect(result.current.state.resultsList).toHaveLength(1);
      expect(result.current.state.resultsList[0].amount).toBeGreaterThan(0);
    });
  });
});

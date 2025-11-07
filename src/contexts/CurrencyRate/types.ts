import { ICurrencyInfo } from '@/src/common/types/currency.type';

interface CurrencyRateState {
  currencies: ICurrencyInfo[];
  isLoading?: boolean;
  error?: string | null;
}

interface CurrencyRateFunctions {
  addCurrency: (currency: ICurrencyInfo) => void;
  removeCurrency: (code: string) => void;
  updateCurrency: (code: string, updatedData: Partial<ICurrencyInfo>) => void;
  convertCurrency: (
    amount: number,
    fromCode: string,
    toCode: string,
  ) => Record<string, number>;
  getCurrency: (code: string) => ICurrencyInfo | undefined;
  getStoredRate: () => ICurrencyInfo[] | undefined;
}

export interface CurrencyRateContextType {
  state: CurrencyRateState;
  functions: CurrencyRateFunctions;
}

import { ICurrencyInfo } from '@/src/common/types/currency.type';

interface CurrencyRateState {
  history: ICurrencyInfo[];
  resultsList: ICurrencyInfo[];
  currencies: ICurrencyInfo[];
  isLoading?: React.SetStateAction<boolean>;
  error?: string | null;
}

interface CurrencyRateFunctions {
  addCurrency: (currency: ICurrencyInfo) => void;
  removeCurrency: (code: string) => void;
  updateCurrency: (code: string, updatedData: Partial<ICurrencyInfo>) => void;
  convertCurrency: (amount: number, fromCode: string) => void;
  getCurrency: (code: string) => ICurrencyInfo | undefined;
  clearHistory: () => void;
}

export interface CurrencyRateContextType {
  state: CurrencyRateState;
  functions: CurrencyRateFunctions;
}

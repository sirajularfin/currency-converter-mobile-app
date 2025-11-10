import React from 'react';
import { I18nextProvider } from 'react-i18next';

import { CurrencyRateProvider } from '@/src/contexts/CurrencyRate/CurrencyRateContext';
import i18n from '@/src/i18n';

export const AppProviders: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <I18nextProvider i18n={i18n}>
      <CurrencyRateProvider>{children}</CurrencyRateProvider>
    </I18nextProvider>
  );
};

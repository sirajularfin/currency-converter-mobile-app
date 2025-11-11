import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Keyboard, View } from 'react-native';

import MainLayout from '@/src/common/layouts/MainLayout';
import globalStyles from '@/src/common/styles/globals';
import { Colors } from '@/src/common/theme/colors';
import { ScaledSize } from '@/src/common/theme/sizes';
import {
  DEFAULT_VALUE_ZERO,
  SUPPORTED_CURRENCIES,
} from '@/src/common/types/constants';
import { ICurrencyInfo } from '@/src/common/types/currency.type';
import logger from '@/src/common/utils/logger.util';
import Button from '@/src/components/Button/Button';
import CurrencyCard from '@/src/components/CurrencyCard/CurrencyCard';
import CurrencyInput from '@/src/components/CurrencyInput/CurrencyInput';
import Separator from '@/src/components/Separator/Separator';
import Typography, { Variant } from '@/src/components/Typography/Typography';
import { useCurrencyRate } from '@/src/contexts/CurrencyRate/CurrencyRateContext';
import { API_ROUTES, RootNavigationProps } from '@/src/navigation/types';
import styles from './styles';

const HomeScreen: React.FC<RootNavigationProps<API_ROUTES.HOME>> = () => {
  const { t } = useTranslation();
  const { state, functions } = useCurrencyRate();
  const [amount, setAmount] = useState<number>(0);
  const [selectedCurrency, setSelectedCurrency] = useState<ICurrencyInfo>(
    SUPPORTED_CURRENCIES[0],
  );

  const handleCurrencyChange = (currency: ICurrencyInfo) => {
    setSelectedCurrency(currency);
    setAmount(currency.amount ?? 0);
  };

  const handleAction = () => {
    Keyboard.dismiss();
    if (amount > 0 && selectedCurrency) {
      const currencyWithRate = functions.getCurrency(selectedCurrency.code);

      if (currencyWithRate && currencyWithRate.amount !== undefined) {
        functions.convertCurrency(amount, selectedCurrency.code);
        setAmount(0);
      } else {
        logger(`Exchange rate not set for ${selectedCurrency.code}`, 'warn');
      }
    }
  };

  const renderSeparator = () => <Separator height={ScaledSize.SIZE_50} />;

  return (
    <MainLayout barStyle="dark-content" backgroundColor={Colors.GREY_50}>
      <View style={styles.container}>
        <CurrencyInput
          dropdownData={state.currencies}
          onCurrencyChange={handleCurrencyChange}
        />
        <Button onPress={handleAction}>Convert</Button>

        <View style={styles.resultContainer}>
          <FlatList
            data={state.resultsList}
            keyExtractor={item => item.code}
            renderItem={({ item }) => (
              <CurrencyCard
                amount={`${item.amount?.toFixed(2) ?? DEFAULT_VALUE_ZERO}`}
                currencyCode={item.code}
                currencyName={item.name}
                countryName={item.origin}
                flagUri={item.flag}
              />
            )}
            ItemSeparatorComponent={Separator}
            ListHeaderComponent={
              <Typography
                variant={Variant.titleMedium}
                color={Colors.GREY_900}
                style={globalStyles.heading}
              >
                {t('home.heading')}
              </Typography>
            }
            ListEmptyComponent={
              <Typography variant={Variant.bodyMedium} color={Colors.GREY_700}>
                {t('home.noResults')}
              </Typography>
            }
            ListFooterComponent={renderSeparator}
          />
        </View>
      </View>
    </MainLayout>
  );
};

export default HomeScreen;

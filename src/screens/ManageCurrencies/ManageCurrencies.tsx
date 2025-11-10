import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import MainLayout from '@/src/common/layouts/MainLayout';
import { Colors } from '@/src/common/theme/colors';
import { SUPPORTED_CURRENCIES } from '@/src/common/types/constants';
import { ICurrencyInfo } from '@/src/common/types/currency.type';
import Button from '@/src/components/Button/Button';
import CurrencyCard from '@/src/components/CurrencyCard/CurrencyCard';
import CurrencyInput from '@/src/components/CurrencyInput/CurrencyInput';
import Separator from '@/src/components/Separator/Separator';
import Typography, { Variant } from '@/src/components/Typography/Typography';
import { useCurrencyRate } from '@/src/contexts/CurrencyRate/CurrencyRateContext';
import { API_ROUTES, RootNavigationProps } from '@/src/navigation/types';
import styles from './styles';

const ManageCurrenciesScreen: React.FC<
  RootNavigationProps<API_ROUTES.MANAGE_CURRENCIES>
> = () => {
  const [selectedCurrency, setSelectedCurrency] =
    useState<ICurrencyInfo | null>(null);

  const { state, functions } = useCurrencyRate();

  return (
    <MainLayout barStyle="dark-content" backgroundColor={Colors.GREY_50}>
      <View style={styles.container}>
        <Typography variant={Variant.headingSmall} color={Colors.GREY_900}>
          Manage Rates
        </Typography>
        <CurrencyInput
          showHint
          showEnteredValue
          onCurrencyChange={setSelectedCurrency}
          placeholder="Enter rate (e.g. 100)"
          dropdownData={SUPPORTED_CURRENCIES}
        />
        <Button
          onPress={() => {
            selectedCurrency && functions.addCurrency(selectedCurrency);
          }}
          disabled={!selectedCurrency}
        >
          Add Rate
        </Button>
        <View style={styles.divider} />
        <Typography variant={Variant.titleMedium} color={Colors.GREY_900}>
          Stored currencies
        </Typography>
        <FlatList
          data={state.currencies}
          keyExtractor={item => item.code}
          renderItem={({ item }) => (
            <CurrencyCard
              amount={item.amount?.toString() ?? ''}
              currencyCode={item.code}
              currencyName={item.name}
              countryName={item.origin}
              flagUri={item.flag}
              onDelete={() => functions.removeCurrency(item.code)}
            />
          )}
          ItemSeparatorComponent={Separator}
          ListEmptyComponent={null}
        />
      </View>
    </MainLayout>
  );
};

export default ManageCurrenciesScreen;

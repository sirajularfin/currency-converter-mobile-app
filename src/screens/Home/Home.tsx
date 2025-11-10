import React from 'react';
import { FlatList, View } from 'react-native';

import MainLayout from '@/src/common/layouts/MainLayout';
import { Colors } from '@/src/common/theme/colors';
import {
  DEFAULT_VALUE_ZERO,
  SUPPORTED_CURRENCIES,
} from '@/src/common/types/constants';
import Button from '@/src/components/Button/Button';
import CurrencyCard from '@/src/components/CurrencyCard/CurrencyCard';
import CurrencyInput from '@/src/components/CurrencyInput/CurrencyInput';
import Separator from '@/src/components/Separator/Separator';
import Typography, { Variant } from '@/src/components/Typography/Typography';
import { useCurrencyRate } from '@/src/contexts/CurrencyRate/CurrencyRateContext';
import { API_ROUTES, RootNavigationProps } from '@/src/navigation/types';
import styles from './styles';

const HomeScreen: React.FC<RootNavigationProps<API_ROUTES.HOME>> = () => {
  const { state, functions } = useCurrencyRate();

  const handleAction = () => {
    functions.convertCurrency(100, 'USD');
  };

  return (
    <MainLayout barStyle="dark-content" backgroundColor={Colors.GREY_50}>
      <View style={styles.container}>
        <CurrencyInput dropdownData={SUPPORTED_CURRENCIES} />
        <Button onPress={handleAction}>Convert</Button>

        <View style={styles.resultContainer}>
          <Typography variant={Variant.titleMedium}>
            Converted values
          </Typography>
          <FlatList
            data={state.resultsList}
            keyExtractor={item => item.code}
            renderItem={({ item }) => (
              <CurrencyCard
                amount={`${item.amount ?? DEFAULT_VALUE_ZERO}`}
                currencyCode={item.code}
                currencyName={item.name}
                countryName={item.origin}
                flagUri={item.flag}
              />
            )}
            ItemSeparatorComponent={Separator}
          />
        </View>
      </View>
    </MainLayout>
  );
};

export default HomeScreen;

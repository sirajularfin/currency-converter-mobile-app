import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';

import { ResetIcon } from '@/src/assets';
import MainLayout from '@/src/common/layouts/MainLayout';
import { Colors } from '@/src/common/theme/colors';
import { ScaledSize } from '@/src/common/theme/sizes';
import { DEFAULT_VALUE_ZERO } from '@/src/common/types/constants';
import CurrencyCard from '@/src/components/CurrencyCard/CurrencyCard';
import Separator from '@/src/components/Separator/Separator';
import Typography, { Variant } from '@/src/components/Typography/Typography';
import { useCurrencyRate } from '@/src/contexts/CurrencyRate/CurrencyRateContext';
import { API_ROUTES, RootNavigationProps } from '@/src/navigation/types';
import styles from './styles';

const HistoryScreen: React.FC<RootNavigationProps<API_ROUTES.HISTORY>> = () => {
  const { t } = useTranslation();
  const { state, functions } = useCurrencyRate();

  const renderSeparator = () => <Separator height={ScaledSize.SIZE_50} />;

  return (
    <MainLayout barStyle="dark-content" backgroundColor={Colors.GREY_50}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Typography variant={Variant.headingSmall}>
            {t('history.title')}
          </Typography>
          <View
            style={styles.resetContainer}
            onTouchEnd={functions.clearHistory}
          >
            <Typography
              variant={Variant.titleSmall}
              color={Colors.GREY_800}
              useLineHeight
            >
              {t('history.resetButton')}
            </Typography>
            <ResetIcon
              color={Colors.GREY_800}
              height={ScaledSize.SIZE_20}
              width={ScaledSize.SIZE_20}
            />
          </View>
        </View>
        <FlatList
          keyExtractor={(item, index) => `${index}_${item.code}_${item.amount}`}
          data={state.history}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CurrencyCard
              amount={`${item?.amount ?? DEFAULT_VALUE_ZERO}`}
              currencyCode={item.code}
              currencyName={item.name}
              countryName={item.origin}
              flagUri={item.flag}
            />
          )}
          ItemSeparatorComponent={Separator}
          ListEmptyComponent={
            <Typography variant={Variant.bodyMedium} color={Colors.GREY_700}>
              {t('history.noData')}
            </Typography>
          }
          ListFooterComponent={renderSeparator}
        />
      </View>
    </MainLayout>
  );
};

export default HistoryScreen;

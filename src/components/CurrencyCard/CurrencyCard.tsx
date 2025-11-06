import React from 'react';
import { Image, View } from 'react-native';

import { Colors } from '@/src/common/theme/colors';
import Typography, { Variant } from '@/src/components/Typography/Typography';
import styles from './styles';

interface IProps {
  amount: string;
  currencyCode: string;
  currencyName: string;
  countryName: string;
  flagUri: string;
}

const CurrencyCard: React.FC<IProps> = ({
  amount,
  currencyCode,
  currencyName,
  countryName,
  flagUri,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <View style={styles.rowOne}>
          <Typography
            useLineHeight
            variant={Variant.titleLarge}
            color={Colors.GREY_900}
          >
            {amount} {currencyName} ({currencyCode})
          </Typography>
        </View>
        <View style={styles.rowTwo}>
          <Image source={{ uri: flagUri }} style={styles.flagImage} />
          <Typography
            useLineHeight
            variant={Variant.bodyMedium}
            color={Colors.GREY_800}
          >
            {countryName}
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default CurrencyCard;

import React, { useState } from 'react';
import {
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Colors } from '@/src/common/theme/colors';
import { BASE_CURRENCY } from '@/src/common/types/constants';
import { ICurrencyInfo } from '@/src/common/types/currency.type';
import { useTranslation } from 'react-i18next';
import OverlayModal from '../OverlayModal/OverlayModal';
import Typography, { Variant } from '../Typography/Typography';
import styles from './styles';

interface IProps {
  placeholder?: string;
  showHint?: boolean;
  showEnteredValue?: boolean;
  dropdownData: ICurrencyInfo[];
  onCurrencyChange?: (currency: ICurrencyInfo) => void;
}

const CurrencyInput: React.FC<IProps> = ({
  placeholder = 'currency.inputPlaceholder',
  showHint,
  showEnteredValue,
  dropdownData,
  onCurrencyChange,
}) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(dropdownData[0]);
  const [value, setValue] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSelect = (country: ICurrencyInfo) => {
    setSelected(country);
    setDropdownVisible(false);
  };

  const handleChangeText = (text: string) => {
    setValue(text);
    if (text.trim() !== '') {
      onCurrencyChange?.({
        ...selected,
        amount: parseFloat(text) ?? 0,
      });
    }
  };

  return (
    <React.Fragment>
      {showEnteredValue && (
        <View style={styles.valuePreview}>
          <Typography variant={Variant.headingSmall} color={Colors.GREY_900}>
            1 USD ~ {value.length ? value : 0} {selected?.code}
          </Typography>
        </View>
      )}
      <View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder={t(placeholder)}
            value={value}
            onChangeText={handleChangeText}
            keyboardType="numeric"
            placeholderTextColor={Colors.GREY_700}
          />
          <TouchableOpacity onPress={() => setDropdownVisible(true)}>
            <Image
              source={{ uri: selected.flag ?? BASE_CURRENCY.flag }}
              style={styles.flagImage}
            />
          </TouchableOpacity>
        </View>
        {showHint && (
          <View style={styles.hintText}>
            <Typography variant={Variant.caption} color={Colors.GREY_700}>
              {t('currency.inputHint', { currency: t(selected?.name) })}
            </Typography>
          </View>
        )}
      </View>
      <OverlayModal
        visible={dropdownVisible}
        onRequestClose={() => setDropdownVisible(false)}
      >
        <FlatList
          data={dropdownData}
          keyExtractor={item => item.code}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => handleSelect(item)}
            >
              <Image source={{ uri: item.flag }} style={styles.dropdownFlag} />
              <Typography variant={Variant.bodyMedium} color={Colors.GREY_900}>
                {t(item.name)} ({item.code})
              </Typography>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <Typography
              variant={Variant.bodyMedium}
              color={Colors.GREY_900}
              align="center"
            >
              {t('currency.notFound')}
            </Typography>
          }
        />
      </OverlayModal>
    </React.Fragment>
  );
};

export default CurrencyInput;

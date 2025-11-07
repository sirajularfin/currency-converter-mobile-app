import React, { useState } from 'react';
import {
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Colors } from '@/src/common/theme/colors';
import { ICurrencyInfo } from '@/src/common/types/currency.type';
import OverlayModal from '../OverlayModal/OverlayModal';
import Typography, { Variant } from '../Typography/Typography';
import styles from './styles';

interface IProps {
  placeholder?: string;
  hint?: string;
  dropdownData: ICurrencyInfo[];
  onChangeText: (text: string) => void;
}

const CurrencyInput: React.FC<IProps> = ({
  placeholder = 'Enter amount',
  hint,
  dropdownData,
  onChangeText,
}) => {
  const [selected, setSelected] = useState(dropdownData[0]);
  const [value, setValue] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSelect = (country: ICurrencyInfo) => {
    setSelected(country);
    setDropdownVisible(false);
  };

  const handleChangeText = (text: string) => {
    setValue(text);
    onChangeText?.(text);
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={handleChangeText}
          keyboardType="numeric"
          placeholderTextColor={Colors.GREY_600}
        />
        <TouchableOpacity onPress={() => setDropdownVisible(true)}>
          <Image source={{ uri: selected.flag }} style={styles.flagImage} />
        </TouchableOpacity>
      </View>
      {hint && (
        <View style={styles.hintText}>
          <Typography variant={Variant.caption} color={Colors.GREY_700}>
            {hint}
          </Typography>
        </View>
      )}

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
                {item.name} ({item.code})
              </Typography>
            </TouchableOpacity>
          )}
        />
      </OverlayModal>
    </View>
  );
};

export default CurrencyInput;

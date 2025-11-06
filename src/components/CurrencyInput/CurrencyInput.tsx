import React, { useState } from 'react';
import {
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Colors } from '@/src/common/theme/colors';
import { COUNTRIES_LIST } from '@/src/common/types/constants';
import OverlayModal from '../OverlayModal/OverlayModal';
import Typography, { Variant } from '../Typography/Typography';
import styles from './styles';

interface IProps {
  placeholder?: string;
  hint: string;
}

const CurrencyInput: React.FC<IProps> = ({
  placeholder = 'Enter amount',
  hint,
}) => {
  const [selected, setSelected] = useState(COUNTRIES_LIST[0]);
  const [value, setValue] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSelect = country => {
    setSelected(country);
    setDropdownVisible(false);
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
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
          data={COUNTRIES_LIST}
          keyExtractor={item => item.code}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => handleSelect(item)}
            >
              <Image source={{ uri: item.flag }} style={styles.dropdownFlag} />
              <Typography variant={Variant.bodyMedium} color={Colors.GREY_900}>
                {item.name}
              </Typography>
            </TouchableOpacity>
          )}
        />
      </OverlayModal>
    </View>
  );
};

export default CurrencyInput;

import { Colors } from '@/src/common/theme/colors';
import { ScaledSize } from '@/src/common/theme/sizes';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Modal,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography, { Variant } from '../Typography/Typography';
import styles from './styles';

const countries = [
  { code: 'IN', name: 'India', flag: 'https://flagcdn.com/w40/in.png' },
  { code: 'US', name: 'United States', flag: 'https://flagcdn.com/w40/us.png' },
  {
    code: 'GB',
    name: 'United Kingdom',
    flag: 'https://flagcdn.com/w40/gb.png',
  },
  { code: 'JP', name: 'Japan', flag: 'https://flagcdn.com/w40/jp.png' },
];

interface IProps {
  placeholder?: string;
  hint: string;
}

const CurrencyInput: React.FC<IProps> = ({
  placeholder = 'Enter amount',
  hint,
}) => {
  const [selected, setSelected] = useState(countries[0]);
  const [value, setValue] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const { bottom } = useSafeAreaInsets();

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
          placeholderTextColor={Colors.GREY_700}
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

      <Modal
        transparent
        animationType="slide"
        statusBarTranslucent
        visible={dropdownVisible}
        onRequestClose={() => setDropdownVisible(false)}
      >
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPressOut={() => setDropdownVisible(false)}
        >
          <View
            style={[
              styles.dropdown,
              { paddingBottom: bottom + ScaledSize.SIZE_20 },
            ]}
          >
            <FlatList
              data={countries}
              keyExtractor={item => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => handleSelect(item)}
                >
                  <Image
                    source={{ uri: item.flag }}
                    style={styles.dropdownFlag}
                  />
                  <Typography
                    variant={Variant.bodyMedium}
                    color={Colors.GREY_900}
                  >
                    {item.name}
                  </Typography>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default CurrencyInput;

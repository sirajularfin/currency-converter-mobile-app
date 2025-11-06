import { ScaledSize } from '@/src/common/theme/sizes';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  pressable: {
    borderRadius: ScaledSize.SIZE_8,
    paddingVertical: ScaledSize.SIZE_12,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',

    minHeight: ScaledSize.SIZE_48,
    borderRadius: ScaledSize.SIZE_8,
  },
});

export default styles;

import { ScaledSize } from '@/src/common/theme/sizes';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  pressable: {
    overflow: 'hidden',
    borderRadius: ScaledSize.SIZE_8,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',

    minHeight: ScaledSize.SIZE_48,
    paddingVertical: ScaledSize.SIZE_12,
    paddingHorizontal: ScaledSize.SIZE_24,
    borderRadius: ScaledSize.SIZE_8,
  },
});

export default styles;

import { ScaledSize } from '@/src/common/theme/sizes';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    minHeight: ScaledSize.SIZE_56,
    borderRadius: ScaledSize.SIZE_8,
  },
});

export default styles;

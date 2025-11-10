import { StyleSheet } from 'react-native';

import globalStyles from '@/src/common/styles/globals';
import { ScaledSize } from '@/src/common/theme/sizes';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.flexContainer,
    gap: ScaledSize.SIZE_20,
  },
  flexView: {
    flex: 1,
  },
  divider: {
    height: ScaledSize.SIZE_20,
  },
});

export default styles;

import { StyleSheet } from 'react-native';

import globalStyles from '@/src/common/styles/globals';
import { ScaledSize } from '@/src/common/theme/sizes';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.flexContainer,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  resetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: ScaledSize.SIZE_4,
  },
});

export default styles;

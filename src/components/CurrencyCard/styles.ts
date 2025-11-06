import { StyleSheet } from 'react-native';

import globalStyles from '@/src/common/styles/globals';
import { ScaledSize } from '@/src/common/theme/sizes';

const styles = StyleSheet.create({
  card: {
    ...globalStyles.shadow,
    overflow: 'hidden',
    borderRadius: ScaledSize.SIZE_8,
  },
  container: {
    rowGap: ScaledSize.SIZE_10,
    padding: ScaledSize.SIZE_20,
  },
  rowOne: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flagImage: {
    width: ScaledSize.SIZE_50,
    height: ScaledSize.SIZE_30,
  },
});

export default styles;

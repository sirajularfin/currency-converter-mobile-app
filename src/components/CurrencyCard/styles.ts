import { StyleSheet } from 'react-native';

import { Colors } from '@/src/common/theme/colors';
import { ScaledSize } from '@/src/common/theme/sizes';

const styles = StyleSheet.create({
  card: {
    borderRadius: ScaledSize.SIZE_8,

    shadowColor: Colors.BLACK,
    shadowOffset: { width: ScaledSize.ZERO, height: ScaledSize.SIZE_1 },
    shadowOpacity: 0.25,
    shadowRadius: ScaledSize.SIZE_2,
    elevation: ScaledSize.SIZE_2, // Shadow for Android
  },
  container: {
    rowGap: ScaledSize.SIZE_10,
    backgroundColor: Colors.GREY_100,
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

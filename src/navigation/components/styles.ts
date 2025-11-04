import { StyleSheet } from 'react-native';

import { Colors } from '@/src/common/theme/colors';
import { FONT_TYPE_REGULAR, getFont } from '@/src/common/theme/fonts';
import { ScaledSize, Size } from '@/src/common/theme/sizes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GREY_50,
  },
  background: {
    flex: 1,
    borderRadius: ScaledSize.SIZE_8,
    borderTopWidth: Size.ZERO,
  },
  tabBar: {
    backgroundColor: Colors.TRANSPARENT,
    borderRadius: ScaledSize.SIZE_8,
    height: ScaledSize.SIZE_70,
    paddingTop: ScaledSize.SIZE_8,
    marginHorizontal: ScaledSize.SIZE_15,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: ScaledSize.ZERO,
      height: ScaledSize.SIZE_2,
    },
    elevation: ScaledSize.SIZE_2,
    shadowOpacity: 0.25,
    shadowRadius: Size.SIZE_2,
  },
  tabBarLabel: {
    fontFamily: getFont(FONT_TYPE_REGULAR),
    fontSize: ScaledSize.SIZE_12,
  },
});

export default styles;

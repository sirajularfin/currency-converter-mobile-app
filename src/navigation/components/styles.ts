import { StyleSheet } from 'react-native';

import globalStyles from '@/src/common/styles/globals';
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
    ...globalStyles.shadow,
    backgroundColor: Colors.TRANSPARENT,
    borderRadius: ScaledSize.SIZE_8,
    height: ScaledSize.SIZE_70,
    paddingTop: ScaledSize.SIZE_8,
    marginHorizontal: ScaledSize.SIZE_15,
  },
  tabBarLabel: {
    fontFamily: getFont(FONT_TYPE_REGULAR),
    fontSize: ScaledSize.SIZE_12,
  },
});

export default styles;

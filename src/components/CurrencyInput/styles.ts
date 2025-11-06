import globalStyles from '@/src/common/styles/globals';
import { Colors } from '@/src/common/theme/colors';
import { FONT_TYPE_REGULAR, getFont } from '@/src/common/theme/fonts';
import { ScaledSize } from '@/src/common/theme/sizes';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,

    flexDirection: 'row',
    alignItems: 'center',

    borderWidth: ScaledSize.SIZE_1,
    borderColor: Colors.INDIGO_800,
    borderRadius: ScaledSize.SIZE_8,

    paddingHorizontal: ScaledSize.SIZE_20,
    height: ScaledSize.SIZE_60,
  },
  input: {
    flex: 1,

    color: Colors.BLACK,
    fontSize: ScaledSize.SIZE_16,
    fontFamily: getFont(FONT_TYPE_REGULAR),
  },
  flagImage: {
    width: ScaledSize.SIZE_40,
    height: ScaledSize.SIZE_27,
    borderRadius: ScaledSize.SIZE_4,
  },
  hintText: {
    marginTop: ScaledSize.SIZE_2,
    marginLeft: ScaledSize.SIZE_8,
  },
  overlay: {
    backgroundColor: Colors.BLACK_OPACITY_50,

    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  dropdown: {
    ...globalStyles.shadow,
    backgroundColor: Colors.GREY_100,

    borderTopLeftRadius: ScaledSize.SIZE_40,
    borderTopRightRadius: ScaledSize.SIZE_40,

    paddingTop: ScaledSize.SIZE_30,
    paddingHorizontal: ScaledSize.SIZE_20,
    width: '100%',
  },
  dropdownIndicator: {
    backgroundColor: Colors.GREY_400,
    width: ScaledSize.SIZE_40,
    height: ScaledSize.SIZE_4,
    alignSelf: 'center',
    borderRadius: ScaledSize.SIZE_2,
    marginBottom: ScaledSize.SIZE_20,
  },
  dropdownItem: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: ScaledSize.SIZE_10,

    paddingVertical: ScaledSize.SIZE_8,
  },
  dropdownFlag: {
    width: ScaledSize.SIZE_30,
    height: ScaledSize.SIZE_20,
    borderRadius: ScaledSize.SIZE_4,
  },
});

export default styles;

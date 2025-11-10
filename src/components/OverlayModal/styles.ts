import { StyleSheet } from 'react-native';

import globalStyles from '@/src/common/styles/globals';
import { Colors } from '@/src/common/theme/colors';
import { ScaledSize } from '@/src/common/theme/sizes';

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: Colors.BLACK_OPACITY_50,

    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container: {
    ...globalStyles.shadow,
    backgroundColor: Colors.GREY_100,

    borderTopLeftRadius: ScaledSize.SIZE_40,
    borderTopRightRadius: ScaledSize.SIZE_40,

    paddingTop: ScaledSize.SIZE_30,
    paddingHorizontal: ScaledSize.SIZE_20,
    height: ScaledSize.SIZE_400,
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
});

export default styles;

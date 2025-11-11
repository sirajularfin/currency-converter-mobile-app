import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { ScaledSize } from '../theme/sizes';

const globalStyles = StyleSheet.create({
  heading: {
    paddingBottom: ScaledSize.SIZE_10,
  },
  flexContainer: {
    flex: 1,
    paddingTop: ScaledSize.SIZE_10,
    paddingHorizontal: ScaledSize.SIZE_20,
  },
  shadow: {
    shadowColor: Colors.BLACK,
    shadowOffset: { width: ScaledSize.ZERO, height: ScaledSize.SIZE_2 },
    shadowOpacity: 0.25,
    shadowRadius: ScaledSize.SIZE_2,
    elevation: ScaledSize.SIZE_2, // Shadow for Android
  },
});

export default globalStyles;

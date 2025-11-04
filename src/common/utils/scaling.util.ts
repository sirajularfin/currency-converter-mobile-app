import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters/extend';

//Use a smaller scaling factor (0.1 to 0.2) for body text to maintain consistency.
//Use a larger factor (0.3 to 0.5) for headers or titles to give them a more dynamic presence across screen sizes.
const DEFAULT_FONT_SCALING_FACTOR = 0.2;
const DEFAULT_DIMENSION_SCALING_FACTOR = 0.4;

export const scaledFontSize = (
  size: number,
  factor = DEFAULT_FONT_SCALING_FACTOR,
): number => moderateScaledSize(size, factor);

export const scaledDimensionSize = (
  size: number,
  factor = DEFAULT_DIMENSION_SCALING_FACTOR,
): number => moderateScaledSize(size, factor);

export const scaledSize = (size: number): number => scale(size);
export const verticalScaledSize = (size: number): number => verticalScale(size);
export const moderateScaledSize = (size: number, factor?: number): number =>
  moderateScale(size, factor);
export const moderateVerticalScaledSize = (
  size: number,
  factor?: number,
): number => moderateVerticalScale(size, factor);

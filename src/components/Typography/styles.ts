import { I18nManager, StyleSheet, TextStyle } from 'react-native';

import {
  FONT_TYPE_MEDIUM,
  FONT_TYPE_REGULAR,
  FONT_TYPE_SEMIBOLD,
  getFont,
} from '@/src/common/theme/fonts';
import { ScaledSize } from '@/src/common/theme/sizes';
import { scaledFontSize } from '@/src/common/utils/scaling.util';

export interface Props {
  color?: TextStyle['color'];
  align?: TextStyle['textAlign'];
  weight?: TextStyle['fontWeight'];
  useLineHeight?: boolean;
}

const DEFAULT_LINE_HEIGHT_SCALING_FACTOR = 0.4;

const styles = ({
  useLineHeight,
  color,
  align = I18nManager.isRTL ? 'right' : 'left',
  weight,
}: Props) =>
  StyleSheet.create({
    //Heading
    headingLarge: {
      fontSize: ScaledSize.SIZE_24,
      fontFamily: getFont(FONT_TYPE_SEMIBOLD),
      lineHeight: useLineHeight
        ? scaledFontSize(30, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    headingMedium: {
      fontSize: ScaledSize.SIZE_20,
      fontFamily: getFont(FONT_TYPE_SEMIBOLD),
      lineHeight: useLineHeight
        ? scaledFontSize(24, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    headingSmall: {
      fontSize: ScaledSize.SIZE_16,
      fontFamily: getFont(FONT_TYPE_SEMIBOLD),
      lineHeight: useLineHeight
        ? scaledFontSize(20, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },

    //Body
    bodyLarge: {
      fontSize: ScaledSize.SIZE_16,
      fontFamily: getFont(FONT_TYPE_REGULAR),
      lineHeight: useLineHeight
        ? scaledFontSize(24, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    bodyMedium: {
      fontSize: ScaledSize.SIZE_14,
      fontFamily: getFont(FONT_TYPE_REGULAR),
      lineHeight: useLineHeight
        ? scaledFontSize(20, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    bodySmall: {
      fontSize: ScaledSize.SIZE_12,
      fontFamily: getFont(FONT_TYPE_REGULAR),
      lineHeight: useLineHeight
        ? scaledFontSize(16, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },

    //Label
    labelLarge: {
      fontSize: ScaledSize.SIZE_14,
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(20, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    labelMedium: {
      fontSize: ScaledSize.SIZE_12,
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(16, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    labelSmall: {
      fontSize: ScaledSize.SIZE_11,
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(16, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },

    shared: {
      color: color,
      textAlign: align,
    },
    weight: {
      fontWeight: weight,
    },
  });

export default styles;

import { I18nManager, StyleSheet, TextStyle } from 'react-native';

import { Colors } from '@/src/common/theme/colors';
import {
  FONT_TYPE_BOLD,
  FONT_TYPE_MEDIUM,
  FONT_TYPE_REGULAR,
  FONT_TYPE_SEMIBOLD,
  getFont,
} from '@/src/common/theme/fonts';
import { ScaledSize } from '@/src/common/theme/sizes';
import { scaledFontSize } from '@/src/common/utils/scaling.util';

export interface Props {
  color?: Colors;
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
    // Display - Largest text (optional, for hero sections)
    displayLarge: {
      fontSize: ScaledSize.SIZE_57,
      fontFamily: getFont(FONT_TYPE_REGULAR),
      lineHeight: useLineHeight
        ? scaledFontSize(64, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
      letterSpacing: -0.25,
    },
    displayMedium: {
      fontSize: ScaledSize.SIZE_45,
      fontFamily: getFont(FONT_TYPE_REGULAR),
      lineHeight: useLineHeight
        ? scaledFontSize(52, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    displaySmall: {
      fontSize: ScaledSize.SIZE_36,
      fontFamily: getFont(FONT_TYPE_REGULAR),
      lineHeight: useLineHeight
        ? scaledFontSize(44, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },

    // Heading - Page titles and section headers
    headingLarge: {
      fontSize: ScaledSize.SIZE_32,
      fontFamily: getFont(FONT_TYPE_BOLD),
      lineHeight: useLineHeight
        ? scaledFontSize(40, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
      letterSpacing: 0,
    },
    headingMedium: {
      fontSize: ScaledSize.SIZE_28,
      fontFamily: getFont(FONT_TYPE_SEMIBOLD),
      lineHeight: useLineHeight
        ? scaledFontSize(36, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
      letterSpacing: 0,
    },
    headingSmall: {
      fontSize: ScaledSize.SIZE_24,
      fontFamily: getFont(FONT_TYPE_SEMIBOLD),
      lineHeight: useLineHeight
        ? scaledFontSize(32, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
      letterSpacing: 0,
    },

    // Title - Subsection headers
    titleLarge: {
      fontSize: ScaledSize.SIZE_22,
      fontFamily: getFont(FONT_TYPE_SEMIBOLD),
      lineHeight: useLineHeight
        ? scaledFontSize(28, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
      letterSpacing: 0,
    },
    titleMedium: {
      fontSize: ScaledSize.SIZE_16,
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(24, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
      letterSpacing: 0.15,
    },
    titleSmall: {
      fontSize: ScaledSize.SIZE_14,
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(20, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
      letterSpacing: 0.1,
    },

    // Body - Main content text
    bodyLarge: {
      fontSize: ScaledSize.SIZE_16,
      fontFamily: getFont(FONT_TYPE_REGULAR),
      lineHeight: useLineHeight
        ? scaledFontSize(24, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
      letterSpacing: 0.5,
    },
    bodyMedium: {
      fontSize: ScaledSize.SIZE_14,
      fontFamily: getFont(FONT_TYPE_REGULAR),
      lineHeight: useLineHeight
        ? scaledFontSize(20, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
      letterSpacing: 0.25,
    },
    bodySmall: {
      fontSize: ScaledSize.SIZE_12,
      fontFamily: getFont(FONT_TYPE_REGULAR),
      lineHeight: useLineHeight
        ? scaledFontSize(16, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
      letterSpacing: 0.4,
    },

    // Label - UI elements (buttons, tabs, etc.)
    labelLarge: {
      fontSize: ScaledSize.SIZE_14,
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(20, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
      letterSpacing: 0.1,
    },
    labelMedium: {
      fontSize: ScaledSize.SIZE_12,
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(16, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
      letterSpacing: 0.5,
    },
    labelSmall: {
      fontSize: ScaledSize.SIZE_11,
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(16, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
      letterSpacing: 0.5,
    },

    // Caption - Small descriptive text
    caption: {
      fontSize: ScaledSize.SIZE_12,
      fontFamily: getFont(FONT_TYPE_REGULAR),
      lineHeight: useLineHeight
        ? scaledFontSize(16, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
      letterSpacing: 0.4,
    },

    // Overline - Small uppercase labels
    overline: {
      fontSize: ScaledSize.SIZE_10,
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(16, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
      letterSpacing: 1.5,
      textTransform: 'uppercase',
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

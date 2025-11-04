/* eslint-disable no-magic-numbers */
import { I18nManager, StyleSheet, TextStyle } from 'react-native';
import { scaledFontSize } from 'src/util/UiScaling.util';
import {
  FONT_TYPE_BOLD,
  FONT_TYPE_ITALIC,
  FONT_TYPE_LIGHT,
  FONT_TYPE_MEDIUM,
  FONT_TYPE_REGULAR,
  FONT_TYPE_SEMIBOLD,
  getFont,
} from '../../common/theme/fonts';

export interface Props {
  color?: TextStyle['color'];
  align?: 'left' | 'center' | 'right' | 'justify';
  weight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
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
    headingSmallRegular: {
      fontSize: scaledFontSize(16),
      fontFamily: getFont(FONT_TYPE_REGULAR),
      lineHeight: useLineHeight
        ? scaledFontSize(20, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    headingSmallMedium: {
      fontSize: scaledFontSize(16),
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(20, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    headingSmallMedium24LineHeight: {
      fontSize: scaledFontSize(16),
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(24, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    headingSmallSemiBold: {
      fontSize: scaledFontSize(16),
      fontFamily: getFont(FONT_TYPE_SEMIBOLD), // 600 weight
      lineHeight: useLineHeight
        ? scaledFontSize(20, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    headingSmallSemiBoldLineHeight24: {
      fontSize: scaledFontSize(16),
      fontFamily: getFont(FONT_TYPE_SEMIBOLD),
      lineHeight: useLineHeight
        ? scaledFontSize(24, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    headingNormalMedium: {
      fontSize: scaledFontSize(20),
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(24, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    headingNormalRegular: {
      fontSize: scaledFontSize(20),
      fontFamily: getFont(FONT_TYPE_REGULAR),
      lineHeight: useLineHeight
        ? scaledFontSize(24, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    headingNormalSemiBold: {
      fontSize: scaledFontSize(20),
      fontFamily: getFont(FONT_TYPE_SEMIBOLD),
      lineHeight: useLineHeight
        ? scaledFontSize(24, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    headingLargeRegular: {
      fontSize: scaledFontSize(24),
      fontFamily: getFont(FONT_TYPE_REGULAR),
      lineHeight: useLineHeight
        ? scaledFontSize(30, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    headingLargeMedium: {
      fontSize: scaledFontSize(24),
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(30, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    headingLargeSemiBold: {
      fontSize: scaledFontSize(24),
      fontFamily: getFont(FONT_TYPE_SEMIBOLD),
      lineHeight: useLineHeight
        ? scaledFontSize(30, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    heading34SemiBold: {
      fontSize: scaledFontSize(34),
      fontFamily: getFont(FONT_TYPE_SEMIBOLD),
      lineHeight: useLineHeight
        ? scaledFontSize(42, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    heading42Medium: {
      fontSize: scaledFontSize(42),
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(48, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },

    //Paragraph
    paragraphSmallRegular: {
      fontSize: scaledFontSize(12),
      fontFamily: getFont(FONT_TYPE_REGULAR),
      lineHeight: useLineHeight
        ? scaledFontSize(15, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    paragraphSmallMedium: {
      fontSize: scaledFontSize(12),
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(14, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    paragraphSmallMediumLineHeight18: {
      fontSize: scaledFontSize(12),
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(18, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    paragraphSmallMediumLineHeight16: {
      fontSize: scaledFontSize(10),
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(16, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    paragraphSmallSemiBold: {
      fontSize: scaledFontSize(12),
      fontFamily: getFont(FONT_TYPE_SEMIBOLD),
      lineHeight: useLineHeight
        ? scaledFontSize(14, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    paragraphNormalRegular: {
      fontSize: scaledFontSize(14),
      fontFamily: getFont(FONT_TYPE_REGULAR),
      lineHeight: useLineHeight
        ? scaledFontSize(18, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    paragraphNormalRegularLineHeight20: {
      fontSize: scaledFontSize(14),
      fontFamily: getFont(FONT_TYPE_REGULAR),
      lineHeight: useLineHeight
        ? scaledFontSize(20, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    paragraphNormalItalicLineHeight20: {
      fontSize: scaledFontSize(14),
      fontFamily: getFont(FONT_TYPE_ITALIC),
      lineHeight: useLineHeight
        ? scaledFontSize(20, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    paragraphNormalMedium: {
      fontSize: scaledFontSize(14),
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(18, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    paragraphNormalMediumLineHeight20: {
      fontSize: scaledFontSize(14),
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(20, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    paragraphNormalSemiBold: {
      fontSize: scaledFontSize(14),
      fontFamily: getFont(FONT_TYPE_SEMIBOLD),
      lineHeight: useLineHeight
        ? scaledFontSize(18, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    paragraphMediumRegular: {
      fontSize: scaledFontSize(16),
      fontFamily: getFont(FONT_TYPE_REGULAR),
      lineHeight: useLineHeight
        ? scaledFontSize(26, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    paragraphLargeRegular: {
      fontSize: scaledFontSize(18),
      fontFamily: getFont(FONT_TYPE_REGULAR),
      lineHeight: useLineHeight
        ? scaledFontSize(23, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    paragraphLargeMedium: {
      fontSize: scaledFontSize(18),
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(23, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    paragraphLargeSemiBold: {
      fontSize: scaledFontSize(18),
      fontFamily: getFont(FONT_TYPE_SEMIBOLD),
      lineHeight: useLineHeight
        ? scaledFontSize(23, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },

    //Label
    labelSmallRegular: {
      fontSize: scaledFontSize(12),
      fontFamily: getFont(FONT_TYPE_REGULAR),
      lineHeight: useLineHeight
        ? scaledFontSize(16, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    labelSmallLight: {
      fontSize: scaledFontSize(12),
      fontFamily: getFont(FONT_TYPE_LIGHT),
      lineHeight: useLineHeight
        ? scaledFontSize(16, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    labelSmallMedium16LineHeight: {
      fontSize: scaledFontSize(12),
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(16, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    labelSmallMedium: {
      fontSize: scaledFontSize(12),
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(14, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    labelSmallSemiBold: {
      fontSize: scaledFontSize(12),
      fontFamily: getFont(FONT_TYPE_SEMIBOLD),
      lineHeight: useLineHeight
        ? scaledFontSize(14, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    labelSmallSemiBoldLineHeight16: {
      fontSize: scaledFontSize(12),
      fontFamily: getFont(FONT_TYPE_SEMIBOLD),
      lineHeight: useLineHeight
        ? scaledFontSize(16, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    labelNormalRegular: {
      fontSize: scaledFontSize(14),
      fontFamily: getFont(FONT_TYPE_REGULAR),
      lineHeight: useLineHeight
        ? scaledFontSize(18, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    labelNormalMedium: {
      fontSize: scaledFontSize(14),
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(18, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    labelNormalSemiBold: {
      fontSize: scaledFontSize(14),
      fontFamily: getFont(FONT_TYPE_SEMIBOLD),
      lineHeight: useLineHeight
        ? scaledFontSize(18, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    labelNormalBold: {
      fontSize: scaledFontSize(14),
      fontFamily: getFont(FONT_TYPE_BOLD),
      lineHeight: useLineHeight
        ? scaledFontSize(18, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    labelLargeRegular: {
      fontSize: scaledFontSize(16),
      fontFamily: getFont(FONT_TYPE_REGULAR),
      lineHeight: useLineHeight
        ? scaledFontSize(20, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    labelLargeMedium: {
      fontSize: scaledFontSize(16),
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(20, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    labelLargeSemiBold: {
      fontSize: scaledFontSize(16),
      fontFamily: getFont(FONT_TYPE_SEMIBOLD),
      lineHeight: useLineHeight
        ? scaledFontSize(20, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    label20Regular: {
      fontSize: scaledFontSize(20),
      fontFamily: getFont(FONT_TYPE_REGULAR),
      lineHeight: useLineHeight
        ? scaledFontSize(24, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    label20Medium: {
      fontSize: scaledFontSize(20),
      fontFamily: getFont(FONT_TYPE_MEDIUM),
      lineHeight: useLineHeight
        ? scaledFontSize(24, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
        : undefined,
    },
    label20SemiBold: {
      fontSize: scaledFontSize(20),
      fontFamily: getFont(FONT_TYPE_SEMIBOLD),
      lineHeight: useLineHeight
        ? scaledFontSize(24, DEFAULT_LINE_HEIGHT_SCALING_FACTOR)
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

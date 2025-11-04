import { isIos } from '@/src/common/utils/device.util';

export const FONT_TYPE_BLACK = 'Black';
export const FONT_TYPE_BOLD = 'Bold';
export const FONT_TYPE_LIGHT = 'Light';
export const FONT_TYPE_MEDIUM = 'Medium';
export const FONT_TYPE_SEMIBOLD = 'SemiBold';
export const FONT_TYPE_REGULAR = 'Regular';
export const FONT_TYPE_ITALIC = 'Italic';
export const FONT_TYPE_BOLD_ITALIC = 'BoldItalic';

type TFontType =
  | typeof FONT_TYPE_BLACK
  | typeof FONT_TYPE_BOLD
  | typeof FONT_TYPE_LIGHT
  | typeof FONT_TYPE_MEDIUM
  | typeof FONT_TYPE_SEMIBOLD
  | typeof FONT_TYPE_REGULAR
  | typeof FONT_TYPE_ITALIC
  | typeof FONT_TYPE_BOLD_ITALIC;

export const getFont = (tag: TFontType = FONT_TYPE_REGULAR): string => {
  switch (tag) {
    case FONT_TYPE_BLACK:
      return FONTS_POPPINS.Black;
    case FONT_TYPE_BOLD:
      return FONTS_POPPINS.Bold;
    case FONT_TYPE_LIGHT:
      return FONTS_POPPINS.Light;
    case FONT_TYPE_MEDIUM:
      return FONTS_POPPINS.Medium;
    case FONT_TYPE_SEMIBOLD:
      return FONTS_POPPINS.SemiBold;
    case FONT_TYPE_ITALIC:
      return FONTS_POPPINS.Italic;
    case FONT_TYPE_BOLD_ITALIC:
      return FONTS_POPPINS.BoldItalic;
    case FONT_TYPE_REGULAR:
    default:
      return FONTS_POPPINS.Regular;
  }
};

const FONTS_POPPINS = {
  Black: isIos() ? 'Poppins-Black' : 'Poppins Black',
  Bold: isIos() ? 'Poppins-Bold' : 'Poppins Bold',
  Light: isIos() ? 'Poppins-Light' : 'Poppins Light',
  Medium: isIos() ? 'Poppins-Medium' : 'Poppins Medium',
  SemiBold: isIos() ? 'Poppins-SemiBold' : 'Poppins SemiBold',
  Regular: isIos() ? 'Poppins-Regular' : 'Poppins Regular',
  Italic: isIos() ? 'Poppins-Italic' : 'Poppins Italic',
  BoldItalic: isIos() ? 'Poppins-BoldItalic' : 'Poppins BoldItalic',
};

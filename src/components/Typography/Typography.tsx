import React, { PropsWithChildren } from 'react';
import { Text, TextProps } from 'react-native';

import styles, { Props as StylesProps } from './styles';

export enum Variant {
  //Heading
  headingSmallRegular = 'headingSmallRegular',
  headingSmallMedium = 'headingSmallMedium',
  headingSmallMedium24LineHeight = 'headingSmallMedium24LineHeight',
  headingSmallSemiBold = 'headingSmallSemiBold',
  headingSmallSemiBoldLineHeight24 = 'headingSmallSemiBoldLineHeight24',
  headingNormalRegular = 'headingNormalRegular',
  headingNormalMedium = 'headingNormalMedium',
  headingNormalSemiBold = 'headingNormalSemiBold',
  headingLargeRegular = 'headingLargeRegular',
  headingLargeMedium = 'headingLargeMedium',
  headingLargeSemiBold = 'headingLargeSemiBold',
  heading34SemiBold = 'heading34SemiBold',
  heading42Medium = 'heading42Medium',

  //Paragraph
  paragraphSmallRegular = 'paragraphSmallRegular',
  paragraphSmallMedium = 'paragraphSmallMedium',
  paragraphSmallMediumLineHeight18 = 'paragraphSmallMediumLineHeight18',
  paragraphSmallMediumLineHeight16 = 'paragraphSmallMediumLineHeight16',
  paragraphSmallSemiBold = 'paragraphSmallSemiBold',
  paragraphNormalRegular = 'paragraphNormalRegular',
  paragraphNormalRegularLineHeight20 = 'paragraphNormalRegularLineHeight20',
  paragraphNormalItalicLineHeight20 = 'paragraphNormalItalicLineHeight20',
  paragraphNormalMedium = 'paragraphNormalMedium',
  paragraphNormalMediumLineHeight20 = 'paragraphNormalMediumLineHeight20',
  paragraphNormalSemiBold = 'paragraphNormalSemiBold',
  paragraphMediumRegular = 'paragraphMediumRegular',
  paragraphLargeRegular = 'paragraphLargeRegular',
  paragraphLargeMedium = 'paragraphLargeMedium',
  paragraphLargeSemiBold = 'paragraphLargeSemiBold',

  //Label
  labelSmallRegular = 'labelSmallRegular',
  labelSmallLight = 'labelSmallLight',
  labelSmallMedium16LineHeight = 'labelSmallMedium16LineHeight',
  labelSmallMedium = 'labelSmallMedium',
  labelSmallSemiBoldLineHeight16 = 'labelSmallSemiBoldLineHeight16',
  labelSmallSemiBold = 'labelSmallSemiBold',
  labelNormalRegular = 'labelNormalRegular',
  labelNormalMedium = 'labelNormalMedium',
  labelNormalSemiBold = 'labelNormalSemiBold',
  labelNormalBold = 'labelNormalBold',
  labelLargeRegular = 'labelLargeRegular',
  labelLargeMedium = 'labelLargeMedium',
  labelLargeSemiBold = 'labelLargeSemiBold',
  label20Regular = 'label20Regular',
  label20Medium = 'label20Medium',
  label20SemiBold = 'label20SemiBold',
}

export interface Props
  extends StylesProps,
    Pick<
      TextProps,
      | 'numberOfLines'
      | 'ellipsizeMode'
      | 'allowFontScaling'
      | 'adjustsFontSizeToFit'
    > {
  variant?: Variant;
  useLineHeight?: boolean;
  onPress?: () => void;
}

const Typography: React.FC<PropsWithChildren<Props>> = ({
  children,
  variant,
  useLineHeight = false,
  onPress,
  ...props
}) => {
  const styleSheets = styles({ useLineHeight, ...props });

  return (
    <Text
      numberOfLines={props.numberOfLines}
      ellipsizeMode={props.ellipsizeMode}
      allowFontScaling={props.allowFontScaling ?? true}
      adjustsFontSizeToFit={props.adjustsFontSizeToFit ?? false}
      style={[
        styleSheets[variant as keyof typeof styleSheets],
        styleSheets.shared,
        props.weight && styleSheets.weight,
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

export default Typography;

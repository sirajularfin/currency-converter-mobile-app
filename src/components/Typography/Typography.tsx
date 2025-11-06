import React, { PropsWithChildren } from 'react';
import { Text, TextProps } from 'react-native';

import styles, { Props as StylesProps } from './styles';

export enum Variant {
  displayLarge = 'displayLarge',
  displayMedium = 'displayMedium',
  displaySmall = 'displaySmall',
  headingLarge = 'headingLarge',
  headingMedium = 'headingMedium',
  headingSmall = 'headingSmall',
  titleLarge = 'titleLarge',
  titleMedium = 'titleMedium',
  titleSmall = 'titleSmall',
  bodyLarge = 'bodyLarge',
  bodyMedium = 'bodyMedium',
  bodySmall = 'bodySmall',
  labelLarge = 'labelLarge',
  labelMedium = 'labelMedium',
  labelSmall = 'labelSmall',
  caption = 'caption',
  overline = 'overline',
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

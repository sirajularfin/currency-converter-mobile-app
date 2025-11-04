import React, { PropsWithChildren } from 'react';
import { Pressable, PressableProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Colors } from '@/src/common/theme/colors';
import { buildTestId } from '@/src/common/utils/string.util';
import Typography, { Variant } from '@/src/components/Typography/Typography';
import styles from './styles';

interface IProps extends PressableProps {}

const Button: React.FC<PropsWithChildren<IProps>> = ({
  children,
  ...props
}) => {
  return (
    <Pressable
      {...props}
      {...buildTestId(`button_${children}`)}
      style={({ pressed }) => [
        {
          transform: [{ scale: pressed ? 0.99 : 1 }],
          opacity: pressed ? 0.9 : 1,
        },
      ]}
    >
      <LinearGradient
        colors={[Colors.INDIGO_800, Colors.BLUE_700]}
        start={{ x: 1, y: 0.5 }}
        end={{ x: 0, y: 0.5 }}
        style={styles.container}
      >
        <Typography variant={Variant.bodyLarge} color={Colors.WHITE}>
          {children}
        </Typography>
      </LinearGradient>
    </Pressable>
  );
};

export default Button;

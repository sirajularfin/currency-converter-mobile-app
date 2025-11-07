import React, { PropsWithChildren, useRef } from 'react';
import { Animated, Pressable, PressableProps } from 'react-native';
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
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 0.96,
        useNativeDriver: true,
        friction: 4,
        tension: 100,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        friction: 4,
        tension: 100,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Pressable
      {...props}
      {...buildTestId(`button_${children}`)}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={styles.pressable}
    >
      <Animated.View
        style={{
          transform: [{ scale: scaleAnim }],
          opacity: opacityAnim,
        }}
      >
        <LinearGradient
          colors={
            props.disabled
              ? [Colors.GREY_300, Colors.GREY_300]
              : [Colors.INDIGO_800, Colors.BLUE_700]
          }
          start={{ x: 1, y: 0.5 }}
          end={{ x: 0, y: 0.5 }}
          style={styles.container}
        >
          <Typography
            variant={Variant.labelLarge}
            color={props.disabled ? Colors.GREY_600 : Colors.WHITE}
          >
            {children}
          </Typography>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
};

export default Button;

import React from 'react';
import { Pressable, PressableProps } from 'react-native';

interface IProps extends PressableProps {}

const Button: React.FC<IProps> = ({ ...props }) => {
  return <Pressable {...props} />;
};

export default Button;

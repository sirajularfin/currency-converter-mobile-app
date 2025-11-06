import React, { PropsWithChildren } from 'react';
import { StatusBar, StatusBarProps, View } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ScaledSize } from '@/src/common/theme/sizes';
import { DEFAULT_VALUE_ZERO } from '@/src/common/types/constants';
import styles from './styles';

interface IProps extends StatusBarProps {
  fullScreen?: boolean;
  headerMargin?: number;
}

const MainLayout: React.FC<PropsWithChildren<IProps>> = ({
  children,
  fullScreen = false,
  headerMargin = ScaledSize.SIZE_10,
  ...props
}) => {
  const { top } = useSafeAreaInsets();
  const finalHeaderPadding = top > DEFAULT_VALUE_ZERO ? top : headerMargin;

  changeNavigationBarColor(String(props.backgroundColor), true);

  return (
    <View
      style={{
        backgroundColor: props.backgroundColor,
        paddingTop: fullScreen ? DEFAULT_VALUE_ZERO : finalHeaderPadding,
        ...styles.container,
      }}
    >
      <StatusBar
        translucent={props.translucent}
        backgroundColor={props.backgroundColor}
        barStyle={props.barStyle}
        {...props}
      />
      {children}
    </View>
  );
};

export default MainLayout;

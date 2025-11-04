import React, { PropsWithChildren } from 'react';
import { StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Colors } from '@/src/common/theme/colors';
import { ScaledSize } from '@/src/common/theme/sizes';
import { DEFAULT_VALUE_ZERO } from '@/src/common/types/constants';
import styles from './styles';

interface IProps {
  headerMargin?: number;
  backgroundColor?: keyof typeof Colors;
  enableStatusBar?: boolean;
  statusBarStyle?: 'light-content' | 'dark-content';
  statusBarBackgroundColor?: string;
}

const MainLayout: React.FC<PropsWithChildren<IProps>> = ({
  children,
  headerMargin = ScaledSize.SIZE_25,
  backgroundColor,
  enableStatusBar = true,
  statusBarStyle = 'dark-content',
  statusBarBackgroundColor = 'transparent',
}) => {
  const { top } = useSafeAreaInsets();
  const finalHeaderMargin = top > DEFAULT_VALUE_ZERO ? top : headerMargin;

  return (
    <View
      style={{
        backgroundColor,
        marginTop: finalHeaderMargin,
        ...styles.container,
      }}
    >
      <StatusBar
        translucent={enableStatusBar}
        backgroundColor={statusBarBackgroundColor}
        barStyle={statusBarStyle}
      />
      {children}
    </View>
  );
};

export default MainLayout;

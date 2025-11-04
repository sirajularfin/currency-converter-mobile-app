import React from 'react';
import { Text } from 'react-native';

import { API_ROUTES, RootNavigationProps } from '@/src/navigation/types';

const HomeScreen: React.FC<RootNavigationProps<API_ROUTES.HOME>> = () => {
  return <Text>Home Screen</Text>;
};

export default HomeScreen;

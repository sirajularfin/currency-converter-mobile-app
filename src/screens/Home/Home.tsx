import React from 'react';
import { Text } from 'react-native';

import MainLayout from '@/src/common/layouts/MainLayout';
import { API_ROUTES, RootNavigationProps } from '@/src/navigation/types';

const HomeScreen: React.FC<RootNavigationProps<API_ROUTES.HOME>> = () => {
  return (
    <MainLayout>
      <Text>Home Screen</Text>
    </MainLayout>
  );
};

export default HomeScreen;

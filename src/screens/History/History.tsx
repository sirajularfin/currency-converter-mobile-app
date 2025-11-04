import React from 'react';
import { Text } from 'react-native';

import MainLayout from '@/src/common/layouts/MainLayout';
import { API_ROUTES, RootNavigationProps } from '@/src/navigation/types';

const HistoryScreen: React.FC<RootNavigationProps<API_ROUTES.HISTORY>> = () => {
  return (
    <MainLayout>
      <Text>History Screen</Text>
    </MainLayout>
  );
};

export default HistoryScreen;

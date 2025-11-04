import React from 'react';
import { Text } from 'react-native';

import MainLayout from '@/src/common/layouts/MainLayout';
import { API_ROUTES, RootNavigationProps } from '@/src/navigation/types';

const ManageCurrenciesScreen: React.FC<
  RootNavigationProps<API_ROUTES.MANAGE_CURRENCIES>
> = () => {
  return (
    <MainLayout>
      <Text>Manage Currencies Screen</Text>
    </MainLayout>
  );
};

export default ManageCurrenciesScreen;

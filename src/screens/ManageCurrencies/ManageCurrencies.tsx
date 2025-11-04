import React from 'react';
import { Text } from 'react-native';

import { API_ROUTES, RootNavigationProps } from '@/src/navigation/types';

const ManageCurrenciesScreen: React.FC<
  RootNavigationProps<API_ROUTES.MANAGE_CURRENCIES>
> = () => {
  return <Text>Manage Currencies Screen</Text>;
};

export default ManageCurrenciesScreen;

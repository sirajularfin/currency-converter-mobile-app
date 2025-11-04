import React from 'react';
import { Text } from 'react-native';

import { API_ROUTES, RootNavigationProps } from '../../navigation/types';

const HistoryScreen: React.FC<RootNavigationProps<API_ROUTES.HISTORY>> = () => {
  return <Text>History Screen</Text>;
};

export default HistoryScreen;

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import BottomTabs from '@/src/navigation/components/BottomTabs';
import { API_ROUTES, navigationRef, Stack } from './types';

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={API_ROUTES.BOTTOM_TABS} component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

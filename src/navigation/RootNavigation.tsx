import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import HomeScreen from '../screens/Home/Home';
import { API_ROUTES, navigationRef, Stack } from './types';

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={API_ROUTES.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

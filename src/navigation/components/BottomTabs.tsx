import React from 'react';

import HistoryScreen from '../../screens/History/History';
import HomeScreen from '../../screens/Home/Home';
import ManageCurrenciesScreen from '../../screens/ManageCurrencies/ManageCurrencies';
import { API_ROUTES, Tab } from '../types';
import styles from './styles';

export default function BottomTabs() {
  const renderTabBarIcon = (routeName: string, focused: boolean) => {
    // You can customize icons based on routeName and focused state
    return null; // Placeholder for icon component
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIcon: ({ focused }) => renderTabBarIcon(route.name, focused),
      })}
    >
      <Tab.Screen name={API_ROUTES.HOME} component={HomeScreen} />
      <Tab.Screen name={API_ROUTES.HISTORY} component={HistoryScreen} />
      <Tab.Screen
        name={API_ROUTES.MANAGE_CURRENCIES}
        component={ManageCurrenciesScreen}
      />
    </Tab.Navigator>
  );
}

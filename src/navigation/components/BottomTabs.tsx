import { RouteProp } from '@react-navigation/native';
import React from 'react';

import { HistoryIcon, HomeIcon, ManageCurrencyIcon } from '../../assets';
import { Colors } from '../../common/theme/colors';
import HistoryScreen from '../../screens/History/History';
import HomeScreen from '../../screens/Home/Home';
import ManageCurrenciesScreen from '../../screens/ManageCurrencies/ManageCurrencies';
import { API_ROUTES, RootStackParamList, Tab } from '../types';
import styles from './styles';

export default function BottomTabs() {
  const renderTabBarIcon = (
    route: RouteProp<RootStackParamList, keyof RootStackParamList>,
    focused: boolean,
  ) => {
    switch (route.name) {
      case API_ROUTES.HOME:
        return focused ? (
          <HomeIcon color={Colors.white()} />
        ) : (
          <HomeIcon color={Colors.indigo[200]()} />
        );
      case API_ROUTES.HISTORY:
        return focused ? (
          <HistoryIcon color={Colors.white()} />
        ) : (
          <HistoryIcon color={Colors.indigo[200]()} />
        );
      case API_ROUTES.MANAGE_CURRENCIES:
        return focused ? (
          <ManageCurrencyIcon color={Colors.white()} />
        ) : (
          <ManageCurrencyIcon color={Colors.indigo[200]()} />
        );
      default:
        return null;
    }
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
        tabBarIcon: ({ focused }) => renderTabBarIcon(route, focused),
      })}
    >
      <Tab.Screen
        name={API_ROUTES.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name={API_ROUTES.MANAGE_CURRENCIES}
        component={ManageCurrenciesScreen}
        options={{
          tabBarLabel: 'Manage Currencies',
        }}
      />
      <Tab.Screen
        name={API_ROUTES.HISTORY}
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
        }}
      />
    </Tab.Navigator>
  );
}

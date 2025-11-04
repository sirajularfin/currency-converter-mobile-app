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
    const iconColor = focused ? Colors.white() : Colors.indigo[200]();
    const iconMap: {
      [key: string]: React.FC<{ color: string }>;
    } = {
      [API_ROUTES.HOME]: HomeIcon,
      [API_ROUTES.HISTORY]: HistoryIcon,
      [API_ROUTES.MANAGE_CURRENCIES]: ManageCurrencyIcon,
    };
    const IconComponent = iconMap[route.name];
    return IconComponent ? <IconComponent color={iconColor} /> : null;
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

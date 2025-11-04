import { RouteProp } from '@react-navigation/native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { HistoryIcon, HomeIcon, ManageCurrencyIcon } from '@/src/assets';
import { Colors } from '@/src/common/theme/colors';
import { ScaledSize } from '@/src/common/theme/sizes';
import { API_ROUTES, RootStackParamList, Tab } from '@/src/navigation/types';
import HistoryScreen from '@/src/screens/History/History';
import HomeScreen from '@/src/screens/Home/Home';
import ManageCurrenciesScreen from '@/src/screens/ManageCurrencies/ManageCurrencies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';

export default function BottomTabs() {
  const renderBackground = () => (
    <LinearGradient
      colors={[Colors.indigo[800](), Colors.blue[700]()]}
      start={{ x: 1, y: 0.5 }}
      end={{ x: 0, y: 0.5 }}
      style={styles.background}
    />
  );
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

  const { bottom } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          ...styles.tabBar,
          marginBottom: bottom > 0 ? bottom : ScaledSize.SIZE_15,
        },
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarActiveTintColor: Colors.white(),
        tabBarInactiveTintColor: Colors.indigo[200](),
        tabBarAccessibilityLabel: route.name,
        tabBarButtonTestID: `${route.name}-tab-button`,
        tabBarBackground: renderBackground,
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
          tabBarLabel: 'Manage Rates',
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

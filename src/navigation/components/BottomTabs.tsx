import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HistoryIcon, HomeIcon, ManageCurrencyIcon } from '@/src/assets';
import { Colors } from '@/src/common/theme/colors';
import { ScaledSize } from '@/src/common/theme/sizes';
import { API_ROUTES, RootStackParamList, Tab } from '@/src/navigation/types';
import HistoryScreen from '@/src/screens/History/History';
import HomeScreen from '@/src/screens/Home/Home';
import ManageCurrenciesScreen from '@/src/screens/ManageCurrencies/ManageCurrencies';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import styles from './styles';

const BottomTabs: React.FC = () => {
  const { bottom } = useSafeAreaInsets();

  const renderBackground = () => (
    <LinearGradient
      colors={[Colors.indigo[800](), Colors.blue[700]()]}
      start={{ x: 1, y: 0.5 }}
      end={{ x: 0, y: 0.5 }}
      style={styles.background}
    />
  );

  const renderTabButton = (props: Omit<BottomTabBarButtonProps, 'ref'>) => {
    const { style, ...rest } = props;
    return (
      <Pressable
        style={({ pressed }) => [
          style,
          {
            transform: [{ scale: pressed ? 1.05 : 1 }],
          },
        ]}
        {...rest}
      />
    );
  };

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
        tabBarButton: renderTabButton,
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
};

export default BottomTabs;

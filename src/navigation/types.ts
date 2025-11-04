import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNavigationContainerRef } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export enum API_ROUTES {
  HOME = 'HomeScreen',
  HISTORY = 'HistoryScreen',
  MANAGE_CURRENCIES = 'ManageCurrenciesScreen',
}

export type RootStackParamList = {
  [API_ROUTES.HOME]: undefined;
  [API_ROUTES.HISTORY]: undefined;
  [API_ROUTES.MANAGE_CURRENCIES]: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();
export const Tab = createBottomTabNavigator<RootStackParamList>();
export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export type RootNavigationProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

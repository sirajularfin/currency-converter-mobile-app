import React from 'react';
import { View } from 'react-native';

import MainLayout from '@/src/common/layouts/MainLayout';
import { Colors } from '@/src/common/theme/colors';
import Button from '@/src/components/Button/Button';
import { API_ROUTES, RootNavigationProps } from '@/src/navigation/types';
import styles from './styles';

const HomeScreen: React.FC<RootNavigationProps<API_ROUTES.HOME>> = () => {
  return (
    <MainLayout backgroundColor={Colors.GREY_50}>
      <View style={styles.container}>
        <Button
          onPress={() => {
            console.log('Convert button pressed');
          }}
        >
          Convert
        </Button>
      </View>
    </MainLayout>
  );
};

export default HomeScreen;

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StrictMode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigation from './navigation/RootNavigation';

function App() {
  return (
    <StrictMode>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </StrictMode>
  );
}

export default App;

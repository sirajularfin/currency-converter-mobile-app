import { StrictMode, useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigation from '@/src/navigation/RootNavigation';
import { CurrencyRateProvider } from './contexts/CurrencyRate/CurrencyRateContext';

function App() {
  useEffect(() => {
    // Hide splash screen when app is ready
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <StrictMode>
      <GestureHandlerRootView>
        <SafeAreaProvider>
          <CurrencyRateProvider>
            <RootNavigation />
          </CurrencyRateProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </StrictMode>
  );
}

export default App;

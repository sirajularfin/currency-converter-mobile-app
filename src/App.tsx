import { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppProviders } from '@/src/contexts/AppProviders';
import RootNavigation from '@/src/navigation/RootNavigation';

function App() {
  useEffect(() => {
    // Hide splash screen when app is ready
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <AppProviders>
          <RootNavigation />
        </AppProviders>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;

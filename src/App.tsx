import { StrictMode } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigation from '@/src/navigation/RootNavigation';

function App() {
  return (
    <StrictMode>
      <GestureHandlerRootView>
        <SafeAreaProvider>
          <RootNavigation />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </StrictMode>
  );
}

export default App;

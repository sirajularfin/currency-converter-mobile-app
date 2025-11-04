import 'react-native-gesture-handler';

import { StrictMode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigation from './navigation/RootNavigation';

function App() {
  return (
    <StrictMode>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </StrictMode>
  );
}

export default App;

import { StrictMode } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Colors } from './common/theme/colors';
import RootNavigation from './navigation/RootNavigation';

function App() {
  changeNavigationBarColor(Colors.WHITE, true);

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

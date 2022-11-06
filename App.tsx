import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import SplashScreen from 'react-native-splash-screen';
import SafeAreaScreen from './src/components/SafeAreaScreen';
import AppNavigation from './src/navigations/OnboardingNavigation';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  useEffect(() => {
    // RNBootSplash.hide({ fade: true });
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaScreen>
      <PaperProvider>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaScreen>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default App;

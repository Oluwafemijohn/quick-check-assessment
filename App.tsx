import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import SplashScreen from 'react-native-splash-screen';
import SafeAreaScreen from './src/components/SafeAreaScreen';
import MainScreen from './src/screens/MainScreen';

const App = () => {
  useEffect(() => {
    // RNBootSplash.hide({ fade: true });
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaScreen>
      <RecoilRoot>
        <NavigationContainer>
          {/* <AppNavigation /> */}
          {/* <Text>Hello</Text> */}
          <MainScreen />
        </NavigationContainer>
      </RecoilRoot>
    </SafeAreaScreen>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default App;

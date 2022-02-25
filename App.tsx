import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {RecoilRoot} from 'recoil';

import SafeAreaScreen from './src/components/SafeAreaScreen';

const App = () => {
  return (
    <SafeAreaScreen>
      <RecoilRoot>
        <NavigationContainer>
          <AppNavigation />
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

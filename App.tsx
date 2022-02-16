import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import SafeAreaScreen from './src/components/SafeAreaScreen';

const App = () => {
  return (
    <SafeAreaScreen>
      <NavigationContainer>
        <StatusBar />
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaScreen>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default App;

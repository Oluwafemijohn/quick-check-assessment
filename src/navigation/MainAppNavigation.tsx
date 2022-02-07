import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Constants from '../constants/Constants';
import {Image, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProductDetailsScreen from '../screens/others/ProductDetailsScreen';

const Stack = createNativeStackNavigator();

function MainAppNavigation() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../../assets/go-back-arrow.png')}
              style={styles.gobackArrow}
            />
          </Pressable>
        ),
        headerBackTitleVisible: false,
      }}>
      {/* <Stack.Screen
        name={Constants.ONBOARDING_SCREEN}
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name={Constants.ProductDetailsScreen}
        component={ProductDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  gobackArrow: {
    resizeMode: 'contain',
  },
});

export default MainAppNavigation;

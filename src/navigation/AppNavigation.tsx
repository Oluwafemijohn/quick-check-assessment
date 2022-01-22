import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/authentication/SignUpScreen';
import SignInScreen from '../screens/authentication/SignInScreen';
import OnboardingScreen from '../screens/authentication/OnboardingScreen';
import Constants from '../constants/Constants';
import OTPScreen from '../screens/authentication/OTPScreen';
import SignUpSuccessfulScreen from '../screens/authentication/SignUpSuccessfulScreen';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Constants.ONBOARDING_SCREEN}
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Constants.SIGN_UP_SCREEN}
        component={SignUpScreen}
        // options={{
        //     headerShown: false,
        // }}
      />
      <Stack.Screen
        name={Constants.SIGN_IN_SCREEN}
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Constants.OTPScreen}
        component={OTPScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Constants.SignUpSuccessfulScreen}
        component={SignUpSuccessfulScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Constants.TabNavigation}
        component={TabNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigation;

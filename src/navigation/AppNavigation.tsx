import React from 'react';
import SignUpScreen from '../screens/authentication/SignUpScreen';
import SignInScreen from '../screens/authentication/SignInScreen';
import OnboardingScreen from '../screens/authentication/OnboardingScreen';
import Constants from '../constants/Constants';
import OTPScreen from '../screens/authentication/OTPScreen';
import SignUpSuccessfulScreen from '../screens/authentication/SignUpSuccessfulScreen';
import TabNavigation from './TabNavigation';
import {Image, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SignUpPasswordScreen from '../screens/authentication/SignUpPasswordScreen';
import PasswordResetScreen from '../screens/authentication/PasswordResetScreen';
import ForgetPasswordScreen from '../screens/authentication/ForgetPasswordScreen';
import ForgetPasswordCheckEmailScreen from '../screens/authentication/ForgetPasswordCheckEmailScreen';
import PasswordResetSuccessfulScreen from '../screens/authentication/PasswordResetSuccessfulScreen';
import ForgetPasswordOTPScreen from '../screens/authentication/ForgetPasswordOTPScreen';
import ProductDetailsScreen from '../screens/others/ProductDetailsScreen';
import {createStackNavigator} from '@react-navigation/stack';
import AddReviewScreen from '../screens/others/AddReviewScreen';
import common from '../constants/common';
import ListScreen from '../screens/tab/ListScreen';
import ListDetailsScreen from '../screens/others/ListDetailsScreen';
import DeliveryDetailsScreen from '../screens/others/DeliveryDetailsScreen';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createStackNavigator();

function AppNavigation() {
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
        options={{
          headerTitle: 'Sign Up',
        }}
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
      <Stack.Screen
        name={Constants.SignUpPasswordScreen}
        component={SignUpPasswordScreen}
        options={{
          headerTitle: 'Sign Up',
        }}
      />
      <Stack.Screen
        name={Constants.ForgetPasswordScreen}
        component={ForgetPasswordScreen}
        options={{
          headerTitle: 'Forget password',
        }}
      />
      <Stack.Screen
        name={Constants.ForgetPasswordCheckEmailScreen}
        component={ForgetPasswordCheckEmailScreen}
        options={{
          headerTitle: 'Forget password',
        }}
      />
      <Stack.Screen
        name={Constants.PasswordResetScreen}
        component={PasswordResetScreen}
        options={{
          headerTitle: 'Password reset',
        }}
      />
      <Stack.Screen
        name={Constants.PasswordResetSuccessfulScreen}
        component={PasswordResetSuccessfulScreen}
        options={{
          headerTitle: 'Password reset',
        }}
      />
      <Stack.Screen
        name={Constants.ForgetPasswordOTPScreen}
        component={ForgetPasswordOTPScreen}
        options={{
          headerTitle: 'Password reset',
        }}
      />
      <Stack.Screen
        name={Constants.ProductDetailsScreen}
        component={ProductDetailsScreen}
        options={{
          headerTitle: 'Product Details',
        }}
      />
      <Stack.Screen
        name={Constants.AddReviewScreen}
        component={AddReviewScreen}
        options={{
          headerTitle: 'Add review',
        }}
      />
      <Stack.Screen name={Constants.ListScreen} component={ListScreen} />
      <Stack.Screen
        name={Constants.ListDetailsScreen}
        component={ListDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Constants.DeliveryDetailsScreen}
        component={DeliveryDetailsScreen}
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
    marginLeft: common.W_5,
  },
});

export default AppNavigation;

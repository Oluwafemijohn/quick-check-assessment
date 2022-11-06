import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteConstant from './RouteConstant';
import AppTabNavigation from './AppTabNavigation';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import GetStartedScreen from '../screens/GetStartedScreen';
import AppWebViewScreen from '../screens/AppWebViewScreen';



const Stack = createNativeStackNavigator();


function AppNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={RouteConstant.GetStarted}
                component={GetStartedScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={RouteConstant.RegisterScreen}
                component={RegisterScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={RouteConstant.LoginScreen}
                component={LoginScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={RouteConstant.AppTabNavigation}
                component={AppTabNavigation}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name={RouteConstant.AppWebViewScreen}
                component={AppWebViewScreen}
            // options={{
            //     headerShown: false,
            // }}
            />
            {/* <Stack.Screen
                name={RouteConstant.PinScreen}
                component={PinScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={RouteConstant.FaceIdScreen}
                component={FaceIdScreen}
                options={{
                    headerShown: false,
                }}
            /> */}
        </Stack.Navigator>
    );
}

export default AppNavigation;
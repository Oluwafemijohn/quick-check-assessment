import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteConstant from './RouteConstant';
import MainScreen from '../screens/Account';
import AppTabNavigation from './AppTabNavigation';
import RepaymentPlanScreen from '../screens/RepaymentPlanScreen';
import PinScreen from '../screens/PinScreen';
import FaceIdScreen from '../screens/FaceIdScreen';


const Stack = createNativeStackNavigator();


function AppNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={RouteConstant.AppTabNavigation}
                component={AppTabNavigation}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={RouteConstant.RepaymentPlanScreen}
                component={RepaymentPlanScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
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
            />
        </Stack.Navigator>
    );
}

export default AppNavigation;
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteConstant from './RouteConstant';
import MainScreen from '../screens/Account';


const Stack = createNativeStackNavigator();


function OnboardingNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={RouteConstant.Account}
                component={MainScreen}
                options={{
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    );
}

export default OnboardingNavigation;
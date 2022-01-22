import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Constants from '../constants/Constants';
import SearchScreen from '../screens/tab/SearchScreen';
import CategoryScreen from '../screens/tab/CategoryScreen';
import ProfileScreen from '../screens/tab/ProfileScreen';
import {View, StyleSheet, Image} from 'react-native';
import colors from '../constants/colors';
import common from '../constants/common';
import DashboardScreen from '../screens/tab/DashboardScreen';

const Tab = createBottomTabNavigator();
function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          height: common.WP(25),
          paddingHorizontal: 5,
          paddingVertical: 5,
          color: colors.white,
          borderTopWidth: 0,
          borderTopRightRadius: common.WP(5),
          borderTopLeftRadius: common.WP(5),
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name={Constants.DashboardScreen}
        component={DashboardScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <View style={styles.tabBarIconContainer}>
              {focused && (
                <Image
                  source={require('../../assets/selected-tab.png')}
                  style={styles.tabBarSelectedIcon}
                />
              )}
              <Image
                source={require('../../assets/dashboard.png')}
                style={styles.tabBarIcon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={Constants.SearchScreen}
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <View style={styles.tabBarIconContainer}>
              {focused && (
                <Image
                  source={require('../../assets/selected-tab.png')}
                  style={styles.tabBarSelectedIcon}
                />
              )}
              <Image
                source={require('../../assets/search-tab-icon.png')}
                style={styles.tabBarIcon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={Constants.CategoryScreen}
        component={CategoryScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <View style={styles.tabBarIconContainer}>
              {focused && (
                <Image
                  source={require('../../assets/selected-tab.png')}
                  style={styles.tabBarSelectedIcon}
                />
              )}
              <Image
                source={require('../../assets/category-tab-icon.png')}
                style={styles.tabBarIcon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={Constants.ProfileScreen}
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <View style={styles.tabBarIconContainer}>
              {focused && (
                <Image
                  source={require('../../assets/selected-tab.png')}
                  style={styles.tabBarSelectedIcon}
                />
              )}
              <Image
                source={require('../../assets/profile-tab-icon.png')}
                style={styles.tabBarIcon}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarIconContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colors.red,
  },
  tabBarIcon: {
    width: 30,
    height: 30,
  },
  tabBarSelectedIcon: {
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
  },
});

export default TabNavigation;

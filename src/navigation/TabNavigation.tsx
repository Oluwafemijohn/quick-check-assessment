import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Constants from '../constants/Constants';
import {View, StyleSheet, Image, Text} from 'react-native';
import colors from '../constants/colors';
import common from '../constants/common';
import HomeScreen from '../screens/tab/HomeScreen';
import ListScreen from '../screens/tab/ListScreen';
import CategoryScreen from '../screens/tab/CategoryScreen';
import SettingsScreen from '../screens/tab/SettingsScreen';

const Tab = createBottomTabNavigator();
function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          height: common.WP(20),
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
        component={HomeScreen}
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
              <Text style={focused ? styles.selectedText : styles.text}>
                Home
              </Text>
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
              <Text style={focused ? styles.selectedText : styles.text}>
                Categories
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={Constants.ListScreen}
        component={ListScreen}
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
                source={require('../../assets/list-tab-icon.png')}
                style={styles.tabBarIcon}
              />
              <Text style={focused ? styles.selectedText : styles.text}>
                List
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={Constants.SettingsScreen}
        component={SettingsScreen}
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
                source={require('../../assets/settings-tab-icon.png')}
                style={styles.tabBarIcon}
              />
              <Text style={focused ? styles.selectedText : styles.text}>
                Settings
              </Text>
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
  tabBarIconContainer2: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
  },
  tabBarIcon: {
    width: common.WP(8),
    height: common.WP(8),
  },
  tabBarSelectedIcon: {
    resizeMode: 'stretch',
    width: '60%',
    height: '7%',
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
  },
  selectedText: {
    fontSize: common.WP(3),
    fontWeight: 'bold',
  },
  text: {
    fontSize: common.WP(3),
  },
});

export default TabNavigation;

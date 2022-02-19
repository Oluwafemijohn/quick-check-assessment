import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  // Platform,
  // NativeModules,
} from 'react-native';
// const {StatusBarManager} = NativeModules;

// const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export default function SafeAreaScreen(props: any) {
  return (
    <SafeAreaView style={[styles.screen, props.style]}>
      <StatusBar />
      <View style={[styles.view, props.style]}>{props.children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: STATUSBAR_HEIGHT,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

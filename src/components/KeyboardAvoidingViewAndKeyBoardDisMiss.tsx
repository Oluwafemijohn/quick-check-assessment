import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { Platform } from 'react-native';
import common from '../constants/common';
// const {StatusBarManager} = NativeModules;

// const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
// const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export default function KeyboardAvoidingViewAndKeyBoardDisMiss(props: any) {

  if (Platform.OS === 'ios') {
    return (
      <Pressable
        onPressOut={() => {
          Keyboard.dismiss();
        }}
        style={[styles.view, props.style]}>
        <KeyboardAvoidingView
          style={[styles.view]}
          enabled
          keyboardVerticalOffset={common.WP('5%')}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          {props.children}
        </KeyboardAvoidingView>
      </Pressable>
    );
  } else {
    return (
      <View style={[styles.view, props.style]}>
        <KeyboardAvoidingView
          style={[styles.view]}
          enabled
          keyboardVerticalOffset={common.WP('5%')}>
          {props.children}
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: STATUSBAR_HEIGHT,
    // flex: 1,
  },
  view: {
    // flex: 1,
  },
});

import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import AppButton from '../../components/form/AppButton';
import SafeAreaScreen from '../../components/SafeAreaScreen';
import common from '../../constants/common';
import Constants from '../../constants/Constants';

function PasswordResetSuccessfulScreen(props: any) {
  return (
    <SafeAreaScreen>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/password-reset-successful-image.png')}
          style={styles.image}
        />
        <Text style={styles.resetConfirm}>Password reset confirmed</Text>
        <Text style={styles.resetSuccessful}>
          You have successfully reset your password!
          {'\n'}
          Please sign in with your new password.
        </Text>
        <AppButton
          style={styles.button}
          title="Proceed to Sign in"
          onPress={() => {
            props.navigation.navigate(Constants.SIGN_IN_SCREEN);
          }}
          width={80}
          marginTop={10}
        />
      </View>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: common.WP(10),
  },
  resetConfirm: {
    fontSize: common.WP(5),
    fontWeight: '500',
    marginTop: common.WP(10),
    alignSelf: 'center',
  },
  resetSuccessful: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: common.WP(5),
  },
  button: {
    alignSelf: 'center',
  },
});

export default PasswordResetSuccessfulScreen;

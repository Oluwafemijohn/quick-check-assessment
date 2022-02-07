import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import AppButton from '../../components/form/AppButton';
import SafeAreaScreen from '../../components/SafeAreaScreen';
import common from '../../constants/common';
import Constants from '../../constants/Constants';

function ForgetPasswordCheckEmailScreen(props: any) {
  const email = props.route.params;
  return (
    <SafeAreaScreen>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/check-email-image.png')}
          style={styles.checkEmailImage}
        />
        <Text style={styles.checkYourMailText}>Check your mail</Text>
        <Text style={styles.weHaveSentEmailText}>
          We have sent an email with instructions to help reset your password
        </Text>
        <AppButton
          style={styles.button}
          title="Proceed"
          //   submitting={isSubmitting}
          onPress={() => {
            props.navigation.navigate(Constants.ForgetPasswordOTPScreen, email);
          }}
          width={80}
          marginTop={8}
        />
        <Text style={styles.dontReceiveEmail}>
          Did not receive the email?
          {'\n'}
          <Text onPress={() => console.log('Request OTP')}>
            <Text style={styles.requestAnotherEmail}> Request </Text>another
            email
          </Text>
        </Text>
      </View>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: common.HP('100%'),
  },
  checkEmailImage: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: common.WP(10),
  },
  checkYourMailText: {
    fontSize: common.WP(5),
    marginTop: common.WP(10),
    alignSelf: 'center',
  },
  weHaveSentEmailText: {
    width: common.WP(70),
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: common.WP(6),
    color: common.colors.medium,
  },
  button: {
    alignSelf: 'center',
  },
  dontReceiveEmail: {
    color: common.colors.medium,
    // width: common.WP(70),
    alignSelf: 'center',
    marginTop: common.WP(60),
    textAlign: 'center',
  },
  requestAnotherEmail: {
    color: common.colors.red,
  },
});

export default ForgetPasswordCheckEmailScreen;

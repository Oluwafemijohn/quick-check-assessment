import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
// import {
//   CodeField,
//   Cursor,
//   useBlurOnFulfill,
//   useClearByFocusCell,
// } from 'react-native-confirmation-code-field';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';

import SafeAreaScreen from '../../components/SafeAreaScreen';
import colors from '../../constants/colors';
import Constants from '../../constants/Constants';
import {verifyUser} from '../../network/Server';
import common from '../../constants/common';

function OTPScreen(props: any) {
  const email = props.route.params;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleCall = (otp: string) => {
    console.log('otp', otp);

    verifyUser({
      email: email,
      otp: otp,
    })
      .then(res => {
        console.log('res', res);
        props.navigation.navigate(Constants.SignUpSuccessfulScreen);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  return (
    <SafeAreaScreen>
      <View style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.enterOtp}>Enter OTP</Text>
          <Text style={styles.topText}>
            An OTP has been sent to your email: DianeMorgan@testmail.com
          </Text>
          <OTPInputView
            style={styles.codeInputField}
            pinCount={4}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onCodeFilled={code => {
              props.navigation.navigate(Constants.SignUpSuccessfulScreen);
            }}
            editable
            keyboardType="phone-pad"
          />

          <Text style={styles.dontReceiveOTP}>
            Didn’t receive code?
            {'\n'}
            {'\n'}
            <Text style={styles.resendOTP}>Resend OTP</Text>
          </Text>
        </View>
      </View>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {textAlign: 'center', fontSize: 30},
  codeInputField: {
    width: '80%',
    height: 200,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: common.WP(15),
    height: common.WP(15),
    borderWidth: 0,
    borderBottomWidth: 1,
    color: common.colors.black,
  },

  underlineStyleHighLighted: {
    borderColor: common.colors.paleYellow,
    width: common.WP(15),
    height: common.WP(15),
  },

  topText: {
    width: WP(80),
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: WP(13),
    lineHeight: WP(5),
  },
  enterOtp: {
    fontSize: WP(4),
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: WP(8),
  },
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  dontReceiveOTP: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: WP(20),
  },
  resendOTP: {
    color: colors.red,
  },
});

export default OTPScreen;

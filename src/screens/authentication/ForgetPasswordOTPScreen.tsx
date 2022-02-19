import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import SafeAreaScreen from '../../components/SafeAreaScreen';
import colors from '../../constants/colors';
import Constants from '../../constants/Constants';
import common from '../../constants/common';
import {sendOtp, verifyUserPasswordReset} from '../../network/Server';
import {CELL_COUNT} from '../../constants/ConstantString';

function ForgetPasswordOTPScreen(props: any) {
  const email = props.route.params;

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleCall = async (otp: string) => {
    console.log('otp', otp);
    let data = {
      email: email,
      verificationToken: otp,
      type: 'password',
    };
    await verifyUserPasswordReset(data)
      .then(res => {
        if (res.statusCode === 200) {
          props.navigation.navigate(Constants.PasswordResetScreen);
        } else {
          Alert.alert(res.message ? res.message : 'Something went wrong');
        }
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  const handleSendOtp = async () => {
    console.log('email', email);
    await sendOtp({
      email: email,
    }).then(res => {
      if (res.statusCode === 200) {
        Alert.alert(res.message ? res.message : 'Otp sent successfully');
      } else {
        Alert.alert(res.message ? res.message : 'Something went wrong');
      }
    });
  };

  useEffect(() => {
    if (value.length === CELL_COUNT) {
      handleCall(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <SafeAreaScreen>
      <View style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.enterOtp}>Enter OTP</Text>
          <Text style={styles.topText}>
            An OTP has been sent to your email: {email}
          </Text>

          <CodeField
            ref={ref}
            {...prop}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <View
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                <Text style={[styles.cell, isFocused && styles.focusCell]}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />

          <Text style={styles.dontReceiveOTP}>
            Didn’t receive code?
            {'\n'}
            {'\n'}
            <Text onPress={() => handleSendOtp()} style={styles.resendOTP}>
              Resend OTP
            </Text>
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
  cell: {
    width: common.WP(15),
    height: common.WP(15),
    lineHeight: common.WP(15),
    fontSize: common.WP(5),
    marginRight: common.WP(2),
    borderBottomWidth: 2,
    borderBottomColor: common.colors.lightYellow2,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: common.colors.paleYellow,
  },
  codeFieldRoot: {
    marginHorizontal: 40,
    marginTop: 20,
  },
});

export default ForgetPasswordOTPScreen;

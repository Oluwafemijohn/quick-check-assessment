import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { widthPercentageToDP as WP } from 'react-native-responsive-screen';
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
import { sendOtp, verifyUser } from '../../network/Server';
import { CELL_COUNT } from '../../constants/ConstantString';
import LoadingModal from '../../components/LoadingModal';
import KeyboardAvoidingViewAndKeyBoardDisMiss from '../../components/KeyboardAvoidingViewAndKeyBoardDisMiss';

function OTPScreen(props: any) {
  const email = props.route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleCall = async (otp: string) => {
    setIsLoading(true);
    console.log('otp', otp);
    await verifyUser({
      email: email,
      verificationToken: otp,
    })
      .then(res => {
        setIsLoading(false);
        console.log('res', res);
        if (res.statusCode === 200) {
          props.navigation.navigate(Constants.SignUpSuccessfulScreen);
        } else {
          Alert.alert(res.msg ? res.msg : 'Something went wrong');
        }
      })
      .catch(() => {
        setIsLoading(false);
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
        Alert.alert(res.msg ? res.msg : 'Something went wrong');
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
        <KeyboardAvoidingViewAndKeyBoardDisMiss>
          <View style={styles.container}>
            <Text style={styles.enterOtp}>Enter OTP</Text>
            <Text style={styles.topText}>
              An OTP has been sent to your email: {email}
            </Text>
            {isLoading && <LoadingModal isLoading={isLoading} />}

            <CodeField
              ref={ref}
              {...prop}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
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
        </KeyboardAvoidingViewAndKeyBoardDisMiss>
      </View>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: { textAlign: 'center', fontSize: 30 },
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

export default OTPScreen;

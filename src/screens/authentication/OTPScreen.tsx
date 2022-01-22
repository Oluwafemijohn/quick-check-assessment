import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';

import SafeAreaScreen from '../../components/SafeAreaScreen';
import colors from '../../constants/colors';
import Constants from '../../constants/Constants';
import {verifyUser} from '../../network/Server';

const CELL_COUNT = 4;

function OTPScreen(props: any) {
  const email = props.route.params;

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    console.log(value);
    if (value.length === CELL_COUNT) {
      handleCall(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

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
      <ImageBackground
        source={require('../../../assets/sign-up-background.png')}
        style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.topText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>

          <CodeField
            ref={ref}
            {...prop}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />

          <Text style={styles.dontReceiveOTP}>
            Didn’t receive code?
            {'\n'}
            {'\n'}
            <Text style={styles.resendOTP}>Resend OTP</Text>
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {
    marginHorizontal: 40,
    marginTop: 20,
  },
  cell: {
    width: 60,
    height: 60,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
  topText: {
    width: WP(80),
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: WP(13),
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

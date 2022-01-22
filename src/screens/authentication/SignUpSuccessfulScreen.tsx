import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';

import SafeAreaScreen from '../../components/SafeAreaScreen';
import colors from '../../constants/colors';
import Constants from '../../constants/Constants';

function SignUpSuccessfulScreen(props: any) {
  return (
    <SafeAreaScreen>
      <ImageBackground
        source={require('../../../assets/sign-up-background.png')}
        style={styles.background}>
        <Image
          source={require('../../../assets//done-icon.png')}
          style={styles.doneIcon}
        />
        <Text style={styles.successfulText}>
          Account
          {'\n'}
          Successfully
          {'\n'}
          verified!
        </Text>
        <Pressable
          onPress={() => props.navigation.navigate(Constants.SIGN_IN_SCREEN)}
          style={styles.procceed}>
          <Text style={styles.proceedText}>Proceed</Text>
          <Image
            source={require('../../../assets/next-arrow.png')}
            style={styles.arrow}
          />
        </Pressable>
      </ImageBackground>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  doneIcon: {
    width: WP('40%'),
    height: WP('40%'),
    marginTop: WP(30),
  },
  successfulText: {
    fontSize: WP('9%'),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: WP(11),
    lineHeight: WP(8),
  },
  procceed: {
    // width: WP("20%"),
    flexDirection: 'row',
    paddingVertical: WP(3),
    paddingHorizontal: WP(5),
    backgroundColor: colors.paleYellow,
    borderRadius: WP(2),
    marginTop: WP(20),
  },
  proceedText: {},
  arrow: {
    width: WP('5%'),
    height: WP('5%'),
  },
});

export default SignUpSuccessfulScreen;

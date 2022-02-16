import React from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import AppButton from '../../components/form/AppButton';

import SafeAreaScreen from '../../components/SafeAreaScreen';
import common from '../../constants/common';
import Constants from '../../constants/Constants';

function OnboardingScreen(props: any) {
  return (
    <SafeAreaScreen>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={require('../../../assets/onboarding.png')}
              style={styles.topImage}
            />

            <View style={styles.bottomContainer} />
            <Text style={styles.joinUs}>Join, Shop & Save</Text>
            <Text style={styles.theCommunity}>
              The community that buys together, saves-a-ton together.
            </Text>
            <View style={styles.stepsContainer}>
              <View style={styles.steps}>
                <Image
                  source={require('../../../assets/create-grocery.png')}
                  style={styles.icon}
                />
                <Text style={styles.stepsText}>Create your grocery list</Text>
              </View>
              <View style={styles.steps}>
                <Image
                  source={require('../../../assets/pick-date.png')}
                  style={styles.icon}
                />
                <Text style={styles.stepsText}>Pick your delivery dates</Text>
              </View>
              <View style={styles.steps}>
                <Image
                  source={require('../../../assets/grow-savings.png')}
                  style={styles.icon}
                />
                <Text style={styles.stepsText}>Grow your savings</Text>
              </View>
            </View>
            <AppButton
              style={styles.button}
              title="Get started"
              onPress={() => {
                props.navigation.navigate(Constants.SIGN_UP_SCREEN);
              }}
              width={80}
              borderColor={common.colors.lightGrey}
              backgroundColor={common.colors.white}
            />
            <AppButton
              style={styles.button}
              title="Sign in"
              onPress={() => {
                props.navigation.navigate(Constants.SIGN_IN_SCREEN);
              }}
              width={80}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.colors.white,
  },
  image: {
    flex: 0.5,
  },
  topImage: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: common.WP(6),
  },
  bottomContainer: {},
  joinUs: {
    fontSize: common.WP(9),
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: common.WP(6),
  },
  theCommunity: {
    fontSize: common.WP(4),
    width: common.WP(70),
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: common.WP(2),
    lineHeight: common.WP(6.5),
  },
  stepsContainer: {
    paddingHorizontal: common.WP(20),
    marginTop: common.WP(6),
  },
  steps: {
    height: common.WP(8),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: common.WP(2),
  },
  stepsText: {
    fontSize: common.WP(4),
    marginLeft: common.WP(3),
  },
  icon: {
    resizeMode: 'contain',
  },
  button: {
    alignSelf: 'center',
  },
});

export default OnboardingScreen;

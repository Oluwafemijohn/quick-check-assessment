import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';

interface IOnboardingItemProps {
  title: string;
  subTitle: string;
}

function OnboardingItem({title, subTitle}: IOnboardingItemProps) {
  return (
    <View style={styles.slide}>
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={styles.textSubTitle}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    height: WP(15),
    width: WP(70),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: HP(5),
    alignSelf: 'center',
  },
  textTitle: {
    fontSize: WP(8),
    fontWeight: 'bold',
  },
  textSubTitle: {
    fontSize: WP(4),
    marginTop: HP(2),
    textAlign: 'center',
  },
});

export default OnboardingItem;

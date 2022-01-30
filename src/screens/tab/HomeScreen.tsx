import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import SafeAreaScreen from '../../components/SafeAreaScreen';
import common from '../../constants/common';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function HomeScreen(props: any) {
  return (
    <SafeAreaScreen>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerLeftContainer}>
            <View style={styles.imageConatiner}>
              <Image
                source={require('../../../assets/avatar.png')}
                style={styles.avater}
              />
              <View style={styles.countCountainer}>
                <Text style={styles.count}>3</Text>
              </View>
            </View>
            <View style={styles.leftTextContainer}>
              <Text style={styles.hello}>Hello</Text>
              <Text style={styles.userName}>userName</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: common.WP(20),
    backgroundColor: common.colors.white,
  },
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  imageConatiner: {
    flexDirection: 'row',
  },
  count: {
    // marginLeft: common.WP(-3),
    textAlign: 'center',
  },
  countCountainer: {
    height: common.WP(4),
    width: common.WP(4),
    backgroundColor: common.colors.lightPurple,
    marginLeft: common.WP(-3),
    top: common.WP(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: common.WP(4),
  },
  avater: {
    width: common.WP(15),
    height: common.WP(15),
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  leftTextContainer: {
    marginLeft: common.WP(2),
  },
  hello: {
    fontSize: common.WP(3),
  },
  userName: {
    fontSize: common.WP(4),
    fontWeight: 'bold',
  },
});

export default HomeScreen;

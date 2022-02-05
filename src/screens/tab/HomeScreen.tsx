import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import Swiper from 'react-native-swiper';

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
          <View style={styles.headerRigthContainer}>
            <Text style={styles.createList}>Create a list</Text>
          </View>
        </View>
        <View style={styles.caroselContainer}>
          <Swiper
            containerStyle={styles.topViewPagerContainer}
            loop
            autoplay
            width={common.WP(90)}
            showsButtons={false}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
            height={common.HP(30)}>
            <Image source={require('../../../assets/carosel-image.png')} />
            <Image source={require('../../../assets/carosel-image.png')} />
            <Image source={require('../../../assets/carosel-image.png')} />
            <Image source={require('../../../assets/carosel-image.png')} />
            <Image source={require('../../../assets/carosel-image.png')} />
          </Swiper>
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
    height: common.WP(25),
    backgroundColor: common.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    marginLeft: common.WP(5),
    flex: 1,
  },
  headerRigthContainer: {
    width: common.WP(30),
    backgroundColor: common.colors.lightYellow,
    height: common.WP(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: common.WP(4),
    marginRight: common.WP(5),
  },
  createList: {
    color: common.colors.black,
    fontSize: common.WP(4),
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
    width: common.WP(20),
    height: common.WP(20),
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
  caroselContainer: {
    width: common.WP(70),
    height: common.WP(60),
    backgroundColor: common.colors.white,
    alignSelf: 'center',
    marginTop: common.WP(12),
    borderRadius: common.WP(4),
  },
  topViewPagerContainer: {},
  dot: {
    backgroundColor: common.colors.lightYellow,
    width: common.WP(2.5),
    height: common.WP(2.5),
    borderRadius: common.WP(2.5),
    marginHorizontal: common.WP(2.5),
    alignSelf: 'center',
  },
  activeDot: {
    width: common.WP(2.5),
    height: common.WP(2.5),
    borderRadius: common.WP(2.5),
    marginHorizontal: common.WP(2.5),
    backgroundColor: common.colors.paleYellow,
    alignSelf: 'center',
  },
});

export default HomeScreen;

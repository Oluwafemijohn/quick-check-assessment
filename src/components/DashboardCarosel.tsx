import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import common from '../constants/common';

function DashboardCarosel() {
  return (
    <View style={styles.caroselContainer}>
      <Swiper
        containerStyle={styles.carosel}
        loop
        autoplay
        width={common.WP(90)}
        showsButtons={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        height={common.HP(30)}>
        <Image
          source={require('../../assets/carosel-image.png')}
          style={styles.caroselImage}
        />
        <Image
          source={require('../../assets/carosel-image.png')}
          style={styles.caroselImage}
        />
        <Image
          source={require('../../assets/carosel-image.png')}
          style={styles.caroselImage}
        />
        <Image
          source={require('../../assets/carosel-image.png')}
          style={styles.caroselImage}
        />
        <Image
          source={require('../../assets/carosel-image.png')}
          style={styles.caroselImage}
        />
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  caroselContainer: {
    width: common.WP(80),
    height: common.WP(60),
    backgroundColor: common.colors.white,
    alignSelf: 'center',
    marginTop: common.WP(12),
    borderRadius: common.WP(4),
    overflow: 'visible',
    // paddingHorizontal: common.WP(-5),
  },
  carosel: {},
  dot: {
    backgroundColor: common.colors.lightYellow,
    width: common.WP(2.5),
    height: common.WP(2.5),
    borderRadius: common.WP(2.5),
    marginHorizontal: common.WP(2.5),
    alignSelf: 'center',
    // marginTop: common.WP(4),
    marginBottom: common.WP(-5),
  },
  activeDot: {
    width: common.WP(2.5),
    height: common.WP(2.5),
    borderRadius: common.WP(2.5),
    marginHorizontal: common.WP(2.5),
    marginBottom: common.WP(-5),
    backgroundColor: common.colors.paleYellow,
    alignSelf: 'center',
  },
  caroselImage: {
    width: common.WP(80),
    height: common.WP(52),
    resizeMode: 'stretch',
  },
});

export default DashboardCarosel;

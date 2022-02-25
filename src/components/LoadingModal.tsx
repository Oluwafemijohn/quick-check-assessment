import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import common from '../constants/common';

import SherzLogoSvgComponent from './svg/SherzLogoSvgComponent';
import SpinnerSvgComponent from './svg/SpinnerSvgComponent';

function LoadingModal({isLoading}: {isLoading: boolean}) {
  const [loading, setLoading] = React.useState(isLoading);
  const onRequestClose = () => {
    setLoading(false);
  };
  const translation = new Animated.Value(0);
  const rotateView = () => {
    Animated.loop(
      Animated.timing(translation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start(() => rotateView());
  };

  useEffect(() => {
    rotateView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rotateInterpolate = translation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={loading}
      onRequestClose={onRequestClose}
      style={styles.modal}>
      <View style={styles.centeredView}>
        <Animated.View
          style={{
            ...styles.animatedView,
            transform: [{rotate: rotateInterpolate}],
          }}>
          <SpinnerSvgComponent style={styles.spinner} />
        </Animated.View>
        <SherzLogoSvgComponent style={styles.logo} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    top: Dimensions.get('window').height / 2,
    width: common.WP(40),
    backgroundColor: common.colors.white,
  },
  centeredView: {
    backgroundColor: common.colors.transparent,
    height: common.WP(40),
    width: common.WP(40),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    top: Dimensions.get('window').height / 2,
  },
  logo: {
    width: common.WP(70),
    height: common.WP(70),
    marginTop: common.WP(-34),
  },
  spinner: {
    width: common.WP(60),
    height: common.WP(60),
  },
  animatedView: {
    marginTop: common.WP(-20),
  },
});

export default LoadingModal;

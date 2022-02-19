import React from 'react';
import {View, StyleSheet, Modal, Dimensions} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import common from '../constants/common';
import SherzLogoSvgComponent from './svg/SherzLogoSvgComponent';

function LoadingModal({isLoading}: {isLoading: boolean}) {
  const [loading, setLoading] = React.useState(isLoading);
  const onRequestClose = () => {
    setLoading(false);
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={loading}
      onRequestClose={onRequestClose}
      style={styles.modal}>
      <View style={styles.centeredView}>
        <ActivityIndicator animating={loading} color={common.colors.red} />
        <SherzLogoSvgComponent style={styles.logo} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    top: Dimensions.get('window').height / 2,
    height: common.WP(40),
    width: common.WP(40),
    backgroundColor: common.colors.white,
  },
  centeredView: {
    // flex: 1,
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
  },
});

export default LoadingModal;

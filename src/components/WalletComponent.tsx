import React from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import common from '../constants/common';

function WalletComponent({
  style,
  onPress,
}: {
  style?: ViewStyle;
  onPress: () => void;
}) {
  return (
    <View style={[styles.walletCOntainer, style]}>
      <ImageBackground
        source={require('../../assets/wallet-background.png')}
        style={styles.walletBackground}>
        <Text style={styles.balance}>12,000.00</Text>
        <Pressable onPress={onPress} style={styles.fundWallet}>
          <Text style={styles.fundWalletText}>Fund</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  walletCOntainer: {
    height: common.WP(60),
    width: common.WP('100%'),
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: common.WP(12),
  },
  walletBackground: {
    height: common.WP(55),
    width: common.WP(90),
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  balance: {
    fontSize: common.WP(8),
    fontWeight: 'bold',
    marginLeft: common.WP(14),
    marginTop: common.WP(13),
    color: common.colors.paleYellow,
  },
  fundWallet: {
    height: common.WP(14),
    width: common.WP(27),
    borderRadius: common.WP(2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: common.colors.paleYellow,
    alignSelf: 'flex-end',
    marginRight: common.WP(5),
    marginTop: common.WP(7),
  },
  fundWalletText: {
    fontSize: common.WP(4),
    color: common.colors.black,
    fontWeight: 'bold',
  },
});

export default WalletComponent;

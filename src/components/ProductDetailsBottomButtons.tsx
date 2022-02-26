import React from 'react';
import {View, StyleSheet} from 'react-native';
import common from '../constants/common';
import AppButton from './form/AppButton';

function ProductDetailsBottomButtons({
  onPressAddToList,
}: {
  onPressAddToList: () => void;
}) {
  return (
    <View style={styles.bottomContainer}>
      <AppButton
        title="Add to list"
        style={styles.addToCartButton}
        onPress={onPressAddToList}
        width={80}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 0.3,
    borderTopLeftRadius: common.WP(4),
    borderTopRightRadius: common.WP(4),
    backgroundColor: common.colors.white,
    shadowColor: common.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 6,
    shadowOpacity: 0.25,
  },
  addToCartButton: {
    alignSelf: 'center',
  },
});

export default ProductDetailsBottomButtons;

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Modal from 'react-native-modal';
import common from '../constants/common';

function CategoryFilterringModal({
  isModalVisible,
  onBackdropPress,
}: {
  isModalVisible: boolean;
  onBackdropPress: () => void;
}) {
  return (
    <Modal
      animationOut="zoomOut"
      animationIn="zoomIn"
      isVisible={isModalVisible}
      onBackdropPress={onBackdropPress}
      // backdropOpacity={0}
      style={styles.modal}>
      <View style={styles.centeredView}>
        <View style={styles.filterByContainer}>
          <Text style={styles.filterByText}>Filter by</Text>
        </View>
        <View style={styles.filterByContainer}>
          <Text>Radio button</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-start',
    top: common.W_30,
  },
  centeredView: {
    height: common.WP(55),
    width: common.WP(90),
    backgroundColor: common.colors.white,
    borderRadius: common.W_3,
  },
  filterByContainer: {
    // height: common.WP(5),
    borderBottomColor: common.colors.lightGrey,
    borderBottomWidth: common.WP(0.1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterByText: {
    fontSize: common.WP(4),
    fontWeight: 'bold',
    paddingVertical: common.WP(4),
  },
});

export default CategoryFilterringModal;

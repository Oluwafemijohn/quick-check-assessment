import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Modal from 'react-native-modal';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

import common from '../constants/common';
import {radioButtonsData} from '../constants/ConstantString';

function CategoryFilterringModal({
  isModalVisible,
  onBackdropPress,
}: {
  isModalVisible: boolean;
  onBackdropPress: () => void;
}) {
  const [radioButtons, setRadioButtons] =
    useState<RadioButtonProps[]>(radioButtonsData);
  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    setRadioButtons(radioButtonsArray);
  }
  return (
    <Modal
      animationOut="zoomOut"
      animationIn="zoomIn"
      isVisible={isModalVisible}
      onBackdropPress={onBackdropPress}
      style={styles.modal}>
      <View style={styles.centeredView}>
        <View style={styles.filterByContainer}>
          <Text style={styles.filterByText}>Filter by</Text>
        </View>
        <View style={styles.filterByContainer}>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            layout={'row'}
            containerStyle={styles.radioGroupContainer}
          />
        </View>
        <View style={styles.filterByContainer}>
          <Text style={styles.filterByText}>Name</Text>
        </View>
        <View style={styles.filterByContainer}>
          <Text style={styles.filterByText}>Price</Text>
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
    height: common.WP(58),
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
  radioGroupContainer: {
    marginHorizontal: common.WP(20),
    marginVertical: common.WP(5),
  },
});

export default CategoryFilterringModal;

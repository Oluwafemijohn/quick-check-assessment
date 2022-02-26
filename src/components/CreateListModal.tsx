import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Modal from 'react-native-modal';

import common from '../constants/common';
import AppButton from './form/AppButton';
import AppTextInput from './form/AppTextInput';

function CreateListModal({
  isModalVisible,
  onBackdropPress,
  onPress,
}: {
  isModalVisible: boolean;
  onBackdropPress: () => void;
  onPress: (value: string) => void;
}) {
  const [listName, setListName] = useState('');
  const [err, setErr] = useState('');

  useEffect(() => {
    if (listName.length !== 0) {
      setErr('');
    }
  }, [listName]);
  return (
    <Modal
      animationOut="zoomOut"
      animationIn="zoomIn"
      isVisible={isModalVisible}
      onBackdropPress={onBackdropPress}
      style={styles.modal}>
      <View style={styles.centeredView}>
        <View style={styles.filterByContainer}>
          <Text style={styles.filterByText}>List name</Text>
          <AppTextInput
            value={listName}
            placeholder="List name"
            errors={err !== '' && err}
            onChangeText={text => setListName(text as string)}
            width={common.WP('80%')}
            autoCapitalize="none"
            style={styles.input}
          />
          <AppButton
            style={styles.button}
            title="Save"
            onPress={() => {
              if (listName.length === 0) {
                setErr('List name must not be empty');
              } else {
                setErr('');
                onPress(listName);
                setListName('');
              }
            }}
            width={80}
          />
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
    height: common.WP(60),
    width: common.WP(90),
    backgroundColor: common.colors.white,
    borderRadius: common.W_3,
  },
  filterByContainer: {
    justifyContent: 'center',
  },
  filterByText: {
    fontSize: common.WP(4),
    paddingVertical: common.WP(4),
    marginLeft: common.WP(5),
  },
  input: {
    alignSelf: 'center',
  },
  button: {
    alignSelf: 'center',
  },
});

export default CreateListModal;

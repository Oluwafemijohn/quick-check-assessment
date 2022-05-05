import {StyleSheet} from 'react-native';
import {RadioButtonProps} from 'react-native-radio-buttons-group';
import common from './common';

export default Object.freeze({
  MainScreen: 'MainScreen',
});

const styles = StyleSheet.create({
  ca: {
    borderWidth: 1,
    borderColor: common.colors.silver,
    paddingVertical: common.W_3,
    width: common.WP(42),
    paddingLeft: common.W_2,
    borderRadius: common.W_2,
    marginLeft: common.WP(-0.3),
    marginRight: common.WP(6),
    marginTop: common.WP(-4),
  },
});

export const radioButtonsData: RadioButtonProps[] = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Male',
    value: 'Male',
    size: 25,
    containerStyle: styles.ca,
    // layout: 'row',
  },
  {
    id: '2',
    label: 'Female',
    value: 'Female',
    size: 25,
    containerStyle: styles.ca,
  },
];

export const TOKEN = '@TOKEN';

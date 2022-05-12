import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ViewStyle,
  Image,
  Pressable,
} from 'react-native';


import { widthPercentageToDP as WP } from 'react-native-responsive-screen';

import colors from '../../constants/colors';
import common from '../../constants/common';
import defaultStyle from '../../constants/defaultStyle';

interface Props {
  placeholder: string;
  value: string;
  onPress: () => void;
  width?: number;
  error?: string | boolean | undefined;
  style?: ViewStyle;
  marginBottom?: number;
  marginTop?: number;
}

function AppPicker2({
  placeholder,
  width = WP('100%'),
  value,
  error,
  style,
  onPress,
  marginBottom = 5,
  marginTop = 5,
}: Props) {

  return (
    <View style={{
      marginTop: WP(marginTop),
      marginBottom: WP(marginBottom)
    }}>
      <Pressable
        style={[
          {
            backgroundColor: common.colors.white,
            width,
          },
          style,
        ]}
        onPress={onPress}>
        <View
          style={[styles.container]}>
          {value ? (
            <Text style={styles.text}>{value}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}
          <Image
            source={
              // open
              //   ? require('../../../assets/Icon_close.png')
              // : 
              require('../../../assets/Icon_open.png')
            }
          />
        </View>
      </Pressable>
      {error !== '' && <Text style={[styles.error, { width }]}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.white,
    flexDirection: 'row',
    padding: WP(2.5),
    paddingVertical: WP(4),
    alignItems: 'center',
    borderColor: common.colors.activeTabText,
    borderWidth: 1,
    borderRadius: common.W_2,
  },
  placeholder: {
    color: defaultStyle.colors.grey3,
    flex: 1,
  },
  text: {
    flex: 1,
  },
  text2: {
    padding: 20,
  },
  error: {
    color: colors.red,
    fontSize: WP(4),
    marginTop: WP(2),
  },
  dropDownIcon: {
    resizeMode: 'contain',
  },
  modal: {
    justifyContent: 'flex-start',
  },
  centeredView: {
    backgroundColor: common.colors.white,
    marginLeft: WP(5),
    marginBottom: WP(50),
  },
  modalView: {
    paddingVertical: common.WP(4),
    paddingHorizontal: common.WP(5),
    borderBottomColor: common.colors.lightGrey,
    borderBottomWidth: 1,
    alignSelf: 'center',
    marginLeft: common.WP(5),
    backgroundColor: common.colors.white,
  },
  modalText: {
    fontSize: common.WP(4),
    color: common.colors.black,
  },
  list: {
    marginBottom: common.WP(100),
  },
});

export default AppPicker2;

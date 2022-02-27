import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ViewStyle,
  Image,
  Pressable,
} from 'react-native';
import Modal from 'react-native-modal';

import {widthPercentageToDP as WP} from 'react-native-responsive-screen';

// import AppText from '../components/AppText';
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
  data: string[];
  setValue: (value: string) => void;
}

function AppPicker({
  placeholder,
  width = WP('100%'),
  value,
  error,
  style,
  // marginBottom = 5,
  // marginTop = 5,
  setValue,
  data,
}: Props) {
  const [open, setOpen] = useState(false);
  const [viewHeight, setViewHeight] = useState(0);

  return (
    <View>
      <Pressable
        style={[
          {
            backgroundColor: common.colors.white,
            width,
          },
          // styles.container,
          style,
        ]}
        onPress={() => setOpen(true)}>
        <View
          ref={view => {
            if (!view) {
              return;
            }
            view.measureInWindow((x, y) => {
              setViewHeight(y);
            });
          }}
          style={[
            // {width},
            styles.container,
            // style,
            // {marginBottom: WP(marginBottom), marginTop: WP(marginTop)},
          ]}>
          {value ? (
            <Text style={styles.text}>{value}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}
          <Image
            source={
              open
                ? require('../../../assets/Icon_close.png')
                : require('../../../assets/Icon_open.png')
            }
          />
        </View>
      </Pressable>
      <Modal
        animationOut="fadeOutUp"
        animationIn="fadeInDown"
        isVisible={open}
        backdropOpacity={0}
        onBackdropPress={() => setOpen(false)}
        style={[styles.modal, {top: viewHeight + common.WP(5), width}]}>
        <View style={styles.centeredView}>
          {data.map((item, index) => (
            <Pressable
              onPress={() => {
                setValue(item);
                setOpen(false);
              }}
              style={[styles.modalView, {width}]}
              key={index}>
              <Text style={styles.modalText}>{item}</Text>
            </Pressable>
          ))}
        </View>
      </Modal>
      {error !== '' && <Text style={[styles.error, {width}]}>{error}</Text>}
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
    borderBottomColor: common.colors.lightGrey,
    borderBottomWidth: 1,
  },
  placeholder: {
    color: defaultStyle.colors.lightGrey,
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
});

export default AppPicker;

import React from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { widthPercentageToDP as WP } from 'react-native-responsive-screen';
import moment, { Moment } from 'moment';
import Modal from 'react-native-modal';
import CalendarPicker from 'react-native-calendar-picker';
import common from '../../constants/common';

type DisabledDatesFunc = (date: Moment) => boolean;

interface Props {
  width: number | undefined;
  style?: ViewStyle;
  placeholder: string;
  errors: string | boolean | undefined;
  value: any;
  onPress: () => void;
  marginBottom?: number;
  isSelected: boolean;
  isModalVisible: boolean;
  onBackdropPress: () => void;
  onDateChange: (date: moment.MomentInput) => void;
  weekDays?: string[];
  disabledDates?: Date[] | DisabledDatesFunc | undefined;
}

function AppDatePicker2({
  placeholder,
  style,
  value,
  errors,
  width = WP('100%'),
  marginBottom = 5,
  onPress,
  isSelected,
  isModalVisible,
  onBackdropPress,
  onDateChange,
  weekDays,
  disabledDates,
}: Props) {
  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={[
            { width },
            styles.container,
            style,
            { marginBottom: WP(marginBottom) },
          ]}>
          {isSelected ? (
            <Text style={styles.text}>{value}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}
        </View>
      </TouchableWithoutFeedback>
      <Modal
        animationOut="zoomOut"
        animationIn="zoomIn"
        isVisible={isModalVisible}
        onBackdropPress={onBackdropPress}
        backdropOpacity={0}
        style={styles.modal}>
        <View style={styles.centeredView}>
          <CalendarPicker
            onDateChange={onDateChange}
            selectedDayTextColor="#fff"
            todayBackgroundColor="#00adf5"
            showDayStragglers
            weekdays={weekDays}
            disabledDates={disabledDates}
            previousTitleStyle={styles.previousTitleStyle}
            nextTitleStyle={styles.nextTitleStyle}
          />
        </View>
      </Modal>
      {errors !== '' && <Text style={[styles.error, { width }]}>{errors}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: common.colors.white,
    borderRadius: WP('2%'),
    flexDirection: 'row',
    padding: WP('3.5%'),
    marginTop: WP(5),
    // marginVertical: 10,
    alignItems: 'center',
  },
  error: {
    color: common.colors.red,
    fontSize: WP(4),
    marginTop: WP(4),
  },
  text: {
    flex: 1,
    fontSize: WP('3.5%'),
    color: common.colors.darkCard,
  },
  calender: {
    alignItems: 'flex-end',
  },
  placeholder: {
    color: common.colors.lightGrey,
    flex: 1,
    fontSize: WP('3.5%'),
  },
  pickerContainer: {
    // justifyContent: "center",
  },
  modal: {},
  centeredView: {
    backgroundColor: common.colors.white,
  },
  previousTitleStyle: {
    marginLeft: WP(2),
  },
  nextTitleStyle: {
    marginRight: WP(2),
  },
});

export default AppDatePicker2;

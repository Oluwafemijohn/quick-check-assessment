import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import common from '../../constants/common';
import NotificationEllipseSvg from '../svg/NotificationEllipseSvg';

interface INotification {
  id: number;
  title: string;
  message: string;
  time: string;
}

function NotificationItem({item}: {item: INotification}) {
  return (
    <View style={styles.container}>
      <NotificationEllipseSvg style={styles.svg} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.body}>{item.message}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{item.time}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: common.W_5,
    paddingRight: common.W_8,
    paddingVertical: common.W_5,
    marginBottom: common.W_10,
    backgroundColor: common.colors.white,
    flexDirection: 'row',
    borderRadius: common.W_3,
  },
  titleContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  title: {
    fontSize: common.W_5,
    marginLeft: common.W_3,
  },
  body: {
    fontSize: common.W_4,
    fontWeight: '200',
    color: common.colors.black,
    marginLeft: common.W_3,
    marginTop: common.W_2,
  },
  date: {},
  svg: {
    marginTop: common.W_2,
  },
  dateContainer: {
    paddingVertical: common.W_1,
    borderRadius: common.W_3,
    backgroundColor: common.colors.veryLighrGrey,
    alignItems: 'center',
    justifyContent: 'center',
    width: common.WP(50),
    marginTop: common.W_2,
  },
});

export default NotificationItem;

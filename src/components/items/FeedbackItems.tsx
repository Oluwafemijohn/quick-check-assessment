import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import common from '../../constants/common';
import ComplaintsSvgIcon from '../svg/ComplaintsSvgIcon';
import ForwardArrowSvgIcon from '../svg/ForwardArrowSvgIcon';
import ThumbDownSvg from '../svg/ThumbDownSvg';
import ThumbUpSvgComponent from '../svg/ThumbUpSvgComponent';

function FeedbackItems({
  onPress,
  title,
  notificationCount,
  itemNumber,
}: {
  onPress: () => void;
  title: string;
  notificationCount?: number;
  itemNumber: number;
}) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      {itemNumber === 1 && <ThumbUpSvgComponent style={styles.majorIcon} />}
      {itemNumber === 2 && <ThumbDownSvg style={styles.majorIcon} />}
      {itemNumber === 3 && <ComplaintsSvgIcon style={styles.majorIcon} />}
      <View style={styles.row}>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
      <ForwardArrowSvgIcon style={styles.forwardArrow} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: common.W_10,
    paddingVertical: common.W_5,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: common.W_2,
    backgroundColor: common.colors.white,
    marginHorizontal: common.W_5,
    borderRadius: common.W_3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: common.W_3,
    flex: 1,
  },
  title: {
    fontSize: common.W_4,
    fontWeight: '600',
    color: common.colors.black,
  },
  titleLogout: {
    fontSize: common.W_4,
    fontWeight: '600',
    color: common.colors.red,
    marginLeft: common.W_3,
  },
  notificationCount: {
    color: common.colors.white,
  },
  notificationContainer: {
    height: common.W_5,
    width: common.W_5,
    borderRadius: common.W_5,
    backgroundColor: common.colors.lightPurple,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: common.W_2,
  },
  majorIcon: {},
  logOutIcon: {
    marginLeft: common.W_2,
  },
  forwardArrow: {},
});

export default FeedbackItems;

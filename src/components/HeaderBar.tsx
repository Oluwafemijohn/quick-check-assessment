import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, View, StyleSheet, Text } from 'react-native';
import common from '../constants/common';
// import FilterIconSvgComponent from './svg/FilterIconSvgComponent';
import GoBackArrorSvgComponent from './svg/GobackArrorwSvgComponent';

function HeaderBar({
  onPress,
  actionText,
  onPressActionText,
  title,
  notificationCount,
}: {
  onPress?: () => void;
  onPressActionText?: () => void;
  actionText?: string;
  title?: string;
  notificationCount?: number;
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}>
        <GoBackArrorSvgComponent style={styles.gobackArrow} />
      </Pressable>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {notificationCount !== undefined && (
          <View style={styles.notificationCountContainer}>
            <Text style={styles.notificationCount}>{notificationCount}</Text>
          </View>
        )}
      </View>
      <Pressable style={styles.rightActionButton} onPress={onPress}>
        {actionText ? (
          <Text onPress={onPressActionText} style={styles.actionText}>
            {actionText}
          </Text>
        ) : (
          null
          // <FilterIconSvgComponent style={styles.rightAction} />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: common.W_15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: common.colors.white,
    // shadowColor: common.colors.black,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // elevation: 6,
    // shadowOpacity: 0.25,
    // borderBottomColor: common.colors.lightLightGrey,
  },
  gobackArrow: {
    resizeMode: 'contain',
    marginLeft: common.W_5,
  },
  rightAction: {
    resizeMode: 'contain',
    marginRight: common.W_5,
  },
  actionText: {
    marginRight: common.W_5,
    fontSize: common.W_4,
    color: common.colors.lightGreen,
  },
  title: {
    fontSize: common.W_4,
    fontWeight: 'bold',
  },
  rightActionButton: {},
  notificationCount: {
    color: common.colors.white,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  notificationCountContainer: {
    height: common.W_5,
    width: common.W_5,
    borderRadius: common.W_5,
    backgroundColor: common.colors.lightPurple,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: common.W_2,
  },
});

export default HeaderBar;

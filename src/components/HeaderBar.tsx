import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, View, StyleSheet, Text} from 'react-native';
import common from '../constants/common';
import FilterIconSvgComponent from './svg/FilterIconSvgComponent';
import GoBackArrorSvgComponent from './svg/GobackArrorwSvgComponent';

function HeaderBar({
  onPress,
  actionText,
  onPressActionText,
  title,
}: {
  onPress?: () => void;
  onPressActionText?: () => void;
  actionText?: string;
  title?: string;
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
      <Text style={styles.title}>{title}</Text>
      <Pressable style={styles.rightActionButton} onPress={onPress}>
        {actionText ? (
          <Text onPress={onPressActionText} style={styles.actionText}>
            {actionText}
          </Text>
        ) : (
          <FilterIconSvgComponent style={styles.rightAction} />
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
});

export default HeaderBar;

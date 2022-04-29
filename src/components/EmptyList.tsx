import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useRecoilValue } from 'recoil';
import common from '../constants/common';
import EmptyListSvgComponent from './svg/EmptyListSvgComponent';

function EmptyList({ text }: { text?: string }) {

  return (
    <View style={styles.container}>
      <View>
        <EmptyListSvgComponent />
      </View>
      <Text style={[styles.text, {
        color: common.colors.black
      }]}> {text ? text : 'No record yet'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: common.WP(5),
    marginTop: common.HP(-10),
    color: common.colors.white,
    fontStyle: 'italic',
  },
});

export default EmptyList;

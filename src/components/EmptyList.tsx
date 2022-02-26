import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import common from '../constants/common';

function EmptyList() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Your list is empty </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: common.WP(5),
    color: common.colors.black,
    fontStyle: 'italic',
    marginTop: common.W_5,
  },
});

export default EmptyList;

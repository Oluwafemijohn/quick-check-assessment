import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, View, StyleSheet, Text} from 'react-native';
import common from '../constants/common';
import TextConstant from '../constants/TextConstant';

function HeaderBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('../../assets/go-back-arrow.png')}
          style={styles.gobackArrow}
        />
      </Pressable>
      <Text style={styles.title}>{TextConstant.categoryTitle}</Text>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('../../assets/go-back-arrow.png')}
          style={styles.gobackArrow}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  gobackArrow: {
    resizeMode: 'contain',
    marginLeft: common.W_5,
  },
  title: {
    fontSize: common.W_4,
    fontWeight: 'bold',
  },
});

export default HeaderBar;

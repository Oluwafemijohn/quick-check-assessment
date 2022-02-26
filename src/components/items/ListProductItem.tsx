import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import common from '../../constants/common';
import {IItem} from '../../types/Type';
import {nullOrUndefineCheck} from '../../utilities';

function ListProductItem({
  item,
  onPressIncrease,
  onPressDecrease,
  count,
}: {
  item: IItem;
  onPressIncrease: () => void;
  onPressDecrease: () => void;
  count: number;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.groupContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.groupContainer}>
        <Text style={styles.productName}>{item.productName}</Text>
        <View style={styles.productPriceBodyContainer}>
          <View style={styles.priceContainer}>
            <View style={styles.sherzAndMarketPriceContainer}>
              <Text style={styles.sherzPrice}>
                N{nullOrUndefineCheck(item ? item.sherzPrice : '')}
              </Text>
            </View>
            <View style={styles.sherzAndMarketPriceContainer}>
              <Text style={styles.marketPrice}>
                N{nullOrUndefineCheck(item ? item.marketPrice : '')}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.groupContainer}>
        <View style={styles.countCountainer}>
          <Pressable onPress={onPressDecrease} style={styles.countPress}>
            <Text style={styles.countPressText}>-</Text>
          </Pressable>
          <Text style={styles.count}>{count}</Text>
          <Pressable onPress={onPressIncrease} style={styles.countPress}>
            <Text style={styles.countPressText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: common.colors.white,
    marginBottom: common.W_5,
    marginHorizontal: common.W_5,
    padding: common.W_4,
    borderRadius: common.W_3,
  },
  groupContainer: {
    width: common.W_25,
    height: common.W_20,
    backgroundColor: common.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: common.W_1,
    width: common.W_25,
    height: common.W_20,
    resizeMode: 'stretch',
  },
  productPriceBodyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceContainer: {},
  favouritIcon: {
    marginLeft: common.W_5,
    marginVertical: common.W_2,
  },
  productName: {
    marginVertical: common.W_2,
    fontSize: common.W_3,
    color: common.colors.black,
  },
  sherzAndMarketPriceContainer: {
    marginRight: common.W_5,
  },
  sherzPrice: {
    color: common.colors.paleYellow,
    fontSize: common.W_5,
  },
  marketPrice: {
    color: common.colors.red,
    fontSize: common.W_3,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  countCountainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countPress: {
    paddingHorizontal: common.W_3,
    paddingVertical: common.W_2,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: common.colors.paleYellow,
    borderRadius: common.W_2,
  },
  count: {
    fontSize: common.W_4,
    marginHorizontal: common.W_2,
  },
  countPressText: {
    fontSize: common.W_4,
    color: common.colors.black,
    // backgroundColor: common.colors.red,
    // width: common.W_5,
    // height: common.W_5,
  },
});

export default ListProductItem;

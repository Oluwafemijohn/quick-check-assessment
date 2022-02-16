import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  ImageSourcePropType,
  Pressable,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import common from '../../constants/common';

interface IItem {
  id: number;
  image: ImageSourcePropType;
  rating: number;
  sherzPrice: string;
  marketPrice: string;
  productName: string;
}
function DashboardProductItem({
  item,
  onPress,
}: {
  item: IItem;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={styles.productItemContainer}>
      <Image source={item.image} style={styles.productImage} />
      <Rating
        fractions={1}
        startingValue={item.rating}
        imageSize={11}
        style={styles.rating}
        ratingCount={5}
      />
      <Text style={styles.productName}>{item.productName}</Text>
      <View style={styles.priceContainer}>
        <View style={styles.sherzAndMarketPriceContainer}>
          <Text style={styles.sherzPrice}>N{item.sherzPrice}</Text>
          <View style={styles.sherzPriceLine}>
            <Text style={styles.sherzPriceText}>SHERZ PRICE</Text>
          </View>
        </View>
        <View style={styles.sherzAndMarketPriceContainer}>
          <Text style={styles.marketPrice}>N{item.sherzPrice}</Text>
          <View style={styles.marketPriceLine}>
            <Text style={styles.sherzPriceText}>MARKET PRICE</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  productItemContainer: {
    marginRight: common.WP(5),
    backgroundColor: common.colors.white,
    paddingBottom: common.WP(5),
    borderRadius: common.WP(4),
  },
  productImage: {
    width: common.WP(60),
    height: common.WP(50),
    resizeMode: 'stretch',
    // borderRadius: common.WP(4),
  },
  rating: {
    paddingVertical: common.WP(3),
    alignItems: 'flex-start',
    marginLeft: common.WP(5),
  },
  productName: {
    fontSize: common.WP(3),
    marginLeft: common.WP(5),
    marginVertical: common.WP(2),
  },
  priceContainer: {
    flexDirection: 'row',
    marginHorizontal: common.WP(5),
    justifyContent: 'space-between',
  },
  sherzAndMarketPriceContainer: {},
  sherzPrice: {
    color: common.colors.paleYellow,
    fontSize: common.WP(6),
  },
  marketPrice: {
    color: common.colors.red,
    fontSize: common.WP(6),
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  sherzPriceLine: {
    paddingVertical: common.WP(1),
    paddingHorizontal: common.WP(2),
    backgroundColor: common.colors.lightGreen,
    borderRadius: common.WP(4),
  },
  marketPriceLine: {
    paddingVertical: common.WP(1),
    paddingHorizontal: common.WP(2),
    backgroundColor: common.colors.black,
    borderRadius: common.WP(4),
  },
  sherzPriceText: {
    fontSize: common.WP(2.5),
    color: common.colors.white,
  },
});

export default DashboardProductItem;

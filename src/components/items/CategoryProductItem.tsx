import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  ImageSourcePropType,
  Pressable,
} from 'react-native';
import common from '../../constants/common';
import {ICategoryList} from '../../types/Type';

interface IItem {
  id: number;
  image: ImageSourcePropType;
  rating: number;
  sherzPrice: string;
  marketPrice: string;
  productName: string;
}
function CategoryProductItem({
  item,
  onPress,
}: // image,
{
    item: IItem;
  // image: ImageSourcePropType;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={styles.productItemContainer}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>
        {item.productName ? item.productName : ''}
      </Text>
      <View style={styles.priceContainer}>
        <View style={styles.sherzAndMarketPriceContainer}>
          <Text style={styles.sherzPrice}>N{item.sherzPrice}</Text>
          <View style={styles.sherzPriceLine}>
            <Text style={styles.sherzPriceText}>SHERZ PRICE</Text>
          </View>
        </View>
        <View style={styles.sherzAndMarketPriceContainer}>
          <Text style={styles.marketPrice}>N{item.marketPrice}</Text>
          <View style={styles.marketPriceLine}>
            <Text style={styles.sherzPriceText}>MARKET PRICE</Text>
          </View>
        </View>
      </View>
      <Pressable
        onPress={() => {
          console.log('add to list');
        }}
        style={styles.onPressAddToList}>
        <Text style={styles.addToListText}>Add To List</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  productItemContainer: {
    marginRight: common.WP(5),
    backgroundColor: common.colors.white,
    paddingBottom: common.WP(5),
    borderRadius: common.WP(4),
    width: common.WP(42.5),
    marginBottom: common.WP(5),
  },
  productImage: {
    width: common.WP(42.5),
    height: common.WP(30),
    resizeMode: 'stretch',
  },
  rating: {
    paddingVertical: common.WP(3),
    alignItems: 'flex-start',
    marginLeft: common.WP(5),
  },
  productName: {
    fontSize: common.WP(3),
    marginLeft: common.WP(2),
    marginVertical: common.WP(2),
  },
  priceContainer: {
    flexDirection: 'row',
    marginHorizontal: common.WP(2),
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
    fontSize: common.WP(2),
    color: common.colors.white,
  },
  onPressAddToList: {
    backgroundColor: common.colors.paleYellow,
    paddingVertical: common.WP(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: common.WP(4),
    marginTop: common.WP(5),
    marginHorizontal: common.WP(2),
  },
  addToListText: {
    fontSize: common.WP(3),
    color: common.colors.black,
    fontWeight: 'bold',
  },
});

export default CategoryProductItem;

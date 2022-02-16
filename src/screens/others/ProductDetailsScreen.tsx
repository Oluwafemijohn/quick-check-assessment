import React from 'react';
import {ImageSourcePropType, ScrollView, StyleSheet} from 'react-native';
import ProductDetailsBottomButtons from '../../components/ProductDetailsBottomButtons';
import ProductDetailsTopPart from '../../components/ProductDetailsTopPart';
import common from '../../constants/common';

interface Props {
  id: number;
  image: ImageSourcePropType;
  rating: number;
  sherzPrice: string;
  marketPrice: string;
  productName: string;
}

function ProductDetailsScreen(props: any) {
  const item: Props = props.route.params;
  const [rate, setRate] = React.useState(3);
  return (
    <>
      <ScrollView style={styles.topContainerScrollView}>
        <ProductDetailsTopPart
          onFinishRating={rating => {
            setRate(rating);
          }}
          rating={rate}
          item={item}
        />
      </ScrollView>
      <ProductDetailsBottomButtons
        onPressAddToCart={() => {}}
        onPressAddToList={() => {}}
      />
    </>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 0.7,
  },
  topContainerScrollView: {
    flex: 0.7,
    backgroundColor: common.colors.white,
  },
  // image: {
  //   width: common.W_100_PERCENT,
  //   height: common.HP('30%'),
  //   resizeMode: 'stretch',
  // },
  // detailsContainer: {
  //   flex: 1,
  //   marginTop: common.W_10,
  //   backgroundColor: common.colors.white,
  //   borderTopLeftRadius: common.W_10,
  //   borderTopRightRadius: common.W_10,
  //   paddingHorizontal: common.W_10,
  // },
  // foodStyleContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  // foodType: {
  //   fontSize: common.WP('4%'),
  //   marginTop: common.W_5,
  //   color: common.colors.black,
  // },
  // rating: {
  //   marginTop: common.W_5,
  // },
  // productPriceBodyContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  // priceContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  // favouritIcon: {
  //   marginLeft: common.WP(5),
  //   marginVertical: common.WP(2),
  // },
  // productName: {
  //   marginVertical: common.WP(2),
  //   fontSize: common.WP(5),
  //   fontWeight: 'bold',
  //   color: common.colors.black,
  // },
  // sherzAndMarketPriceContainer: {
  //   marginRight: common.WP(5),
  // },
  // sherzPrice: {
  //   color: common.colors.paleYellow,
  //   fontSize: common.WP(6),
  // },
  // marketPrice: {
  //   color: common.colors.red,
  //   fontSize: common.WP(6),
  //   textDecorationLine: 'line-through',
  //   textDecorationStyle: 'solid',
  // },
  // sherzPriceLine: {
  //   paddingVertical: common.WP(1),
  //   paddingHorizontal: common.WP(2),
  //   backgroundColor: common.colors.lightGreen,
  //   borderRadius: common.WP(4),
  // },
  // marketPriceLine: {
  //   paddingVertical: common.WP(1),
  //   paddingHorizontal: common.WP(2),
  //   backgroundColor: common.colors.black,
  //   borderRadius: common.WP(4),
  // },
  // sherzPriceText: {
  //   fontSize: common.WP(2.5),
  //   color: common.colors.white,
  // },
});

export default ProductDetailsScreen;

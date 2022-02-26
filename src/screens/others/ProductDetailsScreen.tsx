import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, StyleSheet} from 'react-native';
import LoadingModal from '../../components/LoadingModal';
import ProductDetailsBottomButtons from '../../components/ProductDetailsBottomButtons';
import ProductDetailsTopPart from '../../components/ProductDetailsTopPart';
import common from '../../constants/common';
import {addToList, productDetails} from '../../network/Server';
import {IProduct, ISingleProduct} from '../../types/Type';

function ProductDetailsScreen(props: any) {
  const item: IProduct = props.route.params;
  const [rate, setRate] = useState(3);
  const [productDetailsResponse, setProductDetailsResponse] =
    useState<ISingleProduct>();
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleProductDetails = async () => {
    setIsLoading(true);
    await productDetails(item._id)
      .then(res => {
        setIsLoading(false);
        setProductDetailsResponse(res as unknown as ISingleProduct);
      })
      .catch(() => {
        setIsLoading(false);
        Alert.alert('Error', 'Something went wrong');
      });
  };

  useEffect(() => {
    handleProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item._id]);

  const _addToList = async () => {
    setIsLoading(true);
    await addToList({
      lists: [
        {
          product: item._id,
          quantity: count,
        },
      ],
    })
      .then(res => {
        setIsLoading(false);
        if (res.statusCode === 201) {
          Alert.alert('Added to list successfully');
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <ScrollView style={styles.topContainerScrollView}>
        {isLoading && <LoadingModal isLoading={isLoading} />}

        {productDetailsResponse && (
          <ProductDetailsTopPart
            onFinishRating={rating => {
              setRate(rating);
            }}
            rating={rate}
            item={productDetailsResponse.product}
            onPressDecrease={() => {
              setCount(count !== 0 ? count - 1 : 0);
            }}
            onPressIncrease={() => {
              setCount(count + 1);
            }}
            count={count}
          />
        )}
      </ScrollView>
      <ProductDetailsBottomButtons
        onPressAddToList={() => {
          _addToList();
        }}
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

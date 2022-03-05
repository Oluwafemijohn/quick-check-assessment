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
    backgroundColor: common.colors.background,
  },
  topContainerScrollView: {
    flex: 0.7,
    backgroundColor: common.colors.white,
  },
});

export default ProductDetailsScreen;

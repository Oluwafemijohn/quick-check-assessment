import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Alert, FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import BottomSheetTemplate from '../../components/BottomSheetTemplate';
import LoadingModal from '../../components/LoadingModal';
import ProductDetailsBottomButtons from '../../components/ProductDetailsBottomButtons';
import ProductDetailsTopPart from '../../components/ProductDetailsTopPart';
import common from '../../constants/common';
import { addToList, productDetails } from '../../network/Server';
import { getListData, updateList } from '../../store/State';
import { IProductDashboard, IProductsByCategoryName, ISingleProduct } from '../../types/Type';

function ProductDetailsScreen(props: any) {
  const item: IProductDashboard = props.route.params;
  const [rate, setRate] = useState(3);
  const [productDetailsResponse, setProductDetailsResponse] =
    useState<ISingleProduct>();
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const getListResponse = useRecoilValue(getListData);
  const [updateMyListItems, setUpdateMyListItems] = useRecoilState(updateList);
  const [selectedProduct, setSelectedProduct] = useState<IProductDashboard>();

  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const modalPresent = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);
  const modalClose = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const handleProductDetails = async () => {
    setIsLoading(true);
    await productDetails(item._id)
      .then(res => {
        setIsLoading(false);
        setProductDetailsResponse(res.payload as unknown as ISingleProduct);
      })
      .catch(() => {
        setIsLoading(false);
        Alert.alert('Error', 'Something went wrong');
      });
  };

  useEffect(() => {
    handleProductDetails();
  }, [item._id]);

  return (
    <>
      <ScrollView style={styles.topContainerScrollView}>
        {isLoading && <LoadingModal isLoading={isLoading} />}

        {productDetailsResponse && productDetailsResponse.data && (
          <ProductDetailsTopPart
            onFinishRating={rating => {
              setRate(rating);
            }}
            rating={rate}
            item={productDetailsResponse.data}
            onPressDecrease={() => {
              setCount(count !== 1 ? count - 1 : 1);
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
          // _addToList();
          // setBottomSheetVisible(true);
          modalPresent();
          setSelectedProduct({
            ...item,
            qty: count,
          });
        }}
      />
      <BottomSheetTemplate
        bottomSheetRef={bottomSheetRef}
        onClose={() => {
          modalClose();
        }}
        title='Select a list'
      >
        <View style={styles.listContainer}>
          <FlatList
            data={getListResponse.lists}
            keyExtractor={item => `${item._id}`}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => {
                  // setBottomSheetVisible(false);
                  modalClose();

                  if (updateMyListItems[item._id] !== undefined) {
                    const result = updateMyListItems[item._id].find((item) => item._id === selectedProduct!._id);
                    let productIndex = updateMyListItems[item._id].indexOf(result!);
                    if (productIndex !== -1) {
                      let newObjectList = JSON.parse(JSON.stringify(updateMyListItems));
                      newObjectList[item._id][productIndex] = selectedProduct!;
                      setUpdateMyListItems(newObjectList)
                    } else {
                      //@ts-ignore
                      setUpdateMyListItems({
                        ...updateMyListItems,
                        [item._id]: [...updateMyListItems[item._id], selectedProduct]
                      })
                    }



                  } else {
                    // @ts-ignore
                    setUpdateMyListItems({
                      ...updateMyListItems,
                      [item._id]: [selectedProduct]
                    })
                  }
                }}
                style={styles.portfolioListItem}
              >
                <Text style={styles.portfolioListItemText}>{item.listName}</Text>
              </Pressable>
            )}
          />
        </View>
      </BottomSheetTemplate>
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
  listContainer: {
    paddingHorizontal: common.W_5,
  },
  portfolioListItem: {
    paddingVertical: common.W_4,
    borderBottomColor: common.colors.lightGrey,
    borderBottomWidth: 1,
  },
  portfolioListItemText: {},
});

export default ProductDetailsScreen;

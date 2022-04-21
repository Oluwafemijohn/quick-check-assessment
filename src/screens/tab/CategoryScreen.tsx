import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Pressable, Text, FlatList, Keyboard, ScrollView } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import BottomSheetTemplate from '../../components/BottomSheetTemplate';
import CategoryFilterringModal from '../../components/CategoryFilterringModal';
import EmptyList from '../../components/EmptyList';
import AppTextInputSearch from '../../components/form/AppTextInputSearch';
import HeaderBar from '../../components/HeaderBar';
import CategoryProductItem from '../../components/items/CategoryProductItem';
import LoadingModal from '../../components/LoadingModal';
import common from '../../constants/common';
import TextConstant from '../../constants/TextConstant';
import { getProductByCategoryName, productCategory } from '../../network/Server';
import { getListData, productListByCategoryName, updateList } from '../../store/State';
import { ICategoryList, IProductsByCategoryName, IProductsByCategoryNameResponse } from '../../types/Type';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CategoryScreen(props: any) {
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [categoryProduct, setCategoryProduct] = useState<ICategoryList[]>([]);
  const [displayCategory, setDisplayCategory] = useState<ICategoryList[]>([]);
  const [categoryName, setCategoryName] = useState('');

  const [getProductByCategoryNameResponse, setGetProductByCategoryNameResponse] = useRecoilState(productListByCategoryName);
  const [displayCategoryName, setDisplayCategoryName] = useState<IProductsByCategoryName[]>([]);
  // const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const getListResponse = useRecoilValue(getListData);
  const [updateMyListItems, setUpdateMyListItems] = useRecoilState(updateList);
  const [selectedProduct, setSelectedProduct] = useState<IProductsByCategoryName>();

  const bottomSheetRefAdd = useRef<BottomSheetModal>(null);
  const modalPresent = useCallback(() => {
    bottomSheetRefAdd.current?.present();
  }, []);
  const modalClose = useCallback(() => {
    bottomSheetRefAdd.current?.close();
  }, []);


  const _getCategory = async () => {
    setIsLoading(true);
    await productCategory()
      .then(res => {
        setIsLoading(false);
        setCategoryProduct((res.data as unknown as ICategoryList[]).filter(item => item.categoryName !== undefined));
        setDisplayCategory((res.data as unknown as ICategoryList[]).filter(item => item.categoryName !== undefined));
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const _getProductByCategoryName = async (categoryName: string) => {
    setIsLoading(true);
    await getProductByCategoryName(categoryName)
      .then(res => {
        setIsLoading(false);
        console.log('====================================');
        console.log('res.data', res);
        console.log('====================================');
        setGetProductByCategoryNameResponse(res as unknown as IProductsByCategoryNameResponse);
        setDisplayCategoryName((res as unknown as IProductsByCategoryNameResponse).products)
      })
      .catch(() => {
        setIsLoading(false);
      });
  }



  useEffect(() => {
    _getCategory();
  }, []);

  useEffect(() => {
    if (search.length > 0) {
      const letSearchList = getProductByCategoryNameResponse.products.filter(
        item =>
          item.name.toLowerCase().includes(search.toLowerCase())
      );
      const searchedCategory = categoryProduct.filter(
        item =>
          item.categoryName.toLowerCase().includes(search.toLowerCase())
      );
      setDisplayCategory(searchedCategory);
      setDisplayCategoryName(letSearchList);
    } else {
      setDisplayCategory(categoryProduct);
      setDisplayCategoryName(getProductByCategoryNameResponse.products);
    }
  }, [search])


  // console.log('====================================');
  // console.log('displayCategoryName', displayCategoryName);
  // console.log('displayCategoryName', displayCategoryName !== undefined && displayCategoryName.length > 0);
  // console.log('kkkk', displayCategoryName.length === 0 && categoryName === '')
  // console.log('====================================');
  // console.log('====================================');
  // console.log('categoryProduct', categoryProduct);
  // console.log('====================================');
  return (
    <View style={styles.container}>
      <HeaderBar
        onPress={() => {
          setIsModalVisible(true);
        }}
        title={TextConstant.categoryTitle}
      />
      <Pressable onPress={() => {
        Keyboard.dismiss()
        console.log('Keyboard.dismiss()');
      }} style={styles.bodyContainer}>
        {isLoading && <LoadingModal isLoading={isLoading} />}
        <CategoryFilterringModal
          onBackdropPress={() => {
            setIsModalVisible(false);
          }}
          isModalVisible={isModalVisible}
        />
        <AppTextInputSearch
          placeholder="Search"
          width={common.WP(90)}
          style2={styles.searchInput2}
          style={styles.searchInput}
          value={search}
          onChangeText={text => setSearch(text as string)}
        />

        {

          displayCategoryName !== undefined && displayCategoryName.length > 0 && (
            <>
              <ScrollView
                showsHorizontalScrollIndicator={false}

                horizontal style={styles.rowButtons} >
                <View style={styles.chipsContainer} >
                  <Pressable
                    onPress={() => {
                      setCategoryName('');
                      setSelectedItem(-1);
                      setDisplayCategoryName([])
                    }}
                    style={
                      selectedItem === -1
                        ? styles.chipsButtonSelected
                        : styles.chipsButton
                    }>
                    <Text style={styles.chipText}>All</Text>
                  </Pressable>
                  {categoryProduct
                    .filter(item => item.categoryName !== undefined)
                    .map((item, index) => (
                      <Pressable
                        onPress={() => {
                          setSelectedItem(index);
                          setCategoryName(item.categoryName);
                          _getProductByCategoryName(item.categoryName);
                        }}
                        key={index}
                        style={
                          selectedItem === index
                            ? styles.chipsButtonSelected
                            : styles.chipsButton
                        }>
                        <Text style={styles.chipText}>{item.categoryName}</Text>
                      </Pressable>
                    ))}
                </View>
              </ScrollView>
              <FlatList
                renderItem={({ item }) => (
                  <CategoryProductItem
                    onPress={() => {
                    }}
                    item={item}
                    addToList={() => {
                      // setBottomSheetVisible(true);
                      modalPresent();
                      setSelectedProduct(item);
                    }}
                  />
                )}
                style={styles.list}
                data={displayCategoryName}
                keyExtractor={item => `${item.id}`}
                numColumns={2}
                onRefresh={() => {
                  _getCategory();
                }}
                refreshing={false}
                ListEmptyComponent={() => (<EmptyList />)}
              />
            </>
          )

        }

        {
          displayCategoryName.length === 0 &&
          <FlatList
            data={displayCategory.filter(item => item.categoryName !== undefined)}
            keyExtractor={item => `${item._id}`}
            renderItem={({ item }) => (
              <Pressable onPress={() => {
                setCategoryName(item.categoryName);
                _getProductByCategoryName(item.categoryName);
              }} style={styles.category} >
                <Text style={styles.categoryText}>{item.categoryName}</Text>
              </Pressable>
            )}
          />
        }

      </Pressable>
      <BottomSheetTemplate
        // isVisible={bottomSheetVisible}
        bottomSheetRef={bottomSheetRefAdd}
        onChange={() => {
          // setBottomSheetVisible(false);
          modalClose();
        }}
      >
        <View style={styles.listContainer}>
          <FlatList
            data={getListResponse.lists}
            keyExtractor={item => `${item._id}`}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  // setBottomSheetVisible(false);
                  modalClose();

                  if (updateMyListItems[item._id] !== undefined) {
                    // @ts-ignore
                    setUpdateMyListItems({
                      ...updateMyListItems,
                      [item._id]: [...updateMyListItems[item._id], selectedProduct]
                    })
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.colors.background,

  },
  category: {
    marginHorizontal: common.WP(2),
    borderBottomWidth: 1,
    borderBottomColor: common.colors.lightGrey,
    paddingVertical: common.W_4,
  },
  categoryText: {},
  searchInput: {},
  searchInput2: {
    alignSelf: 'center',
  },
  chipsContainer: {
    flexDirection: 'row',
    // marginBottom: common.WP(-0),
  },
  chipText: {
    fontSize: common.W_3,
    color: common.colors.black,
  },
  chipsButtonSelected: {
    paddingHorizontal: common.W_4,
    paddingVertical: common.W_2,
    backgroundColor: common.colors.paleYellow,
    borderRadius: common.W_4,
    marginRight: common.W_2,
  },
  chipsButton: {
    paddingHorizontal: common.W_4,
    paddingVertical: common.W_2,
    borderRadius: common.W_4,
    backgroundColor: common.colors.white,
    marginRight: common.W_2,
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: common.W_5,
  },
  list: {
    marginTop: common.W_5,
  },
  rowButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: common.W_2,
    marginBottom: common.WP(-50)
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

export default CategoryScreen;

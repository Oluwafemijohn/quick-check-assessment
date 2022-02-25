import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Pressable, Text, FlatList} from 'react-native';
import CategoryFilterringModal from '../../components/CategoryFilterringModal';
import AppTextInputSearch from '../../components/form/AppTextInputSearch';
import HeaderBar from '../../components/HeaderBar';
import CategoryProductItem from '../../components/items/CategoryProductItem';
import LoadingModal from '../../components/LoadingModal';
import common from '../../constants/common';
import {array, category} from '../../constants/ConstantString';
import {productCategory} from '../../network/Server';
import {ICategoryList} from '../../types/Type';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CategoryScreen(props: any) {
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categoryProduct, setCategoryProduct] = useState<ICategoryList[]>([]);

  const _getCategory = async () => {
    setIsLoading(true);
    await productCategory()
      .then(res => {
        setIsLoading(false);
        if (res.statusCode === 302) {
          setCategoryProduct(res as unknown as ICategoryList[]);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    _getCategory();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderBar
        onPress={() => {
          setIsModalVisible(true);
        }}
      />
      <View style={styles.bodyContainer}>
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
        <View style={styles.chipsContainer}>
          {array.map((item, index) => (
            <Pressable
              onPress={() => {
                setSelectedItem(index);
              }}
              key={index}
              style={
                selectedItem === index
                  ? styles.chipsButtonSelected
                  : styles.chipsButton
              }>
              <Text style={styles.chipText}>{item}</Text>
            </Pressable>
          ))}
        </View>
        <FlatList
          renderItem={({item}) => (
            <CategoryProductItem
              // image={category}
              onPress={() => {}}
              item={item}
            />
          )}
          style={styles.list}
          data={category}
          keyExtractor={item => `${item.id}`}
          numColumns={2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {},
  searchInput2: {
    alignSelf: 'center',
  },
  chipsContainer: {
    flexDirection: 'row',
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
});

export default CategoryScreen;

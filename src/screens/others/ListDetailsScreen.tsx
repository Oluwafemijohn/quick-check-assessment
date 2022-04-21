import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Pressable, Alert } from 'react-native';
import { useRecoilState } from 'recoil';
import EmptyList from '../../components/EmptyList';
import AppTextInputSearch from '../../components/form/AppTextInputSearch';
import HeaderBar from '../../components/HeaderBar';
import ListProductItem from '../../components/items/ListProductItem';
import common from '../../constants/common';
import Constants from '../../constants/Constants';
import TextConstant from '../../constants/TextConstant';
import { uploadItemsToList } from '../../network/Server';
import { savedProducts, updateList } from '../../store/State';
import { IList, IProductDashboard } from '../../types/Type';
import { formatCurrencyWithDecimal } from '../../utilities';

function ListDetailsScreen(props: any) {
  const list: IList = props.route.params;
  const [search, setSearch] = useState('');
  const [updateMyListItems, setUpdateMyListItems] = useRecoilState(updateList);
  const [savedProduct, setSavedProduct] = useRecoilState(savedProducts);
  // const data: IProductDashboard[] = updateMyListItems[list._id];
  const [data, setData] = useState(updateMyListItems[list._id]);
  const [isLoading, setIsLoading] = useState(false);

  const _uploadItemsToList = async () => {
    setIsLoading(true);
    const payload = {
      items: data.map(item => {
        return {
          product: item._id,
          quantity: item.qty,
        }
      }),
    }

    uploadItemsToList(list._id, payload)
      .then(res => {
        setIsLoading(false);
        if (res.statusCode === 200) {
          props.navigation.navigate(Constants.DeliveryDetailsScreen, list._id);
          setSavedProduct(data);
        } else {
          Alert.alert(res.message)
        }
      })
      .catch(() => {
        setIsLoading(false);
      })
  }

  return (
    <View style={styles.container}>
      <HeaderBar
        onPressActionText={() => { }}
        title={TextConstant.List}
        actionText="Add +"
      />
      <View style={styles.topContainer}>
        <AppTextInputSearch
          placeholder="Search"
          width={common.WP(90)}
          style2={styles.searchInput2}
          value={search}
          onChangeText={text => setSearch(text as string)}
        />
        <FlatList
          data={data}

          renderItem={({ item, index }) => (
            <ListProductItem
              onPressDecrease={() => {
              }}
              onPressIncrease={() => {
                let something = JSON.parse(JSON.stringify(data));
                something[index].qty++;
                setData(something);
              }}
              item={item}
            />
          )}
          keyExtractor={(item, index) => `${index}`}
          ListEmptyComponent={() => (<EmptyList />)}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.totalPurchase}>Total</Text>
        <View style={styles.totalPurchaseContainer}>
          {
            data !== undefined && <Text style={styles.totalText}>{formatCurrencyWithDecimal(data.reduce((total, item) => {
              return total + item.qty * item.price;
            }, 0))}</Text>
          }
          <Pressable
            onPress={() => {
              // props.navigation.navigate(Constants.DeliveryDetailsScreen);
              _uploadItemsToList();
            }}
            style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Next</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 0.85,
    backgroundColor: common.colors.background,
  },
  bottomContainer: {
    flex: 0.15,
    backgroundColor: common.colors.lightYellow,
    borderTopLeftRadius: common.WP(4),
    borderTopRightRadius: common.WP(4),
    shadowColor: common.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 6,
    shadowOpacity: 0.25,
  },
  searchInput2: {
    alignSelf: 'center',
  },
  totalPurchase: {
    fontSize: common.W_4,
    color: common.colors.black,
    marginTop: common.WP(3),
    marginLeft: common.WP(10),
  },
  totalPurchaseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalText: {
    fontSize: common.W_6,
    color: common.colors.paleYellow,
    fontWeight: 'bold',
    marginLeft: common.WP(10),
  },
  nextButton: {
    backgroundColor: common.colors.paleYellow,
    width: common.W_25,
    height: common.W_10,
    marginRight: common.WP(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: common.WP(2),
  },
  nextButtonText: {
    color: common.colors.black,
    fontSize: common.W_4,
  },
});

export default ListDetailsScreen;

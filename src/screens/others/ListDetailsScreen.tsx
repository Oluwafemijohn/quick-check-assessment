import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text, Pressable} from 'react-native';
import AppTextInputSearch from '../../components/form/AppTextInputSearch';
import HeaderBar from '../../components/HeaderBar';
import ListProductItem from '../../components/items/ListProductItem';
import common from '../../constants/common';
import Constants from '../../constants/Constants';
import {category} from '../../constants/ConstantString';
import TextConstant from '../../constants/TextConstant';

function ListDetailsScreen(props: any) {
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(1);

  return (
    <View style={styles.container}>
      <HeaderBar
        onPressActionText={() => {}}
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
          data={category}
          renderItem={({item}) => (
            <ListProductItem
              onPressDecrease={() => {
                setCount(count !== 0 ? count - 1 : 0);
              }}
              onPressIncrease={() => {
                setCount(count + 1);
              }}
              count={count}
              item={item}
            />
          )}
          keyExtractor={item => `${item.id}`}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.totalPurchase}>Total</Text>
        <View style={styles.totalPurchaseContainer}>
          <Text style={styles.totalText}>N50,000</Text>
          <Pressable
            onPress={() => {
              props.navigation.navigate(Constants.DeliveryDetailsScreen);
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

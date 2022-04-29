import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  ScrollView,
  RefreshControl,
  Pressable,
} from 'react-native';

import SafeAreaScreen from '../../components/SafeAreaScreen';
import common from '../../constants/common';
import DashboardProductItem from '../../components/items/DashboardProductItem';
import DashboardCarosel from '../../components/DashboardCarosel';
import Constants from '../../constants/Constants';
import { IAllProduct, IGetListResponse, IHighRating, INewInData, IProduct, IWallet } from '../../types/Type';
import { allProductResponse, getHighestRating, getList, getNewIn, getWallet } from '../../network/Server';
import LoadingModal from '../../components/LoadingModal';
import { getListData, loginResponseState, wallet } from '../../store/State';
import { useRecoilState } from 'recoil';
import WalletComponent from '../../components/WalletComponent';
import { makeSentenceCase } from '../../utilities';

function HomeScreen(props: any) {
  const [isWallet, setIsWallet] = useState(true);
  const [fetchAllProductResponse, setFetchAllProductResponse] =
    useState<IAllProduct>();
  const [highRating, setHighRating] = useState<IHighRating>();
  const [newIn, setNewIn] = useState<INewInData>();
  const [isLoading, setIsLoading] = useState(false);
  const [getListResponse, setGetListResponse] = useRecoilState(getListData);


  // GLobal State
  const [loginState, setLoginState] = useRecoilState(loginResponseState);
  const [myWallet, setMyWallet] = useRecoilState(wallet);

  const [loginResponse, setLoginResponse] = useRecoilState(loginResponseState);
  const _getAllProduct = async () => {
    setIsLoading(true);
    await allProductResponse()
      .then(res => {
        setIsLoading(false);
        if (res.statusCode === 200) {
          setFetchAllProductResponse(res as unknown as IAllProduct);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const _getHighestRating = async () => {
    setIsLoading(true);
    await getHighestRating()
      .then(res => {
        setIsLoading(false);
        setHighRating(res as unknown as IHighRating);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }

  const _getNewIn = async () => {
    setIsLoading(true);
    await getNewIn()
      .then((res) => {
        setIsLoading(false);
        if (res.statusCode === 200) {
          setNewIn(res as unknown as INewInData);
        }
      })
      .catch(() => {
        setIsLoading(false);
      })
  }

  const _getList = async () => {
    setIsLoading(true);
    await getList()
      .then((res) => {
        setIsLoading(false);
        setGetListResponse(res as unknown as IGetListResponse)
      })
      .catch(() => {
        setIsLoading(false);
      })
  }

  const _getWallet = async () => {
    setIsLoading(true);
    await getWallet()
      .then((res) => {
        setIsLoading(false);
        if (res.statusCode === 200) {
          setMyWallet(res as unknown as IWallet);
        }
      })
      .catch(() => {
        setIsLoading(false);
      })
  }

  const allCalls = () => {
    _getAllProduct();
    _getHighestRating();
    _getNewIn();
    _getList();
    _getWallet();
  }

  useEffect(() => {
    allCalls();
  }, []);

  return (
    <SafeAreaScreen>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeftContainer}>
          <View style={styles.imageConatiner}>
            {/* <Image
                  source={require('../../../assets/avatar.png')}
                  style={styles.avater}
                /> */}
            <View
              style={styles.nameInitials}
            >
              <Text style={styles.nameInitialsText}>{
                loginResponse.firstname.charAt(0).toUpperCase() + loginResponse.lastname.charAt(0).toUpperCase()
              }</Text>
            </View>
            {/* <View style={styles.countCountainer}>
                  <Text style={styles.count}>3</Text>
                </View> */}
          </View>
          <View style={styles.leftTextContainer}>
            <Text style={styles.hello}>Hello</Text>
            <Text style={styles.userName}>{
              makeSentenceCase(loginResponse.firstname) + ' ' + makeSentenceCase(loginResponse.lastname)
            }</Text>
          </View>
        </View>
        {
          getListResponse.lists.length === 0 &&
          (
            <Pressable onPress={() => {
              props.navigation.navigate(Constants.ListScreen);
            }} style={styles.headerRigthContainer}>
              <Text style={styles.createList}>Create a list</Text>
            </Pressable>
          )
        }
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              setTimeout(() => {
                allCalls()
              }, 500)
            }}
          />
        }
      >
        <View style={styles.container}>
          {isLoading && <LoadingModal isLoading={isLoading} />}
          {myWallet.wallet.balance === 0 ? (
            <DashboardCarosel />
          ) : (
            <WalletComponent
              onPress={() => {
                props.navigation.navigate(Constants.WalletScreen);
              }}
              balance={myWallet.wallet.balance}
            />
          )}
          <View style={styles.productContainer}>
            <View>
              {/* Popular Items */}
              <View style={styles.listContainer}>
                {/* <Text style={styles.popular}>Popular</Text> */}
                <Text style={styles.popular}>All </Text>
                <Text style={styles.more}>More</Text>
              </View>
              <FlatList
                data={
                  fetchAllProductResponse && fetchAllProductResponse.products
                    ? fetchAllProductResponse.products
                    : []
                }
                horizontal
                style={styles.flatList}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item: any) => item.id.toString()}
                renderItem={({ item }) => (
                  <DashboardProductItem
                    onPress={() => {
                      props.navigation.navigate(
                        Constants.ProductDetailsScreen,
                        item,
                      );
                    }}
                    item={item}
                  />
                )}
              />
              {/* New in */}
              <View style={styles.listContainer}>
                <Text style={styles.popular}>New in</Text>
                <Text style={styles.more}>More</Text>
              </View>
              <FlatList
                data={
                  newIn ? newIn.data
                    : []
                }
                horizontal
                style={styles.flatList}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item: any) => item.id.toString()}
                renderItem={({ item }) => (
                  <DashboardProductItem
                    onPress={() => {
                      props.navigation.navigate(
                        Constants.ProductDetailsScreen,
                        item,
                      );
                    }}
                    item={item}
                  />
                )}
              />
              <View style={styles.listContainer}>
                <Text style={styles.popular}>Highest Ratings</Text>
                <Text style={styles.more}>More</Text>
              </View>
              <FlatList
                data={highRating && highRating.product
                  ? highRating.product
                  : []}
                horizontal
                style={styles.flatList}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item: any) => item.id.toString()}
                renderItem={({ item }) => (
                  <DashboardProductItem
                    onPress={() => {
                      props.navigation.navigate(
                        Constants.ProductDetailsScreen,
                        item,
                      );
                    }}
                    item={item}
                  />
                )}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: common.HP(2),
    backgroundColor: common.colors.background,
  },
  headerContainer: {
    height: common.WP(25),
    backgroundColor: common.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    marginLeft: common.WP(5),
    flex: 1,
  },
  headerRigthContainer: {
    width: common.WP(30),
    backgroundColor: common.colors.lightYellow,
    height: common.WP(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: common.WP(4),
    marginRight: common.WP(5),
    borderColor: common.colors.paleYellow,
    borderWidth: common.WP(0.5),
  },
  createList: {
    color: common.colors.paleYellow,
    fontSize: common.WP(4),
  },
  imageConatiner: {
    flexDirection: 'row',
  },
  nameInitials: {
    backgroundColor: common.colors.veryLighrGrey,
    width: common.WP(15),
    height: common.WP(15),
    borderRadius: common.WP(7.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameInitialsText: {
    color: common.colors.darkCard,
    fontSize: common.WP(6),
    fontWeight: 'bold',
  },
  count: {
    textAlign: 'center',
  },
  countCountainer: {
    height: common.WP(4),
    width: common.WP(4),
    backgroundColor: common.colors.lightPurple,
    marginLeft: common.WP(-3),
    top: common.WP(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: common.WP(4),
  },
  // avater: {
  //   width: common.WP(20),
  //   height: common.WP(20),
  //   resizeMode: 'stretch',
  //   alignSelf: 'center',
  // },
  leftTextContainer: {
    marginLeft: common.WP(2),
  },
  hello: {
    fontSize: common.WP(3),
  },
  userName: {
    fontSize: common.WP(4),
    fontWeight: 'bold',
  },
  productContainer: {
    paddingHorizontal: common.WP(5),
  },
  listContainer: {
    width: common.WP(90),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: common.WP(10),
    justifyContent: 'space-between',
  },
  popular: {
    fontSize: common.WP(5),
    fontWeight: 'bold',
  },
  more: {
    fontSize: common.WP(4),
    color: common.colors.red,
  },
  flatList: {
    marginTop: common.WP(5),
  },
  walletCOntainer: {
    height: common.WP(60),
    width: common.WP('100%'),
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: common.WP(12),
  },
  walletBackground: {
    height: common.WP(55),
    width: common.WP(90),
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  balance: {
    fontSize: common.WP(8),
    fontWeight: 'bold',
    marginLeft: common.WP(14),
    marginTop: common.WP(13),
    color: common.colors.paleYellow,
  },
  fundWallet: {
    height: common.WP(14),
    width: common.WP(27),
    borderRadius: common.WP(2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: common.colors.paleYellow,
    alignSelf: 'flex-end',
    marginRight: common.WP(5),
    marginTop: common.WP(7),
  },
  fundWalletText: {
    fontSize: common.WP(4),
    color: common.colors.black,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

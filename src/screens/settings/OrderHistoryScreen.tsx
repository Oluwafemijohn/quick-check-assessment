import moment from 'moment';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import EmptyList from '../../components/EmptyList';
import HeaderBar from '../../components/HeaderBar';
import OrderHistoryItem from '../../components/items/OrderHistoryItem';
import LoadingModal from '../../components/LoadingModal';
import common from '../../constants/common';
import Constants from '../../constants/Constants';
import { orderHistory } from '../../constants/ConstantString';
import TextConstant from '../../constants/TextConstant';
import { getCurrentUserOrders } from '../../network/Server';
import { IOrderHistoryResponse } from '../../types/Type';


function OrderHistoryScreen(props: any) {
  const [orders, setOrders] = React.useState<IOrderHistoryResponse>();
  const [isLoading, setIsLoading] = React.useState(false);

  const _getCurrentUserOrders = async () => {
    setIsLoading(true);
    await getCurrentUserOrders()
      .then((res) => {
        setIsLoading(false);
        if (res.statusCode === 200) {
          setOrders(res as unknown as IOrderHistoryResponse);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    _getCurrentUserOrders();
  }, [])

  return (
    <View style={styles.container}>
      <HeaderBar
        title={TextConstant.OrderHistory}
        actionText={' '}
        onPress={() => { }}
      />
      {isLoading && <LoadingModal isLoading={isLoading} />}

      <View style={styles.content}>
        <FlatList
          data={orders?.orders ?
            orders.orders.sort((a, b) =>
              moment(b.createdAt).diff(moment(a.createdAt))
            )
            : []}
          renderItem={({ item }) => (
            <OrderHistoryItem
              onPress={() => {
                props.navigation.navigate(Constants.OrderHistoryDetailsScreen, item);
              }}
              item={item} />
          )}
          keyExtractor={(item) => `${item._id}`}
          ListEmptyComponent={() => (<EmptyList />)}
          style={styles.list}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.colors.background,
  },
  content: {
    marginTop: common.W_5,
  },
  list: {
    marginBottom: common.W_17,
  },
});
export default OrderHistoryScreen;

import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import EmptyList from '../../components/EmptyList';
import HeaderBar from '../../components/HeaderBar';
import OrderHistoryDetailsItem from '../../components/items/OrderHistoryDetailsItem';
import common from '../../constants/common';
import TextConstant from '../../constants/TextConstant';
import { IOrderHistory } from '../../types/Type';
import { formatCurrencyWithDecimal } from '../../utilities';

function OrderHistoryDetailsScreen(props: any) {
    const items: IOrderHistory = props.route.params;

    console.log('====================================');
    console.log('items', items);
    console.log('====================================');
    return (
        <View style={styles.container}>
            <HeaderBar
                title={TextConstant.OrderHistory}
                actionText={' '}
                onPress={() => { }}
            />
            <View style={styles.content}>
                <FlatList
                    data={items.orderItems}
                    renderItem={({ item }) => (
                        <OrderHistoryDetailsItem item={item} />
                    )}
                    keyExtractor={(item) => `${item._id}`}
                    ListEmptyComponent={() => (<EmptyList />)}
                />
                <Text style={styles.totalText}>TOTAL</Text>
                <Text style={styles.total}>{formatCurrencyWithDecimal(items.total)}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        marginTop: common.W_5,
    },
    totalText: {
        color: common.colors.darkCard,
        fontSize: common.W_3,
        alignSelf: 'center',
        marginTop: common.W_10,
    },
    total: {
        fontSize: common.W_8,
        fontWeight: '400',
        alignSelf: 'center',
        color: common.colors.paleYellow,
    },
})

export default OrderHistoryDetailsScreen;
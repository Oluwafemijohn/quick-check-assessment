import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import common from '../../constants/common';
import Constants from '../../constants/Constants';
import { IOrderHistory } from '../../types/Type';
import moment from 'moment';
import { formatCurrencyWithDecimal } from '../../utilities';

interface IProps {
    id: number;
    date: string;
    status: string;
    tradeId: string;
}

function OrderHistoryItem({ item, onPress }: { item: IOrderHistory, onPress: () => void }) {
    const navigation = useNavigation();
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.leftSide} >
                <Text style={styles.tradeId}>{formatCurrencyWithDecimal(item.total)}</Text>
                <Text style={styles.date}>{moment(item.createdAt).format('DD/MM/YYYY')}</Text>
            </View>
            <View style={styles.rightSide} >
                <View style={item.status === 'pending' ? styles.status2 : styles.status}>
                    <Text style={styles.statusText}>{item.status}</Text>
                </View>
                <Pressable
                    onPress={() => {

                    }}
                >
                    <Text style={styles.viewAll}>View Details</Text>
                </Pressable>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: common.W_5,
        backgroundColor: common.colors.white,
        paddingVertical: common.W_4,
        marginBottom: common.W_5,
        paddingHorizontal: common.W_10,
        borderTopLeftRadius: common.W_3,
        borderTopRightRadius: common.W_3,
        borderBottomColor: common.colors.lightGrey,
        borderBottomWidth: 1,
    },
    leftSide: {
        width: common.WP(45),
    },
    rightSide: {
        width: common.WP(45),
    },
    tradeId: {
        color: common.colors.lightPurple,
        fontSize: common.W_5,
    },
    date: {
        color: common.colors.lightGrey,
        fontSize: common.W_3,
        marginTop: common.W_4,
    },
    status: {
        backgroundColor: common.colors.lightGreen,
        width: common.W_20,
        paddingVertical: common.W_1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: common.W_3,
    },
    status2: {
        backgroundColor: common.colors.paleYellow,
        width: common.W_20,
        paddingVertical: common.W_1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: common.W_3,
    },
    statusText: {
        fontSize: common.W_3,
    },
    viewAll: {
        marginTop: common.W_4,
        color: common.colors.lightPurple,
    },
})

export default OrderHistoryItem;
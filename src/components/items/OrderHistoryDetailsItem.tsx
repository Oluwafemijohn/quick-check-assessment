import React from 'react';
import { View, StyleSheet, Image, ImageProps, Text } from 'react-native';
import common from '../../constants/common';
import { IOrderHistoryItem } from '../../types/Type';


function OrderHistoryDetailsItem({ item }: { item: IOrderHistoryItem }) {
    return (
        <View style={styles.container}>
            {/* <Image source={item} style={styles.img} /> */}
            <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <View style={styles.sherzContainer}>
                    <Text style={styles.sherz}>SHERZ PRICE</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: common.W_5,
        paddingHorizontal: common.W_5,
        paddingVertical: common.W_5,
        borderBottomColor: common.colors.lightGrey,
        borderBottomWidth: 1,
        flexDirection: 'row',
        backgroundColor: common.colors.white,

    },
    img: {
        resizeMode: 'stretch',
        width: common.W_25,
        height: common.W_25,
    },
    name: {
        fontSize: common.W_3,
    },
    details: {
        marginLeft: common.W_5,
    },
    price: {
        fontSize: common.W_6,
        fontWeight: '600',
        color: common.colors.paleYellow,
        marginTop: common.W_2,
    },
    sherzContainer: {
        backgroundColor: common.colors.lightGreen,
        padding: common.W_1,
        borderRadius: common.W_3,
        marginTop: common.W_3
    },
    sherz: {
        fontSize: common.W_3,
        color: common.colors.white,
    },
})

export default OrderHistoryDetailsItem;
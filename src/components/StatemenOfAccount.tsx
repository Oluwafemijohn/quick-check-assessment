import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import common from '../constants/common';

interface IProps {
    id: number,
    ref: string,
    status: string,
    amount: string,
    date: string,
}

function StatemenOfAccount({ item }: {
    item: IProps
}) {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer} >
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{item.ref}</Text>
                    <Text style={styles.amount}>{item.amount}</Text>
                </View>
                <View style={styles.nameContainer}>
                    <View style={styles.paidContainer} >
                        <View style={styles.greenIcon} />
                        <Text style={styles.status}>{item.status}</Text>
                    </View>
                    <Text style={styles.date}>{item.date}</Text>
                </View>
            </View>
            <Image source={require('../../assets/Vector.png')} style={styles.arrow} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: common.colors.lightGrey,
        paddingBottom: common.W_2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameContainer: {
        flexDirection: 'row',
        marginTop: common.W_2,
    },
    name: {
        flex: 1,
        fontSize: common.W_4,
        color: common.colors.text1,
    },
    status: {
        fontSize: common.W_3,
        color: common.colors.text1,
        marginTop: common.W_2,
        marginLeft: common.W_2,
    },
    amount: {
        fontSize: common.WP(3.5),
        color: common.colors.green,
    },
    date: {
        fontSize: common.WP(3),
        color: common.colors.grey,
    },
    paidContainer: {
        // backgroundColor: common.colors.green,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,


    },
    greenIcon: {
        width: common.WP(2),
        height: common.WP(2),
        backgroundColor: common.colors.green,
        borderRadius: common.WP(2),
        marginTop: common.W_2,
    },
    innerContainer: {
        flex: 1,
        // flexDirection: 'row',
    },
    arrow: {
        width: common.WP(2),
        height: common.WP(2),
        marginHorizontal: common.W_2,
    }
})

export default StatemenOfAccount;
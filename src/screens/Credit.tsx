import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import BellIcon from '../assets/svg/BellIcon';
import StatemenOfAccount from '../components/StatemenOfAccount';
import common from '../constants/common';
import { statementOfAccounts } from '../constants/DummyData';

function Credit(props: any) {
    return (
        <View style={styles.container} >
            <View style={styles.nameContainer} >
                <Text style={styles.name} >Hi, Ola Pharmacy</Text>
                <BellIcon />
            </View>
            <ScrollView>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <ImageBackground source={require('../../assets/background.png')} style={styles.image} >
                        <Text style={styles.yourSupplier} >YOUR SUPPLIER CREDIT</Text>
                        <View style={styles.creditContainer} >
                            <Text style={styles.creditDue} >Credit Due:</Text>
                            <Text style={styles.creditDueBalance} >₦3,000,000</Text>
                        </View>
                        <View style={styles.creditPaymentContainer} >
                            <Text style={styles.creditPayment} >Credit Repayment Due:</Text>
                            <Text style={styles.creditPaymentType} >From Invoice Date</Text>
                        </View>
                        <Image source={require('../../assets/makePayment.png')} style={styles.creditImage} />
                    </ImageBackground>

                    <ImageBackground source={require('../../assets/background.png')} style={styles.image} >
                        <Text style={styles.yourSupplier} >YOUR SUPPLIER CREDIT</Text>
                        <View style={styles.creditContainer} >
                            <Text style={styles.creditDue} >Credit Due:</Text>
                            <Text style={styles.creditDueBalance} >₦3,000,000</Text>
                        </View>
                        <View style={styles.creditPaymentContainer} >
                            <Text style={styles.creditPayment} >Credit Repayment Due:</Text>
                            <Text style={styles.creditPaymentType} >From Invoice Date</Text>
                        </View>
                        <Image source={require('../../assets/makePayment.png')} style={styles.creditImage} />
                    </ImageBackground>
                </ScrollView>
                <View style={styles.statementOfAccount} >
                    <Text style={styles.statementOfAccountText} >Statement of Account</Text>
                    <Text style={styles.viewMore} >View more</Text>
                </View>
                {
                    statementOfAccounts.map((item: any, index: number) => (
                        <StatemenOfAccount item={item} />

                    ))
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: common.W_5
    },
    nameContainer: {
        flexDirection: 'row',
        marginTop: common.W_5,
        marginBottom: common.W_5
    },
    name: {
        flex: 1,
        fontSize: common.W_5,
        fontWeight: '600',
        color: common.colors.text1
    },
    image: {
        width: common.WP(81),
        height: common.WP(46),
        marginRight: common.W_2,
    },
    yourSupplier: {
        fontSize: common.WP(3),
        fontWeight: 'bold',
        marginLeft: common.WP(5),
        marginTop: common.WP(5),
        color: common.colors.text1,
    },
    creditDue: {
        fontSize: common.WP(3),
        marginLeft: common.WP(5),
        marginTop: common.WP(6.5),
        color: common.colors.text1,
    },
    creditDueBalance: {
        fontSize: common.WP(4),
        fontWeight: 'bold',
        marginLeft: common.WP(2),
        marginTop: common.WP(6),
        color: common.colors.text1,
    },
    creditContainer: {
        flexDirection: 'row',
    },
    creditPaymentContainer: {
        flexDirection: 'row',
    },
    creditPayment: {
        fontSize: common.WP(3),
        marginLeft: common.WP(5),
        marginTop: common.WP(5),
        color: common.colors.text1,
    },
    creditPaymentType: {
        fontSize: common.WP(3.5),
        marginLeft: common.WP(1),
        marginTop: common.WP(5),
        fontWeight: '600',
        color: common.colors.text1,
    },
    creditImage: {
        width: common.WP(35),
        height: common.WP(15),
        marginTop: common.WP(3),
        marginLeft: common.WP(45),
        color: common.colors.text1,
    },
    statementOfAccount: {
        flexDirection: 'row',
        marginBottom: common.WP(5),
    },
    statementOfAccountText: {
        fontSize: common.WP(3.5),
        fontWeight: 'bold',
        marginLeft: common.WP(5),
        marginTop: common.WP(5),
        color: common.colors.text1,
        flex: 1,
    },
    viewMore: {
        fontSize: common.WP(3.5),
        fontWeight: '600',
        marginRight: common.WP(5),
        marginTop: common.WP(5),
        color: common.colors.activeTabText,
    },
})

export default Credit;
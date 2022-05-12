import moment from 'moment';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Pressable, Text, Image, Alert, FlatList } from 'react-native';
import AppDatePicker2 from '../components/form/AppDatePicker2';
import AppTextInput from '../components/form/AppTextInput';
import HeaderBar from '../components/HeaderBar';
import common from '../constants/common';
import { formatDateOfBirth } from '../utilities';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { radioButtonsData } from '../constants/Constants';
import AppTextInputPassWord from '../components/form/AppTextInputPassWord copy';
import AppButton from '../components/form/AppButton';
import { ScrollView } from 'react-native-gesture-handler';

import { IList } from '../types/Type';
import BottomSheetTemplate from '../components/BottomSheetTemplate';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useIsFocused } from '@react-navigation/native';

function Account(props: any) {

    const isFocus = useIsFocused()

    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const modalPresent = useCallback(() => {
        bottomSheetRef.current?.present();
    }, []);
    const modalClose = useCallback(() => {
        bottomSheetRef.current?.close();
    }, []);

    useEffect(() => {
        modalPresent();
    }, [isFocus]);



    return (
        <View style={styles.container} >
            <View style={styles.tryConctainer}>
                <Image source={require('../../assets/chevron-left.png')} style={styles.image} />
                <Text>Try Drugstoc Credit</Text>
            </View>
            <Image source={require('../../assets/nairaImage.png')} style={styles.nairaImage} />
            <Text style={styles.eligible} >Your eligible credit is NGN 6,000,000</Text>
            <Text style={styles.support} >At Drugstoc we support your endeavor, access credits on the fly.</Text>
            <Text style={styles.howMuch} >How much worth of Credit?</Text>
            <AppTextInput
                value={'10,000,000'}
                placeholder="Enter Email"
                errors={''}
                onChangeText={text => {
                    // setFieldValue('email', (text as string).trim());
                }}
                onBlur={() => { }}
                width={common.WP('90%')}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
                countryCode={'NGN'}
                marginBottom={2}
            />
            <Text style={styles.error}>Amount above limit. <Text style={styles.increase} >How to increse your limit</Text></Text>

            <BottomSheetTemplate
                bottomSheetRef={bottomSheetRef}
                onClose={modalClose}
            // title='Enter Amount'
            >
                <View style={styles.listContainer}>
                    <Text style={styles.improve} >HOW TO IMPROVE CREDIT LIMITS PLANS</Text>
                    <Text style={styles.improve2} >By using your Drugstoc app consistently and in the right way, you can grow your credit limits.</Text>
                    <Text style={styles.improve3} >Here’s what to do.</Text>
                    <Image source={require('../../assets/Group4.png')} style={styles.image2} />
                    <Image source={require('../../assets/Group43826.png')} style={styles.image3} />
                </View>
            </BottomSheetTemplate>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: common.colors.white,

    },
    image: {
        width: 20,
        height: 20,
        marginRight: common.WP(30),
    },
    image2: {
        width: common.WP('90%'),
        height: common.WP('34%'),

        marginTop: common.WP(8),
    },
    image3: {
        width: common.WP('70%'),
        height: common.WP('12%'),
        alignSelf: 'center',
        marginTop: common.WP(15),
    },
    tryConctainer: {
        flexDirection: 'row',
        marginTop: common.WP(10),
        color: common.colors.text1,
    },
    nairaImage: {
        width: common.WP(33),
        height: common.WP(20),
        alignSelf: 'center',
        marginTop: common.WP(10),
    },
    eligible: {
        fontSize: common.WP(3),
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: common.WP(5),
    },
    support: {
        fontSize: common.WP(3),
        alignSelf: 'center',
        marginTop: common.WP(5),
        textAlign: 'center',
        width: common.WP(80),
        color: common.colors.grey2,
    },
    howMuch: {
        fontSize: common.WP(3),
        marginLeft: common.WP(5),
        marginTop: common.WP(5),
    },
    input: {
        alignSelf: 'center',
    },
    error: {
        fontSize: common.WP(3),
        color: common.colors.red,
        marginLeft: common.WP(5),
    },
    increase: {
        color: common.colors.blue,
        fontSize: common.WP(3),
    },
    listContainer: {
        paddingHorizontal: common.W_5,
    },
    improve: {
        fontSize: common.WP(4),
        color: common.colors.white,
        fontWeight: 'bold',
    },
    improve2: {
        fontSize: common.WP(4),
        color: common.colors.white,
        marginTop: common.WP(5),
        textAlign: 'center',
    },
    improve3: {
        fontSize: common.WP(5),
        color: common.colors.white,
        marginTop: common.WP(5),
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
});

export default Account;
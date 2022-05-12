import React, { useCallback, useRef } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, FlatList, Pressable, Dimensions } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';

import common from '../constants/common';
import AppPicker2 from '../components/form/AppPicker2';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import AppButton from '../components/form/AppButton';
import AppTextInput2 from '../components/form/AppTextInput2';
import BottomSheetTemplate2 from '../components/BottomSheetTemplate2';
import { monthData, typeData } from '../constants/DummyData';
import AppTextInput3 from '../components/form/AppTextInput3';
import RouteConstant from '../navigations/RouteConstant';


const LoginDetails = {
    amount: '',
    bvn: '',
};

const validationSchema = Yup.object({
    amount: Yup.string().email().required().label('Email'),
    bvn: Yup.string().required().label('BVN'),
});

function Home(props: any) {

    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState({
        month: '',
        type: '',
    });
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const modalPresent = useCallback(() => {
        bottomSheetRef.current?.present();
    }, []);
    const modalClose = useCallback(() => {
        bottomSheetRef.current?.close();
    }, []);

    const bottomSheetRef2 = useRef<BottomSheetModal>(null);
    const modalPresent2 = useCallback(() => {
        bottomSheetRef2.current?.present();
    }, []);
    const modalClose2 = useCallback(() => {
        bottomSheetRef2.current?.close();
    }, []);

    return (
        <View style={styles.container} >
            <View style={styles.tryConctainer}>
                <Image source={require('../../assets/chevron-left.png')} style={styles.image} />
                <Text>{' '}</Text>
            </View>
            <Text style={styles.Thanks} >Thank You for showing interest in Drugstoc-Sterling loan.</Text>
            <ScrollView>
                <Formik
                    initialValues={LoginDetails}
                    onSubmit={values => {

                    }}
                    validationSchema={validationSchema}>
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        errors,
                        touched,
                        isSubmitting,
                        handleSubmit,
                    }) => {

                        return (
                            <>
                                <View style={styles.formContainer}>
                                    <Text style={styles.label}>Provide Details</Text>
                                    <AppTextInput2
                                        value={values.amount}
                                        placeholder="Loan Amount"
                                        errors={touched.amount && errors.amount}
                                        onChangeText={handleChange('amount')}
                                        onBlur={handleBlur('amount')}
                                        width={common.WP('90%')}
                                        keyboardType="number-pad"
                                        autoCapitalize="none"
                                        icon={true}
                                        countryCode={'NGN'}
                                        marginBottom={0}
                                    />

                                    <AppPicker2
                                        onPress={() => {
                                            modalPresent();
                                        }}
                                        value={data.month}
                                        placeholder="Select Duration"
                                        width={common.WP('90%')}
                                        error={''}
                                        marginTop={0}
                                    />

                                    <AppPicker2
                                        onPress={() => {
                                            modalPresent2();
                                        }}
                                        value={data.type}
                                        placeholder="Select Type"
                                        width={common.WP('90%')}
                                        error={''}
                                        marginTop={0}
                                    />

                                    <AppTextInput3
                                        value={values.bvn}
                                        placeholder="Enter your BVN (optional)"
                                        errors={touched.bvn && errors.bvn}
                                        onChangeText={handleChange('bvn')}
                                        onBlur={handleBlur('bvn')}
                                        width={common.WP('90%')}
                                        keyboardType="number-pad"
                                        autoCapitalize="none"
                                        icon={true}
                                        marginTop={0}
                                    />

                                    <AppButton
                                        style={styles.button}
                                        title="NOTIFY ME"
                                        onPress={() => {
                                            props.navigation.navigate(RouteConstant.RepaymentPlanScreen);
                                        }}
                                        width={90}
                                    // marginTop={}
                                    />
                                </View>

                            </>
                        );
                    }}
                </Formik>
            </ScrollView>
            <BottomSheetTemplate2
                bottomSheetRef={bottomSheetRef}
                onClose={modalClose}
                title='Select duration'
            >
                <View style={styles.listContainer}>

                    <FlatList
                        data={monthData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <Pressable
                                onPress={() => {
                                    setData({ ...data, month: item });
                                    modalClose();
                                }}
                                style={styles.portfolioListItem}
                            >
                                <Text style={styles.portfolioListItemText}>{item}</Text>
                            </Pressable>
                        )}
                    />
                </View>
            </BottomSheetTemplate2>

            <BottomSheetTemplate2
                bottomSheetRef={bottomSheetRef2}
                onClose={modalClose2}
                title='Select Type'
            >
                <View style={styles.listContainer}>

                    <FlatList
                        data={typeData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <Pressable
                                onPress={() => {
                                    setData({ ...data, month: item });
                                    modalClose2();
                                }}
                                style={styles.portfolioListItem}
                            >
                                <Text style={styles.portfolioListItemText}>{item}</Text>
                            </Pressable>
                        )}
                    />
                </View>
            </BottomSheetTemplate2>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: common.colors.white,
    },
    tryConctainer: {
        flexDirection: 'row',
        marginTop: common.WP(10),
        color: common.colors.text1,
    },
    image: {
        width: 20,
        height: 20,
        marginRight: common.WP(30),
    },
    Thanks: {
        fontSize: common.WP(4),
        width: common.WP(80),
        textAlign: 'center',

        marginTop: common.WP(5),
        marginLeft: common.WP(5),
        color: common.colors.grey3,
    },
    label: {
        fontSize: common.WP(4),
        alignSelf: 'flex-start',
        marginLeft: common.WP(5),
    },
    button: {
        alignSelf: 'center',
        top: common.HP(13),
    },
    formContainer: {
        alignItems: 'center',
    },
    portfolioListItem: {
        paddingVertical: common.W_4,
        borderBottomColor: common.colors.lightGrey,
        borderBottomWidth: 1,
    },
    portfolioListItemText: {},
    listContainer: {
        paddingHorizontal: common.W_5,
    },
})

export default Home;
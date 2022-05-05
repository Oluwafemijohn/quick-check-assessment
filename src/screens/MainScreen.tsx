import moment from 'moment';
import React, { useEffect, useState } from 'react';
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
import { getList, getUser, registerUser } from '../network/Server';
import { IList } from '../types/Type';

function MainScreen(props: any) {
    const [isFirstTab, setIsFirstTab] = useState(true);
    const [isSelected, setIsSelected] = useState(false);
    const [selectedValue, setSelectedValue] = useState<RadioButtonProps[]>();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        userType: '',
        dob: '',
        gender: selectedValue ? selectedValue[0].value : '',
        address: '',
        username: '',
    });




    const [isError, setIsError] = useState({
        password: false,
        first_name: false,
        last_name: false,
        email: false,
        dob: false,
        address: false,
        userType: false,
        gender: false,
        username: false,
    })

    const [err, setErr] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        user_type: '',
        dob: '',
        address: '',
        gender: '',
        username: ''
    })

    const [radioButtons, setRadioButtons] =
        useState<RadioButtonProps[]>(radioButtonsData);
    function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
        setSelectedValue(radioButtonsArray.filter((item: RadioButtonProps) => {
            return item.selected === true;
        }));
        setRadioButtons(radioButtonsArray);
    }
    const [list, setList] = useState<IList[]>([]);

    const _createUser = async () => {

        if (
            data.firstName !== '' &&
            data.lastName !== '' &&
            data.email !== '' &&
            data.password !== '' &&
            data.userType !== '' &&
            data.dob !== '' &&
            data.address !== '' &&
            selectedValue !== undefined &&
            data.username !== ''
        ) {
            const myData = {
                first_name: data.firstName,
                last_name: data.lastName,
                email: data.email.toLowerCase(),
                password: data.password,
                user_type: data.userType,
                dob: data.dob,
                address: data.address,
                gender: selectedValue[0].value!,
                username: data.username
            }
            await registerUser(myData)
                .then(res => {
                    if (res.statusCode === 201) {
                        Alert.alert('Success', 'Register Successfully');
                        _getUser();
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            Alert.alert('All the fields are required')
        }

    }

    const _getUser = async () => {

        if (
            data.firstName !== '' &&
            data.lastName !== '' &&
            data.email !== '' &&
            data.password !== '' &&
            data.userType !== '' &&
            data.dob !== '' &&
            data.address !== '' &&
            selectedValue !== undefined &&
            data.username !== ''
        ) {
            const myData = {
                first_name: data.firstName,
                last_name: data.lastName,
                email: data.email.toLowerCase(),
                password: data.password,
                user_type: data.userType,
                dob: data.dob,
                address: data.address,
                gender: selectedValue[0].value!,
                username: data.username
            }
            await getUser(myData)
                .then(res => {
                    _getList(res.token)
                })
                .catch(err => { })
        } else {
            Alert.alert('All the fields are required')
        }

    }

    const _getList = async (token: string) => {
        await getList(token)
            .then(res => {
                console.log('ressssss', res);

                setList(Object.values(res));
                // setList(Object.values(res).filter((item: IList) => {
                //     return item.email !== undefined;
                // }));
            })
            .catch(err => { })
    }

    console.log('====================================');
    console.log('list', list);
    console.log('====================================');

    return (
        <View style={styles.container} >
            <HeaderBar
                title='Profile'
                actionText=' '
            />
            <View style={styles.tab} >
                <Pressable onPress={() => {
                    setIsFirstTab(true);
                }} style={isFirstTab ? styles.tabPress : styles.tabPressRight} >
                    <Text style={isFirstTab ? styles.tabTextPress : styles.tabText} >Profile</Text>
                </Pressable>
                <Pressable onPress={() => {
                    setIsFirstTab(false);
                }} style={!isFirstTab ? styles.tabPress : styles.tabPressRight} >
                    <Text style={!isFirstTab ? styles.tabTextPress : styles.tabText} >Users Account</Text>
                </Pressable>
            </View>

            {
                isFirstTab ? (
                    <ScrollView>
                        <View>
                            <Image style={styles.image} source={require('../../assets/avatar.png')} />
                        </View>
                        <View style={styles.form}>
                            <Text style={styles.label} >First name</Text>
                            <AppTextInput
                                width={common.WP(90)}
                                placeholder='First Name'
                                value={data.firstName}
                                style={styles.input}
                                marginTop={2}
                                onChangeText={(text) => {
                                    setData({ ...data, firstName: text as string })
                                }}
                                errors={isError.first_name && err.first_name}
                            />
                            <Text style={styles.label} >Last name</Text>
                            <AppTextInput
                                width={common.WP(90)}
                                placeholder='Last Name'
                                value={data.lastName}
                                style={styles.input}
                                marginTop={2}
                                onChangeText={(text) => {
                                    setData({ ...data, lastName: text as string })
                                }}
                                errors={isError.last_name && err.last_name}
                            />
                            <Text style={styles.label} >User name</Text>
                            <AppTextInput
                                width={common.WP(90)}
                                placeholder='User Name'
                                value={data.username}
                                style={styles.input}
                                marginTop={2}
                                onChangeText={(text) => {
                                    setData({ ...data, username: text as string })
                                }}
                                errors={isError.username && err.username}
                            />
                            <Text style={styles.label} >Email</Text>
                            <AppTextInput
                                width={common.WP(90)}
                                placeholder='Email'
                                value={data.email}
                                style={styles.input}
                                marginTop={2}
                                keyboardType='email-address'
                                errors={isError.email && err.email}
                                onChangeText={(text) => {
                                    setData({ ...data, email: text as string })
                                }}
                            />
                            <Text style={styles.label} >Password</Text>
                            <AppTextInputPassWord
                                width={common.WP(90)}
                                placeholder='Password'
                                value={data.password}
                                style={styles.input}
                                // marginTop={2}
                                errors={isError.password && err.password}
                                onBlur={() => { }}
                                keyboardType='default'
                                onChangeText={(e) => {
                                    setData({ ...data, password: e as string });
                                }}
                            />
                            <Text style={styles.label} >Date of birth</Text>
                            <AppDatePicker2
                                value={data.dob}
                                width={common.WP(90)}
                                placeholder='Choose date'
                                style={styles.input}
                                errors={isError.dob && err.dob}
                                onPress={() => {
                                    setIsModalVisible(true);
                                }}
                                onBackdropPress={() => {
                                    setIsModalVisible(false);
                                }}
                                onDateChange={(date) => {
                                    setIsModalVisible(false);
                                    setIsSelected(true);
                                    setData({
                                        ...data, dob: formatDateOfBirth(
                                            moment(date?.toString()).format('YYYY-MM-DD'),
                                        )
                                    });
                                }}
                                isSelected={isSelected}
                                isModalVisible={isModalVisible}
                                marginBottom={5}
                                marginTop={0}
                            />

                            <Text style={styles.label} >Gender</Text>
                            <RadioGroup
                                radioButtons={radioButtons}
                                onPress={onPressRadioButton}
                                layout={'row'}
                                containerStyle={styles.radioGroupContainer}
                            />

                            <Text style={styles.label} >Address</Text>
                            <AppTextInput
                                width={common.WP(90)}
                                placeholder='Address'
                                value={data.address}
                                style={styles.input}
                                marginTop={2}
                                errors={isError.address && err.address}
                                onChangeText={(text) => {
                                    setData({ ...data, address: text as string })
                                }}
                            />

                            <Text style={styles.label} >User type</Text>
                            <AppTextInput
                                width={common.WP(90)}
                                placeholder='User type'
                                value={data.userType}
                                style={styles.input}
                                marginTop={2}
                                errors={isError.address && err.address}
                                onChangeText={(text) => {
                                    setData({ ...data, userType: text as string })
                                }}
                            />

                            <AppButton
                                style={styles.button}
                                title="Register"
                                onPress={() => {
                                    _createUser();
                                }
                                }
                                width={90}
                                backgroundColor={common.colors.white}
                                borderColor={common.colors.lightGrey}
                            />
                        </View>
                    </ScrollView>
                )

                    : (
                        <FlatList
                            //@ts-ignore
                            data={list.filter(item => item !== 200 && item !== undefined)}
                            renderItem={({ item }) => (
                                <>
                                    <Text>
                                        {
                                            item.first_name + ' ' + item.last_name
                                        }
                                    </Text>
                                </>)
                            }
                            keyExtractor={(item, index) => index.toString()}
                        />
                    )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tab: {
        backgroundColor: common.colors.lightLightGrey,
        height: common.W_12,
        marginHorizontal: common.W_5,
        flexDirection: 'row',
        borderRadius: common.W_15,
    },
    tabPress: {
        backgroundColor: common.colors.black,
        height: common.W_12,
        width: common.WP(45),
        borderRadius: common.W_6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabPressRight: {
        backgroundColor: common.colors.lightLightGrey,
        height: common.W_12,
        width: common.WP(45),
        borderRadius: common.W_6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabText: {
        fontSize: common.W_4,
        color: common.colors.black,
        fontWeight: '600',
    },
    tabTextPress: {
        fontSize: common.W_4,
        color: common.colors.white,
        fontWeight: '600',
    },
    image: {
        width: common.W_20,
        height: common.W_20,
        borderRadius: common.W_20,
        alignSelf: 'center',
        marginTop: common.W_10,
    },
    form: {

    },
    label: {
        fontSize: common.W_4,
        color: common.colors.black,
        marginLeft: common.W_5,
    },
    input: {
        alignSelf: 'center',
    },
    radioGroupContainer: {
        marginHorizontal: common.WP(5),
        marginVertical: common.WP(5),
    },
    button: {
        alignSelf: 'center',
    },
    SecondBody: {

    }
});

export default MainScreen;
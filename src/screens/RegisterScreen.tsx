import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { AppText as Text } from '../components/AppText'
import KeyboardAvoidingViewAndKeyBoardDisMiss from '../components/KeyboardAvoidingViewAndKeyBoardDisMiss'
import { Formik } from 'formik';
import * as Yup from 'yup';
import AppButton from '../components/AppButton';
import RouteConstant from '../navigations/RouteConstant';
import common from '../constants/common';
import AppTextInput4 from '../components/form/AppTextInput4';
import AppTextInputPassWord4 from '../components/form/AppTextInputPassWord4';
import { ILogin } from '../types/Type';
import { createTable, getDBConnection, getUser, saveUser, updateUser } from '../db/db-service';
import { useIsFocused } from '@react-navigation/native';





const passwordDetails = {
    email: '',
    password: '',
};

const validationSchema = Yup.object({
    email: Yup.string().email().required().label('Email'),
    password: Yup.string()
        .trim()
        .required()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            'Password must contain at least 8 Characters, one Uppercase, one Lowercase, one Number and one special case Character',
        )
        .label('Password'),
});

export default function RegisterScreen(props: any) {
    const [user, setUser] = useState<ILogin[]>([]);
    const [newUser, setNewUser] = useState<ILogin>({
        id: 1,
        email: '',
        password: '',
    });


    const loadDataCallback = useCallback(async () => {
        try {
            const initTodos = [{
                id: 1,
                email: 'admin',
                password: 'admin',
            }];
            const db = await getDBConnection();
            await createTable(db);
            const storedTodoItems = await getUser(db);
            if (storedTodoItems.length > 0) {
                setUser(storedTodoItems);
            } else {
                // await saveUser(db, initTodos);
                setUser(initTodos);
            }
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        loadDataCallback();
    }, [loadDataCallback]);

    const addUser = async (newUser: ILogin) => {
        // if (!newTodo.trim()) return;
        try {
            // const newTodos = [{
            //     id: user.reduce((acc, cur) => {
            //         if (cur.id > acc.id) return cur;
            //         return acc;
            //     }).id + 1,
            //     email: newUser.email,
            //     password: newUser.password,
            // }];
            // setTodos(newTodos);
            const db = await getDBConnection();
            await saveUser(db, newUser);
            props.navigation.navigate(RouteConstant.LoginScreen);
            // setNewTodo('');
        } catch (error) {
            console.error(error);
        }
    };

    const _updateUser = async (newUser: ILogin) => {
        try {
            const db = await getDBConnection();
            await createTable(db);
            await updateUser(db, newUser);
            props.navigation.navigate(RouteConstant.LoginScreen);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>

                <KeyboardAvoidingViewAndKeyBoardDisMiss>
                    <Text style={styles.getStarted} >Sign up here</Text>
                    <Text style={styles.createAccount}>Supply your details to get started</Text>
                    <Formik
                        initialValues={passwordDetails}
                        onSubmit={values => {
                            if (user.length === 0) {
                                addUser({
                                    id: 1,
                                    email: values.email,
                                    password: values.password,
                                });
                            } else {
                                _updateUser({
                                    id: user[0].id,
                                    email: values.email,
                                    password: values.password,
                                })
                            }

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
                            setFieldValue,
                        }) => {
                            return (
                                <>
                                    <View style={styles.form} >

                                        <Text style={styles.label}>Email Name</Text>
                                        <AppTextInput4
                                            value={values.email}
                                            placeholder="Enter your email address"
                                            errors={touched.email && errors.email}
                                            onChangeText={text => {
                                                setFieldValue('email', (text as string).trim());
                                            }}
                                            onBlur={handleBlur('email')}
                                            width={common.WP('90%')}
                                            keyboardType="email-address"
                                            autoCapitalize="none"
                                            marginTop={2}
                                        />

                                        <Text style={styles.label}>Password</Text>
                                        <AppTextInputPassWord4
                                            value={values.password}
                                            placeholder="Enter your password"
                                            errors={touched.password && errors.password}
                                            onChangeText={(text) => {
                                                setFieldValue('password', (text as string).trim());
                                            }}
                                            onBlur={handleBlur('password')}
                                            width={common.WP('90%')}
                                            keyboardType="default"
                                            marginTop={2}
                                            icon={true}
                                        />
                                        {/* <Text
                                            //@ts-ignore
                                            onPress={() => props.navigation.navigate(RouteConstant.ForgetPasswordScreen)} style={styles.forgetPassword} >Forgot password?</Text> */}

                                        <AppButton
                                            style={styles.button}
                                            title="Register"
                                            submitting={isSubmitting}
                                            onPress={handleSubmit}
                                            // onPress={() =>
                                            //     props.navigation.navigate(RouteConstant.TabNavigation)
                                            // }
                                            width={90}
                                            marginTop={15}
                                        />
                                        <Text style={styles.alreadyHaveAccount} >Don't have an account? <Text
                                            //@ts-ignore
                                            onPress={() =>
                                                props.navigation.navigate(RouteConstant.LoginScreen)
                                            } style={styles.signIn} >Sign in</Text> </Text>
                                    </View>
                                </>
                            );
                        }}
                    </Formik>
                </KeyboardAvoidingViewAndKeyBoardDisMiss>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: common.colors.white,
        paddingHorizontal: common.WP(5),
    },
    getStarted: {
        fontSize: common.W_6,
        marginTop: common.HP(4),
        color: common.colors.textColor,
    },
    createAccount: {
        fontSize: common.W_4,
        marginTop: common.WP(2),
        color: common.colors.grey500,
    },
    label: {
        fontSize: common.W_4,
        marginTop: common.WP(2),
        color: common.colors.grey500,
    },
    button: {
        marginTop: common.WP(2),
        alignSelf: 'center',
    },
    form: {
        marginTop: common.WP(10),
    },
    alreadyHaveAccount: {
        fontSize: common.W_4,
        color: common.colors.grey500,
        marginBottom: common.WP(10)
    },
    signIn: {
        color: common.colors.orange400,
    },
    forgetPassword: {
        fontSize: common.W_4,
        color: common.colors.blue400,
        // marginTop: common.WP(2),
        alignSelf: 'flex-end',
    },
})
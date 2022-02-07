import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Alert,
} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import * as Yup from 'yup';
import {Formik} from 'formik';
import AppTextInput from '../../components/form/AppTextInput';
import AppButton from '../../components/form/AppButton';
import AppTextInputPassWord from '../../components/form/AppTextInputPassWord';
import colors from '../../constants/colors';
import Constants from '../../constants/Constants';
import {signIn} from '../../network/Server';
import {ISignIn} from '../../types/Type';
import common from '../../constants/common';

const LoginDetails = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email().required().label('Email'),
  password: Yup.string()
    .trim()
    .required()
    .matches(/^[ A-Za-z0-9_@./#&+-]{6,}$/, 'At least 6 character'),
});

function SignInScreen(props: any) {
  const handleCall = async (values: ISignIn) => {
    await signIn(values).then(res => {
      if (res.statusCode === 200) {
        props.navigation.navigate(Constants.TabNavigation);
      } else {
        Alert.alert(res.message ? res.message : 'Something went wrong');
      }
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/sign-in-background.png')}
        style={styles.imageBackground}>
        <View style={styles.header} />
        <View style={styles.content}>
          <View style={styles.lowerContainer}>
            <ScrollView>
              <Formik
                initialValues={LoginDetails}
                onSubmit={values => {
                  handleCall(values);
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
                  const {email, password} = values;

                  return (
                    <>
                      <Text style={styles.label}>Email Address</Text>
                      <AppTextInput
                        value={email}
                        placeholder="Enter Email"
                        errors={touched.email && errors.email}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        width={WP('80%')}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        icon={true}
                      />
                      <Text style={styles.label}>Enter Password</Text>
                      <AppTextInputPassWord
                        value={password}
                        placeholder="Enter Password "
                        errors={touched.password && errors.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        width={WP('80%')}
                        keyboardType="default"
                        icon={require('../../../assets/show-password-icon.png')}
                      />
                      <AppButton
                        style={styles.button}
                        title="Sign in"
                        submitting={isSubmitting}
                        onPress={handleSubmit}
                        width={80}
                      />
                      <Text style={styles.forgetPassword}>
                        Forgot password?{' '}
                        <Text
                          onPress={() =>
                            props.navigation.navigate(
                              Constants.ForgetPasswordScreen,
                            )
                          }
                          style={styles.resetPassword}>
                          Reset
                        </Text>{' '}
                      </Text>
                      <AppButton
                        style={styles.button}
                        title="Register"
                        submitting={isSubmitting}
                        onPress={() =>
                          props.navigation.navigate(Constants.SIGN_UP_SCREEN)
                        }
                        width={80}
                        backgroundColor={common.colors.white}
                        borderColor={common.colors.lightGrey}
                      />
                    </>
                  );
                }}
              </Formik>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  header: {
    flex: 0.5,
  },
  content: {
    flex: 0.85,
    borderTopLeftRadius: WP(10),
    borderTopRightRadius: WP(10),
    overflow: 'hidden',
    flexGrow: 0.7,
    backgroundColor: colors.white,
  },
  lowerContainer: {
    borderTopLeftRadius: WP(10),
    borderTopRightRadius: WP(10),
    width: '100%',
    height: '110%',
    alignItems: 'center',
    paddingTop: WP(8),
  },
  button: {},
  label: {
    color: colors.black,
    alignSelf: 'flex-start',
    marginBottom: WP(-2),
    marginTop: WP(3),
  },
  forgetPassword: {
    color: colors.black,
    alignSelf: 'center',
    marginTop: common.WP(2),
  },
  resetPassword: {
    color: colors.red,
  },
  notRegistered: {
    color: colors.black,
    fontSize: WP(4),
    marginTop: WP(8),
    alignSelf: 'center',
  },
  signUp: {
    color: colors.black,
    marginTop: WP(4),
    fontWeight: 'bold',
    fontSize: WP(5),
    alignSelf: 'center',
    marginBottom: WP(30),
  },
});

export default SignInScreen;

import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import * as Yup from 'yup';
import {Formik} from 'formik';
import SafeAreaScreen from '../../components/SafeAreaScreen';
import AppTextInput from '../../components/form/AppTextInput';
import AppButton from '../../components/form/AppButton';
import colors from '../../constants/colors';
import Constants from '../../constants/Constants';
import {registerUser} from '../../network/Server';
import {IUser} from '../../types/Type';
import common from '../../constants/common';

const signUpDetails = {
  firstName: '',
  lastName: '',
  email: '',
};

const validationSchema = Yup.object({
  password: Yup.string()
    .trim()
    .required()
    // .matches(/^([A-Za-z0-9]){6,}$/, 'At least 6 character')
    .matches(/^[\p{L}\p{N}]{6,}$/, 'At least 6 character')
    .label('Password'),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .label('Password'),
});

function SignUpPasswordScreen(props: any) {
  const handleCallBack = async (values: IUser) => {
    console.log('values', values);
    registerUser(values)
      .then(res => {
        console.log('res', res);
        props.navigation.navigate(Constants.OTPScreen, values.email);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  return (
    <SafeAreaScreen>
      <View style={styles.container}>
        <Text style={styles.enterYouFullName}>
          Enter your email and full name to get started
        </Text>
        <Formik
          initialValues={signUpDetails}
          onSubmit={values => {
            // setTimeout(() => {
            //   console.log(values);
            // formikActions.resetForm();
            // formikActions.setSubmitting(false);
            // }, 5000);
            handleCallBack({
              name: values.firstName,
              password: values.lastName,
              email: values.email,
            });
            console.log(values);
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
                <View style={styles.nameContainer}>
                  <View style={styles.leftNameContainer}>
                    <Text style={styles.nameLabel}>First Name</Text>
                    <AppTextInput
                      value={values.firstName}
                      placeholder="First  Name"
                      errors={touched.firstName && errors.firstName}
                      onChangeText={handleChange('firstName')}
                      onBlur={handleBlur('firstName')}
                      width={WP('40%')}
                      keyboardType="default"
                      style={styles.input}
                      autoCapitalize="none"
                    />
                  </View>
                  <View style={styles.rightNameContainer}>
                    <Text style={styles.nameLabel}>Last Name</Text>
                    <AppTextInput
                      value={values.lastName}
                      placeholder="Last lastName"
                      errors={touched.lastName && errors.lastName}
                      onChangeText={handleChange('lastName')}
                      onBlur={handleBlur('lastName')}
                      width={WP('40%')}
                      keyboardType="default"
                      style={styles.input}
                      autoCapitalize="none"
                    />
                  </View>
                </View>

                <Text style={styles.label}>Email</Text>
                <AppTextInput
                  value={values.email}
                  placeholder="Email"
                  errors={touched.email && errors.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  width={WP('85%')}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  icon={true}
                />
                {/* <Text style={styles.label}>Create Password</Text>
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

                <AppTextInputPassWord
                  value={confirmPassword}
                  placeholder="Enter Password "
                  errors={touched.confirmPassword && errors.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  width={WP('80%')}
                  keyboardType="default"
                  icon={require('../../../assets/show-password-icon.png')}
                /> */}

                <AppButton
                  style={styles.button}
                  title="Next"
                  submitting={isSubmitting}
                  onPress={handleSubmit}
                  width={80}
                  marginTop={60}
                />
              </>
            );
          }}
        </Formik>
      </View>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  enterYouFullName: {
    alignSelf: 'center',
    width: common.WP(60),
    textAlign: 'center',
    marginTop: common.WP(10),
    marginBottom: common.WP(10),
  },
  nameLabel: {
    color: colors.primaryBlack,
    alignSelf: 'flex-start',
    // paddingLeft: WP(10),
    marginBottom: WP(-2),
    marginTop: WP(3),
  },
  label: {
    color: colors.primaryBlack,
    alignSelf: 'flex-start',
    paddingLeft: WP(10),
    marginBottom: WP(-2),
    marginTop: WP(3),
  },
  button: {
    // marginTop: HP('5%'),
    // marginTop: common.HP('60%'),
    // bottom: common.WP(5),
  },
  input: {
    // marginTop: WP(10),
  },
  nameContainer: {
    flexDirection: 'row',
  },
  leftNameContainer: {
    marginRight: common.WP(5),
  },
  rightNameContainer: {},
});

export default SignUpPasswordScreen;

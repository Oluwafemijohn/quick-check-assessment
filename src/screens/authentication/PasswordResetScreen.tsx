import {Formik} from 'formik';
import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import * as Yup from 'yup';
import AppButton from '../../components/form/AppButton';
import AppTextInputPassWord from '../../components/form/AppTextInputPassWord';

import SafeAreaScreen from '../../components/SafeAreaScreen';
import common from '../../constants/common';
import Constants from '../../constants/Constants';

const LoginDetails = {
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  password: Yup.string()
    .trim()
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      `
Password must have:
• Must Contain 6 Characters
• One Uppercase, One Lowercase
• One Number and one special case Character`,
    )
    .label('Password'),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .label('Password'),
});

function PasswordResetScreen(props: any) {
  return (
    <SafeAreaScreen>
      <View style={styles.container}>
        <Text style={styles.enterPasswordText}>
          Please enter a{'\n'}
          new password
        </Text>
        <Text style={styles.yourNewPasswordText}>
          Your new password must be different from the previous one(s).
        </Text>
        <Formik
          initialValues={LoginDetails}
          onSubmit={values => {
            console.log(values);
            props.navigation.navigate(Constants.PasswordResetSuccessfulScreen);
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
            const {password, confirmPassword} = values;

            return (
              <>
                <Text style={styles.label}>Email Address</Text>
                <AppTextInputPassWord
                  value={password}
                  placeholder="Enter Password "
                  errors={touched.password && errors.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  width={common.WP('80%')}
                  keyboardType="default"
                  icon={require('../../../assets/show-password-icon.png')}
                />
                <Text style={styles.label}>Confirm New Password</Text>
                <AppTextInputPassWord
                  value={confirmPassword}
                  placeholder="Confirm new password "
                  errors={touched.confirmPassword && errors.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  width={common.WP('80%')}
                  keyboardType="default"
                  icon={require('../../../assets/show-password-icon.png')}
                />
                <AppButton
                  style={styles.button}
                  title="Reset Password"
                  submitting={isSubmitting}
                  onPress={handleSubmit}
                  width={80}
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
    paddingHorizontal: common.WP(10),
  },
  enterPasswordText: {
    fontSize: common.WP(4),
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: common.WP(10),
  },
  yourNewPasswordText: {
    width: common.WP(70),
    alignSelf: 'center',
    textAlign: 'center',
    color: common.colors.medium,
    marginTop: common.WP(5),
  },
  button: {},
  label: {
    color: common.colors.medium,
    alignSelf: 'flex-start',
    marginBottom: common.WP(-2),
    marginTop: common.WP(8),
  },
});

export default PasswordResetScreen;

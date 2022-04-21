import { Formik } from 'formik';
import React from 'react';
import { Text, StyleSheet, View, Alert } from 'react-native';
import * as Yup from 'yup';
import AppButton from '../../components/form/AppButton';
import AppTextInputPassWord from '../../components/form/AppTextInputPassWord';
import KeyboardAvoidingViewAndKeyBoardDisMiss from '../../components/KeyboardAvoidingViewAndKeyBoardDisMiss';
import LoadingModal from '../../components/LoadingModal';

import SafeAreaScreen from '../../components/SafeAreaScreen';
import common from '../../constants/common';
import Constants from '../../constants/Constants';
import { passwordReset } from '../../network/Server';

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
  const email = props.route.params;
  const [isLoading, setIsLoading] = React.useState(false);

  const handlePasswordReset = async (password: string) => {
    setIsLoading(true);
    await passwordReset({
      email,
      newPassword: password,
    })
      .then(res => {
        setIsLoading(false);
        if (res.statusCode === 200) {
          // props.navigation.navigate(Constants.SignIn);
          props.navigation.navigate(Constants.PasswordResetSuccessfulScreen);
        } else {
          Alert.alert(res.message ? res.message : 'Something went wrong');
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  };
  return (
    <SafeAreaScreen>
      <View style={styles.container}>
        <KeyboardAvoidingViewAndKeyBoardDisMiss>
          <Text style={styles.enterPasswordText}>
            Please enter a{'\n'}
            new password
          </Text>
          <Text style={styles.yourNewPasswordText}>
            Your new password must be different from the previous one(s).
          </Text>
          {isLoading && <LoadingModal isLoading={isLoading} />}
          <Formik
            initialValues={LoginDetails}
            onSubmit={values => {
              // console.log(values);
              handlePasswordReset(values.password);
              // props.navigation.navigate(Constants.PasswordResetSuccessfulScreen);
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
              const { password, confirmPassword } = values;

              return (
                <>
                  <Text style={styles.label}>New Password</Text>
                  <AppTextInputPassWord
                    value={password}
                    placeholder="New Password"
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
        </KeyboardAvoidingViewAndKeyBoardDisMiss>
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

import {Formik} from 'formik';
import React from 'react';
import {Text, View, StyleSheet, Image, Alert} from 'react-native';
import * as Yup from 'yup';

import AppButton from '../../components/form/AppButton';
import AppTextInput from '../../components/form/AppTextInput';
import LoadingModal from '../../components/LoadingModal';
import SafeAreaScreen from '../../components/SafeAreaScreen';
import common from '../../constants/common';
import Constants from '../../constants/Constants';
import {sendOtp} from '../../network/Server';

const LoginDetails = {
  email: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email().required().label('Email'),
});

function ForgetPasswordScreen(props: any) {
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSendOtp = async (email: string) => {
    setIsLoading(true);
    await sendOtp({
      email: email,
    })
      .then(res => {
        setIsLoading(false);
        console.log('res', res);
        if (res.statusCode === 200) {
          // Alert.alert(res.message ? res.message : 'Otp sent successfully');
          props.navigation.navigate(
            Constants.ForgetPasswordCheckEmailScreen,
            email,
          );
        } else if (res.statusCode === 400) {
          Alert.alert('Error', 'Invalid credentials');
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <SafeAreaScreen>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/forget-password-image.png')}
          style={styles.topImage}
        />
        <Text style={styles.forgetPassword}>Forgot your password?</Text>
        <Text style={styles.emailDescription}>
          Enter the email associated with your account and we’ll send an email
          with instructions to reset your password
        </Text>
        {isLoading && <LoadingModal isLoading={isLoading} />}
        <Formik
          initialValues={LoginDetails}
          onSubmit={values => {
            handleSendOtp(values.email);
            // props.navigation.navigate(Constants.ForgetPasswordCheckEmailScreen);
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
            const {email} = values;

            return (
              <>
                <Text style={styles.label}>Email Address</Text>
                <AppTextInput
                  value={email}
                  placeholder="Enter Email"
                  errors={touched.email && errors.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  width={common.WP('80%')}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  icon={true}
                />
                <AppButton
                  style={styles.button}
                  title="Send"
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
  topImage: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: common.WP(10),
  },
  forgetPassword: {
    marginTop: common.WP(10),
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: common.WP(4),
  },
  emailDescription: {
    fontSize: common.WP(3),
    width: common.WP(65),
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: common.WP(5),
    color: common.colors.medium,
  },
  button: {},
  label: {
    color: common.colors.medium,
    alignSelf: 'flex-start',
    marginBottom: common.WP(-2),
    marginTop: common.WP(8),
  },
});

export default ForgetPasswordScreen;

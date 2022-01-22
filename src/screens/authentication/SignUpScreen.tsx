import React from 'react';
import {Text, ImageBackground, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import * as Yup from 'yup';
import {Formik} from 'formik';
import SafeAreaScreen from '../../components/SafeAreaScreen';
import AppTextInput from '../../components/form/AppTextInput';
import AppTextInputPassWord from '../../components/form/AppTextInputPassWord';
import AppButton from '../../components/form/AppButton';
import colors from '../../constants/colors';
import Constants from '../../constants/Constants';
import {registerUser} from '../../network/Server';
import {IUser} from '../../types/Type';

const signUpDetails = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required().label('Name'),
  email: Yup.string().email().required().label('Email'),
  password: Yup.string()
    .trim()
    .required()
    .matches(/^([A-Za-z0-9]){6,}$/, 'At least 6 character')
    .label('Password'),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .label('Password'),
});

function SignUpScreen(props: any) {
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
      <ImageBackground
        source={require('../../../assets/sign-up-background.png')}
        style={styles.background}>
        <Formik
          initialValues={signUpDetails}
          onSubmit={values => {
            // setTimeout(() => {
            //   console.log(values);
            // formikActions.resetForm();
            // formikActions.setSubmitting(false);
            // }, 5000);
            handleCallBack({
              name: values.name,
              email: values.email,
              password: values.password,
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
            const {name, email, password, confirmPassword} = values;

            return (
              <>
                <Text style={styles.label}>Name</Text>
                <AppTextInput
                  value={name}
                  placeholder="Name"
                  errors={touched.name && errors.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  width={WP('80%')}
                  keyboardType="default"
                  style={styles.input}
                  autoCapitalize="none"
                />

                <Text style={styles.label}>Email</Text>
                <AppTextInput
                  value={email}
                  placeholder="Email"
                  errors={touched.email && errors.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  width={WP('80%')}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <Text style={styles.label}>Create Password</Text>
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
                />

                <AppButton
                  style={styles.button}
                  title="Request OTP"
                  submitting={isSubmitting}
                  onPress={handleSubmit}
                  width={80}
                />
              </>
            );
          }}
        </Formik>
      </ImageBackground>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  label: {
    color: colors.primaryBlack,
    alignSelf: 'flex-start',
    paddingLeft: WP(10),
    marginBottom: WP(-2),
    marginTop: WP(3),
  },
  button: {
    marginTop: HP('5%'),
  },
  input: {
    marginTop: WP(10),
  },
});

export default SignUpScreen;

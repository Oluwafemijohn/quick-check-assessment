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
import common from '../../constants/common';

const signUpDetails = {
  firstname: '',
  lastname: '',
  email: '',
};

const validationSchema = Yup.object({
  firstname: Yup.string().required().label('First Name'),
  lastname: Yup.string().required().label('Last Name'),
  email: Yup.string().email().required().label('Email'),
});

function SignUpScreen(props: any) {
  return (
    <SafeAreaScreen>
      <View style={styles.container}>
        <Text style={styles.enterYouFullName}>
          Enter your email and full name to get started
        </Text>
        <Formik
          initialValues={signUpDetails}
          onSubmit={values => {
            props.navigation.navigate(Constants.SignUpPasswordScreen, values);
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
                      value={values.firstname}
                      placeholder="First  Name"
                      errors={touched.firstname && errors.firstname}
                      onChangeText={handleChange('firstname')}
                      onBlur={handleBlur('firstname')}
                      width={WP('40%')}
                      keyboardType="default"
                      style={styles.input}
                      autoCapitalize="none"
                    />
                  </View>
                  <View style={styles.rightNameContainer}>
                    <Text style={styles.nameLabel}>Last Name</Text>
                    <AppTextInput
                      value={values.lastname}
                      placeholder="Last last name"
                      errors={touched.lastname && errors.lastname}
                      onChangeText={handleChange('lastname')}
                      onBlur={handleBlur('lastname')}
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
    fontSize: common.WP(5),
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

export default SignUpScreen;

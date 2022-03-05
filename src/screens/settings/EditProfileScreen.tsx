import {Formik} from 'formik';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useRecoilState} from 'recoil';
import * as Yup from 'yup';
import AppButton from '../../components/form/AppButton';
import AppPicker from '../../components/form/AppPicker';
import AppTextInput from '../../components/form/AppTextInput';

import HeaderBar from '../../components/HeaderBar';
import SettingsTopPart from '../../components/SettingsTopPart';
import common from '../../constants/common';
import {deliveryDetails, weekDays} from '../../constants/ConstantString';
import TextConstant from '../../constants/TextConstant';
import {loginResponseState} from '../../store/State';
import {titleCase} from '../../utilities';

const signUpDetails = {
  firstname: '',
  lastname: '',
  email: '',
  phoneNumber: '',
  deliveryAddress: '',
  state: '',
};

const phoneRegExp = /^[0]{1}([7|8|9]{1})[0-9]{9}$/;
const validationSchema = Yup.object({
  firstname: Yup.string().required().label('First Name'),
  lastname: Yup.string().required().label('Last Name'),
  email: Yup.string().email().required().label('Email'),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Invalid phone number.')
    .required()
    .label('Phone Number'),
  deliveryAddress: Yup.string().required().label('Delivery Address'),
  state: Yup.string().required().label('State'),
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function EditProfileScreen(props: any) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loginResponse, setLoginResponse] = useRecoilState(loginResponseState);

  const [open, setOpen] = useState(false);
  const [loaction, setLoaction] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [err, setErr] = useState({
    loaction: '',
    weekDay: '',
  });

  return (
    <View style={styles.container}>
      <HeaderBar
        title={TextConstant.Notifications}
        actionText={' '}
        onPress={() => {}}
      />
      <SettingsTopPart
        title={titleCase(
          loginResponse.firstname + ' ' + loginResponse.lastname,
        )}
      />
      <View style={styles.content}>
        <ScrollView>
          <Formik
            initialValues={signUpDetails}
            onSubmit={values => {
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
                        value={values.firstname}
                        placeholder="First  Name"
                        errors={touched.firstname && errors.firstname}
                        onChangeText={handleChange('firstname')}
                        onBlur={handleBlur('firstname')}
                        width={common.WP('40%')}
                        keyboardType="default"
                        style={styles.input}
                        autoCapitalize="none"
                        editIcon={true}
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
                        width={common.WP('40%')}
                        keyboardType="default"
                        style={styles.input}
                        autoCapitalize="none"
                        editIcon={true}
                      />
                    </View>
                  </View>

                  <Text style={styles.label}>Phone Number</Text>
                  <AppTextInput
                    value={values.phoneNumber}
                    placeholder="Phone Number"
                    errors={touched.phoneNumber && errors.phoneNumber}
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                    width={common.WP('85%')}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    editIcon={true}
                  />
                  <Text style={styles.label}>Email</Text>
                  <AppTextInput
                    value={values.email}
                    placeholder="Email"
                    errors={touched.email && errors.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    width={common.WP('85%')}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    backgroundColor={common.colors.veryLighrGrey}
                    textColor={common.colors.lightGrey}
                  />

                  <View style={styles.deliveryDetailsContainer}>
                    <Text style={styles.deliveryLabel}>Delivery Details</Text>
                  </View>
                  <Text style={styles.label}>Delivery Address</Text>
                  <AppTextInput
                    value={values.deliveryAddress}
                    placeholder="Delivery Address"
                    errors={touched.deliveryAddress && errors.deliveryAddress}
                    onChangeText={handleChange('deliveryAddress')}
                    onBlur={handleBlur('deliveryAddress')}
                    width={common.WP('85%')}
                    keyboardType="default"
                    autoCapitalize="none"
                    marginTop={0}
                  />

                  <View style={styles.locationContainer}>
                    <AppPicker
                      onPress={() => setOpen(!open)}
                      value={loaction}
                      placeholder="Select Location"
                      width={common.WP('45%')}
                      data={deliveryDetails}
                      setValue={(value: any) => {
                        setLoaction(value);
                        setErr({...err, loaction: ''});
                      }}
                      error={err.loaction}
                    />

                    <AppTextInput
                      value={values.state}
                      placeholder="State"
                      errors={touched.state && errors.state}
                      onChangeText={handleChange('state')}
                      onBlur={handleBlur('state')}
                      width={common.WP('30%')}
                      keyboardType="default"
                      autoCapitalize="none"
                      style={styles.stateTextInput}
                      marginBottom={0}
                      marginTop={0}
                      errorStyle={styles.stateTextInput}
                    />
                  </View>

                  <Text style={styles.label}>Preferred Delivery Day</Text>
                  <AppPicker
                    onPress={() => setOpen(!open)}
                    value={weekDay}
                    placeholder="Prefered day"
                    width={common.WP('85%')}
                    data={weekDays}
                    setValue={(value: any) => {
                      setWeekDay(value);
                      setErr({...err, weekDay: ''});
                    }}
                    error={err.weekDay}
                  />
                  <AppButton
                    style={styles.button}
                    title="Save"
                    submitting={isSubmitting}
                    onPress={handleSubmit}
                    width={85}
                    marginTop={10}
                    marginBottom={10}
                  />
                </>
              );
            }}
          </Formik>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.colors.background,
  },
  content: {
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
    color: common.colors.primaryBlack,
    alignSelf: 'flex-start',
    marginBottom: common.WP(-2),
    marginTop: common.WP(3),
  },
  label: {
    color: common.colors.primaryBlack,
    alignSelf: 'flex-start',
    marginBottom: common.WP(2),
    marginTop: common.WP(3),
  },
  button: {},
  input: {},
  nameContainer: {
    flexDirection: 'row',
  },
  leftNameContainer: {
    marginRight: common.WP(5),
  },
  rightNameContainer: {},
  deliveryDetailsContainer: {
    marginTop: common.WP(5),
    justifyContent: 'center',
    paddingVertical: common.WP(5),
    backgroundColor: common.colors.veryLighrGrey,
    marginBottom: common.WP(2),
  },
  deliveryLabel: {
    color: common.colors.black,
    alignSelf: 'flex-start',
    fontWeight: '600',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stateTextInput: {
    marginLeft: common.WP(-20),
  },
});
export default EditProfileScreen;

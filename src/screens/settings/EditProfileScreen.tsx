import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import * as Yup from 'yup';
import AppButton from '../../components/form/AppButton';
import AppPicker from '../../components/form/AppPicker';
import AppTextInput from '../../components/form/AppTextInput';

import HeaderBar from '../../components/HeaderBar';
import LoadingModal from '../../components/LoadingModal';
import SettingsTopPart from '../../components/SettingsTopPart';
import common from '../../constants/common';
import { deliveryDetails, weekDays } from '../../constants/ConstantString';
import TextConstant from '../../constants/TextConstant';
import { getUser, updateUser } from '../../network/Server';
import { loginResponseState, userDetails } from '../../store/State';
import { IGetUser, IUpdateUser } from '../../types/Type';
import { isNullOrUndefined, titleCase } from '../../utilities';

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
  // state: Yup.string().required().label('State'),
});

function EditProfileScreen(props: any) {
  const [loginResponse, setLoginResponse] = useRecoilState(loginResponseState);
  const [isLoading, setIsLoading] = useState(false);
  // const [user, setUser] = useState<IGetUser>();
  const [user, setUser] = useRecoilState(userDetails)



  // const [open, setOpen] = useState(false);
  // const [location, setLocation] = useState('');
  // const [weekDay, setWeekDay] = useState('');
  // const [err, setErr] = useState({
  //   location: '',
  //   weekDay: '',
  // });

  // const signUpDetails = {
  //   firstname: '',
  //   lastname: '',
  //   email: '',
  //   phoneNumber: '',
  //   deliveryAddress: '',
  //   state: '',
  // };

  console.log('====================================');
  console.log('user', user?.user.firstname);
  console.log('====================================');

  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState(isNullOrUndefined(user) && isNullOrUndefined(user?.user.deliveryDetails) ? '' : user?.user.deliveryDetails.location);
  const [weekDay, setWeekDay] = useState(isNullOrUndefined(user) || isNullOrUndefined(user?.user.deliveryDetails) ? '' : user?.user.deliveryDetails.deliveryDay);
  const [err, setErr] = useState({
    location: '',
    weekDay: '',
  });

  const signUpDetails = {
    firstname: isNullOrUndefined(user) ? '' : user?.user.firstname,
    lastname: isNullOrUndefined(user) ? '' : user?.user.lastname,
    email: isNullOrUndefined(user) ? '' : user?.user.email,
    phoneNumber: isNullOrUndefined(user) ? '' : user?.user.phoneNumber,
    deliveryAddress: isNullOrUndefined(user) && isNullOrUndefined(user?.user.deliveryDetails) ? '' : user?.user.deliveryDetails.deliveryAddress,
    state: '',
  };

  const _updateUser = async (body: IUpdateUser) => {
    setIsLoading(true);
    await updateUser(body)
      .then((res) => {
        setIsLoading(false)
        if (res.statusCode === 200) {
          Alert.alert('Profile updated successfully.');
        } else {
          Alert.alert(res.message)
        }
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  const _getUser = async () => {
    setIsLoading(true)
    await getUser(loginResponse.id)
      .then((res) => {
        setIsLoading(false)
        if (res.statusCode === 200) {
          setUser(res as unknown as IGetUser)
        } else { }
      })
      .catch(() => { })
  }

  useEffect(() => {
    _getUser();
  }, [])

  return (
    <View style={styles.container}>
      <HeaderBar
        title={TextConstant.Notifications}
        actionText={' '}
        onPress={() => { }}
      />
      {isLoading && <LoadingModal isLoading={isLoading} />}
      <SettingsTopPart
        title={titleCase(
          loginResponse.firstname + ' ' + loginResponse.lastname,
        )}
      />
      <View style={styles.content}>
        <ScrollView>
          <Formik
            initialValues={{
              firstname: user?.user.firstname,
              lastname: !isNullOrUndefined(user) ? user?.user.lastname : '',
              email: isNullOrUndefined(user) ? '' : user?.user.email,
              phoneNumber: isNullOrUndefined(user) ? '' : user?.user.phoneNumber,
              deliveryAddress: isNullOrUndefined(user) && isNullOrUndefined(user?.user.deliveryDetails) ? '' : user?.user.deliveryDetails.deliveryAddress,
              state: '',
            }}
            onSubmit={values => {
              _updateUser(
                {
                  phoneNumber: values.phoneNumber!,
                  deliveryDetails: {
                    deliveryAddress: values.deliveryAddress!,
                    location: location!,
                    deliveryDay: weekDay!,
                  }
                }
              )
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
                        // editIcon={true}
                        backgroundColor={common.colors.veryLighrGrey}
                        textColor={common.colors.lightGrey}
                      />
                    </View>
                    <View style={styles.rightNameContainer}>
                      <Text style={styles.nameLabel}>Last Name</Text>
                      <AppTextInput
                        value={values.lastname}
                        placeholder="Last name"
                        errors={touched.lastname && errors.lastname}
                        onChangeText={handleChange('lastname')}
                        onBlur={handleBlur('lastname')}
                        width={common.WP('40%')}
                        keyboardType="default"
                        style={styles.input}
                        autoCapitalize="none"
                        // editIcon={true}
                        backgroundColor={common.colors.veryLighrGrey}
                        textColor={common.colors.lightGrey}
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
                      value={location!}
                      placeholder="Select Location"
                      width={common.WP('45%')}
                      data={deliveryDetails}
                      setValue={(value: any) => {
                        setLocation(value);
                        setErr({ ...err, location: '' });
                      }}
                      error={err.location}
                    />

                    <AppTextInput
                      value={'Lagos'}
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
                      backgroundColor={common.colors.veryLighrGrey}
                      textColor={common.colors.lightGrey}
                    />
                  </View>

                  <Text style={styles.label}>Preferred Delivery Day</Text>
                  <AppPicker
                    onPress={() => setOpen(!open)}
                    value={weekDay!}
                    placeholder="Prefered day"
                    width={common.WP('85%')}
                    data={weekDays}
                    setValue={(value: any) => {
                      setWeekDay(value);
                      setErr({ ...err, weekDay: '' });
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

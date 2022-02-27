import {Formik} from 'formik';
import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import * as Yup from 'yup';
import CheckBox from '@react-native-community/checkbox';

import AppButton from '../../components/form/AppButton';
import AppTextInput from '../../components/form/AppTextInput';
import HeaderBar from '../../components/HeaderBar';
import common from '../../constants/common';
import TextConstant from '../../constants/TextConstant';
import AppPicker from '../../components/form/AppPicker';
import {deliveryDetails, weekDays} from '../../constants/ConstantString';
import Constants from '../../constants/Constants';
const initialValues = {
  deliveryAddress: '',
  state: '',
};

const validationSchema = Yup.object({
  deliveryAddress: Yup.string().required().label('Delivery Address'),
  state: Yup.string().required().label('State'),
});

function DeliveryDetailsScreen(props: any) {
  const [open, setOpen] = useState(false);
  const [loaction, setLoaction] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [err, setErr] = useState({
    loaction: '',
    weekDay: '',
  });
  return (
    <View style={styles.container}>
      <HeaderBar
        onPressActionText={() => {}}
        title={TextConstant.deliveryDetails}
        actionText=" "
      />
      <View style={styles.content}>
        <ScrollView>
          <Formik
            initialValues={initialValues}
            onSubmit={values => {
              //   handleCall(values);
              console.log('values', values);
              props.navigation.navigate(Constants.ListSummaryScreen);
            }}
            validationSchema={validationSchema}>
            {({
              values,
              handleChange,
              handleBlur,
              errors,
              touched,
              handleSubmit,
            }) => {
              return (
                <>
                  <Text style={styles.label}>Email Address</Text>
                  <AppTextInput
                    value={values.deliveryAddress}
                    placeholder="Delivery Address"
                    errors={touched.deliveryAddress && errors.deliveryAddress}
                    onChangeText={handleChange('deliveryAddress')}
                    onBlur={handleBlur('deliveryAddress')}
                    width={common.WP('80%')}
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
                    width={common.WP('80%')}
                    data={weekDays}
                    setValue={(value: any) => {
                      setWeekDay(value);
                      setErr({...err, weekDay: ''});
                    }}
                    error={err.weekDay}
                  />
                  <View style={styles.checkBoxContainer}>
                    <CheckBox
                      value={isSelected}
                      onValueChange={() => {
                        setIsSelected(!isSelected);
                        // remeberMe(email);
                      }}
                      style={styles.checkbox}
                      onCheckColor={
                        isSelected ? common.colors.lightGreen : undefined
                      }
                      boxType="square"
                    />
                    <Text style={styles.setAsDefualt}>Set as default</Text>
                  </View>

                  <AppButton
                    style={styles.button}
                    marginTop={20}
                    title="Save"
                    onPress={() => {
                      if (loaction === '' && weekDay === '') {
                        setErr({
                          weekDay: 'Week day is required',
                          loaction: 'Location is required',
                        });
                        handleSubmit();
                      } else if (weekDay === '') {
                        handleSubmit();
                        setErr({...err, weekDay: 'Week day is required'});
                      } else if (loaction === '') {
                        setErr({...err, loaction: 'Location is required'});
                        handleSubmit();
                      } else {
                        handleSubmit();
                      }
                    }}
                    width={80}
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
  },
  content: {
    backgroundColor: common.colors.background,
    alignItems: 'center',
  },
  label: {
    color: common.colors.black,
    alignSelf: 'flex-start',
    marginBottom: common.WP(2),
    marginTop: common.WP(3),
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    alignSelf: 'center',
  },
  stateTextInput: {
    marginLeft: common.WP(-20),
  },
  checkBoxContainer: {
    flexDirection: 'row',
    borderRadius: common.WP(2),
    marginHorizontal: common.WP(5),
    alignItems: 'center',
    marginTop: common.WP(2),
  },
  checkbox: {
    marginRight: common.WP(5),
    marginLeft: common.WP(-5),
  },
  setAsDefualt: {
    color: common.colors.black,
    fontSize: common.WP('4%'),
  },
});

export default DeliveryDetailsScreen;

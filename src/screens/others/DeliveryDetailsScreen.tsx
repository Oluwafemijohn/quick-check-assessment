import {Formik} from 'formik';
import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import * as Yup from 'yup';
import AppButton from '../../components/form/AppButton';

import AppTextInput from '../../components/form/AppTextInput';
import HeaderBar from '../../components/HeaderBar';
import common from '../../constants/common';
import TextConstant from '../../constants/TextConstant';
const initialValues = {
  deliveryAddress: '',
  location: '',
  state: '',
  weekDays: '',
};

const validationSchema = Yup.object({
  deliveryAddress: Yup.string().required().label('Delivery Address'),
  location: Yup.string().required().label('Password'),
});

function DeliveryDetailsScreen(props: any) {
  //   const [value, setValue] = useState(null);
  //   const [items, setItems] = useState([
  //     {label: 'Apple', value: 'apple'},
  //     {label: 'Banana', value: 'banana'},
  //   ]);
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
                  />
                  <View style={styles.locationContainer}>
                    {/* <DropDownPicker
                      open={open}
                      value={value}
                      items={items}
                      setOpen={setOpen}
                      setValue={setValue}
                      setItems={setItems}
                    /> */}
                    <AppTextInput
                      value={values.deliveryAddress}
                      placeholder="Delivery Address"
                      errors={touched.deliveryAddress && errors.deliveryAddress}
                      onChangeText={handleChange('deliveryAddress')}
                      onBlur={handleBlur('deliveryAddress')}
                      width={common.WP('25%')}
                      keyboardType="default"
                      autoCapitalize="none"
                    />
                  </View>
                  <Text style={styles.label}>Preferred Delivery Day</Text>
                  <AppTextInput
                    value={values.deliveryAddress}
                    placeholder="Delivery Address"
                    errors={touched.deliveryAddress && errors.deliveryAddress}
                    onChangeText={handleChange('deliveryAddress')}
                    onBlur={handleBlur('deliveryAddress')}
                    width={common.WP('80%')}
                    keyboardType="default"
                    autoCapitalize="none"
                  />
                  <AppButton
                    style={styles.button}
                    title="Sign in"
                    onPress={handleSubmit}
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
    marginBottom: common.WP(-2),
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
});

export default DeliveryDetailsScreen;

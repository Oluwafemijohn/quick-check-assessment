import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import * as Yup from 'yup';
import CheckBox from '@react-native-community/checkbox';

import AppButton from '../../components/form/AppButton';
import AppTextInput from '../../components/form/AppTextInput';
import HeaderBar from '../../components/HeaderBar';
import common from '../../constants/common';
import TextConstant from '../../constants/TextConstant';
import AppPicker from '../../components/form/AppPicker';
import Constants from '../../constants/Constants';
import { getLocations, getLocationsRegion } from '../../network/Server';
import { IGetLocationResponse } from '../../types/Type';
import LoadingModal from '../../components/LoadingModal';
import AppDatePicker2 from '../../components/form/AppDatePicker2';
import { formatDateOfBirth } from '../../utilities';
import moment from 'moment';
const initialValues = {
  deliveryAddress: '',
  state: 'Lagos',
  phoneNo: '',
};

const phoneRegExp = /^[0]{1}([7|8|9]{1})[0-9]{9}$/;
const validationSchema = Yup.object({
  deliveryAddress: Yup.string().required().label('Delivery Address'),
  state: Yup.string().required().label('State'),
  phoneNo: Yup.string()
    .matches(phoneRegExp, 'Invalid phone number.')
    .required()
    .label('Phone Number'),
});

function DeliveryDetailsScreen(props: any) {
  const listId = props.route.params;
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [err, setErr] = useState({
    location: '',
    weekDay: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const [locations, setLocations] = useState<IGetLocationResponse[]>([]);
  const [locationsWeekDays, setLocationsWeekDays] = useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const _getLocations = async () => {
    await getLocations().then((res) => {
      if (res.statusCode === 200) {
        setLocations(res.locations as IGetLocationResponse[]);
      }
    }).catch((err: any) => { })
  }
  const _getWeekDays = async (region: string) => {
    setIsLoading(true);
    await getLocationsRegion(region).then((res) => {
      setIsLoading(false);
      if (res.statusCode === 200) {
        setLocationsWeekDays(Object.values((res.locations as IGetLocationResponse[])[0].deliveryDays));
      }
    }).catch((err: any) => {
      setIsLoading(false);
    })
  }

  useEffect(() => {
    _getLocations();
  }, []);

  useEffect(() => {
    _getWeekDays(location);
  }, [location]);

  console.log('====================================');
  console.log('locationsWeekDays', locationsWeekDays);
  console.log('====================================');

  return (
    <View style={styles.container}>
      <HeaderBar
        onPressActionText={() => { }}
        title={TextConstant.deliveryDetails}
        actionText=" "
      />
      {isLoading && <LoadingModal isLoading={isLoading} />}
      <View style={styles.content}>
        <ScrollView>
          <Formik
            initialValues={initialValues}
            onSubmit={values => {
              props.navigation.navigate(Constants.ListSummaryScreen, {
                ...values,
                location,
                weekDay,
                setAsDefault: isSelected,
                listId,
              });
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
                  <Text style={styles.label}>Delivery Address</Text>
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

                  <AppTextInput
                    value={values.phoneNo}
                    placeholder="Phone Number"
                    errors={touched.phoneNo && errors.phoneNo}
                    onChangeText={handleChange('phoneNo')}
                    onBlur={handleBlur('phoneNo')}
                    width={common.WP('80%')}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                  />

                  <View style={styles.locationContainer}>
                    {
                      locations !== undefined && <AppPicker
                        onPress={() => setOpen(!open)}
                        value={location}
                        placeholder="Select Location"
                        width={common.WP('45%')}
                        data={locations.map((item) => {
                          return item.locationName
                        })
                        }
                        setValue={(value: any) => {
                          setLocation(value);
                          setErr({ ...err, location: '' });
                        }}
                        error={err.location}
                      />
                    }

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
                      backgroundColor={common.colors.veryLighrGrey}
                      marginBottom={0}
                      marginTop={0}
                      errorStyle={styles.stateTextInput}
                    />
                  </View>

                  {
                    location !== '' && (
                      <>
                        <Text style={styles.label}>Preferred Delivery Day</Text>
                        <AppDatePicker2
                          placeholder="Select date"
                          value={weekDay}
                          errors={err.weekDay}
                          width={common.WP('90%')}
                          onDateChange={date => {
                            setIsModalVisible(false);
                            setIsDateSelected(true);
                            setWeekDay(
                              formatDateOfBirth(
                                moment(date?.toString()).format('YYYY-MM-DD'),
                              ),
                            );
                            setErr({ ...err, weekDay: '' });
                          }}
                          onPress={() => {
                            setIsModalVisible(true);
                          }}
                          isSelected={isDateSelected}
                          isModalVisible={isModalVisible}
                          onBackdropPress={() => {
                            setIsModalVisible(false);
                          }}
                          marginBottom={0}
                          disabledDates={
                            date => {
                              const dateString = moment(date?.toString()).format('dddd');
                              const dayIndex = locationsWeekDays.indexOf(dateString);
                              if (dayIndex === -1) {
                                return true;
                              }
                              return false;
                            }
                          }
                        />
                      </>
                    )
                  }
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
                    <Text style={styles.setAsDefault}>Set as default</Text>
                  </View>

                  <AppButton
                    style={styles.button}
                    marginTop={20}
                    title="Save"
                    onPress={() => {
                      if (location === '' && weekDay === '') {
                        setErr({
                          weekDay: 'Week day is required',
                          location: 'Location is required',
                        });
                        handleSubmit();
                      } else if (weekDay === '') {
                        handleSubmit();
                        setErr({ ...err, weekDay: 'Week day is required' });
                      } else if (location === '') {
                        setErr({ ...err, location: 'Location is required' });
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
  setAsDefault: {
    color: common.colors.black,
    fontSize: common.WP('4%'),
  },
});

export default DeliveryDetailsScreen;

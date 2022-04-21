import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { managePanProps } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';
import { useRecoilState } from 'recoil';
import BottomSheetTemplate from '../../components/BottomSheetTemplate';
import AppButton from '../../components/form/AppButton';
import AppTextInput from '../../components/form/AppTextInput';
import HeaderBar from '../../components/HeaderBar';
import KeyboardAvoidingViewAndKeyBoardDisMiss from '../../components/KeyboardAvoidingViewAndKeyBoardDisMiss';
import LoadingModal from '../../components/LoadingModal';
import GreenMarkSvgComponent from '../../components/svg/GreenMarkSvgComponent';
import IconDownSvgComponent from '../../components/svg/IconDownSvgComponent';
import IconUpSvgComponent from '../../components/svg/IconUpSvgComponent';
import RedCrossSvgComponent from '../../components/svg/RedCrossSvgComponent';
import SubscribedGreenSvgIcon from '../../components/svg/SubscribedGreenSvgIcon';
import SubscribeSvgComponent from '../../components/svg/SubscribeSvgComponent';
import SubscriptionSvgIcon from '../../components/svg/SubscriptionSvgIcon';
import common from '../../constants/common';
import TextConstant from '../../constants/TextConstant';
import { createSubscription, getPlans, getWallet } from '../../network/Server';
import { wallet } from '../../store/State';
import { IPlan, IWallet } from '../../types/Type';
import { formatCurrencyWithDecimal, makeSentenceCase } from '../../utilities';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SubscriptionScreen(props: any) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isSubscription, setIsSubscription] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [plans, setPlans] = useState<IPlan>();

  const [myWallet, setMyWallet] = useRecoilState(wallet);


  const [err, setErr] = useState({
    amount: '',
    isError: false,
  });

  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const modalPresent = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);
  const modalClose = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);
  //

  const _createSubscription = async () => {
    setIsLoading(true);
    await createSubscription({
      plan: 'premium',
      price: parseInt(amount),
    })
      .then(res => {
        setIsLoading(false);
        console.log('res', res);
        if (res.statusCode === 201) {
          Alert.alert('Success', res.msg);
          _getWallet();
        } else {
          Alert.alert('Error', res.msg);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  }

  const _getWallet = async () => {
    await getWallet()
      .then((res) => {
        setIsLoading(false);
        if (res.statusCode === 200) {
          setMyWallet(res as unknown as IWallet);
        }
      })
      .catch(() => {
        setIsLoading(false);
      })
  }

  const _getPlans = async () => {
    await getPlans()
      .then((res) => {
        setIsLoading(false);
        if (res.statusCode === 200) {
          setPlans(res as unknown as IPlan);
        }
      })
      .catch(() => { })
  }

  useEffect(() => {
    _getPlans();
  }, []);

  const myPlan = plans?.plan[0];

  return (
    <View style={styles.container}>
      <HeaderBar
        title={TextConstant.Subscription}
        actionText={' '}
        onPress={() => { }}
      />
      {isLoading && <LoadingModal isLoading={isLoading} />}
      <KeyboardAvoidingViewAndKeyBoardDisMiss>
        <View style={styles.bodyContainer}>
          <View style={styles.wrapper}>
            <View style={styles.subscriptionWrapper}>
              <View style={styles.premiumContainer}>
                <Text style={styles.premium}>{makeSentenceCase(myPlan?.name!)}</Text>
                <Text style={styles.price}>{formatCurrencyWithDecimal(myPlan?.price)}{' '}<Text style={styles.perYear}>/Year</Text></Text>
              </View>
              <Pressable onPress={() => {
                modalPresent();
              }} >
                {
                  isSubscription ? (
                    <SubscribedGreenSvgIcon style={styles.subscribeIcon} />
                  ) : (
                    <SubscribeSvgComponent style={styles.subscribeIcon} />
                  )
                }
              </Pressable>
            </View>
            {/* <View style={styles.switchContainer}>
              <Text style={[styles.switch, {
                color: isEnabled ? common.colors.darkCard : common.colors.lightGrey
              }]}>Activate</Text>
              <Switch
                trackColor={{ false: common.colors.lightLightGrey, true: common.colors.lightGreen }}
                thumbColor={common.colors.white}
                ios_backgroundColor={common.colors.lightLightGrey}
                onValueChange={() => {
                  setIsEnabled(!isEnabled)
                }}
                value={isEnabled}
                style={styles.switchButton}
              />

            </View> */}
            <Pressable onPress={() => {
              setIsDetailsOpen(!isDetailsOpen);
            }} style={[styles.viewContainer,
            {
              borderTopWidth: isDetailsOpen ? 0.5 : 0,
              borderTopColor: !isDetailsOpen ? common.colors.lightLightGrey : undefined
            }]}>
              <Text style={styles.viewDetails}>View Details</Text>
              {
                isDetailsOpen ? (<IconDownSvgComponent style={styles.iconDown} />)
                  : (
                    <IconUpSvgComponent style={styles.iconUp} />
                  )
              }
            </Pressable>
            {
              isDetailsOpen && (
                <View style={styles.openDetails} >
                  <View style={styles.row}>
                    {
                      myPlan?.features.includes('free-delivery') ? <GreenMarkSvgComponent />
                        : <RedCrossSvgComponent />
                    }

                    <Text style={myPlan?.features.includes('free-delivery') ? styles.greenLabel : styles.greenLabel2}>Free Delivery</Text>
                  </View>
                  <View style={styles.row}>
                    {
                      myPlan?.features.includes('free-pickup') ? <GreenMarkSvgComponent />
                        : <RedCrossSvgComponent />
                    }
                    <Text style={
                      myPlan?.features.includes('free-pickup')
                        ? styles.greenLabel : styles.greenLabel2}>Free pickup</Text>
                  </View>
                  <View style={styles.row}>
                    <View>
                      <View style={styles.row}>
                        {
                          myPlan?.features.includes('adhoc delivery') ? <GreenMarkSvgComponent />
                            : <RedCrossSvgComponent />
                        }
                        <Text style={myPlan?.features.includes('adhoc delivery')
                          ? styles.crossedLabel :
                          styles.crossedLabel2
                        }>Adhoc Delivery</Text>
                      </View>
                      <Text style={myPlan?.features.includes('adhoc delivery') ?
                        styles.crossedSmallLabel
                        :
                        styles.crossedSmallLabel2
                      }>Outside fixed delivery date
                        {'\n'}
                        to same address</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View>
                      <View style={styles.row}>
                        {
                          myPlan?.features.includes('complimentary membership') ? <GreenMarkSvgComponent />
                            : <RedCrossSvgComponent />
                        }
                        <Text style={myPlan?.features.includes('complimentary membership')
                          ? styles.crossedLabel :
                          styles.crossedLabel2}>Complimentary Membership</Text>
                      </View>
                      <Text style={myPlan?.features.includes('complimentary membership') ?
                        styles.crossedSmallLabel
                        :
                        styles.crossedSmallLabel2}>Delivery to additional Location</Text>
                    </View>
                  </View>
                </View>
              )
            }
          </View>
        </View>
        <BottomSheetTemplate
          bottomSheetRef={bottomSheetRef}
          onClose={modalClose}
          title='Enter Amount'
        >
          <View style={styles.listContainer}>
            <AppTextInput
              value={amount}
              placeholder="Enter amount"
              errors={err.isError && err.amount}
              onChangeText={(text) => {
                console.log(text);

                setErr({ ...err, isError: false, amount: '' });
                setAmount(text as string);
              }}
              width={common.WP('85%')}
              keyboardType="number-pad"
              autoCapitalize="none"
            />
            <AppButton
              title="Pay"
              onPress={() => {
                if (amount === '') {
                  setErr({
                    amount: 'Please enter amount',
                    isError: true,
                  });
                }
                else {
                  _createSubscription();
                  modalClose();
                }
              }}
              width={85}
              marginTop={10}
              marginBottom={10}
            />
          </View>
        </BottomSheetTemplate>
      </KeyboardAvoidingViewAndKeyBoardDisMiss>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.colors.background,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: common.colors.background,
  },
  wrapper: {
    backgroundColor: common.colors.white,
    marginTop: common.W_5,
    marginHorizontal: common.W_5,
    padding: common.W_5,
    borderRadius: common.W_3
  },
  subscriptionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  premiumContainer: {
    flex: 1
  },
  premium: {
    fontSize: common.W_6,
    fontWeight: '200',
    color: common.colors.darkCard,
  },
  price: {
    marginTop: common.W_2,
    fontSize: common.W_7,
    fontWeight: 'bold',
  },
  perYear: {
    fontSize: common.W_3,
    fontWeight: 'normal',
  },
  subscribeIcon: {},
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: common.W_4,
  },
  switch: {
    color: common.colors.darkCard,
    marginRight: common.W_1,
    fontSize: common.W_3,
  },
  switchButton: {
    // height: common.W_4,
  },
  viewContainer: {
    flexDirection: 'row',
    marginTop: common.W_10,
    paddingVertical: common.W_2,
  },
  viewDetails: {
    flex: 1,
    fontSize: common.W_4,
  },
  iconDown: {},
  iconUp: {
  },
  openDetails: {
    marginTop: common.W_5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  greenLabel: {
    color: common.colors.darkCard,
    marginLeft: common.W_3,
    marginVertical: common.W_2,
    fontSize: common.W_4
  },
  greenLabel2: {
    color: common.colors.darkCard,
    marginLeft: common.W_3,
    marginVertical: common.W_2,
    fontSize: common.W_4,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  crossedLabel: {
    color: common.colors.darkCard,
    marginLeft: common.W_3,
    marginVertical: common.W_2,
    fontSize: common.W_5,
    fontWeight: '200',
  },
  crossedLabel2: {
    color: common.colors.darkCard,
    marginLeft: common.W_3,
    marginVertical: common.W_2,
    fontSize: common.W_5,
    fontWeight: '200',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  crossedSmallLabel: {
    color: common.colors.darkCard,
    marginLeft: common.W_6,
    marginVertical: common.W_2,
    fontSize: common.W_4,
    fontWeight: '200',
  },
  crossedSmallLabel2: {
    color: common.colors.lightGrey,
    marginLeft: common.W_6,
    marginVertical: common.W_2,
    fontSize: common.W_4,
    fontWeight: '200',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  listContainer: {
    paddingHorizontal: common.W_5,
  },
});
export default SubscriptionScreen;

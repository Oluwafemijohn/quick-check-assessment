import React from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {useRecoilState} from 'recoil';
import HeaderBar from '../../components/HeaderBar';
import SettingsItems from '../../components/items/SettingsItems';
import SettingsTopPart from '../../components/SettingsTopPart';
import common from '../../constants/common';
import Constants from '../../constants/Constants';
import TextConstant from '../../constants/TextConstant';
import {loginResponseState} from '../../store/State';
import {titleCase} from '../../utilities';

function SettingsScreen(props: any) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loginResponse, setLoginResponse] = useRecoilState(loginResponseState);

  return (
    <View style={styles.container}>
      <HeaderBar
        title={TextConstant.settings}
        actionText={' '}
        onPress={() => {}}
      />
      <ScrollView>
        <View style={styles.content}>
          <SettingsTopPart
            onPress={() => {
              props.navigation.navigate(Constants.EditProfileScreen);
            }}
            title={titleCase(
              loginResponse.firstname + ' ' + loginResponse.lastname,
            )}
          />
          <View style={styles.bottomContainer}>
            <SettingsItems
              onPress={() => {
                props.navigation.navigate(Constants.NotificationScreen);
              }}
              title={TextConstant.Notifications}
              notificationCount={3}
              itemNumber={1}
            />
            <SettingsItems
              onPress={() => {
                props.navigation.navigate(Constants.WalletScreen);
              }}
              title={TextConstant.Wallet}
              itemNumber={2}
            />
            <SettingsItems
              onPress={() => {
                props.navigation.navigate(Constants.SubscriptionScreen);
              }}
              title={TextConstant.Subscription}
              itemNumber={3}
            />
            <SettingsItems
              onPress={() => {
                props.navigation.navigate(Constants.ReferralsScreen);
              }}
              title={TextConstant.Referrals}
              itemNumber={4}
            />
            <SettingsItems
              onPress={() => {
                props.navigation.navigate(Constants.FeedbacksScreen);
              }}
              title={TextConstant.Feedback}
              itemNumber={5}
            />
            <SettingsItems
              onPress={() => {
                props.navigation.navigate(Constants.OrderHistoryScreen);
              }}
              title={TextConstant.OrderHistory}
              itemNumber={6}
            />
            <SettingsItems
              onPress={() => {
                props.navigation.navigate(Constants.SIGN_IN_SCREEN);
              }}
              title={TextConstant.Logout}
              itemNumber={7}
            />
          </View>
        </View>
      </ScrollView>
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
  },
  topContainer: {
    height: Dimensions.get('window').height * 0.35,
    backgroundColor: common.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: common.WP(0.5),
    borderBottomLeftRadius: common.W_4,
    borderBottomRightRadius: common.W_4,
  },
  bottomContainer: {},
  avatar: {
    width: common.W_30,
    height: common.W_30,
    // marginTop: common.W_10,
  },
  name: {
    fontSize: common.W_5,
    color: common.colors.black,
    marginTop: common.W_2,
    fontWeight: 'bold',
  },
  membershipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  membership: {},
  editProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: common.W_2,
    justifyContent: 'center',
    backgroundColor: common.colors.paleYellow,
    paddingVertical: common.W_2,
    paddingHorizontal: common.W_2,
    borderRadius: common.W_2,
  },
  editProfileText: {
    color: common.colors.black,
    marginHorizontal: common.W_2,
  },
});

export default SettingsScreen;

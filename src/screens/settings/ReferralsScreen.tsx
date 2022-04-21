import React from 'react';
import { Alert, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import HeaderBar from '../../components/HeaderBar';
import CopyLinkSvgIcon from '../../components/svg/CopyLinkSvgIcon';
import ReferAFriendIcon from '../../components/svg/ReferAFriendIcon';
import common from '../../constants/common';
import { friends, inviteFriends, referFriend } from '../../constants/ConstantString';
import TextConstant from '../../constants/TextConstant';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ReferralsScreen(props: any) {

  const copyToClipboard = () => {
    Clipboard.setString('http://www.sherz.com/downloads');
    Alert.alert('Link Copied')
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
  };

  return (
    <View style={styles.container}>
      <HeaderBar
        title={TextConstant.Referrals}
        actionText={' '}
        onPress={() => { }}
      />
      <ScrollView >
        <View style={styles.content} >
          <View style={styles.referFriendContainer}>
            <View style={styles.referFriendLogoAndText}>
              <ReferAFriendIcon style={styles.referAFriend} />
              <Text style={styles.referFriendText}>{referFriend}</Text>
            </View>
            <Text style={styles.inviteYourFriend}>{inviteFriends}</Text>
          </View>
          <Text style={styles.copyLink}>Copy link</Text>
          <View style={styles.copyLinkContainer}>
            <Text style={styles.copyText}>http://www.sherz.com/downloads</Text>
            <Pressable onPress={() => {
              copyToClipboard();
            }}>
              <CopyLinkSvgIcon style={styles.copyLinkIcon} />
            </Pressable>
          </View>
          <View style={styles.friendsInvitedContainer}>
            <View style={styles.friendsTextContainer}>
              <Text style={styles.referralsText}>Referrals{'  '}<Text style={styles.referralsCount}>(4)</Text> </Text>
            </View>
            {
              friends.map((item, index) => (
                <View key={index} style={styles.friendsContainer}>
                  <Image source={item.img} style={styles.avatar} />
                  <Text style={styles.name}>{item.name}</Text>
                </View>
              ))
            }

          </View>
          <View style={styles.friendsInvitedContainer}>
            <View style={styles.friendsTextContainer}>
              <Text style={styles.referralsText}>Rewards earned</Text>
            </View>
            <View style={styles.rewardsContainer}>
              <View style={styles.subscriptionMonthContainer}>
                <Text style={styles.subscriptionMonth}>Subscription</Text>
                <View style={styles.month}>
                  <Text style={styles.monthText}>JANUARY</Text>
                </View>
              </View>
              <View style={styles.rewardsValueContainer}>
                <Text style={styles.reward}>15% discount</Text>
              </View>
              <View style={styles.rewardsValueContainer}>
                <Text style={styles.reward}>10% discount</Text>
              </View>
            </View>
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
    marginBottom: common.W_10,
  },
  referFriendContainer: {
    backgroundColor: common.colors.white,
    marginTop: common.W_8,
    paddingVertical: common.W_5,
    marginHorizontal: common.W_5,
    borderRadius: common.W_4,
    paddingHorizontal: common.W_5,
  },
  referFriendLogoAndText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: common.W_3,
  },
  referAFriend: {},
  referFriendText: {
    marginLeft: common.W_3,
    fontSize: common.W_6,
    fontWeight: 'bold',
    color: common.colors.lightPurple,
  },
  inviteYourFriend: {
    fontSize: common.W_3,
    color: common.colors.lightGrey,
    marginLeft: common.W_18,
  },
  copyLinkContainer: {
    flexDirection: 'row',
    paddingHorizontal: common.W_5,
    paddingVertical: common.W_3,
    marginTop: common.W_3,
    alignItems: 'center',
    backgroundColor: common.colors.white,
    marginHorizontal: common.W_5,
    borderRadius: common.W_3,
  },
  friendsInvitedContainer: {
    paddingHorizontal: common.W_5,
    paddingVertical: common.W_3,
    marginTop: common.W_5,
    backgroundColor: common.colors.white,
    marginHorizontal: common.W_5,
    borderRadius: common.W_3,
  },
  friendsTextContainer: {
    paddingVertical: common.W_3,
    borderBottomWidth: 1,
    borderBottomColor: common.colors.lightGrey,
    marginBottom: common.W_4,
  },
  copyText: {
    flex: 1,
  },
  copyLinkIcon: {

  },
  copyLink: {
    fontSize: common.W_3,
    marginLeft: common.W_5,
    marginTop: common.W_5,
  },
  referralsText: {
    fontSize: common.W_6,
    fontWeight: 'bold',
    color: common.colors.lightPurple,
  },
  referralsCount: {
    color: common.colors.paleYellow,
    fontSize: common.W_3,
    justifyContent: 'center'
  },
  friendsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: common.W_3,
  },
  avatar: {
    resizeMode: 'stretch',
    width: common.W_10,
    height: common.W_10,
  },
  name: {
    marginLeft: common.W_2,
  },
  rewardsContainer: {

  },
  subscriptionMonthContainer: {
    flexDirection: 'row',
    backgroundColor: common.colors.lightYellow,
    alignItems: 'center',
    width: common.WP(53),
    paddingVertical: common.W_2,
    borderRadius: common.W_3,
    marginBottom: common.W_4,
  },
  subscriptionMonth: {
    color: common.colors.black,
    padding: common.W_2,
    marginLeft: common.W_2
  },
  month: {
    backgroundColor: common.colors.lightGreen,
    width: common.W_21,
    height: common.W_6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: common.W_3,
  },
  monthText: {
    color: common.colors.white,
    fontSize: common.W_3,
  },
  rewardsValueContainer: {
    backgroundColor: common.colors.lightYellow,
    width: common.WP(38),
    paddingVertical: common.W_2,
    borderRadius: common.W_3,
    marginBottom: common.W_4,
  },
  reward: {
    color: common.colors.black,
    padding: common.W_2,
    marginLeft: common.W_2
  },
});
export default ReferralsScreen;

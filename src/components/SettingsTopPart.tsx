import React from 'react';
import {
  Image,
  Pressable,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import common from '../constants/common';
import ForwardArrowSvgIcon from './svg/ForwardArrowSvgIcon';
import StartSvgSvgComponent from './svg/StarSvgComponent';

function SettingsTopPart({
  title,
  onPress,
  initials,
  isSubscription
}: {
  onPress?: () => void;
  title: string;
  initials: string;
  isSubscription?: boolean;
}) {
  return (
    <View
      style={[
        styles.topContainer,
        {
          height: onPress
            ? Dimensions.get('window').height * 0.35
            : Dimensions.get('window').height * 0.25,
        },
      ]}>
      {/* <Image
        source={require('../../assets/avatar.png')}
        style={styles.avatar}
      /> */}
      <View
        style={styles.nameInitials}
      >
        <Text style={styles.nameInitialsText}>{initials}</Text>
      </View>
      <Text style={styles.name}>{title}</Text>

      <View style={styles.membershipContainer}>
        {
          isSubscription ? (
            <>
              <StartSvgSvgComponent />
              <Text style={styles.membership}>Member</Text>
            </>
          ) : (
            <Text style={styles.membership}>Not a member</Text>
          )
        }

      </View>
      {onPress && (
        <Pressable onPress={onPress} style={styles.editProfile}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
          <ForwardArrowSvgIcon />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  topContainer: {
    backgroundColor: common.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: common.WP(0.5),
    borderBottomLeftRadius: common.W_4,
    borderBottomRightRadius: common.W_4,
  },
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
  nameInitials: {
    backgroundColor: common.colors.veryLighrGrey,
    width: common.WP(20),
    height: common.WP(20),
    borderRadius: common.WP(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameInitialsText: {
    color: common.colors.darkCard,
    fontSize: common.WP(6),
    fontWeight: 'bold',
  },
});

export default SettingsTopPart;

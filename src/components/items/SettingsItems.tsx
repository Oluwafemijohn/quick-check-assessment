import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import common from '../../constants/common';
import FeedbacksSvgIcon from '../svg/FeedbacksSvgIcon';
import ForwardArrowSvgIcon from '../svg/ForwardArrowSvgIcon';
import LogoutSvgIcon from '../svg/LogoutSvgIcon';
import NotificationSvgIcon from '../svg/NotificationSvgIcon';
import OrderHistorySvgIcon from '../svg/OrderHistorySvgIcon';
import ReferralsSvgIcon from '../svg/ReferralsSvgIcon';
import SubscriptionSvgIcon from '../svg/SubscriptionSvgIcon';
import WalletIconSvg from '../svg/WalletIconSvg';

function SettingsItems({
  onPress,
  title,
  notificationCount,
  itemNumber,
}: {
  onPress: () => void;
  title: string;
  notificationCount?: number;
  itemNumber: number;
}) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      {itemNumber === 1 && <NotificationSvgIcon style={styles.majorIcon} />}
      {itemNumber === 2 && <WalletIconSvg style={styles.majorIcon} />}
      {itemNumber === 3 && <SubscriptionSvgIcon style={styles.majorIcon} />}
      {itemNumber === 4 && <ReferralsSvgIcon style={styles.majorIcon} />}
      {itemNumber === 5 && <FeedbacksSvgIcon style={styles.majorIcon} />}
      {itemNumber === 6 && <OrderHistorySvgIcon style={styles.majorIcon} />}
      {itemNumber === 7 && <LogoutSvgIcon style={styles.logOutIcon} />}
      <View style={styles.row}>
        <Text style={itemNumber !== 7 ? styles.title : styles.titleLogout}>
          {title}
        </Text>
        {notificationCount !== undefined && (
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationCount}>{notificationCount}</Text>
          </View>
        )}
      </View>
      {itemNumber !== 7 && <ForwardArrowSvgIcon style={styles.forwardArrow} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: common.W_10,
    paddingVertical: common.W_2,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: common.W_2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: common.W_3,
    flex: 1,
  },
  title: {
    fontSize: common.W_4,
    fontWeight: '600',
    color: common.colors.black,
  },
  titleLogout: {
    fontSize: common.W_4,
    fontWeight: '600',
    color: common.colors.red,
    marginLeft: common.W_3,
  },
  notificationCount: {
    color: common.colors.white,
  },
  notificationContainer: {
    height: common.W_5,
    width: common.W_5,
    borderRadius: common.W_5,
    backgroundColor: common.colors.lightPurple,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: common.W_2,
  },
  majorIcon: {},
  logOutIcon: {
    marginLeft: common.W_2,
  },
  forwardArrow: {},
});

export default SettingsItems;

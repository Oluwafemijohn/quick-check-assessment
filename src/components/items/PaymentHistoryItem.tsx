import moment from 'moment';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import common from '../../constants/common';
import { ITransaction } from '../../types/Type';
import { formatCurrencyWithDecimal } from '../../utilities';


function PaymentHistoryItem({ item }: { item: ITransaction }) {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.fee}>{item.transactionType === 'fund_wallet' ? 'Fund Wallet' : 'Subscription fee'}</Text>
      <View style={styles.flexRow}>
        <View style={item.status === 'pending' ? styles.monthContainer2 : styles.monthContainer}>
          <Text style={styles.month}>{
            moment(item.createdAt).format('MMMM')
          }</Text>
        </View>
      </View>
      <Text style={styles.amount}>{formatCurrencyWithDecimal(item.chargedAmount)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: common.WP(10),
    backgroundColor: common.colors.white,
    marginBottom: common.W_2,
    paddingVertical: common.W_2,
    alignItems: 'center',
    paddingHorizontal: common.W_5,
    borderRadius: common.W_3,
  },
  fee: {
    fontSize: common.W_3,
    fontWeight: 'bold',
  },
  flexRow: {
    // flex: 1,
  },
  monthContainer: {
    backgroundColor: common.colors.lightGreen,
    paddingVertical: common.W_1,
    paddingHorizontal: common.W_2,
    borderRadius: common.W_3,
    marginLeft: common.W_2,
  },
  monthContainer2: {
    backgroundColor: common.colors.paleYellow,
    paddingVertical: common.W_1,
    paddingHorizontal: common.W_2,
    borderRadius: common.W_3,
    marginLeft: common.W_2,
  },
  month: {
    fontSize: common.W_3,
    color: common.colors.white,
  },
  amount: {
    fontSize: common.W_3,
    color: common.colors.black,
    flex: 1,
    textAlign: 'right',
  },
});

export default PaymentHistoryItem;

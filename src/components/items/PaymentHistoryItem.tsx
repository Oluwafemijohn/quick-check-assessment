import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import common from '../../constants/common';

interface IProps {
  id: number;
  title: string;
  month: string;
  amount: string;
}

function PaymentHistoryItem({item}: {item: IProps}) {
  return (
    <View style={styles.container}>
      <Text style={styles.fee}>{item.title}</Text>
      <View style={styles.flexRow}>
        <Pressable style={styles.monthContainer}>
          <Text style={styles.month}>{item.month}</Text>
        </Pressable>
      </View>
      <Text style={styles.amount}>{item.amount}</Text>
    </View>
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
    // width: common.W_20,
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

import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import PaymentHistoryItem from '../../components/items/PaymentHistoryItem';
import WalletComponent from '../../components/WalletComponent';
import common from '../../constants/common';
import {walletSummary} from '../../constants/ConstantString';
import TextConstant from '../../constants/TextConstant';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function WalletScreen(props: any) {
  return (
    <View style={styles.container}>
      <HeaderBar
        title={TextConstant.Notifications}
        actionText={' '}
        onPress={() => {}}
      />
      <WalletComponent
        onPress={() => {
          console.log('WalletPress');
        }}
      />
      <Text style={styles.title}>Payment History</Text>
      <View style={styles.historyContainer}>
        <FlatList
          data={walletSummary}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <PaymentHistoryItem item={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.colors.background,
  },
  title: {
    fontSize: common.W_6,
    fontWeight: '600',
    color: common.colors.lightPurple,
    marginLeft: common.W_20,
  },
  historyContainer: {
    marginTop: common.W_5,
  },
});
export default WalletScreen;

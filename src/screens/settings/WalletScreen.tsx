import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, FlatList, Linking, StyleSheet, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import BottomSheetTemplate from '../../components/BottomSheetTemplate';
import EmptyList from '../../components/EmptyList';
import AppButton from '../../components/form/AppButton';
import AppTextInput from '../../components/form/AppTextInput';
import HeaderBar from '../../components/HeaderBar';
import PaymentHistoryItem from '../../components/items/PaymentHistoryItem';
import KeyboardAvoidingViewAndKeyBoardDisMiss from '../../components/KeyboardAvoidingViewAndKeyBoardDisMiss';
import LoadingModal from '../../components/LoadingModal';
import WalletComponent from '../../components/WalletComponent';
import common from '../../constants/common';
import Constants from '../../constants/Constants';
import { walletSummary } from '../../constants/ConstantString';
import TextConstant from '../../constants/TextConstant';
import { fundAccount, getTransaction } from '../../network/Server';
import { loginResponseState, wallet } from '../../store/State';
import { ITransaction } from '../../types/Type';

function WalletScreen(props: any) {
  const loginResponse = useRecoilValue(loginResponseState);
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [err, setErr] = useState({
    amount: '',
    isError: false,
  });
  const [transactions, setTransactions] = useState<ITransaction[]>()
  const myWallet = useRecoilValue(wallet);




  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const modalPresent = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);
  const modalClose = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const _fundAccount = async () => {
    setIsLoading(true);
    await fundAccount({
      amount: parseInt(amount),
      email: loginResponse.email,
    })
      .then(res => {
        setIsLoading(false);
        if (res.statusCode === 200) {
          // Linking.openURL(res.redirect_url);
          props.navigation.navigate(Constants.MyWebView, res.redirect_url);
        } else {
          Alert.alert('Error', 'Something went wrong');
        }
      })
      .catch(() => {
        setIsLoading(false);
      })
  }

  const _getTransaction = async () => {

    await getTransaction()
      .then((res) => {
        if (res.statusCode === 200) {
          setTransactions(Object.values(res).filter((item) => item !== undefined && item !== 200))
        } else {
          Alert.alert('Error', 'Something went wrong');
        }
      })
      .catch(() => {

      })
  }

  useEffect(() => {
    _getTransaction()
  }, [])

  return (
    <View style={styles.container}>
      <HeaderBar
        title={TextConstant.Wallet}
        actionText={' '}
        onPress={() => { }}
      />
      {isLoading && <LoadingModal isLoading={isLoading} />}
      <KeyboardAvoidingViewAndKeyBoardDisMiss>

        <WalletComponent
          onPress={() => {
            modalPresent();
          }}
          balance={myWallet.wallet.balance}
        />
        <Text style={styles.title}>Payment History</Text>
        <View style={styles.historyContainer}>
          <FlatList
            data={transactions ? transactions : []}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <PaymentHistoryItem item={item} />}
            style={styles.list}
            ListEmptyComponent={() => (<EmptyList />)}
          />
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
                  _fundAccount();
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
  title: {
    fontSize: common.W_6,
    fontWeight: '600',
    color: common.colors.lightPurple,
    marginLeft: common.W_20,
  },
  historyContainer: {
    marginTop: common.W_5,
    marginBottom: common.W_30
  },
  list: {
    marginBottom: common.WP(70)
  },
  listContainer: {
    paddingHorizontal: common.W_5,
  },
});
export default WalletScreen;

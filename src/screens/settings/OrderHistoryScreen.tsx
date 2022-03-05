import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import TextConstant from '../../constants/TextConstant';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function OrderHistoryScreen(props: any) {
  return (
    <View style={styles.container}>
      <HeaderBar
        title={TextConstant.Notifications}
        actionText={' '}
        onPress={() => {}}
      />
      <Text>OrderHistoryScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default OrderHistoryScreen;

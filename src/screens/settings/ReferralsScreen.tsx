import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import common from '../../constants/common';
import TextConstant from '../../constants/TextConstant';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ReferralsScreen(props: any) {
  return (
    <View style={styles.container}>
      <HeaderBar
        title={TextConstant.Notifications}
        actionText={' '}
        onPress={() => {}}
      />
      <Text>ReferralsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.colors.background,
  },
});
export default ReferralsScreen;

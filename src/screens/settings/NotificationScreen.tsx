import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import NotificationItem from '../../components/items/NotificationItem';
import common from '../../constants/common';
import {notificationMessages} from '../../constants/ConstantString';
import TextConstant from '../../constants/TextConstant';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function NotificationScreen(props: any) {
  return (
    <View style={styles.container}>
      <HeaderBar
        title={TextConstant.Notifications}
        actionText={' '}
        onPress={() => {}}
        notificationCount={3}
      />
      <View style={styles.content}>
        <FlatList
          data={notificationMessages}
          renderItem={({item}) => <NotificationItem item={item} />}
          keyExtractor={(item, index) => index.toString()}
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
  content: {
    flex: 1,
    paddingHorizontal: common.W_6,
    marginTop: common.W_10,
  },
});
export default NotificationScreen;

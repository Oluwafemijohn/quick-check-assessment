import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import FeedbackItems from '../../components/items/FeedbackItems';
import common from '../../constants/common';
import Constants from '../../constants/Constants';
import TextConstant from '../../constants/TextConstant';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function FeedbacksScreen(props: any) {
  return (
    <View style={styles.container}>
      <HeaderBar
        title={TextConstant.Feedback}
        actionText={' '}
        onPress={() => { }}
      />
      <View style={styles.content}>
        <FeedbackItems
          onPress={() => {
            props.navigation.navigate(Constants.Complement);
          }}
          title={TextConstant.Complement}
          itemNumber={1}
        />
        <FeedbackItems
          onPress={() => {
            props.navigation.navigate(Constants.ComplaintScreen);
          }}
          title={TextConstant.Complaint}
          itemNumber={2}
        />
        {/* <FeedbackItems
          onPress={() => {
            props.navigation.navigate(Constants.ProductRequestScreen);
          }}
          title={TextConstant.Productrequest}
          itemNumber={3}
        /> */}
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
    marginTop: common.W_5,
  },
});
export default FeedbacksScreen;

import React from 'react';
import {View, StyleSheet} from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import TextConstant from '../../constants/TextConstant';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function DeliveryDetailsScreen(props: any) {
  return (
    <View style={styles.container}>
      <HeaderBar
        onPressActionText={() => {}}
        title={TextConstant.deliveryDetails}
        actionText=" "
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DeliveryDetailsScreen;

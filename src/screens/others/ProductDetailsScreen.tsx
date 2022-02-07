import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ProductDetailsScreen(props: any) {
  return (
    <View style={styles.container}>
      <Text>ProductDetailsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductDetailsScreen;

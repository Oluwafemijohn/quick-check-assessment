import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import HeaderBar from '../../components/HeaderBar';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ListScreen(props: any) {
  return (
    <View style={styles.container}>
      <HeaderBar onPress={() => {}} />
      <Text>List screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListScreen;

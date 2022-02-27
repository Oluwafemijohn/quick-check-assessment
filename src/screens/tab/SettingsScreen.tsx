import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import TextConstant from '../../constants/TextConstant';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SettingsScreen(props: any) {
  return (
    <View style={styles.container}>
      <HeaderBar
        title={TextConstant.settings}
        actionText={' '}
        onPress={() => {}}
      />
      <ScrollView>
        <View style={styles.content} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default SettingsScreen;

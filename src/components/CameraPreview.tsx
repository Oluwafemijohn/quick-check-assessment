import React from 'react';
import {ImageBackground, View, ViewStyle, StyleSheet} from 'react-native';

const CameraPreview = ({photo, style}: {photo: any; style: ViewStyle}) => {
  return (
    <View style={[styles.container, style]}>
      <ImageBackground
        source={{uri: photo && photo.uri}}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
});

export default CameraPreview;

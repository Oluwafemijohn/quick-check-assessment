import React, { useState } from 'react';
// import {Camera} from 'react-native';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  ViewStyle,
  Image,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useRecoilState } from 'recoil';
import common from '../constants/common';


function AppCamera({
  style,
  setCapturedImage,
  setIsLoading,
  setPreviewVisible,
}: {
  style?: ViewStyle;
  // takePicture: () => void;
  setCapturedImage: React.Dispatch<any>;
  setIsLoading: (isLoading: boolean) => void;
  setPreviewVisible: (isVisible: boolean) => void;
}) {
  const [type, setType] = useState(RNCamera.Constants.Type.front);


  let camera: RNCamera | null = null;

  const __takePicture = async () => {
    setIsLoading(true);
    if (camera) {
      const options = { quality: 0.1, base64: true };
      const data = await camera.takePictureAsync(options);
      setCapturedImage(data);
      setPreviewVisible(true);
      setIsLoading(false);
    }
  };

  return (
    <>
      <View style={[styles.cameraContainer, style]}>
        <RNCamera
          ref={ref => {
            camera = ref;
          }}
          style={styles.camera}
          type={type}
          flashMode={RNCamera.Constants.FlashMode.on}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.emptyButton} />
        <View style={styles.outerButtonContainer}>
          <View style={styles.takePickture}>
            <TouchableOpacity onPress={__takePicture} style={styles.capture} />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setType(
              type === RNCamera.Constants.Type.front
                ? RNCamera.Constants.Type.back
                : RNCamera.Constants.Type.front,
            );
          }}>
          <Image
            source={require('../../assets/camera-reverse-icon.png')}
            style={styles.cameraReverseIcon}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  cameraContainer: {
    width: common.WP(100),
    alignSelf: 'center',
  },
  camera: {
    width: common.WP(100),
    height: common.HP(80),
    alignSelf: 'center',
  },
  capture: {
    width: common.WP(15),
    height: common.WP(15),
    alignSelf: 'center',
    backgroundColor: common.colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: common.WP(10),
  },
  button: {
    backgroundColor: common.colors.white,
    borderRadius: common.WP(6),
    justifyContent: 'center',
    alignItems: 'center',
    width: common.WP(12),
    height: common.WP(12),
    marginRight: common.WP(5),
  },
  cameraReverseIcon: {
    width: common.WP(8),
    height: common.WP(8),
    resizeMode: 'stretch',
    borderRadius: common.WP(4),
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: common.colors.black,
  },
  capturedImage: {
    width: common.WP(70),
    height: common.HP(40),
    alignSelf: 'center',
  },
  appButton: {
    alignSelf: 'center',
    borderColor: common.colors.white,
  },
  takePickture: {
    width: common.WP(16),
    height: common.WP(16),
    borderRadius: common.WP(8),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: common.colors.white,
  },
  emptyButton: {
    width: common.WP(10),
    height: common.WP(10),
  },
  outerButtonContainer: {
    width: common.WP(18),
    height: common.WP(18),
    borderRadius: common.WP(9),
    backgroundColor: common.colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: common.colors.blue,
  },
});

export default AppCamera;

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AppCamera from '../components/AppCamera';
import CameraPreview from '../components/CameraPreview';
import AppButton from '../components/form/AppButton';
import HeaderBar from '../components/HeaderBar';
import FaceIdPart from '../components/svg/FaceIdPart';
import common from '../constants/common';

function FaceIdScreen(props: any) {
    const [isGetStarted, setIsGetStarted] = useState(false);

    const [startCamera, setStartCamera] = useState(false);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [capturedImage, setCapturedImage] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    return (
        <View style={styles.container}>
            {
                !isGetStarted && (
                    <>
                        <HeaderBar title='Security' actionText=' '
                            goBack />
                        <FaceIdPart style={styles.part} />

                        <AppButton
                            style={styles.button}
                            title="NOTIFY ME"
                            onPress={() => {
                                setIsGetStarted(true);
                            }}
                            width={90}
                        // marginTop={}
                        />
                    </>
                )
            }
            {
                isGetStarted && (
                    <AppCamera
                        setIsLoading={setIsLoading}
                        setCapturedImage={(data: any) => {
                            setCapturedImage(data);
                        }}
                        setPreviewVisible={setPreviewVisible}
                    />
                )
            }
            {
                previewVisible && (
                    <CameraPreview
                        style={styles.capturedImage}
                        photo={capturedImage}
                    />)
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: common.colors.white,
    },
    part: {
        alignSelf: 'center',
        marginTop: common.WP(10),
    },
    button: {
        top: common.HP(30),
        alignSelf: 'center',
    },
    capturedImage: {
        width: common.WP(70),
        height: common.HP(40),
        alignSelf: 'center',
    },
})

export default FaceIdScreen;
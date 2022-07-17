import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppCamera from '../components/AppCamera';
import CameraPreview from '../components/CameraPreview';
import AppButton from '../components/form/AppButton';
import HeaderBar from '../components/HeaderBar';
import AllGood from '../components/svg/AllGood';
import FaceIdPart from '../components/svg/FaceIdPart';
import common from '../constants/common';
import RouteConstant from '../navigations/RouteConstant';

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
                isGetStarted && !previewVisible && (
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
                    <>
                        <HeaderBar title='Security' actionText=' ' close />

                        <Text style={styles.setu} >Setup face lock</Text>

                        <CameraPreview
                            style={styles.capturedImage}
                            photo={capturedImage}
                        />

                        <AllGood style={styles.allgood} />
                        <AppButton
                            style={styles.button}
                            title="DONE"
                            onPress={() => {
                                // setIsGetStarted(true);
                                props.navigation.navigate(RouteConstant.FastOrder);
                            }}
                            width={90}
                            backgroundColor={common.colors.activeTabText}
                            borderColor={common.colors.activeTabText}
                        />
                    </>
                )

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
    // capturedImage: {
    //     width: common.WP(50),
    //     height: common.HP(50),
    //     alignSelf: 'center',
    //     marginTop: common.WP(10),
    //     borderRadius: common.WP(25),
    //     alignItems: 'center',
    // },
    capturedImage: {
        width: common.WP(50),
        height: common.WP(50),
        alignSelf: 'center',
        borderRadius: common.WP(25),
    },
    setu: {
        fontSize: common.WP(4),
        color: common.colors.black,
        alignSelf: 'center',
        marginTop: common.WP(10),
    },
    allgood: {
        alignSelf: 'center',
        marginTop: common.WP(10),
    }
})

export default FaceIdScreen;
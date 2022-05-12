import React from 'react';
import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import ExtraLayerOfSecurity from '../components/svg/ExtraLayerOfSecurity';
import FaceComponent from '../components/svg/FaceIdConponent';
import FingerPrintComponent from '../components/svg/FingerPrintComponent';
import PinComponent from '../components/svg/PinComponent';
import common from '../constants/common';
import RouteConstant from '../navigations/RouteConstant';

function FastOrder(props: any) {
    return (
        <ScrollView>
            <View style={styles.container} >
                <HeaderBar title='Security' actionText=' '
                    close={true} />
                <ExtraLayerOfSecurity style={styles.security} />
                <Text style={styles.securityText}>Select a prefered method for security</Text>
                <View style={styles.securityContainer}>
                    <Pressable onPress={() => {
                        props.navigation.navigate(RouteConstant.PinScreen);
                    }} >
                        <PinComponent />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            props.navigation.navigate(RouteConstant.FaceIdScreen);
                        }}
                    >
                        <FaceComponent />
                    </Pressable>
                    <Pressable>
                        <FingerPrintComponent />
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: common.colors.white,
    },
    security: {
        alignSelf: 'center',
        marginTop: common.WP(10),
    },
    securityText: {
        marginLeft: common.WP(5),
        marginTop: common.WP(6),
        color: common.colors.grey3,
    },
    securityContainer: {
    },
})

export default FastOrder;
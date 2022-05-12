import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions, ScrollView } from 'react-native';
import AppButton from '../components/form/AppButton';
import common from '../constants/common';
import RouteConstant from '../navigations/RouteConstant';

function RepaymentPlanScreen(props: any) {
    const [gotIt, setGotIt] = React.useState(false);
    return (
        <ScrollView>
            <View style={styles.container} >
                {
                    gotIt ? (
                        <>
                            <Image source={require('../../assets/Group3.png')} style={styles.image2} />
                            <AppButton
                                style={styles.button2}
                                title="ALRIGHYT, GOT IT"
                                onPress={() => {
                                    props.navigation.navigate(RouteConstant.AppTabNavigation);
                                    // setGotIt(false);

                                }}
                                width={90}
                            />
                        </>) : (
                        <>
                            <Image source={require('../../assets/Group2.png')} style={styles.image} />
                            <Text style={styles.repayment}>Users should be able to see repayment plan</Text>
                            <AppButton
                                style={styles.button}
                                title="ALRIGHYT, GOT IT"
                                onPress={() => {
                                    // props.navigation.navigate(RouteConstant.RepaymentPlanScreen);
                                    setGotIt(true);
                                }}
                                width={90}
                            />
                        </>
                    )
                }


            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
    },
    image: {
        width: '70%',
        height: '50%',
        alignSelf: 'center',
        marginTop: common.WP(25),
    },
    image2: {
        marginTop: common.WP(25),
        width: '70%',
        height: '58%',
        alignSelf: 'center',
    },
    repayment: {
        fontSize: common.WP(4),
        fontWeight: 'bold',
        width: '70%',
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: common.WP(10),
    },
    button: {
        alignSelf: 'center',
        top: common.HP(10),
    },
    button2: {
        alignSelf: 'center',
        top: common.HP(17),
    }
})

export default RepaymentPlanScreen;
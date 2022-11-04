import React from 'react';
import { View, StyleSheet } from 'react-native';
import GetStartedIcon from '../assets/svg/GetStartedIcon';
import AppButton from '../components/AppButton';
import { AppText as Text } from '../components/AppText';
import common from '../constants/common';
import RouteConstant from '../navigations/RouteConstant';


function GetStartedScreen(props: any) {
    return (
        <View>
            <GetStartedIcon style={styles.svg} width={common.WP("100%")} height={common.HP("55%")} />
            <View style={styles.bodyContainer}>
                <Text style={styles.getStarted} >Hello, welcome to my app.</Text>
                <AppButton
                    style={styles.button}
                    title="Get Started"
                    onPress={() => {
                        // props.navigation.navigate('SignUpScreen');
                        props.navigation.navigate(RouteConstant.LoginScreen);
                    }}
                    width={80}
                    marginTop={common.WP('2.5%')}
                />
                <Text style={styles.signUp} >Don't have an account? <Text
                    //@ts-ignore
                    onPress={() =>
                        props.navigation.navigate(RouteConstant.RegisterScreen)
                    }
                    style={styles.signIn} >Sign up</Text> </Text>
            </View>

        </View>
    );
}



// function GetStarted(props: any) {
// return (
//     <View>
//         <GetStarted style={styles.svg} width={common.WP("100%")} height={common.HP("55%")} />
//         <View style={styles.bodyContainer}>
//             <Text style={styles.getStarted} >Jasper helps you grant
//                 anyone access to your
//                 location in seconds.</Text>
//             <AppButton
//                 style={styles.button}
//                 title="Get Started"
//                 onPress={() => {
//                     // props.navigation.navigate('SignUpScreen');
//                     props.navigation.navigate(RouteConstant.LoginScreen);
//                 }}
//                 width={80}
//                 marginTop={common.WP('2.5%')}
//             />
//             <Text style={styles.signUp} >Don't have an account? <Text
//                 //@ts-ignore
//                 onPress={() =>
//                     props.navigation.navigate(RouteConstant.RegisterScreen)
//                 }
//                 style={styles.signIn} >Sign up</Text> </Text>
//         </View>

//     </View>
// );
// }

const styles = StyleSheet.create({
    grantAccess: {
        fontSize: common.W_5,
        color: common.colors.white,
    },
    getStarted: {
        alignSelf: 'center',
        fontSize: common.W_6,
        color: common.colors.black,
        textAlign: 'center',
        width: common.WP(80),
        fontWeight: '600',
        marginTop: common.HP(5),
    },
    bodyContainer: {
    },
    onlinePlatform: {
        alignSelf: 'center',
        fontSize: common.W_4,
        color: common.colors.grey500,
        textAlign: 'center',
        width: common.WP(80),
        marginTop: common.HP(2),
    },
    button: {
        alignSelf: 'center',
    },
    svg: {
        marginTop: common.HP(-5),
    },
    signUp: {
        alignSelf: 'center',
        color: common.colors.grey700,
    },
    signIn: {
        color: common.colors.peach500,
        fontSize: common.WP(4),
    },
})

export default GetStartedScreen;
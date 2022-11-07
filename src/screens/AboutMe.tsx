import { Alert, Image, Linking, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import common from '../constants/common'
import { AppText as Text } from '../components/AppText'
import RouteConstants from '../navigations/RouteConstant'
import configureStore from '../store/configureStore'
import { addTopStories } from '../store/TopStoriesState'
import Clipboard from '@react-native-clipboard/clipboard';

const skills = [
    'React Native',
    'React',
    'Kotlin',
    'Java',
    'Adroid',
    'MYSQL',
    'Firebase',
    'Version Control with Git and Github',
    'Test-Driven Development.'
]



export default function AboutMe(props: any) {

    const store = configureStore();


    const openWebView = (url: string) => {
        store.dispatch(addTopStories(url));
        props.navigation.navigate(RouteConstants.AppWebViewScreen);
    }

    const coppyLink = (url: string) => {
        Clipboard.setString(url);
        Alert.alert('Copied to Clipboard!');
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                    style={styles.image}
                    source={require('../assets/image/p4.jpeg')}
                />
                {/* <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>

                </View> */}

                <Text style={styles.name} >Oluwafemi John Ogundipe</Text>
                <Text style={styles.contacts} >femiogundipe01@gmail.com</Text>
                <Text style={styles.contacts} >08130675563</Text>

                <Text style={styles.description} >An experienced Software Engineer with technical expertise in software development life cycle.
                    Ensuring production and delivery of products and services that meet client
                    specifications with the latest technologies.</Text>
                <Text style={styles.description} >I am a self-motivated, hardworking and a team player with a strong desire to learn and
                    contribute to the growth of the organization.</Text>

                <Text style={styles.cv}>CV: {' '} <Text
                    //@ts-ignore
                    onPress={() => openWebView('https://docs.google.com/document/d/1N0Ckd4p2nYN5KaWdvFrPM30qgxRQFJiZJNsDya2KKtI/edit?usp=sharing')} style={styles.link}>Open Link</Text> or {' '}
                    <Text
                        //@ts-ignore
                        onPress={() => coppyLink('https://docs.google.com/document/d/1N0Ckd4p2nYN5KaWdvFrPM30qgxRQFJiZJNsDya2KKtI/edit?usp=sharing')} style={styles.link}
                    >Copy Link</Text> </Text>
                <Text style={styles.skills} >Skills</Text>
                {
                    skills.map((skill, index) => {
                        return (
                            <View style={styles.skillsWrapper}>
                                <Text style={styles.skill} key={index} >{skill}</Text>
                            </View>
                        )
                    })
                }

                <Text style={styles.projects}>Projects</Text>
                <Text style={styles.project}>SEEDs: Built with React-native, ReactContext, TypeScript. {' '}
                    <Text
                        //@ts-ignore
                        onPress={() => openWebView('https://play.google.com/store/apps/details?id=com.seedsbyanchoria')} style={styles.link}>Link</Text></Text>

                <Text style={styles.project}>Jasper: Built with React, Redux, TypeScript. <Text
                    //@ts-ignore
                    onPress={() => openWebView('http://jasper-web.herokuapp.com/dashboard')} style={styles.link}>Link</Text>
                </Text>

                <Text
                    //@ts-ignore
                    onPress={() => Linking.openURL('https://docs.google.com/document/d/1N0Ckd4p2nYN5KaWdvFrPM30qgxRQFJiZJNsDya2KKtI/edit?usp=sharing')}
                    style={styles.readmore}>Read more in my CV</Text>


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: common.WP(6),
        marginTop: common.WP(5),
        color: common.colors.textColor,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: common.colors.white,
        paddingHorizontal: common.WP(5),
    },
    description: {
        fontSize: common.WP(4),
        marginTop: common.WP(2),
    },
    image: {
        width: common.WP(50),
        height: common.WP(50),
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    skills: {
        fontSize: common.WP(5),
        marginTop: common.WP(5),
        color: common.colors.textColor,
        fontWeight: 'bold',
    },
    skill: {
        fontSize: common.WP(4),
    },
    skillsWrapper: {
        paddingVertical: common.WP(1),
    },
    projects: {
        fontSize: common.WP(5),
        marginTop: common.WP(5),
        color: common.colors.textColor,
        fontWeight: 'bold',
    },
    project: {
        fontSize: common.WP(3.5),
        marginTop: common.WP(2),
    },
    link: {
        color: common.colors.primary,
        fontSize: common.WP(3.5),
    },
    cv: {
        fontSize: common.WP(3.5),
        marginTop: common.WP(5),
        marginBottom: common.WP(5),
    },
    contacts: {
        fontSize: common.WP(3.5),
        marginTop: common.WP(2),
        alignSelf: 'center',
    },
    readmore: {
        fontSize: common.WP(3.5),
        marginVertical: common.WP(5),
        color: common.colors.primary,
    }
})
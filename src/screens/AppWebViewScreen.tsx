import { StyleSheet, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
import { generalContainer } from '../styles/styles';
import configureStore from '../store/configureStore';



export default function AppWebViewScreen(props: any) {
    const url = props.route.params;
    // let topStories = 'https://hacker-news.firebaseio.com/v0/topstories'
    const store = configureStore();

    console.log('url', store.getState().description);

    let url2 = store.getState().description;

    return (
        <View style={generalContainer.container}>
            {/* <HeaderBar
                goBack /> */}
            <WebView
                goBack={() => props.navigation.goBack()}
                source={{ uri: url2 }}
                style={{ marginTop: 20 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})
import React, { useCallback, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, FlatList, Pressable, Dimensions } from 'react-native';

import common from '../constants/common';
import RouteConstant from '../navigations/RouteConstant';
import { errorHandler, getTopStories, handleSuccess } from '../server/Api';
import actionType from '../store/actionType';
import configureStore from '../store/configureStore';
import { addTopStories } from '../store/TopStoriesState';




function Home(props: any) {

    const store = configureStore();

    const [open, setOpen] = React.useState(false);

    const _getTopStories = async () => {
        store.dispatch(addTopStories('https://hackernews.api-docs.io/v0/overview/introduction'));
        props.navigation.navigate(RouteConstant.AppWebViewScreen);
    }

    // useEffect(() => {
    //     let isMounted = true;
    //     _getTopStories();
    //     return () => { isMounted = false };
    // }, [])

    return (
        <View style={styles.container} >

            <Text style={styles.Thanks} >Hi, Welcome on board </Text>
            <ScrollView>
                <View style={styles.container1} >
                    <Pressable
                        onPress={() => {
                            _getTopStories();
                        }}
                        style={styles.buttonContainer}>
                        <Text style={styles.buttonText} >See the top stories</Text>
                    </Pressable>

                    <Pressable
                        onPress={() => {

                        }}
                        style={styles.buttonContainer}>
                        <Text style={styles.buttonText} >See the top stories</Text>
                    </Pressable>
                </View>

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: common.colors.white,
        paddingHorizontal: common.W_5,
    },
    buttonContainer: {
        backgroundColor: common.colors.white,
        paddingVertical: common.W_3,
        borderColor: common.colors.grey200,
        borderWidth: 1,
        borderRadius: common.W_2,
        paddingHorizontal: common.W_3,
    },
    Thanks: {
        fontSize: common.W_6,
        marginTop: common.WP(5),
        color: common.colors.textColor,
    },
    buttonText: {
        fontSize: common.W_4,
    },
    container1: {
        marginTop: common.WP(10),
    },
})

export default Home;
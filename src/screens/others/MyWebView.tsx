import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import HeaderBar from '../../components/HeaderBar';
import TextConstant from '../../constants/TextConstant';

function MyWebView(props: any) {
    const url = props.route.params;
    return (
        <View style={styles.container} >
            <HeaderBar
                title={TextConstant.Wallet}
                actionText={' '}
                onPress={() => { }}
            />
            <WebView source={{ uri: url }} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default MyWebView;
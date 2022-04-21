import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppButton from '../../components/form/AppButton';
import AppTextInput from '../../components/form/AppTextInput';
import AppTextInputTextArea from '../../components/form/AppTextInputTextArea';
import HeaderBar from '../../components/HeaderBar';
import common from '../../constants/common';
import TextConstant from '../../constants/TextConstant';

function ProductRequestScreen(props: any) {
    const [complaint, setComplaint] = useState('');
    const [productName, setProductName] = useState('')
    const [err, setErr] = useState({
        productName: '',
        description: '',
        touched: false
    });
    return (
        <View style={styles.container}>
            <HeaderBar
                title={TextConstant.Feedback}
                actionText={' '}
                onPress={() => { }}
            />
            <View style={styles.content}>
                <Text style={styles.help}>Product name <Text style={styles.star}>*</Text> </Text>
                <AppTextInput
                    value={productName}
                    placeholder="First  Name"
                    // errors={err.productName && err.touched}
                    onChangeText={(text) => {

                    }}
                    onBlur={(e) => { }}
                    width={common.WP('80%')}
                    keyboardType="default"
                    style={styles.input}
                    autoCapitalize="none"
                    marginTop={2}
                />

                <Text style={styles.help}>Description</Text>
                <AppTextInputTextArea
                    placeholder={TextConstant.Description}
                    style={styles.textArea}
                    onChangeText={text => setComplaint(text as string)}
                    value={complaint}
                    width={common.WP('80%')}
                    numberOfLines={10}
                    multiline={true}
                    marginTop={2}
                />
                <View style={styles.line} />
                <AppButton
                    style={styles.button}
                    title="Send"
                    onPress={() => { }}
                    width={80}
                    marginTop={10}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: common.colors.background,
    },
    content: {
        marginTop: common.W_5,
        paddingHorizontal: common.W_10,
    },
    textArea: {
        alignSelf: 'center',
        height: common.WP(30),
    },
    button: {},
    line: {
        borderBottomWidth: 1,
        borderBottomColor: common.colors.veryLighrGrey,
        marginTop: common.W_5,
    },
    help: {
        fontSize: common.W_4,
    },
    input: {
        alignSelf: 'center',
    },
    star: {
        color: common.colors.red
    }
});

export default ProductRequestScreen;
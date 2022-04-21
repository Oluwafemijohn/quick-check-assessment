import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import AppButton from '../../components/form/AppButton';
import AppTextInputTextArea from '../../components/form/AppTextInputTextArea';
import HeaderBar from '../../components/HeaderBar';
import LoadingModal from '../../components/LoadingModal';
import common from '../../constants/common';
import TextConstant from '../../constants/TextConstant';
import { postFeedBack } from '../../network/Server';

function ComplementScreen(props: any) {
    const [complement, setComplement] = useState('');
    const [err, setErr] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const _postFeedBack = async () => {
        setIsLoading(true);
        await postFeedBack({
            description: complement,
            type: 'complement'
        })
            .then((res) => {
                setIsLoading(false);
                Alert.alert(res.msg)
            })
            .catch(() => { });
    }

    return (
        <View style={styles.container}>
            <HeaderBar
                title={TextConstant.Feedback}
                actionText={' '}
                onPress={() => { }}
            />
            {isLoading && <LoadingModal isLoading={isLoading} />}
            <View style={styles.content}>
                <Text style={styles.help}>What do you like about Sherz?</Text>
                <AppTextInputTextArea
                    placeholder={TextConstant.addFeedback}
                    style={styles.textArea}
                    onChangeText={text => setComplement(text as string)}
                    value={complement}
                    width={common.WP('80%')}
                    numberOfLines={10}
                    multiline={true}
                    errors={err}
                />
                <View style={styles.line} />
                <AppButton
                    style={styles.button}
                    title="Send"
                    onPress={() => {
                        if (complement === '') {
                            setErr('Please add your feedback')
                        } else {
                            _postFeedBack()
                        }
                    }}
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
        fontWeight: '600',
    },
});

export default ComplementScreen;
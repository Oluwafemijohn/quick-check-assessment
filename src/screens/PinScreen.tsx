import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import AppButton from '../components/form/AppButton';

import HeaderBar from '../components/HeaderBar';
import common from '../constants/common';
import { CELL_COUNT } from '../constants/Constants';
import RouteConstant from '../navigations/RouteConstant';


function PinScreen(props: any) {
    const [isValid, setIsValid] = useState(false);
    const [done, setDone] = useState(false);
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    useEffect(() => {
        if (value.length === CELL_COUNT) {
            setIsValid(true);
        }
    }, [value]);

    return (
        <ScrollView>
            <View style={styles.container}>
                <HeaderBar title='Security' actionText=' ' goBack={true} />
                <Text style={styles.pin} >Secure with a pin</Text>
                <CodeField
                    ref={ref}
                    {...prop}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <View
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            <Text style={[styles.cell, isFocused && styles.focusCell]}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>
                    )}
                />
                <Text style={styles.lock}>Enter your pin to lock credit</Text>
                <Text style={styles.authentication}>You can use a pin authentication to confirm making payments through this app.</Text>
                {
                    done && <Text style={[styles.allGood]} >All Good!</Text>
                }
                <AppButton
                    //@ts-ignore
                    style={[styles.button, {
                        marginTop: done ? common.HP(15) : common.HP(25),
                    }]}
                    title={done ? 'Done' : 'CONFIRM PIN'}
                    onPress={() => {
                        if (isValid && done) {
                            props.navigation.navigate(RouteConstant.FastOrder);
                        } else if (isValid) {
                            setDone(true);
                        }
                    }}
                    width={90}
                    backgroundColor={isValid ? common.colors.activeTabText : common.colors.grey2}
                    borderColor={isValid ? common.colors.activeTabText : common.colors.grey2}
                // marginTop={}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: common.colors.white,
    },
    pin: {
        alignSelf: 'center',
        marginTop: common.WP(10),
    },
    cell: {
        width: common.WP(12),
        height: common.WP(12),
        lineHeight: common.WP(12),
        fontSize: common.WP(5),
        marginRight: common.WP(2),
        borderWidth: 0.5,
        borderRadius: common.WP(2),
        borderColor: common.colors.grey3,
        textAlign: 'center',
    },
    focusCell: {
        borderColor: common.colors.activeTabText,
    },
    codeFieldRoot: {
        marginHorizontal: common.W_15,
        marginTop: 20,
    },
    lock: {
        alignSelf: 'center',
        marginTop: common.WP(10),
        fontSize: common.WP(4),
        color: common.colors.black,
    },
    authentication: {
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: common.WP(5),
        fontSize: common.WP(4),
        color: common.colors.grey,
    },
    button: {
        alignSelf: 'center',
        top: common.HP(35),
    },
    allGood: {
        alignSelf: 'center',
        marginTop: common.WP(10),
        fontSize: common.WP(4),
        color: common.colors.green,
    }
})

export default PinScreen;
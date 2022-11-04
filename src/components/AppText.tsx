import { StyleProp, StyleSheet, Text, TextProps, TextStyle, ViewStyle } from 'react-native'
import React from 'react'
import common from '../constants/common';


export const AppText = ({
    children = '',
    style,
    ...props
}: {
    children?: React.ReactNode;
    style?: StyleProp<TextStyle>;
    props?: TextProps;
}) => <Text style={[styles.container, style]} {...props}>{children}</Text>


const styles = StyleSheet.create({
    container: {
        color: common.colors.textColor,
        fontSize: common.WP(4),
    },
})


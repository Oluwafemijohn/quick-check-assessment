import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Pressable, Text, Image, Alert, FlatList } from 'react-native';
import AppDatePicker2 from '../components/form/AppDatePicker2';
import AppTextInput from '../components/form/AppTextInput';
import HeaderBar from '../components/HeaderBar';
import common from '../constants/common';
import { formatDateOfBirth } from '../utilities';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { radioButtonsData } from '../constants/Constants';
import AppTextInputPassWord from '../components/form/AppTextInputPassWord copy';
import AppButton from '../components/form/AppButton';
import { ScrollView } from 'react-native-gesture-handler';

import { IList } from '../types/Type';

function Account(props: any) {
    const [isFirstTab, setIsFirstTab] = useState(true);


    return (
        <View style={styles.container} >
            <Text>Account</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Account;
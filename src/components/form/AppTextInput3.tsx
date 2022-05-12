import React, { ChangeEvent } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  ViewStyle,
  Text,
  Image,
} from 'react-native';
import { widthPercentageToDP as WP } from 'react-native-responsive-screen';

import colors from '../../constants/colors';
import common from '../../constants/common';
import defaultStyle from '../../constants/defaultStyle';

interface Props {
  width: number | undefined;
  style?: ViewStyle;
  errorStyle?: ViewStyle;
  placeholder: string;
  errors?: string | boolean | undefined;
  onBlur?: (e: any) => void;
  value?: string;
  keyboardType?: any;
  secureTextEntry?: boolean;
  onChangeText?: (e: string | ChangeEvent<any>) => void;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  icon?: boolean;
  marginTop?: number;
  marginBottom?: number;
  editIcon?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

function AppTextInput({
  onBlur,
  placeholder,
  style,
  errorStyle,
  value,
  errors,
  width,
  keyboardType,
  onChangeText,
  autoCapitalize,
  marginTop = 5,
  marginBottom = 5,
  backgroundColor = colors.white,
  textColor = common.colors.text1,
}: Props) {
  return (
    <View
      style={[
        style,
        {
          marginTop: common.WP(marginTop),
          marginBottom: common.WP(marginBottom),
        },
      ]}>
      <View style={[styles.container, { width, backgroundColor }, style]}>
        <TextInput
          onBlur={onBlur}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholderTextColor={colors.lightGrey}
          style={[
            defaultStyle.text,
            styles.input,
            { backgroundColor, color: textColor },
          ]}
          placeholder={placeholder}
          value={value}
          autoCapitalize={autoCapitalize}
        />
      </View>
      {errors !== '' && (
        <Text style={[styles.error, errorStyle, { width }]}>{errors}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    padding: WP(1),
    // marginVertical: WP(5),
    alignItems: 'center',
    // borderBottomWidth: 1,
    borderColor: colors.activeTabText,
    borderWidth: 1,
    borderRadius: common.W_2,
  },
  error: {
    color: colors.red,
    fontSize: WP(4),
    marginTop: 5,
  },
  input: {
    flex: 1,
    backgroundColor: colors.white,
    height: WP(10),
    fontSize: WP(4),
    marginLeft: common.W_2,
  },
  emailIcon: {
    resizeMode: 'contain',
  },
});

export default AppTextInput;

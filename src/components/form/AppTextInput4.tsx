import React, { ChangeEvent, useState } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  ViewStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Platform,
  Pressable,
} from 'react-native';
import { widthPercentageToDP as WP } from 'react-native-responsive-screen';
import common from '../../constants/common';
import { AppText as Text } from '../../components/AppText';


interface Props {
  width: number | undefined;
  style?: ViewStyle;
  placeholder: string;
  errors?: string | boolean | undefined;
  onBlur?: (e: any) => void;
  value?: string;
  countryCode?: string;
  keyboardType?: any;
  secureTextEntry?: boolean;
  onChangeText?: (e: string | ChangeEvent<any>) => void;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  marginBottom?: number;
  marginTop?: number;
  maxLength?: number | undefined;
  backgroundColor?: string;
  onFocus?: () => void;
  checkUndefined?: boolean;
  height?: number;
  searchIcon?: boolean;
  cancel?: () => void;
  selectContact?: () => void;
}

function AppTextInput({
  onBlur,
  placeholder,
  style,
  value,
  errors,
  countryCode,
  width,
  keyboardType,
  onChangeText,
  autoCapitalize,
  marginBottom = 0,
  marginTop = 5,
  maxLength,
  backgroundColor = common.colors.white,
  onFocus,
  checkUndefined = false,
  height = 16,
  searchIcon = false,
  cancel,
  selectContact,
}: Props) {
  const [isFocused, setIsFocused] = useState(false);



  const placeholderStyle = StyleSheet.create({
    placeholder: {
      position: 'absolute',
      left: 0,
      top: WP('1%'),
      fontSize: WP('3.5%'),
      marginBottom: WP(5),
      color: common.colors.black,
    },
  });

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onBlur!(e);
    setIsFocused(false);
  };

  const _onFocus = () => {
    setIsFocused(true);
    if (onFocus !== undefined) {
      onFocus();
    }
  }

  return (

    <View style={{
      marginBottom: WP(marginBottom),
    }} >
      <View
        style={[
          styles.container,
          {
            width,
            marginTop: WP(marginTop),
            backgroundColor,
            height: WP(height),
            borderWidth: WP(0.5),
            borderColor: isFocused ? common.colors.blue400 : common.colors.grey50,
          },
          style,
        ]}>
        {countryCode && <Text style={[styles.countryCode, { color: common.colors.grey50 }]}>{countryCode}</Text>}

        <View
          style={[
            styles.inputContainer,
            { marginLeft: !countryCode ? WP(5) : WP(0) },
          ]}>

          <TextInput
            onBlur={handleBlur}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            placeholderTextColor={common.colors.grey300}
            style={[
              styles.text,
              {
                // height: '100%',
                height: WP(height),
                color: common.colors.textColor,
              },
            ]}
            placeholder={!isFocused ? placeholder : ''}
            value={value}
            autoCapitalize={autoCapitalize}
            maxLength={maxLength}
            onFocus={_onFocus}
          />
        </View>

      </View>
      {
        checkUndefined ? typeof errors !== 'boolean' && errors !== '' && errors !== undefined &&
          <Text style={[styles.error, { width, color: common.colors.red }]}>{errors}</Text> :
          errors && <Text style={[styles.error, { width, color: common.colors.red }]}>{errors}</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: WP(3),
    flexDirection: 'row',

    marginVertical: WP(5),
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  error: {
    fontSize: WP(3),
    marginTop: common.WP(-3),
  },
  countryCode: {
    fontSize: WP(4),
    fontWeight: 'bold',
    marginLeft: WP(5),
  },
  inputContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  input: {
    top: WP(4),
  },
  text: {
    color: common.colors.black,
    fontSize: WP('4.0%'),
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
  search: {
    marginLeft: WP(2),
    marginRight: WP(-2),
  },
  contactSelector: {
    marginRight: WP(2),
  },
});

export default AppTextInput;

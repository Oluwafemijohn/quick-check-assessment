import React, { ChangeEvent, useState } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  ViewStyle,
  Text,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Platform,
  Pressable,
  Image,
} from 'react-native';
import { widthPercentageToDP as WP } from 'react-native-responsive-screen';
import common from '../../constants/common';
import PasswordIcon from '../svg/PasswordIcon';


interface Props {
  width: number | undefined;
  style?: ViewStyle;
  placeholder: string;
  errors: string | boolean | undefined;
  onBlur: (e: any) => void;
  value: string;
  countryCode?: string;
  keyboardType: any;
  icon?: boolean;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  show?: string;
  onPress?: () => void;
  marginBottom?: number;
  marginTop?: number;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  maxLength?: number | undefined;
}

function AppTextInputPassWord({
  onBlur,
  placeholder,
  style,
  value,
  errors,
  width,
  keyboardType,
  icon,
  onChangeText,
  onPress,
  marginBottom = 5,
  marginTop = 5,
  autoCapitalize,
  maxLength,
}: Props) {
  const [securePassword, setSecurePassword] = useState(true);
  const [isFocused, setIsFocused] = useState(false);


  const placeholderStyle = StyleSheet.create({
    placeholder: {
      position: 'absolute',
      left: 0,
      top: WP('1%'),
      fontSize: WP('3.5%'),
      marginBottom: WP(5),
      marginLeft: WP(5),
    },
  });

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onBlur!(e);
    setIsFocused(false);
  };
  return (
    <View style={{
      marginBottom: WP(marginBottom),
      marginTop: WP(marginTop),
    }}>
      <View
        style={[
          styles.container,
          {
            width,
            borderWidth: WP(0.5),
            backgroundColor: common.colors.inputBackground,
            borderColor: isFocused ? common.colors.blue400 : common.colors.gray50,
          },
          style,
        ]}>
        {/* {(isFocused || value !== '') && (
          <Text style={[placeholderStyle.placeholder, { color: common.colors.grey300 }]}>{placeholder}</Text>
        )} */}
        <TextInput
          onBlur={handleBlur}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholderTextColor={common.colors.grey300}
          style={[
            styles.text,
            {
              // top: value === '' && !isFocused ? WP(0) : WP(2),
              height: '100%',
              color: common.colors.black,
            },
            styles.input,
          ]}
          placeholder={placeholder}
          value={value}
          secureTextEntry={securePassword}
          autoCapitalize={autoCapitalize}
          maxLength={maxLength}
          onFocus={() => {
            setIsFocused(true);
          }}
        />
        {/* {icon && (
          <TouchableWithoutFeedback onPress={onPress}>

          </TouchableWithoutFeedback>
        )} */}
        {/* {value !== '' && ( */}
        <Pressable
          onPress={() => setSecurePassword(!securePassword)}
          style={[styles.showPassword, {
          }]}>
          {
            securePassword ? (

              <PasswordIcon style={styles.icon} />
            ) : (
              <Image source={require('../../assets/image/password-icon.png')} style={styles.icon2} />
            )
          }
        </Pressable>
        {/* )} */}
      </View>
      {errors && <Text style={[styles.error, { width, color: common.colors.red }]}>{errors}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: WP(3),
    flexDirection: 'row',
    // marginVertical: WP(5),
    paddingHorizontal: WP(2),
    alignItems: 'center',
    height: WP(16),
  },
  icon: {
    marginRight: WP(2),
  },
  icon2: {
    marginRight: WP(1.7),
    width: WP(6),
    height: WP(11),
    resizeMode: 'contain',
  },
  error: {
    fontSize: WP(3),
    marginTop: 5,
  },
  countryCode: {
    fontSize: WP(4),
    fontWeight: 'bold',
  },
  showPassword: {

  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  text: {
    color: common.colors.black,
    fontSize: WP('4.0%'),
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});

export default AppTextInputPassWord;

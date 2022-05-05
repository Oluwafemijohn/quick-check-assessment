import React, { ChangeEvent, useState } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  ViewStyle,
  Image,
  Text,
  ImageSourcePropType,
  TouchableWithoutFeedback,
} from 'react-native';
import { widthPercentageToDP as WP } from 'react-native-responsive-screen';

import colors from '../../constants/colors';
import defaultStyle from '../../constants/defaultStyle';

interface Props {
  width: number | undefined;
  style?: ViewStyle;
  placeholder: string;
  errors: string | boolean | undefined;
  onBlur: (e: any) => void;
  value: string;
  countryCode?: string;
  keyboardType: any;
  icon?: ImageSourcePropType;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  show?: string;
  onPress?: () => void;
}

function AppTextInputPassWord({
  onBlur,
  placeholder,
  style,
  value,
  errors,
  countryCode,
  width,
  keyboardType,
  icon,
  onChangeText,
}: Props) {
  const [securePassword, setSecurePassword] = useState(true);
  return (
    <>
      <View style={[styles.container, { width }]}>
        {countryCode && <Text style={styles.countryCode}>{countryCode}</Text>}
        <TextInput
          onBlur={onBlur}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholderTextColor={colors.lightGrey}
          style={[defaultStyle.text, style, styles.input]}
          placeholder={placeholder}
          value={value}
          secureTextEntry={securePassword}
        />
        {icon && (
          <TouchableWithoutFeedback
            onPress={() => setSecurePassword(!securePassword)}>
            <Image source={icon} style={styles.icon} />
          </TouchableWithoutFeedback>
        )}
        {/* <Text
          onPress={() => setSecurePassword(!securePassword)}
          style={styles.showPassword}
        >
          Show
        </Text> */}
      </View>
      {errors && <Text style={[styles.error, { width }]}>{errors}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    padding: WP(1),
    marginVertical: WP(5),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    marginHorizontal: WP(5),
    marginTop: WP(0),
  },
  icon: {
    marginRight: 10,
  },
  error: {
    color: colors.red,
    fontSize: WP(4),
    marginTop: 5,
  },
  countryCode: {
    fontSize: WP(4),
    fontWeight: 'bold',
    color: colors.primaryBlack,
  },
  showPassword: {
    fontSize: WP(4),
    textDecorationLine: 'underline',
  },
  input: {
    flex: 1,
    backgroundColor: colors.white,
    height: WP(10),
    fontSize: WP(4),
  },
});

export default AppTextInputPassWord;

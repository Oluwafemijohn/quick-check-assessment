import React, {ChangeEvent} from 'react';
import {TextInput, StyleSheet, View, ViewStyle, Platform} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import colors from '../../constants/colors';
import SearchIconSvgComponent from '../svg/SearchIconSvgComponent';

interface Props {
  width: number | undefined;
  style?: ViewStyle;
  style2?: ViewStyle;
  placeholder: string;
  onBlur?: (e: any) => void;
  value?: string;
  countryCode?: string;
  keyboardType?: any;
  secureTextEntry?: boolean;
  onChangeText?: (e: string | ChangeEvent<any>) => void;
  onFocus?: () => void;
}

function AppTextInputSearch({
  onBlur,
  placeholder,
  style,
  style2,
  value,
  width,
  keyboardType,
  onChangeText,
  onFocus,
}: Props) {
  return (
    <>
      <View style={[styles.container, {width}, style2]}>
        <SearchIconSvgComponent style={styles.searchIcon} />
        <TextInput
          onBlur={onBlur}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholderTextColor={colors.lightGrey}
          style={[styles.textInput, style]}
          placeholder={placeholder}
          value={value}
          onFocus={onFocus}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: WP(3),
    flexDirection: 'row',
    height: WP(13),
    marginVertical: WP(5),
    alignItems: 'center',
    paddingHorizontal: WP(2),
  },
  searchIcon: {
    width: WP(5),
    height: WP(5),
    marginRight: WP(2),
  },
  textInput: {
    fontSize: WP('3.5%'),
    color: colors.darkCard,
    // placeholderTextColor: colors.darkCard,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    width: '100%',
  },
});

export default AppTextInputSearch;

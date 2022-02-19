import React, {ChangeEvent} from 'react';
import {TextInput, StyleSheet, View, ViewStyle, Text} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';

import colors from '../../constants/colors';
import defaultStyle from '../../constants/defaultStyle';

interface Props {
  width: number | undefined;
  style?: ViewStyle;
  placeholder: string;
  onBlur?: (e: any) => void;
  value?: string;
  keyboardType?: any;
  secureTextEntry?: boolean;
  onChangeText?: (e: string | ChangeEvent<any>) => void;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  numberOfLines?: number;
  multiline?: boolean;
}

function AppTextInputTextArea({
  onBlur,
  placeholder,
  style,
  value,
  width,
  keyboardType,
  onChangeText,
  autoCapitalize,
  numberOfLines = 10,
}: Props) {
  return (
    <>
      <View style={[styles.container, {width}, style]}>
        <TextInput
          onBlur={onBlur}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholderTextColor={colors.lightGrey}
          style={[defaultStyle.text, styles.input]}
          placeholder={placeholder}
          value={value}
          autoCapitalize={autoCapitalize}
          numberOfLines={numberOfLines}
          multiline={true}
          maxLength={3000}
        />
      </View>
      {value?.length !== 0 && (
        <Text style={[styles.numberOfCharacters]}>
          {3000 - (value ? value.length : 0)} characters left
        </Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: WP('2%'),
    flexDirection: 'row',
    padding: WP(1),
    marginTop: WP(5),
    // alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.silver,
  },
  numberOfCharacters: {
    color: colors.lightGrey,
    fontSize: WP(3),
    alignSelf: 'flex-end',
  },
  input: {
    flex: 1,
    backgroundColor: colors.white,
    // height: '100%',
    fontSize: WP(4),
  },
});

export default AppTextInputTextArea;

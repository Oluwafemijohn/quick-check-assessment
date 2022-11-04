import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { heightPercentageToDP as HP, widthPercentageToDP as WP } from 'react-native-responsive-screen';
import common from '../constants/common';


interface Props {
  title: string;
  width: number | string;
  style?: ViewStyle;
  onPress: () => void;
  submitting?: boolean;
  backgroundColor?: string;
  marginTop?: number;
  marginBottom?: number;
  borderColor?: string;
  marginTopVertical?: number;
  textColor?: string;
  fontSize?: number | string;
  paddingVertical?: number;
  paddingHorizontal?: number;
  marginLeft?: number;
  marginRight?: number;
}

export default function AppButton({
  title,
  style,
  width,
  onPress,
  backgroundColor = common.colors.primary,
  marginTop = 4,
  marginBottom = 4,
  borderColor = common.colors.primary,
  marginTopVertical,
  textColor = common.colors.white,
  fontSize = '4.5%',
  paddingHorizontal = (5),
  paddingVertical = (5),
  marginLeft = 0,
  marginRight = 0,
  submitting = false,
}:
  Props) {
  // const backgroundColor2 = submitting ? common.colors.green400 : common.colors.primary;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: WP(width),
          backgroundColor: backgroundColor,
          marginTop: marginTopVertical ? HP(marginTopVertical) : WP(marginTop),
          marginBottom: WP(marginBottom),
          borderColor,
          paddingHorizontal: WP(paddingHorizontal),
          paddingVertical: WP(paddingVertical),
          marginLeft: WP(marginLeft),
          marginRight: WP(marginRight),
        },
        style,
      ]}
      onPress={onPress}>
      <Text style={[{
        color: textColor,
        fontSize: WP(fontSize),
      }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: WP(2),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
  },
});

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import colors from '../../constants/colors';
import common from '../../constants/common';

interface Props {
  title: string;
  width: number | string;
  style?: ViewStyle;
  onPress: () => void;
  submitting?: boolean;
  backgroundColor?: string;
  marginTop?: number;
  borderColor?: string;
}

export default function AppButton({
  title,
  style,
  width,
  onPress,
  backgroundColor = common.colors.paleYellow,
  marginTop = 4,
  borderColor = common.colors.paleYellow,
}: // submitting = false,
Props) {
  // const backgroundColor = submitting ? "grey" : colors.paleYellow;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        {
          width: WP(width),
          backgroundColor,
          marginTop: WP(marginTop),
          borderColor,
        },
      ]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    borderWidth: 1,
  },
  text: {
    color: colors.primaryBlack,
    fontSize: WP('4.5%'),
    // fontWeight: 'bold',
  },
});

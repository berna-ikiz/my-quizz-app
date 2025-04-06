import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
type Props = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  color?: string;
  customButtonStyles?: {};
  customTextStyle?: {};
};

const Button = ({
  title,
  onPress,
  customButtonStyles,
  customTextStyle,
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, customButtonStyles && customButtonStyles]}
      onPress={onPress}
    >
      <Text style={[styles.text, customTextStyle && customTextStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 20,
  },
  text: {
    color: "#F8F8FF",
    fontSize: 16,
    textAlign: "center",
  },
});

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode } from "react";
type Props = {
  title?: string | ReactNode;
  onPress: () => void;
  backgroundColor?: string;
  color?: string;
  customButtonStyles?: {};
  customTextStyle?: {};
  icon?: ReactNode;
  disabled: boolean;
  key?: string;
};

const Button = ({
  title,
  onPress,
  customButtonStyles,
  customTextStyle,
  icon,
  disabled,
  key,
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, customButtonStyles && customButtonStyles]}
      onPress={onPress}
      disabled={disabled}
      key={key}
    >
      <View style={styles.buttonContent}>
        {title && (
          <Text
            style={[styles.text, customTextStyle && customTextStyle]}
            adjustsFontSizeToFit
            numberOfLines={1}
          >
            {title}
          </Text>
        )}
        {icon && <View style={styles.icon}>{icon}</View>}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    borderRadius: 20,
  },
  text: {
    color: "#F8F8FF",
    fontSize: 16,
    textAlign: "center",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  icon: {
    marginRight: 8,
  },
});

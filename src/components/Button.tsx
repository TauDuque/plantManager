import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

import colors from "../styles/colors";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.btn} activeOpacity={0.7} {...rest}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    marginRight: 10,
    height: 56,
    width: 56,
    paddingHorizontal: 10,
    marginBottom: 22,
  },
  btnText: {
    color: colors.white,
    fontSize: 24,
  },
});

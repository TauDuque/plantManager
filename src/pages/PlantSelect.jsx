import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { useNavigation } from "@react-navigation/core";

export function PlantSelect() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

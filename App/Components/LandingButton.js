import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Theme from "../Utils/Theme";

function LandingButton({ onPress, text, marginTop, textStyle }) {
  return (
    <TouchableOpacity
      style={[styles.button, { marginTop: marginTop }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { ...textStyle }]}> {text} </Text>
    </TouchableOpacity>
  );
}

export default LandingButton;
const styles = StyleSheet.create({
  button: {
    height: 56,
    width: "90%",
    borderWidth: 1,
    borderColor: Theme.secondaryColor,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 22,
    lineHeight: 28.6,
    color: Theme.secondaryColor,
    //fontFamily: Theme.fonts.bold,
  },
});

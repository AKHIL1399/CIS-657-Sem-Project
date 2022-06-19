import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Theme from "../Utils/Theme";
function TouchableText({ onPress, text }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default TouchableText;
const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    fontWeight: "400",
    lineHeight: 22.1,
    color: "rgba(151, 151, 151, 1)",
    marginTop: Theme.hp * 0.01,
    alignSelf: "center",
  },
});

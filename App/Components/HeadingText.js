import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import Theme from "../Utils/Theme";

function HeadingText({ text }) {
  return <Text style={styles.text}> {text} </Text>;
}

export default HeadingText;
const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: Theme.hp * 0.02,
    textAlign: "center",
    marginLeft: Theme.wp * 0.03,
    marginRight: Theme.wp * 0.03,
  },
});

import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import Theme from "../Utils/Theme";

function Heading({ text }) {
  return <Text style={styles.text}>{text}</Text>;
}

export default Heading;
const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: Theme.hp * 0.025,
    marginRight:Theme.wp*0.006,
    marginLeft:Theme.wp*0.006,
    textAlign:"center"
  },
});

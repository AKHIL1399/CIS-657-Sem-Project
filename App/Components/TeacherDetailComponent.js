import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Theme from "../Utils/Theme";

function TeacherDetailComponent({ text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export default TeacherDetailComponent;
const styles = StyleSheet.create({
  text: {
    color: Theme.secondaryColor,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    marginTop: Theme.hp * 0.02,
  },
});

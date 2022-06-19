import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Theme from "../Utils/Theme";

function CourseList({ subject, code, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.subject}>{subject}</Text>
      <Text style={styles.code}>{code}</Text>
    </TouchableOpacity>
  );
}

export default CourseList;
const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Theme.secondaryColor,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: Theme.hp * 0.03,
    justifyContent: "space-evenly",
  },
  subject: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    width: "60%",
  },
  code: {
    color: Theme.secondaryColor,
    fontSize: 18,
    fontWeight: "bold",
    width: "30%",
    textAlign: "center",
  },
});

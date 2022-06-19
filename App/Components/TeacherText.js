import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Theme from "../Utils/Theme";
import { Entypo } from "@expo/vector-icons";

function TeacherText({ teacher, onPress }) {
  return (
    <TouchableOpacity style={styles.teacher} onPress={onPress}>
      <Text style={styles.text}>{teacher}</Text>
      <Entypo
        name="eye"
        size={24}
        color={Theme.secondaryColor}
        style={{ marginRight: Theme.wp * 0.01 }}
      />
    </TouchableOpacity>
  );
}

export default TeacherText;
const styles = StyleSheet.create({
  teacher: {
    height: 50,
    width: "70%",
    borderBottomWidth: 1,
    borderBottomColor: Theme.secondaryColor,
    marginTop: Theme.hp * 0.02,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  text: {
    color: Theme.secondaryColor,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: Theme.wp * 0.01,
  },
});

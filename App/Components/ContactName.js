import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Theme from "../Utils/Theme";
import { Ionicons } from "@expo/vector-icons";

function ContactName({ name, code, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.name}>{name}</Text>
      <Ionicons name="chatbubbles" size={24} color={Theme.secondaryColor} />
    </TouchableOpacity>
  );
}

export default ContactName;
const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Theme.secondaryColor,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: Theme.hp * 0.03,
    justifyContent: "space-evenly",
  },
  name: {
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

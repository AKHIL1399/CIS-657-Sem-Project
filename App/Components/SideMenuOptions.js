import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Theme from "../Utils/Theme";
function SideMenuOptions(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={[styles.text, { color: props.color }]}>{props.text}</Text>
      <MaterialIcons name="navigate-next" size={30} color={props.color} />
    </TouchableOpacity>
    
  );
}

export default SideMenuOptions;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    //alignSelf: "center",
    justifyContent: "space-evenly",
    marginTop: Theme.hp * 0.03,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    width: "60%",
  },
});

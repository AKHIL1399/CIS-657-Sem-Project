import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Theme from "../Utils/Theme";

function Icon({ icon, text, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name={icon}
          size={30}
          color={Theme.secondaryColor}
        />
      </View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Icon;
const styles = StyleSheet.create({
  iconContainer: {
    height: 60,
    width: 60,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: Theme.secondaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Theme.secondaryColor,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: Theme.hp * 0.02,
    //textAlign: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

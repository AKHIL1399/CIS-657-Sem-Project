import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

function ProfileText({ name, text, type }) {
  return (
    <View style={styles.container}>
      {type == "one" ? (
        <FontAwesome
          name={name}
          size={30}
          color={Theme.secondaryColor}
          style={styles.icon}
        />
      ) : null}
      {type == "two" ? (
        <MaterialIcons
          name={name}
          size={30}
          color={Theme.secondaryColor}
          style={styles.icon}
        />
      ) : null}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export default ProfileText;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Theme.hp * 0.03,
  },
  icon: {
    marginLeft: Theme.wp * 0.07,
  },
  text: {
    color: Theme.secondaryColor,
    fontSize: 20,
    fontWeight: "500",
    marginLeft: Theme.wp * 0.04,
  },
});

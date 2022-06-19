import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import Theme from "../Utils/Theme";

function GroupList({ name, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={require("../../assets/image.png")} style={styles.image} />
      <Text style={styles.subject}>{name}</Text>
    </TouchableOpacity>
  );
}

export default GroupList;
const styles = StyleSheet.create({
  container: {
    height: 300,
    width: "90%",
    //flexDirection: "row",
    // alignItems: "center",
    borderWidth: 1,
    borderColor: Theme.secondaryColor,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: Theme.hp * 0.03,
    //justifyContent: "space-evenly",
  },
  subject: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: Theme.hp * 0.03,
    //width: "60%",
  },
  image: {
    height: 220,
    width: "100%",
    //resizeMode: "contain",
    alignSelf: "center",
    borderRadius: 10,
  },
});

import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Theme from "../Utils/Theme";
import { useNavigation } from "@react-navigation/native";

function ChatHead({ text }) {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
          style={{ marginLeft: Theme.wp * -0.15 }}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
      <Image source={require("../../assets/image.png")} style={styles.image} />
    </View>
  );
}

export default ChatHead;
const styles = StyleSheet.create({
  container: {
    height: Platform.OS==="android" ?60: 70,
    width: "100%",
    borderBottomColor: Theme.secondaryColor,
    borderBottomWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop:Platform.OS==="android"? Theme.hp*-0.07:0,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: Theme.wp * -0.15,
    borderRadius: 50,
  },
  text: {
    color: Theme.secondaryColor,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: Theme.wp * 0.02,
  },
});

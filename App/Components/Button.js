import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Button({ title, onPress, isSubmitting }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        // Button Linear Gradient
        colors={["rgba(238, 222, 215, 1)", "rgba(175, 133, 255, 1)"]}
        style={styles.button}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        locations={[1, 0]}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default Button;
const styles = StyleSheet.create({
  button: {
    height: 48,
    width: "90%",
    alignSelf: "center",
    //  padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 28.6,
  },
});

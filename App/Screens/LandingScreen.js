import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import Heading from "../Components/Heading.js";
import LandingButton from "../Components/LandingButton";
import Theme from "../Utils/Theme.js";

function LandingScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Heading text={"Welcome to Gvsu Meetup"} />

      <LandingButton
        text={"Register"}
        marginTop={Theme.hp * 0.4}
        onPress={() => props.navigation.navigate("Register")}
      />
      <LandingButton
        text={"Login"}
        marginTop={Theme.hp * 0.05}
        onPress={() => props.navigation.navigate("Login")}
      />
    </SafeAreaView>
  );
}

export default LandingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0F4F",
    paddingTop:Theme.paddingTop
  },
});

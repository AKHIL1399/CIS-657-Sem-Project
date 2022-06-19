import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

function Calender(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Calender Screen</Text>
    </SafeAreaView>
  );
}

export default Calender;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0F4F",
  },
});

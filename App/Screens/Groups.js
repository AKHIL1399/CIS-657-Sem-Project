import React from "react";
import { SafeAreaView, Text, StyleSheet, ScrollView } from "react-native";
import HeadingText from "../Components/HeadingText";
import GroupList from "../Components/GroupList";
function Groups(props) {
  return (
    <SafeAreaView style={styles.container}>
      <HeadingText text={"Hi Johanna..!!! Here are all the group list"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <GroupList name={"Group 1"} />
        <GroupList name={"Group 2"} />
        <GroupList name={"Group 3"} />
        <GroupList name={"Group 4"} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Groups;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0F4F",
  },
});

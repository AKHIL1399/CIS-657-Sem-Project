import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import Theme from "../Utils/Theme";
import HeadingText from "../Components/HeadingText";
import ProfileText from "../Components/ProfileText";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
function Profile(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const user = await AsyncStorage.getItem("@name");
    const email = await AsyncStorage.getItem("@email");
    const num = await AsyncStorage.getItem("@number");
    const role = await AsyncStorage.getItem("@role");
    setName(user);
    setEmail(email);
    setNumber(num);
    setRole(role);
  };
  return (
    <SafeAreaView style={styles.container}>
      <HeadingText
        text={"Hi " + name + "..!!! here is all your profile information"}
      />
      <View style={{ marginTop: Theme.hp * 0.05 }}>
        <ProfileText type="one" name={"user-circle"} text={name} />
        <ProfileText type="one" name={"phone-square"} text={number} />
        <ProfileText type="two" name={"alternate-email"} text={email} />
        <ProfileText type="one" name={"lock"} text={role} />
      </View>
    </SafeAreaView>
  );
}

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0F4F",
  },
});

import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, StyleSheet, FlatList } from "react-native";
import Theme from "../Utils/Theme";
import BackIcon from "../Components/BackIcon";
import HeadingText from "../Components/HeadingText";
import ContactName from "../Components/ContactName";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Database/FirebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Contacts(props) {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const userRef = collection(db, "users");
    const role = await AsyncStorage.getItem("@role");
    const name = await AsyncStorage.getItem("@name");
    setName(name);
    setRole(role);
    if (role == "student") {
      const q = query(userRef, where("role", "==", "professor"));
      const querySnapshot = await getDocs(q);
      var list = [];
      querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data());
        var myobj = {
          id: doc.id,
          email: doc.data().email,
          number: doc.data().number,
          role: doc.data().role,
          username: doc.data().username,
          push_token: doc.data(). push_token
        };
        list.push(myobj);
      });
    } else if (role == "professor") {
      const q = query(userRef, where("role", "==", "student"));
      const querySnapshot = await getDocs(q);
      var list = [];
      querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data());
        var myobj = {
          id: doc.id,
          email: doc.data().email,
          number: doc.data().number,
          role: doc.data().role,
          username: doc.data().username,
          push_token: doc.data(). push_token
        };
        list.push(myobj);
      });
    }
    setData(list);
  };
  return (
    <SafeAreaView style={styles.container}>
      <BackIcon />
      {role == "student" ? (
        <HeadingText
          text={"Hi " + name + "..!! Select proffessor you want to chat"}
        />
      ) : (
        <HeadingText
          text={"Hi " + name + "..!! Select Student you want to chat"}
        />
      )}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ContactName
            name={item.username}
            onPress={() => {
              props.navigation.navigate("Chat", {
                uid: item.id,
                name: item.username,
                token:item.push_token,               
              });
            }}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default Contacts;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primaryColor,
  },
});

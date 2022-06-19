import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Theme from "../Utils/Theme";
import TeacherText from "../Components/TeacherText";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../Database/FirebaseConfig";
import { useNavigation } from "@react-navigation/native";

function TeacherList(props) {
  const navigation = useNavigation();
  const [proData, setProData] = useState([]);
  useEffect(() => {
    getData();
    console.log("calling");
  }, []);

  const getData = async () => {
    const userRef = collection(db, "users");
    const q = query(userRef, where("role", "==", "professor"));
    const querySnapshot = await getDocs(q);
    var list = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
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
    setProData(list);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Teachers</Text>
      <FlatList
        data={proData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TeacherText
            teacher={item.username}
            onPress={() => {
              navigation.navigate("TeacherDetail", {
                uid: item.id,
                name: item.username,
                number:item.number,
                token:item.push_token,  
                email:item.email,
              });
             
            }}
          />
        )}
      />
    </View>
  );
}

export default TeacherList;
const styles = StyleSheet.create({
  container: {
    height: 300,
    width: "80%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Theme.secondaryColor,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: Theme.hp * 0.03,
  },
  header: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: Theme.hp * 0.02,
  },
});

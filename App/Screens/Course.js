import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, FlatList, View } from "react-native";
import HeadingText from "../Components/HeadingText";
import CourseList from "../Components/CourseList";
import TeacherList from "../Components/TeacherList";
import Theme from "../Utils/Theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

const data = [
  {
    id: 1,
    subject: "Subject A",
    code: "101",
  },
  {
    id: 2,
    subject: "Subject B",
    code: "102",
  },
  {
    id: 3,
    subject: "Subject C",
    code: "103",
  },
];
function Course(props) {
  const [click, setClick] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const user = await AsyncStorage.getItem("@name");
    setName(user);
  };
  return (
    <SafeAreaView style={styles.container}>
      <HeadingText
        text={"Hi " + name + "..!!! here is the list of all available subjects"}
      />
      <FlatList
        style={styles.flatList}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <CourseList
              subject={item.subject}
              code={item.code}
              onPress={() => setClick(item.id)}
            />
            {click == item.id ? <TeacherList /> : null}
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default Course;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0F4F",
  },
  flatList: {
    marginTop: Theme.hp * 0.04,
  },
});

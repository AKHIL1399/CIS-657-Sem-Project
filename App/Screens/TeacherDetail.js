import React from "react";
import { SafeAreaView, Text, StyleSheet, View, Image } from "react-native";
import Theme from "../Utils/Theme";
import HeadingText from "../Components/HeadingText";
import TeacherDetailComponent from "../Components/TeacherDetailComponent";
import BackIcon from "../Components/BackIcon";
import Icon from "../Components/Icon";
function TeacherDetail({ navigation, route }) {
  const uname = route.params?.name;
  const Email = route.params?.email;
  const Number = route.params?.number;
  const uid=  route.params?.uid;
  const token= route.params?.token;

  return (
    <SafeAreaView style={styles.container}>
      <BackIcon />
      <HeadingText text={"Here is the detail of " + uname} />
      <View style={styles.textContainer}>
        <Image
          source={require("../../assets/image.png")}
          style={styles.image}
        />
        <TeacherDetailComponent text={uname} />
        <TeacherDetailComponent text={"Qualification: MS IT"} />
        <TeacherDetailComponent text={"Available Time: 12:00 to 04:pm"} />
        <TeacherDetailComponent text={"Email: " + Email} />
        <TeacherDetailComponent text={"Number: " + Number} />
      </View>

      <View style={styles.iconContainer}>
        <Icon icon={"phone-plus"} text={"Call"} />
        <Icon
          icon={"chat"}
          text={"Chat"}
          onPress={() => navigation.navigate("Chat",
          {
            uid: uid,
            name: uname,
            token:token,               
          }       
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default TeacherDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primaryColor,
  },
  textContainer: {
    height: 360,
    width: "85%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Theme.secondaryColor,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: Theme.hp * 0.02,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    //resizeMode: 'center',
    width: 100,
    height: 100,
    alignSelf: "center",
    //marginTop: Theme.hp * 0.02,
    borderRadius: 50,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: Theme.hp * 0.07,
  },
});

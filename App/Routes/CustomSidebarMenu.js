import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Theme from "../Utils/Theme";
import SideMenuOptions from "../Components/SideMenuOptions";
import { MaterialIcons } from "@expo/vector-icons";
import { logout } from "../Service/AuthService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

function CustomSidebarMenu(props) {
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      getData();
    }
  }, [props, isFocused]);
  const getData = async () => {
    const user = await AsyncStorage.getItem("@name");
    const email = await AsyncStorage.getItem("@email");
    const role = await AsyncStorage.getItem("@role");
    setName(user);
    setEmail(email);
    setRole(role);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#AF85FF" }}>
      {/*Top Large Image */}
      <Image
        source={require("../../assets/image.png")}
        style={styles.sideMenuProfileIcon}
      />
      <Text style={styles.userName}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
        <SideMenuOptions
          text={"FirstPage"}
          color={color == "FirstPage" ? Theme.primaryColor : "white"}
          onPress={() => {
            setColor("FirstPage");
            props.navigation.navigate("main");
          }}
        />
        <SideMenuOptions
          text={"Profile"}
          color={color == "Profile" ? Theme.primaryColor : "white"}
          onPress={() => {
            setColor("Profile");
            props.navigation.navigate("UserProfile");
          }}
        />
        {role == "student" ? (
          <SideMenuOptions
            text={"Course"}
            color={color == "Course" ? Theme.primaryColor : "white"}
            onPress={() => {
              setColor("Course");
              props.navigation.navigate("Course");
            }}
          />
        ) : null}
        <SideMenuOptions
          text={"Calendar"}
          color={color == "Calendar" ? Theme.primaryColor : "white"}
          onPress={() => {
            setColor("Calendar");
            props.navigation.navigate("Calender");
          }}
        />
        <SideMenuOptions
          text={"Groups"}
          color={color == "Groups" ? Theme.primaryColor : "white"}
          onPress={() => {
            setColor("Groups");
            props.navigation.navigate("Groups");
          }}
        />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={styles.setting}
        onPress={() => {
          logout();
        }}
      >
        <Text style={[styles.text, { color: "white" }]}> Logout </Text>
        <MaterialIcons name="logout" size={24} color={"white"} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default CustomSidebarMenu;
const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    //resizeMode: 'center',
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: Theme.hp * 0.04,
    borderRadius: 50,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    alignSelf: "center",
    marginTop: Theme.hp * 0.02,
    color: Theme.primaryColor,
    fontWeight: "bold",
    fontSize: 20,
  },
  email: {
    color: "white",
    alignSelf: "center",
    //fontFamily: Theme.simpleFont,
    fontWeight: "600",
    fontSize: 17,
    marginTop: Theme.hp * 0.01,
  },
  setting: {
    flexDirection: "row",
    marginTop: Theme.hp * -0.13,
    alignItems: "center",
    justifyContent: "space-evenly",
    //marginLeft: Theme.wp * 0.08,
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
    width: "40%",
    marginLeft: Theme.wp * 0.03,
  },
});

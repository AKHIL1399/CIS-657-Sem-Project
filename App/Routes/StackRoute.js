import React from "react";

import Main from "../Screens/MainPage";
import CalendarExample from "../Screens/Calender";
import Course from "../Screens/Course";
import Groups from "../Screens/Groups";
import Profile from "../Screens/Profile";
import TeacherDetail from "../Screens/TeacherDetail";
import Chat from "../Screens/Chat";
import Contacts from "../Screens/Contacts";

import CustomSidebarMenu from "./CustomSidebarMenu";
import { View, TouchableOpacity, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import Theme from "../Utils/Theme";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png",
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};
const ChatScreen = () => {
  const navigation = useNavigation();
  const toggleChat = () => {
    //Props to open/close the drawer
    navigation.navigate("Contacts");
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={toggleChat}>
        {/*Donute Button Image */}
        <Entypo
          name="chat"
          size={24}
          color="white"
          style={{ marginRight: Theme.wp * 0.03 }}
        />
      </TouchableOpacity>
    </View>
  );
};
function FirstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="FirstPage"
        component={Main}
        options={{
          title: "Announcements", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerRight: () => <ChatScreen />,
          headerStyle: {
            backgroundColor: "#AF85FF", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            //fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{
          title: "Contacts", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#AF85FF", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            //fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Calender"
        component={CalendarExample}
        options={{
          title: "Calender", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerRight: () => <ChatScreen />,
          headerStyle: {
            backgroundColor: "#AF85FF", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            // fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="UserProfile"
        component={Profile}
        options={{
          title: "UserProfile", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerRight: () => <ChatScreen />,
          headerStyle: {
            backgroundColor: "#AF85FF", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            // fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Course"
        component={Course}
        options={{
          title: "Course", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerRight: () => <ChatScreen />,
          headerStyle: {
            backgroundColor: "#AF85FF", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            //fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Groups"
        component={Groups}
        options={{
          title: "Groups", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerRight: () => <ChatScreen />,
          headerStyle: {
            backgroundColor: "#AF85FF", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            // fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="TeacherDetail"
        component={TeacherDetail}
        options={{
          title: "TeacherDetail", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerRight: () => <ChatScreen />,
          headerStyle: {
            backgroundColor: "#AF85FF", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            // fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          title: "Chat", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),

          headerStyle: {
            backgroundColor: "#AF85FF", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            // fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}
// function secondScreenStack({navigation}) {
//   return (
//     <Stack.Navigator
//       initialRouteName="SecondPage"
//       screenOptions={{
//         headerLeft: () => (
//           <NavigationDrawerStructure navigationProps={navigation} />
//         ),
//         headerStyle: {
//           backgroundColor: '#f4511e', //Set Header color
//         },
//         headerTintColor: '#fff', //Set Header text color
//         headerTitleStyle: {
//           fontWeight: 'bold', //Set Header text style
//         },
//       }}>
//       <Stack.Screen
//         name="SecondPage"
//         component={SecondPage}
//         options={{
//           title: 'Second Page', //Set Header Title
//         }}
//       />
//       <Stack.Screen
//         name="ThirdPage"
//         component={ThirdPage}
//         options={{
//           title: 'Third Page', //Set Header Title
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

function StackRoute(props) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      <Drawer.Screen
        name="main"
        options={{
          drawerLabel: "First page Option",
          headerShown: false,
        }}
        component={FirstScreenStack}
      />
      {/* <Drawer.Screen
          name="SecondPage"
          options={{drawerLabel: 'Second page Option'}}
          component={secondScreenStack}
        /> */}
    </Drawer.Navigator>
  );
}

export default StackRoute;

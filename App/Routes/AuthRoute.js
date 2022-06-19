import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "../Screens/LandingScreen";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import StackRoute from "./StackRoute";

const Stack = createStackNavigator();

function AuthRoute(props) {
  return (
    <Stack.Navigator initialRouteName="LandingScreen">
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Main"
        component={StackRoute}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AuthRoute;

import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, LogBox , View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthRoute from "./App/Routes/AuthRoute";
import StackRoute from "./App/Routes/StackRoute";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./App/Database/FirebaseConfig";

export default function App() {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
  const [user, setUser] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      {user ? <StackRoute /> : <AuthRoute />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

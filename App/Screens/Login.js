import React, { useState } from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Platform,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import Heading from "../Components/Heading";
import InputText from "../Components/InputText";
import Button from "../Components/Button";
import TouchableText from "../Components/TouchableText";
import Theme from "../Utils/Theme";
import { Formik } from "formik";
import { loginValidationSchema } from "../Utils/ValidationSchema";
import { login } from "../Service/AuthService";
import { auth } from "../Database/FirebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

function Login({ navigation }) {
  const forgotPasswordAlert = () =>
    Alert.alert("Forgot Password", "Please enter your email.");

  const passwordResetAlert = () =>
    Alert.alert(
      "Forgot Password",
      "An instruction to reset your password has been sent to your email."
    );

  const errorAlert = (title) => Alert.alert(title, "An error has occured");

  const sendForgotPasswordEmail = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      passwordResetAlert();
    } catch (error) {
      errorAlert("Forgot Password");
      console.log("error", { error });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          <Image
            source={require("../../assets/Login.png")}
            style={styles.image}
          />
          <Heading text="Log in" />
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              login(values);
            }}
            validationSchema={loginValidationSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              errors,
            }) => (
              <>
                <View style={styles.inputContainer}>
                  <InputText
                    placeholder="Email"
                    onChangeText={handleChange("email")}
                    value={values.email}
                    onBlur={handleBlur("email")}
                    error={touched.email && errors.email ? errors.email : null}
                  />
                  <InputText
                    placeholder="Password"
                    onChangeText={handleChange("password")}
                    value={values.password}
                    isPassword
                    onBlur={handleBlur("password")}
                    error={
                      touched.password && errors.password
                        ? errors.password
                        : null
                    }
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    title="Log in"
                    onPress={() => {
                      handleSubmit(values);
                    }}
                  />
                </View>
              </>
            )}
          </Formik>

          <View style={styles.touchableText2}>
            <TouchableText
              text="Not yet registered? Sign up now!"
              onPress={() => navigation.navigate("Register")}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primaryColor,
    paddingTop: Theme.paddingTop,
  },
  inputContainer: {
    marginTop: Theme.hp * 0.01,
  },
  buttonContainer: {
    width: "100%",
    marginTop: Theme.hp * 0.05,
  },
  image: {
    height: Platform.OS === "android" ? Theme.hp * 0.29 : Theme.hp * 0.27,
    width: Platform.OS === "android" ? Theme.wp * 0.69 : Theme.wp * 0.69,
    marginTop: Theme.hp * 0.03,
    alignSelf: "center",
  },
  touchableText: {
    marginTop: Theme.hp * 0.01,
  },
  touchableText2: {
    marginTop: Theme.hp * 0.11,
  },
});

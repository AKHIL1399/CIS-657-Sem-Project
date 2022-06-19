import React, { useState } from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Platform,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Heading from "../Components/Heading";
import InputText from "../Components/InputText";
import Button from "../Components/Button";
import TouchableText from "../Components/TouchableText";
import Theme from "../Utils/Theme";
import { Formik } from "formik";
import { registrationValidationSchema } from "../Utils/ValidationSchema";
import { registerProfessor } from "../Service/AuthService";

function ProfessorRegister({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={require("../../assets/Frame.png")}
            style={styles.image}
          />
          <Heading text="Create an account" />
          <Formik
            initialValues={{
              email: "",
              username: "",
              password: "",
              confirmPassword: "",
              number: "",
            }}
            onSubmit={(values) => {
              registerProfessor(values);
            }}
            validationSchema={registrationValidationSchema}
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
                    placeholder="Username"
                    onChangeText={handleChange("username")}
                    value={values.username}
                    onBlur={handleBlur("username")}
                    error={
                      touched.username && errors.username
                        ? errors.username
                        : null
                    }
                  />
                  <InputText
                    placeholder="Phonenumber"
                    onChangeText={handleChange("number")}
                    value={values.number}
                    onBlur={handleBlur("number")}
                    error={
                      touched.number && errors.number ? errors.number : null
                    }
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

                  <InputText
                    placeholder="Confirm Password"
                    onChangeText={handleChange("confirmPassword")}
                    value={values.confirmPassword}
                    isPassword
                    onBlur={handleBlur("confirmPassword")}
                    error={
                      touched.confirmPassword && errors.confirmPassword
                        ? errors.confirmPassword
                        : null
                    }
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    title="Join"
                    onPress={() => {
                      handleSubmit(values);
                    }}
                  />
                </View>
              </>
            )}
          </Formik>

          <View style={styles.touchableText}>
            <TouchableText
              text="Already have an account? Log in instead"
              onPress={() => navigation.navigate("Login")}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default ProfessorRegister;
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
    marginTop: Theme.hp * 0.03,
  },
  image: {
    height: Platform.OS === "android" ? Theme.hp * 0.3 : Theme.hp * 0.3,
    width: Platform.OS === "android" ? Theme.wp * 0.64 : Theme.wp * 0.7,
    marginTop: Theme.hp * 0.03,
    alignSelf: "center",
  },
  touchableText: {
    marginTop: Theme.hp * 0.01,
    marginBottom: Theme.hp * 0.04,
  },
});

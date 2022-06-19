import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Theme from "../Utils/Theme";

function InputText({ placeholder, error, isPassword, ...other }) {
  const [maskText, setMaskText] = useState(true);

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={Theme.secondaryColor}
          selectionColor={Theme.secondaryColor}
          style={styles.input}
         // autoComplete={false}
          autoCapitalize="none"
          secureTextEntry={isPassword ? maskText : false}
          {...other}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => setMaskText(!maskText)}
            style={styles.eyeIconContainer}
          >
            {/* <View style={{height:48}}> */}
            <MaterialCommunityIcons
              name={!maskText ? "eye-off-outline" : "eye-outline"}
              size={24}
              color={Theme.secondaryColor}
            />
            {/* </View> */}
          </TouchableOpacity>
        )}
      </View>

      {error ? <Text style={styles.errMessage}>{error}</Text> : null}
    </View>
  );
}

export default InputText;
const styles = StyleSheet.create({
  container: {
    height: 48,
    width: "90%",
    borderRadius: 10,
    backgroundColor: "rgba(116, 116, 128, 0.25)",
    fontSize: 17,
    fontWeight: "500",
    //padding: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: Theme.hp * 0.03,
  },
  input: {
    fontSize: 17,
    fontWeight: "500",
    height: 48,
    color: Theme.secondaryColor,
    backgroundColor: "transparent",
    width: "90%",
    textAlign: "center",
  },
  errMessage: { color: "grey", marginTop: 10, marginLeft: "6%" },
  eyeIconContainer: {
    position: "absolute",
    right: "2.5%",
    bottom: 12,
  },
});

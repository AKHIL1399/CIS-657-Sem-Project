import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Theme from "../Utils/Theme";
import { useNavigation } from "@react-navigation/native";

function BackIcon(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons
        name="arrow-back"
        size={24}
        color="white"
        style={{ marginLeft: Theme.wp * 0.03, marginTop: Theme.hp * 0.03 }}
      />
    </TouchableOpacity>
  );
}

export default BackIcon;

import { Dimensions, Platform } from "react-native";

let hp = Dimensions.get("window").height;
let wp = Dimensions.get("window").width;

export default Theme = {
  hp,
  wp,
  paddingTop: Platform.OS === "android" ? 50 : 0,
  primaryColor: "#0C0F4F",
  secondaryColor: "#AF85FF",
  lightColor: "#EEDED7",
  fontColor: "#F3F3F3",
  gray: "#DDDDDD",
  fontSize: Platform.OS === "android" ? 30 : 36,
  fontWeight: "700",
};

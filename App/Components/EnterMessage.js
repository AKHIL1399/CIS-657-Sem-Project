import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import { FontAwesome } from '@expo/vector-icons';
  import Theme from "../Utils/Theme";

function EnterMessage({onPress,onChangeText,value,...children}) {
    return (
        <View style={styles.container}>
    <TextInput
    placeholder="write your message"
    selectionColor={Theme.secondaryColor}
    style={styles.input}
    onChangeText={onChangeText}  
    value={value}  
    {...children}
    />
    <TouchableOpacity onPress={onPress}>
    <FontAwesome name="send-o" size={24} color="white" />
    </TouchableOpacity>
    </View>
    );
}

export default EnterMessage;
const styles = StyleSheet.create({
    container:{
        height:60, 
        width:"100%",
        marginTop:Theme.hp*0.02,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
input:{
    height:50, 
    width:"80%",
    alignItems:"center", 
padding:10, 
fontSize:16,
color:Theme.secondaryColor, 
borderRadius:20,
backgroundColor:"white", 
//marginLeft:Theme.wp*0.01
},

})
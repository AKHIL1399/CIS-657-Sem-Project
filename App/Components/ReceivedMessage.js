import React,{useRef, useEffect, useInsertionEffect} from "react";
import { Text, StyleSheet, View } from "react-native";

function ReceivedMessage({ message, date,messageFrom }) {
//  const scrollRef=useRef();
//  useEffect(()=>{
//    scrollRef.current?.scrollToEnd({behavior:"smooth"})
//  },[message])
  return (
   
     <View>
        {messageFrom=="rcv"?
      <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Text style={styles.textDate}>{date}</Text>
      </View>
      : messageFrom="sent"?
      <View style={styles.sentContainer}
    >
      <Text style={styles.text}>{message}</Text>
      <Text style={styles.textDate2}>{date}</Text>
    </View>
    :null
      }
     </View>
   
  );
}

export default ReceivedMessage;
const styles = StyleSheet.create({
  container: {
    // height: 50,
    width: "75%",
    backgroundColor: Theme.secondaryColor,
    borderRadius: 30,
    marginTop: Theme.hp * 0.03,
    marginLeft: Theme.wp * 0.03,
  },
  text: {
    color: Theme.primaryColor,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: Theme.hp * 0.015,
    marginBottom: Theme.hp * 0.015,
    marginLeft: Theme.wp * 0.03,

    // textAlign: "center",
    // marginLeft: Theme.wp * 0.2,
  },
  textDate:{
    color:"lightgrey",
    marginBottom: Theme.hp * 0.01,
    textAlign:"right",
    marginRight:Theme.wp*0.05
  },
  textDate2:{
    color:"grey",
    marginBottom: Theme.hp * 0.01,
    textAlign:"right",
    marginRight:Theme.wp*0.05

  },
  sentContainer:{
    width: "75%",
    backgroundColor: "lightgrey",
    borderRadius: 30,
    marginTop: Theme.hp * 0.03,
    marginLeft: Theme.wp * 0.2,
    marginRight:Theme.wp*0.01
  }
});

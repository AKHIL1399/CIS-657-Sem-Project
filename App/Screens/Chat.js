import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";
import Theme from "../Utils/Theme";
import ChatHead from "../Components/ChatHead";
import ReceivedMessage from "../Components/ReceivedMessage";
import { auth, db, storage } from "../Database/FirebaseConfig";
import {
  collection,
  query,
  where,
  doc,
  setDoc,
  orderBy,
  serverTimestamp,
  addDoc,
  Timestamp,
  onSnapshot
} from "firebase/firestore";
import EnterMessage from "../Components/EnterMessage";
import moment from "moment";
function Chat({ route }) {
  const receiverUID = route.params?.uid;
  const name = route.params?.name; 
   const token = route.params?.token;
  const [sentMessages, setSentMessages] = useState([]);
  const [rcvMessages, setRcvMessages] = useState([]);
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
 const senderUID=auth.currentUser.uid;
 const scrollViewRef = useRef();
 useEffect(()=>{
getMessages();
 },[])
 const handleSubmit=async ()=>{
  setMessages([])
  if(text=='')
 {
  Alert.alert('enter text')
 }else{
   const id= senderUID>receiverUID?`${senderUID+receiverUID}`:`${receiverUID+senderUID}`;
   await addDoc(collection(db,"messages",id,"chat"),{
     text,
     from:senderUID,
     to:receiverUID,
     createdAt: Timestamp.fromDate(new Date()).toString()
   })
   setText('');
   sendPushNotification(token)
   getMessages();
  //  Alert.alert("message sent Successfully")

  //  await setDoc(doc(db,'lastMessage',id),{
  //   text,
  //   from:senderUID,
  //   to:receiverUID,
  //   createdAt: Timestamp.fromDate(new Date()).toString(),
  //   unread:true
  //  })
 }
 }
 async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'GVSU Meetup',
    body: 'you have received new message from '+ auth.currentUser.email,
    //data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

 const getMessages=async()=>{
  var msg=[];
  setMessages([])
   console.log('sending called')
  const id= senderUID>receiverUID?`${senderUID+receiverUID}`:`${receiverUID+senderUID}`;
  const msgRef=collection(db,"messages",id,"chat");
  const q =query(msgRef, orderBy("createdAt", "asc"))
  onSnapshot(q, querySnapShot=>{
  
    querySnapShot.forEach(doc=>{

      var myObj={
        id:doc.id,
        message:doc.data().text,
        time:doc.data().createdAt,    
        from:doc.data().from,   
      }
      var isExist=false;
      msg.forEach(item=>{
        if(item.id == doc.id){
            isExist= true;
            return
        }
      })
      if(!isExist){

        msg.push(myObj)
      }
     });
   setMessages(msg)
  });
  
 }


  return (
    <SafeAreaView style={styles.container}>
       <KeyboardAvoidingView
        //behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
       
      <ChatHead text={name} />
      <ScrollView
        >
      <ScrollView style={{height:500}}
     ref={scrollViewRef}
     onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
    {messages?
    messages.map((msg,i)=>
    msg.from==senderUID?
    <ReceivedMessage messageFrom="sent" key={i} message={msg.message} date={
      moment(msg.date).format("DD dd MMM YYYY")  
      } />
    :
    <ReceivedMessage messageFrom="rcv" key={i} message={msg.message} date={
    moment(msg.date).format("DD dd MMM YYYY")  
    }/>
    )
  
  :null}
    </ScrollView>
      <EnterMessage
      onChangeText={(text)=>setText(text)}
      value={text}
      onPress={()=>handleSubmit()}
      />
      </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Chat;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primaryColor,
    paddingTop:Theme.paddingTop,
  },
  message: {
    height: 60,
    width: "77%",
    borderWidth: 2,
    borderColor: Theme.secondaryColor,
    borderRadius: 10,
    justifyContent: "center",
  },
  input: {
    fontSize: 17,
    marginLeft: Theme.wp * 0.02,
  },
  writeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Theme.hp * 0.61,
    marginLeft: Theme.wp * 0.02,
    justifyContent: "space-evenly",
  },
});

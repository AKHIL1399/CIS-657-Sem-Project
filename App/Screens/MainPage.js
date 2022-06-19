import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, Text, StyleSheet, Platform } from "react-native";
import Theme from "../Utils/Theme";
import JobComponent from "../Components/JobComponent";
import HeadingText from "../Components/HeadingText";
import * as Device from 'expo-device';
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import * as Notifications from 'expo-notifications';
import { db, auth } from "../Database/FirebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native-gesture-handler";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
function MainPage(props) {
  const [name, setName] = useState("");
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const [data, setData] = useState([]);
  const [proname, setproName] = useState("");
  const [role, setRole] = useState("");
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    getData(); 
    getnotification();
  getProfData()
  }, []);
  const getnotification=async()=>{
    await  registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }
  
  async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
      const id=auth.currentUser.uid
 const collectionref =  doc(db,'users',id);
 await updateDoc(collectionref,{
  push_token:token,
 })
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
  }
  const getData = async () => {
    const userRef = collection(db, "users");
    const q = query(userRef, where("email", "==", auth.currentUser.email));
    let myList = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      AsyncStorage.setItem("@role", doc.data().role);
      AsyncStorage.setItem("@name", doc.data().username);
      AsyncStorage.setItem("@email", doc.data().email);
      AsyncStorage.setItem("@number", doc.data().number);

      setName(doc.data().username);
    });
  };
  const getProfData = async () => {
    const userRef = collection(db, "users");
      const q = query(userRef, where("role", "==", "professor"));
      const querySnapshot = await getDocs(q);
      var list = [];
      querySnapshot.forEach((doc) => {

        //console.log(doc.id, " => ", doc.data());
        var myobj = {
          id: doc.id,
          email: doc.data().email,
          number: doc.data().number,
          role: doc.data().role,
          username: doc.data().username,
          push_token: doc.data(). push_token
        };
        list.push(myobj);
      });
      setData(list);
  };
  return (
    <SafeAreaView style={styles.container}>
      <HeadingText text={"Hi " + name + ", Here are all the latest updates"} />
      <FlatList
      style={{marginBottom:Theme.hp*0.03}}
      data={data}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
       <JobComponent
        tittle={"Typing Job"}
        name={"Incharge: " + item.username}
        onPress={() => props.navigation.navigate("TeacherDetail",{
                uid: item.id,
                name: item.username,
                number:item.number,
                token:item.push_token,  
                email:item.email,
        })}
      />
      )}
      />
      
    </SafeAreaView>
  );
}

export default MainPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primaryColor,
  },
});

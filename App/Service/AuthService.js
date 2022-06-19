import { db, auth } from "../Database/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  deleteUser,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithCredential
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Facebook from 'expo-facebook'


// 
const register = async (data) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const user = userCredentials.user;
    if (user) {
      //delete data.password;
      //delete data.confirmPassword;
      await setDoc(doc(db, "users", user.uid), data);
      const authData = { ...data, id: user.uid };
      await AsyncStorage.setItem("@User", JSON.stringify(authData));
      console.log(authData);
    }
  } catch (error) {
    if (error.message === "Firebase: Error (auth/email-already-in-use).") {
      alert("User with this email already exists.");
    } else {
      alert(error.message);
    }
    console.log("This is the error inside the register service ", error);
  }
};
const login = async (data) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const user = userCredentials.user;
    if (user) {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const authData = { ...docSnap.data(), id: user.uid };
        console.log(authData);
      } else {
        alert("User does not exist.");
        const deletedUser = await deleteUser(user);
      }
    }
  } catch (error) {
    if (error.message === "Firebase: Error (auth/wrong-password).") {
      alert("Password is incorrect.");
    } else if (error.message === "Firebase: Error (auth/user-not-found).") {
      alert("User does not exist!!.");
    } else {
      alert(error.message);
    }
  }
};
const facebookLogin=async()=>{
  try {
   await Facebook.initializeAsync({
      appId: '<App id>',
    });
  
    const { type, token, expirationDate, permissions, declinedPermissions } =
      await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile' ,'email']
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email`);
      const userData=(await response.json())
      //Alert.alert('Logged in!', `Hi ${(await response.json()).email}!`);
      
      const username=userData.name;
      const email=userData.email;
      //console.log(id);
     // console.log(email);
      //const id=userData.id;


      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        "1234567"
      );
      const user = userCredentials.user;

      if (user) {
        await setDoc(doc(db, "users", user.uid),  {
          username:username,
          email:email,
          facebook:true,
          role:"student",
          password:"1234567"
        });
      }
      

    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {

    console.log(`Facebook Login Error: ${message}`);
  
  }


}
const logout = async (setData) => {
  signOut(auth)
    .then(async () => {
      setData({ user: null });
      await AsyncStorage.removeItem("@name");
      await AsyncStorage.removeItem("@email");
      await AsyncStorage.removeItem("@role");
      await AsyncStorage.removeItem("@number");
    })
    .catch((error) => {
      //alert(error.message);
    });
};


  export { register, login, logout,facebookLogin };

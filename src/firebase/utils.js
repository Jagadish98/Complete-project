import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {firebaseConfig} from './config';


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

 export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
 GoogleProvider.setCustomParameters({prompt: 'select_account'});
 
export const signinWithGoogle = () => {
      auth
          .setPersistence(firebase.auth.Auth.Persistence.SESSION)
          .then(() => {
                return auth.signInWithPopup(GoogleProvider);      
          })
          .catch((err)=>{
            console.log(err);
          });
     
 }


export const handleUserProfile = async (user, additionalData) => {
      
      if(!user) return;

    const { uid } = user;
    const userRef = firestore.doc(`/users/${uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists){
          const {displayName, email} = user;
          const timestamp = new Date();
          const userRoles = ['user'];
           try{
              await userRef.set({
                    displayName,
                    email,
                    createdDate: timestamp,
                    userRoles,
                    ...additionalData
              })
           }catch(err){
              console.log(err);
           }
    }

    return userRef;
}
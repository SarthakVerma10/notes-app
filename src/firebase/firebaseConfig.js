import firebase from "firebase";
import 'firebase/auth';
import * as firebaseui from 'firebaseui';


var firebaseConfig = {
    apiKey: "AIzaSyD62al_FgnP0y2GIj3L7Y8qveTUb7rXDxE",
    projectId: "playground-23663",
    appId: "1:122989597131:web:e9ab05671cc90d69bb664e",
    authDomain: "playground-23663.firebaseapp.com",
}

// const uiConfig = {
//     signInSuccessUrl: '/dashboard',
//     signInOptions: [
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID
//     ]
// }

const firebaseInit = firebase.initializeApp(firebaseConfig)
const database = firebase.database();

//const ui = new firebaseui.auth.AuthUI(firebase.auth());

// const startAuthUI = (divID) => {
//     ui.start(divID, uiConfig)
// }

// const userStateChange = (login) => {

//     firebase.auth().onAuthStateChanged((user) => {
//         if (user) {

//           var uid = user.uid;
//           const displayName = user.displayName;
//           console.log('user is logged in with id: ', displayName);
//           login = true;
//           console.log("login 1: ", login);

//         }}) 
// }

export { firebaseInit, database };

// firebase.database().ref('name').on('value', (snapshot) => {
//     console.log(snapshot.val());
// })

//add to database

// firebase.database().ref('note').push().set({
//     noteName: 'second note',
//     noteContent: 'this is the second firebase note' 
// });

//get data from database

// let initialPost = []

// firebase.database().ref('note').on('value', (snapshot) => {
//     console.log("snapshot: ", snapshot);
//     snapshot.forEach((childSnapshot) => {
//         // console.log("Key: ", childSnapshot.key);
//         // console.log("Data: ", childSnapshot.val());
//         initialPost.push({id: childSnapshot.key, ...childSnapshot.val()});    

//     });
//     console.log("Fromm firebase", initialPost);
//   })



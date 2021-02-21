import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { note } from './reducers/store';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { database } from './firebase/firebaseConfig';
import { addToStore } from './actions/addNote';
import firebase from 'firebase';
import auth from './reducers/auth';
import { login } from './actions/auth';
import './styles/styles.scss'


const reducers = combineReducers({note, auth})

const store = createStore(reducers, applyMiddleware(thunk));

// const handleChange = () => console.log(store.getState());

// const unsubscribe = store.subscribe(handleChange);

const initialPost = []

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        const uid = user.uid;
        database.ref(`users/${uid}/notes`).once('value', (snapshot) => {
          snapshot.forEach((childSnapshot) => {
              // console.log("Key: ", childSnapshot.key);
              // console.log("Data: ", childSnapshot.val());
              initialPost.push({id: childSnapshot.key, ...childSnapshot.val()});    
          });
          initialPost.map((every) => store.dispatch(addToStore(every.id, every.noteName, every.noteContent)));
      
        })
        console.log(store.getState());
        const displayName = user.displayName;
        console.log('user is logged in with id: ', displayName);
    } else {
      console.log('Logged out');
    }
      
}) 

// ReactDOM.render(<p>Loading</p>, document.getElementById('root'));

// setTimeout(() => {console.log("World!"); }, 10000);


  ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,document.getElementById('root'))

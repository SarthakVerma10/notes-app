import React from 'react';
import ReactDOM, { render } from 'react-dom';
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
import './styles/styles.scss';

const reducers = combineReducers({note, auth})
const store = createStore(reducers, applyMiddleware(thunk));

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,document.getElementById('root'));
    hasRendered = true;
  }
};

const initialPost = []

const fetchData = (uid) => {
    database.ref(`users/${uid}/notes`).once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        initialPost.push({id: childSnapshot.key, ...childSnapshot.val()});    
    });
    initialPost.map((every) => store.dispatch(addToStore(every.id, every.noteName, every.noteContent)));
    renderApp();
  })

}



firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));
        console.log('Logged in as ', user.displayName);
        store.dispatch(login(user.uid))
        const uid = user.uid;
        fetchData(uid);
    } else {
      renderApp();
      console.log('Logged out');
    }
      
}) 





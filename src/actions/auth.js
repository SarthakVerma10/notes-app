import 'firebase/auth';
import firebase from 'firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logout = () => {
    firebase.auth().signOut();
    return ({type: 'LOGOUT'})
}
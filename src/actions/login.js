import firebase from 'firebase';

const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
          const user = result.user;
          console.log('the user is: ', user);
      })
}

export default login;
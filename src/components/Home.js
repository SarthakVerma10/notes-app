import React from 'react';
import firebase from 'firebase';

class Home extends React.Component  {
  Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({redirect_uri: '/dashboard'})
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
          const user = result.user;
          window.location = "/dashboard";
          console.log('the user is: ', user);
      })
  }

  render() {
    return (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">NOTES</h1>
      <p>Create and Edit Notes</p>
      <button className="button" onClick={this.Login}>Login with Google</button>
    </div>
  </div>
  )
}
}

export default Home;
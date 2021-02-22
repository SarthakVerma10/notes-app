import React from 'react';
import selectAll from '../selector/selectAll';
import { connect } from 'react-redux';
import NoteItem from './NoteItem';
import { logout } from '../actions/auth';
import firebase from 'firebase';
import CreatePage from './CreatePage';
import Header from './Header'

const Dashboard = (props) => {
  const Logout = () => {
    firebase.auth().signOut();
    props.dispatch(logout());
    window.location = "/";
  }

  return (
  <div>
    <Header />
    <div className="content-container">
      <h1>Dashboard</h1>
      <CreatePage />
      <h1 className="list-header">Your Notes</h1>
      <div  className="list-item">
      {props.first.map((loop_note) =><NoteItem key={loop_note.id} noteName={loop_note.noteName} id={loop_note.id}/>)}
      </div>
      
    </div>

  </div>
  )
}

const mapStateToProps = (state) => {
  const first = selectAll(state);
  return {
    first: first[0]
  }
}

export default connect(mapStateToProps)(Dashboard);

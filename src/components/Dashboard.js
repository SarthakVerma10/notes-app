import React from 'react';
import selectAll from '../selector/selectAll';
import { connect } from 'react-redux';
import NoteItem from './NoteItem';

import CreatePage from './CreatePage';
import Header from './Header'

const Dashboard = (props) => {

  return (
  <div>
    <Header />
    <div className="content-container">
      <div id="test-blur">
      <h1>Dashboard</h1>
      <CreatePage />
      </div>
      
      <h1 className="list-header">Your Notes</h1>
      <div className="list-item">
      {props.first.map((loop_note) =><NoteItem key={loop_note.id} 
      noteName={loop_note.noteName} 
      noteContent={loop_note.noteContent} 
      id={loop_note.id}/>)}
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

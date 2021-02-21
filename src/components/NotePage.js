import React from 'react';
import { connect } from 'react-redux';
import selectByNoteName from '../selector/selectByNoteName';
import selectAll from '../selector/selectAll';
import { Link } from 'react-router-dom';

const NotePage = (props) => {
    const noteName = selectByNoteName(props.notes, props.match.params.id);
    console.log(noteName);

    return (
    <div>
    <Link to="/dashboard">Dashboard</Link>
        <h1>{noteName.map((anything) => anything.noteName)}</h1>
        <p>{noteName.map((anything) => anything.noteContent)}</p>
    </div>
    )
}

const mapStateToProps = (state) => {
    const notes = selectAll(state)
    return {
        notes: notes
    }
}

export default connect(mapStateToProps)(NotePage);

//export default NotePage;

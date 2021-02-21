import React from 'react';
import { connect } from 'react-redux';
import addNote from '../actions/addNote';
import { addToStore } from '../actions/addNote';
import { Route, Redirect, Link } from 'react-router-dom';

class CreatePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
            {note: {
                id: '',
                noteName: '',
                noteContent: ''
            }}
    }

    addedDetails = false;

    handleName = (e) => {
        e.preventDefault()
        const name=e.target.elements.name.value.trim();
        const content = e.target.elements.content.value.trim()
        console.log("Entered value: ", name);
        console.log("Entered content: ", content);
        this.props.dispatch(addNote(name, content));
        this.addedDetails = true;
        //window.location = "/dashboard";
        //document.location.href = "/dashboard";
    }

    render () {
        return (
        <div className="content-container">
        <form className="form" onSubmit={this.handleName} autoComplete="off">
            <input 
            className="name-input" 
            type="text" 
            placeholder="Enter Note Name" 
            name="name"></input>
            <textarea className="content-input" 
            placeholder="Add note Content" 
            name="content"></textarea>
            <button className="button">Add Note</button>
        </form>
        </div>
        )
    }
}



export default connect()(CreatePage)
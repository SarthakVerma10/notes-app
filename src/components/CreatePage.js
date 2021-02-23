import React from 'react';
import { connect } from 'react-redux';
import addNote from '../actions/addNote';
import selectByNoteName from '../selector/selectByNoteName';
import selectAll from '../selector/selectAll';

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
        const note = selectByNoteName(this.props.first, name)

        if (name.length === 0) {
            alert('Cannot add note without a name')
        } else if (note.length === 0) {
            e.target.elements.name.value = '';
            e.target.elements.content.value = '';
            this.props.dispatch(addNote(name, content));
            this.addedDetails = true;
        } else if (note.length > 0) {
           if (note[0].noteName) {
            alert('Note with this name already exists')
        } else {
            e.target.elements.name.value = '';
            e.target.elements.content.value = '';
            this.props.dispatch(addNote(name, content));
            this.addedDetails = true;
        }
    }
    }

    render () {
        return (
        <div className="content-container">
        <form className="form" onSubmit={this.handleName} autoComplete="nope">
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

const mapStateToProps = (state) => {
    const first = selectAll(state);
  return {
    first: first[0]
  }
}

export default connect(mapStateToProps)(CreatePage)
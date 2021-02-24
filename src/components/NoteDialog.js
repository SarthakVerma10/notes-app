import React from 'react';
import { connect } from 'react-redux';
import updateNote from '../actions/updateNote';
import removeNote from '../actions/removeNote';

class NoteDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialog: true
        }
    }

    handleClose = (e) => {
        e.preventDefault();
        const x = document.getElementById(this.props.id);
        x.close();
        x.style.display = 'none';
        document.getElementById("test-blur").style.filter = "opacity(100%)";

        const name = e.target.elements.name.value.trim();
        const content = e.target.elements.content.value.trim()

        const updates = {
            noteName: name,
            noteContent: content
        }

        this.props.dispatch(updateNote(this.props.id, updates));
    }

    handleRemove = (e) => {
        e.preventDefault();
        console.log('ID: ', this.props.id);
        this.props.dispatch(removeNote(this.props.id));
        document.getElementById("test-blur").style.filter = "opacity(100%)";
    }   

    render() {
        return (
            <div>
            <div className="dialog__container">
            <dialog className="dialog"  id={this.props.id}>
            
                <form className="dialog-form" onSubmit={this.handleClose}>

                <input type="text" className="Name" name="name" defaultValue={this.props.noteName}></input>
                <textarea className="area" name="content" defaultValue={this.props.noteContent}></textarea>
                <button className="button">Close</button>
                <button className="button" onClick={this.handleRemove}>Remove</button>
                </form>
            </dialog>
            </div>
            </div>
        )
    }
}

export default connect()(NoteDialog)
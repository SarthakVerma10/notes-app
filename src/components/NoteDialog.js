import React from 'react';
import { connect } from 'react-redux';
import updateNote from '../actions/updateNote';

class NoteDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialog: true
        }
    }

    handleClose = (e) => {
        e.preventDefault();
        this.setState({dialog: false})
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

    render() {
        return (
            <div>
            <div className="dialog__container">
            <dialog className="dialog"  id={this.props.id}>
                <form className="dialog-form" onSubmit={this.handleClose}>
                <input type="text" className="Name" name="name" defaultValue={this.props.noteName}></input>
                <textarea className="area" name="content" defaultValue={this.props.noteContent}></textarea>
                <button className="button">Close</button>
                </form>
            </dialog>
            </div>
            </div>
        )
    }
}

export default connect()(NoteDialog)
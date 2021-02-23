import React from 'react';
import { Link } from 'react-router-dom';
import NoteDialog from './NoteDialog';
import Dialog from 'react-dialog';

class NoteItem extends React.Component {
    constructor(props) {
        super(props);
        this.noteName = props.noteName;
        this.noteContent = props.noteContent;
        this.id = props.id;
    }

    openDialog = () => {
        const x = document.getElementById(this.props.id);
        document.getElementById("test-blur").style.filter = "opacity(50%)";
        x.show();   
        // x.style.filter = "opacity(100%)";
        x.style.display = 'flex';
        x.style.flexDirection = 'column';

    }

    render() {
    return (
        <div className="temp_item">
        <button onClick={this.openDialog} className="button button--link">{this.noteName}</button>
        <NoteDialog id={this.id} noteContent={this.noteContent} noteName={this.noteName}></NoteDialog>
        </div>
    )
    }
}

export default NoteItem;
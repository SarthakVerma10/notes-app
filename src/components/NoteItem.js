import React from 'react';
import { Link } from 'react-router-dom';
import NoteDialog from './NoteDialog';
import Dialog from 'react-dialog';

class NoteItem extends React.Component {
    constructor(props) {
        super(props);
        this.noteName = props.noteName;
        this.noteContent = props.noteContent;
    }

    openDialog = () => {
        const x = document.getElementById(this.noteName);
        
        x.show();   
    }

    render() {
    return (
        <div className="temp_item">
        <button onClick={this.openDialog} className="button button--link">{this.noteName}</button>
        <NoteDialog noteContent={this.noteContent} noteName={this.noteName}></NoteDialog>
        </div>
    )
    }
}

export default NoteItem;
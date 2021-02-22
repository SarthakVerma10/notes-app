import React from 'react';

const NoteDialog = (props) => {
    const handleClose = () => {
        const x = document.getElementById(props.noteName);
        x.close();
    }


    return (
        <div>
        <div className="dialog__container">
        <dialog className="dialog" id={props.noteName}>
            <h1>{props.noteName}</h1>
            <p>{props.noteContent}</p>
            <button onClick={handleClose}>close</button>
        </dialog>
        </div>
        </div>
    )
}

export default NoteDialog;
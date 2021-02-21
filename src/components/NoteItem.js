import React from 'react';
import { Link } from 'react-router-dom';

const NoteItem = (props) => {
    const goto = "/note/" + props.noteName;
    return (
        <div>
        <Link className="list-item" to={goto}>{props.noteName}</Link>
        </div>
    )
}

export default NoteItem;
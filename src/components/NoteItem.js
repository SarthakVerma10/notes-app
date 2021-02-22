import React from 'react';
import { Link } from 'react-router-dom';

const NoteItem = (props) => {
    const goto = "/note/" + props.noteName;
    return (
        <div className="temp_item">
        <Link className="each__item" to={goto}>{props.noteName}</Link>
        </div>
    )
}

export default NoteItem;
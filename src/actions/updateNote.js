import { database } from '../firebase/firebaseConfig';

const editNote = (id, updates) => ({
    type: 'EDIT_NOTE',
    id, 
    updates
})

const updateNote = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/notes/${id}`).update(updates).then(() => {
            dispatch(editNote(id, updates));
          });
    }
}

export default updateNote;
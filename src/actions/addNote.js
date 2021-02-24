import { database } from '../firebase/firebaseConfig';

const addNote = (noteName, noteContent) => {
    const note = {
        type: 'ADD_NOTE',
        note: {
        id: '',
        noteName: noteName,
        noteContent: noteContent
      }
  };

    const addthisToFirebase = {
      noteName: noteName,
      noteContent: noteContent
    }

    const addToFirebase = (uid) => {
       const data = database.ref(`users/${uid}/notes`).push(addthisToFirebase);
       console.log('adding to firebase with :', uid);
       return data
    }

    note.note.id = addToFirebase().key ;
    // const t = addToFirebase().ref;

      return (dispatch, getState) => {
        const uid = getState().auth.uid;
        console.log(uid);
        console.log('is tihs working?');
        addToFirebase(uid).then(
          dispatch(note)
        )
      }
};



const addToStore = (id, noteName, noteContent) => ({
    type: 'READ_NOTE',
    note: {
      id: id,
      noteName: noteName,
      noteContent: noteContent
    }
})


export { addToStore }

export default addNote;

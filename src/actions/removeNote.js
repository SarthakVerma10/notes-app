import { database } from '../firebase/firebaseConfig';

const removethisNote = ({ id } = {}) => ({
    type: 'REMOVE_NOTE',
    id
  });
  
  const removeNote = (id) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/notes/${id}`).remove().then(() => {
        dispatch(removethisNote({ id }));
      });
    };
  };

  export default removeNote;
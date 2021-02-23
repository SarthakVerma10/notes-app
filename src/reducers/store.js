
const initialState = []

const note = (state = initialState, action) => {
  if (action.type === 'ADD_NOTE') {
    return  [...state, action.note];
  }

  else if (action.type === 'READ_NOTE') {
    return [...state, action.note]
  }

  if (action.type === 'EDIT_NOTE') {
    return state.map((note) => {
      if (note.id === action.id) {
        return {
          ...note,
          ...action.updates
        };
      } else {
        return note;
      }
    })
  }

  else {
    return state
  }
}


export { note };

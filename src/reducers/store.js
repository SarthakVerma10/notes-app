
const initialState = []

const note = (state = initialState, action) => {
  if (action.type === 'ADD_NOTE') {
    return  [...state, action.note];
  }

  else if (action.type === 'READ_NOTE') {
    return [...state, action.note]
  }

  else {
    return state
  }
}


export { note };

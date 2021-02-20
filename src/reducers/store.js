import { createStore } from 'redux';

const initialState = {notetext:'Empty Note'};

const note = (state = initialState, action) => {
  if (action.type === 'ADD_NOTE') {
    return {...state, noteName: state.noteName}
  } else {
    return state
  }
}

export { note };

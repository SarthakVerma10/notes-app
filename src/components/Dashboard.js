import React from 'react';
import { note } from '../reducers/store';
import { createStore } from 'redux';

const store = createStore(note);

console.log(store.getState());

export default () => {
  return (
  <div>
    <h1>This is the DASHBOARD</h1>
  </div>
  )
}

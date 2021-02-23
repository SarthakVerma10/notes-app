const selectByNoteName = (state, NoteName) => state.filter((note) => note.noteName.toLowerCase() === NoteName.toLowerCase())

export default selectByNoteName;

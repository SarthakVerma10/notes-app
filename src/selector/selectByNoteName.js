const selectByNoteName = (state, NoteName) => state[0].filter((note) => note.noteName.toLowerCase() === NoteName.toLowerCase())

export default selectByNoteName;

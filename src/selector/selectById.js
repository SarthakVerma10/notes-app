const selectById = (state, id) => state.filter((anything) => anything.id === id);

export default selectById;
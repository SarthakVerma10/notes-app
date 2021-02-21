// const selectAll = state => state.filter((note) => note.id)

const selectAll = (state) => {
    const x = []
    for (const key of Object.keys(state)) {
        //console.log(key, state[key]);
        x.push(state[key])
    }

    return x;
}

export default selectAll;

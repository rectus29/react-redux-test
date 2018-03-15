function reducer(state, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case "REMOVE_ITEM":
            const index = newState.items.indexOf(action.item);
            if (index !== -1) {
                newState.items.splice(index, 1);
            }
            break;
        default:
            return state;
    }
    return newState;
}
module.exports = reducer;
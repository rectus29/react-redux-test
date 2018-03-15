function deleteItem(dispatch, item) {
    dispatch({
        type: "REMOVE_ITEM",
        item: item
    });
}

//ref here the actions to export
module.exports = {
    deleteItem: deleteItem
};

// record id of currently selected library
// first run state would be undefined which is not not allowed as a result
export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            // return the result from the last run
            return state;
    }
};
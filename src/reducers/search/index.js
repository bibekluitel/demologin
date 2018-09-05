const search = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_SEARCH_RESULT':
            return {
                ...action.payload
            };
        default:
            return state;
    }

}
export default search;
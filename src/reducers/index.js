const user = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return action.payload;
        case 'USER_LOGOUT':
            return {};
        case 'UPDATE_SEARCH_RESULT':
            return {
                ...state,
                searchResult: action.payload
            };
        default:
            return state;
    }
};

export default user;
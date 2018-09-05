import * as actionTypes from './../constants/actionConstants';

export const login = (payload) => ({
    type: actionTypes.USER_LOGIN,
    payload
});

export const logout = () => ({
    type: actionTypes.USER_LOGOUT
});

export const makeGetRequest = (url) => {
    return fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
        }
    }).then((response) => {
        return response.json();
    });
}

const logUserIn = (userDetail, payload, dispatch) => {
    if (userDetail && payload && (userDetail.name.toLowerCase() === payload.userName.toLowerCase()) && (userDetail.birth_year.toLowerCase() === payload.password.toLowerCase())) {
        console.log('logedIn');
        dispatch(login(userDetail));
    }
}

export const loginThunk = (payload) => (dispatch) => {
    makeGetRequest('https://swapi.co/api/people/?name="' + payload.userName + '"').then((response) => {
        const userDetail = response.results.find((people) => people.name === payload.userName);
        logUserIn(userDetail, payload, dispatch);
    });
}
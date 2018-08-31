import { makeGetRequest } from './login';


export const updateSearchresults = (payload) => ({
    type: 'UPDATE_SEARCH_RESULT',
    payload
});



export const searchItemTunk = (payload) => (dispatch) => {
    makeGetRequest('https://swapi.co/api/planets/?name="' + payload.searchText + '"').then((response) => {
        console.log(response);
        dispatch(updateSearchresults(response.results));
    });
};
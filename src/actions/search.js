import { makeGetRequest } from './login';
import * as actionTypes from './../constants/actionConstants';

export const updateSearchresults = (payload) => ({
    type: actionTypes.UPDATE_SEARCH_RESULT,
    payload
});

const findmatchingResults = (results, searchText) => results.filter((resultItem) => {
    const searcgREgex = new RegExp(searchText, 'gi');
    return searcgREgex.test(resultItem.name);
});

export const searchItemTunk = (payload) => (dispatch) => {
    return makeGetRequest('https://swapi.co/api/planets/?name="' + payload.searchText + '"').then((response) => {
        const sortResults = findmatchingResults(response.results, payload.searchText);
        dispatch(updateSearchresults({
            currentPageResults: sortResults,
            searchResults: response.results
        }));
    });
};
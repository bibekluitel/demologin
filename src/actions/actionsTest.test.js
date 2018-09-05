import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { login, logout } from './login';
import { updateSearchresults, searchItemTunk } from './search';
import * as actionTypes from './../constants/actionConstants';
import userReducer from './../reducers/user';
import searchReducer from './../reducers/search';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('testing actions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    });


    const store = mockStore({ todos: [] })

    it('user login action', () => {
        const user = {
            name: "bibek luitel",
            birth: '14mmY'
        };
        const expectedAction = {
            type: actionTypes.USER_LOGIN,
            payload: user
        };

        expect(login(user)).toEqual(expectedAction);
    });

    it('user logout action', () => {
        const expectedAction = {
            type: actionTypes.USER_LOGOUT,
        };

        expect(logout()).toEqual(expectedAction);
    });

    it('upadte search results', () => {
        const search = {
            currentPageResults: {},
            searchResults: {}
        };
        const expectedAction = {
            type: actionTypes.UPDATE_SEARCH_RESULT,
            payload: search
        };
        expect(updateSearchresults(search)).toEqual(expectedAction);
    });

    it('upadte store after login', () => {
        fetchMock
            .getOnce('https://swapi.co/api/planets/?name=%22a%22', {
                body: {
                    results: [{
                        name: "Alderaan",
                    }]
                }, headers: { 'content-type': 'application/json' }
            })

        const store = mockStore({ user: {}, search: {} })
        const expectedActions = [{
            type: actionTypes.UPDATE_SEARCH_RESULT,
            payload: {
                currentPageResults: [{
                    name: "Alderaan",
                }],
                searchResults: [{
                    name: "Alderaan",
                }]
            }
        }]

        return store.dispatch(searchItemTunk({ searchText: 'a' })).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })

    });


    it('should return  user inital State', () => {
        expect(userReducer(undefined, {})).toEqual({});
    });

    it('should return  search inital State', () => {
        expect(searchReducer(undefined, {})).toEqual({});
    });

    it('should handle Uer login', () => {
        expect(
            userReducer({}, {
                type: actionTypes.USER_LOGIN,
                payload: {
                    name: 'bibek luitel'
                }
            })
        ).toEqual(
            {
                name: 'bibek luitel'
            }
        );
    });

    it('should handle Uer Logout', () => {
        expect(
            userReducer({}, {
                type: actionTypes.USER_LOGOUT,
            })
        ).toEqual({});
    });

})



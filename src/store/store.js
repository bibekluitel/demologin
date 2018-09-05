import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import BaseReducer from '../reducers';
import throttle from 'lodash/throttle';


// export default createStore(
//     BaseReducer,
//     applyMiddleware(thunk.withExtraArgument())
// );


const loadState = () => {
    try {
        const serializedState = localStorage.getItem('user');
        if (serializedState === null) {
            return undefined;
        }
        const state = {
            user: JSON.parse(serializedState),
            search: {}
        }
        return state;
    } catch (err) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state.user);
        localStorage.setItem('user', serializedState);
    } catch (err) {
        // Ignore write errors.
    }
};

const store = createStore(
    BaseReducer,
    loadState(),
    applyMiddleware(thunk.withExtraArgument())
);

store.subscribe(throttle(() => {
    saveState(store.getState())
}));

export default store;
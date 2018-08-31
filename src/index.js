import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './route/router';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('root'));
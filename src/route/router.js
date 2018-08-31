import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import LoginPageContainer from './../containers/LoginPageContainer';

const LoadableComponent = Loadable({
    loader: () => import('./../containers/SearchContainer'),
    loading() {
        return <div>Loading...</div>;
    }
});

class AppRouter extends Component {
    render() {
        return (
            <Router >
                <Switch>
                    <Route path='/search' component={LoadableComponent} />
                    <Route exact path='/' component={LoginPageContainer} />
                </Switch>
            </Router>
        );
    }
}


export default AppRouter;

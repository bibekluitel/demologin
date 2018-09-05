import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as searchActions from './../actions/search';
import * as loginActions from './../actions/login';
import SearchComponent from '../components/search';

class SearchContainer extends Component {


    render() {
        const { user, search } = this.props;
        if (!user.name) {
            return <Redirect to="/" />
        }

        const getListofPlanets = search.currentPageResults ? search.currentPageResults.map(planet => planet.name) : null;

        return <SearchComponent {...this.props} planetList={getListofPlanets} />;
    }
}

SearchContainer.propTypes = {
    user: PropTypes.object
};

SearchContainer.defaultProps = {
    user: undefined
};

const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps, { ...searchActions, ...loginActions })(SearchContainer);
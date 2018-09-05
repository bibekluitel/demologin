
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginComponent from '../components/login';

import * as loginActions from './../actions/login';

class LoginPageContainer extends Component {
    render() {
        const { user } = this.props;
        if (user.name) {
            return <Redirect to="/search" />
        }
        return <LoginComponent  {...this.props} />;
    }
}

LoginPageContainer.propTypes = {
    user: PropTypes.object
};

LoginPageContainer.defaultProps = {
    user: undefined
};

const mapStateToProps = (state) => {
    console.log(state);

    return { user: state.user };
};
export default connect(mapStateToProps, { ...loginActions })(LoginPageContainer);
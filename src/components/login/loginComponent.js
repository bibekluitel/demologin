import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './loginComponent.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
// import Input from '@material-ui/core/Input';


class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }

    vaildateUsername(userName) {
        return !!userName.length;
    }

    validatePassword(passowrd) {
        return !!passowrd.length
    }

    onUsernamechange = () => {
        const userName = this.userName.value;
        this.setState({ userName: userName });

    }

    onPasswordChange = () => {
        const password = this.password.value;
        this.setState({ password: password });
    }

    login = () => {
        console.log(this.state);

        if (this.vaildateUsername(this.state.userName) && this.validatePassword(this.state.password)) {
            this.props.loginThunk(this.state);
        }
    }


    render() {
        return <div className='login-container'>
            <Paper className='form-holder' >
                <div className='username'>
                    <label > User Name </label>
                    <input
                        type="text" name="name"
                        onChange={this.onUsernamechange}
                        value={this.state.userName}
                        ref={(userName) => this.userName = userName}
                        className='usernameinput'
                    />
                </div>


                <div className='password'>
                    <label>
                        Password
                    </label>

                    <input
                        type="text" name="passowrd"
                        onChange={this.onPasswordChange}
                        value={this.state.password}
                        ref={(password) => this.password = password}

                    />
                </div>
                <div className='button-container'>
                    <Button variant="contained" color="primary" onClick={this.login}>
                        Login
                    </Button>
                </div>
            </Paper>
        </div>;
    }

}

LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;
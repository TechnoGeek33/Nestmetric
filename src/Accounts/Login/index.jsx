import React, { Component } from 'react';
import LoginUi from './components/Login';


class Login extends Component {

    render() {

        return (
            <div className="unauth">
            <LoginUi/>
            </div>
        )
    }
}

export default Login;
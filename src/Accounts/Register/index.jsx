import React, { Component } from 'react';
import RegisterUi from './components/Register';


class Login extends Component {

    render() {

        return (
            <div className="unauth">
            <RegisterUi/>
            </div>
        )
    }
}

export default Login;
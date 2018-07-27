import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Error404 from '../404'


class Accounts extends Component {

    render() {
       
        switch (this.props.match.params.childRoute) {
            case 'login':
                return <Login />;
            case 'register':
                return <Register />;

            default:
       

                return <Error404 />;
        }
    }
}

export default withRouter(Accounts);
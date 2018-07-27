import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import { inject, observer } from 'mobx-react';


class Main extends Component {

    render() {

        return (
           <Dashboard store={this.props}/>
        )
    }
}

export default inject('store')(observer(Main));
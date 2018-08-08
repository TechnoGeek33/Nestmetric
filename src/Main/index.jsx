import React, { Component, Fragment } from 'react';
import Dashboard from './components/Dashboard';
import { inject, observer } from 'mobx-react';
import Header from './components/Header';


class Main extends Component {

    componentWillMount () {
       
      this.props.store.getAllModules()
    }

    render() {

        return (
            <Fragment>
            <Header/>
           <Dashboard store={this.props}/>
           </Fragment>
        )
    }
}

export default inject('store')(observer(Main));
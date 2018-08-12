import React, { Component, Fragment } from 'react';
import Dashboard from './components/Dashboard';
import SinglePredict from './components/SinglePredict';
import MultiplePredict from './components/MultiplePredict';
import { inject, observer } from 'mobx-react';
import Header from './components/Header';
import {withRouter} from 'react-router-dom'

class Main extends Component {

    componentWillMount () {
      this.props.store.getAllModules()
    }

    renderSwitch () {
        switch (this.props.match.params.childRoute) {
            case 'dashboard': 
            return <Dashboard/>

            case  'single-predict':
            return <SinglePredict/>

            case 'multiple-predict': 
            return <MultiplePredict/>
        }
    }

    render() {
        return (
            <Fragment>
            <Header/>
            {this.renderSwitch()}
           </Fragment>
        )
    }
}

export default withRouter(inject('store')(observer(Main)));
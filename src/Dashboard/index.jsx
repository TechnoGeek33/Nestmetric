import React, { Component, Fragment } from 'react';
import Dashboard from './components/Main/Dashboard';
import Prediction from './components/Predictions/Prediction';
import { inject, observer } from 'mobx-react';
import Header from './components/Header';
import { withRouter } from 'react-router-dom'


let Module = {}
class Main extends Component {

    // state = {
    //     Module : {}
    // }

    componentWillMount() { 
        this.props.store.getAllModules()
      
        
        
       
    }

    renderSwitch() {

        console.log(this.props.history)
        switch (this.props.location.pathname) {
            case '/main/dashboard':
            
                return <Dashboard />

            case '/main/predictions/multiple-predict':
                return <Prediction />

            case '/main/predictions/single-predict':
                return <Prediction />
        }
    }

    render() {
        Module = this.props.store.AllModules.find( ( d ) => {return d._id === new URLSearchParams(this.props.location.search).get('id')})
        console.log(Module)

        return (
            <Fragment>
                <Header />
                {this.renderSwitch()}
            </Fragment>
        )
    }
}

export default withRouter(inject('store')(observer(Main)));
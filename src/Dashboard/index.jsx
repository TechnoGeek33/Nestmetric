import React, { Component, Fragment } from 'react';
import Dashboard from './components/Main/Dashboard';
import Prediction from './components/Predictions/Prediction';
import Account from './components/MyAccount/Account';
import { inject, observer } from 'mobx-react';
import Header from './components/Header';
import { withRouter } from 'react-router-dom'


let Module = {}
class Main extends Component {

    componentWillMount() {
        this.props.store.getAllModules();
        this.props.store.SelectedModule = this.props.store.AllModules.find((d) => { return d._id === new URLSearchParams(this.props.location.search).get('id') })
           
    }

    renderSwitch() {
     
            
        

        switch (this.props.location.pathname) {

            case '/main/dashboard':
                return <Dashboard />

            case `/main/predictions/${this.props.match.params.childRoute}`:
                return <Prediction />

            case `/main/my-account/${this.props.match.params.childRoute}`:
                return <Account />

        }
    }

    render() {
        return (
            <Fragment>
                <Header />
                {this.renderSwitch()}
            </Fragment>
        )
    }
}

export default withRouter(inject('store')(observer(Main)));
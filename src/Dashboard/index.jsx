import React, { Component, Fragment } from 'react';
import Dashboard from './components/Main';
import Prediction from './components/Predictions';
import Account from './components/MyAccount';
import { inject, observer } from 'mobx-react';
import Header from './components/Header';
import { withRouter } from 'react-router-dom';


let Model = {}
class Main extends Component {

    componentWillMount() {
        this.props.store.getAllModules();
        
           
    }

    renderSwitch() {
     
            
        

        switch (this.props.location.pathname) {

            case '/main/dashboard':
                return <Dashboard />

            case `/main/predictions/${this.props.match.params.childRoute}`:
                return <Prediction Model={Model} />

            case `/main/my-account/${this.props.match.params.childRoute}`:
                return <Account Model={Model} />
            
            default : 
                  window.location.href="/main/dashboard"
                

        }
    }

    render() {
        Model = this.props.store.AllModules.find((d) => { return d._id === new URLSearchParams(this.props.location.search).get('id') })
  
        return (
            <Fragment>
                <Header Model={Model}/>
                {this.renderSwitch()}
            </Fragment>
        )
    }
}

export default withRouter(inject('store')(observer(Main)));
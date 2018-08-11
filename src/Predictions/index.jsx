import React, {Component ,Fragment} from 'react';
import Header from './components/Header';
import {withRouter} from 'react-router-dom'
import SinglePredict from './components/SinglePredict';
import MultiplePredict from './components/MultiplePredict';


class Predictions extends Component {

    renderSwitch () {

        switch (this.props.match.params.childRoute) {
            case  'single-predict':

            return <SinglePredict/>

            case 'multiple-predict': 

            return <MultiplePredict/>
        }
    }

    render () {

        return (
        
            <Fragment>
                <Header/>
                {this.renderSwitch()}
            </Fragment>
        )
    }
}
export default withRouter(Predictions)

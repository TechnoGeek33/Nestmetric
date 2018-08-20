import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import MultiplePredict from './components/MultiplePredict';
import SinglePredict from './components/SinglePredict';
import { inject, observer } from 'mobx-react';

class Prediction extends Component {

    handleTabs(tabPath, id) {
        this.props.history.push({
            pathname: `/main/predictions/${tabPath}`,
            search : `id=${this.props.Model._id}`
        })
        document.querySelector('.active').className = ""

        document.getElementById(id).className = "active"

    }
    componentDidMount() {

        if (this.props.location.pathname === '/main/predictions/multiple-predict') {
            document.getElementById("multiple").className = "active";
        }
        else {
            document.getElementById("single").className = "active";
        }
        
    }

    renderSwitch() {
        switch (this.props.location.pathname) {

            case '/main/predictions/multiple-predict':
                return <MultiplePredict />

            case '/main/predictions/single-predict':
                return <SinglePredict Model={this.props.Model}/>
            default:
                return <SinglePredict />
        }
    }

    render() {

        return (
            <div className="container container-body container-body-extractor">
                <div className="container-wrapper">
                    <div className="panel panel-default panel-content-wrapper panel-main panel-public">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-2">
                                    <div className="menu-nav-stacked">
                                        <ul className="nav nav-pills nav-stacked-module" >
                                            <li onClick={() => this.handleTabs('single-predict', 'single')} id="single" className="">
                                                <a >
                                                    <span className="typcn margin-right-5 typcn-input-checked" ></span>
                                                    <span >Single Predict</span>
                                                </a>
                                            </li>
                                            <li onClick={() => this.handleTabs('multiple-predict', 'multiple')} id="multiple" className="">
                                                <a >
                                                    <span className="typcn margin-right-5 typcn-document" ></span>
                                                    <span >Batch</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div 
                                // className="col-md-10"
                                >
                                {this.renderSwitch()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(inject('store')(observer(Prediction)))
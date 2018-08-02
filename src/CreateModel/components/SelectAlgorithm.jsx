import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { inject, observer } from 'mobx-react';

class SelectAlgorithm extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
}

componentWillMount() {
  // To keep track of ProgressBar
  this.store.pageCount = 6;
}

    render() {
     
        return (
            <div >
            <h5 className="wizard-category-subtitle">Setup</h5>
            <h1 className="wizard-category-title">
              Select Algorithm
            </h1>
            <h5 className="wizard-subtitle">Select an algorithm to build your model  </h5>
          
            <div className="tabs">
              <span className="tab selected">Sources</span>
    
            </div>
            <div className ="container">
            <div className="row module-type data-source" style={{width: "785px"}} >
              <div className="col-md-3 col-sm-3 col-xs-3 ">
                <div 
                onClick={() => {this.props.history.push({pathname: '/main/module-create/wizard/name-your-module/'})}}
                
                className="panel panel-default">
                  <div className="panel-body">
                    <div className="triangle-topleft">
                      <span className="typcn typcn-tick"></span>
                    </div>
                    <div className="image excel" data-bind="css: source"></div>
                    <h3 data-bind="text: name"> Logistic Regression</h3>
                  </div>
                </div>
              </div>
            
              <div className="col-md-3 col-sm-3 col-xs-3">
                <div
                onClick={() => {this.props.history.push({pathname: '/main/module-create/wizard/name-your-module/'})}}
                className="panel panel-default">
                  <div className="panel-body" data-bind="click: $parent.clickOption.bind($component, source)">
                    <div className="triangle-topleft">
                      <span className="typcn typcn-tick"></span>
                    </div>
                    <div className="image csv" data-bind="css: source"></div>
                    <h3 data-bind="text: name">SVM</h3>
                  </div>
                </div>
              </div>    

              <div className="col-md-3 col-sm-3 col-xs-3">
                <div
                onClick={() => {this.props.history.push({pathname: '/main/module-create/wizard/name-your-module/'})}}
                className="panel panel-default">
                  <div className="panel-body" data-bind="click: $parent.clickOption.bind($component, source)">
                    <div className="triangle-topleft">
                      <span className="typcn typcn-tick"></span>
                    </div>
                    <div className="image csv" data-bind="css: source"></div>
                    <h3 data-bind="text: name">Random Forest</h3>
                  </div>
                </div>
              </div> 

              <div className="col-md-3 col-sm-3 col-xs-3">
                <div
                onClick={() => {this.props.history.push({pathname: '/main/module-create/wizard/name-your-module/'})}}
                className="panel panel-default">
                  <div className="panel-body" data-bind="click: $parent.clickOption.bind($component, source)">
                    <div className="triangle-topleft">
                      <span className="typcn typcn-tick"></span>
                    </div>
                    <div className="image csv" data-bind="css: source"></div>
                    <h3 data-bind="text: name">Neural Network</h3>
                  </div>
                </div>
              </div> 
            </div>
            </div>
            <p class="text-center margin-top-40">
    or <a data-bind="click: function(){dataSource('tagged')}">Learn more about algorithm</a>
  </p>
          </div>
        )
    }
}

export default  withRouter(inject('store')(observer(SelectAlgorithm)))
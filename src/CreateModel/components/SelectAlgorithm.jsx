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

OnAlgoSelect(idPanel , idTri , idTick){

  for(var i = 0 ; i < Object.keys(document.getElementsByClassName('panel-body')).length ; ++i){
  
    document.getElementsByClassName('panel-body')[i].style.background= "#f3f3f3"
  }

  document.getElementById(idPanel).style.backgroundColor ="#fff";
  
  document.getElementById(idPanel).className= "panel-body panel-active"
  document.getElementById(idTri).className= "panel-triangle-active"

  document.getElementById(idTick).className= "typcn typcn-tick panel-tick-active"

  


  // document.getElementById(id).style.backgroundColor=" #f1f1f1";
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

              <div 
              // style={{ pointerEvents : "none"}} 
              className="col-md-3 col-sm-3 col-xs-3 ">
                <div 
                onClick={() => {this.OnAlgoSelect("lr-panel", "lr-triangle" , "lr-tick")}}
                className="panel panel-default">
                  <div id="lr-panel" className="panel-body">
                    <div id="lr-triangle" className="triangle-topleft">
                      <span id="lr-tick" className="typcn typcn-tick"></span>
                    </div>
                    <div className="image excel" ></div>
                    <h3 >Logistic Regression</h3>
                  </div>
                </div>
              </div>
            
              <div className="col-md-3 col-sm-3 col-xs-3">
                <div
                 onClick={() => {this.OnAlgoSelect("svm-panel", "svm-triangle" , "svm-tick")}}
                className="panel panel-default">
                  <div id="svm-panel" className="panel-body"  >
                    <div id="svm-triangle" className="triangle-topleft">
                      <span id="svm-tick" className="typcn typcn-tick"></span>
                    </div>
                    <div className="image csv"   ></div>
                    <h3  >SVM</h3>
                  </div>
                </div>
              </div>    

              <div className="col-md-3 col-sm-3 col-xs-3">
                <div
                onClick={() => {this.OnAlgoSelect("rf-panel", "rf-triangle" , "rf-tick")}}
                className="panel panel-default">
                  <div id="rf-panel" className="panel-body" >
                    <div id="rf-triangle" className="triangle-topleft">
                      <span id="rf-tick" className="typcn typcn-tick"></span>
                    </div>
                    <div className="image csv" ></div>
                    <h3  >Random Forest</h3>
                  </div>
                </div>
              </div> 

              <div className="col-md-3 col-sm-3 col-xs-3">
                <div
                 onClick={() => {this.OnAlgoSelect("nn-panel", "nn-triangle" , "nn-tick")}}
                className="panel panel-default">
                  <div id="nn-panel" className="panel-body">
                    <div id="nn-triangle" className="triangle-topleft">
                      <span id="nn-tick" className="typcn typcn-tick"></span>
                    </div>
                    <div className="image csv"></div>
                    <h3 >Neural Network</h3>
                  </div>
                </div>
              </div> 

            </div>
            </div>
            <div className="text-center margin-top-20">
          <button type="button"  onClick={() => { this.OnContinue() }} className="btn btn-primary continue" disabled="disabled">Continue</button>
        </div>
            <p class="text-center margin-top-40">
    or <a data-bind="click: function(){dataSource('tagged')}">Learn more about algorithm</a>
  </p>
          </div>
        )
    }
}

// this.props.history.push({pathname: '/main/module-create/wizard/name-your-module/'})

export default  withRouter(inject('store')(observer(SelectAlgorithm)))
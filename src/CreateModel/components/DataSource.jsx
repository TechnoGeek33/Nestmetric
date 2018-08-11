import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { inject, observer } from 'mobx-react';

class DataSource extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
}

componentWillMount() {
  // To keep track of ProgressBar
  this.store.pageCount = 2;
}

    render() {
     
        return (
            <div data-bind="component: wizard.getCurrentComponent()">
            <h5 className="wizard-category-subtitle">Setup</h5>
            <h1 className="wizard-category-title">
              Import your text data
            </h1>
            <h5 className="wizard-subtitle">Upload a CSV or Excel file with your data. </h5>
          
            <div className="tabs">
              <span className="tab selected" data-bind="css: {'selected': tabSelected() === 'popular'},
                                           click: function(){tabSelected('popular')}">Sources</span>
           
            </div>
          
            <div className="row module-type data-source" data-bind="foreach: options, visible: tabSelected() === 'popular'">
              <div className="col-md-6">
                <div 
                onClick={() => {this.props.history.push({pathname: '/main/module-create/wizard/choose-file/'})}}
                
                className="panel panel-default">
                  <div className="panel-body" data-bind="click: $parent.clickOption.bind($component, source)">
                    <div className="triangle-topleft">
                      <span className="typcn typcn-tick"></span>
                    </div>
                    <div className="image excel" data-bind="css: source"></div>
                    <h3 data-bind="text: name">Excel File</h3>
                  </div>
                </div>
              </div>
            
              <div className="col-md-6">
                <div
                onClick={() => {this.props.history.push({pathname: '/main/module-create/wizard/choose-file/'})}}
                
                className="panel panel-default">
                  <div className="panel-body" data-bind="click: $parent.clickOption.bind($component, source)">
                    <div className="triangle-topleft">
                      <span className="typcn typcn-tick"></span>
                    </div>
                    <div className="image csv" data-bind="css: source"></div>
                    <h3 data-bind="text: name">CSV</h3>
                  </div>
                </div>
              </div>    
            </div>
          </div>
        )
    }
}

export default  withRouter(inject('store')(observer(DataSource)))
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'



class DataSource extends Component {

    render() {
        return (
            <div data-bind="component: wizard.getCurrentComponent()">
            <h5 class="wizard-category-subtitle">Setup</h5>
            <h1 class="wizard-category-title">
              Import your text data
            </h1>
            <h5 class="wizard-subtitle">Upload a CSV or Excel file with your data. </h5>
          
            <div class="tabs">
              <span class="tab selected" data-bind="css: {'selected': tabSelected() === 'popular'},
                                           click: function(){tabSelected('popular')}">Sources</span>
           
            </div>
          
            <div class="row module-type data-source" data-bind="foreach: options, visible: tabSelected() === 'popular'">
              <div class="col-md-3">
                <div 
                onClick={() => {this.props.history.push({pathname: '/main/module-create/wizard/choose-file/'})}}
                
                class="panel panel-default">
                  <div class="panel-body" data-bind="click: $parent.clickOption.bind($component, source)">
                    <div class="triangle-topleft">
                      <span class="typcn typcn-tick"></span>
                    </div>
                    <div class="image excel" data-bind="css: source"></div>
                    <h3 data-bind="text: name">Excel File</h3>
                  </div>
                </div>
              </div>
            
              <div class="col-md-3">
                <div
                onClick={() => {this.props.history.push({pathname: '/main/module-create/wizard/choose-file/'})}}
                
                class="panel panel-default">
                  <div class="panel-body" data-bind="click: $parent.clickOption.bind($component, source)">
                    <div class="triangle-topleft">
                      <span class="typcn typcn-tick"></span>
                    </div>
                    <div class="image csv" data-bind="css: source"></div>
                    <h3 data-bind="text: name">CSV</h3>
                  </div>
                </div>
              </div>    
            </div>
          </div>
        )
    }
}

export default withRouter( DataSource);
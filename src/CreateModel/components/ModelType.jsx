import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'


class ModelType extends Component {

    render() {
        return (
            <div>
            <h5 class="wizard-category-subtitle">New Model</h5>
            <h1 class="wizard-category-title">
              Create a Model
            </h1>
            <div class="row module-type">
              <div class="col-md-12">
                <div class="panel panel-default">
                  <div class="panel-body" onClick={()=> {
                        this.props.history.push({pathname : '/main/module-create/wizard/data-source/'})
                      }}>
                    <div class="triangle-topleft">
                      <span class="typcn typcn-tick"></span>
                    </div>
                    <div class="cell-avatar topic" data-bind="css: 'topic'">
                    </div>
                    <h1>Classifier</h1>
                    <p>Classify churn , purchase or credit score.</p>
                    <div class="text-center">
                      <button type="button" class="btn btn-primary"
                     
                      >Create Classifier</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-center margin-top-40">or <a href="/main/explore/">Explore our Model Library</a></p>
          </div>
        )
    }
}

export default withRouter(ModelType);
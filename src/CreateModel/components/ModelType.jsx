import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

class ModelType extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  componentWillMount() {
    // To keep track of ProgressBar
    this.store.pageCount = 1;
  }

  render() {
    return (
      <div>
        <h5 className="wizard-category-subtitle">New Model</h5>
        <h1 className="wizard-category-title">
          Create a Model
            </h1>
        <div className="row module-type">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-body" onClick={() => {
                this.props.history.push({ pathname: '/main/module-create/wizard/data-source/' })
              }}>
                <div className="triangle-topleft">
                  <span className="typcn typcn-tick"></span>
                </div>
                <div className="cell-avatar topic" data-bind="css: 'topic'">
                </div>
                <h1>Classifier</h1>
                <p>Classify churn , purchase or credit score.</p>
                <div className="text-center">
                  <button type="button" className="btn btn-primary"

                  >Create Classifier</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center margin-top-40">or <a onClick={() => {
          this.props.history.push({ pathname: "/main/dashboard" })
        }} >Explore our Model Library</a></p>
      </div>
    )
  }
}

export default withRouter(inject('store')(observer(ModelType)))
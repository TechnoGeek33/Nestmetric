import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

class SelectFeatures extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
}
  componentWillMount() {
    // To keep track of ProgressBar
    this.store.pageCount = 5;
  }
  render() {

    return (
      <div data-bind="component: wizard.getCurrentComponent()">
        <h5 className="wizard-category-subtitle">Features</h5>
        <h1 className="wizard-category-title">
          Select Features
            </h1>
      
        <div className="text-center margin-top-20">
          <button type="button" className="btn btn-primary continue" disabled="disabled">Continue</button>
        </div>

      </div>
    )
  }
}

export default  withRouter(inject('store')(observer(SelectFeatures)))
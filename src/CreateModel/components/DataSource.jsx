import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
      <div>
        <h5 className="wizard-category-subtitle">Setup</h5>
        <h1 className="wizard-category-title">
          Import your text data
            </h1>
        <h5 className="wizard-subtitle">Upload a CSV or Excel file with your data. </h5>

        <div className="tabs">
          <span className="tab selected">Sources</span>

        </div>

        <div className="row module-type data-source" >
          <div className="col-md-6">
            <div
              onClick={() => { this.props.history.push({ pathname: '/main/module-create/wizard/choose-file/' }) }}

              className="panel panel-default">
              <div className="panel-body" >
                <div className="triangle-topleft">
                  <span className="typcn typcn-tick"></span>
                </div>
                <div className="image excel" ></div>
                <h3 >Excel File</h3>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div
              onClick={() => { this.props.history.push({ pathname: '/main/module-create/wizard/choose-file/' }) }}

              className="panel panel-default">
              <div className="panel-body" >
                <div className="triangle-topleft">
                  <span className="typcn typcn-tick"></span>
                </div>
                <div className="image csv" ></div>
                <h3 >CSV</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(inject('store')(observer(DataSource)))
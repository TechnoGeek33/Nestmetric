import React, { Component } from 'react';
import ModelType from './components/ModelType'
import Datasource from './components/DataSource'
import ChooseFile from './components/ChooseFile'
import Preview from './components/Preview'
import SelectFeatures from './components/SelectFeatures'
import SelectAlgorithm from './components/SelectAlgorithm'
import { increaseProgressBar } from '../Service'
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

class CreateModel extends Component {

  renderSwitch() {
    switch (this.props.match.params.childRoute) {
      case 'choose-module-type':
        return <ModelType/>;
      case 'data-source':
        return <Datasource/>;
      case 'choose-file':
        return <ChooseFile/>;
      case 'preview':
        return <Preview/>;
      case 'features':
        return <SelectFeatures/>;
        case 'select-algorithm':
        return <SelectAlgorithm/>;
      default:
        return <ModelType />
    }
  }

  render() {

    return (
      <div className="current-view-module-create">
        <div className="container container-body">
          <div className="container-wrapper">
            <div className="main-content" data-bind="if: dataReady">
              <div className="tail-spinner" data-bind="visible: loading" style={{ display: "none" }}></div>

            </div>
          </div>
        </div>
        <div className="container-body module-create-flatten">
          <div className="container-wrapper">
            <div className="progress progress-global">
              <div className="progress-bar" role="progressbar" style={{ width: increaseProgressBar(8, this.props.store.pageCount) }}>
                <span className="sr-only"></span>
              </div>
            </div>
            <div className="navigation-bar">
              <span onClick={() => {
                this.props.history.goBack()
              }} className="typcn typcn-arrow-left clickable"
              // style={{ display: "none" }}
              ></span>
              <span onClick={() => {
                this.props.history.push({ pathname: "/main/dashboard" })
              }} className="typcn typcn-times clickable"></span>
            </div>
            {this.renderSwitch()}
          </div>
        </div>
      </div>

    )
  }
}

export default withRouter(inject('store')(observer(CreateModel)))


import React, { Component } from 'react';
import ModuleType from './components/ModuleType'
import Datasource from './components/DataSource'
import ChooseFile from './components/ChooseFile'
import Preview from './components/Preview'
import SelectFeatures from './components/SelectFeatures'
import SelectAlgorithm from './components/SelectAlgorithm'
import NameYourModule from './components/NameYourModule'
import Congrats from './components/Congrats'
import { increaseProgressBar } from '../Service'
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

class CreateModel extends Component {

  state ={
    flag : true
  }
  CloseBtnCheck = () => {
    if (this.props.match.params.childRoute === "name-your-module") {
      document.getElementById("delete-project").style.display = "block"
      document.getElementById("delete-project").className = "modal fade in"
      document.getElementById("overlay").className = "modal-backdrop fade in"
    }
    else {
      this.props.history.push({ pathname: "/main/dashboard" })
    }

  }

  onClocse =() => {
    document.getElementById("delete-project").style.display = "none"
    document.getElementById("delete-project").className = "modal fade"
    document.getElementById("overlay").className = "fade in"
  }

  handleStop = () => {
    this.props.history.push({ pathname: "/main/dashboard" })
  }

  renderSwitch() {
    switch (this.props.match.params.childRoute) {
      case 'choose-module-type':
        return <ModuleType />;
      case 'data-source':
        return <Datasource />;
      case 'choose-file':
        return <ChooseFile />;
      case 'preview':
        return <Preview />;
      case 'features':
        return <SelectFeatures />;
      case 'select-algorithm':
        return <SelectAlgorithm />;
      case 'name-your-module':
        return <NameYourModule />;
        case 'congrats':
        return <Congrats />;
      default:
        return <ModuleType />
    }
  }

  render() {

    return (
      <div className="current-view-module-create">
      {!this.state.flag ?  <div className="container container-body">
          <div className="container-wrapper">
            <div className="main-content">
              <div className="tail-spinner" style={{ display: "block" }}></div>

            </div>
          </div>
        </div> : <div className="container-body module-create-flatten">
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
              <span onClick={this.CloseBtnCheck} className="typcn typcn-times clickable"></span>
            </div>
            {this.renderSwitch()}
          </div>
        </div> }
       
        

        {/* Error Dialog for hititng cross button */}
        <div>
          <div className="modal fade"  id="delete-project" style={{ display: "none", paddingLeft: "0px" }}>
            <div className="modal-dialog" style={{ left: "0" }}>
              <form id="delete-project-form">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" onClick={this.onClocse} className="close">×</button>
                    <h4 className="modal-title" id="myModalLabel" data-bind="text: modal_title">Stop Creation Wizard</h4>
                  </div>

                  <div className="modal-body">
                    <div className="alert alert-danger">
                      <strong>Warning:</strong>
                      <span >This will delete all your progress with this model.</span>
                    </div>

                    <p >Are you sure you want to stop the creation wizard?</p>
                  </div>

                  <div className="modal-footer">
                    <button type="button" onClick={this.onClocse} className="btn btn-default" data-dismiss="modal">Cancel</button>
                    <button type="submit" onClick={ this.handleStop} className="btn btn-danger">Stop Creation Wizard</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div id="overlay" class="fade in"></div>
        </div>
        {/* Ends */}

      </div>

    )
  }
}

export default withRouter(inject('store')(observer(CreateModel)))
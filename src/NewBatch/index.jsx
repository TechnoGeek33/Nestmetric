import React, { Component } from 'react';

import ChooseFile from './components/ChooseFile'
import Preview from './components/Preview'
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

class NewBatch extends Component {

  state ={
    flag : true
  }
  CloseBtnCheck = () => {
   
 
      this.props.history.push(
        { 
        pathname: "/main/predictions/multiple-predict",   
        search : `id=${this.props.location.state.id}`
       }
      )
      
      }


  onClose =() => {
    document.getElementById("delete-project").style.display = "none"
    document.getElementById("delete-project").className = "modal fade"
    document.getElementById("overlay").className = "fade in"
  }

  handleStop = () => {
    this.props.history.push({ pathname: "/main/predictions/multiple-predict" })
  }

  renderSwitch() {
    switch (this.props.match.params.childRoute) {
    
      case 'choose-file':
        return <ChooseFile />;
      case 'preview':
        return <Preview />;
   
      default:
        window.location.href = "/main/module-batch/wizard/choose-file"
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
            <div className="navigation-bar">

             {this.props.match.params.childRoute === 'choose-file' ? null : <span onClick={() => {
                this.props.history.goBack()
              }} className="typcn typcn-arrow-left clickable"
             
              ></span> } 
              <span onClick={this.CloseBtnCheck} className="typcn typcn-times clickable"></span>
            </div>
            {this.renderSwitch()}
          </div>
        </div> }
       

      </div>

    )
  }
}

export default withRouter(inject('store')(observer(NewBatch)))
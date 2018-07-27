import React, { Component } from 'react';
import ModelType from './components/ModelType'
import Datasource from './components/DataSource'
import ChooseFile from './components/ChooseFile'
import Preview from './components/Preview'
import { inject, observer } from 'mobx-react';

class CreateModel extends Component {

  renderSwitch() {
    switch(this.props.match.params.childRoute) {
      case 'choose-module-type':
        return <ModelType/>;
        case 'data-source':
        return <Datasource/>;
        case 'choose-file':
        return <ChooseFile store={this.props.store}/>;
        case 'preview':
        return <Preview store={this.props.store}/>;
        default : 
        return <ModelType/>
    }
  }

  render() {

    return (
      <div class="container container-body module-create-flatten">
        <div class="container-wrapper">
          <div class="progress progress-global">
            <div class="progress-bar" style={{ width: "10%" }}>
              <span class="sr-only"></span>
            </div>
          </div>
          <div class="navigation-bar">
            <span class="typcn typcn-arrow-left clickable" style={{ display: "none" }}></span>
            <span class="typcn typcn-times clickable"></span>
          </div>
        {this.renderSwitch()}

         
        </div>
      </div>
    )
  }
}

export default inject('store')(observer(CreateModel));

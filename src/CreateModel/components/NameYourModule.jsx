
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react';


class NameYourModule extends Component {

  render() {

    return (
      <div data-bind="component: wizard.getCurrentComponent()">
        <h5 className="wizard-category-subtitle">New Model</h5>
        <h1 className="wizard-category-title">
          Name your model
      </h1>
        <div className="module-name">
          <input type="text" id="module-name" className="form-control" placeholder="Type something…" data-bind="textInput: moduleName, event: {keypress: onEnter}" />
        </div>
        <div className="text-center margin-top-70">
          <button type="button" className="btn btn-primary continue" data-bind="enable: moduleName().length, click: finish" disabled="">Finish</button>
        </div>
      </div>
    )
  }
}

export default withRouter(inject('store')(observer(NameYourModule)));
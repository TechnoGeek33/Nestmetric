
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react';


class NameYourModel extends Component {

  render() {

    return (

      <div data-bind="component: wizard.getCurrentComponent()">
        <h5 class="wizard-category-subtitle">New Model</h5>
        <h1 class="wizard-category-title">
          Name your model
      </h1>
        <div class="module-name">
          <input type="text" id="module-name" class="form-control" placeholder="Type something…" data-bind="textInput: moduleName, event: {keypress: onEnter}" />
        </div>
        <div class="text-center margin-top-70">
          <button type="button" class="btn btn-primary continue" data-bind="enable: moduleName().length, click: finish" disabled="">Finish</button>
        </div>
      </div>
    )
  }
}

export default withRouter(inject('store')(observer(Preview)));
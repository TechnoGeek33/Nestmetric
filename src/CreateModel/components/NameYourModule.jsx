
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react';


class NameYourModule extends Component {
  store = this.props.store;
  state = {
    disabled: "disabled"
  }

  componentWillMount() {
    // To keep track of ProgressBar
    this.store.pageCount = 7;
  }

  inputChange(e) {
    if (e.target.value.length > 0) {
      this.setState({
        disabled: null
      })

      this.props.store.ModelData.ModuleName = e.target.value
    }
    else {
      this.setState({
        disabled: "disabled"
      })
    }
  }

  handleFinish = () => {
    this.props.store.createModule().then((responce) => {
      console.log(responce.data)
      this.props.store.ModelData = responce.data
      this.props.history.push({ pathname: '/main/module-create/wizard/congrats/' })
    }).catch((err) => {
      console.log(err)
    })

  }
  render() {

    return (
      <div data-bind="component: wizard.getCurrentComponent()">
        <h5 className="wizard-category-subtitle">New Model</h5>
        <h1 className="wizard-category-title">
          Name your model
      </h1>
        <div className="module-name">
          <input onChange={(e) => this.inputChange(e)} type="text" id="module-name" className="form-control" placeholder="Type something…" data-bind="textInput: moduleName, event: {keypress: onEnter}" />
        </div>
        <div className="text-center margin-top-70">
          <button type="button"
            className="btn btn-primary continue"
            onClick={this.handleFinish}
            disabled={this.state.disabled}>Finish</button>
        </div>
      </div>
    )
  }
}

export default withRouter(inject('store')(observer(NameYourModule)));
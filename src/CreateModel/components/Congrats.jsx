
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react';


class Congrats extends Component {
  store = this.props.store;

  componentWillMount() {
    // To keep track of ProgressBar
    this.store.pageCount = 8;
  }


  render() {

    return (
      <div>
        <h5 class="wizard-category-subtitle">Setup</h5>
        <h1 class="wizard-category-title">
          Congratulations!
        </h1>
        <h5 class="wizard-subtitle">
          You have trained your model for the first time! You can test it out right away or
          keep training it in order to build accuracy up.
        </h5>
        <div class="panel panel-default congrats">
          <div class="panel-body">
            <div class="cell-avatar topic" title="">
            </div>
            <h3 >{this.props.store.ModelData.ModuleName}</h3>
            <p class="description" ></p>
          </div>
        </div>
        <div class="text-center margin-top-70">
          <button type="button" class="btn btn-default continue margin-right-20" disabled >Keep Training It</button>

          <button type="button" class="btn btn-primary continue"
            onClick={() => { this.props.history.push({ pathname: '/main/dashboard' }) }} >Test It</button>
        </div>
      </div>
    )
  }
}

export default withRouter(inject('store')(observer(Congrats)));
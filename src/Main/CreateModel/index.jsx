import React, { Component } from 'react';
import ModelType from './components/ModelType'

import { Route} from 'react-router-dom';

class CreateModel extends Component {

    render() {

        return (
            <div class="container container-body module-create-flatten">
            <div class="container-wrapper">
              <div class="progress progress-global">
                <div class="progress-bar"  style={{width: "10%"}}>
                  <span class="sr-only"></span>
                </div>
              </div>
              <div class="navigation-bar">
                <span class="typcn typcn-arrow-left clickable"  style={{display: "none"}}></span>
                <span class="typcn typcn-times clickable"></span>
              </div>
              <Route exact path="/main/module-create/wizard/choose-module-type/" render={(props) => { return <div>Home</div> }} />
              <Route exact path="/model-type" render={(props) => { return <ModelType  {...props} /> }} />


           
            </div>
          </div>
        )
    }
}

export default CreateModel;
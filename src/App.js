import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { inject, observer } from 'mobx-react';
import Accounts from './Accounts';
import Dashboard from './Dashboard';
import CreateModel from './CreateModel';
import Error404 from './404'


import Sample from './sample'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" render={() => { return <Redirect to="/accounts/login" /> }} />
              <Route exact path="/accounts/:childRoute" render={(props) => { return <Accounts  {...props} /> }} />
              <Route exact path="/main/dashboard" render={(props) => { return <Dashboard  {...props} /> }} />
              <Route exact path="/main" render={() => { return <Redirect to="/main/dashboard" /> }} />
              <Route exact path="/main/module-create/wizard/:childRoute" render={(props) => { return <CreateModel  {...props} /> }} />
              <Route exact path="/sample" render={(props) => { return <Sample  {...props} /> }} />
              <Route render={() => { return <Error404 /> }} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default inject('store')(observer(App))

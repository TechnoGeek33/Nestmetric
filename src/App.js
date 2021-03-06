import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { inject, observer } from 'mobx-react';
import Accounts from './Accounts';
import Dashboard from './Dashboard';
import CreateModel from './CreateModel';
import NewBatch from './NewBatch'
import Error404 from './404'
import UpgradeYourPlan from './commons/components/UpgradeYourPlan'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <UpgradeYourPlan/>
            <Switch>
              <Route exact path="/main/predictions" render={() => { return <Redirect to="/main/predictions/single-predict" /> }} />

              <Route exact path="/" render={() => { return <Redirect to="/accounts/login" /> }} />
              <Route exact path="/accounts/:childRoute" render={(props) => { return <Accounts  {...props} /> }} />

              <Route exact path="/main" render={() => { return <Redirect to="/main/dashboard" /> }} />
              <Route exact path="/main/:childRoute" render={(props) => { return <Dashboard  {...props} /> }} />

              <Route exact path="/main/predictions/:childRoute" render={(props) => { return <Dashboard  {...props} /> }} />

              <Route exact path="/main/my-account/:childRoute" render={(props) => { return <Dashboard {...props} /> }} />

              <Route exact path="/main/module-create/wizard/:childRoute" render={(props) => { return <CreateModel  {...props} /> }} />
              <Route exact path="/main/module-batch/wizard/:childRoute" render={(props) => { return <NewBatch  {...props} /> }} />
              

              <Route render={() => { return <Error404 /> }} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default inject('store')(observer(App))

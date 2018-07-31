import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { inject, observer } from 'mobx-react';
import Accounts from './Accounts';
import Main from './Main';
import Test from './sample';
import CreateModel from './CreateModel';
import Error404 from './404' 


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/accounts/:childRoute" render={(props) => { return <Accounts  {...props} /> }} />
              <Route exact path="/main/:childRoute" render={(props) => { return <Main  {...props} /> }} />
              <Route exact path="/main/module-create/wizard/:childRoute" render={(props) => { return <CreateModel  {...props} /> }} />
              <Route exact path="/test" render={(props) => { return <Test  {...props} /> }} />
              <Route exact path="/" render={() => { return <Redirect to="/accounts/login" /> }} />
              <Route render={() => { return <Error404/> }} />

            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default  inject('store')(observer(App))

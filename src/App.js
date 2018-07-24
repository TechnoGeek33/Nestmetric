import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { inject, observer } from 'mobx-react';
import Login from './Accounts/Login';
import Register from './Accounts/Register';
import Test from './sample';
import Explore from './Main/Explore';
import Dashboard from './Main/Dashboard';



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/accounts/login" render={(props) => { return <Login  {...props} /> }} />
              <Route exact path="/accounts/register" render={(props) => { return <Register  {...props} /> }} />
              <Route exact path="/main/explore" render={(props) => { return <Explore  {...props} /> }} />
              <Route exact path="/main/dashboard" render={(props) => { return <Dashboard  {...props} /> }} />
              <Route exact path="/test" render={(props) => { return <Test  {...props} /> }} />
              <Route exact path="/" render={() => { return <Redirect to="/accounts/login" /> }} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default  inject('store')(observer(App))
// compose(
//   observer,
//   inject('store')
// )(App);

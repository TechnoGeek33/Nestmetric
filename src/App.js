import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Login from './Accounts/Login';
import Register from './Accounts/Register';
import Test from './sample'
import Explorer from './Main/Explorer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>

          <div>

            <Switch>

              <Route exact path="/accounts/login" render={(props) => { return <Login  {...props} /> }} />
              <Route exact path="/accounts/register" render={(props) => { return <Register  {...props} /> }} />
              <Route exact path="/main/explorer" render={(props) => { return <Explorer  {...props} /> }} />

              <Route exact path="/test" render={(props) => { return <Test  {...props} /> }} />


              <Route exact path="/" render={(props) => { return <Redirect to="/accounts/login"/> }} />

            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;

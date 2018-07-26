import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Error404 extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-default">
          <div class="container" >
            <div class="navbar-header" style={{ height: "54px" }}>
              <a class="navbar-brand" onClick={() => {
                this.props.history.push({ pathname: "/accounts/login" })
              }}></a>
            </div>

          </div>
        </nav>
        <div class="container" style={{ marginTop: "60px" }}>
          <div class="row">
            <div class="jumbotron center">
              <h1 style={{ fontSize: "24px", marginBottom: "5px" }}>Oops, page not found <span style={{ color: "#E96666" }}>Error 404</span></h1>
              <br />
              <p>Our developer have been notified.</p>
            </div>
          </div>
        </div>

      </div>



    )
  }
}

export default  withRouter(Error404);

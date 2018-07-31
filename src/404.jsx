import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Error404 extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container" >
            <div className="navbar-header" style={{ height: "54px" }}>
              <a className="navbar-brand" onClick={() => {
                this.props.history.push({ pathname: "/accounts/login" })
              }}></a>
            </div>

          </div>
        </nav>
        <div className="container" style={{ marginTop: "60px" }}>
          <div className="row">
            <div className="jumbotron center">
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

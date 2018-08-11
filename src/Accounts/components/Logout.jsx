import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

class Logout extends Component {

  handelInput(event, state) {
    this.store[state] = event.target.value
}

    render() {
        return (
            <div className="unauth">
            <div className="page-wrapper">
            <a href="/" className="brand"> </a>
        
            <div className="minipanel">
              
          <h1>Good bye!</h1>
          <p className="page-footer">You've been successfully logged out.</p>
        
            </div>
        
            
          <p className="page-footer">
            Back to <a href="/accounts/login/">login</a>
          </p>
        
          </div>
          </div>
        
        )
    }
}

export default withRouter(Logout);
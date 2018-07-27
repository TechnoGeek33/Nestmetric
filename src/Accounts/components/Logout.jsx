import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

class Logout extends Component {

  handelInput(event, state) {
    this.store[state] = event.target.value
}

    render() {
        return (
            <div className="unauth">
            <div class="page-wrapper">
            <a href="/" class="brand"></a>
        
            <div class="minipanel">
              
          <h1>Good bye!</h1>
          <p class="page-footer">You've been successfully logged out.</p>
        
            </div>
        
            
          <p class="page-footer">
            Back to <a href="/accounts/login/">login</a>
          </p>
        
          </div>
          </div>
        
        )
    }
}

export default withRouter(Logout);
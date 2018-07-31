import React, { Component } from 'react';



class Login extends Component {

    render() {

        return (
      
           <navbar params="user: user,
                          showShortcutsTrigger: showShortcutsTrigger">
<div className="container container-body module-create-flatten">
    <div className="container-wrapper">
      <div className="progress progress-global">
        <div className="progress-bar" role="progressbar" data-bind="style: {width: (currentStep() * 100 / 10) + '%'}" style={{width: "10%"}}>
          <span className="sr-only"></span>
        </div>
      </div>
      <div className="navigation-bar">
        <span className="typcn typcn-arrow-left clickable"  style={{display: "none"}}></span>
        <span className="typcn typcn-times clickable" data-bind="click: cancelWizard"></span>
      </div>
      
    </div>
  </div>
</navbar>
         
        )
    }
}

export default Login;
import React, { Component } from 'react';



class Login extends Component {

    render() {

        return (
      
           <navbar params="user: user,
                          showShortcutsTrigger: showShortcutsTrigger">
<div class="container container-body module-create-flatten">
    <div class="container-wrapper">
      <div class="progress progress-global">
        <div class="progress-bar" role="progressbar" data-bind="style: {width: (currentStep() * 100 / 10) + '%'}" style={{width: "10%"}}>
          <span class="sr-only"></span>
        </div>
      </div>
      <div class="navigation-bar">
        <span class="typcn typcn-arrow-left clickable"  style={{display: "none"}}></span>
        <span class="typcn typcn-times clickable" data-bind="click: cancelWizard"></span>
      </div>
      
    </div>
  </div>
</navbar>
         
        )
    }
}

export default Login;
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class UpgradeYourPlan extends Component {

    handleClose = () => {
    let modalDiv = document.getElementById('upgrade-your-plan-create-module');
    modalDiv.className = "modal fade upgrade-modal out"


    modalDiv.style.display = "none";
    }

   
    render () {
        return (
            <div className="modal fade upgrade-modal" onClick={this.handleClose}  tabindex="-1"   id="upgrade-your-plan-create-module" style={{display: "none"}}>
            <div className="modal-dialog">
          
                <div className="modal-content">
                  <div className="modal-body space-rocket" >
                    <button onClick={this.handleClose} type="button" className="close" >×</button>
                    <h1 className="upgrade-title">Upgrade your Plan</h1>
                    <p className="description" >You have reached your maximum amount of custom models in your plan (1).
                          <br/>
                          <br/>
                          Upgrade your plan to create more models!</p>
                    <button  className="btn btn-primary"
                    onClick ={ () => {this.props.history.push({pathname: '/main/my-account/change-plan'})}}
                    >See Plans and Pricing</button>
                  </div>
                </div>
          
            </div>
          </div>
        )
    }
}

export default withRouter(UpgradeYourPlan) ;

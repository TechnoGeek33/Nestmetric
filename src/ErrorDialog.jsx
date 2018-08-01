import React, { Component } from 'react';

class ErrorDialog extends Component {

  onClocse =() => {
    document.getElementById("delete-project").style.display = "none"
    document.getElementById("delete-project").className = "modal fade"
    document.getElementById("overlay").className = "fade in"
  }
  render() {
    console.log("from error")
    return (
      <div>
        <div className="modal fade in" aria-labelledby="myModalLabel" aria-hidden="true" id="delete-project" style={{ display: "block", paddingLeft: "0px" }}>
          <div className="modal-dialog" style={{left: "0"}}>
            <form id="delete-project-form">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h4 className="modal-title" id="myModalLabel" data-bind="text: modal_title">Stop Creation Wizard</h4>
                </div>

                <div className="modal-body">
                  <div className="alert alert-danger">
                    <strong>Warning:</strong>
                    <span >This will delete all your progress with this model.</span>
                  </div>

                  <p >Are you sure you want to stop the creation wizard?</p>
                </div>

                <div className="modal-footer">
                  <button type="button" onClick ={ this.onClocse } className="btn btn-default" data-dismiss="modal">Cancel</button>
                  <img src="https://mlproductionmedia.azureedge.net/static/img/ajax-loader.gif" style={{ display: "none" }} />
                  <button type="submit" className="btn btn-danger">Stop Creation Wizard</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div id="overlay" class="modal-backdrop fade in"></div>
      </div>

    )
  }
}

export default ErrorDialog;
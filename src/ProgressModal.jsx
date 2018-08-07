import React, { Component } from 'react';

class ProgressModal extends Component {
    render () {
        return (
            <div className="modal fade in" id="uploading-data" tabIndex={-1}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="myModalLabel">{this.props.modalMsg}</h4>
                </div>
                <div className="modal-body">
  
                 <div id="progressBar" className="progress progress-striped active">
              <div className="progress-bar" style={{ minWidth: "3em", width: `${this.props.progressWidth}%` }} >
                <span >{this.props.progressWidth}%</span>
              </div>
            </div>
            <div id="alertInfo" className="alert alert-info">
            {this.props.modalAlertMsg}
              
                </div>
                 
                
                </div>
  
                <div id="modalFooter" className="modal-footer">
                <button type="button" className="btn btn-default" onClick={() => {
                     this.props.modalBtnClick()
  
                }} >{this.props.modalBtnTxt}</button>
              </div>
              </div>
            </div>
          </div>
        )
    }
}

export default ProgressModal;

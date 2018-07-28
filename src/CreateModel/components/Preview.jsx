import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

let usethisColumn = [] ;
let otherData = [];

class Preview extends Component {
  state = {
    TableComponent : '',
    otherDataComp: ''
  }
      componentDidMount () {
            this.props.store.getExtractedData()
      this.printColums();

      }

      printColums = () => {
console.log("chal gaya")
            for(var i = 1; i <= Object.keys(this.props.store.ExtractedData[0]).length; i++) {
              usethisColumn.push ( <th id={Math.random()}>
                    <div className="checkbox">
                      <label>
                        <div className="custom-checkbox clickable" >
                          <span className="typcn typcn-tick" data-bind="visible: checked" style={{ display: "none" }}>
                          </span></div>
                        <span >Use this column</span>
                      </label>
                    </div>
                  </th> )

            } 

            for(var i = 0; i <= this.props.store.ExtractedData.length; i++) {

              console.log(this.props.store.ExtractedData[i] === undefined ? null:this.props.store.ExtractedData[i].GroupName )
              
            otherData.push(
             
              <tr  className="disabled">
              <td className="td-index">{i + 1}</td>
              <td  className="td-index">{this.props.store.ExtractedData[i] === undefined ? null:this.props.store.ExtractedData[i].GroupName}</td>
       
            </tr>  )

            }

            this.setState({
              TableComponent : usethisColumn,
              otherDataComp: otherData
            })

          
      }


    render() {
  
        return (
            <div data-bind="component: wizard.getCurrentComponent()">
            <h5 className="wizard-category-subtitle">Preview</h5>
            <h1 className="wizard-category-title">
              Select Texts
            </h1>
            <h5 className="wizard-subtitle">Select the columns with your texts. Multiple selected columns will be concatenated</h5>
            <div className="preview">
          <div className="discard-first-row">
          <div className="row input-fields">
            <div className="col-xs-6 col-xs-offset-0" data-bind="css: 'col-xs-offset-' + offset">
              <div className="checkbox">
                <label>
                  
          <div className="custom-checkbox clickable" >
            <span className="typcn typcn-tick" data-bind="visible: checked">
          </span></div>
          
                  <span>Discard first row</span>
                </label>
                <span className="glyphicon glyphicon-question-sign question-sign-tooltip"   style={{display: "none"}}></span>
              </div>
            </div>
          </div>
        
          </div>
          <div className="table-responsive table-preview-flatten">
            <table className="table">
              <tbody >
                    
                          <th>
                          
                                </th>
                                {this.state.TableComponent}
                                  
         {this.state.otherDataComp}
         
                  
              <tr>
                <td className="td-index"></td>
                <td className="text-center not-clickable" data-bind="text: 'Showing ' + Math.min(10, table().length) + ' of ' + rowsLength() + ' rows',
                               attr: { colspan: tableHeaders().length }" colspan="10">Showing 10 of 11 rows</td>
              </tr>
            </tbody>
            </table>
          </div>
        
              
            </div>
            <div className="text-center margin-top-20">
              <button type="button" className="btn btn-primary continue" data-bind="enable: enabledContinue, click: upload" disabled="disabled">Continue</button>
            </div>
          
            {/* <alert params="modal_id: 'alert-duplicated-samples',
                           modal_title: 'Upload Confirmation',
                           modal_info: uploadSamplesErrorMessage,
                           dismissNotAllowed: true,
                           onOk: function() {setTimeout(function() { uploadedSamples(true) }, 700)}">
              <div className="modal fade" data-bind="attr: {id: modal_id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  id="alert-duplicated-samples">
                <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal"  data-bind="visible: !dismissNotAllowed" style={{display: "none"}}>×</button>
                        <h4 className="modal-title" id="myModalLabel" data-bind="text: modal_title">Upload Confirmation</h4>
                      </div>
                      <div className="modal-body">
                        <div className="alert alert-info">
                          <span data-bind="html: modal_info"></span>
                        </div>
                      </div>
          
                      <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal" data-bind="click: onOk, text: okMessage">Ok</button>
                      </div>
                    </div>
                </div>
              </div>
          </alert> */}
          
            {/* <alert params="modal_id: 'alert-no-samples-uploaded',
                           modal_title: 'No data uploaded',
                           modal_info: uploadSamplesErrorMessage,
                           onOk: function() {setTimeout(function() { uploadedTable([]); }, 700)}">
              <div className="modal fade" data-bind="attr: {id: modal_id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  id="alert-no-samples-uploaded">
                <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal"  data-bind="visible: !dismissNotAllowed">×</button>
                        <h4 className="modal-title" id="myModalLabel" data-bind="text: modal_title">No data uploaded</h4>
                      </div>
                      <div className="modal-body">
                        <div className="alert alert-info">
                          <span data-bind="html: modal_info"></span>
                        </div>
                      </div>
          
                      <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal" data-bind="click: onOk, text: okMessage">Ok</button>
                      </div>
                    </div>
                </div>
              </div>
          </alert> */}
          
            {/* <loading params="id: 'uploading-data',
                             title: 'Uploading Data',
                             progress: uploadingProgress">
              <div className="modal fade" data-bind="attr: {id: id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  data-backdrop="static" data-keyboard="false" id="uploading-data">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel" data-bind="text: title">Uploading Data</h4>
                          </div>
                          <div className="modal-body">
                              <div className="progress progress-striped active">
                                <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{minWidth: "3em", width: "0%"}} data-bind="attr: { 'aria-valuenow': '60'},
                                                style: { width: parseInt(progress()) + '%' }" aria-valuenow="60">
                                  <span data-bind="text: useProgress ? parseInt(progress()) + '%' : 'Loading...'">0%</span>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </loading> */}
          
            {/* <loading params="id: 'importing-data',
                             title: 'Importing Data',
                             progress: importingProgress">
              <div className="modal fade" data-bind="attr: {id: id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  data-backdrop="static" data-keyboard="false" id="importing-data">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel" data-bind="text: title">Importing Data</h4>
                          </div>
                          <div className="modal-body">
                              <div className="progress progress-striped active">
                                <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{minWidth: "3em", width: "0%"}} data-bind="attr: { 'aria-valuenow': '60'},
                                                style: { width: parseInt(progress()) + '%' }" aria-valuenow="60">
                                  <span data-bind="text: useProgress ? parseInt(progress()) + '%' : 'Loading...'">0%</span>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </loading> */}
          </div>
        )
    }
}

export default withRouter(Preview);
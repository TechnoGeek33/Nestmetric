import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react';

class Preview extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  componentWillMount() {
    this.props.store.getExtractedData()
    // To keep track of ProgressBar
    this.store.pageCount = 4;

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
              <div className="">
                <div className="checkbox">
                 
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive table-preview-flatten">
            <table className="table">
              <tbody >
                <tr>
                  <td className=""></td>
                  {
                    Object.keys(this.props.store.ExtractedData[0]).map((header, index) => {
                      return (

                        <th id="" key={Math.random()} >
                          <div className="checkbox">
                            <label>

                              <span >{header}</span>
                            </label>
                          </div>
                        </th>
                      )
                    })}
                </tr>

                {this.props.store.ExtractedData.map((data, index) => {

                  return (<tr>
                    <td key={Math.random()} className="td-index">{index + 1}</td>
                    {
                      Object.keys(this.props.store.ExtractedData[0]).map((header) => {
                        return (
                          <td key={Math.random()} className={header}>{data[header]}</td>
                        )
                      })
                    }
                  </tr>)
                })
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-center margin-top-20">
          <button type="button"
            onClick={() => {
              this.props.history.push({ pathname: "/main/module-create/wizard/features" })
            }}
            className="btn btn-primary continue"
            disabled="">Continue</button>
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

export default withRouter(inject('store')(observer(Preview)));
import React, { Component } from 'react';
import {
  withRouter
} from 'react-router-dom';
import { inject, observer } from 'mobx-react';


class ChooseFile extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.state = {
      filename: 'No file selected',
      uploadName: 'myfile'
    }
  }


  componentWillMount() {
    // To keep track of ProgressBar
    this.store.pageCount = 3;
  }
  handleSubmit(e) {
    e.preventDefault()
    var formData = new FormData();
    var imagefile = document.querySelector('#newfile2');
    formData.append(this.state.uploadName, imagefile.files[0]);
    this.setState({ filename: imagefile.files[0].name })
    this.props.store.getExtractedData()
    this.props.history.push({ pathname: '/main/module-batch/wizard/preview/' })
  }
  render() {
    return (
      <div>
        <h5 className="wizard-category-subtitle">Setup</h5>
        <h1 className="wizard-category-title" >Upload a CSV or Excel</h1>
        <h5 className="wizard-subtitle">Choose a CSV or Excel file with data to analyze.</h5>
        <div className="choose-file">
          <div className="upload-btn-wrapper">
            <div className="upload-input">
              <span className="typcn typcn-document-add"></span>
              <span className="file-name" data-bind="text: fileName">{this.state.filename}</span>
              <span className="browse">Browse File</span>
            </div>
            <input type="file" name="myfile" id="newfile2" onInput={(e) => this.handleSubmit(e)} />
          </div>
          {/* <div className="alert alert-danger">There was an error while reading the file. Please, make sure that your csv file is correctly formated.</div> */}
        </div>

      </div>
    )
  }
}
export default withRouter(inject('store')(observer(ChooseFile)))
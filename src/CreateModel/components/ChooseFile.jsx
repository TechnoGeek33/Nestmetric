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
    var imagefile = document.querySelector('#newfile');
    formData.append(this.state.uploadName, imagefile.files[0]);
    this.setState({ filename: imagefile.files[0].name })
    this.props.store.getExtractedData()
    this.props.history.push({ pathname: '/main/module-create/wizard/preview/' })
  }
  render() {
    return (
      <div>
        <h5 className="wizard-category-subtitle">Setup</h5>
        <h1 className="wizard-category-title" >Upload an Excel file</h1>
        <h5 className="wizard-subtitle">Choose an Excel file that contains the text data that you will use to train your model.</h5>
        <div className="choose-file">
          <div className="upload-btn-wrapper">
            <div className="upload-input">
              <span className="typcn typcn-document-add"></span>
              <span className="file-name" data-bind="text: fileName">{this.state.filename}</span>
              <span className="browse">Browse File</span>
            </div>
            <input type="file" name="myfile" id="newfile" onInput={(e) => this.handleSubmit(e)} />
          </div>
          <p className="margin-top-10">Make sure to upload a CSV file which has a title or it will not return appropriate results</p>
          {/* <div className="alert alert-danger">There was an error while reading the file. Please, make sure that your csv file is correctly formated.</div> */}
        </div>

      </div>
    )
  }
}
export default withRouter(inject('store')(observer(ChooseFile)))
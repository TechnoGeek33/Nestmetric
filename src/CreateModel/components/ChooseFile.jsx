import React, { Component } from 'react';
import {
   withRouter
} from 'react-router-dom'



class ChooseFile extends Component {
state = {
    filename : 'No file selected',
    uploadName : 'myfile'
}

    handleSubmit(e) {
        e.preventDefault()
        var formData = new FormData();
        var imagefile = document.querySelector('#newfile');
        formData.append(this.state.uploadName, imagefile.files[0]);
    this.setState({filename:imagefile.files[0].name})
     this.props.store.getExtractedData()
      this.props.history.push({pathname: '/main/module-create/wizard/preview/'})
    }
    render() {
        return (
            <div data-bind="component: wizard.getCurrentComponent()">
            <h5 class="wizard-category-subtitle">Setup</h5>
            <h1 class="wizard-category-title" data-bind="text: title">Upload an Excel file</h1>
            <h5 class="wizard-subtitle" data-bind="html: subtitle">Choose an Excel file that contains the text data that you will use to train your model.</h5>
            <div class="choose-file">
              <div class="upload-btn-wrapper">
                <div class="upload-input">
                  <span class="typcn typcn-document-add"></span>
                  <span class="file-name" data-bind="text: fileName">{this.state.filename}</span>
                  <span class="browse">Browse File</span>
                </div>
                <input type="file" name="myfile" id="newfile" onInput={(e) => this.handleSubmit(e)} />
              </div>
              <p class="margin-top-10">Don’t you have one? Try a sample dataset from our <a data-bind="click: goToSampleLibrary">Sample Library</a></p>
              <div class="alert alert-danger">There was an error while reading the file. Please, make sure that your csv file is correctly formated.</div>
            </div>
            
          </div>
        )
    }
}

export default withRouter( ChooseFile);
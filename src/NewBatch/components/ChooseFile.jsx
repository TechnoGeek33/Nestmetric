import React, { Component } from 'react';
import {
  withRouter
} from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import ProgressModal from '../../commons/components/ProgressModal'



class ChooseFile extends Component {

  constructor(props) {
  
    super(props);
    this.store = this.props.store;
    this.state = {
      filename: 'No file selected',
      uploadName: 'myfile',
      modalMsg : '',
      progressWidth : 0
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

    // if(imagefile)

    // console.log(imagefile.files[0])

    formData.append(this.state.uploadName, imagefile.files[0]);
    this.setState({ filename: imagefile.files[0].name })
    this.props.store.getExtractedData()
    this.handleDataLoader()
  }


  handleModalBtnClick = () => {
    document.getElementById('uploading-data').className = "modal fade out"
    document.getElementById('uploading-data').style.display = "none"

    this.props.history.push({ pathname: '/main/module-batch/wizard/preview/' }, {id: this.props.location.state.id})
    
   
  }


  handleDataLoader () {
    var url = 'https://jsonplaceholder.typicode.com/todos/1';

    var promise = new Promise((resolve, reject) => {

      var percentage = 0
      // Do the usual XHR stuff
      var req = new XMLHttpRequest();
      req.open('GET', url);

      var intervalId;
      req.onloadstart = (e) => {
        document.getElementById('uploading-data').style.display = "block"
        intervalId = window.setInterval(() => {
          if (percentage === 99) {
            clearInterval(intervalId)
          }
          percentage++;
          this.setState({
            progressWidth: percentage,
         
            modalMsg: "Analyzing Data"
          })
        }, 90)
      

      }

      req.onreadystatechange = () => {
        clearInterval(intervalId)
      
        intervalId = window.setInterval(() => {
          if (percentage === 99) {
            clearInterval(intervalId)
          }
          percentage++;
          this.setState({
            progressWidth: percentage
          })
        }, 90)

        
      }

      req.onloadend =  (e) => {
        if(percentage === 99) {
          clearInterval(intervalId)
        }
        
        else {
         
          this.setState({
            progressWidth: 100
          })

          clearInterval(intervalId)

        setTimeout( () => {
          document.getElementById('progressBar').style.display = "none"
          document.getElementById('alertInfo').style.display = "block"
          document.getElementById('modalFooter').style.display = "block"

          this.setState({
            modalMsg : "Analyze Confirmation"
          })

        }, 1000)
        }
       

      }
      req.onload = function (e) {
        if (req.status === 200) {
          // Resolve the promise with the response text
          resolve(req.response);
        }
        else {

          reject(Error(req.statusText));
        }
      };
      req.onabort = () => {
       
        clearInterval(intervalId)
      }
      req.ontimeout = () => {
        clearInterval(intervalId)
      }

      // Handle network errors
      req.onerror = function () {
        clearInterval(intervalId)
      };

      // Make the request
      req.send();
    });

    promise.then(() => {
     
    })
  
  }

  render() {
    return (
      <div>
          <ProgressModal
        modalMsg={this.state.modalMsg} 
        progressWidth={this.state.progressWidth}
        modalAlertMsg= "Done !"
        modalBtnTxt="Continue"
        modalBtnClick = { this.handleModalBtnClick}
        />
        <h5 className="wizard-category-subtitle">Setup</h5>
        <h1 className="wizard-category-title" >Upload a CSV or Excel</h1>
        <h5 className="wizard-subtitle">Choose a CSV or Excel file with data to analyze.</h5>
        <div className="choose-file">
          <div className="upload-btn-wrapper">
            <div className="upload-input">
              <span className="typcn typcn-document-add"></span>
              <span className="file-name">{this.state.filename}</span>
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
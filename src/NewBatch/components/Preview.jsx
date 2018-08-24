import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react';
import ProgressModal from '../../ProgressModal'

class Preview extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;

    this.state = {
      modalMsg : '',
      progressWidth : 0
    }
  }

  componentWillMount() {
    this.props.store.getExtractedData()
    // To keep track of ProgressBar
    this.store.pageCount = 4;

  }

  handleContinue () {
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

    promise.then(response => {
     
    })
  
  }
  handleModalBtnClick = () => {
    document.getElementById('uploading-data').className = "modal fade out"
     this.props.store.DownloadDataFile().then(response => {
      window.location = '/SampleCSVFile_11kb.csv'
     

    }).catch ( (error) => {

        
    })
   
  }


  
  render() {

    return (
      <div >
       <ProgressModal
        modalMsg={this.state.modalMsg} 
        progressWidth={this.state.progressWidth}
        modalAlertMsg= "Done !"
        modalBtnTxt="Download"
        modalBtnClick = { this.handleModalBtnClick}
        />
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
              this.handleContinue()
            }}
            className="btn btn-primary continue"
            disabled="">Continue</button>
        </div>

       
      </div>
    )
  }
}

export default withRouter(inject('store')(observer(Preview)));
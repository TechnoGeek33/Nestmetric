import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import ProgressModal from '../../commons/components/ProgressModal'

class SelectAlgorithm extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.state = {
      disabled: "disabled",
      progressWidth: 0,
      modalMsg: ''

    }
  }

  componentWillMount() {
    // To keep track of ProgressBar
    this.store.pageCount = 6;
  }

  OnAlgoSelect(idPanel, idTri, idTick) {
    // console.log(document.getElementById(idPanel).getElementsByTagName('h3')[0].innerText )

    var arr = ["lr-panel", "svm-panel", "rf-panel", "nn-panel",
      "lr-triangle", "svm-triangle", "rf-triangle", "nn-triangle",
      "lr-tick", "svm-tick", "rf-tick", "nn-tick"];

    arr.forEach((data, index) => {
      if (index === 0 | index === 1 | index === 2 | index === 3) {
        document.getElementById(data).className = "panel-body"
      }
      if (index === 4 | index === 5 | index === 6 | index === 7) {
        document.getElementById(data).className = "triangle-topleft"
      }
      if (index === 8 | index === 9 | index === 10 | index === 11) {
        document.getElementById(data).className = "typcn typcn-tick"
      }
    })

    for (var i = 0; i < Object.keys(document.getElementsByClassName('panel-body')).length; ++i) {
      document.getElementsByClassName('panel-body')[i].style
        .backgroundImage = "linear-gradient(#e0dfdf, #e0dfdf), linear-gradient(325deg, #01befe, #008bff)";
    }

    document.getElementById(idPanel).style
    .backgroundImage = "linear-gradient(#fff, #fff), linear-gradient(325deg, #01befe, #008bff)";
    document.getElementById(idPanel).className = "panel-body panel-active"
    document.getElementById(idTri).className = "panel-triangle-active"
    document.getElementById(idTick).className = "typcn typcn-tick panel-tick-active"

    this.setState({
      disabled: null
    })
    this.props.store.ModelData.ModuleAlgo = document.getElementById(idPanel).getElementsByTagName('h3')[0].innerText
    
  }

  OnContinue = () => {

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
         
            modalMsg: "Training Your Module"
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
            modalMsg : "Training Confirmation"
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

  handleModalBtnClick =  () =>{
    this.props.history.push ({
      pathname: "/main/module-create/wizard/name-your-module"
    }) 
  }

  render() {

    return (
      <div >
       <ProgressModal
        modalMsg={this.state.modalMsg} 
        progressWidth={this.state.progressWidth}
        modalAlertMsg= "Your Module has been trained successfully !"
        modalBtnTxt="ok"
        modalBtnClick = { this.handleModalBtnClick}
        />
        <h5 className="wizard-category-subtitle">Setup</h5>
        <h1 className="wizard-category-title">
          Select Algorithm
            </h1>
        <h5 className="wizard-subtitle">Select an algorithm to build your model  </h5>

        <div className="tabs">
          <span className="tab selected">Sources</span>

        </div>
        <div className="container">
          <div className="row module-type data-source" style={{ width: "785px" }} >

            <div
              // style={{ pointerEvents : "none"}} 
              className="col-md-3 col-sm-3 col-xs-3 ">
              <div
                onClick={(e) => { this.OnAlgoSelect("lr-panel", "lr-triangle", "lr-tick") }}
                className="panel panel-default">
                <div id="lr-panel" className="panel-body">
                  <div id="lr-triangle" className="triangle-topleft">
                    <span id="lr-tick" className="typcn typcn-tick"></span>
                  </div>
                  <div className="image excel" ></div>
                  <h3>Logistic Regression</h3>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-3 col-xs-3">
              <div
                onClick={() => { this.OnAlgoSelect("svm-panel", "svm-triangle", "svm-tick") }}
                className="panel panel-default">
                <div id="svm-panel" className="panel-body"  >
                  <div id="svm-triangle" className="triangle-topleft">
                    <span id="svm-tick" className="typcn typcn-tick"></span>
                  </div>
                  <div className="image csv"   ></div>
                  <h3>SVM</h3>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-3 col-xs-3">
              <div
                onClick={() => { this.OnAlgoSelect("rf-panel", "rf-triangle", "rf-tick") }}
                className="panel panel-default">
                <div id="rf-panel" className="panel-body" >
                  <div id="rf-triangle" className="triangle-topleft">
                    <span id="rf-tick" className="typcn typcn-tick"></span>
                  </div>
                  <div className="image csv" ></div>
                  <h3>Random Forest</h3>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-3 col-xs-3">
              <div
                onClick={() => { this.OnAlgoSelect("nn-panel", "nn-triangle", "nn-tick") }}
                className="panel panel-default">
                <div id="nn-panel" className="panel-body">
                  <div id="nn-triangle" className="triangle-topleft">
                    <span id="nn-tick" className="typcn typcn-tick"></span>
                  </div>
                  <div className="image csv"></div>
                  <h3>Neural Network</h3>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="text-center margin-top-20">
          <button type="button" onClick={this.OnContinue} className="btn btn-primary continue"
          //  disabled={this.state.disabled}

          >Continue</button>
        </div>
        <p class="text-center margin-top-40">
          or <a >Learn more about algorithm</a>
        </p>





      </div>
    )
  }
}

// this.props.history.push({pathname: '/main/module-create/wizard/name-your-module/'})

export default withRouter(inject('store')(observer(SelectAlgorithm)))
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react';

class Preview extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;

    this.state = {
      modalMsg: '',
      progressWidth: 0
    }
  }

  componentWillMount() {
  

    // To keep track of ProgressBar
    this.store.pageCount = 4;

  }


  handleDownload() {
    if (this.props.store.AllModules.length >= 1) {
      let modalDiv = document.getElementById('upgrade-your-plan-create-module')
      modalDiv.style.display = "block"
      modalDiv.className = "modal fade upgrade-modal in"
    }
    else {
      window.location = '/SampleCSVFile_11kb.csv'

    }


  }



  render() {

    return (
      <div >

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

                  return (<tr key={Math.random()}>
                    <td className="td-index">{index + 1}</td>
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
            onClick={(e) => {
              e.preventDefault()
              this.handleDownload()
            }}
            className="btn btn-primary continue"
            disabled="">Download</button>
        </div>


      </div>
    )
  }
}

export default withRouter(inject('store')(observer(Preview)));
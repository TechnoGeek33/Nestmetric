import React, { Component } from 'react';
import {withRouter} from  'react-router-dom'


class MultiplePredict extends Component {

  render() {

    return (
      <div className="col-md-10">
        <div className="batch-processing">
          <h2>Batch Processing</h2>
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="csv-xls"></div>
              <p>Process your file using <span className="module-name" >Sentiment Analysis</span></p>
              <button type="button" className="btn btn-primary"
              onClick={
                () => { this.props.history.push({
                  pathname : '/main/module-batch/wizard/choose-file'
                })}
              }
              >+ New batch</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(MultiplePredict);
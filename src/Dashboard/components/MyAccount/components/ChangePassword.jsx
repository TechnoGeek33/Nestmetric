import React, { Component, Fragment } from 'react';


class ChangePassword extends Component {

  render() {

    return (
      <Fragment>
        <h2 className="small-heading small-heading-top">Account</h2>
        <div >
          <form id="user-change-password-form">
            <legend style={{ display: 'none' }}>
              <a style={{ display: 'none' }}>Hide undefined</a>
            </legend>
            <legend style={{ display: 'none' }}></legend>
            <div className="row" >

              <div className="col-md-12">
                <label >New password</label>

                <input className="form-control" id="user-change-password-forms-password1" type="password" name="password1" placeholder="" />

                <ul ></ul>
              </div>

              <div className="col-md-12">
                <label >New password (again)</label>

                <input className="form-control" id="user-change-password-forms-password2" type="password" name="password2" placeholder="" />

                <ul ></ul>

              </div>
              
              <div style={{ marginTop: '10px' }} className="col-md-12">
                <span className="pull-left">
                  <button type="button" className="btn btn-default" style={{ display: 'none' }}>Custom</button>
                </span>
                <div className="pull-right">

                  <img src="https://mlproductionmedia.azureedge.net/static/img/ajax-loader.gif" alt="loader" style={{ display: 'none' }} />
                  <span className="glyphicon glyphicon-ok" style={{ display: 'none' }}></span>
                  <span className="glyphicon glyphicon-remove" style={{ display: 'none' }}></span>

                  <button type="button" className="btn btn-default" style={{ display: 'none' }}>Custom</button>
                  <button type="submit" className="btn btn-primary" >Save</button>

                </div>
              </div>
            </div>

          </form>

        </div>
      </Fragment>


    )
  }
}

export default ChangePassword;
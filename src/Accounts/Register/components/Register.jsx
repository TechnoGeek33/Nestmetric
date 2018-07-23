import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

class RegisterUi extends Component {

  handelInput(event, state) {
    this.store[state] = event.target.value
}

    render() {
        return (
           
              
                    <div className="page-wrapper-wide">
                      <a href="" className="brand" />
                      <div className="minipanel">
                        <h1>Sign Up</h1>
                        <form className="registration float-label">
                          
                          <div className="form-group">
                            <input onChange={(event) => this.handelInput(event, "RegEmail")} className=" form-control" id="id_email"  placeholder="E-mail" type="email"  />
                            <label htmlFor="id_email" className="control-label">E-mail</label>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input onChange={(event) => this.handelInput(event, "RegFirstName")} className=" form-control" id="id_first_name"  placeholder="First Name" type="text"  />
                                <label htmlFor="id_first_name" className="control-label">First Name</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input onChange={(event) => this.handelInput(event, "RegLastName")} className=" form-control" id="id_last_name"  placeholder="Last Name" required type="text" />
                                <label htmlFor="id_last_name" className="control-label">Last Name</label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <input  onChange={(event) => this.handelInput(event, "RegPassword")} className=" form-control" id="id_password" placeholder="Password" type="password" />
                            <label htmlFor="id_password" className="control-label">Password</label>
                          </div>
                          <div className="form-group registation-account-type">
                            <label htmlFor="id_company_account" className="control-label">Who are you creating your account for?</label>
                            <br />
                            <label className="radio-inline">
                              <input type="radio" name="company_account" id="id_company_account_0" defaultValue={0} required />
                              <span>Just for me
                              </span></label>
                            <label className="radio-inline">
                              <input type="radio" name="company_account" id="id_company_account_1" defaultValue={1} required />
                              <span>My company</span>
                            </label>
                          </div>
                          
                          <input className="btn btn-primary" type="submit" defaultValue="Next" />
                          <div className="text-center">
                            <label className="form-footer">
                              Signing up signifies you have read and agree to our<br />
                              <a href="#">Terms of Service</a>
                              and <a href="#">Privacy Policy</a>.
                            </label>
                          </div>
                        </form>
                      </div>
                      <p className="page-footer">
                        Already a member? <a onClick={ () => { 
                            this.props.history.push({ pathname: "/accounts/login"}) }}>Log in</a>
                      </p>
                    </div>
        
        )
    }
}

export default withRouter(RegisterUi);
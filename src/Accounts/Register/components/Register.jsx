import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

class RegisterUi extends Component {

    render() {
        return (
           
              
                    <div className="page-wrapper-wide">
                      <a href="" className="brand" />
                      <div className="minipanel">
                        <h1>Sign Up</h1>
                        <form method="POST" action="#" className="registration float-label">
                          <input type="hidden" name="csrfmiddlewaretoken" defaultValue="1XArxaC1q8cPKsMAEXn1ELenRG2Z3BeBnfxFBRjSIspcX7Qwy55vdtq6UH1ByTff" />
                          <div className="form-group">
                            <input className=" form-control" id="id_email" maxLength={254} name="email" placeholder="E-mail" type="email" required />
                            <label htmlFor="id_email" className="control-label">E-mail</label>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input className=" form-control" id="id_first_name" maxLength={30} name="first_name" placeholder="First Name" type="text" required />
                                <label htmlFor="id_first_name" className="control-label">First Name</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input className=" form-control" id="id_last_name" maxLength={30} name="last_name" placeholder="Last Name" required type="text" />
                                <label htmlFor="id_last_name" className="control-label">Last Name</label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <input className=" form-control" id="id_password" maxLength={128} name="password" placeholder="Password" type="password" required />
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
                            this.props.history.push({ pathname: "/accounts/register"  }) }}>Log in</a>
                      </p>
                    </div>
        
        )
    }
}

export default withRouter(RegisterUi);
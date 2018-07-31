import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';


class RegisterUi extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.state = {
      Alert: ''
    }
  }

  handelSubmit = () => {
    // RegExp to check email
    if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.store.Registration.Email)) {
      if (this.store.Registration.Password.lenght > 0 && this.store.Registration.Password === this.store.Registration.ConfirmPassword) {
            this.store.RegistrationCheck();
      }
      else {
        // Error Check for confirm password
        document.getElementById("ConfirmPassword").className = "form-group has-error has-feedback";
        document.getElementById("ConfirmPasswordText").style.display = "block"
      }
    }

    else {
      // Error Check for Email
      document.getElementById("Email").className = "form-group has-error has-feedback";
      document.getElementById("EmailText").style.display = "block"
    }
  }

  handelInput(event, state) {
    this.store.Registration[state] = event.target.value
    document.getElementById("Email").className = "form-group"
    document.getElementById("EmailText").style.display = "none"
    document.getElementById("ConfirmPassword").className = "form-group ";
    document.getElementById("ConfirmPasswordText").style.display = "none"
  }

  render() {
    return (

      <div className="unauth">
        <div className="page-wrapper-wide">
          <a href="" className="brand" />
          <div className="minipanel">
            <h1>Sign Up</h1>

            {this.state.Alert}

            <form className="registration float-label">

              <div id="Email" className="form-group">
                <input onChange={(event) => this.handelInput(event, "Email")} className=" form-control" id="id_email" placeholder="E-mail" type="email" />
                <label htmlFor="id_email" className="control-label">E-mail</label>
                <div id="EmailText" class="form-field-errors" style={{ display: "none" }}>A user with that email already exists or Email is <b> incorrect </b></div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input onChange={(event) => this.handelInput(event, "FirstName")} className=" form-control" id="id_first_name" placeholder="First Name" required type="text" />
                    <label htmlFor="id_first_name" className="control-label">First Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input onChange={(event) => this.handelInput(event, "LastName")} className=" form-control" id="id_last_name" placeholder="Last Name" required type="text" />
                    <label htmlFor="id_last_name" className="control-label">Last Name</label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <input onChange={(event) => this.handelInput(event, "Password")} className=" form-control" placeholder="Password" type="password" />
                <label htmlFor="id_password" className="control-label">Password</label>
              </div>

              <div id="ConfirmPassword" className="form-group">
                <input onChange={(event) => this.handelInput(event, "ConfirmPassword")} className=" form-control" placeholder="Confirm Password" type="password" />
                <label htmlFor="id_password" className="control-label">Confirm Password</label>
                <div id="ConfirmPasswordText" class="form-field-errors" style={{ display: "none" }}>Confirm Password Does not match Your Password</div>
              </div>

              <input onClick={this.handelSubmit} className="btn btn-primary" type="submit" defaultValue="Next" />
              <div className="text-center">
                <label className="form-footer">
                  Signing up signifies you have read and agree to our<br />
                  <a href="">Terms of Service</a>
                  and <a href="">Privacy Policy</a>.
                            </label>
              </div>
            </form>
          </div>
          <p className="page-footer">
            Already a member? <a onClick={() => {
              this.props.history.push({ pathname: "/accounts/login" })
            }}>Log in</a>
          </p>
        </div>
      </div>

    )
  }
}

export default withRouter(inject('store')(observer(RegisterUi)))
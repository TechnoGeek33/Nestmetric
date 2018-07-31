import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

class LoginUi extends Component {

    constructor(props) {
        super(props);
        this.store = this.props.store;
        this.state = {
            Alert: ''
        }
    }

    HandleLogin = () => {
        if(this.store.Login.Email.length !== 0 && this.store.Login.Password.length !== 0 ){
            if (this.store.LoginCheck() === true) {
                this.props.history.push({ pathname: "/main/dashboard" })
            }
            else {
                this.setState({
                    Alert: <div className="alert alert-warning">
                        Your username and password didn't match. Please try again.
                            </div>
                })
            }
        }
        else {
            this.setState({
                Alert: <div className="alert alert-warning">
                    Your username and password can't Be Empty.
                        </div>
            })
        }
    }

    handelInput(event, state) {
        this.store.Login[state] = event.target.value
    }

    render() {
        return (
            <div className="unauth">
            <div className="page-wrapper">
                <a href="" className="brand"></a>

                <div className="minipanel">
                    <h1>Login</h1>

                    {this.state.Alert}


                    <form onClick={(e) => { e.preventDefault(); }} className="form float-label">
                        <div className="form-group">
                            <input onChange={(event) => this.handelInput(event, "Email")} className="form-control" id="id_username"  placeholder="Email address" type="text"  />
                            <label htmlFor="id_username" className="control-label">Email address</label>
                        </div>
                        <div className="form-group">

                            <input onChange={(event) => this.handelInput(event, "Password")} className=" form-control" id="id_password"  placeholder="Password" type="password"  />
                            <label htmlFor="id_password" className="control-label">Password</label>
                        </div>
                        <input type="hidden" name="next" value="" />
                        <p>
                            <a href="#">Forgot your password?</a>
                        </p>
                        <input onClick={() => this.HandleLogin()} className="btn btn-primary" type="submit" value="Login" />
                    </form>
                </div>

                <p className="page-footer">
                    Don’t have an account?
                        <a style={{ marginLeft: "6px" }} onClick={() => {
                        this.props.history.push({ pathname: "/accounts/register" })
                    }}
                    >Sign Up for Free</a>
                </p>
            </div>
            </div>
        )
    }
}

export default withRouter(inject('store')(observer(LoginUi)))
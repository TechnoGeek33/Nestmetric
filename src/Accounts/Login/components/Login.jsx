import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

class LoginUi extends Component {

    HandleLogin = () => {
        // console.log(input.id.id_username.value)
    }

    handelInput= (event) =>{
        console.log(event.target.value)
        
    }

    render() {
        return (
            <div className="page-wrapper">
                <a href="" className="brand"></a>

                <div className="minipanel">
                    <h1>Login</h1>

                    <div class="alert alert-warning">
                        Your username and password didn't match. Please try again.
                    </div>

                    <form className="form float-label">
                        <div className="form-group">
                            <input onChange={(event) => this.handelInput(event)} className="form-control" id="id_username" maxLength="254" name="username" placeholder="Email address" type="text" required />
                            <label htmlFor="id_username" className="control-label">Email address</label>
                        </div>
                        <div className="form-group">

                            <input className=" form-control" id="id_password" name="password" placeholder="Password" type="password" required />
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
        )
    }
}

export default withRouter(inject('store')(observer(LoginUi)))
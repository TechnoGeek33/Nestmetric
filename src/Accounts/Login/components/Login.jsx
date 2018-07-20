import React, { Component } from 'react';

class LoginUi extends Component {

    render() {
        console.log(this.props)
        return (
                <div className="page-wrapper">
                    <a href="" className="brand"></a>

                    <div className="minipanel">

                        <h1>Login</h1>
                        <form method="" action="" className="form float-label">
                            <input type='hidden' name='csrfmiddlewaretoken' value='crA5LthyMjBGa9U2b5qQafFNrM3gTmfMi7PBPNrbS2yNk5zH38xTUVwrbuL5VJXH' />
                            <div className="form-group">
                                <input autofocus="" className=" form-control" id="id_username" maxlength="254" name="username" placeholder="Email address" type="text" required />
                                <label for="id_username" className="control-label">Email address</label>
                            </div>
                            <div className="form-group">

                                <input className=" form-control" id="id_password" name="password" placeholder="Password" type="password" required />
                                <label for="id_password" className="control-label">Password</label>

                            </div>

                            <input type="hidden" name="next" value="" />

                            <p>
                                <a href="#">Forgot your password?</a>
                            </p>

                            <input className="btn btn-primary" type="submit" value="Login" />
                        </form>
                    </div>
                    <p className="page-footer">
                        Don’t have an account?
                        <a style={{ marginLeft: "6px" }} onClick={ () => { 
                            this.props.history.push({ pathname: "/accounts/register"  })

                        }}
                            >Sign Up for Free</a>
                    </p>
                </div>
        )
    }
}

export default LoginUi;
import React, { Component } from 'react';

class LoginUi extends Component {

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
                          <div className="registration-captcha">
                            <div className="form-group">
                              <div className="g-recaptcha" data-sitekey="6LfyWRIUAAAAAHgaKUp8IPzWw-MTLcFs-g8OXgRq" />
                              <noscript>
                                &lt;div style="width: 302px; height: 352px;"&gt;
                                &lt;div style="width: 302px; height: 352px; position: relative;"&gt;
                                &lt;div style="width: 302px; height: 352px; position: absolute;"&gt;
                                &lt;iframe src="https://www.google.com/recaptcha/api/fallback?k=6LfyWRIUAAAAAHgaKUp8IPzWw-MTLcFs-g8OXgRq"
                                frameborder="0" scrolling="no"
                                style="width: 302px; height:352px; border-style: none;"&gt;
                                &lt;/iframe&gt;
                                &lt;/div&gt;
                                &lt;div style="width: 250px; height: 80px; position: absolute; border-style: none;
                                bottom: 21px; left: 25px; margin: 0px; padding: 0px; right: 25px;"&gt;
                                &lt;textarea id="g-recaptcha-response" name="g-recaptcha-response"
                                class="recaptcha_challenge_field"
                                style="width: 250px; height: 80px; border: 1px solid #c1c1c1;
                                margin: 0px; padding: 0px; resize: none;" value=""&gt;
                                &lt;/textarea&gt;
                                &lt;input type='hidden' name='recaptcha_response_field' value='manual_challenge' /&gt;
                                &lt;/div&gt;
                                &lt;/div&gt;
                                &lt;/div&gt;
                              </noscript>
                            </div>
                          </div>
                          <input className="btn btn-primary" type="submit" defaultValue="Next" />
                          <div className="text-center">
                            <label className="form-footer">
                              Signing up signifies you have read and agree to our<br />
                              <a href="http://www.monkeylearn.com/terms">Terms of Service</a>
                              and <a href="http://www.monkeylearn.com/privacy">Privacy Policy</a>.
                            </label>
                          </div>
                        </form>
                      </div>
                      <p className="page-footer">
                        Already a member? <a href="https://app.monkeylearn.com/accounts/login/">Log in</a>
                      </p>
                    </div>
        
        )
    }
}

export default LoginUi;
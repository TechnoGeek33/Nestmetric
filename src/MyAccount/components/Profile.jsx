import React, { Component, Fragment } from 'react';


class Profile extends Component {

    render() {

        return (
            <Fragment>

                <h2 className="small-heading small-heading-top">Profile</h2>
                <div >

                    <form >


                        <fieldset>
                            <legend style={{ display: 'none' }}>
                                <a style={{ display: 'none' }}>Hide undefined</a>
                            </legend>
                            <legend style={{ display: 'none' }}></legend>
                            <div className="row" >

                                <div className="col-md-12">
                                    <label >First name</label>

                                    <input className="form-control" id="user-profile-first-name" type="text" name="first_name" placeholder="" />

                                    <ul ></ul>
</div>
                                    <div className="col-md-12">
                                        <label  >Last name</label>

                                        <input className="form-control" id="user-profile-last-name" type="text" name="last_name" placeholder="" />

                                        <ul ></ul>
                                        </div>

                                        <div className="col-md-12">
                                            <label  >Billing e-mail address</label>

                                            <input className="form-control" id="user-profile-billing-email" type="text" name="billing_email" placeholder="" />

                                            <ul ></ul>
                                            </div>

                                            <div className="checkbox col-md-12" >
                                                <label>
                                                    <input type="checkbox" className="form-control" name="send_email_notifications" id="user-profile-send-notifications" />
                                                    <span  >Send email notifications</span>
                                                </label>
                                                <span className="glyphicon glyphicon-question-sign question-sign-tooltip" style={{ display: 'none' }} data-original-title="" title=""></span>
                                            </div>
                                            

                                        </div>
                                 </fieldset>


                        <div className="row button-row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <span className="pull-left">
                                    <button type="button" className="btn btn-default" style={{ display: 'none' }}>Custom</button>
                                </span>
                                <div className="pull-right">

                                    <img src="https://mlproductionmedia.azureedge.net/static/img/ajax-loader.gif" style={{ display: 'none' }} />
                                    <span className="glyphicon glyphicon-ok" style={{ display: 'none' }}></span>
                                    <span className="glyphicon glyphicon-remove" style={{ display: 'none' }}></span>

                                    <button type="button" className="btn btn-default" style={{ display: 'none' }}>Custom</button>
                                    <button type="submit" className="btn btn-primary" >Save Profile</button>

                                </div>
                            </div>
                        </div>
                    </form>

                </div>
                <legend className="legend-profile"></legend>
                <h2 className="small-heading small-heading-top">Change Profile Image</h2>
                <div >

                    <form role="form" >

                        <fieldset>
                            <legend style={{ display: 'none' }}>
                                <a style={{ display: 'none' }}>Hide undefined</a>
                            </legend>
                            <legend style={{ display: 'none' }}></legend>
                            <div className="row" >

                                <div className="col-md-12">
                                    <label >File</label>

                                    <div className="input-group">
                                        <input type="text" className="form-control" />
                                        <span className="input-group-btn">
                                            <span className="btn btn-default btn-file" >
                                                Browse…
      <input type="file" multiple="" id="upload-avatar-file-form-file" name="file" />
                                            </span>
                                        </span>
                                    </div>

                                    <ul></ul>

                                    <span className="help-block" >You have to upload an image file of up to 3MB.</span>

                                </div>

                            </div>
                        </fieldset>


                        <div className="row button-row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <span className="pull-left">
                                    <button type="button" className="btn btn-default" style={{ display: 'none' }}>Custom</button>
                                </span>
                                <div className="pull-right">

                                    <img src="https://mlproductionmedia.azureedge.net/static/img/ajax-loader.gif" style={{ display: 'none' }} />
                                    <span className="glyphicon glyphicon-ok" style={{ display: 'none' }}></span>
                                    <span className="glyphicon glyphicon-remove" style={{ display: 'none' }}></span>

                                    <button type="button" className="btn btn-default" style={{ display: 'none' }}>Custom</button>
                                    <button type="submit" className="btn btn-primary">Save Profile Image</button>

                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </Fragment>

        )
    }
}

export default Profile;
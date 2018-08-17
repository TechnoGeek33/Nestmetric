import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom'


class RecentlyUsed extends Component {


    render () {
        return (
            <Fragment>
            <h3 className="margin-bottom-20">Recently Used</h3>
            <div  className="row projects-grid">
            
            <div className="col-xs-12 col-sm-6 col-md-3 projects-gird-cell">
                    <div >
                        <div className="panel panel-default" >
                            <div style={{padding : "0" , margin : "60px auto"}} className="panel-body">

                                <div className="">
                                </div>
                                <span className="btn-group module-options" >
                                    <span className="glyphicon glyphicon-option-vertical"  id="options-WmPw5xm8O6h2PN" style={{ display: "none" }}></span>
                                    <ul className="dropdown-menu">
                                        <li><a >Delete</a></li>
                                    </ul>
                                </span>
                                <h3 style={{fontSize : "24px", textAlign:"center"}}>Create Model</h3>
                              <p className="description create-model" style={{textAlign:"center"}}>   
                              <button type="button" className="btn btn-primary" 
                            onClick={() => {
                                this.props.history.push({ pathname: "/main/module-create/wizard/choose-module-type" }) }} >
                            <span className="plus-white" id="hello" >+</span> Create Model
                        </button> </p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3 projects-gird-cell">
                    <div id="module-cl_KFXhoTdt">
                        <div className="panel panel-default" >
                            <div className="panel-body">

                                <div className="cell-avatar topic">
                                </div>
                                <span className="btn-group module-options" >
                                    <span className="glyphicon glyphicon-option-vertical"  id="options-WmPw5xm8O6h2PN" style={{ display: "none" }}></span>
                                    <ul className="dropdown-menu">
                                        <li><a >Delete</a></li>
                                    </ul>
                                </span>
                                <h3 data-bind="text: name">Profanity &amp; Abuse Detection</h3>
                                <p className="description">Identify profanity or abuse in user generated content....</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 projects-gird-cell">
                    <div id="module-cl_sGdE8hD9">
                        <div className="panel panel-default" >
                            <div className="panel-body">
                                <div className="cell-avatar topic">
                                </div>
                                <span className="btn-group module-options" >
                                    <span className="glyphicon glyphicon-option-vertical"  id="options-ZWf0f3oeY4DJKq" style={{ display: "none" }}></span>
                                    <ul className="dropdown-menu">
                                        <li><a >Delete</a></li>
                                    </ul>
                                </span>
                                <h3 >NPS SaaS Feedback Classifier</h3>
                                <p className="description" >Classify NPS comments for SaaS products into tags such as Ease of Use, Features, Pricing and more....</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default withRouter(RecentlyUsed) ;
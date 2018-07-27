import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Explorer extends Component {
    // state = {
    //     toggle = false
    // }

    handleDropdown() {
        // if(this.state.toggle === false){
        document.getElementsByClassName("dropdown-menu")[0].style.display = "block"
        // }
    }

    render() {
        

        return (
            <div>

                    <div id="header-wrapper">
                        <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <a className="navbar-brand" href="/main/dashboard/" style={{ height: "45px" }}></a>
                                </div>
                                <div className="collapse navbar-collapse" >
                                    <ul className="nav navbar-nav navbar-right">
                                        <li className="create-model">
                                            <button type="button" className="btn btn-primary"
                                                onClick={() => {
                                                    this.props.history.push({ pathname: "/main/module-create/wizard/choose-module-type" })
                                                }}
                                            >
                                                <span className="plus-white" id="hello" >+</span> Create Model
                                        </button>
                                        </li>

                                        <li className="dropdown">
                                            <a className="dropdown-toggle user-dropdown" onClick={() => { this.handleDropdown()}} >
                                                <span className="typcn typcn-user-outline" aria-hidden="true"></span>
                                            </a>
                                            <ul className="dropdown-menu">

                                                <hr />

                                                <li>
                                                    <a href="/main/my-account/">
                                                        <span className="typcn typcn-user" aria-hidden="true"></span> My Account </a>
                                                </li>

                                                <li>
                                                    <a href="/accounts/logout/">
                                                        <span className="glyphicon glyphicon-log-out" aria-hidden="true"></span> Logout  </a>
                                                </li>
                                            </ul>
                                        </li>

                                    </ul>
                                    <ul className="nav navbar-nav navigation-menu">
                                        <li className="active">
                                            <a href="/main/dashboard/">Dashboard</a>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
               

                <div className="container container-body">
                    <div className="container-wrapper">
                        <div className="main-content">

                            <h3 className="margin-bottom-20">Recently Used</h3>
                            <div data-bind="fastForEach: $data" className="row projects-grid">


                                <div className="col-xs-12 col-sm-6 col-md-3 projects-gird-cell">
                                    <div id="module-cl_KFXhoTdt">
                                        <div className="panel panel-default" >
                                            <div className="panel-body">

                                                <div className="cell-avatar topic">
                                                </div>
                                                <span className="btn-group module-options" >
                                                    <span className="glyphicon glyphicon-option-vertical" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="options-WmPw5xm8O6h2PN" style={{ display: "none" }}></span>
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
                                                    <span className="glyphicon glyphicon-option-vertical" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="options-ZWf0f3oeY4DJKq" style={{ display: "none" }}></span>
                                                    <ul className="dropdown-menu">
                                                        <li><a >Delete</a></li>
                                                    </ul>
                                                </span>
                                                <h3 data-bind="text: name">NPS SaaS Feedback Classifier</h3>
                                                <p className="description" >Classify NPS comments for SaaS products into tags such as Ease of Use, Features, Pricing and more....</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row underlined-row">
                            </div>

                            <div className="row margin-bottom-20">
                                <div className="col-xs-4">
                                    <h3 className="margin-bottom-20">My Models</h3>
                                </div>
                                <div className="col-xs-4">
                                    <div className="data-search-bar module-search" style={{ display: "none" }}>
                                        <i className="glyphicon glyphicon-search"></i>
                                        <input type="search" id="filter-input" className="form-control" placeholder="Search..." />
                                    </div>
                                </div>
                            </div>

                            <div className="alert alert-info alert-compact">
                                You don't own any models. You can <a
                                    onClick={() => {
                                        this.props.history.push({ pathname: "/main/module-create/wizard/choose-module-type" })
                                    }}
                                >create one</a>.
                            </div>

                            <div className="row text-center api-loading-gif" data-bind="visible: searching" style={{ display: "none" }}>
                                <div className="logo-loader"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Explorer);
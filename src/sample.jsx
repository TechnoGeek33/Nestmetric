import React, { Component } from 'react';

class Sample extends Component {

  handleDropdown() {

    if (document.getElementById('dlDropDown').className === "dropdown") {
      document.getElementById('dlDropDown').className = "dropdown open"
    }
    else {
      document.getElementById('dlDropDown').className = "dropdown"
    }
  }
  render() {
    return (

      <div>
        {/* Header */}
        <div id="header-wrapper">
          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">

              <div className="navbar-header">
                <button type="button" className="navbar-toggle">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>

                <a className="navbar-brand navbar-brand-small"
                  style={{
                    background: "url('/images/logo.png') no-repeat",
                    backgroundSize : "50px",
                    width:"50px"
                    
                  }}
                  href="/main/dashboard/"></a>
                <breadcrumbs >
                  <div className="breadcrumbs">
                    <span><a href="/main/explore/">Explore</a></span>
                    <span className="separator">&gt;</span>
                    <span className="title" data-bind="text: module().name">Sentiment Analysis</span>

                  </div>
                </breadcrumbs>
              </div>

              <div className="collapse navbar-collapse" id="monkeylearn-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown" id="dlDropDown">
                    <a className="dropdown-toggle user-dropdown" onClick={() => { this.handleDropdown() }} >
                      <span className="typcn typcn-user-outline" aria-hidden="true"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="/">
                          <span className="typcn typcn-user" aria-hidden="true"></span> My Account </a>
                      </li>

                      <li>
                        <a href="/accounts/logout/" >
                          <span className="typcn typcn-eject-outline" aria-hidden="true"></span> Logout  </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* Header End */}

        {/* Body */}
        <div className="container container-body container-body-extractor">
          <div className="container-wrapper">
            <div className="panel panel-default panel-content-wrapper panel-main panel-public">
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-2">
                    <div className="menu-nav-stacked">
                      <ul className="nav nav-pills nav-stacked-module" >
                        <li className="">
                          <a href="#">
                            <span className="typcn margin-right-5 typcn-input-checked" ></span>
                            <span >Demo</span>
                          </a>
                        </li>
                        <li data-bind="css: { active: active, disabled: disabled }" className="active">
                          <a href="#">
                            <span className="typcn margin-right-5 typcn-document" ></span>
                            <span >Batch</span>
                          </a>
                        </li>

                      </ul>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="batch-processing">
                      <h2>Batch Processing</h2>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <div className="csv-xls"></div>
                          <p>Process your file using <span className="module-name" data-bind="text: module().name">Sentiment Analysis</span></p>
                          <button type="button" className="btn btn-primary" data-bind="click: clickUpload">+ New batch</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default (Sample)
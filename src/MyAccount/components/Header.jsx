import React, {Component } from 'react';


class Header extends Component {

    render () {

        return (
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
                  href="/main/dashboard"></a>
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
        )
    }
}


export default Header;


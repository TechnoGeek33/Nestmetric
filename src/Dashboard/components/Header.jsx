import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react';

class Header extends Component {

    handleDropdown() {

        if (document.getElementById('dlDropDown').className === "dropdown") {
            document.getElementById('dlDropDown').className = "dropdown open"
        }
        else {
            document.getElementById('dlDropDown').className = "dropdown"
        }
    }

    handleCreateModel (){
        if(this.props.store.AllModules.length >= 1) {
          let modalDiv=   document.getElementById('upgrade-your-plan-create-module')
          modalDiv.style.display = "block"
          modalDiv.className = "modal fade upgrade-modal in"
        }
        else {
            this.props.history.push({ pathname: "/main/module-create/wizard/choose-module-type" })

        }
    }

    render() {
        return (
          
            <div id="header-wrapper">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            {this.props.location.pathname === "/main/dashboard" ?
                                <a className="navbar-brand" href="/main/dashboard" style={{ height: "45px" }}> </a> :
                                <Fragment>
                                    <a className="navbar-brand navbar-brand-small"
                                        style={{
                                            background: "url('/images/logo.png') no-repeat",
                                            backgroundSize: "50px",
                                            width: "50px"
                                        }}
                                        href="/main/dashboard"> </a>

                                 
                                        <div className="breadcrumbs">
                                            <span><a href="/main/dashboard">Dashboard</a></span>
                                            <span className="separator">&gt;</span>

                                            {this.props.location.pathname === `/main/predictions/${this.props.match.params.childRoute}` ?
                                                <span className="title" >{this.props.Model ? this.props.Model.ModuleName : null }</span> :
                                                <span className="title" >My Account</span>
                                            }
                                        </div>
                                

                                </Fragment>}
                        </div>
                        <div className="collapse navbar-collapse" >
                            <ul className="nav navbar-nav navbar-right">
                                {this.props.location.pathname === "/main/dashboard" ?
                                    <li className="create-model">
                                        <button type="button" className="btn btn-primary"
                                            onClick={() => {
                                                this.handleCreateModel()
                                                
                                            }} >
                                            <span className="plus-white" style={{left: "14px"}} >+</span> Create Model
                                        </button>
                                    </li> : null}

                                <li className="dropdown" id="dlDropDown">
                                    <a className="dropdown-toggle user-dropdown" onClick={() => { this.handleDropdown() }} >
                                        <span className="typcn typcn-user-outline" aria-hidden="true"></span>
                                    </a>
                                    <ul className="dropdown-menu">

                                        <li>
                                            <a onClick={() => { 
                                                
                                                this.props.history.push({ pathname: '/main/my-account/query-usage' });
                                                document.getElementById('dlDropDown').className = "dropdown"
                                                
                                                }}>
                                                <span className="typcn typcn-user" aria-hidden="true"></span> My Account </a>
                                        </li>

                                        <li>
                                            <a href="/accounts/logout/" >
                                                <span className="typcn typcn-eject-outline" aria-hidden="true"></span> Logout  </a>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                            {this.props.location.pathname === "/main/dashboard" ?
                                <ul className="nav navbar-nav navigation-menu">
                                    <li className="active">
                                        <a href="/main/dashboard">Dashboard</a>
                                    </li>
                                </ul> : null}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

}

export default withRouter(inject('store')(observer(Header)))
import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'


class MyModels extends Component {

    handleDelMenu(e,id) {

        // To stop from firing a parent onclick
        e.stopPropagation();

        var btnId = document.getElementById(id);

        if (btnId.className === "btn-group module-options") {
            btnId.className = "btn-group module-options open"
        }

        else {
            btnId.className = "btn-group module-options"
        }

    }

    handleDelBtn(_id) {
        this.props.store.AllModules = this.props.store.AllModules.filter(d => {
            return d._id !== _id
        })

        this.props.store.DeleteModule(_id);
    }

    hanlelModuleClick = (id) => {
        this.props.history.push({ pathname: `/main/predictions/single-predict`, search: `id=${id}` })
    }

    render() {
        return (
            <Fragment>
                <div className="row margin-bottom-20">
                    <div className="col-xs-4">
                        <h3 className="margin-bottom-20">My Models</h3>
                    </div>

                </div>
                <div className="row projects-grid">
                    {this.props.store.AllModules.length ? this.props.store.AllModules.map((d, i) => {
                        return (

                            <div key={i * 4} className="col-xs-12 col-sm-6 col-md-3 projects-gird-cell">
                                <div onClick={() => { this.hanlelModuleClick(d._id) }} >
                                    <div className="panel panel-default" >
                                        <div className="panel-body">

                                            <div className="cell-avatar topic">
                                            </div>
                                            <span id={`moduleBtn${i}`} onClick={(e) => this.handleDelMenu(e,`moduleBtn${i}`)} className="btn-group module-options" >
                                                <span className="typcn typcn-th-menu" ></span>
                                                <ul className="dropdown-menu">
                                                    <li ><a onClick={() => this.handleDelBtn(d._id)} >Delete</a></li>
                                                </ul>
                                            </span>
                                            <h3>{d.ModuleName}</h3>
                                            <p className="description">{d.ModuleAlgo}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : <div className="alert alert-info alert-compact">
                            You don't own any models. You can <a
                                onClick={() => {
                                    this.props.history.push({ pathname: "/main/module-create/wizard/choose-module-type" })
                                }}
                            >create one</a>.
                        </div>}
                </div>

                <div className="row text-center api-loading-gif" style={{ display: "none" }}>
                    <div className="logo-loader"></div>
                </div>
            </Fragment>
        )
    }

}
export default withRouter(inject('store')(observer(MyModels)));
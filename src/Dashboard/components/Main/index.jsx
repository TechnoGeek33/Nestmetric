import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import RecentlyUsed from './components/RecentlyUsed';
import MyModels from './components/MyModels';
import { inject, observer } from 'mobx-react';

class Dashboard extends Component {

    render() {
        // console.log(this.props.store.getAllModules())
        return (

            <div className="container container-body">
                <div className="container-wrapper">
                    <div className="main-content">

                        {this.props.store.AllModules === undefined? <div className="tail-spinner" style={{ display: "block" }}></div> :
                            <Fragment>
                                <RecentlyUsed />
                                <div className="row underlined-row">
                                </div>
                                <MyModels />
                            </Fragment>}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(inject('store')(observer(Dashboard)));
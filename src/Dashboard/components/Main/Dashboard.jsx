import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import RecentlyUsed from './RecentlyUsed';
import MyModels from './MyModels';

class Dashboard extends Component {
    render() {
        return (
                <div className="container container-body">
                    <div className="container-wrapper">
                        <div className="main-content">
                            <RecentlyUsed/>
                            <div className="row underlined-row">
                            </div>
                            <MyModels/>
                        </div>
                    </div>
                </div>
        )
    }
}

export default withRouter(Dashboard);
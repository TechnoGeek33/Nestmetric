import React, { Component } from 'react';


class BillingHistory extends Component {

    render() {

        return (
            <div className="panel-nav-stacked-no-border">
                <h2 className="small-heading small-heading-top">Billing History</h2>
                <div className="list-group">
                </div>

                <div className="modal fade" id="invoice-modal" tabIndex="-1"  >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" >×</button>
                                <h4 className="modal-title" id="myModalLabel">Invoice Detail</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BillingHistory;
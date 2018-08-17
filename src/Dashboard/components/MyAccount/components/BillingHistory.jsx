import React, { Component } from 'react';


class BillingHistory extends Component {

    render() {

        return (
            <div class="panel-nav-stacked-no-border">
                <h2 class="small-heading small-heading-top">Billing History</h2>
                <div class="list-group">
                </div>

                <div class="modal fade" id="invoice-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                <h4 class="modal-title" id="myModalLabel">Invoice Detail</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BillingHistory;
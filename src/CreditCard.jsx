import React, { Component } from 'react';

class CreditCard extends Component {
    render () {
        return (
            
<div class="modal fade credit-card-modal" tabindex="-1" role="dialog"  id="credit-card-modal-payment" style={{display: "none"}}>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Change Credit Card</h4>
            </div>

            <div class="modal-body">
                <div class="row input-fields credit-card-number">
                    <div class="col-xs-4 text-right">
                        <label class="control-label">Credit Card</label>
                    </div>
                    <div class="col-xs-5">
                        <input type="text" class="form-control" maxlength="16" required="" />
                        <span class="help-block" style={{display: "none"}}></span>
                    </div>
                    <div class="col-xs-3 logos">
                        <span class="credit-card-logo visa"></span>
                        <span class="credit-card-logo mastercard"></span>
                        <span class="credit-card-logo american"></span>
                        <span class="credit-card-logo discover"></span>
                        <span class="credit-card-logo diners"></span>
                        <span class="credit-card-logo jcb"></span>
                    </div>
                </div>
                <div class="row input-fields">
                    <div class="col-xs-4 text-right">
                        <label class="control-label">Expiration Date (MM/YY)</label>
                    </div>
                    <div class="col-xs-2">
                        <input type="text" class="form-control" maxlength="5" size="5" required="" />
                        <span class="help-block" style={{display: "none"}}></span>
                    </div>
                    <div class="col-xs-1 text-right">
                        <label class="control-label">CVC</label>
                    </div>
                    <div class="col-xs-2">
                        <input type="text" class="form-control" maxlength="6" size="6" required="" />
                        <span class="help-block" style={{display: "none"}}></span>
                    </div>
                </div>


                <div class="row">
                    <div class="col-xs-8 margin-top-15">

                        <div class="row input-fields">
                            <div class="text-right col-xs-6">
                                <label class="control-label" >Coupon Code (Optional)</label>
                            </div>
                            <div class="col-xs-6">
                                <input type="text" class="form-control"  style={{display: "none"}} />

                            </div>
                        </div>

                    </div>
                    <div class="col-xs-1">
                        <div class="typcn typcn-tick" style={{display: "none"}}></div>
                    </div>
                </div>
                <div class="alert alert-danger margin-top-20" style={{display: "none"}}></div>
                <div class="change-plan-text" style={{display: "none"}}></div>
            </div>
            <div class="modal-footer">
                <div class="powered-by-stripe"></div>
                <button type="button" class="btn btn-default margin-right-10" data-dismiss="modal">Cancel</button>

                <span class="input-fields button">
                    <span class="typcn typcn-times" style={{display: "none"}}></span>
                    <span class="typcn typcn-tick"  style={{display: "none"}}></span>

                    <button type="submit" class="btn btn-primary">Save</button>
                </span>
            </div>
        </div>
    </div>
</div>
        )
    }
}

export default CreditCard;
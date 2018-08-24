import React, { Component } from 'react';


class PaymentMethod extends Component {

  render() {

    return (

      <div className="panel-nav-stacked-no-border" >
        <div className="panel panel-default payment-method">
          <div className="panel-heading">Payment Method</div>
          <div className="panel-body">

            <div className="card-info">
              <span className="credit-card-logo no-card"></span>
              You don’t have a Credit Card associated. Please add one.
                  <a className="btn btn-primary pull-right">Add Card</a>
            </div>
          </div>
        </div>

        {/* Credit Card Modal */}
        <div className="modal fade credit-card-modal" tabIndex="-1" role="dialog" id="credit-card-modal-payment">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Change Credit Card</h4>
              </div>

              <div className="modal-body">
                <div className="row input-fields credit-card-number">
                  <div className="col-xs-4 text-right">
                    <label className="control-label">Credit Card</label>
                  </div>
                  <div className="col-xs-5">
                    <input type="text" className="form-control" maxLength="16" required="" />
                    <span className="help-block" ></span>
                  </div>
                  <div className="col-xs-3 logos">
                    <span className="credit-card-logo visa"></span>
                    <span className="credit-card-logo mastercard"></span>
                    <span className="credit-card-logo american"></span>
                    <span className="credit-card-logo discover"></span>
                    <span className="credit-card-logo diners"></span>
                    <span className="credit-card-logo jcb"></span>
                  </div>
                </div>
                <div className="row input-fields">
                  <div className="col-xs-4 text-right">
                    <label className="control-label">Expiration Date (MM/YY)</label>
                  </div>
                  <div className="col-xs-2">
                    <input type="text" className="form-control" maxLength="5" size="5" required="" />
                    <span className="help-block" ></span>
                  </div>
                  <div className="col-xs-1 text-right">
                    <label className="control-label">CVC</label>
                  </div>
                  <div className="col-xs-2">
                    <input type="text" className="form-control" maxLength="6" size="6" required="" />
                    <span className="help-block" ></span>
                  </div>
                </div>


                <div className="row">
                  <div className="col-xs-8 margin-top-15">

                    <div className="row input-fields">
                      <div className="text-right col-xs-6">
                        <label className="control-label" >Coupon Code (Optional)</label>
                      </div>
                      <div className="col-xs-6">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-1">
                    <div className="typcn typcn-tick" ></div>
                  </div>
                </div>

                <div className="alert alert-danger margin-top-20" ></div>
                <div className="change-plan-text" ></div>
              </div>
              <div className="modal-footer">
                <div className="powered-by-stripe"></div>
                <button type="button" className="btn btn-default margin-right-10" data-dismiss="modal">Cancel</button>

                <span className="input-fields button">
                  <span className="typcn typcn-times" ></span>
                  <span className="typcn typcn-tick"  ></span>

                  <button type="submit" className="btn btn-primary">Save</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Credit card Modal End */}
        
        <div id="overlay" className="fade in"></div>

      </div>
    )
  }
}

export default PaymentMethod;
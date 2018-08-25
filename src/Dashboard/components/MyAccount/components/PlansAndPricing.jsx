import React, { Component, Fragment } from 'react';


class PlansAndPricing extends Component {

  render() {

    return (
      <Fragment>
        <div className="modal fade credit-card-modal" id="credit-card-modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" > </h4>
              </div>
              <form >
                <div className="modal-body">

                  <div className="row input-fields credit-card-number">
                    <div className="col-xs-4 text-right">
                      <label className="control-label">Credit Card</label>
                    </div>
                    <div className="col-xs-5">
                      <input type="text" className="form-control" maxLength="16" required="" />
                      <span className="help-block" style={{ display: 'none' }}></span>
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
                      <span className="help-block" style={{ display: 'none' }}></span>
                    </div>
                    <div className="col-xs-1 text-right">
                      <label className="control-label">CVC</label>
                    </div>
                    <div className="col-xs-2">
                      <input type="text" className="form-control" required="" />
                      <span className="help-block" style={{ display: 'none' }}></span>
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-xs-8 margin-top-15">

                      <div className="row input-fields">
                        <div className="text-right col-xs-6" >
                          <label className="control-label" >Coupon Code (Optional)</label>
                        </div>
                        <div className="col-xs-6">

                          <input type="text" className="form-control" placeholder="" style={{ width: '100%' }} />


                        </div>
                      </div>

                    </div>
                    <div className="col-xs-1">
                      <div className="typcn typcn-tick" style={{ display: 'none' }}></div>
                    </div>
                  </div>
                  <div className="alert alert-danger margin-top-20" role="alert" style={{ display: 'none' }}></div>
                  <div className="change-plan-text" style={{ display: 'none' }}></div>
                </div>
                <div className="modal-footer">
                  <div className="powered-by-stripe"></div>
                  <button type="button" className="btn btn-default margin-right-10" data-dismiss="modal">Cancel</button>

                  <span className="input-fields button">
                    <span className="typcn typcn-times" style={{ display: 'none' }}></span>
                    <span className="typcn typcn-tick" style={{ display: 'none' }}></span>
                    <img className="align-center" src="https://mlproductionmedia.azureedge.net/static/img/ajax-loader.gif" alt="loader" style={{ display: 'none' }} />
                    <button type="submit" className="btn btn-primary" >Confirm Upgrade</button>
                  </span>

                </div>
              </form>
            </div>
          </div>
        </div>


        <h2 className="small-heading small-heading-top">Change Account Plan</h2>
        <div className="row plan-grid">
          <div className="col-xs-12 col-sm-6 col-md-3 plan-grid-cell">
            <div className="panel panel-default plan-panel">
              <div className="panel-body">
                <div className="plan-tile-header">
                  <div>
                    <h3>Free</h3>
                  </div>
                  <div>
                    <span><h3 className="plan-price"><sup className="plan-dollar-sup">$ </sup>0 <sup className="plan-price-sup"> /mo</sup></h3></span>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Queries per month</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">-</h4>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Custom Models</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">1</h4>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Speed</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">Low<span className="glyphicon glyphicon-question-sign small" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="" data-original-title="20 requests per minute that allow you to do up to 4,000 queries per minute."></span></h4>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Model Size</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">Small<span className="glyphicon glyphicon-question-sign small" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="" data-original-title="Up to 300 texts per classifiers and 100 per extractors"></span></h4>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Teams</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features"> - </h4>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Support</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">Community</h4>
                  </div>
                </div>

                <div className="row plan-centered-div plan-text-current">
                  <span className="glyphicon glyphicon-ok"></span> <span>Current Plan</span>
                </div>

              </div>
            </div>
          </div>

  
          <div className="col-xs-12 col-sm-6 col-md-3 plan-grid-cell nopadding-md">
            <div className="panel panel-default plan-panel plan-panel-professional">
              <div className="panel-body panel-ribbon">

              {/* Orange ribbon */}
                <div className="ribbon orange" style={{ display: 'none' }}><span>30 days trial</span></div>

                <div className="plan-tile-header">
                  <div>
                    <h3>BASIC</h3>
                  </div>
                  <div>
                    <span><h3 className="plan-price"><sup className="plan-dollar-sup">$ </sup>49 <sup className="plan-price-sup"> /mo</sup></h3></span>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Queries per month</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">300</h4>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Custom Models</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">2</h4>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Speed</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">Medium<span className="glyphicon glyphicon-question-sign small" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="" data-original-title="60 requests per minute that allow you to do up to 12,000 queries per minute."></span></h4>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Model Size</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">Medium<span className="glyphicon glyphicon-question-sign small" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="" data-original-title="Up to 3,000 texts per classifier and 300 per extractor"></span></h4>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Teams</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">Yes<span className="glyphicon glyphicon-question-sign small" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="" data-original-title="Share Custom Models with team members. Share a common production API token."></span></h4>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Support</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">Community</h4>
                  </div>
                </div>

                <div className="row plan-centered-div">
                  <button type="button" className="btn plan-button-upgrade btn-primary">Upgrade Plan</button>
                </div>

              </div>
            </div>
          </div>
          

          <div className="col-xs-12 col-sm-6 col-md-3 plan-grid-cell nopadding-md">
            <div className="panel panel-default plan-panel">
              <div className="panel-body">
                <div className="plan-tile-header">
                  <div>
                    <h3>STANDARD</h3>
                  </div>
                  <div>
                    <span><h3 className="plan-price"><sup className="plan-dollar-sup">$ </sup>299 <sup className="plan-price-sup"> /mo</sup></h3></span>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Queries per month</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">30,000</h4>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Custom Models</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">4</h4>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Speed</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">Medium<span className="glyphicon glyphicon-question-sign small" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="" data-original-title="120 requests per minute that allow you to do up to 24,000 queries per minute."></span></h4>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Model Size</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">Medium<span className="glyphicon glyphicon-question-sign small" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="" data-original-title="Up to 30,000 texts per classifier and 1000 per extractor"></span></h4>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Teams</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">Yes<span className="glyphicon glyphicon-question-sign small" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="" data-original-title="Share Custom Models with team members. Share a common production API token."></span></h4>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Support</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">Email, Chat, Phone</h4>
                  </div>
                </div>

                <div className="row plan-centered-div">
                  <button type="button" className="btn btn-primary plan-button-upgrade">Upgrade Plan</button>
                </div>

              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 plan-grid-cell nopadding-md" style={{ display: 'block' }}>
            <div className="panel panel-default plan-panel">
              <div className="panel-body">
                <div className="plan-tile-header">
                  <div>
                    <h3>BUSINESS</h3>
                  </div>
                  <div>
                    <span><h3 className="plan-price"><sup className="plan-dollar-sup">$ </sup>999 <sup className="plan-price-sup"> /mo</sup></h3></span>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Queries per month</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">300,000</h4>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Custom Models</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">10</h4>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Speed</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">High<span className="glyphicon glyphicon-question-sign small" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="" data-original-title="120 requests per minute that allow you to do up to 24,000 queries per minute."></span></h4>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Model Size</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">Large<span className="glyphicon glyphicon-question-sign small" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="" data-original-title="Up to 40,000 samples per module"></span></h4>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Teams</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">Yes<span className="glyphicon glyphicon-question-sign small" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="" data-original-title="Share Custom Models with team members. Share a common production API token."></span></h4>
                  </div>
                </div>
                <div className="plan-tile-elems">
                  <div>
                    <h4 className="plan-text-features">Support</h4>
                  </div>
                  <div>
                    <h4 className="plan-number-features">Email, Chat, Phone</h4>
                  </div>
                </div>

                <div className="row plan-centered-div">
                  <button type="button" className="btn btn-primary plan-button-upgrade">Upgrade Plan</button>
                </div>

              </div>
            </div>
          </div>
          
        </div>

        <p className="text-center">For additional resources please <a href="">get in touch.</a></p>
      </Fragment>
    )
  }
}

export default PlansAndPricing;
import React, { Component, Fragment } from 'react';


class PlansAndPricing extends Component {

  render() {

    return (
      <Fragment>
        <div class="modal fade credit-card-modal" id="credit-card-modal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" ></h4>
              </div>
              <form >
                <div class="modal-body">

                  <div class="row input-fields credit-card-number">
                    <div class="col-xs-4 text-right">
                      <label class="control-label">Credit Card</label>
                    </div>
                    <div class="col-xs-5">
                      <input type="text" class="form-control" maxlength="16" required="" />
                      <span class="help-block" style={{ display: 'none' }}></span>
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
                      <span class="help-block" style={{ display: 'none' }}></span>
                    </div>
                    <div class="col-xs-1 text-right">
                      <label class="control-label">CVC</label>
                    </div>
                    <div class="col-xs-2">
                      <input type="text" class="form-control" required="" />
                      <span class="help-block" style={{ display: 'none' }}></span>
                    </div>
                  </div>


                  <div class="row">
                    <div class="col-xs-8 margin-top-15">

                      <div class="row input-fields">
                        <div class="text-right col-xs-6" >
                          <label class="control-label" >Coupon Code (Optional)</label>
                        </div>
                        <div class="col-xs-6">

                          <input type="text" class="form-control" placeholder="" style={{ width: '100%' }} />


                        </div>
                      </div>

                    </div>
                    <div class="col-xs-1">
                      <div class="typcn typcn-tick" style={{ display: 'none' }}></div>
                    </div>
                  </div>
                  <div class="alert alert-danger margin-top-20" role="alert" style={{ display: 'none' }}></div>
                  <div class="change-plan-text" style={{ display: 'none' }}></div>
                </div>
                <div class="modal-footer">
                  <div class="powered-by-stripe"></div>
                  <button type="button" class="btn btn-default margin-right-10" data-dismiss="modal">Cancel</button>

                  <span class="input-fields button">
                    <span class="typcn typcn-times" style={{ display: 'none' }}></span>
                    <span class="typcn typcn-tick" style={{ display: 'none' }}></span>
                    <img class="align-center" src="https://mlproductionmedia.azureedge.net/static/img/ajax-loader.gif" style={{ display: 'none' }} />
                    <button type="submit" class="btn btn-primary" >Confirm Upgrade</button>
                  </span>

                </div>
              </form>
            </div>
          </div>
        </div>


        <h2 class="small-heading small-heading-top">Change Account Plan</h2>
        <div class="row plan-grid">
          <div class="col-xs-12 col-sm-6 col-md-3 plan-grid-cell">
            <div class="panel panel-default plan-panel">
              <div class="panel-body">
                <div class="plan-tile-header">
                  <div>
                    <h3>Free</h3>
                  </div>
                  <div>
                    <span><h3 class="plan-price"><sup class="plan-dollar-sup">$ </sup>0 <sup class="plan-price-sup"> /mo</sup></h3></span>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Queries per month</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">-</h4>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Custom Models</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">1</h4>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Speed</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">Low<span class="glyphicon glyphicon-question-sign small" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="" data-original-title="20 requests per minute that allow you to do up to 4,000 queries per minute."></span></h4>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Model Size</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">Small<span class="glyphicon glyphicon-question-sign small" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="" data-original-title="Up to 300 texts per classifiers and 100 per extractors"></span></h4>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Teams</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features"> - </h4>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Support</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">Community</h4>
                  </div>
                </div>

                <div class="row plan-centered-div plan-text-current">
                  <span class="glyphicon glyphicon-ok"></span> <span>Current Plan</span>
                </div>

              </div>
            </div>
          </div>

  
          <div class="col-xs-12 col-sm-6 col-md-3 plan-grid-cell nopadding-md">
            <div class="panel panel-default plan-panel plan-panel-professional">
              <div class="panel-body panel-ribbon">

              {/* Orange ribbon */}
                <div class="ribbon orange" style={{ display: 'none' }}><span>30 days trial</span></div>

                <div class="plan-tile-header">
                  <div>
                    <h3>BASIC</h3>
                  </div>
                  <div>
                    <span><h3 class="plan-price"><sup class="plan-dollar-sup">$ </sup>49 <sup class="plan-price-sup"> /mo</sup></h3></span>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Queries per month</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">300</h4>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Custom Models</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">2</h4>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Speed</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">Medium<span class="glyphicon glyphicon-question-sign small" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="" data-original-title="60 requests per minute that allow you to do up to 12,000 queries per minute."></span></h4>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Model Size</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">Medium<span class="glyphicon glyphicon-question-sign small" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="" data-original-title="Up to 3,000 texts per classifier and 300 per extractor"></span></h4>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Teams</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">Yes<span class="glyphicon glyphicon-question-sign small" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="" data-original-title="Share Custom Models with team members. Share a common production API token."></span></h4>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Support</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">Community</h4>
                  </div>
                </div>

                <div class="row plan-centered-div">
                  <button type="button" class="btn plan-button-upgrade btn-primary">Upgrade Plan</button>
                </div>

              </div>
            </div>
          </div>
          

          <div class="col-xs-12 col-sm-6 col-md-3 plan-grid-cell nopadding-md">
            <div class="panel panel-default plan-panel">
              <div class="panel-body">
                <div class="plan-tile-header">
                  <div>
                    <h3>STANDARD</h3>
                  </div>
                  <div>
                    <span><h3 class="plan-price"><sup class="plan-dollar-sup">$ </sup>299 <sup class="plan-price-sup"> /mo</sup></h3></span>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Queries per month</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">30,000</h4>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Custom Models</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">4</h4>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Speed</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">Medium<span class="glyphicon glyphicon-question-sign small" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="" data-original-title="120 requests per minute that allow you to do up to 24,000 queries per minute."></span></h4>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Model Size</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">Medium<span class="glyphicon glyphicon-question-sign small" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="" data-original-title="Up to 30,000 texts per classifier and 1000 per extractor"></span></h4>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Teams</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">Yes<span class="glyphicon glyphicon-question-sign small" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="" data-original-title="Share Custom Models with team members. Share a common production API token."></span></h4>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Support</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">Email, Chat, Phone</h4>
                  </div>
                </div>

                <div class="row plan-centered-div">
                  <button type="button" class="btn btn-primary plan-button-upgrade">Upgrade Plan</button>
                </div>

              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3 plan-grid-cell nopadding-md" style={{ display: 'block' }}>
            <div class="panel panel-default plan-panel">
              <div class="panel-body">
                <div class="plan-tile-header">
                  <div>
                    <h3>BUSINESS</h3>
                  </div>
                  <div>
                    <span><h3 class="plan-price"><sup class="plan-dollar-sup">$ </sup>999 <sup class="plan-price-sup"> /mo</sup></h3></span>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Queries per month</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">300,000</h4>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Custom Models</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">10</h4>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Speed</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">High<span class="glyphicon glyphicon-question-sign small" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="" data-original-title="120 requests per minute that allow you to do up to 24,000 queries per minute."></span></h4>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Model Size</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">Large<span class="glyphicon glyphicon-question-sign small" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="" data-original-title="Up to 40,000 samples per module"></span></h4>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Teams</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">Yes<span class="glyphicon glyphicon-question-sign small" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="" data-original-title="Share Custom Models with team members. Share a common production API token."></span></h4>
                  </div>
                </div>
                <div class="plan-tile-elems">
                  <div>
                    <h4 class="plan-text-features">Support</h4>
                  </div>
                  <div>
                    <h4 class="plan-number-features">Email, Chat, Phone</h4>
                  </div>
                </div>

                <div class="row plan-centered-div">
                  <button type="button" class="btn btn-primary plan-button-upgrade">Upgrade Plan</button>
                </div>

              </div>
            </div>
          </div>
          
        </div>

        <p class="text-center">For additional resources please <a href="">get in touch.</a></p>
      </Fragment>
    )
  }
}

export default PlansAndPricing;
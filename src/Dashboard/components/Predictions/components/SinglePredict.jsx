import React, {Component ,Fragment} from 'react';


class SinglePredict extends Component {

    render () {
      

        return (
  <div className="col-md-10">
            <div class="panel-nav-stacked-no-border" >
            {this.props.Model ? <Fragment> <div class="panel panel-default panel-public-description">
<div class="panel-body">
<div class="row">
<div class="col-md-4">
<div class="row">
<div class="col-md-3 module-symbol">

<div class="cell-avatar topic"   title="">
</div>

</div>
<div class="col-md-9">
<h3 class="margin-top-10" >{this.props.Model.ModuleName}</h3>
<h5 >{this.props.Model.ModuleAlgo}</h5>
</div>
</div>
</div>

</div>
</div>
</div>

<div class="container-test-api" id="try-form">

<div  class="module-test-api classifier-multi-label">


<div class="dialog-box dialog-box-alert">
<div class="modal fade" tabindex="-1" role="dialog"  id="dialog-auto-id-vsu2yrx05t">
<div class="modal-dialog" role="document">
<div class="modal-content">
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">×</span>
</button>


<h2 data-bind="text: title">Out of queries</h2>
<p data-bind="text: message" class="message">You’ve reached the request limit for your Plan. Please upgrade to have more requests available.</p>
<a  class="btn btn-primary btn-lg green" href="/main/my-account/tab/change-plan/">Upgrade</a>


</div>
</div>
</div>
</div>


<div class="query-col">
<h2 style={{padding: "0px 0 18px 0"}}>Test with your own text
</h2>
{this.props.Model.selectedfeatures.map( (d) => {

  return (
    <Fragment>
   <h4>{d.title}</h4>




<form  class="text-form">
<div class="form-group margin-top-15">
<input  class="form-control" id="text-input-field" />

</div>

</form>

    </Fragment>
  )
})}

<button type="submit" class="btn btn-primary" >Classify Text</button>

</div>


<div data-bind="css: resultColTypeClass" class="result-col result-col-type-table">




<div class="result-loading-wrapper"  
style={{display:'none'}}
>
<div class="logo-loader"></div>
</div>


<div  class="code-view-results" style={{display:'none'}}>
<div class="result-header">
<div>
  HTTP/1.1
  <span class="value" >200</span>
  <span >OK</span>
</div>

<div >
  <div>
    <span >Content-Type</span>:
    <span class="value">application/json</span>
  </div>
</div>

</div>

<div class="result-body">

<div class="code-block">
<pre ><span class="token punctuation">[</span>
<span class="token punctuation"></span>
<span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"Great out of the box CRM features. Non-profits get 10 licenses free and discounts on the additional license. Chatter is a great communication tool."</span><span class="token punctuation">,</span>
<span class="token property">"external_id"</span><span class="token operator">:</span> <span class="token null">null</span><span class="token punctuation">,</span>
<span class="token property">"error"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token property">"classifications"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token punctuation"></span>
<span class="token property">"tag_name"</span><span class="token operator">:</span> <span class="token string">"Pricing"</span><span class="token punctuation">,</span>
<span class="token property">"tag_id"</span><span class="token operator">:</span> <span class="token number">26615327</span><span class="token punctuation">,</span>
<span class="token property">"confidence"</span><span class="token operator">:</span> <span class="token number">0.783</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation"></span>
<span class="token property">"tag_name"</span><span class="token operator">:</span> <span class="token string">"Features"</span><span class="token punctuation">,</span>
<span class="token property">"tag_id"</span><span class="token operator">:</span> <span class="token number">26615326</span><span class="token punctuation">,</span>
<span class="token property">"confidence"</span><span class="token operator">:</span> <span class="token number">0.566</span>
<span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token punctuation">]</span></pre>
</div>

</div>
</div>

<div class="table-view-results" >
<h2>Results</h2>


  <div class="row row-header">
    <div class="col-md-9 col-header">Tag</div>
    <div class="col-md-3 col-header probability">Confidence</div>
  </div>

  <div class="path">
    <div class="row" >
      <div class="col-md-9 col-label" >Pricing</div>
      <div class="col-md-3 col-probability" >78.3%</div>
    </div>
  
    <div class="row" data-bind="foreach: {data: paths, as: 'step'}">
      <div class="col-md-9 col-label" >Features</div>
      <div class="col-md-3 col-probability" >56.6%</div>
    </div>
  </div>


<div class="table-view-error"></div>

</div>

</div>

</div>

</div>
<p class="pull-right margin-top-20" data-bind="visible: tabNav" style={{display:'none'}}>
Not the result you expected? Build more accuracy by <a data-bind="click: goToTrain">training</a> the model.
</p> </Fragment> : <div className="tail-spinner" style={{ display: "block" }}></div> }


</div>
</div>
        )
    }
}

export default SinglePredict;
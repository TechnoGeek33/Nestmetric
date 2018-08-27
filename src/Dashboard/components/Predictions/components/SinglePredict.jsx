import React, {Component ,Fragment} from 'react';


class SinglePredict extends Component {

    render () {
      
// console.log(this.props.Model.length)
        return (
  <div className="col-md-10">
            <div className="panel-nav-stacked-no-border" >
            {this.props.Model ? <Fragment> <div className="panel panel-default panel-public-description">
<div className="panel-body">
<div className="row">
<div className="col-md-4">
<div className="row">
<div className="col-md-3 module-symbol">

<div className="cell-avatar topic"   title="">
</div>

</div>
<div className="col-md-9">
<h3 className="margin-top-10" >{this.props.Model.ModuleName}</h3>
<h5 >{this.props.Model.ModuleAlgo}</h5>
</div>
</div>
</div>

</div>
</div>
</div>

<div className="container-test-api" id="try-form">

<div  className="module-test-api classifier-multi-label">


<div className="dialog-box dialog-box-alert">
<div className="modal fade"    id="dialog-auto-id-vsu2yrx05t">
<div className="modal-dialog" >
<div className="modal-content">
<button type="button" className="close" >
<span aria-hidden="true">×</span>
</button>


<h2 >Out of queries</h2>
<p className="message">You’ve reached the request limit for your Plan. Please upgrade to have more requests available.</p>
<a  className="btn btn-primary btn-lg green" href="/main/my-account/tab/change-plan/">Upgrade</a>


</div>
</div>
</div>
</div>


<div className="query-col">
<h2 style={{padding: "0px 0 18px 0"}}>Test with your own text
</h2>
{this.props.Model.selectedfeatures.map( (d, i) => {

  return (
    <Fragment key={i*4}>
   <h4>{d.title}</h4>




<form  className="text-form">
<div className="form-group margin-top-15">
<input  className="form-control" id="text-input-field" />

</div>

</form>

    </Fragment>
  )
})}

<button type="submit" className="btn btn-primary" >Classify Text</button>

</div>


<div  className="result-col result-col-type-table">




<div className="result-loading-wrapper"  
style={{display:'none'}}
>
<div className="logo-loader"></div>
</div>


<div  className="code-view-results" style={{display:'none'}}>
<div className="result-header">
<div>
  HTTP/1.1
  <span className="value" >200</span>
  <span >OK</span>
</div>

<div >
  <div>
    <span >Content-Type</span>:
    <span className="value">application/json</span>
  </div>
</div>

</div>

<div className="result-body">

<div className="code-block">
<pre ><span className="token punctuation">[</span>
<span className="token punctuation"></span>
<span className="token property">"text"</span><span className="token operator">:</span> <span className="token string">"Great out of the box CRM features. Non-profits get 10 licenses free and discounts on the additional license. Chatter is a great communication tool."</span><span className="token punctuation">,</span>
<span className="token property">"external_id"</span><span className="token operator">:</span> <span className="token null">null</span><span className="token punctuation">,</span>
<span className="token property">"error"</span><span className="token operator">:</span> <span className="token boolean">false</span><span className="token punctuation">,</span>
<span className="token property">"classifications"</span><span className="token operator">:</span> <span className="token punctuation">[</span>
<span className="token punctuation"></span>
<span className="token property">"tag_name"</span><span className="token operator">:</span> <span className="token string">"Pricing"</span><span className="token punctuation">,</span>
<span className="token property">"tag_id"</span><span className="token operator">:</span> <span className="token number">26615327</span><span className="token punctuation">,</span>
<span className="token property">"confidence"</span><span className="token operator">:</span> <span className="token number">0.783</span>
<span className="token punctuation">}</span><span className="token punctuation">,</span>
<span className="token punctuation"></span>
<span className="token property">"tag_name"</span><span className="token operator">:</span> <span className="token string">"Features"</span><span className="token punctuation">,</span>
<span className="token property">"tag_id"</span><span className="token operator">:</span> <span className="token number">26615326</span><span className="token punctuation">,</span>
<span className="token property">"confidence"</span><span className="token operator">:</span> <span className="token number">0.566</span>
<span className="token punctuation">}</span>
<span className="token punctuation">]</span>
<span className="token punctuation">}</span>
<span className="token punctuation">]</span></pre>
</div>

</div>
</div>

<div className="table-view-results" >
<h2>Results</h2>


  <div className="row row-header">
    <div className="col-md-9 col-header">Tag</div>
    <div className="col-md-3 col-header probability">Confidence</div>
  </div>

  <div className="path">
    <div className="row" >
      <div className="col-md-9 col-label" >Pricing</div>
      <div className="col-md-3 col-probability" >78.3%</div>
    </div>
  
    <div className="row">
      <div className="col-md-9 col-label" >Features</div>
      <div className="col-md-3 col-probability" >56.6%</div>
    </div>
  </div>


<div className="table-view-error"></div>

</div>

</div>

</div>

</div>
<p className="pull-right margin-top-20"  style={{display:'none'}}>
Not the result you expected? Build more accuracy by <a >training</a> the model.
</p> </Fragment> : <div className="tail-spinner" style={{ display: "block" }}></div> }


</div>
</div>
        )
    }
}

export default SinglePredict;
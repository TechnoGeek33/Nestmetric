import React, { Component } from 'react';

class Sample extends Component {
    render() {
        return (

            <div>
                {/* Header */}
                <div id="header-wrapper" data-bind="visible: appState.navbarVisible">
                    <nav className="navbar navbar-default" role="navigation" data-bind="css: { 'with-notification': user() &amp;&amp; user().apiQueryLimitExceeded() }">
                        <div className="container-fluid">

                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#monkeylearn-navbar-collapse-1">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>

                                <a className="navbar-brand navbar-brand-small" href="/main/dashboard/"></a>
                                <breadcrumbs params="module: currentModule">
                                    <div className="breadcrumbs">
                                        <span><a data-bind="attr: {href: parent_url}, text: parent_label" href="/main/explore/">Explore</a></span>
                                        <span className="separator">&gt;</span>
                                        <span className="title" data-bind="text: module().name">Sentiment Analysis</span>

                                    </div>
                                </breadcrumbs>
                            </div>

                            <div className="collapse navbar-collapse" id="monkeylearn-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-right">

                                    <li className="dropdown" id="dlDropDown">
                                        <a href="#" className="dropdown-toggle user-dropdown" data-toggle="dropdown">
                                            <span className="typcn typcn-user-outline" aria-hidden="true"></span>
                                        </a>
                                        <ul className="dropdown-menu">


                                            <li>
                                                <a href="/main/my-account/">
                                                    <span className="typcn typcn-user" aria-hidden="true"></span> My Account
                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="http://help.monkeylearn.com/">
                                                    <span className="glyphicon glyphicon-question-sign"></span> Help Docs
                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://monkeylearn.com/api/">
                                                    <span className="typcn typcn-code" aria-hidden="true"></span> API Docs
                </a>
                                            </li>
                                            <li>
                                                <a href="/accounts/logout/">
                                                    <span className="glyphicon glyphicon-log-out" aria-hidden="true"></span> Logout
                </a>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </nav>

                </div>
                {/* Header End */}

                {/* Body */}
                <div className="container container-body container-body-extractor">
  <div className="container-wrapper">
    <div className="panel panel-default panel-content-wrapper panel-main panel-public">
      <div className="panel-body">
    <div className="row">
      <div  className="col-md-2">
        <div className="menu-nav-stacked">
          <ul className="nav nav-pills nav-stacked-module" >
            <li className="">
              <a href="#">
                <span className="typcn margin-right-5 typcn-input-checked" ></span>
                <span >Demo</span>
              </a>
            </li>
          
            <li data-bind="css: { active: active, disabled: disabled }" className="active">
              <a href="#">
                <span className="typcn margin-right-5 typcn-document" ></span>
                <span >Batch</span>
              </a>
            </li>
          
            <li data-bind="css: { active: active, disabled: disabled }">
              <a href="#">
                <span className="typcn margin-right-5 typcn-code-outline" ></span>
                <span >API</span>
              </a>
            </li>
          
            <li data-bind="css: { active: active, disabled: disabled }">
              <a href="#">
                <span className="typcn margin-right-5 typcn-puzzle" ></span>
                <span >Integrate</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-10">
        <div className="panel-nav-stacked-no-border" data-bind="component: {
                          name: componentName,
                          params: componentParams
                        }, visible: $component.tabNav.activeTemplate() === template" style={{display: "none"}}>
  <div className="panel panel-default panel-public-description">
    <div className="panel-body">
      <div className="row">
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-3 module-symbol">
              
            </div>
            <div className="col-md-9">
              <h3 className="margin-top-10" data-bind="text: project().name">Sentiment Analysis</h3>
              <h5 data-bind="text: project().getPrettyLanguage()">English</h5>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="module-description" data-bind="text: project().longDescription">This is a generic sentiment analysis classNameifier for texts in English. It works great in any kind of texts. If you are not sure of which sentiment analysis classNameifier to use, use this one.</div>
          <div className="sample-data margin-top-10">
              <span className="tag category-path">
                <span className="value" data-bind="text: name">Negative</span>
              </span>
            
              <span className="tag category-path">
                <span className="value" data-bind="text: name">Neutral</span>
              </span>
            
              <span className="tag category-path">
                <span className="value" data-bind="text: name">Positive</span>
              </span>
          </div>
        </div>
      </div>
    </div>
  </div>
<div className="container-test-api" id="try-form">

  <div data-bind="css: module().getExactModuleType()" className="module-test-api classNameifier-single-label">


    <div data-bind="css: {wide: selectedInputType() === 'file'}" className="query-col">
      <h2>Test with your own text</h2>

        <form data-bind="submit: submitText" className="text-form">
          <div className="form-group margin-top-15">
            <textarea data-bind="textInput: textInput,
                                 css: {extractor: module().isExtractor()}
                                 attr: {placeholder: getInputPlaceholder()}" className="form-control" id="text-input-field" name="text"></textarea>

          </div>

          <button type="submit" className="btn btn-primary" data-bind="css: { disabled: isTextSubmitDisabled },
                             text: getSubmitLabel()">classNameify Text</button>
        </form>
    </div>

      <div data-bind="css: resultColTypeclassName" className="result-col result-col-type-table">
        
    <div className="switch">
      <div data-bind="text: label,
                      css: {state: (isOn) ? 'state-on' : 'state-off'}" className="switch-label state">JSON</div>

      <div className="onoffswitch">
        <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" data-bind="checked: isOn,
                    attr: {id: elementId}" id="switch-auto-id-zzbzuesq17"/>
        <label className="onoffswitch-label" data-bind="attr: {for: elementId}" for="switch-auto-id-zzbzuesq17">
          <span className="onoffswitch-inner"></span>
          <span className="onoffswitch-switch"></span>

        </label>
      </div>
    </div>


        <div className="result-loading-wrapper" data-bind="visible: textRequestInProgress" style={{display: "none"}}>
          <div className="logo-loader"></div>
        </div>


          <div data-bind="visible: resultsAsCode()" className="code-view-results" style={{display: "none"}}>
            <div className="result-header">
              <div>
                HTTP/1.1
                <span className="value" data-bind="text: textRequestResult().status">200</span>
                <span data-bind="text: textRequestResult().statusText">OK</span>
              </div>

              <div data-bind="foreach: textRequestResult().headers">
                <div>
                  <span data-bind="text: $data[0]">Content-Type</span>:
                  <span data-bind="text: $data[1]" className="value">application/json</span>
                </div>
              </div>

            </div>

            <div className="result-body">
             
  <div className="code-block">
    <pre data-bind="css: {'line-numbers': showLineNumbers}"><code data-bind="html: content,
                                                                    css: getLanguageclassName()" className="language-json"><span className="token punctuation">[</span>
  <span className="token punctuation"></span>
    <span className="token property">"text"</span><span className="token operator">:</span> <span className="token string">"This is the best sentiment analysis tool ever!!!"</span><span className="token punctuation">,</span>
    <span className="token property">"external_id"</span><span className="token operator">:</span> <span className="token null">null</span><span className="token punctuation">,</span>
    <span className="token property">"error"</span><span className="token operator">:</span> <span className="token boolean">false</span><span className="token punctuation">,</span>
    <span className="token property">"classNameifications"</span><span className="token operator">:</span> <span className="token punctuation">[</span>
      <span className="token punctuation"></span>
        <span className="token property">"tag_name"</span><span className="token operator">:</span> <span className="token string">"Positive"</span><span className="token punctuation">,</span>
        <span className="token property">"tag_id"</span><span className="token operator">:</span> <span className="token number">54863118</span><span className="token punctuation">,</span>
        <span className="token property">"confidence"</span><span className="token operator">:</span> <span className="token number">1</span>
      <span className="token punctuation">}</span>
    <span className="token punctuation">]</span>
  <span className="token punctuation">}</span>
<span className="token punctuation">]</span></code>
</pre>
  </div>

            </div>
          </div>

          <div className="table-view-results" data-bind="if: !resultsAsCode() &amp;&amp; tableViewDataComputed()">
            <h2>Results</h2>

         
                <div className="row row-header">
                  <div className="col-md-9 col-header">Tag</div>
                  <div className="col-md-3 col-header probability">Confidence</div>
                </div>

                <div className="path" data-bind="foreach: {data: tableViewDataComputed().items, as: 'paths'}">
                  <div className="row" data-bind="foreach: {data: paths, as: 'step'}">
                    <div className="col-md-9 col-label" data-bind="text: $component.getTrimmedTagName(step.tag_name)">Positive</div>
                    <div className="col-md-3 col-probability" data-bind="text: $component.fmtPct(step.confidence) + '%'">100%</div>
                  </div>
                </div>
          

          

          </div>
      </div>
  </div>
</div>
<p className="pull-right margin-top-20" data-bind="visible: tabNav" style={{display: "none"}}>
  Not the result you expected? Build more accuracy by <a data-bind="click: goToTrain">training</a> the model.
</p>
</div>
      
       
<div className="batch-processing">
  <h2>Batch Processing</h2>
  <div className="panel panel-default">
    <div className="panel-body">
      <div className="csv-xls"></div>
      <p>Process your file using <span className="module-name" data-bind="text: module().name">Sentiment Analysis</span></p>
      <button type="button" className="btn btn-primary" data-bind="click: clickUpload">+ New batch</button>
    </div>
  </div>
</div>  
</div>
            </div>
            </div>
</div>

</div>
            </div>
            </div>
        )
    }
}

export default (Sample)
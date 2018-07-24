import React, { Component } from 'react';

class NavBar extends Component {

    render() {

        return (
          <div>
          
            <navbar>
 {/* <div className="tail-spinner" /> */}


<div id="header-wrapper">
<nav class="navbar navbar-default">
<div class="container-fluid">


<div class="navbar-header">
<button type="button" class="navbar-toggle">
<span class="sr-only">Toggle navigation</span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>


<a class="navbar-brand" href="/main/dashboard/"></a>

</div>


<div class="collapse navbar-collapse" >
<ul class="nav navbar-nav navbar-right">


<li class="create-model">
<button type="button" class="btn btn-primary">
  <span class="plus-white">+</span> Create Model
</button>
</li>

<li class="dropdown">
<a href="#" class="dropdown-toggle user-dropdown" >
<span class="typcn typcn-user-outline" aria-hidden="true"></span>
</a>
<ul class="dropdown-menu">

<hr/>

<li>
  <a href="/main/my-account/">
    <span class="typcn typcn-user" aria-hidden="true"></span> My Account
  </a>
</li>


<li>
  <a href="/accounts/logout/">
    <span class="glyphicon glyphicon-log-out" aria-hidden="true"></span> Logout
  </a>
</li>
</ul>
</li>

</ul>
<ul class="nav navbar-nav navigation-menu">
<li data-bind="css: {active: currentPathObservable() === '/main/dashboard/'}" class="">
<a href="/main/dashboard/">Dashboard</a>
</li>

<li data-bind="css: {active: currentPathObservable() === '/main/explore/'}" class="active">
<a href="/main/explore/">
  Explore
</a>
</li>
</ul>

</div>
</div>
</nav>
</div>
</navbar>

<div className="container container-body">

<div className="container-wrapper">
<div className="main-content">

<explore >
<div className="row margin-top-20">
<div className="col-xs-6 col-xs-offset-3">
  <div className="right-inner-addon">
    <i className="glyphicon glyphicon-search" />
    <input type="search" id="filter-input" className="form-control" placeholder="Find models ready to use on your Project" data-bind="textInput: currentSearch" />
  </div>
</div>
</div>
<div className="margin-top-20" data-bind="foreach: chunk(moduleCategories, 6)">
<div className="row module-categories" data-bind="foreach: $data">
  <div className="col-md-2 col-sm-4 col-xs-6">
    <div className="panel panel-default" data-bind="css: {selected: $component.selectedIndustry().indexOf(id) > -1}">
      <div className="panel-body" >Classification</div>
    </div>
  </div>
  <div className="col-md-2 col-sm-4 col-xs-6">
    <div className="panel panel-default" data-bind="css: {selected: $component.selectedIndustry().indexOf(id) > -1}">
      <div className="panel-body" data-bind="text: name,
                 click: $component.selectIndustry.bind($component, id)">Extraction</div>
    </div>
  </div>
  <div className="col-md-2 col-sm-4 col-xs-6">
    <div className="panel panel-default" data-bind="css: {selected: $component.selectedIndustry().indexOf(id) > -1}">
      <div className="panel-body" data-bind="text: name,
                 click: $component.selectIndustry.bind($component, id)">Sentiment</div>
    </div>
  </div>
  <div className="col-md-2 col-sm-4 col-xs-6">
    <div className="panel panel-default" data-bind="css: {selected: $component.selectedIndustry().indexOf(id) > -1}">
      <div className="panel-body" data-bind="text: name,
                 click: $component.selectIndustry.bind($component, id)">Topic</div>
    </div>
  </div>
  <div className="col-md-2 col-sm-4 col-xs-6">
    <div className="panel panel-default" data-bind="css: {selected: $component.selectedIndustry().indexOf(id) > -1}">
      <div className="panel-body" data-bind="text: name,
                 click: $component.selectIndustry.bind($component, id)">Social Media</div>
    </div>
  </div>
  <div className="col-md-2 col-sm-4 col-xs-6">
    <div className="panel panel-default" data-bind="css: {selected: $component.selectedIndustry().indexOf(id) > -1}">
      <div className="panel-body" data-bind="text: name,
                 click: $component.selectIndustry.bind($component, id)">Content Moderation</div>
    </div>
  </div>
</div>
<div className="row module-categories" data-bind="foreach: $data">
  <div className="col-md-2 col-sm-4 col-xs-6">
    <div className="panel panel-default" data-bind="css: {selected: $component.selectedIndustry().indexOf(id) > -1}">
      <div className="panel-body" data-bind="text: name,
                 click: $component.selectIndustry.bind($component, id)">Business Intelligence</div>
    </div>
  </div>
  <div className="col-md-2 col-sm-4 col-xs-6">
    <div className="panel panel-default" data-bind="css: {selected: $component.selectedIndustry().indexOf(id) > -1}">
      <div className="panel-body" data-bind="text: name,
                 click: $component.selectIndustry.bind($component, id)">Productivity</div>
    </div>
  </div>
  <div className="col-md-2 col-sm-4 col-xs-6">
    <div className="panel panel-default" data-bind="css: {selected: $component.selectedIndustry().indexOf(id) > -1}">
      <div className="panel-body" data-bind="text: name,
                 click: $component.selectIndustry.bind($component, id)">Services</div>
    </div>
  </div>
  <div className="col-md-2 col-sm-4 col-xs-6">
    <div className="panel panel-default" data-bind="css: {selected: $component.selectedIndustry().indexOf(id) > -1}">
      <div className="panel-body" data-bind="text: name,
                 click: $component.selectIndustry.bind($component, id)">Customer Support</div>
    </div>
  </div>
  <div className="col-md-2 col-sm-4 col-xs-6">
    <div className="panel panel-default" data-bind="css: {selected: $component.selectedIndustry().indexOf(id) > -1}">
      <div className="panel-body" data-bind="text: name,
                 click: $component.selectIndustry.bind($component, id)">Marketing &amp; Sales</div>
    </div>
  </div>
  <div className="col-md-2 col-sm-4 col-xs-6">
    <div className="panel panel-default" data-bind="css: {selected: $component.selectedIndustry().indexOf(id) > -1}">
      <div className="panel-body" data-bind="text: name,
                 click: $component.selectIndustry.bind($component, id)">E-commerce</div>
    </div>
  </div>
</div>
</div>
<div className="row underlined-row margin-top-20">
</div>
<h3 className="text-center margin-bottom-20" data-bind="visible: !currentSearch().length">Popular Models</h3>
<h3 className="text-center margin-bottom-20" data-bind="visible: currentSearch().length" style={{display: 'none'}}>
Results for "<span className="text-primary" data-bind="text: currentSearch()" />"
</h3>
<module-cell-list params="showFeatured: false,
                modules: modules,
                showUser: function(){return false}" data-bind="visible: modules().length" style={{}}>
{/* ko fastForEach: chunks */}
<div data-bind="fastForEach: $data" className="row projects-grid">
  <module-cell params="showFeatured: $component.showFeatured,
                module: $data,
                showUser: $component.showUser">
    {/* ko with: module */}
    <div className="col-xs-12 col-sm-6 col-md-3 projects-gird-cell">
      <div data-bind="attr: { id: 'module-' + id }" id="module-cl_sGdE8hD9">
        <div className="panel panel-default" data-bind="click: $component.goToModule.bind($component)">
          <div className="panel-body">
            <module-symbol params="module: $data">
              <div className="cell-avatar topic" data-bind="css: moduleClass,
 tooltip: { delay: 300,
            title: moduleTypeDisplay,
            placement: 'top' }" data-original-title title>
              </div>
            </module-symbol>
            {/* clickBubble prevents the parent click binding to fire*/}
            <span className="btn-group module-options" data-bind="click: $component.clickOptions.bind($component), clickBubble: false">
              <span data-bind="visible: canEdit(), attr: {id: 'options-' + $component.randomId}" className="glyphicon glyphicon-option-vertical" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="options-aKDYecfJMaoRao" style={{display: 'none'}} />
              <ul className="dropdown-menu">
                <li><a data-bind="click: $component.showDeleteModuleModal.bind($component)">Delete</a></li>
              </ul>
            </span>
            <h3 data-bind="text: name">NPS SaaS Feedback Classifier</h3>
            <p className="description" data-bind="html: getDescriptionDisplay">Classify NPS comments for SaaS products into tags such as Ease of Use, Features, Pricing and more....</p>
            <div className="panel-footer">
              <user-avatar className="pull-right" params="user: owner" data-bind="visible: $component.showUser($data)" style={{display: 'none'}}>
                {/* ko with: user */}
                {/* ko if: avatarSamallUrl() */}{/* /ko */}
                {/* ko if: !avatarSamallUrl() */}
                <span className="cell-avatar-sm owner-avatar" data-bind="text: nameInitials(),
          tooltip: { delay: 400, title: fullName,
                         placement: 'bottom' },
          style: { backgroundColor: chooseColor() }" data-original-title title style={{backgroundColor: 'rgb(190, 147, 130)'}}>HC</span>
                {/* /ko */}
                {/* /ko */}
              </user-avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /ko */}
    <confirm-modal params="modal_id: 'delete-module-' + randomId,
          form_id: 'delete-module-form-' + randomId,
          title: 'Delete Model',
          submit_handler: deleteModule.bind($component),
          modal_title: 'Delete Model',
          modal_info: 'This will also delete all your model\'s data. This action cannot be undone.',
          modal_question: 'Are you sure you want to delete <strong>' + module.name() + '</strong> model?',
          confirm_button: 'Yes, delete model',
          danger: true,
          confirmButtonDisabled: deleting">
      <div className="modal fade" data-bind="attr: {id: modal_id}" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" id="delete-module-aKDYecfJMaoRao">
        <div className="modal-dialog">
          <form method="POST" action data-bind="attr: {id: form_id}, submit: submit_handler" id="delete-module-form-aKDYecfJMaoRao">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title" id="myModalLabel" data-bind="text: modal_title">Delete Model</h4>
              </div>
              <div className="modal-body">
                <div className="alert alert-danger" data-bind="css: {'alert-info': !danger, 'alert-danger': danger}">
                  <strong>Warning:</strong>
                  <span data-bind="html: modal_info">This will also delete all your model's data. This action cannot be undone.</span>
                </div>
                <p data-bind="html: modal_question">Are you sure you want to delete <strong>NPS SaaS Feedback Classifier</strong> model?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <img data-bind="visible: confirmButtonDisabled, attr: { src: window.staticUrl + 'img/ajax-loader.gif' }" src="https://mlproductionmedia.azureedge.net/static/img/ajax-loader.gif" style={{display: 'none'}} />
                <button type="submit" className="btn btn-danger" data-bind="css: {'btn-primary': !danger, 'btn-danger': danger},
                   text: confirm_button,
                   disable: confirmButtonDisabled">Yes, delete model</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </confirm-modal>
  </module-cell>
  <module-cell params="showFeatured: $component.showFeatured,
                module: $data,
                showUser: $component.showUser">
    {/* ko with: module */}
    <div className="col-xs-12 col-sm-6 col-md-3 projects-gird-cell">
      <div data-bind="attr: { id: 'module-' + id }" id="module-cl_Jx8qzYJh">
        <div className="panel panel-default" data-bind="click: $component.goToModule.bind($component)">
          <div className="panel-body">
            <module-symbol params="module: $data">
              <div className="cell-avatar sentiment" data-bind="css: moduleClass,
 tooltip: { delay: 300,
            title: moduleTypeDisplay,
            placement: 'top' }" data-original-title title>
              </div>
            </module-symbol>
            {/* clickBubble prevents the parent click binding to fire*/}
            <span className="btn-group module-options" data-bind="click: $component.clickOptions.bind($component), clickBubble: false">
              <span data-bind="visible: canEdit(), attr: {id: 'options-' + $component.randomId}" className="glyphicon glyphicon-option-vertical" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="options-J5d83KbRctjQlr" style={{display: 'none'}} />
              <ul className="dropdown-menu">
                <li><a data-bind="click: $component.showDeleteModuleModal.bind($component)">Delete</a></li>
              </ul>
            </span>
            <h3 data-bind="text: name">Sentiment Analysis</h3>
            <p className="description" data-bind="html: getDescriptionDisplay">Detect sentiment in texts (positive, negative or neutral). This model was trained over different domains....</p>
            <div className="panel-footer">
              <user-avatar className="pull-right" params="user: owner" data-bind="visible: $component.showUser($data)" style={{display: 'none'}}>
                {/* ko with: user */}
                {/* ko if: avatarSamallUrl() */}
                <img className="owner-avatar img-circle" data-bind="attr: {src: avatarSamallUrl(),
                alt: fullName },
          tooltip: { delay: 400, title: isStaff ? fullName() + ' from MonkeyLearn\'s team': fullName(),
                         placement: 'bottom' }" src="https://mlproductionmedia.azureedge.net/media/users/avatars/10_PU0T10I.50x50_q99_crop-smart.png" alt="Rodrigo Stecanella" data-original-title title />
                {/* /ko */}
                {/* ko if: !avatarSamallUrl() */}{/* /ko */}
                {/* /ko */}
              </user-avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /ko */}
    <confirm-modal params="modal_id: 'delete-module-' + randomId,
          form_id: 'delete-module-form-' + randomId,
          title: 'Delete Model',
          submit_handler: deleteModule.bind($component),
          modal_title: 'Delete Model',
          modal_info: 'This will also delete all your model\'s data. This action cannot be undone.',
          modal_question: 'Are you sure you want to delete <strong>' + module.name() + '</strong> model?',
          confirm_button: 'Yes, delete model',
          danger: true,
          confirmButtonDisabled: deleting">
      <div className="modal fade" data-bind="attr: {id: modal_id}" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" id="delete-module-J5d83KbRctjQlr">
        <div className="modal-dialog">
          <form method="POST" action data-bind="attr: {id: form_id}, submit: submit_handler" id="delete-module-form-J5d83KbRctjQlr">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title" id="myModalLabel" data-bind="text: modal_title">Delete Model</h4>
              </div>
              <div className="modal-body">
                <div className="alert alert-danger" data-bind="css: {'alert-info': !danger, 'alert-danger': danger}">
                  <strong>Warning:</strong>
                  <span data-bind="html: modal_info">This will also delete all your model's data. This action cannot be undone.</span>
                </div>
                <p data-bind="html: modal_question">Are you sure you want to delete <strong>Sentiment Analysis</strong> model?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <img data-bind="visible: confirmButtonDisabled, attr: { src: window.staticUrl + 'img/ajax-loader.gif' }" src="https://mlproductionmedia.azureedge.net/static/img/ajax-loader.gif" style={{display: 'none'}} />
                <button type="submit" className="btn btn-danger" data-bind="css: {'btn-primary': !danger, 'btn-danger': danger},
                   text: confirm_button,
                   disable: confirmButtonDisabled">Yes, delete model</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </confirm-modal>
  </module-cell>
  <module-cell params="showFeatured: $component.showFeatured,
                module: $data,
                showUser: $component.showUser">
    {/* ko with: module */}
    <div className="col-xs-12 col-sm-6 col-md-3 projects-gird-cell">
      <div data-bind="attr: { id: 'module-' + id }" id="module-ex_y7BPYzNG">
        <div className="panel panel-default" data-bind="click: $component.goToModule.bind($component)">
          <div className="panel-body">
            <module-symbol params="module: $data">
              <div className="cell-avatar extractor" data-bind="css: moduleClass,
 tooltip: { delay: 300,
            title: moduleTypeDisplay,
            placement: 'top' }" data-original-title title>
              </div>
            </module-symbol>
            {/* clickBubble prevents the parent click binding to fire*/}
            <span className="btn-group module-options" data-bind="click: $component.clickOptions.bind($component), clickBubble: false">
              <span data-bind="visible: canEdit(), attr: {id: 'options-' + $component.randomId}" className="glyphicon glyphicon-option-vertical" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="options-ZleKxKe9zZ2lGI" style={{display: 'none'}} />
              <ul className="dropdown-menu">
                <li><a data-bind="click: $component.showDeleteModuleModal.bind($component)">Delete</a></li>
              </ul>
            </span>
            <h3 data-bind="text: name">Keyword Extractor</h3>
            <p className="description" data-bind="html: getDescriptionDisplay">Extract keywords from text. Keywords can be compounded by one or more words....</p>
            <div className="panel-footer">
              <user-avatar className="pull-right" params="user: owner" data-bind="visible: $component.showUser($data)" style={{display: 'none'}}>
                {/* ko with: user */}
                {/* ko if: avatarSamallUrl() */}
                <img className="owner-avatar img-circle" data-bind="attr: {src: avatarSamallUrl(),
                alt: fullName },
          tooltip: { delay: 400, title: isStaff ? fullName() + ' from MonkeyLearn\'s team': fullName(),
                         placement: 'bottom' }" src="https://mlproductionmedia.azureedge.net/media/users/avatars/2.50x50_q99_crop-smart.jpg" alt="Raul Garreta" data-original-title title />
                {/* /ko */}
                {/* ko if: !avatarSamallUrl() */}{/* /ko */}
                {/* /ko */}
              </user-avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /ko */}
    <confirm-modal params="modal_id: 'delete-module-' + randomId,
          form_id: 'delete-module-form-' + randomId,
          title: 'Delete Model',
          submit_handler: deleteModule.bind($component),
          modal_title: 'Delete Model',
          modal_info: 'This will also delete all your model\'s data. This action cannot be undone.',
          modal_question: 'Are you sure you want to delete <strong>' + module.name() + '</strong> model?',
          confirm_button: 'Yes, delete model',
          danger: true,
          confirmButtonDisabled: deleting">
      <div className="modal fade" data-bind="attr: {id: modal_id}" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" id="delete-module-ZleKxKe9zZ2lGI">
        <div className="modal-dialog">
          <form method="POST" action data-bind="attr: {id: form_id}, submit: submit_handler" id="delete-module-form-ZleKxKe9zZ2lGI">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title" id="myModalLabel" data-bind="text: modal_title">Delete Model</h4>
              </div>
              <div className="modal-body">
                <div className="alert alert-danger" data-bind="css: {'alert-info': !danger, 'alert-danger': danger}">
                  <strong>Warning:</strong>
                  <span data-bind="html: modal_info">This will also delete all your model's data. This action cannot be undone.</span>
                </div>
                <p data-bind="html: modal_question">Are you sure you want to delete <strong>Keyword Extractor</strong> model?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <img data-bind="visible: confirmButtonDisabled, attr: { src: window.staticUrl + 'img/ajax-loader.gif' }" src="https://mlproductionmedia.azureedge.net/static/img/ajax-loader.gif" style={{display: 'none'}} />
                <button type="submit" className="btn btn-danger" data-bind="css: {'btn-primary': !danger, 'btn-danger': danger},
                   text: confirm_button,
                   disable: confirmButtonDisabled">Yes, delete model</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </confirm-modal>
  </module-cell>
  <module-cell params="showFeatured: $component.showFeatured,
                module: $data,
                showUser: $component.showUser">
    {/* ko with: module */}
    <div className="col-xs-12 col-sm-6 col-md-3 projects-gird-cell">
      <div data-bind="attr: { id: 'module-' + id }" id="module-cl_Aiu8dfYF">
        <div className="panel panel-default" data-bind="click: $component.goToModule.bind($component)">
          <div className="panel-body">
            <module-symbol params="module: $data">
              <div className="cell-avatar intent" data-bind="css: moduleClass,
 tooltip: { delay: 300,
            title: moduleTypeDisplay,
            placement: 'top' }" data-original-title title>
              </div>
            </module-symbol>
            {/* clickBubble prevents the parent click binding to fire*/}
            <span className="btn-group module-options" data-bind="click: $component.clickOptions.bind($component), clickBubble: false">
              <span data-bind="visible: canEdit(), attr: {id: 'options-' + $component.randomId}" className="glyphicon glyphicon-option-vertical" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="options-mKCRerG1x2fATc" style={{display: 'none'}} />
              <ul className="dropdown-menu">
                <li><a data-bind="click: $component.showDeleteModuleModal.bind($component)">Delete</a></li>
              </ul>
            </span>
            <h3 data-bind="text: name">Urgency Detection</h3>
            <p className="description" data-bind="html: getDescriptionDisplay">Classify messages as "Urgent" or "Not Urgent"....</p>
            <div className="panel-footer">
              <user-avatar className="pull-right" params="user: owner" data-bind="visible: $component.showUser($data)" style={{display: 'none'}}>
                {/* ko with: user */}
                {/* ko if: avatarSamallUrl() */}{/* /ko */}
                {/* ko if: !avatarSamallUrl() */}
                <span className="cell-avatar-sm owner-avatar" data-bind="text: nameInitials(),
          tooltip: { delay: 400, title: fullName,
                         placement: 'bottom' },
          style: { backgroundColor: chooseColor() }" data-original-title title style={{backgroundColor: 'rgb(190, 147, 130)'}}>HC</span>
                {/* /ko */}
                {/* /ko */}
              </user-avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /ko */}
    <confirm-modal params="modal_id: 'delete-module-' + randomId,
          form_id: 'delete-module-form-' + randomId,
          title: 'Delete Model',
          submit_handler: deleteModule.bind($component),
          modal_title: 'Delete Model',
          modal_info: 'This will also delete all your model\'s data. This action cannot be undone.',
          modal_question: 'Are you sure you want to delete <strong>' + module.name() + '</strong> model?',
          confirm_button: 'Yes, delete model',
          danger: true,
          confirmButtonDisabled: deleting">
      <div className="modal fade" data-bind="attr: {id: modal_id}" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" id="delete-module-mKCRerG1x2fATc">
        <div className="modal-dialog">
          <form method="POST" action data-bind="attr: {id: form_id}, submit: submit_handler" id="delete-module-form-mKCRerG1x2fATc">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title" id="myModalLabel" data-bind="text: modal_title">Delete Model</h4>
              </div>
              <div className="modal-body">
                <div className="alert alert-danger" data-bind="css: {'alert-info': !danger, 'alert-danger': danger}">
                  <strong>Warning:</strong>
                  <span data-bind="html: modal_info">This will also delete all your model's data. This action cannot be undone.</span>
                </div>
                <p data-bind="html: modal_question">Are you sure you want to delete <strong>Urgency Detection</strong> model?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <img data-bind="visible: confirmButtonDisabled, attr: { src: window.staticUrl + 'img/ajax-loader.gif' }" src="https://mlproductionmedia.azureedge.net/static/img/ajax-loader.gif" style={{display: 'none'}} />
                <button type="submit" className="btn btn-danger" data-bind="css: {'btn-primary': !danger, 'btn-danger': danger},
                   text: confirm_button,
                   disable: confirmButtonDisabled">Yes, delete model</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </confirm-modal>
  </module-cell>
</div>
<div data-bind="fastForEach: $data" className="row projects-grid">
  <module-cell params="showFeatured: $component.showFeatured,
                module: $data,
                showUser: $component.showUser">
    {/* ko with: module */}
    <div className="col-xs-12 col-sm-6 col-md-3 projects-gird-cell">
      <div data-bind="attr: { id: 'module-' + id }" id="module-cl_v9GTn7zi">
        <div className="panel panel-default" data-bind="click: $component.goToModule.bind($component)">
          <div className="panel-body">
            <module-symbol params="module: $data">
              <div className="cell-avatar topic" data-bind="css: moduleClass,
 tooltip: { delay: 300,
            title: moduleTypeDisplay,
            placement: 'top' }" data-original-title title>
              </div>
            </module-symbol>
            {/* clickBubble prevents the parent click binding to fire*/}
            <span className="btn-group module-options" data-bind="click: $component.clickOptions.bind($component), clickBubble: false">
              <span data-bind="visible: canEdit(), attr: {id: 'options-' + $component.randomId}" className="glyphicon glyphicon-option-vertical" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="options-ONAlM1XyXCKFZM" style={{display: 'none'}} />
              <ul className="dropdown-menu">
                <li><a data-bind="click: $component.showDeleteModuleModal.bind($component)">Delete</a></li>
              </ul>
            </span>
            <h3 data-bind="text: name">Outbound Sales Response Classifier</h3>
            <p className="description" data-bind="html: getDescriptionDisplay">Classify outbound sales email responses based on their subject and body....</p>
            <div className="panel-footer">
              <user-avatar className="pull-right" params="user: owner" data-bind="visible: $component.showUser($data)" style={{display: 'none'}}>
                {/* ko with: user */}
                {/* ko if: avatarSamallUrl() */}{/* /ko */}
                {/* ko if: !avatarSamallUrl() */}
                <span className="cell-avatar-sm owner-avatar" data-bind="text: nameInitials(),
          tooltip: { delay: 400, title: fullName,
                         placement: 'bottom' },
          style: { backgroundColor: chooseColor() }" data-original-title title style={{backgroundColor: 'rgb(190, 147, 130)'}}>HC</span>
                {/* /ko */}
                {/* /ko */}
              </user-avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /ko */}
    <confirm-modal params="modal_id: 'delete-module-' + randomId,
          form_id: 'delete-module-form-' + randomId,
          title: 'Delete Model',
          submit_handler: deleteModule.bind($component),
          modal_title: 'Delete Model',
          modal_info: 'This will also delete all your model\'s data. This action cannot be undone.',
          modal_question: 'Are you sure you want to delete <strong>' + module.name() + '</strong> model?',
          confirm_button: 'Yes, delete model',
          danger: true,
          confirmButtonDisabled: deleting">
      <div className="modal fade" data-bind="attr: {id: modal_id}" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" id="delete-module-ONAlM1XyXCKFZM">
        <div className="modal-dialog">
          <form method="POST" action data-bind="attr: {id: form_id}, submit: submit_handler" id="delete-module-form-ONAlM1XyXCKFZM">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title" id="myModalLabel" data-bind="text: modal_title">Delete Model</h4>
              </div>
              <div className="modal-body">
                <div className="alert alert-danger" data-bind="css: {'alert-info': !danger, 'alert-danger': danger}">
                  <strong>Warning:</strong>
                  <span data-bind="html: modal_info">This will also delete all your model's data. This action cannot be undone.</span>
                </div>
                <p data-bind="html: modal_question">Are you sure you want to delete <strong>Outbound Sales Response Classifier</strong> model?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <img data-bind="visible: confirmButtonDisabled, attr: { src: window.staticUrl + 'img/ajax-loader.gif' }" src="https://mlproductionmedia.azureedge.net/static/img/ajax-loader.gif" style={{display: 'none'}} />
                <button type="submit" className="btn btn-danger" data-bind="css: {'btn-primary': !danger, 'btn-danger': danger},
                   text: confirm_button,
                   disable: confirmButtonDisabled">Yes, delete model</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </confirm-modal>
  </module-cell>
  <module-cell params="showFeatured: $component.showFeatured,
                module: $data,
                showUser: $component.showUser">
    {/* ko with: module */}
    <div className="col-xs-12 col-sm-6 col-md-3 projects-gird-cell">
      <div data-bind="attr: { id: 'module-' + id }" id="module-cl_5vWJMjGc">
        <div className="panel panel-default" data-bind="click: $component.goToModule.bind($component)">
          <div className="panel-body">
            <module-symbol params="module: $data">
              <div className="cell-avatar topic" data-bind="css: moduleClass,
 tooltip: { delay: 300,
            title: moduleTypeDisplay,
            placement: 'top' }" data-original-title title>
              </div>
            </module-symbol>
            {/* clickBubble prevents the parent click binding to fire*/}
            <span className="btn-group module-options" data-bind="click: $component.clickOptions.bind($component), clickBubble: false">
              <span data-bind="visible: canEdit(), attr: {id: 'options-' + $component.randomId}" className="glyphicon glyphicon-option-vertical" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="options-0GaVjXFAdnRnGR" style={{display: 'none'}} />
              <ul className="dropdown-menu">
                <li><a data-bind="click: $component.showDeleteModuleModal.bind($component)">Delete</a></li>
              </ul>
            </span>
            <h3 data-bind="text: name">Business Classifier</h3>
            <p className="description" data-bind="html: getDescriptionDisplay">Classify professional profiles, companies or jobs by industry....</p>
            <div className="panel-footer">
              <user-avatar className="pull-right" params="user: owner" data-bind="visible: $component.showUser($data)" style={{display: 'none'}}>
                {/* ko with: user */}
                {/* ko if: avatarSamallUrl() */}{/* /ko */}
                {/* ko if: !avatarSamallUrl() */}
                <span className="cell-avatar-sm owner-avatar" data-bind="text: nameInitials(),
          tooltip: { delay: 400, title: fullName,
                         placement: 'bottom' },
          style: { backgroundColor: chooseColor() }" data-original-title title style={{backgroundColor: 'rgb(190, 147, 130)'}}>HC</span>
                {/* /ko */}
                {/* /ko */}
              </user-avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /ko */}
    <confirm-modal params="modal_id: 'delete-module-' + randomId,
          form_id: 'delete-module-form-' + randomId,
          title: 'Delete Model',
          submit_handler: deleteModule.bind($component),
          modal_title: 'Delete Model',
          modal_info: 'This will also delete all your model\'s data. This action cannot be undone.',
          modal_question: 'Are you sure you want to delete <strong>' + module.name() + '</strong> model?',
          confirm_button: 'Yes, delete model',
          danger: true,
          confirmButtonDisabled: deleting">
      <div className="modal fade" data-bind="attr: {id: modal_id}" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" id="delete-module-0GaVjXFAdnRnGR">
        <div className="modal-dialog">
          <form method="POST" action data-bind="attr: {id: form_id}, submit: submit_handler" id="delete-module-form-0GaVjXFAdnRnGR">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title" id="myModalLabel" data-bind="text: modal_title">Delete Model</h4>
              </div>
              <div className="modal-body">
                <div className="alert alert-danger" data-bind="css: {'alert-info': !danger, 'alert-danger': danger}">
                  <strong>Warning:</strong>
                  <span data-bind="html: modal_info">This will also delete all your model's data. This action cannot be undone.</span>
                </div>
                <p data-bind="html: modal_question">Are you sure you want to delete <strong>Business Classifier</strong> model?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <img data-bind="visible: confirmButtonDisabled, attr: { src: window.staticUrl + 'img/ajax-loader.gif' }" src="https://mlproductionmedia.azureedge.net/static/img/ajax-loader.gif" style={{display: 'none'}} />
                <button type="submit" className="btn btn-danger" data-bind="css: {'btn-primary': !danger, 'btn-danger': danger},
                   text: confirm_button,
                   disable: confirmButtonDisabled">Yes, delete model</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </confirm-modal>
  </module-cell>
  <module-cell params="showFeatured: $component.showFeatured,
                module: $data,
                showUser: $component.showUser">
    {/* ko with: module */}
    <div className="col-xs-12 col-sm-6 col-md-3 projects-gird-cell">
      <div data-bind="attr: { id: 'module-' + id }" id="module-cl_KFXhoTdt">
        <div className="panel panel-default" data-bind="click: $component.goToModule.bind($component)">
          <div className="panel-body">
            <module-symbol params="module: $data">
              <div className="cell-avatar intent" data-bind="css: moduleClass,
 tooltip: { delay: 300,
            title: moduleTypeDisplay,
            placement: 'top' }" data-original-title title>
              </div>
            </module-symbol>
            {/* clickBubble prevents the parent click binding to fire*/}
            <span className="btn-group module-options" data-bind="click: $component.clickOptions.bind($component), clickBubble: false">
              <span data-bind="visible: canEdit(), attr: {id: 'options-' + $component.randomId}" className="glyphicon glyphicon-option-vertical" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="options-veW6Z3qWIAzdZo" style={{display: 'none'}} />
              <ul className="dropdown-menu">
                <li><a data-bind="click: $component.showDeleteModuleModal.bind($component)">Delete</a></li>
              </ul>
            </span>
            <h3 data-bind="text: name">Profanity &amp; Abuse Detection</h3>
            <p className="description" data-bind="html: getDescriptionDisplay">Identify profanity or abuse in user generated content....</p>
            <div className="panel-footer">
              <user-avatar className="pull-right" params="user: owner" data-bind="visible: $component.showUser($data)" style={{display: 'none'}}>
                {/* ko with: user */}
                {/* ko if: avatarSamallUrl() */}
                <img className="owner-avatar img-circle" data-bind="attr: {src: avatarSamallUrl(),
                alt: fullName },
          tooltip: { delay: 400, title: isStaff ? fullName() + ' from MonkeyLearn\'s team': fullName(),
                         placement: 'bottom' }" src="https://mlproductionmedia.azureedge.net/media/users/avatars/2.50x50_q99_crop-smart.jpg" alt="Raul Garreta" data-original-title title />
                {/* /ko */}
                {/* ko if: !avatarSamallUrl() */}{/* /ko */}
                {/* /ko */}
              </user-avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /ko */}
    <confirm-modal params="modal_id: 'delete-module-' + randomId,
          form_id: 'delete-module-form-' + randomId,
          title: 'Delete Model',
          submit_handler: deleteModule.bind($component),
          modal_title: 'Delete Model',
          modal_info: 'This will also delete all your model\'s data. This action cannot be undone.',
          modal_question: 'Are you sure you want to delete <strong>' + module.name() + '</strong> model?',
          confirm_button: 'Yes, delete model',
          danger: true,
          confirmButtonDisabled: deleting">
      <div className="modal fade" data-bind="attr: {id: modal_id}" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" id="delete-module-veW6Z3qWIAzdZo">
        <div className="modal-dialog">
          <form method="POST" action data-bind="attr: {id: form_id}, submit: submit_handler" id="delete-module-form-veW6Z3qWIAzdZo">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title" id="myModalLabel" data-bind="text: modal_title">Delete Model</h4>
              </div>
              <div className="modal-body">
                <div className="alert alert-danger" data-bind="css: {'alert-info': !danger, 'alert-danger': danger}">
                  <strong>Warning:</strong>
                  <span data-bind="html: modal_info">This will also delete all your model's data. This action cannot be undone.</span>
                </div>
                <p data-bind="html: modal_question">Are you sure you want to delete <strong>Profanity &amp; Abuse Detection</strong> model?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <img data-bind="visible: confirmButtonDisabled, attr: { src: window.staticUrl + 'img/ajax-loader.gif' }" src="https://mlproductionmedia.azureedge.net/static/img/ajax-loader.gif" style={{display: 'none'}} />
                <button type="submit" className="btn btn-danger" data-bind="css: {'btn-primary': !danger, 'btn-danger': danger},
                   text: confirm_button,
                   disable: confirmButtonDisabled">Yes, delete model</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </confirm-modal>
  </module-cell>
  <module-cell params="showFeatured: $component.showFeatured,
                module: $data,
                showUser: $component.showUser">
    {/* ko with: module */}
    <div className="col-xs-12 col-sm-6 col-md-3 projects-gird-cell">
      <div data-bind="attr: { id: 'module-' + id }" id="module-cl_qkjxv9Ly">
        <div className="panel panel-default" data-bind="click: $component.goToModule.bind($component)">
          <div className="panel-body">
            <module-symbol params="module: $data">
              <div className="cell-avatar sentiment" data-bind="css: moduleClass,
 tooltip: { delay: 300,
            title: moduleTypeDisplay,
            placement: 'top' }" data-original-title title>
              </div>
            </module-symbol>
            {/* clickBubble prevents the parent click binding to fire*/}
            <span className="btn-group module-options" data-bind="click: $component.clickOptions.bind($component), clickBubble: false">
              <span data-bind="visible: canEdit(), attr: {id: 'options-' + $component.randomId}" className="glyphicon glyphicon-option-vertical" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="options-HuKI76pNFmp6Jv" style={{display: 'none'}} />
              <ul className="dropdown-menu">
                <li><a data-bind="click: $component.showDeleteModuleModal.bind($component)">Delete</a></li>
              </ul>
            </span>
            <h3 data-bind="text: name">Tweets Sentiment</h3>
            <p className="description" data-bind="html: getDescriptionDisplay">Classify tweets in English according to their sentiment: positive, neutral or negative....</p>
            <div className="panel-footer">
              <user-avatar className="pull-right" params="user: owner" data-bind="visible: $component.showUser($data)" style={{display: 'none'}}>
                {/* ko with: user */}
                {/* ko if: avatarSamallUrl() */}
                <img className="owner-avatar img-circle" data-bind="attr: {src: avatarSamallUrl(),
                alt: fullName },
          tooltip: { delay: 400, title: isStaff ? fullName() + ' from MonkeyLearn\'s team': fullName(),
                         placement: 'bottom' }" src="https://mlproductionmedia.azureedge.net/media/users/avatars/10_PU0T10I.50x50_q99_crop-smart.png" alt="Rodrigo Stecanella" data-original-title title />
                {/* /ko */}
                {/* ko if: !avatarSamallUrl() */}{/* /ko */}
                {/* /ko */}
              </user-avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /ko */}
    <confirm-modal params="modal_id: 'delete-module-' + randomId,
          form_id: 'delete-module-form-' + randomId,
          title: 'Delete Model',
          submit_handler: deleteModule.bind($component),
          modal_title: 'Delete Model',
          modal_info: 'This will also delete all your model\'s data. This action cannot be undone.',
          modal_question: 'Are you sure you want to delete <strong>' + module.name() + '</strong> model?',
          confirm_button: 'Yes, delete model',
          danger: true,
          confirmButtonDisabled: deleting">
      <div className="modal fade" data-bind="attr: {id: modal_id}" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" id="delete-module-HuKI76pNFmp6Jv">
        <div className="modal-dialog">
          <form method="POST" action data-bind="attr: {id: form_id}, submit: submit_handler" id="delete-module-form-HuKI76pNFmp6Jv">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title" id="myModalLabel" data-bind="text: modal_title">Delete Model</h4>
              </div>
              <div className="modal-body">
                <div className="alert alert-danger" data-bind="css: {'alert-info': !danger, 'alert-danger': danger}">
                  <strong>Warning:</strong>
                  <span data-bind="html: modal_info">This will also delete all your model's data. This action cannot be undone.</span>
                </div>
                <p data-bind="html: modal_question">Are you sure you want to delete <strong>Tweets Sentiment</strong> model?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <img data-bind="visible: confirmButtonDisabled, attr: { src: window.staticUrl + 'img/ajax-loader.gif' }" src="https://mlproductionmedia.azureedge.net/static/img/ajax-loader.gif" style={{display: 'none'}} />
                <button type="submit" className="btn btn-danger" data-bind="css: {'btn-primary': !danger, 'btn-danger': danger},
                   text: confirm_button,
                   disable: confirmButtonDisabled">Yes, delete model</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </confirm-modal>
  </module-cell>
</div>
<div data-bind="fastForEach: $data" className="row projects-grid">
  <module-cell params="showFeatured: $component.showFeatured,
                module: $data,
                showUser: $component.showUser">
    {/* ko with: module */}
    <div className="col-xs-12 col-sm-6 col-md-3 projects-gird-cell">
      <div data-bind="attr: { id: 'module-' + id }" id="module-cl_TWmMTdgQ">
        <div className="panel panel-default" data-bind="click: $component.goToModule.bind($component)">
          <div className="panel-body">
            <module-symbol params="module: $data">
              <div className="cell-avatar sentiment" data-bind="css: moduleClass,
 tooltip: { delay: 300,
            title: moduleTypeDisplay,
            placement: 'top' }" data-original-title title>
              </div>
            </module-symbol>
            {/* clickBubble prevents the parent click binding to fire*/}
            <span className="btn-group module-options" data-bind="click: $component.clickOptions.bind($component), clickBubble: false">
              <span data-bind="visible: canEdit(), attr: {id: 'options-' + $component.randomId}" className="glyphicon glyphicon-option-vertical" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="options-8oCNmDjraN1RyM" style={{display: 'none'}} />
              <ul className="dropdown-menu">
                <li><a data-bind="click: $component.showDeleteModuleModal.bind($component)">Delete</a></li>
              </ul>
            </span>
            <h3 data-bind="text: name">Product Sentiment</h3>
            <p className="description" data-bind="html: getDescriptionDisplay">Detect sentiment in product reviews....</p>
            <div className="panel-footer">
              <user-avatar className="pull-right" params="user: owner" data-bind="visible: $component.showUser($data)" style={{display: 'none'}}>
                {/* ko with: user */}
                {/* ko if: avatarSamallUrl() */}
                <img className="owner-avatar img-circle" data-bind="attr: {src: avatarSamallUrl(),
                alt: fullName },
          tooltip: { delay: 400, title: isStaff ? fullName() + ' from MonkeyLearn\'s team': fullName(),
                         placement: 'bottom' }" src="https://mlproductionmedia.azureedge.net/media/users/avatars/8.50x50_q99_crop-smart.jpg" alt="Federico Pascual" data-original-title title />
                {/* /ko */}
                {/* ko if: !avatarSamallUrl() */}{/* /ko */}
                {/* /ko */}
              </user-avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /ko */}
    <confirm-modal params="modal_id: 'delete-module-' + randomId,
          form_id: 'delete-module-form-' + randomId,
          title: 'Delete Model',
          submit_handler: deleteModule.bind($component),
          modal_title: 'Delete Model',
          modal_info: 'This will also delete all your model\'s data. This action cannot be undone.',
          modal_question: 'Are you sure you want to delete <strong>' + module.name() + '</strong> model?',
          confirm_button: 'Yes, delete model',
          danger: true,
          confirmButtonDisabled: deleting">
      <div className="modal fade" data-bind="attr: {id: modal_id}" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" id="delete-module-8oCNmDjraN1RyM">
        <div className="modal-dialog">
          <form method="POST" action data-bind="attr: {id: form_id}, submit: submit_handler" id="delete-module-form-8oCNmDjraN1RyM">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title" id="myModalLabel" data-bind="text: modal_title">Delete Model</h4>
              </div>
              <div className="modal-body">
                <div className="alert alert-danger" data-bind="css: {'alert-info': !danger, 'alert-danger': danger}">
                  <strong>Warning:</strong>
                  <span data-bind="html: modal_info">This will also delete all your model's data. This action cannot be undone.</span>
                </div>
                <p data-bind="html: modal_question">Are you sure you want to delete <strong>Product Sentiment</strong> model?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <img data-bind="visible: confirmButtonDisabled, attr: { src: window.staticUrl + 'img/ajax-loader.gif' }" src="https://mlproductionmedia.azureedge.net/static/img/ajax-loader.gif" style={{display: 'none'}} />
                <button type="submit" className="btn btn-danger" data-bind="css: {'btn-primary': !danger, 'btn-danger': danger},
                   text: confirm_button,
                   disable: confirmButtonDisabled">Yes, delete model</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </confirm-modal>
  </module-cell>
  <module-cell params="showFeatured: $component.showFeatured,
                module: $data,
                showUser: $component.showUser">
    {/* ko with: module */}
    <div className="col-xs-12 col-sm-6 col-md-3 projects-gird-cell">
      <div data-bind="attr: { id: 'module-' + id }" id="module-ex_RK5ApHnN">
        <div className="panel panel-default" data-bind="click: $component.goToModule.bind($component)">
          <div className="panel-body">
            <module-symbol params="module: $data">
              <div className="cell-avatar extractor" data-bind="css: moduleClass,
 tooltip: { delay: 300,
            title: moduleTypeDisplay,
            placement: 'top' }" data-original-title title>
              </div>
            </module-symbol>
            {/* clickBubble prevents the parent click binding to fire*/}
            <span className="btn-group module-options" data-bind="click: $component.clickOptions.bind($component), clickBubble: false">
              <span data-bind="visible: canEdit(), attr: {id: 'options-' + $component.randomId}" className="glyphicon glyphicon-option-vertical" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="options-wyBoilY42zuBWR" style={{display: 'none'}} />
              <ul className="dropdown-menu">
                <li><a data-bind="click: $component.showDeleteModuleModal.bind($component)">Delete</a></li>
              </ul>
            </span>
            <h3 data-bind="text: name">Boilerplate Extractor</h3>
            <p className="description" data-bind="html: getDescriptionDisplay">Extract relevant text from HTML by removing boilerplate like ads or menus....</p>
            <div className="panel-footer">
              <user-avatar className="pull-right" params="user: owner" data-bind="visible: $component.showUser($data)" style={{display: 'none'}}>
                {/* ko with: user */}
                {/* ko if: avatarSamallUrl() */}
                <img className="owner-avatar img-circle" data-bind="attr: {src: avatarSamallUrl(),
                alt: fullName },
          tooltip: { delay: 400, title: isStaff ? fullName() + ' from MonkeyLearn\'s team': fullName(),
                         placement: 'bottom' }" src="https://mlproductionmedia.azureedge.net/media/users/avatars/2.50x50_q99_crop-smart.jpg" alt="Raul Garreta" data-original-title title />
                {/* /ko */}
                {/* ko if: !avatarSamallUrl() */}{/* /ko */}
                {/* /ko */}
              </user-avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /ko */}
    <confirm-modal params="modal_id: 'delete-module-' + randomId,
          form_id: 'delete-module-form-' + randomId,
          title: 'Delete Model',
          submit_handler: deleteModule.bind($component),
          modal_title: 'Delete Model',
          modal_info: 'This will also delete all your model\'s data. This action cannot be undone.',
          modal_question: 'Are you sure you want to delete <strong>' + module.name() + '</strong> model?',
          confirm_button: 'Yes, delete model',
          danger: true,
          confirmButtonDisabled: deleting">
      <div className="modal fade" data-bind="attr: {id: modal_id}" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" id="delete-module-wyBoilY42zuBWR">
        <div className="modal-dialog">
          <form method="POST" action data-bind="attr: {id: form_id}, submit: submit_handler" id="delete-module-form-wyBoilY42zuBWR">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title" id="myModalLabel" data-bind="text: modal_title">Delete Model</h4>
              </div>
              <div className="modal-body">
                <div className="alert alert-danger" data-bind="css: {'alert-info': !danger, 'alert-danger': danger}">
                  <strong>Warning:</strong>
                  <span data-bind="html: modal_info">This will also delete all your model's data. This action cannot be undone.</span>
                </div>
                <p data-bind="html: modal_question">Are you sure you want to delete <strong>Boilerplate Extractor</strong> model?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <img data-bind="visible: confirmButtonDisabled, attr: { src: window.staticUrl + 'img/ajax-loader.gif' }" src="https://mlproductionmedia.azureedge.net/static/img/ajax-loader.gif" style={{display: 'none'}} />
                <button type="submit" className="btn btn-danger" data-bind="css: {'btn-primary': !danger, 'btn-danger': danger},
                   text: confirm_button,
                   disable: confirmButtonDisabled">Yes, delete model</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </confirm-modal>
  </module-cell>
  <module-cell params="showFeatured: $component.showFeatured,
                module: $data,
                showUser: $component.showUser">
    {/* ko with: module */}
    <div className="col-xs-12 col-sm-6 col-md-3 projects-gird-cell">
      <div data-bind="attr: { id: 'module-' + id }" id="module-cl_rZ2P7hbs">
        <div className="panel panel-default" data-bind="click: $component.goToModule.bind($component)">
          <div className="panel-body">
            <module-symbol params="module: $data">
              <div className="cell-avatar sentiment" data-bind="css: moduleClass,
 tooltip: { delay: 300,
            title: moduleTypeDisplay,
            placement: 'top' }" data-original-title title>
              </div>
            </module-symbol>
            {/* clickBubble prevents the parent click binding to fire*/}
            <span className="btn-group module-options" data-bind="click: $component.clickOptions.bind($component), clickBubble: false">
              <span data-bind="visible: canEdit(), attr: {id: 'options-' + $component.randomId}" className="glyphicon glyphicon-option-vertical" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="options-zGMOxqJOzO5ED7" style={{display: 'none'}} />
              <ul className="dropdown-menu">
                <li><a data-bind="click: $component.showDeleteModuleModal.bind($component)">Delete</a></li>
              </ul>
            </span>
            <h3 data-bind="text: name">Hotel Sentiment</h3>
            <p className="description" data-bind="html: getDescriptionDisplay">Detect sentiment on hotel reviews. Classifier was trained with data from different hotel review sites....</p>
            <div className="panel-footer">
              <user-avatar className="pull-right" params="user: owner" data-bind="visible: $component.showUser($data)" style={{display: 'none'}}>
                {/* ko with: user */}
                {/* ko if: avatarSamallUrl() */}
                <img className="owner-avatar img-circle" data-bind="attr: {src: avatarSamallUrl(),
                alt: fullName },
          tooltip: { delay: 400, title: isStaff ? fullName() + ' from MonkeyLearn\'s team': fullName(),
                         placement: 'bottom' }" src="https://mlproductionmedia.azureedge.net/media/users/avatars/2.50x50_q99_crop-smart.jpg" alt="Raul Garreta" data-original-title title />
                {/* /ko */}
                {/* ko if: !avatarSamallUrl() */}{/* /ko */}
                {/* /ko */}
              </user-avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /ko */}
    <confirm-modal params="modal_id: 'delete-module-' + randomId,
          form_id: 'delete-module-form-' + randomId,
          title: 'Delete Model',
          submit_handler: deleteModule.bind($component),
          modal_title: 'Delete Model',
          modal_info: 'This will also delete all your model\'s data. This action cannot be undone.',
          modal_question: 'Are you sure you want to delete <strong>' + module.name() + '</strong> model?',
          confirm_button: 'Yes, delete model',
          danger: true,
          confirmButtonDisabled: deleting">
      <div className="modal fade" data-bind="attr: {id: modal_id}" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" id="delete-module-zGMOxqJOzO5ED7">
        <div className="modal-dialog">
          <form method="POST" action data-bind="attr: {id: form_id}, submit: submit_handler" id="delete-module-form-zGMOxqJOzO5ED7">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title" id="myModalLabel" data-bind="text: modal_title">Delete Model</h4>
              </div>
              <div className="modal-body">
                <div className="alert alert-danger" data-bind="css: {'alert-info': !danger, 'alert-danger': danger}">
                  <strong>Warning:</strong>
                  <span data-bind="html: modal_info">This will also delete all your model's data. This action cannot be undone.</span>
                </div>
                <p data-bind="html: modal_question">Are you sure you want to delete <strong>Hotel Sentiment</strong> model?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <img data-bind="visible: confirmButtonDisabled, attr: { src: window.staticUrl + 'img/ajax-loader.gif' }" src="https://mlproductionmedia.azureedge.net/static/img/ajax-loader.gif" style={{display: 'none'}} />
                <button type="submit" className="btn btn-danger" data-bind="css: {'btn-primary': !danger, 'btn-danger': danger},
                   text: confirm_button,
                   disable: confirmButtonDisabled">Yes, delete model</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </confirm-modal>
  </module-cell>
  <module-cell params="showFeatured: $component.showFeatured,
                module: $data,
                showUser: $component.showUser">
    {/* ko with: module */}
    <div className="col-xs-12 col-sm-6 col-md-3 projects-gird-cell">
      <div data-bind="attr: { id: 'module-' + id }" id="module-cl_TKb7XmdG">
        <div className="panel panel-default" data-bind="click: $component.goToModule.bind($component)">
          <div className="panel-body">
            <module-symbol params="module: $data">
              <div className="cell-avatar topic" data-bind="css: moduleClass,
 tooltip: { delay: 300,
            title: moduleTypeDisplay,
            placement: 'top' }" data-original-title title>
              </div>
            </module-symbol>
            {/* clickBubble prevents the parent click binding to fire*/}
            <span className="btn-group module-options" data-bind="click: $component.clickOptions.bind($component), clickBubble: false">
              <span data-bind="visible: canEdit(), attr: {id: 'options-' + $component.randomId}" className="glyphicon glyphicon-option-vertical" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="options-Ey0McJB7NSY3lX" style={{display: 'none'}} />
              <ul className="dropdown-menu">
                <li><a data-bind="click: $component.showDeleteModuleModal.bind($component)">Delete</a></li>
              </ul>
            </span>
            <h3 data-bind="text: name">Hotel Aspect</h3>
            <p className="description" data-bind="html: getDescriptionDisplay">Classify hotel reviews and comments according to the aspects or topics mentioned....</p>
            <div className="panel-footer">
              <user-avatar className="pull-right" params="user: owner" data-bind="visible: $component.showUser($data)" style={{display: 'none'}}>
                {/* ko with: user */}
                {/* ko if: avatarSamallUrl() */}
                <img className="owner-avatar img-circle" data-bind="attr: {src: avatarSamallUrl(),
                alt: fullName },
          tooltip: { delay: 400, title: isStaff ? fullName() + ' from MonkeyLearn\'s team': fullName(),
                         placement: 'bottom' }" src="https://mlproductionmedia.azureedge.net/media/users/avatars/10154.50x50_q99_crop-smart.jpg" alt="Bruno Stecanella" data-original-title title />
                {/* /ko */}
                {/* ko if: !avatarSamallUrl() */}{/* /ko */}
                {/* /ko */}
              </user-avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /ko */}
    <confirm-modal params="modal_id: 'delete-module-' + randomId,
          form_id: 'delete-module-form-' + randomId,
          title: 'Delete Model',
          submit_handler: deleteModule.bind($component),
          modal_title: 'Delete Model',
          modal_info: 'This will also delete all your model\'s data. This action cannot be undone.',
          modal_question: 'Are you sure you want to delete <strong>' + module.name() + '</strong> model?',
          confirm_button: 'Yes, delete model',
          danger: true,
          confirmButtonDisabled: deleting">
      <div className="modal fade" data-bind="attr: {id: modal_id}" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" id="delete-module-Ey0McJB7NSY3lX">
        <div className="modal-dialog">
          <form method="POST" action data-bind="attr: {id: form_id}, submit: submit_handler" id="delete-module-form-Ey0McJB7NSY3lX">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title" id="myModalLabel" data-bind="text: modal_title">Delete Model</h4>
              </div>
              <div className="modal-body">
                <div className="alert alert-danger" data-bind="css: {'alert-info': !danger, 'alert-danger': danger}">
                  <strong>Warning:</strong>
                  <span data-bind="html: modal_info">This will also delete all your model's data. This action cannot be undone.</span>
                </div>
                <p data-bind="html: modal_question">Are you sure you want to delete <strong>Hotel Aspect</strong> model?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <img data-bind="visible: confirmButtonDisabled, attr: { src: window.staticUrl + 'img/ajax-loader.gif' }" src="https://mlproductionmedia.azureedge.net/static/img/ajax-loader.gif" style={{display: 'none'}} />
                <button type="submit" className="btn btn-danger" data-bind="css: {'btn-primary': !danger, 'btn-danger': danger},
                   text: confirm_button,
                   disable: confirmButtonDisabled">Yes, delete model</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </confirm-modal>
  </module-cell>
</div>
{/* /ko */}
{/* ko if: paginatorState */}{/* /ko */}
</module-cell-list>
<div className="text-center margin-bottom-20">
<button type="button" className="btn btn-primary" data-bind="click: showMore, visible: paginatorState.hasNext() && !searching()" style={{}}>Show more</button>
</div>
<div className="row text-center api-loading-gif" data-bind="visible: searching" style={{display: 'none'}}>
<div className="logo-loader" />
</div>
</explore>
{/* /ko */}
{/* ko if: currentComponent() === 'dashboard' */}{/* /ko */}
{/* ko if: currentComponent() === 'user-settings' */}{/* /ko */}
{/* /ko */}
</div>
</div>
</div>
</div>
        )
    }
}

export default NavBar;
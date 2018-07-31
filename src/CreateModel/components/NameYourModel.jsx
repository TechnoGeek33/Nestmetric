<div data-bind="css: 'current-view-' + currentComponent()" class="current-view-module-create">

          <navbar params="user: user,
                          showShortcutsTrigger: showShortcutsTrigger">
<div id="header-wrapper" data-bind="visible: appState.navbarVisible" style="display: none;">
  <nav class="navbar navbar-default" role="navigation" data-bind="css: { 'with-notification': user() &amp;&amp; user().apiQueryLimitExceeded() }">
    <div class="container-fluid">


      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#monkeylearn-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <!-- ko if: currentModule() || isMyAccountActive() --><!-- /ko -->
        <!-- ko if: !currentModule() && !isMyAccountActive() -->
          <a class="navbar-brand" href="/main/dashboard/"></a>
        <!-- /ko -->
      </div>


      <div class="collapse navbar-collapse" id="monkeylearn-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <!-- ko if: appState.currentModule() &&
                      (!appState.currentModule().isPublic() || appState.user().forceEditViewPublicModules) &&
                      (!appState.currentModule().isClassifier() || appState.currentModule().isFlatten) --><!-- /ko -->

          <!-- ko if: appState.dataReady() && currentComponent() !== 'project-detail' && currentComponent() !== 'extractor-detail' -->
            <li class="create-model">
              <button type="button" class="btn btn-primary" data-bind="click: createModule">
                <span class="plus-white">+</span> Create Model
              </button>
            </li>
          <!-- /ko -->

          <!-- ko if: user() && !user().isAnonymous() -->
          <li class="dropdown" id="dlDropDown">
            <a href="#" class="dropdown-toggle user-dropdown" data-toggle="dropdown">
              <span class="typcn typcn-user-outline" aria-hidden="true"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <div class="api-key">
                  API Key <br>
                  <a data-bind="click: copyToClipboard,
                                tooltip: {
                                  delay: 0,
                                  title: 'Copy to clipboard',
                                  placement: 'top' },
                                text: user().apiToken().slice(0, 18) + '...'" data-original-title="" title="">cad81eadbda7968bf8...</a>
                </div>
              </li>
              <hr>
              <li>
                <a href="/main/my-account/">
                  <span class="typcn typcn-user" aria-hidden="true"></span> My Account
                </a>
              </li>
              <li>
                <a target="_blank" href="http://help.monkeylearn.com/">
                  <span class="glyphicon glyphicon-question-sign"></span> Help Docs
                </a>
              </li>
              <li>
                <a target="_blank" href="https://monkeylearn.com/api/">
                  <span class="typcn typcn-code" aria-hidden="true"></span> API Docs
                </a>
              </li>
              <li>
                <a href="/accounts/logout/">
                  <span class="glyphicon glyphicon-log-out" aria-hidden="true"></span> Logout
                </a>
              </li>
            </ul>
          </li>
          <!-- /ko -->

          <!-- ko if: user() && user().isAnonymous() --><!-- /ko -->
        </ul>

        <!-- ko if: !currentModule() && currentComponent() !== 'project-detail' && currentComponent() !== 'extractor-detail' && currentComponent() !== 'user-settings' -->
          <ul class="nav navbar-nav navigation-menu">
            <li data-bind="css: {active: currentPathObservable() === '/main/dashboard/'}">
              <a href="/main/dashboard/">Dashboard</a>
            </li>

            <li data-bind="css: {active: currentPathObservable() === '/main/explore/'}">
              <a href="/main/explore/">
                Explore
              </a>
            </li>
          </ul>
        <!-- /ko -->
      </div>
    </div>
  </nav>

  <!-- ko if: user() && user().apiQueryLimitExceeded() --><!-- /ko -->

  <!-- ko if: user() && !user().apiQueryLimitExceeded() && user().apiQueryLimitAlmostExceeded() --><!-- /ko -->

  <!-- ko if: user() && !user().emailIsVerified() && user().daysPendingForVerification() > 0--><!-- /ko -->
</div>

<upgrade-your-plan params="modalId: 'upgrade-your-plan-create-module',
                           text: upgradePlanText">
<div class="modal fade upgrade-modal" data-bind="attr: {id: modalId}" tabindex="-1" role="dialog" aria-hidden="true" id="upgrade-your-plan-create-module">
  <div class="modal-dialog">
    <form method="POST" action="">
      <div class="modal-content">
        <div class="modal-body space-rocket" data-bind="css: {'space-rocket': useSpaceRocket}">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
          <h1 class="upgrade-title">Upgrade your Plan</h1>
          <p class="description" data-bind="html: text"></p>
          <button data-bind="click: goToPricing" class="btn btn-primary">See Plans and Pricing</button>
        </div>
      </div>
    </form>
  </div>
</div>
</upgrade-your-plan>
</navbar>

          <div class="container container-body">
            <div class="container-wrapper">
              <div class="main-content" data-bind="if: dataReady">
                <!-- ko if: !user().emailIsVerified() && user().daysPendingForVerification() <= 0 --><!-- /ko -->
                <!-- ko if: user().emailIsVerified() || user().daysPendingForVerification() > 0 -->
                  <div class="tail-spinner" data-bind="visible: loading" style="display: none;"></div>

                  <!-- ko if: currentComponent() === 'explore' --><!-- /ko -->

                  <!-- ko if: currentComponent() === 'dashboard' --><!-- /ko -->

                  <!-- ko if: currentComponent() === 'user-settings' --><!-- /ko -->
                <!-- /ko -->
              </div>
            </div>
          </div>

          <keyboard-shortcuts-modal params="triggerShow: showShortcutsTrigger,
                                          app: this">
    <div class="modal fade keyboard-shortcuts" id="keyboard-shortcut-modal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
              <h3 class="modal-title">Sample manager keyboard shortcuts</h3>
            </div>

            <div class="modal-body">
              <table>
                <tbody><tr>
                  <td class="key"><kbd>DOWN</kbd></td>
                  <td class="desc">Move to next sample in the current page.</td>
                </tr>
                <tr>
                  <td class="key"><kbd>UP</kbd></td>
                  <td class="desc">Move to previous sample in the current page.</td>
                </tr>
                <tr>
                  <td class="key"><kbd>LEFT</kbd></td>
                  <td class="desc">Move to next page.</td>
                </tr>
                <tr>
                  <td class="key"><kbd>RIGHT</kbd></td>
                  <td class="desc">Move to previous page.</td>
                </tr>
                <tr>
                  <td class="key"><kbd>SPACE</kbd> or <kbd>x</kbd></td>
                  <td class="desc">Toggle selection of current sample.</td>
                </tr>
                <tr>
                  <td class="key"><kbd>v</kbd></td>
                  <td class="desc">View current sample.</td>
                </tr>
                <tr>
                  <td class="key"><kbd>u</kbd></td>
                  <td class="desc">Upload samples.</td>
                </tr>
                <tr>
                  <td class="key"><kbd>s</kbd></td>
                  <td class="desc">Focus search input.</td>
                </tr>
                <tr>
                  <td class="key"><kbd>m</kbd></td>
                  <td class="desc">Move selected samples (non-multilabel classifiers only).</td>
                </tr>
                <tr>
                  <td class="key"><kbd>d</kbd></td>
                  <td class="desc">Delete selected samples.</td>
                </tr>
                <tr>
                  <td class="key"><kbd>h</kbd> or <kbd>?</kbd></td>
                  <td class="desc">Open this help window.</td>
                </tr>
              </tbody></table>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
      </div>
    </div>
</keyboard-shortcuts-modal>

          <!-- ko if: user() && (user().emailIsVerified() || user().daysPendingForVerification() > 0) -->

            <!-- ko if: currentComponent() === 'extractor-detail' --><!-- /ko -->

            <!-- ko if: currentComponent() === 'pipeline-detail' --><!-- /ko -->

            <!-- ko if: currentComponent() === 'project-detail' --><!-- /ko -->

            <!-- ko if: currentComponent() === 'module-create' -->
              <module-create-flatten data-bind="visible: !loading()" style="">
<!-- ko if: !appState.loading() && wizard.getCurrentComponent() -->
  <div class="container container-body module-create-flatten">
    <div class="container-wrapper">
      <div class="progress progress-global">
        <div class="progress-bar" role="progressbar" data-bind="style: {width: (currentStep() * 100 / 10) + '%'}" style="width: 80%;">
          <span class="sr-only"></span>
        </div>
      </div>
      <div class="navigation-bar">
        <span class="typcn typcn-arrow-left clickable" data-bind="click: goBack, visible: wizard.getCurrentComponent().goBack" style="display: none;"></span>
        <span class="typcn typcn-times clickable" data-bind="click: cancelWizard"></span>
      </div>
      <div data-bind="component: wizard.getCurrentComponent()">
  <h5 class="wizard-category-subtitle">New Model</h5>
  <h1 class="wizard-category-title">
    Name your model
  </h1>
  <div class="module-name">
    <input type="text" id="module-name" class="form-control" placeholder="Type something…" data-bind="textInput: moduleName, event: {keypress: onEnter}">
  </div>
  <div class="text-center margin-top-70">
    <button type="button" class="btn btn-primary continue" data-bind="enable: moduleName().length, click: finish" disabled="">Finish</button>
  </div>
</div>
    </div>
  </div>

  <!-- ko if: module() -->
    <confirm-modal params="modal_id: 'delete-project',
                            form_id: 'delete-project-form',
                            title: 'Stop Creation Wizard',
                            submit_handler: deleteModule.bind($component),
                            modal_title: 'Stop Creation Wizard',
                            modal_info: 'This will delete all your progress with this model.',
                            modal_question: 'Are you sure you want to stop the creation wizard?',
                            confirm_button: 'Stop Creation Wizard',
                            danger: true,
                            confirmButtonDisabled: appState.loading">
    <div class="modal fade" data-bind="attr: {id: modal_id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" id="delete-project">
      <div class="modal-dialog">
        <form method="POST" action="" data-bind="attr: {id: form_id}, submit: submit_handler" id="delete-project-form">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
              <h4 class="modal-title" id="myModalLabel" data-bind="text: modal_title">Stop Creation Wizard</h4>
            </div>

            <div class="modal-body">
              <div class="alert alert-danger" data-bind="css: {'alert-info': !danger, 'alert-danger': danger}">
                <strong>Warning:</strong>
                <span data-bind="html: modal_info">This will delete all your progress with this model.</span>
              </div>

              <p data-bind="html: modal_question">Are you sure you want to stop the creation wizard?</p>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
              <img data-bind="visible: confirmButtonDisabled, attr: { src: window.staticUrl + 'img/ajax-loader.gif' }" src="https://mlproductionmedia.azureedge.net/static/img/ajax-loader.gif" style="display: none;">
              <button type="submit" class="btn btn-danger" data-bind="css: {'btn-primary': !danger, 'btn-danger': danger},
                                 text: confirm_button,
                                 disable: confirmButtonDisabled">Stop Creation Wizard</button>
            </div>
          </div>
        </form>
      </div>
    </div>
</confirm-modal>
  <!-- /ko -->
<!-- /ko -->
</module-create-flatten>
            <!-- /ko -->

            <full-screen-modal>
<!-- ko if: appState.fullScreenComponent() && !appState.loading() --><!-- /ko -->
</full-screen-modal>
          <!-- /ko -->
        </div>
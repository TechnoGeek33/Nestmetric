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

                        <hr />

                        <li>
                          <a href="/main/my-account/">
                            <span class="typcn typcn-user" aria-hidden="true"></span> My Account </a>
                        </li>


                        <li>
                          <a href="/accounts/logout/">
                            <span class="glyphicon glyphicon-log-out" aria-hidden="true"></span> Logout  </a>
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
                        Explore </a>
                    </li>
                  </ul>

                </div>
              </div>
            </nav>
          </div>
        </navbar>

  <div class="container container-body">
          <div class="container-wrapper">
            <div class="main-content">
              <dashboard >
                <h3 class="margin-bottom-20">Recently Used</h3>

                <div class="row underlined-row">
                </div>

                <div class="row margin-bottom-20">
                  <div class="col-xs-4">
                    <h3 class="margin-bottom-20">My Models</h3>
                  </div>
                  <div class="col-xs-4">
                    <div class="data-search-bar module-search"  styles="display: none;">
                      <i class="glyphicon glyphicon-search"></i>
                      <input type="search" id="filter-input" class="form-control" placeholder="Search..."/>
                    </div>
                  </div>
                </div>

                <div class="alert alert-info alert-compact">
                  You don't own any models. You can <a href="/main/module-create/">create one</a>
                  or explore for <a href="/main/explore/">models ready to use</a>.
</div>

                <div class="row text-center api-loading-gif" data-bind="visible: searching" styles="display: none;">
                  <div class="logo-loader"></div>
                </div>
              </dashboard>

            </div>
          </div>
        </div> */}
      </div>

    )
  }
}

export default NavBar;

{/* <div class="tail-spinner" data-bind="visible: loading" styles="display: none;"></div>  */}
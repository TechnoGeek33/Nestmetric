import React, { Component } from 'react';

class Sample extends Component {

  handleDropdown() {

    if (document.getElementById('dlDropDown').className === "dropdown") {
      document.getElementById('dlDropDown').className = "dropdown open"
    }
    else {
      document.getElementById('dlDropDown').className = "dropdown"
    }
  }
  render() {
    return (

      <div>

        {/* Body */}
        <div className="container container-body container-body-extractor">
          <div className="container-wrapper">
            <div className="panel panel-default panel-content-wrapper panel-main panel-public">
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-2">
                    <div className="menu-nav-stacked">
                      <ul className="nav nav-pills nav-stacked-module" >
                        <li className="">
                          <a href="#">
                            <span className="typcn margin-right-5 typcn-input-checked" ></span>
                            <span >Single Predict</span>
                          </a>
                        </li>
                        <li data-bind="css: { active: active, disabled: disabled }" className="active">
                          <a href="#">
                            <span className="typcn margin-right-5 typcn-document" ></span>
                            <span >Batch</span>
                          </a>
                        </li>

                      </ul>
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
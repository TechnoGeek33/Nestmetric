import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'


class Preview extends Component {

    render() {
        return (
            <div data-bind="component: wizard.getCurrentComponent()">
            <h5 class="wizard-category-subtitle">Preview</h5>
            <h1 class="wizard-category-title">
              Select Texts
            </h1>
            <h5 class="wizard-subtitle">Select the columns with your texts. Multiple selected columns will be concatenated</h5>
            <div class="preview">
          <div class="discard-first-row">
          <div class="row input-fields">
            <div class="col-xs-6 col-xs-offset-0" data-bind="css: 'col-xs-offset-' + offset">
              <div class="checkbox">
                <label>
                  <checkbox params="checked: inputValue">
          <div class="custom-checkbox clickable" data-bind="click: check">
            <span class="typcn typcn-tick" data-bind="visible: checked">
          </span></div>
          </checkbox>
                  <span data-bind="text: labelName, click: function(){inputValue(!inputValue())}">Discard first row</span>
                </label>
                <span class="glyphicon glyphicon-question-sign question-sign-tooltip"  data-toggle="tooltip" data-placement="top" data-bind="visible: tooltip, attr: {title: tooltip}" style={{display: "none"}}></span>
              </div>
            </div>
          </div>
        
          </div>
          <div class="table-responsive table-preview-flatten">
            <table class="table" data-bind="event: { mouseout: disableHighlight()}">
              <tbody><tr>
                <th></th>
                
                <th data-bind="event: { mouseover: $component.applyHighlight($index())},
                               css: {highlighted: $component.highlight() === $index() || $data,
                                     selected: $data},
                               click: $component.selectColumn.bind($component, $index())" class="">
                  <div class="checkbox">
                    <label>
                      <checkbox params="checked: $data">
          <div class="custom-checkbox clickable" data-bind="click: check">
            <span class="typcn typcn-tick" data-bind="visible: checked" style={{display: "none"}}>
          </span></div>
          </checkbox>
                      <span data-bind="text: 'Use this column', click: function(){$data(!$data())}">Use this column</span>
                    </label>
                  </div>
                </th>
                
                <th data-bind="event: { mouseover: $component.applyHighlight($index())},
                               css: {highlighted: $component.highlight() === $index() || $data,
                                     selected: $data},
                               click: $component.selectColumn.bind($component, $index())" class="">
                  <div class="checkbox">
                    <label>
                      <checkbox params="checked: $data">
          <div class="custom-checkbox clickable" data-bind="click: check">
            <span class="typcn typcn-tick" data-bind="visible: checked" style={{display: "none"}}>
          </span></div>
          </checkbox>
                      <span data-bind="text: 'Use this column', click: function(){$data(!$data())}">Use this column</span>
                    </label>
                  </div>
                </th>
                
                <th data-bind="event: { mouseover: $component.applyHighlight($index())},
                               css: {highlighted: $component.highlight() === $index() || $data,
                                     selected: $data},
                               click: $component.selectColumn.bind($component, $index())" class="">
                  <div class="checkbox">
                    <label>
                      <checkbox params="checked: $data">
          <div class="custom-checkbox clickable" data-bind="click: check">
            <span class="typcn typcn-tick" data-bind="visible: checked" style={{display: "none"}}>
          </span></div>
          </checkbox>
                      <span>Use this column</span>
                    </label>
                  </div>
                </th>
                
                <th data-bind="event: { mouseover: $component.applyHighlight($index())},
                               css: {highlighted: $component.highlight() === $index() || $data,
                                     selected: $data},
                               click: $component.selectColumn.bind($component, $index())" class="">
                  <div class="checkbox">
                    <label>
                      <checkbox params="checked: $data">
          <div class="custom-checkbox clickable" data-bind="click: check">
            <span class="typcn typcn-tick" data-bind="visible: checked" style={{display: "none"}}>
          </span></div>
          </checkbox>
                      <span data-bind="text: 'Use this column', click: function(){$data(!$data())}">Use this column</span>
                    </label>
                  </div>
                </th>
                
                <th data-bind="event: { mouseover: $component.applyHighlight($index())},
                               css: {highlighted: $component.highlight() === $index() || $data,
                                     selected: $data},
                               click: $component.selectColumn.bind($component, $index())" class="">
                  <div class="checkbox">
                    <label>
                      <checkbox params="checked: $data">
          <div class="custom-checkbox clickable" data-bind="click: check">
            <span class="typcn typcn-tick" data-bind="visible: checked" style={{display: "none"}}>
          </span></div>
          </checkbox>
                      <span data-bind="text: 'Use this column', click: function(){$data(!$data())}">Use this column</span>
                    </label>
                  </div>
                </th>
                
                <th data-bind="event: { mouseover: $component.applyHighlight($index())},
                               css: {highlighted: $component.highlight() === $index() || $data,
                                     selected: $data},
                               click: $component.selectColumn.bind($component, $index())" class="">
                  <div class="checkbox">
                    <label>
                      <checkbox params="checked: $data">
          <div class="custom-checkbox clickable" data-bind="click: check">
            <span class="typcn typcn-tick" data-bind="visible: checked" style={{display: "none"}}>
          </span></div>
          </checkbox>
                      <span data-bind="text: 'Use this column', click: function(){$data(!$data())}">Use this column</span>
                    </label>
                  </div>
                </th>
                
                <th data-bind="event: { mouseover: $component.applyHighlight($index())},
                               css: {highlighted: $component.highlight() === $index() || $data,
                                     selected: $data},
                               click: $component.selectColumn.bind($component, $index())" class="">
                  <div class="checkbox">
                    <label>
                      <checkbox params="checked: $data">
          <div class="custom-checkbox clickable" data-bind="click: check">
            <span class="typcn typcn-tick" data-bind="visible: checked" style={{display: "none"}}>
          </span></div>
          </checkbox>
                      <span data-bind="text: 'Use this column', click: function(){$data(!$data())}">Use this column</span>
                    </label>
                  </div>
                </th>
                
                <th data-bind="event: { mouseover: $component.applyHighlight($index())},
                               css: {highlighted: $component.highlight() === $index() || $data,
                                     selected: $data},
                               click: $component.selectColumn.bind($component, $index())" class="">
                  <div class="checkbox">
                    <label>
                      <checkbox params="checked: $data">
          <div class="custom-checkbox clickable" data-bind="click: check">
            <span class="typcn typcn-tick" data-bind="visible: checked" style={{display: "none"}}>
          </span></div>
          </checkbox>
                      <span data-bind="text: 'Use this column', click: function(){$data(!$data())}">Use this column</span>
                    </label>
                  </div>
                </th>
                
                <th data-bind="event: { mouseover: $component.applyHighlight($index())},
                               css: {highlighted: $component.highlight() === $index() || $data,
                                     selected: $data},
                               click: $component.selectColumn.bind($component, $index())" class="">
                  <div class="checkbox">
                    <label>
                      <checkbox params="checked: $data">
          <div class="custom-checkbox clickable" data-bind="click: check">
            <span class="typcn typcn-tick" data-bind="visible: checked" style={{display: "none"}}>
          </span></div>
          </checkbox>
                      <span data-bind="text: 'Use this column', click: function(){$data(!$data())}">Use this column</span>
                    </label>
                  </div>
                </th>
                
                <th data-bind="event: { mouseover: $component.applyHighlight($index())},
                               css: {highlighted: $component.highlight() === $index() || $data,
                                     selected: $data},
                               click: $component.selectColumn.bind($component, $index())" class="">
                  <div class="checkbox">
                    <label>
                      <checkbox params="checked: $data">
          <div class="custom-checkbox clickable" data-bind="click: check">
            <span class="typcn typcn-tick" data-bind="visible: checked" style={{display: "none"}}>
          </span></div>
          </checkbox>
                      <span data-bind="text: 'Use this column', click: function(){$data(!$data())}">Use this column</span>
                    </label>
                  </div>
                </th>
                
              </tr>
   
                <tr data-bind="css: {disabled: $index() === 0 &amp;&amp; $parent.discardFirstRow()}" class="disabled">
                  <td data-bind="text: $index() + 1" class="td-index">1</td>
     
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">1</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Eldon Base for stackable storage shelf, platinum</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Muhammed MacIntyre</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">3</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">-213.25</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">38.94</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">35</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Nunavut</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Storage &amp; Organization</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">0.8</td>
                    
                  
                </tr>
              
                <tr data-bind="css: {disabled: $index() === 0 &amp;&amp; $parent.discardFirstRow()}">
                  <td data-bind="text: $index() + 1" class="td-index">2</td>
              
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">2</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">1.7 Cubic Foot Compact "Cube" Office Refrigerators</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Barry French</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">293</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">457.81</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">208.16</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">68.02</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Nunavut</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Appliances</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">0.58</td>
                    
                  
                </tr>
              
                <tr data-bind="css: {disabled: $index() === 0 &amp;&amp; $parent.discardFirstRow()}">
                  <td data-bind="text: $index() + 1" class="td-index">3</td>
              
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">3</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Cardinal Slant-D� Ring Binder, Heavy Gauge Vinyl</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Barry French</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">293</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">46.71</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">8.69</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">2.99</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Nunavut</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Binders and Binder Accessories</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">0.39</td>
                    
                  
                </tr>
              
                <tr data-bind="css: {disabled: $index() === 0 &amp;&amp; $parent.discardFirstRow()}">
                  <td data-bind="text: $index() + 1" class="td-index">4</td>
              
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">4</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">R380</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Clay Rozendal</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">483</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">1198.97</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">195.99</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">3.99</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Nunavut</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Telephones and Communication</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">0.58</td>
                    
                  
                </tr>
              
                <tr data-bind="css: {disabled: $index() === 0 &amp;&amp; $parent.discardFirstRow()}">
                  <td data-bind="text: $index() + 1" class="td-index">5</td>
              
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">5</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Holmes HEPA Air Purifier</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Carlos Soltero</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">515</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">30.94</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">21.78</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">5.94</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Nunavut</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Appliances</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">0.5</td>
                    
                  
                </tr>
              
                <tr data-bind="css: {disabled: $index() === 0 &amp;&amp; $parent.discardFirstRow()}">
                  <td data-bind="text: $index() + 1" class="td-index">6</td>
              
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">6</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">G.E. Longer-Life Indoor Recessed Floodlight Bulbs</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Carlos Soltero</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">515</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">4.43</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">6.64</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">4.95</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Nunavut</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Office Furnishings</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">0.37</td>
                    
                  
                </tr>
              
                <tr data-bind="css: {disabled: $index() === 0 &amp;&amp; $parent.discardFirstRow()}">
                  <td data-bind="text: $index() + 1" class="td-index">7</td>
              
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">7</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Angle-D Binders with Locking Rings, Label Holders</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Carl Jackson</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">613</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">-54.04</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">7.3</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">7.72</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Nunavut</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Binders and Binder Accessories</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">0.38</td>
                    
                  
                </tr>
              
                <tr data-bind="css: {disabled: $index() === 0 &amp;&amp; $parent.discardFirstRow()}">
                  <td data-bind="text: $index() + 1" class="td-index">8</td>
              
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">8</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">SAFCO Mobile Desk Side File, Wire Frame</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Carl Jackson</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">613</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">127.70</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">42.76</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">6.22</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Nunavut</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Storage &amp; Organization</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class=""> </td>
                    
                  
                </tr>
              
                <tr data-bind="css: {disabled: $index() === 0 &amp;&amp; $parent.discardFirstRow()}">
                  <td data-bind="text: $index() + 1" class="td-index">9</td>
              
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">9</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">SAFCO Commercial Wire Shelving, Black</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Monica Federle</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">643</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">-695.26</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">138.14</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">35</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Nunavut</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Storage &amp; Organization</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class=""> </td>
                    
                  
                </tr>
              
                <tr data-bind="css: {disabled: $index() === 0 &amp;&amp; $parent.discardFirstRow()}">
                  <td data-bind="text: $index() + 1" class="td-index">10</td>
              
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">10</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Xerox 198</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Dorothy Badders</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">678</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">-226.36</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">4.98</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">8.33</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Nunavut</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">Paper</td>
                    
                  
                    
                      <td data-bind="text: $parents[1].showTextInTable($data),
                                     event: { mouseover: $component.applyHighlight($index())},
                                     css: {highlighted: $component.highlight() === $index() || $component.tableHeaders()[$index()](),
                                           selected: $component.tableHeaders()[$index()]()},
                                     click: $component.selectColumn.bind($component, $index())" class="">0.38</td>
                    
                  
                </tr>
              
              <tr>
                <td class="td-index"></td>
                <td class="text-center not-clickable" data-bind="text: 'Showing ' + Math.min(10, table().length) + ' of ' + rowsLength() + ' rows',
                               attr: { colspan: tableHeaders().length }" colspan="10">Showing 10 of 11 rows</td>
              </tr>
            </tbody></table>
          </div>
        
              
            </div>
            <div class="text-center margin-top-20">
              <button type="button" class="btn btn-primary continue" data-bind="enable: enabledContinue, click: upload" disabled="">Continue</button>
            </div>
          
            <alert params="modal_id: 'alert-duplicated-samples',
                           modal_title: 'Upload Confirmation',
                           modal_info: uploadSamplesErrorMessage,
                           dismissNotAllowed: true,
                           onOk: function() {setTimeout(function() { uploadedSamples(true) }, 700)}">
              <div class="modal fade" data-bind="attr: {id: modal_id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  id="alert-duplicated-samples">
                <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"  data-bind="visible: !dismissNotAllowed" style={{display: "none"}}>×</button>
                        <h4 class="modal-title" id="myModalLabel" data-bind="text: modal_title">Upload Confirmation</h4>
                      </div>
                      <div class="modal-body">
                        <div class="alert alert-info">
                          <span data-bind="html: modal_info"></span>
                        </div>
                      </div>
          
                      <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal" data-bind="click: onOk, text: okMessage">Ok</button>
                      </div>
                    </div>
                </div>
              </div>
          </alert>
          
            <alert params="modal_id: 'alert-no-samples-uploaded',
                           modal_title: 'No data uploaded',
                           modal_info: uploadSamplesErrorMessage,
                           onOk: function() {setTimeout(function() { uploadedTable([]); }, 700)}">
              <div class="modal fade" data-bind="attr: {id: modal_id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  id="alert-no-samples-uploaded">
                <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"  data-bind="visible: !dismissNotAllowed">×</button>
                        <h4 class="modal-title" id="myModalLabel" data-bind="text: modal_title">No data uploaded</h4>
                      </div>
                      <div class="modal-body">
                        <div class="alert alert-info">
                          <span data-bind="html: modal_info"></span>
                        </div>
                      </div>
          
                      <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal" data-bind="click: onOk, text: okMessage">Ok</button>
                      </div>
                    </div>
                </div>
              </div>
          </alert>
          
            <loading params="id: 'uploading-data',
                             title: 'Uploading Data',
                             progress: uploadingProgress">
              <div class="modal fade" data-bind="attr: {id: id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  data-backdrop="static" data-keyboard="false" id="uploading-data">
                  <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel" data-bind="text: title">Uploading Data</h4>
                          </div>
                          <div class="modal-body">
                              <div class="progress progress-striped active">
                                <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{minWidth: "3em", width: "0%"}} data-bind="attr: { 'aria-valuenow': '60'},
                                                style: { width: parseInt(progress()) + '%' }" aria-valuenow="60">
                                  <span data-bind="text: useProgress ? parseInt(progress()) + '%' : 'Loading...'">0%</span>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </loading>
          
            <loading params="id: 'importing-data',
                             title: 'Importing Data',
                             progress: importingProgress">
              <div class="modal fade" data-bind="attr: {id: id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  data-backdrop="static" data-keyboard="false" id="importing-data">
                  <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel" data-bind="text: title">Importing Data</h4>
                          </div>
                          <div class="modal-body">
                              <div class="progress progress-striped active">
                                <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{minWidth: "3em", width: "0%"}} data-bind="attr: { 'aria-valuenow': '60'},
                                                style: { width: parseInt(progress()) + '%' }" aria-valuenow="60">
                                  <span data-bind="text: useProgress ? parseInt(progress()) + '%' : 'Loading...'">0%</span>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </loading>
          </div>
        )
    }
}

export default withRouter(Preview);
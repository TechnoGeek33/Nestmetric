import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

class SelectFeatures extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.state = {
      tasks: [{
        name: "Learn Angular",
        category: "wip",
        bgcolor: "yellow"
      },

      {
        name: "React",
        category: "wip",
        bgcolor: "pink"
      },

      {
        name: "Vue",
        category: "complete",
        bgcolor: "skyblue"
      }
      ]
    }
  }

  onDragStart = (ev, id) => {
    console.log('dragstart:', id);
    ev.dataTransfer.setData("id", id);
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let tasks = this.state.tasks.filter((task) => {
      if (task.name == id) {
        task.category = cat;
      }
      return task;
    });

    this.setState({
      ...this.state,
      tasks
    });
  }
  componentWillMount() {
    // To keep track of ProgressBar
    this.store.pageCount = 5;
  }
  render() {
    var tasks = {
      wip: [],
      complete: []
    }

    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div key={t.name}
          onDragStart={(e) => this.onDragStart(e, t.name)}
          draggable
          className="draggable"
          style={{ backgroundColor: t.bgcolor }}
        >
          {t.name}
        </div>
      );
    });

    return (
      <div data-bind="component: wizard.getCurrentComponent()">
        <h5 className="wizard-category-subtitle">Features</h5>
        <h1 className="wizard-category-title">
          Select Features
            </h1>

        <div class="table-responsive table-preview-flatten" style={{ width: "300px" }}>
          <table class="table">
            <tbody><tr>

              <th class="">
                <div class="checkbox">
                  <label>
                    <span >WIP</span>
                  </label>
                </div>
              </th>
            </tr>
            <tr> </tr>

              <tr className="wip"
                onDragOver={(e) => this.onDragOver(e)}
                onDrop={(e) => { this.onDrop(e, "wip") }}>

                {tasks.wip}
              </tr>
            </tbody></table>
        </div>

        <div class="table-responsive table-preview-flatten" style={{ width: "300px" }}>
          <table class="table">
            <tbody><tr>

              <th class="">
                <div class="checkbox">
                  <label>
                    <span >Complete</span>
                  </label>
                </div>
              </th>
            </tr>
            <tr> </tr>

              <tr className="droppable"
                onDragOver={(e) => this.onDragOver(e)}
                onDrop={(e) => this.onDrop(e, "complete")}>
                {tasks.complete}
              </tr>
            </tbody></table>
        </div>

        <div className="wip"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => { this.onDrop(e, "wip") }}>
          <span className="task-header">WIP</span>
          {tasks.wip}
        </div>
        <div className="droppable"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "complete")}>
          <span className="task-header">COMPLETED</span>
          {tasks.complete}
        </div>

        <div className="text-center margin-top-20">
          <button type="button" className="btn btn-primary continue" disabled="disabled">Continue</button>
        </div>

      </div>
    )
  }
}

export default withRouter(inject('store')(observer(SelectFeatures)))
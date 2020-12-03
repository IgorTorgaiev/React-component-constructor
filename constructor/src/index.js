import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component {
  constructor() {
    super();
    this.state = {name: "Constructor"};
  }
  render() {
    return <h2>Here we cover the sub-topic <em>Component {this.state.name}</em>.</h2>;
  }
}
ReactDOM.render(<Component />, document.getElementById('constructor'));


class Topic extends React.Component {
  constructor() {
    super();
    this.state = {type: "React JS"};
  }
  render() {
    return <h2>Do you find {this.state.type} to be difficult fo you?</h2>;
  }
}
ReactDOM.render(<Topic />, document.getElementById('constructor1'));
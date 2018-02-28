import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    return (
      <input
        className="a-checkbox"
        type="checkbox"
        name={this.props.name}
        id={this.props.id}
        value={this.props.value}
        checked={this.props.checked}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Checkbox;

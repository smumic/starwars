import React, { Component } from 'react';
import './css/listItem.css';


class ListItem extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render(){
    return (
      <li className="a-listItem a-listItem__item">
        {this.props.values}
      </li>
    )
  }
}

export default ListItem;

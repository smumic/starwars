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
      {this.props.values.length !== 0
        ? this.props.values.map(item => (
            <p className="a-listItem__data-item">{item}</p>
          ))
        : <p className="a-listItem__data-item">Keine Daten vorhanden</p>}
      </li>
    )
  }
}

export default ListItem;

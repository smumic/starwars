import React, { Component } from 'react';
import ListItem from 'components/atoms/listItem';
import './css/list.css';


class List extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render(){
    return (
      <ul className="m-list">
              {this.props.renderItems.length !== 0
        ? this.props.renderItems.map(categorie => (
          categorie.map(item => (
              <ListItem />
            ))
          ))
        : <li className="a-listItem">Keine Restaurants gefunden</li>}
      </ul>
    )
  }
}

export default List;

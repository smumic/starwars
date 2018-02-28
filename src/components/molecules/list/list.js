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
          <ListItem handleCategorie={categorie} key={Math.random()}/>
        ))
        : <li className="a-listItem">Keine Items gefunden</li>}
      </ul>
    )
  }
}

export default List;

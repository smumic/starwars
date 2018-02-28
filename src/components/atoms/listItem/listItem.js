import React, { Component } from 'react';
import './css/listItem.css';


class ListItem extends Component {
  render(){
    return (
      <li className="a-listItem a-listItem__item">
        {
          Object.values(this.props.values).map(function(item, i){
            return (<p className="a-listItem__data-item">{item}</p>);
          })
        }
      </li>
    )
  }
}

export default ListItem;

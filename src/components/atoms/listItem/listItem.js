import React, { Component } from 'react';
import './css/listItem.css';


class ListItem extends Component {

  onClick = (e) => {
    e.target.classList.toggle('selected');
  }

  render(){
    return (
      <li className="a-listItem a-listItem__item" onClick={this.onClick}>
        {
          Object.values(this.props.values).map(function(item, i){
            return (<p className="a-listItem__data-item" key={Math.random()}>{item}</p>);
          })
        }
      </li>
    )
  }
}

export default ListItem;

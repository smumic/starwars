import React, { Component } from 'react';
import ListItem from 'components/atoms/listItem';
import './css/list.css';


class List extends Component {
  constructor() {
    super();
    this.state = {
      listItems: null
    };
  }

  render(){
    return (
      <ul className="m-list">
        {
          this.props.renderItems.map(function(item, i){
            return item[1].map(function(dataReturn, i){
              return (<ListItem values={dataReturn} key={Math.random()}/>);
            });
          })
        }
      </ul>
    )
  }
}

export default List;

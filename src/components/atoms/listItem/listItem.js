import React, { Component } from 'react';
import './css/listItem.css';


class ListItem extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  handleCategories = ev => {
    for(var i = 0; i < this.props.handleCategorie.length; i++){
      console.log(this.props.handleCategorie, this.props.handleCategorie[i]);
    }
  }
  render(){
    let html = null;

    this.handleCategories();


    return (
      <div></div>
    )
  }
}

export default ListItem;

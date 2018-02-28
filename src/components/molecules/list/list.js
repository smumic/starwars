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

  componentWillMount(){
    let listItems = [];

    for(let i = 0; i < this.props.renderItems.length; i++){
      for(let y = 0; y < this.props.renderItems[i].length; y++){
        let data = this.props.renderItems[i][y];
        console.log(data);
        let values = Object.values(data);
        listItems.push(values);
      }
    }

    this.setState({
      listItems: listItems
    });
  }

  render(){


    return (
      <ul className="m-list">
      {this.state.listItems.length !== 0
        ? this.state.listItems.map(item => (
            <ListItem values={item} />
          ))
        : <li className="a-listItem">Keine Items gefunden</li>}
      </ul>
    )
  }
}

export default List;

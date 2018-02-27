import React, { Component } from 'react';
import './css/search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  render(){
    return (
      <div className="m-search m-search__container">
          <div className="m-search__container--child">
            <h1 className="m-search__title">Starwars API</h1>
          </div>
          <div className="m-search__container--child">
            <input className="m-search__input" placeholder="Search" />
            <span className="m-search__icon icon-search"></span>
          </div>
      </div>
    )
  }
}

export default Search;

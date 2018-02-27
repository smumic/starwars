import React, { Component } from 'react';
import './css/app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }
  render() {
    let html = null;

    if(this.state.isLoggedIn){
      html = (
        <div></div>
      );
    }else {
      html = (
        <div className="o-app__container--child">
          LOGIN
        </div>
      );
    }

    return (
      <div className="o-app o-app__container">
        {html}
      </div>
    );
  }
}

export default App;

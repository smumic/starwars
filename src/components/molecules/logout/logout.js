import React, { Component } from 'react';
import './css/logout.css';

class Logout extends Component {

  render(){
    return (
      <div className="m-logout m-logout__container" onClick={this.props.handleLogout}>
        <span className="icon-exit"></span>
      </div>
    )
  }
}

export default Logout;

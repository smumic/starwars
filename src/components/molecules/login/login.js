import React, { Component } from 'react';
import './css/login.css';


class Login extends Component {
  constructor() {
    super();
  }

  render(){
    return (
      <div className="m-login m-login__container">
        <div className="m-login__header">
            <h1>Starwars API Login</h1>
        </div>
        <div className="m-login__body">
        </div>
      </div>
    );
  };
}

export default Login;

import React, { Component } from 'react';
import './css/login.css';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = ev => {
    this.setState({
      username: ev.target.value
    });
    this.props.onTypedUsername(ev.target.value);
  }

  handlePassword = ev => {
    this.setState({
      username: ev.target.value
    });
    this.props.onTypedPassword(ev.target.value);
  }

  render(){
    return (
      <div className="m-login m-login__container">
        <div className="m-login__header">
            <h1 className="m-login__title">Login - Starwars API</h1>
        </div>
        <div className="m-login__body">
            <form className="m-login__form">
                <div className="m-login__form-container">
                  <div className="m-login__form-container--child">
                    <label className="m-login__label"><span className="m-login__icon icon-user"></span>Username</label>
                    <input className="m-login__input" onChange={this.handleUsername} />
                  </div>
                  <div className="m-login__form-container--child">
                    <label className="m-login__label"><span className="m-login__icon icon-key"></span>Password</label>
                    <input className="m-login__input" type="password" onChange={this.handlePassword} />
                  </div>
                    <button className="m-login__button" onClick={this.props.onLogin}>LOGIN</button>
                </div>
            </form>
        </div>
      </div>
    );
  };
}

export default Login;

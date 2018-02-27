import React, { Component } from 'react';
import Login from 'components/molecules/login';
import './css/app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "root",
      password: "root",
      typedUsername: "",
      typedPassword: "",
      isLoggedIn: false
    };
  }

  handleLogin = ev => {
    ev.preventDefault();
    if(this.state.typedUsername === this.state.username && this.state.typedPassword === this.state.password){
      this.setState({
        isLoggedIn: true
      })
    }else {
      console.log("bad");
    }
  };

  handleTypedUsername = username => {
    this.setState({
      typedUsername: username
    });
  }

  handleTypedPassword = password => {
    this.setState({
      typedPassword: password
    });
  }

  render() {
    let html = null;

    if(this.state.isLoggedIn){
      html = (
        <div>Logged In</div>
      );
    }else {
      html = (
        <div className="o-app__container--child">
          <Login onLogin={this.handleLogin} onTypedUsername={this.handleTypedUsername} onTypedPassword={this.handleTypedPassword}/>
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

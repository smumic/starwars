import React, { Component } from 'react';
import Login from 'components/molecules/login';
import Search from 'components/molecules/search';
import List from 'components/molecules/list';
import { fetchFilms } from 'api/starwars';
import { fetchPeople } from 'api/starwars';
import { fetchPlanets } from 'api/starwars';
import { fetchSpecies } from 'api/starwars';
import { fetchVehicles } from 'api/starwars';
import { fetchStarships } from 'api/starwars';
import './css/app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "root",
      password: "root",
      typedUsername: "",
      typedPassword: "",
      isLoggedIn: false,
      filteredData: null,
      isLoading: true,
      renderItems: null
    };
  }

  componentWillMount() {

    if (localStorage.getItem('loggedIn') === null || localStorage.getItem('loggedIn') === false) {
      this.setState({
        isLoggedIn: false
      });
    } else {
      this.setState({
        isLoggedIn: true
      });
    }
  }

  componentDidMount() {
    let renderData = [];
    Promise.all([
      fetchFilms(),
      fetchPeople(),
      fetchPlanets(),
      fetchSpecies(),
      fetchVehicles(),
      fetchStarships()
    ]).then(responses => {
      return responses.map(response => {
        return renderData.push(response);
      })
    }).then(() => {
        return this.setState({
          renderItems: renderData,
          isLoading: false
        });
    })
  };

  handleLogin = ev => {
    ev.preventDefault();
    if(this.state.typedUsername === this.state.username && this.state.typedPassword === this.state.password){
      this.setState({
        isLoggedIn: true
      });
      localStorage.setItem("loggedIn", true);
    } else {
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
      if(this.state.isLoading){
        html = (
          <div className="o-app__container--child o-app__loading-container">
            <Search />
            <div>LOADING</div>
          </div>
        );
      }else {
        html = (
          <div className="o-app__container--child">
            <Search />
            <List renderItems={this.state.renderItems}/>
          </div>
        );
      }
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

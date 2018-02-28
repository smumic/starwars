import React, { Component } from 'react';
import Login from 'components/molecules/login';
import Search from 'components/molecules/search';
import List from 'components/molecules/list';
import Loading from 'components/molecules/loading';
import Filter from 'components/molecules/filter';
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
      isLoading: true,
      renderItems: null,
      filteredItems: null,
      filterOptions:[],
      dataSequence: {
        films: 0,
        people: 1,
        planets: 2,
        species: 3,
        vehicles: 4,
        starships: 5
      },
      dataComponents: [
        ['director', 'title', 'producer', 'release_date', 'title', 'opening_crawl'],
        ['birth_year', 'eye_color', 'gender', 'name', 'skin_color', 'mass', 'height'],
        ['climate', 'name', 'population', 'terrain'],
        ['name', 'language', 'average_height', 'average_lifespan'],
        ['model', 'crew', 'max_atmosphering_speed', 'vehicle_class'],
        ['crew', 'model', 'name', 'length', 'starship_class']
     ]
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
          filteredItems: renderData,
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
    }
  };

  handleFilterSwitched = ev => {
    let options = this.state.filterOptions;
    let val = ev.target.value;
    let dataSeq = Object.keys(this.state.dataSequence);
    let renderItems = this.state.renderItems;
    let filteredItems = this.state.filteredItems;


    if(options.includes(val)){
      let index = options.indexOf(val);
      if (index > -1) {
        options.splice(index, 1);
      }
    }else {
      options.push(val);
    }

    if(options.length === 0){
      this.setState({
        filteredItems: renderItems
      });
    }else {
      for(let i = 0; i < filteredItems.length; i++){
        console.log(filteredItems[i]);
      }
    }

  };

  handleTypedUsername = username => {
    this.setState({
      typedUsername: username
    });
  };

  handleTypedPassword = password => {
    this.setState({
      typedPassword: password
    });
  };

  render() {
    let html = null;

    if(this.state.isLoggedIn){
      if(this.state.isLoading){
        html = (
          <div className="o-app__container--child o-app__loading-container">
            <Search />
            <Loading />
          </div>
        );
      }else {
        html = (
          <div className="o-app__container--child">
            <Search />
            <Filter onFilterSwitched={this.handleFilterSwitched}/>
            <List renderItems={this.state.filteredItems} dataComponents={this.state.dataComponents} dataSequence={this.dataSequence}/>
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

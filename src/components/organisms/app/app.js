import React, { Component } from 'react';
import Login from 'components/molecules/login';
import Search from 'components/molecules/search';
import List from 'components/molecules/list';
import Loading from 'components/molecules/loading';
import Filter from 'components/molecules/filter';
import Logout from 'components/molecules/logout';
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
      filterOptions:{
        filter: [],
        text: ''
      }
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
    let renderItems = this.state.renderItems;
    let newItems = [];


    if(options.filter.includes(val)){
      let index = options.filter.indexOf(val);
      if (index > -1) {
        options.filter.splice(index, 1);
      }
    }else {
      options.filter.push(val);
    }

    if(options.filter.length === 0){
      this.setState({
        filteredItems: renderItems
      });
    }else {
      for(let i = 0; i < renderItems.length; i++){
        for(let x = 0; x < options.filter.length; x++){
          if(renderItems[i][0] === options.filter[x]){
            if(options.text !== ''){
              for(let y = 0; y < renderItems[i][1].length; y++){
                if(Object.values(renderItems[i][1][y]).toString().includes(options.text)){
                  newItems.push(renderItems[i]);
                }
              }
            } else {
              newItems.push(renderItems[i]);
            }
          }
        }
      }
      this.setState({
        filteredItems: newItems
      })
    }
  };

  handleSearch = ev => {
    let renderItems = this.state.renderItems;
    let options = this.state.filterOptions;
    let newItems = [];

    this.setState({
      filterOptions: {
        filter: options.filter,
        text: ev.target.value
      }
    });

    if(options.filter.length === 0 && options.text === ''){
      this.setState({
        filteredItems: renderItems
      });
    } else {
      for(let i = 0; i < renderItems.length; i++){
        if(options.filter.length !== 0){
          for(let x = 0; x < options.filter.length; x++){
            if(renderItems[i][0] === options.filter[x]){
              if(options.text !== ''){
                for(let y = 0; y < renderItems[i][1].length; y++){
                  if(Object.values(renderItems[i][1][y]).toString().includes(options.text)){
                    newItems.push(renderItems[i]);
                  }
                }
              } else {
                newItems.push(renderItems[i]);
              }
            }
          }
        } else {
          for(let y = 0; y < renderItems[i][1].length; y++){
            if(Object.values(renderItems[i][1][y]).toString().includes(options.text)){
              newItems.push(renderItems[i]);
            }
          }
        }
      }
      this.setState({
        filteredItems: newItems
      })
    }

  };

  handleLogout = ev => {
    console.log('logout');
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
            <Logout handleLogout={this.handleLogout} />
            <Search onHandleSearch={this.handleSearch} />
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

import React, { Component } from 'react';
import Checkbox from 'components/atoms/checkbox';
import './css/filter.css';

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      activeFilms: false,
      activePeople: false,
      activePlanets: false,
      activeSpecies: false,
      activeVehicles: false,
      activeStarships: false
    };
  }

  toggleClassFilms = () => {
    const currentState = this.state.activeFilms;
    this.setState({ activeFilms: !currentState });
  };
  toggleClassPeople = () => {
    const currentState = this.state.activePeople;
    this.setState({ activePeople: !currentState });
  };
  toggleClassPlanets = () => {
    const currentState = this.state.activePlanets;
    this.setState({ activePlanets: !currentState });
  };
  toggleClassSpecies = () => {
    const currentState = this.state.activeSpecies;
    this.setState({ activeSpecies: !currentState });
  };
  toggleClassVehicels = () => {
    const currentState = this.state.activeVehicles;
    this.setState({ activeVehicles: !currentState });
  };
  toggleClassStarships = () => {
    const currentState = this.state.activeStarships;
    this.setState({ activeStarships: !currentState });
  };

  render(){
    return (
      <div className="m-filter m-filter__container">
        <ul className="m-filter__list">
          <li className="m-filter__listItem">
            <Checkbox id="films"  value="films" onChange={this.props.onFilterSwitched} />
            <label className={this.state.activeFilms ? 'm-filter__listItem--active': null}  onClick={this.toggleClassFilms} htmlFor="films">Films</label>
          </li>
          <li className="m-filter__listItem">
            <Checkbox id="people" value="people" onChange={this.props.onFilterSwitched} />
            <label className={this.state.activePeople ? 'm-filter__listItem--active': null}  onClick={this.toggleClassPeople} htmlFor="people">People</label>
          </li>
          <li className="m-filter__listItem">
            <Checkbox id="planets" value="planets" onChange={this.props.onFilterSwitched} />
            <label className={this.state.activePlanets ? 'm-filter__listItem--active': null}  onClick={this.toggleClassPlanets} htmlFor="planets">Planets</label>
          </li>
          <li className="m-filter__listItem">
            <Checkbox  id="species" value="species" onChange={this.props.onFilterSwitched} />
            <label className={this.state.activeSpecies ? 'm-filter__listItem--active': null}  onClick={this.toggleClassSpecies} htmlFor="species">Species</label>
          </li>
          <li className="m-filter__listItem">
            <Checkbox id="vehicles" value="vehicles" onChange={this.props.onFilterSwitched} />
            <label className={this.state.activeVehicles ? 'm-filter__listItem--active': null}  onClick={this.toggleClassVehicels} htmlFor="vehicles">Vehicles</label>
          </li>
          <li className="m-filter__listItem">
            <Checkbox id="starships"  value="starships"onChange={this.props.onFilterSwitched} />
            <label className={this.state.activeStarships ? 'm-filter__listItem--active': null}  onClick={this.toggleClassStarships} htmlFor="starships">Starships</label>
          </li>
        </ul>
      </div>
    )
  }
}

export default Filter;

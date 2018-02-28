import React, { Component } from 'react';
import Checkbox from 'components/atoms/checkbox';
import './css/filter.css';

class Filter extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render(){
    return (
      <div className="m-filter m-filter__container">
        <ul className="m-filter__list">
          <li className="m-filter__listItem">
            <Checkbox id="films"  value="films" onChange={this.props.onFilterSwitched} />
            <label htmlFor="films">Films</label>
          </li>
          <li className="m-filter__listItem">
            <Checkbox id="people" value="people" onChange={this.props.onFilterSwitched} />
            <label htmlFor="people">People</label>
          </li>
          <li className="m-filter__listItem">
            <Checkbox value="planets" onChange={this.props.onFilterSwitched} />
            <label htmlFor="planets">Planets</label>
          </li>
          <li className="m-filter__listItem">
            <Checkbox  id="species" value="species" onChange={this.props.onFilterSwitched} />
            <label htmlFor="species">Species</label>
          </li>
          <li className="m-filter__listItem">
            <Checkbox id="vehicles" value="vehicles" onChange={this.props.onFilterSwitched} />
            <label htmlFor="vehicles">Vehicles</label>
          </li>
          <li className="m-filter__listItem">
            <Checkbox id="starships"  value="starships"onChange={this.props.onFilterSwitched} />
            <label htmlFor="starships">Starships</label>
          </li>
        </ul>
      </div>
    )
  }
}

export default Filter;

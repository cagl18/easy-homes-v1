import React, { Component } from 'react';

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {};
    this.cities = this.cities.bind(this);
    this.property_types = this.property_types.bind(this);
    this.bedrooms = this.bedrooms.bind(this);
  }

  componentWillMount() {
    this.props.populateDefaultValues();
    console.log('[Filters.js] componentWillMount');
  }

  cities() {
    const { cities } = this.props.globalState.populateFormsData;

    if (cities !== undefined) {
      cities.sort();
      return cities.map(city => {
        return (
          <option key={city} value={city}>
            {city}
          </option>
        );
      });
    }
  }
  property_types() {
    const { property_types } = this.props.globalState.populateFormsData;

    if (property_types !== undefined) {
      property_types.sort();
      return property_types.map(property_type => {
        return (
          <option key={property_type} value={property_type}>
            {property_type}
          </option>
        );
      });
    }
  }
  bedrooms() {
    const { bedrooms } = this.props.globalState.populateFormsData;

    if (bedrooms !== undefined) {
      bedrooms.sort();
      return bedrooms.map(bedroom => {
        return (
          <option key={bedroom} value={bedroom}>
            {`${bedroom}+ Bedrooms`}
          </option>
        );
      });
    }
  }

  render() {
    return (
      <section id='filter'>
        <div className='filter__box'>
          <h4>Filter</h4>
          <label htmlFor='city'>City</label>
          <select
            name='city'
            className='filters neighborhood'
            onChange={this.props.change}
          >
            <option value='All'>All</option>
            {this.cities()}
          </select>
          <label htmlFor='property_type'>Property Type</label>
          <select
            name='property_type'
            className='filters housetype'
            onChange={this.props.change}
          >
            <option value='All'>All properties</option>
            {this.property_types()}
          </select>
          <label htmlFor='bedrooms'>Property Type</label>
          <select
            name='bedrooms'
            className='filters bedrooms'
            onChange={this.props.change}
          >
            {this.bedrooms()}
          </select>

          <div className='filters price'>
            <span className='title'>Price</span>
            <input
              className='min-price'
              type='text'
              name='min_price'
              onChange={this.props.change}
              value={this.props.globalState.min_price}
            />
            <input
              className='max-price'
              type='text'
              name='max_price'
              onChange={this.props.change}
              value={this.props.globalState.max_price}
            />
          </div>

          <div className='filters square-space'>
            <span className='title'>Square Space</span>
            <input
              className='min-floor-space'
              type='text'
              name='min_floor_space'
              onChange={this.props.change}
              value={this.props.globalState.min_floor_space}
            />
            <input
              className='max-floor-space'
              type='text'
              name='max_floor_space'
              onChange={this.props.change}
              value={this.props.globalState.max_floor_space}
            />
          </div>

          <div className='filters amenities'>
            <hr className='ruler' />
            <h3 className='title'>Amenities</h3>
            <label htmlFor='elevator'>
              Elevator
              <input
                name='elevator'
                type='checkbox'
                value={this.props.globalState.elevator}
                onChange={this.props.change}
              />
            </label>
            <label htmlFor='swimming-pool'>
              Swimming Pool
              <input
                name='swimming_pool'
                type='checkbox'
                value={this.props.globalState.swimming_pool}
                onChange={this.props.change}
              />
            </label>
            <label htmlFor='finished-basement'>
              Finished Basement
              <input
                name='finished_basement'
                type='checkbox'
                value={this.props.globalState.finished_basement}
                onChange={this.props.change}
              />
            </label>
            <label htmlFor='gym'>
              Gym
              <input
                name='gym'
                type='checkbox'
                value={this.props.globalState.gym}
                onChange={this.props.change}
              />
            </label>
          </div>
        </div>
      </section>
    );
  }
}

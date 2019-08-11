import React, { Component } from 'react';

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {};
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
            <option value='New York'>New York</option>
            <option value='San Diego'>San Diego</option>
            <option value='Miami'>Miami</option>
            <option value='Brooklyn'>Brooklyn</option>
            <option value='Bronx'>Bronx</option>
            <option value='San Fransisco'>San Fransisco</option>
            <option value='Queens'>Queens</option>
          </select>
          <label htmlFor='property_type'>Property Type</label>
          <select
            name='property_type'
            className='filters housetype'
            onChange={this.props.change}
          >
            <option value='All'>All properties</option>
            <option value='Apartment'>Apartment</option>
            <option value='Condo'>Condo</option>
            <option value='House'>House</option>
            <option value='Townhouse'>Townhouse</option>
            <option value='Retail'>Retail</option>
          </select>
          <label htmlFor='bedrooms'>Property Type</label>
          <select
            name='bedrooms'
            className='filters bedrooms'
            onChange={this.props.change}
          >
            <option value='0'>0+ Bedroom</option>
            <option value='1'>1+ Bedrooms</option>
            <option value='2'>2+ Bedrooms</option>
            <option value='3'>3+ Bedrooms</option>
            <option value='4'>4+ Bedrooms</option>
            <option value='5'>5+ Bedrooms</option>
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

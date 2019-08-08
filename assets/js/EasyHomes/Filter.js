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
          <select name='neighborhood' className='filters neighborhood'>
            <option>Ridgewood</option>
          </select>
          <select name='housetype' className='filters housetype'>
            <option>Ranch</option>
          </select>
          <select name='bedrooms' className='filters bedrooms'>
            <option>2 BR</option>
          </select>

          <div className='filters price'>
            <span className='title'>Price</span>
            <input className='min-price' type='text' name='min-price' />
            <input className='max-price' type='text' name='max-price' />
          </div>

          <div className='filters square-space'>
            <span className='title'>Square Space</span>
            <input
              className='min-floor-space'
              type='text'
              name='min-floor-space'
            />
            <input
              className='max-floor-space'
              type='text'
              name='max-floor-space'
            />
          </div>

          <div className='filters amenities'>
            <span className='title'>Amenities</span>
            <label htmlFor='elevator'>
              Elevator
              <input name='elevator' type='checkbox' value='elevator' />
            </label>
            <label htmlFor='swimming-pool'>
              Swimming Pool
              <input
                name='swimming-pool'
                type='checkbox'
                value='swimming-pool'
              />
            </label>
            <label htmlFor='finished-basement'>
              Finished Basement
              <input
                name='finished-basement'
                type='checkbox'
                value='finished-basement'
              />
            </label>
            <label htmlFor='gym'>
              Gym
              <input name='gym' type='checkbox' value='gym' />
            </label>
          </div>
        </div>
      </section>
    );
  }
}

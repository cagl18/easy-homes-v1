import React, { Component } from 'react';
import Listing from './Listing';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
    this.displayListings = this.displayListings.bind(this);
  }

  displayListings() {
    const dataArr = this.props.data;
    if (dataArr === undefined || dataArr.length === 0) {
      return (
        <p className='listings__found'>
          Sorry, your filters did not match any listings
        </p>
      );
    }
    return dataArr.map((listing, index) => {
      if (this.props.globalState.view_mode === 'grid') {
        //THIS IS THE GRID VIEW
        return (
          <div className='col-md-3'>
            <Listing key={index} data={listing} />
          </div>
        );
      } else {
        //THIS IS THE LIST VIEW
        return (
          <div className='col-md-12 col-lg-6'>
            <Listing key={index} data={listing} />
          </div>
        );
      }
    });
  }

  render() {
    return (
      <section className='listings'>
        <section className='listings__search-area'>
          <input
            onChange={this.props.onFilterChange}
            type='text'
            name='search'
            placeholder='Search Address'
          />
        </section>

        <section className='listings__view'>
          <div className='listings__found'>
            {this.props.globalState.filtered_data.length} results found
          </div>

          <div className='listings__view-options'>
            <select
              name='sort_by'
              className='listings__sortby'
              onChange={this.props.onFilterChange}
            >
              <option value='price-asc'>Lowest Price</option>
              <option value='price-des'>Highest Price</option>
            </select>
            <div className='listings__grid_options'>
              <i
                className='fa fa-th-list'
                aria-hidden='true'
                onClick={this.props.changeView.bind(null, 'list')}
              />
              <i
                className='fa fa-th'
                aria-hidden='true'
                onClick={this.props.changeView.bind(null, 'grid')}
              />
            </div>
          </div>
        </section>

        <div className='row'>
          <section className='listings__results'>
            {this.displayListings()}
          </section>
        </div>

        <section id='listings__pagination'>
          <ul className='pagination__pages'>
            <li>Prev</li>
            <li className='active'>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>
        </section>
      </section>
    );
  }
}

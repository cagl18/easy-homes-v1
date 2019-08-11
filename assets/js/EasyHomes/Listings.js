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
      return <Listing key={index} data={listing} />;
    });
  }

  render() {
    return (
      <section className='listings'>
        <section className='listings__search-area'>
          <input type='text' name='search' placeholder='Search Address' />
        </section>

        <section className='listings__view'>
          <div className='listings__found'> 390 results found</div>

          <div className='listings__view-options'>
            <select className='listings__sortby'>
              <option value='sortby__price-asc'>Highest Price</option>
              <option value='sortby__price-des'>Lowest Price</option>
            </select>
            <div className='listings__grid_options'>
              <i className='fa fa-th-list' aria-hidden='true' />
              <i className='fa fa-th' aria-hidden='true' />
            </div>
          </div>
        </section>

        <section className='listings__results'>
          {this.displayListings()}
        </section>

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

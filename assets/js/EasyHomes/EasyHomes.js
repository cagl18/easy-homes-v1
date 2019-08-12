import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Listings from './Listings';
import Filter from './Filter';
import listing_data from './data/listingsData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      listing_data,
      city: 'All',
      property_type: 'All',
      bedrooms: 3,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 5000,
      elevator: false,
      finished_basement: false,
      gym: false,
      swimming_pool: false,
      filtered_data: listing_data,
      populateFormsData: ''
    };
    this.changeFilters = this.changeFilters.bind(this);
    this.setFilteredData = this.setFilteredData.bind(this);
    this.populateForms = this.populateForms.bind(this);
  }

  changeFilters(event) {
    const name = event.target.name;
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state);
        this.setFilteredData();
      }
    );
  }

  populateForms() {
    // city
    let cities = this.state.listing_data.map(item => {
      return item.city;
    });
    cities = new Set(cities); // ensuring there are not duplicates
    cities = [...cities];

    // home_type
    let property_types = this.state.listing_data.map(item => {
      return item.property_type;
    });
    property_types = new Set(property_types);
    property_types = [...property_types];

    // bedrooms
    let bedrooms = this.state.listing_data.map(item => {
      return item.bedrooms;
    });
    bedrooms = new Set(bedrooms);
    bedrooms = [...bedrooms];

    this.setState(
      {
        populateFormsData: {
          cities,
          property_types,
          bedrooms
        }
      },
      () => {
        console.log(this.state.populateFormsData);
      }
    );
  }

  setFilteredData() {
    let newData = this.state.listing_data.filter(item => {
      return (
        item.price >= this.state.min_price &&
        item.price <= this.state.max_price &&
        item.squareSpace >= this.state.min_floor_space &&
        item.squareSpace <= this.state.max_floor_space &&
        item.bedrooms >= this.state.bedrooms
      );
    });

    if (this.state.city !== 'All') {
      newData = newData.filter(item => {
        return item.city == this.state.city;
      });
    }

    if (this.state.property_type !== 'All') {
      newData = newData.filter(item => {
        return item.property_type == this.state.property_type;
      });
    }

    this.setState({
      filtered_data: newData
    });
  }

  render() {
    // console.log(this.state.listing_data);
    return (
      <div>
        <Header />
        <section id='content-area'>
          <Filter
            change={this.changeFilters}
            globalState={this.state}
            populateDefaultValues={this.populateForms}
          />
          <Listings data={this.state.filtered_data} />
        </section>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);

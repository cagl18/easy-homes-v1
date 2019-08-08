import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Listings from './Listings';
import Filter from './Filter';
import listingData from './data/listingsData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      listingData
    };
  }

  render() {
    console.log(this.state.listingData);
    return (
      <div>
        <Header />
        <section id='content-area'>
          <Filter />
          <Listings />
        </section>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);

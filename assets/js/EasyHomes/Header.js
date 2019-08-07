import React, { Component } from 'react';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <header>
        <div className='logo'>EasyHomes</div>
        <nav>
          <a href='#create-ads'>Create Ads</a>
          <a href='#about'>About Us</a>
          <a href='#login'>log in</a>
          <a href='#register' className='register-btn'>
            Register
          </a>
        </nav>
      </header>
    );
  }
}

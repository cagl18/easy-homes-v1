import React, { Component } from 'react';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
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
          <div className='col-md-3'>
            <div className='listing'>
              <div className='listing__img-box'>
                <div className='listing__details'>
                  <div className='listing__details_agent'>
                    <div className='listing__agent_img'> </div>
                    <div className='listing__agent_info'>
                      <span className='listing__agent_name'>Martina Smith</span>
                      <span className='listing__posted_date'>
                        Posted on 05/05/2017
                      </span>
                    </div>
                  </div>
                  <div className='listing__details_on_img'>
                    <div className='listing__square_space'>
                      <i className='fa fa-square-o' aria-hidden='true' />
                      <span>1000 ft&sup2;</span>
                    </div>
                    <div className='listing__bedrooms'>
                      <i className='fa fa-bed' aria-hidden='true' />
                      <span>3 bedrooms</span>
                    </div>
                  </div>
                  <div className='listing__view'>
                    <a href='' className='listing__view-btn'>
                      View Listing
                    </a>
                  </div>
                </div>

                <span className='listing__title'>House in the Hamptons</span>
              </div>
              <div className='listing__details_footer'>
                <span className='listing__price'>$1000 /month</span>
                <span className='listing__location'>
                  <i className='fa fa-map-marker' aria-hidden='true' /> NY, New
                  York
                </span>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='listing'>
              <div className='listing__img-box'>
                <div className='listing__details'>
                  <div className='listing__details_agent'>
                    <div className='listing__agent_img'> </div>
                    <div className='listing__agent_info'>
                      <span className='listing__agent_name'>Martina Smith</span>
                      <span className='listing__posted_date'>
                        Posted on 05/05/2017
                      </span>
                    </div>
                  </div>
                  <div className='listing__details_on_img'>
                    <div className='listing__square_space'>
                      <i className='fa fa-square-o' aria-hidden='true' />
                      <span>1000 ft&sup2;</span>
                    </div>
                    <div className='listing__bedrooms'>
                      <i className='fa fa-bed' aria-hidden='true' />
                      <span>3 bedrooms</span>
                    </div>
                  </div>
                  <div className='listing__view'>
                    <a href='' className='listing__view-btn'>
                      View Listing
                    </a>
                  </div>
                </div>

                <span className='listing__title'>House in the Hamptons</span>
              </div>
              <div className='listing__details_footer'>
                <span className='listing__price'>$1000 /month</span>
                <span className='listing__location'>
                  <i className='fa fa-map-marker' aria-hidden='true' /> NY, New
                  York
                </span>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='listing'>
              <div className='listing__img-box'>
                <div className='listing__details'>
                  <div className='listing__details_agent'>
                    <div className='listing__agent_img'> </div>
                    <div className='listing__agent_info'>
                      <span className='listing__agent_name'>Martina Smith</span>
                      <span className='listing__posted_date'>
                        Posted on 05/05/2017
                      </span>
                    </div>
                  </div>
                  <div className='listing__details_on_img'>
                    <div className='listing__square_space'>
                      <i className='fa fa-square-o' aria-hidden='true' />
                      <span>1000 ft&sup2;</span>
                    </div>
                    <div className='listing__bedrooms'>
                      <i className='fa fa-bed' aria-hidden='true' />
                      <span>3 bedrooms</span>
                    </div>
                  </div>
                  <div className='listing__view'>
                    <a href='' className='listing__view-btn'>
                      View Listing
                    </a>
                  </div>
                </div>

                <span className='listing__title'>House in the Hamptons</span>
              </div>
              <div className='listing__details_footer'>
                <span className='listing__price'>$1000 /month</span>
                <span className='listing__location'>
                  <i className='fa fa-map-marker' aria-hidden='true' /> NY, New
                  York
                </span>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='listing'>
              <div className='listing__img-box'>
                <div className='listing__details'>
                  <div className='listing__details_agent'>
                    <div className='listing__agent_img'> </div>
                    <div className='listing__agent_info'>
                      <span className='listing__agent_name'>Martina Smith</span>
                      <span className='listing__posted_date'>
                        Posted on 05/05/2017
                      </span>
                    </div>
                  </div>
                  <div className='listing__details_on_img'>
                    <div className='listing__square_space'>
                      <i className='fa fa-square-o' aria-hidden='true' />
                      <span>1000 ft&sup2;</span>
                    </div>
                    <div className='listing__bedrooms'>
                      <i className='fa fa-bed' aria-hidden='true' />
                      <span>3 bedrooms</span>
                    </div>
                  </div>
                  <div className='listing__view'>
                    <a href='' className='listing__view-btn'>
                      View Listing
                    </a>
                  </div>
                </div>

                <span className='listing__title'>House in the Hamptons</span>
              </div>
              <div className='listing__details_footer'>
                <span className='listing__price'>$1000 /month</span>
                <span className='listing__location'>
                  <i className='fa fa-map-marker' aria-hidden='true' /> NY, New
                  York
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className='listings__pagination'>
          <ul className='pagination-pages'>
            <li>Prev</li>
            <li>1</li>
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

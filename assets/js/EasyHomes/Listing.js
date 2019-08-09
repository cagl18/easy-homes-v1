import React from 'react';

const Listing = props => {
  return (
    <div className='col-md-3'>
      <div className='listing'>
        <div
          className='listing__img-box'
          style={{
            background: `url(${props.data.image})
          no-repeat center center`
          }}
        >
          <div className='listing__details'>
            <div className='listing__details_agent'>
              <div
                className='listing__agent_img'
                style={{
                  background: `url(${props.data.agent.img})
            no-repeat center top`,
                  backgroundSize: '5rem'
                }}
              >
                {' '}
              </div>
              <div className='listing__agent_info'>
                <span className='listing__agent_name'>
                  {props.data.agent.name}
                </span>
                <span className='listing__posted_date'>
                  Posted on {props.data.listedDate}
                </span>
              </div>
            </div>
            <div className='listing__details_on_img'>
              <div className='listing__square_space'>
                <i className='fa fa-square-o' aria-hidden='true' />
                <span>{props.data.squareSpace} ft&sup2;</span>
              </div>
              <div className='listing__bedrooms'>
                <i className='fa fa-bed' aria-hidden='true' />
                <span>{props.data.bedrooms} bedrooms</span>
              </div>
            </div>
            <div className='listing__view'>
              <a href='' className='listing__view-btn'>
                View Listing
              </a>
            </div>
          </div>

          <span className='listing__title'>{props.data.title}</span>
        </div>
        <div className='listing__details_footer'>
          <span className='listing__price'>
            ${props.data.price.toLocaleString()}
          </span>
          <span className='listing__location'>
            <i className='fa fa-map-marker' aria-hidden='true' />{' '}
            {props.data.state}, {props.data.city}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Listing;

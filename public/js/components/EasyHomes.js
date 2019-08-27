webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {};
    _this.cities = _this.cities.bind(_this);
    _this.property_types = _this.property_types.bind(_this);
    _this.bedrooms = _this.bedrooms.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.populateDefaultValues();
      console.log('[Filters.js] componentWillMount');
    }
  }, {
    key: 'cities',
    value: function cities() {
      var cities = this.props.globalState.populateFormsData.cities;


      if (cities !== undefined) {
        cities.sort();
        return cities.map(function (city) {
          return _react2.default.createElement(
            'option',
            { key: city, value: city },
            city
          );
        });
      }
    }
  }, {
    key: 'property_types',
    value: function property_types() {
      var property_types = this.props.globalState.populateFormsData.property_types;


      if (property_types !== undefined) {
        property_types.sort();
        return property_types.map(function (property_type) {
          return _react2.default.createElement(
            'option',
            { key: property_type, value: property_type },
            property_type
          );
        });
      }
    }
  }, {
    key: 'bedrooms',
    value: function bedrooms() {
      var bedrooms = this.props.globalState.populateFormsData.bedrooms;


      if (bedrooms !== undefined) {
        bedrooms.sort();
        return bedrooms.map(function (bedroom) {
          return _react2.default.createElement(
            'option',
            { key: bedroom, value: bedroom },
            bedroom + '+ Bedrooms'
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'div',
          { className: 'filter__box' },
          _react2.default.createElement(
            'h4',
            null,
            'Filter'
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'city' },
            'City'
          ),
          _react2.default.createElement(
            'select',
            {
              name: 'city',
              className: 'filters neighborhood',
              onChange: this.props.change
            },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All'
            ),
            this.cities()
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'property_type' },
            'Property Type'
          ),
          _react2.default.createElement(
            'select',
            {
              name: 'property_type',
              className: 'filters housetype',
              onChange: this.props.change
            },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All properties'
            ),
            this.property_types()
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'bedrooms' },
            'Property Type'
          ),
          _react2.default.createElement(
            'select',
            {
              name: 'bedrooms',
              className: 'filters bedrooms',
              onChange: this.props.change
            },
            this.bedrooms()
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters price' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Price'
            ),
            _react2.default.createElement('input', {
              className: 'min-price',
              type: 'text',
              name: 'min_price',
              onChange: this.props.change,
              value: this.props.globalState.min_price
            }),
            _react2.default.createElement('input', {
              className: 'max-price',
              type: 'text',
              name: 'max_price',
              onChange: this.props.change,
              value: this.props.globalState.max_price
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters square-space' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Square Space'
            ),
            _react2.default.createElement('input', {
              className: 'min-floor-space',
              type: 'text',
              name: 'min_floor_space',
              onChange: this.props.change,
              value: this.props.globalState.min_floor_space
            }),
            _react2.default.createElement('input', {
              className: 'max-floor-space',
              type: 'text',
              name: 'max_floor_space',
              onChange: this.props.change,
              value: this.props.globalState.max_floor_space
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters amenities' },
            _react2.default.createElement('hr', { className: 'ruler' }),
            _react2.default.createElement(
              'h3',
              { className: 'title' },
              'Amenities'
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'elevator' },
              'Elevator',
              _react2.default.createElement('input', {
                name: 'elevator',
                type: 'checkbox',
                value: this.props.globalState.elevator,
                onChange: this.props.change
              })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'swimming-pool' },
              'Swimming Pool',
              _react2.default.createElement('input', {
                name: 'swimming_pool',
                type: 'checkbox',
                value: this.props.globalState.swimming_pool,
                onChange: this.props.change
              })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'finished-basement' },
              'Finished Basement',
              _react2.default.createElement('input', {
                name: 'finished_basement',
                type: 'checkbox',
                value: this.props.globalState.finished_basement,
                onChange: this.props.change
              })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'gym' },
              'Gym',
              _react2.default.createElement('input', {
                name: 'gym',
                type: 'checkbox',
                value: this.props.globalState.gym,
                onChange: this.props.change
              })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          'EasyHomes'
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#create-ads' },
            'Create Ads'
          ),
          _react2.default.createElement(
            'a',
            { href: '#about' },
            'About Us'
          ),
          _react2.default.createElement(
            'a',
            { href: '#login' },
            'log in'
          ),
          _react2.default.createElement(
            'a',
            { href: '#register', className: 'register-btn' },
            'Register'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _Listing = __webpack_require__(238);

var _Listing2 = _interopRequireDefault(_Listing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {};
    _this.displayListings = _this.displayListings.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'displayListings',
    value: function displayListings() {
      var _this2 = this;

      var dataArr = this.props.data;
      if (dataArr === undefined || dataArr.length === 0) {
        return _react2.default.createElement(
          'p',
          { className: 'listings__found' },
          'Sorry, your filters did not match any listings'
        );
      }
      return dataArr.map(function (listing, index) {
        if (_this2.props.globalState.view_mode === 'grid') {
          //THIS IS THE GRID VIEW
          return _react2.default.createElement(
            'div',
            { className: 'col-md-3' },
            _react2.default.createElement(_Listing2.default, { key: index, data: listing })
          );
        } else {
          //THIS IS THE LIST VIEW
          return _react2.default.createElement(
            'div',
            { className: 'col-md-12 col-lg-6' },
            _react2.default.createElement(_Listing2.default, { key: index, data: listing })
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'listings__search-area' },
          _react2.default.createElement('input', {
            onChange: this.props.onFilterChange,
            type: 'text',
            name: 'search',
            placeholder: 'Search Address'
          })
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings__view' },
          _react2.default.createElement(
            'div',
            { className: 'listings__found' },
            ' 390 results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'listings__view-options' },
            _react2.default.createElement(
              'select',
              {
                name: 'sort_by',
                className: 'listings__sortby',
                onChange: this.props.onFilterChange
              },
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Lowest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-des' },
                'Highest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'listings__grid_options' },
              _react2.default.createElement('i', {
                className: 'fa fa-th-list',
                'aria-hidden': 'true',
                onClick: this.props.changeView.bind(null, 'list')
              }),
              _react2.default.createElement('i', {
                className: 'fa fa-th',
                'aria-hidden': 'true',
                onClick: this.props.changeView.bind(null, 'grid')
              })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings__results' },
          this.displayListings()
        ),
        _react2.default.createElement(
          'section',
          { id: 'listings__pagination' },
          _react2.default.createElement(
            'ul',
            { className: 'pagination__pages' },
            _react2.default.createElement(
              'li',
              null,
              'Prev'
            ),
            _react2.default.createElement(
              'li',
              { className: 'active' },
              '1'
            ),
            _react2.default.createElement(
              'li',
              null,
              '2'
            ),
            _react2.default.createElement(
              'li',
              null,
              '3'
            ),
            _react2.default.createElement(
              'li',
              null,
              '4'
            ),
            _react2.default.createElement(
              'li',
              null,
              '5'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Next'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listings_data = [{
  agent: {
    name: 'Steve Gold',
    img: 'https://mediarouting.vestahub.com/Media/94094261/box/600x800'
  },
  listedDate: new Date().toLocaleDateString(),
  title: '159 grand ave',
  city: 'New York',
  state: 'NY',
  bedrooms: 5,
  price: 2500000,
  squareSpace: 3400,
  amenities: ['elevator', 'gym'],
  property_type: 'Apartment',
  image: 'http://www.falconsafaris.com/wp-content/uploads/2017/08/Views-Ocean-View-room-001_Cropped_Resized.jpg'
}, {
  agent: {
    name: 'Steve Gold',
    img: 'https://mediarouting.vestahub.com/Media/94094261/box/600x800'
  },
  listedDate: new Date().toLocaleDateString(),
  title: '624 park bld',
  city: 'Miami',
  state: 'FL',
  bedrooms: 4,
  price: 220000,
  squareSpace: 2100,
  amenities: ['elevator', 'gym'],
  property_type: 'House',
  image: 'https://3ka9112lpy6c1dcyvb2ouv2u-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/3-1128x640.jpg'
}, {
  agent: {
    name: 'Steve Gold',
    img: 'https://mediarouting.vestahub.com/Media/94094261/box/600x800'
  },
  listedDate: new Date().toLocaleDateString(),
  title: '891 christy St',
  city: 'Brooklyn',
  state: 'NY',
  bedrooms: 3,
  price: 1200000,
  squareSpace: 1500,
  amenities: ['elevator', 'gym'],
  property_type: 'Apartment',
  image: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/10/42/10420926.jpeg'
}, {
  agent: {
    name: 'Steve Gold',
    img: 'https://mediarouting.vestahub.com/Media/94094261/box/600x800'
  },
  listedDate: new Date().toLocaleDateString(),
  title: '22 marvel ave',
  city: 'Bronx',
  state: 'NY',
  bedrooms: 2,
  price: 800000,
  squareSpace: 1500,
  amenities: ['elevator', 'gym'],
  property_type: 'Retail',
  image: 'https://q-fa.bstatic.com/xdata/images/hotel/max1024x768/137854837.jpg?k=b7d5d2e6166a7dcd60e2229180e0c513f5d1e3400567fd36ce8fa0f1976c641a&o='
}, {
  agent: {
    name: 'Steve Gold',
    img: 'https://mediarouting.vestahub.com/Media/94094261/box/600x800'
  },
  listedDate: new Date().toLocaleDateString(),
  title: '998 columbus ave',
  city: 'San Diego',
  state: 'CA',
  bedrooms: 1.5,
  price: 220000,
  squareSpace: 2000,
  amenities: ['elevator', 'gym'],
  property_type: 'Condo',
  image: 'https://fa0d2c5ab01a46fee517-f148673d37ae11662983b1b5224eda6e.ssl.cf2.rackcdn.com/Pdrlpx3eqzNM9VR.jpg'
}, {
  agent: {
    name: 'Steve Gold',
    img: 'https://mediarouting.vestahub.com/Media/94094261/box/600x800'
  },
  listedDate: new Date().toLocaleDateString(),
  title: '159 grand ave',
  city: 'San Fransisco',
  state: 'CA',
  bedrooms: 3.5,
  price: 380000,
  squareSpace: 1100,
  amenities: ['elevator', 'gym'],
  property_type: 'Condo',
  image: 'https://ap.rdcpix.com/2071081727/0b2f38ca9c99491967f8daa641b305a6l-m0xd-w1020_h770_q80.jpg'
}, {
  agent: {
    name: 'Steve Gold',
    img: 'https://mediarouting.vestahub.com/Media/94094261/box/600x800'
  },
  listedDate: new Date().toLocaleDateString(),
  title: '964 Hone ave',
  city: 'Bronx',
  state: 'NY',
  bedrooms: 5,
  price: 920000,
  squareSpace: 1350,
  amenities: ['elevator', 'gym'],
  property_type: 'Apartment',
  image: 'https://thenypost.files.wordpress.com/2014/11/home2.jpg?quality=90&strip=all&w=618&h=410&crop=1'
}, {
  agent: {
    name: 'Steve Gold',
    img: 'https://mediarouting.vestahub.com/Media/94094261/box/600x800'
  },
  listedDate: new Date().toLocaleDateString(),
  title: '225 main St',
  city: 'Queens',
  state: 'NY',
  bedrooms: 2,
  price: 1200000,
  squareSpace: 1500,
  amenities: ['elevator', 'gym'],
  property_type: 'Townhouse',
  image: 'https://cdn-img0.streeteasy.com/nyc/image/48/332245048.jpg'
}];

exports.default = listings_data;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(231);

var _Header2 = _interopRequireDefault(_Header);

var _Listings = __webpack_require__(232);

var _Listings2 = _interopRequireDefault(_Listings);

var _Filter = __webpack_require__(230);

var _Filter2 = _interopRequireDefault(_Filter);

var _listingsData = __webpack_require__(233);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      listing_data: _listingsData2.default,
      city: 'All',
      property_type: 'All',
      bedrooms: 0,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 5000,
      elevator: false,
      finished_basement: false,
      gym: false,
      swimming_pool: false,
      filtered_data: _listingsData2.default,
      populateFormsData: '',
      sort_by: 'price-asc',
      view_mode: 'grid',
      search: ''
    };
    _this.changeFilters = _this.changeFilters.bind(_this);
    _this.setFilteredData = _this.setFilteredData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    _this.changeViewMode = _this.changeViewMode.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setFilteredData(); //sorting listing result by the sort_by state before component renders
    }
  }, {
    key: 'changeFilters',
    value: function changeFilters(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.setFilteredData();
      });
    }
  }, {
    key: 'changeViewMode',
    value: function changeViewMode(view_mode) {
      this.setState({ view_mode: view_mode });
    }
  }, {
    key: 'populateForms',
    value: function populateForms() {
      var _this3 = this;

      // city
      var cities = this.state.listing_data.map(function (item) {
        return item.city;
      });
      cities = new Set(cities); // ensuring there are not duplicates
      cities = [].concat(_toConsumableArray(cities));

      // home_type
      var property_types = this.state.listing_data.map(function (item) {
        return item.property_type;
      });
      property_types = new Set(property_types);
      property_types = [].concat(_toConsumableArray(property_types));

      // bedrooms
      var bedrooms = this.state.listing_data.map(function (item) {
        return item.bedrooms;
      });
      bedrooms = new Set(bedrooms);
      bedrooms = [].concat(_toConsumableArray(bedrooms));

      this.setState({
        populateFormsData: {
          cities: cities,
          property_types: property_types,
          bedrooms: bedrooms
        }
      }, function () {
        console.log(_this3.state.populateFormsData);
      });
    }
  }, {
    key: 'setFilteredData',
    value: function setFilteredData() {
      var _this4 = this;

      var newData = this.state.listing_data.filter(function (item) {
        return item.price >= _this4.state.min_price && item.price <= _this4.state.max_price && item.squareSpace >= _this4.state.min_floor_space && item.squareSpace <= _this4.state.max_floor_space && item.bedrooms >= _this4.state.bedrooms;
      });

      if (this.state.city !== 'All') {
        newData = newData.filter(function (item) {
          return item.city == _this4.state.city;
        });
      }

      if (this.state.property_type !== 'All') {
        newData = newData.filter(function (item) {
          return item.property_type == _this4.state.property_type;
        });
      }

      if (this.state.sort_by === 'price-des') {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      if (this.state.sort_by === 'price-asc') {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }

      if (this.state.search != '') {
        newData = newData.filter(function (listing) {
          var searchText = _this4.state.search.toLowerCase();

          var city = listing.city.toLowerCase();
          var doesCityMatches = city.match(searchText);

          var title = listing.title.toLowerCase();
          var doesTitleMatches = title.match(searchText);

          if (doesCityMatches !== null || doesTitleMatches !== null) {
            return true;
          }
        });
      }

      this.setState({
        filtered_data: newData
      });
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log(this.state.listing_data);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, {
            change: this.changeFilters,
            globalState: this.state,
            populateDefaultValues: this.populateForms
          }),
          _react2.default.createElement(_Listings2.default, {
            data: this.state.filtered_data,
            onFilterChange: this.changeFilters,
            globalState: this.state,
            changeView: this.changeViewMode
          })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Listing = function Listing(props) {
  return _react2.default.createElement(
    'div',
    { className: 'listing' },
    _react2.default.createElement(
      'div',
      {
        className: 'listing__img-box',
        style: {
          background: 'url(' + props.data.image + ')\n          no-repeat center center'
        }
      },
      _react2.default.createElement(
        'div',
        { className: 'listing__details' },
        _react2.default.createElement(
          'div',
          { className: 'listing__details_agent' },
          _react2.default.createElement(
            'div',
            {
              className: 'listing__agent_img',
              style: {
                background: 'url(' + props.data.agent.img + ')\n            no-repeat center top',
                backgroundSize: '5rem'
              }
            },
            ' '
          ),
          _react2.default.createElement(
            'div',
            { className: 'listing__agent_info' },
            _react2.default.createElement(
              'span',
              { className: 'listing__agent_name' },
              props.data.agent.name
            ),
            _react2.default.createElement(
              'span',
              { className: 'listing__posted_date' },
              'Posted on ',
              props.data.listedDate
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'listing__details_on_img' },
          _react2.default.createElement(
            'div',
            { className: 'listing__square_space' },
            _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
            _react2.default.createElement(
              'span',
              null,
              props.data.squareSpace,
              ' ft\xB2'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'listing__bedrooms' },
            _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
            _react2.default.createElement(
              'span',
              null,
              props.data.bedrooms,
              ' bedrooms'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'listing__view' },
          _react2.default.createElement(
            'a',
            { href: '', className: 'listing__view-btn' },
            'View Listing'
          )
        )
      ),
      _react2.default.createElement(
        'span',
        { className: 'listing__title' },
        props.data.title
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'listing__details_footer' },
      _react2.default.createElement(
        'span',
        { className: 'listing__price' },
        '$',
        props.data.price.toLocaleString()
      ),
      _react2.default.createElement(
        'span',
        { className: 'listing__location' },
        _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
        ' ',
        props.data.state,
        ', ',
        props.data.city
      )
    )
  );
};

exports.default = Listing;

/***/ })

},[237]);
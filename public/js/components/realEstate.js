webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var listingsData = [{
    address: '20-34 grand ave.',
    city: 'Ridgewood',
    state: 'NY',
    rooms: 3,
    price: 220000,
    floorSpace: 2000,
    extras: ['elevator', 'gym'],
    homeType: 'apartment',
    image: 'https://images4.roofandfloor.com/listing_c1c159dd1c36755f7967670f03b87a45/1024x600/imperial-villas-apartments-in-kuniyamuthur-elevation-photo-1cti.jpg'
}, {
    address: '35 Smith St.',
    city: 'Toronto',
    state: 'ON',
    rooms: 4,
    price: 175000,
    floorSpace: 3000,
    extras: ['elevator', 'gym'],
    homeType: 'ranch',
    image: 'https://scis-prod-static-assets.s3.amazonaws.com/media/images/condo.original.png'
}, {
    address: '5500 Young Ave.',
    city: 'Portland',
    state: 'OR',
    rooms: 4,
    price: 340000,
    floorSpace: 3500,
    extras: ['elevator'],
    homeType: 'apartment',
    image: 'https://image1.apartmentfinder.com/i2/Uh7pU-5z2gxB-ly2VsPGufzUCh0zPkDZH1YOZKjU6u8/110/cielo-apartments-charlotte-nc-saltwater-pool-and-courtyard.jpg'
}, {
    address: '2160 King St.',
    city: 'Tampa',
    state: 'FL',
    rooms: 6,
    price: 320000,
    floorSpace: 4000,
    extras: ['elevator', 'gym', 'pool'],
    homeType: 'studio',
    image: 'https://static.boredpanda.com/blog/wp-content/uploads/2015/11/apartment-building-tower-trees-tour-des-cedres-stefano-boeri-fb.jpg'
}, {
    address: '1 Lonley Rd.',
    city: 'Crackton',
    state: 'NJ',
    rooms: 2,
    price: 110000,
    floorSpace: 1000,
    extras: ['finished_basement'],
    homeType: 'apartment',
    image: 'https://assets3.thrillist.com/v1/image/1891766/size/tmg-article_default_mobile.jpg'
}, {
    address: '7 Lonley Rd.',
    city: 'Crackton',
    state: 'NJ',
    rooms: 1,
    price: 90000,
    floorSpace: 1200,
    extras: ['elevator'],
    homeType: 'room',
    image: 'https://dynamicmedia.zuza.com/gr/m/original_/images/56010/l/a3f21ed0-7cbc-4daa-9f9e-7c86e3f768d6.jpg'
}];

exports.default = listingsData;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(98);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(97);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(99);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(100);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import the other js classes


//all the default filter values are put in the master state
var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'Dave',
      listingsData: _listingsData2.default,
      city: 'All',
      homeType: 'All',
      rooms: 0,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      finished_basement: false,
      gym: false,
      pool: false,
      filteredData: _listingsData2.default,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'box',
      search: ''

      //bind your functions in the constructor
    };_this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    _this.changeView = _this.changeView.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      //initially sorts from lowest to highest price
      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });

      this.setState({
        listingsData: listingsData
      });
    }

    //changes the state when an option is changed

  }, {
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      //variables for the name and values in the state
      var name = event.target.name;
      //abriviated IF statement - If it's a checkbox do one thing, else do a selection box.
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        //what happens when the state is changed
        console.log(_this2.state);
        //whenever the state is changed, the filteredData function runs
        _this2.filteredData();
      });
    }
  }, {
    key: 'changeView',
    value: function changeView(viewName) {
      this.setState({
        view: viewName
      });
    }

    //only shows listings that match the filter conditions

  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.rooms >= _this3.state.rooms;
      });

      if (this.state.city != "All") {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }

      if (this.state.homeType != "All") {
        newData = newData.filter(function (item) {
          return item.homeType == _this3.state.homeType;
        });
      }

      //sorts lisings descending
      if (this.state.sortby === 'price-dsc') {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }

      //sorts lisings ascending
      if (this.state.sortby === 'price-asc') {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      //checkbox for elevator
      if (this.state.elevator != false) {
        newData = newData.filter(function (item) {
          return item.extras.includes("elevator") == _this3.state.elevator;
        });
      }

      //checkbox for pool
      if (this.state.pool != false) {
        newData = newData.filter(function (item) {
          return item.extras.includes("pool") == _this3.state.pool;
        });
      }

      //checkbox for finished basement
      if (this.state.finished_basement != false) {
        newData = newData.filter(function (item) {
          return item.extras.includes("finished_basement") == _this3.state.finished_basement;
        });
      }

      //checkbox for gym
      if (this.state.gym != false) {
        newData = newData.filter(function (item) {
          return item.extras.includes("gym") == _this3.state.gym;
        });
      }

      //search bar (city)
      if (this.state.search != '') {
        newData = newData.filter(function (item) {
          var city = item.city.toLowerCase();
          var searchText = _this3.state.search.toLowerCase();
          var n = city.match(searchText);

          if (n != null) {
            return true;
          }
        });
      }

      this.setState({
        filteredData: newData
      });
    }

    //this function populates the forms only with data that exists in the database

  }, {
    key: 'populateForms',
    value: function populateForms() {
      var _this4 = this;

      //city - creates an array with all the cities
      var cities = this.state.listingsData.map(function (item) {
        return item.city;
      });
      //makes it so theres no duplicates
      cities = new Set(cities);
      //converts the Set (object) into an array 
      cities = [].concat(_toConsumableArray(cities));
      cities = cities.sort();

      //homeType
      var homeTypes = this.state.listingsData.map(function (item) {
        return item.homeType;
      });
      homeTypes = new Set(homeTypes);
      homeTypes = [].concat(_toConsumableArray(homeTypes));
      homeTypes = homeTypes.sort();

      //rooms
      var bedRooms = this.state.listingsData.map(function (item) {
        return item.rooms;
      });
      bedRooms = new Set(bedRooms);
      bedRooms = [].concat(_toConsumableArray(bedRooms));
      bedRooms = bedRooms.sort();

      this.setState({
        populateFormsData: {
          homeTypes: homeTypes,
          bedRooms: bedRooms,
          cities: cities
        }
      }, function () {
        console.log(_this4.state);
      });
    }

    //pass the 'change' function into the FIlter component (props on the other end)
    //pass the listingData into the Listing component

  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state, populateAction: this.populateForms }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData, change: this.change, globalState: this.state,
            changeView: this.changeView })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import ReactDOM from 'react-dom'

//exports this class back to the master class
var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: 'Dave'
    };
    _this.cities = _this.cities.bind(_this);
    _this.homeTypes = _this.homeTypes.bind(_this);
    _this.bedRooms = _this.bedRooms.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: 'cities',
    value: function cities() {
      if (this.props.globalState.populateFormsData.cities != undefined) {
        var cities = this.props.globalState.populateFormsData.cities;

        return cities.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'homeTypes',
    value: function homeTypes() {
      if (this.props.globalState.populateFormsData.homeTypes != undefined) {
        var homeTypes = this.props.globalState.populateFormsData.homeTypes;

        return homeTypes.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'bedRooms',
    value: function bedRooms() {
      if (this.props.globalState.populateFormsData.bedRooms != undefined) {
        var bedRooms = this.props.globalState.populateFormsData.bedRooms;

        return bedRooms.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item,
            '+ BR'
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'Filter' },
        _react2.default.createElement(
          'div',
          { className: 'inside' },
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
            { name: 'city', className: 'filters city', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All Cities'
            ),
            this.cities()
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'homeType' },
            'Home Type'
          ),
          _react2.default.createElement(
            'select',
            { name: 'homeType', className: 'filters homeType', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All Homes'
            ),
            this.homeTypes()
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'rooms' },
            'Number of Bedrooms'
          ),
          _react2.default.createElement(
            'select',
            { name: 'rooms', className: 'filters bedRooms', onChange: this.props.change },
            this.bedRooms()
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters price' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Price'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_price', className: 'min-price', onChange: this.props.change, value: this.props.globalState.min_price }),
            _react2.default.createElement('input', { type: 'text', name: 'max_price', className: 'max-price', onChange: this.props.change, value: this.props.globalState.max_price })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters floor-space' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Floor Space'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_floor_space', className: 'min-floor-space', onChange: this.props.change, value: this.props.globalState.min_floor_space }),
            _react2.default.createElement('input', { type: 'text', name: 'max_floor_space', className: 'max-floor-space', onChange: this.props.change, value: this.props.globalState.max_floor_space })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters extras' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Extras'
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Elevators'
              ),
              _react2.default.createElement('input', { name: 'elevator', type: 'checkbox', value: 'elevator', onChange: this.props.change })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters extras' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Swimming Pool'
              ),
              _react2.default.createElement('input', { name: 'pool', type: 'checkbox', value: 'pool', onChange: this.props.change })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters extras' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Finished Basement'
              ),
              _react2.default.createElement('input', { name: 'finished_basement', type: 'checkbox', value: 'finished_basement', onChange: this.props.change })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters extras' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Gym'
              ),
              _react2.default.createElement('input', { name: 'gym', type: 'checkbox', value: 'gym', onChange: this.props.change })
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

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import ReactDOM from 'react-dom'  Only need this in the main section

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
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
          'Logo'
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Create ads'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'About Us'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Log in'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'register-btn' },
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

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import ReactDOM from 'react-dom'


var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {
      name: 'Dave'
      //have to bind your functions in the constructor
    };_this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: 'loopListings',
    value: function loopListings() {
      var _this2 = this;

      var listingsData = this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return "Sorry your filter did not match any listing";
      }

      return listingsData.map(function (listing, index) {
        if (_this2.props.globalState.view == 'box') {
          return (
            //BOX VIEW        
            _react2.default.createElement(
              'div',
              { className: 'col-md-3', key: index },
              _react2.default.createElement(
                'div',
                { className: 'listing' },
                _react2.default.createElement(
                  'div',
                  { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                  _react2.default.createElement(
                    'span',
                    { className: 'address' },
                    listing.address
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'details' },
                    _react2.default.createElement(
                      'div',
                      { className: 'col-md-3' },
                      _react2.default.createElement('div', { className: 'user-img' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'col-md-9' },
                      _react2.default.createElement(
                        'div',
                        { className: 'user-details' },
                        _react2.default.createElement(
                          'span',
                          { className: 'user-name' },
                          'Nina Smith'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'post-date' },
                          '05/05/2017'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'listing-details' },
                        _react2.default.createElement(
                          'div',
                          { className: 'floor-space' },
                          _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                          _react2.default.createElement(
                            'span',
                            null,
                            listing.floorSpace,
                            ' ft\xB2'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'bedrooms' },
                          _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                          _react2.default.createElement(
                            'span',
                            null,
                            listing.rooms,
                            ' Bedrooms'
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'view-btn' },
                        'View Listing'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'bottom-info' },
                  _react2.default.createElement(
                    'span',
                    { className: 'price' },
                    '$',
                    listing.price
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'location' },
                    listing.city,
                    ',  ',
                    listing.state
                  )
                )
              )
            )
          );
        } else {

          return (
            //LONG VIEW           
            _react2.default.createElement(
              'div',
              { className: 'col-md-12 col-lg-6', key: index },
              _react2.default.createElement(
                'div',
                { className: 'listing' },
                _react2.default.createElement(
                  'div',
                  { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                  _react2.default.createElement(
                    'span',
                    { className: 'address' },
                    listing.address
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'details' },
                    _react2.default.createElement(
                      'div',
                      { className: 'col-md-3' },
                      _react2.default.createElement('div', { className: 'user-img' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'col-md-9' },
                      _react2.default.createElement(
                        'div',
                        { className: 'user-details' },
                        _react2.default.createElement(
                          'span',
                          { className: 'user-name' },
                          'Nina Smith'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'post-date' },
                          '05/05/2017'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'listing-details' },
                        _react2.default.createElement(
                          'div',
                          { className: 'floor-space' },
                          _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                          _react2.default.createElement(
                            'span',
                            null,
                            listing.floorSpace,
                            ' ft\xB2'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'bedrooms' },
                          _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                          _react2.default.createElement(
                            'span',
                            null,
                            listing.rooms,
                            ' Bedrooms'
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'view-btn' },
                        'View Listing'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'bottom-info' },
                  _react2.default.createElement(
                    'span',
                    { className: 'price' },
                    '$',
                    listing.price
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'location' },
                    listing.city,
                    ',  ',
                    listing.state
                  )
                )
              )
            )
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'Listings' },
        _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.4.1/css/all.css', integrity: 'sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz', crossOrigin: 'anonymous' }),
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search', placeholder: 'Search Cities', onChange: this.props.change })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            this.props.globalState.filteredData.length,
            ' results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby', onChange: this.props.change },
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Lowest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Highest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fa fa-th-list', 'aria-hidden': 'true',
                onClick: this.props.changeView.bind(null, "long") }),
              _react2.default.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true',
                onClick: this.props.changeView.bind(null, "box") })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listing-results' },
          this.loopListings()
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'ul',
              { className: 'pages' },
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
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ })

},[102]);
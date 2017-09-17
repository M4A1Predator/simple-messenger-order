module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var getPlaceName = exports.getPlaceName = function getPlaceName(results) {

    var data = {
        name: null,
        address: null
    };

    if (results == undefined || results.length == 0) {
        return data;
    }

    if (results[0].name != undefined) {
        data.name = results[0].name;
    }

    data.address = results[0].formatted_address;

    return data;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = render;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(8);

var _server2 = _interopRequireDefault(_server);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

var _reducers = __webpack_require__(9);

var _reducers2 = _interopRequireDefault(_reducers);

var _redux = __webpack_require__(4);

var _reduxThunk = __webpack_require__(11);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _App = __webpack_require__(12);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(req, res) {
    // Get initial state
    if (req.session.state === undefined) {
        req.session.state = {};
    }
    var initialState = req.session.state;

    // Create store
    var store = (0, _redux.createStore)(_reducers2.default, initialState);

    // Render HTML
    var html = _server2.default.renderToString(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.originalUrl, context: {} },
            _react2.default.createElement(_App2.default, null)
        )
    ));

    // Set preloaded state to client
    var preloadedState = store.getState();
    res.render('index', {
        body: html,
        preloadedState: JSON.stringify(preloadedState).replace(/</g, '\\u003c')
    });
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(4);

var _appReducers = __webpack_require__(10);

var _appReducers2 = _interopRequireDefault(_appReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
    // webData: (state={}, action) => {
    //     if(action.type === 'ADD_NUM'){
    //         state = action.data
    //     }
    //     return state
    // }
    orderData: _appReducers2.default
});

exports.default = reducers;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var appReducers = function appReducers() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];


    switch (action.type) {
        case 'ORDER':
            state = action.data;
            break;
        case 'ORDER_EXTRA':
            state.options = action.data;
            break;
        case 'CLEAR':
            state = null;
            break;
    }

    return state;
};
exports.default = appReducers;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _Home = __webpack_require__(13);

var _Home2 = _interopRequireDefault(_Home);

var _OrderDetail = __webpack_require__(21);

var _OrderDetail2 = _interopRequireDefault(_OrderDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/orderDetail', component: _OrderDetail2.default })
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

var _reactGoogleMaps = __webpack_require__(15);

var _MarkerBox = __webpack_require__(16);

var _MarkerBox2 = _interopRequireDefault(_MarkerBox);

var _PlaceUtils = __webpack_require__(6);

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

__webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var displayMarkers = function displayMarkers(markers) {
    return markers.map(function (marker, i) {
        return _react2.default.createElement(_reactGoogleMaps.Marker, {
            position: marker.pos,
            key: marker.key,
            icon: {
                url: '/public/mats/img/map-marker.svg',
                scaledSize: new google.maps.Size(32, 32)
            }
        });
    });
};

var displayDirections = function displayDirections(directions) {
    return directions.map(function (direction, i) {

        if (direction == undefined) {
            return "";
        }

        return _react2.default.createElement(_reactGoogleMaps.DirectionsRenderer, {
            directions: direction,
            options: {
                preserveViewport: true,
                suppressMarkers: true
            },
            key: i });
    });
};

var Gmap = (0, _reactGoogleMaps.withGoogleMap)(function (props) {
    return _react2.default.createElement(
        _reactGoogleMaps.GoogleMap,
        {
            ref: props.onMapLoad,
            defaultZoom: 14,
            center: props.pos,
            mapElement: _react2.default.createElement('div', { style: { height: '100%' } }),
            containerElement: _react2.default.createElement('div', { style: { height: '100%' } }),
            onClick: props.onClickMap,
            onDragStart: props.forceBlur
        },
        displayMarkers(props.markers),
        displayDirections(props.directions)
    );
});

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.state = {
            isShowGmap: false,
            pos: { lat: 13.7246812, lng: 100.5006702 },
            totalDistance: 0,
            markers: [],
            points: [],
            directions: [],
            selectedMarker: -1,
            boxNum: 2,
            map: null
        };

        return _this;
    }

    _createClass(Home, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.orderData != null) {
                var ms = [];
                var ps = [];
                this.props.orderData.dests.forEach(function (dest) {
                    ms.push(dest.marker);
                    ps.push(dest.point);
                });

                this.setState({
                    boxNum: this.props.orderData.dests.length,
                    markers: ms,
                    points: ps,
                    directions: this.props.orderData.directions,
                    totalDistance: this.props.orderData.totalDistance
                });
            }
        }
    }, {
        key: 'displayBoxes',
        value: function displayBoxes() {
            var bs = [];
            for (var i = 0; i < this.state.boxNum; i++) {

                var removeable = false;
                if (this.state.boxNum > 2 && i >= 1) {
                    removeable = true;
                }

                var isSelected = false;
                if (this.state.selectedMarker === i) {
                    isSelected = true;
                }

                bs.push(_react2.default.createElement(_MarkerBox2.default, {
                    index: i,
                    isSelected: isSelected,
                    point: this.state.points[i],
                    key: i,
                    removeable: removeable,
                    onSelect: this.onSelectMarkerBox.bind(this),
                    onRemove: this.removeMarkerBox.bind(this, i),
                    onSearchPlace: this.handleSearchPlace.bind(this)
                }));
            }
            return bs;
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'home' },
                _react2.default.createElement(
                    'div',
                    { className: 'markerbox-container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'markerbox-box' },
                        this.displayBoxes().map(function (mk) {
                            return mk;
                        }),
                        _react2.default.createElement(
                            'div',
                            { className: 'option-box' },
                            _react2.default.createElement(
                                'div',
                                { className: 'option-icon' },
                                _react2.default.createElement(
                                    'a',
                                    { onClick: this.addMarkerBox.bind(this), role: 'button', style: { cursor: "pointer" } },
                                    _react2.default.createElement('img', { className: 'icon', width: '20px', height: '20px', src: '/public/mats/img/plus-sign-in-a-black-circle.svg' })
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'gmap', style: { height: "calc(90% - 140px)", display: this.state.isShowGmap ? 'block' : 'block' } },
                    _react2.default.createElement(Gmap, {
                        pos: this.state.pos,
                        onMapLoad: this.handleMapLoad.bind(this),
                        containerElement: _react2.default.createElement('div', { style: { height: '100%' } }),
                        mapElement: _react2.default.createElement('div', { style: { height: '100%' } }),
                        onClickMap: this.handleMapClick.bind(this),
                        markers: this.state.markers,
                        directions: this.state.directions,
                        ref: 'gmap',
                        forceBlur: this.forceBlur.bind(this)
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'total-box' },
                    _react2.default.createElement(
                        'div',
                        { className: 'total-text' },
                        'Total ',
                        this.state.totalDistance.toFixed(1) + " KM"
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'btn-container' },
                        _react2.default.createElement(
                            'button',
                            { onClick: this.order.bind(this) },
                            'Next'
                        )
                    )
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            // Get position
            var promise = new Promise(function (resolve, reject) {
                if (_this2.props.orderData != null) {
                    if (_this2.props.orderData.dests[0] != undefined) {
                        var firstDest = _this2.props.orderData.dests[0];
                        var pos = firstDest.marker.pos;
                        resolve({ pos: pos });
                        return;
                    }
                }
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        var pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        var data = {
                            pos: pos
                        };
                        resolve(data);
                    }, function () {
                        reject({ "msg": "geolocation err" });
                    });
                } else {
                    // Browser doesn't support Geolocation
                    reject({ "msg": "Browser doesn't support Geolocation" });
                }
            }).then(function (data) {
                _this2.setState({ pos: data.pos, isShowGmap: true });
            }).catch(function (err) {
                _this2.setState({ pos: _this2.state.pos, isShowGmap: true });
            });
            // new google.maps.places.PlacesService();
        }
    }, {
        key: 'handleMapLoad',
        value: function handleMapLoad(ref) {
            // this.refs.map = ref;
            // if(ref){
            // new google.maps.places.PlacesService(ref.getDiv())
            // console.log(ref.props.mapElement)
            // }
        }
    }, {
        key: 'handleMapClick',
        value: function handleMapClick(e) {
            var _this3 = this;

            if (this.state.selectedMarker >= 0) {
                var m = {
                    pos: e.latLng,
                    defaultAnimation: 2,
                    key: Date.now()
                };

                var markers = this.state.markers;
                markers[this.state.selectedMarker] = m;
                this.setState({
                    markers: markers
                });

                $('input').each(function () {
                    $(this).trigger('blur');
                });

                // Geocoder
                var geocoder = new google.maps.Geocoder();
                new Promise(function (resolve, reject) {
                    geocoder.geocode({ 'location': e.latLng }, function (results, status) {
                        if (status != google.maps.GeocoderStatus.OK) {
                            return;
                        }

                        if (results.length == 0) {
                            return;
                        }
                        // geocoder.geocode({'placeId': results[0].place_id}, function(results, status){
                        //     console.log(results)
                        //     if(status != google.maps.GeocoderStatus.OK){
                        //         return;
                        //     }
                        // })
                        resolve(results);
                    });
                }).then(function (results) {
                    var points = _this3.state.points;
                    points[_this3.state.selectedMarker] = results;
                    _this3.setState({ points: points });
                });

                // Direction
                this.calculateDirections(this.state.selectedMarker, markers);
            }
        }
    }, {
        key: 'handleSearchPlace',
        value: function handleSearchPlace(index, location) {
            var markers = this.state.markers;
            var points = this.state.points;
            var m = {
                pos: location.geometry.location,
                defaultAnimation: 2,
                key: Date.now()
            };

            markers[index] = m;
            var pos = { lat: m.pos.lat(), lng: m.pos.lng() };
            points[index] = [location];
            this.setState({
                points: points,
                markers: markers,
                pos: pos
            });

            this.calculateDirections(index, markers);
        }
    }, {
        key: 'onSelectMarkerBox',
        value: function onSelectMarkerBox(e) {
            this.setState({
                selectedMarker: e
            });
        }
    }, {
        key: 'addMarkerBox',
        value: function addMarkerBox(e) {

            var curIndex = this.state.selectedMarker;
            var boxNum = this.state.boxNum;

            var selectedIndex = boxNum;

            this.setState({
                boxNum: boxNum + 1,
                selectedMarker: selectedIndex
            });
        }
    }, {
        key: 'removeMarkerBox',
        value: function removeMarkerBox(index) {
            var _this4 = this;

            var markers = this.state.markers;
            var points = this.state.points;
            var selectedMarker = 0;

            // Calculate directions
            var directions = this.state.directions;
            if (index == 0) {
                directions.splice(0, 1);
            } else if (index == markers.length - 1) {
                directions.splice(directions.length - 1, 1);
                selectedMarker = this.state.selectedMarker - 1;
                this.setState({
                    totalDistance: this.getTotalDistanceData(directions).totalDistance
                });
            } else {
                this.getDirection(markers[index - 1], markers[index + 1]).then(function (result) {
                    directions[index - 1] = result;
                    directions.splice(index, 1);
                    _this4.setState({
                        directions: directions,
                        totalDistance: _this4.getTotalDistanceData(directions).totalDistance
                    });
                });
                selectedMarker = this.state.selectedMarker - 1;
            }

            // Remove point
            markers.splice(index, 1);
            points.splice(index, 1);

            // Set state
            this.setState({
                markers: markers,
                points: points,
                boxNum: this.state.boxNum - 1,
                selectedMarker: selectedMarker
            });
        }
    }, {
        key: 'calculateDirections',
        value: function calculateDirections(selectedIndex, markers) {
            var _this5 = this;

            // Direction
            if (markers.length >= 2) {
                var DirectionsService = new google.maps.DirectionsService();
                var directions = this.state.directions;

                if (selectedIndex - 1 >= 0 && markers[selectedIndex - 1] != undefined) {
                    this.getDirection(markers[selectedIndex - 1], markers[selectedIndex]).then(function (result) {
                        directions[selectedIndex - 1] = result;
                        var distance = parseFloat(result.routes[0].legs[0].distance.text);
                        _this5.setState({
                            directions: directions,
                            totalDistance: _this5.getTotalDistanceData(directions).totalDistance
                        });
                    });
                }

                if (selectedIndex + 1 < markers.length && markers[selectedIndex + 1] != undefined) {
                    this.getDirection(markers[selectedIndex], markers[selectedIndex + 1]).then(function (result) {
                        directions[selectedIndex] = result;
                        var distance = parseFloat(result.routes[0].legs[0].distance.text);
                        _this5.setState({
                            directions: directions,
                            totalDistance: _this5.getTotalDistanceData(directions).totalDistance
                        });
                    });
                }
            }
        }
    }, {
        key: 'getDirection',
        value: function getDirection(start, end) {
            return new Promise(function (resolve, reject) {
                if (start == undefined || end == undefined) {
                    reject("Undefined point");
                    return;
                }

                var DirectionsService = new google.maps.DirectionsService();
                DirectionsService.route({
                    origin: start.pos,
                    destination: end.pos,
                    travelMode: google.maps.TravelMode.DRIVING
                    // preserveViewport: true,
                    // suppressMarkers: true
                }, function (result, status) {
                    if (status === google.maps.DirectionsStatus.OK) {
                        var totalDistance = result.routes[0].legs[0].distance;
                        resolve(result);
                    } else {
                        console.error('error fetching directions ' + result);
                        reject({ "err": 'error fetching directions ' + result });
                    }
                });
            });
        }
    }, {
        key: 'getTotalDistanceData',
        value: function getTotalDistanceData(directions) {
            var data = {
                totalDistance: 0.0
            };
            for (var i = 0; i < directions.length; i++) {
                if (directions[i] != undefined) {
                    var distance = parseFloat(directions[i].routes[0].legs[0].distance.text);
                    data.totalDistance += distance;
                } else {
                    console.log("wrong dis");
                }
            }

            return data;
        }
    }, {
        key: 'forceBlur',
        value: function forceBlur(e) {
            $('input').each(function () {
                $(this).trigger('blur');
            });
        }

        // getPlaceName(results){
        //     if(results == undefined || results.length == 0){
        //         return '';
        //     }

        //     if(results[0].name != undefined){
        //         return results[0].name + ' - ' + results[0].formatted_address
        //     }

        //     return results[0].formatted_address
        // }

    }, {
        key: 'order',
        value: function order(e) {
            // Get data
            var points = this.state.points;
            var markers = this.state.markers;

            var dests = [];
            for (var i = 0; i < markers.length; i++) {
                if (points[i] == undefined || markers[i] == undefined) {
                    continue;
                }
                var nameData = (0, _PlaceUtils.getPlaceName)(points[i]);
                var dest = {
                    marker: markers[i],
                    point: [points[i][0]],
                    placeName: nameData
                };
                dests.push(dest);
            }

            if (dests.length < 2) {
                return;
            }

            var data = {
                dests: dests,
                directions: this.state.directions,
                totalDistance: this.state.totalDistance

                // get option data
            };if (this.props.orderData != undefined && this.props.orderData.options != undefined) {
                data.options = this.props.orderData.options;
            }

            // Redirect
            this.props.order(data);
            this.props.history.push('/orderDetail');
        }
    }]);

    return Home;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        orderData: state.orderData
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, prevState) {
    return {
        order: function order(orderData) {
            var action = {
                type: 'ORDER',
                data: orderData
            };
            dispatch(action);
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SearchBox = __webpack_require__(17);

var _SearchBox2 = _interopRequireDefault(_SearchBox);

var _PlaceUtils = __webpack_require__(6);

__webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MarkerBox = function (_Component) {
    _inherits(MarkerBox, _Component);

    function MarkerBox(props) {
        _classCallCheck(this, MarkerBox);

        var _this = _possibleConstructorReturn(this, (MarkerBox.__proto__ || Object.getPrototypeOf(MarkerBox)).call(this, props));

        _this.state = {
            placeName: ''
        };
        return _this;
    }

    _createClass(MarkerBox, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var nameData = (0, _PlaceUtils.getPlaceName)(nextProps.point);
            var placeName = '';
            if (nameData.name != null) {
                placeName += nameData.name + ' - ';
            }

            if (nameData.address != null) {
                placeName += nameData.address;
            }

            this.setState({
                placeName: placeName
            });
        }
    }, {
        key: 'render',
        value: function render() {
            // const placeName = this.getPlaceName(this.props.point)
            var removeComponent = { component: "" };
            var intStyle = {};

            if (this.props.removeable === true) {
                removeComponent.component = _react2.default.createElement(
                    'div',
                    { className: 'remove-icon' },
                    _react2.default.createElement(
                        'a',
                        { onClick: this.props.onRemove, role: 'button', style: { cursor: "pointer" } },
                        _react2.default.createElement('img', { className: 'icon', width: '20px', height: '20px', src: '/public/mats/img/minus-sign-inside-a-black-circle.svg' })
                    )
                );
                intStyle.width = "calc(100% - 30px)";
            }

            if (this.props.isSelected === true) {
                intStyle.backgroundColor = "#e1f4fc";
            }

            return _react2.default.createElement(
                'div',
                { className: 'marker-box' },
                _react2.default.createElement(
                    'div',
                    { className: 'marker-container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'marker-icon' },
                        _react2.default.createElement('img', { className: 'icon', width: '20px', height: '20px', src: '/public/mats/img/map-marker.svg' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'input-box' },
                        _react2.default.createElement('input', {
                            ref: "findLocation",
                            style: intStyle,
                            type: 'text',
                            value: this.state.placeName,
                            onFocus: this.onSelect.bind(this),
                            onChange: this.handleChanged.bind(this, 'placeName')
                        })
                    ),
                    removeComponent.component
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var autocomplete = new google.maps.places.Autocomplete(this.refs.findLocation);
            autocomplete.addListener('place_changed', function () {
                // this.setState({
                //     placeName: autocomplete.getPlace().formatted_address
                // })
                // console.log(autocomplete.getPlace().geometry)
                _this2.props.onSearchPlace(_this2.props.index, autocomplete.getPlace());
            });
        }
    }, {
        key: 'handleChanged',
        value: function handleChanged(n, e) {
            this.setState(_defineProperty({}, n, e.target.value));
        }
    }, {
        key: 'onSelect',
        value: function onSelect() {
            this.props.onSelect(this.props.index);
        }
    }]);

    return MarkerBox;
}(_react.Component);

MarkerBox.propTypes = {
    index: _propTypes2.default.number.isRequired,
    placeName: _propTypes2.default.string,
    point: _propTypes2.default.any
};
MarkerBox.defaultProps = {
    removeable: false,
    isSelected: false
};

exports.default = MarkerBox;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps/lib/components/places/SearchBox");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".marker-box {\n  width: 100%;\n}\n.marker-box .marker-container {\n  display: flex;\n  margin: 0 0 5px 0;\n}\n.marker-box .marker-container .marker-icon {\n  margin: 0 3px 5px 0;\n}\n.marker-box .marker-container .marker-icon .icon {\n  width: 18px;\n  height: 18px;\n}\n.marker-box .marker-container .input-box {\n  width: calc(100% - 35px);\n}\n.marker-box .marker-container .input-box input {\n  height: 30px;\n  width: 100%;\n}\n.marker-box .marker-container .remove-icon {\n  margin: 3px 0 0 -23px;\n}\n.marker-box .marker-container .remove-icon img {\n  width: 18px;\n  height: 18px;\n}\n", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "html body {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\ninput {\n  padding: 0 5px;\n  border-radius: 2px;\n}\ninput::placeholder {\n  padding: 0 5px;\n}\n.home {\n  width: 100%;\n  height: 100vh;\n  padding: 15px 15px 0 15px;\n}\n.home .markerbox-container {\n  position: absolute;\n  z-index: 10;\n  width: calc(100% - 35px);\n  max-width: 720px;\n  height: 110px;\n  overflow-y: auto;\n}\n.home .markerbox-container .markerbox-box {\n  padding: 0 0 0 0;\n}\n.home .markerbox-container .markerbox-box .option-box .option-icon {\n  float: right;\n  margin: 5px 40px 0 0;\n}\n.home .markerbox-container .markerbox-box .option-box .option-icon .icon {\n  width: 19px;\n  height: 19px;\n}\n.home .gmap {\n  margin: 95px 0 0 0;\n}\n.home .total-box {\n  display: flex;\n  align-items: center;\n  margin: 5px 0 0 0;\n}\n.home .total-box .total-text {\n  font-size: 20px;\n}\n.home .total-box .btn-container {\n  margin: 0 0 0 5px;\n}\n.home .total-box .btn-container button {\n  width: 120px;\n  height: 30px;\n  color: #fff;\n  background-color: #41985e;\n  border: 1px #fff solid;\n  border-radius: 3px;\n}\n", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _DestinationBox = __webpack_require__(22);

var _DestinationBox2 = _interopRequireDefault(_DestinationBox);

var _OptionPopUp = __webpack_require__(24);

var _OptionPopUp2 = _interopRequireDefault(_OptionPopUp);

__webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderDetail = function (_Component) {
    _inherits(OrderDetail, _Component);

    function OrderDetail(props) {
        _classCallCheck(this, OrderDetail);

        var _this = _possibleConstructorReturn(this, (OrderDetail.__proto__ || Object.getPrototypeOf(OrderDetail)).call(this, props));

        _this.state = {
            isShowPopUp: false,
            services: [{
                isSelect: false,
                price: 50,
                imgSrc: '/public/mats/img/money.svg'
            }, {
                isSelect: false,
                price: 100,
                imgSrc: '/public/mats/img/refresh-button.svg'
            }, {
                isSelect: false,
                price: 200,
                imgSrc: '/public/mats/img/closed-cardboard-box.svg'
            }],
            fee: 0.0,
            contacts: []
        };
        return _this;
    }

    _createClass(OrderDetail, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var services = this.state.services;
            if (this.props.orderData != undefined && this.props.orderData.options != undefined) {
                for (var i = 0; i < services.length; i++) {
                    services[i].isSelect = this.props.orderData.options[i];
                }
            }
            // this.setState({fee: this.getFee(this.props.orderData && this.props.orderData.totalDistance || 0.0,
            //     this.state.services)})
            this.setState({ services: services });
            this.setState({ fee: this.getFee(this.props.orderData && this.props.orderData.totalDistance || 0.0, services) });
        }
    }, {
        key: 'displayDests',
        value: function displayDests(dests) {
            var _this2 = this;

            return dests.map(function (dest, i) {
                return _react2.default.createElement(_DestinationBox2.default, {
                    index: i,
                    dest: dest,
                    key: i,
                    onChange: _this2.handleContactChange.bind(_this2)
                });
            });
        }
    }, {
        key: 'displayServiceImg',
        value: function displayServiceImg(services) {
            return services.map(function (s, i) {
                if (s.isSelect === false) {
                    return '';
                }

                return _react2.default.createElement(
                    'div',
                    { className: 'option-icon', key: i },
                    _react2.default.createElement('img', { style: { width: "30px", height: "30px" }, src: s.imgSrc })
                );
            });
        }
    }, {
        key: 'getFee',
        value: function getFee(totalDistance, services) {
            var fee = 0.0;
            var df = totalDistance * 50;

            services.forEach(function (s) {
                if (s.isSelect === true) {
                    fee += s.price;
                }
            });

            fee += df;
            return fee;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'order-detail' },
                _react2.default.createElement(
                    'div',
                    { className: 'destination-container' },
                    this.props.orderData && this.displayDests(this.props.orderData.dests)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'option-box' },
                    _react2.default.createElement(
                        'div',
                        { className: 'head' },
                        _react2.default.createElement(
                            'div',
                            { className: 'head-text' },
                            'Extra services'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'icon' },
                            _react2.default.createElement(
                                'a',
                                { onClick: this.showOptionPopUp.bind(this) },
                                _react2.default.createElement('img', { width: '20px', height: '20px', src: '/public/mats/img/plus-sign-in-a-black-circle.svg' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'selected-option-box' },
                        this.displayServiceImg(this.state.services)
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'detail-box' },
                    _react2.default.createElement(
                        'div',
                        { className: 'text-container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'head-text' },
                            'Total Distance'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'sum' },
                            this.props.orderData && this.props.orderData.totalDistance.toFixed(1) || 0.0,
                            ' KM'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'text-container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'head-text' },
                            'Fee'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'sum' },
                            this.state.fee.toFixed(0),
                            ' THB'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'button-box' },
                    _react2.default.createElement(
                        'button',
                        { onClick: this.backToMap.bind(this), className: 'back-btn' },
                        'Back'
                    ),
                    _react2.default.createElement(
                        'button',
                        { onClick: this.confirmOrder.bind(this), className: 'confirm-btn' },
                        'Confirm'
                    )
                ),
                _react2.default.createElement(_OptionPopUp2.default, {
                    onConfirm: this.onConfirmExtra.bind(this),
                    isShow: this.state.isShowPopUp,
                    options: this.props.orderData && this.props.orderData.options || undefined
                })
            );
        }
    }, {
        key: 'handleContactChange',
        value: function handleContactChange(contactData, index) {
            var contacts = this.state.contacts;
            contacts[index] = contactData;
            this.setState({ contacts: contacts });
        }
    }, {
        key: 'showOptionPopUp',
        value: function showOptionPopUp(e) {
            this.setState({
                isShowPopUp: true
            });
        }
    }, {
        key: 'onConfirmExtra',
        value: function onConfirmExtra(options) {
            var services = this.state.services;
            for (var i = 0; i < services.length; i++) {
                services[i].isSelect = options[i];
            }
            this.setState({
                services: services,
                isShowPopUp: false,
                fee: this.getFee(this.props.orderData && this.props.orderData.totalDistance || 0.0, services)
            });
            this.props.orderExtra(options);
        }
    }, {
        key: 'backToMap',
        value: function backToMap(e) {
            this.props.history.goBack();
        }
    }, {
        key: 'confirmOrder',
        value: function confirmOrder(e) {
            // Check contact
            var contacts = this.state.contacts;
            if (contacts.length === 0) {
                alert("Please fill all contact name and phone number");
                return;
            }
            for (var i = 0; i < this.props.orderData.dests.length; i++) {
                if (contacts[i] == undefined) {
                    alert("Please fill all contact name and phone number");
                    return;
                }

                if (contacts[i].name.trim() == '' || contacts[i].mobile.trim() == '') {
                    alert("Please fill all contact name and phone number");
                    return;
                }
            }

            this.props.order();
            this.props.history.goBack();
        }
    }]);

    return OrderDetail;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        orderData: state.orderData
    };
};

var mapDisPatchToProps = function mapDisPatchToProps(dispatch) {
    return {
        order: function order() {
            var action = {
                type: 'CLEAR'
            };

            dispatch(action);
        },
        orderExtra: function orderExtra(options) {
            var action = {
                type: 'ORDER_EXTRA',
                data: options
            };
            dispatch(action);
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDisPatchToProps)(OrderDetail);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DestinationBox = function (_Component) {
    _inherits(DestinationBox, _Component);

    function DestinationBox(props) {
        _classCallCheck(this, DestinationBox);

        var _this = _possibleConstructorReturn(this, (DestinationBox.__proto__ || Object.getPrototypeOf(DestinationBox)).call(this, props));

        _this.state = {
            placeName: '',
            name: '',
            mobile: ''
        };
        return _this;
    }

    _createClass(DestinationBox, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var nameData = this.props.dest.placeName;
            var placeName = '';
            if (nameData.name != null) {
                placeName += nameData.name + " - ";
            }

            if (nameData.address != null) {
                placeName += nameData.address;
            }

            this.setState({ placeName: placeName });
        }
    }, {
        key: 'render',
        value: function render() {
            var placeName = '';
            if (this.props.dest.placeName.name != null) {
                placeName = this.props.dest.placeName.name;
            }
            return _react2.default.createElement(
                'div',
                { className: 'destination-box' },
                _react2.default.createElement(
                    'div',
                    { className: 'location-box' },
                    _react2.default.createElement(
                        'div',
                        { className: 'icon' },
                        _react2.default.createElement('img', { width: '20px', height: '20px', src: '/public/mats/img/map-marker.svg' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'location-name' },
                        _react2.default.createElement(
                            'div',
                            { className: 'name' },
                            _react2.default.createElement(
                                'span',
                                { style: { fontWeight: "600" } },
                                placeName || ''
                            ),
                            placeName && ' - ',
                            _react2.default.createElement(
                                'span',
                                null,
                                this.props.dest.placeName.address
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'order-form' },
                    _react2.default.createElement('input', { onChange: this.handleChange.bind(this, "name"), value: this.state.name, type: 'text', placeholder: 'name' }),
                    _react2.default.createElement('input', { onChange: this.handleChange.bind(this, "mobile"), value: this.state.mobile, type: 'text', placeholder: 'mobile' })
                )
            );
        }
    }, {
        key: 'handleChange',
        value: function handleChange(name, e) {

            var data = {
                name: this.state.name,
                mobile: this.state.mobile
            };

            data[name] = e.target.value;
            this.setState({
                name: data.name,
                mobile: data.mobile
            });
            this.props.onChange(data, this.props.index);
        }
    }]);

    return DestinationBox;
}(_react.Component);

DestinationBox.propTypes = {
    dest: _propTypes2.default.object,
    index: _propTypes2.default.number.isRequired
};

exports.default = DestinationBox;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".destination-box .location-box {\n  display: flex;\n}\n.destination-box .location-box .icon img {\n  width: 19px;\n  height: 19px;\n}\n.destination-box .location-box .location-name .name {\n  font-size: 1.2em;\n}\n.destination-box .order-form {\n  display: flex;\n  padding: 0 0 0 10px;\n}\n.destination-box .order-form input {\n  height: 26px;\n  width: 50%;\n  max-width: 250px;\n  margin: 0 5px 0 0;\n}\n", ""]);

// exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionPopUp = function (_Component) {
    _inherits(OptionPopUp, _Component);

    function OptionPopUp(props) {
        _classCallCheck(this, OptionPopUp);

        var _this = _possibleConstructorReturn(this, (OptionPopUp.__proto__ || Object.getPrototypeOf(OptionPopUp)).call(this, props));

        _this.state = {
            isShow: false,
            options: [false, false, false]
        };

        _this.closeByClick = _this.closeByClick.bind(_this);
        return _this;
    }

    _createClass(OptionPopUp, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.options != undefined) {
                this.setState({ options: this.props.options });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener("mousedown", this.closeByClick);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener("mousedown", this.closeByClick);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                isShow: nextProps.isShow
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var sty = {
                display: "none"
            };
            if (this.state.isShow === true) {
                sty.display = "block";
            }

            var styOptions = [{ opacity: 1 }, { opacity: 1 }, { opacity: 1 }];

            for (var i = 0; i < this.state.options.length; i++) {
                if (this.state.options[i] === true) {
                    styOptions[i].opacity = 1;
                } else {
                    styOptions[i].opacity = 0.5;
                }
            }

            return _react2.default.createElement(
                'div',
                { className: 'option-pop', style: sty },
                _react2.default.createElement(
                    'div',
                    { className: 'popup-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'head' },
                        'Extra Services'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'choice-box' },
                        _react2.default.createElement(
                            'div',
                            { className: 'choice' },
                            _react2.default.createElement('img', { src: '/public/mats/img/money.svg' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'choice-text' },
                                'COD +50 THB'
                            ),
                            _react2.default.createElement(
                                'a',
                                { role: 'button', style: styOptions[0], onClick: this.selectOption.bind(this, 0) },
                                _react2.default.createElement('img', { style: { width: "28px", heighe: "28px" }, src: '/public/mats/img/round-done-button.svg' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'choice' },
                            _react2.default.createElement('img', { src: '/public/mats/img/refresh-button.svg' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'choice-text' },
                                'Return trip +100 THB'
                            ),
                            _react2.default.createElement(
                                'a',
                                { role: 'button', style: styOptions[1], onClick: this.selectOption.bind(this, 1) },
                                _react2.default.createElement('img', { style: { width: "28px", heighe: "28px" }, src: '/public/mats/img/round-done-button.svg' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'choice' },
                            _react2.default.createElement('img', { src: '/public/mats/img/closed-cardboard-box.svg' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'choice-text' },
                                'Big parcel +200 THB'
                            ),
                            _react2.default.createElement(
                                'a',
                                { role: 'button', style: styOptions[2], onClick: this.selectOption.bind(this, 2) },
                                _react2.default.createElement('img', { style: { width: "28px", heighe: "28px" }, src: '/public/mats/img/round-done-button.svg' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'buttom-box' },
                        _react2.default.createElement(
                            'button',
                            { onClick: this.confirmOptions.bind(this) },
                            'Confirm'
                        )
                    )
                )
            );
        }
    }, {
        key: 'selectOption',
        value: function selectOption(number, e) {

            var options = this.state.options;
            options[number] = !options[number];

            this.setState({
                options: options
            });
        }
    }, {
        key: 'confirmOptions',
        value: function confirmOptions(e) {
            this.props.onConfirm(this.state.options);
            this.setState({
                isShow: false
            });
        }
    }, {
        key: 'close',
        value: function close(e) {
            this.setState({
                isShow: false
            });
        }
    }, {
        key: 'closeByClick',
        value: function closeByClick(e) {
            if (e.target.className === 'option-pop') {
                this.setState({ isShow: false });
            }
        }
    }]);

    return OptionPopUp;
}(_react.Component);

exports.default = OptionPopUp;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".option-pop {\n  display: none;\n  position: fixed;\n  z-index: 100;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: #000;\n  background-color: rgba(0,0,0,0.4);\n}\n.option-pop .popup-content {\n  margin: auto;\n  width: 290px;\n  height: 300px;\n  padding: 10px;\n  background-color: #fff;\n  border: solid 1px #d6d6d6;\n}\n.option-pop .popup-content .head {\n  font-weight: 600;\n}\n.option-pop .popup-content .choice-box {\n  padding: 10px;\n}\n.option-pop .popup-content .choice-box .choice {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0 15px 0;\n}\n.option-pop .popup-content .choice-box .choice img {\n  width: 30px;\n  height: 30px;\n}\n.option-pop .popup-content .buttom-box {\n  text-align: center;\n}\n.option-pop .popup-content .buttom-box button {\n  width: 150px;\n  height: 30px;\n  color: #fff;\n  background-color: #41985e;\n  border: 1px #fff solid;\n  border-radius: 3px;\n}\n", ""]);

// exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".order-detail {\n  display: table;\n  margin: 20px auto 0 auto;\n}\n@media (min-width: 960px) {\n  .order-detail {\n    width: 960px;\n  }\n}\n.order-detail .destination-container {\n  padding: 5px 5px;\n}\n.order-detail .destination-container .destination-box {\n  margin: 0 0 15px 0;\n}\n.order-detail .destination-container .destination-box .location-box {\n  margin: 0 0 5px 0;\n}\n.order-detail .option-box {\n  padding: 0 15px;\n}\n.order-detail .option-box .head {\n  display: flex;\n  margin: 15px 0 0 0;\n}\n.order-detail .option-box .head .head-text {\n  margin: 0 10px 0 0;\n}\n.order-detail .option-box .head .icon {\n  cursor: pointer;\n}\n.order-detail .option-box .head .icon img {\n  width: 20px;\n  height: 20px;\n}\n.order-detail .option-box .selected-option-box {\n  display: flex;\n  height: 90px;\n}\n.order-detail .option-box .selected-option-box .option-icon {\n  margin: 20px 15px 0 0;\n}\n.order-detail .option-box .selected-option-box .option-icon img {\n  width: 30px;\n  height: 30px;\n}\n.order-detail .detail-box {\n  margin: 50px 0 0 0;\n  padding: 0 15px;\n}\n.order-detail .detail-box .text-container {\n  display: flex;\n  justify-content: space-between;\n}\n.order-detail .detail-box .text-container .head-text {\n  font-size: 22px;\n}\n.order-detail .detail-box .text-container .sum {\n  font-size: 22px;\n  font-weight: 600;\n}\n.order-detail .button-box {\n  text-align: center;\n  margin: 25px 0 30px 0;\n}\n.order-detail .button-box .back-btn {\n  width: 90px;\n  height: 30px;\n  color: #000;\n  background-color: #fff;\n  border: 1px #000 solid;\n  border-radius: 3px;\n  margin: 0 10px 0 0;\n}\n.order-detail .button-box .confirm-btn {\n  width: 150px;\n  height: 30px;\n  color: #fff;\n  background-color: #41985e;\n  border: 1px #000 solid;\n  border-radius: 3px;\n}\n", ""]);

// exports


/***/ })
/******/ ]);
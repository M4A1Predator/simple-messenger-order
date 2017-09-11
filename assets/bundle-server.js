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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = render;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(5);

var _server2 = _interopRequireDefault(_server);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(1);

var _reducers = __webpack_require__(6);

var _reducers2 = _interopRequireDefault(_reducers);

var _redux = __webpack_require__(3);

var _reduxThunk = __webpack_require__(7);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _App = __webpack_require__(8);

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
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(3);

var reducers = (0, _redux.combineReducers)({
    webData: function webData() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments[1];

        if (action.type === 'ADD_NUM') {
            state = action.data;
        }
        return state;
    }
});

exports.default = reducers;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Home = __webpack_require__(9);

var _Home2 = _interopRequireDefault(_Home);

var _About = __webpack_require__(14);

var _About2 = _interopRequireDefault(_About);

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
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default })
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(1);

var _initMap = __webpack_require__(10);

var _initMap2 = _interopRequireDefault(_initMap);

var _reactGoogleMaps = __webpack_require__(11);

var _MarkerBox = __webpack_require__(15);

var _MarkerBox2 = _interopRequireDefault(_MarkerBox);

__webpack_require__(12);

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
            key: i });
    });
};

var Gmap = (0, _reactGoogleMaps.withGoogleMap)(function (props) {
    return _react2.default.createElement(
        _reactGoogleMaps.GoogleMap,
        {
            ref: props.onMapLoad,
            defaultZoom: 13,
            center: props.pos,
            mapElement: _react2.default.createElement('div', { style: { height: '100%' } }),
            containerElement: _react2.default.createElement('div', { style: { height: '100%' } }),
            onClick: props.onClickMap
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
            pos: { lat: 13.7246812, lng: -100.5006702 },
            totalDistance: 0,
            markers: [],
            points: [],
            directions: [],
            selectedMarker: -1,
            boxNum: 2
        };

        return _this;
    }

    _createClass(Home, [{
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'displayBoxes',
        value: function displayBoxes() {
            var bs = [];
            for (var i = 0; i < this.state.boxNum; i++) {

                var removeable = false;
                if (this.state.boxNum > 2 && i >= 1) {
                    removeable = true;
                }

                bs.push(_react2.default.createElement(_MarkerBox2.default, {
                    index: i,
                    point: this.state.points[i],
                    key: i,
                    removeable: removeable,
                    onSelect: this.onSelectMarkerBox.bind(this),
                    onRemove: this.removeMarkerBox.bind(this, i)
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
                                _react2.default.createElement('img', { className: 'icon', src: '/public/mats/img/plus-sign-in-a-black-circle.svg' })
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { style: { height: "80%", display: this.state.isShowGmap ? 'block' : 'block' } },
                    _react2.default.createElement(Gmap, {
                        pos: this.state.pos,
                        onMapLoad: this.handleMapLoad.bind(this),
                        containerElement: _react2.default.createElement('div', { style: { height: '100%' } }),
                        mapElement: _react2.default.createElement('div', { style: { height: '100%' } }),
                        onClickMap: this.handleMapClick.bind(this),
                        markers: this.state.markers,
                        directions: this.state.directions
                    })
                ),
                'TOTAL : ',
                this.state.totalDistance + " KM"
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            // Get position
            var promise = new Promise(function (resolve, reject) {
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
                        // handleLocationError(true, infoWindow, map.getCenter());
                        reject({});
                    });
                } else {
                    // Browser doesn't support Geolocation
                    // handleLocationError(false, infoWindow, map.getCenter());
                    reject({});
                }
            }).then(function (data) {
                _this2.setState({ pos: data.pos, isShowGmap: true });
            }).catch(function (err) {
                _this2.setState({ pos: _this2.state.pos, isShowGmap: true });
            });
        }
    }, {
        key: 'handleMapLoad',
        value: function handleMapLoad(map) {}
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
                        resolve(results);
                    });
                }).then(function (results) {
                    var points = _this3.state.points;
                    points[_this3.state.selectedMarker] = results;
                    _this3.setState({ points: points });
                });

                // Direction
                if (markers.length >= 2) {
                    var DirectionsService = new google.maps.DirectionsService();
                    var _markers = this.state.markers;
                    var directions = this.state.directions;

                    if (this.state.selectedMarker - 1 >= 0 && _markers[this.state.selectedMarker - 1] != undefined) {
                        this.getDerection(_markers[this.state.selectedMarker - 1], _markers[this.state.selectedMarker]).then(function (result) {
                            directions[_this3.state.selectedMarker - 1] = result;
                            var distance = parseFloat(result.routes[0].legs[0].distance.text);
                            _this3.setState({
                                directions: directions,
                                totalDistance: _this3.getTotalDistanceData(directions).totalDistance
                            });
                        });
                    }

                    if (this.state.selectedMarker + 1 < _markers.length && _markers[this.state.selectedMarker + 1] != undefined) {
                        this.getDerection(_markers[this.state.selectedMarker], _markers[this.state.selectedMarker + 1]).then(function (result) {
                            directions[_this3.state.selectedMarker] = result;
                            var distance = parseFloat(result.routes[0].legs[0].distance.text);
                            _this3.setState({
                                directions: directions,
                                totalDistance: _this3.getTotalDistanceData(directions).totalDistance
                            });
                        });
                    }

                    // this.getDerection(markers[markers.length - 2], markers[markers.length - 1])
                    // .then( result => {

                    //     const directions = this.state.directions
                    //     directions.push(result)

                    //     const distance = parseFloat(result.routes[0].legs[0].distance.text)

                    //     this.setState({
                    //         directions,
                    //         totalDistance: this.state.totalDistance + distance
                    //     })
                    // })
                }
            }
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
            this.setState({
                boxNum: this.state.boxNum + 1
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
            } else {
                this.getDerection(markers[index - 1], markers[index + 1]).then(function (result) {
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
        key: 'getDerection',
        value: function getDerection(start, end) {
            return new Promise(function (resolve, reject) {
                var DirectionsService = new google.maps.DirectionsService();
                DirectionsService.route({
                    origin: start.pos,
                    destination: end.pos,
                    travelMode: google.maps.TravelMode.DRIVING
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
    }]);

    return Home;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        webData: state.webData
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, prev) {
    return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var initMap = function initMap() {
    var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }
};

exports.default = initMap;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(undefined);
// imports


// module
exports.push([module.i, "html body {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n.home {\n  height: 100vh;\n  padding: 15px 15px 0 15px;\n}\n.home .markerbox-container {\n  z-index: 10;\n  width: 100%;\n  max-width: 421px;\n  height: 90px;\n  overflow-y: scroll;\n}\n.home .markerbox-container .option-box .option-icon {\n  float: right;\n  margin: 5px 25px 0 0;\n}\n.home .markerbox-container .option-box .option-icon .icon {\n  width: 19px;\n  height: 19px;\n}\n", ""]);

// exports


/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
    _inherits(About, _Component);

    function About() {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
    }

    _createClass(About, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'About Page'
            );
        }
    }]);

    return About;
}(_react.Component);

exports.default = About;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(17);

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
            placeName: 'test'
        };
        return _this;
    }

    _createClass(MarkerBox, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var placeName = this.getPlaceName(this.props.point);
            this.setState({
                placeName: placeName
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {}
    }, {
        key: 'render',
        value: function render() {
            var placeName = this.getPlaceName(this.props.point);
            var removeComponent = { component: "" };

            if (this.props.removeable === true) {
                removeComponent.component = _react2.default.createElement(
                    'div',
                    { className: 'remove-icon' },
                    _react2.default.createElement(
                        'a',
                        { onClick: this.props.onRemove, role: 'button', style: { cursor: "pointer" } },
                        _react2.default.createElement('img', { className: 'icon', src: '/public/mats/img/minus-sign-inside-a-black-circle.svg' })
                    )
                );
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
                        _react2.default.createElement('img', { className: 'icon', src: '/public/mats/img/map-marker.svg' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'input-box' },
                        _react2.default.createElement('input', {
                            type: 'text',
                            value: placeName || '',
                            onFocus: this.onSelect.bind(this),
                            onChange: this.handleChanged.bind(this, 'placeName')
                        })
                    ),
                    removeComponent.component
                )
            );
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
    }, {
        key: 'getPlaceName',
        value: function getPlaceName(results) {
            if (results == undefined || results.length == 0) {
                return '';
            }

            return results[0].formatted_address;
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
    removeable: false
};

exports.default = MarkerBox;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(undefined);
// imports


// module
exports.push([module.i, ".marker-box {\n  width: 100%;\n}\n.marker-box .marker-container .marker-icon {\n  display: inline-block;\n  margin: 0 3px 5px 0;\n}\n.marker-box .marker-container .marker-icon .icon {\n  width: 18px;\n  height: 18px;\n}\n.marker-box .marker-container .input-box {\n  display: inline-block;\n  width: 90%;\n}\n.marker-box .marker-container .input-box input {\n  height: 20px;\n  width: 100%;\n}\n.marker-box .marker-container .remove-icon {\n  display: inline-block;\n}\n.marker-box .marker-container .remove-icon img {\n  width: 18px;\n  height: 18px;\n  margin: 10px 0 0 -25px;\n}\n", ""]);

// exports


/***/ })
/******/ ]);
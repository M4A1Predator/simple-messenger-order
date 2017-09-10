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

var _About = __webpack_require__(15);

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
        props.directions && _react2.default.createElement(_reactGoogleMaps.DirectionsRenderer, { directions: props.directions })
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
            markers: [],
            points: [],
            directions: null,
            totalDistance: 0
        };

        return _this;
    }

    _createClass(Home, [{
        key: 'handleMapLoad',
        value: function handleMapLoad(map) {}
    }, {
        key: 'handleMapClick',
        value: function handleMapClick(e) {
            var _this2 = this;

            console.log(e);
            var m = {
                pos: e.latLng,
                defaultAnimation: 2,
                key: Date.now() // Add a key property for: http://fb.me/react-warning-keys
            };

            var markers = this.state.markers;
            markers.push(m);

            // Direction
            if (markers.length >= 2) {
                var DirectionsService = new google.maps.DirectionsService();
                this.getDerection(markers[markers.length - 2], markers[markers.length - 1]).then(function (result) {
                    _this2.setState({
                        directions: result,
                        totalDistance: result.routes[0].legs[0].distance.text
                    });
                });
            }

            this.setState({
                markers: markers
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: { height: '100vh' } },
                'Distance : ',
                this.state.totalDistance,
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
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

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
                console.log(data);
                _this3.setState({ pos: data.pos, isShowGmap: true });
            }).catch(function (err) {
                _this3.setState({ pos: _this3.state.pos, isShowGmap: true });
            });

            // const DirectionsService = new google.maps.DirectionsService();
            // DirectionsService.route({
            //     origin: new google.maps.LatLng(13.7071284, 100.4965502),
            //     destination: new google.maps.LatLng(13.7081284, 100.497552),
            //     travelMode: google.maps.TravelMode.DRIVING,
            //     }, (result, status) => {
            //     if (status === google.maps.DirectionsStatus.OK) {
            //         console.log(result)
            //         const totalDistance = result.routes[0].legs[0].distance
            //         this.setState({
            //             directions: result,
            //             totalDistance: totalDistance.text
            //         });
            //     } else {
            //         console.error('error fetching directions ' + result);
            //     }
            // });
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
                        console.log(result);
                        var totalDistance = result.routes[0].legs[0].distance;
                        // this.setState({
                        //     directions: result,
                        //     totalDistance: totalDistance.text
                        // });
                        resolve(result);
                    } else {
                        console.error('error fetching directions ' + result);
                        reject({ "err": 'error fetching directions ' + result });
                    }
                });
            });
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
exports.push([module.i, "html body {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n", ""]);

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
/* 14 */,
/* 15 */
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

/***/ })
/******/ ]);
var BetterArray =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Reducer = __webpack_require__(1);

var _Reducer2 = _interopRequireDefault(_Reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    cls.apply(this, arguments);
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

var BetterArray = function (_extendableBuiltin2) {
  _inherits(BetterArray, _extendableBuiltin2);

  function BetterArray() {
    _classCallCheck(this, BetterArray);

    return _possibleConstructorReturn(this, (BetterArray.__proto__ || Object.getPrototypeOf(BetterArray)).apply(this, arguments));
  }

  _createClass(BetterArray, [{
    key: 'sum',
    value: function sum() {
      return _get(BetterArray.prototype.__proto__ || Object.getPrototypeOf(BetterArray.prototype), 'reduce', this).call(this, _Reducer2.default.sumReducer, 0);
    }
  }, {
    key: 'subtraction',
    value: function subtraction() {
      if (_get(BetterArray.prototype.__proto__ || Object.getPrototypeOf(BetterArray.prototype), 'length', this) === 0) {
        return 0;
      }
      return _get(BetterArray.prototype.__proto__ || Object.getPrototypeOf(BetterArray.prototype), 'reduce', this).call(this, _Reducer2.default.subtractionReducer);
    }
  }, {
    key: 'product',
    value: function product() {
      return _get(BetterArray.prototype.__proto__ || Object.getPrototypeOf(BetterArray.prototype), 'reduce', this).call(this, _Reducer2.default.productReducer, 1);
    }
  }, {
    key: 'maximum',
    value: function maximum() {
      return _get(BetterArray.prototype.__proto__ || Object.getPrototypeOf(BetterArray.prototype), 'reduce', this).call(this, _Reducer2.default.maxReducer());
    }
  }, {
    key: 'minimum',
    value: function minimum() {
      return _get(BetterArray.prototype.__proto__ || Object.getPrototypeOf(BetterArray.prototype), 'reduce', this).call(this, _Reducer2.default.minReducer());
    }
  }, {
    key: 'average',
    value: function average() {
      return this.sum() / _get(BetterArray.prototype.__proto__ || Object.getPrototypeOf(BetterArray.prototype), 'length', this);
    }
  }, {
    key: 'median',
    value: function median() {
      var half = Math.round(_get(BetterArray.prototype.__proto__ || Object.getPrototypeOf(BetterArray.prototype), 'length', this) / 2);
      var isEven = _get(BetterArray.prototype.__proto__ || Object.getPrototypeOf(BetterArray.prototype), 'length', this) % 2 === 0;
      var median = _get(BetterArray.prototype.__proto__ || Object.getPrototypeOf(BetterArray.prototype), 'sort', this).call(this)[half];

      if (isEven) {
        median = (median + _get(BetterArray.prototype.__proto__ || Object.getPrototypeOf(BetterArray.prototype), 'sort', this).call(this)[half - 1]) / 2;
      }

      return median;
    }
  }, {
    key: 'occurences',
    value: function occurences() {
      return _get(BetterArray.prototype.__proto__ || Object.getPrototypeOf(BetterArray.prototype), 'reduce', this).call(this, _Reducer2.default.objectReduce, {});
    }
  }, {
    key: 'from',
    value: function from(arr) {
      var _get2;

      return (_get2 = _get(BetterArray.prototype.__proto__ || Object.getPrototypeOf(BetterArray.prototype), 'push', this)).call.apply(_get2, [this].concat(_toConsumableArray(arr)));
    }
  }, {
    key: 'mode',
    value: function mode() {
      var occurences = this.occurences();
      var maxValue = Math.max.apply(Math, _toConsumableArray(Object.values(occurences)));
      var occurenceKeys = Object.keys(occurences);

      return occurenceKeys.filter(function (occurenceKey) {
        return occurences[occurenceKey] === maxValue;
      });
    }
  }]);

  return BetterArray;
}(_extendableBuiltin(Array));

exports.default = BetterArray;
module.exports = exports.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Reducer = function () {
  function Reducer() {
    _classCallCheck(this, Reducer);
  }

  _createClass(Reducer, null, [{
    key: "sumReducer",
    value: function sumReducer(accumulator, currentValue) {
      return accumulator + currentValue;
    }
  }, {
    key: "subtractionReducer",
    value: function subtractionReducer(accumulator, currentValue) {
      return accumulator - currentValue;
    }
  }, {
    key: "productReducer",
    value: function productReducer(accumulator, currentValue) {
      return accumulator * currentValue;
    }
  }, {
    key: "maxReducer",
    value: function maxReducer(max, compare) {
      return max > compare ? max : compare;
    }
  }, {
    key: "minReducer",
    value: function minReducer(min, compare) {
      return min < compare ? min : compare;
    }
  }, {
    key: "objectReduce",
    value: function objectReduce(object, item) {
      var newObject = JSON.parse(JSON.stringify(object));

      // if (object[item]) {
      //   newObject[item] += 1;
      // } else {
      //   newObject[item] = 1;
      // }
      newObject[item] = 1;
      console.log(object);
      newObject[item] += object[item] ? 1 : 0;
      return newObject;
    }
  }]);

  return Reducer;
}();

exports.default = Reducer;
module.exports = exports.default;

/***/ })
/******/ ]);
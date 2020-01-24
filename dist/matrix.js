(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("matrix", [], factory);
	else if(typeof exports === 'object')
		exports["matrix"] = factory();
	else
		root["matrix"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ ({

/***/ "./node_modules/utility-functions/dist/utility-functions.js":
/*!******************************************************************!*\
  !*** ./node_modules/utility-functions/dist/utility-functions.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(n,r){ true?module.exports=r():undefined}(window,(function(){return function(n){var r={};function t(e){if(r[e])return r[e].exports;var u=r[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var u in n)t.d(e,u,function(r){return n[r]}.bind(null,u));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=0)}([function(n,r,t){"use strict";var e=this&&this.__spreadArrays||function(){for(var n=0,r=0,t=arguments.length;r<t;r++)n+=arguments[r].length;var e=Array(n),u=0;for(r=0;r<t;r++)for(var o=arguments[r],i=0,f=o.length;i<f;i++,u++)e[u]=o[i];return e};function u(n){return function(r){return n}}function o(n){return function(r){return r.map(n)}}function i(n){return function(r){return r.map((function(r,t){return n(r)(t)}))}}function f(n){return function(r){var t;return(t={})[n]=r,t}}function c(n){return function(r){return Array.apply(null,Array(r-n)).map((function(r,t){return n+t}))}}function a(n){return function(r){return Math.floor(Math.random()*r)+n}}Object.defineProperty(r,"__esModule",{value:!0}),r.dropFirst=function(n){return n.slice(1)},r.dropLast=function(n){return n.slice(0,n.length-1)},r.id=function(n){return n},r.keep=u,r.map=o,r.mapi=i,r.adjust=function(n){return function(r){return function(t){return i((function(t){return function(e){return e===n?r(t):t}}))(t)}}},r.merge=function(n){var r=Array.isArray(n)?[]:{};return function(t){return Object.assign(r,n,t)}},r.mod=function(n){return function(r){return(r%n+n)%n}},r.objOf=f,r.pipe=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return function(r){return e(n).reduce((function(n,r){return r(n)}),r)}},r.prop=function(n){return function(r){return r[n]}},r.range=c,r.repeat=function(n){return function(r){return o(u(n))(c(0)(r))}},r.randomInt=a,r.random=function(n){if(Array.isArray(n))return n[a(0)(n.length)];if("number"==typeof n)return function(r){return Math.random()*r+n};throw Error("Incompatible parameter type: "+typeof n)},r.spec=function(n){return function(r){return Object.keys(n).map((function(t){return f(t)(n[t](r))})).reduce((function(n,r){return Object.assign(n,r)}))}},r.mapRange=function(n){return function(r,t){return function(e,u){return(n-r)*(u-e)/(t-r)+e}}}}])}));
//# sourceMappingURL=utility-functions.js.map

/***/ }),

/***/ "./src/matrix.ts":
/*!***********************!*\
  !*** ./src/matrix.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = __webpack_require__(/*! ./vector */ "./src/vector.ts");
var utility_functions_1 = __webpack_require__(/*! utility-functions */ "./node_modules/utility-functions/dist/utility-functions.js");
var radians = function (degrees) { return (degrees * Math.PI) / 180; };
function dimensionsError(a, b) {
    throw Error('Matrices are not the right dimensions: a:' +
        a.m +
        'x' +
        a.n +
        ' b:' +
        b.m +
        'x' +
        b.n);
}
function identity2dArray(dimension) {
    var values = [];
    for (var i = 0; i < dimension; i++) {
        values[i] = utility_functions_1.repeat(0)(dimension);
        values[i][i] = 1;
    }
    return values;
}
var Matrix = /** @class */ (function () {
    function Matrix(values) {
        this.values = values.map(function (v) { return v.copy(); });
    }
    Matrix.create = function (values) {
        return new Matrix(values.map(function (v) { return vector_1.Vector.create.apply(vector_1.Vector, v); }));
    };
    Matrix.identity = function (dimension) {
        return Matrix.create(identity2dArray(dimension));
    };
    Matrix.rotation = function (degrees, dimension, i, j) {
        var m = identity2dArray(dimension);
        var angle = radians(degrees);
        m[i][i] = m[j][j] = Math.cos(angle);
        m[i][j] = -1 * (m[j][i] = Math.sin(angle));
        return Matrix.create(m);
    };
    Matrix.rotationX = function (angle, dimension) {
        if (dimension === void 0) { dimension = 3; }
        return Matrix.rotation(angle, dimension, 1, 2);
    };
    Matrix.rotationY = function (angle, dimension) {
        if (dimension === void 0) { dimension = 3; }
        return Matrix.rotation(angle, dimension, 0, 2);
    };
    Matrix.rotationZ = function (angle, dimension) {
        if (dimension === void 0) { dimension = 3; }
        return Matrix.rotation(angle, dimension, 0, 1);
    };
    Object.defineProperty(Matrix.prototype, "m", {
        get: function () {
            return this.values.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "n", {
        get: function () {
            return this.values[0].length;
        },
        enumerable: true,
        configurable: true
    });
    Matrix.prototype.add = function () {
        var ms = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ms[_i] = arguments[_i];
        }
        if (ms.length < 1) {
            return this;
        }
        var b = ms[0];
        if (this.m !== b.m || this.n !== b.n) {
            throw dimensionsError(this, b);
        }
        var sum = new Matrix(this.values.map(function (v, i) { return v.add(b[i]); }));
        return sum.add.apply(sum, utility_functions_1.dropFirst(ms));
    };
    Matrix.prototype.subtract = function () {
        var ms = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ms[_i] = arguments[_i];
        }
        if (ms.length < 1) {
            return this;
        }
        var diff = this.add(ms[0].scalarMult(-1));
        return diff.subtract.apply(diff, utility_functions_1.dropFirst(ms));
    };
    Matrix.prototype.scalarMult = function (c) {
        return new Matrix(this.values.map(function (v) { return v.mult(c); }));
    };
    Matrix.prototype.transpose = function () {
        var values = [];
        for (var i = 0; i < this.n; i++) {
            values[i] = [];
            for (var j = 0; j < this.m; j++) {
                values[i][j] = this[j][i];
            }
        }
        return Matrix.create(values);
    };
    Matrix.prototype.mult = function () {
        var _a;
        var ms = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ms[_i] = arguments[_i];
        }
        if (ms.length < 1) {
            return this;
        }
        var b = ms[0];
        if (this.n !== b.m) {
            throw dimensionsError(this, b);
        }
        var bt = b.transpose();
        var c = [];
        for (var i = 0; i < this.m; i++) {
            c[i] = [];
            for (var j = 0; j < b.n; j++) {
                c[i][j] = this[i].dotProduct(bt[j]);
            }
        }
        return (_a = Matrix.create(c)).mult.apply(_a, utility_functions_1.dropFirst(ms));
    };
    Matrix.prototype.copy = function () {
        return new Matrix(this.values.map(function (v) { return v.copy(); }));
    };
    return Matrix;
}());
exports.Matrix = Matrix;


/***/ }),

/***/ "./src/vector.ts":
/*!***********************!*\
  !*** ./src/vector.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utility_functions_1 = __webpack_require__(/*! utility-functions */ "./node_modules/utility-functions/dist/utility-functions.js");
var Vector = /** @class */ (function () {
    function Vector() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this.values = __spreadArrays(values);
    }
    Vector.create = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var others = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            others[_i - 2] = arguments[_i];
        }
        return new (Vector.bind.apply(Vector, __spreadArrays([void 0, x, y], others)))();
    };
    Vector.fill = function (c, length) {
        return new (Vector.bind.apply(Vector, __spreadArrays([void 0], utility_functions_1.repeat(c)(length))))();
    };
    Vector.random2D = function (maxforce) {
        return new Vector(1, 0).rotate(utility_functions_1.random(0)(Math.PI * 2)).setMag(maxforce);
    };
    Object.defineProperty(Vector.prototype, "length", {
        get: function () {
            return this.values.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "x", {
        get: function () {
            return this.values[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "y", {
        get: function () {
            return this.values[1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "z", {
        get: function () {
            return this.values[2];
        },
        enumerable: true,
        configurable: true
    });
    Vector.prototype.normalize = function () {
        return this.setMag(1);
    };
    Vector.prototype.rotate = function (angle) {
        return new Vector(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle));
    };
    Vector.prototype.setMag = function (magnitude) {
        if (magnitude != null) {
            var mag = this.getMag();
            var values = [];
            for (var i = 0; i < this.values.length; i++) {
                values[i] = (this.values[i] / mag) * magnitude;
            }
            return new (Vector.bind.apply(Vector, __spreadArrays([void 0], values)))();
        }
        else {
            return this;
        }
    };
    Vector.prototype.getMag = function () {
        return Math.sqrt(this.values.reduce(function (acc, value) { return acc + Math.pow(value, 2); }, 0));
    };
    Vector.prototype.limit = function (max) {
        if (this.getMag() > max) {
            return this.setMag(max);
        }
        return this;
    };
    Vector.prototype.dist = function (other) {
        return Math.sqrt(this.values.reduce(function (acc, value, index) { return acc + Math.pow(other.values[index] - value, 2); }, 0));
    };
    Vector.prototype.add = function () {
        var vs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            vs[_i] = arguments[_i];
        }
        if (vs.length < 1) {
            return this;
        }
        var sum = new (Vector.bind.apply(Vector, __spreadArrays([void 0], this.values.map(function (v, i) { return v + vs[0].values[i]; }))))();
        return sum.add.apply(sum, utility_functions_1.dropFirst(vs));
    };
    Vector.prototype.subtract = function () {
        var vs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            vs[_i] = arguments[_i];
        }
        if (vs.length < 1) {
            return this;
        }
        var diff = this.add(vs[0].mult(-1));
        return diff.subtract.apply(diff, utility_functions_1.dropFirst(vs));
    };
    Vector.prototype.mult = function (n) {
        return new (Vector.bind.apply(Vector, __spreadArrays([void 0], this.values.map(function (v) { return v * n; }))))();
    };
    Vector.prototype.heading = function () {
        return Math.atan2(this.y, this.x);
    };
    Vector.prototype.copy = function () {
        return new (Vector.bind.apply(Vector, __spreadArrays([void 0], this.values)))();
    };
    Vector.prototype.dotProduct = function (b) {
        var c = 0;
        for (var i = 0; i < this.values.length; i++) {
            c += this.values[i] * b.values[i];
        }
        return c;
    };
    return Vector;
}());
exports.Vector = Vector;


/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/matrix.ts ./src/vector.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/matrix.ts */"./src/matrix.ts");
module.exports = __webpack_require__(/*! ./src/vector.ts */"./src/vector.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=matrix.js.map
(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        CartPopup: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./resources/assets/js/CartPopup.js", "vendors~CartBtn~CartPopup" ]);
    return checkDeferredModules();
})({
    "./resources/assets/js/CartPopup.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\n\nclass CartPopup extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {};\n\n    this.state = {};\n  }\n\n  test() {\n    return _asyncToGenerator(function* () {})();\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "cart-popup",\n      className: ""\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "cart-title"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "title"\n    }, "My cart")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "cart-items"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "item"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n      src: "img/products/adidas-yeezy-boost-white.png"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "delete-btn"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "circle"\n    }, "X"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "item"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n      src: "img/products/adidas-yeezy-boost-white.png"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "delete-btn"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "circle"\n    }, "X"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "item"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n      src: "img/products/adidas-yeezy-boost-white.png"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "delete-btn"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "circle"\n    }, "X"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "item"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n      src: "img/products/adidas-yeezy-boost-white.png"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "delete-btn"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "circle"\n    }, "X"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "item"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n      src: "img/products/adidas-yeezy-boost-white.png"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "delete-btn"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "circle"\n    }, "X")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "cart-total-products"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "cart-container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "total"\n    }, "Total"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "number"\n    }, "X4"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "cart-total-price"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "cart-container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "total"\n    }, "Total"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "number"\n    }, "$2000"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "cart-checkout"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "checkout"\n    }, "checkout"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fab fa-opencart"\n    })));\n  }\n\n}\n\nconst CartPopupRoot = document.getElementById(\'CartPopupRoot\');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CartPopup, null), CartPopupRoot);\n\n//# sourceURL=webpack:///./resources/assets/js/CartPopup.js?');
    }
});
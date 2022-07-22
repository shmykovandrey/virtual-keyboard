/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\n\nh1 {\n  text-align: center;\n  padding-top: 20px;\n  padding-bottom: 30px;\n}\n\np {\n  text-align: center;\n  padding: 20px;\n  font-size: 25px;\n}\n\n.wrapper {\n  margin: 0px auto;\n  width: 1000px;\n  height: 500px;\n  background-color: #f1f1f1;\n}\n\n.text-area {\n  display: block;\n  margin: 0px auto;\n  font-size: 22px;\n  padding: 20px;\n}\n\n.keyboard {\n  width: 1000px;\n  height: 400px;\n  background-color: #d3d3d3;\n  padding: 20px 10px;\n  display: grid;\n  grid-template-columns: repeat(32, [col] 1fr);\n  grid-template-rows: repeat(5, [row] 1fr);\n  justify-items: center;\n  grid-gap: 10px;\n}\n\n.keyboard__key {\n  width: 100%;\n  height: 40px;\n  border: 2px solid black;\n  border-radius: 5px;\n  text-align: center;\n  padding-top: 0px;\n  grid-column: span 2;\n  font-size: 25px;\n  box-shadow: #111;\n}\n\n.keyboard_empty {\n  border: 1px solid #111;\n}\n\n.double {\n  grid-column: span 4;\n  width: 100%;\n}\n\n.doublehalf {\n  grid-column: span 5;\n  width: 100%;\n}\n\n.triple {\n  grid-column: span 6;\n  width: 100%;\n}\n\n.onehalf {\n  grid-column: span 3;\n  width: 100%;\n}\n\n.space {\n  grid-column: span 12;\n  width: 100%;\n}\n\n.control {\n  background-color: #a1a1a1;\n}\n\n.click {\n  background-color: #0f0;\n  border-radius: 100px;\n  transition: all 0.2s;\n}", "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;EACA,sBAAA;AACF;;AAEA;EACE,kBAAA;EACA,iBAAA;EACA,oBAAA;AACF;;AAEA;EACE,kBAAA;EACA,aAAA;EACA,eAAA;AACF;;AAEA;EACE,gBAAA;EACA,aAAA;EACA,aAAA;EACA,yBAAA;AACF;;AAEA;EACE,cAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;AACF;;AAEA;EACE,aAAA;EACA,aAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;EACA,4CAAA;EACA,wCAAA;EACA,qBAAA;EACA,cAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;AACF;;AAEA;EACE,sBAAA;AACF;;AAEA;EACE,mBAAA;EACA,WAAA;AACF;;AAEA;EACE,mBAAA;EACA,WAAA;AACF;;AAEA;EACE,mBAAA;EACA,WAAA;AACF;;AAEA;EACE,mBAAA;EACA,WAAA;AACF;;AAEA;EACE,oBAAA;EACA,WAAA;AACF;;AAEA;EACE,yBAAA;AACF;;AAEA;EACE,sBAAA;EACA,oBAAA;EACA,oBAAA;AACF","sourcesContent":["* {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  padding-top: 20px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\np {\r\n  text-align: center;\r\n  padding: 20px;\r\n  font-size: 25px;\r\n}\r\n\r\n.wrapper {\r\n  margin: 0px auto;\r\n  width: 1000px;\r\n  height: 500px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n.text-area {\r\n  display: block;\r\n  margin: 0px auto;\r\n  font-size: 22px;\r\n  padding: 20px;\r\n}\r\n\r\n.keyboard {\r\n  width: 1000px;\r\n  height: 400px;\r\n  background-color: #d3d3d3;\r\n  padding: 20px 10px;\r\n  display: grid;\r\n  grid-template-columns: repeat(32, [col] 1fr);\r\n  grid-template-rows: repeat(5, [row] 1fr);\r\n  justify-items: center;\r\n  grid-gap: 10px\r\n}\r\n\r\n.keyboard__key {\r\n  width: 100%;\r\n  height: 40px;\r\n  border: 2px solid black;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  padding-top: 0px;\r\n  grid-column: span 2;\r\n  font-size: 25px;\r\n  box-shadow: #111;\r\n}\r\n\r\n.keyboard_empty {\r\n  border: 1px solid #111;\r\n}\r\n\r\n.double {\r\n  grid-column: span 4;\r\n  width: 100%;\r\n}\r\n\r\n.doublehalf {\r\n  grid-column: span 5;\r\n  width: 100%;\r\n}\r\n\r\n.triple {\r\n  grid-column: span 6;\r\n  width: 100%;\r\n}\r\n\r\n.onehalf {\r\n  grid-column: span 3;\r\n  width: 100%;\r\n}\r\n\r\n.space {\r\n  grid-column: span 12;\r\n  width: 100%;\r\n}\r\n\r\n.control {\r\n  background-color: #a1a1a1;\r\n}\r\n\r\n.click {\r\n  background-color: #0f0;\r\n  border-radius: 100px;\r\n  transition: all 0.2s;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/generateAllKeys.js":
/*!********************************!*\
  !*** ./src/generateAllKeys.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateAllKeys)
/* harmony export */ });
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ "./src/key.js");

function generateAllKeys() {
  const keyArr = [];
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Backquote', '`', '~', 'ё', 'Ё'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Digit1', '1', '!', '1', '!'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Digit2', '2', '@', '2', '"'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Digit3', '3', '#', '3', '№'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Digit4', '4', '$', '4', ';'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Digit5', '5', '%', '5', '%'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Digit6', '6', '^', '6', ':'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Digit7', '7', '&', '7', '?'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Digit8', '8', '*', '8', '*'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Digit9', '9', '(', '9', '('));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Digit0', '0', ')', '0', ')'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Minus', '-', '_'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Equal', '=', '+'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Backspace', 'bcsps'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Tab', 'tab'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyQ', 'q', 'Q', 'й', 'Й'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyW', 'w', 'W', 'ц', 'Ц'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyE', 'e', 'E', 'у', 'У'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyR', 'r', 'R', 'к', 'К'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyT', 't', 'T', 'е', 'Е'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyY', 'y', 'Y', 'н', 'Н'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyU', 'u', 'U', 'г', 'Г'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyI', 'i', 'I', 'ш', 'Ш'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyO', 'o', 'O', 'щ', 'Щ'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyP', 'p', 'P', 'з', 'З'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('BracketLeft', '[', '{'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('BracketRight', ']', '}'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Backslash', '\\', '|', '\\', '/'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Delete', 'del'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('CapsLock', 'caps lock'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyA', 'a', 'A', 'ф', 'Ф'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyS', 's', 'S', 'ы', 'Ы'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyD', 'd', 'D', 'в', 'В'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyF', 'f', 'F', 'а', 'А'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyG', 'g', 'G', 'п', 'П'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyH', 'h', 'H', 'р', 'Р'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyJ', 'j', 'J', 'о', 'О'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyK', 'k', 'K', 'л', 'Л'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyL', 'l', 'L', 'д', 'Д'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Semicolon', ';', ':', 'ж', 'Ж'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Quote', '\'', '"', 'э', 'Э'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Enter', 'enter'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('ShiftLeft', 'shift'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyZ', 'z', 'Z', 'я', 'Я'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyX', 'x', 'X', 'ч', 'Ч'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyC', 'c', 'C', 'с', 'С'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyV', 'v', 'V', 'м', 'М'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyB', 'b', 'B', 'и', 'И'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyN', 'n', 'N', 'т', 'Т'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('KeyM', 'm', 'M', 'ь', 'Ь'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Comma', ',', '<', 'б', 'Б'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Period', '.', '>', 'ю', 'Ю'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Slash', '/', '?', '.', ','));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('ArrowUp', '↑'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('ShiftRight', 'shift'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('ControlLeft', 'ctrl'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('MetaLeft', 'win'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('AltLeft', 'alt'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('Space', 'space'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('AltRight', 'alt'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('ArrowLeft', '←'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('ArrowDown', '↓'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('ArrowRight', '→'));
  keyArr.push(new _key__WEBPACK_IMPORTED_MODULE_0__["default"]('ControlRight', 'ctrl'));
  return keyArr;
}


/***/ }),

/***/ "./src/key.js":
/*!********************!*\
  !*** ./src/key.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Key)
/* harmony export */ });
const controlKey = new Set(['Backspace', 'Delete', 'Tab', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft',
  'AltLeft', 'Space', 'AltRight', 'ControlRight', 'MetaLeft'
]);
const alphabetKey = new Set(['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP',
  'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL',
  'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM'
]);
const specialSymbol = new Set(['Backquote', 'Minus', 'Equal', 'BracketLeft', 'BracketRight', 'Backslash',
  'Slash', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7',
  'Digit8', 'Digit9', 'Digit0'
]);
const diffKey = new Set(['Semicolon', 'Quote', 'Comma', 'Period']);

class Key {
  constructor(
    keyName,
    keySymbol,
    keyShiftSymbol = keySymbol,
    keyLangSymbol = keySymbol,
    keyLangShiftSymbol = keySymbol
  ) {
    this.keyName = keyName; // BracketLeft
    this.keySymbol = keySymbol; // [
    this.keyShiftSymbol = keyShiftSymbol;
    this.keyLangSymbol = keyLangSymbol;
    this.keyLangShiftSymbol = keyLangShiftSymbol;
    if (localStorage.russian === 'false' || localStorage.russian === undefined) {
      this.russian = false;
    } else this.russian = true;
    this.pressed = false;
    this.shifted = false;
    this.capsed = false;
  }

  setPressed() {
    this.pressed = true;
  }

  setUnpressed() {
    this.pressed = false;
  }

  setShifted() {
    this.shifted = true;
  }

  setUnshifted() {
    this.shifted = false;
  }

  setCapsed() {
    this.capsed = true;
  }

  setUncapsed() {
    this.capsed = false;
  }

  switchLang() {
    this.russian = !this.russian;
    localStorage.russian = this.russian;
  }

  renderKey() {
    const domParrent = document.querySelector('.keyboard');
    domParrent.append(this.createTemplate());
  }

  isPressed(div) {
    if (this.pressed) {
      div.classList.add('click');
    } else {
      div.classList.remove('click');
    }
    return div;
  }

  setStyle(div) {
    switch (this.keyName) {
      case 'ControlLeft':
      case 'Tab':
        div.classList.add('double');
        break;
      case 'Space':
        div.classList.add('space');
        break;
      case 'ControlRight':
      case 'AltLeft':
        div.classList.add('onehalf');
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
      case 'Enter':
      case 'CapsLock':
        div.classList.add('doublehalf');
        break;
      case 'Backspace':
        div.classList.add('triple');
        break;
      default:
        div.classList.add('basic_key');
    }
    return div;
  }

  сreateAlphabetSymbol(div) {
    let newDiv = div;
    if (this.russian === false) {
      if (this.capsed) {
        newDiv.textContent = this.keyShiftSymbol;
        return newDiv;
      }
      if (!this.shifted) {
        newDiv.textContent = this.keySymbol;
      } else {
        newDiv.textContent = this.keyShiftSymbol;
      }
    } else {
      if (this.capsed) {
        newDiv.textContent = this.keyLangShiftSymbol;
        return newDiv;
      }
      if (!this.shifted) {
        newDiv.textContent = this.keyLangSymbol;
      } else {
        newDiv.textContent = this.keyLangShiftSymbol;
      }
    }
    return newDiv;
  }

  сreateSpecialSymbol(div) {
    let newDiv = div;
    if (this.russian === false) {
      if (!this.shifted) {
        newDiv.textContent = this.keySymbol;
      } else {
        newDiv.textContent = this.keyShiftSymbol;
      }
    } else if (!this.shifted) {
      newDiv.textContent = this.keyLangSymbol;
    } else {
      newDiv.textContent = this.keyLangShiftSymbol;
    }
    return newDiv;
  }

  createTemplate() {
    let div = document.createElement('button');
    div.classList.add('keyboard__key');
    if (controlKey.has(this.keyName)) {
      div.classList.add('control');
    }
    div = this.isPressed(div);
    div = this.setStyle(div);
    div.setAttribute('id', this.keyName);
    if (alphabetKey.has(this.keyName)) {
      div = this.сreateAlphabetSymbol(div);
      return div;
    }
    if (specialSymbol.has(this.keyName)) {
      div = this.сreateSpecialSymbol(div);
      return div;
    }
    if (diffKey.has(this.keyName)) {
      if (this.russian) {
        div = this.сreateAlphabetSymbol(div);
      } else div = this.сreateSpecialSymbol(div);
      return div;
    }
    div.textContent = this.keySymbol;
    return div;
  }
}


/***/ }),

/***/ "./src/mainLogic.js":
/*!**************************!*\
  !*** ./src/mainLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mainLogic)
/* harmony export */ });
/* harmony import */ var _generateAllKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateAllKeys */ "./src/generateAllKeys.js");


function mainLogic() {
  const KEYS = (0,_generateAllKeys__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const keyPressedMap = new Set();
  let capsed = false;

  const alphabetKey = new Set(['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY',
    'KeyU', 'KeyI', 'KeyO', 'KeyP',
    'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL',
    'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM'
  ]);
  const specialSymbol = new Set(['Backquote', 'Minus', 'Equal', 'BracketLeft',
    'BracketRight', 'Backslash', 'Semicolon', 'Quote', 'Comma', 'Period', 'Slash',
    'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7',
    'Digit8', 'Digit9', 'Digit0'
  ]);

  function reRenderKeyBoard() {
    let keyboard = document.querySelector('.keyboard');
    keyboard.innerHTML = '';
    KEYS.forEach(key => key.renderKey());
  }

  function keysPreventDefault(event) {
    if (event.code === 'Enter' || event.code === 'Tab' || event.code === 'AltRight' || event.code === 'AltLeft' || event.code === 'Backspace' || event.code === 'Delete') event.preventDefault();
    if (alphabetKey.has(event.code) || specialSymbol.has(event.code)) event.preventDefault();
  }

  function pressed(keyName) {
    KEYS.forEach(key => {
      if (key.keyName === keyName) {
        key.setPressed();
      }
    });
  }

  function unpressed(keyName) {
    KEYS.forEach(key => key.keyName === keyName && key.setUnpressed());
  }

  function shifter() {
    KEYS.forEach(key => key.setShifted());
  }

  function unshifter() {
    KEYS.forEach(key => key.setUnshifted());
  }

  function isCapsed(keyName) {
    if (capsed) {
      capsed = false;
      KEYS.forEach(key => key.setUncapsed());
      unpressed(keyName);
    } else {
      capsed = true;
      KEYS.forEach(key => key.setCapsed());
    }
  }

  function switchLangCheck() {
    if ((keyPressedMap.has('ShiftLeft') || keyPressedMap.has('ShiftRight')) && (keyPressedMap.has('ControlLeft') || keyPressedMap.has('ControlRight'))) {
      KEYS.forEach(key => key.switchLang());
    }
  }

  function printKey(key) {
    const textArea = document.querySelector('.text-area');
    if (key === 'Enter') {
      textArea.setRangeText('\n');
      textArea.selectionEnd += 1;
      textArea.selectionStart += 1;
      return;
    }
    if (key === 'Space') {
      textArea.setRangeText(' ');
      textArea.selectionEnd += 1;
      textArea.selectionStart += 1;
      return;
    }
    if (key === 'Tab') {
      textArea.setRangeText('    ');
      textArea.selectionEnd += 4;
      textArea.selectionStart += 4;
      return;
    }
    if (key === 'Backspace') {
      textArea.selectionStart -= 1;
      textArea.setRangeText('');
      return;
    }
    if (key === 'Delete') {
      textArea.selectionEnd += 1;
      textArea.setRangeText('');
      return;
    }
    if (alphabetKey.has(key) || specialSymbol.has(key)) {
      textArea.setRangeText(document.querySelector('#' + key).innerHTML);
      textArea.selectionEnd += 1;
      textArea.selectionStart += 1;
    }
  }

  function printArrowKey(arrow) {
    const textArea = document.querySelector('.text-area');
    textArea.setRangeText(document.querySelector('#' + arrow).innerText);
    textArea.selectionEnd += 1;
    textArea.selectionStart += 1;
  }

  function keyDown(event) {
    document.querySelector('.text-area').focus();
    keyPressedMap.add(event.code);
    switchLangCheck();
    keysPreventDefault(event);
    pressed(event.code);
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') shifter();
    reRenderKeyBoard();
    printKey(event.code);
  }

  function keyUp(event) {
    document.querySelector('.text-area').focus();
    keyPressedMap.delete(event.code);
    keysPreventDefault(event);
    if (event.code === 'CapsLock') {
      isCapsed(event.code);
    } else unpressed(event.code);
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') unshifter();
    reRenderKeyBoard();
  }

  function mouseDown(event) {
    document.querySelector('.text-area').focus();
    if (event.target.class !== 'keyboard') {
      pressed(event.target.id);
      if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') shifter();
      reRenderKeyBoard();
      if (event.target.id === 'ArrowUp' || event.target.id === 'ArrowDown' || event.target.id === 'ArrowLeft' || event.target.id === 'ArrowRight') printArrowKey(event.target.id);
      printKey(event.target.id);
    }
  }

  function mouseUp(event) {
    document.querySelector('.text-area').focus();
    if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') unshifter();
    if (event.target.id === 'CapsLock') {
      isCapsed(event.target.id);
    } else KEYS.filter(key => key.keyName !== 'CapsLock').forEach(key => unpressed(key.keyName));
    reRenderKeyBoard();
  }
  let keyboard = document.querySelector('.keyboard');

  document.querySelector('.text-area').focus();
  document.addEventListener('keydown', keyDown);
  document.addEventListener('keyup', keyUp);
  keyboard.addEventListener('mousedown', mouseDown);
  keyboard.addEventListener('mouseup', mouseUp);
  reRenderKeyBoard();
}


/***/ }),

/***/ "./src/renderMainElements.js":
/*!***********************************!*\
  !*** ./src/renderMainElements.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMainElemnents)
/* harmony export */ });
function renderMainElemnents() {
  const BODY = document.querySelector('body');
  let wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  let header = document.createElement('div');
  header.innerHTML = '<h1>Виртуальная клавиатура</h1>';
  wrapper.append(header);

  let textArea = document.createElement('textarea');
  textArea.classList.add('text-area');
  textArea.setAttribute('id', 'vk_text-area');
  textArea.cols = 70;
  textArea.rows = 5;
  wrapper.append(textArea);

  let div = document.createElement('div');
  div.classList.add('keyboard');
  wrapper.append(div);

  let text = document.createElement('p');
  text.innerText = 'Клавиатура выполнена в Windows стиле, переключение между языками осуществляется с помощью клавиш Control + Shift';
  wrapper.append(text);

  BODY.append(wrapper);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_renderMainElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/renderMainElements */ "./src/renderMainElements.js");
/* harmony import */ var _src_mainLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/mainLogic */ "./src/mainLogic.js");



window.onload = function onloadPage() {
  console.log('hello');
  (0,_src_renderMainElements__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_src_mainLogic__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

})();

/******/ })()
;
//# sourceMappingURL=script.js.map
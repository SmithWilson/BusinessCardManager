(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modals/adding-card/adding-card.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modals/adding-card/adding-card.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Добавление</ion-card-subtitle>\r\n      <ion-card-title>Визитки</ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Имя <ion-text color=\"danger\">*</ion-text>\r\n        </ion-label>\r\n        <ion-input required\r\n                   type=\"text\"\r\n                   [value]=\"card.firstName\"\r\n                   (ionChange)=\"handleFirstNameValue($event)\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Фамилия <ion-text color=\"danger\">*</ion-text>\r\n        </ion-label>\r\n        <ion-input required\r\n                   type=\"text\"\r\n                   [value]=\"card.lastName\"\r\n                   (ionChange)=\"handleLastNameValue($event)\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Адресс <ion-text color=\"danger\">*</ion-text>\r\n        </ion-label>\r\n        <ion-input required\r\n                   type=\"text\"\r\n                   [value]=\"card.adress\"\r\n                   (ionChange)=\"handleAdressValue($event)\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Компания <ion-text color=\"danger\">*</ion-text>\r\n        </ion-label>\r\n        <ion-input required\r\n                   type=\"text\"\r\n                   [value]=\"card.company\"\r\n                   (ionChange)=\"handleCompanyValue($event)\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Телефон <ion-text color=\"danger\">*</ion-text>\r\n        </ion-label>\r\n        <ion-input required\r\n                   type=\"text\"\r\n                   [value]=\"card.phone\"\r\n                   (ionChange)=\"handlePhoneValue($event)\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ng-container *ngIf=\"card.businessCardUrl; else elseTemplate\">\r\n        <ion-item lines=\"none\">\r\n          <ion-label position=\"stacked\"\r\n                     style=\"margin-top: 20px;\">Фото\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-img [src]=\"picture\"></ion-img>\r\n      </ng-container>\r\n\r\n      <ion-segment style=\"margin-top: 20px;\">\r\n        <ion-segment-button (click)=\"startCamera()\"\r\n                            style=\"width: 50%;\">\r\n          <ion-label>Фото</ion-label>\r\n          <ion-icon name=\"images\"></ion-icon>\r\n        </ion-segment-button>\r\n        <ion-segment-button style=\"width: 50%;\"\r\n                            (click)=\"presentQrScanner()\">\r\n          <ion-label>QR-код</ion-label>\r\n          <ion-icon name=\"qr-scanner\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-segment>\r\n\r\n    </ion-card-content>\r\n\r\n    <ion-button expand=\"block\"\r\n                type=\"submit\"\r\n                (click)=\"submit()\"\r\n                class=\"padding15 margin10\">{{isUpdate ? 'Обновнить' : 'Создать'}}</ion-button>\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modals/view-card/view-card.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modals/view-card/view-card.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>Визитка</ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content class=\"alignContent\">\r\n      <ion-label position=\"stacked\"\r\n                 *ngIf=\"card.firstName\">Имя - {{card.firstName}}\r\n      </ion-label>\r\n      <ion-label position=\"stacked\"\r\n                 *ngIf=\"card.lastName\">Фамилия - {{card.lastName}}\r\n      </ion-label>\r\n      <ion-label position=\"stacked\"\r\n                 *ngIf=\"card.adress\">Адресс - {{card.adress}}\r\n      </ion-label>\r\n      <ion-label position=\"stacked\"\r\n                 *ngIf=\"card.company\">Компания - {{card.company}}\r\n      </ion-label>\r\n      <ion-label position=\"stacked\"\r\n                 *ngIf=\"card.phone\">Телефон - {{card.phone}}\r\n      </ion-label>\r\n\r\n      <ng-container *ngIf=\"card.businessCardUrl; else elseTemplate\">\r\n        <ion-label position=\"stacked\">Фото\r\n        </ion-label>\r\n        <ion-img [src]=\"picture\"></ion-img>\r\n      </ng-container>\r\n\r\n    </ion-card-content>\r\n\r\n    <ion-button expand=\"block\"\r\n                type=\"submit\"\r\n                (click)=\"submit()\"\r\n                class=\"padding15 margin10\">Закрыть</ion-button>\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>Визитные карточки</ion-label>\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let card of cards\" (click)=\"presentActionSheet(card)\">\r\n      <ion-label>{{card.lastName}} {{card.firstName}} - {{card.company}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-fab vertical=\"bottom\"\r\n           horizontal=\"end\"\r\n           slot=\"fixed\"\r\n           (click)=\"addingCardModal()\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;


/***/ }),

/***/ "./src/app/modals/adding-card/adding-card.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modals/adding-card/adding-card.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stateToggle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  margin-bottom: 15px;\n}\n\n.stateToggle h4 {\n  margin-left: 10px;\n}\n\n.padding15 {\n  padding: 0 15px;\n}\n\n.margin10 {\n  margin-bottom: 10px;\n}\n\n.segmentBlock {\n  height: 60px;\n  padding: 0 20px;\n  margin-bottom: 10px;\n}\n\n.alignContent {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL2FkZGluZy1jYXJkL0Q6XFxyZXBvc1xcQnVzaW5lc3NDYXJkTWFuYWdlclxcQkNNTW9iaWxlL3NyY1xcYXBwXFxtb2RhbHNcXGFkZGluZy1jYXJkXFxhZGRpbmctY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kYWxzL2FkZGluZy1jYXJkL2FkZGluZy1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRDs7QURFRTtFQUNELGlCQUFBO0FDQ0Q7O0FERUU7RUFDRCxlQUFBO0FDQ0Q7O0FERUU7RUFDQyxtQkFBQTtBQ0NIOztBREVFO0VBQ0QsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NEOztBREVFO0VBQ0Qsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvYWRkaW5nLWNhcmQvYWRkaW5nLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdGVUb2dnbGV7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnN0YXRlVG9nZ2xlIGg0e1xyXG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAucGFkZGluZzE1e1xyXG5cdHBhZGRpbmc6IDAgMTVweDtcclxuICB9XHJcblxyXG4gIC5tYXJnaW4xMHtcclxuXHQgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuc2VnbWVudEJsb2Nre1xyXG5cdGhlaWdodDogNjBweDtcclxuXHRwYWRkaW5nOiAwIDIwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIC5hbGlnbkNvbnRlbnR7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfSIsIi5zdGF0ZVRvZ2dsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uc3RhdGVUb2dnbGUgaDQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnBhZGRpbmcxNSB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLm1hcmdpbjEwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnNlZ21lbnRCbG9jayB7XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYWxpZ25Db250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/modals/adding-card/adding-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modals/adding-card/adding-card.component.ts ***!
  \*************************************************************/
/*! exports provided: AddingCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddingCardComponent", function() { return AddingCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_enviroments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/enviroments */ "./src/app/enviroments.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");








var AddingCardComponent = /** @class */ (function () {
    function AddingCardComponent(modalController, camera, alertController, loadingController, transfer, qrScanner) {
        this.modalController = modalController;
        this.camera = camera;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.transfer = transfer;
        this.qrScanner = qrScanner;
        this.isUpdate = false;
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.pictureOpts = {
            width: 1280,
            height: 1280,
            quality: 85
        };
    }
    AddingCardComponent.prototype.startCamera = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.presentLoadingWithOptions();
            var base64Image = imageData;
            var uploadOpts = {
                fileKey: 'file',
                fileName: base64Image.substr(base64Image.lastIndexOf('/') + 1),
                mimeType: 'image/jpg'
            };
            var fileTransfer = _this.transfer.create();
            fileTransfer.upload(base64Image, src_app_enviroments__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "image", uploadOpts)
                .then(function (data) {
                _this.picture = "" + src_app_enviroments__WEBPACK_IMPORTED_MODULE_5__["environment"].file_url + data.response.replace(new RegExp('"', 'g'), '');
                _this.card.businessCardUrl = "" + data.response.replace(new RegExp('"', 'g'), '');
                _this.loadingController.dismiss();
            }, function (err) {
                _this.loadingController.dismiss();
                _this.presentAlert('error', JSON.stringify(err));
            });
        });
    };
    AddingCardComponent.prototype.ngOnInit = function () {
        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.card)) {
            this.card = {};
        }
        else {
            this.isUpdate = true;
        }
        console.log(this.card);
        if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.card.businessCardUrl)) {
            this.picture = "" + src_app_enviroments__WEBPACK_IMPORTED_MODULE_5__["environment"].file_url + this.card.businessCardUrl;
        }
    };
    AddingCardComponent.prototype.handleFirstNameValue = function (event) {
        this.card.firstName = event.target.value;
    };
    AddingCardComponent.prototype.handleLastNameValue = function (event) {
        this.card.lastName = event.target.value;
    };
    AddingCardComponent.prototype.handleAdressValue = function (event) {
        this.card.adress = event.target.value;
    };
    AddingCardComponent.prototype.handleCompanyValue = function (event) {
        this.card.company = event.target.value;
    };
    AddingCardComponent.prototype.handlePhoneValue = function (event) {
        this.card.phone = event.target.value;
    };
    AddingCardComponent.prototype.submit = function () {
        this.dismissModal();
    };
    AddingCardComponent.prototype.dismissModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.dismiss(this.card)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddingCardComponent.prototype.presentAlert = function (title, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            subHeader: 'Subtitle',
                            message: data,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddingCardComponent.prototype.presentLoadingWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: 'crescent',
                            message: 'Please wait...',
                            translucent: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddingCardComponent.prototype.presentQrScanner = function () {
        var _this = this;
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    _this.presentAlert('QR done', text);
                    _this.card = JSON.parse(text);
                    _this.qrScanner.hide();
                    scanSub_1.unsubscribe();
                });
            }
            else if (status.denied) {
                _this.qrScanner.openSettings();
            }
            else {
                _this.presentAlert('QR error', 'Some error');
            }
        })
            .catch(function (e) { return _this.presentAlert('QR error', "" + JSON.stringify(e)); });
    };
    AddingCardComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"] },
        { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__["QRScanner"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddingCardComponent.prototype, "card", void 0);
    AddingCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'adding-card',
            template: __webpack_require__(/*! raw-loader!./adding-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/modals/adding-card/adding-card.component.html"),
            styles: [__webpack_require__(/*! ./adding-card.component.scss */ "./src/app/modals/adding-card/adding-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"],
            _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__["QRScanner"]])
    ], AddingCardComponent);
    return AddingCardComponent;
}());



/***/ }),

/***/ "./src/app/modals/view-card/view-card.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/modals/view-card/view-card.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stateToggle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  margin-bottom: 15px;\n}\n\n.stateToggle h4 {\n  margin-left: 10px;\n}\n\n.padding15 {\n  padding: 0 15px;\n}\n\n.margin10 {\n  margin-bottom: 10px;\n}\n\n.segmentBlock {\n  height: 60px;\n  padding: 0 20px;\n  margin-bottom: 10px;\n}\n\n.alignContent {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  text-align: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL3ZpZXctY2FyZC9EOlxccmVwb3NcXEJ1c2luZXNzQ2FyZE1hbmFnZXJcXEJDTU1vYmlsZS9zcmNcXGFwcFxcbW9kYWxzXFx2aWV3LWNhcmRcXHZpZXctY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kYWxzL3ZpZXctY2FyZC92aWV3LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NEOztBREVFO0VBQ0QsaUJBQUE7QUNDRDs7QURFRTtFQUNELGVBQUE7QUNDRDs7QURFRTtFQUNDLG1CQUFBO0FDQ0g7O0FERUU7RUFDRCxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0Q7O0FERUU7RUFDRCxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsaUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsaUJBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL21vZGFscy92aWV3LWNhcmQvdmlldy1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXRlVG9nZ2xle1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGF0ZVRvZ2dsZSBoNHtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZGRpbmcxNXtcclxuXHRwYWRkaW5nOiAwIDE1cHg7XHJcbiAgfVxyXG5cclxuICAubWFyZ2luMTB7XHJcblx0ICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlZ21lbnRCbG9ja3tcclxuXHRoZWlnaHQ6IDYwcHg7XHJcblx0cGFkZGluZzogMCAyMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuYWxpZ25Db250ZW50e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0dGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgfSIsIi5zdGF0ZVRvZ2dsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uc3RhdGVUb2dnbGUgaDQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnBhZGRpbmcxNSB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLm1hcmdpbjEwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnNlZ21lbnRCbG9jayB7XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYWxpZ25Db250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modals/view-card/view-card.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/modals/view-card/view-card.component.ts ***!
  \*********************************************************/
/*! exports provided: ViewCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCardComponent", function() { return ViewCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_enviroments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/enviroments */ "./src/app/enviroments.ts");





var ViewCardComponent = /** @class */ (function () {
    function ViewCardComponent(modalController, loadingController) {
        this.modalController = modalController;
        this.loadingController = loadingController;
    }
    ViewCardComponent.prototype.ngOnInit = function () {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(this.card.businessCardUrl)) {
            this.picture = "" + src_app_enviroments__WEBPACK_IMPORTED_MODULE_4__["environment"].file_url + this.card.businessCardUrl;
        }
    };
    ViewCardComponent.prototype.submit = function () {
        this.dismissModal();
    };
    ViewCardComponent.prototype.dismissModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewCardComponent.prototype.presentLoadingWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: 'crescent',
                            message: 'Please wait...',
                            translucent: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewCardComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ViewCardComponent.prototype, "card", void 0);
    ViewCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'view-card',
            template: __webpack_require__(/*! raw-loader!./view-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/modals/view-card/view-card.component.html"),
            styles: [__webpack_require__(/*! ./view-card.component.scss */ "./src/app/modals/view-card/view-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], ViewCardComponent);
    return ViewCardComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var src_app_modals_adding_card_adding_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/adding-card/adding-card.component */ "./src/app/modals/adding-card/adding-card.component.ts");
/* harmony import */ var src_app_modals_view_card_view_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modals/view-card/view-card.component */ "./src/app/modals/view-card/view-card.component.ts");









var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            exports: [],
            entryComponents: [
                src_app_modals_adding_card_adding_card_component__WEBPACK_IMPORTED_MODULE_7__["AddingCardComponent"],
                src_app_modals_view_card_view_card_component__WEBPACK_IMPORTED_MODULE_8__["ViewCardComponent"]
            ],
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"] }])
            ],
            declarations: [
                _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
                src_app_modals_adding_card_adding_card_component__WEBPACK_IMPORTED_MODULE_7__["AddingCardComponent"],
                src_app_modals_view_card_view_card_component__WEBPACK_IMPORTED_MODULE_8__["ViewCardComponent"]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9EOlxccmVwb3NcXEJ1c2luZXNzQ2FyZE1hbmFnZXJcXEJDTU1vYmlsZS9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_shared_services_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/crud.service */ "./src/app/shared/services/crud.service.ts");
/* harmony import */ var src_app_modals_adding_card_adding_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modals/adding-card/adding-card.component */ "./src/app/modals/adding-card/adding-card.component.ts");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_modals_view_card_view_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modals/view-card/view-card.component */ "./src/app/modals/view-card/view-card.component.ts");









var HomePage = /** @class */ (function () {
    function HomePage(router, crudService, loadingController, toastController, modalController, authService, actionSheetController) {
        this.router = router;
        this.crudService = crudService;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.modalController = modalController;
        this.authService = authService;
        this.actionSheetController = actionSheetController;
        this.cards = [];
    }
    HomePage.prototype.ngOnInit = function () {
        if (Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(this.authService.getToken())
            || Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(this.authService.getAuthHeader())) {
            this.presentToast('Не удалось авторизоваться');
            this.router.navigate(['auth']);
            return;
        }
        this.loadCardsData();
    };
    HomePage.prototype.presentLoadingWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: 'crescent',
                            message: 'Please wait...',
                            translucent: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.presentToast = function (error) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: error,
                            duration: 4000,
                            color: 'primary'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.addingCardModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_modals_adding_card_adding_card_component__WEBPACK_IMPORTED_MODULE_5__["AddingCardComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                _this.crudService.post('businessCard', detail.data)
                                    .subscribe(function (data) {
                                    _this.cards.push(data);
                                }, function (error) {
                                    var err = 'Не удалось добавить визитку';
                                    _this.presentToast(err);
                                });
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.openCardModal = function (card) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_modals_view_card_view_card_component__WEBPACK_IMPORTED_MODULE_8__["ViewCardComponent"],
                            componentProps: {
                                card: card
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.updatingCardModal = function (card) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_modals_adding_card_adding_card_component__WEBPACK_IMPORTED_MODULE_5__["AddingCardComponent"],
                            componentProps: {
                                card: card
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                _this.crudService.put('businessCard', detail.data)
                                    .subscribe(function (data) {
                                    _this.presentToast('Визитка обновлена');
                                }, function (error) {
                                    _this.presentToast('Не удалось обновить визитку');
                                });
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.removeCard = function (card) {
        var _this = this;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(card)) {
            this.crudService.deleteWithBody('businessCard', card)
                .subscribe(function (data) {
                _this.cards = _this.cards.filter(function (x) { return x.id != card.id; });
            }, function (error) {
                _this.presentToast('Ошибка удаления');
            });
        }
    };
    HomePage.prototype.presentActionSheet = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Выберите действие',
                            buttons: [{
                                    text: 'Открыть',
                                    handler: function () {
                                        _this.openCardModal(event);
                                    }
                                }, {
                                    text: 'Изменить',
                                    handler: function () {
                                        _this.updatingCardModal(event);
                                    }
                                }, {
                                    text: 'Удалить',
                                    role: 'destructive',
                                    handler: function () {
                                        _this.removeCard(event);
                                        _this.presentToast("\u0412\u0438\u0437\u0438\u0442\u043A\u0430 - " + event.firstName + " " + event.lastName + " \u0443\u0434\u0430\u043B\u0435\u043D\u0430");
                                    }
                                }, {
                                    text: 'Закрыть',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.loadCardsData = function () {
        var _this = this;
        this.presentLoadingWithOptions();
        this.crudService.get('businessCard')
            .subscribe(function (data) {
            _this.cards = data;
            _this.loadingController.dismiss();
        }, function (error) {
            _this.loadingController.dismiss();
            _this.presentToast('Упс, ошибка загрузки данных');
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_shared_services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home-page',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_shared_services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map
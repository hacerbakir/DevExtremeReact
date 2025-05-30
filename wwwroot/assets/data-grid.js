/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Scripts/add-license.ts":
/*!********************************!*\
  !*** ./Scripts/add-license.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var devextreme_core_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devextreme/core/config */ "./node_modules/devextreme/esm/core/config.js");

const licenseKey = 'ewogICJmb3JtYXQiOiAxLAogICJjdXN0b21lcklkIjogImY2MDE1ZWNmLTJjN2ItNDM0Ni1hZjkyLWE4MTZiZjY1MDg2YSIsCiAgIm1heFZlcnNpb25BbGxvd2VkIjogMjQyCn0=.bJaV57ZsS4KfXYcLrhrVjmxYc2l0MkPkD/damwY0k1Vqj/45jzEiIw10J/cxiOHn2cEDAPlZ3YO9oOf2dRJjSZwG4tiWbu/bb3/Kt48cFBHxyjZ9KJQQCqYvohptKEHLPdaqkw==';
(0,devextreme_core_config__WEBPACK_IMPORTED_MODULE_0__["default"])({ licenseKey });


/***/ }),

/***/ "./node_modules/devextreme/esm/__internal/core/m_class.js":
/*!****************************************************************!*\
  !*** ./node_modules/devextreme/esm/__internal/core/m_class.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/errors */ "./node_modules/devextreme/esm/core/errors.js");
/* harmony import */ var _core_utils_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils/type */ "./node_modules/devextreme/esm/core/utils/type.js");
/**
 * DevExtreme (esm/__internal/core/m_class.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


const wrapOverridden = function(baseProto, methodName, method) {
    return function() {
        const prevCallBase = this.callBase;
        this.callBase = baseProto[methodName];
        try {
            return method.apply(this, arguments)
        } finally {
            this.callBase = prevCallBase
        }
    }
};
const clonePrototype = function(obj) {
    const func = function() {};
    func.prototype = obj.prototype;
    return new func
};
const redefine = function(members) {
    const that = this;
    let overridden;
    let memberName;
    let member;
    if (!members) {
        return that
    }
    for (memberName in members) {
        member = members[memberName];
        overridden = "function" === typeof that.prototype[memberName] && "function" === typeof member;
        that.prototype[memberName] = overridden ? wrapOverridden(that.parent.prototype, memberName, member) : member
    }
    return that
};
const include = function() {
    const classObj = this;
    let argument;
    let name;
    let i;
    const hasClassObjOwnProperty = Object.prototype.hasOwnProperty.bind(classObj);
    const isES6Class = !hasClassObjOwnProperty("_includedCtors") && !hasClassObjOwnProperty("_includedPostCtors");
    if (isES6Class) {
        classObj._includedCtors = classObj._includedCtors.slice(0);
        classObj._includedPostCtors = classObj._includedPostCtors.slice(0)
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key]
    }
    for (i = 0; i < args.length; i++) {
        argument = args[i];
        if (argument.ctor) {
            classObj._includedCtors.push(argument.ctor)
        }
        if (argument.postCtor) {
            classObj._includedPostCtors.push(argument.postCtor)
        }
        for (name in argument) {
            if ("ctor" === name || "postCtor" === name || "default" === name) {
                continue
            }
            classObj.prototype[name] = argument[name]
        }
    }
    return classObj
};
const subclassOf = function(parentClass) {
    const hasParentProperty = Object.prototype.hasOwnProperty.bind(this)("parent");
    const isES6Class = !hasParentProperty && this.parent;
    if (isES6Class) {
        const baseClass = Object.getPrototypeOf(this);
        return baseClass === parentClass || baseClass.subclassOf(parentClass)
    }
    if (this.parent === parentClass) {
        return true
    }
    if (!this.parent || !this.parent.subclassOf) {
        return false
    }
    return this.parent.subclassOf(parentClass)
};
const abstract = function() {
    throw _core_errors__WEBPACK_IMPORTED_MODULE_0__["default"].Error("E0001")
};
const classImpl = function() {};
classImpl.inherit = function(members) {
    const inheritor = function() {
        if (!this || (0,_core_utils_type__WEBPACK_IMPORTED_MODULE_1__.isWindow)(this) || "function" !== typeof this.constructor) {
            throw _core_errors__WEBPACK_IMPORTED_MODULE_0__["default"].Error("E0003")
        }
        const instance = this;
        const {
            ctor: ctor
        } = instance;
        const includedCtors = instance.constructor._includedCtors;
        const includedPostCtors = instance.constructor._includedPostCtors;
        let i;
        for (i = 0; i < includedCtors.length; i++) {
            includedCtors[i].call(instance)
        }
        if (ctor) {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2]
            }
            ctor.apply(instance, args)
        }
        for (i = 0; i < includedPostCtors.length; i++) {
            includedPostCtors[i].call(instance)
        }
    };
    inheritor.prototype = clonePrototype(this);
    Object.setPrototypeOf(inheritor, this);
    inheritor.inherit = this.inherit;
    inheritor.abstract = abstract;
    inheritor.redefine = redefine;
    inheritor.include = include;
    inheritor.subclassOf = subclassOf;
    inheritor.parent = this;
    inheritor._includedCtors = this._includedCtors ? this._includedCtors.slice(0) : [];
    inheritor._includedPostCtors = this._includedPostCtors ? this._includedPostCtors.slice(0) : [];
    inheritor.prototype.constructor = inheritor;
    inheritor.redefine(members);
    return inheritor
};
classImpl.abstract = abstract;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (classImpl);


/***/ }),

/***/ "./node_modules/devextreme/esm/__internal/core/m_config.js":
/*!*****************************************************************!*\
  !*** ./node_modules/devextreme/esm/__internal/core/m_config.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/errors */ "./node_modules/devextreme/esm/core/errors.js");
/* harmony import */ var _core_utils_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils/extend */ "./node_modules/devextreme/esm/core/utils/extend.js");
/**
 * DevExtreme (esm/__internal/core/m_config.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


const config = {
    rtlEnabled: false,
    defaultCurrency: "USD",
    defaultUseCurrencyAccountingStyle: true,
    oDataFilterToLower: true,
    serverDecimalSeparator: ".",
    decimalSeparator: ".",
    thousandsSeparator: ",",
    forceIsoDateParsing: true,
    wrapActionsBeforeExecute: true,
    useLegacyStoreResult: false,
    useJQuery: void 0,
    editorStylingMode: void 0,
    useLegacyVisibleIndex: false,
    floatingActionButtonConfig: {
        icon: "add",
        closeIcon: "close",
        label: "",
        position: {
            at: "right bottom",
            my: "right bottom",
            offset: {
                x: -16,
                y: -16
            }
        },
        maxSpeedDialActionCount: 5,
        shading: false,
        direction: "auto"
    },
    optionsParser: optionsString => {
        if ("{" !== optionsString.trim().charAt(0)) {
            optionsString = `{${optionsString}}`
        }
        try {
            return JSON.parse(optionsString)
        } catch (ex) {
            try {
                return JSON.parse(normalizeToJSONString(optionsString))
            } catch (exNormalize) {
                throw _core_errors__WEBPACK_IMPORTED_MODULE_0__["default"].Error("E3018", ex, optionsString)
            }
        }
    }
};
const normalizeToJSONString = optionsString => optionsString.replace(/'/g, '"').replace(/,\s*([\]}])/g, "$1").replace(/([{,])\s*([^":\s]+)\s*:/g, '$1"$2":');
const deprecatedFields = ["decimalSeparator", "thousandsSeparator"];
const configMethod = function() {
    if (!arguments.length) {
        return config
    }
    const newConfig = arguments.length <= 0 ? void 0 : arguments[0];
    deprecatedFields.forEach((deprecatedField => {
        if (newConfig[deprecatedField]) {
            const message = `Now, the ${deprecatedField} is selected based on the specified locale.`;
            _core_errors__WEBPACK_IMPORTED_MODULE_0__["default"].log("W0003", "config", deprecatedField, "19.2", message)
        }
    }));
    (0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_1__.extend)(config, newConfig)
};
if ("undefined" !== typeof DevExpress && DevExpress.config) {
    configMethod(DevExpress.config)
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (configMethod);


/***/ }),

/***/ "./node_modules/devextreme/esm/__internal/core/m_errors.js":
/*!*****************************************************************!*\
  !*** ./node_modules/devextreme/esm/__internal/core/m_errors.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_utils_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/utils/error */ "./node_modules/devextreme/esm/core/utils/error.js");
/**
 * DevExtreme (esm/__internal/core/m_errors.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_core_utils_error__WEBPACK_IMPORTED_MODULE_0__["default"])({
    E0001: "Method is not implemented",
    E0002: "Member name collision: {0}",
    E0003: "A class must be instantiated using the 'new' keyword",
    E0004: "The NAME property of the component is not specified",
    E0005: "Unknown device",
    E0006: "Unknown endpoint key is requested",
    E0007: "'Invalidate' method is called outside the update transaction",
    E0008: "Type of the option name is not appropriate to create an action",
    E0009: "Component '{0}' has not been initialized for an element",
    E0010: "Animation configuration with the '{0}' type requires '{1}' configuration as {2}",
    E0011: "Unknown animation type '{0}'",
    E0012: "jQuery version is too old. Please upgrade jQuery to 1.10.0 or later",
    E0013: "KnockoutJS version is too old. Please upgrade KnockoutJS to 2.3.0 or later",
    E0014: "The 'release' method shouldn't be called for an unlocked Lock object",
    E0015: "Queued task returned an unexpected result",
    E0017: "Event namespace is not defined",
    E0018: "DevExpress.ui.DevExpressPopup widget is required",
    E0020: "Template engine '{0}' is not supported",
    E0021: "Unknown theme is set: {0}",
    E0022: "LINK[rel=DevExpress-theme] tags must go before DevExpress included scripts",
    E0023: "Template name is not specified",
    E0024: "DevExtreme bundle already included",
    E0025: "Unexpected argument type",
    E0100: "Unknown validation type is detected",
    E0101: "Misconfigured range validation rule is detected",
    E0102: "Misconfigured comparison validation rule is detected",
    E0103: "validationCallback of an asynchronous rule should return a jQuery or a native promise",
    E0110: "Unknown validation group is detected",
    E0120: "Adapter for a DevExpressValidator component cannot be configured",
    E0121: "The 'customItem' parameter of the 'onCustomItemCreating' function is empty or contains invalid data. Assign a custom object or a Promise that is resolved after the item is created.",
    W0000: "'{0}' is deprecated in {1}. {2}",
    W0001: "{0} - '{1}' option is deprecated in {2}. {3}",
    W0002: "{0} - '{1}' method is deprecated in {2}. {3}",
    W0003: "{0} - '{1}' property is deprecated in {2}. {3}",
    W0004: "Timeout for theme loading is over: {0}",
    W0005: "'{0}' event is deprecated in {1}. {2}",
    W0006: "Invalid recurrence rule: '{0}'",
    W0007: "'{0}' Globalize culture is not defined",
    W0008: "Invalid view name: '{0}'",
    W0009: "Invalid time zone name: '{0}'",
    W0010: "{0} is deprecated in {1}. {2}",
    W0011: "Number parsing is invoked while the parser is not defined",
    W0012: "Date parsing is invoked while the parser is not defined",
    W0013: "'{0}' file is deprecated in {1}. {2}",
    W0014: "{0} - '{1}' type is deprecated in {2}. {3}",
    W0015: "Instead of returning a value from the '{0}' function, write it into the '{1}' field of the function's parameter.",
    W0016: 'The "{0}" option does not accept the "{1}" value since v{2}. {3}.',
    W0017: 'Setting the "{0}" property with a function is deprecated since v21.2',
    W0018: 'Setting the "position" property with a function is deprecated since v21.2',
    W0019: "DevExtreme: Unable to Locate a Valid License Key.\n\nDetailed license/registration related information and instructions: https://js.devexpress.com/Documentation/Licensing/.\n\nIf you are using a 30-day trial version of DevExtreme, you must uninstall all copies of DevExtreme once your 30-day trial period expires. For terms and conditions that govern use of DevExtreme UI components/libraries, please refer to the DevExtreme End User License Agreement: https://js.devexpress.com/EULAs/DevExtremeComplete.\n\nTo use DevExtreme in a commercial project, you must purchase a license. For pricing/licensing options, please visit: https://js.devexpress.com/Buy.\n\nIf you have licensing-related questions or need help with a purchase, please email clientservices@devexpress.com.\n\n",
    W0020: "DevExtreme: License Key Has Expired.\n\nDetailed license/registration related information and instructions: https://js.devexpress.com/Documentation/Licensing/.\n\nA mismatch exists between the license key used and the DevExtreme version referenced in this project.\n\nTo proceed, you can:\n\u2022 use a version of DevExtreme linked to your license key: https://www.devexpress.com/ClientCenter/DownloadManager\n\u2022 renew your DevExpress Subscription: https://www.devexpress.com/buy/renew (once you renew your subscription, you will be entitled to product updates and support service as defined in the DevExtreme End User License Agreement)\n\nIf you have licensing-related questions or need help with a renewal, please email clientservices@devexpress.com.\n\n",
    W0021: "DevExtreme: License Key Verification Has Failed.\n\nDetailed license/registration related information and instructions: https://js.devexpress.com/Documentation/Licensing/.\n\nTo verify your DevExtreme license, make certain to specify a correct key in the GlobalConfig. If you continue to encounter this error, please visit https://www.devexpress.com/ClientCenter/DownloadManager to obtain a valid license key.\n\nIf you have a valid license and this problem persists, please submit a support ticket via the DevExpress Support Center. We will be happy to follow-up: https://supportcenter.devexpress.com/ticket/create.\n\n",
    W0022: "DevExtreme: Pre-release software. Not suitable for commercial use.\n\nDetailed license/registration related information and instructions: https://js.devexpress.com/Documentation/Licensing/.\n\nPre-release software may contain deficiencies and as such, should not be considered for use or integrated in any mission critical application.\n\n",
    W0023: "DevExtreme: the following 'devextreme' package version does not match versions of other DevExpress products used in this application:\n\n{0}\n\nInteroperability between different versions of the products listed herein cannot be guaranteed.\n\n"
}));


/***/ }),

/***/ "./node_modules/devextreme/esm/__internal/core/m_guid.js":
/*!***************************************************************!*\
  !*** ./node_modules/devextreme/esm/__internal/core/m_guid.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Guid: () => (/* binding */ Guid)
/* harmony export */ });
/* harmony import */ var _core_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/class */ "./node_modules/devextreme/esm/core/class.js");
/**
 * DevExtreme (esm/__internal/core/m_guid.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

const Guid = _core_class__WEBPACK_IMPORTED_MODULE_0__["default"].inherit({
    ctor: function(value) {
        if (value) {
            value = String(value)
        }
        this._value = this._normalize(value || this._generate())
    },
    _normalize: function(value) {
        value = value.replace(/[^a-f0-9]/gi, "").toLowerCase();
        while (value.length < 32) {
            value += "0"
        }
        return [value.substr(0, 8), value.substr(8, 4), value.substr(12, 4), value.substr(16, 4), value.substr(20, 12)].join("-")
    },
    _generate: function() {
        let value = "";
        for (let i = 0; i < 32; i++) {
            value += Math.round(15 * Math.random()).toString(16)
        }
        return value
    },
    toString: function() {
        return this._value
    },
    valueOf: function() {
        return this._value
    },
    toJSON: function() {
        return this._value
    }
});



/***/ }),

/***/ "./node_modules/devextreme/esm/__internal/core/m_set_template_engine.js":
/*!******************************************************************************!*\
  !*** ./node_modules/devextreme/esm/__internal/core/m_set_template_engine.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setTemplateEngine: () => (/* reexport safe */ _core_templates_template_engine_registry__WEBPACK_IMPORTED_MODULE_0__.setTemplateEngine)
/* harmony export */ });
/* harmony import */ var _core_templates_template_engine_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/templates/template_engine_registry */ "./node_modules/devextreme/esm/core/templates/template_engine_registry.js");
/**
 * DevExtreme (esm/__internal/core/m_set_template_engine.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */



/***/ }),

/***/ "./node_modules/devextreme/esm/__internal/core/templates/m_template_engine_registry.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/devextreme/esm/__internal/core/templates/m_template_engine_registry.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentTemplateEngine: () => (/* binding */ getCurrentTemplateEngine),
/* harmony export */   registerTemplateEngine: () => (/* binding */ registerTemplateEngine),
/* harmony export */   setTemplateEngine: () => (/* binding */ setTemplateEngine)
/* harmony export */ });
/* harmony import */ var _core_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/errors */ "./node_modules/devextreme/esm/core/errors.js");
/* harmony import */ var _core_utils_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/utils/type */ "./node_modules/devextreme/esm/core/utils/type.js");
/**
 * DevExtreme (esm/__internal/core/templates/m_template_engine_registry.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


const templateEngines = {};
let currentTemplateEngine;
function registerTemplateEngine(name, templateEngine) {
    templateEngines[name] = templateEngine
}
function setTemplateEngine(templateEngine) {
    if ((0,_core_utils_type__WEBPACK_IMPORTED_MODULE_1__.isString)(templateEngine)) {
        currentTemplateEngine = templateEngines[templateEngine];
        if (!currentTemplateEngine) {
            throw _core_errors__WEBPACK_IMPORTED_MODULE_0__["default"].Error("E0020", templateEngine)
        }
    } else {
        currentTemplateEngine = templateEngine
    }
}
function getCurrentTemplateEngine() {
    return currentTemplateEngine
}


/***/ }),

/***/ "./node_modules/devextreme/esm/__internal/core/utils/m_console.js":
/*!************************************************************************!*\
  !*** ./node_modules/devextreme/esm/__internal/core/utils/m_console.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debug: () => (/* binding */ debug),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   logger: () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _core_utils_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/utils/type */ "./node_modules/devextreme/esm/core/utils/type.js");
/**
 * DevExtreme (esm/__internal/core/utils/m_console.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

const noop = function() {};
const getConsoleMethod = function(method) {
    if ("undefined" === typeof console || !(0,_core_utils_type__WEBPACK_IMPORTED_MODULE_0__.isFunction)(console[method])) {
        return noop
    }
    return console[method].bind(console)
};
const logger = {
    log: getConsoleMethod("log"),
    info: getConsoleMethod("info"),
    warn: getConsoleMethod("warn"),
    error: getConsoleMethod("error")
};
const debug = function() {
    function assert(condition, message) {
        if (!condition) {
            throw new Error(message)
        }
    }
    return {
        assert: assert,
        assertParam: function(parameter, message) {
            assert(null !== parameter && void 0 !== parameter, message)
        }
    }
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    logger: logger,
    debug: debug
});


/***/ }),

/***/ "./node_modules/devextreme/esm/__internal/core/utils/m_error.js":
/*!**********************************************************************!*\
  !*** ./node_modules/devextreme/esm/__internal/core/utils/m_error.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   error: () => (/* binding */ error)
/* harmony export */ });
/* harmony import */ var _core_utils_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/utils/extend */ "./node_modules/devextreme/esm/core/utils/extend.js");
/* harmony import */ var _core_utils_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/utils/string */ "./node_modules/devextreme/esm/core/utils/string.js");
/* harmony import */ var _core_version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/version */ "./node_modules/devextreme/esm/core/version.js");
/* harmony import */ var _m_console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./m_console */ "./node_modules/devextreme/esm/__internal/core/utils/m_console.js");
/**
 * DevExtreme (esm/__internal/core/utils/m_error.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */




const ERROR_URL = `https://js.devexpress.com/error/${_core_version__WEBPACK_IMPORTED_MODULE_2__.version.split(".").slice(0,2).join("_")}/`;

function error(baseErrors, errors) {
    const exports = {
        ERROR_MESSAGES: (0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_0__.extend)(errors, baseErrors),
        Error: function() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key]
            }
            return function(args) {
                const id = args[0];
                args = args.slice(1);
                const details = formatDetails(id, args);
                const url = getErrorUrl(id);
                const message = formatMessage(id, details);
                return (0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_0__.extend)(new Error(message), {
                    __id: id,
                    __details: details,
                    url: url
                })
            }(args)
        },
        log() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2]
            }
            const id = args[0];
            let method = "log";
            if (/^E\d+$/.test(id)) {
                method = "error"
            } else if (/^W\d+$/.test(id)) {
                method = "warn"
            }
            _m_console__WEBPACK_IMPORTED_MODULE_3__["default"].logger[method]("log" === method ? id : function(args) {
                const id = args[0];
                args = args.slice(1);
                return formatMessage(id, formatDetails(id, args))
            }(args))
        }
    };

    function formatDetails(id, args) {
        args = [exports.ERROR_MESSAGES[id]].concat(args);
        return _core_utils_string__WEBPACK_IMPORTED_MODULE_1__.format.apply(this, args).replace(/\.*\s*?$/, "")
    }

    function formatMessage(id, details) {
        const kind = null !== id && void 0 !== id && id.startsWith("W") ? "warning" : "error";
        return _core_utils_string__WEBPACK_IMPORTED_MODULE_1__.format.apply(this, ["{0} - {1}.\n\nFor additional information on this {2} message, see: {3}", id, details, kind, getErrorUrl(id)])
    }

    function getErrorUrl(id) {
        return ERROR_URL + id
    }
    return exports
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (error);


/***/ }),

/***/ "./node_modules/devextreme/esm/__internal/core/utils/m_extend.js":
/*!***********************************************************************!*\
  !*** ./node_modules/devextreme/esm/__internal/core/utils/m_extend.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* binding */ extend),
/* harmony export */   extendFromObject: () => (/* binding */ extendFromObject)
/* harmony export */ });
/* harmony import */ var _core_utils_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/utils/type */ "./node_modules/devextreme/esm/core/utils/type.js");
/**
 * DevExtreme (esm/__internal/core/utils/m_extend.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

const extendFromObject = function(target, source, overrideExistingValues) {
    target = target || {};
    for (const prop in source) {
        if (Object.prototype.hasOwnProperty.call(source, prop)) {
            const value = source[prop];
            if (!(prop in target) || overrideExistingValues) {
                target[prop] = value
            }
        }
    }
    return target
};
const extend = function(target) {
    target = target || {};
    let i = 1;
    let deep = false;
    if ("boolean" === typeof target) {
        deep = target;
        target = arguments[1] || {};
        i++
    }
    for (; i < arguments.length; i++) {
        const source = arguments[i];
        if (null == source) {
            continue
        }
        for (const key in source) {
            const targetValue = target[key];
            const sourceValue = source[key];
            let sourceValueIsArray = false;
            let clone;
            if ("__proto__" === key || "constructor" === key || target === sourceValue) {
                continue
            }
            if (deep && sourceValue && ((0,_core_utils_type__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(sourceValue) || (sourceValueIsArray = Array.isArray(sourceValue)))) {
                if (sourceValueIsArray) {
                    clone = targetValue && Array.isArray(targetValue) ? targetValue : []
                } else {
                    clone = targetValue && (0,_core_utils_type__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(targetValue) ? targetValue : {}
                }
                target[key] = extend(deep, clone, sourceValue)
            } else if (void 0 !== sourceValue) {
                target[key] = sourceValue
            }
        }
    }
    return target
};


/***/ }),

/***/ "./node_modules/devextreme/esm/__internal/core/utils/m_string.js":
/*!***********************************************************************!*\
  !*** ./node_modules/devextreme/esm/__internal/core/utils/m_string.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodeHtml: () => (/* binding */ encodeHtml),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   isEmpty: () => (/* binding */ isEmpty),
/* harmony export */   quadToObject: () => (/* binding */ quadToObject)
/* harmony export */ });
/* harmony import */ var _core_utils_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/utils/type */ "./node_modules/devextreme/esm/core/utils/type.js");
/**
 * DevExtreme (esm/__internal/core/utils/m_string.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

const encodeHtml = function() {
    const encodeRegExp = [new RegExp("&", "g"), new RegExp('"', "g"), new RegExp("'", "g"), new RegExp("<", "g"), new RegExp(">", "g")];
    return function(str) {
        return String(str).replace(encodeRegExp[0], "&amp;").replace(encodeRegExp[1], "&quot;").replace(encodeRegExp[2], "&#39;").replace(encodeRegExp[3], "&lt;").replace(encodeRegExp[4], "&gt;")
    }
}();
const splitQuad = function(raw) {
    switch (typeof raw) {
        case "string":
            return raw.split(/\s+/, 4);
        case "object":
            return [raw.x || raw.h || raw.left, raw.y || raw.v || raw.top, raw.x || raw.h || raw.right, raw.y || raw.v || raw.bottom];
        case "number":
            return [raw];
        default:
            return raw
    }
};
const quadToObject = function(raw) {
    const quad = splitQuad(raw);
    let left = parseInt(quad && quad[0], 10);
    let top = parseInt(quad && quad[1], 10);
    let right = parseInt(quad && quad[2], 10);
    let bottom = parseInt(quad && quad[3], 10);
    if (!isFinite(left)) {
        left = 0
    }
    if (!isFinite(top)) {
        top = left
    }
    if (!isFinite(right)) {
        right = left
    }
    if (!isFinite(bottom)) {
        bottom = top
    }
    return {
        top: top,
        right: right,
        bottom: bottom,
        left: left
    }
};
function format(template) {
    for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key]
    }
    if ((0,_core_utils_type__WEBPACK_IMPORTED_MODULE_0__.isFunction)(template)) {
        return template(...values)
    }
    values.forEach(((value, index) => {
        if ((0,_core_utils_type__WEBPACK_IMPORTED_MODULE_0__.isString)(value)) {
            value = value.replace(/\$/g, "$$$$")
        }
        const placeholderReg = new RegExp(`\\{${index}\\}`, "gm");
        template = template.replace(placeholderReg, value)
    }));
    return template
}
const isEmpty = function() {
    const SPACE_REGEXP = /\s/g;
    return function(text) {
        return !text || !text.replace(SPACE_REGEXP, "")
    }
}();


/***/ }),

/***/ "./node_modules/devextreme/esm/__internal/core/utils/m_type.js":
/*!*********************************************************************!*\
  !*** ./node_modules/devextreme/esm/__internal/core/utils/m_type.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isBoolean: () => (/* binding */ isBoolean),
/* harmony export */   isDate: () => (/* binding */ isDate),
/* harmony export */   isDeferred: () => (/* binding */ isDeferred),
/* harmony export */   isDefined: () => (/* binding */ isDefined),
/* harmony export */   isEmptyObject: () => (/* binding */ isEmptyObject),
/* harmony export */   isEvent: () => (/* binding */ isEvent),
/* harmony export */   isExponential: () => (/* binding */ isExponential),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isNumeric: () => (/* binding */ isNumeric),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),
/* harmony export */   isPrimitive: () => (/* binding */ isPrimitive),
/* harmony export */   isPromise: () => (/* binding */ isPromise),
/* harmony export */   isRenderer: () => (/* binding */ isRenderer),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isWindow: () => (/* binding */ isWindow),
/* harmony export */   type: () => (/* binding */ type)
/* harmony export */ });
/**
 * DevExtreme (esm/__internal/core/utils/m_type.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
const types = {
    "[object Array]": "array",
    "[object Date]": "date",
    "[object Object]": "object",
    "[object String]": "string"
};
const type = function(object) {
    if (null === object) {
        return "null"
    }
    const typeOfObject = Object.prototype.toString.call(object);
    return "object" === typeof object ? types[typeOfObject] || "object" : typeof object
};
const isBoolean = function(object) {
    return "boolean" === typeof object
};
const isExponential = function(value) {
    return isNumeric(value) && -1 !== value.toString().indexOf("e")
};
const isDate = function(object) {
    return "date" === type(object)
};
const isDefined = function(object) {
    return null !== object && void 0 !== object
};
const isFunction = function(object) {
    return "function" === typeof object
};
const isString = function(object) {
    return "string" === typeof object
};
const isNumeric = function(object) {
    return "number" === typeof object && isFinite(object) || !isNaN(object - parseFloat(object))
};
const isObject = function(object) {
    return "object" === type(object)
};
const isEmptyObject = function(object) {
    let property;
    for (property in object) {
        return false
    }
    return true
};
const isPlainObject = function(object) {
    if (!object || "object" !== type(object)) {
        return false
    }
    const proto = Object.getPrototypeOf(object);
    if (!proto) {
        return true
    }
    const ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return "function" === typeof ctor && Object.toString.call(ctor) === Object.toString.call(Object)
};
const isPrimitive = function(value) {
    return !["object", "array", "function"].includes(type(value))
};
const isWindow = function(object) {
    return null != object && object === object.window
};
const isRenderer = function(object) {
    return !!object && !!(object.jquery || object.dxRenderer)
};
const isPromise = function(object) {
    return !!object && isFunction(object.then)
};
const isDeferred = function(object) {
    return !!object && isFunction(object.done) && isFunction(object.fail)
};
const isEvent = function(object) {
    return !!(object && object.preventDefault)
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    isBoolean: isBoolean,
    isDate: isDate,
    isDeferred: isDeferred,
    isDefined: isDefined,
    isEmptyObject: isEmptyObject,
    isEvent: isEvent,
    isExponential: isExponential,
    isFunction: isFunction,
    isNumeric: isNumeric,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isPrimitive: isPrimitive,
    isPromise: isPromise,
    isRenderer: isRenderer,
    isString: isString,
    isWindow: isWindow,
    type: type
});


/***/ }),

/***/ "./node_modules/devextreme/esm/common.js":
/*!***********************************************!*\
  !*** ./node_modules/devextreme/esm/common.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Guid: () => (/* reexport safe */ _common_guid__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   config: () => (/* reexport safe */ _common_config__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   setTemplateEngine: () => (/* reexport safe */ _common_set_template_engine__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/config */ "./node_modules/devextreme/esm/common/config.js");
/* harmony import */ var _common_guid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/guid */ "./node_modules/devextreme/esm/common/guid.js");
/* harmony import */ var _common_set_template_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/set_template_engine */ "./node_modules/devextreme/esm/common/set_template_engine.js");
/**
 * DevExtreme (esm/common.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */






/***/ }),

/***/ "./node_modules/devextreme/esm/common/config.js":
/*!******************************************************!*\
  !*** ./node_modules/devextreme/esm/common/config.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_core_m_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../__internal/core/m_config */ "./node_modules/devextreme/esm/__internal/core/m_config.js");
/**
 * DevExtreme (esm/common/config.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_internal_core_m_config__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/devextreme/esm/common/guid.js":
/*!****************************************************!*\
  !*** ./node_modules/devextreme/esm/common/guid.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_core_m_guid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../__internal/core/m_guid */ "./node_modules/devextreme/esm/__internal/core/m_guid.js");
/**
 * DevExtreme (esm/common/guid.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_internal_core_m_guid__WEBPACK_IMPORTED_MODULE_0__.Guid);


/***/ }),

/***/ "./node_modules/devextreme/esm/common/set_template_engine.js":
/*!*******************************************************************!*\
  !*** ./node_modules/devextreme/esm/common/set_template_engine.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_core_m_set_template_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../__internal/core/m_set_template_engine */ "./node_modules/devextreme/esm/__internal/core/m_set_template_engine.js");
/**
 * DevExtreme (esm/common/set_template_engine.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_internal_core_m_set_template_engine__WEBPACK_IMPORTED_MODULE_0__.setTemplateEngine);


/***/ }),

/***/ "./node_modules/devextreme/esm/core/class.js":
/*!***************************************************!*\
  !*** ./node_modules/devextreme/esm/core/class.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_core_m_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../__internal/core/m_class */ "./node_modules/devextreme/esm/__internal/core/m_class.js");
/**
 * DevExtreme (esm/core/class.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_internal_core_m_class__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/devextreme/esm/core/config.js":
/*!****************************************************!*\
  !*** ./node_modules/devextreme/esm/core/config.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "./node_modules/devextreme/esm/common.js");
/**
 * DevExtreme (esm/core/config.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_common__WEBPACK_IMPORTED_MODULE_0__.config);


/***/ }),

/***/ "./node_modules/devextreme/esm/core/errors.js":
/*!****************************************************!*\
  !*** ./node_modules/devextreme/esm/core/errors.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_core_m_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../__internal/core/m_errors */ "./node_modules/devextreme/esm/__internal/core/m_errors.js");
/**
 * DevExtreme (esm/core/errors.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_internal_core_m_errors__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/devextreme/esm/core/templates/template_engine_registry.js":
/*!********************************************************************************!*\
  !*** ./node_modules/devextreme/esm/core/templates/template_engine_registry.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentTemplateEngine: () => (/* reexport safe */ _internal_core_templates_m_template_engine_registry__WEBPACK_IMPORTED_MODULE_0__.getCurrentTemplateEngine),
/* harmony export */   registerTemplateEngine: () => (/* reexport safe */ _internal_core_templates_m_template_engine_registry__WEBPACK_IMPORTED_MODULE_0__.registerTemplateEngine),
/* harmony export */   setTemplateEngine: () => (/* reexport safe */ _internal_core_templates_m_template_engine_registry__WEBPACK_IMPORTED_MODULE_0__.setTemplateEngine)
/* harmony export */ });
/* harmony import */ var _internal_core_templates_m_template_engine_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../__internal/core/templates/m_template_engine_registry */ "./node_modules/devextreme/esm/__internal/core/templates/m_template_engine_registry.js");
/**
 * DevExtreme (esm/core/templates/template_engine_registry.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */



/***/ }),

/***/ "./node_modules/devextreme/esm/core/utils/error.js":
/*!*********************************************************!*\
  !*** ./node_modules/devextreme/esm/core/utils/error.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_core_utils_m_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../__internal/core/utils/m_error */ "./node_modules/devextreme/esm/__internal/core/utils/m_error.js");
/**
 * DevExtreme (esm/core/utils/error.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_internal_core_utils_m_error__WEBPACK_IMPORTED_MODULE_0__.error);


/***/ }),

/***/ "./node_modules/devextreme/esm/core/utils/extend.js":
/*!**********************************************************!*\
  !*** ./node_modules/devextreme/esm/core/utils/extend.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _internal_core_utils_m_extend__WEBPACK_IMPORTED_MODULE_0__.extend),
/* harmony export */   extendFromObject: () => (/* reexport safe */ _internal_core_utils_m_extend__WEBPACK_IMPORTED_MODULE_0__.extendFromObject)
/* harmony export */ });
/* harmony import */ var _internal_core_utils_m_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../__internal/core/utils/m_extend */ "./node_modules/devextreme/esm/__internal/core/utils/m_extend.js");
/**
 * DevExtreme (esm/core/utils/extend.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */



/***/ }),

/***/ "./node_modules/devextreme/esm/core/utils/string.js":
/*!**********************************************************!*\
  !*** ./node_modules/devextreme/esm/core/utils/string.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodeHtml: () => (/* reexport safe */ _internal_core_utils_m_string__WEBPACK_IMPORTED_MODULE_0__.encodeHtml),
/* harmony export */   format: () => (/* reexport safe */ _internal_core_utils_m_string__WEBPACK_IMPORTED_MODULE_0__.format),
/* harmony export */   isEmpty: () => (/* reexport safe */ _internal_core_utils_m_string__WEBPACK_IMPORTED_MODULE_0__.isEmpty),
/* harmony export */   quadToObject: () => (/* reexport safe */ _internal_core_utils_m_string__WEBPACK_IMPORTED_MODULE_0__.quadToObject)
/* harmony export */ });
/* harmony import */ var _internal_core_utils_m_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../__internal/core/utils/m_string */ "./node_modules/devextreme/esm/__internal/core/utils/m_string.js");
/**
 * DevExtreme (esm/core/utils/string.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */



/***/ }),

/***/ "./node_modules/devextreme/esm/core/utils/type.js":
/*!********************************************************!*\
  !*** ./node_modules/devextreme/esm/core/utils/type.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBoolean: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.isBoolean),
/* harmony export */   isDate: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.isDate),
/* harmony export */   isDeferred: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.isDeferred),
/* harmony export */   isDefined: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.isDefined),
/* harmony export */   isEmptyObject: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.isEmptyObject),
/* harmony export */   isEvent: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.isEvent),
/* harmony export */   isExponential: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.isExponential),
/* harmony export */   isFunction: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.isFunction),
/* harmony export */   isNumeric: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.isNumeric),
/* harmony export */   isObject: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.isObject),
/* harmony export */   isPlainObject: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.isPlainObject),
/* harmony export */   isPrimitive: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.isPrimitive),
/* harmony export */   isPromise: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.isPromise),
/* harmony export */   isRenderer: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.isRenderer),
/* harmony export */   isString: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.isString),
/* harmony export */   isWindow: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.isWindow),
/* harmony export */   type: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.type)
/* harmony export */ });
/* harmony import */ var _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../__internal/core/utils/m_type */ "./node_modules/devextreme/esm/__internal/core/utils/m_type.js");
/**
 * DevExtreme (esm/core/utils/type.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */



/***/ }),

/***/ "./node_modules/devextreme/esm/core/version.js":
/*!*****************************************************!*\
  !*** ./node_modules/devextreme/esm/core/version.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fullVersion: () => (/* binding */ fullVersion),
/* harmony export */   version: () => (/* binding */ version)
/* harmony export */ });
/**
 * DevExtreme (esm/core/version.js)
 * Version: 24.2.7
 * Build date: Mon Apr 28 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
const version = "24.2.7";
const fullVersion = "24.2.7";


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
/******/ 			// no module.id needed
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./Scripts/global.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_license__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-license */ "./Scripts/add-license.ts");


})();

// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!************************************!*\
  !*** ./Scripts/Pages/data-grid.ts ***!
  \************************************/


})();

/******/ })()
;
//# sourceMappingURL=data-grid.js.map
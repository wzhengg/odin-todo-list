/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500&family=Ubuntu:wght@500&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    font-size: 16px;\\n    --sidebar-main-text-size: 1.5rem;\\n    --todos-name-text-size: 1.4rem;\\n    --gray-50: #f9fafb;\\n    --gray-100: #f3f4f6;\\n    --gray-200: #e5e7eb;\\n    --gray-400: #9ca3af;\\n    --gray-600: #4b5563;\\n    --gray-700: #374151;\\n    --neutral-700: #404040;\\n    --red-700: #f87171;\\n    --orange-300: #fdba74;\\n}\\n\\nhtml, body {\\n    height: 100%;\\n}\\n\\nbody {\\n    font-family: 'Roboto', sans-serif;\\n    margin: 0;\\n    display: grid;\\n    grid-template: 50px 1fr / 350px 1fr;\\n}\\n\\n#header {\\n    grid-column: 1 / -1;\\n    display: flex;\\n    align-items: center;\\n    background-color: var(--neutral-700);\\n    padding: 0 30px;\\n}\\n\\n#header > div {\\n    color: var(--gray-100);\\n    font-family: 'Ubuntu', sans-serif;\\n    font-size: 32px;\\n    font-weight: 500;\\n}\\n\\n#sidebar {\\n    background-color: var(--gray-100);\\n    box-sizing: border-box;\\n    padding: 25px;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 10px;\\n}\\n\\n#sidebar > div:first-child {\\n    color: var(--gray-700);\\n    font-size: var(--sidebar-main-text-size);\\n    font-weight: 500;\\n}\\n\\n#sidebar .project-label,\\n#create-project {\\n    color: var(--gray-600);\\n    font-size: var(--sidebar-main-text-size);\\n    font-weight: 100;\\n    padding: 5px;\\n    border-radius: 5px;\\n}\\n\\n#sidebar .project-label {\\n    display: flex;\\n    align-items: center;\\n    column-gap: 5px;\\n}\\n\\n#sidebar .project-label:hover,\\n#create-project:hover {\\n    background-color: var(--gray-200);\\n}\\n\\n#sidebar .project-name {\\n    flex-grow: 1;\\n    overflow: hidden;\\n}\\n\\n#sidebar .project-label > button {\\n    display: none;\\n    background-color: var(--gray-200);\\n    color: var(--gray-400);\\n    height: var(--sidebar-main-text-size);\\n    width: var(--sidebar-main-text-size);\\n    border: none;\\n    border-radius: 4px;\\n}\\n\\n#sidebar .project-label:hover > button {\\n    display: block;\\n}\\n\\n#sidebar .project-label > button:hover {\\n    background-color: var(--red-700);\\n    color: var(--gray-100);\\n}\\n\\n#create-project {\\n    text-align: center;\\n    color: var(--gray-400);\\n}\\n\\n#main-section {\\n    /* max-width: 100%; */\\n    background-color: var(--gray-50);\\n    display: flex;\\n    flex-direction: column;\\n    gap: 20px;\\n    padding: 10px 150px;\\n}\\n\\n#main-section > div:first-child {\\n    display: grid;\\n    place-content: center;\\n    padding: 20px 0;\\n}\\n\\n#project-title {\\n    color: var(--gray-700);\\n    font-size: 1.6rem;\\n}\\n\\n#todos {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n#main-section .todo,\\n#create-todo {\\n    padding: 10px;\\n    color: var(--gray-600);\\n    font-size: var(--todos-name-text-size);\\n    font-weight: 100;\\n    border-radius: 10px;\\n}\\n\\n#main-section .todo {\\n    display: flex;\\n    align-items: center;\\n    gap: 10px;\\n}\\n\\n#main-section .todo-name {\\n    overflow: hidden;\\n}\\n\\n#main-section .date {\\n    font-size: 1rem;\\n}\\n\\n#main-section .spacer {\\n    flex: 1;\\n}\\n\\n#main-section .edit-todo,\\n#main-section .remove-todo {\\n    display: none;\\n    background-color: var(--gray-100);\\n    color: var(--gray-400);\\n    height: var(--todos-name-text-size);\\n    width: var(--todos-name-text-size);\\n    border: none;\\n    border-radius: 4px;\\n}\\n\\n#main-section .todo:hover .edit-todo,\\n#main-section .todo:hover .remove-todo {\\n    display: block;\\n}\\n\\n#main-section .edit-todo:hover {\\n    background-color: var(--orange-300);\\n    color: var(--gray-100);\\n}\\n\\n#main-section .remove-todo:hover {\\n    background-color: var(--red-700);\\n    color: var(--gray-100);\\n}\\n\\n#main-section .todo:hover,\\n#create-todo:hover {\\n    background-color: var(--gray-100);\\n}\\n\\n#create-todo {\\n    text-align: center;\\n    color: var(--gray-400);\\n}\\n\\n#todo-modal {\\n    background-color: var(--gray-50);\\n    padding: 50px;\\n    border: none;\\n    border-radius: 10px;\\n}\\n\\n#todo-modal::backdrop {\\n    background: rgb(0 0 0 / 0.3);\\n}\\n\\n#todo-modal form {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 20px;\\n    font-size: 1.3rem;\\n}\\n\\n#todo-modal form > div {\\n    display: flex;\\n    gap: 3px 10px;\\n}\\n\\n#todo-modal form > div:nth-child(2) {\\n    flex-direction: column;\\n}\\n\\n#todo-modal input,\\n#todo-modal textarea {\\n    font-family: 'Roboto', sans-serif;\\n    flex: 1;\\n}\\n\\n#todo-modal textarea {\\n    resize: none;\\n}\\n\\n#todo-modal form > div:last-child {\\n    display: flex;\\n    justify-content: space-between;\\n}\\n\\n#todo-modal button {\\n    flex-grow: 1;\\n    border: none;\\n    border-radius: 4px;\\n    color: var(--gray-50);\\n    font-size: 1.3rem;\\n    padding: 5px 0;\\n    /* font-weight: 500; */\\n}\\n\\n#todo-modal .save {\\n    background-color: #86efac;\\n}\\n\\n#todo-modal .cancel {\\n    background-color: var(--red-700);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n/**\n * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk\n * License: MIT - http://mrgnrdrck.mit-license.org\n *\n * https://github.com/mroderick/PubSubJS\n */\n\n(function (root, factory){\n    'use strict';\n\n    var PubSub = {};\n\n    if (root.PubSub) {\n        PubSub = root.PubSub;\n        console.warn(\"PubSub already loaded, using existing version\");\n    } else {\n        root.PubSub = PubSub;\n        factory(PubSub);\n    }\n    // CommonJS and Node.js module support\n    if (true){\n        if (module !== undefined && module.exports) {\n            exports = module.exports = PubSub; // Node.js specific `module.exports`\n        }\n        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec\n        module.exports = exports = PubSub; // CommonJS\n    }\n    // AMD support\n    /* eslint-disable no-undef */\n    else {}\n\n}(( typeof window === 'object' && window ) || this, function (PubSub){\n    'use strict';\n\n    var messages = {},\n        lastUid = -1,\n        ALL_SUBSCRIBING_MSG = '*';\n\n    function hasKeys(obj){\n        var key;\n\n        for (key in obj){\n            if ( Object.prototype.hasOwnProperty.call(obj, key) ){\n                return true;\n            }\n        }\n        return false;\n    }\n\n    /**\n     * Returns a function that throws the passed exception, for use as argument for setTimeout\n     * @alias throwException\n     * @function\n     * @param { Object } ex An Error object\n     */\n    function throwException( ex ){\n        return function reThrowException(){\n            throw ex;\n        };\n    }\n\n    function callSubscriberWithDelayedExceptions( subscriber, message, data ){\n        try {\n            subscriber( message, data );\n        } catch( ex ){\n            setTimeout( throwException( ex ), 0);\n        }\n    }\n\n    function callSubscriberWithImmediateExceptions( subscriber, message, data ){\n        subscriber( message, data );\n    }\n\n    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){\n        var subscribers = messages[matchedMessage],\n            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,\n            s;\n\n        if ( !Object.prototype.hasOwnProperty.call( messages, matchedMessage ) ) {\n            return;\n        }\n\n        for (s in subscribers){\n            if ( Object.prototype.hasOwnProperty.call(subscribers, s)){\n                callSubscriber( subscribers[s], originalMessage, data );\n            }\n        }\n    }\n\n    function createDeliveryFunction( message, data, immediateExceptions ){\n        return function deliverNamespaced(){\n            var topic = String( message ),\n                position = topic.lastIndexOf( '.' );\n\n            // deliver the message as it is now\n            deliverMessage(message, message, data, immediateExceptions);\n\n            // trim the hierarchy and deliver message to each level\n            while( position !== -1 ){\n                topic = topic.substr( 0, position );\n                position = topic.lastIndexOf('.');\n                deliverMessage( message, topic, data, immediateExceptions );\n            }\n\n            deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);\n        };\n    }\n\n    function hasDirectSubscribersFor( message ) {\n        var topic = String( message ),\n            found = Boolean(Object.prototype.hasOwnProperty.call( messages, topic ) && hasKeys(messages[topic]));\n\n        return found;\n    }\n\n    function messageHasSubscribers( message ){\n        var topic = String( message ),\n            found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG),\n            position = topic.lastIndexOf( '.' );\n\n        while ( !found && position !== -1 ){\n            topic = topic.substr( 0, position );\n            position = topic.lastIndexOf( '.' );\n            found = hasDirectSubscribersFor(topic);\n        }\n\n        return found;\n    }\n\n    function publish( message, data, sync, immediateExceptions ){\n        message = (typeof message === 'symbol') ? message.toString() : message;\n\n        var deliver = createDeliveryFunction( message, data, immediateExceptions ),\n            hasSubscribers = messageHasSubscribers( message );\n\n        if ( !hasSubscribers ){\n            return false;\n        }\n\n        if ( sync === true ){\n            deliver();\n        } else {\n            setTimeout( deliver, 0 );\n        }\n        return true;\n    }\n\n    /**\n     * Publishes the message, passing the data to it's subscribers\n     * @function\n     * @alias publish\n     * @param { String } message The message to publish\n     * @param {} data The data to pass to subscribers\n     * @return { Boolean }\n     */\n    PubSub.publish = function( message, data ){\n        return publish( message, data, false, PubSub.immediateExceptions );\n    };\n\n    /**\n     * Publishes the message synchronously, passing the data to it's subscribers\n     * @function\n     * @alias publishSync\n     * @param { String } message The message to publish\n     * @param {} data The data to pass to subscribers\n     * @return { Boolean }\n     */\n    PubSub.publishSync = function( message, data ){\n        return publish( message, data, true, PubSub.immediateExceptions );\n    };\n\n    /**\n     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe\n     * @function\n     * @alias subscribe\n     * @param { String } message The message to subscribe to\n     * @param { Function } func The function to call when a new message is published\n     * @return { String }\n     */\n    PubSub.subscribe = function( message, func ){\n        if ( typeof func !== 'function'){\n            return false;\n        }\n\n        message = (typeof message === 'symbol') ? message.toString() : message;\n\n        // message is not registered yet\n        if ( !Object.prototype.hasOwnProperty.call( messages, message ) ){\n            messages[message] = {};\n        }\n\n        // forcing token as String, to allow for future expansions without breaking usage\n        // and allow for easy use as key names for the 'messages' object\n        var token = 'uid_' + String(++lastUid);\n        messages[message][token] = func;\n\n        // return token for unsubscribing\n        return token;\n    };\n\n    PubSub.subscribeAll = function( func ){\n        return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);\n    };\n\n    /**\n     * Subscribes the passed function to the passed message once\n     * @function\n     * @alias subscribeOnce\n     * @param { String } message The message to subscribe to\n     * @param { Function } func The function to call when a new message is published\n     * @return { PubSub }\n     */\n    PubSub.subscribeOnce = function( message, func ){\n        var token = PubSub.subscribe( message, function(){\n            // before func apply, unsubscribe message\n            PubSub.unsubscribe( token );\n            func.apply( this, arguments );\n        });\n        return PubSub;\n    };\n\n    /**\n     * Clears all subscriptions\n     * @function\n     * @public\n     * @alias clearAllSubscriptions\n     */\n    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){\n        messages = {};\n    };\n\n    /**\n     * Clear subscriptions by the topic\n     * @function\n     * @public\n     * @alias clearAllSubscriptions\n     * @return { int }\n     */\n    PubSub.clearSubscriptions = function clearSubscriptions(topic){\n        var m;\n        for (m in messages){\n            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){\n                delete messages[m];\n            }\n        }\n    };\n\n    /**\n       Count subscriptions by the topic\n     * @function\n     * @public\n     * @alias countSubscriptions\n     * @return { Array }\n    */\n    PubSub.countSubscriptions = function countSubscriptions(topic){\n        var m;\n        // eslint-disable-next-line no-unused-vars\n        var token;\n        var count = 0;\n        for (m in messages) {\n            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {\n                for (token in messages[m]) {\n                    count++;\n                }\n                break;\n            }\n        }\n        return count;\n    };\n\n\n    /**\n       Gets subscriptions by the topic\n     * @function\n     * @public\n     * @alias getSubscriptions\n    */\n    PubSub.getSubscriptions = function getSubscriptions(topic){\n        var m;\n        var list = [];\n        for (m in messages){\n            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){\n                list.push(m);\n            }\n        }\n        return list;\n    };\n\n    /**\n     * Removes subscriptions\n     *\n     * - When passed a token, removes a specific subscription.\n     *\n\t * - When passed a function, removes all subscriptions for that function\n     *\n\t * - When passed a topic, removes all subscriptions for that topic (hierarchy)\n     * @function\n     * @public\n     * @alias subscribeOnce\n     * @param { String | Function } value A token, function or topic to unsubscribe from\n     * @example // Unsubscribing with a token\n     * var token = PubSub.subscribe('mytopic', myFunc);\n     * PubSub.unsubscribe(token);\n     * @example // Unsubscribing with a function\n     * PubSub.unsubscribe(myFunc);\n     * @example // Unsubscribing from a topic\n     * PubSub.unsubscribe('mytopic');\n     */\n    PubSub.unsubscribe = function(value){\n        var descendantTopicExists = function(topic) {\n                var m;\n                for ( m in messages ){\n                    if ( Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0 ){\n                        // a descendant of the topic exists:\n                        return true;\n                    }\n                }\n\n                return false;\n            },\n            isTopic    = typeof value === 'string' && ( Object.prototype.hasOwnProperty.call(messages, value) || descendantTopicExists(value) ),\n            isToken    = !isTopic && typeof value === 'string',\n            isFunction = typeof value === 'function',\n            result = false,\n            m, message, t;\n\n        if (isTopic){\n            PubSub.clearSubscriptions(value);\n            return;\n        }\n\n        for ( m in messages ){\n            if ( Object.prototype.hasOwnProperty.call( messages, m ) ){\n                message = messages[m];\n\n                if ( isToken && message[value] ){\n                    delete message[value];\n                    result = value;\n                    // tokens are unique, so we can just stop here\n                    break;\n                }\n\n                if (isFunction) {\n                    for ( t in message ){\n                        if (Object.prototype.hasOwnProperty.call(message, t) && message[t] === value){\n                            delete message[t];\n                            result = true;\n                        }\n                    }\n                }\n            }\n        }\n\n        return result;\n    };\n}));\n\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/pubsub-js/src/pubsub.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cancelTodoButton\": () => (/* binding */ cancelTodoButton),\n/* harmony export */   \"createProjectButton\": () => (/* binding */ createProjectButton),\n/* harmony export */   \"createTodoButton\": () => (/* binding */ createTodoButton),\n/* harmony export */   \"projectTitleDiv\": () => (/* binding */ projectTitleDiv),\n/* harmony export */   \"projectsDiv\": () => (/* binding */ projectsDiv),\n/* harmony export */   \"saveTodoButton\": () => (/* binding */ saveTodoButton),\n/* harmony export */   \"todoDescriptionInput\": () => (/* binding */ todoDescriptionInput),\n/* harmony export */   \"todoDueDateInput\": () => (/* binding */ todoDueDateInput),\n/* harmony export */   \"todoModal\": () => (/* binding */ todoModal),\n/* harmony export */   \"todoNameInput\": () => (/* binding */ todoNameInput),\n/* harmony export */   \"todoPriorityInput\": () => (/* binding */ todoPriorityInput),\n/* harmony export */   \"todosDiv\": () => (/* binding */ todosDiv)\n/* harmony export */ });\n// Sidebar elements\nconst projectsDiv = document.querySelector('#projects');\nconst createProjectButton = document.querySelector('#create-project');\n\n// Main content elements\nconst projectTitleDiv = document.querySelector('#project-title');\nconst todosDiv = document.querySelector('#todos');\nconst createTodoButton = document.querySelector('#create-todo');\n\n// Todo modal\nconst todoModal = document.querySelector('#todo-modal');\nconst todoNameInput = document.querySelector('#todo-name');\nconst todoDescriptionInput = document.querySelector('#todo-desc');\nconst todoDueDateInput = document.querySelector('#due-date');\nconst todoPriorityInput = document.querySelector('#priority');\nconst saveTodoButton = document.querySelector('#todo-modal .save');\nconst cancelTodoButton = document.querySelector('#todo-modal .cancel');\n\n//# sourceURL=webpack://odin-todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _projectsUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectsUI */ \"./src/projectsUI.js\");\n/* harmony import */ var _projectUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectUI */ \"./src/projectUI.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\n\n\n(0,_projectsUI__WEBPACK_IMPORTED_MODULE_1__.initProjectsUI)();\n(0,_projectUI__WEBPACK_IMPORTED_MODULE_2__.initProjectUI)();\n(0,_projects__WEBPACK_IMPORTED_MODULE_3__.initProjects)();\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    #todos = [];\n    #name;\n    #id;\n    \n    constructor(name, id) {\n        this.#name = name;\n        this.#id = id;\n    }\n\n    get name() {\n        return this.#name;\n    }\n\n    set name(newName) {\n        this.#name = newName;\n    }\n\n    get id() {\n        return this.#id;\n    }\n\n    set id(newID) {\n        this.#id = newID;\n    }\n\n    add(todo) {\n        this.#todos.push(todo);\n    }\n\n    remove(id) {\n        const i = this.#todos.findIndex(todo => todo.id === id);\n        return this.#todos.splice(i, 1).at(0);\n    }\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/project.js?");

/***/ }),

/***/ "./src/projectUI.js":
/*!**************************!*\
  !*** ./src/projectUI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initProjectUI\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ \"./node_modules/pubsub-js/src/pubsub.js\");\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _topics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topics */ \"./src/topics.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _img_high_priority_marker_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/high-priority-marker.svg */ \"./src/img/high-priority-marker.svg\");\n/* harmony import */ var _img_normal_priority_marker_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/normal-priority-marker.svg */ \"./src/img/normal-priority-marker.svg\");\n\n\n\n\n\n\nconst projectContainers = [];\n\nfunction init() {\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_topics__WEBPACK_IMPORTED_MODULE_1__.ADD_PROJECT, createProjectContainer);\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_topics__WEBPACK_IMPORTED_MODULE_1__.SELECT_PROJECT, updateTitle);\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_topics__WEBPACK_IMPORTED_MODULE_1__.SELECT_PROJECT, renderProject);\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_topics__WEBPACK_IMPORTED_MODULE_1__.REMOVE_PROJECT, removeContainer);\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_topics__WEBPACK_IMPORTED_MODULE_1__.ADD_TODO, renderTodo);\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_topics__WEBPACK_IMPORTED_MODULE_1__.REMOVE_TODO, removeTodo);\n\n    bindCreateTodoButton();\n    bindSaveTodoButton();\n    bindCancelTodoButton();\n}\n\nfunction bindCreateTodoButton() {\n    _dom__WEBPACK_IMPORTED_MODULE_2__.createTodoButton.addEventListener('click', openTodoModal);\n}\n\nfunction openTodoModal() {\n    resetTodoForm()\n    _dom__WEBPACK_IMPORTED_MODULE_2__.todoModal.showModal();\n}\n\nfunction resetTodoForm() {\n    _dom__WEBPACK_IMPORTED_MODULE_2__.todoNameInput.value = '';\n    _dom__WEBPACK_IMPORTED_MODULE_2__.todoDescriptionInput.value = '';\n    _dom__WEBPACK_IMPORTED_MODULE_2__.todoDueDateInput.value = '';\n    _dom__WEBPACK_IMPORTED_MODULE_2__.todoPriorityInput.selectedIndex = 1;\n}\n\nfunction bindSaveTodoButton() {\n    _dom__WEBPACK_IMPORTED_MODULE_2__.saveTodoButton.addEventListener('click', publishTodoData);\n}\n\nfunction publishTodoData() {\n    closeTodoModal();\n\n    const name = _dom__WEBPACK_IMPORTED_MODULE_2__.todoNameInput.value;\n    const desc = _dom__WEBPACK_IMPORTED_MODULE_2__.todoDescriptionInput.value;\n    const date = _dom__WEBPACK_IMPORTED_MODULE_2__.todoDueDateInput.value;\n    const priority = _dom__WEBPACK_IMPORTED_MODULE_2__.todoPriorityInput.value;\n\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_topics__WEBPACK_IMPORTED_MODULE_1__.CLICK_CREATE_TODO, { name: name, desc: desc, date: date, priority: priority });\n}\n\nfunction bindCancelTodoButton() {\n    _dom__WEBPACK_IMPORTED_MODULE_2__.cancelTodoButton.addEventListener('click', closeTodoModal);\n}\n\nfunction closeTodoModal() {\n    _dom__WEBPACK_IMPORTED_MODULE_2__.todoModal.close();\n}\n\nfunction createProjectContainer(topic, project) {\n    const projectContainer = document.createElement('div');\n    projectContainer.dataset.id = project.id;\n    projectContainers.push(projectContainer);\n    _dom__WEBPACK_IMPORTED_MODULE_2__.createTodoButton.style.display = 'block';\n}\n\nfunction updateTitle(topic, project) {\n    _dom__WEBPACK_IMPORTED_MODULE_2__.projectTitleDiv.textContent = project.name;\n}\n\nfunction renderProject(topic, project) {\n    clearProjectContainer();\n    const projectDiv = projectContainers.find(obj => obj.dataset.id === project.id);\n    _dom__WEBPACK_IMPORTED_MODULE_2__.todosDiv.appendChild(projectDiv);\n}\n\nfunction clearProjectContainer() {\n    const currentProject = _dom__WEBPACK_IMPORTED_MODULE_2__.todosDiv.querySelector('div');\n\n    if (currentProject === null) {\n        return;\n    }\n\n    _dom__WEBPACK_IMPORTED_MODULE_2__.todosDiv.removeChild(currentProject);\n}\n\nfunction removeContainer(topic, project) {\n    const i = projectContainers.findIndex(obj => obj.dataset.id === project.id);\n    projectContainers.splice(i, 1);\n\n    if (projectContainers.length === 0) {\n        clearProjectContainer();\n        _dom__WEBPACK_IMPORTED_MODULE_2__.createTodoButton.style.display = 'none';\n        _dom__WEBPACK_IMPORTED_MODULE_2__.projectTitleDiv.textContent = 'Create a project to add todos';\n    }\n}\n\nfunction renderTodo(topic, data) {\n    const todoDiv = document.createElement('div');\n    todoDiv.classList.add('todo');\n    todoDiv.dataset.id = data.todo.id;\n\n    // Fill later\n    const img = new Image();\n    // img.src = normalPriorityMarker;\n    if (data.todo.priority === 'high') {\n        img.src = _img_high_priority_marker_svg__WEBPACK_IMPORTED_MODULE_3__;\n    }\n    img.alt = '';\n\n    const todoName = document.createElement('div');\n    todoName.classList.add('todo-name');\n    todoName.textContent = data.todo.name;\n\n    // Fill later\n    const date = document.createElement('div');\n    date.classList.add('date');\n    // date.textContent = '6/21';\n    date.textContent = data.todo.dueDate;\n\n    const spacer = document.createElement('div');\n    spacer.classList.add('spacer');\n    spacer.textContent = ' ';\n\n    const editButton = document.createElement('button');\n    editButton.type = 'button';\n    editButton.classList.add('edit-todo');\n    editButton.textContent = 'E';\n\n    const removeButton = document.createElement('button');\n    removeButton.type = 'button';\n    removeButton.classList.add('remove-todo');\n    removeButton.textContent = 'X';\n    removeButton.addEventListener('click', publishRemoveTodo);\n\n    todoDiv.append(img, todoName, date, spacer, editButton, removeButton);\n\n    const container = projectContainers.find(obj => obj.dataset.id === data.project.id);\n    container.appendChild(todoDiv);\n}\n\nfunction publishRemoveTodo(e) {\n    const parent = e.target.parentNode;\n    const id = parent.dataset.id;\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_topics__WEBPACK_IMPORTED_MODULE_1__.CLICK_REMOVE_TODO, id);\n}\n\nfunction removeTodo(topic, todo) {\n    const todos = _dom__WEBPACK_IMPORTED_MODULE_2__.todosDiv.querySelector('div');\n    const todoDiv = todos.querySelector(`[data-id=\"${todo.id}\"`);\n    todos.removeChild(todoDiv);\n}\n\n\n\n//# sourceURL=webpack://odin-todo-list/./src/projectUI.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initProjects\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ \"./node_modules/pubsub-js/src/pubsub.js\");\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _topics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topics */ \"./src/topics.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\n\n\nconst projects = [];\nlet selectedProject;\n\nfunction init() {\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_topics__WEBPACK_IMPORTED_MODULE_1__.CLICK_CREATE_PROJECT, createProject);\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_topics__WEBPACK_IMPORTED_MODULE_1__.CLICK_REMOVE_PROJECT, removeProject);\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_topics__WEBPACK_IMPORTED_MODULE_1__.CLICK_PROJECT_LABEL, selectProject);\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_topics__WEBPACK_IMPORTED_MODULE_1__.CLICK_CREATE_TODO, createTodo);\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_topics__WEBPACK_IMPORTED_MODULE_1__.CLICK_REMOVE_TODO, removeTodo);\n\n    createProject(_topics__WEBPACK_IMPORTED_MODULE_1__.EMPTY_MSG, 'All todos');\n}\n\nfunction createProject(topic, name) {\n    if (projectExists(name)) {\n        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_topics__WEBPACK_IMPORTED_MODULE_1__.PROJECT_NAME_EXISTS, name);\n        return;\n    }\n    \n    const project = new _project__WEBPACK_IMPORTED_MODULE_2__[\"default\"](name, self.crypto.randomUUID());\n    addProject(project);\n    selectProject(_topics__WEBPACK_IMPORTED_MODULE_1__.EMPTY_MSG, project.id);\n}\n\nfunction projectExists(name) {\n    const project = projects.find(obj => obj.name === name);\n    return project !== undefined;\n}\n\nfunction addProject(project) {\n    projects.push(project);\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_topics__WEBPACK_IMPORTED_MODULE_1__.ADD_PROJECT, project);\n    selectProject(_topics__WEBPACK_IMPORTED_MODULE_1__.EMPTY_MSG, project.id);\n}\n\nfunction removeProject(topic, id) {\n    const i = projects.findIndex(obj => obj.id === id);\n    const removed = projects.splice(i, 1).at(0);\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_topics__WEBPACK_IMPORTED_MODULE_1__.REMOVE_PROJECT, removed);\n\n    if (removed.id === selectedProject.id && projects.length > 0) {\n        selectProject(_topics__WEBPACK_IMPORTED_MODULE_1__.EMPTY_MSG, projects[0].id);\n    }\n}\n\nfunction selectProject(topic, id) {\n    selectedProject = projects.find(obj => obj.id === id);\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_topics__WEBPACK_IMPORTED_MODULE_1__.SELECT_PROJECT, selectedProject);\n}\n\nfunction createTodo(topic, data) {\n    const todo = new _todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](data.name, data.desc, data.date, data.priority, self.crypto.randomUUID());\n    addTodo(todo);\n}\n\nfunction addTodo(todo) {\n    selectedProject.add(todo);\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_topics__WEBPACK_IMPORTED_MODULE_1__.ADD_TODO, { todo: todo, project: selectedProject });\n}\n\nfunction removeTodo(topic, id) {\n    const removed = selectedProject.remove(id);\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_topics__WEBPACK_IMPORTED_MODULE_1__.REMOVE_TODO, removed);\n}\n\n\n\n//# sourceURL=webpack://odin-todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/projectsUI.js":
/*!***************************!*\
  !*** ./src/projectsUI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initProjectsUI\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ \"./node_modules/pubsub-js/src/pubsub.js\");\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _topics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topics */ \"./src/topics.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n\nfunction init() {\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_topics__WEBPACK_IMPORTED_MODULE_1__.ADD_PROJECT, render);\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_topics__WEBPACK_IMPORTED_MODULE_1__.PROJECT_NAME_EXISTS, alertNameExists);\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(_topics__WEBPACK_IMPORTED_MODULE_1__.REMOVE_PROJECT, remove);\n    \n    bindCreateProjectButton();\n}\n\nfunction bindCreateProjectButton() {\n    _dom__WEBPACK_IMPORTED_MODULE_2__.createProjectButton.addEventListener('click', promptProjectName);\n}\n\nfunction promptProjectName() {\n    let name;\n    \n    do {\n        name = prompt('Name of project:');\n\n        if (name === null) {\n            return;\n        }\n    } while (name === '');\n\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_topics__WEBPACK_IMPORTED_MODULE_1__.CLICK_CREATE_PROJECT, name);\n}\n\nfunction render(topic, project) {\n    const projectDiv = document.createElement('div');\n    projectDiv.classList.add('project-label');\n    projectDiv.dataset.id = project.id;\n    projectDiv.addEventListener('click', publishClickedProject);\n\n    const nameDiv = document.createElement('div');\n    nameDiv.classList.add('project-name');\n    nameDiv.textContent = project.name;\n\n    const removeButton = document.createElement('button');\n    removeButton.type = 'button';\n    removeButton.textContent = 'X';\n    removeButton.addEventListener('click', publishRemove);\n\n    projectDiv.append(nameDiv, removeButton);\n    _dom__WEBPACK_IMPORTED_MODULE_2__.projectsDiv.appendChild(projectDiv);\n}\n\nfunction publishClickedProject(e) {\n    if (e.target.type === 'button') {\n        return;\n    }\n\n    let project = e.target;\n    if (project.classList.contains('name')) {\n        project = project.parentNode;\n    }\n\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_topics__WEBPACK_IMPORTED_MODULE_1__.CLICK_PROJECT_LABEL, project.dataset.id);\n}\n\nfunction publishRemove(e) {\n    const parent = e.target.parentNode;\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(_topics__WEBPACK_IMPORTED_MODULE_1__.CLICK_REMOVE_PROJECT, parent.dataset.id);\n}\n\nfunction alertNameExists(topic, name) {\n    alert(`A project with the name \"${name}\" already exists.`);\n}\n\nfunction remove(topic, project) {\n    const label = _dom__WEBPACK_IMPORTED_MODULE_2__.projectsDiv.querySelector(`[data-id=\"${project.id}\"]`)\n    _dom__WEBPACK_IMPORTED_MODULE_2__.projectsDiv.removeChild(label);\n}\n\n\n\n//# sourceURL=webpack://odin-todo-list/./src/projectsUI.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n    #name;\n    #description;\n    #dueDate;\n    #priority;\n    #id;\n\n    constructor(name, description, dueDate, priority, id) {\n        this.#name = name;\n        this.#description = description;\n        this.#dueDate = dueDate;\n        this.#priority = priority;\n        this.#id = id;\n    }\n\n    get name() {\n        return this.#name;\n    }\n\n    set name(newName) {\n        this.#name = newName;\n    }\n\n    get description() {\n        return this.#description;\n    }\n\n    set description(newDesc) {\n        this.#description = newDesc;\n    }\n\n    get dueDate() {\n        return this.#dueDate;\n    }\n\n    set dueDate(newDate) {\n        this.#dueDate = newDate;\n    }\n\n    get priority() {\n        return this.#priority;\n    }\n\n    set priority(newPriority) {\n        this.#priority = newPriority;\n    }\n\n    get id() {\n        return this.#id;\n    }\n\n    set id(newID) {\n        this.#id = newID;\n    }\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/topics.js":
/*!***********************!*\
  !*** ./src/topics.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_PROJECT\": () => (/* binding */ ADD_PROJECT),\n/* harmony export */   \"ADD_TODO\": () => (/* binding */ ADD_TODO),\n/* harmony export */   \"CLICK_CREATE_PROJECT\": () => (/* binding */ CLICK_CREATE_PROJECT),\n/* harmony export */   \"CLICK_CREATE_TODO\": () => (/* binding */ CLICK_CREATE_TODO),\n/* harmony export */   \"CLICK_PROJECT_LABEL\": () => (/* binding */ CLICK_PROJECT_LABEL),\n/* harmony export */   \"CLICK_REMOVE_PROJECT\": () => (/* binding */ CLICK_REMOVE_PROJECT),\n/* harmony export */   \"CLICK_REMOVE_TODO\": () => (/* binding */ CLICK_REMOVE_TODO),\n/* harmony export */   \"EMPTY_MSG\": () => (/* binding */ EMPTY_MSG),\n/* harmony export */   \"PROJECT_NAME_EXISTS\": () => (/* binding */ PROJECT_NAME_EXISTS),\n/* harmony export */   \"REMOVE_PROJECT\": () => (/* binding */ REMOVE_PROJECT),\n/* harmony export */   \"REMOVE_TODO\": () => (/* binding */ REMOVE_TODO),\n/* harmony export */   \"SELECT_PROJECT\": () => (/* binding */ SELECT_PROJECT)\n/* harmony export */ });\nconst ADD_PROJECT = 'ADD_PROJECT';\nconst ADD_TODO = 'ADD_TODO';\nconst CLICK_CREATE_PROJECT = 'CLICK_CREATE_PROJECT';\nconst CLICK_CREATE_TODO = 'CLICK_CREATE_TODO';\nconst CLICK_PROJECT_LABEL = 'CLICK_PROJECT_LABEL';\nconst CLICK_REMOVE_PROJECT = 'CLICK_REMOVE_PROJECT';\nconst CLICK_REMOVE_TODO = 'CLICK_REMOVE_TODO';\nconst EMPTY_MSG = 'EMPTY_MSG';\nconst PROJECT_NAME_EXISTS = 'PROJECT_NAME_EXISTS';\nconst REMOVE_PROJECT = 'REMOVE_PROJECT';\nconst REMOVE_TODO = 'REMOVE_TODO';\nconst SELECT_PROJECT = 'SELECT_PROJECT';\n\n//# sourceURL=webpack://odin-todo-list/./src/topics.js?");

/***/ }),

/***/ "./src/img/high-priority-marker.svg":
/*!******************************************!*\
  !*** ./src/img/high-priority-marker.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c837fda68d7e682d479e.svg\";\n\n//# sourceURL=webpack://odin-todo-list/./src/img/high-priority-marker.svg?");

/***/ }),

/***/ "./src/img/normal-priority-marker.svg":
/*!********************************************!*\
  !*** ./src/img/normal-priority-marker.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"886c6b045a669a2c2c34.svg\";\n\n//# sourceURL=webpack://odin-todo-list/./src/img/normal-priority-marker.svg?");

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
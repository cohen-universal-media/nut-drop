/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMDebugTool
 */

'use strict';

var ReactDOMNullInputValuePropHook = require('./ReactDOMNullInputValuePropHook');
var ReactDOMUnknownPropertyHook = require('./ReactDOMUnknownPropertyHook');
var ReactDebugTool = require('./ReactDebugTool');

var warning = require('fbjs/lib/warning');

var eventHandlers = [];
var handlerDoesThrowForEvent = {};

function emitEvent(handlerFunctionName, arg1, arg2, arg3, arg4, arg5) {
  eventHandlers.forEach(function (handler) {
    try {
      if (handler[handlerFunctionName]) {
        handler[handlerFunctionName](arg1, arg2, arg3, arg4, arg5);
      }
    } catch (e) {
      process.env.NODE_ENV !== 'production' ? warning(handlerDoesThrowForEvent[handlerFunctionName], 'exception thrown by hook while handling %s: %s', handlerFunctionName, e + '\n' + e.stack) : void 0;
      handlerDoesThrowForEvent[handlerFunctionName] = true;
    }
  });
}

var ReactDOMDebugTool = {
  addHook: function (hook) {
    ReactDebugTool.addHook(hook);
    eventHandlers.push(hook);
  },
  removeHook: function (hook) {
    ReactDebugTool.removeHook(hook);
    for (var i = 0; i < eventHandlers.length; i++) {
      if (eventHandlers[i] === hook) {
        eventHandlers.splice(i, 1);
        i--;
      }
    }
  },
  onCreateMarkupForProperty: function (name, value) {
    emitEvent('onCreateMarkupForProperty', name, value);
  },
  onSetValueForProperty: function (node, name, value) {
    emitEvent('onSetValueForProperty', node, name, value);
  },
  onDeleteValueForProperty: function (node, name) {
    emitEvent('onDeleteValueForProperty', node, name);
  },
  onTestEvent: function () {
    emitEvent('onTestEvent');
  }
};

ReactDOMDebugTool.addHook(ReactDOMUnknownPropertyHook);
ReactDOMDebugTool.addHook(ReactDOMNullInputValuePropHook);

module.exports = ReactDOMDebugTool;
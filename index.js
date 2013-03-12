// ==========================================
// Copyright 2013 Twitter, Inc
// Licensed under The MIT License
// http://opensource.org/licenses/MIT
// ==========================================

// define(

//   [
//     './advice',
//     './component',
//     './compose',
//     './logger',
//     './registry',
//     './utils'
//   ],

//   function (advice, component, compose, logger, registry, utils) {
    var advice = require('./advice');
    var component = require('./component');
    var compose = require('./compose');
    var logger = require('./logger');
    var registry = require('./registry');
    var utils = require('./utils');

    module.exports.advice = advice;
    module.exports.component = component;
    module.exports.compose = compose;
    module.exports.logger = logger;
    module.exports.registry = registry;
    module.exports.utils = utils;
//     return {
//       advice: advice,
//       component: component,
//       compose: compose,
//       logger: logger,
//       registry: registry,
//       utils: utils
//     };

//   }
// );

/* global console, require, describe, context, before, beforeEach, after, afterEach, it */

/** caching-geocoder.js resolves location names to latitude & longitude coordinates,
  * uses a cache which can be prefilled from a local file. Much more detail to be
  * found in the comments in caching-geocoder.js.
  */
describe('utilios.spec.js', function(){  
  'use strict'; 

  var must = require('must');
  var utiliosRootContext = '../../'; //want this null for when via npm installed.  

  // One more than normal level of context/descibe in this case b/c lexically hiding required modules from other test.
  context('when requiring specific utilios sub-modules', function(){
    var loggerModuleID = utiliosRootContext + 'utilios/logger';

    // JFT-TODO: this is cute and all but inconsistent with the rest of this super module's style, and just rather awkward visually.
    var logger = require(loggerModuleID)('someLogComponentName');
    logger.level('debug');

    describe('and have required only utilios/logger', function(){
      it('logger should exist. (And there should be "Hello, world." message in the mocha output.)', function(){
        must(logger).exist();
        logger.debug('Hello, world.');
        });
      });
    });


  context('when require utilios as one super unit', function(){
    var utiliosModuleID = utiliosRootContext + 'utilios';
    var utilios = require(utiliosModuleID);

    describe('i.e. require("utilios")', function(){
      it('the module should have its sub-modules a properties', function(){
        must(utilios.logger).exist();
        });
      });
    });
  

  context.skip('BLANK', function(){
    before(function(){
      });

    it('must BLANK', function(){
      });
  
    after(function(){
      });
    });
  });

  

// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * regExp exec() acts like regExp.exec('undefined') (step 2)
 *
 * @path 15_Native/15.10_RegExp_Objects/15.10.6_Properties_of_the_RegExp_Prototype_Object/15.10.6.2_RegExp.prototype.exec/S15.10.6.2_A12.js
 * @description Checking RegExp.prototype.exec
 */

(/foo/).test('xfoox');
var match = new RegExp('(.|\r|\n)*','').exec()[0];
if (match === 'xfoox') {
  $FAIL('#1: regExp.exec() leaks match globally');
}
if (match !== 'undefined') {
  $FAIL('#2: regExp.exec() must coerce absent first arg to "undefined"');
}

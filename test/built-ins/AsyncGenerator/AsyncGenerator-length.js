/*---
author: Benjamin Gruenbaum <benjamingr@gmail.com>
esid: pending
description: >
  %AsyncGeneratorFunction% has a length of 1 with writable false, enumerable false, configurable true.
includes: [propertyHelper.js]
---*/

var AsyncGeneratorFunction = async function* foo() { }.constructor;
assert.sameValue(AsyncGeneratorFunction.length, 1);
verifyNotWritable(AsyncGeneratorFunction, 'length');
verifyNotEnumerable(AsyncGeneratorFunction, 'length');
verifyConfigurable(AsyncGeneratorFunction, 'length');

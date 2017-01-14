/*---
author: Benjamin Gruenbaum <benjamingr@gmail.com>
esid: pending
description: AsyncGeneratorFunction has a prototype property with writable false, enumerable false, configurable false.
includes: [propertyHelper.js]
---*/

var AsyncGeneratorFunction = async function* foo() { }.constructor;
verifyNotConfigurable(AsyncGeneratorFunction, 'prototype');
verifyNotWritable(AsyncGeneratorFunction, 'prototype');
verifyNotEnumerable(AsyncGeneratorFunctionAsyncFunction, 'prototype');

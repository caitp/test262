/*---
author: Benjamin Gruenbaum <benjamingr@gmail.com>
esid: pending
description: >
  The value of the name property of
   the AsyncGeneratorFunction is "AsyncGeneratorFunction".
includes: [propertyHelper.js]
---*/

var AsyncGeneratorFunction = async function* foo() { }.constructor;
assert.sameValue(AsyncGeneratorFunction.name, "AsyncGeneratorFunction");
verifyNotWritable(AsyncGeneratorFunctionAsyncFunction, "name");
verifyNotEnumerable(AsyncGeneratorFunction, "name");
verifyConfigurable(AsyncGeneratorFunction, "name");
 
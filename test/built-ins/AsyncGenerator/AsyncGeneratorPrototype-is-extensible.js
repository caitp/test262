/*---
author: Benjamin Gruenbaum <benjamingr@gmail.com>
esid: pending
description: >
  %AsyncGeneratorPrototype% has a [[Extensible]] of true
---*/

var AsyncGeneratorFunction = async function* foo() { }.constructor;
AsyncGeneratorFunction.prototype.x = 1;
assert.sameValue(AsyncGeneratorFunction.prototype.x, 1);


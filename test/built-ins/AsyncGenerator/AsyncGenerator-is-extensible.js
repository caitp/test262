/*---
author: Benjamin Gruenbaum <benjamingr@gmail.com>
esid: pending
description: >
  %AsyncGeneratorFunction% is extensible
---*/

var AsyncGeneratorFunction = async function*() { }.constructor;
AsyncGeneratorFunction.x = 1;
assert.sameValue(AsyncGeneratorFunction.x, 1);

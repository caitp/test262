/*---
author: Benjamin Gruenbaum <benjamingr@gmail.com>
esid: early
description: Name prop of Symbol.asyncIterator
info: >
  The value of the name property of this function is "[Symbol.asyncIterator]".
features: [Symbol.asyncIterator]
---*/


assert.sameValue(Symbol.asyncIterator.name, '[Symbol.asyncIterator]');

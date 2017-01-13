/*---
author: Benjamin Gruenbaum <benjamingr@gmail.com>
description: >
  %AsyncGeneratorPrototype% exists and is a function
---*/

var AsyncGeneratorFunction = async function* foo() { }.constructor;
assert.sameValue(typeof AsyncGeneratorFunction, "function");

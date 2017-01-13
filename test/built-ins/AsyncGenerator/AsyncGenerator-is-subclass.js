/*---
author: Benjamin Gruenbaum <benjamingr@gmail.com>
esid: pending
description: >
  %AsyncGeneratorFunction% is a subclass of Function
  (The AsyncGeneratorFunction constructor is a standard built-in
   function object that inherits from the Function constructor. )
---*/
async function* foo() { };
var AsyncGeneratorFunction = foo.constructor;
assert.sameValue(Object.getPrototypeOf(AsyncGeneratorFunction), Function, "Prototype of constructor is Function");
assert.sameValue(Object.getPrototypeOf(AsyncGeneratorFunction.prototype), Function.prototype, "Prototype of constructor's prototype is Function.prototype");
assert(foo instanceof Function, 'async generator instance is instanceof Function');


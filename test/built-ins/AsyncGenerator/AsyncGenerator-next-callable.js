/*---
 author: Sasha Kruglyak <zooblin@gmail.com>
 esid: pending
 description: >
 %AsyncGeneratorPrototype%.next.[[Call]] exists (is callable)
 ---*/

async function* foo() { };
assert("next" in Object.getPrototypeOf(foo()));
foo().next();
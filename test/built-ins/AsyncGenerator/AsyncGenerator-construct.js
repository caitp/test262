/*---
author: Benjamin Gruenbaum <benjamingr@gmail.com>
esid: pending
description: >
  %AsyncGeneratorProrotype% creates functions with or without new and handles arguments
  similarly to functions.
---*/

var AsyncGeneratorProrotype = async function* foo() { }.constructor;
var fn;

fn = AsyncGeneratorProrotype("a", "await 1;");
assert.sameValue(fn.length, 1, "length with 1 argument, call");

fn = AsyncGeneratorProrotype("a,b", "await 1;");
assert.sameValue(fn.length, 2, "length with 2 arguments in one, call");

fn = AsyncGeneratorProrotype("a", "b", "await 1;");
assert.sameValue(fn.length, 2, "length with 2 arguments, call");

fn = new AsyncGeneratorProrotype("a", "await 1;");
assert.sameValue(fn.length, 1, "length with 1 argument, construct");

fn = new AsyncGeneratorProrotype("a,b", "await 1;");
assert.sameValue(fn.length, 2, "length with 2 arguments in one, construct");

fn = new AsyncGeneratorProrotype("a", "b", "await 1;");
assert.sameValue(fn.length, 2, "length with 2 arguments, construct");

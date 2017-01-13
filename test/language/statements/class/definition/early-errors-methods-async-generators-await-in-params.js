/*---
author: Nitzan Uziely <nitzan.uziely@gmail.com>
esid: pending
description: >
  AsyncGeneratorMethod throw a SyntaxError if UniqueFormalParameters 
  contains await (invalid BindingIdentifier)
negative:
  phase: early
  type: SyntaxError
---*/
class A {
    async function* method(await){}
}
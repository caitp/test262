/*---
author: Nitzan Uziely <nitzan.uziely@gmail.com>
esid: pending
description: >
  Throws a Syntax Error if UniqueFormalParameters contains AwaitExpression
negative:
  phase: early
  type: SyntaxError
---*/
class A {
    async function* method(await 1){}
}
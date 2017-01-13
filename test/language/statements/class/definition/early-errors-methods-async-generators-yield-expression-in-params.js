/*---
author: Nitzan Uziely <nitzan.uziely@gmail.com>
esid: pending
description: >
  Throws a Syntax Error if UniqueFormalParameters contains YieldExpression
negative:
  phase: early
  type: SyntaxError
---*/
class A {
    async function* method(yield 1){}
}
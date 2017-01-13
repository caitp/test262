/*---
author: Nitzan Uziely <nitzan.uziely@gmail.com>
esid: pending
description: >
  Throws a Syntax Error if HasDirectSuper of AsyncGeneratorMethod is true,
  in UniqueFormalParameters
negative:
  phase: early
  type: SyntaxError
---*/
class A {
    async function* method(x = super()){}
}
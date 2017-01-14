// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
 author: Sasha Kruglyak <zooblin@gmail.com>
 esid: pending
 description: It is a syntax error if BindingIdentifier is "yield"
 and function is nested inside GeneratorDeclaration
 negative:
 phase: early
 type: SyntaxError
 ---*/

function* boo() {
  async function* foo (yield) { }
}



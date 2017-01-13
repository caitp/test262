// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
 author: Sasha Kruglyak <zooblin@gmail.com>
 esid: pending
 description: It is a syntax error if FormalParameters contains yield
 negative:
 phase: early
 type: SyntaxError
 ---*/

async function* foo (yield) { }

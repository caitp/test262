// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Benjamin Gruenbaum <benjamingr@gmail.com>
esid: pending
description: >
  throw a SyntaxError if UniqueFormalParameters contains yield (invalid BindingIdentifier):
negative:
  phase: early
  type: SyntaxError
---*/

(async function* (yield) {});
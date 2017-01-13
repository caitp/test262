// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Benjamin Gruenbaum <benjamingr@gmail.com>
esid: pending
description: >
  next() throws a TypeError when receiver is not an AsyncGenerator instance:
negative:
  phase: early
  type: TypeError
---*/

(async function*() {})().next.call((function*() {})()); 
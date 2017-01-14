// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Benjamin Gruenbaum <benjamingr@gmail.com>
esid: pending
description: >
  next() rejects with a TypeError when receiver is not an AsyncGenerator instance:
---*/

(async function*() {})().next.call((function*() {})()).then(function() {
    throw new Test262Error("should not have resolved");    
}, function(err) {
    assert(err instanceof TypeError);
}).then($DONE, $DONE);
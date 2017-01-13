// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
author: Benjamin Gruenbaum <benjamingr@gmail.com>
esid: early
description: Value shared by all realms
info: >
  Unless otherwise specified, well-known symbols values are shared by all
  realms.
features: [Symbol.asyncIterator]
---*/

var otherRealmSymbol = $.createRealm().global.Symbol;

assert.sameValue(Symbol.asyncIterator, otherRealmSymbol.asyncIterator);

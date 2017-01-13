// Copyright (C) 2015-2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: early
description: >
    `Symbol.asyncIterator` property descriptor
info: >
    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [Symbol.asyncIterator]
---*/

assert.sameValue(typeof Symbol.asyncIterator, 'symbol');
verifyNotEnumerable(Symbol, 'asyncIterator');
verifyNotWritable(Symbol, 'asyncIterator');
verifyNotConfigurable(Symbol, 'asyncIterator');

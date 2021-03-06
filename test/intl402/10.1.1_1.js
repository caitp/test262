// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.1.1_1
description: Tests that an object can't be re-initialized as a Collator.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

testWithIntlConstructors(function (Constructor) {
    var obj, error;
    
    // variant 1: use constructor in a "new" expression
    obj = new Constructor();
    try {
        Intl.Collator.call(obj);
    } catch (e) {
        error = e;
    }
    if (error === undefined) {
        $ERROR("Re-initializing object created with \"new\" as Collator was not rejected.");
    } else if (error.name !== "TypeError") {
        $ERROR("Re-initializing object created with \"new\" as Collator was rejected with wrong error " + error.name + ".");
    }
    
    // variant 2: use constructor as a function
    obj = Constructor.call({});
    error = undefined;
    try {
        Intl.Collator.call(obj);
    } catch (e) {
        error = e;
    }
    if (error === undefined) {
        $ERROR("Re-initializing object created with constructor as function as Collator was not rejected.");
    } else if (error.name !== "TypeError") {
        $ERROR("Re-initializing object created with constructor as function as Collator was rejected with wrong error " + error.name + ".");
    }
    
    return true;
});

// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.20-9-c-i-8
description: >
    Array.prototype.filter - element to be retrieved is inherited data
    property on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return (idx === 1) && (val === 13);
        }

        try {
            Array.prototype[1] = 13;
            var newArr = [, , , ].filter(callbackfn);

            return newArr.length === 1 && newArr[0] === 13;
        } finally {
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);

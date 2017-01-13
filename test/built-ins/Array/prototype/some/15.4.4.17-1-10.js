// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-1-10
description: Array.prototype.some applied to the Math object
---*/

        function callbackfn(val, idx, obj) {
            return '[object Math]' === Object.prototype.toString.call(obj);
        }

            Math.length = 1;
            Math[0] = 1;

assert(Array.prototype.some.call(Math, callbackfn), 'Array.prototype.some.call(Math, callbackfn) !== true');

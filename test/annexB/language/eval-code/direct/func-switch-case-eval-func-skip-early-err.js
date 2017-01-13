// This file was procedurally generated from the following sources:
// - src/annex-b-fns/eval-func-skip-early-err.case
// - src/annex-b-fns/eval-func/direct-switch-case.template
/*---
description: Extension not observed when creation of variable binding would produce an early error (Function declaration in the `case` clause of a `switch` statement in eval code)
esid: sec-web-compat-evaldeclarationinstantiation
es6id: B.3.3.3
flags: [generated, noStrict]
info: |
    B.3.3.3 Changes to EvalDeclarationInstantiation

    [...]
    ii. If replacing the FunctionDeclaration f with a VariableStatement that
        has F as a BindingIdentifier would not produce any Early Errors for
        body, then
    [...]
---*/
var init, after;

(function() {
  eval(
    'let f = 123;\
    init = f;switch (1) {' +
    '  case 1:' +
    '    function f() {  }' +
    '}\
    after = f;'
  );
}());

assert.sameValue(init, 123, 'binding is not initialized to `undefined`');
assert.sameValue(after, 123, 'value is not updated following evaluation');

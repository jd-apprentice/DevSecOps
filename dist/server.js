// @bun
// node_modules/elysia/dist/bun/index.js
var y$ = function($) {
  return x0($) && (Symbol.asyncIterator in $);
};
var d$ = function($) {
  return x0($) && (Symbol.iterator in $);
};
var w1 = function($) {
  return ArrayBuffer.isView($);
};
var v$ = function($) {
  return $ instanceof Promise;
};
var K8 = function($) {
  return $ instanceof Uint8Array;
};
var a0 = function($) {
  return $ instanceof Date && Number.isFinite($.getTime());
};
var h = function($, X) {
  return X in $;
};
var Y0 = function($) {
  return x0($) && o8($.constructor) && $.constructor.name === "Object";
};
var x0 = function($) {
  return $ !== null && typeof $ === "object";
};
var f = function($) {
  return Array.isArray($) && !ArrayBuffer.isView($);
};
var z0 = function($) {
  return $ === undefined;
};
var d1 = function($) {
  return $ === null;
};
var E1 = function($) {
  return typeof $ === "boolean";
};
var k = function($) {
  return typeof $ === "number";
};
var p$ = function($) {
  return k($) && Number.isInteger($);
};
var k0 = function($) {
  return typeof $ === "bigint";
};
var p = function($) {
  return typeof $ === "string";
};
var o8 = function($) {
  return typeof $ === "function";
};
var l0 = function($) {
  return typeof $ === "symbol";
};
var e0 = function($) {
  return k0($) || E1($) || d1($) || k($) || p($) || l0($) || z0($);
};
var N4 = function() {
  return new Map(n8);
};
var O4 = function() {
  return n8.clear();
};
var S4 = function($) {
  return n8.delete($);
};
var _4 = function($) {
  return n8.has($);
};
var P4 = function($, X) {
  n8.set($, X);
};
var L4 = function($) {
  return n8.get($);
};
var C4 = function() {
  return new Map(l8);
};
var F4 = function() {
  return l8.clear();
};
var b4 = function($) {
  return l8.delete($);
};
var R4 = function($) {
  return l8.has($);
};
var j4 = function($, X) {
  l8.set($, X);
};
var K4 = function($) {
  return l8.get($);
};
var t8 = function($ = {}) {
  return { ...$, [H]: $[H] ?? "Unsafe" };
};
var m = function($) {
  return { [H]: "MappedResult", properties: $ };
};
var bX = function($) {
  return F0($) && !X1($) && !E8($) && (Symbol.asyncIterator in $);
};
var X1 = function($) {
  return Array.isArray($);
};
var h$ = function($) {
  return typeof $ === "bigint";
};
var V8 = function($) {
  return typeof $ === "boolean";
};
var m$ = function($) {
  return $ instanceof globalThis.Date;
};
var RX = function($) {
  return typeof $ === "function";
};
var jX = function($) {
  return F0($) && !X1($) && !E8($) && (Symbol.iterator in $);
};
var KX = function($) {
  return $ === null;
};
var p1 = function($) {
  return typeof $ === "number";
};
var F0 = function($) {
  return typeof $ === "object" && $ !== null;
};
var VX = function($) {
  return $ instanceof globalThis.RegExp;
};
var w0 = function($) {
  return typeof $ === "string";
};
var EX = function($) {
  return typeof $ === "symbol";
};
var E8 = function($) {
  return $ instanceof globalThis.Uint8Array;
};
var G0 = function($) {
  return $ === undefined;
};
var JY = function($) {
  return S6($);
};
var _0 = function($) {
  return $.map((X) => C(X));
};
var C = function($, X = {}) {
  return { ...JY($), ...X };
};
var A0 = function($, X) {
  return X.reduce((J, Y) => T4(J, Y), $);
};
var s8 = function($, X = {}) {
  return { ...X, [H]: "Array", type: "array", items: C($) };
};
var r8 = function($, X = {}) {
  return { ...X, [H]: "AsyncIterator", type: "AsyncIterator", items: C($) };
};
var a8 = function($, X, J) {
  return { ...J, [H]: "Constructor", type: "Constructor", parameters: _0($), returns: C(X) };
};
var h1 = function($, X, J) {
  return { ...J, [H]: "Function", type: "Function", parameters: _0($), returns: C(X) };
};
var e = function($ = {}) {
  return { ...$, [H]: "Never", not: {} };
};
var kX = function($) {
  return F0($) && $[D8] === "Readonly";
};
var I1 = function($) {
  return F0($) && $[$1] === "Optional";
};
var zY = function($) {
  return i($, "Any") && X0($.$id);
};
var m1 = function($) {
  return i($, "Array") && $.type === "array" && X0($.$id) && g($.items) && q0($.minItems) && q0($.maxItems) && xX($.uniqueItems) && QY($.contains) && q0($.minContains) && q0($.maxContains);
};
var e8 = function($) {
  return i($, "AsyncIterator") && $.type === "AsyncIterator" && X0($.$id) && g($.items);
};
var P6 = function($) {
  return i($, "BigInt") && $.type === "bigint" && X0($.$id) && i$($.exclusiveMaximum) && i$($.exclusiveMinimum) && i$($.maximum) && i$($.minimum) && i$($.multipleOf);
};
var L6 = function($) {
  return i($, "Boolean") && $.type === "boolean" && X0($.$id);
};
var $$ = function($) {
  return i($, "Constructor") && $.type === "Constructor" && X0($.$id) && X1($.parameters) && $.parameters.every((X) => g(X)) && g($.returns);
};
var qY = function($) {
  return i($, "Date") && $.type === "Date" && X0($.$id) && q0($.exclusiveMaximumTimestamp) && q0($.exclusiveMinimumTimestamp) && q0($.maximumTimestamp) && q0($.minimumTimestamp) && q0($.multipleOfTimestamp);
};
var X$ = function($) {
  return i($, "Function") && $.type === "Function" && X0($.$id) && X1($.parameters) && $.parameters.every((X) => g(X)) && g($.returns);
};
var A8 = function($) {
  return i($, "Integer") && $.type === "integer" && X0($.$id) && q0($.exclusiveMaximum) && q0($.exclusiveMinimum) && q0($.maximum) && q0($.minimum) && q0($.multipleOf);
};
var gX = function($) {
  return F0($) && Object.entries($).every(([X, J]) => IX(X) && g(J));
};
var N0 = function($) {
  return i($, "Intersect") && (w0($.type) && $.type !== "object" ? false : true) && X1($.allOf) && $.allOf.every((X) => g(X) && !r(X)) && X0($.type) && (xX($.unevaluatedProperties) || QY($.unevaluatedProperties)) && X0($.$id);
};
var J$ = function($) {
  return i($, "Iterator") && $.type === "Iterator" && X0($.$id) && g($.items);
};
var i = function($, X) {
  return F0($) && (H in $) && $[H] === X;
};
var BY = function($) {
  return M1($) && w0($.const);
};
var wY = function($) {
  return M1($) && p1($.const);
};
var v4 = function($) {
  return M1($) && V8($.const);
};
var M1 = function($) {
  return i($, "Literal") && X0($.$id) && MY($.const);
};
var MY = function($) {
  return V8($) || p1($) || w0($);
};
var Y1 = function($) {
  return i($, "MappedKey") && X1($.keys) && $.keys.every((X) => p1(X) || w0(X));
};
var Z0 = function($) {
  return i($, "MappedResult") && gX($.properties);
};
var C6 = function($) {
  return i($, "Never") && F0($.not) && Object.getOwnPropertyNames($.not).length === 0;
};
var UY = function($) {
  return i($, "Not") && g($.not);
};
var GY = function($) {
  return i($, "Null") && $.type === "null" && X0($.$id);
};
var N8 = function($) {
  return i($, "Number") && $.type === "number" && X0($.$id) && q0($.exclusiveMaximum) && q0($.exclusiveMinimum) && q0($.maximum) && q0($.minimum) && q0($.multipleOf);
};
var O0 = function($) {
  return i($, "Object") && $.type === "object" && X0($.$id) && gX($.properties) && WY($.additionalProperties) && q0($.minProperties) && q0($.maxProperties);
};
var O8 = function($) {
  return i($, "Promise") && $.type === "Promise" && X0($.$id) && g($.item);
};
var F6 = function($) {
  return i($, "Record") && $.type === "object" && X0($.$id) && WY($.additionalProperties) && F0($.patternProperties) && ((X) => {
    const J = Object.getOwnPropertyNames(X.patternProperties);
    return J.length === 1 && ZY(J[0]) && F0(X.patternProperties) && g(X.patternProperties[J[0]]);
  })($);
};
var p4 = function($) {
  return F0($) && (S1 in $) && $[S1] === "Recursive";
};
var b6 = function($) {
  return i($, "Ref") && X0($.$id) && w0($.$ref);
};
var R6 = function($) {
  return i($, "RegExp") && X0($.$id) && w0($.source) && w0($.flags);
};
var Y$ = function($) {
  return i($, "String") && $.type === "string" && X0($.$id) && q0($.minLength) && q0($.maxLength) && y4($.pattern) && d4($.format);
};
var HY = function($) {
  return i($, "Symbol") && $.type === "symbol" && X0($.$id);
};
var i0 = function($) {
  return i($, "TemplateLiteral") && $.type === "string" && w0($.pattern) && $.pattern[0] === "^" && $.pattern[$.pattern.length - 1] === "$";
};
var DY = function($) {
  return i($, "This") && X0($.$id) && w0($.$ref);
};
var r = function($) {
  return F0($) && (C0 in $);
};
var _1 = function($) {
  return i($, "Tuple") && $.type === "array" && X0($.$id) && p1($.minItems) && p1($.maxItems) && $.minItems === $.maxItems && (G0($.items) && G0($.additionalItems) && $.minItems === 0 || X1($.items) && $.items.every((X) => g(X)));
};
var AY = function($) {
  return i($, "Undefined") && $.type === "undefined" && X0($.$id);
};
var h4 = function($) {
  return u($) && $.anyOf.every((X) => BY(X) || wY(X));
};
var u = function($) {
  return i($, "Union") && X0($.$id) && F0($) && X1($.anyOf) && $.anyOf.every((X) => g(X));
};
var NY = function($) {
  return i($, "Uint8Array") && $.type === "Uint8Array" && X0($.$id) && q0($.minByteLength) && q0($.maxByteLength);
};
var OY = function($) {
  return i($, "Unknown") && X0($.$id);
};
var SY = function($) {
  return i($, "Unsafe");
};
var _Y = function($) {
  return i($, "Void") && $.type === "void" && X0($.$id);
};
var PY = function($) {
  return F0($) && (H in $) && w0($[H]) && !f4.includes($[H]);
};
var g = function($) {
  return F0($) && (zY($) || m1($) || L6($) || P6($) || e8($) || $$($) || qY($) || X$($) || A8($) || N0($) || J$($) || M1($) || Y1($) || Z0($) || C6($) || UY($) || GY($) || N8($) || O0($) || O8($) || F6($) || b6($) || R6($) || Y$($) || HY($) || i0($) || DY($) || _1($) || AY($) || u($) || NY($) || OY($) || SY($) || _Y($) || PY($));
};
var u0 = function($, X) {
  const J = X ?? true;
  return Z0($) ? TX($, J) : u4($, J);
};
var TX = function($, X) {
  const J = o4($, X);
  return m(J);
};
var u$ = function($, X) {
  const J = $.every((Z) => O0(Z)), Y = g(X.unevaluatedProperties) ? { unevaluatedProperties: C(X.unevaluatedProperties) } : {};
  return X.unevaluatedProperties === false || g(X.unevaluatedProperties) || J ? { ...X, ...Y, [H]: "Intersect", type: "object", allOf: _0($) } : { ...X, ...Y, [H]: "Intersect", allOf: _0($) };
};
var fX = function($, X = {}) {
  if ($.length === 0)
    return e(X);
  if ($.length === 1)
    return C($[0], X);
  if ($.some((J) => r(J)))
    throw new Error("Cannot intersect transform types");
  return t4($, X);
};
var T0 = function($, X = {}) {
  if ($.length === 0)
    return e(X);
  if ($.length === 1)
    return C($[0], X);
  if ($.some((J) => r(J)))
    throw new Error("Cannot intersect transform types");
  return u$($, X);
};
var c$ = function($, X) {
  return { ...X, [H]: "Union", anyOf: _0($) };
};
var J8 = function($, X = {}) {
  return $.length === 0 ? e(X) : $.length === 1 ? C($[0], X) : a4($, X);
};
var l = function($, X = {}) {
  return $.length === 0 ? e(X) : $.length === 1 ? C($[0], X) : c$($, X);
};
var I8 = function($) {
  return e4($) ? I8($W($)) : XW($) ? YW($) : JW($) ? ZW($) : { type: "const", const: $ };
};
var x8 = function($) {
  return I8($.slice(1, $.length - 1));
};
var S8 = function($) {
  return WW($) || zW($) ? false : QW($) ? true : $.type === "and" ? $.expr.every((X) => S8(X)) : $.type === "or" ? $.expr.every((X) => S8(X)) : $.type === "const" ? true : (() => {
    throw new bY("Unknown expression type");
  })();
};
var n$ = function($) {
  const X = x8($.pattern);
  return S8(X);
};
function* jY($) {
  if ($.length === 1)
    return yield* $[0];
  for (let X of $[0])
    for (let J of jY($.slice(1)))
      yield `${X}${J}`;
}
function* qW($) {
  return yield* jY($.expr.map((X) => [...Z$(X)]));
}
function* BW($) {
  for (let X of $.expr)
    yield* Z$(X);
}
function* wW($) {
  return yield $.const;
}
function* Z$($) {
  return $.type === "and" ? yield* qW($) : $.type === "or" ? yield* BW($) : $.type === "const" ? yield* wW($) : (() => {
    throw new RY("Unknown expression");
  })();
}
var k8 = function($) {
  const X = x8($.pattern);
  return S8(X) ? [...Z$(X)] : [];
};
var n = function($, X = {}) {
  return { ...X, [H]: "Literal", const: $, type: typeof $ };
};
var W$ = function($ = {}) {
  return { ...$, [H]: "Boolean", type: "boolean" };
};
var _8 = function($ = {}) {
  return { ...$, [H]: "BigInt", type: "bigint" };
};
var P1 = function($ = {}) {
  return { ...$, [H]: "Number", type: "number" };
};
var Z1 = function($ = {}) {
  return { ...$, [H]: "String", type: "string" };
};
function* MW($) {
  const X = $.trim().replace(/"|'/g, "");
  return X === "boolean" ? yield W$() : X === "number" ? yield P1() : X === "bigint" ? yield _8() : X === "string" ? yield Z1() : yield (() => {
    const J = X.split("|").map((Y) => n(Y.trim()));
    return J.length === 0 ? e() : J.length === 1 ? J[0] : J8(J);
  })();
}
function* UW($) {
  if ($[1] !== "{") {
    const X = n("$"), J = vX($.slice(1));
    return yield* [X, ...J];
  }
  for (let X = 2;X < $.length; X++)
    if ($[X] === "}") {
      const J = MW($.slice(2, X)), Y = vX($.slice(X + 1));
      return yield* [...J, ...Y];
    }
  yield n($);
}
function* vX($) {
  for (let X = 0;X < $.length; X++)
    if ($[X] === "$") {
      const J = n($.slice(0, X)), Y = UW($.slice(X));
      return yield* [J, ...Y];
    }
  yield n($);
}
var KY = function($) {
  return [...vX($)];
};
var mX = function($) {
  return `^${$.map((X) => EY(X, "")).join("")}\$`;
};
var W8 = function($) {
  const J = k8($).map((Y) => n(Y));
  return l(J);
};
var Q$ = function($, X = {}) {
  const J = w0($) ? mX(KY($)) : mX($);
  return { ...X, [H]: "TemplateLiteral", type: "string", pattern: J };
};
var t0 = function($) {
  return [...new Set(i0($) ? HW($) : u($) ? DW($.anyOf) : M1($) ? AW($.const) : N8($) ? ["[number]"] : A8($) ? ["[number]"] : [])];
};
var iX = function($, X, J) {
  const Y = OW($, X, J);
  return m(Y);
};
var W1 = function($, X, J = {}) {
  return Z0(X) ? C(iX($, X, J)) : Y1(X) ? C(uX($, X, J)) : g(X) ? C(IY($, t0(X)), J) : C(IY($, X), J);
};
var uX = function($, X, J) {
  const Y = VW($, X, J);
  return m(Y);
};
var z$ = function($, X = {}) {
  return { ...X, [H]: "Iterator", type: "Iterator", items: C($) };
};
var EW = function($, X = {}) {
  const J = globalThis.Object.getOwnPropertyNames($), Y = J.filter((z) => I1($[z])), Z = J.filter((z) => !Y.includes(z)), W = g(X.additionalProperties) ? { additionalProperties: C(X.additionalProperties) } : {}, Q = J.reduce((z, q) => ({ ...z, [q]: C($[q]) }), {});
  return Z.length > 0 ? { ...X, ...W, [H]: "Object", type: "object", properties: Q, required: Z } : { ...X, ...W, [H]: "Object", type: "object", properties: Q };
};
var q$ = function($, X = {}) {
  return { ...X, [H]: "Promise", type: "Promise", item: C($) };
};
var Q1 = function($, X) {
  const J = X ?? true;
  return Z0($) ? cX($, J) : kW($, J);
};
var cX = function($, X) {
  const J = TW($, X);
  return m(J);
};
var L1 = function($, X = {}) {
  const [J, Y, Z] = [false, $.length, $.length];
  return $.length > 0 ? { ...X, [H]: "Tuple", type: "array", items: _0($), additionalItems: J, minItems: Y, maxItems: Z } : { ...X, [H]: "Tuple", type: "array", minItems: Y, maxItems: Z };
};
var gY = function($, X) {
  return $.includes(X);
};
var fW = function($, X) {
  return $.filter((J) => X.includes(J));
};
var TY = function($) {
  return $.length === 1 ? $[0] : $.reduce((X, J) => [...fW(X, J)], []);
};
var fY = function($) {
  return $.reduce((X, J) => [...X, ...J], []);
};
var j6 = function($, X, J = {}) {
  const Y = g($) ? t0($) : $, Z = X({ [H]: "MappedKey", keys: Y }), W = mW(Y, Z);
  return C($0(W), J);
};
var s0 = function($) {
  return N0($) ? iW($.allOf) : u($) ? uW($.anyOf) : _1($) ? cW($.items ?? []) : m1($) ? oW($.items) : O0($) ? nW($.properties) : F6($) ? lW($.patternProperties) : [];
};
var u1 = function($) {
  oX = true;
  const X = s0($);
  return oX = false, `^(${X.map((Y) => `(${Y})`).join("|")})$`;
};
var B$ = function($, X = {}) {
  if (Z0($))
    return vY($, X);
  else {
    const J = s0($), Y = tW(J), Z = J8(Y);
    return C(Z, X);
  }
};
var vY = function($, X) {
  const J = rW($, X);
  return m(J);
};
var c1 = function($) {
  return $[H] === "Intersect" ? aW($) : $[H] === "Union" ? eW($) : $[H] === "Not" ? $Q($) : $[H] === "Undefined" ? true : false;
};
var pY = function($) {
  switch ($.errorType) {
    case G.ArrayContains:
      return "Expected array to contain at least one matching value";
    case G.ArrayMaxContains:
      return `Expected array to contain no more than ${$.schema.maxContains} matching values`;
    case G.ArrayMinContains:
      return `Expected array to contain at least ${$.schema.minContains} matching values`;
    case G.ArrayMaxItems:
      return `Expected array length to be less or equal to ${$.schema.maxItems}`;
    case G.ArrayMinItems:
      return `Expected array length to be greater or equal to ${$.schema.minItems}`;
    case G.ArrayUniqueItems:
      return "Expected array elements to be unique";
    case G.Array:
      return "Expected array";
    case G.AsyncIterator:
      return "Expected AsyncIterator";
    case G.BigIntExclusiveMaximum:
      return `Expected bigint to be less than ${$.schema.exclusiveMaximum}`;
    case G.BigIntExclusiveMinimum:
      return `Expected bigint to be greater than ${$.schema.exclusiveMinimum}`;
    case G.BigIntMaximum:
      return `Expected bigint to be less or equal to ${$.schema.maximum}`;
    case G.BigIntMinimum:
      return `Expected bigint to be greater or equal to ${$.schema.minimum}`;
    case G.BigIntMultipleOf:
      return `Expected bigint to be a multiple of ${$.schema.multipleOf}`;
    case G.BigInt:
      return "Expected bigint";
    case G.Boolean:
      return "Expected boolean";
    case G.DateExclusiveMinimumTimestamp:
      return `Expected Date timestamp to be greater than ${$.schema.exclusiveMinimumTimestamp}`;
    case G.DateExclusiveMaximumTimestamp:
      return `Expected Date timestamp to be less than ${$.schema.exclusiveMaximumTimestamp}`;
    case G.DateMinimumTimestamp:
      return `Expected Date timestamp to be greater or equal to ${$.schema.minimumTimestamp}`;
    case G.DateMaximumTimestamp:
      return `Expected Date timestamp to be less or equal to ${$.schema.maximumTimestamp}`;
    case G.DateMultipleOfTimestamp:
      return `Expected Date timestamp to be a multiple of ${$.schema.multipleOfTimestamp}`;
    case G.Date:
      return "Expected Date";
    case G.Function:
      return "Expected function";
    case G.IntegerExclusiveMaximum:
      return `Expected integer to be less than ${$.schema.exclusiveMaximum}`;
    case G.IntegerExclusiveMinimum:
      return `Expected integer to be greater than ${$.schema.exclusiveMinimum}`;
    case G.IntegerMaximum:
      return `Expected integer to be less or equal to ${$.schema.maximum}`;
    case G.IntegerMinimum:
      return `Expected integer to be greater or equal to ${$.schema.minimum}`;
    case G.IntegerMultipleOf:
      return `Expected integer to be a multiple of ${$.schema.multipleOf}`;
    case G.Integer:
      return "Expected integer";
    case G.IntersectUnevaluatedProperties:
      return "Unexpected property";
    case G.Intersect:
      return "Expected all values to match";
    case G.Iterator:
      return "Expected Iterator";
    case G.Literal:
      return `Expected ${typeof $.schema.const === "string" ? `'${$.schema.const}'` : $.schema.const}`;
    case G.Never:
      return "Never";
    case G.Not:
      return "Value should not match";
    case G.Null:
      return "Expected null";
    case G.NumberExclusiveMaximum:
      return `Expected number to be less than ${$.schema.exclusiveMaximum}`;
    case G.NumberExclusiveMinimum:
      return `Expected number to be greater than ${$.schema.exclusiveMinimum}`;
    case G.NumberMaximum:
      return `Expected number to be less or equal to ${$.schema.maximum}`;
    case G.NumberMinimum:
      return `Expected number to be greater or equal to ${$.schema.minimum}`;
    case G.NumberMultipleOf:
      return `Expected number to be a multiple of ${$.schema.multipleOf}`;
    case G.Number:
      return "Expected number";
    case G.Object:
      return "Expected object";
    case G.ObjectAdditionalProperties:
      return "Unexpected property";
    case G.ObjectMaxProperties:
      return `Expected object to have no more than ${$.schema.maxProperties} properties`;
    case G.ObjectMinProperties:
      return `Expected object to have at least ${$.schema.minProperties} properties`;
    case G.ObjectRequiredProperty:
      return "Required property";
    case G.Promise:
      return "Expected Promise";
    case G.RegExp:
      return "Expected string to match regular expression";
    case G.StringFormatUnknown:
      return `Unknown format '${$.schema.format}'`;
    case G.StringFormat:
      return `Expected string to match '${$.schema.format}' format`;
    case G.StringMaxLength:
      return `Expected string length less or equal to ${$.schema.maxLength}`;
    case G.StringMinLength:
      return `Expected string length greater or equal to ${$.schema.minLength}`;
    case G.StringPattern:
      return `Expected string to match '${$.schema.pattern}'`;
    case G.String:
      return "Expected string";
    case G.Symbol:
      return "Expected symbol";
    case G.TupleLength:
      return `Expected tuple to have ${$.schema.maxItems || 0} elements`;
    case G.Tuple:
      return "Expected tuple";
    case G.Uint8ArrayMaxByteLength:
      return `Expected byte length less or equal to ${$.schema.maxByteLength}`;
    case G.Uint8ArrayMinByteLength:
      return `Expected byte length greater or equal to ${$.schema.minByteLength}`;
    case G.Uint8Array:
      return "Expected Uint8Array";
    case G.Undefined:
      return "Expected undefined";
    case G.Union:
      return "Expected union value";
    case G.Void:
      return "Expected void";
    case G.Kind:
      return `Expected kind '${$.schema[H]}'`;
    default:
      return "Unknown error type";
  }
};
var nX = function() {
  return XQ;
};
var a = function($, X) {
  const J = X.findIndex((Y) => Y.$id === $.$ref);
  if (J === -1)
    throw new hY($);
  return X[J];
};
function* WQ($) {
  const X = $ === 0 ? 1 : Math.ceil(Math.floor(Math.log2($) + 1) / 8);
  for (let J = 0;J < X; J++)
    yield $ >> 8 * (X - 1 - J) & 255;
}
var Q8 = function($) {
  return w$ = BigInt("14695981039346656037"), M$($), w$;
};
function* NQ($, X, J, Y) {
}
function* OQ($, X, J, Y) {
  if (!f(Y))
    return yield R(G.Array, $, J, Y);
  if (c($.minItems) && !(Y.length >= $.minItems))
    yield R(G.ArrayMinItems, $, J, Y);
  if (c($.maxItems) && !(Y.length <= $.maxItems))
    yield R(G.ArrayMaxItems, $, J, Y);
  for (let Q = 0;Q < Y.length; Q++)
    yield* v0($.items, X, `${J}/${Q}`, Y[Q]);
  if ($.uniqueItems === true && !function() {
    const Q = new Set;
    for (let z of Y) {
      const q = Q8(z);
      if (Q.has(q))
        return false;
      else
        Q.add(q);
    }
    return true;
  }())
    yield R(G.ArrayUniqueItems, $, J, Y);
  if (!(c($.contains) || c($.minContains) || c($.maxContains)))
    return;
  const Z = c($.contains) ? $.contains : e(), W = Y.reduce((Q, z, q) => v0(Z, X, `${J}${q}`, z).next().done === true ? Q + 1 : Q, 0);
  if (W === 0)
    yield R(G.ArrayContains, $, J, Y);
  if (k($.minContains) && W < $.minContains)
    yield R(G.ArrayMinContains, $, J, Y);
  if (k($.maxContains) && W > $.maxContains)
    yield R(G.ArrayMaxContains, $, J, Y);
}
function* SQ($, X, J, Y) {
  if (!y$(Y))
    yield R(G.AsyncIterator, $, J, Y);
}
function* _Q($, X, J, Y) {
  if (!k0(Y))
    return yield R(G.BigInt, $, J, Y);
  if (c($.exclusiveMaximum) && !(Y < $.exclusiveMaximum))
    yield R(G.BigIntExclusiveMaximum, $, J, Y);
  if (c($.exclusiveMinimum) && !(Y > $.exclusiveMinimum))
    yield R(G.BigIntExclusiveMinimum, $, J, Y);
  if (c($.maximum) && !(Y <= $.maximum))
    yield R(G.BigIntMaximum, $, J, Y);
  if (c($.minimum) && !(Y >= $.minimum))
    yield R(G.BigIntMinimum, $, J, Y);
  if (c($.multipleOf) && Y % $.multipleOf !== BigInt(0))
    yield R(G.BigIntMultipleOf, $, J, Y);
}
function* PQ($, X, J, Y) {
  if (!E1(Y))
    yield R(G.Boolean, $, J, Y);
}
function* LQ($, X, J, Y) {
  yield* v0($.returns, X, J, Y.prototype);
}
function* CQ($, X, J, Y) {
  if (!a0(Y))
    return yield R(G.Date, $, J, Y);
  if (c($.exclusiveMaximumTimestamp) && !(Y.getTime() < $.exclusiveMaximumTimestamp))
    yield R(G.DateExclusiveMaximumTimestamp, $, J, Y);
  if (c($.exclusiveMinimumTimestamp) && !(Y.getTime() > $.exclusiveMinimumTimestamp))
    yield R(G.DateExclusiveMinimumTimestamp, $, J, Y);
  if (c($.maximumTimestamp) && !(Y.getTime() <= $.maximumTimestamp))
    yield R(G.DateMaximumTimestamp, $, J, Y);
  if (c($.minimumTimestamp) && !(Y.getTime() >= $.minimumTimestamp))
    yield R(G.DateMinimumTimestamp, $, J, Y);
  if (c($.multipleOfTimestamp) && Y.getTime() % $.multipleOfTimestamp !== 0)
    yield R(G.DateMultipleOfTimestamp, $, J, Y);
}
function* FQ($, X, J, Y) {
  if (!o8(Y))
    yield R(G.Function, $, J, Y);
}
function* bQ($, X, J, Y) {
  if (!p$(Y))
    return yield R(G.Integer, $, J, Y);
  if (c($.exclusiveMaximum) && !(Y < $.exclusiveMaximum))
    yield R(G.IntegerExclusiveMaximum, $, J, Y);
  if (c($.exclusiveMinimum) && !(Y > $.exclusiveMinimum))
    yield R(G.IntegerExclusiveMinimum, $, J, Y);
  if (c($.maximum) && !(Y <= $.maximum))
    yield R(G.IntegerMaximum, $, J, Y);
  if (c($.minimum) && !(Y >= $.minimum))
    yield R(G.IntegerMinimum, $, J, Y);
  if (c($.multipleOf) && Y % $.multipleOf !== 0)
    yield R(G.IntegerMultipleOf, $, J, Y);
}
function* RQ($, X, J, Y) {
  for (let Z of $.allOf) {
    const W = v0(Z, X, J, Y).next();
    if (!W.done)
      yield R(G.Intersect, $, J, Y), yield W.value;
  }
  if ($.unevaluatedProperties === false) {
    const Z = new RegExp(u1($));
    for (let W of Object.getOwnPropertyNames(Y))
      if (!Z.test(W))
        yield R(G.IntersectUnevaluatedProperties, $, `${J}/${W}`, Y);
  }
  if (typeof $.unevaluatedProperties === "object") {
    const Z = new RegExp(u1($));
    for (let W of Object.getOwnPropertyNames(Y))
      if (!Z.test(W)) {
        const Q = v0($.unevaluatedProperties, X, `${J}/${W}`, Y[W]).next();
        if (!Q.done)
          yield Q.value;
      }
  }
}
function* jQ($, X, J, Y) {
  if (!d$(Y))
    yield R(G.Iterator, $, J, Y);
}
function* KQ($, X, J, Y) {
  if (Y !== $.const)
    yield R(G.Literal, $, J, Y);
}
function* VQ($, X, J, Y) {
  yield R(G.Never, $, J, Y);
}
function* EQ($, X, J, Y) {
  if (v0($.not, X, J, Y).next().done === true)
    yield R(G.Not, $, J, Y);
}
function* IQ($, X, J, Y) {
  if (!d1(Y))
    yield R(G.Null, $, J, Y);
}
function* xQ($, X, J, Y) {
  if (!S0.IsNumberLike(Y))
    return yield R(G.Number, $, J, Y);
  if (c($.exclusiveMaximum) && !(Y < $.exclusiveMaximum))
    yield R(G.NumberExclusiveMaximum, $, J, Y);
  if (c($.exclusiveMinimum) && !(Y > $.exclusiveMinimum))
    yield R(G.NumberExclusiveMinimum, $, J, Y);
  if (c($.maximum) && !(Y <= $.maximum))
    yield R(G.NumberMaximum, $, J, Y);
  if (c($.minimum) && !(Y >= $.minimum))
    yield R(G.NumberMinimum, $, J, Y);
  if (c($.multipleOf) && Y % $.multipleOf !== 0)
    yield R(G.NumberMultipleOf, $, J, Y);
}
function* kQ($, X, J, Y) {
  if (!S0.IsObjectLike(Y))
    return yield R(G.Object, $, J, Y);
  if (c($.minProperties) && !(Object.getOwnPropertyNames(Y).length >= $.minProperties))
    yield R(G.ObjectMinProperties, $, J, Y);
  if (c($.maxProperties) && !(Object.getOwnPropertyNames(Y).length <= $.maxProperties))
    yield R(G.ObjectMaxProperties, $, J, Y);
  const Z = Array.isArray($.required) ? $.required : [], W = Object.getOwnPropertyNames($.properties), Q = Object.getOwnPropertyNames(Y);
  for (let z of Z) {
    if (Q.includes(z))
      continue;
    yield R(G.ObjectRequiredProperty, $.properties[z], `${J}/${z8(z)}`, undefined);
  }
  if ($.additionalProperties === false) {
    for (let z of Q)
      if (!W.includes(z))
        yield R(G.ObjectAdditionalProperties, $, `${J}/${z8(z)}`, Y[z]);
  }
  if (typeof $.additionalProperties === "object")
    for (let z of Q) {
      if (W.includes(z))
        continue;
      yield* v0($.additionalProperties, X, `${J}/${z8(z)}`, Y[z]);
    }
  for (let z of W) {
    const q = $.properties[z];
    if ($.required && $.required.includes(z)) {
      if (yield* v0(q, X, `${J}/${z8(z)}`, Y[z]), c1($) && !(z in Y))
        yield R(G.ObjectRequiredProperty, q, `${J}/${z8(z)}`, undefined);
    } else if (S0.IsExactOptionalProperty(Y, z))
      yield* v0(q, X, `${J}/${z8(z)}`, Y[z]);
  }
}
function* gQ($, X, J, Y) {
  if (!v$(Y))
    yield R(G.Promise, $, J, Y);
}
function* TQ($, X, J, Y) {
  if (!S0.IsRecordLike(Y))
    return yield R(G.Object, $, J, Y);
  if (c($.minProperties) && !(Object.getOwnPropertyNames(Y).length >= $.minProperties))
    yield R(G.ObjectMinProperties, $, J, Y);
  if (c($.maxProperties) && !(Object.getOwnPropertyNames(Y).length <= $.maxProperties))
    yield R(G.ObjectMaxProperties, $, J, Y);
  const [Z, W] = Object.entries($.patternProperties)[0], Q = new RegExp(Z);
  for (let [z, q] of Object.entries(Y))
    if (Q.test(z))
      yield* v0(W, X, `${J}/${z8(z)}`, q);
  if (typeof $.additionalProperties === "object") {
    for (let [z, q] of Object.entries(Y))
      if (!Q.test(z))
        yield* v0($.additionalProperties, X, `${J}/${z8(z)}`, q);
  }
  if ($.additionalProperties === false)
    for (let [z, q] of Object.entries(Y)) {
      if (Q.test(z))
        continue;
      return yield R(G.ObjectAdditionalProperties, $, `${J}/${z8(z)}`, q);
    }
}
function* fQ($, X, J, Y) {
  yield* v0(a($, X), X, J, Y);
}
function* yQ($, X, J, Y) {
  if (!new RegExp($.source, $.flags).test(Y))
    return yield R(G.RegExp, $, J, Y);
}
function* dQ($, X, J, Y) {
  if (!p(Y))
    return yield R(G.String, $, J, Y);
  if (c($.minLength) && !(Y.length >= $.minLength))
    yield R(G.StringMinLength, $, J, Y);
  if (c($.maxLength) && !(Y.length <= $.maxLength))
    yield R(G.StringMaxLength, $, J, Y);
  if (p($.pattern)) {
    if (!new RegExp($.pattern).test(Y))
      yield R(G.StringPattern, $, J, Y);
  }
  if (p($.format)) {
    if (!g0.Has($.format))
      yield R(G.StringFormatUnknown, $, J, Y);
    else if (!g0.Get($.format)(Y))
      yield R(G.StringFormat, $, J, Y);
  }
}
function* vQ($, X, J, Y) {
  if (!l0(Y))
    yield R(G.Symbol, $, J, Y);
}
function* pQ($, X, J, Y) {
  if (!p(Y))
    return yield R(G.String, $, J, Y);
  if (!new RegExp($.pattern).test(Y))
    yield R(G.StringPattern, $, J, Y);
}
function* hQ($, X, J, Y) {
  yield* v0(a($, X), X, J, Y);
}
function* mQ($, X, J, Y) {
  if (!f(Y))
    return yield R(G.Tuple, $, J, Y);
  if ($.items === undefined && Y.length !== 0)
    return yield R(G.TupleLength, $, J, Y);
  if (Y.length !== $.maxItems)
    return yield R(G.TupleLength, $, J, Y);
  if (!$.items)
    return;
  for (let Z = 0;Z < $.items.length; Z++)
    yield* v0($.items[Z], X, `${J}/${Z}`, Y[Z]);
}
function* iQ($, X, J, Y) {
  if (!z0(Y))
    yield R(G.Undefined, $, J, Y);
}
function* uQ($, X, J, Y) {
  let Z = 0;
  for (let W of $.anyOf) {
    const Q = [...v0(W, X, J, Y)];
    if (Q.length === 0)
      return;
    Z += Q.length;
  }
  if (Z > 0)
    yield R(G.Union, $, J, Y);
}
function* cQ($, X, J, Y) {
  if (!K8(Y))
    return yield R(G.Uint8Array, $, J, Y);
  if (c($.maxByteLength) && !(Y.length <= $.maxByteLength))
    yield R(G.Uint8ArrayMaxByteLength, $, J, Y);
  if (c($.minByteLength) && !(Y.length >= $.minByteLength))
    yield R(G.Uint8ArrayMinByteLength, $, J, Y);
}
function* oQ($, X, J, Y) {
}
function* nQ($, X, J, Y) {
  if (!S0.IsVoidLike(Y))
    yield R(G.Void, $, J, Y);
}
function* lQ($, X, J, Y) {
  if (!V0.Get($[H])($, Y))
    yield R(G.Kind, $, J, Y);
}
function* v0($, X, J, Y) {
  const Z = c($.$id) ? [...X, $] : X, W = $;
  switch (W[H]) {
    case "Any":
      return yield* NQ(W, Z, J, Y);
    case "Array":
      return yield* OQ(W, Z, J, Y);
    case "AsyncIterator":
      return yield* SQ(W, Z, J, Y);
    case "BigInt":
      return yield* _Q(W, Z, J, Y);
    case "Boolean":
      return yield* PQ(W, Z, J, Y);
    case "Constructor":
      return yield* LQ(W, Z, J, Y);
    case "Date":
      return yield* CQ(W, Z, J, Y);
    case "Function":
      return yield* FQ(W, Z, J, Y);
    case "Integer":
      return yield* bQ(W, Z, J, Y);
    case "Intersect":
      return yield* RQ(W, Z, J, Y);
    case "Iterator":
      return yield* jQ(W, Z, J, Y);
    case "Literal":
      return yield* KQ(W, Z, J, Y);
    case "Never":
      return yield* VQ(W, Z, J, Y);
    case "Not":
      return yield* EQ(W, Z, J, Y);
    case "Null":
      return yield* IQ(W, Z, J, Y);
    case "Number":
      return yield* xQ(W, Z, J, Y);
    case "Object":
      return yield* kQ(W, Z, J, Y);
    case "Promise":
      return yield* gQ(W, Z, J, Y);
    case "Record":
      return yield* TQ(W, Z, J, Y);
    case "Ref":
      return yield* fQ(W, Z, J, Y);
    case "RegExp":
      return yield* yQ(W, Z, J, Y);
    case "String":
      return yield* dQ(W, Z, J, Y);
    case "Symbol":
      return yield* vQ(W, Z, J, Y);
    case "TemplateLiteral":
      return yield* pQ(W, Z, J, Y);
    case "This":
      return yield* hQ(W, Z, J, Y);
    case "Tuple":
      return yield* mQ(W, Z, J, Y);
    case "Undefined":
      return yield* iQ(W, Z, J, Y);
    case "Union":
      return yield* uQ(W, Z, J, Y);
    case "Uint8Array":
      return yield* cQ(W, Z, J, Y);
    case "Unknown":
      return yield* oQ(W, Z, J, Y);
    case "Void":
      return yield* nQ(W, Z, J, Y);
    default:
      if (!V0.Has(W[H]))
        throw new tX($);
      return yield* lQ(W, Z, J, Y);
  }
}
var U$ = function(...$) {
  const X = $.length === 3 ? v0($[0], $[1], "", $[2]) : v0($[0], [], "", $[1]);
  return new s$(X);
};
var o1 = function($ = {}) {
  return { ...$, [H]: "Any" };
};
var x1 = function($ = {}) {
  return { ...$, [H]: "Unknown" };
};
var q8 = function($, X) {
  return J0($, X);
};
var YZ = function($, X, J, Y, Z) {
  const W = T7($, X, J, Y, Z);
  return m(W);
};
var P8 = function($, X, J, Y, Z = {}) {
  return Z0($) ? YZ($, X, J, Y, Z) : Y1($) ? C(ZZ($, X, J, Y, Z)) : C(f7($, X, J, Y), Z);
};
var ZZ = function($, X, J, Y, Z) {
  const W = v7($, X, J, Y, Z);
  return m(W);
};
var t = function(...$) {
  return $.length === 3 ? p0($[0], $[1], $[2]) : p0($[0], [], $[1]);
};
var q1 = function(...$) {
  return QZ = 0, $.length === 2 ? H1($[0], $[1]) : H1($[0], []);
};
var M0 = function($) {
  if (f($))
    return e5($);
  if (a0($))
    return X9($);
  if (Y0($))
    return a5($);
  if (w1($))
    return $9($);
  if (e0($))
    return J9($);
  throw new Error("ValueClone: Unable to clone value");
};
var r$ = function(...$) {
  return $.length === 3 ? n1($[0], $[1], $[2]) : n1($[0], [], $[1]);
};
var I6 = function(...$) {
  return $.length === 3 ? D1($[0], $[1], $[2]) : D1($[0], [], $[1]);
};
var H$ = function($, X) {
  return C(j9($), X);
};
var k6 = function(...$) {
  return $.length === 3 ? k1($[0], $[1], $[2]) : k1($[0], [], $[1]);
};
var T6 = function(...$) {
  return $.length === 3 ? R1($[0], $[1], $[2]) : R1($[0], [], $[1]);
};
function* $6($) {
  if ($ === "")
    return;
  let [X, J] = [0, 0];
  for (let Y = 0;Y < $.length; Y++)
    if ($.charAt(Y) === "/")
      if (Y === 0)
        X = Y + 1;
      else
        J = Y, yield wZ($.slice(X, J)), X = Y + 1;
    else
      J = Y;
  yield wZ($.slice(X));
}
var Nz = function($, X, J) {
  if (X === "")
    throw new XJ($, X, J);
  let [Y, Z, W] = [null, $, ""];
  for (let Q of $6(X)) {
    if (Z[Q] === undefined)
      Z[Q] = {};
    Y = Z, Z = Z[Q], W = Q;
  }
  Y[W] = J;
};
var Oz = function($, X) {
  if (X === "")
    throw new JJ($, X);
  let [J, Y, Z] = [null, $, ""];
  for (let W of $6(X)) {
    if (Y[W] === undefined || Y[W] === null)
      return;
    J = Y, Y = Y[W], Z = W;
  }
  if (Array.isArray(J)) {
    const W = parseInt(Z);
    J.splice(W, 1);
  } else
    delete J[Z];
};
var Sz = function($, X) {
  if (X === "")
    return true;
  let [J, Y, Z] = [null, $, ""];
  for (let W of $6(X)) {
    if (Y[W] === undefined)
      return false;
    J = Y, Y = Y[W], Z = W;
  }
  return Object.getOwnPropertyNames(J).includes(Z);
};
var _z = function($, X) {
  if (X === "")
    return $;
  let J = $;
  for (let Y of $6(X)) {
    if (J[Y] === undefined)
      return;
    J = J[Y];
  }
  return J;
};
function* Lz($, X, J) {
  if (!Y0(J))
    return yield J6($, J);
  const Y = [...globalThis.Object.keys(X), ...globalThis.Object.getOwnPropertySymbols(X)], Z = [...globalThis.Object.keys(J), ...globalThis.Object.getOwnPropertySymbols(J)];
  for (let W of Y) {
    if (l0(W))
      throw new X6(W);
    if (z0(J[W]) && Z.includes(W))
      yield J6(`${$}/${globalThis.String(W)}`, undefined);
  }
  for (let W of Z) {
    if (z0(X[W]) || z0(J[W]))
      continue;
    if (l0(W))
      throw new X6(W);
    yield* y6(`${$}/${globalThis.String(W)}`, X[W], J[W]);
  }
  for (let W of Z) {
    if (l0(W))
      throw new X6(W);
    if (z0(X[W]))
      yield HZ(`${$}/${globalThis.String(W)}`, J[W]);
  }
  for (let W of Y.reverse()) {
    if (l0(W))
      throw new X6(W);
    if (z0(J[W]) && !Z.includes(W))
      yield DZ(`${$}/${globalThis.String(W)}`);
  }
}
function* Cz($, X, J) {
  if (!f(J))
    return yield J6($, J);
  for (let Y = 0;Y < Math.min(X.length, J.length); Y++)
    yield* y6(`${$}/${Y}`, X[Y], J[Y]);
  for (let Y = 0;Y < J.length; Y++) {
    if (Y < X.length)
      continue;
    yield HZ(`${$}/${Y}`, J[Y]);
  }
  for (let Y = X.length - 1;Y >= 0; Y--) {
    if (Y < J.length)
      continue;
    yield DZ(`${$}/${Y}`);
  }
}
function* Fz($, X, J) {
  if (!w1(J) || X.length !== J.length || globalThis.Object.getPrototypeOf(X).constructor.name !== globalThis.Object.getPrototypeOf(J).constructor.name)
    return yield J6($, J);
  for (let Y = 0;Y < Math.min(X.length, J.length); Y++)
    yield* y6(`${$}/${Y}`, X[Y], J[Y]);
}
function* bz($, X, J) {
  if (X === J)
    return;
  yield J6($, J);
}
function* y6($, X, J) {
  if (Y0(X))
    return yield* Lz($, X, J);
  if (f(X))
    return yield* Cz($, X, J);
  if (w1(X))
    return yield* Fz($, X, J);
  if (e0(X))
    return yield* bz($, X, J);
  throw new f6(X, "Unable to create diff edits for unknown value");
}
var YJ = function($, X) {
  return [...y6("", $, X)];
};
var ZJ = function($, X) {
  if (Rz(X))
    return M0(X[0].value);
  if (jz(X))
    return M0($);
  const J = M0($);
  for (let Y of X)
    switch (Y.type) {
      case "insert": {
        j1.Set(J, Y.path, Y.value);
        break;
      }
      case "update": {
        j1.Set(J, Y.path, Y.value);
        break;
      }
      case "delete": {
        j1.Delete(J, Y.path);
        break;
      }
    }
  return J;
};
var D$ = function($, X) {
  if (Y0($))
    return Kz($, X);
  if (a0($))
    return Vz($, X);
  if (w1($))
    return Iz($, X);
  if (f($))
    return Ez($, X);
  if (e0($))
    return xz($, X);
  throw new Error("ValueEquals: Unable to compare value");
};
var QJ = function($, X) {
  if (AZ($) || AZ(X))
    throw new d6("Only object and array types can be mutated at the root level");
  if (yz($, X))
    throw new d6("Cannot assign due type mismatch of assignable values");
  WJ($, "", $, X);
};
var Y6 = function($, X, J) {
  return l1($, X, J);
};
var Z6 = function($, X, J) {
  return t1($, X, J);
};
var wJ = function($, X) {
  return BJ.clear(), y0($, X);
};
var A2 = function(...$) {
  return r$.apply(r$, $);
};
var N2 = function(...$) {
  return q1.apply(q1, $);
};
var MJ = function(...$) {
  return t.apply(t, $);
};
var O2 = function(...$) {
  return I6.apply(I6, $);
};
var S2 = function(...$) {
  return k6.apply(k6, $);
};
var _2 = function($) {
  return M0($);
};
var P2 = function(...$) {
  const [X, J, Y] = $.length === 3 ? [$[0], $[1], $[2]] : [$[0], [], $[1]];
  if (!MJ(X, J, Y))
    throw new A$(X, Y, UJ(X, J, Y).First());
  return Y6(X, J, Y);
};
var L2 = function(...$) {
  return T6.apply(T6, $);
};
var C2 = function(...$) {
  const [X, J, Y] = $.length === 3 ? [$[0], $[1], $[2]] : [$[0], [], $[1]], Z = Z6(X, J, Y);
  if (!MJ(X, J, Z))
    throw new N$(X, Y, UJ(X, J, Y).First());
  return Z;
};
var UJ = function(...$) {
  return U$.apply(U$, $);
};
var F2 = function($, X) {
  return D$($, X);
};
var b2 = function($, X) {
  return YJ($, X);
};
var R2 = function($) {
  return Q8($);
};
var j2 = function($, X) {
  return ZJ($, X);
};
var K2 = function($, X) {
  QJ($, X);
};
var v6 = function($, X = {}) {
  return C(GJ($), X);
};
var O$ = function($ = {}) {
  return { ...$, [H]: "Date", type: "Date" };
};
var S$ = function($ = {}) {
  return { ...$, [H]: "Null", type: "null" };
};
var _$ = function($) {
  return { ...$, [H]: "Symbol", type: "symbol" };
};
var P$ = function($ = {}) {
  return { ...$, [H]: "Undefined", type: "undefined" };
};
var L$ = function($ = {}) {
  return { ...$, [H]: "Uint8Array", type: "Uint8Array" };
};
var h6 = function($, X = {}) {
  return _6.CloneType(HJ($, true), X);
};
var m6 = function($, X = {}) {
  return L1(_0($.parameters), { ...X });
};
var o2 = function($, X) {
  return $$($) ? T2($, X) : X$($) ? f2($, X) : N0($) ? y2($, X) : u($) ? d2($, X) : _1($) ? v2($, X) : m1($) ? p2($, X) : O0($) ? h2($, X) : O8($) ? m2($, X) : e8($) ? i2($, X) : J$($) ? u2($, X) : b6($) ? c2($, X) : $;
};
var A1 = function($, X) {
  return o2(C($), _0(X));
};
var i6 = function($, X = {}) {
  if (G0($))
    throw new Error("Enum undefined or empty");
  const J = globalThis.Object.getOwnPropertyNames($).filter((W) => isNaN(W)).map((W) => $[W]), Z = [...new Set(J)].map((W) => n(W));
  return l(Z, { ...X, [S1]: "Enum" });
};
var C$ = function($, X, J = {}) {
  if (Z0($))
    return OZ($, X, J);
  else {
    const Y = DJ($, X);
    return C(Y, J);
  }
};
var OZ = function($, X, J) {
  const Y = l2($, X, J);
  return m(Y);
};
var F$ = function($, X, J = {}) {
  if (Z0($))
    return SZ($, X, J);
  else {
    const Y = AJ($, X);
    return C(Y, J);
  }
};
var SZ = function($, X, J) {
  const Y = s2($, X, J);
  return m(Y);
};
var u6 = function($, X = {}) {
  return C($.returns, X);
};
var c6 = function($ = {}) {
  return { ...$, [H]: "Integer", type: "integer" };
};
var NJ = function($, X, J) {
  const Y = e2($, X, J);
  return m(Y);
};
var K1 = function($, X, J = {}) {
  return Y1($) ? NJ($, X, J) : i0($) ? Z3($, X, $) : u($) ? l(PZ($.anyOf, X), J) : M1($) ? n(_Z($.const, X), J) : $;
};
var o6 = function($, X = {}) {
  return K1($, "Capitalize", X);
};
var n6 = function($, X = {}) {
  return K1($, "Lowercase", X);
};
var l6 = function($, X = {}) {
  return K1($, "Uncapitalize", X);
};
var t6 = function($, X = {}) {
  return K1($, "Uppercase", X);
};
var s6 = function($, X) {
  return { ...X, [H]: "Not", not: C($) };
};
var LZ = function($, X, J) {
  const Y = Q3($, X, J);
  return m(Y);
};
var OJ = function($, X) {
  return N0($) ? T0(z3($.allOf, X)) : u($) ? l(q3($.anyOf, X)) : O0($) ? $0(w3($.properties, X)) : $0({});
};
var C8 = function($, X, J = {}) {
  if (Y1(X))
    return CZ($, X, J);
  if (Z0($))
    return LZ($, X, J);
  const Y = g(X) ? t0(X) : X, Z = A0($, [C0, "$id", "required"]), W = C(OJ($, Y), J);
  return { ...Z, ...W };
};
var CZ = function($, X, J) {
  const Y = G3($, X, J);
  return m(Y);
};
var r6 = function($, X = {}) {
  return L1(_0($.parameters), { ...X });
};
var b$ = function($, X = {}) {
  if (Z0($))
    return SJ($, X);
  const J = A0($, [C0, "$id", "required"]), Y = C(bZ($), X);
  return { ...J, ...Y };
};
var SJ = function($, X) {
  const J = A3($, X);
  return m(J);
};
var RZ = function($, X, J) {
  const Y = O3($, X, J);
  return m(Y);
};
var _J = function($, X) {
  return N0($) ? T0(S3($.allOf, X)) : u($) ? l(_3($.anyOf, X)) : O0($) ? $0(P3($.properties, X)) : $0({});
};
var F8 = function($, X, J = {}) {
  if (Y1(X))
    return jZ($, X, J);
  if (Z0($))
    return RZ($, X, J);
  const Y = g(X) ? t0(X) : X, Z = A0($, [C0, "$id", "required"]), W = C(_J($, Y), J);
  return { ...Z, ...W };
};
var jZ = function($, X, J) {
  const Y = F3($, X, J);
  return m(Y);
};
var a6 = function($) {
  return Q1(u0($));
};
var e6 = function($, X, J = {}) {
  return u($) ? R3($.anyOf, X, J) : i0($) ? b3($, X, J) : M1($) ? j3($.const, X, J) : A8($) ? E3($, X, J) : N8($) ? I3($, X, J) : R6($) ? K3($, X, J) : Y$($) ? V3($, X, J) : e(J);
};
var $X = function($, X = {}) {
  if (G0(X.$id))
    X.$id = `T${x3++}`;
  const J = $({ [H]: "This", $ref: `${X.$id}` });
  return J.$id = X.$id, C({ ...X, [S1]: "Recursive", ...J });
};
var XX = function($, X = {}) {
  if (w0($))
    return { ...X, [H]: "Ref", $ref: $ };
  if (G0($.$id))
    throw new Error("Reference target type must specify an $id");
  return { ...X, [H]: "Ref", $ref: $.$id };
};
var JX = function($, X = {}) {
  const J = w0($) ? new globalThis.RegExp($) : $;
  return { ...X, [H]: "RegExp", type: "RegExp", source: J.source, flags: J.flags };
};
var R$ = function($, X = {}) {
  if (Z0($))
    return EZ($, X);
  else {
    const J = A0($, [C0, "$id", "required"]), Y = C(VZ($), X);
    return { ...J, ...Y };
  }
};
var EZ = function($, X) {
  const J = T3($, X);
  return m(J);
};
var YX = function($) {
  return _0(f3($));
};
var ZX = function($, X = {}) {
  return C($.returns, X);
};
var WX = function($) {
  return JSON.parse(JSON.stringify($));
};
var QX = function($) {
  return new LJ($);
};
var zX = function($ = {}) {
  return { ...$, [H]: "Void", type: "void" };
};
var M4 = Object.create;
var { defineProperty: _X, getPrototypeOf: U4, getOwnPropertyNames: G4 } = Object;
var H4 = Object.prototype.hasOwnProperty;
var A6 = ($, X, J) => {
  J = $ != null ? M4(U4($)) : {};
  const Y = X || !$ || !$.__esModule ? _X(J, "default", { value: $, enumerable: true }) : J;
  for (let Z of G4($))
    if (!H4.call(Y, Z))
      _X(Y, Z, { get: () => $[Z], enumerable: true });
  return Y;
};
var u8 = ($, X) => () => (X || $((X = { exports: {} }).exports, X), X.exports);
var G8 = ($, X) => {
  for (var J in X)
    _X($, J, { get: X[J], enumerable: true, configurable: true, set: (Y) => X[J] = () => Y });
};
var aJ = u8((wq, LX) => {
  var f$ = function() {
  }, A4 = function($, X, J) {
    this.fn = $, this.context = X, this.once = J || false;
  }, rJ = function($, X, J, Y, Z) {
    if (typeof J !== "function")
      throw new TypeError("The listener must be a function");
    var W = new A4(J, Y || $, Z), Q = n0 ? n0 + X : X;
    if (!$._events[Q])
      $._events[Q] = W, $._eventsCount++;
    else if (!$._events[Q].fn)
      $._events[Q].push(W);
    else
      $._events[Q] = [$._events[Q], W];
    return $;
  }, N6 = function($, X) {
    if (--$._eventsCount === 0)
      $._events = new f$;
    else
      delete $._events[X];
  }, m0 = function() {
    this._events = new f$, this._eventsCount = 0;
  }, D4 = Object.prototype.hasOwnProperty, n0 = "~";
  if (Object.create) {
    if (f$.prototype = Object.create(null), !new f$().__proto__)
      n0 = false;
  }
  m0.prototype.eventNames = function $() {
    var X = [], J, Y;
    if (this._eventsCount === 0)
      return X;
    for (Y in J = this._events)
      if (D4.call(J, Y))
        X.push(n0 ? Y.slice(1) : Y);
    if (Object.getOwnPropertySymbols)
      return X.concat(Object.getOwnPropertySymbols(J));
    return X;
  };
  m0.prototype.listeners = function $(X) {
    var J = n0 ? n0 + X : X, Y = this._events[J];
    if (!Y)
      return [];
    if (Y.fn)
      return [Y.fn];
    for (var Z = 0, W = Y.length, Q = new Array(W);Z < W; Z++)
      Q[Z] = Y[Z].fn;
    return Q;
  };
  m0.prototype.listenerCount = function $(X) {
    var J = n0 ? n0 + X : X, Y = this._events[J];
    if (!Y)
      return 0;
    if (Y.fn)
      return 1;
    return Y.length;
  };
  m0.prototype.emit = function $(X, J, Y, Z, W, Q) {
    var z = n0 ? n0 + X : X;
    if (!this._events[z])
      return false;
    var q = this._events[z], M = arguments.length, A, O;
    if (q.fn) {
      if (q.once)
        this.removeListener(X, q.fn, undefined, true);
      switch (M) {
        case 1:
          return q.fn.call(q.context), true;
        case 2:
          return q.fn.call(q.context, J), true;
        case 3:
          return q.fn.call(q.context, J, Y), true;
        case 4:
          return q.fn.call(q.context, J, Y, Z), true;
        case 5:
          return q.fn.call(q.context, J, Y, Z, W), true;
        case 6:
          return q.fn.call(q.context, J, Y, Z, W, Q), true;
      }
      for (O = 1, A = new Array(M - 1);O < M; O++)
        A[O - 1] = arguments[O];
      q.fn.apply(q.context, A);
    } else {
      var T = q.length, E;
      for (O = 0;O < T; O++) {
        if (q[O].once)
          this.removeListener(X, q[O].fn, undefined, true);
        switch (M) {
          case 1:
            q[O].fn.call(q[O].context);
            break;
          case 2:
            q[O].fn.call(q[O].context, J);
            break;
          case 3:
            q[O].fn.call(q[O].context, J, Y);
            break;
          case 4:
            q[O].fn.call(q[O].context, J, Y, Z);
            break;
          default:
            if (!A)
              for (E = 1, A = new Array(M - 1);E < M; E++)
                A[E - 1] = arguments[E];
            q[O].fn.apply(q[O].context, A);
        }
      }
    }
    return true;
  };
  m0.prototype.on = function $(X, J, Y) {
    return rJ(this, X, J, Y, false);
  };
  m0.prototype.once = function $(X, J, Y) {
    return rJ(this, X, J, Y, true);
  };
  m0.prototype.removeListener = function $(X, J, Y, Z) {
    var W = n0 ? n0 + X : X;
    if (!this._events[W])
      return this;
    if (!J)
      return N6(this, W), this;
    var Q = this._events[W];
    if (Q.fn) {
      if (Q.fn === J && (!Z || Q.once) && (!Y || Q.context === Y))
        N6(this, W);
    } else {
      for (var z = 0, q = [], M = Q.length;z < M; z++)
        if (Q[z].fn !== J || Z && !Q[z].once || Y && Q[z].context !== Y)
          q.push(Q[z]);
      if (q.length)
        this._events[W] = q.length === 1 ? q[0] : q;
      else
        N6(this, W);
    }
    return this;
  };
  m0.prototype.removeAllListeners = function $(X) {
    var J;
    if (X) {
      if (J = n0 ? n0 + X : X, this._events[J])
        N6(this, J);
    } else
      this._events = new f$, this._eventsCount = 0;
    return this;
  };
  m0.prototype.off = m0.prototype.removeListener;
  m0.prototype.addListener = m0.prototype.on;
  m0.prefixed = n0;
  m0.EventEmitter = m0;
  if (typeof LX !== "undefined")
    LX.exports = m0;
});
var vJ = u8((nR, hZ) => {
  var s3 = function($) {
    var X = $.indexOf("%");
    if (X === -1)
      return $;
    var J = $.length, Y = "", Z = 0, W = 0, Q = X, z = vZ;
    while (X > -1 && X < J) {
      var q = pZ($[X + 1], 4), M = pZ($[X + 2], 0), A = q | M, O = dJ[A];
      if (z = dJ[256 + z + O], W = W << 6 | A & dJ[364 + O], z === vZ)
        Y += $.slice(Z, Q), Y += W <= 65535 ? String.fromCharCode(W) : String.fromCharCode(55232 + (W >> 10), 56320 + (W & 1023)), W = 0, Z = X + 3, X = Q = $.indexOf("%", Z);
      else if (z === t3)
        return null;
      else {
        if (X += 3, X < J && $.charCodeAt(X) === 37)
          continue;
        return null;
      }
    }
    return Y + $.slice(Z);
  }, pZ = function($, X) {
    var J = r3[$];
    return J === undefined ? 255 : J << X;
  }, vZ = 12, t3 = 0, dJ = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 10, 9, 9, 9, 11, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 24, 36, 48, 60, 72, 84, 96, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 63, 63, 63, 0, 31, 15, 15, 15, 7, 7, 7], r3 = { "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
  hZ.exports = s3;
});
var oZ = u8((lR, cZ) => {
  var a3 = function($) {
    const X = new uZ;
    if (typeof $ !== "string")
      return X;
    let J = $.length, Y = "", Z = "", W = -1, Q = -1, z = false, q = false, M = false, A = false, O = false, T = 0;
    for (let E = 0;E < J + 1; E++)
      if (T = E !== J ? $.charCodeAt(E) : 38, T === 38) {
        if (O = Q > W, !O)
          Q = E;
        if (Y = $.slice(W + 1, Q), O || Y.length > 0) {
          if (M)
            Y = Y.replace(iZ, " ");
          if (z)
            Y = mZ(Y) || Y;
          if (O) {
            if (Z = $.slice(Q + 1, E), A)
              Z = Z.replace(iZ, " ");
            if (q)
              Z = mZ(Z) || Z;
          }
          const _ = X[Y];
          if (_ === undefined)
            X[Y] = Z;
          else if (_.pop)
            _.push(Z);
          else
            X[Y] = [_, Z];
        }
        Z = "", W = E, Q = E, z = false, q = false, M = false, A = false;
      } else if (T === 61)
        if (Q <= W)
          Q = E;
        else
          q = true;
      else if (T === 43)
        if (Q > W)
          A = true;
        else
          M = true;
      else if (T === 37)
        if (Q > W)
          q = true;
        else
          z = true;
    return X;
  }, mZ = vJ(), iZ = /\+/g, uZ = function() {
  };
  uZ.prototype = Object.create(null);
  cZ.exports = a3;
});
var lZ = u8((tR, nZ) => {
  var $q = function($) {
    const X = $.length;
    if (X === 0)
      return "";
    let J = "", Y = 0, Z = 0;
    $:
      for (;Z < X; Z++) {
        let W = $.charCodeAt(Z);
        while (W < 128) {
          if (e3[W] !== 1) {
            if (Y < Z)
              J += $.slice(Y, Z);
            Y = Z + 1, J += $8[W];
          }
          if (++Z === X)
            break $;
          W = $.charCodeAt(Z);
        }
        if (Y < Z)
          J += $.slice(Y, Z);
        if (W < 2048) {
          Y = Z + 1, J += $8[192 | W >> 6] + $8[128 | W & 63];
          continue;
        }
        if (W < 55296 || W >= 57344) {
          Y = Z + 1, J += $8[224 | W >> 12] + $8[128 | W >> 6 & 63] + $8[128 | W & 63];
          continue;
        }
        if (++Z, Z >= X)
          throw new Error("URI malformed");
        const Q = $.charCodeAt(Z) & 1023;
        Y = Z + 1, W = 65536 + ((W & 1023) << 10 | Q), J += $8[240 | W >> 18] + $8[128 | W >> 12 & 63] + $8[128 | W >> 6 & 63] + $8[128 | W & 63];
      }
    if (Y === 0)
      return $;
    if (Y < X)
      return J + $.slice(Y);
    return J;
  }, $8 = Array.from({ length: 256 }, ($, X) => "%" + ((X < 16 ? "0" : "") + X.toString(16)).toUpperCase()), e3 = new Int8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0]);
  nZ.exports = { encodeString: $q };
});
var rZ = u8((sR, sZ) => {
  var tZ = function($) {
    const X = typeof $;
    if (X === "string")
      return pJ($);
    else if (X === "bigint")
      return $.toString();
    else if (X === "boolean")
      return $ ? "true" : "false";
    else if (X === "number" && Number.isFinite($))
      return $ < 1000000000000000000000 ? "" + $ : pJ("" + $);
    return "";
  }, Xq = function($) {
    let X = "";
    if ($ === null || typeof $ !== "object")
      return X;
    const J = "&", Y = Object.keys($), Z = Y.length;
    let W = 0;
    for (let Q = 0;Q < Z; Q++) {
      const z = Y[Q], q = $[z], M = pJ(z) + "=";
      if (Q)
        X += J;
      if (Array.isArray(q)) {
        W = q.length;
        for (let A = 0;A < W; A++) {
          if (A)
            X += J;
          X += M, X += tZ(q[A]);
        }
      } else
        X += M, X += tZ(q);
    }
    return X;
  }, { encodeString: pJ } = lZ();
  sZ.exports = Xq;
});
var hJ = u8((rR, U6) => {
  var aZ = oZ(), eZ = rZ(), $4 = { parse: aZ, stringify: eZ };
  U6.exports = $4;
  U6.exports.default = $4;
  U6.exports.parse = aZ;
  U6.exports.stringify = eZ;
});
var c8 = ($, X) => ({ part: $, store: null, inert: X !== undefined ? new Map(X.map((J) => [J.part.charCodeAt(0), J])) : null, params: null, wildcardStore: null });
var tJ = ($, X) => ({ ...$, part: X });
var sJ = ($) => ({ paramName: $, store: null, inert: null });

class j8 {
  root = {};
  history = [];
  static regex = { static: /:.+?(?=\/|$)/, params: /:.+?(?=\/|$)/g };
  add($, X, J) {
    let Y;
    if (typeof X != "string")
      throw TypeError("Route path must be a string");
    X === "" ? X = "/" : X[0] !== "/" && (X = `/${X}`), this.history.push([$, X, J]);
    let Z = X[X.length - 1] === "*";
    Z && (X = X.slice(0, -1));
    let W = X.split(j8.regex.static), Q = X.match(j8.regex.params) || [];
    W[W.length - 1] === "" && W.pop(), Y = this.root[$] ? this.root[$] : this.root[$] = c8("/");
    let z = 0;
    for (let q = 0;q < W.length; ++q) {
      let M = W[q];
      if (q > 0) {
        let A = Q[z++].slice(1);
        if (Y.params === null)
          Y.params = sJ(A);
        else if (Y.params.paramName !== A)
          throw Error(`Cannot create route "${X}" with parameter "${A}" because a route already exists with a different parameter name ("${Y.params.paramName}") in the same location`);
        let O = Y.params;
        if (O.inert === null) {
          Y = O.inert = c8(M);
          continue;
        }
        Y = O.inert;
      }
      for (let A = 0;; ) {
        if (A === M.length) {
          if (A < Y.part.length) {
            let O = tJ(Y, Y.part.slice(A));
            Object.assign(Y, c8(M, [O]));
          }
          break;
        }
        if (A === Y.part.length) {
          if (Y.inert === null)
            Y.inert = new Map;
          else if (Y.inert.has(M.charCodeAt(A))) {
            Y = Y.inert.get(M.charCodeAt(A)), M = M.slice(A), A = 0;
            continue;
          }
          let O = c8(M.slice(A));
          Y.inert.set(M.charCodeAt(A), O), Y = O;
          break;
        }
        if (M[A] !== Y.part[A]) {
          let O = tJ(Y, Y.part.slice(A)), T = c8(M.slice(A));
          Object.assign(Y, c8(Y.part.slice(0, A), [O, T])), Y = T;
          break;
        }
        ++A;
      }
    }
    if (z < Q.length) {
      let q = Q[z], M = q.slice(1);
      if (Y.params === null)
        Y.params = sJ(M);
      else if (Y.params.paramName !== M)
        throw Error(`Cannot create route "${X}" with parameter "${M}" because a route already exists with a different parameter name ("${Y.params.paramName}") in the same location`);
      return Y.params.store === null && (Y.params.store = J), Y.params.store;
    }
    return Z ? (Y.wildcardStore === null && (Y.wildcardStore = J), Y.wildcardStore) : (Y.store === null && (Y.store = J), Y.store);
  }
  find($, X) {
    let J = this.root[$];
    return J ? PX(X, X.length, J, 0) : null;
  }
}
var PX = ($, X, J, Y) => {
  let Z = J?.part, W = Y + Z.length;
  if (Z.length > 1) {
    if (W > X)
      return null;
    if (Z.length < 15) {
      for (let Q = 1, z = Y + 1;Q < Z.length; ++Q, ++z)
        if (Z.charCodeAt(Q) !== $.charCodeAt(z))
          return null;
    } else if ($.substring(Y, W) !== Z)
      return null;
  }
  if (W === X)
    return J.store !== null ? { store: J.store, params: {} } : J.wildcardStore !== null ? { store: J.wildcardStore, params: { "*": "" } } : null;
  if (J.inert !== null) {
    let Q = J.inert.get($.charCodeAt(W));
    if (Q !== undefined) {
      let z = PX($, X, Q, W);
      if (z !== null)
        return z;
    }
  }
  if (J.params !== null) {
    let Q = J.params, z = $.indexOf("/", W);
    if (z !== W) {
      if (z === -1 || z >= X) {
        if (Q.store !== null) {
          let q = {};
          return q[Q.paramName] = $.substring(W, X), { store: Q.store, params: q };
        }
      } else if (Q.inert !== null) {
        let q = PX($, X, Q.inert, z);
        if (q !== null)
          return q.params[Q.paramName] = $.substring(W, z), q;
      }
    }
  }
  return J.wildcardStore !== null ? { store: J.wildcardStore, params: { "*": $.substring(W, X) } } : null;
};
var eJ = A6(aJ(), 1);
var $Y = eJ.default;
var O6 = () => {
  let $;
  return [new Promise((J) => {
    $ = J;
  }), $];
};
var H8 = () => {
  const [$, X] = O6(), [J, Y] = O6(), Z = [], W = [];
  return { signal: $, consume: (Q) => {
    switch (Q.type) {
      case "begin":
        if (Q.unit && Z.length === 0)
          for (let z = 0;z < Q.unit; z++) {
            const [q, M] = O6(), [A, O] = O6();
            Z.push(q), W.push([(T) => {
              M({ children: [], end: A, name: T.name ?? "", skip: false, time: T.time });
            }, (T) => {
              O(T);
            }]);
          }
        X({ children: Z, end: J, name: Q.name ?? "", skip: false, time: Q.time });
        break;
      case "end":
        Y(Q.time);
        break;
    }
  }, consumeChild(Q) {
    switch (Q.type) {
      case "begin":
        if (!W[0])
          return;
        const [z] = W[0];
        z({ children: [], end: J, name: Q.name ?? "", skip: false, time: Q.time });
        break;
      case "end":
        const q = W.shift();
        if (!q)
          return;
        q[1](Q.time);
    }
  }, resolve() {
    X({ children: [], end: new Promise((Q) => Q(0)), name: "", skip: true, time: 0 });
    for (let [Q, z] of W)
      Q({ children: [], end: new Promise((q) => q(0)), name: "", skip: true, time: 0 }), z(0);
    Y(0);
  } };
};
var XY = ($, X, J) => {
  return async function Y(Y) {
    if (Y.event !== "request" || Y.type !== "begin")
      return;
    const Z = Y.id, W = $(), Q = H8(), z = H8(), q = H8(), M = H8(), A = H8(), O = H8(), T = H8(), E = H8();
    Q.consume(Y);
    const _ = (x) => {
      if (x.id === Z)
        switch (x.event) {
          case "request":
            Q.consume(x);
            break;
          case "request.unit":
            Q.consumeChild(x);
            break;
          case "parse":
            z.consume(x);
            break;
          case "parse.unit":
            z.consumeChild(x);
            break;
          case "transform":
            q.consume(x);
            break;
          case "transform.unit":
            q.consumeChild(x);
            break;
          case "beforeHandle":
            M.consume(x);
            break;
          case "beforeHandle.unit":
            M.consumeChild(x);
            break;
          case "handle":
            A.consume(x);
            break;
          case "afterHandle":
            O.consume(x);
            break;
          case "afterHandle.unit":
            O.consumeChild(x);
            break;
          case "error":
            T.consume(x);
            break;
          case "error.unit":
            T.consumeChild(x);
            break;
          case "response":
            if (x.type === "begin")
              Q.resolve(), z.resolve(), q.resolve(), M.resolve(), A.resolve(), O.resolve(), T.resolve();
            else
              W.off("event", _);
            E.consume(x);
            break;
          case "response.unit":
            E.consumeChild(x);
            break;
          case "exit":
            Q.resolve(), z.resolve(), q.resolve(), M.resolve(), A.resolve(), O.resolve(), T.resolve();
            break;
        }
    };
    W.on("event", _), await J({ id: Z, context: Y.ctx, set: Y.ctx?.set, store: Y.ctx?.store, time: Y.time, request: Q.signal, parse: z.signal, transform: q.signal, beforeHandle: M.signal, handle: A.signal, afterHandle: O.signal, error: T.signal, response: E.signal }), W.emit(`res${Z}.${X}`, undefined);
  };
};
var S0;
(function($) {
  $.ExactOptionalPropertyTypes = false, $.AllowArrayObject = false, $.AllowNaN = false, $.AllowNullVoid = false;
  function X(Q, z) {
    return $.ExactOptionalPropertyTypes ? z in Q : Q[z] !== undefined;
  }
  $.IsExactOptionalProperty = X;
  function J(Q) {
    const z = x0(Q);
    return $.AllowArrayObject ? z : z && !f(Q);
  }
  $.IsObjectLike = J;
  function Y(Q) {
    return J(Q) && !(Q instanceof Date) && !(Q instanceof Uint8Array);
  }
  $.IsRecordLike = Y;
  function Z(Q) {
    const z = k(Q);
    return $.AllowNaN ? z : z && Number.isFinite(Q);
  }
  $.IsNumberLike = Z;
  function W(Q) {
    const z = z0(Q);
    return $.AllowNullVoid ? z || Q === null : z;
  }
  $.IsVoidLike = W;
})(S0 || (S0 = {}));
var g0 = {};
G8(g0, { Set: () => {
  {
    return P4;
  }
}, Has: () => {
  {
    return _4;
  }
}, Get: () => {
  {
    return L4;
  }
}, Entries: () => {
  {
    return N4;
  }
}, Delete: () => {
  {
    return S4;
  }
}, Clear: () => {
  {
    return O4;
  }
} });
var n8 = new Map;
var V0 = {};
G8(V0, { Set: () => {
  {
    return j4;
  }
}, Has: () => {
  {
    return R4;
  }
}, Get: () => {
  {
    return K4;
  }
}, Entries: () => {
  {
    return C4;
  }
}, Delete: () => {
  {
    return b4;
  }
}, Clear: () => {
  {
    return F4;
  }
} });
var l8 = new Map;
var C0 = Symbol.for("TypeBox.Transform");
var D8 = Symbol.for("TypeBox.Readonly");
var $1 = Symbol.for("TypeBox.Optional");
var S1 = Symbol.for("TypeBox.Hint");
var H = Symbol.for("TypeBox.Kind");

class d extends Error {
  constructor($) {
    super($);
  }
}

class CX extends d {
  constructor($) {
    super(`Duplicate type kind '${$}' detected`);
  }
}

class FX extends d {
  constructor($) {
    super(`Duplicate string format '${$}' detected`);
  }
}
var v1;
(function($) {
  function X(Y, Z) {
    if (V0.Has(Y))
      throw new CX(Y);
    return V0.Set(Y, Z), (W = {}) => t8({ ...W, [H]: Y });
  }
  $.Type = X;
  function J(Y, Z) {
    if (g0.Has(Y))
      throw new FX(Y);
    return g0.Set(Y, Z), Y;
  }
  $.Format = J;
})(v1 || (v1 = {}));
var _6 = {};
G8(_6, { CloneType: () => {
  {
    return C;
  }
}, CloneRest: () => {
  {
    return _0;
  }
} });
var J1 = {};
G8(J1, { IsUndefined: () => {
  {
    return G0;
  }
}, IsUint8Array: () => {
  {
    return E8;
  }
}, IsSymbol: () => {
  {
    return EX;
  }
}, IsString: () => {
  {
    return w0;
  }
}, IsRegExp: () => {
  {
    return VX;
  }
}, IsObject: () => {
  {
    return F0;
  }
}, IsNumber: () => {
  {
    return p1;
  }
}, IsNull: () => {
  {
    return KX;
  }
}, IsIterator: () => {
  {
    return jX;
  }
}, IsFunction: () => {
  {
    return RX;
  }
}, IsDate: () => {
  {
    return m$;
  }
}, IsBoolean: () => {
  {
    return V8;
  }
}, IsBigInt: () => {
  {
    return h$;
  }
}, IsAsyncIterator: () => {
  {
    return bX;
  }
}, IsArray: () => {
  {
    return X1;
  }
} });
var V4 = function($) {
  return $.map((X) => S6(X));
};
var E4 = function($) {
  return new Date($.getTime());
};
var I4 = function($) {
  return new Uint8Array($);
};
var x4 = function($) {
  return new RegExp($.source, $.flags);
};
var k4 = function($) {
  const X = Object.getOwnPropertyNames($).reduce((Y, Z) => ({ ...Y, [Z]: S6($[Z]) }), {}), J = Object.getOwnPropertySymbols($).reduce((Y, Z) => ({ ...Y, [Z]: S6($[Z]) }), {});
  return { ...X, ...J };
};
var S6 = function($) {
  return X1($) ? V4($) : m$($) ? E4($) : E8($) ? I4($) : VX($) ? x4($) : F0($) ? k4($) : $;
};
var T4 = function($, X) {
  const { [X]: J, ...Y } = $;
  return Y;
};
var B = {};
G8(B, { TypeGuardUnknownTypeError: () => {
  {
    return YY;
  }
}, IsVoid: () => {
  {
    return _Y;
  }
}, IsUnsafe: () => {
  {
    return SY;
  }
}, IsUnknown: () => {
  {
    return OY;
  }
}, IsUnionLiteral: () => {
  {
    return h4;
  }
}, IsUnion: () => {
  {
    return u;
  }
}, IsUndefined: () => {
  {
    return AY;
  }
}, IsUint8Array: () => {
  {
    return NY;
  }
}, IsTuple: () => {
  {
    return _1;
  }
}, IsTransform: () => {
  {
    return r;
  }
}, IsThis: () => {
  {
    return DY;
  }
}, IsTemplateLiteral: () => {
  {
    return i0;
  }
}, IsSymbol: () => {
  {
    return HY;
  }
}, IsString: () => {
  {
    return Y$;
  }
}, IsSchema: () => {
  {
    return g;
  }
}, IsRegExp: () => {
  {
    return R6;
  }
}, IsRef: () => {
  {
    return b6;
  }
}, IsRecursive: () => {
  {
    return p4;
  }
}, IsRecord: () => {
  {
    return F6;
  }
}, IsReadonly: () => {
  {
    return kX;
  }
}, IsProperties: () => {
  {
    return gX;
  }
}, IsPromise: () => {
  {
    return O8;
  }
}, IsOptional: () => {
  {
    return I1;
  }
}, IsObject: () => {
  {
    return O0;
  }
}, IsNumber: () => {
  {
    return N8;
  }
}, IsNull: () => {
  {
    return GY;
  }
}, IsNot: () => {
  {
    return UY;
  }
}, IsNever: () => {
  {
    return C6;
  }
}, IsMappedResult: () => {
  {
    return Z0;
  }
}, IsMappedKey: () => {
  {
    return Y1;
  }
}, IsLiteralValue: () => {
  {
    return MY;
  }
}, IsLiteralString: () => {
  {
    return BY;
  }
}, IsLiteralNumber: () => {
  {
    return wY;
  }
}, IsLiteralBoolean: () => {
  {
    return v4;
  }
}, IsLiteral: () => {
  {
    return M1;
  }
}, IsKindOf: () => {
  {
    return i;
  }
}, IsKind: () => {
  {
    return PY;
  }
}, IsIterator: () => {
  {
    return J$;
  }
}, IsIntersect: () => {
  {
    return N0;
  }
}, IsInteger: () => {
  {
    return A8;
  }
}, IsFunction: () => {
  {
    return X$;
  }
}, IsDate: () => {
  {
    return qY;
  }
}, IsConstructor: () => {
  {
    return $$;
  }
}, IsBoolean: () => {
  {
    return L6;
  }
}, IsBigInt: () => {
  {
    return P6;
  }
}, IsAsyncIterator: () => {
  {
    return e8;
  }
}, IsArray: () => {
  {
    return m1;
  }
}, IsAny: () => {
  {
    return zY;
  }
} });
var ZY = function($) {
  try {
    return new RegExp($), true;
  } catch {
    return false;
  }
};
var IX = function($) {
  if (!w0($))
    return false;
  for (let X = 0;X < $.length; X++) {
    const J = $.charCodeAt(X);
    if (J >= 7 && J <= 13 || J === 27 || J === 127)
      return false;
  }
  return true;
};
var WY = function($) {
  return xX($) || g($);
};
var i$ = function($) {
  return G0($) || h$($);
};
var q0 = function($) {
  return G0($) || p1($);
};
var xX = function($) {
  return G0($) || V8($);
};
var X0 = function($) {
  return G0($) || w0($);
};
var y4 = function($) {
  return G0($) || w0($) && IX($) && ZY($);
};
var d4 = function($) {
  return G0($) || w0($) && IX($);
};
var QY = function($) {
  return G0($) || g($);
};

class YY extends d {
}
var f4 = ["Any", "Array", "AsyncIterator", "BigInt", "Boolean", "Constructor", "Date", "Enum", "Function", "Integer", "Intersect", "Iterator", "Literal", "MappedKey", "MappedResult", "Not", "Null", "Number", "Object", "Promise", "Record", "Ref", "RegExp", "String", "Symbol", "TemplateLiteral", "This", "Tuple", "Undefined", "Union", "Uint8Array", "Unknown", "Void"];
var m4 = function($) {
  return A0(C($), [$1]);
};
var i4 = function($) {
  return { ...C($), [$1]: "Optional" };
};
var u4 = function($, X) {
  return X === false ? m4($) : i4($);
};
var c4 = function($, X) {
  return globalThis.Object.getOwnPropertyNames($).reduce((J, Y) => {
    return { ...J, [Y]: u0($[Y], X) };
  }, {});
};
var o4 = function($, X) {
  return c4($.properties, X);
};
var n4 = function($) {
  return $.every((X) => I1(X));
};
var l4 = function($) {
  return A0($, [$1]);
};
var LY = function($) {
  return $.map((X) => I1(X) ? l4(X) : X);
};
var t4 = function($, X) {
  return n4($) ? u0(u$(LY($), X)) : u$(LY($), X);
};
var s4 = function($) {
  return $.some((X) => I1(X));
};
var CY = function($) {
  return $.map((X) => I1(X) ? r4(X) : X);
};
var r4 = function($) {
  return A0($, [$1]);
};
var a4 = function($, X) {
  return s4($) ? u0(c$(CY($), X)) : c$(CY($), X);
};
var dX = function($, X, J) {
  return $[X] === J && $.charCodeAt(X - 1) !== 92;
};
var Y8 = function($, X) {
  return dX($, X, "(");
};
var o$ = function($, X) {
  return dX($, X, ")");
};
var FY = function($, X) {
  return dX($, X, "|");
};
var e4 = function($) {
  if (!(Y8($, 0) && o$($, $.length - 1)))
    return false;
  let X = 0;
  for (let J = 0;J < $.length; J++) {
    if (Y8($, J))
      X += 1;
    if (o$($, J))
      X -= 1;
    if (X === 0 && J !== $.length - 1)
      return false;
  }
  return true;
};
var $W = function($) {
  return $.slice(1, $.length - 1);
};
var XW = function($) {
  let X = 0;
  for (let J = 0;J < $.length; J++) {
    if (Y8($, J))
      X += 1;
    if (o$($, J))
      X -= 1;
    if (FY($, J) && X === 0)
      return true;
  }
  return false;
};
var JW = function($) {
  for (let X = 0;X < $.length; X++)
    if (Y8($, X))
      return true;
  return false;
};
var YW = function($) {
  let [X, J] = [0, 0];
  const Y = [];
  for (let W = 0;W < $.length; W++) {
    if (Y8($, W))
      X += 1;
    if (o$($, W))
      X -= 1;
    if (FY($, W) && X === 0) {
      const Q = $.slice(J, W);
      if (Q.length > 0)
        Y.push(I8(Q));
      J = W + 1;
    }
  }
  const Z = $.slice(J);
  if (Z.length > 0)
    Y.push(I8(Z));
  if (Y.length === 0)
    return { type: "const", const: "" };
  if (Y.length === 1)
    return Y[0];
  return { type: "or", expr: Y };
};
var ZW = function($) {
  function X(Z, W) {
    if (!Y8(Z, W))
      throw new yX("TemplateLiteralParser: Index must point to open parens");
    let Q = 0;
    for (let z = W;z < Z.length; z++) {
      if (Y8(Z, z))
        Q += 1;
      if (o$(Z, z))
        Q -= 1;
      if (Q === 0)
        return [W, z];
    }
    throw new yX("TemplateLiteralParser: Unclosed group parens in expression");
  }
  function J(Z, W) {
    for (let Q = W;Q < Z.length; Q++)
      if (Y8(Z, Q))
        return [W, Q];
    return [W, Z.length];
  }
  const Y = [];
  for (let Z = 0;Z < $.length; Z++)
    if (Y8($, Z)) {
      const [W, Q] = X($, Z), z = $.slice(W, Q + 1);
      Y.push(I8(z)), Z = Q;
    } else {
      const [W, Q] = J($, Z), z = $.slice(W, Q);
      if (z.length > 0)
        Y.push(I8(z));
      Z = Q - 1;
    }
  return Y.length === 0 ? { type: "const", const: "" } : Y.length === 1 ? Y[0] : { type: "and", expr: Y };
};

class yX extends d {
}
var WW = function($) {
  return $.type === "or" && $.expr.length === 2 && $.expr[0].type === "const" && $.expr[0].const === "0" && $.expr[1].type === "const" && $.expr[1].const === "[1-9][0-9]*";
};
var QW = function($) {
  return $.type === "or" && $.expr.length === 2 && $.expr[0].type === "const" && $.expr[0].const === "true" && $.expr[1].type === "const" && $.expr[1].const === "false";
};
var zW = function($) {
  return $.type === "const" && $.const === ".*";
};

class bY extends d {
}

class RY extends d {
}
var pX = "(true|false)";
var l$ = "(0|[1-9][0-9]*)";
var hX = "(.*)";
var i1 = "^(0|[1-9][0-9]*)$";
var Z8 = "^(.*)$";
var GW = function($) {
  return $.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
var EY = function($, X) {
  return i0($) ? $.pattern.slice(1, $.pattern.length - 1) : u($) ? `(${$.anyOf.map((J) => EY(J, X)).join("|")})` : N8($) ? `${X}${l$}` : A8($) ? `${X}${l$}` : P6($) ? `${X}${l$}` : Y$($) ? `${X}${hX}` : M1($) ? `${X}${GW($.const.toString())}` : L6($) ? `${X}${pX}` : (() => {
    throw new VY(`Unexpected Kind '${$[H]}'`);
  })();
};

class VY extends d {
}
var HW = function($) {
  return k8($).map((J) => J.toString());
};
var DW = function($) {
  return $.reduce((X, J) => {
    return [...X, ...t0(J)];
  }, []);
};
var AW = function($) {
  return [$.toString()];
};
var NW = function($, X, J) {
  return globalThis.Object.getOwnPropertyNames(X).reduce((Y, Z) => {
    return { ...Y, [Z]: W1($, t0(X[Z]), J) };
  }, {});
};
var OW = function($, X, J) {
  return NW($, X.properties, J);
};
var xY = function($, X) {
  return $.map((J) => kY(J, X));
};
var SW = function($) {
  return $.filter((X) => !C6(X));
};
var _W = function($, X) {
  return fX(SW(xY($, X)));
};
var PW = function($) {
  return $;
};
var LW = function($, X) {
  return J8(PW(xY($, X)));
};
var CW = function($, X) {
  return X in $ ? $[X] : X === "[number]" ? J8($) : e();
};
var FW = function($, X) {
  return X === "[number]" ? $ : e();
};
var bW = function($, X) {
  return X in $ ? $[X] : e();
};
var kY = function($, X) {
  return N0($) ? _W($.allOf, X) : u($) ? LW($.anyOf, X) : _1($) ? CW($.items ?? [], X) : m1($) ? FW($.items, X) : O0($) ? bW($.properties, X) : e();
};
var RW = function($, X) {
  return X.map((J) => kY($, J));
};
var IY = function($, X) {
  return J8(RW($, X));
};
var jW = function($, X, J) {
  return { [X]: W1($, [X], J) };
};
var KW = function($, X, J) {
  return X.reduce((Y, Z) => {
    return { ...Y, ...jW($, Z, J) };
  }, {});
};
var VW = function($, X, J) {
  return KW($, X.keys, J);
};
var $0 = EW;
var IW = function($) {
  return A0(C($), [D8]);
};
var xW = function($) {
  return { ...C($), [D8]: "Readonly" };
};
var kW = function($, X) {
  return X === false ? IW($) : xW($);
};
var gW = function($, X) {
  return globalThis.Object.getOwnPropertyNames($).reduce((J, Y) => {
    return { ...J, [Y]: Q1($[Y], X) };
  }, {});
};
var TW = function($, X) {
  return gW($.properties, X);
};
var yY = function($, X) {
  return $ in X ? C1($, X[$]) : m(X);
};
var yW = function($) {
  return { [$]: n($) };
};
var dW = function($) {
  return $.reduce((X, J) => {
    return { ...X, [J]: n(J) };
  }, {});
};
var vW = function($, X) {
  return gY(X, $) ? yW($) : dW(X);
};
var pW = function($, X) {
  const J = vW($, X);
  return yY($, J);
};
var t$ = function($, X) {
  return X.map((J) => C1($, J));
};
var hW = function($, X) {
  return globalThis.Object.getOwnPropertyNames(X).reduce((J, Y) => {
    return { ...J, [Y]: C1($, X[Y]) };
  }, {});
};
var C1 = function($, X) {
  return I1(X) ? u0(C1($, A0(X, [$1]))) : kX(X) ? Q1(C1($, A0(X, [D8]))) : Z0(X) ? yY($, X.properties) : Y1(X) ? pW($, X.keys) : $$(X) ? a8(t$($, X.parameters), C1($, X.returns)) : X$(X) ? h1(t$($, X.parameters), C1($, X.returns)) : e8(X) ? r8(C1($, X.items)) : J$(X) ? z$(C1($, X.items)) : N0(X) ? T0(t$($, X.allOf)) : u(X) ? l(t$($, X.anyOf)) : _1(X) ? L1(t$($, X.items ?? [])) : O0(X) ? $0(hW($, X.properties)) : m1(X) ? s8(C1($, X.items)) : O8(X) ? q$(C1($, X.item)) : X;
};
var mW = function($, X, J = {}) {
  return $.reduce((Y, Z) => {
    return { ...Y, [Z]: C1(Z, X) };
  }, {});
};
var dY = function($) {
  return $.reduce((X, J) => {
    return [...X, s0(J)];
  }, []);
};
var iW = function($) {
  const X = dY($);
  return fY(X);
};
var uW = function($) {
  const X = dY($);
  return TY(X);
};
var cW = function($) {
  return $.map((X, J) => J.toString());
};
var oW = function($) {
  return ["[number]"];
};
var nW = function($) {
  return globalThis.Object.getOwnPropertyNames($);
};
var lW = function($) {
  if (!oX)
    return [];
  return globalThis.Object.getOwnPropertyNames($).map((J) => {
    return J[0] === "^" && J[J.length - 1] === "$" ? J.slice(1, J.length - 1) : J;
  });
};
var oX = false;
var tW = function($) {
  return $.map((X) => X === "[number]" ? P1() : n(X));
};
var sW = function($, X) {
  return globalThis.Object.getOwnPropertyNames($).reduce((J, Y) => {
    return { ...J, [Y]: B$($[Y], X) };
  }, {});
};
var rW = function($, X) {
  return sW($.properties, X);
};
var aW = function($) {
  return $.allOf.every((X) => c1(X));
};
var eW = function($) {
  return $.anyOf.some((X) => c1(X));
};
var $Q = function($) {
  return !c1($.not);
};
var XQ = pY;

class hY extends d {
  schema;
  constructor($) {
    super(`Unable to dereference schema with $id '${$.$id}'`);
    this.schema = $;
  }
}
var QQ = function($) {
  c0(U1.Array);
  for (let X of $)
    M$(X);
};
var zQ = function($) {
  c0(U1.Boolean), c0($ ? 1 : 0);
};
var qQ = function($) {
  c0(U1.BigInt), iY.setBigInt64(0, $);
  for (let X of uY)
    c0(X);
};
var BQ = function($) {
  c0(U1.Date), M$($.getTime());
};
var wQ = function($) {
  c0(U1.Null);
};
var MQ = function($) {
  c0(U1.Number), iY.setFloat64(0, $);
  for (let X of uY)
    c0(X);
};
var UQ = function($) {
  c0(U1.Object);
  for (let X of globalThis.Object.keys($).sort())
    M$(X), M$($[X]);
};
var GQ = function($) {
  c0(U1.String);
  for (let X = 0;X < $.length; X++)
    for (let J of WQ($.charCodeAt(X)))
      c0(J);
};
var HQ = function($) {
  c0(U1.Symbol), M$($.description);
};
var DQ = function($) {
  c0(U1.Uint8Array);
  for (let X = 0;X < $.length; X++)
    c0($[X]);
};
var AQ = function($) {
  return c0(U1.Undefined);
};
var M$ = function($) {
  if (f($))
    return QQ($);
  if (E1($))
    return zQ($);
  if (k0($))
    return qQ($);
  if (a0($))
    return BQ($);
  if (d1($))
    return wQ($);
  if (k($))
    return MQ($);
  if (Y0($))
    return UQ($);
  if (p($))
    return GQ($);
  if (l0($))
    return HQ($);
  if (K8($))
    return DQ($);
  if (z0($))
    return AQ($);
  throw new lX($);
};
var c0 = function($) {
  w$ = w$ ^ ZQ[$], w$ = w$ * JQ % YQ;
};

class lX extends d {
  value;
  constructor($) {
    super("Unable to hash value");
    this.value = $;
  }
}
var U1;
(function($) {
  $[$.Undefined = 0] = "Undefined", $[$.Null = 1] = "Null", $[$.Boolean = 2] = "Boolean", $[$.Number = 3] = "Number", $[$.String = 4] = "String", $[$.Object = 5] = "Object", $[$.Array = 6] = "Array", $[$.Date = 7] = "Date", $[$.Uint8Array = 8] = "Uint8Array", $[$.Symbol = 9] = "Symbol", $[$.BigInt = 10] = "BigInt";
})(U1 || (U1 = {}));
var w$ = BigInt("14695981039346656037");
var [JQ, YQ] = [BigInt("1099511628211"), BigInt("2") ** BigInt("64")];
var ZQ = Array.from({ length: 256 }).map(($, X) => BigInt(X));
var mY = new Float64Array(1);
var iY = new DataView(mY.buffer);
var uY = new Uint8Array(mY.buffer);
var z8 = function($) {
  return $.replace(/~/g, "~0").replace(/\//g, "~1");
};
var c = function($) {
  return $ !== undefined;
};
var R = function($, X, J, Y) {
  return { type: $, schema: X, path: J, value: Y, message: nX()({ errorType: $, path: J, schema: X, value: Y }) };
};
var G;
(function($) {
  $[$.ArrayContains = 0] = "ArrayContains", $[$.ArrayMaxContains = 1] = "ArrayMaxContains", $[$.ArrayMaxItems = 2] = "ArrayMaxItems", $[$.ArrayMinContains = 3] = "ArrayMinContains", $[$.ArrayMinItems = 4] = "ArrayMinItems", $[$.ArrayUniqueItems = 5] = "ArrayUniqueItems", $[$.Array = 6] = "Array", $[$.AsyncIterator = 7] = "AsyncIterator", $[$.BigIntExclusiveMaximum = 8] = "BigIntExclusiveMaximum", $[$.BigIntExclusiveMinimum = 9] = "BigIntExclusiveMinimum", $[$.BigIntMaximum = 10] = "BigIntMaximum", $[$.BigIntMinimum = 11] = "BigIntMinimum", $[$.BigIntMultipleOf = 12] = "BigIntMultipleOf", $[$.BigInt = 13] = "BigInt", $[$.Boolean = 14] = "Boolean", $[$.DateExclusiveMaximumTimestamp = 15] = "DateExclusiveMaximumTimestamp", $[$.DateExclusiveMinimumTimestamp = 16] = "DateExclusiveMinimumTimestamp", $[$.DateMaximumTimestamp = 17] = "DateMaximumTimestamp", $[$.DateMinimumTimestamp = 18] = "DateMinimumTimestamp", $[$.DateMultipleOfTimestamp = 19] = "DateMultipleOfTimestamp", $[$.Date = 20] = "Date", $[$.Function = 21] = "Function", $[$.IntegerExclusiveMaximum = 22] = "IntegerExclusiveMaximum", $[$.IntegerExclusiveMinimum = 23] = "IntegerExclusiveMinimum", $[$.IntegerMaximum = 24] = "IntegerMaximum", $[$.IntegerMinimum = 25] = "IntegerMinimum", $[$.IntegerMultipleOf = 26] = "IntegerMultipleOf", $[$.Integer = 27] = "Integer", $[$.IntersectUnevaluatedProperties = 28] = "IntersectUnevaluatedProperties", $[$.Intersect = 29] = "Intersect", $[$.Iterator = 30] = "Iterator", $[$.Kind = 31] = "Kind", $[$.Literal = 32] = "Literal", $[$.Never = 33] = "Never", $[$.Not = 34] = "Not", $[$.Null = 35] = "Null", $[$.NumberExclusiveMaximum = 36] = "NumberExclusiveMaximum", $[$.NumberExclusiveMinimum = 37] = "NumberExclusiveMinimum", $[$.NumberMaximum = 38] = "NumberMaximum", $[$.NumberMinimum = 39] = "NumberMinimum", $[$.NumberMultipleOf = 40] = "NumberMultipleOf", $[$.Number = 41] = "Number", $[$.ObjectAdditionalProperties = 42] = "ObjectAdditionalProperties", $[$.ObjectMaxProperties = 43] = "ObjectMaxProperties", $[$.ObjectMinProperties = 44] = "ObjectMinProperties", $[$.ObjectRequiredProperty = 45] = "ObjectRequiredProperty", $[$.Object = 46] = "Object", $[$.Promise = 47] = "Promise", $[$.RegExp = 48] = "RegExp", $[$.StringFormatUnknown = 49] = "StringFormatUnknown", $[$.StringFormat = 50] = "StringFormat", $[$.StringMaxLength = 51] = "StringMaxLength", $[$.StringMinLength = 52] = "StringMinLength", $[$.StringPattern = 53] = "StringPattern", $[$.String = 54] = "String", $[$.Symbol = 55] = "Symbol", $[$.TupleLength = 56] = "TupleLength", $[$.Tuple = 57] = "Tuple", $[$.Uint8ArrayMaxByteLength = 58] = "Uint8ArrayMaxByteLength", $[$.Uint8ArrayMinByteLength = 59] = "Uint8ArrayMinByteLength", $[$.Uint8Array = 60] = "Uint8Array", $[$.Undefined = 61] = "Undefined", $[$.Union = 62] = "Union", $[$.Void = 63] = "Void";
})(G || (G = {}));

class tX extends d {
  schema;
  constructor($) {
    super("Unknown type");
    this.schema = $;
  }
}

class s$ {
  iterator;
  constructor($) {
    this.iterator = $;
  }
  [Symbol.iterator]() {
    return this.iterator;
  }
  First() {
    const $ = this.iterator.next();
    return $.done ? undefined : $.value;
  }
}
var F1 = function($) {
  return $ === N.False ? $ : N.True;
};
var G$ = function($) {
  throw new tY($);
};
var b0 = function($) {
  return B.IsNever($) || B.IsIntersect($) || B.IsUnion($) || B.IsUnknown($) || B.IsAny($);
};
var R0 = function($, X) {
  return B.IsNever(X) ? aY($, X) : B.IsIntersect(X) ? K6($, X) : B.IsUnion(X) ? $J($, X) : B.IsUnknown(X) ? JZ($, X) : B.IsAny(X) ? eX($, X) : G$("StructuralRight");
};
var eX = function($, X) {
  return N.True;
};
var tQ = function($, X) {
  return B.IsIntersect(X) ? K6($, X) : B.IsUnion(X) && X.anyOf.some((J) => B.IsAny(J) || B.IsUnknown(J)) ? N.True : B.IsUnion(X) ? N.Union : B.IsUnknown(X) ? N.True : B.IsAny(X) ? N.True : N.Union;
};
var sQ = function($, X) {
  return B.IsUnknown($) ? N.False : B.IsAny($) ? N.Union : B.IsNever($) ? N.True : N.False;
};
var rQ = function($, X) {
  return B.IsObject(X) && V6(X) ? N.True : b0(X) ? R0($, X) : !B.IsArray(X) ? N.False : F1(J0($.items, X.items));
};
var aQ = function($, X) {
  return b0(X) ? R0($, X) : !B.IsAsyncIterator(X) ? N.False : F1(J0($.items, X.items));
};
var eQ = function($, X) {
  return b0(X) ? R0($, X) : B.IsObject(X) ? o0($, X) : B.IsRecord(X) ? b1($, X) : B.IsBigInt(X) ? N.True : N.False;
};
var sY = function($, X) {
  return B.IsLiteralBoolean($) ? N.True : B.IsBoolean($) ? N.True : N.False;
};
var $7 = function($, X) {
  return b0(X) ? R0($, X) : B.IsObject(X) ? o0($, X) : B.IsRecord(X) ? b1($, X) : B.IsBoolean(X) ? N.True : N.False;
};
var X7 = function($, X) {
  return b0(X) ? R0($, X) : B.IsObject(X) ? o0($, X) : !B.IsConstructor(X) ? N.False : $.parameters.length > X.parameters.length ? N.False : !$.parameters.every((J, Y) => F1(J0(X.parameters[Y], J)) === N.True) ? N.False : F1(J0($.returns, X.returns));
};
var J7 = function($, X) {
  return b0(X) ? R0($, X) : B.IsObject(X) ? o0($, X) : B.IsRecord(X) ? b1($, X) : B.IsDate(X) ? N.True : N.False;
};
var Y7 = function($, X) {
  return b0(X) ? R0($, X) : B.IsObject(X) ? o0($, X) : !B.IsFunction(X) ? N.False : $.parameters.length > X.parameters.length ? N.False : !$.parameters.every((J, Y) => F1(J0(X.parameters[Y], J)) === N.True) ? N.False : F1(J0($.returns, X.returns));
};
var rY = function($, X) {
  return B.IsLiteral($) && J1.IsNumber($.const) ? N.True : B.IsNumber($) || B.IsInteger($) ? N.True : N.False;
};
var Z7 = function($, X) {
  return B.IsInteger(X) || B.IsNumber(X) ? N.True : b0(X) ? R0($, X) : B.IsObject(X) ? o0($, X) : B.IsRecord(X) ? b1($, X) : N.False;
};
var K6 = function($, X) {
  return X.allOf.every((J) => J0($, J) === N.True) ? N.True : N.False;
};
var W7 = function($, X) {
  return $.allOf.some((J) => J0(J, X) === N.True) ? N.True : N.False;
};
var Q7 = function($, X) {
  return b0(X) ? R0($, X) : !B.IsIterator(X) ? N.False : F1(J0($.items, X.items));
};
var z7 = function($, X) {
  return B.IsLiteral(X) && X.const === $.const ? N.True : b0(X) ? R0($, X) : B.IsObject(X) ? o0($, X) : B.IsRecord(X) ? b1($, X) : B.IsString(X) ? XZ($, X) : B.IsNumber(X) ? eY($, X) : B.IsInteger(X) ? rY($, X) : B.IsBoolean(X) ? sY($, X) : N.False;
};
var aY = function($, X) {
  return N.False;
};
var q7 = function($, X) {
  return N.True;
};
var cY = function($) {
  let [X, J] = [$, 0];
  while (true) {
    if (!B.IsNot(X))
      break;
    X = X.not, J += 1;
  }
  return J % 2 === 0 ? X : x1();
};
var B7 = function($, X) {
  return B.IsNot($) ? J0(cY($), X) : B.IsNot(X) ? J0($, cY(X)) : G$("Invalid fallthrough for Not");
};
var w7 = function($, X) {
  return b0(X) ? R0($, X) : B.IsObject(X) ? o0($, X) : B.IsRecord(X) ? b1($, X) : B.IsNull(X) ? N.True : N.False;
};
var eY = function($, X) {
  return B.IsLiteralNumber($) ? N.True : B.IsNumber($) || B.IsInteger($) ? N.True : N.False;
};
var M7 = function($, X) {
  return b0(X) ? R0($, X) : B.IsObject(X) ? o0($, X) : B.IsRecord(X) ? b1($, X) : B.IsInteger(X) || B.IsNumber(X) ? N.True : N.False;
};
var z1 = function($, X) {
  return Object.getOwnPropertyNames($.properties).length === X;
};
var oY = function($) {
  return V6($);
};
var nY = function($) {
  return z1($, 0) || z1($, 1) && ("description" in $.properties) && B.IsUnion($.properties.description) && $.properties.description.anyOf.length === 2 && (B.IsString($.properties.description.anyOf[0]) && B.IsUndefined($.properties.description.anyOf[1]) || B.IsString($.properties.description.anyOf[1]) && B.IsUndefined($.properties.description.anyOf[0]));
};
var sX = function($) {
  return z1($, 0);
};
var lY = function($) {
  return z1($, 0);
};
var U7 = function($) {
  return z1($, 0);
};
var G7 = function($) {
  return z1($, 0);
};
var H7 = function($) {
  return V6($);
};
var D7 = function($) {
  const X = P1();
  return z1($, 0) || z1($, 1) && ("length" in $.properties) && F1(J0($.properties.length, X)) === N.True;
};
var A7 = function($) {
  return z1($, 0);
};
var V6 = function($) {
  const X = P1();
  return z1($, 0) || z1($, 1) && ("length" in $.properties) && F1(J0($.properties.length, X)) === N.True;
};
var N7 = function($) {
  const X = h1([o1()], o1());
  return z1($, 0) || z1($, 1) && ("then" in $.properties) && F1(J0($.properties.then, X)) === N.True;
};
var $Z = function($, X) {
  return J0($, X) === N.False ? N.False : B.IsOptional($) && !B.IsOptional(X) ? N.False : N.True;
};
var o0 = function($, X) {
  return B.IsUnknown($) ? N.False : B.IsAny($) ? N.Union : B.IsNever($) || B.IsLiteralString($) && oY(X) || B.IsLiteralNumber($) && sX(X) || B.IsLiteralBoolean($) && lY(X) || B.IsSymbol($) && nY(X) || B.IsBigInt($) && U7(X) || B.IsString($) && oY(X) || B.IsSymbol($) && nY(X) || B.IsNumber($) && sX(X) || B.IsInteger($) && sX(X) || B.IsBoolean($) && lY(X) || B.IsUint8Array($) && H7(X) || B.IsDate($) && G7(X) || B.IsConstructor($) && A7(X) || B.IsFunction($) && D7(X) ? N.True : B.IsRecord($) && B.IsString(rX($)) ? (() => {
    return X[S1] === "Record" ? N.True : N.False;
  })() : B.IsRecord($) && B.IsNumber(rX($)) ? (() => {
    return z1(X, 0) ? N.True : N.False;
  })() : N.False;
};
var O7 = function($, X) {
  return b0(X) ? R0($, X) : B.IsRecord(X) ? b1($, X) : !B.IsObject(X) ? N.False : (() => {
    for (let J of Object.getOwnPropertyNames(X.properties)) {
      if (!(J in $.properties) && !B.IsOptional(X.properties[J]))
        return N.False;
      if (B.IsOptional(X.properties[J]))
        return N.True;
      if ($Z($.properties[J], X.properties[J]) === N.False)
        return N.False;
    }
    return N.True;
  })();
};
var S7 = function($, X) {
  return b0(X) ? R0($, X) : B.IsObject(X) && N7(X) ? N.True : !B.IsPromise(X) ? N.False : F1(J0($.item, X.item));
};
var rX = function($) {
  return i1 in $.patternProperties ? P1() : (Z8 in $.patternProperties) ? Z1() : G$("Unknown record key pattern");
};
var aX = function($) {
  return i1 in $.patternProperties ? $.patternProperties[i1] : (Z8 in $.patternProperties) ? $.patternProperties[Z8] : G$("Unable to get record value schema");
};
var b1 = function($, X) {
  const [J, Y] = [rX(X), aX(X)];
  return B.IsLiteralString($) && B.IsNumber(J) && F1(J0($, Y)) === N.True ? N.True : B.IsUint8Array($) && B.IsNumber(J) ? J0($, Y) : B.IsString($) && B.IsNumber(J) ? J0($, Y) : B.IsArray($) && B.IsNumber(J) ? J0($, Y) : B.IsObject($) ? (() => {
    for (let Z of Object.getOwnPropertyNames($.properties))
      if ($Z(Y, $.properties[Z]) === N.False)
        return N.False;
    return N.True;
  })() : N.False;
};
var _7 = function($, X) {
  return b0(X) ? R0($, X) : B.IsObject(X) ? o0($, X) : !B.IsRecord(X) ? N.False : J0(aX($), aX(X));
};
var P7 = function($, X) {
  const J = B.IsRegExp($) ? Z1() : $, Y = B.IsRegExp(X) ? Z1() : X;
  return J0(J, Y);
};
var XZ = function($, X) {
  return B.IsLiteral($) && J1.IsString($.const) ? N.True : B.IsString($) ? N.True : N.False;
};
var L7 = function($, X) {
  return b0(X) ? R0($, X) : B.IsObject(X) ? o0($, X) : B.IsRecord(X) ? b1($, X) : B.IsString(X) ? N.True : N.False;
};
var C7 = function($, X) {
  return b0(X) ? R0($, X) : B.IsObject(X) ? o0($, X) : B.IsRecord(X) ? b1($, X) : B.IsSymbol(X) ? N.True : N.False;
};
var F7 = function($, X) {
  return B.IsTemplateLiteral($) ? J0(W8($), X) : B.IsTemplateLiteral(X) ? J0($, W8(X)) : G$("Invalid fallthrough for TemplateLiteral");
};
var b7 = function($, X) {
  return B.IsArray(X) && $.items !== undefined && $.items.every((J) => J0(J, X.items) === N.True);
};
var R7 = function($, X) {
  return B.IsNever($) ? N.True : B.IsUnknown($) ? N.False : B.IsAny($) ? N.Union : N.False;
};
var j7 = function($, X) {
  return b0(X) ? R0($, X) : B.IsObject(X) && V6(X) ? N.True : B.IsArray(X) && b7($, X) ? N.True : !B.IsTuple(X) ? N.False : J1.IsUndefined($.items) && !J1.IsUndefined(X.items) || !J1.IsUndefined($.items) && J1.IsUndefined(X.items) ? N.False : J1.IsUndefined($.items) && !J1.IsUndefined(X.items) ? N.True : $.items.every((J, Y) => J0(J, X.items[Y]) === N.True) ? N.True : N.False;
};
var K7 = function($, X) {
  return b0(X) ? R0($, X) : B.IsObject(X) ? o0($, X) : B.IsRecord(X) ? b1($, X) : B.IsUint8Array(X) ? N.True : N.False;
};
var V7 = function($, X) {
  return b0(X) ? R0($, X) : B.IsObject(X) ? o0($, X) : B.IsRecord(X) ? b1($, X) : B.IsVoid(X) ? x7($, X) : B.IsUndefined(X) ? N.True : N.False;
};
var $J = function($, X) {
  return X.anyOf.some((J) => J0($, J) === N.True) ? N.True : N.False;
};
var E7 = function($, X) {
  return $.anyOf.every((J) => J0(J, X) === N.True) ? N.True : N.False;
};
var JZ = function($, X) {
  return N.True;
};
var I7 = function($, X) {
  return B.IsNever(X) ? aY($, X) : B.IsIntersect(X) ? K6($, X) : B.IsUnion(X) ? $J($, X) : B.IsAny(X) ? eX($, X) : B.IsString(X) ? XZ($, X) : B.IsNumber(X) ? eY($, X) : B.IsInteger(X) ? rY($, X) : B.IsBoolean(X) ? sY($, X) : B.IsArray(X) ? sQ($, X) : B.IsTuple(X) ? R7($, X) : B.IsObject(X) ? o0($, X) : B.IsUnknown(X) ? N.True : N.False;
};
var x7 = function($, X) {
  return B.IsUndefined($) ? N.True : B.IsUndefined($) ? N.True : N.False;
};
var k7 = function($, X) {
  return B.IsIntersect(X) ? K6($, X) : B.IsUnion(X) ? $J($, X) : B.IsUnknown(X) ? JZ($, X) : B.IsAny(X) ? eX($, X) : B.IsObject(X) ? o0($, X) : B.IsVoid(X) ? N.True : N.False;
};
var J0 = function($, X) {
  return B.IsTemplateLiteral($) || B.IsTemplateLiteral(X) ? F7($, X) : B.IsRegExp($) || B.IsRegExp(X) ? P7($, X) : B.IsNot($) || B.IsNot(X) ? B7($, X) : B.IsAny($) ? tQ($, X) : B.IsArray($) ? rQ($, X) : B.IsBigInt($) ? eQ($, X) : B.IsBoolean($) ? $7($, X) : B.IsAsyncIterator($) ? aQ($, X) : B.IsConstructor($) ? X7($, X) : B.IsDate($) ? J7($, X) : B.IsFunction($) ? Y7($, X) : B.IsInteger($) ? Z7($, X) : B.IsIntersect($) ? W7($, X) : B.IsIterator($) ? Q7($, X) : B.IsLiteral($) ? z7($, X) : B.IsNever($) ? q7($, X) : B.IsNull($) ? w7($, X) : B.IsNumber($) ? M7($, X) : B.IsObject($) ? O7($, X) : B.IsRecord($) ? _7($, X) : B.IsString($) ? L7($, X) : B.IsSymbol($) ? C7($, X) : B.IsTuple($) ? j7($, X) : B.IsPromise($) ? S7($, X) : B.IsUint8Array($) ? K7($, X) : B.IsUndefined($) ? V7($, X) : B.IsUnion($) ? E7($, X) : B.IsUnknown($) ? I7($, X) : B.IsVoid($) ? k7($, X) : G$(`Unknown left type operand '${$[H]}'`);
};

class tY extends d {
}
var N;
(function($) {
  $[$.Union = 0] = "Union", $[$.True = 1] = "True", $[$.False = 2] = "False";
})(N || (N = {}));
var g7 = function($, X, J, Y, Z) {
  return globalThis.Object.getOwnPropertyNames($).reduce((W, Q) => {
    return { ...W, [Q]: P8($[Q], X, J, Y, Z) };
  }, {});
};
var T7 = function($, X, J, Y, Z) {
  return g7($.properties, X, J, Y, Z);
};
var f7 = function($, X, J, Y) {
  const Z = q8($, X);
  return Z === N.Union ? l([J, Y]) : Z === N.True ? J : Y;
};
var y7 = function($, X, J, Y, Z) {
  return { [$]: P8(n($), X, J, Y, Z) };
};
var d7 = function($, X, J, Y, Z) {
  return $.reduce((W, Q) => {
    return { ...W, ...y7(Q, X, J, Y, Z) };
  }, {});
};
var v7 = function($, X, J, Y, Z) {
  return d7($.keys, X, J, Y, Z);
};
var p7 = function($) {
  return $[H] === "Any" || $[H] === "Unknown";
};
var o = function($) {
  return $ !== undefined;
};
var h7 = function($, X, J) {
  return true;
};
var m7 = function($, X, J) {
  if (!f(J))
    return false;
  if (o($.minItems) && !(J.length >= $.minItems))
    return false;
  if (o($.maxItems) && !(J.length <= $.maxItems))
    return false;
  if (!J.every((W) => p0($.items, X, W)))
    return false;
  if ($.uniqueItems === true && !function() {
    const W = new Set;
    for (let Q of J) {
      const z = Q8(Q);
      if (W.has(z))
        return false;
      else
        W.add(z);
    }
    return true;
  }())
    return false;
  if (!(o($.contains) || k($.minContains) || k($.maxContains)))
    return true;
  const Y = o($.contains) ? $.contains : e(), Z = J.reduce((W, Q) => p0(Y, X, Q) ? W + 1 : W, 0);
  if (Z === 0)
    return false;
  if (k($.minContains) && Z < $.minContains)
    return false;
  if (k($.maxContains) && Z > $.maxContains)
    return false;
  return true;
};
var i7 = function($, X, J) {
  return y$(J);
};
var u7 = function($, X, J) {
  if (!k0(J))
    return false;
  if (o($.exclusiveMaximum) && !(J < $.exclusiveMaximum))
    return false;
  if (o($.exclusiveMinimum) && !(J > $.exclusiveMinimum))
    return false;
  if (o($.maximum) && !(J <= $.maximum))
    return false;
  if (o($.minimum) && !(J >= $.minimum))
    return false;
  if (o($.multipleOf) && J % $.multipleOf !== BigInt(0))
    return false;
  return true;
};
var c7 = function($, X, J) {
  return E1(J);
};
var o7 = function($, X, J) {
  return p0($.returns, X, J.prototype);
};
var n7 = function($, X, J) {
  if (!a0(J))
    return false;
  if (o($.exclusiveMaximumTimestamp) && !(J.getTime() < $.exclusiveMaximumTimestamp))
    return false;
  if (o($.exclusiveMinimumTimestamp) && !(J.getTime() > $.exclusiveMinimumTimestamp))
    return false;
  if (o($.maximumTimestamp) && !(J.getTime() <= $.maximumTimestamp))
    return false;
  if (o($.minimumTimestamp) && !(J.getTime() >= $.minimumTimestamp))
    return false;
  if (o($.multipleOfTimestamp) && J.getTime() % $.multipleOfTimestamp !== 0)
    return false;
  return true;
};
var l7 = function($, X, J) {
  return o8(J);
};
var t7 = function($, X, J) {
  if (!p$(J))
    return false;
  if (o($.exclusiveMaximum) && !(J < $.exclusiveMaximum))
    return false;
  if (o($.exclusiveMinimum) && !(J > $.exclusiveMinimum))
    return false;
  if (o($.maximum) && !(J <= $.maximum))
    return false;
  if (o($.minimum) && !(J >= $.minimum))
    return false;
  if (o($.multipleOf) && J % $.multipleOf !== 0)
    return false;
  return true;
};
var s7 = function($, X, J) {
  const Y = $.allOf.every((Z) => p0(Z, X, J));
  if ($.unevaluatedProperties === false) {
    const Z = new RegExp(u1($)), W = Object.getOwnPropertyNames(J).every((Q) => Z.test(Q));
    return Y && W;
  } else if (g($.unevaluatedProperties)) {
    const Z = new RegExp(u1($)), W = Object.getOwnPropertyNames(J).every((Q) => Z.test(Q) || p0($.unevaluatedProperties, X, J[Q]));
    return Y && W;
  } else
    return Y;
};
var r7 = function($, X, J) {
  return d$(J);
};
var a7 = function($, X, J) {
  return J === $.const;
};
var e7 = function($, X, J) {
  return false;
};
var $5 = function($, X, J) {
  return !p0($.not, X, J);
};
var X5 = function($, X, J) {
  return d1(J);
};
var J5 = function($, X, J) {
  if (!S0.IsNumberLike(J))
    return false;
  if (o($.exclusiveMaximum) && !(J < $.exclusiveMaximum))
    return false;
  if (o($.exclusiveMinimum) && !(J > $.exclusiveMinimum))
    return false;
  if (o($.minimum) && !(J >= $.minimum))
    return false;
  if (o($.maximum) && !(J <= $.maximum))
    return false;
  if (o($.multipleOf) && J % $.multipleOf !== 0)
    return false;
  return true;
};
var Y5 = function($, X, J) {
  if (!S0.IsObjectLike(J))
    return false;
  if (o($.minProperties) && !(Object.getOwnPropertyNames(J).length >= $.minProperties))
    return false;
  if (o($.maxProperties) && !(Object.getOwnPropertyNames(J).length <= $.maxProperties))
    return false;
  const Y = Object.getOwnPropertyNames($.properties);
  for (let Z of Y) {
    const W = $.properties[Z];
    if ($.required && $.required.includes(Z)) {
      if (!p0(W, X, J[Z]))
        return false;
      if ((c1(W) || p7(W)) && !(Z in J))
        return false;
    } else if (S0.IsExactOptionalProperty(J, Z) && !p0(W, X, J[Z]))
      return false;
  }
  if ($.additionalProperties === false) {
    const Z = Object.getOwnPropertyNames(J);
    if ($.required && $.required.length === Y.length && Z.length === Y.length)
      return true;
    else
      return Z.every((W) => Y.includes(W));
  } else if (typeof $.additionalProperties === "object")
    return Object.getOwnPropertyNames(J).every((W) => Y.includes(W) || p0($.additionalProperties, X, J[W]));
  else
    return true;
};
var Z5 = function($, X, J) {
  return v$(J);
};
var W5 = function($, X, J) {
  if (!S0.IsRecordLike(J))
    return false;
  if (o($.minProperties) && !(Object.getOwnPropertyNames(J).length >= $.minProperties))
    return false;
  if (o($.maxProperties) && !(Object.getOwnPropertyNames(J).length <= $.maxProperties))
    return false;
  const [Y, Z] = Object.entries($.patternProperties)[0], W = new RegExp(Y), Q = Object.entries(J).every(([M, A]) => {
    return W.test(M) ? p0(Z, X, A) : true;
  }), z = typeof $.additionalProperties === "object" ? Object.entries(J).every(([M, A]) => {
    return !W.test(M) ? p0($.additionalProperties, X, A) : true;
  }) : true, q = $.additionalProperties === false ? Object.getOwnPropertyNames(J).every((M) => {
    return W.test(M);
  }) : true;
  return Q && z && q;
};
var Q5 = function($, X, J) {
  return p0(a($, X), X, J);
};
var z5 = function($, X, J) {
  return new RegExp($.source, $.flags).test(J);
};
var q5 = function($, X, J) {
  if (!p(J))
    return false;
  if (o($.minLength)) {
    if (!(J.length >= $.minLength))
      return false;
  }
  if (o($.maxLength)) {
    if (!(J.length <= $.maxLength))
      return false;
  }
  if (o($.pattern)) {
    if (!new RegExp($.pattern).test(J))
      return false;
  }
  if (o($.format)) {
    if (!g0.Has($.format))
      return false;
    return g0.Get($.format)(J);
  }
  return true;
};
var B5 = function($, X, J) {
  return l0(J);
};
var w5 = function($, X, J) {
  return p(J) && new RegExp($.pattern).test(J);
};
var M5 = function($, X, J) {
  return p0(a($, X), X, J);
};
var U5 = function($, X, J) {
  if (!f(J))
    return false;
  if ($.items === undefined && J.length !== 0)
    return false;
  if (J.length !== $.maxItems)
    return false;
  if (!$.items)
    return true;
  for (let Y = 0;Y < $.items.length; Y++)
    if (!p0($.items[Y], X, J[Y]))
      return false;
  return true;
};
var G5 = function($, X, J) {
  return z0(J);
};
var H5 = function($, X, J) {
  return $.anyOf.some((Y) => p0(Y, X, J));
};
var D5 = function($, X, J) {
  if (!K8(J))
    return false;
  if (o($.maxByteLength) && !(J.length <= $.maxByteLength))
    return false;
  if (o($.minByteLength) && !(J.length >= $.minByteLength))
    return false;
  return true;
};
var A5 = function($, X, J) {
  return true;
};
var N5 = function($, X, J) {
  return S0.IsVoidLike(J);
};
var O5 = function($, X, J) {
  if (!V0.Has($[H]))
    return false;
  return V0.Get($[H])($, J);
};
var p0 = function($, X, J) {
  const Y = o($.$id) ? [...X, $] : X, Z = $;
  switch (Z[H]) {
    case "Any":
      return h7(Z, Y, J);
    case "Array":
      return m7(Z, Y, J);
    case "AsyncIterator":
      return i7(Z, Y, J);
    case "BigInt":
      return u7(Z, Y, J);
    case "Boolean":
      return c7(Z, Y, J);
    case "Constructor":
      return o7(Z, Y, J);
    case "Date":
      return n7(Z, Y, J);
    case "Function":
      return l7(Z, Y, J);
    case "Integer":
      return t7(Z, Y, J);
    case "Intersect":
      return s7(Z, Y, J);
    case "Iterator":
      return r7(Z, Y, J);
    case "Literal":
      return a7(Z, Y, J);
    case "Never":
      return e7(Z, Y, J);
    case "Not":
      return $5(Z, Y, J);
    case "Null":
      return X5(Z, Y, J);
    case "Number":
      return J5(Z, Y, J);
    case "Object":
      return Y5(Z, Y, J);
    case "Promise":
      return Z5(Z, Y, J);
    case "Record":
      return W5(Z, Y, J);
    case "Ref":
      return Q5(Z, Y, J);
    case "RegExp":
      return z5(Z, Y, J);
    case "String":
      return q5(Z, Y, J);
    case "Symbol":
      return B5(Z, Y, J);
    case "TemplateLiteral":
      return w5(Z, Y, J);
    case "This":
      return M5(Z, Y, J);
    case "Tuple":
      return U5(Z, Y, J);
    case "Undefined":
      return G5(Z, Y, J);
    case "Union":
      return H5(Z, Y, J);
    case "Uint8Array":
      return D5(Z, Y, J);
    case "Unknown":
      return A5(Z, Y, J);
    case "Void":
      return N5(Z, Y, J);
    default:
      if (!V0.Has(Z[H]))
        throw new WZ(Z);
      return O5(Z, Y, J);
  }
};

class WZ extends d {
  schema;
  constructor($) {
    super("Unknown type");
    this.schema = $;
  }
}
var S5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else
    return {};
};
var _5 = function($, X) {
  if ($.uniqueItems === true && !h($, "default"))
    throw new G1($, "Array with the uniqueItems constraint requires a default value");
  else if (("contains" in $) && !h($, "default"))
    throw new G1($, "Array with the contains constraint requires a default value");
  else if ("default" in $)
    return $.default;
  else if ($.minItems !== undefined)
    return Array.from({ length: $.minItems }).map((J) => {
      return H1($.items, X);
    });
  else
    return [];
};
var P5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else
    return async function* () {
    }();
};
var L5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else
    return BigInt(0);
};
var C5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else
    return false;
};
var F5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else {
    const J = H1($.returns, X);
    if (typeof J === "object" && !Array.isArray(J))
      return class {
        constructor() {
          for (let [Y, Z] of Object.entries(J)) {
            const W = this;
            W[Y] = Z;
          }
        }
      };
    else
      return class {
      };
  }
};
var b5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else if ($.minimumTimestamp !== undefined)
    return new Date($.minimumTimestamp);
  else
    return new Date;
};
var R5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else
    return () => H1($.returns, X);
};
var j5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else if ($.minimum !== undefined)
    return $.minimum;
  else
    return 0;
};
var K5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else {
    const J = $.allOf.reduce((Y, Z) => {
      const W = H1(Z, X);
      return typeof W === "object" ? { ...Y, ...W } : W;
    }, {});
    if (!t($, X, J))
      throw new G1($, "Intersect produced invalid value. Consider using a default value.");
    return J;
  }
};
var V5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else
    return function* () {
    }();
};
var E5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else
    return $.const;
};
var I5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else
    throw new G1($, "Never types cannot be created. Consider using a default value.");
};
var x5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else
    throw new G1($, "Not types must have a default value");
};
var k5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else
    return null;
};
var g5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else if ($.minimum !== undefined)
    return $.minimum;
  else
    return 0;
};
var T5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else {
    const J = new Set($.required);
    return $.default || Object.entries($.properties).reduce((Y, [Z, W]) => {
      return J.has(Z) ? { ...Y, [Z]: H1(W, X) } : { ...Y };
    }, {});
  }
};
var f5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else
    return Promise.resolve(H1($.item, X));
};
var y5 = function($, X) {
  const [J, Y] = Object.entries($.patternProperties)[0];
  if (h($, "default"))
    return $.default;
  else if (!(J === Z8 || J === i1))
    return J.slice(1, J.length - 1).split("|").reduce((W, Q) => {
      return { ...W, [Q]: H1(Y, X) };
    }, {});
  else
    return {};
};
var d5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else
    return H1(a($, X), X);
};
var v5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else
    throw new G1($, "RegExp types cannot be created. Consider using a default value.");
};
var p5 = function($, X) {
  if ($.pattern !== undefined)
    if (!h($, "default"))
      throw new G1($, "String types with patterns must specify a default value");
    else
      return $.default;
  else if ($.format !== undefined)
    if (!h($, "default"))
      throw new G1($, "String types with formats must specify a default value");
    else
      return $.default;
  else if (h($, "default"))
    return $.default;
  else if ($.minLength !== undefined)
    return Array.from({ length: $.minLength }).map(() => " ").join("");
  else
    return "";
};
var h5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else if ("value" in $)
    return Symbol.for($.value);
  else
    return Symbol();
};
var m5 = function($, X) {
  if (h($, "default"))
    return $.default;
  if (!n$($))
    throw new G1($, "Can only create template literals that produce a finite variants. Consider using a default value.");
  return k8($)[0];
};
var i5 = function($, X) {
  if (QZ++ > r5)
    throw new G1($, "Cannot create recursive type as it appears possibly infinite. Consider using a default.");
  if (h($, "default"))
    return $.default;
  else
    return H1(a($, X), X);
};
var u5 = function($, X) {
  if (h($, "default"))
    return $.default;
  if ($.items === undefined)
    return [];
  else
    return Array.from({ length: $.minItems }).map((J, Y) => H1($.items[Y], X));
};
var c5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else
    return;
};
var o5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else if ($.anyOf.length === 0)
    throw new Error("ValueCreate.Union: Cannot create Union with zero variants");
  else
    return H1($.anyOf[0], X);
};
var n5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else if ($.minByteLength !== undefined)
    return new Uint8Array($.minByteLength);
  else
    return new Uint8Array(0);
};
var l5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else
    return {};
};
var t5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else
    return;
};
var s5 = function($, X) {
  if (h($, "default"))
    return $.default;
  else
    throw new Error("User defined types must specify a default value");
};
var H1 = function($, X) {
  const J = p($.$id) ? [...X, $] : X, Y = $;
  switch (Y[H]) {
    case "Any":
      return S5(Y, J);
    case "Array":
      return _5(Y, J);
    case "AsyncIterator":
      return P5(Y, J);
    case "BigInt":
      return L5(Y, J);
    case "Boolean":
      return C5(Y, J);
    case "Constructor":
      return F5(Y, J);
    case "Date":
      return b5(Y, J);
    case "Function":
      return R5(Y, J);
    case "Integer":
      return j5(Y, J);
    case "Intersect":
      return K5(Y, J);
    case "Iterator":
      return V5(Y, J);
    case "Literal":
      return E5(Y, J);
    case "Never":
      return I5(Y, J);
    case "Not":
      return x5(Y, J);
    case "Null":
      return k5(Y, J);
    case "Number":
      return g5(Y, J);
    case "Object":
      return T5(Y, J);
    case "Promise":
      return f5(Y, J);
    case "Record":
      return y5(Y, J);
    case "Ref":
      return d5(Y, J);
    case "RegExp":
      return v5(Y, J);
    case "String":
      return p5(Y, J);
    case "Symbol":
      return h5(Y, J);
    case "TemplateLiteral":
      return m5(Y, J);
    case "This":
      return i5(Y, J);
    case "Tuple":
      return u5(Y, J);
    case "Undefined":
      return c5(Y, J);
    case "Union":
      return o5(Y, J);
    case "Uint8Array":
      return n5(Y, J);
    case "Unknown":
      return l5(Y, J);
    case "Void":
      return t5(Y, J);
    default:
      if (!V0.Has(Y[H]))
        throw new G1(Y, "Unknown type");
      return s5(Y, J);
  }
};

class G1 extends d {
  schema;
  constructor($, X) {
    super(X);
    this.schema = $;
  }
}
var r5 = 512;
var QZ = 0;
var a5 = function($) {
  return [...Object.getOwnPropertyNames($), ...Object.getOwnPropertySymbols($)].reduce((J, Y) => ({ ...J, [Y]: M0($[Y]) }), {});
};
var e5 = function($) {
  return $.map((X) => M0(X));
};
var $9 = function($) {
  return $.slice();
};
var X9 = function($) {
  return new Date($.toISOString());
};
var J9 = function($) {
  return $;
};
var Y9 = function($, X, J) {
  if ($[H] === "Object" && typeof J === "object" && !d1(J)) {
    const Y = $, Z = Object.getOwnPropertyNames(J), W = Object.entries(Y.properties), [Q, z] = [1 / W.length, W.length];
    return W.reduce((q, [M, A]) => {
      const O = A[H] === "Literal" && A.const === J[M] ? z : 0, T = t(A, X, J[M]) ? Q : 0, E = Z.includes(M) ? Q : 0;
      return q + (O + T + E);
    }, 0);
  } else
    return t($, X, J) ? 1 : 0;
};
var Z9 = function($, X, J) {
  let [Y, Z] = [$.anyOf[0], 0];
  for (let W of $.anyOf) {
    const Q = Y9(W, X, J);
    if (Q > Z)
      Y = W, Z = Q;
  }
  return Y;
};
var W9 = function($, X, J) {
  if ("default" in $)
    return $.default;
  else {
    const Y = Z9($, X, J);
    return r$(Y, X, J);
  }
};
var Q9 = function($, X, J) {
  return t($, X, J) ? M0(J) : q1($, X);
};
var z9 = function($, X, J) {
  return t($, X, J) ? J : q1($, X);
};
var q9 = function($, X, J) {
  if (t($, X, J))
    return M0(J);
  const Y = f(J) ? M0(J) : q1($, X), Z = k($.minItems) && Y.length < $.minItems ? [...Y, ...Array.from({ length: $.minItems - Y.length }, () => null)] : Y, Q = (k($.maxItems) && Z.length > $.maxItems ? Z.slice(0, $.maxItems) : Z).map((q) => n1($.items, X, q));
  if ($.uniqueItems !== true)
    return Q;
  const z = [...new Set(Q)];
  if (!t($, X, z))
    throw new E6($, "Array cast produced invalid data due to uniqueItems constraint");
  return z;
};
var B9 = function($, X, J) {
  if (t($, X, J))
    return q1($, X);
  const Y = new Set($.returns.required || []), Z = function() {
  };
  for (let [W, Q] of Object.entries($.returns.properties)) {
    if (!Y.has(W) && J.prototype[W] === undefined)
      continue;
    Z.prototype[W] = n1(Q, X, J.prototype[W]);
  }
  return Z;
};
var w9 = function($, X, J) {
  const Y = q1($, X), Z = Y0(Y) && Y0(J) ? { ...Y, ...J } : J;
  return t($, X, Z) ? Z : q1($, X);
};
var M9 = function($, X, J) {
  throw new E6($, "Never types cannot be cast");
};
var U9 = function($, X, J) {
  if (t($, X, J))
    return J;
  if (J === null || typeof J !== "object")
    return q1($, X);
  const Y = new Set($.required || []), Z = {};
  for (let [W, Q] of Object.entries($.properties)) {
    if (!Y.has(W) && J[W] === undefined)
      continue;
    Z[W] = n1(Q, X, J[W]);
  }
  if (typeof $.additionalProperties === "object") {
    const W = Object.getOwnPropertyNames($.properties);
    for (let Q of Object.getOwnPropertyNames(J)) {
      if (W.includes(Q))
        continue;
      Z[Q] = n1($.additionalProperties, X, J[Q]);
    }
  }
  return Z;
};
var G9 = function($, X, J) {
  if (t($, X, J))
    return M0(J);
  if (J === null || typeof J !== "object" || Array.isArray(J) || J instanceof Date)
    return q1($, X);
  const Y = Object.getOwnPropertyNames($.patternProperties)[0], Z = $.patternProperties[Y], W = {};
  for (let [Q, z] of Object.entries(J))
    W[Q] = n1(Z, X, z);
  return W;
};
var H9 = function($, X, J) {
  return n1(a($, X), X, J);
};
var D9 = function($, X, J) {
  return n1(a($, X), X, J);
};
var A9 = function($, X, J) {
  if (t($, X, J))
    return M0(J);
  if (!f(J))
    return q1($, X);
  if ($.items === undefined)
    return [];
  return $.items.map((Y, Z) => n1(Y, X, J[Z]));
};
var N9 = function($, X, J) {
  return t($, X, J) ? M0(J) : W9($, X, J);
};
var n1 = function($, X, J) {
  const Y = p($.$id) ? [...X, $] : X, Z = $;
  switch ($[H]) {
    case "Array":
      return q9(Z, Y, J);
    case "Constructor":
      return B9(Z, Y, J);
    case "Intersect":
      return w9(Z, Y, J);
    case "Never":
      return M9(Z, Y, J);
    case "Object":
      return U9(Z, Y, J);
    case "Record":
      return G9(Z, Y, J);
    case "Ref":
      return H9(Z, Y, J);
    case "This":
      return D9(Z, Y, J);
    case "Tuple":
      return A9(Z, Y, J);
    case "Union":
      return N9(Z, Y, J);
    case "Date":
    case "Symbol":
    case "Uint8Array":
      return Q9($, X, J);
    default:
      return z9(Z, Y, J);
  }
};

class E6 extends d {
  schema;
  constructor($, X) {
    super(X);
    this.schema = $;
  }
}
var O9 = function($) {
  return g($) && $[H] !== "Unsafe";
};
var S9 = function($, X, J) {
  if (!f(J))
    return J;
  return J.map((Y) => D1($.items, X, Y));
};
var _9 = function($, X, J) {
  const Y = $.unevaluatedProperties, W = $.allOf.map((z) => D1(z, X, M0(J))).reduce((z, q) => x0(q) ? { ...z, ...q } : q, {});
  if (!x0(J) || !x0(W) || !g(Y))
    return W;
  const Q = s0($);
  for (let z of Object.getOwnPropertyNames(J)) {
    if (Q.includes(z))
      continue;
    if (t(Y, X, J[z]))
      W[z] = D1(Y, X, J[z]);
  }
  return W;
};
var P9 = function($, X, J) {
  if (!x0(J) || f(J))
    return J;
  const Y = $.additionalProperties;
  for (let Z of Object.getOwnPropertyNames(J)) {
    if (Z in $.properties) {
      J[Z] = D1($.properties[Z], X, J[Z]);
      continue;
    }
    if (g(Y) && t(Y, X, J[Z])) {
      J[Z] = D1(Y, X, J[Z]);
      continue;
    }
    delete J[Z];
  }
  return J;
};
var L9 = function($, X, J) {
  if (!x0(J))
    return J;
  const Y = $.additionalProperties, Z = Object.keys(J), [W, Q] = Object.entries($.patternProperties)[0], z = new RegExp(W);
  for (let q of Z) {
    if (z.test(q)) {
      J[q] = D1(Q, X, J[q]);
      continue;
    }
    if (g(Y) && t(Y, X, J[q])) {
      J[q] = D1(Y, X, J[q]);
      continue;
    }
    delete J[q];
  }
  return J;
};
var C9 = function($, X, J) {
  return D1(a($, X), X, J);
};
var F9 = function($, X, J) {
  return D1(a($, X), X, J);
};
var b9 = function($, X, J) {
  if (!f(J))
    return J;
  if (z0($.items))
    return [];
  const Y = Math.min(J.length, $.items.length);
  for (let Z = 0;Z < Y; Z++)
    J[Z] = D1($.items[Z], X, J[Z]);
  return J.length > Y ? J.slice(0, Y) : J;
};
var R9 = function($, X, J) {
  for (let Y of $.anyOf)
    if (O9(Y) && t(Y, J))
      return D1(Y, X, J);
  return J;
};
var D1 = function($, X, J) {
  const Y = p($.$id) ? [...X, $] : X, Z = $;
  switch (Z[H]) {
    case "Array":
      return S9(Z, Y, J);
    case "Intersect":
      return _9(Z, Y, J);
    case "Object":
      return P9(Z, Y, J);
    case "Record":
      return L9(Z, Y, J);
    case "Ref":
      return C9(Z, Y, J);
    case "This":
      return F9(Z, Y, J);
    case "Tuple":
      return b9(Z, Y, J);
    case "Union":
      return R9(Z, Y, J);
    default:
      return J;
  }
};
var j9 = function($) {
  const X = T0($, {}), Y = s0(X).reduce((Z, W) => ({ ...Z, [W]: W1(X, [W]) }), {});
  return $0(Y);
};
var x6 = function($) {
  return p($) && !isNaN($) && !isNaN(parseFloat($));
};
var K9 = function($) {
  return k0($) || E1($) || k($);
};
var a$ = function($) {
  return $ === true || k($) && $ === 1 || k0($) && $ === BigInt("1") || p($) && ($.toLowerCase() === "true" || $ === "1");
};
var e$ = function($) {
  return $ === false || k($) && ($ === 0 || Object.is($, -0)) || k0($) && $ === BigInt("0") || p($) && ($.toLowerCase() === "false" || $ === "0" || $ === "-0");
};
var V9 = function($) {
  return p($) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test($);
};
var E9 = function($) {
  return p($) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test($);
};
var I9 = function($) {
  return p($) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test($);
};
var x9 = function($) {
  return p($) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test($);
};
var k9 = function($) {
  return p($) && /^\d\d\d\d-[0-1]\d-[0-3]\d$/i.test($);
};
var g9 = function($, X) {
  const J = qZ($);
  return J === X ? J : $;
};
var T9 = function($, X) {
  const J = BZ($);
  return J === X ? J : $;
};
var f9 = function($, X) {
  const J = zZ($);
  return J === X ? J : $;
};
var y9 = function($, X) {
  return p($.const) ? g9(X, $.const) : k($.const) ? T9(X, $.const) : E1($.const) ? f9(X, $.const) : M0(X);
};
var zZ = function($) {
  return a$($) ? true : e$($) ? false : $;
};
var d9 = function($) {
  return x6($) ? BigInt(parseInt($)) : k($) ? BigInt($ | 0) : e$($) ? BigInt(0) : a$($) ? BigInt(1) : $;
};
var qZ = function($) {
  return K9($) ? $.toString() : l0($) && $.description !== undefined ? $.description.toString() : $;
};
var BZ = function($) {
  return x6($) ? parseFloat($) : a$($) ? 1 : e$($) ? 0 : $;
};
var v9 = function($) {
  return x6($) ? parseInt($) : k($) ? $ | 0 : a$($) ? 1 : e$($) ? 0 : $;
};
var p9 = function($) {
  return p($) && $.toLowerCase() === "null" ? null : $;
};
var h9 = function($) {
  return p($) && $ === "undefined" ? undefined : $;
};
var m9 = function($) {
  return a0($) ? $ : k($) ? new Date($) : a$($) ? new Date(1) : e$($) ? new Date(0) : x6($) ? new Date(parseInt($)) : E9($) ? new Date(`1970-01-01T${$}.000Z`) : V9($) ? new Date(`1970-01-01T${$}`) : x9($) ? new Date(`${$}.000Z`) : I9($) ? new Date($) : k9($) ? new Date(`${$}T00:00:00.000Z`) : $;
};
var i9 = function($) {
  return $;
};
var u9 = function($, X, J) {
  if (f(J))
    return J.map((Y) => k1($.items, X, Y));
  return J;
};
var c9 = function($, X, J) {
  return d9(J);
};
var o9 = function($, X, J) {
  return zZ(J);
};
var n9 = function($, X, J) {
  return m9(J);
};
var l9 = function($, X, J) {
  return v9(J);
};
var t9 = function($, X, J) {
  if ($.allOf.every((Z) => O0(Z)))
    return k1(H$($.allOf), X, J);
  return k1($.allOf[0], X, J);
};
var s9 = function($, X, J) {
  return y9($, J);
};
var r9 = function($, X, J) {
  return p9(J);
};
var a9 = function($, X, J) {
  return BZ(J);
};
var e9 = function($, X, J) {
  if (!x0(J))
    return J;
  return Object.getOwnPropertyNames($.properties).reduce((Z, W) => {
    return !z0(Z[W]) ? { ...Z, [W]: k1($.properties[W], X, Z[W]) } : { ...Z };
  }, J);
};
var $z = function($, X, J) {
  const Y = Object.getOwnPropertyNames($.patternProperties)[0], Z = $.patternProperties[Y], W = {};
  for (let [Q, z] of Object.entries(J))
    W[Q] = k1(Z, X, z);
  return W;
};
var Xz = function($, X, J) {
  return k1(a($, X), X, J);
};
var Jz = function($, X, J) {
  return qZ(J);
};
var Yz = function($, X, J) {
  return p(J) || k(J) ? Symbol(J) : J;
};
var Zz = function($, X, J) {
  return k1(a($, X), X, J);
};
var Wz = function($, X, J) {
  if (!(f(J) && !z0($.items)))
    return J;
  return J.map((Z, W) => {
    return W < $.items.length ? k1($.items[W], X, Z) : Z;
  });
};
var Qz = function($, X, J) {
  return h9(J);
};
var zz = function($, X, J) {
  for (let Y of $.anyOf) {
    const Z = k1(Y, X, J);
    if (t(Y, X, Z))
      return Z;
  }
  return J;
};
var k1 = function($, X, J) {
  const Y = p($.$id) ? [...X, $] : X, Z = $;
  switch ($[H]) {
    case "Array":
      return u9(Z, Y, J);
    case "BigInt":
      return c9(Z, Y, J);
    case "Boolean":
      return o9(Z, Y, J);
    case "Date":
      return n9(Z, Y, J);
    case "Integer":
      return l9(Z, Y, J);
    case "Intersect":
      return t9(Z, Y, J);
    case "Literal":
      return s9(Z, Y, J);
    case "Null":
      return r9(Z, Y, J);
    case "Number":
      return a9(Z, Y, J);
    case "Object":
      return e9(Z, Y, J);
    case "Record":
      return $z(Z, Y, J);
    case "Ref":
      return Xz(Z, Y, J);
    case "String":
      return Jz(Z, Y, J);
    case "Symbol":
      return Yz(Z, Y, J);
    case "This":
      return Zz(Z, Y, J);
    case "Tuple":
      return Wz(Z, Y, J);
    case "Undefined":
      return Qz(Z, Y, J);
    case "Union":
      return zz(Z, Y, J);
    default:
      return i9(J);
  }
};
var L8 = function($, X) {
  return X !== undefined || !("default" in $) ? X : $.default;
};
var qz = function($) {
  return g($) && $[H] !== "Unsafe";
};
var g6 = function($) {
  return g($) && ("default" in $);
};
var Bz = function($, X, J) {
  const Y = L8($, J);
  if (!f(Y))
    return Y;
  for (let Z = 0;Z < Y.length; Z++)
    Y[Z] = R1($.items, X, Y[Z]);
  return Y;
};
var wz = function($, X, J) {
  const Y = L8($, J);
  return $.allOf.reduce((Z, W) => {
    const Q = R1(W, X, Y);
    return x0(Q) ? { ...Z, ...Q } : Q;
  }, {});
};
var Mz = function($, X, J) {
  const Y = L8($, J);
  if (!x0(Y))
    return Y;
  const Z = $.additionalProperties, W = Object.getOwnPropertyNames($.properties);
  for (let Q of W) {
    if (!g6($.properties[Q]))
      continue;
    Y[Q] = R1($.properties[Q], X, Y[Q]);
  }
  if (!g6(Z))
    return Y;
  for (let Q of Object.getOwnPropertyNames(Y)) {
    if (W.includes(Q))
      continue;
    Y[Q] = R1(Z, X, Y[Q]);
  }
  return Y;
};
var Uz = function($, X, J) {
  const Y = L8($, J);
  if (!x0(Y))
    return Y;
  const Z = $.additionalProperties, [W, Q] = Object.entries($.patternProperties)[0], z = new RegExp(W);
  for (let q of Object.getOwnPropertyNames(Y)) {
    if (!(z.test(q) && g6(Q)))
      continue;
    Y[q] = R1(Q, X, Y[q]);
  }
  if (!g6(Z))
    return Y;
  for (let q of Object.getOwnPropertyNames(Y)) {
    if (z.test(q))
      continue;
    Y[q] = R1(Z, X, Y[q]);
  }
  return Y;
};
var Gz = function($, X, J) {
  return R1(a($, X), X, L8($, J));
};
var Hz = function($, X, J) {
  return R1(a($, X), X, J);
};
var Dz = function($, X, J) {
  const Y = L8($, J);
  if (!f(Y) || z0($.items))
    return Y;
  const [Z, W] = [$.items, Math.max($.items.length, Y.length)];
  for (let Q = 0;Q < W; Q++)
    if (Q < Z.length)
      Y[Q] = R1(Z[Q], X, Y[Q]);
  return Y;
};
var Az = function($, X, J) {
  const Y = L8($, J);
  for (let Z of $.anyOf) {
    const W = R1(Z, X, Y);
    if (qz(Z) && t(Z, W))
      return W;
  }
  return Y;
};
var R1 = function($, X, J) {
  const Y = p($.$id) ? [...X, $] : X, Z = $;
  switch (Z[H]) {
    case "Array":
      return Bz(Z, Y, J);
    case "Intersect":
      return wz(Z, Y, J);
    case "Object":
      return Mz(Z, Y, J);
    case "Record":
      return Uz(Z, Y, J);
    case "Ref":
      return Gz(Z, Y, J);
    case "This":
      return Hz(Z, Y, J);
    case "Tuple":
      return Dz(Z, Y, J);
    case "Union":
      return Az(Z, Y, J);
    default:
      return L8(Z, J);
  }
};
var j1 = {};
G8(j1, { ValuePointerRootSetError: () => {
  {
    return XJ;
  }
}, ValuePointerRootDeleteError: () => {
  {
    return JJ;
  }
}, Set: () => {
  {
    return Nz;
  }
}, Has: () => {
  {
    return Sz;
  }
}, Get: () => {
  {
    return _z;
  }
}, Format: () => {
  {
    return $6;
  }
}, Delete: () => {
  {
    return Oz;
  }
} });
var wZ = function($) {
  return $.indexOf("~") === -1 ? $ : $.replace(/~1/g, "/").replace(/~0/g, "~");
};

class XJ extends d {
  value;
  path;
  update;
  constructor($, X, J) {
    super("Cannot set root value");
    this.value = $, this.path = X, this.update = J;
  }
}

class JJ extends d {
  value;
  path;
  constructor($, X) {
    super("Cannot delete root value");
    this.value = $, this.path = X;
  }
}
var J6 = function($, X) {
  return { type: "update", path: $, value: X };
};
var HZ = function($, X) {
  return { type: "insert", path: $, value: X };
};
var DZ = function($) {
  return { type: "delete", path: $ };
};
var Rz = function($) {
  return $.length > 0 && $[0].path === "" && $[0].type === "update";
};
var jz = function($) {
  return $.length === 0;
};
var MZ = $0({ type: n("insert"), path: Z1(), value: x1() });
var UZ = $0({ type: n("update"), path: Z1(), value: x1() });
var GZ = $0({ type: n("delete"), path: Z1() });
var Pz = l([MZ, UZ, GZ]);

class f6 extends d {
  value;
  constructor($, X) {
    super(X);
    this.value = $;
  }
}

class X6 extends f6 {
  value;
  constructor($) {
    super($, "Cannot diff objects with symbol keys");
    this.value = $;
  }
}
var Kz = function($, X) {
  if (!Y0(X))
    return false;
  const J = [...Object.keys($), ...Object.getOwnPropertySymbols($)], Y = [...Object.keys(X), ...Object.getOwnPropertySymbols(X)];
  if (J.length !== Y.length)
    return false;
  return J.every((Z) => D$($[Z], X[Z]));
};
var Vz = function($, X) {
  return a0(X) && $.getTime() === X.getTime();
};
var Ez = function($, X) {
  if (!f(X) || $.length !== X.length)
    return false;
  return $.every((J, Y) => D$(J, X[Y]));
};
var Iz = function($, X) {
  if (!w1(X) || $.length !== X.length || Object.getPrototypeOf($).constructor.name !== Object.getPrototypeOf(X).constructor.name)
    return false;
  return $.every((J, Y) => D$(J, X[Y]));
};
var xz = function($, X) {
  return $ === X;
};
var kz = function($, X, J, Y) {
  if (!Y0(J))
    j1.Set($, X, M0(Y));
  else {
    const Z = Object.keys(J), W = Object.keys(Y);
    for (let Q of Z)
      if (!W.includes(Q))
        delete J[Q];
    for (let Q of W)
      if (!Z.includes(Q))
        J[Q] = null;
    for (let Q of W)
      WJ($, `${X}/${Q}`, J[Q], Y[Q]);
  }
};
var gz = function($, X, J, Y) {
  if (!f(J))
    j1.Set($, X, M0(Y));
  else {
    for (let Z = 0;Z < Y.length; Z++)
      WJ($, `${X}/${Z}`, J[Z], Y[Z]);
    J.splice(Y.length);
  }
};
var Tz = function($, X, J, Y) {
  if (w1(J) && J.length === Y.length)
    for (let Z = 0;Z < J.length; Z++)
      J[Z] = Y[Z];
  else
    j1.Set($, X, M0(Y));
};
var fz = function($, X, J, Y) {
  if (J === Y)
    return;
  j1.Set($, X, Y);
};
var WJ = function($, X, J, Y) {
  if (f(Y))
    return gz($, X, J, Y);
  if (w1(Y))
    return Tz($, X, J, Y);
  if (Y0(Y))
    return kz($, X, J, Y);
  if (e0(Y))
    return fz($, X, J, Y);
};
var AZ = function($) {
  return w1($) || e0($);
};
var yz = function($, X) {
  return Y0($) && f(X) || f($) && Y0(X);
};

class d6 extends d {
  constructor($) {
    super($);
  }
}
var H0 = function($, X) {
  try {
    return r($) ? $[C0].Decode(X) : X;
  } catch (J) {
    throw new zJ($, X, J);
  }
};
var dz = function($, X, J) {
  return f(J) ? H0($, J.map((Y) => l1($.items, X, Y))) : H0($, J);
};
var vz = function($, X, J) {
  if (!Y0(J) || e0(J))
    return H0($, J);
  const Y = s0($), Z = Y.reduce((q, M) => {
    return M in q ? { ...q, [M]: l1(W1($, [M]), X, q[M]) } : q;
  }, J);
  if (!r($.unevaluatedProperties))
    return H0($, Z);
  const W = Object.getOwnPropertyNames(Z), Q = $.unevaluatedProperties, z = W.reduce((q, M) => {
    return !Y.includes(M) ? { ...q, [M]: H0(Q, q[M]) } : q;
  }, Z);
  return H0($, z);
};
var pz = function($, X, J) {
  return H0($, l1($.not, X, J));
};
var hz = function($, X, J) {
  if (!Y0(J))
    return H0($, J);
  const Y = s0($), Z = Y.reduce((q, M) => {
    return M in q ? { ...q, [M]: l1($.properties[M], X, q[M]) } : q;
  }, J);
  if (!g($.additionalProperties))
    return H0($, Z);
  const W = Object.getOwnPropertyNames(Z), Q = $.additionalProperties, z = W.reduce((q, M) => {
    return !Y.includes(M) ? { ...q, [M]: H0(Q, q[M]) } : q;
  }, Z);
  return H0($, z);
};
var mz = function($, X, J) {
  if (!Y0(J))
    return H0($, J);
  const Y = Object.getOwnPropertyNames($.patternProperties)[0], Z = new RegExp(Y), W = Object.getOwnPropertyNames(J).reduce((M, A) => {
    return Z.test(A) ? { ...M, [A]: l1($.patternProperties[Y], X, M[A]) } : M;
  }, J);
  if (!g($.additionalProperties))
    return H0($, W);
  const Q = Object.getOwnPropertyNames(W), z = $.additionalProperties, q = Q.reduce((M, A) => {
    return !Z.test(A) ? { ...M, [A]: H0(z, M[A]) } : M;
  }, W);
  return H0($, q);
};
var iz = function($, X, J) {
  const Y = a($, X);
  return H0($, l1(Y, X, J));
};
var uz = function($, X, J) {
  const Y = a($, X);
  return H0($, l1(Y, X, J));
};
var cz = function($, X, J) {
  return f(J) && f($.items) ? H0($, $.items.map((Y, Z) => l1(Y, X, J[Z]))) : H0($, J);
};
var oz = function($, X, J) {
  for (let Y of $.anyOf) {
    if (!t(Y, X, J))
      continue;
    const Z = l1(Y, X, J);
    return H0($, Z);
  }
  return H0($, J);
};
var l1 = function($, X, J) {
  const Y = typeof $.$id === "string" ? [...X, $] : X, Z = $;
  switch ($[H]) {
    case "Array":
      return dz(Z, Y, J);
    case "Intersect":
      return vz(Z, Y, J);
    case "Not":
      return pz(Z, Y, J);
    case "Object":
      return hz(Z, Y, J);
    case "Record":
      return mz(Z, Y, J);
    case "Ref":
      return iz(Z, Y, J);
    case "Symbol":
      return H0(Z, J);
    case "This":
      return uz(Z, Y, J);
    case "Tuple":
      return cz(Z, Y, J);
    case "Union":
      return oz(Z, Y, J);
    default:
      return H0(Z, J);
  }
};

class A$ extends d {
  schema;
  value;
  error;
  constructor($, X, J) {
    super("Unable to decode due to invalid value");
    this.schema = $, this.value = X, this.error = J;
  }
}

class zJ extends d {
  schema;
  value;
  constructor($, X, J) {
    super(`${J instanceof Error ? J.message : "Unknown error"}`);
    this.schema = $, this.value = X;
  }
}
var f0 = function($, X) {
  try {
    return r($) ? $[C0].Encode(X) : X;
  } catch (J) {
    throw new qJ($, X, J);
  }
};
var nz = function($, X, J) {
  const Y = f0($, J);
  return f(Y) ? Y.map((Z) => t1($.items, X, Z)) : Y;
};
var lz = function($, X, J) {
  const Y = f0($, J);
  if (!Y0(J) || e0(J))
    return Y;
  const Z = s0($), W = Z.reduce((q, M) => {
    return M in Y ? { ...q, [M]: t1(W1($, [M]), X, q[M]) } : q;
  }, Y);
  if (!r($.unevaluatedProperties))
    return f0($, W);
  const Q = Object.getOwnPropertyNames(W), z = $.unevaluatedProperties;
  return Q.reduce((q, M) => {
    return !Z.includes(M) ? { ...q, [M]: f0(z, q[M]) } : q;
  }, W);
};
var tz = function($, X, J) {
  return f0($.not, f0($, J));
};
var sz = function($, X, J) {
  const Y = f0($, J);
  if (!Y0(J))
    return Y;
  const Z = s0($), W = Z.reduce((q, M) => {
    return M in q ? { ...q, [M]: t1($.properties[M], X, q[M]) } : q;
  }, Y);
  if (!g($.additionalProperties))
    return W;
  const Q = Object.getOwnPropertyNames(W), z = $.additionalProperties;
  return Q.reduce((q, M) => {
    return !Z.includes(M) ? { ...q, [M]: f0(z, q[M]) } : q;
  }, W);
};
var rz = function($, X, J) {
  const Y = f0($, J);
  if (!Y0(J))
    return Y;
  const Z = Object.getOwnPropertyNames($.patternProperties)[0], W = new RegExp(Z), Q = Object.getOwnPropertyNames(J).reduce((M, A) => {
    return W.test(A) ? { ...M, [A]: t1($.patternProperties[Z], X, M[A]) } : M;
  }, Y);
  if (!g($.additionalProperties))
    return f0($, Q);
  const z = Object.getOwnPropertyNames(Q), q = $.additionalProperties;
  return z.reduce((M, A) => {
    return !W.test(A) ? { ...M, [A]: f0(q, M[A]) } : M;
  }, Q);
};
var az = function($, X, J) {
  const Y = a($, X), Z = t1(Y, X, J);
  return f0($, Z);
};
var ez = function($, X, J) {
  const Y = a($, X), Z = t1(Y, X, J);
  return f0($, Z);
};
var $2 = function($, X, J) {
  const Y = f0($, J);
  return f($.items) ? $.items.map((Z, W) => t1(Z, X, Y[W])) : [];
};
var X2 = function($, X, J) {
  for (let Y of $.anyOf) {
    if (!t(Y, X, J))
      continue;
    const Z = t1(Y, X, J);
    return f0($, Z);
  }
  for (let Y of $.anyOf) {
    const Z = t1(Y, X, J);
    if (!t($, X, Z))
      continue;
    return f0($, Z);
  }
  return f0($, J);
};
var t1 = function($, X, J) {
  const Y = typeof $.$id === "string" ? [...X, $] : X, Z = $;
  switch ($[H]) {
    case "Array":
      return nz(Z, Y, J);
    case "Intersect":
      return lz(Z, Y, J);
    case "Not":
      return tz(Z, Y, J);
    case "Object":
      return sz(Z, Y, J);
    case "Record":
      return rz(Z, Y, J);
    case "Ref":
      return az(Z, Y, J);
    case "This":
      return ez(Z, Y, J);
    case "Tuple":
      return $2(Z, Y, J);
    case "Union":
      return X2(Z, Y, J);
    default:
      return f0(Z, J);
  }
};

class N$ extends d {
  schema;
  value;
  error;
  constructor($, X, J) {
    super("Unable to encode due to invalid value");
    this.schema = $, this.value = X, this.error = J;
  }
}

class qJ extends d {
  schema;
  value;
  constructor($, X, J) {
    super(`${J instanceof Error ? J.message : "Unknown error"}`);
    this.schema = $, this.value = X;
  }
}
var J2 = function($, X) {
  return r($) || y0($.items, X);
};
var Y2 = function($, X) {
  return r($) || y0($.items, X);
};
var Z2 = function($, X) {
  return r($) || y0($.returns, X) || $.parameters.some((J) => y0(J, X));
};
var W2 = function($, X) {
  return r($) || y0($.returns, X) || $.parameters.some((J) => y0(J, X));
};
var Q2 = function($, X) {
  return r($) || r($.unevaluatedProperties) || $.allOf.some((J) => y0(J, X));
};
var z2 = function($, X) {
  return r($) || y0($.items, X);
};
var q2 = function($, X) {
  return r($) || y0($.not, X);
};
var B2 = function($, X) {
  return r($) || Object.values($.properties).some((J) => y0(J, X)) || g($.additionalProperties) && y0($.additionalProperties, X);
};
var w2 = function($, X) {
  return r($) || y0($.item, X);
};
var M2 = function($, X) {
  const J = Object.getOwnPropertyNames($.patternProperties)[0], Y = $.patternProperties[J];
  return r($) || y0(Y, X) || g($.additionalProperties) && r($.additionalProperties);
};
var U2 = function($, X) {
  if (r($))
    return true;
  return y0(a($, X), X);
};
var G2 = function($, X) {
  if (r($))
    return true;
  return y0(a($, X), X);
};
var H2 = function($, X) {
  return r($) || !z0($.items) && $.items.some((J) => y0(J, X));
};
var D2 = function($, X) {
  return r($) || $.anyOf.some((J) => y0(J, X));
};
var y0 = function($, X) {
  const J = p($.$id) ? [...X, $] : X, Y = $;
  if ($.$id && BJ.has($.$id))
    return false;
  if ($.$id)
    BJ.add($.$id);
  switch ($[H]) {
    case "Array":
      return J2(Y, J);
    case "AsyncIterator":
      return Y2(Y, J);
    case "Constructor":
      return Z2(Y, J);
    case "Function":
      return W2(Y, J);
    case "Intersect":
      return Q2(Y, J);
    case "Iterator":
      return z2(Y, J);
    case "Not":
      return q2(Y, J);
    case "Object":
      return B2(Y, J);
    case "Promise":
      return w2(Y, J);
    case "Record":
      return M2(Y, J);
    case "Ref":
      return U2(Y, J);
    case "This":
      return G2(Y, J);
    case "Tuple":
      return H2(Y, J);
    case "Union":
      return D2(Y, J);
    default:
      return r($);
  }
};
var BJ = new Set;
var j0 = {};
G8(j0, { Patch: () => {
  {
    return j2;
  }
}, Mutate: () => {
  {
    return K2;
  }
}, Hash: () => {
  {
    return R2;
  }
}, Errors: () => {
  {
    return UJ;
  }
}, Equal: () => {
  {
    return F2;
  }
}, Encode: () => {
  {
    return C2;
  }
}, Diff: () => {
  {
    return b2;
  }
}, Default: () => {
  {
    return L2;
  }
}, Decode: () => {
  {
    return P2;
  }
}, Create: () => {
  {
    return N2;
  }
}, Convert: () => {
  {
    return S2;
  }
}, Clone: () => {
  {
    return _2;
  }
}, Clean: () => {
  {
    return O2;
  }
}, Check: () => {
  {
    return MJ;
  }
}, Cast: () => {
  {
    return A2;
  }
} });
var NZ = function($) {
  return $.map((X) => GJ(X));
};
var V2 = function($) {
  return T0(NZ($));
};
var E2 = function($) {
  return l(NZ($));
};
var I2 = function($) {
  return GJ($);
};
var GJ = function($) {
  return N0($) ? V2($.allOf) : u($) ? E2($.anyOf) : O8($) ? I2($.item) : $;
};
var x2 = function($) {
  return $.map((X) => HJ(X, false));
};
var k2 = function($) {
  return globalThis.Object.getOwnPropertyNames($).reduce((X, J) => {
    return { ...X, [J]: Q1(HJ($[J], false)) };
  }, {});
};
var p6 = function($, X) {
  return X === true ? $ : Q1($);
};
var HJ = function($, X) {
  return bX($) ? p6(o1(), X) : jX($) ? p6(o1(), X) : X1($) ? Q1(L1(x2($))) : E8($) ? L$() : m$($) ? O$() : F0($) ? p6($0(k2($)), X) : RX($) ? p6(h1([], x1()), X) : G0($) ? P$() : KX($) ? S$() : EX($) ? _$() : h$($) ? _8() : p1($) ? n($) : V8($) ? n($) : w0($) ? n($) : $0({});
};
var W6 = function($, X) {
  return $.map((J) => A1(J, X));
};
var g2 = function($, X) {
  return globalThis.Object.getOwnPropertyNames($).reduce((J, Y) => {
    return { ...J, [Y]: A1($[Y], X) };
  }, {});
};
var T2 = function($, X) {
  return $.parameters = W6($.parameters, X), $.returns = A1($.returns, X), $;
};
var f2 = function($, X) {
  return $.parameters = W6($.parameters, X), $.returns = A1($.returns, X), $;
};
var y2 = function($, X) {
  return $.allOf = W6($.allOf, X), $;
};
var d2 = function($, X) {
  return $.anyOf = W6($.anyOf, X), $;
};
var v2 = function($, X) {
  if (G0($.items))
    return $;
  return $.items = W6($.items, X), $;
};
var p2 = function($, X) {
  return $.items = A1($.items, X), $;
};
var h2 = function($, X) {
  return $.properties = g2($.properties, X), $;
};
var m2 = function($, X) {
  return $.item = A1($.item, X), $;
};
var i2 = function($, X) {
  return $.items = A1($.items, X), $;
};
var u2 = function($, X) {
  return $.items = A1($.items, X), $;
};
var c2 = function($, X) {
  const J = X.find((Z) => Z.$id === $.$ref);
  if (J === undefined)
    throw Error(`Unable to dereference schema with $id ${$.$ref}`);
  const Y = A0(J, ["$id"]);
  return A1(Y, X);
};
var DJ = function($, X) {
  return i0($) ? DJ(W8($), X) : i0(X) ? DJ($, W8(X)) : u($) ? (() => {
    const J = $.anyOf.filter((Y) => q8(Y, X) === N.False);
    return J.length === 1 ? J[0] : l(J);
  })() : q8($, X) !== N.False ? e() : $;
};
var n2 = function($, X, J) {
  return globalThis.Object.getOwnPropertyNames($).reduce((Y, Z) => {
    return { ...Y, [Z]: C$($[Z], X, J) };
  }, {});
};
var l2 = function($, X, J) {
  return n2($.properties, X, J);
};
var AJ = function($, X) {
  return i0($) ? AJ(W8($), X) : i0(X) ? AJ($, W8(X)) : u($) ? (() => {
    const J = $.anyOf.filter((Y) => q8(Y, X) !== N.False);
    return J.length === 1 ? J[0] : l(J);
  })() : q8($, X) !== N.False ? $ : e();
};
var t2 = function($, X, J) {
  return globalThis.Object.getOwnPropertyNames($).reduce((Y, Z) => {
    return { ...Y, [Z]: F$($[Z], X, J) };
  }, {});
};
var s2 = function($, X, J) {
  return t2($.properties, X, J);
};
var r2 = function($, X, J) {
  return { [$]: K1(n($), X, J) };
};
var a2 = function($, X, J) {
  return $.reduce((Y, Z) => {
    return { ...Y, ...r2(Z, X, J) };
  }, {});
};
var e2 = function($, X, J) {
  return a2($.keys, X, J);
};
var $3 = function($) {
  const [X, J] = [$.slice(0, 1), $.slice(1)];
  return [X.toLowerCase(), J].join("");
};
var X3 = function($) {
  const [X, J] = [$.slice(0, 1), $.slice(1)];
  return [X.toUpperCase(), J].join("");
};
var J3 = function($) {
  return $.toUpperCase();
};
var Y3 = function($) {
  return $.toLowerCase();
};
var Z3 = function($, X, J) {
  const Y = x8($.pattern);
  if (!S8(Y))
    return { ...$, pattern: _Z($.pattern, X) };
  const Q = [...Z$(Y)].map((M) => n(M)), z = PZ(Q, X), q = l(z);
  return Q$([q], J);
};
var _Z = function($, X) {
  return typeof $ === "string" ? X === "Uncapitalize" ? $3($) : X === "Capitalize" ? X3($) : X === "Uppercase" ? J3($) : X === "Lowercase" ? Y3($) : $ : $.toString();
};
var PZ = function($, X) {
  return $.map((J) => K1(J, X));
};
var W3 = function($, X, J) {
  return globalThis.Object.getOwnPropertyNames($).reduce((Y, Z) => {
    return { ...Y, [Z]: C8($[Z], X, J) };
  }, {});
};
var Q3 = function($, X, J) {
  return W3($.properties, X, J);
};
var z3 = function($, X) {
  return $.map((J) => OJ(J, X));
};
var q3 = function($, X) {
  return $.map((J) => OJ(J, X));
};
var B3 = function($, X) {
  const { [X]: J, ...Y } = $;
  return Y;
};
var w3 = function($, X) {
  return X.reduce((J, Y) => {
    return B3(J, Y);
  }, $);
};
var M3 = function($, X, J) {
  return { [X]: C8($, [X], J) };
};
var U3 = function($, X, J) {
  return X.reduce((Y, Z) => {
    return { ...Y, ...M3($, Z, J) };
  }, {});
};
var G3 = function($, X, J) {
  return U3($, X.keys, J);
};
var FZ = function($) {
  return $.map((X) => bZ(X));
};
var H3 = function($) {
  return globalThis.Object.getOwnPropertyNames($).reduce((X, J) => {
    return { ...X, [J]: u0($[J]) };
  }, {});
};
var bZ = function($) {
  return N0($) ? T0(FZ($.allOf)) : u($) ? l(FZ($.anyOf)) : O0($) ? $0(H3($.properties)) : $0({});
};
var D3 = function($, X) {
  return globalThis.Object.getOwnPropertyNames($).reduce((J, Y) => {
    return { ...J, [Y]: b$($[Y], X) };
  }, {});
};
var A3 = function($, X) {
  return D3($.properties, X);
};
var N3 = function($, X, J) {
  return globalThis.Object.getOwnPropertyNames($).reduce((Y, Z) => {
    return { ...Y, [Z]: F8($[Z], X, J) };
  }, {});
};
var O3 = function($, X, J) {
  return N3($.properties, X, J);
};
var S3 = function($, X) {
  return $.map((J) => _J(J, X));
};
var _3 = function($, X) {
  return $.map((J) => _J(J, X));
};
var P3 = function($, X) {
  return X.reduce((J, Y) => {
    return Y in $ ? { ...J, [Y]: $[Y] } : J;
  }, {});
};
var L3 = function($, X, J) {
  return { [X]: F8($, [X], J) };
};
var C3 = function($, X, J) {
  return X.reduce((Y, Z) => {
    return { ...Y, ...L3($, Z, J) };
  }, {});
};
var F3 = function($, X, J) {
  return C3($, X.keys, J);
};
var Q6 = function($, X, J) {
  return { ...J, [H]: "Record", type: "object", patternProperties: { [$]: C(X) } };
};
var PJ = function($, X, J) {
  const Y = $.reduce((Z, W) => ({ ...Z, [W]: C(X) }), {});
  return $0(Y, { ...J, [S1]: "Record" });
};
var b3 = function($, X, J) {
  return n$($) ? PJ(t0($), X, J) : Q6($.pattern, X, J);
};
var R3 = function($, X, J) {
  return PJ(t0(l($)), X, J);
};
var j3 = function($, X, J) {
  return PJ([$.toString()], X, J);
};
var K3 = function($, X, J) {
  return Q6($.source, X, J);
};
var V3 = function($, X, J) {
  const Y = G0($.pattern) ? Z8 : $.pattern;
  return Q6(Y, X, J);
};
var E3 = function($, X, J) {
  return Q6(i1, X, J);
};
var I3 = function($, X, J) {
  return Q6(i1, X, J);
};
var x3 = 0;
var KZ = function($) {
  return $.map((X) => VZ(X));
};
var k3 = function($) {
  return globalThis.Object.getOwnPropertyNames($).reduce((X, J) => {
    return { ...X, [J]: A0($[J], [$1]) };
  }, {});
};
var VZ = function($) {
  return N0($) ? T0(KZ($.allOf)) : u($) ? l(KZ($.anyOf)) : O0($) ? $0(k3($.properties)) : $0({});
};
var g3 = function($, X) {
  return globalThis.Object.getOwnPropertyNames($).reduce((J, Y) => {
    return { ...J, [Y]: R$($[Y], X) };
  }, {});
};
var T3 = function($, X) {
  return g3($.properties, X);
};
var f3 = function($) {
  return N0($) ? [...$.allOf] : u($) ? [...$.anyOf] : _1($) ? [...$.items ?? []] : [];
};

class LJ {
  schema;
  constructor($) {
    this.schema = $;
  }
  Decode($) {
    return new CJ(this.schema, $);
  }
}

class CJ {
  schema;
  decode;
  constructor($, X) {
    this.schema = $, this.decode = X;
  }
  EncodeTransform($, X) {
    const Z = { Encode: (W) => X[C0].Encode($(W)), Decode: (W) => this.decode(X[C0].Decode(W)) };
    return { ...X, [C0]: Z };
  }
  EncodeSchema($, X) {
    const J = { Decode: this.decode, Encode: $ };
    return { ...X, [C0]: J };
  }
  Encode($) {
    const X = C(this.schema);
    return r(X) ? this.EncodeTransform($, X) : this.EncodeSchema($, X);
  }
}
var FJ = {};
G8(FJ, { Void: () => {
  {
    return zX;
  }
}, Uppercase: () => {
  {
    return t6;
  }
}, Unsafe: () => {
  {
    return t8;
  }
}, Unknown: () => {
  {
    return x1;
  }
}, Union: () => {
  {
    return l;
  }
}, Undefined: () => {
  {
    return P$;
  }
}, Uncapitalize: () => {
  {
    return l6;
  }
}, Uint8Array: () => {
  {
    return L$;
  }
}, Tuple: () => {
  {
    return L1;
  }
}, Transform: () => {
  {
    return QX;
  }
}, TemplateLiteral: () => {
  {
    return Q$;
  }
}, Symbol: () => {
  {
    return _$;
  }
}, String: () => {
  {
    return Z1;
  }
}, Strict: () => {
  {
    return WX;
  }
}, ReturnType: () => {
  {
    return ZX;
  }
}, Rest: () => {
  {
    return YX;
  }
}, Required: () => {
  {
    return R$;
  }
}, RegExp: () => {
  {
    return JX;
  }
}, Ref: () => {
  {
    return XX;
  }
}, Recursive: () => {
  {
    return $X;
  }
}, Record: () => {
  {
    return e6;
  }
}, ReadonlyOptional: () => {
  {
    return a6;
  }
}, Readonly: () => {
  {
    return Q1;
  }
}, Promise: () => {
  {
    return q$;
  }
}, Pick: () => {
  {
    return F8;
  }
}, Partial: () => {
  {
    return b$;
  }
}, Parameters: () => {
  {
    return r6;
  }
}, Optional: () => {
  {
    return u0;
  }
}, Omit: () => {
  {
    return C8;
  }
}, Object: () => {
  {
    return $0;
  }
}, Number: () => {
  {
    return P1;
  }
}, Null: () => {
  {
    return S$;
  }
}, Not: () => {
  {
    return s6;
  }
}, Never: () => {
  {
    return e;
  }
}, Mapped: () => {
  {
    return j6;
  }
}, Lowercase: () => {
  {
    return n6;
  }
}, Literal: () => {
  {
    return n;
  }
}, KeyOf: () => {
  {
    return B$;
  }
}, Iterator: () => {
  {
    return z$;
  }
}, Intersect: () => {
  {
    return T0;
  }
}, Integer: () => {
  {
    return c6;
  }
}, InstanceType: () => {
  {
    return u6;
  }
}, Index: () => {
  {
    return W1;
  }
}, Function: () => {
  {
    return h1;
  }
}, Extract: () => {
  {
    return F$;
  }
}, Extends: () => {
  {
    return P8;
  }
}, Exclude: () => {
  {
    return C$;
  }
}, Enum: () => {
  {
    return i6;
  }
}, Deref: () => {
  {
    return A1;
  }
}, Date: () => {
  {
    return O$;
  }
}, ConstructorParameters: () => {
  {
    return m6;
  }
}, Constructor: () => {
  {
    return a8;
  }
}, Const: () => {
  {
    return h6;
  }
}, Composite: () => {
  {
    return H$;
  }
}, Capitalize: () => {
  {
    return o6;
  }
}, Boolean: () => {
  {
    return W$;
  }
}, BigInt: () => {
  {
    return _8;
  }
}, Awaited: () => {
  {
    return v6;
  }
}, AsyncIterator: () => {
  {
    return r8;
  }
}, Array: () => {
  {
    return s8;
  }
}, Any: () => {
  {
    return o1;
  }
} });
var qX = FJ;

class jJ {
  schema;
  references;
  checkFunc;
  code;
  hasTransform;
  constructor($, X, J, Y) {
    this.schema = $, this.references = X, this.checkFunc = J, this.code = Y, this.hasTransform = wJ($, X);
  }
  Code() {
    return this.code;
  }
  Errors($) {
    return U$(this.schema, this.references, $);
  }
  Check($) {
    return this.checkFunc($);
  }
  Decode($) {
    if (!this.checkFunc($))
      throw new A$(this.schema, $, this.Errors($).First());
    return this.hasTransform ? Y6(this.schema, this.references, $) : $;
  }
  Encode($) {
    const X = this.hasTransform ? Z6(this.schema, this.references, $) : $;
    if (!this.checkFunc(X))
      throw new N$(this.schema, $, this.Errors($).First());
    return X;
  }
}
var B8;
(function($) {
  function X(W) {
    return W === 36;
  }
  $.DollarSign = X;
  function J(W) {
    return W === 95;
  }
  $.IsUnderscore = J;
  function Y(W) {
    return W >= 65 && W <= 90 || W >= 97 && W <= 122;
  }
  $.IsAlpha = Y;
  function Z(W) {
    return W >= 48 && W <= 57;
  }
  $.IsNumeric = Z;
})(B8 || (B8 = {}));
var BX;
(function($) {
  function X(W) {
    if (W.length === 0)
      return false;
    return B8.IsNumeric(W.charCodeAt(0));
  }
  function J(W) {
    if (X(W))
      return false;
    for (let Q = 0;Q < W.length; Q++) {
      const z = W.charCodeAt(Q);
      if (!(B8.IsAlpha(z) || B8.IsNumeric(z) || B8.DollarSign(z) || B8.IsUnderscore(z)))
        return false;
    }
    return true;
  }
  function Y(W) {
    return W.replace(/'/g, "\\'");
  }
  function Z(W, Q) {
    return J(Q) ? `${W}.${Q}` : `${W}['${Y(Q)}']`;
  }
  $.Encode = Z;
})(BX || (BX = {}));
var bJ;
(function($) {
  function X(J) {
    const Y = [];
    for (let Z = 0;Z < J.length; Z++) {
      const W = J.charCodeAt(Z);
      if (B8.IsNumeric(W) || B8.IsAlpha(W))
        Y.push(J.charAt(Z));
      else
        Y.push(`_${W}_`);
    }
    return Y.join("").replace(/__/g, "_");
  }
  $.Encode = X;
})(bJ || (bJ = {}));
var RJ;
(function($) {
  function X(J) {
    return J.replace(/'/g, "\\'");
  }
  $.Escape = X;
})(RJ || (RJ = {}));

class KJ extends d {
  schema;
  constructor($) {
    super("Unknown type");
    this.schema = $;
  }
}

class wX extends d {
  schema;
  constructor($) {
    super("Preflight validation check failed to guard for the given schema");
    this.schema = $;
  }
}
var g8;
(function($) {
  function X(Q, z, q) {
    return S0.ExactOptionalPropertyTypes ? `('${z}' in ${Q} ? ${q} : true)` : `(${BX.Encode(Q, z)} !== undefined ? ${q} : true)`;
  }
  $.IsExactOptionalProperty = X;
  function J(Q) {
    return !S0.AllowArrayObject ? `(typeof ${Q} === 'object' && ${Q} !== null && !Array.isArray(${Q}))` : `(typeof ${Q} === 'object' && ${Q} !== null)`;
  }
  $.IsObjectLike = J;
  function Y(Q) {
    return !S0.AllowArrayObject ? `(typeof ${Q} === 'object' && ${Q} !== null && !Array.isArray(${Q}) && !(${Q} instanceof Date) && !(${Q} instanceof Uint8Array))` : `(typeof ${Q} === 'object' && ${Q} !== null && !(${Q} instanceof Date) && !(${Q} instanceof Uint8Array))`;
  }
  $.IsRecordLike = Y;
  function Z(Q) {
    return !S0.AllowNaN ? `(typeof ${Q} === 'number' && Number.isFinite(${Q}))` : `typeof ${Q} === 'number'`;
  }
  $.IsNumberLike = Z;
  function W(Q) {
    return S0.AllowNullVoid ? `(${Q} === undefined || ${Q} === null)` : `${Q} === undefined`;
  }
  $.IsVoidLike = W;
})(g8 || (g8 = {}));
var j$;
(function($) {
  function X(w) {
    return w[H] === "Any" || w[H] === "Unknown";
  }
  function* J(w, K, U) {
    yield "true";
  }
  function* Y(w, K, U) {
    yield `Array.isArray(${U})`;
    const [y, V] = [b("value", "any"), b("acc", "number")];
    if (k(w.maxItems))
      yield `${U}.length <= ${w.maxItems}`;
    if (k(w.minItems))
      yield `${U}.length >= ${w.minItems}`;
    const I = B1(w.items, K, "value");
    if (yield `${U}.every((${y}) => ${I})`, g(w.contains) || k(w.minContains) || k(w.maxContains)) {
      const Q0 = g(w.contains) ? w.contains : e(), r0 = B1(Q0, K, "value"), X8 = k(w.minContains) ? [`(count >= ${w.minContains})`] : [], V1 = k(w.maxContains) ? [`(count <= ${w.maxContains})`] : [], y1 = `const count = value.reduce((${V}, ${y}) => ${r0} ? acc + 1 : acc, 0)`, D6 = ["(count > 0)", ...X8, ...V1].join(" && ");
      yield `((${y}) => { ${y1}; return ${D6}})(${U})`;
    }
    if (w.uniqueItems === true)
      yield `((${y}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${U})`;
  }
  function* Z(w, K, U) {
    yield `(typeof value === 'object' && Symbol.asyncIterator in ${U})`;
  }
  function* W(w, K, U) {
    if (yield `(typeof ${U} === 'bigint')`, k0(w.exclusiveMaximum))
      yield `${U} < BigInt(${w.exclusiveMaximum})`;
    if (k0(w.exclusiveMinimum))
      yield `${U} > BigInt(${w.exclusiveMinimum})`;
    if (k0(w.maximum))
      yield `${U} <= BigInt(${w.maximum})`;
    if (k0(w.minimum))
      yield `${U} >= BigInt(${w.minimum})`;
    if (k0(w.multipleOf))
      yield `(${U} % BigInt(${w.multipleOf})) === 0`;
  }
  function* Q(w, K, U) {
    yield `(typeof ${U} === 'boolean')`;
  }
  function* z(w, K, U) {
    yield* O1(w.returns, K, `${U}.prototype`);
  }
  function* q(w, K, U) {
    if (yield `(${U} instanceof Date) && Number.isFinite(${U}.getTime())`, k(w.exclusiveMaximumTimestamp))
      yield `${U}.getTime() < ${w.exclusiveMaximumTimestamp}`;
    if (k(w.exclusiveMinimumTimestamp))
      yield `${U}.getTime() > ${w.exclusiveMinimumTimestamp}`;
    if (k(w.maximumTimestamp))
      yield `${U}.getTime() <= ${w.maximumTimestamp}`;
    if (k(w.minimumTimestamp))
      yield `${U}.getTime() >= ${w.minimumTimestamp}`;
    if (k(w.multipleOfTimestamp))
      yield `(${U}.getTime() % ${w.multipleOfTimestamp}) === 0`;
  }
  function* M(w, K, U) {
    yield `(typeof ${U} === 'function')`;
  }
  function* A(w, K, U) {
    if (yield `(typeof ${U} === 'number' && Number.isInteger(${U}))`, k(w.exclusiveMaximum))
      yield `${U} < ${w.exclusiveMaximum}`;
    if (k(w.exclusiveMinimum))
      yield `${U} > ${w.exclusiveMinimum}`;
    if (k(w.maximum))
      yield `${U} <= ${w.maximum}`;
    if (k(w.minimum))
      yield `${U} >= ${w.minimum}`;
    if (k(w.multipleOf))
      yield `(${U} % ${w.multipleOf}) === 0`;
  }
  function* O(w, K, U) {
    const y = w.allOf.map((V) => B1(V, K, U)).join(" && ");
    if (w.unevaluatedProperties === false) {
      const V = S(`${new RegExp(u1(w))};`), I = `Object.getOwnPropertyNames(${U}).every(key => ${V}.test(key))`;
      yield `(${y} && ${I})`;
    } else if (g(w.unevaluatedProperties)) {
      const V = S(`${new RegExp(u1(w))};`), I = `Object.getOwnPropertyNames(${U}).every(key => ${V}.test(key) || ${B1(w.unevaluatedProperties, K, `${U}[key]`)})`;
      yield `(${y} && ${I})`;
    } else
      yield `(${y})`;
  }
  function* T(w, K, U) {
    yield `(typeof value === 'object' && Symbol.iterator in ${U})`;
  }
  function* E(w, K, U) {
    if (typeof w.const === "number" || typeof w.const === "boolean")
      yield `(${U} === ${w.const})`;
    else
      yield `(${U} === '${RJ.Escape(w.const)}')`;
  }
  function* _(w, K, U) {
    yield "false";
  }
  function* x(w, K, U) {
    yield `(!${B1(w.not, K, U)})`;
  }
  function* P(w, K, U) {
    yield `(${U} === null)`;
  }
  function* j(w, K, U) {
    if (yield g8.IsNumberLike(U), k(w.exclusiveMaximum))
      yield `${U} < ${w.exclusiveMaximum}`;
    if (k(w.exclusiveMinimum))
      yield `${U} > ${w.exclusiveMinimum}`;
    if (k(w.maximum))
      yield `${U} <= ${w.maximum}`;
    if (k(w.minimum))
      yield `${U} >= ${w.minimum}`;
    if (k(w.multipleOf))
      yield `(${U} % ${w.multipleOf}) === 0`;
  }
  function* F(w, K, U) {
    if (yield g8.IsObjectLike(U), k(w.minProperties))
      yield `Object.getOwnPropertyNames(${U}).length >= ${w.minProperties}`;
    if (k(w.maxProperties))
      yield `Object.getOwnPropertyNames(${U}).length <= ${w.maxProperties}`;
    const y = Object.getOwnPropertyNames(w.properties);
    for (let V of y) {
      const I = BX.Encode(U, V), Q0 = w.properties[V];
      if (w.required && w.required.includes(V)) {
        if (yield* O1(Q0, K, I), c1(Q0) || X(Q0))
          yield `('${V}' in ${U})`;
      } else {
        const r0 = B1(Q0, K, I);
        yield g8.IsExactOptionalProperty(U, V, r0);
      }
    }
    if (w.additionalProperties === false)
      if (w.required && w.required.length === y.length)
        yield `Object.getOwnPropertyNames(${U}).length === ${y.length}`;
      else {
        const V = `[${y.map((I) => `'${I}'`).join(", ")}]`;
        yield `Object.getOwnPropertyNames(${U}).every(key => ${V}.includes(key))`;
      }
    if (typeof w.additionalProperties === "object") {
      const V = B1(w.additionalProperties, K, `${U}[key]`), I = `[${y.map((Q0) => `'${Q0}'`).join(", ")}]`;
      yield `(Object.getOwnPropertyNames(${U}).every(key => ${I}.includes(key) || ${V}))`;
    }
  }
  function* v(w, K, U) {
    yield `(typeof value === 'object' && typeof ${U}.then === 'function')`;
  }
  function* D(w, K, U) {
    if (yield g8.IsRecordLike(U), k(w.minProperties))
      yield `Object.getOwnPropertyNames(${U}).length >= ${w.minProperties}`;
    if (k(w.maxProperties))
      yield `Object.getOwnPropertyNames(${U}).length <= ${w.maxProperties}`;
    const [y, V] = Object.entries(w.patternProperties)[0], I = S(`${new RegExp(y)}`), Q0 = B1(V, K, "value"), r0 = g(w.additionalProperties) ? B1(w.additionalProperties, K, U) : w.additionalProperties === false ? "false" : "true", X8 = `(${I}.test(key) ? ${Q0} : ${r0})`;
    yield `(Object.entries(${U}).every(([key, value]) => ${X8}))`;
  }
  function* h0(w, K, U) {
    const y = a(w, K);
    if (L0.functions.has(w.$ref))
      return yield `${T$(w.$ref)}(${U})`;
    yield* O1(y, K, U);
  }
  function* M8(w, K, U) {
    const y = S(`${new RegExp(w.source, w.flags)};`);
    yield `(typeof ${U} === 'string')`, yield `${y}.test(${U})`;
  }
  function* g$(w, K, U) {
    if (yield `(typeof ${U} === 'string')`, k(w.maxLength))
      yield `${U}.length <= ${w.maxLength}`;
    if (k(w.minLength))
      yield `${U}.length >= ${w.minLength}`;
    if (w.pattern !== undefined)
      yield `${S(`${new RegExp(w.pattern)};`)}.test(${U})`;
    if (w.format !== undefined)
      yield `format('${w.format}', ${U})`;
  }
  function* v8(w, K, U) {
    yield `(typeof ${U} === 'symbol')`;
  }
  function* K0(w, K, U) {
    yield `(typeof ${U} === 'string')`, yield `${S(`${new RegExp(w.pattern)};`)}.test(${U})`;
  }
  function* f1(w, K, U) {
    yield `${T$(w.$ref)}(${U})`;
  }
  function* U8(w, K, U) {
    if (yield `Array.isArray(${U})`, w.items === undefined)
      return yield `${U}.length === 0`;
    yield `(${U}.length === ${w.maxItems})`;
    for (let y = 0;y < w.items.length; y++)
      yield `${B1(w.items[y], K, `${U}[${y}]`)}`;
  }
  function* p8(w, K, U) {
    yield `${U} === undefined`;
  }
  function* nJ(w, K, U) {
    yield `(${w.anyOf.map((V) => B1(V, K, U)).join(" || ")})`;
  }
  function* lJ(w, K, U) {
    if (yield `${U} instanceof Uint8Array`, k(w.maxByteLength))
      yield `(${U}.length <= ${w.maxByteLength})`;
    if (k(w.minByteLength))
      yield `(${U}.length >= ${w.minByteLength})`;
  }
  function* h8(w, K, U) {
    yield "true";
  }
  function* m8(w, K, U) {
    yield g8.IsVoidLike(U);
  }
  function* D0(w, K, U) {
    const y = L0.instances.size;
    L0.instances.set(y, w), yield `kind('${w[H]}', ${y}, ${U})`;
  }
  function* O1(w, K, U, y = true) {
    const V = p(w.$id) ? [...K, w] : K, I = w;
    if (y && p(w.$id)) {
      const Q0 = T$(w.$id);
      if (L0.functions.has(Q0))
        return yield `${Q0}(${U})`;
      else {
        const r0 = L(Q0, w, K, "value", false);
        return L0.functions.set(Q0, r0), yield `${Q0}(${U})`;
      }
    }
    switch (I[H]) {
      case "Any":
        return yield* J(I, V, U);
      case "Array":
        return yield* Y(I, V, U);
      case "AsyncIterator":
        return yield* Z(I, V, U);
      case "BigInt":
        return yield* W(I, V, U);
      case "Boolean":
        return yield* Q(I, V, U);
      case "Constructor":
        return yield* z(I, V, U);
      case "Date":
        return yield* q(I, V, U);
      case "Function":
        return yield* M(I, V, U);
      case "Integer":
        return yield* A(I, V, U);
      case "Intersect":
        return yield* O(I, V, U);
      case "Iterator":
        return yield* T(I, V, U);
      case "Literal":
        return yield* E(I, V, U);
      case "Never":
        return yield* _(I, V, U);
      case "Not":
        return yield* x(I, V, U);
      case "Null":
        return yield* P(I, V, U);
      case "Number":
        return yield* j(I, V, U);
      case "Object":
        return yield* F(I, V, U);
      case "Promise":
        return yield* v(I, V, U);
      case "Record":
        return yield* D(I, V, U);
      case "Ref":
        return yield* h0(I, V, U);
      case "RegExp":
        return yield* M8(I, V, U);
      case "String":
        return yield* g$(I, V, U);
      case "Symbol":
        return yield* v8(I, V, U);
      case "TemplateLiteral":
        return yield* K0(I, V, U);
      case "This":
        return yield* f1(I, V, U);
      case "Tuple":
        return yield* U8(I, V, U);
      case "Undefined":
        return yield* p8(I, V, U);
      case "Union":
        return yield* nJ(I, V, U);
      case "Uint8Array":
        return yield* lJ(I, V, U);
      case "Unknown":
        return yield* h8(I, V, U);
      case "Void":
        return yield* m8(I, V, U);
      default:
        if (!V0.Has(I[H]))
          throw new KJ(w);
        return yield* D0(I, V, U);
    }
  }
  const L0 = { language: "javascript", functions: new Map, variables: new Map, instances: new Map };
  function B1(w, K, U, y = true) {
    return `(${[...O1(w, K, U, y)].join(" && ")})`;
  }
  function T$(w) {
    return `check_${bJ.Encode(w)}`;
  }
  function S(w) {
    const K = `local_${L0.variables.size}`;
    return L0.variables.set(K, `const ${K} = ${w}`), K;
  }
  function L(w, K, U, y, V = true) {
    const [I, Q0] = ["\n", (y1) => "".padStart(y1, " ")], r0 = b("value", "any"), X8 = s("boolean"), V1 = [...O1(K, U, y, V)].map((y1) => `${Q0(4)}${y1}`).join(` &&${I}`);
    return `function ${w}(${r0})${X8} {${I}${Q0(2)}return (${I}${V1}${I}${Q0(2)})\n}`;
  }
  function b(w, K) {
    const U = L0.language === "typescript" ? `: ${K}` : "";
    return `${w}${U}`;
  }
  function s(w) {
    return L0.language === "typescript" ? `: ${w}` : "";
  }
  function B0(w, K, U) {
    const y = L("check", w, K, "value"), V = b("value", "any"), I = s("boolean"), Q0 = [...L0.functions.values()], r0 = [...L0.variables.values()], X8 = p(w.$id) ? `return function check(${V})${I} {\n  return ${T$(w.$id)}(value)\n}` : `return ${y}`;
    return [...r0, ...Q0, X8].join("\n");
  }
  function i8(...w) {
    const K = { language: "javascript" }, [U, y, V] = w.length === 2 && f(w[1]) ? [w[0], w[1], K] : w.length === 2 && !f(w[1]) ? [w[0], [], w[1]] : w.length === 3 ? [w[0], w[1], w[2]] : w.length === 1 ? [w[0], [], K] : [null, [], K];
    if (L0.language = V.language, L0.variables.clear(), L0.functions.clear(), L0.instances.clear(), !g(U))
      throw new wX(U);
    for (let I of y)
      if (!g(I))
        throw new wX(I);
    return B0(U, y, V);
  }
  $.Code = i8;
  function U0(w, K = []) {
    const U = i8(w, K, { language: "javascript" }), y = globalThis.Function("kind", "format", "hash", U), V = new Map(L0.instances);
    function I(V1, y1, D6) {
      if (!V0.Has(V1) || !V.has(y1))
        return false;
      const B4 = V0.Get(V1), w4 = V.get(y1);
      return B4(w4, D6);
    }
    function Q0(V1, y1) {
      if (!g0.Has(V1))
        return false;
      return g0.Get(V1)(y1);
    }
    function r0(V1) {
      return Q8(V1);
    }
    const X8 = y(I, Q0, r0);
    return new jJ(w, K, X8, U);
  }
  $.Compile = U0;
})(j$ || (j$ = {}));
var v3 = function($, X) {
  if (typeof $ !== "string")
    throw new TypeError("argument str must be a string");
  var J = {}, Y = X || {}, Z = Y.decode || h3, W = 0;
  while (W < $.length) {
    var Q = $.indexOf("=", W);
    if (Q === -1)
      break;
    var z = $.indexOf(";", W);
    if (z === -1)
      z = $.length;
    else if (z < Q) {
      W = $.lastIndexOf(";", Q - 1) + 1;
      continue;
    }
    var q = $.slice(W, Q).trim();
    if (J[q] === undefined) {
      var M = $.slice(Q + 1, z).trim();
      if (M.charCodeAt(0) === 34)
        M = M.slice(1, -1);
      J[q] = u3(M, Z);
    }
    W = z + 1;
  }
  return J;
};
var p3 = function($, X, J) {
  var Y = J || {}, Z = Y.encode || m3;
  if (typeof Z !== "function")
    throw new TypeError("option encode is invalid");
  if (!MX.test($))
    throw new TypeError("argument name is invalid");
  var W = Z(X);
  if (W && !MX.test(W))
    throw new TypeError("argument val is invalid");
  var Q = $ + "=" + W;
  if (Y.maxAge != null) {
    var z = Y.maxAge - 0;
    if (isNaN(z) || !isFinite(z))
      throw new TypeError("option maxAge is invalid");
    Q += "; Max-Age=" + Math.floor(z);
  }
  if (Y.domain) {
    if (!MX.test(Y.domain))
      throw new TypeError("option domain is invalid");
    Q += "; Domain=" + Y.domain;
  }
  if (Y.path) {
    if (!MX.test(Y.path))
      throw new TypeError("option path is invalid");
    Q += "; Path=" + Y.path;
  }
  if (Y.expires) {
    var q = Y.expires;
    if (!i3(q) || isNaN(q.valueOf()))
      throw new TypeError("option expires is invalid");
    Q += "; Expires=" + q.toUTCString();
  }
  if (Y.httpOnly)
    Q += "; HttpOnly";
  if (Y.secure)
    Q += "; Secure";
  if (Y.partitioned)
    Q += "; Partitioned";
  if (Y.priority) {
    var M = typeof Y.priority === "string" ? Y.priority.toLowerCase() : Y.priority;
    switch (M) {
      case "low":
        Q += "; Priority=Low";
        break;
      case "medium":
        Q += "; Priority=Medium";
        break;
      case "high":
        Q += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (Y.sameSite) {
    var A = typeof Y.sameSite === "string" ? Y.sameSite.toLowerCase() : Y.sameSite;
    switch (A) {
      case true:
        Q += "; SameSite=Strict";
        break;
      case "lax":
        Q += "; SameSite=Lax";
        break;
      case "strict":
        Q += "; SameSite=Strict";
        break;
      case "none":
        Q += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return Q;
};
var h3 = function($) {
  return $.indexOf("%") !== -1 ? decodeURIComponent($) : $;
};
var m3 = function($) {
  return encodeURIComponent($);
};
var i3 = function($) {
  return d3.call($) === "[object Date]" || $ instanceof Date;
};
var u3 = function($, X) {
  try {
    return X($);
  } catch (J) {
    return $;
  }
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var UX = v3;
var GX = p3;
var d3 = Object.prototype.toString;
var MX = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

class g1 {
  $;
  X;
  name;
  setter;
  constructor($, X = {}) {
    this._value = $;
    this.property = X;
  }
  get() {
    return this._value;
  }
  get value() {
    return this._value;
  }
  set value($) {
    if (typeof $ === "object") {
      if (JSON.stringify(this.value) === JSON.stringify($))
        return;
    } else if (this.value === $)
      return;
    this._value = $, this.sync();
  }
  add($) {
    const X = Object.assign(this.property, typeof $ === "function" ? $(Object.assign(this.property, this.value)) : $);
    if ("value" in X)
      this._value = X.value, delete X.value;
    return this.property = X, this.sync();
  }
  set($) {
    const X = typeof $ === "function" ? $(Object.assign(this.property, this.value)) : $;
    if ("value" in X)
      this._value = X.value, delete X.value;
    return this.property = X, this.sync();
  }
  remove($) {
    if (this.value === undefined)
      return;
    this.set({ domain: $?.domain, expires: new Date(0), maxAge: 0, path: $?.path, sameSite: $?.sameSite, secure: $?.secure, value: "" });
  }
  get domain() {
    return this.property.domain;
  }
  set domain($) {
    if (this.property.domain === $)
      return;
    this.property.domain = $, this.sync();
  }
  get expires() {
    return this.property.expires;
  }
  set expires($) {
    if (this.property.expires?.getTime() === $?.getTime())
      return;
    this.property.expires = $, this.sync();
  }
  get httpOnly() {
    return this.property.httpOnly;
  }
  set httpOnly($) {
    if (this.property.domain === $)
      return;
    this.property.httpOnly = $, this.sync();
  }
  get maxAge() {
    return this.property.maxAge;
  }
  set maxAge($) {
    if (this.property.maxAge === $)
      return;
    this.property.maxAge = $, this.sync();
  }
  get path() {
    return this.property.path;
  }
  set path($) {
    if (this.property.path === $)
      return;
    this.property.path = $, this.sync();
  }
  get priority() {
    return this.property.priority;
  }
  set priority($) {
    if (this.property.priority === $)
      return;
    this.property.priority = $, this.sync();
  }
  get sameSite() {
    return this.property.sameSite;
  }
  set sameSite($) {
    if (this.property.sameSite === $)
      return;
    this.property.sameSite = $, this.sync();
  }
  get secure() {
    return this.property.secure;
  }
  set secure($) {
    if (this.property.secure === $)
      return;
    this.property.secure = $, this.sync();
  }
  toString() {
    return typeof this.value === "object" ? JSON.stringify(this.value) : this.value?.toString() ?? "";
  }
  sync() {
    if (!this.name || !this.setter)
      return this;
    if (!this.setter.cookie)
      this.setter.cookie = { [this.name]: Object.assign(this.property, { value: this.toString() }) };
    else
      this.setter.cookie[this.name] = Object.assign(this.property, { value: this.toString() });
    return this;
  }
}
var xZ = ($, X, J) => new Proxy($, { get(Y, Z) {
  if (Z in Y)
    return Y[Z];
  const W = new g1(undefined, J ? { ...J } : undefined);
  return W.setter = X, W.name = Z, W;
}, set(Y, Z, W) {
  if (!(W instanceof g1))
    return false;
  if (!X.cookie)
    X.cookie = {};
  return W.setter = X, W.name = Z, W.sync(), Y[Z] = W, true;
} });
var HX = async ($, X, { secret: J, sign: Y, ...Z } = {}) => {
  if (!X)
    return xZ({}, $, Z);
  const W = {}, Q = typeof J === "string";
  if (Y && Y !== true && !Array.isArray(Y))
    Y = [Y];
  const z = Object.keys(UX(X));
  for (let q = 0;q < z.length; q++) {
    const M = z[q];
    let A = UX(X)[M];
    if (Y === true || Y?.includes(M)) {
      if (!J)
        throw new Error("No secret is provided to cookie plugin");
      if (Q) {
        if (A = await VJ(A, J), A === false)
          throw new z6(M);
      } else {
        let E = true;
        for (let _ = 0;_ < J.length; _++) {
          const x = await VJ(A, J[_]);
          if (x !== false) {
            A = x, E = false;
            break;
          }
        }
        if (E)
          throw new z6(M);
      }
    }
    if (A === undefined)
      continue;
    const O = A.charCodeAt(0);
    if (O === 123 || O === 91)
      try {
        const E = new g1(JSON.parse(A));
        E.setter = $, E.name = M, W[M] = E;
        continue;
      } catch {
      }
    if (DX(A))
      A = +A;
    else if (A === "true")
      A = true;
    else if (A === "false")
      A = false;
    const T = new g1(A, Z);
    T.setter = $, T.name = M, W[M] = T;
  }
  return xZ(W, $);
};
var EJ = "toJSON" in new Headers;
var T1 = ($) => {
  for (let X in $)
    return true;
  return false;
};
var q6 = ($, X) => {
  const J = $.size;
  if (J && X && X.status !== 206 && X.status !== 304 && X.status !== 412 && X.status !== 416 || !X && J) {
    if (X) {
      if (X.headers instanceof Headers) {
        if (EJ)
          X.headers = X.headers.toJSON();
        else
          for (let [Y, Z] of X.headers.entries())
            if (Y in X.headers)
              X.headers[Y] = Z;
      }
      return new Response($, { status: X.status, headers: Object.assign({ "accept-ranges": "bytes", "content-range": `bytes 0-${J - 1}/${J}` }, X.headers) });
    }
    return new Response($, { headers: { "accept-ranges": "bytes", "content-range": `bytes 0-${J - 1}/${J}` } });
  }
  return new Response($);
};
var kZ = ($, X) => {
  if (!$ || !Array.isArray(X))
    return $;
  $.delete("Set-Cookie");
  for (let J = 0;J < X.length; J++) {
    const Y = X[J].indexOf("=");
    $.append("Set-Cookie", `${X[J].slice(0, Y)}=${X[J].slice(Y + 1)}`);
  }
  return $;
};
var gZ = ($) => {
  if (!$ || typeof $ !== "object" || !T1($))
    return;
  const X = [];
  for (let [J, Y] of Object.entries($)) {
    if (!J || !Y)
      continue;
    if (Array.isArray(Y.value))
      for (let Z = 0;Z < Y.value.length; Z++) {
        let W = Y.value[Z];
        if (W === undefined || W === null)
          continue;
        if (typeof W === "object")
          W = JSON.stringify(W);
        X.push(GX(J, W, Y));
      }
    else {
      let Z = Y.value;
      if (Z === undefined || Z === null)
        continue;
      if (typeof Z === "object")
        Z = JSON.stringify(Z);
      X.push(GX(J, Y.value, Y));
    }
  }
  if (X.length === 0)
    return;
  if (X.length === 1)
    return X[0];
  return X;
};
var s1 = ($, X) => {
  if ($?.[$.$passthrough])
    $ = $[$.$passthrough];
  if ($?.[r1])
    X.status = $[r1], $ = $.response;
  if (T1(X.headers) || X.status !== 200 || X.redirect || X.cookie) {
    if (typeof X.status === "string")
      X.status = w6[X.status];
    if (X.redirect) {
      if (X.headers.Location = X.redirect, !X.status || X.status < 300 || X.status >= 400)
        X.status = 302;
    }
    if (X.cookie && T1(X.cookie))
      X.headers["Set-Cookie"] = gZ(X.cookie);
    if (X.headers["Set-Cookie"] && Array.isArray(X.headers["Set-Cookie"]))
      X.headers = kZ(new Headers(X.headers), X.headers["Set-Cookie"]);
    switch ($?.constructor?.name) {
      case "String":
        return new Response($, X);
      case "Blob":
        return q6($, X);
      case "Object":
      case "Array":
        return Response.json($, X);
      case "ReadableStream":
        if (!X.headers["content-type"]?.startsWith("text/event-stream"))
          X.headers["content-type"] = "text/event-stream; charset=utf-8";
        return new Response($, X);
      case undefined:
        if (!$)
          return new Response("", X);
        return Response.json($, X);
      case "Response":
        const J = { ...X.headers };
        if (EJ)
          X.headers = $.headers.toJSON();
        else
          for (let [Z, W] of $.headers.entries())
            if (Z in X.headers)
              X.headers[Z] = W;
        for (let Z in J)
          $.headers.append(Z, J[Z]);
        return $;
      case "Error":
        return B6($, X);
      case "Promise":
        return $.then((Z) => s1(Z, X));
      case "Function":
        return s1($(), X);
      case "Number":
      case "Boolean":
        return new Response($.toString(), X);
      case "Cookie":
        if ($ instanceof g1)
          return new Response($.value, X);
        return new Response($?.toString(), X);
      default:
        const Y = JSON.stringify($);
        if (Y.charCodeAt(0) === 123) {
          if (!X.headers["Content-Type"])
            X.headers["Content-Type"] = "application/json";
          return new Response(JSON.stringify($), X);
        }
        return new Response(Y, X);
    }
  } else
    switch ($?.constructor?.name) {
      case "String":
        return new Response($);
      case "Blob":
        return q6($, X);
      case "Object":
      case "Array":
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "ReadableStream":
        return new Response($, { headers: { "Content-Type": "text/event-stream; charset=utf-8" } });
      case undefined:
        if (!$)
          return new Response("");
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "Response":
        return $;
      case "Error":
        return B6($, X);
      case "Promise":
        return $.then((Y) => {
          const Z = b8(Y);
          if (Z !== undefined)
            return Z;
          return new Response("");
        });
      case "Function":
        return b8($());
      case "Number":
      case "Boolean":
        return new Response($.toString());
      case "Cookie":
        if ($ instanceof g1)
          return new Response($.value, X);
        return new Response($?.toString(), X);
      default:
        const J = JSON.stringify($);
        if (J.charCodeAt(0) === 123)
          return new Response(JSON.stringify($), { headers: { "Content-Type": "application/json" } });
        return new Response(J);
    }
};
var N1 = ($, X) => {
  if ($ === undefined || $ === null)
    return;
  if ($?.$passthrough)
    $ = $[$.$passthrough];
  if ($?.[r1])
    X.status = $[r1], $ = $.response;
  if (T1(X.headers) || X.status !== 200 || X.redirect || X.cookie) {
    if (typeof X.status === "string")
      X.status = w6[X.status];
    if (X.redirect) {
      if (X.headers.Location = X.redirect, !X.status || X.status < 300 || X.status >= 400)
        X.status = 302;
    }
    if (X.cookie && T1(X.cookie))
      X.headers["Set-Cookie"] = gZ(X.cookie);
    if (X.headers["Set-Cookie"] && Array.isArray(X.headers["Set-Cookie"]))
      X.headers = kZ(new Headers(X.headers), X.headers["Set-Cookie"]);
    switch ($?.constructor?.name) {
      case "String":
        return new Response($, X);
      case "Blob":
        return q6($, X);
      case "Object":
      case "Array":
        return Response.json($, X);
      case "ReadableStream":
        if (!X.headers["content-type"]?.startsWith("text/event-stream"))
          X.headers["content-type"] = "text/event-stream; charset=utf-8";
        return new Response($, X);
      case undefined:
        if (!$)
          return;
        return Response.json($, X);
      case "Response":
        const J = Object.assign({}, X.headers);
        if (EJ)
          X.headers = $.headers.toJSON();
        else
          for (let [Z, W] of $.headers.entries())
            if (!(Z in X.headers))
              X.headers[Z] = W;
        for (let Z in J)
          $.headers.append(Z, J[Z]);
        if ($.status !== X.status)
          X.status = $.status;
        return $;
      case "Promise":
        return $.then((Z) => {
          const W = N1(Z, X);
          if (W !== undefined)
            return W;
          return;
        });
      case "Error":
        return B6($, X);
      case "Function":
        return N1($(), X);
      case "Number":
      case "Boolean":
        return new Response($.toString(), X);
      case "Cookie":
        if ($ instanceof g1)
          return new Response($.value, X);
        return new Response($?.toString(), X);
      default:
        const Y = JSON.stringify($);
        if (Y.charCodeAt(0) === 123) {
          if (!X.headers["Content-Type"])
            X.headers["Content-Type"] = "application/json";
          return new Response(JSON.stringify($), X);
        }
        return new Response(Y, X);
    }
  } else
    switch ($?.constructor?.name) {
      case "String":
        return new Response($);
      case "Blob":
        return q6($, X);
      case "Object":
      case "Array":
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "ReadableStream":
        return new Response($, { headers: { "Content-Type": "text/event-stream; charset=utf-8" } });
      case undefined:
        if (!$)
          return new Response("");
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "Response":
        return $;
      case "Promise":
        return $.then((Y) => {
          const Z = N1(Y, X);
          if (Z !== undefined)
            return Z;
          return;
        });
      case "Error":
        return B6($, X);
      case "Function":
        return b8($());
      case "Number":
      case "Boolean":
        return new Response($.toString());
      case "Cookie":
        if ($ instanceof g1)
          return new Response($.value, X);
        return new Response($?.toString(), X);
      default:
        const J = JSON.stringify($);
        if (J.charCodeAt(0) === 123)
          return new Response(JSON.stringify($), { headers: { "Content-Type": "application/json" } });
        return new Response(J);
    }
};
var b8 = ($) => {
  if ($?.$passthrough)
    $ = $[$.$passthrough];
  if ($?.[r1])
    return s1($.response, { status: $[r1], headers: {} });
  switch ($?.constructor?.name) {
    case "String":
      return new Response($);
    case "Blob":
      return q6($);
    case "Object":
    case "Array":
      return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
    case "ReadableStream":
      return new Response($, { headers: { "Content-Type": "text/event-stream; charset=utf-8" } });
    case undefined:
      if (!$)
        return new Response("");
      return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
    case "Response":
      return $;
    case "Error":
      return B6($);
    case "Promise":
      return $.then((J) => {
        const Y = b8(J);
        if (Y !== undefined)
          return Y;
        return new Response("");
      });
    case "Function":
      return b8($());
    case "Number":
    case "Boolean":
      return new Response($.toString());
    default:
      const X = JSON.stringify($);
      if (X.charCodeAt(0) === 123)
        return new Response(JSON.stringify($), { headers: { "Content-Type": "application/json" } });
      return new Response(X);
  }
};
var B6 = ($, X) => new Response(JSON.stringify({ name: $?.name, message: $?.message, cause: $?.cause }), { status: X?.status !== 200 ? X?.status ?? 500 : 500, headers: X?.headers });
var IJ = ($) => $ && typeof $ === "object" && !Array.isArray($);
var xJ = ($, X) => {
  const J = new URL($);
  return J.pathname = X, J.toString();
};
var c3 = ($) => typeof $ === "function" && /^\s*class\s+/.test($.toString()) || $.toString().startsWith("[object ") || T1(Object.getPrototypeOf($));
var a1 = ($, X, { skipKeys: J } = {}) => {
  if (IJ($) && IJ(X))
    for (let [Y, Z] of Object.entries(X)) {
      if (J?.includes(Y))
        continue;
      if (!IJ(Z)) {
        $[Y] = Z;
        continue;
      }
      if (!(Y in $)) {
        $[Y] = Z;
        continue;
      }
      if (c3(Z)) {
        $[Y] = Z;
        continue;
      }
      $[Y] = a1($[Y], Z);
    }
  return $;
};
var TZ = ($, X) => a1($, X, { skipKeys: ["properties"] });
var E0 = ($, X) => {
  if (!$)
    return [];
  const J = [...Array.isArray($) ? $ : [$]], Y = [];
  for (let Z of J)
    if (Z.$elysiaChecksum)
      Y.push(Z.$elysiaChecksum);
  for (let Z of Array.isArray(X) ? X : [X])
    if (!Y.includes(Z?.$elysiaChecksum))
      J.push(Z);
  return J;
};
var kJ = ["start", "request", "parse", "transform", "resolve", "beforeHandle", "afterHandle", "onResponse", "mapResponse", "trace", "error", "stop", "body", "headers", "params", "query", "response", "type", "detail"];
var R8 = ($, X) => {
  return { ...$, ...X, body: X?.body ?? $?.body, headers: X?.headers ?? $?.headers, params: X?.params ?? $?.params, query: X?.query ?? $?.query, response: X?.response ?? $?.response, type: $?.type || X?.type, detail: a1(X?.detail ?? {}, $?.detail ?? {}), parse: E0($?.parse ?? [], X?.parse ?? []), transform: E0($?.transform ?? [], X?.transform ?? []), beforeHandle: E0($?.beforeHandle ?? [], X?.beforeHandle ?? []), afterHandle: E0($?.afterHandle ?? [], X?.afterHandle ?? []), onResponse: E0($?.onResponse ?? [], X?.onResponse ?? []), mapResponse: E0($?.mapResponse ?? [], X?.mapResponse ?? []), trace: E0($?.trace ?? [], X?.trace ?? []), error: E0($?.error ?? [], X?.error ?? []) };
};
var e1 = ($, { models: X = {}, additionalProperties: J = false, dynamic: Y = false }) => {
  if (!$)
    return;
  if (typeof $ === "string" && !($ in X))
    return;
  const Z = typeof $ === "string" ? X[$] : $;
  if (Z.type === "object" && ("additionalProperties" in Z) === false)
    Z.additionalProperties = J;
  if (Y)
    return { schema: Z, references: "", checkFunc: () => {
    }, code: "", Check: (W) => j0.Check(Z, W), Errors: (W) => j0.Errors(Z, W), Code: () => "" };
  return j$.Compile(Z, Object.values(X));
};
var gJ = ($, { models: X = {}, additionalProperties: J = false, dynamic: Y = false }) => {
  if (!$)
    return;
  if (typeof $ === "string" && !($ in X))
    return;
  const Z = typeof $ === "string" ? X[$] : $, W = (z, q) => {
    if (Y)
      return { schema: z, references: "", checkFunc: () => {
      }, code: "", Check: (M) => j0.Check(z, M), Errors: (M) => j0.Errors(z, M), Code: () => "" };
    return j$.Compile(z, q);
  };
  if (H in Z) {
    if (("additionalProperties" in Z) === false)
      Z.additionalProperties = J;
    return { 200: W(Z, Object.values(X)) };
  }
  const Q = {};
  return Object.keys(Z).forEach((z) => {
    const q = Z[+z];
    if (typeof q === "string") {
      if (q in X) {
        const M = X[q];
        M.type === "object" && ("additionalProperties" in M), Q[+z] = (H in M) ? W(M, Object.values(X)) : M;
      }
      return;
    }
    if (q.type === "object" && ("additionalProperties" in q) === false)
      q.additionalProperties = J;
    Q[+z] = (H in q) ? W(q, Object.values(X)) : q;
  }), Q;
};
var o3 = typeof Bun !== "undefined";
var n3 = o3 && typeof Bun.hash === "function";
var V$ = ($) => {
  if (n3)
    return Bun.hash($);
  let X = 9;
  for (let J = 0;J < $.length; )
    X = Math.imul(X ^ $.charCodeAt(J++), 387420489);
  return X = X ^ X >>> 9;
};
var AX = ($, X, J) => {
  const Y = (Z) => {
    if (J && !Z.$elysiaChecksum)
      Z.$elysiaChecksum = J;
    return Z;
  };
  return { ...$, ...X, start: E0($.start, ("start" in X ? X.start ?? [] : []).map(Y)), request: E0($.request, ("request" in X ? X.request ?? [] : []).map(Y)), parse: E0($.parse, "parse" in X ? X?.parse ?? [] : []).map(Y), transform: E0($.transform, (X?.transform ?? []).map(Y)), beforeHandle: E0($.beforeHandle, (X?.beforeHandle ?? []).map(Y)), afterHandle: E0($.afterHandle, (X?.afterHandle ?? []).map(Y)), mapResponse: E0($.mapResponse, (X?.mapResponse ?? []).map(Y)), onResponse: E0($.onResponse, (X?.onResponse ?? []).map(Y)), trace: $.trace, error: E0($.error, (X?.error ?? []).map(Y)), stop: E0($.stop, ("stop" in X ? X.stop ?? [] : []).map(Y)) };
};
var fZ = ($, X = true) => {
  if (!$)
    return $;
  if (typeof $ === "function") {
    if (X)
      $.$elysiaHookType = "global";
    else
      $.$elysiaHookType = undefined;
    return $;
  }
  return $.map((J) => {
    if (X)
      J.$elysiaHookType = "global";
    else
      J.$elysiaHookType = undefined;
    return J;
  });
};
var K$ = ($) => {
  if (!$)
    return $;
  if (typeof $ === "function")
    return $.$elysiaHookType === "global" ? $ : undefined;
  return $.filter((X) => X.$elysiaHookType === "global");
};
var TJ = ($) => {
  return { ...$, type: $?.type, detail: $?.detail, parse: K$($?.parse), transform: K$($?.transform), beforeHandle: K$($?.beforeHandle), afterHandle: K$($?.afterHandle), onResponse: K$($?.onResponse), error: K$($?.error) };
};
var w6 = { Continue: 100, "Switching Protocols": 101, Processing: 102, "Early Hints": 103, OK: 200, Created: 201, Accepted: 202, "Non-Authoritative Information": 203, "No Content": 204, "Reset Content": 205, "Partial Content": 206, "Multi-Status": 207, "Already Reported": 208, "Multiple Choices": 300, "Moved Permanently": 301, Found: 302, "See Other": 303, "Not Modified": 304, "Temporary Redirect": 307, "Permanent Redirect": 308, "Bad Request": 400, Unauthorized: 401, "Payment Required": 402, Forbidden: 403, "Not Found": 404, "Method Not Allowed": 405, "Not Acceptable": 406, "Proxy Authentication Required": 407, "Request Timeout": 408, Conflict: 409, Gone: 410, "Length Required": 411, "Precondition Failed": 412, "Payload Too Large": 413, "URI Too Long": 414, "Unsupported Media Type": 415, "Range Not Satisfiable": 416, "Expectation Failed": 417, "I'm a teapot": 418, "Misdirected Request": 421, "Unprocessable Content": 422, Locked: 423, "Failed Dependency": 424, "Too Early": 425, "Upgrade Required": 426, "Precondition Required": 428, "Too Many Requests": 429, "Request Header Fields Too Large": 431, "Unavailable For Legal Reasons": 451, "Internal Server Error": 500, "Not Implemented": 501, "Bad Gateway": 502, "Service Unavailable": 503, "Gateway Timeout": 504, "HTTP Version Not Supported": 505, "Variant Also Negotiates": 506, "Insufficient Storage": 507, "Loop Detected": 508, "Not Extended": 510, "Network Authentication Required": 511 };
var E$ = async ($, X) => {
  if (typeof $ !== "string")
    throw new TypeError("Cookie value must be provided as a string.");
  if (X === null)
    throw new TypeError("Secret key must be provided.");
  const J = new TextEncoder, Y = await crypto.subtle.importKey("raw", J.encode(X), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]), Z = await crypto.subtle.sign("HMAC", Y, J.encode($)), W = Array.from(new Uint8Array(Z)), Q = btoa(String.fromCharCode(...W));
  return `${$}.${Q.replace(/=+$/, "")}`;
};
var VJ = async ($, X) => {
  if (typeof $ !== "string")
    throw new TypeError("Signed cookie string must be provided.");
  if (X === null)
    throw new TypeError("Secret key must be provided.");
  const J = $.slice(0, $.lastIndexOf("."));
  return await E$(J, X) === $ ? J : false;
};
var fJ = ($, X, J = X) => {
  for (let [Y, Z] of Object.entries(X)) {
    if (kJ.includes(Y) || !(Y in $))
      continue;
    if (typeof $[Y] === "function")
      $[Y](Z);
    else if (typeof $[Y] === "object")
      fJ($[Y], Z, J);
  }
};
var DX = ($) => !Number.isNaN(parseInt($));
var yZ = typeof Bun !== "undefined" ? Bun.env : typeof process !== "undefined" ? process?.env : undefined;
var I$ = Symbol("ElysiaErrorCode");
var r1 = Symbol("ElysiaResponse");
var M6 = (yZ?.NODE_ENV ?? yZ?.ENV) === "production";
class NX extends Error {
  code = "INTERNAL_SERVER_ERROR";
  status = 500;
  constructor($) {
    super($ ?? "INTERNAL_SERVER_ERROR");
  }
}

class T8 extends Error {
  code = "NOT_FOUND";
  status = 404;
  constructor($) {
    super($ ?? "NOT_FOUND");
  }
}
class z6 extends Error {
  $;
  code = "INVALID_COOKIE_SIGNATURE";
  status = 400;
  constructor($, X) {
    super(X ?? `"${$}" has invalid cookie signature`);
    this.key = $;
  }
}

class P0 extends Error {
  $;
  X;
  J;
  code = "VALIDATION";
  status = 400;
  constructor($, X, J) {
    const Y = M6 ? undefined : ("Errors" in X) ? X.Errors(J).First() : j0.Errors(X, J).First(), Z = Y?.schema.error ? typeof Y.schema.error === "function" ? Y.schema.error($, X, J) : Y.schema.error : undefined, W = Y?.path?.slice(1) || "root";
    let Q = "";
    if (Z)
      Q = typeof Z === "object" ? JSON.stringify(Z) : Z + "";
    else if (M6)
      Q = JSON.stringify({ type: $, message: Y?.message });
    else
      Q = JSON.stringify({ type: $, at: W, message: Y?.message, expected: j0.Create(X.schema), found: J, errors: [...X.Errors(J)] }, null, 2);
    super(Q);
    this.type = $;
    this.validator = X;
    this.value = J;
    Object.setPrototypeOf(this, P0.prototype);
  }
  get all() {
    return [...this.validator.Errors(this.value)];
  }
  static simplifyModel($) {
    const X = "schema" in $ ? $.schema : $;
    try {
      return j0.Create(X);
    } catch {
      return X;
    }
  }
  get model() {
    return P0.simplifyModel(this.validator);
  }
  toResponse($) {
    return new Response(this.message, { status: 400, headers: $ });
  }
}
var yJ = { open($) {
  $.data.open?.($);
}, message($, X) {
  $.data.message?.($, X);
}, drain($) {
  $.data.drain?.($);
}, close($, X, J) {
  $.data.close?.($, X, J);
} };

class x$ {
  $;
  X;
  id;
  validator;
  constructor($, X) {
    this.raw = $;
    this.data = X;
    this.validator = $.data.validator, this.id = Date.now();
  }
  get publish() {
    return ($, X = undefined, J) => {
      if (this.validator?.Check(X) === false)
        throw new P0("message", this.validator, X);
      if (typeof X === "object")
        X = JSON.stringify(X);
      return this.raw.publish($, X, J), this;
    };
  }
  get send() {
    return ($) => {
      if (this.validator?.Check($) === false)
        throw new P0("message", this.validator, $);
      if (Buffer.isBuffer($))
        return this.raw.send($), this;
      if (typeof $ === "object")
        $ = JSON.stringify($);
      return this.raw.send($), this;
    };
  }
  get subscribe() {
    return ($) => {
      return this.raw.subscribe($), this;
    };
  }
  get unsubscribe() {
    return ($) => {
      return this.raw.unsubscribe($), this;
    };
  }
  get cork() {
    return ($) => {
      return this.raw.cork($), this;
    };
  }
  get close() {
    return () => {
      return this.raw.close(), this;
    };
  }
  get terminate() {
    return this.raw.terminate.bind(this.raw);
  }
  get isSubscribed() {
    return this.raw.isSubscribed.bind(this.raw);
  }
  get remoteAddress() {
    return this.raw.remoteAddress;
  }
}
var X4 = A6(hJ(), 1);
var J4 = A6(vJ(), 1);
var Jq = new Headers().toJSON;
var Y4 = new RegExp(" (\\w+) = context", "g");
var Z4 = { value: 0 };
var W4 = ({ hasTrace: $, hasTraceSet: X = false, addFn: J, condition: Y = {} }) => {
  if ($)
    return J("\nconst reporter = getReporter()\n"), (Z, { name: W, attribute: Q = "", unit: z = 0 } = {}) => {
      const q = Z.indexOf("."), M = q === -1;
      if (Z !== "request" && Z !== "response" && !Y[M ? Z : Z.slice(0, q)])
        return () => {
          if (X && Z === "afterHandle")
            J("\nawait traceDone\n");
        };
      if (M)
        W ||= Z;
      else
        W ||= "anonymous";
      J("\n" + `reporter.emit('event', {
					id,
					event: '${Z}',
					type: 'begin',
					name: '${W}',
					time: performance.now(),
					${M ? `unit: ${z},` : ""}
					${Q}
				})`.replace(/(\t| |\n)/g, "") + "\n");
      let A = false;
      return () => {
        if (A)
          return;
        if (A = true, J("\n" + `reporter.emit('event', {
							id,
							event: '${Z}',
							type: 'end',
							time: performance.now()
						})`.replace(/(\t| |\n)/g, "") + "\n"), X && Z === "afterHandle")
          J("\nawait traceDone\n");
      };
    };
  else
    return () => () => {
    };
};
var G6 = ($) => {
  const X = $.indexOf(")");
  if ($.charCodeAt(X + 2) === 61 && $.charCodeAt(X + 5) !== 123)
    return true;
  return $.includes("return");
};
var Yq = ($, { injectResponse: X = "" } = {}) => ({ composeValidation: (J, Y = `c.${J}`) => $ ? `c.set.status = 400; throw new ValidationError(
'${J}',
${J},
${Y}
)` : `c.set.status = 400; return new ValidationError(
	'${J}',
	${J},
	${Y}
).toResponse(c.set.headers)`, composeResponseValidation: (J = "r") => {
  const Y = $ ? `throw new ValidationError(
'response',
response[c.set.status],
${J}
)` : `return new ValidationError(
'response',
response[c.set.status],
${J}
).toResponse(c.set.headers)`;
  return `\n${X}
		if(!(${J} instanceof Response) && response[c.set.status]?.Check(${J}) === false) {
	if(!(response instanceof Error))
		${Y}
}\n`;
} });
var I0 = ($, X) => {
  if (X.startsWith("[object "))
    return false;
  if (X = X.trimStart(), X = X.replaceAll(/^async /g, ""), /^(\w+)\(/g.test(X))
    X = X.slice(X.indexOf("("));
  const J = X.charCodeAt(0) === 40 || X.startsWith("function") ? X.slice(X.indexOf("(") + 1, X.indexOf(")")) : X.slice(0, X.indexOf("=") - 1);
  if (J === "")
    return false;
  const Y = J.charCodeAt(0) === 123 ? J.indexOf("...") : -1;
  if (J.charCodeAt(0) === 123) {
    if (J.includes($))
      return true;
    if (Y === -1)
      return false;
  }
  if (X.match(new RegExp(`${J}(.${$}|\\["${$}"\\])`)))
    return true;
  const Z = Y !== -1 ? J.slice(Y + 3, J.indexOf(" ", Y + 3)) : undefined;
  if (X.match(new RegExp(`${Z}(.${$}|\\["${$}"\\])`)))
    return true;
  const W = [J];
  if (Z)
    W.push(Z);
  for (let z of X.matchAll(Y4))
    W.push(z[1]);
  const Q = new RegExp(`{.*?} = (${W.join("|")})`, "g");
  for (let [z] of X.matchAll(Q))
    if (z.includes(`{ ${$}`) || z.includes(`, ${$}`))
      return true;
  return false;
};
var H6 = ($) => {
  if ($ = $.trimStart(), $.startsWith("[object"))
    return false;
  if ($ = $.replaceAll(/^async /g, ""), /^(\w+)\(/g.test($))
    $ = $.slice($.indexOf("("));
  const X = $.charCodeAt(0) === 40 || $.startsWith("function") ? $.slice($.indexOf("(") + 1, $.indexOf(")")) : $.slice(0, $.indexOf("=") - 1);
  if (X === "")
    return false;
  const J = X.charCodeAt(0) === 123 ? X.indexOf("...") : -1, Y = J !== -1 ? X.slice(J + 3, X.indexOf(" ", J + 3)) : undefined, Z = [X];
  if (Y)
    Z.push(Y);
  for (let Q of $.matchAll(Y4))
    Z.push(Q[1]);
  for (let Q of Z)
    if (new RegExp(`\\b\\w+\\([^)]*\\b${Q}\\b[^)]*\\)`).test($))
      return true;
  const W = new RegExp(`{.*?} = (${Z.join("|")})`, "g");
  for (let [Q] of $.matchAll(W))
    if (new RegExp(`\\b\\w+\\([^)]*\\b${Q}\\b[^)]*\\)`).test($))
      return true;
  return false;
};
var k$ = Symbol.for("TypeBox.Kind");
var OX = ($, X) => {
  if (!X)
    return;
  if ((k$ in X) && X[k$] === $)
    return true;
  if (X.type === "object") {
    const J = X.properties;
    for (let Y of Object.keys(J)) {
      const Z = J[Y];
      if (Z.type === "object") {
        if (OX($, Z))
          return true;
      } else if (Z.anyOf) {
        for (let W = 0;W < Z.anyOf.length; W++)
          if (OX($, Z.anyOf[W]))
            return true;
      }
      if ((k$ in Z) && Z[k$] === $)
        return true;
    }
    return false;
  }
  return X.properties && (k$ in X.properties) && X.properties[k$] === $;
};
var f8 = ($, X) => {
  if (!X)
    return;
  if (X.type === "object") {
    const J = X.properties;
    if (!J)
      return false;
    for (let Y of Object.keys(J)) {
      const Z = J[Y];
      if ($ in Z)
        return true;
      if (Z.type === "object") {
        if (f8($, Z))
          return true;
      } else if (Z.anyOf) {
        for (let W = 0;W < Z.anyOf.length; W++)
          if (f8($, Z.anyOf[W]))
            return true;
      }
    }
    return false;
  }
  return $ in X;
};
var mJ = Symbol.for("TypeBox.Transform");
var y8 = ($) => {
  if (!$)
    return;
  if ($.type === "object" && $.properties) {
    const X = $.properties;
    for (let J of Object.keys(X)) {
      const Y = X[J];
      if (Y.type === "object") {
        if (y8(Y))
          return true;
      } else if (Y.anyOf) {
        for (let W = 0;W < Y.anyOf.length; W++)
          if (y8(Y.anyOf[W]))
            return true;
      }
      if (mJ in Y)
        return true;
    }
    return false;
  }
  return (mJ in $) || $.properties && (mJ in $.properties);
};
var Zq = ($) => {
  if (!$)
    return;
  const X = $?.schema;
  if (X && ("anyOf" in X)) {
    let J = false;
    const Y = X.anyOf[0].type;
    for (let Z of X.anyOf)
      if (Z.type !== Y) {
        J = true;
        break;
      }
    if (!J)
      return Y;
  }
  return $.schema?.type;
};
var Wq = /(?:return|=>) \S+\(/g;
var d0 = ($) => {
  if ($.constructor.name === "AsyncFunction")
    return true;
  const X = $.toString();
  if (X.includes("=> response.clone("))
    return false;
  return !!X.match(Wq);
};
var Qq = ($) => {
  if (!$.includes("query: {") || $.includes("query,") || $.includes("query }"))
    return false;
  const X = $.indexOf("query: {");
  return $ = $.slice(X + 9), $ = $.slice(0, $.indexOf("}")), $.split(",").map((J) => {
    const Y = J.indexOf(":");
    if (Y === -1)
      return J.trim();
    return J.slice(0, Y).trim();
  });
};
var Q4 = ({ path: $, method: X, hooks: J, validator: Y, handler: Z, handleError: W, definitions: Q, schema: z, onRequest: q, config: M, getReporter: A, setHeader: O }) => {
  const T = M.forceErrorEncapsulation || J.error.length > 0 || typeof Bun === "undefined" || J.onResponse.length > 0 || !!J.trace.length, E = typeof Z === "function", _ = E ? "handler(c)" : "handler", x = J.onResponse.length ? `\n;(async () => {${J.onResponse.map((S, L) => `await res${L}(c)`).join(";")}})();\n` : "", P = J.trace.map((S) => S.toString());
  let j = false;
  if (E && H6(Z.toString()))
    j = true;
  if (!j)
    for (let [S, L] of Object.entries(J)) {
      if (!Array.isArray(L) || !L.length || !["parse", "transform", "beforeHandle", "afterHandle", "onResponse"].includes(S))
        continue;
      for (let b of L) {
        if (typeof b !== "function")
          continue;
        if (H6(b.toString())) {
          j = true;
          break;
        }
      }
      if (j)
        break;
    }
  const F = { parse: P.some((S) => I0("parse", S)), transform: P.some((S) => I0("transform", S)), handle: P.some((S) => I0("handle", S)), beforeHandle: P.some((S) => I0("beforeHandle", S)), afterHandle: P.some((S) => I0("afterHandle", S)), error: T || P.some((S) => I0("error", S)) }, v = J.trace.length > 0;
  let D = "";
  const h0 = Y || X !== "GET" && X !== "HEAD" ? [Z, ...J.transform, ...J.beforeHandle, ...J.afterHandle, ...J.mapResponse].map((S) => typeof S === "function" ? S.toString() : `${S}`) : [], M8 = X !== "GET" && X !== "HEAD" && (j || J.type !== "none" && (!!Y.body || !!J.type || h0.some((S) => I0("body", S)))), g$ = j || Y.headers || h0.some((S) => I0("headers", S)) || O && Object.keys(O).length, v8 = j || !!Y.cookie || h0.some((S) => I0("cookie", S)), K0 = Y?.cookie?.schema;
  let f1 = "";
  if (K0?.sign) {
    if (!K0.secrets)
      throw new Error(`t.Cookie required secret which is not set in (${X}) ${$}.`);
    const S = !K0.secrets ? undefined : typeof K0.secrets === "string" ? K0.secrets : K0.secrets[0];
    if (f1 += `const _setCookie = c.set.cookie
		if(_setCookie) {`, K0.sign === true)
      f1 += `for(const [key, cookie] of Object.entries(_setCookie)) {
				c.set.cookie[key].value = await signCookie(cookie.value, '${S}')
			}`;
    else
      for (let L of K0.sign)
        f1 += `if(_setCookie['${L}']?.value) { c.set.cookie['${L}'].value = await signCookie(_setCookie['${L}'].value, '${S}') }\n`;
    f1 += "}\n";
  }
  const { composeValidation: U8, composeResponseValidation: p8 } = Yq(T);
  if (g$)
    D += Jq ? "c.headers = c.request.headers.toJSON()\n" : `c.headers = {}
                for (const [key, value] of c.request.headers.entries())
					c.headers[key] = value
				`;
  if (v8) {
    const S = (b, s) => {
      const B0 = K0?.[b] ?? s;
      if (!B0)
        return typeof s === "string" ? `${b}: "${s}",` : `${b}: ${s},`;
      if (typeof B0 === "string")
        return `${b}: '${B0}',`;
      if (B0 instanceof Date)
        return `${b}: new Date(${B0.getTime()}),`;
      return `${b}: ${B0},`;
    }, L = K0 ? `{
			secret: ${K0.secrets !== undefined ? typeof K0.secrets === "string" ? `'${K0.secrets}'` : "[" + K0.secrets.reduce((b, s) => b + `'${s}',`, "") + "]" : "undefined"},
			sign: ${K0.sign === true ? true : K0.sign !== undefined ? "[" + K0.sign.reduce((b, s) => b + `'${s}',`, "") + "]" : "undefined"},
			${S("domain")}
			${S("expires")}
			${S("httpOnly")}
			${S("maxAge")}
			${S("path", "/")}
			${S("priority")}
			${S("sameSite")}
			${S("secure")}
		}` : "undefined";
    if (g$)
      D += `\nc.cookie = await parseCookie(c.set, c.headers.cookie, ${L})\n`;
    else
      D += `\nc.cookie = await parseCookie(c.set, c.request.headers.get('cookie'), ${L})\n`;
  }
  if (j || Y.query || h0.some((S) => I0("query", S))) {
    let S = [], L = false;
    if (Y.query && Y.query.schema.type === "object")
      S = Object.keys(Y.query.schema.properties);
    else
      for (let b of h0) {
        const s = Qq(b);
        if (!s) {
          L = true;
          continue;
        }
        for (let B0 of s)
          if (S.indexOf(B0) === -1)
            S.push(B0);
      }
    if (!L && S.length)
      D += `if(c.qi !== -1) {
				const url = decodeURIComponent(c.request.url.slice(c.qi + 1))
				let memory = 0

				${S.map((b, s) => `
						memory = url.indexOf('${b}=')

						const a${s} = memory === -1 ? undefined : url.slice(memory = memory + ${b.length + 1}, (memory = url.indexOf('&', memory)) === -1 ? undefined : memory)`).join("\n")}

				c.query = {
					${S.map((b, s) => `${b}: a${s}`).join(", ")}
				}
			} else {
				c.query = {}
			}`;
    else
      D += "c.query = c.qi !== -1 ? parseQuery(decodeURIComponent(c.request.url.slice(c.qi + 1))) : {}";
  }
  const h8 = J.trace.map((S) => S.toString()).some((S) => I0("set", S) || H6(S));
  j || J.trace.some((S) => I0("set", S.toString()));
  const m8 = O && Object.keys(O).length || h8 || v8 || h0.some((S) => I0("set", S)) || q.some((S) => I0("set", S.toString()));
  if (v)
    D += "\nconst id = c.$$requestId\n";
  const D0 = W4({ hasTrace: v, hasTraceSet: h8, condition: F, addFn: (S) => {
    D += S;
  } });
  if (D += T ? "\n try {\n" : "", h8) {
    D += "\nconst traceDone = Promise.all([";
    for (let S = 0;S < J.trace.length; S++)
      D += `new Promise(r => { reporter.once(\`res\${id}.${S}\`, r) }),`;
    D += "])\n";
  }
  const O1 = typeof Z === "function" && d0(Z), L0 = v8 || M8 || h8 || O1 || !!J.mapResponse.length || J.parse.length > 0 || J.afterHandle.some(d0) || J.beforeHandle.some(d0) || J.transform.some(d0), B1 = D0("parse", { unit: J.parse.length });
  if (M8) {
    const S = Zq(Y?.body);
    if (J.type && !Array.isArray(J.type)) {
      if (J.type)
        switch (J.type) {
          case "json":
          case "application/json":
            D += "c.body = await c.request.json()\n";
            break;
          case "text":
          case "text/plain":
            D += "c.body = await c.request.text()\n";
            break;
          case "urlencoded":
          case "application/x-www-form-urlencoded":
            D += "c.body = parseQuery(await c.request.text())\n";
            break;
          case "arrayBuffer":
          case "application/octet-stream":
            D += "c.body = await c.request.arrayBuffer()\n";
            break;
          case "formdata":
          case "multipart/form-data":
            D += `c.body = {}

						const form = await c.request.formData()
						for (const key of form.keys()) {
							if (c.body[key])
								continue

							const value = form.getAll(key)
							if (value.length === 1)
								c.body[key] = value[0]
							else c.body[key] = value
						}\n`;
            break;
        }
      if (J.parse.length)
        D += "}}";
    } else {
      const b = (() => {
        if (J.parse.length && S && !Array.isArray(J.type)) {
          const s = Y?.body?.schema;
          switch (S) {
            case "object":
              if (OX("File", s) || OX("Files", s))
                return `c.body = {}

								const form = await c.request.formData()
								for (const key of form.keys()) {
									if (c.body[key])
										continue

									const value = form.getAll(key)
									if (value.length === 1)
										c.body[key] = value[0]
									else c.body[key] = value
								}`;
              break;
            default:
              break;
          }
        }
      })();
      if (b)
        D += b;
      else {
        if (D += "\n", D += g$ ? "let contentType = c.headers['content-type']" : "let contentType = c.request.headers.get('content-type')", D += `
				if (contentType) {
					const index = contentType.indexOf(';')
					if (index !== -1) contentType = contentType.substring(0, index)\n`, J.parse.length) {
          D += "let used = false\n";
          const s = D0("parse", { unit: J.parse.length });
          for (let B0 = 0;B0 < J.parse.length; B0++) {
            const i8 = D0("parse.unit", { name: J.parse[B0].name }), U0 = `bo${B0}`;
            if (B0 !== 0)
              D += "if(!used) {\n";
            if (D += `let ${U0} = parse[${B0}](c, contentType)\n`, D += `if(${U0} instanceof Promise) ${U0} = await ${U0}\n`, D += `if(${U0} !== undefined) { c.body = ${U0}; used = true }\n`, i8(), B0 !== 0)
              D += "}";
          }
          s();
        }
        if (J.parse.length)
          D += "if (!used)";
        D += `
				switch (contentType) {
					case 'application/json':
						c.body = await c.request.json()
						break

					case 'text/plain':
						c.body = await c.request.text()
						break

					case 'application/x-www-form-urlencoded':
						c.body = parseQuery(await c.request.text())
						break

					case 'application/octet-stream':
						c.body = await c.request.arrayBuffer();
						break

					case 'multipart/form-data':
						c.body = {}

						const form = await c.request.formData()
						for (const key of form.keys()) {
							if (c.body[key])
								continue

							const value = form.getAll(key)
							if (value.length === 1)
								c.body[key] = value[0]
							else c.body[key] = value
						}

						break
					}\n`, D += "}\n";
      }
    }
    D += "\n";
  }
  if (B1(), J?.transform) {
    const S = D0("transform", { unit: J.transform.length });
    for (let L = 0;L < J.transform.length; L++) {
      const b = J.transform[L], s = D0("transform.unit", { name: b.name });
      if (b.$elysia === "derive")
        D += d0(b) ? `Object.assign(c, await transform[${L}](c));` : `Object.assign(c, transform[${L}](c));`;
      else
        D += d0(b) ? `await transform[${L}](c);` : `transform[${L}](c);`;
      s();
    }
    S();
  }
  if (Y) {
    if (D += "\n", Y.headers) {
      if (f8("default", Y.headers.params))
        for (let [S, L] of Object.entries(j0.Default(Y.headers.schema, {}))) {
          const b = typeof L === "object" ? JSON.stringify(L) : `'${L}'`;
          if (b)
            D += `c.headers['${S}'] ??= ${b}\n`;
        }
      if (D += `if(headers.Check(c.headers) === false) {
				${U8("headers")}
			}`, y8(Y.headers.schema))
        D += "\nc.headers = headers.Decode(c.headers)\n";
    }
    if (Y.params) {
      if (f8("default", Y.params.schema))
        for (let [S, L] of Object.entries(j0.Default(Y.params.schema, {}))) {
          const b = typeof L === "object" ? JSON.stringify(L) : `'${L}'`;
          if (b)
            D += `c.params['${S}'] ??= ${b}\n`;
        }
      if (D += `if(params.Check(c.params) === false) {
				${U8("params")}
			}`, y8(Y.params.schema))
        D += "\nc.params = params.Decode(c.params)\n";
    }
    if (Y.query) {
      if (f8("default", Y.query.schema))
        for (let [S, L] of Object.entries(j0.Default(Y.query.schema, {}))) {
          const b = typeof L === "object" ? JSON.stringify(L) : `'${L}'`;
          if (b)
            D += `c.query['${S}'] ??= ${b}\n`;
        }
      if (D += `if(query.Check(c.query) === false) {
				${U8("query")}
			}`, y8(Y.query.schema))
        D += "\nc.query = query.Decode(Object.assign({}, c.query))\n";
    }
    if (Y.body) {
      if (f8("default", Y.body.schema))
        D += `if(body.Check(c.body) === false) {
    				c.body = Object.assign(${JSON.stringify(j0.Default(Y.body.schema, null) ?? {})}, c.body)

    				if(body.Check(c.query) === false) {
        				${U8("body")}
     			}
            }`;
      else
        D += `if(body.Check(c.body) === false) {
			${U8("body")}
		}`;
      if (y8(Y.body.schema))
        D += "\nc.body = body.Decode(c.body)\n";
    }
    if (T1(Y.cookie?.schema.properties ?? {})) {
      if (D += `const cookieValue = {}
    			for(const [key, value] of Object.entries(c.cookie))
    				cookieValue[key] = value.value\n`, f8("default", Y.cookie.schema))
        for (let [S, L] of Object.entries(j0.Default(Y.cookie.schema, {})))
          D += `cookieValue['${S}'] = ${typeof L === "object" ? JSON.stringify(L) : L}\n`;
      if (D += `if(cookie.Check(cookieValue) === false) {
				${U8("cookie", "cookieValue")}
			}`, y8(Y.cookie.schema))
        D += "\nc.cookie = params.Decode(c.cookie)\n";
    }
  }
  if (J?.beforeHandle) {
    const S = D0("beforeHandle", { unit: J.beforeHandle.length });
    for (let L = 0;L < J.beforeHandle.length; L++) {
      const b = J.beforeHandle[L], s = D0("beforeHandle.unit", { name: b.name }), B0 = G6(b.toString());
      if (b.$elysia === "resolve")
        D += d0(b) ? `Object.assign(c, await beforeHandle[${L}](c));` : `Object.assign(c, beforeHandle[${L}](c));`;
      else if (!B0)
        D += d0(b) ? `await beforeHandle[${L}](c);\n` : `beforeHandle[${L}](c);\n`, s();
      else {
        D += d0(b) ? `be = await beforeHandle[${L}](c);\n` : `be = beforeHandle[${L}](c);\n`, s(), D += "if(be !== undefined) {\n";
        const i8 = D0("afterHandle", { unit: J.transform.length });
        if (J.afterHandle) {
          D0("handle", { name: E ? Z.name : undefined })();
          for (let U0 = 0;U0 < J.afterHandle.length; U0++) {
            const w = G6(J.afterHandle[U0].toString()), K = D0("afterHandle.unit", { name: J.afterHandle[U0].name });
            if (D += "c.response = be\n", !w)
              D += d0(J.afterHandle[U0]) ? `await afterHandle[${U0}](c, be)\n` : `afterHandle[${U0}](c, be)\n`;
            else
              D += d0(J.afterHandle[U0]) ? `af = await afterHandle[${U0}](c)\n` : `af = afterHandle[${U0}](c)\n`, D += "if(af !== undefined) { c.response = be = af }\n";
            K();
          }
        }
        if (i8(), Y.response)
          D += p8("be");
        if (J.mapResponse.length) {
          D += "c.response = be";
          for (let U0 = 0;U0 < J.mapResponse.length; U0++)
            D += `\nif(mr === undefined) {
							mr = onMapResponse[${U0}](c)
							if(mr instanceof Promise) mr = await mr
							if(mr !== undefined) c.response = mr
						}\n`;
        }
        D += f1, D += "return mapEarlyResponse(be, c.set)}\n";
      }
    }
    S();
  }
  if (J?.afterHandle.length) {
    const S = D0("handle", { name: E ? Z.name : undefined });
    if (J.afterHandle.length)
      D += O1 ? `let r = c.response = await ${_};\n` : `let r = c.response = ${_};\n`;
    else
      D += O1 ? `let r = await ${_};\n` : `let r = ${_};\n`;
    S();
    const L = D0("afterHandle", { unit: J.afterHandle.length });
    for (let b = 0;b < J.afterHandle.length; b++) {
      const s = G6(J.afterHandle[b].toString()), B0 = D0("afterHandle.unit", { name: J.afterHandle[b].name });
      if (!s)
        D += d0(J.afterHandle[b]) ? `await afterHandle[${b}](c)\n` : `afterHandle[${b}](c)\n`, B0();
      else if (D += d0(J.afterHandle[b]) ? `af = await afterHandle[${b}](c)\n` : `af = afterHandle[${b}](c)\n`, B0(), Y.response)
        D += "if(af !== undefined) {", L(), D += p8("af"), D += "c.response = af }";
      else
        D += "if(af !== undefined) {", L(), D += "c.response = af}\n";
    }
    if (L(), D += "r = c.response\n", Y.response)
      D += p8();
    if (D += f1, J.mapResponse.length)
      for (let b = 0;b < J.mapResponse.length; b++)
        D += `\nmr = onMapResponse[${b}](c)
				if(mr instanceof Promise) mr = await mr
				if(mr !== undefined) c.response = mr\n`;
    if (m8)
      D += "return mapResponse(r, c.set)\n";
    else
      D += "return mapCompactResponse(r)\n";
  } else {
    const S = D0("handle", { name: E ? Z.name : undefined });
    if (Y.response || J.mapResponse.length) {
      if (D += O1 ? `let r = await ${_};\n` : `let r = ${_};\n`, S(), Y.response)
        D += p8();
      if (D0("afterHandle")(), J.mapResponse.length) {
        D += "c.response = r";
        for (let L = 0;L < J.mapResponse.length; L++)
          D += `\nif(mr === undefined) { 
						mr = onMapResponse[${L}](c)
						if(mr instanceof Promise) mr = await mr
    					if(mr !== undefined) r = c.response = mr
					}\n`;
      }
      if (D += f1, Z instanceof Response)
        D += `return ${_}.clone()\n`;
      else if (m8)
        D += "return mapResponse(r, c.set)\n";
      else
        D += "return mapCompactResponse(r)\n";
    } else if (F.handle || v8) {
      if (D += O1 ? `let r = await ${_};\n` : `let r = ${_};\n`, S(), D0("afterHandle")(), J.mapResponse.length) {
        D += "c.response = r";
        for (let L = 0;L < J.mapResponse.length; L++)
          D += `\nif(mr === undefined) {
							mr = onMapResponse[${L}](c)
							if(mr instanceof Promise) mr = await mr
    						if(mr !== undefined) r = c.response = mr
						}\n`;
      }
      if (D += f1, m8)
        D += "return mapResponse(r, c.set)\n";
      else
        D += "return mapCompactResponse(r)\n";
    } else {
      S();
      const L = O1 ? `await ${_}` : _;
      if (D0("afterHandle")(), Z instanceof Response)
        D += `return ${_}.clone()\n`;
      else if (m8)
        D += `return mapResponse(${L}, c.set)\n`;
      else
        D += `return mapCompactResponse(${L})\n`;
    }
  }
  if (T || x) {
    if (D += `
} catch(error) {`, !L0)
      D += "return (async () => {";
    D += `const set = c.set

		if (!set.status || set.status < 300) set.status = error?.status || 500
	`;
    const S = D0("error", { unit: J.error.length });
    if (J.error.length) {
      D += `
				c.error = error
				c.code = error.code ?? error[ERROR_CODE] ?? "UNKNOWN"
			`;
      for (let L = 0;L < J.error.length; L++) {
        const b = `er${L}`, s = D0("error.unit", { name: J.error[L].name });
        if (D += `\nlet ${b} = handleErrors[${L}](c)\n`, d0(J.error[L]))
          D += `if (${b} instanceof Promise) ${b} = await ${b}\n`;
        s(), D += `${b} = mapEarlyResponse(${b}, set)\n`, D += `if (${b}) {`, D += `return ${b} }\n`;
      }
    }
    if (S(), D += "return handleError(c, error)\n\n", !L0)
      D += "})()";
    if (D += "}", x || v) {
      D += " finally { ";
      const L = D0("response", { unit: J.onResponse.length });
      D += x, L(), D += "}";
    }
  }
  return D = `const {
		handler,
		handleError,
		hooks: {
			transform,
			resolve,
			beforeHandle,
			afterHandle,
			mapResponse: onMapResponse,
			parse,
			error: handleErrors,
			onResponse
		},
		validator: {
			body,
			headers,
			params,
			query,
			response,
			cookie
		},
		utils: {
			mapResponse,
			mapCompactResponse,
			mapEarlyResponse,
			parseQuery
		},
		error: {
			NotFoundError,
			ValidationError,
			InternalServerError
		},
		schema,
		definitions,
		ERROR_CODE,
		getReporter,
		requestId,
		parseCookie,
		signCookie,
		decodeURIComponent
	} = hooks

	${J.onResponse.length ? `const ${J.onResponse.map((S, L) => `res${L} = onResponse[${L}]`).join(",")}` : ""}

	return ${L0 ? "async" : ""} function handle(c) {
		${J.beforeHandle.length ? "let be" : ""}
		${J.afterHandle.length ? "let af" : ""}
		${J.mapResponse.length ? "let mr" : ""}

		${z && Q ? "c.schema = schema; c.defs = definitions;" : ""}
		${D}
	}`, Function("hooks", D)({ handler: Z, hooks: J, validator: Y, handleError: W, utils: { mapResponse: s1, mapCompactResponse: b8, mapEarlyResponse: N1, parseQuery: X4.parse }, error: { NotFoundError: T8, ValidationError: P0, InternalServerError: NX }, schema: z, definitions: Q, ERROR_CODE: I$, getReporter: A, requestId: Z4, parseCookie: HX, signCookie: E$, decodeURIComponent: J4.default });
};
var iJ = ($) => {
  let X = "", J = "";
  for (let _ of Object.keys($.decorators))
    X += `,${_}: app.decorators.${_}`;
  const { router: Y, staticRouter: Z } = $, W = $.event.trace.length > 0, Q = `
	const route = router.find(request.method, path) ${Y.root.ALL ? '?? router.find("ALL", path)' : ""}
	if (route === null)
		return ${$.event.error.length ? "app.handleError(ctx, notFound)" : $.event.request.length ? `new Response(error404Message, {
					status: ctx.set.status === 200 ? 404 : ctx.set.status,
					headers: ctx.set.headers
				})` : "error404.clone()"}

	ctx.params = route.params

	return route.store(ctx)`;
  let z = "";
  for (let [_, { code: x, all: P }] of Object.entries(Z.map))
    z += `case '${_}':\nswitch(request.method) {\n${x}\n${P ?? "default: break map"}}\n\n`;
  const q = $.event.request.some(d0);
  if (J += `const {
		app,
		app: { store, router, staticRouter, wsRouter },
		mapEarlyResponse,
		NotFoundError,
		requestId,
		getReporter,
		handleError
	} = data

	const notFound = new NotFoundError()

	${$.event.request.length ? "const onRequest = app.event.request" : ""}
	${Z.variables}
	${$.event.error.length ? "" : `
	const error404Message = notFound.message.toString()
	const error404 = new Response(error404Message, { status: 404 });
	`}

	return ${q ? "async" : ""} function map(request) {\n`, $.event.request.length)
    J += "let re";
  const M = $.event.trace.map((_) => _.toString()), A = W4({ hasTrace: W, hasTraceSet: $.event.trace.some((_) => {
    const x = _.toString();
    return I0("set", x) || H6(x);
  }), condition: { request: M.some((_) => I0("request", _) || H6(_)) }, addFn: (_) => {
    J += _;
  } });
  if ($.event.request.length) {
    J += `
			${W ? "const id = +requestId.value++" : ""}

			const ctx = {
				request,
				store,
				set: {
					headers: ${Object.keys($.setHeaders ?? {}).length ? "Object.assign({}, app.setHeaders)" : "{}"},
					status: 200
				}
				${W ? ",$$requestId: +id" : ""}
				${X}
			}
		`;
    const _ = A("request", { attribute: "ctx", unit: $.event.request.length });
    J += "\n try {\n";
    for (let x = 0;x < $.event.request.length; x++) {
      const P = $.event.request[x], j = G6(P.toString()), F = d0(P), v = A("request.unit", { name: $.event.request[x].name });
      if (j) {
        if (J += `re = mapEarlyResponse(
					${F ? "await" : ""} onRequest[${x}](ctx),
					ctx.set
				)\n`, v(), j)
          J += "if(re !== undefined) return re\n";
      } else
        J += `${F ? "await" : ""} onRequest[${x}](ctx)\n`, v();
    }
    J += `} catch (error) {
			return app.handleError(ctx, error)
		}`, _(), J += `
		const url = request.url
		const s = url.indexOf('/', 11)
		const qi = ctx.qi = url.indexOf('?', s + 1)
		const path = ctx.path = url.substring(s, qi === -1 ? undefined : qi)`;
  } else
    J += `
		const url = request.url
		const s = url.indexOf('/', 11)
		const qi = url.indexOf('?', s + 1)
		const path = url.substring(s, qi === -1 ? undefined : qi)
		${W ? "const id = +requestId.value++" : ""}
		const ctx = {
			request,
			store,
			qi,
			path,
			set: {
				headers: ${Object.keys($.setHeaders ?? {}).length ? "Object.assign({}, app.setHeaders)" : "{}"},
				status: 200
			}
			${W ? ",$$requestId: id" : ""}
			${X}
		}`, A("request", { unit: $.event.request.length, attribute: M.some((_) => I0("context", _)) || M.some((_) => I0("store", _)) || M.some((_) => I0("set", _)) ? "ctx" : "" })();
  const { wsPaths: O, wsRouter: T } = $;
  if (Object.keys(O).length || T.history.length) {
    J += `
			if(request.method === 'GET') {
				switch(path) {`;
    for (let [_, x] of Object.entries(O))
      J += `
					case '${_}':
						if(request.headers.get('upgrade') === 'websocket')
							return st${x}(ctx)

						break`;
    J += `
				default:
					if(request.headers.get('upgrade') === 'websocket') {
						const route = wsRouter.find('ws', path)

						if(route) {
							ctx.params = route.params

							return route.store(ctx)
						}
					}

					break
			}
		}\n`;
  }
  J += `
		map: switch(path) {
			${z}

			default:
				break
		}

		${Q}
	}`;
  const E = uJ($);
  return $.handleError = E, Function("data", J)({ app: $, mapEarlyResponse: N1, NotFoundError: T8, getReporter: () => $.reporter, requestId: Z4, handleError: E });
};
var uJ = ($) => {
  let X = `const {
		app: { event: { error: onError, onResponse: res } },
		mapResponse,
		ERROR_CODE,
		ELYSIA_RESPONSE
	} = inject

	return ${$.event.error.find(d0) ? "async" : ""} function(context, error) {
		let r

		const { set } = context

		context.code = error.code
		context.error = error

		if(error[ELYSIA_RESPONSE]) {
			error.status = error[ELYSIA_RESPONSE]
			error.message = error.response
		}
`;
  for (let J = 0;J < $.event.error.length; J++) {
    const Y = $.event.error[J], Z = `${d0(Y) ? "await " : ""}onError[${J}](context)`;
    if (G6(Y.toString()))
      X += `r = ${Z}; if(r !== undefined) {
				if(r instanceof Response) return r

				if(r[ELYSIA_RESPONSE]) {
					error.status = error[ELYSIA_RESPONSE]
					error.message = error.response
				}
		
				if(set.status === 200) set.status = error.status
				return mapResponse(r, set)
			}\n`;
    else
      X += Z + "\n";
  }
  return X += `if(error.constructor.name === "ValidationError" || error.constructor.name === "TransformDecodeError") {
		set.status = error.status ?? 400
		return new Response(
			error.message,
			{ headers: set.headers, status: set.status }
		)
	} else {
		if(error.code && typeof error.status === "number")
			return new Response(
				error.message,
				{ headers: set.headers, status: error.status }
			)

		return mapResponse(error, set)
	}
}`, Function("inject", X)({ app: $, mapResponse: s1, ERROR_CODE: I$, ELYSIA_RESPONSE: r1 });
};
var SX = A6(hJ(), 1);
var cJ = ($) => async (X) => {
  const J = { cookie: {}, status: 200, headers: {} };
  let Y;
  if ($.decorators)
    Y = $.decorators, Y.request = X, Y.set = J, Y.store = $.store;
  else
    Y = { set: J, store: $.store, request: X };
  const Z = X.url, W = Z.indexOf("/", 11), Q = Z.indexOf("?", W + 1), z = Q === -1 ? Z.substring(W) : Z.substring(W, Q);
  try {
    for (let P = 0;P < $.event.request.length; P++) {
      const j = $.event.request[P];
      let F = j(Y);
      if (F instanceof Promise)
        F = await F;
      if (F = N1(F, J), F)
        return F;
    }
    const q = $.dynamicRouter.find(X.method, z) ?? $.dynamicRouter.find("ALL", z);
    if (!q)
      throw new T8;
    const { handle: M, hooks: A, validator: O, content: T } = q.store;
    let E;
    if (X.method !== "GET" && X.method !== "HEAD")
      if (T)
        switch (T) {
          case "application/json":
            E = await X.json();
            break;
          case "text/plain":
            E = await X.text();
            break;
          case "application/x-www-form-urlencoded":
            E = SX.parse(await X.text());
            break;
          case "application/octet-stream":
            E = await X.arrayBuffer();
            break;
          case "multipart/form-data":
            E = {};
            const P = await X.formData();
            for (let j of P.keys()) {
              if (E[j])
                continue;
              const F = P.getAll(j);
              if (F.length === 1)
                E[j] = F[0];
              else
                E[j] = F;
            }
            break;
        }
      else {
        let P = X.headers.get("content-type");
        if (P) {
          const j = P.indexOf(";");
          if (j !== -1)
            P = P.slice(0, j);
          for (let F = 0;F < $.event.parse.length; F++) {
            let v = $.event.parse[F](Y, P);
            if (v instanceof Promise)
              v = await v;
            if (v) {
              E = v;
              break;
            }
          }
          if (E === undefined)
            switch (P) {
              case "application/json":
                E = await X.json();
                break;
              case "text/plain":
                E = await X.text();
                break;
              case "application/x-www-form-urlencoded":
                E = SX.parse(await X.text());
                break;
              case "application/octet-stream":
                E = await X.arrayBuffer();
                break;
              case "multipart/form-data":
                E = {};
                const F = await X.formData();
                for (let v of F.keys()) {
                  if (E[v])
                    continue;
                  const D = F.getAll(v);
                  if (D.length === 1)
                    E[v] = D[0];
                  else
                    E[v] = D;
                }
                break;
            }
        }
      }
    Y.body = E, Y.params = q?.params || undefined, Y.query = Q === -1 ? {} : SX.parse(Z.substring(Q + 1)), Y.headers = {};
    for (let [P, j] of X.headers.entries())
      Y.headers[P] = j;
    const _ = O?.cookie?.schema;
    Y.cookie = await HX(Y.set, Y.headers.cookie, _ ? { secret: _.secrets !== undefined ? typeof _.secrets === "string" ? _.secrets : _.secrets.join(",") : undefined, sign: _.sign === true ? true : _.sign !== undefined ? typeof _.sign === "string" ? _.sign : _.sign.join(",") : undefined } : undefined);
    for (let P = 0;P < A.transform.length; P++) {
      const j = A.transform[P](Y);
      if (A.transform[P].$elysia === "derive")
        if (j instanceof Promise)
          Object.assign(Y, await j);
        else
          Object.assign(Y, j);
      else if (j instanceof Promise)
        await j;
    }
    if (O) {
      if (O.headers) {
        const P = {};
        for (let j in X.headers)
          P[j] = X.headers.get(j);
        if (O.headers.Check(P) === false)
          throw new P0("header", O.headers, P);
      }
      if (O.params?.Check(Y.params) === false)
        throw new P0("params", O.params, Y.params);
      if (O.query?.Check(Y.query) === false)
        throw new P0("query", O.query, Y.query);
      if (O.cookie) {
        const P = {};
        for (let [j, F] of Object.entries(Y.cookie))
          P[j] = F.value;
        if (O.cookie?.Check(P) === false)
          throw new P0("cookie", O.cookie, P);
      }
      if (O.body?.Check(E) === false)
        throw new P0("body", O.body, E);
    }
    for (let P = 0;P < A.beforeHandle.length; P++) {
      let j = A.beforeHandle[P](Y);
      if (j instanceof Promise)
        j = await j;
      if (j !== undefined) {
        Y.response = j;
        for (let v = 0;v < A.afterHandle.length; v++) {
          let D = A.afterHandle[v](Y);
          if (D instanceof Promise)
            D = await D;
          if (D)
            j = D;
        }
        const F = N1(j, Y.set);
        if (F)
          return F;
      }
    }
    let x = M(Y);
    if (x instanceof Promise)
      x = await x;
    if (!A.afterHandle.length) {
      const P = O?.response?.[x.status];
      if (P?.Check(x) === false)
        throw new P0("response", P, x);
    } else {
      Y.response = x;
      for (let P = 0;P < A.afterHandle.length; P++) {
        let j = A.afterHandle[P](Y);
        if (j instanceof Promise)
          j = await j;
        const F = N1(j, Y.set);
        if (F !== undefined) {
          const v = O?.response?.[x.status];
          if (v?.Check(F) === false)
            throw new P0("response", v, F);
          return F;
        }
      }
    }
    if (Y.set.cookie && _?.sign) {
      const P = !_.secrets ? undefined : typeof _.secrets === "string" ? _.secrets : _.secrets[0];
      if (_.sign === true)
        for (let [j, F] of Object.entries(Y.set.cookie))
          Y.set.cookie[j].value = await E$(F.value, "${secret}");
      else
        for (let j of _.sign) {
          if (!(j in _.properties))
            continue;
          if (Y.set.cookie[j]?.value)
            Y.set.cookie[j].value = await E$(Y.set.cookie[j].value, P);
        }
    }
    return s1(x, Y.set);
  } catch (q) {
    if (q.status)
      J.status = q.status;
    return $.handleError(Y, q);
  } finally {
    for (let q of $.event.onResponse)
      await q(Y);
  }
};
var z4 = ($) => async (X, J) => {
  const Y = Object.assign(X, { error: J, code: J.code });
  Y.set = X.set;
  for (let Z = 0;Z < $.event.error.length; Z++) {
    let W = $.event.error[Z](Y);
    if (W instanceof Promise)
      W = await W;
    if (W !== undefined && W !== null)
      return s1(W, X.set);
  }
  return new Response(typeof J.cause === "string" ? J.cause : J.message, { headers: X.set.headers, status: J.status ?? 500 });
};
var W0 = Object.assign({}, qX);
try {
  v1.Format("email", ($) => /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test($)), v1.Format("uuid", ($) => /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test($)), v1.Format("date", ($) => !Number.isNaN(new Date($).getTime())), v1.Format("date-time", ($) => !Number.isNaN(new Date($).getTime()));
} catch ($) {
}
var q4 = ($) => {
  if (typeof $ === "string")
    switch ($.slice(-1)) {
      case "k":
        return +$.slice(0, $.length - 1) * 1024;
      case "m":
        return +$.slice(0, $.length - 1) * 1048576;
      default:
        return +$;
    }
  return $;
};
var oJ = ($, X) => {
  if (!(X instanceof Blob))
    return false;
  if ($.minSize && X.size < q4($.minSize))
    return false;
  if ($.maxSize && X.size > q4($.maxSize))
    return false;
  if ($.extension)
    if (typeof $.extension === "string") {
      if (!X.type.startsWith($.extension))
        return false;
    } else {
      for (let J = 0;J < $.extension.length; J++)
        if (X.type.startsWith($.extension[J]))
          return true;
      return false;
    }
  return true;
};
var zq = v1.Type("Files", ($, X) => {
  if (!Array.isArray(X))
    return oJ($, X);
  if ($.minItems && X.length < $.minItems)
    return false;
  if ($.maxItems && X.length > $.maxItems)
    return false;
  for (let J = 0;J < X.length; J++)
    if (!oJ($, X[J]))
      return false;
  return true;
});
g0.Set("numeric", ($) => !!$ && !isNaN(+$));
g0.Set("ObjectString", ($) => {
  let X = $.charCodeAt(0);
  if (X === 9 || X === 10 || X === 32)
    X = $.trimStart().charCodeAt(0);
  if (X !== 123 && X !== 91)
    return false;
  try {
    return JSON.parse($), true;
  } catch {
    return false;
  }
});
var d8 = { Numeric: ($) => {
  const X = qX.Number($);
  return W0.Transform(W0.Union([W0.String({ format: "numeric", default: 0 }), W0.Number($)], $)).Decode((J) => {
    const Y = +J;
    if (isNaN(Y))
      return J;
    if ($ && !j0.Check(X, Y))
      throw new P0("property", X, Y);
    return Y;
  }).Encode((J) => J);
}, ObjectString: ($, X) => W0.Transform(W0.Union([W0.String({ format: "ObjectString", default: "" }), W0.Object($, X)], X)).Decode((J) => {
  if (typeof J === "string")
    try {
      return JSON.parse(J);
    } catch {
      return J;
    }
  return J;
}).Encode((J) => JSON.stringify(J)), File: v1.Type("File", oJ), Files: ($ = {}) => W0.Transform(W0.Union([zq($)])).Decode((X) => {
  if (Array.isArray(X))
    return X;
  return [X];
}).Encode((X) => X), Nullable: ($) => W0.Union([W0.Null(), $]), MaybeEmpty: ($) => W0.Union([W0.Null(), W0.Undefined(), $]), Cookie: ($, X) => W0.Object($, X) };
W0.ObjectString = d8.ObjectString;
W0.Numeric = d8.Numeric;
W0.File = ($ = {}) => d8.File({ default: "File", ...$, extension: $?.type, type: "string", format: "binary" });
W0.Files = ($ = {}) => d8.Files({ ...$, elysiaMeta: "Files", default: "Files", extension: $?.type, type: "array", items: { ...$, default: "Files", type: "string", format: "binary" } });
W0.Nullable = ($) => d8.Nullable($);
W0.MaybeEmpty = d8.MaybeEmpty;
W0.Cookie = d8.Cookie;

class w8 {
  config;
  dependencies = {};
  store = {};
  decorators = {};
  definitions = { type: {}, error: {} };
  schema = {};
  macros = [];
  event = { start: [], request: [], parse: [], transform: [], beforeHandle: [], afterHandle: [], mapResponse: [], onResponse: [], trace: [], error: [], stop: [] };
  reporter = new $Y;
  server = null;
  getServer() {
    return this.server;
  }
  validator = null;
  router = new j8;
  wsRouter = new j8;
  routes = [];
  staticRouter = { handlers: [], variables: "", map: {}, all: "" };
  wsPaths = {};
  dynamicRouter = new j8;
  lazyLoadModules = [];
  path = "";
  stack = undefined;
  constructor($) {
    if (this.config = { forceErrorEncapsulation: true, prefix: "", aot: true, strictPath: false, scoped: false, cookie: {}, analytic: false, ...$, seed: $?.seed === undefined ? "" : $?.seed }, $?.analytic && ($?.name || $?.seed !== undefined))
      this.stack = new Error().stack;
  }
  add($, X, J, Y, { allowMeta: Z = false, skipPrefix: W = false } = { allowMeta: false, skipPrefix: false }) {
    if (typeof X === "string")
      X = [X];
    for (let Q of X) {
      if (Q = Q === "" ? Q : Q.charCodeAt(0) === 47 ? Q : `/${Q}`, this.config.prefix && !W)
        Q = this.config.prefix + Q;
      if (Y?.type)
        switch (Y.type) {
          case "text":
            Y.type = "text/plain";
            break;
          case "json":
            Y.type = "application/json";
            break;
          case "formdata":
            Y.type = "multipart/form-data";
            break;
          case "urlencoded":
            Y.type = "application/x-www-form-urlencoded";
            break;
          case "arrayBuffer":
            Y.type = "application/octet-stream";
            break;
          default:
            break;
        }
      const z = this.definitions.type;
      let q = e1(Y?.cookie ?? this.validator?.cookie, { dynamic: !this.config.aot, models: z, additionalProperties: true });
      if (T1(this.config.cookie ?? {}))
        if (q)
          q.schema = TZ(q.schema, this.config.cookie ?? {});
        else
          q = e1(W0.Cookie({}, this.config.cookie), { dynamic: !this.config.aot, models: z, additionalProperties: true });
      const M = { body: e1(Y?.body ?? this.validator?.body, { dynamic: !this.config.aot, models: z }), headers: e1(Y?.headers ?? this.validator?.headers, { dynamic: !this.config.aot, models: z, additionalProperties: true }), params: e1(Y?.params ?? this.validator?.params, { dynamic: !this.config.aot, models: z }), query: e1(Y?.query ?? this.validator?.query, { dynamic: !this.config.aot, models: z }), cookie: q, response: gJ(Y?.response ?? this.validator?.response, { dynamic: !this.config.aot, models: z }) }, A = this.event, O = Q.endsWith("/") ? Q.slice(0, Q.length - 1) : Q + "/";
      if (this.macros.length) {
        const P = (F) => (v, D) => {
          if (typeof v === "function" || Array.isArray(v)) {
            if (!Y[F])
              Y[F] = [];
            if (typeof Y[F] === "function")
              Y[F] = [Y[F]];
            if (Array.isArray(v))
              Y[F] = Y[F].concat(v);
            else
              Y[F].push(v);
            return;
          }
          const { insert: h0 = "after", stack: M8 = "local" } = v;
          if (M8 === "global") {
            if (!Array.isArray(D))
              if (h0 === "before")
                A[F].unshift(D);
              else
                A[F].push(D);
            else if (h0 === "before")
              A[F] = D.concat(A[F]);
            else
              A[F] = A[F].concat(D);
            return;
          } else {
            if (!Y[F])
              Y[F] = [];
            if (typeof Y[F] === "function")
              Y[F] = [Y[F]];
            if (!Array.isArray(D))
              if (h0 === "before")
                Y[F].unshift(D);
              else
                Y[F].push(D);
            else if (h0 === "before")
              Y[F] = D.concat(Y[F]);
            else
              Y[F] = Y[F].concat(D);
            return;
          }
        }, j = { events: { global: A, local: Y }, onParse: P("parse"), onTransform: P("transform"), onBeforeHandle: P("beforeHandle"), onAfterHandle: P("afterHandle"), onResponse: P("onResponse"), onError: P("error") };
        for (let F of this.macros) {
          const v = {};
          for (let [h0, M8] of Object.entries(Y ?? {})) {
            if (kJ.includes(h0))
              continue;
            v[h0] = M8;
          }
          if (!F.$elysiaChecksum)
            F.$elysiaChecksum = [];
          const D = V$(JSON.stringify(v));
          if (F.$elysiaChecksum.includes(D))
            continue;
          F.$elysiaChecksum.push(V$(JSON.stringify(v))), fJ(F(j), Y);
        }
      }
      const T = R8(A, Y), E = typeof J === "function";
      if (this.config.aot === false) {
        if (this.dynamicRouter.add($, Q, { validator: M, hooks: T, content: Y?.type, handle: J }), this.config.strictPath === false)
          this.dynamicRouter.add($, O, { validator: M, hooks: T, content: Y?.type, handle: J });
        this.routes.push({ method: $, path: Q, composed: null, handler: J, hooks: T });
        return;
      }
      const _ = Q4({ path: Q, method: $, hooks: T, validator: M, handler: J, handleError: this.handleError, onRequest: this.event.request, config: this.config, definitions: Z ? this.definitions.type : undefined, schema: Z ? this.schema : undefined, getReporter: () => this.reporter, setHeader: this.setHeaders });
      if (!E) {
        const P = Object.assign({ headers: {}, query: {}, params: {}, body: undefined, request: new Request(`http://localhost${Q}`), store: this.store, path: Q, set: { headers: this.setHeaders ?? {}, status: 200 } }, this.decorators);
        let j;
        for (let F of Object.values(T.request))
          try {
            const v = N1(F(P), P.set);
            if (v !== undefined) {
              j = v;
              break;
            }
          } catch (v) {
            j = this.handleError(P, v);
            break;
          }
        if (j)
          _.response = j;
        else
          try {
            _.response = _(P);
          } catch (F) {
            _.response = this.handleError(P, F);
          }
      }
      const x = this.routes.findIndex((P) => P.path === Q && P.method === $);
      if (x !== -1)
        this.routes.splice(x, 1);
      if (this.routes.push({ method: $, path: Q, composed: _, handler: J, hooks: T }), $ === "$INTERNALWS") {
        const P = this.config.strictPath ? undefined : Q.endsWith("/") ? Q.slice(0, Q.length - 1) : Q + "/";
        if (Q.indexOf(":") === -1 && Q.indexOf("*") === -1) {
          const j = this.staticRouter.handlers.length;
          if (this.staticRouter.handlers.push(_), _.response instanceof Response)
            this.staticRouter.variables += `const st${j} = staticRouter.handlers[${j}].response\n`;
          else
            this.staticRouter.variables += `const st${j} = staticRouter.handlers[${j}]\n`;
          if (this.wsPaths[Q] = j, P)
            this.wsPaths[P] = j;
        } else if (this.wsRouter.add("ws", Q, _), P)
          this.wsRouter.add("ws", P, _);
        return;
      }
      if (Q.indexOf(":") === -1 && Q.indexOf("*") === -1) {
        const P = this.staticRouter.handlers.length;
        if (this.staticRouter.handlers.push(_), _.response instanceof Response)
          this.staticRouter.variables += `const st${P} = staticRouter.handlers[${P}].response\n`;
        else
          this.staticRouter.variables += `const st${P} = staticRouter.handlers[${P}]\n`;
        if (!this.staticRouter.map[Q])
          this.staticRouter.map[Q] = { code: "" };
        if ($ === "ALL")
          this.staticRouter.map[Q].all = `default: return st${P}(ctx)\n`;
        else if (_.response instanceof Response)
          this.staticRouter.map[Q].code = `case '${$}': return st${P}.clone()\n${this.staticRouter.map[Q].code}`;
        else
          this.staticRouter.map[Q].code = `case '${$}': return st${P}(ctx)\n${this.staticRouter.map[Q].code}`;
        if (!this.config.strictPath) {
          if (!this.staticRouter.map[O])
            this.staticRouter.map[O] = { code: "" };
          if ($ === "ALL")
            this.staticRouter.map[O].all = `default: return st${P}(ctx)\n`;
          else if (_.response instanceof Response)
            this.staticRouter.map[O].code = `case '${$}': return st${P}.clone()\n${this.staticRouter.map[O].code}`;
          else
            this.staticRouter.map[O].code = `case '${$}': return st${P}(ctx)\n${this.staticRouter.map[O].code}`;
        }
      } else if (this.router.add($, Q, _), !this.config.strictPath)
        this.router.add($, Q.endsWith("/") ? Q.slice(0, Q.length - 1) : Q + "/", _);
    }
  }
  setHeaders;
  headers($) {
    if (!$)
      return this;
    if (!this.setHeaders)
      this.setHeaders = {};
    return this.setHeaders = a1(this.setHeaders, $), this;
  }
  onStart($) {
    return this.on("start", $), this;
  }
  onRequest($) {
    return this.on("request", $), this;
  }
  onParse($) {
    return this.on("parse", $), this;
  }
  onTransform($) {
    return this.on("transform", $), this;
  }
  resolve($) {
    return $.$elysia = "resolve", this.onBeforeHandle($);
  }
  onBeforeHandle($) {
    return this.on("beforeHandle", $), this;
  }
  onAfterHandle($) {
    return this.on("afterHandle", $), this;
  }
  mapResponse($) {
    return this.on("mapResponse", $), this;
  }
  onResponse($) {
    return this.on("response", $), this;
  }
  trace($) {
    return this.reporter.on("event", XY(() => this.reporter, this.event.trace.length, $)), this.on("trace", $), this;
  }
  error($, X) {
    switch (typeof $) {
      case "string":
        return X.prototype[I$] = $, this.definitions.error[$] = X, this;
      case "function":
        return this.definitions.error = $(this.definitions.error), this;
    }
    for (let [J, Y] of Object.entries($))
      Y.prototype[I$] = J, this.definitions.error[J] = Y;
    return this;
  }
  onError($) {
    return this.on("error", $), this;
  }
  onStop($) {
    return this.on("stop", $), this;
  }
  on($, X) {
    for (let J of Array.isArray(X) ? X : [X])
      switch (J = fZ(J), $) {
        case "start":
          this.event.start.push(J);
          break;
        case "request":
          this.event.request.push(J);
          break;
        case "parse":
          this.event.parse.splice(this.event.parse.length - 1, 0, J);
          break;
        case "transform":
          this.event.transform.push(J);
          break;
        case "beforeHandle":
          this.event.beforeHandle.push(J);
          break;
        case "afterHandle":
          this.event.afterHandle.push(J);
          break;
        case "mapResponse":
          this.event.mapResponse.push(J);
          break;
        case "response":
          this.event.onResponse.push(J);
          break;
        case "trace":
          this.event.trace.push(J);
          break;
        case "error":
          this.event.error.push(J);
          break;
        case "stop":
          this.event.stop.push(J);
          break;
      }
    return this;
  }
  group($, X, J) {
    const Y = new w8({ ...this.config, prefix: "" });
    Y.store = this.store, Y.definitions = this.definitions, Y.getServer = () => this.server;
    const Z = typeof X === "object", W = (Z ? J : X)(Y);
    if (this.decorators = a1(this.decorators, Y.decorators), W.event.request.length)
      this.event.request = [...this.event.request, ...W.event.request];
    if (W.event.onResponse.length)
      this.event.onResponse = [...this.event.onResponse, ...W.event.onResponse];
    return this.model(W.definitions.type), Object.values(Y.routes).forEach(({ method: Q, path: z, handler: q, hooks: M }) => {
      if (z = (Z ? "" : this.config.prefix) + $ + z, Z) {
        const A = X, O = M;
        this.add(Q, z, q, R8(A, { ...O, error: !O.error ? W.event.error : Array.isArray(O.error) ? [...O.error, ...W.event.error] : [O.error, ...W.event.error] }));
      } else
        this.add(Q, z, q, R8(M, { error: W.event.error }), { skipPrefix: true });
    }), this;
  }
  guard($, X) {
    if (!X)
      return this.event = AX(this.event, $), this.validator = { body: $.body, headers: $.headers, params: $.params, query: $.query, response: $.response }, this;
    const J = new w8({ ...this.config, prefix: "" });
    J.store = this.store, J.definitions = this.definitions;
    const Y = X(J);
    if (this.decorators = a1(this.decorators, J.decorators), Y.event.request.length)
      this.event.request = [...this.event.request, ...Y.event.request];
    if (Y.event.onResponse.length)
      this.event.onResponse = [...this.event.onResponse, ...Y.event.onResponse];
    return this.model(Y.definitions.type), Object.values(J.routes).forEach(({ method: Z, path: W, handler: Q, hooks: z }) => {
      this.add(Z, W, Q, R8($, { ...z, error: !z.error ? Y.event.error : Array.isArray(z.error) ? [...z.error, ...Y.event.error] : [z.error, ...Y.event.error] }));
    }), this;
  }
  use($) {
    if ($ instanceof Promise)
      return this.lazyLoadModules.push($.then((X) => {
        if (typeof X === "function")
          return X(this);
        if (typeof X.default === "function")
          return X.default(this);
        return this._use(X);
      }).then((X) => X.compile())), this;
    else
      return this._use($);
    return this;
  }
  _use($) {
    if (typeof $ === "function") {
      const Z = $(this);
      if (Z instanceof Promise)
        return this.lazyLoadModules.push(Z.then((W) => {
          if (W instanceof w8) {
            this.compile();
            for (let { method: Q, path: z, handler: q, hooks: M } of Object.values(W.routes))
              this.add(Q, z, q, R8(M, { error: W.event.error }));
            return W;
          }
          if (typeof W === "function")
            return W(this);
          if (typeof W.default === "function")
            return W.default(this);
          return this._use(W);
        }).then((W) => W.compile())), this;
      return Z;
    }
    const { name: X, seed: J } = $.config;
    $.getServer = () => this.getServer(), this.headers($.setHeaders);
    const Y = $.config.scoped;
    if (Y) {
      if (X) {
        if (!(X in this.dependencies))
          this.dependencies[X] = [];
        const W = J !== undefined ? V$(X + JSON.stringify(J)) : 0;
        if (this.dependencies[X].some(({ checksum: Q }) => W === Q))
          return this;
        this.dependencies[X].push(!this.config?.analytic ? { name: $.config.name, seed: $.config.seed, checksum: W, dependencies: $.dependencies } : { name: $.config.name, seed: $.config.seed, checksum: W, dependencies: $.dependencies, stack: $.stack, routes: $.routes, decorators: $.decorators, store: $.store, type: $.definitions.type, error: $.definitions.error, derive: $.event.transform.filter((Q) => Q.$elysia === "derive").map((Q) => ({ fn: Q.toString(), stack: new Error().stack ?? "" })), resolve: $.event.transform.filter((Q) => Q.$elysia === "derive").map((Q) => ({ fn: Q.toString(), stack: new Error().stack ?? "" })) });
      }
      if ($.model(this.definitions.type), $.error(this.definitions.error), $.macros = [...this.macros, ...$.macros], $.onRequest((W) => {
        Object.assign(W, this.decorators), Object.assign(W.store, this.store);
      }), $.event.trace = [...this.event.trace, ...$.event.trace], $.config.aot)
        $.compile();
      const Z = this.mount($.fetch);
      return this.routes = this.routes.concat(Z.routes), this;
    } else {
      $.reporter = this.reporter;
      for (let Z of $.event.trace)
        this.trace(Z);
      if (X) {
        if (!(X in this.dependencies))
          this.dependencies[X] = [];
        const Z = J !== undefined ? V$(X + JSON.stringify(J)) : 0;
        if (!this.dependencies[X].some(({ checksum: W }) => Z === W))
          this.macros.push(...$.macros);
      }
    }
    this.decorate($.decorators), this.state($.store), this.model($.definitions.type), this.error($.definitions.error);
    for (let { method: Z, path: W, handler: Q, hooks: z } of Object.values($.routes))
      this.add(Z, W, Q, R8(z, { error: $.event.error }));
    if (!Y)
      if (X) {
        if (!(X in this.dependencies))
          this.dependencies[X] = [];
        const Z = J !== undefined ? V$(X + JSON.stringify(J)) : 0;
        if (this.dependencies[X].some(({ checksum: W }) => Z === W))
          return this;
        this.dependencies[X].push(!this.config?.analytic ? { name: $.config.name, seed: $.config.seed, checksum: Z, dependencies: $.dependencies } : { name: $.config.name, seed: $.config.seed, checksum: Z, dependencies: $.dependencies, stack: $.stack, routes: $.routes, decorators: $.decorators, store: $.store, type: $.definitions.type, error: $.definitions.error, derive: $.event.transform.filter((W) => W?.$elysia === "derive").map((W) => ({ fn: W.toString(), stack: new Error().stack ?? "" })), resolve: $.event.transform.filter((W) => W?.$elysia === "resolve").map((W) => ({ fn: W.toString(), stack: new Error().stack ?? "" })) }), this.event = AX(this.event, TJ($.event), Z);
      } else
        this.event = AX(this.event, TJ($.event));
    return this;
  }
  macro($) {
    return this.macros.push($), this;
  }
  mount($, X) {
    if ($ instanceof w8 || typeof $ === "function" || $.length === 0 || $ === "/") {
      const Z = typeof $ === "function" ? $ : $ instanceof w8 ? $.compile().fetch : X instanceof w8 ? X.compile().fetch : X, W = async ({ request: Q, path: z }) => Z(new Request(xJ(Q.url, z || "/"), Q));
      return this.all("/", W, { type: "none" }), this.all("/*", W, { type: "none" }), this;
    }
    const J = $.length;
    if (X instanceof w8)
      X = X.compile().fetch;
    const Y = async ({ request: Z, path: W }) => X(new Request(xJ(Z.url, W.slice(J) || "/"), Z));
    return this.all($, Y, { type: "none" }), this.all($ + ($.endsWith("/") ? "*" : "/*"), Y, { type: "none" }), this;
  }
  get($, X, J) {
    return this.add("GET", $, X, J), this;
  }
  post($, X, J) {
    return this.add("POST", $, X, J), this;
  }
  put($, X, J) {
    return this.add("PUT", $, X, J), this;
  }
  patch($, X, J) {
    return this.add("PATCH", $, X, J), this;
  }
  delete($, X, J) {
    return this.add("DELETE", $, X, J), this;
  }
  options($, X, J) {
    return this.add("OPTIONS", $, X, J), this;
  }
  all($, X, J) {
    return this.add("ALL", $, X, J), this;
  }
  head($, X, J) {
    return this.add("HEAD", $, X, J), this;
  }
  connect($, X, J) {
    return this.add("CONNECT", $, X, J), this;
  }
  ws($, X) {
    const J = X.transformMessage ? Array.isArray(X.transformMessage) ? X.transformMessage : [X.transformMessage] : undefined;
    let Y = null;
    const Z = e1(X?.body, { models: this.definitions.type }), W = e1(X?.response, { models: this.definitions.type }), Q = (z) => {
      if (typeof z === "string") {
        const q = z?.charCodeAt(0);
        if (q === 47 || q === 123)
          try {
            z = JSON.parse(z);
          } catch {
          }
        else if (DX(z))
          z = +z;
      }
      if (J?.length)
        for (let q = 0;q < J.length; q++) {
          const M = J[q](z);
          if (M !== undefined)
            z = M;
        }
      return z;
    };
    return this.route("$INTERNALWS", $, (z) => {
      const { set: q, path: M, qi: A, headers: O, query: T, params: E } = z;
      if (Y === null)
        Y = this.getServer();
      if (Y?.upgrade(z.request, { headers: typeof X.upgrade === "function" ? X.upgrade(z) : X.upgrade, data: { validator: W, open(_) {
        X.open?.(new x$(_, z));
      }, message: (_, x) => {
        const P = Q(x);
        if (Z?.Check(P) === false)
          return void _.send(new P0("message", Z, P).message);
        X.message?.(new x$(_, z), P);
      }, drain(_) {
        X.drain?.(new x$(_, z));
      }, close(_, x, P) {
        X.close?.(new x$(_, z), x, P);
      } } }))
        return;
      return q.status = 400, "Expected a websocket connection";
    }, { beforeHandle: X.beforeHandle, transform: X.transform, headers: X.headers, params: X.params, query: X.query }), this;
  }
  route($, X, J, { config: Y, ...Z } = { config: { allowMeta: false } }) {
    return this.add($, X, J, Z, Y), this;
  }
  state($, X) {
    switch (typeof $) {
      case "object":
        return this.store = a1(this.store, $), this;
      case "function":
        return this.store = $(this.store), this;
    }
    if (!($ in this.store))
      this.store[$] = X;
    return this;
  }
  decorate($, X) {
    switch (typeof $) {
      case "object":
        return this.decorators = a1(this.decorators, $), this;
      case "function":
        return this.decorators = $(this.decorators), this;
    }
    if (!($ in this.decorators))
      this.decorators[$] = X;
    return this;
  }
  derive($) {
    return $.$elysia = "derive", this.onTransform($);
  }
  model($, X) {
    switch (typeof $) {
      case "object":
        return Object.entries($).forEach(([J, Y]) => {
          if (!(J in this.definitions.type))
            this.definitions.type[J] = Y;
        }), this;
      case "function":
        return this.definitions.type = $(this.definitions.type), this;
    }
    return this.definitions.type[$] = X, this;
  }
  mapDerive($) {
    return $.$elysia = "derive", this.onTransform($);
  }
  affix($, X, J) {
    if (J === "")
      return this;
    const Y = ["_", "-", " "], Z = (q) => q[0].toUpperCase() + q.slice(1), W = $ === "prefix" ? (q, M) => Y.includes(q.at(-1) ?? "") ? q + M : q + Z(M) : Y.includes(J.at(-1) ?? "") ? (q, M) => M + q : (q, M) => M + Z(q), Q = (q) => {
      const M = {};
      switch (q) {
        case "decorator":
          for (let A in this.decorators)
            M[W(J, A)] = this.decorators[A];
          this.decorators = M;
          break;
        case "state":
          for (let A in this.store)
            M[W(J, A)] = this.store[A];
          this.store = M;
          break;
        case "model":
          for (let A in this.definitions.type)
            M[W(J, A)] = this.definitions.type[A];
          this.definitions.type = M;
          break;
        case "error":
          for (let A in this.definitions.error)
            M[W(J, A)] = this.definitions.error[A];
          this.definitions.error = M;
          break;
      }
    }, z = Array.isArray(X) ? X : [X];
    for (let q of z.some((M) => M === "all") ? ["decorator", "state", "model", "error"] : z)
      Q(q);
    return this;
  }
  prefix($, X) {
    return this.affix("prefix", $, X);
  }
  suffix($, X) {
    return this.affix("suffix", $, X);
  }
  compile() {
    if (this.fetch = this.config.aot ? iJ(this) : cJ(this), typeof this.server?.reload === "function")
      this.server.reload({ ...this.server, fetch: this.fetch });
    return this;
  }
  handle = async ($) => this.fetch($);
  fetch = ($) => {
    return (this.fetch = this.config.aot ? iJ(this) : cJ(this))($);
  };
  handleError = async ($, X) => (this.handleError = this.config.aot ? uJ(this) : z4(this))($, X);
  outerErrorHandler = ($) => new Response($.message || $.name || "Error", { status: $?.status ?? 500 });
  listen = ($, X) => {
    if (!Bun)
      throw new Error("Bun to run");
    if (this.compile(), typeof $ === "string") {
      if ($ = +$.trim(), Number.isNaN($))
        throw new Error("Port must be a numeric value");
    }
    const J = this.fetch, Y = typeof $ === "object" ? { development: !M6, reusePort: true, ...this.config.serve, ...$, websocket: { ...this.config.websocket, ...yJ }, fetch: J, error: this.outerErrorHandler } : { development: !M6, reusePort: true, ...this.config.serve, websocket: { ...this.config.websocket, ...yJ }, port: $, fetch: J, error: this.outerErrorHandler };
    if (typeof Bun === "undefined")
      throw new Error(".listen() is designed to run on Bun only. If you are running Elysia in other environment please use a dedicated plugin or export the handler via Elysia.fetch");
    if (this.server = Bun?.serve(Y), this.event.start.length)
      for (let Z = 0;Z < this.event.start.length; Z++)
        this.event.start[Z](this);
    if (X)
      X(this.server);
    return process.on("beforeExit", () => {
      for (let Z = 0;Z < this.event.stop.length; Z++)
        this.event.stop[Z](this);
    }), Promise.all(this.lazyLoadModules).then(() => {
      Bun?.gc(false);
    }), this;
  };
  stop = async () => {
    if (!this.server)
      throw new Error("Elysia isn't running. Call `app.listen` to start the server.");
    if (this.server.stop(), this.event.stop.length)
      for (let $ = 0;$ < this.event.stop.length; $++)
        this.event.stop[$](this);
  };
  get modules() {
    return Promise.all(this.lazyLoadModules);
  }
}

// src/index.ts
var app = new w8().get("/", () => "Hello Elysia").get("/health", () => {
  return {
    status: "OK",
    uptime: process.uptime().toFixed(2),
    timestamp: new Date().toISOString()
  };
}).listen(3000);
console.log(`\uD83E\uDD8A Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);

!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports["for-widgets-server"] = t())
    : (e["for-widgets-server"] = t());
})(this, function () {
  return (function () {
    var e = {
        17351: function (e, t, n) {
          var o = n(51566),
            a = n(42792),
            r = n(34827),
            i = n(66887),
            l = n(63887);
          function c(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
              var o = e[t];
              this.set(o[0], o[1]);
            }
          }
          (c.prototype.clear = o),
            (c.prototype.delete = a),
            (c.prototype.get = r),
            (c.prototype.has = i),
            (c.prototype.set = l),
            (e.exports = c);
        },
        85581: function (e, t, n) {
          var o = n(69936),
            a = n(10966),
            r = n(61569),
            i = n(58925),
            l = n(46949);
          function c(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
              var o = e[t];
              this.set(o[0], o[1]);
            }
          }
          (c.prototype.clear = o),
            (c.prototype.delete = a),
            (c.prototype.get = r),
            (c.prototype.has = i),
            (c.prototype.set = l),
            (e.exports = c);
        },
        23433: function (e, t, n) {
          var o = n(8268)(n(40631), "Map");
          e.exports = o;
        },
        89427: function (e, t, n) {
          var o = n(55282),
            a = n(96452),
            r = n(42423),
            i = n(17483),
            l = n(96179);
          function c(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
              var o = e[t];
              this.set(o[0], o[1]);
            }
          }
          (c.prototype.clear = o),
            (c.prototype.delete = a),
            (c.prototype.get = r),
            (c.prototype.has = i),
            (c.prototype.set = l),
            (e.exports = c);
        },
        45451: function (e, t, n) {
          var o = n(40631).Symbol;
          e.exports = o;
        },
        35314: function (e) {
          e.exports = function (e, t) {
            for (
              var n = -1, o = null == e ? 0 : e.length, a = Array(o);
              ++n < o;

            )
              a[n] = t(e[n], n, e);
            return a;
          };
        },
        50331: function (e, t, n) {
          var o = n(31774);
          e.exports = function (e, t) {
            for (var n = e.length; n--; ) if (o(e[n][0], t)) return n;
            return -1;
          };
        },
        89364: function (e, t, n) {
          var o = n(88719),
            a = n(48775);
          e.exports = function (e, t) {
            t = o(t, e);
            for (var n = 0, r = t.length; null != e && n < r; )
              e = e[a(t[n++])];
            return n && n == r ? e : void 0;
          };
        },
        38742: function (e, t, n) {
          var o = n(45451),
            a = n(25085),
            r = n(75624),
            i = o ? o.toStringTag : void 0;
          e.exports = function (e) {
            return null == e
              ? void 0 === e
                ? "[object Undefined]"
                : "[object Null]"
              : i && i in Object(e)
              ? a(e)
              : r(e);
          };
        },
        5325: function (e, t, n) {
          var o = n(19424),
            a = n(37546),
            r = n(75943),
            i = n(94235),
            l = /^\[object .+?Constructor\]$/,
            c = Object.prototype,
            s = Function.prototype.toString,
            u = c.hasOwnProperty,
            d = RegExp(
              "^" +
                s
                  .call(u)
                  .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            );
          e.exports = function (e) {
            return !(!r(e) || a(e)) && (o(e) ? d : l).test(i(e));
          };
        },
        53998: function (e, t, n) {
          var o = n(45451),
            a = n(35314),
            r = n(98324),
            i = n(36024),
            l = 1 / 0,
            c = o ? o.prototype : void 0,
            s = c ? c.toString : void 0;
          e.exports = function e(t) {
            if ("string" == typeof t) return t;
            if (r(t)) return a(t, e) + "";
            if (i(t)) return s ? s.call(t) : "";
            var n = t + "";
            return "0" == n && 1 / t == -l ? "-0" : n;
          };
        },
        88719: function (e, t, n) {
          var o = n(98324),
            a = n(45004),
            r = n(89924),
            i = n(52936);
          e.exports = function (e, t) {
            return o(e) ? e : a(e, t) ? [e] : r(i(e));
          };
        },
        41707: function (e, t, n) {
          var o = n(40631)["__core-js_shared__"];
          e.exports = o;
        },
        26210: function (e, t, n) {
          var o = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
          e.exports = o;
        },
        38077: function (e, t, n) {
          var o = n(24128);
          e.exports = function (e, t) {
            var n = e.__data__;
            return o(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
          };
        },
        8268: function (e, t, n) {
          var o = n(5325),
            a = n(65510);
          e.exports = function (e, t) {
            var n = a(e, t);
            return o(n) ? n : void 0;
          };
        },
        25085: function (e, t, n) {
          var o = n(45451),
            a = Object.prototype,
            r = a.hasOwnProperty,
            i = a.toString,
            l = o ? o.toStringTag : void 0;
          e.exports = function (e) {
            var t = r.call(e, l),
              n = e[l];
            try {
              e[l] = void 0;
              var o = !0;
            } catch (e) {}
            var a = i.call(e);
            return o && (t ? (e[l] = n) : delete e[l]), a;
          };
        },
        65510: function (e) {
          e.exports = function (e, t) {
            return null == e ? void 0 : e[t];
          };
        },
        51566: function (e, t, n) {
          var o = n(58176);
          e.exports = function () {
            (this.__data__ = o ? o(null) : {}), (this.size = 0);
          };
        },
        42792: function (e) {
          e.exports = function (e) {
            var t = this.has(e) && delete this.__data__[e];
            return (this.size -= t ? 1 : 0), t;
          };
        },
        34827: function (e, t, n) {
          var o = n(58176),
            a = Object.prototype.hasOwnProperty;
          e.exports = function (e) {
            var t = this.__data__;
            if (o) {
              var n = t[e];
              return "__lodash_hash_undefined__" === n ? void 0 : n;
            }
            return a.call(t, e) ? t[e] : void 0;
          };
        },
        66887: function (e, t, n) {
          var o = n(58176),
            a = Object.prototype.hasOwnProperty;
          e.exports = function (e) {
            var t = this.__data__;
            return o ? void 0 !== t[e] : a.call(t, e);
          };
        },
        63887: function (e, t, n) {
          var o = n(58176);
          e.exports = function (e, t) {
            var n = this.__data__;
            return (
              (this.size += this.has(e) ? 0 : 1),
              (n[e] = o && void 0 === t ? "__lodash_hash_undefined__" : t),
              this
            );
          };
        },
        45004: function (e, t, n) {
          var o = n(98324),
            a = n(36024),
            r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            i = /^\w*$/;
          e.exports = function (e, t) {
            if (o(e)) return !1;
            var n = typeof e;
            return (
              !!(
                "number" == n ||
                "symbol" == n ||
                "boolean" == n ||
                null == e ||
                a(e)
              ) ||
              i.test(e) ||
              !r.test(e) ||
              (null != t && e in Object(t))
            );
          };
        },
        24128: function (e) {
          e.exports = function (e) {
            var t = typeof e;
            return "string" == t ||
              "number" == t ||
              "symbol" == t ||
              "boolean" == t
              ? "__proto__" !== e
              : null === e;
          };
        },
        37546: function (e, t, n) {
          var o,
            a = n(41707),
            r = (o = /[^.]+$/.exec((a && a.keys && a.keys.IE_PROTO) || ""))
              ? "Symbol(src)_1." + o
              : "";
          e.exports = function (e) {
            return !!r && r in e;
          };
        },
        69936: function (e) {
          e.exports = function () {
            (this.__data__ = []), (this.size = 0);
          };
        },
        10966: function (e, t, n) {
          var o = n(50331),
            a = Array.prototype.splice;
          e.exports = function (e) {
            var t = this.__data__,
              n = o(t, e);
            return (
              !(n < 0) &&
              (n == t.length - 1 ? t.pop() : a.call(t, n, 1), --this.size, !0)
            );
          };
        },
        61569: function (e, t, n) {
          var o = n(50331);
          e.exports = function (e) {
            var t = this.__data__,
              n = o(t, e);
            return n < 0 ? void 0 : t[n][1];
          };
        },
        58925: function (e, t, n) {
          var o = n(50331);
          e.exports = function (e) {
            return o(this.__data__, e) > -1;
          };
        },
        46949: function (e, t, n) {
          var o = n(50331);
          e.exports = function (e, t) {
            var n = this.__data__,
              a = o(n, e);
            return a < 0 ? (++this.size, n.push([e, t])) : (n[a][1] = t), this;
          };
        },
        55282: function (e, t, n) {
          var o = n(17351),
            a = n(85581),
            r = n(23433);
          e.exports = function () {
            (this.size = 0),
              (this.__data__ = {
                hash: new o(),
                map: new (r || a)(),
                string: new o(),
              });
          };
        },
        96452: function (e, t, n) {
          var o = n(38077);
          e.exports = function (e) {
            var t = o(this, e).delete(e);
            return (this.size -= t ? 1 : 0), t;
          };
        },
        42423: function (e, t, n) {
          var o = n(38077);
          e.exports = function (e) {
            return o(this, e).get(e);
          };
        },
        17483: function (e, t, n) {
          var o = n(38077);
          e.exports = function (e) {
            return o(this, e).has(e);
          };
        },
        96179: function (e, t, n) {
          var o = n(38077);
          e.exports = function (e, t) {
            var n = o(this, e),
              a = n.size;
            return n.set(e, t), (this.size += n.size == a ? 0 : 1), this;
          };
        },
        34790: function (e, t, n) {
          var o = n(29842);
          e.exports = function (e) {
            var t = o(e, function (e) {
                return 500 === n.size && n.clear(), e;
              }),
              n = t.cache;
            return t;
          };
        },
        58176: function (e, t, n) {
          var o = n(8268)(Object, "create");
          e.exports = o;
        },
        75624: function (e) {
          var t = Object.prototype.toString;
          e.exports = function (e) {
            return t.call(e);
          };
        },
        40631: function (e, t, n) {
          var o = n(26210),
            a =
              "object" == typeof self && self && self.Object === Object && self,
            r = o || a || Function("return this")();
          e.exports = r;
        },
        89924: function (e, t, n) {
          var o = n(34790),
            a =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            r = /\\(\\)?/g,
            i = o(function (e) {
              var t = [];
              return (
                46 === e.charCodeAt(0) && t.push(""),
                e.replace(a, function (e, n, o, a) {
                  t.push(o ? a.replace(r, "$1") : n || e);
                }),
                t
              );
            });
          e.exports = i;
        },
        48775: function (e, t, n) {
          var o = n(36024),
            a = 1 / 0;
          e.exports = function (e) {
            if ("string" == typeof e || o(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -a ? "-0" : t;
          };
        },
        94235: function (e) {
          var t = Function.prototype.toString;
          e.exports = function (e) {
            if (null != e) {
              try {
                return t.call(e);
              } catch (e) {}
              try {
                return e + "";
              } catch (e) {}
            }
            return "";
          };
        },
        31774: function (e) {
          e.exports = function (e, t) {
            return e === t || (e != e && t != t);
          };
        },
        64698: function (e, t, n) {
          var o = n(89364);
          e.exports = function (e, t, n) {
            var a = null == e ? void 0 : o(e, t);
            return void 0 === a ? n : a;
          };
        },
        98324: function (e) {
          var t = Array.isArray;
          e.exports = t;
        },
        19424: function (e, t, n) {
          var o = n(38742),
            a = n(75943);
          e.exports = function (e) {
            if (!a(e)) return !1;
            var t = o(e);
            return (
              "[object Function]" == t ||
              "[object GeneratorFunction]" == t ||
              "[object AsyncFunction]" == t ||
              "[object Proxy]" == t
            );
          };
        },
        75943: function (e) {
          e.exports = function (e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t);
          };
        },
        68384: function (e) {
          e.exports = function (e) {
            return null != e && "object" == typeof e;
          };
        },
        36024: function (e, t, n) {
          var o = n(38742),
            a = n(68384);
          e.exports = function (e) {
            return "symbol" == typeof e || (a(e) && "[object Symbol]" == o(e));
          };
        },
        29842: function (e, t, n) {
          var o = n(89427);
          function a(e, t) {
            if ("function" != typeof e || (null != t && "function" != typeof t))
              throw TypeError("Expected a function");
            var n = function () {
              var o = arguments,
                a = t ? t.apply(this, o) : o[0],
                r = n.cache;
              if (r.has(a)) return r.get(a);
              var i = e.apply(this, o);
              return (n.cache = r.set(a, i) || r), i;
            };
            return (n.cache = new (a.Cache || o)()), n;
          }
          (a.Cache = o), (e.exports = a);
        },
        52936: function (e, t, n) {
          var o = n(53998);
          e.exports = function (e) {
            return null == e ? "" : o(e);
          };
        },
        34913: function (e) {
          "use strict";
          /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var t = Object.getOwnPropertySymbols,
            n = Object.prototype.hasOwnProperty,
            o = Object.prototype.propertyIsEnumerable;
          e.exports = !(function () {
            try {
              if (!Object.assign) return !1;
              var e = new String("abc");
              if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
                return !1;
              for (var t = {}, n = 0; n < 10; n++)
                t["_" + String.fromCharCode(n)] = n;
              var o = Object.getOwnPropertyNames(t).map(function (e) {
                return t[e];
              });
              if ("0123456789" !== o.join("")) return !1;
              var a = {};
              if (
                ("abcdefghijklmnopqrst".split("").forEach(function (e) {
                  a[e] = e;
                }),
                "abcdefghijklmnopqrst" !==
                  Object.keys(Object.assign({}, a)).join(""))
              )
                return !1;
              return !0;
            } catch (e) {
              return !1;
            }
          })()
            ? function (e, a) {
                for (
                  var r,
                    i,
                    l = (function (e) {
                      if (null == e)
                        throw TypeError(
                          "Object.assign cannot be called with null or undefined"
                        );
                      return Object(e);
                    })(e),
                    c = 1;
                  c < arguments.length;
                  c++
                ) {
                  for (var s in (r = Object(arguments[c])))
                    n.call(r, s) && (l[s] = r[s]);
                  if (t) {
                    i = t(r);
                    for (var u = 0; u < i.length; u++)
                      o.call(r, i[u]) && (l[i[u]] = r[i[u]]);
                  }
                }
                return l;
              }
            : Object.assign;
        },
        90852: function (e, t, n) {
          "use strict";
          var o = n(13171);
          function a() {}
          function r() {}
          (r.resetWarningCache = a),
            (e.exports = function () {
              function e(e, t, n, a, r, i) {
                if (i !== o) {
                  var l = Error(
                    "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                  );
                  throw ((l.name = "Invariant Violation"), l);
                }
              }
              function t() {
                return e;
              }
              e.isRequired = e;
              var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: r,
                resetWarningCache: a,
              };
              return (n.PropTypes = n), n;
            });
        },
        26290: function (e, t, n) {
          e.exports = n(90852)();
        },
        13171: function (e) {
          "use strict";
          e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        },
        76385: function (e, t, n) {
          "use strict";
          /** @license React v17.0.2
           * react-jsx-runtime.production.min.js
           *
           * Copyright (c) Facebook, Inc. and its affiliates.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */ n(34913);
          var o = n(92451),
            a = 60103;
          if ("function" == typeof Symbol && Symbol.for) {
            var r = Symbol.for;
            (a = r("react.element")), r("react.fragment");
          }
          var i =
              o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                .ReactCurrentOwner,
            l = Object.prototype.hasOwnProperty,
            c = { key: !0, ref: !0, __self: !0, __source: !0 };
          t.jsx = function (e, t, n) {
            var o,
              r = {},
              s = null,
              u = null;
            for (o in (void 0 !== n && (s = "" + n),
            void 0 !== t.key && (s = "" + t.key),
            void 0 !== t.ref && (u = t.ref),
            t))
              l.call(t, o) && !c.hasOwnProperty(o) && (r[o] = t[o]);
            if (e && e.defaultProps)
              for (o in (t = e.defaultProps)) void 0 === r[o] && (r[o] = t[o]);
            return {
              $$typeof: a,
              type: e,
              key: s,
              ref: u,
              props: r,
              _owner: i.current,
            };
          };
        },
        81386: function (e, t, n) {
          "use strict";
          /** @license React v17.0.2
           * react.production.min.js
           *
           * Copyright (c) Facebook, Inc. and its affiliates.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */ var o = n(34913),
            a = 60103,
            r = 60106;
          (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
          var i = 60109,
            l = 60110,
            c = 60112;
          t.Suspense = 60113;
          var s = 60115,
            u = 60116;
          if ("function" == typeof Symbol && Symbol.for) {
            var d = Symbol.for;
            (a = d("react.element")),
              (r = d("react.portal")),
              (t.Fragment = d("react.fragment")),
              (t.StrictMode = d("react.strict_mode")),
              (t.Profiler = d("react.profiler")),
              (i = d("react.provider")),
              (l = d("react.context")),
              (c = d("react.forward_ref")),
              (t.Suspense = d("react.suspense")),
              (s = d("react.memo")),
              (u = d("react.lazy"));
          }
          var m = "function" == typeof Symbol && Symbol.iterator;
          function f(e) {
            for (
              var t =
                  "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
                n = 1;
              n < arguments.length;
              n++
            )
              t += "&args[]=" + encodeURIComponent(arguments[n]);
            return (
              "Minified React error #" +
              e +
              "; visit " +
              t +
              " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            );
          }
          var p = {
              isMounted: function () {
                return !1;
              },
              enqueueForceUpdate: function () {},
              enqueueReplaceState: function () {},
              enqueueSetState: function () {},
            },
            g = {};
          function h(e, t, n) {
            (this.props = e),
              (this.context = t),
              (this.refs = g),
              (this.updater = n || p);
          }
          function v() {}
          function y(e, t, n) {
            (this.props = e),
              (this.context = t),
              (this.refs = g),
              (this.updater = n || p);
          }
          (h.prototype.isReactComponent = {}),
            (h.prototype.setState = function (e, t) {
              if ("object" != typeof e && "function" != typeof e && null != e)
                throw Error(f(85));
              this.updater.enqueueSetState(this, e, t, "setState");
            }),
            (h.prototype.forceUpdate = function (e) {
              this.updater.enqueueForceUpdate(this, e, "forceUpdate");
            }),
            (v.prototype = h.prototype);
          var M = (y.prototype = new v());
          (M.constructor = y), o(M, h.prototype), (M.isPureReactComponent = !0);
          var T = { current: null },
            w = Object.prototype.hasOwnProperty,
            b = { key: !0, ref: !0, __self: !0, __source: !0 };
          function G(e, t, n) {
            var o,
              r = {},
              i = null,
              l = null;
            if (null != t)
              for (o in (void 0 !== t.ref && (l = t.ref),
              void 0 !== t.key && (i = "" + t.key),
              t))
                w.call(t, o) && !b.hasOwnProperty(o) && (r[o] = t[o]);
            var c = arguments.length - 2;
            if (1 === c) r.children = n;
            else if (1 < c) {
              for (var s = Array(c), u = 0; u < c; u++) s[u] = arguments[u + 2];
              r.children = s;
            }
            if (e && e.defaultProps)
              for (o in (c = e.defaultProps)) void 0 === r[o] && (r[o] = c[o]);
            return {
              $$typeof: a,
              type: e,
              key: i,
              ref: l,
              props: r,
              _owner: T.current,
            };
          }
          function _(e) {
            return "object" == typeof e && null !== e && e.$$typeof === a;
          }
          var S = /\/+/g;
          function C(e, t) {
            var n, o;
            return "object" == typeof e && null !== e && null != e.key
              ? ((n = "" + e.key),
                (o = { "=": "=0", ":": "=2" }),
                "$" +
                  n.replace(/[=:]/g, function (e) {
                    return o[e];
                  }))
              : t.toString(36);
          }
          function k(e, t, n) {
            if (null == e) return e;
            var o = [],
              i = 0;
            return (
              !(function e(t, n, o, i, l) {
                var c,
                  s,
                  u,
                  d = typeof t;
                ("undefined" === d || "boolean" === d) && (t = null);
                var p = !1;
                if (null === t) p = !0;
                else
                  switch (d) {
                    case "string":
                    case "number":
                      p = !0;
                      break;
                    case "object":
                      switch (t.$$typeof) {
                        case a:
                        case r:
                          p = !0;
                      }
                  }
                if (p)
                  return (
                    (l = l((p = t))),
                    (t = "" === i ? "." + C(p, 0) : i),
                    Array.isArray(l)
                      ? ((o = ""),
                        null != t && (o = t.replace(S, "$&/") + "/"),
                        e(l, n, o, "", function (e) {
                          return e;
                        }))
                      : null != l &&
                        (_(l) &&
                          ((c = l),
                          (s =
                            o +
                            (!l.key || (p && p.key === l.key)
                              ? ""
                              : ("" + l.key).replace(S, "$&/") + "/") +
                            t),
                          (l = {
                            $$typeof: a,
                            type: c.type,
                            key: s,
                            ref: c.ref,
                            props: c.props,
                            _owner: c._owner,
                          })),
                        n.push(l)),
                    1
                  );
                if (((p = 0), (i = "" === i ? "." : i + ":"), Array.isArray(t)))
                  for (var g = 0; g < t.length; g++) {
                    var h = i + C((d = t[g]), g);
                    p += e(d, n, o, h, l);
                  }
                else if (
                  "function" ==
                  typeof (h =
                    null === (u = t) || "object" != typeof u
                      ? null
                      : "function" ==
                        typeof (u = (m && u[m]) || u["@@iterator"])
                      ? u
                      : null)
                )
                  for (t = h.call(t), g = 0; !(d = t.next()).done; )
                    (h = i + C((d = d.value), g++)), (p += e(d, n, o, h, l));
                else if ("object" === d)
                  throw Error(
                    f(
                      31,
                      "[object Object]" == (n = "" + t)
                        ? "object with keys {" + Object.keys(t).join(", ") + "}"
                        : n
                    )
                  );
                return p;
              })(e, o, "", "", function (e) {
                return t.call(n, e, i++);
              }),
              o
            );
          }
          function E(e) {
            if (-1 === e._status) {
              var t = e._result;
              (t = t()),
                (e._status = 0),
                (e._result = t),
                t.then(
                  function (t) {
                    0 === e._status &&
                      ((t = t.default), (e._status = 1), (e._result = t));
                  },
                  function (t) {
                    0 === e._status && ((e._status = 2), (e._result = t));
                  }
                );
            }
            if (1 === e._status) return e._result;
            throw e._result;
          }
          var F = { current: null };
          function x() {
            var e = F.current;
            if (null === e) throw Error(f(321));
            return e;
          }
          (t.Children = {
            map: k,
            forEach: function (e, t, n) {
              k(
                e,
                function () {
                  t.apply(this, arguments);
                },
                n
              );
            },
            count: function (e) {
              var t = 0;
              return (
                k(e, function () {
                  t++;
                }),
                t
              );
            },
            toArray: function (e) {
              return (
                k(e, function (e) {
                  return e;
                }) || []
              );
            },
            only: function (e) {
              if (!_(e)) throw Error(f(143));
              return e;
            },
          }),
            (t.Component = h),
            (t.PureComponent = y),
            (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
              ReactCurrentDispatcher: F,
              ReactCurrentBatchConfig: { transition: 0 },
              ReactCurrentOwner: T,
              IsSomeRendererActing: { current: !1 },
              assign: o,
            }),
            (t.cloneElement = function (e, t, n) {
              if (null == e) throw Error(f(267, e));
              var r = o({}, e.props),
                i = e.key,
                l = e.ref,
                c = e._owner;
              if (null != t) {
                if (
                  (void 0 !== t.ref && ((l = t.ref), (c = T.current)),
                  void 0 !== t.key && (i = "" + t.key),
                  e.type && e.type.defaultProps)
                )
                  var s = e.type.defaultProps;
                for (u in t)
                  w.call(t, u) &&
                    !b.hasOwnProperty(u) &&
                    (r[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
              }
              var u = arguments.length - 2;
              if (1 === u) r.children = n;
              else if (1 < u) {
                s = Array(u);
                for (var d = 0; d < u; d++) s[d] = arguments[d + 2];
                r.children = s;
              }
              return {
                $$typeof: a,
                type: e.type,
                key: i,
                ref: l,
                props: r,
                _owner: c,
              };
            }),
            (t.createContext = function (e, t) {
              return (
                void 0 === t && (t = null),
                ((e = {
                  $$typeof: l,
                  _calculateChangedBits: t,
                  _currentValue: e,
                  _currentValue2: e,
                  _threadCount: 0,
                  Provider: null,
                  Consumer: null,
                }).Provider = { $$typeof: i, _context: e }),
                (e.Consumer = e)
              );
            }),
            (t.createElement = G),
            (t.createFactory = function (e) {
              var t = G.bind(null, e);
              return (t.type = e), t;
            }),
            (t.createRef = function () {
              return { current: null };
            }),
            (t.forwardRef = function (e) {
              return { $$typeof: c, render: e };
            }),
            (t.isValidElement = _),
            (t.lazy = function (e) {
              return {
                $$typeof: u,
                _payload: { _status: -1, _result: e },
                _init: E,
              };
            }),
            (t.memo = function (e, t) {
              return { $$typeof: s, type: e, compare: void 0 === t ? null : t };
            }),
            (t.useCallback = function (e, t) {
              return x().useCallback(e, t);
            }),
            (t.useContext = function (e, t) {
              return x().useContext(e, t);
            }),
            (t.useDebugValue = function () {}),
            (t.useEffect = function (e, t) {
              return x().useEffect(e, t);
            }),
            (t.useImperativeHandle = function (e, t, n) {
              return x().useImperativeHandle(e, t, n);
            }),
            (t.useLayoutEffect = function (e, t) {
              return x().useLayoutEffect(e, t);
            }),
            (t.useMemo = function (e, t) {
              return x().useMemo(e, t);
            }),
            (t.useReducer = function (e, t, n) {
              return x().useReducer(e, t, n);
            }),
            (t.useRef = function (e) {
              return x().useRef(e);
            }),
            (t.useState = function (e) {
              return x().useState(e);
            }),
            (t.version = "17.0.2");
        },
        92451: function (e, t, n) {
          "use strict";
          e.exports = n(81386);
        },
        80579: function (e, t, n) {
          "use strict";
          e.exports = n(76385);
        },
      },
      t = {};
    function n(o) {
      var a = t[o];
      if (void 0 !== a) return a.exports;
      var r = (t[o] = { exports: {} });
      return e[o](r, r.exports, n), r.exports;
    }
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, { a: t }), t;
    }),
      (n.d = function (e, t) {
        for (var o in t)
          n.o(t, o) &&
            !n.o(e, o) &&
            Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
      }),
      (n.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || Function("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      });
    var o = {};
    return (
      !(function () {
        "use strict";
        n.d(o, {
          default: function () {
            return w;
          },
        });
        var e = {
          confirmEmail: "E-mail does not match",
          pleaseWait: "Please wait...",
          validateEmail: "You need to validate this e-mail",
          confirmClearForm: "Are you sure you want to clear the form",
          lessThan: "Your score should be less than or equal to",
          incompleteFields:
            "There are incomplete required fields. Please complete them.",
          required: "This field is required.",
          requireOne: "At least one field required.",
          requireEveryRow: "Every row is required.",
          requireEveryCell: "Every cell is required.",
          email: "Enter a valid e-mail address",
          alphabetic: "This field can only contain letters",
          numeric: "This field can only contain numeric values",
          alphanumeric: "This field can only contain letters and numbers.",
          cyrillic: "This field can only contain cyrillic characters",
          url: "This field can only contain a valid URL",
          currency: "This field can only contain currency values.",
          fillMask: "Field value must fill mask.",
          uploadExtensions: "You can only upload following files:",
          noUploadExtensions:
            "File has no extension file type (e.g. .txt, .png, .jpeg)",
          uploadFilesize: "File size cannot be bigger than:",
          uploadFilesizemin: "File size cannot be smaller than:",
          gradingScoreError: "Score total should only be less than or equal to",
          inputCarretErrorA: "Input should not be less than the minimum value:",
          inputCarretErrorB:
            "Input should not be greater than the maximum value:",
          maxDigitsError: "The maximum digits allowed is",
          minCharactersError:
            "The number of characters should not be less than the minimum value:",
          maxCharactersError:
            "The number of characters should not be more than the maximum value:",
          freeEmailError: "Free email accounts are not allowed",
          minSelectionsError: "The minimum required number of selections is ",
          maxSelectionsError: "The maximum number of selections allowed is ",
          pastDatesDisallowed: "Date must not be in the past.",
          dateLimited: "This date is unavailable.",
          dateInvalid: "This date is not valid. The date format is {format}",
          dateInvalidSeparate:
            "This date is not valid. Enter a valid {element}.",
          ageVerificationError:
            "You must be older than {minAge} years old to submit this form.",
          multipleFileUploads_typeError:
            "{file} has invalid extension. Only {extensions} are allowed.",
          multipleFileUploads_sizeError:
            "{file} is too large, maximum file size is {sizeLimit}.",
          multipleFileUploads_minSizeError:
            "{file} is too small, minimum file size is {minSizeLimit}.",
          multipleFileUploads_emptyError:
            "{file} is empty, please select files again without it.",
          multipleFileUploads_uploadFailed:
            "File upload failed, please remove it and upload the file again.",
          multipleFileUploads_onLeave:
            "The files are being uploaded, if you leave now the upload will be cancelled.",
          multipleFileUploads_fileLimitError:
            "Only {fileLimit} file uploads allowed.",
          dragAndDropFilesHere_infoMessage: "Drag and drop files here",
          chooseAFile_infoMessage: "Choose a file",
          maxFileSize_infoMessage: "Max. file size",
          generalError:
            "There are errors on the form. Please fix them before continuing.",
          generalPageError:
            "There are errors on this page. Please fix them before continuing.",
          wordLimitError: "Too many words. The limit is",
          wordMinLimitError: "Too few words.  The minimum is",
          characterLimitError: "Too many Characters.  The limit is",
          characterMinLimitError: "Too few characters. The minimum is",
          ccInvalidNumber: "Credit Card Number is invalid.",
          ccInvalidCVC: "CVC number is invalid.",
          ccInvalidExpireDate: "Expire date is invalid.",
          ccInvalidExpireMonth: "Expiration month is invalid.",
          ccInvalidExpireYear: "Expiration year is invalid.",
          ccMissingDetails: "Please fill up the credit card details.",
          ccMissingProduct: "Please select at least one product.",
          ccMissingDonation: "Please enter numeric values for donation amount.",
          disallowDecimals: "Please enter a whole number.",
          restrictedDomain: "This domain is not allowed",
          ccDonationMinLimitError: "Minimum amount is {minAmount} {currency}",
          requiredLegend:
            "All fields marked with * are required and must be filled.",
          geoPermissionTitle: "Permission Denied",
          geoPermissionDesc: "Check your browser's privacy settings.",
          geoNotAvailableTitle: "Position Unavailable",
          geoNotAvailableDesc:
            "Location provider not available. Please enter the address manually.",
          geoTimeoutTitle: "Timeout",
          geoTimeoutDesc:
            "Please check your internet connection and try again.",
          selectedTime: "Selected Time",
          formerSelectedTime: "Former Time",
          cancelAppointment: "Cancel Appointment",
          cancelSelection: "Cancel Selection",
          noSlotsAvailable: "No slots available",
          slotUnavailable:
            "{time} on {date} has been selected is unavailable. Please select another slot.",
          multipleError:
            "There are {count} errors on this page. Please correct them before moving on.",
          oneError:
            "There is {count} error on this page. Please correct it before moving on.",
          doneMessage: "Well done! All errors are fixed.",
          invalidTime: "Enter a valid time",
          doneButton: "Done",
          reviewSubmitText: "Review and Submit",
          nextButtonText: "Next",
          prevButtonText: "Previous",
          seeErrorsButton: "See Errors",
          notEnoughStock: "Not enough stock for the current selection",
          notEnoughStock_remainedItems:
            "Not enough stock for the current selection ({count} items left)",
          soldOut: "Sold Out",
          justSoldOut: "Just Sold Out",
          selectionSoldOut: "Selection Sold Out",
          subProductItemsLeft: "({count} items left)",
          startButtonText: "START",
          submitButtonText: "Submit",
          submissionLimit:
            "Sorry! Only one entry is allowed. <br> Multiple submissions are disabled for this form.",
          reviewBackText: "Back to Form",
          seeAllText: "See All",
          progressMiddleText: "of",
          fieldError: "field has an error.",
          error: "Error",
        };
        n.g.Element &&
          !n.g.Element.prototype.matches &&
          (n.g.Element.prototype.matches =
            n.g.Element.prototype.matchesSelector ||
            n.g.Element.prototype.mozMatchesSelector ||
            n.g.Element.prototype.msMatchesSelector ||
            n.g.Element.prototype.oMatchesSelector ||
            n.g.Element.prototype.webkitMatchesSelector ||
            function (e) {
              for (
                var t = (this.document || this.ownerDocument).querySelectorAll(
                    e
                  ),
                  n = t.length;
                --n >= 0 && t.item(n) !== this;

              );
              return n > -1;
            });
        var t = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          a = [];
        (function () {
          for (
            var e = new Date(),
              t = 1e3 > e.getYear() ? e.getYear() + 1900 : e.getYear(),
              n = [],
              o = t;
            o >= t - 100;
            o--
          )
            n.push("".concat(o));
          a = n;
        })(),
          void 0 === String.prototype.locale &&
            (String.prototype.locale = function () {
              return this.toString();
            });
        var r = {
          None: { controls: "dropdown,radio,checkbox,matrix" },
          "US States": {
            controls: "dropdown",
            value: [
              "Alabama",
              "Alaska",
              "Arizona",
              "Arkansas",
              "California",
              "Colorado",
              "Connecticut",
              "Delaware",
              "District of Columbia",
              "Florida",
              "Georgia",
              "Hawaii",
              "Idaho",
              "Illinois",
              "Indiana",
              "Iowa",
              "Kansas",
              "Kentucky",
              "Louisiana",
              "Maine",
              "Maryland",
              "Massachusetts",
              "Michigan",
              "Minnesota",
              "Mississippi",
              "Missouri",
              "Montana",
              "Nebraska",
              "Nevada",
              "New Hampshire",
              "New Jersey",
              "New Mexico",
              "New York",
              "North Carolina",
              "North Dakota",
              "Ohio",
              "Oklahoma",
              "Oregon",
              "Pennsylvania",
              "Puerto Rico",
              "Rhode Island",
              "South Carolina",
              "South Dakota",
              "Tennessee",
              "Texas",
              "Utah",
              "Vermont",
              "Virgin Islands",
              "Virginia",
              "Washington",
              "West Virginia",
              "Wisconsin",
              "Wyoming",
            ],
          },
          "US States Abbr": {
            controls: "dropdown",
            value: [
              "AL",
              "AK",
              "AR",
              "AZ",
              "CA",
              "CO",
              "CT",
              "DC",
              "DE",
              "FL",
              "GA",
              "HI",
              "ID",
              "IL",
              "IN",
              "IA",
              "KS",
              "KY",
              "LA",
              "ME",
              "MD",
              "MA",
              "MI",
              "MN",
              "MS",
              "MO",
              "MT",
              "NE",
              "NV",
              "NH",
              "NJ",
              "NM",
              "NY",
              "NC",
              "ND",
              "OH",
              "OK",
              "OR",
              "PA",
              "PR",
              "RI",
              "SC",
              "SD",
              "TN",
              "TX",
              "UT",
              "VT",
              "VI",
              "VA",
              "WA",
              "WV",
              "WI",
              "WY",
            ],
          },
          "Canadian Provinces": {
            controls: "dropdown",
            value: [
              "Alberta",
              "British Columbia",
              "Manitoba",
              "New Brunswick",
              "Newfoundland",
              "Northwest Territories",
              "Nova Scotia",
              "Nunavut",
              "Ontario",
              "Prince Edward Island",
              "Quebec",
              "Saskatchewan",
              "Yukon",
            ],
          },
          Countries: {
            controls: "dropdown",
            value: [
              "Afghanistan",
              "Albania",
              "Algeria",
              "American Samoa",
              "Andorra",
              "Angola",
              "Anguilla",
              "Antigua and Barbuda",
              "Argentina",
              "Armenia",
              "Aruba",
              "Australia",
              "Austria",
              "Azerbaijan",
              "The Bahamas",
              "Bahrain",
              "Bangladesh",
              "Barbados",
              "Belarus",
              "Belgium",
              "Belize",
              "Benin",
              "Bermuda",
              "Bhutan",
              "Bolivia",
              "Bosnia and Herzegovina",
              "Botswana",
              "Brazil",
              "Brunei",
              "Bulgaria",
              "Burkina Faso",
              "Burundi",
              "Cambodia",
              "Cameroon",
              "Canada",
              "Cape Verde",
              "Cayman Islands",
              "Central African Republic",
              "Chad",
              "Chile",
              "China",
              "Christmas Island",
              "Cocos (Keeling) Islands",
              "Colombia",
              "Comoros",
              "Congo",
              "Cook Islands",
              "Costa Rica",
              "Cote d'Ivoire",
              "Croatia",
              "Cuba",
              "Cura\xe7ao",
              "Cyprus",
              "Czech Republic",
              "Democratic Republic of the Congo",
              "Denmark",
              "Djibouti",
              "Dominica",
              "Dominican Republic",
              "Ecuador",
              "Egypt",
              "El Salvador",
              "Equatorial Guinea",
              "Eritrea",
              "Estonia",
              "Ethiopia",
              "Falkland Islands",
              "Faroe Islands",
              "Fiji",
              "Finland",
              "France",
              "French Polynesia",
              "Gabon",
              "The Gambia",
              "Georgia",
              "Germany",
              "Ghana",
              "Gibraltar",
              "Greece",
              "Greenland",
              "Grenada",
              "Guadeloupe",
              "Guam",
              "Guatemala",
              "Guernsey",
              "Guinea",
              "Guinea-Bissau",
              "Guyana",
              "Haiti",
              "Honduras",
              "Hong Kong",
              "Hungary",
              "Iceland",
              "India",
              "Indonesia",
              "Iran",
              "Iraq",
              "Ireland",
              "Israel",
              "Italy",
              "Jamaica",
              "Japan",
              "Jersey",
              "Jordan",
              "Kazakhstan",
              "Kenya",
              "Kiribati",
              "North Korea",
              "South Korea",
              "Kosovo",
              "Kuwait",
              "Kyrgyzstan",
              "Laos",
              "Latvia",
              "Lebanon",
              "Lesotho",
              "Liberia",
              "Libya",
              "Liechtenstein",
              "Lithuania",
              "Luxembourg",
              "Macau",
              "Macedonia",
              "Madagascar",
              "Malawi",
              "Malaysia",
              "Maldives",
              "Mali",
              "Malta",
              "Marshall Islands",
              "Martinique",
              "Mauritania",
              "Mauritius",
              "Mayotte",
              "Mexico",
              "Micronesia",
              "Moldova",
              "Monaco",
              "Mongolia",
              "Montenegro",
              "Montserrat",
              "Morocco",
              "Mozambique",
              "Myanmar",
              "Nagorno-Karabakh",
              "Namibia",
              "Nauru",
              "Nepal",
              "Netherlands",
              "Netherlands Antilles",
              "New Caledonia",
              "New Zealand",
              "Nicaragua",
              "Niger",
              "Nigeria",
              "Niue",
              "Norfolk Island",
              "Turkish Republic of Northern Cyprus",
              "Northern Mariana",
              "Norway",
              "Oman",
              "Pakistan",
              "Palau",
              "Palestine",
              "Panama",
              "Papua New Guinea",
              "Paraguay",
              "Peru",
              "Philippines",
              "Pitcairn Islands",
              "Poland",
              "Portugal",
              "Puerto Rico",
              "Qatar",
              "Republic of the Congo",
              "Romania",
              "Russia",
              "Rwanda",
              "Saint Barthelemy",
              "Saint Helena",
              "Saint Kitts and Nevis",
              "Saint Lucia",
              "Saint Martin",
              "Saint Pierre and Miquelon",
              "Saint Vincent and the Grenadines",
              "Samoa",
              "San Marino",
              "Sao Tome and Principe",
              "Saudi Arabia",
              "Senegal",
              "Serbia",
              "Seychelles",
              "Sierra Leone",
              "Singapore",
              "Slovakia",
              "Slovenia",
              "Solomon Islands",
              "Somalia",
              "Somaliland",
              "South Africa",
              "South Ossetia",
              "South Sudan",
              "Spain",
              "Sri Lanka",
              "Sudan",
              "Suriname",
              "Svalbard",
              "eSwatini",
              "Sweden",
              "Switzerland",
              "Syria",
              "Taiwan",
              "Tajikistan",
              "Tanzania",
              "Thailand",
              "Timor-Leste",
              "Togo",
              "Tokelau",
              "Tonga",
              "Transnistria Pridnestrovie",
              "Trinidad and Tobago",
              "Tristan da Cunha",
              "Tunisia",
              "Turkey",
              "Turkmenistan",
              "Turks and Caicos Islands",
              "Tuvalu",
              "Uganda",
              "Ukraine",
              "United Arab Emirates",
              "United Kingdom",
              "United States",
              "Uruguay",
              "Uzbekistan",
              "Vanuatu",
              "Vatican City",
              "Venezuela",
              "Vietnam",
              "British Virgin Islands",
              "Isle of Man",
              "US Virgin Islands",
              "Wallis and Futuna",
              "Western Sahara",
              "Yemen",
              "Zambia",
              "Zimbabwe",
            ].map(function (e) {
              return e.locale();
            }),
          },
          "Last 100 Years": { controls: "dropdown", value: a },
          Gender: {
            controls: "dropdown,radio,checkbox",
            value: ["Male", "Female", "N/A"].map(function (e) {
              return e.locale();
            }),
          },
          Days: {
            controls: "dropdown,radio,checkbox",
            value: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map(function (e) {
              return e.locale();
            }),
          },
          Months: {
            controls: "dropdown,radio,checkbox",
            value: t.map(function (e) {
              return e.locale();
            }),
            nonLocale: t,
          },
          "Time Zones": {
            controls: "dropdown",
            value: [
              "[[Africa]]",
              "Abidjan (GMT)",
              "Accra (GMT)",
              "Addis Ababa (GMT+03:00)",
              "Algiers (GMT+01:00)",
              "Asmara (GMT+03:00)",
              "Bamako (GMT)",
              "Bangui (GMT+01:00)",
              "Banjul (GMT)",
              "Bissau (GMT)",
              "Blantyre (GMT+02:00)",
              "Brazzaville (GMT+01:00)",
              "Bujumbura (GMT+02:00)",
              "Cairo (GMT+03:00)",
              "Casablanca (GMT)",
              "Ceuta (GMT+02:00)",
              "Conakry (GMT)",
              "Dakar (GMT)",
              "Dar es Salaam (GMT+03:00)",
              "Djibouti (GMT+03:00)",
              "Douala (GMT+01:00)",
              "El Aaiun (GMT)",
              "Freetown (GMT)",
              "Gaborone (GMT+02:00)",
              "Harare (GMT+02:00)",
              "Johannesburg (GMT+02:00)",
              "Kampala (GMT+03:00)",
              "Khartoum (GMT+03:00)",
              "Kigali (GMT+02:00)",
              "Kinshasa (GMT+01:00)",
              "Lagos (GMT+01:00)",
              "Libreville (GMT+01:00)",
              "Lome (GMT)",
              "Luanda (GMT+01:00)",
              "Lubumbashi (GMT+02:00)",
              "Lusaka (GMT+02:00)",
              "Malabo (GMT+01:00)",
              "Maputo (GMT+02:00)",
              "Maseru (GMT+02:00)",
              "Mbabane (GMT+02:00)",
              "Mogadishu (GMT+03:00)",
              "Monrovia (GMT)",
              "Nairobi (GMT+03:00)",
              "Ndjamena (GMT+01:00)",
              "Niamey (GMT+01:00)",
              "Nouakchott (GMT)",
              "Ouagadougou (GMT)",
              "Porto-Novo (GMT+01:00)",
              "Sao Tome (GMT)",
              "Tripoli (GMT+02:00)",
              "Tunis (GMT+02:00)",
              "Windhoek (GMT+01:00)",
              "[[America]]",
              "Adak (GMT-09:00)",
              "Anchorage (GMT-08:00)",
              "Anguilla (GMT-04:00)",
              "Antigua (GMT-04:00)",
              "Araguaina (GMT-03:00)",
              "Buenos Aires, Argentina (GMT-03:00)",
              "Catamarca, Argentina (GMT-03:00)",
              "Cordoba, Argentina (GMT-03:00)",
              "Jujuy, Argentina (GMT-03:00)",
              "La Rioja, Argentina (GMT-03:00)",
              "Mendoza, Argentina (GMT-03:00)",
              "Rio Gallegos, Argentina (GMT-03:00)",
              "Salta, Argentina (GMT-03:00)",
              "San Juan, Argentina (GMT-03:00)",
              "San Luis, Argentina (GMT-04:00)",
              "Tucuman, Argentina (GMT-03:00)",
              "Ushuaia, Argentina (GMT-03:00)",
              "Aruba (GMT-04:00)",
              "Asuncion (GMT-04:00)",
              "Atikokan (GMT-05:00)",
              "Bahia (GMT-03:00)",
              "Barbados (GMT-04:00)",
              "Belem (GMT-03:00)",
              "Belize (GMT-06:00)",
              "Blanc-Sablon (GMT-04:00)",
              "Boa Vista (GMT-04:00)",
              "Bogota (GMT-05:00)",
              "Boise (GMT-06:00)",
              "Cambridge Bay (GMT-06:00)",
              "Campo Grande (GMT-04:00)",
              "Cancun (GMT-05:00)",
              "Caracas (GMT-04:30)",
              "Cayenne (GMT-03:00)",
              "Cayman (GMT-05:00)",
              "Chicago (GMT-05:00)",
              "Chihuahua (GMT-06:00)",
              "Costa Rica (GMT-06:00)",
              "Cuiaba (GMT-04:00)",
              "Curacao (GMT-04:00)",
              "Danmarkshavn (GMT)",
              "Dawson (GMT-07:00)",
              "Dawson Creek (GMT-07:00)",
              "Denver (GMT-06:00)",
              "Detroit (GMT-04:00)",
              "Dominica (GMT-04:00)",
              "Edmonton (GMT-06:00)",
              "Eirunepe (GMT-04:00)",
              "El Salvador (GMT-06:00)",
              "Fortaleza (GMT-03:00)",
              "Glace Bay (GMT-03:00)",
              "Godthab (GMT-02:00)",
              "Goose Bay (GMT-03:00)",
              "Grand Turk (GMT-04:00)",
              "Grenada (GMT-04:00)",
              "Guadeloupe (GMT-04:00)",
              "Guatemala (GMT-06:00)",
              "Guayaquil (GMT-05:00)",
              "Guyana (GMT-04:00)",
              "Halifax (GMT-03:00)",
              "Havana (GMT-04:00)",
              "Hermosillo (GMT-07:00)",
              "Indianapolis, Indiana (GMT-04:00)",
              "Knox, Indiana (GMT-05:00)",
              "Marengo, Indiana (GMT-04:00)",
              "Petersburg, Indiana (GMT-04:00)",
              "Tell City, Indiana (GMT-05:00)",
              "Vevay, Indiana (GMT-04:00)",
              "Vincennes, Indiana (GMT-04:00)",
              "Winamac, Indiana (GMT-04:00)",
              "Inuvik (GMT-06:00)",
              "Iqaluit (GMT-04:00)",
              "Jamaica (GMT-05:00)",
              "Juneau (GMT-08:00)",
              "Louisville, Kentucky (GMT-04:00)",
              "Monticello, Kentucky (GMT-04:00)",
              "La Paz (GMT-04:00)",
              "Lima (GMT-05:00)",
              "Los Angeles (GMT-07:00)",
              "Maceio (GMT-03:00)",
              "Managua (GMT-06:00)",
              "Manaus (GMT-04:00)",
              "Marigot (GMT-04:00)",
              "Martinique (GMT-04:00)",
              "Mazatlan (GMT-06:00)",
              "Menominee (GMT-05:00)",
              "Merida (GMT-05:00)",
              "Mexico City (GMT-05:00)",
              "Miquelon (GMT-02:00)",
              "Moncton (GMT-03:00)",
              "Monterrey (GMT-05:00)",
              "Montevideo (GMT-03:00)",
              "Montreal (GMT-04:00)",
              "Montserrat (GMT-04:00)",
              "Nassau (GMT-04:00)",
              "New York (GMT-04:00)",
              "Nipigon (GMT-04:00)",
              "Nome (GMT-08:00)",
              "Noronha (GMT-02:00)",
              "Center, North Dakota (GMT-05:00)",
              "New Salem, North Dakota (GMT-05:00)",
              "Panama (GMT-05:00)",
              "Pangnirtung (GMT-04:00)",
              "Paramaribo (GMT-03:00)",
              "Phoenix (GMT-07:00)",
              "Port-au-Prince (GMT-05:00)",
              "Port of Spain (GMT-04:00)",
              "Porto Velho (GMT-04:00)",
              "Puerto Rico (GMT-04:00)",
              "Rainy River (GMT-05:00)",
              "Rankin Inlet (GMT-05:00)",
              "Recife (GMT-03:00)",
              "Regina (GMT-06:00)",
              "Resolute (GMT-05:00)",
              "Rio Branco (GMT-04:00)",
              "Santarem (GMT-03:00)",
              "Santiago (GMT-04:00)",
              "Santo Domingo (GMT-04:00)",
              "Sao Paulo (GMT-03:00)",
              "Scoresbysund (GMT)",
              "Shiprock (GMT-06:00)",
              "St Barthelemy (GMT-04:00)",
              "St Johns (GMT-02:30)",
              "St Kitts (GMT-04:00)",
              "St Lucia (GMT-04:00)",
              "St Thomas (GMT-04:00)",
              "St Vincent (GMT-04:00)",
              "Swift Current (GMT-06:00)",
              "Tegucigalpa (GMT-06:00)",
              "Thule (GMT-03:00)",
              "Thunder Bay (GMT-04:00)",
              "Tijuana (GMT-07:00)",
              "Toronto (GMT-04:00)",
              "Tortola (GMT-04:00)",
              "Vancouver (GMT-07:00)",
              "Whitehorse (GMT-07:00)",
              "Winnipeg (GMT-05:00)",
              "Yakutat (GMT-08:00)",
              "Yellowknife (GMT-06:00)",
              "[[Antarctica]]",
              "Casey (GMT+11:00)",
              "Davis (GMT+05:00)",
              "DumontDUrville (GMT+10:00)",
              "Mawson (GMT+05:00)",
              "McMurdo (GMT+12:00)",
              "Palmer (GMT-04:00)",
              "Rothera (GMT-03:00)",
              "South Pole (GMT+12:00)",
              "Syowa (GMT+03:00)",
              "Vostok (GMT+06:00)",
              "[[Arctic]]",
              "Longyearbyen (GMT+02:00)",
              "[[Asia]]",
              "Aden (GMT+03:00)",
              "Almaty (GMT+06:00)",
              "Amman (GMT+03:00)",
              "Anadyr (GMT+13:00)",
              "Aqtau (GMT+05:00)",
              "Aqtobe (GMT+05:00)",
              "Ashgabat (GMT+05:00)",
              "Baghdad (GMT+03:00)",
              "Bahrain (GMT+03:00)",
              "Baku (GMT+05:00)",
              "Bangkok (GMT+07:00)",
              "Beirut (GMT+03:00)",
              "Bishkek (GMT+06:00)",
              "Brunei (GMT+08:00)",
              "Choibalsan (GMT+08:00)",
              "Chongqing (GMT+08:00)",
              "Colombo (GMT+05:30)",
              "Damascus (GMT+03:00)",
              "Dhaka (GMT+07:00)",
              "Dili (GMT+09:00)",
              "Dubai (GMT+04:00)",
              "Dushanbe (GMT+05:00)",
              "Gaza (GMT+03:00)",
              "Harbin (GMT+08:00)",
              "Ho Chi Minh (GMT+07:00)",
              "Hong Kong (GMT+08:00)",
              "Hovd (GMT+07:00)",
              "Irkutsk (GMT+09:00)",
              "Jakarta (GMT+07:00)",
              "Jayapura (GMT+09:00)",
              "Jerusalem (GMT+03:00)",
              "Kabul (GMT+04:30)",
              "Kamchatka (GMT+13:00)",
              "Karachi (GMT+06:00)",
              "Kashgar (GMT+08:00)",
              "Kathmandu (GMT+05:45)",
              "Kolkata (GMT+05:30)",
              "Krasnoyarsk (GMT+08:00)",
              "Kuala Lumpur (GMT+08:00)",
              "Kuching (GMT+08:00)",
              "Kuwait (GMT+03:00)",
              "Macau (GMT+08:00)",
              "Magadan (GMT+12:00)",
              "Makassar (GMT+08:00)",
              "Manila (GMT+08:00)",
              "Muscat (GMT+04:00)",
              "Nicosia (GMT+03:00)",
              "Novokuznetsk (GMT+07:00)",
              "Novosibirsk (GMT+07:00)",
              "Omsk (GMT+07:00)",
              "Oral (GMT+05:00)",
              "Phnom Penh (GMT+07:00)",
              "Pontianak (GMT+07:00)",
              "Pyongyang (GMT+09:00)",
              "Qatar (GMT+03:00)",
              "Qyzylorda (GMT+06:00)",
              "Rangoon (GMT+06:30)",
              "Riyadh (GMT+03:00)",
              "Sakhalin (GMT+11:00)",
              "Samarkand (GMT+05:00)",
              "Seoul (GMT+09:00)",
              "Shanghai (GMT+08:00)",
              "Singapore (GMT+08:00)",
              "Taipei (GMT+08:00)",
              "Tashkent (GMT+05:00)",
              "Tbilisi (GMT+04:00)",
              "Tehran (GMT+04:30)",
              "Thimphu (GMT+06:00)",
              "Tokyo (GMT+09:00)",
              "Ulaanbaatar (GMT+08:00)",
              "Urumqi (GMT+08:00)",
              "Vientiane (GMT+07:00)",
              "Vladivostok (GMT+11:00)",
              "Yakutsk (GMT+10:00)",
              "Yekaterinburg (GMT+06:00)",
              "Yerevan (GMT+05:00)",
              "[[Atlantic]]",
              "Azores (GMT)",
              "Bermuda (GMT-03:00)",
              "Canary (GMT+01:00)",
              "Cape Verde (GMT-01:00)",
              "Faroe (GMT+01:00)",
              "Madeira (GMT+01:00)",
              "Reykjavik (GMT)",
              "South Georgia (GMT-02:00)",
              "St Helena (GMT)",
              "Stanley (GMT-04:00)",
              "[[Australia]]",
              "Adelaide (GMT+09:30)",
              "Brisbane (GMT+10:00)",
              "Broken Hill (GMT+09:30)",
              "Currie (GMT+10:00)",
              "Darwin (GMT+09:30)",
              "Eucla (GMT+08:45)",
              "Hobart (GMT+10:00)",
              "Lindeman (GMT+10:00)",
              "Lord Howe (GMT+10:30)",
              "Melbourne (GMT+10:00)",
              "Perth (GMT+08:00)",
              "Sydney (GMT+10:00)",
              "[[Europe]]",
              "Amsterdam (GMT+02:00)",
              "Andorra (GMT+02:00)",
              "Athens (GMT+03:00)",
              "Belgrade (GMT+02:00)",
              "Berlin (GMT+02:00)",
              "Bratislava (GMT+02:00)",
              "Brussels (GMT+02:00)",
              "Bucharest (GMT+03:00)",
              "Budapest (GMT+02:00)",
              "Chisinau (GMT+03:00)",
              "Copenhagen (GMT+02:00)",
              "Dublin (GMT+01:00)",
              "Gibraltar (GMT+02:00)",
              "Guernsey (GMT+01:00)",
              "Helsinki (GMT+03:00)",
              "Isle of Man (GMT+01:00)",
              "Istanbul (GMT+03:00)",
              "Jersey (GMT+01:00)",
              "Kaliningrad (GMT+03:00)",
              "Kiev (GMT+03:00)",
              "Lisbon (GMT+01:00)",
              "Ljubljana (GMT+02:00)",
              "London (GMT+01:00)",
              "Luxembourg (GMT+02:00)",
              "Madrid (GMT+02:00)",
              "Malta (GMT+02:00)",
              "Mariehamn (GMT+03:00)",
              "Minsk (GMT+03:00)",
              "Monaco (GMT+02:00)",
              "Moscow (GMT+04:00)",
              "Oslo (GMT+02:00)",
              "Paris (GMT+02:00)",
              "Podgorica (GMT+02:00)",
              "Prague (GMT+02:00)",
              "Riga (GMT+03:00)",
              "Rome (GMT+02:00)",
              "Samara (GMT+05:00)",
              "San Marino (GMT+02:00)",
              "Sarajevo (GMT+02:00)",
              "Simferopol (GMT+03:00)",
              "Skopje (GMT+02:00)",
              "Sofia (GMT+03:00)",
              "Stockholm (GMT+02:00)",
              "Tallinn (GMT+03:00)",
              "Tirane (GMT+02:00)",
              "Uzhgorod (GMT+03:00)",
              "Vaduz (GMT+02:00)",
              "Vatican (GMT+02:00)",
              "Vienna (GMT+02:00)",
              "Vilnius (GMT+03:00)",
              "Volgograd (GMT+04:00)",
              "Warsaw (GMT+02:00)",
              "Zagreb (GMT+02:00)",
              "Zaporozhye (GMT+03:00)",
              "Zurich (GMT+02:00)",
              "[[Indian]]",
              "Antananarivo (GMT+03:00)",
              "Chagos (GMT+06:00)",
              "Christmas (GMT+07:00)",
              "Cocos (GMT+06:30)",
              "Comoro (GMT+03:00)",
              "Kerguelen (GMT+05:00)",
              "Mahe (GMT+04:00)",
              "Maldives (GMT+05:00)",
              "Mauritius (GMT+04:00)",
              "Mayotte (GMT+03:00)",
              "Reunion (GMT+04:00)",
              "[[Pacific]]",
              "Apia (GMT-11:00)",
              "Auckland (GMT+12:00)",
              "Chatham (GMT+12:45)",
              "Easter (GMT-06:00)",
              "Efate (GMT+11:00)",
              "Enderbury (GMT+13:00)",
              "Fakaofo (GMT-10:00)",
              "Fiji (GMT+12:00)",
              "Funafuti (GMT+12:00)",
              "Galapagos (GMT-06:00)",
              "Gambier (GMT-09:00)",
              "Guadalcanal (GMT+11:00)",
              "Guam (GMT+10:00)",
              "Honolulu (GMT-10:00)",
              "Johnston (GMT-10:00)",
              "Kiritimati (GMT+14:00)",
              "Kosrae (GMT+11:00)",
              "Kwajalein (GMT+12:00)",
              "Majuro (GMT+12:00)",
              "Marquesas (GMT-09:30)",
              "Midway (GMT-11:00)",
              "Nauru (GMT+12:00)",
              "Niue (GMT-11:00)",
              "Norfolk (GMT+11:30)",
              "Noumea (GMT+11:00)",
              "Pago Pago (GMT-11:00)",
              "Palau (GMT+09:00)",
              "Pitcairn (GMT-08:00)",
              "Ponape (GMT+11:00)",
              "Port Moresby (GMT+10:00)",
              "Rarotonga (GMT-10:00)",
              "Saipan (GMT+10:00)",
              "Tahiti (GMT-10:00)",
              "Tarawa (GMT+12:00)",
              "Tongatapu (GMT+13:00)",
              "Truk (GMT+10:00)",
              "Wake (GMT+12:00)",
              "Wallis (GMT+12:00)",
            ],
          },
          LocationCountries: {
            controls: "location",
            value: [
              "Canada",
              "United States",
              "Afghanistan",
              "Albania",
              "Algeria",
              "American Samoa",
              "Andorra",
              "Angola",
              "Anguilla",
              "Antarctica",
              "Antigua and Barbuda",
              "Argentina",
              "Armenia",
              "Aruba",
              "Australia",
              "Austria",
              "Azerbaijan",
              "Bahamas",
              "Bahrain",
              "Bangladesh",
              "Barbados",
              "Belarus",
              "Belgium",
              "Belize",
              "Benin",
              "Bermuda",
              "Bhutan",
              "Bolivia",
              "Bosnia Herzegowina",
              "Botswana",
              "Bouvet Island",
              "Brazil",
              "British Ind. Ocean",
              "Brunei Darussalam",
              "Bulgaria",
              "Burkina Faso",
              "Burundi",
              "Cambodia",
              "Cameroon",
              "Cape Verde",
              "Cayman Islands",
              "Central African Rep.",
              "Chad",
              "Chile",
              "China",
              "Christmas Island",
              "Cocoa (Keeling) Is.",
              "Colombia",
              "Comoros",
              "Congo",
              "Cook Islands",
              "Costa Rica",
              "Cote Divoire",
              "Croatia",
              "Cuba",
              "Curacao",
              "Cyprus",
              "Czech Republic",
              "Denmark",
              "Djibouti",
              "Dominica",
              "Dominican Republic",
              "East Timor",
              "Ecuador",
              "Egypt",
              "El Salvador",
              "Equatorial Guinea",
              "Eritrea",
              "Estonia",
              "Ethiopia",
              "Falkland Islands",
              "Faroe Islands",
              "Fiji",
              "Finland",
              "France",
              "Gabon",
              "Gambia",
              "Georgia",
              "Germany",
              "Ghana",
              "Gibraltar",
              "Greece",
              "Greenland",
              "Grenada",
              "Guadeloupe",
              "Guam",
              "Guatemala",
              "Guinea",
              "Guinea-Bissau",
              "Guyana",
              "Haiti",
              "Honduras",
              "Hong Kong",
              "Hungary",
              "Iceland",
              "India",
              "Indonesia",
              "Iran",
              "Iraq",
              "Ireland",
              "Israel",
              "Italy",
              "Jamaica",
              "Japan",
              "Jordan",
              "Kazakhstan",
              "Kenya",
              "Kiribati",
              "Korea",
              "Kuwait",
              "Kyrgyzstan",
              "Lao",
              "Latvia",
              "Lebanon",
              "Lesotho",
              "Liberia",
              "Liechtenstein",
              "Lithuania",
              "Luxembourg",
              "Macau",
              "Macedonia",
              "Madagascar",
              "Malawi",
              "Malaysia",
              "Maldives",
              "Mali",
              "Malta",
              "Marshall Islands",
              "Martinique",
              "Mauritania",
              "Mauritius",
              "Mayotte",
              "Mexico",
              "Micronesia",
              "Moldova",
              "Monaco",
              "Mongolia",
              "Montserrat",
              "Morocco",
              "Mozambique",
              "Myanmar",
              "Namibia",
              "Nauru",
              "Nepal",
              "Netherlands",
              "New Caledonia",
              "New Zealand",
              "Nicaragua",
              "Niger",
              "Nigeria",
              "Niue",
              "Norfolk Island",
              "Norway",
              "Oman",
              "Pakistan",
              "Palau",
              "Panama",
              "Papua New Guinea",
              "Paraguay",
              "Peru",
              "Philippines",
              "Pitcairn",
              "Poland",
              "Portugal",
              "Puerto Rico",
              "Qatar",
              "Reunion",
              "Romania",
              "Russia",
              "Rwanda",
              "Saint Lucia",
              "Samoa",
              "San Marino",
              "Saudi Arabia",
              "Senegal",
              "Seychelles",
              "Sierra Leone",
              "Singapore",
              "Slovakia",
              "Solomon Islands",
              "Somalia",
              "South Africa",
              "South Sudan",
              "Spain",
              "Sri Lanka",
              "St. Helena",
              "Sudan",
              "Suriname",
              "eSwatini",
              "Sweden",
              "Switzerland",
              "Syria",
              "Taiwan",
              "Tajikistan",
              "Tanzania",
              "Thailand",
              "Togo",
              "Tokelau",
              "Tonga",
              "Trinidad and Tobago",
              "Tunisia",
              "Turkey",
              "Turkmenistan",
              "Tuvalu",
              "Uganda",
              "Ukraine",
              "United Arab Emirates",
              "United Kingdom",
              "Uruguay",
              "Uzbekistan",
              "Vanuatu",
              "Vatican",
              "Venezuela",
              "Viet Nam",
              "Virgin Islands",
              "Western Sahara",
              "Yeman",
              "Yugoslavia",
              "Zaire",
              "Zambia",
            ],
          },
          getByType: function (e) {
            var t = [];
            for (var n in r)
              r[n].controls && r[n].controls.indexOf(e) >= 0 && t.push(n);
            return t;
          },
        };
        function i(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
          return o;
        }
        var l = n(80579),
          c = n(92451),
          s = n(26290),
          u = n.n(s),
          d = function (e) {
            var t,
              n = e.isBuilder,
              o = e.logoTitle,
              a = e.handleAddFormLogo,
              r = e.formWidth,
              s = e.formLogoProperties,
              u = e.usePreLoad,
              d = s.image,
              m = d.url,
              f = void 0 === m ? "" : m,
              p = d.width,
              g = void 0 === p ? 100 : p,
              h = d.height,
              v = void 0 === h ? 100 : h,
              y =
                (function (e) {
                  if (Array.isArray(e)) return e;
                })((t = (0, c.useState)(!1))) ||
                (function (e, t) {
                  var n,
                    o,
                    a =
                      null == e
                        ? null
                        : ("undefined" != typeof Symbol &&
                            e[Symbol.iterator]) ||
                          e["@@iterator"];
                  if (null != a) {
                    var r = [],
                      i = !0,
                      l = !1;
                    try {
                      for (
                        a = a.call(e);
                        !(i = (n = a.next()).done) &&
                        (r.push(n.value), 2 !== r.length);
                        i = !0
                      );
                    } catch (e) {
                      (l = !0), (o = e);
                    } finally {
                      try {
                        i || null == a.return || a.return();
                      } finally {
                        if (l) throw o;
                      }
                    }
                    return r;
                  }
                })(t, 2) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return i(e, 2);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if (
                      ("Object" === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      "Map" === n || "Set" === n)
                    )
                      return Array.from(n);
                    if (
                      "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    )
                      return i(e, 2);
                  }
                })(t, 2) ||
                (function () {
                  throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })(),
              M = y[0],
              T = y[1];
            return (
              (0, c.useEffect)(function () {
                var e = new Image();
                return (
                  (e.src = f),
                  (e.onload = function () {
                    T(!0);
                  }),
                  (e.onerror = function (e) {
                    console.error("Error loading image:", e), T(!0);
                  }),
                  function () {
                    (e.onload = null), (e.onerror = null);
                  }
                );
              }, []),
              c.useMemo(
                function () {
                  var e = (0, l.jsx)("img", {
                    src: f,
                    className: "form-page-cover-image",
                    width: g > r ? r : g,
                    height: v,
                    "aria-label": o,
                    style: { aspectRatio: "".concat(g, "/").concat(v) },
                  });
                  return (0, l.jsx)("div", {
                    className: "form-page-cover-image-wrapper",
                    style: { maxWidth: "".concat(r, "px") },
                    children: n
                      ? (0, l.jsx)("button", {
                          type: "button",
                          className: "add-form-logo",
                          onClick: a,
                          style: { visibility: u && M ? "visible" : "hidden" },
                          children: e,
                        })
                      : e,
                  });
                },
                [r, f, g, v, M]
              )
            );
          },
          m = function (e) {
            var t,
              n,
              o = e.isBuilder,
              a = e.handleAddFormLogo,
              r = e.formWidth,
              i = e.formLogoProperties,
              s = e.logoTitle,
              u = e.updateFormProperty,
              m = e.styleJSON,
              f = e.usePreLoad,
              p =
                "form-cover-wrapper form-has-cover form-page-cover-image-align-".concat(
                  null === (t = i.topPosition) || void 0 === t
                    ? void 0
                    : t.toLowerCase()
                ),
              g = function (e) {
                if (!e) {
                  var t = (null == i ? void 0 : i.image) || {},
                    n = t.width,
                    o = t.height;
                  if (n > r) {
                    var a = r > 100 ? r : 100;
                    (m["@formCoverImgWidth"] = a),
                      (m["@formCoverImgHeight"] = (o / n) * a),
                      u({ styleJSON: m }, !0, !0);
                  }
                }
              };
            return (
              (0, c.useEffect)(
                function () {
                  var e,
                    t,
                    n,
                    o = !1,
                    a =
                      ((e = function () {
                        return g(o);
                      }),
                      function () {
                        var o = this,
                          a = arguments,
                          r = t && !n;
                        clearTimeout(n),
                          (n = setTimeout(function () {
                            (n = null), t || e.apply(o, a);
                          }, 500)),
                          r && e.apply(o, a);
                      });
                  return (
                    o || a(),
                    function () {
                      o = !0;
                    }
                  );
                },
                [
                  r,
                  null == i
                    ? void 0
                    : null === (n = i.image) || void 0 === n
                    ? void 0
                    : n.width,
                ]
              ),
              (0, l.jsx)("div", {
                id: "formCoverLogo",
                style: { marginBottom: i.bottomMargin },
                className: p,
                children: (0, l.jsx)(d, {
                  isBuilder: o,
                  logoTitle: s,
                  handleAddFormLogo: a,
                  formWidth: r,
                  formLogoProperties: i,
                  usePreLoad: void 0 !== f && f,
                }),
              })
            );
          };
        (m.defaultProps = {
          handleAddFormLogo: function () {},
          logoTitle: "",
          isBuilder: !1,
          updateFormProperty: function () {},
          styleJSON: {},
        }),
          (m.propTypes = {
            isBuilder: u().bool,
            logoTitle: u().string,
            handleAddFormLogo: u().func,
            formWidth: u().oneOfType([u().number, u().string]).isRequired,
            formLogoProperties: u().shape({
              bottomMargin: u().number,
              topPosition: u().string,
              image: u().shape({
                url: u().string.isRequired,
                width: u().number.isRequired,
                height: u().number.isRequired,
              }).isRequired,
            }).isRequired,
            updateFormProperty: u().func,
            styleJSON: u().object,
            usePreLoad: u().bool,
          });
        var f = n(64698),
          p = n.n(f),
          g = function (e, t) {
            return p()(window.__jfrouter, e, t);
          },
          h = function () {
            return g("ACTIVE_APP", "");
          };
        function v() {
          var e = !!window.CardForm;
          function t(e) {
            if (e.type && e.type.match(/checkbox|radio/)) {
              var t = window.scrollX,
                n = window.scrollY;
              ["click", "change"].forEach(function (t) {
                e.triggerEvent(t);
              }),
                n !== window.scrollY && window.scrollTo(t, n);
              return;
            }
            e.triggerEvent("change");
          }
          return {
            parse: function (n) {
              window.$H(n).each(function (n) {
                var o = n.key,
                  a = n.value;
                try {
                  switch (a.type) {
                    case "control_scale":
                    case "control_radio":
                      if (void 0 == a.name)
                        var r = window.$$(
                          "#id_".concat(o, ' input[type="radio"]')
                        );
                      else
                        var r = document.getElementsByName(
                          "q"
                            .concat(o, "_")
                            .concat(
                              "control_radio" == a.type ||
                                "control_scale" == a.type
                                ? a.name
                                : o
                            )
                        );
                      window.$A(r).each(function (e) {
                        e.value == a.value
                          ? ((e.checked = !0),
                            e.writeAttribute("checked", "checked"),
                            t(e),
                            (e.checked = !0))
                          : null != a.items.other &&
                            ((window.$("other_".concat(o)).checked = !0),
                            window
                              .$("other_".concat(o))
                              .writeAttribute("checked", "checked"),
                            (window.$("input_".concat(o)).value =
                              a.items.other),
                            t(window.$("input_".concat(o))),
                            (window.$("input_".concat(o)).checked = !0));
                      });
                      break;
                    case "control_checkbox":
                      var i = window.$$(
                        "#id_".concat(o, ' input[type="checkbox"]')
                      );
                      window.$A(i).each(function (e) {
                        (e.checked = !1),
                          e.removeAttribute("checked"),
                          "[object Array]" ===
                          Object.prototype.toString.call(a.items)
                            ? a.items.include(e.value) &&
                              ((e.checked = !0),
                              e.writeAttribute("checked", "checked"),
                              t(e),
                              (e.checked = !0))
                            : Object.values(a.items).include(e.value)
                            ? ((e.checked = !0),
                              e.writeAttribute("checked", "checked"),
                              t(e),
                              (e.checked = !0))
                            : null != a.items.other &&
                              ((window.$("other_".concat(o)).checked = !0),
                              window
                                .$("other_".concat(o))
                                .writeAttribute("checked", "checked"),
                              (window.$("input_".concat(o)).disabled = !1),
                              (window.$("input_".concat(o)).value =
                                a.items.other),
                              t(e),
                              (window.$("input_".concat(o)).checked = !0));
                      });
                      break;
                    case "control_yesno":
                      var l = window.$$(
                        "#id_".concat(o, ' input[type="radio"]')
                      );
                      window.$A(l).each(function (e) {
                        e.value === a.value &&
                          ((e.checked = !0),
                          e.writeAttribute("checked", "checked"),
                          t(e),
                          (e.checked = !0));
                      });
                      break;
                    case "control_dropdown":
                      var c = window.$("input_".concat(o));
                      if (c) {
                        if (e)
                          c
                            .up()
                            .querySelector("div.jfInput-dropdown")
                            .classList.contains("isMultiple")
                            ? a.items[0].split(",").forEach(function (e) {
                                c.querySelector(
                                  'option[value="'.concat(e, '"]')
                                ).selected = !0;
                              })
                            : c.putValue(a.value);
                        else if (c.hasAttribute("multiple")) {
                          var s = window.$$("#id_".concat(o, " option"));
                          window.$A(s).each(function (e) {
                            a.items.include(e.value) && (e.selected = !0);
                          });
                        } else c.putValue(a.value);
                        c.triggerEvent("change");
                      }
                      break;
                    case "control_rating":
                      if (e) {
                        var u = document.getElementById(
                          "input_".concat(o, "_").concat(a.value)
                        );
                        (u.checked = !0), t(u);
                      } else window.$("input_".concat(o)) && window.$("input_".concat(o)).setRating(a.value);
                      break;
                    case "control_datetime":
                    case "control_fullname":
                      if (
                        (window.$H(a.items).each(function (e) {
                          window.$("".concat(e.key, "_").concat(o)) &&
                            ((window.$("".concat(e.key, "_").concat(o)).value =
                              e.value || ""),
                            window
                              .$("".concat(e.key, "_").concat(o))
                              .triggerEvent("change"));
                        }),
                        window.$("lite_mode_".concat(o)))
                      ) {
                        var d = a.items;
                        "year" in d &&
                          "month" in d &&
                          "day" in d &&
                          "" !== d.year &&
                          "" !== d.month &&
                          "" !== d.day &&
                          JotForm.formatDate({
                            date: new Date(d.year, d.month - 1, d.day),
                            dateField: window.$("id_".concat(o)),
                          });
                      }
                      break;
                    case "control_emojislider":
                      for (
                        var m,
                          f = document.getElementById("cid_".concat(o)),
                          l = f.querySelectorAll("input[type=radio]"),
                          p = 0,
                          g = 0;
                        (m = l[g]);
                        g++
                      )
                        m.value === a.value && ((m.checked = !0), (p = g));
                      var h = f.querySelector(".js-emojiSlider");
                      h.addClassName("isFilled");
                      var v = h
                          .querySelectorAll(".js-emojiScaleSep")
                          [p].getAttribute("data-scale"),
                        y = h.querySelector(".js-emojiSlider-faceList");
                      y.style.width = "".concat(v, "%");
                      var M = y.querySelectorAll(".js-emojiFaces");
                      M.forEach(function (e) {
                        e.removeClassName("isVisible");
                      }),
                        M[p].addClassName("isVisible");
                      break;
                    case "control_phone":
                    case "control_birthdate":
                    case "control_address":
                    case "control_time":
                      if (
                        (window.$H(a.items).each(function (e) {
                          window.$("input_".concat(o, "_").concat(e.key)) &&
                            window
                              .$("input_".concat(o, "_").concat(e.key))
                              .putValue(e.value);
                        }),
                        "control_time" === a.type &&
                          window.$("input_".concat(o, "_hourSelect")))
                      ) {
                        var T = a.items.hourSelect ? a.items.hourSelect : "";
                        if (
                          T &&
                          window.$("input_".concat(o, "_hourSelect"))
                            .triggerEvent
                        ) {
                          if (window.$("input_".concat(o, "_timeInput"))) {
                            1 === T.length &&
                              T < 10 &&
                              ((T = "0".concat(T)),
                              window
                                .$("input_".concat(o, "_hourSelect"))
                                .putValue(T));
                            var w = window.$(
                              "input_".concat(o, "_minuteSelect")
                            ).value;
                            1 === w.length && w < 10 && (w = "0".concat(w)),
                              window
                                .$("input_".concat(o, "_timeInput"))
                                .putValue("".concat(T, ":").concat(w));
                          } else
                            2 === T.length &&
                              "0" == T.charAt(0) &&
                              ((T = T.slice(1)),
                              window
                                .$("input_".concat(o, "_hourSelect"))
                                .putValue(T));
                          window
                            .$("input_".concat(o, "_hourSelect"))
                            .triggerEvent("change");
                        }
                      }
                      break;
                    case "control_email":
                      var b = window.$("input_".concat(o));
                      if (b) {
                        b.putValue(a.value), b.triggerEvent("change");
                        var G = window.$("input_".concat(o, "_confirm"));
                        G && (G.putValue(a.value), G.triggerEvent("change"));
                      }
                      break;
                    case "control_textarea":
                      if (a.value.length > 0) {
                        var _ = window.$("input_".concat(o));
                        _.up("div").down(".nicEdit-main") &&
                          nicEditors &&
                          nicEditors.findEditor("input_".concat(o)) &&
                          nicEditors
                            .findEditor("input_".concat(o))
                            .setContent(a.value),
                          _.putValue(a.value),
                          t(_),
                          e &&
                            Array.prototype.forEach.call(
                              CardForm.cards,
                              function (e, t) {
                                e.question.id === o &&
                                  e.markdownEditor &&
                                  e.markdownEditor.setHtmlFromMarkdown &&
                                  e.markdownEditor.setHtmlFromMarkdown();
                              }
                            ),
                          _.hasClassName("form-custom-hint") &&
                            (_.removeClassName(
                              "form-custom-hint"
                            ).removeAttribute("spellcheck"),
                            (_.hasContent = !0),
                            _.run("focus"));
                      } else _.hasClassName("form-custom-hint") && _.run("blur");
                      break;
                    default:
                      window.$("input_".concat(o)) &&
                        (window.$("input_".concat(o)).putValue(a.value),
                        window.$("input_".concat(o)).triggerEvent("change"));
                  }
                } catch (e) {}
              });
            },
            clear: function (n) {
              n.forEach(function (n) {
                var o = n.qid,
                  a = window.$("input_".concat(o)),
                  r = n.type;
                switch (r) {
                  case "control_scale":
                  case "control_radio":
                    var i = window.$$("#id_".concat(o, ' input[type="radio"]'));
                    window.$A(i).each(function (e) {
                      (e.checked = !1), e.removeAttribute("checked"), t(e);
                    });
                    break;
                  case "control_checkbox":
                    var l = window.$$(
                      "#id_".concat(o, ' input[type="checkbox"]')
                    );
                    window.$A(l).each(function (e) {
                      (e.checked = !1), e.removeAttribute("checked"), t(e);
                    });
                    break;
                  case "control_yesno":
                  case "control_emojislider":
                    break;
                  case "control_rating":
                    if (e) {
                      var i = window.$$(
                        "#id_".concat(o, ' input[type="radio"]')
                      );
                      window.$A(i).each(function (e) {
                        e.checked && ((e.checked = !1), e.click());
                      }),
                        window
                          .$$("#id_".concat(o, " li"))
                          .invoke("removeClassName", "checked"),
                        window
                          .$$("#id_".concat(o, ' input[type="hidden"]'))
                          .last()
                          .putValue("");
                    } else window.$("input_".concat(o)).setRating("");
                    break;
                  case "control_datetime":
                  case "control_fullname":
                    window.$$("input[id*=_".concat(o, "]")).each(function (e) {
                      e.putValue("");
                    });
                    break;
                  case "control_phone":
                  case "control_birthdate":
                  case "control_address":
                  case "control_time":
                    window.$$("[id*=input_".concat(o, "]")).each(function (e) {
                      e.putValue("");
                    }),
                      "control_time" === r &&
                        window.$("input_".concat(o, "_hourSelect")) &&
                        window.$("input_".concat(o, "_hourSelect"))
                          .triggerEvent &&
                        window
                          .$("input_".concat(o, "_hourSelect"))
                          .triggerEvent("change");
                    break;
                  default:
                    if (
                      a &&
                      (a.putValue(""),
                      a.triggerEvent("change"),
                      "control_email" === r)
                    ) {
                      var c = window.$("input_".concat(o, "_confirm"));
                      c && (c.putValue(""), c.triggerEvent("change"));
                    }
                }
              });
            },
            generateCtrlItems: function (e, t) {
              var n = {};
              switch (((t = "".concat(t)), e)) {
                case "control_fullname":
                  var o = t.replace(/^\s+|\s+$/g, "");
                  (n = { first: (o = o.split(/\s+/g))[0], last: o[1] }),
                    3 == o.length && ((n.middle = o[1]), (n.last = o[2]));
                  break;
                case "control_checkbox":
                case "control_dropdown":
                  n = t.split(/\r\n|\r|\n|\,|\<br\>/g);
                  break;
                case "control_phone":
                  var a = t.split(/\s+/g);
                  n = { area: a[0], phone: a[1], full: t };
                  break;
                case "control_time":
                  if (
                    /^([0]?\d|[1][0-2]):([0-5]\d)\s?(?:AM|PM)$/.test(t) ||
                    /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/.test(t)
                  ) {
                    var r = t.split(" ");
                    if (r.length > 0) {
                      var i = r[0].split(":");
                      n = { ampm: r[1], hourSelect: i[0], minuteSelect: i[1] };
                    }
                  }
              }
              return n;
            },
          };
        }
        var y = function (e) {
            var t;
            try {
              ((t = new URL(e, window.location.origin)).hostname =
                window.location.hostname),
                (t = t.toString());
            } catch (n) {
              t = e;
            }
            return new Promise(function (e, o) {
              var a = new window.XMLHttpRequest();
              a.open("GET", t, !0),
                (a.withCredentials = !0),
                (a.responseType = "blob"),
                (a.onerror = o),
                (a.onload = function () {
                  var t = new n.g.FileReader();
                  (t.onloadend = function () {
                    "string" == typeof t.result &&
                    ("data:image" === t.result.substr(0, 10) ||
                      "data:application/octet-stream" ===
                        t.result.substr(0, 29))
                      ? e(
                          t.result.replace(
                            "data:application/octet-stream",
                            "data:image/png"
                          )
                        )
                      : o(Error("Blob is not an image"));
                  }),
                    t.readAsDataURL(a.response);
                }),
                a.send();
            });
          },
          M = {
            submitted: !1,
            submit: function (e, t) {
              !0 !== this.submitted &&
                (e.submit(), (this.submitted = !0), JotForm.disableButtons());
            },
          },
          T = function (t) {
            var o,
              a,
              r = document.getElementById("customFieldFrame_".concat(t)),
              i = document.documentElement.clientHeight,
              l = document.documentElement.clientWidth,
              c = (window && window.newDefaultTheme) || "",
              s = !1,
              u =
                void 0 == JotForm.forms[0] || void 0 === JotForm.forms[0]
                  ? $($$(".jotform-form")[0].id)
                  : JotForm.forms[0];
            if (
              (~[
                "241261768412051",
                "70261670492960",
                "62754049811963",
                "62261204289958",
                "62702584435962",
                "62802961818967",
                "72134468218962",
              ].indexOf(u.id) && (s = !0),
              !r.hasClassName("custom-field-frame-rendered"))
            ) {
              s && console.log("Not rendered yet for", t);
              return;
            }
            if (
              ((o = !1),
              (a = document.getElementById(
                "customFieldFrame_".concat(t)
              )).hasAttribute("data-type") &&
                "oembed" === a.readAttribute("data-type") &&
                (o = !0),
              !o)
            ) {
              (JCFServerCommon.frames[t] = {}),
                (JCFServerCommon.frames[t].obj = r);
              var d = r.src;
              (JCFServerCommon.frames[t].src = d),
                (JCFServerCommon.submitFrames = []);
              var m = !0,
                f = !1;
              (window.sendMessage2Widget = O),
                (window.onresize = function () {
                  O(
                    JSON.stringify({
                      type: "frame:resize",
                      frameSizes: {
                        width: document.documentElement.clientWidth,
                        height: document.documentElement.clientHeight,
                      },
                    }),
                    t
                  );
                });
              var p = (window && window.JotForm.extendsNewTheme) || "",
                T = n.g.location.search.split("?").join("");
              (T.indexOf("offline_forms=true") > -1 ||
                T.indexOf("offline_forms=si") > -1) &&
                "v2" === c &&
                O(
                  JSON.stringify({
                    type: "theme",
                    themeVersion: c,
                    isExtendedTheme: p,
                  }),
                  t
                ),
                (window.JCFServerCommon.frames[t].sendReadyMessage = B),
                XD.receiveMessage(function (n) {
                  if (A(n.data)) {
                    var o = JSON.parse(n.data);
                    if (
                      (s && console.log("Data from widget", o.qid, o),
                      parseInt(t) === parseInt(o.qid))
                    ) {
                      if ("submit" === o.type) {
                        if (
                          (s &&
                            console.log(
                              "widget submit",
                              document.getElementById("input_".concat(o.qid))
                            ),
                          document.getElementById("input_".concat(o.qid)))
                        ) {
                          s &&
                            !o.value &&
                            (console.log("received Data ", o),
                            (o.value = document.getElementById(
                              "input_".concat(o.qid)
                            ).value)),
                            "number" == typeof o.value &&
                              (o.value = "".concat(o.value));
                          var a =
                              $(
                                document.getElementById("input_".concat(o.qid))
                              ).hasClassName("widget-required") ||
                              $(
                                document.getElementById("input_".concat(o.qid))
                              ).hasClassName("validate[required]"),
                            u = document.getElementById("input_".concat(o.qid)),
                            d = u.up(".form-line"),
                            f = function (e) {
                              return (
                                e.match(/^data:image\/png;base64/gi) ||
                                !!~e.indexOf("widget_metadata") ||
                                A(e)
                              );
                            },
                            p = JotForm.isVisible(d),
                            g =
                              !(
                                d.hasClassName("form-field-hidden") ||
                                u.hasClassName("always-hidden")
                              ) && !!p;
                          if (a) {
                            if (
                              (s && console.log(o.qid, "isVisible", g),
                              g &&
                                "valid" in o &&
                                (!1 === o.valid ||
                                  (!0 === o.valid && !o.value)))
                            ) {
                              if (
                                (j(o.qid)
                                  ? (u.setValue(""),
                                    s &&
                                      console.log(
                                        "LogA: Setting empty input value for",
                                        o.qid,
                                        o
                                      ))
                                  : s &&
                                    console.log(
                                      "LogA: Setting nothing because isn't ready",
                                      o.qid,
                                      o
                                    ),
                                !u.getValue())
                              ) {
                                var h =
                                  (JotForm.texts && JotForm.texts.required
                                    ? JotForm.texts.required
                                    : e.required) || "This field is required";
                                void 0 !== o.error &&
                                  !1 !== o.error &&
                                  (h = o.error.hasOwnProperty("msg")
                                    ? o.error.msg
                                    : h),
                                  s &&
                                    console.log(
                                      "Errored required element",
                                      u,
                                      o
                                    ),
                                  JotForm.errored(u, h);
                              }
                            } else if (
                              (g &&
                                !JotForm.isCollapsed(u) &&
                                (s &&
                                  console.log(
                                    "Correcting required element",
                                    u,
                                    o
                                  ),
                                JotForm.corrected(u)),
                              g ||
                                !0 !== o.valid ||
                                (s &&
                                  console.log(
                                    "Correcting not visible element but valid",
                                    u,
                                    o
                                  ),
                                JotForm.corrected(u)),
                              j(o.qid))
                            ) {
                              if (void 0 !== o.value) {
                                var y = o.value;
                                JotForm.isEncrypted &&
                                  o.value &&
                                  !f(o.value) &&
                                  "JF-CSE-V2" !== JotForm.encryptionProtocol &&
                                  (y = JotEncrypted.encrypt(o.value)),
                                  u.setValue(q(y)),
                                  s &&
                                    console.log(
                                      "LogB: Setting input value for",
                                      o.qid,
                                      o
                                    );
                              } else
                                u.setValue(""),
                                  s &&
                                    console.log(
                                      "LogC: Setting input value for",
                                      o.qid,
                                      o
                                    );
                            } else
                              s &&
                                console.log(
                                  "LogA: Widget frame not ready, no value set",
                                  o.qid,
                                  o
                                );
                          } else if (void 0 !== o) {
                            if ("value" in o) {
                              if (j(o.qid)) {
                                var y = o.value;
                                JotForm.isEncrypted &&
                                  o.value &&
                                  !f(o.value) &&
                                  "JF-CSE-V2" !== JotForm.encryptionProtocol &&
                                  (y = JotEncrypted.encrypt(o.value)),
                                  u.setValue(q(y));
                              } else
                                s &&
                                  console.log(
                                    "LogB: Widget frame not ready, no value set",
                                    o.qid,
                                    o
                                  );
                            } else
                              u.hasClassName("widget-static") &&
                                (u.setValue(""), u.removeAttribute("name"));
                          }
                          u &&
                            d &&
                            d.hasClassName("form-field-hidden") &&
                            "disable" === JotForm.clearFieldOnHide &&
                            u.setValue(""),
                            0 >
                              JCFServerCommon.submitFrames.indexOf(
                                parseInt(o.qid)
                              ) &&
                              (g && a && !o.valid
                                ? s &&
                                  console.log(
                                    "Waiting for frame submission, required but not valid",
                                    o.qid
                                  )
                                : JCFServerCommon.submitFrames.push(
                                    parseInt(o.qid)
                                  ));
                        }
                        for (
                          var T = $$(".widget-required, .widget-errored"),
                            w = !0,
                            b = 0;
                          b < T.length;
                          b++
                        )
                          0 === T[b].value.length &&
                            JotForm.isVisible(T[b]) &&
                            (w = !1);
                        if (!m) {
                          if (
                            (s && console.log("next page", m, x(), w), x() && w)
                          ) {
                            s && console.log("sendSubmit", m, w);
                            var G =
                                void 0 == JotForm.forms[0] ||
                                void 0 === JotForm.forms[0]
                                  ? $($$(".jotform-form")[0].id)
                                  : JotForm.forms[0],
                              _ =
                                !!~window.location.href.indexOf("/edit/") ||
                                window.location.search.match("inlineEdit|edit"),
                              S = [
                                "stripe",
                                "braintree",
                                "square",
                                "wepay",
                                "eway",
                                "bluepay",
                                "moneris",
                                "paypalcomplete",
                                "mollie",
                                "stripeACHManual",
                                "pagseguro",
                              ];
                            "subscription" === window.paymentType &&
                              "paypalcomplete" === JotForm.payment &&
                              S.splice(S.indexOf("paypalcomplete"), 1),
                              !(
                                (JotForm.payment &&
                                  S.indexOf(JotForm.payment) > -1 &&
                                  JotForm.isPaymentSelected() &&
                                  JotForm.paymentTotal > 0 &&
                                  !_) ||
                                JotForm.isEncrypted ||
                                JotForm.disableSubmitButton ||
                                window.offlineForm
                              ) &&
                                ($$('.custom-field-frame[data-type="iframe"]')
                                  .length ===
                                JCFServerCommon.submitFrames.length
                                  ? (s &&
                                      console.log(
                                        "All frames submitted",
                                        JCFServerCommon.submitFrames
                                      ),
                                    P(
                                      function () {
                                        return M.submit(G);
                                      },
                                      ["maloneyproperties.jotform.com"].indexOf(
                                        window.location.host
                                      ) > -1
                                        ? 300
                                        : 50
                                    )())
                                  : s &&
                                    console.log(
                                      "Not all frames submitted",
                                      JCFServerCommon.submitFrames
                                    ));
                          } else
                            JotForm.enableButtons(),
                              JotForm.showButtonMessage(),
                              (JCFServerCommon.submitFrames = []);
                        }
                      } else if ("calcvalue" === o.type) {
                        var C = document.getElementById("input_".concat(o.qid));
                        C && C.setAttribute("data-calc", o.value);
                      } else if ("data" === o.type) {
                        try {
                          var k = document.getElementById(
                            "input_".concat(o.qid)
                          );
                          k &&
                            ((k.value = o.value),
                            k.triggerEvent && k.triggerEvent("change"),
                            o.value && c && "v2" === c && JotForm.corrected(k));
                        } catch (e) {
                          console.log(e);
                        }
                        JotForm.triggerWidgetCondition(o.qid),
                          JotForm.triggerWidgetCalculation(o.qid);
                      } else if ("errors" === o.type) {
                        var E = document.getElementById("input_".concat(o.qid));
                        "show" === o.action
                          ? JotForm.isVisible(E) &&
                            (JotForm.corrected(E),
                            (E.value = ""),
                            E.addClassName("widget-errored"),
                            JotForm.errored(E, o.msg),
                            "resetForm" in o &&
                              !0 === o.resetForm &&
                              JotForm.enableButtons())
                          : "hide" === o.action &&
                            (E.removeClassName("widget-errored"),
                            JotForm.corrected(E));
                      } else if ("required" === o.type) {
                        var E = document.getElementById("input_".concat(o.qid));
                        "set" !== o.action || E.hasClassName("widget-required")
                          ? "unset" === o.action &&
                            (E.removeClassName("widget-required"),
                            JotForm.corrected(E))
                          : E.addClassName("widget-required");
                      } else if ("form:trackerID" === o.type)
                        O(
                          JSON.stringify({
                            eventID: o.eventID,
                            type: "event:receiver",
                            data: $$('[name="event_id"]')[0]
                              ? $$('[name="event_id"]')[0].value
                              : "",
                          }),
                          o.qid
                        );
                      else if ("size" === o.type) {
                        var N = o.width,
                          J = o.height;
                        null != N &&
                          (0 === Number(N) && (N = "auto"),
                          "number" == typeof N && (N = "".concat(N, "px")),
                          (document.getElementById(
                            "customFieldFrame_".concat(o.qid)
                          ).style.width = N)),
                          null != J &&
                            (Number(0 === J) && (J = "auto"),
                            "number" == typeof J && (J = "".concat(J, "px")),
                            (document.getElementById(
                              "customFieldFrame_".concat(o.qid)
                            ).style.height = J),
                            void 0 !== F() &&
                              (document.getElementById(
                                "cid_".concat(o.qid)
                              ).style.height = J)),
                          JotForm.iframeHeightCaller();
                      } else if ("styles" === o.type)
                        "styles" in o &&
                          !I(o.styles) &&
                          $("customFieldFrame_".concat(o.qid)).setStyle(
                            o.styles
                          );
                      else if ("replace" === o.type)
                        try {
                          var D = o.inputType,
                            L = o.isMobile,
                            R = o.required,
                            V = $("customFieldFrame_".concat(o.qid)).up(),
                            z = $("input_".concat(o.qid)).readAttribute("name");
                          $("customFieldFrame_".concat(o.qid)).remove(),
                            $("input_".concat(o.qid)).up().remove();
                          var H = "",
                            W = R
                              ? "validate[required] widget-required widget-replaced"
                              : "";
                          switch (D) {
                            case "control_fileupload":
                              var G =
                                void 0 == JotForm.forms[0] ||
                                void 0 === JotForm.forms[0]
                                  ? $($$(".jotform-form")[0].id)
                                  : JotForm.forms[0];
                              G.setAttribute("enctype", "multipart/form-data"),
                                L ||
                                  ((W = "" === W ? "validate[upload]" : W),
                                  (H =
                                    '<input class="form-upload '
                                      .concat(W, '" type="file" id="input_')
                                      .concat(o.qid, '" name="')
                                      .concat(
                                        z,
                                        '" file-accept="pdf, doc, docx, xls, xlsx, csv, txt, rtf, html, zip, mp3, wma, mpg, flv, avi, jpg, jpeg, png, gif"'
                                      ) + 'file-maxsize="10240">')),
                                V.insert(H);
                              break;
                            case "control_textbox":
                              (H = '<input class="form-textbox '
                                .concat(
                                  W,
                                  '" type="text" data-type-"input-textbox" id="input_'
                                )
                                .concat(o.qid, '" name="')
                                .concat(z, '">')),
                                V.insert(H);
                              break;
                            case "control_textarea":
                              (H = '<textarea class="form-textarea '
                                .concat(W, '" type="text" id="input_')
                                .concat(o.qid, '" name="')
                                .concat(z, '" cols="40" rows="6"></textarea>')),
                                V.insert(H);
                          }
                        } catch (e) {
                          console.log(e);
                        }
                      else if ("event:listener" === o.type) {
                        var U = document.getElementById(o.field);
                        if (U && ["keyup", "change"].indexOf(o.event) > -1) {
                          s && console.log("Event registered from ", o.qid);
                          var K = function (e) {
                            var t = e.target.value;
                            (t = void 0 !== t ? t : ""),
                              s &&
                                console.log(
                                  "Handler for ",
                                  o.qid,
                                  "triggered",
                                  t,
                                  e.target.id
                                ),
                              e.target.id === o.field &&
                                (s &&
                                  console.log(
                                    "event:receiver: Sending message to ",
                                    o.qid,
                                    "with value",
                                    t
                                  ),
                                O(
                                  JSON.stringify({
                                    eventID: o.eventID,
                                    type: "event:receiver",
                                    value: t,
                                  }),
                                  o.qid
                                ));
                          };
                          Event.observe(
                            U,
                            o.event,
                            "keyup" === o.event ? P(K, 100) : K
                          );
                        }
                      } else if ("event:store" === o.type) {
                        var U = document.getElementById(o.field);
                        if (U) {
                          var Y = $(o.field).up(".form-line").id.split("_")[1],
                            Z = {
                              eventID: o.eventID,
                              type: "event:receiver",
                              value: o.value,
                            };
                          "widget" === JotForm.getInputType(Y) ||
                          ("isWidget" in o && o.isWidget)
                            ? (window.console &&
                                "warn" in console &&
                                console.warn(
                                  "Sending value to destination(widget) from a source(widget) is not recommended."
                                ),
                              delete Z.eventID,
                              (Z.field = o.field),
                              (Z.isWidget = !0),
                              (Z.targetQID = Y),
                              s &&
                                console.log(
                                  "Sending data to widget field",
                                  Y,
                                  Z
                                ),
                              O(JSON.stringify(Z), Y))
                            : (U.setValue(o.value),
                              "hasCallback" in o &&
                                o.hasCallback &&
                                (s &&
                                  console.log(
                                    "Sending data to native field",
                                    o
                                  ),
                                O(JSON.stringify(Z), o.qid)));
                        }
                      } else if ("field:hide" === o.type)
                        $("input_".concat(o.qid)).up(".form-line").hide(),
                          window.FORM_MODE &&
                            "cardform" == window.FORM_MODE &&
                            window.CardForm.setCardVisibility(
                              window.CardForm.cards.filter(function (e) {
                                return e.question.id == o.qid;
                              })[0],
                              !1
                            );
                      else if ("field:invisible" === o.type) {
                        var X,
                          Q = document.getElementById("input_".concat(o.qid));
                        Q &&
                          (X = Q.closest(".form-line")) &&
                          (X.style.cssText =
                            "opacity: 0;height: 0;margin: 0;padding: 0;width: 0 !important;"),
                          window.FORM_MODE &&
                            "cardform" == window.FORM_MODE &&
                            window.CardForm.setCardVisibility(
                              window.CardForm.cards.filter(function (e) {
                                return e.question.id == o.qid;
                              })[0],
                              !1
                            );
                      } else if ("reset" === o.type) B(o.qid, o.type);
                      else if ("field:show" === o.type)
                        $("input_".concat(o.qid)).up(".form-line").show();
                      else if ("fields:capture" === o.type) {
                        var ee = [
                            "control_textbox",
                            "control_textarea",
                            "control_dropdown",
                            "control_datetime",
                            "control_phone",
                            "control_fullname",
                            "control_hidden",
                            "control_email",
                          ],
                          et = [];
                        o.fields.forEach(function (e) {
                          var t,
                            n,
                            a,
                            r = "";
                          if (e.match(/\[\w+\]/)) {
                            var i = $$('[name$="_'.concat(e, '"]'))[0] || !1;
                            i &&
                              ((r =
                                "SELECT" === i.tagName
                                  ? i.getSelected().value
                                  : i.value),
                              (n = i.up("li.form-line")),
                              (a = i
                                .up("li.form-line")
                                .getAttribute("data-type")));
                          } else {
                            if (
                              ("name" === o.identifier
                                ? $$(
                                    ".form-textbox, .form-dropdown, .form-textarea, .form-hidden"
                                  ).some(function (t) {
                                    if (
                                      t.name.match(
                                        new RegExp(
                                          "("
                                            .concat(e, "$)|(")
                                            .concat(e, "\\[)")
                                        )
                                      )
                                    )
                                      return (n = t.up("li"));
                                  })
                                : (n = $("id_".concat(e))),
                              (a = n ? n.getAttribute("data-type") : ""),
                              !n || -1 === ee.indexOf(a))
                            ) {
                              et.push({ selector: e, value: "" });
                              return;
                            }
                            (r = $$(
                              "#"
                                .concat(n.id, " input, #")
                                .concat(n.id, " select, #")
                                .concat(n.id, " textarea")
                            )
                              .map(function (e) {
                                return e.id == "lite_mode_".concat(n.id)
                                  ? ""
                                  : "SELECT" === e.tagName
                                  ? e.getSelected().value
                                  : e.value;
                              })
                              .filter(function (e) {
                                return !!e;
                              })),
                              "control_datetime" === a &&
                                n.down("[id*=lite_mode_]") &&
                                (r = n.down("[id*=lite_mode_]").value),
                              (r = r.length <= 1 ? r[0] || "" : r);
                          }
                          if (
                            (void 0 === r
                              ? "undefined"
                              : (t = r) &&
                                "undefined" != typeof Symbol &&
                                t.constructor === Symbol
                              ? "symbol"
                              : typeof t) == "object"
                          ) {
                            var l = " ";
                            switch (a) {
                              case "control_datetime":
                                l = n.down(".date-separate")
                                  ? n
                                      .down(".date-separate")
                                      .innerHTML.replace(/\s|\&nbsp;/g, "")
                                  : "/";
                                break;
                              case "control_phone":
                                l = "-";
                            }
                            r = r.join(l);
                          }
                          et.push({ selector: e, value: r, type: a || "" });
                        }),
                          O(
                            JSON.stringify({
                              eventID: o.eventID,
                              type: "event:receiver",
                              data: et,
                            }),
                            o.qid
                          );
                      } else if ("fields:fill" === o.type) {
                        var en = {};
                        $$(".form-line")
                          .filter(function (e) {
                            return [
                              "control_textbox",
                              "control_scale",
                              "control_radio",
                              "control_checkbox",
                              "control_dropdown",
                              "control_rating",
                              "control_datetime",
                              "control_fullname",
                              "control_phone",
                              "control_birthdate",
                              "control_address",
                              "control_time",
                              "control_email",
                              "control_textarea",
                              "control_emojislider",
                              "control_yesno",
                              "control_number",
                            ].include(e.readAttribute("data-type"));
                          })
                          .each(function (e, t) {
                            var n,
                              a = e.id.split("_")[1],
                              r = e.readAttribute("data-type"),
                              i = (
                                window.FORM_MODE &&
                                "cardform" == window.FORM_MODE
                                  ? e.select(".jfQuestion-label").first()
                                  : e.select(".form-label").first()
                              ).clone(!0),
                              l =
                                i.select(".form-required").first() ||
                                i.select(".jfRequiredStar").first();
                            l && l.remove();
                            for (
                              var c = {
                                  name: "",
                                  value: "",
                                  items: "",
                                  text:
                                    ((n = (
                                      (i && (i.innerText || i.textContent)) ||
                                      ""
                                    ).toLowerCase()),
                                    8 === F()
                                      ? n.replace(/^\s+|\s+$/g, "")
                                      : n.trim()),
                                  type: r,
                                },
                                s = 0;
                              s < o.fields.length;
                              s++
                            ) {
                              var u = !1;
                              if ("label" === o.identifier) {
                                var d = (o.fields[s].label || "")
                                  .toString()
                                  .toLowerCase();
                                u = c.text === d;
                              } else if ("id" === o.identifier)
                                u = Number(a) === Number(o.fields[s].id);
                              else {
                                console.error(
                                  "Unknown identifier",
                                  o.identifier,
                                  "use the question label or qid"
                                );
                                break;
                              }
                              if (u && $("cid_".concat(a))) {
                                var m = $("cid_".concat(a))
                                  .select("input, select, textarea")
                                  .first();
                                if (m) {
                                  (c.name = m
                                    .readAttribute("name")
                                    .replace("q".concat(a, "_"), "")),
                                    (c.value = o.fields[s].value);
                                  var f = o.fields[s].items
                                    ? o.fields[s].items
                                    : v().generateCtrlItems(r, c.value);
                                  I(f) || (c.items = f),
                                    a in en || (en[a] = {}),
                                    (en[a] = c);
                                }
                                break;
                              }
                            }
                          }),
                          I(en) ||
                            (s && console.log("data props", en), v().parse(en)),
                          JotForm.runAllCalculations();
                      } else if ("fields:clear" === o.type) {
                        var eo = [];
                        (o.fields = o.fields.map(function (e) {
                          return e.toLowerCase();
                        })),
                          $$(".form-label, .jfQuestion-label").each(function (
                            e
                          ) {
                            var t = e.clone(!0),
                              n = t
                                .select(".form-required, .jfRequiredStar")
                                .first();
                            n && n.remove();
                            var a = t.innerText.trim().toLowerCase();
                            if (o.fields.indexOf(a) > -1) {
                              var r = e.id.match(/_(\d+)$/)[1] || "",
                                i =
                                  e
                                    .up(".form-line")
                                    .getAttribute("data-type") || "";
                              r && i && eo.push({ qid: r, type: i });
                            }
                          });
                        try {
                          v().clear(eo);
                        } catch (e) {
                          console.error(e);
                        }
                      } else if ("submit:frame:remove" === o.type) {
                        if (JCFServerCommon.submitFrames.length > 0) {
                          var ea = JCFServerCommon.submitFrames.indexOf(
                            parseInt(o.qid)
                          );
                          ea >= 0 && JCFServerCommon.submitFrames.splice(ea, 1);
                        }
                      } else if ("frame:move" === o.type) {
                        var er = document.body.getBoundingClientRect().top,
                          ei = r.getBoundingClientRect().top - er,
                          el = r.up("ul.form-section.page-section");
                        if (el) {
                          var ec = el.getHeight();
                          new MutationObserver(function (e) {
                            if (JotForm.isVisible(r) && el.getHeight() !== ec) {
                              var t = r.getBoundingClientRect().top - er;
                              Math.abs(ei - t) > 5 &&
                                ((ec = el.getHeight()),
                                (ei = t),
                                O(
                                  JSON.stringify({
                                    eventID: o.eventID,
                                    type: "event:receiver",
                                    data: { position: ei },
                                  }),
                                  o.qid
                                ));
                            }
                          }).observe(el, {
                            subtree: !0,
                            attributes: !0,
                            attributeFilter: ["class", "style"],
                          });
                        }
                      } else if ("frame:getdata" === o.type) {
                        var es = 0,
                          eu = 0,
                          ed = 0;
                        ("cardform" == window.FORM_MODE ||
                          "card" === window.buildermode) &&
                          ((es = document.getElementById(
                            "label_".concat(t)
                          ).clientHeight),
                          (eu =
                            document.getElementsByClassName("jfCard-actions")[0]
                              .clientHeight),
                          (ed = document.querySelectorAll(
                            ".jfProgress, .no-animate"
                          )[0].clientHeight));
                        var em = {
                          width: l,
                          height: i,
                          labelHeight: es,
                          actionHeight: eu,
                          jfProgressHeight: ed,
                        };
                        O(
                          JSON.stringify({
                            type: "event:receiver",
                            eventID: o.eventID,
                            frameData: em,
                          }),
                          o.qid
                        );
                      } else
                        "disableButtons" === o.type
                          ? JotForm.disableButtons()
                          : "enableButtons" === o.type &&
                            JotForm.enableButtons();
                    }
                  }
                }, r.src.replace(/([^:]+:\/\/[^\/]+).*/, "$1")),
                r.addClassName("frame-xd-ready").store("frame-xd-ready", !0),
                s && console.log("sending settings", N(), new Date().getTime()),
                O(JSON.stringify({ type: "settings", settings: N() }), t),
                s &&
                  console.log("sending form strings", e, new Date().getTime()),
                O(JSON.stringify({ type: "formstrings", formTexts: e }), t);
              var w = JotForm.getSection(r),
                b = JotForm.isVisible(w),
                G = JotForm.isVisible(r),
                _ = window.JotForm.isAdvancedDesigner,
                S = r.closest(".form-section-closed"),
                C = void 0 == S;
              C ||
                void 0 == S.querySelector('[data-type="control_collapse"]') ||
                (C = !0);
              var k = r && b && (G || _) && C,
                E =
                  JotForm.getWidgetType(t) &&
                  JotForm.getWidgetType(t).includes("maskedInput");
              k || E
                ? (s && console.log("Frame widget object is visible", b, G, C),
                  B(t))
                : document.get.jumpToPage &&
                  (function () {
                    var e = parseInt(document.get.jumpToPage);
                    if (
                      !isNaN(e) &&
                      w === $$(".form-section:not([id^=section_])")[e - 1]
                    )
                      var n = setInterval(function () {
                        G &&
                          (s &&
                            console.log(
                              "Form jump to widget page (".concat(
                                e,
                                "); sending ready message..."
                              )
                            ),
                          B(t),
                          clearInterval(n));
                      }, 200);
                  })(),
                (window.onresize = function () {
                  O(
                    JSON.stringify({
                      type: "frameresize",
                      frameSizes: {
                        width: document.documentElement.clientWidth,
                        height: document.documentElement.clientHeight,
                      },
                    }),
                    t
                  );
                }),
                u.observe("submit", function (e) {
                  if (
                    null !==
                      document.getElementById("customFieldFrame_".concat(t)) &&
                    $$(".form-submit-button") &&
                    $$(".form-submit-button").length > 0
                  ) {
                    var n = !1;
                    $$(".form-submit-button").each(function (e) {
                      JotForm.isVisible(e.parentNode) && (n = !0);
                    }),
                      e.stop(),
                      n
                        ? ((m = !1),
                          s &&
                            console.log(
                              "Form stopped from widget server event, submitting form from widge submit event"
                            ),
                          O(
                            JSON.stringify({
                              type: "submit",
                              qid: "".concat(t),
                            }),
                            "".concat(t)
                          ))
                        : JotForm.enableButtons();
                  }
                }),
                $$(".form-pagebreak-back").each(function (e) {
                  $(e).observe("click", function () {
                    var e = $(this)
                      .up(".form-section")
                      .select("#customFieldFrame_".concat(t));
                    e.length > 0 &&
                      "5295629cba137d764f000004" ===
                        e[0].readAttribute("data-client-id") &&
                      JotForm.disableWidget(t),
                      JotForm.currentSection.down(
                        "#customFieldFrame_".concat(t)
                      ) &&
                        !j(t) &&
                        (s &&
                          console.log(
                            "Sending ready message to unready widget"
                          ),
                        B(t));
                  });
                }),
                $$(".form-pagebreak-next").each(function (e, n) {
                  s && console.log("Going to next page"),
                    $(e).observe("click", function (e) {
                      (f = this.up(".form-section")),
                        (m = !0),
                        f.select("#customFieldFrame_".concat(t)).length > 0 &&
                          (s &&
                            console.log(
                              "Sending submit message for iframe id",
                              t,
                              "from section",
                              this.up(".form-section"),
                              "and iframe",
                              r
                            ),
                          O(
                            JSON.stringify({
                              type: "submit",
                              method: "next",
                              qid: "".concat(t),
                            }),
                            "".concat(t)
                          ),
                          Event.stop(e));
                      var n = setInterval(function () {
                        (r = document.getElementById(
                          "customFieldFrame_".concat(t)
                        ))
                          ? ((f = $(r).up(".form-section")),
                            JotForm.isVisible(f) && JotForm.isVisible(r)
                              ? (clearInterval(n),
                                s &&
                                  console.log(
                                    "Sending ready message for iframe id",
                                    t,
                                    "from section",
                                    f
                                  ),
                                "5295629cba137d764f000004" ===
                                  r.getAttribute("data-client-id") && j(t)
                                  ? JotForm.showWidget(t)
                                  : B(t))
                              : (s &&
                                  console.log(
                                    "Section and frameObj not visible",
                                    f,
                                    r
                                  ),
                                clearInterval(n)))
                          : clearInterval(n);
                      }, 100);
                    });
                }),
                $("input_".concat(t)) &&
                  ["widget:clear", "widget:populate", "widget:shift"].forEach(
                    function (e) {
                      $("input_".concat(t)).observe(e, function (t) {
                        var n = t.memo.qid,
                          o = { type: e.replace(":", ""), qid: n };
                        "widget:populate" == e &&
                          (o.value = t.memo.value || ""),
                          O(JSON.stringify(o), n);
                      });
                    }
                  );
            }
            function F() {
              var e = navigator.userAgent.match(
                /(?:MSIE |Trident\/.*; rv:)(\d+)/
              );
              return e ? parseInt(e[1]) : void 0;
            }
            function x() {
              return 0 === $$(".form-line-error").length;
            }
            function A(e) {
              try {
                JSON.parse(e);
              } catch (e) {
                return !1;
              }
              return !0;
            }
            function I(e) {
              if (null == e) return !0;
              if (e.constructor === Array || e.constructor === String)
                return 0 === e.length;
              for (var t in e) if (e.hasOwnProperty(t)) return !1;
              return !0;
            }
            function O(e, t, n) {
              var o = d;
              void 0 !== n && (o = n);
              var a = document.getElementById("customFieldFrame_".concat(t));
              null !== a &&
                (-1 != navigator.userAgent.indexOf("Firefox")
                  ? XD.postMessage(e, o, getIframeWindow(a))
                  : void 0 !== F()
                  ? XD.postMessage(e, o, a)
                  : XD.postMessage(e, o, getIframeWindow(a)));
            }
            function N() {
              var e = document.getElementById("widget_settings_".concat(t));
              return e ? e.value : null;
            }
            function P(e, t) {
              var n = null;
              return function () {
                var o = this,
                  a = arguments;
                clearTimeout(n),
                  (n = setTimeout(function () {
                    e.apply(o, a);
                  }, t));
              };
            }
            function j(e) {
              var t = document.getElementById("customFieldFrame_".concat(e));
              return !!(
                t.hasClassName("frame-ready") || t.retrieve("frame-ready")
              );
            }
            function B(e, t) {
              var n,
                o,
                a,
                r = document.querySelector(".form-all"),
                i = window.getComputedStyle
                  ? window
                      .getComputedStyle(r, null)
                      .getPropertyValue("background-color")
                  : getStyle(r, "background"),
                l = window.getComputedStyle
                  ? window
                      .getComputedStyle(r, null)
                      .getPropertyValue("font-family")
                  : getStyle(r, "font-family"),
                c =
                  "cardform" == window.FORM_MODE ||
                  "card" === window.buildermode,
                u = !!h() && h(),
                d = "1" === g("IS_EU", "0") || !!JotForm.forwardToEu,
                m = "1" === g("IS_HIPAA", "0") || !!JotForm.hipaa;
              if (void 0 !== window.JotForm.uploadServerURL)
                var f = window.JotForm.uploadServerURL;
              var p = (window && window.newDefaultTheme) || "";
              !p && window.JotForm.newDefaultTheme && (p = "v2");
              var v = (window && window.JotForm.extendsNewTheme) || "",
                M = {
                  type: "ready",
                  qid: "".concat(e),
                  isEditMode: window.JotForm.isEditMode(),
                  sid: window.JotForm.submissionID,
                  formID: document.getElementsByName("formID")[0].value,
                  required:
                    document
                      .getElementById("id_".concat(e))
                      .className.indexOf("jf-required") > -1,
                  static: !!(
                    (n = document.getElementById("input_".concat(e))) &&
                    n.hasClassName("widget-static")
                  ),
                  isWidgetLabelEnabled:
                    !!(o = document.getElementById("label_".concat(e))) &&
                    o.className.indexOf("form-label") > -1,
                  qlabel:
                    (a = document.getElementById("label_".concat(e))) &&
                    a.textContent
                      ? a.textContent
                      : "",
                  jotformNext:
                    window.location.href.indexOf("jotformNext=1") > -1 ||
                    1 == window.isComingFromJotFormNext,
                  cardform: c,
                  background: i,
                  fontFamily: l,
                  origin:
                    window.location.origin ||
                    ""
                      .concat(window.location.protocol, "//")
                      .concat(window.location.hostname)
                      .concat(
                        window.location.port
                          ? ":".concat(window.location.port)
                          : ""
                      ),
                  enterprise: JotForm.enterprise,
                  themeVersion: p,
                  isExtendedTheme: v,
                  isEu: d,
                  isHipaa: m,
                  isApp: u,
                  lang: document.documentElement.lang,
                  uploadServerURL: f,
                };
              t && (M.type = t);
              var T = N();
              T && "[]" !== decodeURIComponent(T) && (M.settings = T);
              var w = document.getElementById("customFieldFrame_".concat(e));
              if (c && w && "function" == typeof w.up) {
                var b = w.up(".jfField") || !1,
                  G =
                    !!b &&
                    "function" == typeof b.getAttribute &&
                    b.getAttribute("data-widget-id");
                G && (M.widgetID = G);
              }
              var _ = w.readAttribute("data-width") || w.parentNode.clientWidth,
                S = w.readAttribute("data-height") || w.parentNode.clientHeight;
              function C(e, t) {
                $(document.getElementById("customFieldFrame_".concat(e)))
                  .addClassName("frame-ready")
                  .store("frame-ready", !0),
                  O(JSON.stringify(t), e);
              }
              (M.width = parseInt(_)),
                (M.height = parseInt(S)),
                (M.viewWidth = w.parentNode.clientWidth),
                (M.viewHeight = w.parentNode.clientHeight);
              var k =
                JotForm.isEditMode() ||
                !!~window.location.href.indexOf("/edit/") ||
                !!~window.location.href.indexOf("inlineEdit");
              if ((s && console.log("ready message inline", M), k))
                var E = 0,
                  F = setInterval(function () {
                    if (w.hasAttribute("data-value") || E >= 5e3) {
                      var t;
                      (clearInterval(F),
                      (M.value = w.getAttribute("data-value")),
                      s && console.log("Ready message sent in", E, M),
                      (t = w.getAttribute("data-client-id")),
                      (M.enterprise || M.isHipaa) &&
                        [
                          "529467003477f3512000001f",
                          "533a8c19a3f5fec35d00009a",
                          "5d493b3b3ecd623d69000045",
                          "535a49d40a05fdff5200002b",
                        ].includes(t))
                        ? y(
                            "/"
                              .concat(M.value, "?")
                              .concat(new Date().getTime())
                          )
                            .then(function (t) {
                              var n, o;
                              return C(
                                e,
                                ((n = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                    var n =
                                        null != arguments[t]
                                          ? arguments[t]
                                          : {},
                                      o = Object.keys(n);
                                    "function" ==
                                      typeof Object.getOwnPropertySymbols &&
                                      (o = o.concat(
                                        Object.getOwnPropertySymbols(n).filter(
                                          function (e) {
                                            return Object.getOwnPropertyDescriptor(
                                              n,
                                              e
                                            ).enumerable;
                                          }
                                        )
                                      )),
                                      o.forEach(function (t) {
                                        var o;
                                        (o = n[t]),
                                          t in e
                                            ? Object.defineProperty(e, t, {
                                                value: o,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0,
                                              })
                                            : (e[t] = o);
                                      });
                                  }
                                  return e;
                                })({}, M)),
                                (o = o = { value: t }),
                                Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(
                                      n,
                                      Object.getOwnPropertyDescriptors(o)
                                    )
                                  : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                        var o = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, o);
                                      }
                                      return n;
                                    })(Object(o)).forEach(function (e) {
                                      Object.defineProperty(
                                        n,
                                        e,
                                        Object.getOwnPropertyDescriptor(o, e)
                                      );
                                    }),
                                n)
                              );
                            })
                            .catch(function () {
                              return C(e, M);
                            })
                        : C(e, M);
                    }
                    E += 50;
                  }, 50);
              else {
                if (w.hasAttribute("data-value"))
                  M.value = w.getAttribute("data-value");
                else {
                  var x = w.parentNode.select("#input_".concat(e));
                  x.first().getValue() &&
                    ((M.state = "oldvalue"), (M.value = x.first().getValue()));
                }
                s && console.log("Sending normal ready message", M), C(e, M);
              }
            }
            function q(e) {
              var t = document.createElement("textarea");
              return (t.textContent = e), t.innerHTML;
            }
          };
        (function () {
          if (
            (void 0 === window.getIframeWindow &&
              (window.getIframeWindow = function (e) {
                var t;
                return e.contentWindow
                  ? e.contentWindow
                  : e.window
                  ? e.window
                  : (!t && e.contentDocument && (t = e.contentDocument),
                    !t && e.document && (t = e.document),
                    t && t.defaultView)
                  ? t.defaultView
                  : t && t.parentWindow
                  ? t.parentWindow
                  : void 0;
              }),
            void 0 === window.XD)
          ) {
            var e, t, n, o;
            window.XD =
              ((o = 1),
              {
                postMessage: function (e, t, n) {
                  if (t) {
                    var a = n || window.parent;
                    if (window.postMessage) {
                      var r = t.replace(/([^:]+:\/\/[^/]+).*/, "$1");
                      if (
                        ("postMessage" in a || (a = window.getIframeWindow(a)),
                        !a)
                      )
                        return;
                      0 === r.indexOf("file://") && (r = "*"),
                        a.postMessage(e, r);
                    } else
                      t &&
                        (a.location = ""
                          .concat(t.replace(/#.*$/, ""), "#")
                          .concat(+new Date())
                          .concat(o++, "&")
                          .concat(e));
                  }
                },
                receiveMessage: function (o, a) {
                  window.postMessage
                    ? (o &&
                        (n = function (e) {
                          var t = window.location.search.split("?").join("");
                          if (
                            !(
                              t.indexOf("offline_forms=true") > -1 ||
                              t.indexOf("offline_forms=si") > -1
                            ) &&
                            (("string" == typeof a && e.origin !== a) ||
                              ("[object Function]" ===
                                Object.prototype.toString.call(a) &&
                                !1 === a(e.origin)))
                          )
                            return !1;
                          o(e);
                        }),
                      window.addEventListener
                        ? window[
                            o ? "addEventListener" : "removeEventListener"
                          ]("message", n, !1)
                        : window[o ? "attachEvent" : "detachEvent"](
                            "onmessage",
                            n
                          ))
                    : (e && clearInterval(e),
                      (e = null),
                      o &&
                        (e = setInterval(function () {
                          var e = document.location.hash,
                            n = /^#?\d+&/;
                          e !== t &&
                            n.test(e) &&
                            ((t = e), o({ data: e.replace(n, "") }));
                        }, 100)));
                },
              });
          }
        })(),
          window.getStyle ||
            (window.getStyle = function (e, t) {
              var n,
                o,
                a,
                r,
                i = (e.ownerDocument || document).defaultView;
              return i && i.getComputedStyle
                ? ((t = t.replace(/([A-Z])/g, "-$1").toLowerCase()),
                  i.getComputedStyle(e, null).getPropertyValue(t))
                : e.currentStyle
                ? ((t = t.replace(/-(\w)/g, function (e, t) {
                    return t.toUpperCase();
                  })),
                  (r = e.currentStyle[t]),
                  /^\d+(em|pt|%|ex)?$/i.test(r))
                  ? ((n = r),
                    (o = e.style.left),
                    (a = e.runtimeStyle.left),
                    (e.runtimeStyle.left = e.currentStyle.left),
                    (e.style.left = n || 0),
                    (n = "".concat(e.style.pixelLeft, "px")),
                    (e.style.left = o),
                    (e.runtimeStyle.left = a),
                    n)
                  : r
                : void 0;
            }),
          void 0 === window.JCFServerCommon &&
            (window.JCFServerCommon = { frames: {}, func: {} }),
          (window.widgetFrameLoaded = T);
        var w = { widgetFrameLoaded: T };
      })(),
      (o = o.default)
    );
  })();
});

import xe, { useState as Oe, useRef as cr, useEffect as Se } from "react";
var Z = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function dr() {
  if (Ce) return L;
  Ce = 1;
  var A = xe, T = Symbol.for("react.element"), k = Symbol.for("react.fragment"), w = Object.prototype.hasOwnProperty, O = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(R, c, _) {
    var d, g = {}, h = null, P = null;
    _ !== void 0 && (h = "" + _), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (P = c.ref);
    for (d in c) w.call(c, d) && !C.hasOwnProperty(d) && (g[d] = c[d]);
    if (R && R.defaultProps) for (d in c = R.defaultProps, c) g[d] === void 0 && (g[d] = c[d]);
    return { $$typeof: T, type: R, key: h, ref: P, props: g, _owner: O.current };
  }
  return L.Fragment = k, L.jsx = E, L.jsxs = E, L;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function vr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var A = xe, T = Symbol.for("react.element"), k = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), R = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), N = Symbol.iterator, B = "@@iterator";
    function m(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = N && e[N] || e[B];
      return typeof r == "function" ? r : null;
    }
    var v = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function l(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        je("error", e, t);
      }
    }
    function je(e, r, t) {
      {
        var n = v.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var ke = !1, De = !1, Fe = !1, Ae = !1, $e = !1, ee;
    ee = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === w || e === C || $e || e === O || e === _ || e === d || Ae || e === P || ke || De || Fe || typeof e == "object" && e !== null && (e.$$typeof === h || e.$$typeof === g || e.$$typeof === E || e.$$typeof === R || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case w:
          return "Fragment";
        case k:
          return "Portal";
        case C:
          return "Profiler";
        case O:
          return "StrictMode";
        case _:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return re(r) + ".Consumer";
          case E:
            var t = e;
            return re(t._context) + ".Provider";
          case c:
            return Le(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : S(e.type) || "Memo";
          case h: {
            var o = e, u = o._payload, i = o._init;
            try {
              return S(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, $ = 0, te, ne, ae, ie, oe, ue, se;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function We() {
      {
        if ($ === 0) {
          te = console.log, ne = console.info, ae = console.warn, ie = console.error, oe = console.group, ue = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        $++;
      }
    }
    function Ye() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, e, {
              value: te
            }),
            info: x({}, e, {
              value: ne
            }),
            warn: x({}, e, {
              value: ae
            }),
            error: x({}, e, {
              value: ie
            }),
            group: x({}, e, {
              value: oe
            }),
            groupCollapsed: x({}, e, {
              value: ue
            }),
            groupEnd: x({}, e, {
              value: se
            })
          });
        }
        $ < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = v.ReactCurrentDispatcher, q;
    function Y(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "";
          }
        return `
` + q + e;
      }
    }
    var K = !1, M;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Me();
    }
    function le(e, r) {
      if (!e || K)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      K = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = J.current, J.current = null, We();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (b) {
              n = b;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (b) {
              n = b;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            n = b;
          }
          e();
        }
      } catch (b) {
        if (b && n && typeof b.stack == "string") {
          for (var a = b.stack.split(`
`), p = n.stack.split(`
`), s = a.length - 1, f = p.length - 1; s >= 1 && f >= 0 && a[s] !== p[f]; )
            f--;
          for (; s >= 1 && f >= 0; s--, f--)
            if (a[s] !== p[f]) {
              if (s !== 1 || f !== 1)
                do
                  if (s--, f--, f < 0 || a[s] !== p[f]) {
                    var y = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, y), y;
                  }
                while (s >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        K = !1, J.current = u, Ye(), Error.prepareStackTrace = o;
      }
      var F = e ? e.displayName || e.name : "", j = F ? Y(F) : "";
      return typeof e == "function" && M.set(e, j), j;
    }
    function Ve(e, r, t) {
      return le(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Ue(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case _:
          return Y("Suspense");
        case d:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ve(e.render);
          case g:
            return V(e.type, r, t);
          case h: {
            var n = e, o = n._payload, u = n._init;
            try {
              return V(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, ce = {}, de = v.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Ne(e, r, t, n, o) {
      {
        var u = Function.call.bind(I);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (U(o), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), U(null)), a instanceof Error && !(a.message in ce) && (ce[a.message] = !0, U(o), l("Failed %s type: %s", t, a.message), U(null));
          }
      }
    }
    var Be = Array.isArray;
    function G(e) {
      return Be(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function pe(e) {
      if (qe(e))
        return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), ve(e);
    }
    var ge = v.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, me;
    function Ge(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      typeof e.ref == "string" && ge.current;
    }
    function He(e, r) {
      {
        var t = function() {
          be || (be = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          me || (me = !0, l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ze = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: T,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function er(e, r, t, n, o) {
      {
        var u, i = {}, a = null, p = null;
        t !== void 0 && (pe(t), a = "" + t), ze(r) && (pe(r.key), a = "" + r.key), Ge(r) && (p = r.ref, Xe(r, o));
        for (u in r)
          I.call(r, u) && !Ke.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || p) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(i, f), p && Qe(i, f);
        }
        return Ze(e, a, p, o, n, ge.current, i);
      }
    }
    var z = v.ReactCurrentOwner, he = v.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === T;
    }
    function ye() {
      {
        if (z.current) {
          var e = S(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      return "";
    }
    var Ee = {};
    function tr(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + S(e._owner.type) + "."), D(e), l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && Re(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = m(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              H(i.value) && Re(i.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = S(r);
          Ne(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var o = S(r);
          l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), l("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var Te = {};
    function we(e, r, t, n, o, u) {
      {
        var i = Ie(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = rr();
          p ? a += p : a += ye();
          var s;
          e === null ? s = "null" : G(e) ? s = "array" : e !== void 0 && e.$$typeof === T ? (s = "<" + (S(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, l("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var f = er(e, r, t, o, u);
        if (f == null)
          return f;
        if (i) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (G(y)) {
                for (var F = 0; F < y.length; F++)
                  _e(y[F], e);
                Object.freeze && Object.freeze(y);
              } else
                l("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(y, e);
        }
        if (I.call(r, "key")) {
          var j = S(e), b = Object.keys(r).filter(function(lr) {
            return lr !== "key";
          }), Q = b.length > 0 ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[j + Q]) {
            var fr = b.length > 0 ? "{" + b.join(": ..., ") + ": ...}" : "{}";
            l(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, j, fr, j), Te[j + Q] = !0;
          }
        }
        return e === w ? ar(f) : nr(f), f;
      }
    }
    function ir(e, r, t) {
      return we(e, r, t, !0);
    }
    function or(e, r, t) {
      return we(e, r, t, !1);
    }
    var ur = or, sr = ir;
    W.Fragment = w, W.jsx = ur, W.jsxs = sr;
  }()), W;
}
process.env.NODE_ENV === "production" ? Z.exports = dr() : Z.exports = vr();
var pr = Z.exports;
const br = ({
  children: A,
  delay: T = 0,
  duration: k = 600,
  direction: w = "up",
  once: O = !0,
  threshold: C = 0.2,
  distance: E = 20,
  className: R = "",
  style: c = {}
}) => {
  const [_, d] = Oe(!1), g = cr(null), [h, P] = Oe(!1);
  Se(() => {
    if (typeof window > "u") return;
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    P(m.matches);
    const v = (l) => {
      P(l.matches);
    };
    return m.addEventListener ? m.addEventListener("change", v) : m.addListener(v), () => {
      m.removeEventListener ? m.removeEventListener("change", v) : m.removeListener(v);
    };
  }, []), Se(() => {
    if (typeof window > "u" || h) return;
    const m = new IntersectionObserver(
      ([l]) => {
        l.isIntersecting ? (d(!0), O && g.current && m.unobserve(g.current)) : O || d(!1);
      },
      {
        threshold: C
      }
    ), v = g.current;
    return v && m.observe(v), () => {
      v && m.unobserve(v);
    };
  }, [O, C, h]);
  const B = h ? c : {
    ...c,
    opacity: _ ? 1 : 0,
    transform: (() => {
      if (_ || h) return "translate3d(0, 0, 0)";
      switch (w) {
        case "up":
          return `translate3d(0, ${E}px, 0)`;
        case "down":
          return `translate3d(0, -${E}px, 0)`;
        case "left":
          return `translate3d(${E}px, 0, 0)`;
        case "right":
          return `translate3d(-${E}px, 0, 0)`;
        default:
          return "translate3d(0, 0, 0)";
      }
    })(),
    transition: `opacity ${k}ms ease-out ${T}ms, transform ${k}ms ease-out ${T}ms`,
    willChange: "opacity, transform"
  };
  return /* @__PURE__ */ pr.jsx("div", { ref: g, className: R, style: B, children: A });
};
export {
  br as ScrollFade
};

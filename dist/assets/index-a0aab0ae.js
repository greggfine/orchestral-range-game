(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function hm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Fr = {},
  mm = {
    get exports() {
      return Fr;
    },
    set exports(e) {
      Fr = e;
    },
  },
  Vo = {},
  P = {},
  gm = {
    get exports() {
      return P;
    },
    set exports(e) {
      P = e;
    },
  },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oi = Symbol.for("react.element"),
  ym = Symbol.for("react.portal"),
  vm = Symbol.for("react.fragment"),
  wm = Symbol.for("react.strict_mode"),
  Sm = Symbol.for("react.profiler"),
  _m = Symbol.for("react.provider"),
  xm = Symbol.for("react.context"),
  Pm = Symbol.for("react.forward_ref"),
  km = Symbol.for("react.suspense"),
  Cm = Symbol.for("react.memo"),
  Tm = Symbol.for("react.lazy"),
  wu = Symbol.iterator;
function Em(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wu && e[wu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Wf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Hf = Object.assign,
  Gf = {};
function bn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gf),
    (this.updater = n || Wf);
}
bn.prototype.isReactComponent = {};
bn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
bn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Kf() {}
Kf.prototype = bn.prototype;
function bl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gf),
    (this.updater = n || Wf);
}
var ea = (bl.prototype = new Kf());
ea.constructor = bl;
Hf(ea, bn.prototype);
ea.isPureReactComponent = !0;
var Su = Array.isArray,
  Qf = Object.prototype.hasOwnProperty,
  ta = { current: null },
  Yf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Qf.call(t, r) && !Yf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: oi,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: ta.current,
  };
}
function Vm(e, t) {
  return {
    $$typeof: oi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function na(e) {
  return typeof e == "object" && e !== null && e.$$typeof === oi;
}
function Lm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var _u = /\/+/g;
function es(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Lm("" + e.key)
    : t.toString(36);
}
function Oi(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case oi:
          case ym:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + es(s, 0) : r),
      Su(i)
        ? ((n = ""),
          e != null && (n = e.replace(_u, "$&/") + "/"),
          Oi(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (na(i) &&
            (i = Vm(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(_u, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Su(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + es(o, l);
      s += Oi(o, t, n, a, i);
    }
  else if (((a = Em(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + es(o, l++)), (s += Oi(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function mi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Oi(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Am(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var xe = { current: null },
  Fi = { transition: null },
  Rm = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: Fi,
    ReactCurrentOwner: ta,
  };
F.Children = {
  map: mi,
  forEach: function (e, t, n) {
    mi(
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
      mi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      mi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!na(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
F.Component = bn;
F.Fragment = vm;
F.Profiler = Sm;
F.PureComponent = bl;
F.StrictMode = wm;
F.Suspense = km;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rm;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Hf({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = ta.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Qf.call(t, a) &&
        !Yf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: oi, type: e.type, key: i, ref: o, props: r, _owner: s };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: xm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: _m, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = Xf;
F.createFactory = function (e) {
  var t = Xf.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: Pm, render: e };
};
F.isValidElement = na;
F.lazy = function (e) {
  return { $$typeof: Tm, _payload: { _status: -1, _result: e }, _init: Am };
};
F.memo = function (e, t) {
  return { $$typeof: Cm, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = Fi.transition;
  Fi.transition = {};
  try {
    e();
  } finally {
    Fi.transition = t;
  }
};
F.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
F.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
F.useContext = function (e) {
  return xe.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
F.useId = function () {
  return xe.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return xe.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return xe.current.useRef(e);
};
F.useState = function (e) {
  return xe.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return xe.current.useTransition();
};
F.version = "18.2.0";
(function (e) {
  e.exports = F;
})(gm);
const ra = hm(P);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dm = P,
  Mm = Symbol.for("react.element"),
  Nm = Symbol.for("react.fragment"),
  Om = Object.prototype.hasOwnProperty,
  Fm = Dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Im = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Om.call(t, r) && !Im.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Mm,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Fm.current,
  };
}
Vo.Fragment = Nm;
Vo.jsx = Zf;
Vo.jsxs = Zf;
(function (e) {
  e.exports = Vo;
})(mm);
const zm = Fr.Fragment,
  A = Fr.jsx,
  ne = Fr.jsxs;
var $s = {},
  Ws = {},
  jm = {
    get exports() {
      return Ws;
    },
    set exports(e) {
      Ws = e;
    },
  },
  Ie = {},
  Hs = {},
  Bm = {
    get exports() {
      return Hs;
    },
    set exports(e) {
      Hs = e;
    },
  },
  Jf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, M) {
    var O = E.length;
    E.push(M);
    e: for (; 0 < O; ) {
      var N = (O - 1) >>> 1,
        Q = E[N];
      if (0 < i(Q, M)) (E[N] = M), (E[O] = Q), (O = N);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var M = E[0],
      O = E.pop();
    if (O !== M) {
      E[0] = O;
      e: for (var N = 0, Q = E.length, Xt = Q >>> 1; N < Xt; ) {
        var et = 2 * (N + 1) - 1,
          Sn = E[et],
          Ae = et + 1,
          Zt = E[Ae];
        if (0 > i(Sn, O))
          Ae < Q && 0 > i(Zt, Sn)
            ? ((E[N] = Zt), (E[Ae] = O), (N = Ae))
            : ((E[N] = Sn), (E[et] = O), (N = et));
        else if (Ae < Q && 0 > i(Zt, O)) (E[N] = Zt), (E[Ae] = O), (N = Ae);
        else break e;
      }
    }
    return M;
  }
  function i(E, M) {
    var O = E.sortIndex - M.sortIndex;
    return O !== 0 ? O : E.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    y = !1,
    w = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(E) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u);
      else if (M.startTime <= E)
        r(u), (M.sortIndex = M.expirationTime), t(a, M);
      else break;
      M = n(u);
    }
  }
  function v(E) {
    if (((w = !1), h(E), !y))
      if (n(a) !== null) (y = !0), pe(S);
      else {
        var M = n(u);
        M !== null && be(v, M.startTime - E);
      }
  }
  function S(E, M) {
    (y = !1), w && ((w = !1), m(_), (_ = -1)), (g = !0);
    var O = d;
    try {
      for (
        h(M), f = n(a);
        f !== null && (!(f.expirationTime > M) || (E && !K()));

      ) {
        var N = f.callback;
        if (typeof N == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var Q = N(f.expirationTime <= M);
          (M = e.unstable_now()),
            typeof Q == "function" ? (f.callback = Q) : f === n(a) && r(a),
            h(M);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var Xt = !0;
      else {
        var et = n(u);
        et !== null && be(v, et.startTime - M), (Xt = !1);
      }
      return Xt;
    } finally {
      (f = null), (d = O), (g = !1);
    }
  }
  var T = !1,
    C = null,
    _ = -1,
    D = 5,
    R = -1;
  function K() {
    return !(e.unstable_now() - R < D);
  }
  function se() {
    if (C !== null) {
      var E = e.unstable_now();
      R = E;
      var M = !0;
      try {
        M = C(!0, E);
      } finally {
        M ? q() : ((T = !1), (C = null));
      }
    } else T = !1;
  }
  var q;
  if (typeof p == "function")
    q = function () {
      p(se);
    };
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel(),
      j = z.port2;
    (z.port1.onmessage = se),
      (q = function () {
        j.postMessage(null);
      });
  } else
    q = function () {
      k(se, 0);
    };
  function pe(E) {
    (C = E), T || ((T = !0), q());
  }
  function be(E, M) {
    _ = k(function () {
      E(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), pe(S));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (D = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (E) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = d;
      }
      var O = d;
      d = M;
      try {
        return E();
      } finally {
        d = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, M) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var O = d;
      d = E;
      try {
        return M();
      } finally {
        d = O;
      }
    }),
    (e.unstable_scheduleCallback = function (E, M, O) {
      var N = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? N + O : N))
          : (O = N),
        E)
      ) {
        case 1:
          var Q = -1;
          break;
        case 2:
          Q = 250;
          break;
        case 5:
          Q = 1073741823;
          break;
        case 4:
          Q = 1e4;
          break;
        default:
          Q = 5e3;
      }
      return (
        (Q = O + Q),
        (E = {
          id: c++,
          callback: M,
          priorityLevel: E,
          startTime: O,
          expirationTime: Q,
          sortIndex: -1,
        }),
        O > N
          ? ((E.sortIndex = O),
            t(u, E),
            n(a) === null &&
              E === n(u) &&
              (w ? (m(_), (_ = -1)) : (w = !0), be(v, O - N)))
          : ((E.sortIndex = Q), t(a, E), y || g || ((y = !0), pe(S))),
        E
      );
    }),
    (e.unstable_shouldYield = K),
    (e.unstable_wrapCallback = function (E) {
      var M = d;
      return function () {
        var O = d;
        d = M;
        try {
          return E.apply(this, arguments);
        } finally {
          d = O;
        }
      };
    });
})(Jf);
(function (e) {
  e.exports = Jf;
})(Bm);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qf = P,
  Oe = Hs;
function x(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
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
var bf = new Set(),
  Ir = {};
function gn(e, t) {
  Gn(e, t), Gn(e + "Capture", t);
}
function Gn(e, t) {
  for (Ir[e] = t, e = 0; e < t.length; e++) bf.add(t[e]);
}
var yt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Gs = Object.prototype.hasOwnProperty,
  Um =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  xu = {},
  Pu = {};
function $m(e) {
  return Gs.call(Pu, e)
    ? !0
    : Gs.call(xu, e)
    ? !1
    : Um.test(e)
    ? (Pu[e] = !0)
    : ((xu[e] = !0), !1);
}
function Wm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Hm(e, t, n, r) {
  if (t === null || typeof t > "u" || Wm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Pe(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    de[e] = new Pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  de[t] = new Pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  de[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  de[e] = new Pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    de[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  de[e] = new Pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  de[e] = new Pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  de[e] = new Pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  de[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ia = /[\-:]([a-z])/g;
function oa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ia, oa);
    de[t] = new Pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ia, oa);
    de[t] = new Pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ia, oa);
  de[t] = new Pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  de[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new Pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  de[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function sa(e, t, n, r) {
  var i = de.hasOwnProperty(t) ? de[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Hm(t, n, i, r) && (n = null),
    r || i === null
      ? $m(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _t = qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gi = Symbol.for("react.element"),
  Pn = Symbol.for("react.portal"),
  kn = Symbol.for("react.fragment"),
  la = Symbol.for("react.strict_mode"),
  Ks = Symbol.for("react.profiler"),
  ed = Symbol.for("react.provider"),
  td = Symbol.for("react.context"),
  aa = Symbol.for("react.forward_ref"),
  Qs = Symbol.for("react.suspense"),
  Ys = Symbol.for("react.suspense_list"),
  ua = Symbol.for("react.memo"),
  kt = Symbol.for("react.lazy"),
  nd = Symbol.for("react.offscreen"),
  ku = Symbol.iterator;
function nr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ku && e[ku]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var J = Object.assign,
  ts;
function gr(e) {
  if (ts === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ts = (t && t[1]) || "";
    }
  return (
    `
` +
    ts +
    e
  );
}
var ns = !1;
function rs(e, t) {
  if (!e || ns) return "";
  ns = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (ns = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? gr(e) : "";
}
function Gm(e) {
  switch (e.tag) {
    case 5:
      return gr(e.type);
    case 16:
      return gr("Lazy");
    case 13:
      return gr("Suspense");
    case 19:
      return gr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = rs(e.type, !1)), e;
    case 11:
      return (e = rs(e.type.render, !1)), e;
    case 1:
      return (e = rs(e.type, !0)), e;
    default:
      return "";
  }
}
function Xs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case kn:
      return "Fragment";
    case Pn:
      return "Portal";
    case Ks:
      return "Profiler";
    case la:
      return "StrictMode";
    case Qs:
      return "Suspense";
    case Ys:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case td:
        return (e.displayName || "Context") + ".Consumer";
      case ed:
        return (e._context.displayName || "Context") + ".Provider";
      case aa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ua:
        return (
          (t = e.displayName || null), t !== null ? t : Xs(e.type) || "Memo"
        );
      case kt:
        (t = e._payload), (e = e._init);
        try {
          return Xs(e(t));
        } catch {}
    }
  return null;
}
function Km(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Xs(t);
    case 8:
      return t === la ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ut(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function rd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Qm(e) {
  var t = rd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function yi(e) {
  e._valueTracker || (e._valueTracker = Qm(e));
}
function id(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = rd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Yi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Zs(e, t) {
  var n = t.checked;
  return J({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Cu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ut(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function od(e, t) {
  (t = t.checked), t != null && sa(e, "checked", t, !1);
}
function Js(e, t) {
  od(e, t);
  var n = Ut(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? qs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && qs(e, t.type, Ut(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Tu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function qs(e, t, n) {
  (t !== "number" || Yi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var yr = Array.isArray;
function zn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ut(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function bs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return J({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Eu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (yr(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ut(n) };
}
function sd(e, t) {
  var n = Ut(t.value),
    r = Ut(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Vu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ld(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function el(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ld(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var vi,
  ad = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        vi = vi || document.createElement("div"),
          vi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = vi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function zr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var _r = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ym = ["Webkit", "ms", "Moz", "O"];
Object.keys(_r).forEach(function (e) {
  Ym.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (_r[t] = _r[e]);
  });
});
function ud(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (_r.hasOwnProperty(e) && _r[e])
    ? ("" + t).trim()
    : t + "px";
}
function cd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = ud(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Xm = J(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function tl(e, t) {
  if (t) {
    if (Xm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function nl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var rl = null;
function ca(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var il = null,
  jn = null,
  Bn = null;
function Lu(e) {
  if ((e = ai(e))) {
    if (typeof il != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = Mo(t)), il(e.stateNode, e.type, t));
  }
}
function fd(e) {
  jn ? (Bn ? Bn.push(e) : (Bn = [e])) : (jn = e);
}
function dd() {
  if (jn) {
    var e = jn,
      t = Bn;
    if (((Bn = jn = null), Lu(e), t)) for (e = 0; e < t.length; e++) Lu(t[e]);
  }
}
function pd(e, t) {
  return e(t);
}
function hd() {}
var is = !1;
function md(e, t, n) {
  if (is) return e(t, n);
  is = !0;
  try {
    return pd(e, t, n);
  } finally {
    (is = !1), (jn !== null || Bn !== null) && (hd(), dd());
  }
}
function jr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Mo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var ol = !1;
if (yt)
  try {
    var rr = {};
    Object.defineProperty(rr, "passive", {
      get: function () {
        ol = !0;
      },
    }),
      window.addEventListener("test", rr, rr),
      window.removeEventListener("test", rr, rr);
  } catch {
    ol = !1;
  }
function Zm(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var xr = !1,
  Xi = null,
  Zi = !1,
  sl = null,
  Jm = {
    onError: function (e) {
      (xr = !0), (Xi = e);
    },
  };
function qm(e, t, n, r, i, o, s, l, a) {
  (xr = !1), (Xi = null), Zm.apply(Jm, arguments);
}
function bm(e, t, n, r, i, o, s, l, a) {
  if ((qm.apply(this, arguments), xr)) {
    if (xr) {
      var u = Xi;
      (xr = !1), (Xi = null);
    } else throw Error(x(198));
    Zi || ((Zi = !0), (sl = u));
  }
}
function yn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function gd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Au(e) {
  if (yn(e) !== e) throw Error(x(188));
}
function eg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = yn(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Au(i), e;
        if (o === r) return Au(i), t;
        o = o.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function yd(e) {
  return (e = eg(e)), e !== null ? vd(e) : null;
}
function vd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = vd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var wd = Oe.unstable_scheduleCallback,
  Ru = Oe.unstable_cancelCallback,
  tg = Oe.unstable_shouldYield,
  ng = Oe.unstable_requestPaint,
  ee = Oe.unstable_now,
  rg = Oe.unstable_getCurrentPriorityLevel,
  fa = Oe.unstable_ImmediatePriority,
  Sd = Oe.unstable_UserBlockingPriority,
  Ji = Oe.unstable_NormalPriority,
  ig = Oe.unstable_LowPriority,
  _d = Oe.unstable_IdlePriority,
  Lo = null,
  ot = null;
function og(e) {
  if (ot && typeof ot.onCommitFiberRoot == "function")
    try {
      ot.onCommitFiberRoot(Lo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ze = Math.clz32 ? Math.clz32 : ag,
  sg = Math.log,
  lg = Math.LN2;
function ag(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((sg(e) / lg) | 0)) | 0;
}
var wi = 64,
  Si = 4194304;
function vr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function qi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = vr(l)) : ((o &= s), o !== 0 && (r = vr(o)));
  } else (s = n & ~i), s !== 0 ? (r = vr(s)) : o !== 0 && (r = vr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ze(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function ug(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function cg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Ze(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = ug(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function ll(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function xd() {
  var e = wi;
  return (wi <<= 1), !(wi & 4194240) && (wi = 64), e;
}
function os(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function si(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ze(t)),
    (e[t] = n);
}
function fg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ze(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function da(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var B = 0;
function Pd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var kd,
  pa,
  Cd,
  Td,
  Ed,
  al = !1,
  _i = [],
  Rt = null,
  Dt = null,
  Mt = null,
  Br = new Map(),
  Ur = new Map(),
  Et = [],
  dg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Du(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Rt = null;
      break;
    case "dragenter":
    case "dragleave":
      Dt = null;
      break;
    case "mouseover":
    case "mouseout":
      Mt = null;
      break;
    case "pointerover":
    case "pointerout":
      Br.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ur.delete(t.pointerId);
  }
}
function ir(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ai(t)), t !== null && pa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function pg(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Rt = ir(Rt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Dt = ir(Dt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Mt = ir(Mt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Br.set(o, ir(Br.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Ur.set(o, ir(Ur.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Vd(e) {
  var t = rn(e.target);
  if (t !== null) {
    var n = yn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = gd(n)), t !== null)) {
          (e.blockedOn = t),
            Ed(e.priority, function () {
              Cd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ii(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ul(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (rl = r), n.target.dispatchEvent(r), (rl = null);
    } else return (t = ai(n)), t !== null && pa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Mu(e, t, n) {
  Ii(e) && n.delete(t);
}
function hg() {
  (al = !1),
    Rt !== null && Ii(Rt) && (Rt = null),
    Dt !== null && Ii(Dt) && (Dt = null),
    Mt !== null && Ii(Mt) && (Mt = null),
    Br.forEach(Mu),
    Ur.forEach(Mu);
}
function or(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    al ||
      ((al = !0),
      Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, hg)));
}
function $r(e) {
  function t(i) {
    return or(i, e);
  }
  if (0 < _i.length) {
    or(_i[0], e);
    for (var n = 1; n < _i.length; n++) {
      var r = _i[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Rt !== null && or(Rt, e),
      Dt !== null && or(Dt, e),
      Mt !== null && or(Mt, e),
      Br.forEach(t),
      Ur.forEach(t),
      n = 0;
    n < Et.length;
    n++
  )
    (r = Et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Et.length && ((n = Et[0]), n.blockedOn === null); )
    Vd(n), n.blockedOn === null && Et.shift();
}
var Un = _t.ReactCurrentBatchConfig,
  bi = !0;
function mg(e, t, n, r) {
  var i = B,
    o = Un.transition;
  Un.transition = null;
  try {
    (B = 1), ha(e, t, n, r);
  } finally {
    (B = i), (Un.transition = o);
  }
}
function gg(e, t, n, r) {
  var i = B,
    o = Un.transition;
  Un.transition = null;
  try {
    (B = 4), ha(e, t, n, r);
  } finally {
    (B = i), (Un.transition = o);
  }
}
function ha(e, t, n, r) {
  if (bi) {
    var i = ul(e, t, n, r);
    if (i === null) ms(e, t, r, eo, n), Du(e, r);
    else if (pg(i, e, t, n, r)) r.stopPropagation();
    else if ((Du(e, r), t & 4 && -1 < dg.indexOf(e))) {
      for (; i !== null; ) {
        var o = ai(i);
        if (
          (o !== null && kd(o),
          (o = ul(e, t, n, r)),
          o === null && ms(e, t, r, eo, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else ms(e, t, r, null, n);
  }
}
var eo = null;
function ul(e, t, n, r) {
  if (((eo = null), (e = ca(r)), (e = rn(e)), e !== null))
    if (((t = yn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = gd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (eo = e), null;
}
function Ld(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (rg()) {
        case fa:
          return 1;
        case Sd:
          return 4;
        case Ji:
        case ig:
          return 16;
        case _d:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Lt = null,
  ma = null,
  zi = null;
function Ad() {
  if (zi) return zi;
  var e,
    t = ma,
    n = t.length,
    r,
    i = "value" in Lt ? Lt.value : Lt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (zi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ji(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function xi() {
  return !0;
}
function Nu() {
  return !1;
}
function ze(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? xi
        : Nu),
      (this.isPropagationStopped = Nu),
      this
    );
  }
  return (
    J(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = xi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = xi));
      },
      persist: function () {},
      isPersistent: xi,
    }),
    t
  );
}
var er = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ga = ze(er),
  li = J({}, er, { view: 0, detail: 0 }),
  yg = ze(li),
  ss,
  ls,
  sr,
  Ao = J({}, li, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ya,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== sr &&
            (sr && e.type === "mousemove"
              ? ((ss = e.screenX - sr.screenX), (ls = e.screenY - sr.screenY))
              : (ls = ss = 0),
            (sr = e)),
          ss);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ls;
    },
  }),
  Ou = ze(Ao),
  vg = J({}, Ao, { dataTransfer: 0 }),
  wg = ze(vg),
  Sg = J({}, li, { relatedTarget: 0 }),
  as = ze(Sg),
  _g = J({}, er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xg = ze(_g),
  Pg = J({}, er, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  kg = ze(Pg),
  Cg = J({}, er, { data: 0 }),
  Fu = ze(Cg),
  Tg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Eg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Vg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Lg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Vg[e]) ? !!t[e] : !1;
}
function ya() {
  return Lg;
}
var Ag = J({}, li, {
    key: function (e) {
      if (e.key) {
        var t = Tg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ji(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Eg[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ya,
    charCode: function (e) {
      return e.type === "keypress" ? ji(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ji(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Rg = ze(Ag),
  Dg = J({}, Ao, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Iu = ze(Dg),
  Mg = J({}, li, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ya,
  }),
  Ng = ze(Mg),
  Og = J({}, er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Fg = ze(Og),
  Ig = J({}, Ao, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  zg = ze(Ig),
  jg = [9, 13, 27, 32],
  va = yt && "CompositionEvent" in window,
  Pr = null;
yt && "documentMode" in document && (Pr = document.documentMode);
var Bg = yt && "TextEvent" in window && !Pr,
  Rd = yt && (!va || (Pr && 8 < Pr && 11 >= Pr)),
  zu = String.fromCharCode(32),
  ju = !1;
function Dd(e, t) {
  switch (e) {
    case "keyup":
      return jg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Md(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Cn = !1;
function Ug(e, t) {
  switch (e) {
    case "compositionend":
      return Md(t);
    case "keypress":
      return t.which !== 32 ? null : ((ju = !0), zu);
    case "textInput":
      return (e = t.data), e === zu && ju ? null : e;
    default:
      return null;
  }
}
function $g(e, t) {
  if (Cn)
    return e === "compositionend" || (!va && Dd(e, t))
      ? ((e = Ad()), (zi = ma = Lt = null), (Cn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Rd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Wg = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Bu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Wg[e.type] : t === "textarea";
}
function Nd(e, t, n, r) {
  fd(r),
    (t = to(t, "onChange")),
    0 < t.length &&
      ((n = new ga("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var kr = null,
  Wr = null;
function Hg(e) {
  Gd(e, 0);
}
function Ro(e) {
  var t = Vn(e);
  if (id(t)) return e;
}
function Gg(e, t) {
  if (e === "change") return t;
}
var Od = !1;
if (yt) {
  var us;
  if (yt) {
    var cs = "oninput" in document;
    if (!cs) {
      var Uu = document.createElement("div");
      Uu.setAttribute("oninput", "return;"),
        (cs = typeof Uu.oninput == "function");
    }
    us = cs;
  } else us = !1;
  Od = us && (!document.documentMode || 9 < document.documentMode);
}
function $u() {
  kr && (kr.detachEvent("onpropertychange", Fd), (Wr = kr = null));
}
function Fd(e) {
  if (e.propertyName === "value" && Ro(Wr)) {
    var t = [];
    Nd(t, Wr, e, ca(e)), md(Hg, t);
  }
}
function Kg(e, t, n) {
  e === "focusin"
    ? ($u(), (kr = t), (Wr = n), kr.attachEvent("onpropertychange", Fd))
    : e === "focusout" && $u();
}
function Qg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ro(Wr);
}
function Yg(e, t) {
  if (e === "click") return Ro(t);
}
function Xg(e, t) {
  if (e === "input" || e === "change") return Ro(t);
}
function Zg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var qe = typeof Object.is == "function" ? Object.is : Zg;
function Hr(e, t) {
  if (qe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Gs.call(t, i) || !qe(e[i], t[i])) return !1;
  }
  return !0;
}
function Wu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Hu(e, t) {
  var n = Wu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Wu(n);
  }
}
function Id(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Id(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function zd() {
  for (var e = window, t = Yi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Yi(e.document);
  }
  return t;
}
function wa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Jg(e) {
  var t = zd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Id(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && wa(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Hu(n, o));
        var s = Hu(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var qg = yt && "documentMode" in document && 11 >= document.documentMode,
  Tn = null,
  cl = null,
  Cr = null,
  fl = !1;
function Gu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fl ||
    Tn == null ||
    Tn !== Yi(r) ||
    ((r = Tn),
    "selectionStart" in r && wa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Cr && Hr(Cr, r)) ||
      ((Cr = r),
      (r = to(cl, "onSelect")),
      0 < r.length &&
        ((t = new ga("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Tn))));
}
function Pi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var En = {
    animationend: Pi("Animation", "AnimationEnd"),
    animationiteration: Pi("Animation", "AnimationIteration"),
    animationstart: Pi("Animation", "AnimationStart"),
    transitionend: Pi("Transition", "TransitionEnd"),
  },
  fs = {},
  jd = {};
yt &&
  ((jd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete En.animationend.animation,
    delete En.animationiteration.animation,
    delete En.animationstart.animation),
  "TransitionEvent" in window || delete En.transitionend.transition);
function Do(e) {
  if (fs[e]) return fs[e];
  if (!En[e]) return e;
  var t = En[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in jd) return (fs[e] = t[n]);
  return e;
}
var Bd = Do("animationend"),
  Ud = Do("animationiteration"),
  $d = Do("animationstart"),
  Wd = Do("transitionend"),
  Hd = new Map(),
  Ku =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Gt(e, t) {
  Hd.set(e, t), gn(t, [e]);
}
for (var ds = 0; ds < Ku.length; ds++) {
  var ps = Ku[ds],
    bg = ps.toLowerCase(),
    ey = ps[0].toUpperCase() + ps.slice(1);
  Gt(bg, "on" + ey);
}
Gt(Bd, "onAnimationEnd");
Gt(Ud, "onAnimationIteration");
Gt($d, "onAnimationStart");
Gt("dblclick", "onDoubleClick");
Gt("focusin", "onFocus");
Gt("focusout", "onBlur");
Gt(Wd, "onTransitionEnd");
Gn("onMouseEnter", ["mouseout", "mouseover"]);
Gn("onMouseLeave", ["mouseout", "mouseover"]);
Gn("onPointerEnter", ["pointerout", "pointerover"]);
Gn("onPointerLeave", ["pointerout", "pointerover"]);
gn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
gn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
gn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
gn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
gn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var wr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ty = new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));
function Qu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), bm(r, t, void 0, e), (e.currentTarget = null);
}
function Gd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          Qu(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          Qu(i, l, u), (o = a);
        }
    }
  }
  if (Zi) throw ((e = sl), (Zi = !1), (sl = null), e);
}
function $(e, t) {
  var n = t[gl];
  n === void 0 && (n = t[gl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Kd(t, e, 2, !1), n.add(r));
}
function hs(e, t, n) {
  var r = 0;
  t && (r |= 4), Kd(n, e, r, t);
}
var ki = "_reactListening" + Math.random().toString(36).slice(2);
function Gr(e) {
  if (!e[ki]) {
    (e[ki] = !0),
      bf.forEach(function (n) {
        n !== "selectionchange" && (ty.has(n) || hs(n, !1, e), hs(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ki] || ((t[ki] = !0), hs("selectionchange", !1, t));
  }
}
function Kd(e, t, n, r) {
  switch (Ld(t)) {
    case 1:
      var i = mg;
      break;
    case 4:
      i = gg;
      break;
    default:
      i = ha;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ol ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function ms(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = rn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  md(function () {
    var u = o,
      c = ca(n),
      f = [];
    e: {
      var d = Hd.get(e);
      if (d !== void 0) {
        var g = ga,
          y = e;
        switch (e) {
          case "keypress":
            if (ji(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Rg;
            break;
          case "focusin":
            (y = "focus"), (g = as);
            break;
          case "focusout":
            (y = "blur"), (g = as);
            break;
          case "beforeblur":
          case "afterblur":
            g = as;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Ou;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = wg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Ng;
            break;
          case Bd:
          case Ud:
          case $d:
            g = xg;
            break;
          case Wd:
            g = Fg;
            break;
          case "scroll":
            g = yg;
            break;
          case "wheel":
            g = zg;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = kg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Iu;
        }
        var w = (t & 4) !== 0,
          k = !w && e === "scroll",
          m = w ? (d !== null ? d + "Capture" : null) : d;
        w = [];
        for (var p = u, h; p !== null; ) {
          h = p;
          var v = h.stateNode;
          if (
            (h.tag === 5 &&
              v !== null &&
              ((h = v),
              m !== null && ((v = jr(p, m)), v != null && w.push(Kr(p, v, h)))),
            k)
          )
            break;
          p = p.return;
        }
        0 < w.length &&
          ((d = new g(d, y, null, n, c)), f.push({ event: d, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          d &&
            n !== rl &&
            (y = n.relatedTarget || n.fromElement) &&
            (rn(y) || y[vt]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? rn(y) : null),
              y !== null &&
                ((k = yn(y)), y !== k || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((w = Ou),
            (v = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Iu),
              (v = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (k = g == null ? d : Vn(g)),
            (h = y == null ? d : Vn(y)),
            (d = new w(v, p + "leave", g, n, c)),
            (d.target = k),
            (d.relatedTarget = h),
            (v = null),
            rn(c) === u &&
              ((w = new w(m, p + "enter", y, n, c)),
              (w.target = h),
              (w.relatedTarget = k),
              (v = w)),
            (k = v),
            g && y)
          )
            t: {
              for (w = g, m = y, p = 0, h = w; h; h = _n(h)) p++;
              for (h = 0, v = m; v; v = _n(v)) h++;
              for (; 0 < p - h; ) (w = _n(w)), p--;
              for (; 0 < h - p; ) (m = _n(m)), h--;
              for (; p--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                (w = _n(w)), (m = _n(m));
              }
              w = null;
            }
          else w = null;
          g !== null && Yu(f, d, g, w, !1),
            y !== null && k !== null && Yu(f, k, y, w, !0);
        }
      }
      e: {
        if (
          ((d = u ? Vn(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var S = Gg;
        else if (Bu(d))
          if (Od) S = Xg;
          else {
            S = Qg;
            var T = Kg;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (S = Yg);
        if (S && (S = S(e, u))) {
          Nd(f, S, n, c);
          break e;
        }
        T && T(e, d, u),
          e === "focusout" &&
            (T = d._wrapperState) &&
            T.controlled &&
            d.type === "number" &&
            qs(d, "number", d.value);
      }
      switch (((T = u ? Vn(u) : window), e)) {
        case "focusin":
          (Bu(T) || T.contentEditable === "true") &&
            ((Tn = T), (cl = u), (Cr = null));
          break;
        case "focusout":
          Cr = cl = Tn = null;
          break;
        case "mousedown":
          fl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (fl = !1), Gu(f, n, c);
          break;
        case "selectionchange":
          if (qg) break;
        case "keydown":
        case "keyup":
          Gu(f, n, c);
      }
      var C;
      if (va)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        Cn
          ? Dd(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (Rd &&
          n.locale !== "ko" &&
          (Cn || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && Cn && (C = Ad())
            : ((Lt = c),
              (ma = "value" in Lt ? Lt.value : Lt.textContent),
              (Cn = !0))),
        (T = to(u, _)),
        0 < T.length &&
          ((_ = new Fu(_, e, null, n, c)),
          f.push({ event: _, listeners: T }),
          C ? (_.data = C) : ((C = Md(n)), C !== null && (_.data = C)))),
        (C = Bg ? Ug(e, n) : $g(e, n)) &&
          ((u = to(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Fu("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    Gd(f, t);
  });
}
function Kr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function to(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = jr(e, n)),
      o != null && r.unshift(Kr(e, o, i)),
      (o = jr(e, t)),
      o != null && r.push(Kr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function _n(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Yu(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = jr(n, o)), a != null && s.unshift(Kr(n, a, l)))
        : i || ((a = jr(n, o)), a != null && s.push(Kr(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var ny = /\r\n?/g,
  ry = /\u0000|\uFFFD/g;
function Xu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ny,
      `
`
    )
    .replace(ry, "");
}
function Ci(e, t, n) {
  if (((t = Xu(t)), Xu(e) !== t && n)) throw Error(x(425));
}
function no() {}
var dl = null,
  pl = null;
function hl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ml = typeof setTimeout == "function" ? setTimeout : void 0,
  iy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Zu = typeof Promise == "function" ? Promise : void 0,
  oy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Zu < "u"
      ? function (e) {
          return Zu.resolve(null).then(e).catch(sy);
        }
      : ml;
function sy(e) {
  setTimeout(function () {
    throw e;
  });
}
function gs(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), $r(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  $r(t);
}
function Nt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ju(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var tr = Math.random().toString(36).slice(2),
  it = "__reactFiber$" + tr,
  Qr = "__reactProps$" + tr,
  vt = "__reactContainer$" + tr,
  gl = "__reactEvents$" + tr,
  ly = "__reactListeners$" + tr,
  ay = "__reactHandles$" + tr;
function rn(e) {
  var t = e[it];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[vt] || n[it])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ju(e); e !== null; ) {
          if ((n = e[it])) return n;
          e = Ju(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ai(e) {
  return (
    (e = e[it] || e[vt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Vn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function Mo(e) {
  return e[Qr] || null;
}
var yl = [],
  Ln = -1;
function Kt(e) {
  return { current: e };
}
function W(e) {
  0 > Ln || ((e.current = yl[Ln]), (yl[Ln] = null), Ln--);
}
function U(e, t) {
  Ln++, (yl[Ln] = e.current), (e.current = t);
}
var $t = {},
  ve = Kt($t),
  Te = Kt(!1),
  cn = $t;
function Kn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return $t;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ee(e) {
  return (e = e.childContextTypes), e != null;
}
function ro() {
  W(Te), W(ve);
}
function qu(e, t, n) {
  if (ve.current !== $t) throw Error(x(168));
  U(ve, t), U(Te, n);
}
function Qd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(x(108, Km(e) || "Unknown", i));
  return J({}, n, r);
}
function io(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || $t),
    (cn = ve.current),
    U(ve, e),
    U(Te, Te.current),
    !0
  );
}
function bu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = Qd(e, t, cn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(Te),
      W(ve),
      U(ve, e))
    : W(Te),
    U(Te, n);
}
var ut = null,
  No = !1,
  ys = !1;
function Yd(e) {
  ut === null ? (ut = [e]) : ut.push(e);
}
function uy(e) {
  (No = !0), Yd(e);
}
function Qt() {
  if (!ys && ut !== null) {
    ys = !0;
    var e = 0,
      t = B;
    try {
      var n = ut;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ut = null), (No = !1);
    } catch (i) {
      throw (ut !== null && (ut = ut.slice(e + 1)), wd(fa, Qt), i);
    } finally {
      (B = t), (ys = !1);
    }
  }
  return null;
}
var An = [],
  Rn = 0,
  oo = null,
  so = 0,
  Be = [],
  Ue = 0,
  fn = null,
  ct = 1,
  ft = "";
function bt(e, t) {
  (An[Rn++] = so), (An[Rn++] = oo), (oo = e), (so = t);
}
function Xd(e, t, n) {
  (Be[Ue++] = ct), (Be[Ue++] = ft), (Be[Ue++] = fn), (fn = e);
  var r = ct;
  e = ft;
  var i = 32 - Ze(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Ze(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (ct = (1 << (32 - Ze(t) + i)) | (n << i) | r),
      (ft = o + e);
  } else (ct = (1 << o) | (n << i) | r), (ft = e);
}
function Sa(e) {
  e.return !== null && (bt(e, 1), Xd(e, 1, 0));
}
function _a(e) {
  for (; e === oo; )
    (oo = An[--Rn]), (An[Rn] = null), (so = An[--Rn]), (An[Rn] = null);
  for (; e === fn; )
    (fn = Be[--Ue]),
      (Be[Ue] = null),
      (ft = Be[--Ue]),
      (Be[Ue] = null),
      (ct = Be[--Ue]),
      (Be[Ue] = null);
}
var Ne = null,
  Me = null,
  H = !1,
  Xe = null;
function Zd(e, t) {
  var n = $e(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ec(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ne = e), (Me = Nt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ne = e), (Me = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = fn !== null ? { id: ct, overflow: ft } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = $e(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ne = e),
            (Me = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function vl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wl(e) {
  if (H) {
    var t = Me;
    if (t) {
      var n = t;
      if (!ec(e, t)) {
        if (vl(e)) throw Error(x(418));
        t = Nt(n.nextSibling);
        var r = Ne;
        t && ec(e, t)
          ? Zd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (Ne = e));
      }
    } else {
      if (vl(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (Ne = e);
    }
  }
}
function tc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ne = e;
}
function Ti(e) {
  if (e !== Ne) return !1;
  if (!H) return tc(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !hl(e.type, e.memoizedProps))),
    t && (t = Me))
  ) {
    if (vl(e)) throw (Jd(), Error(x(418)));
    for (; t; ) Zd(e, t), (t = Nt(t.nextSibling));
  }
  if ((tc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Me = Nt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Me = null;
    }
  } else Me = Ne ? Nt(e.stateNode.nextSibling) : null;
  return !0;
}
function Jd() {
  for (var e = Me; e; ) e = Nt(e.nextSibling);
}
function Qn() {
  (Me = Ne = null), (H = !1);
}
function xa(e) {
  Xe === null ? (Xe = [e]) : Xe.push(e);
}
var cy = _t.ReactCurrentBatchConfig;
function Qe(e, t) {
  if (e && e.defaultProps) {
    (t = J({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var lo = Kt(null),
  ao = null,
  Dn = null,
  Pa = null;
function ka() {
  Pa = Dn = ao = null;
}
function Ca(e) {
  var t = lo.current;
  W(lo), (e._currentValue = t);
}
function Sl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function $n(e, t) {
  (ao = e),
    (Pa = Dn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ce = !0), (e.firstContext = null));
}
function He(e) {
  var t = e._currentValue;
  if (Pa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Dn === null)) {
      if (ao === null) throw Error(x(308));
      (Dn = e), (ao.dependencies = { lanes: 0, firstContext: e });
    } else Dn = Dn.next = e;
  return t;
}
var on = null;
function Ta(e) {
  on === null ? (on = [e]) : on.push(e);
}
function qd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Ta(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    wt(e, r)
  );
}
function wt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ct = !1;
function Ea(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function bd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function pt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      wt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ta(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    wt(e, n)
  );
}
function Bi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), da(e, n);
  }
}
function nc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function uo(e, t, n, r) {
  var i = e.updateQueue;
  Ct = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = a = null), (l = o);
    do {
      var d = l.lane,
        g = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            w = l;
          switch (((d = t), (g = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                f = y.call(g, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (d = typeof y == "function" ? y.call(g, f, d) : y),
                d == null)
              )
                break e;
              f = J({}, f, d);
              break e;
            case 2:
              Ct = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (a = f)) : (c = c.next = g),
          (s |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (pn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function rc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(x(191, i));
        i.call(r);
      }
    }
}
var ep = new qf.Component().refs;
function _l(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : J({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Oo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? yn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = _e(),
      i = It(e),
      o = pt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Ot(e, o, i)),
      t !== null && (Je(t, e, i, r), Bi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = _e(),
      i = It(e),
      o = pt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ot(e, o, i)),
      t !== null && (Je(t, e, i, r), Bi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = _e(),
      r = It(e),
      i = pt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Ot(e, i, r)),
      t !== null && (Je(t, e, r, n), Bi(t, e, r));
  },
};
function ic(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Hr(n, r) || !Hr(i, o)
      : !0
  );
}
function tp(e, t, n) {
  var r = !1,
    i = $t,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = He(o))
      : ((i = Ee(t) ? cn : ve.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Kn(e, i) : $t)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Oo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function oc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Oo.enqueueReplaceState(t, t.state, null);
}
function xl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = ep), Ea(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = He(o))
    : ((o = Ee(t) ? cn : ve.current), (i.context = Kn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (_l(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Oo.enqueueReplaceState(i, i.state, null),
      uo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function lr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === ep && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function Ei(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function sc(e) {
  var t = e._init;
  return t(e._payload);
}
function np(e) {
  function t(m, p) {
    if (e) {
      var h = m.deletions;
      h === null ? ((m.deletions = [p]), (m.flags |= 16)) : h.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function i(m, p) {
    return (m = zt(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, p, h) {
    return (
      (m.index = h),
      e
        ? ((h = m.alternate),
          h !== null
            ? ((h = h.index), h < p ? ((m.flags |= 2), p) : h)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, p, h, v) {
    return p === null || p.tag !== 6
      ? ((p = ks(h, m.mode, v)), (p.return = m), p)
      : ((p = i(p, h)), (p.return = m), p);
  }
  function a(m, p, h, v) {
    var S = h.type;
    return S === kn
      ? c(m, p, h.props.children, v, h.key)
      : p !== null &&
        (p.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === kt &&
            sc(S) === p.type))
      ? ((v = i(p, h.props)), (v.ref = lr(m, p, h)), (v.return = m), v)
      : ((v = Ki(h.type, h.key, h.props, null, m.mode, v)),
        (v.ref = lr(m, p, h)),
        (v.return = m),
        v);
  }
  function u(m, p, h, v) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== h.containerInfo ||
      p.stateNode.implementation !== h.implementation
      ? ((p = Cs(h, m.mode, v)), (p.return = m), p)
      : ((p = i(p, h.children || [])), (p.return = m), p);
  }
  function c(m, p, h, v, S) {
    return p === null || p.tag !== 7
      ? ((p = un(h, m.mode, v, S)), (p.return = m), p)
      : ((p = i(p, h)), (p.return = m), p);
  }
  function f(m, p, h) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = ks("" + p, m.mode, h)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case gi:
          return (
            (h = Ki(p.type, p.key, p.props, null, m.mode, h)),
            (h.ref = lr(m, null, p)),
            (h.return = m),
            h
          );
        case Pn:
          return (p = Cs(p, m.mode, h)), (p.return = m), p;
        case kt:
          var v = p._init;
          return f(m, v(p._payload), h);
      }
      if (yr(p) || nr(p))
        return (p = un(p, m.mode, h, null)), (p.return = m), p;
      Ei(m, p);
    }
    return null;
  }
  function d(m, p, h, v) {
    var S = p !== null ? p.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return S !== null ? null : l(m, p, "" + h, v);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case gi:
          return h.key === S ? a(m, p, h, v) : null;
        case Pn:
          return h.key === S ? u(m, p, h, v) : null;
        case kt:
          return (S = h._init), d(m, p, S(h._payload), v);
      }
      if (yr(h) || nr(h)) return S !== null ? null : c(m, p, h, v, null);
      Ei(m, h);
    }
    return null;
  }
  function g(m, p, h, v, S) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (m = m.get(h) || null), l(p, m, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case gi:
          return (m = m.get(v.key === null ? h : v.key) || null), a(p, m, v, S);
        case Pn:
          return (m = m.get(v.key === null ? h : v.key) || null), u(p, m, v, S);
        case kt:
          var T = v._init;
          return g(m, p, h, T(v._payload), S);
      }
      if (yr(v) || nr(v)) return (m = m.get(h) || null), c(p, m, v, S, null);
      Ei(p, v);
    }
    return null;
  }
  function y(m, p, h, v) {
    for (
      var S = null, T = null, C = p, _ = (p = 0), D = null;
      C !== null && _ < h.length;
      _++
    ) {
      C.index > _ ? ((D = C), (C = null)) : (D = C.sibling);
      var R = d(m, C, h[_], v);
      if (R === null) {
        C === null && (C = D);
        break;
      }
      e && C && R.alternate === null && t(m, C),
        (p = o(R, p, _)),
        T === null ? (S = R) : (T.sibling = R),
        (T = R),
        (C = D);
    }
    if (_ === h.length) return n(m, C), H && bt(m, _), S;
    if (C === null) {
      for (; _ < h.length; _++)
        (C = f(m, h[_], v)),
          C !== null &&
            ((p = o(C, p, _)), T === null ? (S = C) : (T.sibling = C), (T = C));
      return H && bt(m, _), S;
    }
    for (C = r(m, C); _ < h.length; _++)
      (D = g(C, m, _, h[_], v)),
        D !== null &&
          (e && D.alternate !== null && C.delete(D.key === null ? _ : D.key),
          (p = o(D, p, _)),
          T === null ? (S = D) : (T.sibling = D),
          (T = D));
    return (
      e &&
        C.forEach(function (K) {
          return t(m, K);
        }),
      H && bt(m, _),
      S
    );
  }
  function w(m, p, h, v) {
    var S = nr(h);
    if (typeof S != "function") throw Error(x(150));
    if (((h = S.call(h)), h == null)) throw Error(x(151));
    for (
      var T = (S = null), C = p, _ = (p = 0), D = null, R = h.next();
      C !== null && !R.done;
      _++, R = h.next()
    ) {
      C.index > _ ? ((D = C), (C = null)) : (D = C.sibling);
      var K = d(m, C, R.value, v);
      if (K === null) {
        C === null && (C = D);
        break;
      }
      e && C && K.alternate === null && t(m, C),
        (p = o(K, p, _)),
        T === null ? (S = K) : (T.sibling = K),
        (T = K),
        (C = D);
    }
    if (R.done) return n(m, C), H && bt(m, _), S;
    if (C === null) {
      for (; !R.done; _++, R = h.next())
        (R = f(m, R.value, v)),
          R !== null &&
            ((p = o(R, p, _)), T === null ? (S = R) : (T.sibling = R), (T = R));
      return H && bt(m, _), S;
    }
    for (C = r(m, C); !R.done; _++, R = h.next())
      (R = g(C, m, _, R.value, v)),
        R !== null &&
          (e && R.alternate !== null && C.delete(R.key === null ? _ : R.key),
          (p = o(R, p, _)),
          T === null ? (S = R) : (T.sibling = R),
          (T = R));
    return (
      e &&
        C.forEach(function (se) {
          return t(m, se);
        }),
      H && bt(m, _),
      S
    );
  }
  function k(m, p, h, v) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === kn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case gi:
          e: {
            for (var S = h.key, T = p; T !== null; ) {
              if (T.key === S) {
                if (((S = h.type), S === kn)) {
                  if (T.tag === 7) {
                    n(m, T.sibling),
                      (p = i(T, h.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  T.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === kt &&
                    sc(S) === T.type)
                ) {
                  n(m, T.sibling),
                    (p = i(T, h.props)),
                    (p.ref = lr(m, T, h)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, T);
                break;
              } else t(m, T);
              T = T.sibling;
            }
            h.type === kn
              ? ((p = un(h.props.children, m.mode, v, h.key)),
                (p.return = m),
                (m = p))
              : ((v = Ki(h.type, h.key, h.props, null, m.mode, v)),
                (v.ref = lr(m, p, h)),
                (v.return = m),
                (m = v));
          }
          return s(m);
        case Pn:
          e: {
            for (T = h.key; p !== null; ) {
              if (p.key === T)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === h.containerInfo &&
                  p.stateNode.implementation === h.implementation
                ) {
                  n(m, p.sibling),
                    (p = i(p, h.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = Cs(h, m.mode, v)), (p.return = m), (m = p);
          }
          return s(m);
        case kt:
          return (T = h._init), k(m, p, T(h._payload), v);
      }
      if (yr(h)) return y(m, p, h, v);
      if (nr(h)) return w(m, p, h, v);
      Ei(m, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, h)), (p.return = m), (m = p))
          : (n(m, p), (p = ks(h, m.mode, v)), (p.return = m), (m = p)),
        s(m))
      : n(m, p);
  }
  return k;
}
var Yn = np(!0),
  rp = np(!1),
  ui = {},
  st = Kt(ui),
  Yr = Kt(ui),
  Xr = Kt(ui);
function sn(e) {
  if (e === ui) throw Error(x(174));
  return e;
}
function Va(e, t) {
  switch ((U(Xr, t), U(Yr, e), U(st, ui), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : el(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = el(t, e));
  }
  W(st), U(st, t);
}
function Xn() {
  W(st), W(Yr), W(Xr);
}
function ip(e) {
  sn(Xr.current);
  var t = sn(st.current),
    n = el(t, e.type);
  t !== n && (U(Yr, e), U(st, n));
}
function La(e) {
  Yr.current === e && (W(st), W(Yr));
}
var Y = Kt(0);
function co(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var vs = [];
function Aa() {
  for (var e = 0; e < vs.length; e++)
    vs[e]._workInProgressVersionPrimary = null;
  vs.length = 0;
}
var Ui = _t.ReactCurrentDispatcher,
  ws = _t.ReactCurrentBatchConfig,
  dn = 0,
  Z = null,
  ie = null,
  le = null,
  fo = !1,
  Tr = !1,
  Zr = 0,
  fy = 0;
function he() {
  throw Error(x(321));
}
function Ra(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!qe(e[n], t[n])) return !1;
  return !0;
}
function Da(e, t, n, r, i, o) {
  if (
    ((dn = o),
    (Z = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ui.current = e === null || e.memoizedState === null ? my : gy),
    (e = n(r, i)),
    Tr)
  ) {
    o = 0;
    do {
      if (((Tr = !1), (Zr = 0), 25 <= o)) throw Error(x(301));
      (o += 1),
        (le = ie = null),
        (t.updateQueue = null),
        (Ui.current = yy),
        (e = n(r, i));
    } while (Tr);
  }
  if (
    ((Ui.current = po),
    (t = ie !== null && ie.next !== null),
    (dn = 0),
    (le = ie = Z = null),
    (fo = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function Ma() {
  var e = Zr !== 0;
  return (Zr = 0), e;
}
function nt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return le === null ? (Z.memoizedState = le = e) : (le = le.next = e), le;
}
function Ge() {
  if (ie === null) {
    var e = Z.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ie.next;
  var t = le === null ? Z.memoizedState : le.next;
  if (t !== null) (le = t), (ie = e);
  else {
    if (e === null) throw Error(x(310));
    (ie = e),
      (e = {
        memoizedState: ie.memoizedState,
        baseState: ie.baseState,
        baseQueue: ie.baseQueue,
        queue: ie.queue,
        next: null,
      }),
      le === null ? (Z.memoizedState = le = e) : (le = le.next = e);
  }
  return le;
}
function Jr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ss(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = ie,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = o;
    do {
      var c = u.lane;
      if ((dn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (Z.lanes |= c),
          (pn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      qe(r, t.memoizedState) || (Ce = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Z.lanes |= o), (pn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function _s(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    qe(o, t.memoizedState) || (Ce = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function op() {}
function sp(e, t) {
  var n = Z,
    r = Ge(),
    i = t(),
    o = !qe(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ce = !0)),
    (r = r.queue),
    Na(up.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      qr(9, ap.bind(null, n, r, i, t), void 0, null),
      ue === null)
    )
      throw Error(x(349));
    dn & 30 || lp(n, t, i);
  }
  return i;
}
function lp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ap(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), cp(t) && fp(e);
}
function up(e, t, n) {
  return n(function () {
    cp(t) && fp(e);
  });
}
function cp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qe(e, n);
  } catch {
    return !0;
  }
}
function fp(e) {
  var t = wt(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function lc(e) {
  var t = nt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Jr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = hy.bind(null, Z, e)),
    [t.memoizedState, e]
  );
}
function qr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function dp() {
  return Ge().memoizedState;
}
function $i(e, t, n, r) {
  var i = nt();
  (Z.flags |= e),
    (i.memoizedState = qr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Fo(e, t, n, r) {
  var i = Ge();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ie !== null) {
    var s = ie.memoizedState;
    if (((o = s.destroy), r !== null && Ra(r, s.deps))) {
      i.memoizedState = qr(t, n, o, r);
      return;
    }
  }
  (Z.flags |= e), (i.memoizedState = qr(1 | t, n, o, r));
}
function ac(e, t) {
  return $i(8390656, 8, e, t);
}
function Na(e, t) {
  return Fo(2048, 8, e, t);
}
function pp(e, t) {
  return Fo(4, 2, e, t);
}
function hp(e, t) {
  return Fo(4, 4, e, t);
}
function mp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function gp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Fo(4, 4, mp.bind(null, t, e), n)
  );
}
function Oa() {}
function yp(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ra(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function vp(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ra(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function wp(e, t, n) {
  return dn & 21
    ? (qe(n, t) || ((n = xd()), (Z.lanes |= n), (pn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = n));
}
function dy(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ws.transition;
  ws.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (ws.transition = r);
  }
}
function Sp() {
  return Ge().memoizedState;
}
function py(e, t, n) {
  var r = It(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    _p(e))
  )
    xp(t, n);
  else if (((n = qd(e, t, n, r)), n !== null)) {
    var i = _e();
    Je(n, e, r, i), Pp(n, t, r);
  }
}
function hy(e, t, n) {
  var r = It(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_p(e)) xp(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), qe(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Ta(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = qd(e, t, i, r)),
      n !== null && ((i = _e()), Je(n, e, r, i), Pp(n, t, r));
  }
}
function _p(e) {
  var t = e.alternate;
  return e === Z || (t !== null && t === Z);
}
function xp(e, t) {
  Tr = fo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Pp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), da(e, n);
  }
}
var po = {
    readContext: He,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useInsertionEffect: he,
    useLayoutEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useMutableSource: he,
    useSyncExternalStore: he,
    useId: he,
    unstable_isNewReconciler: !1,
  },
  my = {
    readContext: He,
    useCallback: function (e, t) {
      return (nt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: He,
    useEffect: ac,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        $i(4194308, 4, mp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return $i(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return $i(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = nt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = nt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = py.bind(null, Z, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = nt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: lc,
    useDebugValue: Oa,
    useDeferredValue: function (e) {
      return (nt().memoizedState = e);
    },
    useTransition: function () {
      var e = lc(!1),
        t = e[0];
      return (e = dy.bind(null, e[1])), (nt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Z,
        i = nt();
      if (H) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), ue === null)) throw Error(x(349));
        dn & 30 || lp(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        ac(up.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        qr(9, ap.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = nt(),
        t = ue.identifierPrefix;
      if (H) {
        var n = ft,
          r = ct;
        (n = (r & ~(1 << (32 - Ze(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Zr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = fy++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  gy = {
    readContext: He,
    useCallback: yp,
    useContext: He,
    useEffect: Na,
    useImperativeHandle: gp,
    useInsertionEffect: pp,
    useLayoutEffect: hp,
    useMemo: vp,
    useReducer: Ss,
    useRef: dp,
    useState: function () {
      return Ss(Jr);
    },
    useDebugValue: Oa,
    useDeferredValue: function (e) {
      var t = Ge();
      return wp(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = Ss(Jr)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: op,
    useSyncExternalStore: sp,
    useId: Sp,
    unstable_isNewReconciler: !1,
  },
  yy = {
    readContext: He,
    useCallback: yp,
    useContext: He,
    useEffect: Na,
    useImperativeHandle: gp,
    useInsertionEffect: pp,
    useLayoutEffect: hp,
    useMemo: vp,
    useReducer: _s,
    useRef: dp,
    useState: function () {
      return _s(Jr);
    },
    useDebugValue: Oa,
    useDeferredValue: function (e) {
      var t = Ge();
      return ie === null ? (t.memoizedState = e) : wp(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = _s(Jr)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: op,
    useSyncExternalStore: sp,
    useId: Sp,
    unstable_isNewReconciler: !1,
  };
function Zn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Gm(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function xs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Pl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var vy = typeof WeakMap == "function" ? WeakMap : Map;
function kp(e, t, n) {
  (n = pt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      mo || ((mo = !0), (Ml = r)), Pl(e, t);
    }),
    n
  );
}
function Cp(e, t, n) {
  (n = pt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Pl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Pl(e, t),
          typeof r != "function" &&
            (Ft === null ? (Ft = new Set([this])) : Ft.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function uc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new vy();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Dy.bind(null, e, t, n)), t.then(e, e));
}
function cc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function fc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = pt(-1, 1)), (t.tag = 2), Ot(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var wy = _t.ReactCurrentOwner,
  Ce = !1;
function Se(e, t, n, r) {
  t.child = e === null ? rp(t, null, n, r) : Yn(t, e.child, n, r);
}
function dc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    $n(t, i),
    (r = Da(e, t, n, r, o, i)),
    (n = Ma()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        St(e, t, i))
      : (H && n && Sa(t), (t.flags |= 1), Se(e, t, r, i), t.child)
  );
}
function pc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Wa(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Tp(e, t, o, r, i))
      : ((e = Ki(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Hr), n(s, r) && e.ref === t.ref)
    )
      return St(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = zt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Tp(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Hr(o, r) && e.ref === t.ref)
      if (((Ce = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ce = !0);
      else return (t.lanes = e.lanes), St(e, t, i);
  }
  return kl(e, t, n, r, i);
}
function Ep(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(Nn, De),
        (De |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(Nn, De),
          (De |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        U(Nn, De),
        (De |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(Nn, De),
      (De |= r);
  return Se(e, t, i, n), t.child;
}
function Vp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function kl(e, t, n, r, i) {
  var o = Ee(n) ? cn : ve.current;
  return (
    (o = Kn(t, o)),
    $n(t, i),
    (n = Da(e, t, n, r, o, i)),
    (r = Ma()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        St(e, t, i))
      : (H && r && Sa(t), (t.flags |= 1), Se(e, t, n, i), t.child)
  );
}
function hc(e, t, n, r, i) {
  if (Ee(n)) {
    var o = !0;
    io(t);
  } else o = !1;
  if (($n(t, i), t.stateNode === null))
    Wi(e, t), tp(t, n, r), xl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = He(u))
      : ((u = Ee(n) ? cn : ve.current), (u = Kn(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && oc(t, s, r, u)),
      (Ct = !1);
    var d = t.memoizedState;
    (s.state = d),
      uo(t, r, s, i),
      (a = t.memoizedState),
      l !== r || d !== a || Te.current || Ct
        ? (typeof c == "function" && (_l(t, n, c, r), (a = t.memoizedState)),
          (l = Ct || ic(t, n, l, r, d, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      bd(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Qe(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = He(a))
        : ((a = Ee(n) ? cn : ve.current), (a = Kn(t, a)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && oc(t, s, r, a)),
      (Ct = !1),
      (d = t.memoizedState),
      (s.state = d),
      uo(t, r, s, i);
    var y = t.memoizedState;
    l !== f || d !== y || Te.current || Ct
      ? (typeof g == "function" && (_l(t, n, g, r), (y = t.memoizedState)),
        (u = Ct || ic(t, n, u, r, d, y, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Cl(e, t, n, r, o, i);
}
function Cl(e, t, n, r, i, o) {
  Vp(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && bu(t, n, !1), St(e, t, o);
  (r = t.stateNode), (wy.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Yn(t, e.child, null, o)), (t.child = Yn(t, null, l, o)))
      : Se(e, t, l, o),
    (t.memoizedState = r.state),
    i && bu(t, n, !0),
    t.child
  );
}
function Lp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? qu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && qu(e, t.context, !1),
    Va(e, t.containerInfo);
}
function mc(e, t, n, r, i) {
  return Qn(), xa(i), (t.flags |= 256), Se(e, t, n, r), t.child;
}
var Tl = { dehydrated: null, treeContext: null, retryLane: 0 };
function El(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ap(e, t, n) {
  var r = t.pendingProps,
    i = Y.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    U(Y, i & 1),
    e === null)
  )
    return (
      wl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = jo(s, r, 0, null)),
              (e = un(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = El(n)),
              (t.memoizedState = Tl),
              e)
            : Fa(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Sy(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = zt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = zt(l, o)) : ((o = un(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? El(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Tl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = zt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Fa(e, t) {
  return (
    (t = jo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Vi(e, t, n, r) {
  return (
    r !== null && xa(r),
    Yn(t, e.child, null, n),
    (e = Fa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Sy(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = xs(Error(x(422)))), Vi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = jo({ mode: "visible", children: r.children }, i, 0, null)),
        (o = un(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Yn(t, e.child, null, s),
        (t.child.memoizedState = El(s)),
        (t.memoizedState = Tl),
        o);
  if (!(t.mode & 1)) return Vi(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(x(419))), (r = xs(o, r, void 0)), Vi(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Ce || l)) {
    if (((r = ue), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), wt(e, i), Je(r, e, i, -1));
    }
    return $a(), (r = xs(Error(x(421)))), Vi(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = My.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Me = Nt(i.nextSibling)),
      (Ne = t),
      (H = !0),
      (Xe = null),
      e !== null &&
        ((Be[Ue++] = ct),
        (Be[Ue++] = ft),
        (Be[Ue++] = fn),
        (ct = e.id),
        (ft = e.overflow),
        (fn = t)),
      (t = Fa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function gc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Sl(e.return, t, n);
}
function Ps(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Rp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Se(e, t, r.children, n), (r = Y.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && gc(e, n, t);
        else if (e.tag === 19) gc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((U(Y, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && co(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ps(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && co(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ps(t, !0, n, null, o);
        break;
      case "together":
        Ps(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function St(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (pn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = zt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = zt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function _y(e, t, n) {
  switch (t.tag) {
    case 3:
      Lp(t), Qn();
      break;
    case 5:
      ip(t);
      break;
    case 1:
      Ee(t.type) && io(t);
      break;
    case 4:
      Va(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      U(lo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(Y, Y.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ap(e, t, n)
          : (U(Y, Y.current & 1),
            (e = St(e, t, n)),
            e !== null ? e.sibling : null);
      U(Y, Y.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Rp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        U(Y, Y.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ep(e, t, n);
  }
  return St(e, t, n);
}
var Dp, Vl, Mp, Np;
Dp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Vl = function () {};
Mp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), sn(st.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Zs(e, i)), (r = Zs(e, r)), (o = []);
        break;
      case "select":
        (i = J({}, i, { value: void 0 })),
          (r = J({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = bs(e, i)), (r = bs(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = no);
    }
    tl(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ir.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ir.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && $("scroll", e),
                  o || l === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Np = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ar(e, t) {
  if (!H)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function xy(e, t, n) {
  var r = t.pendingProps;
  switch ((_a(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return me(t), null;
    case 1:
      return Ee(t.type) && ro(), me(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Xn(),
        W(Te),
        W(ve),
        Aa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ti(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Xe !== null && (Fl(Xe), (Xe = null)))),
        Vl(e, t),
        me(t),
        null
      );
    case 5:
      La(t);
      var i = sn(Xr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Mp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return me(t), null;
        }
        if (((e = sn(st.current)), Ti(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[it] = t), (r[Qr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              $("cancel", r), $("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < wr.length; i++) $(wr[i], r);
              break;
            case "source":
              $("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $("error", r), $("load", r);
              break;
            case "details":
              $("toggle", r);
              break;
            case "input":
              Cu(r, o), $("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                $("invalid", r);
              break;
            case "textarea":
              Eu(r, o), $("invalid", r);
          }
          tl(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ci(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ci(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Ir.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  $("scroll", r);
            }
          switch (n) {
            case "input":
              yi(r), Tu(r, o, !0);
              break;
            case "textarea":
              yi(r), Vu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = no);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ld(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[it] = t),
            (e[Qr] = r),
            Dp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = nl(n, r)), n)) {
              case "dialog":
                $("cancel", e), $("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                $("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < wr.length; i++) $(wr[i], e);
                i = r;
                break;
              case "source":
                $("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                $("error", e), $("load", e), (i = r);
                break;
              case "details":
                $("toggle", e), (i = r);
                break;
              case "input":
                Cu(e, r), (i = Zs(e, r)), $("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = J({}, r, { value: void 0 })),
                  $("invalid", e);
                break;
              case "textarea":
                Eu(e, r), (i = bs(e, r)), $("invalid", e);
                break;
              default:
                i = r;
            }
            tl(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? cd(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && ad(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && zr(e, a)
                    : typeof a == "number" && zr(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Ir.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && $("scroll", e)
                      : a != null && sa(e, o, a, s));
              }
            switch (n) {
              case "input":
                yi(e), Tu(e, r, !1);
                break;
              case "textarea":
                yi(e), Vu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ut(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? zn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      zn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = no);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return me(t), null;
    case 6:
      if (e && t.stateNode != null) Np(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = sn(Xr.current)), sn(st.current), Ti(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[it] = t),
            (o = r.nodeValue !== n) && ((e = Ne), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ci(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ci(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[it] = t),
            (t.stateNode = r);
      }
      return me(t), null;
    case 13:
      if (
        (W(Y),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && Me !== null && t.mode & 1 && !(t.flags & 128))
          Jd(), Qn(), (t.flags |= 98560), (o = !1);
        else if (((o = Ti(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(x(317));
            o[it] = t;
          } else
            Qn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          me(t), (o = !1);
        } else Xe !== null && (Fl(Xe), (Xe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Y.current & 1 ? oe === 0 && (oe = 3) : $a())),
          t.updateQueue !== null && (t.flags |= 4),
          me(t),
          null);
    case 4:
      return (
        Xn(), Vl(e, t), e === null && Gr(t.stateNode.containerInfo), me(t), null
      );
    case 10:
      return Ca(t.type._context), me(t), null;
    case 17:
      return Ee(t.type) && ro(), me(t), null;
    case 19:
      if ((W(Y), (o = t.memoizedState), o === null)) return me(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) ar(o, !1);
        else {
          if (oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = co(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ar(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return U(Y, (Y.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ee() > Jn &&
            ((t.flags |= 128), (r = !0), ar(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = co(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ar(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !H)
            )
              return me(t), null;
          } else
            2 * ee() - o.renderingStartTime > Jn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ar(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ee()),
          (t.sibling = null),
          (n = Y.current),
          U(Y, r ? (n & 1) | 2 : n & 1),
          t)
        : (me(t), null);
    case 22:
    case 23:
      return (
        Ua(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? De & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function Py(e, t) {
  switch ((_a(t), t.tag)) {
    case 1:
      return (
        Ee(t.type) && ro(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Xn(),
        W(Te),
        W(ve),
        Aa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return La(t), null;
    case 13:
      if ((W(Y), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        Qn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return W(Y), null;
    case 4:
      return Xn(), null;
    case 10:
      return Ca(t.type._context), null;
    case 22:
    case 23:
      return Ua(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Li = !1,
  ge = !1,
  ky = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function Mn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        b(e, t, r);
      }
    else n.current = null;
}
function Ll(e, t, n) {
  try {
    n();
  } catch (r) {
    b(e, t, r);
  }
}
var yc = !1;
function Cy(e, t) {
  if (((dl = bi), (e = zd()), wa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (d = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (l = s),
                d === o && ++c === r && (a = s),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = g;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (pl = { focusedElem: e, selectionRange: n }, bi = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    k = y.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Qe(t.type, w),
                      k
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (v) {
          b(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (y = yc), (yc = !1), y;
}
function Er(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Ll(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Io(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Al(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Op(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Op(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[it], delete t[Qr], delete t[gl], delete t[ly], delete t[ay])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Fp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Fp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Rl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = no));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Rl(e, t, n), e = e.sibling; e !== null; ) Rl(e, t, n), (e = e.sibling);
}
function Dl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Dl(e, t, n), e = e.sibling; e !== null; ) Dl(e, t, n), (e = e.sibling);
}
var ce = null,
  Ye = !1;
function xt(e, t, n) {
  for (n = n.child; n !== null; ) Ip(e, t, n), (n = n.sibling);
}
function Ip(e, t, n) {
  if (ot && typeof ot.onCommitFiberUnmount == "function")
    try {
      ot.onCommitFiberUnmount(Lo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ge || Mn(n, t);
    case 6:
      var r = ce,
        i = Ye;
      (ce = null),
        xt(e, t, n),
        (ce = r),
        (Ye = i),
        ce !== null &&
          (Ye
            ? ((e = ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ce.removeChild(n.stateNode));
      break;
    case 18:
      ce !== null &&
        (Ye
          ? ((e = ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? gs(e.parentNode, n)
              : e.nodeType === 1 && gs(e, n),
            $r(e))
          : gs(ce, n.stateNode));
      break;
    case 4:
      (r = ce),
        (i = Ye),
        (ce = n.stateNode.containerInfo),
        (Ye = !0),
        xt(e, t, n),
        (ce = r),
        (Ye = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ge &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Ll(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      xt(e, t, n);
      break;
    case 1:
      if (
        !ge &&
        (Mn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          b(n, t, l);
        }
      xt(e, t, n);
      break;
    case 21:
      xt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ge = (r = ge) || n.memoizedState !== null), xt(e, t, n), (ge = r))
        : xt(e, t, n);
      break;
    default:
      xt(e, t, n);
  }
}
function wc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ky()),
      t.forEach(function (r) {
        var i = Ny.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ce = l.stateNode), (Ye = !1);
              break e;
            case 3:
              (ce = l.stateNode.containerInfo), (Ye = !0);
              break e;
            case 4:
              (ce = l.stateNode.containerInfo), (Ye = !0);
              break e;
          }
          l = l.return;
        }
        if (ce === null) throw Error(x(160));
        Ip(o, s, i), (ce = null), (Ye = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        b(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) zp(t, e), (t = t.sibling);
}
function zp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ke(t, e), tt(e), r & 4)) {
        try {
          Er(3, e, e.return), Io(3, e);
        } catch (w) {
          b(e, e.return, w);
        }
        try {
          Er(5, e, e.return);
        } catch (w) {
          b(e, e.return, w);
        }
      }
      break;
    case 1:
      Ke(t, e), tt(e), r & 512 && n !== null && Mn(n, n.return);
      break;
    case 5:
      if (
        (Ke(t, e),
        tt(e),
        r & 512 && n !== null && Mn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          zr(i, "");
        } catch (w) {
          b(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && od(i, o),
              nl(l, s);
            var u = nl(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? cd(i, f)
                : c === "dangerouslySetInnerHTML"
                ? ad(i, f)
                : c === "children"
                ? zr(i, f)
                : sa(i, c, f, u);
            }
            switch (l) {
              case "input":
                Js(i, o);
                break;
              case "textarea":
                sd(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? zn(i, !!o.multiple, g, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? zn(i, !!o.multiple, o.defaultValue, !0)
                      : zn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Qr] = o;
          } catch (w) {
            b(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ke(t, e), tt(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (w) {
          b(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ke(t, e), tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          $r(t.containerInfo);
        } catch (w) {
          b(e, e.return, w);
        }
      break;
    case 4:
      Ke(t, e), tt(e);
      break;
    case 13:
      Ke(t, e),
        tt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (ja = ee())),
        r & 4 && wc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ge = (u = ge) || c), Ke(t, e), (ge = u)) : Ke(t, e),
        tt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (V = e, c = e.child; c !== null; ) {
            for (f = V = c; V !== null; ) {
              switch (((d = V), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Er(4, d, d.return);
                  break;
                case 1:
                  Mn(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      b(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Mn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    _c(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (V = g)) : _c(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = ud("display", s)));
              } catch (w) {
                b(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (w) {
                b(e, e.return, w);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ke(t, e), tt(e), r & 4 && wc(e);
      break;
    case 21:
      break;
    default:
      Ke(t, e), tt(e);
  }
}
function tt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Fp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (zr(i, ""), (r.flags &= -33));
          var o = vc(e);
          Dl(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = vc(e);
          Rl(e, l, s);
          break;
        default:
          throw Error(x(161));
      }
    } catch (a) {
      b(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ty(e, t, n) {
  (V = e), jp(e);
}
function jp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var i = V,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Li;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || ge;
        l = Li;
        var u = ge;
        if (((Li = s), (ge = a) && !u))
          for (V = i; V !== null; )
            (s = V),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? xc(i)
                : a !== null
                ? ((a.return = s), (V = a))
                : xc(i);
        for (; o !== null; ) (V = o), jp(o), (o = o.sibling);
        (V = i), (Li = l), (ge = u);
      }
      Sc(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (V = o)) : Sc(e);
  }
}
function Sc(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ge || Io(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ge)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Qe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && rc(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                rc(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && $r(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(x(163));
          }
        ge || (t.flags & 512 && Al(t));
      } catch (d) {
        b(t, t.return, d);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function _c(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function xc(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Io(4, t);
          } catch (a) {
            b(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              b(t, i, a);
            }
          }
          var o = t.return;
          try {
            Al(t);
          } catch (a) {
            b(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Al(t);
          } catch (a) {
            b(t, s, a);
          }
      }
    } catch (a) {
      b(t, t.return, a);
    }
    if (t === e) {
      V = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (V = l);
      break;
    }
    V = t.return;
  }
}
var Ey = Math.ceil,
  ho = _t.ReactCurrentDispatcher,
  Ia = _t.ReactCurrentOwner,
  We = _t.ReactCurrentBatchConfig,
  I = 0,
  ue = null,
  re = null,
  fe = 0,
  De = 0,
  Nn = Kt(0),
  oe = 0,
  br = null,
  pn = 0,
  zo = 0,
  za = 0,
  Vr = null,
  ke = null,
  ja = 0,
  Jn = 1 / 0,
  at = null,
  mo = !1,
  Ml = null,
  Ft = null,
  Ai = !1,
  At = null,
  go = 0,
  Lr = 0,
  Nl = null,
  Hi = -1,
  Gi = 0;
function _e() {
  return I & 6 ? ee() : Hi !== -1 ? Hi : (Hi = ee());
}
function It(e) {
  return e.mode & 1
    ? I & 2 && fe !== 0
      ? fe & -fe
      : cy.transition !== null
      ? (Gi === 0 && (Gi = xd()), Gi)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ld(e.type))),
        e)
    : 1;
}
function Je(e, t, n, r) {
  if (50 < Lr) throw ((Lr = 0), (Nl = null), Error(x(185)));
  si(e, n, r),
    (!(I & 2) || e !== ue) &&
      (e === ue && (!(I & 2) && (zo |= n), oe === 4 && Vt(e, fe)),
      Ve(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((Jn = ee() + 500), No && Qt()));
}
function Ve(e, t) {
  var n = e.callbackNode;
  cg(e, t);
  var r = qi(e, e === ue ? fe : 0);
  if (r === 0)
    n !== null && Ru(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ru(n), t === 1))
      e.tag === 0 ? uy(Pc.bind(null, e)) : Yd(Pc.bind(null, e)),
        oy(function () {
          !(I & 6) && Qt();
        }),
        (n = null);
    else {
      switch (Pd(r)) {
        case 1:
          n = fa;
          break;
        case 4:
          n = Sd;
          break;
        case 16:
          n = Ji;
          break;
        case 536870912:
          n = _d;
          break;
        default:
          n = Ji;
      }
      n = Qp(n, Bp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Bp(e, t) {
  if (((Hi = -1), (Gi = 0), I & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (Wn() && e.callbackNode !== n) return null;
  var r = qi(e, e === ue ? fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yo(e, r);
  else {
    t = r;
    var i = I;
    I |= 2;
    var o = $p();
    (ue !== e || fe !== t) && ((at = null), (Jn = ee() + 500), an(e, t));
    do
      try {
        Ay();
        break;
      } catch (l) {
        Up(e, l);
      }
    while (1);
    ka(),
      (ho.current = o),
      (I = i),
      re !== null ? (t = 0) : ((ue = null), (fe = 0), (t = oe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ll(e)), i !== 0 && ((r = i), (t = Ol(e, i)))), t === 1)
    )
      throw ((n = br), an(e, 0), Vt(e, r), Ve(e, ee()), n);
    if (t === 6) Vt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Vy(i) &&
          ((t = yo(e, r)),
          t === 2 && ((o = ll(e)), o !== 0 && ((r = o), (t = Ol(e, o)))),
          t === 1))
      )
        throw ((n = br), an(e, 0), Vt(e, r), Ve(e, ee()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          en(e, ke, at);
          break;
        case 3:
          if (
            (Vt(e, r), (r & 130023424) === r && ((t = ja + 500 - ee()), 10 < t))
          ) {
            if (qi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              _e(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ml(en.bind(null, e, ke, at), t);
            break;
          }
          en(e, ke, at);
          break;
        case 4:
          if ((Vt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Ze(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Ey(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ml(en.bind(null, e, ke, at), r);
            break;
          }
          en(e, ke, at);
          break;
        case 5:
          en(e, ke, at);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return Ve(e, ee()), e.callbackNode === n ? Bp.bind(null, e) : null;
}
function Ol(e, t) {
  var n = Vr;
  return (
    e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256),
    (e = yo(e, t)),
    e !== 2 && ((t = ke), (ke = n), t !== null && Fl(t)),
    e
  );
}
function Fl(e) {
  ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function Vy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!qe(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Vt(e, t) {
  for (
    t &= ~za,
      t &= ~zo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ze(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Pc(e) {
  if (I & 6) throw Error(x(327));
  Wn();
  var t = qi(e, 0);
  if (!(t & 1)) return Ve(e, ee()), null;
  var n = yo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ll(e);
    r !== 0 && ((t = r), (n = Ol(e, r)));
  }
  if (n === 1) throw ((n = br), an(e, 0), Vt(e, t), Ve(e, ee()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    en(e, ke, at),
    Ve(e, ee()),
    null
  );
}
function Ba(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((Jn = ee() + 500), No && Qt());
  }
}
function hn(e) {
  At !== null && At.tag === 0 && !(I & 6) && Wn();
  var t = I;
  I |= 1;
  var n = We.transition,
    r = B;
  try {
    if (((We.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), (We.transition = n), (I = t), !(I & 6) && Qt();
  }
}
function Ua() {
  (De = Nn.current), W(Nn);
}
function an(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), iy(n)), re !== null))
    for (n = re.return; n !== null; ) {
      var r = n;
      switch ((_a(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ro();
          break;
        case 3:
          Xn(), W(Te), W(ve), Aa();
          break;
        case 5:
          La(r);
          break;
        case 4:
          Xn();
          break;
        case 13:
          W(Y);
          break;
        case 19:
          W(Y);
          break;
        case 10:
          Ca(r.type._context);
          break;
        case 22:
        case 23:
          Ua();
      }
      n = n.return;
    }
  if (
    ((ue = e),
    (re = e = zt(e.current, null)),
    (fe = De = t),
    (oe = 0),
    (br = null),
    (za = zo = pn = 0),
    (ke = Vr = null),
    on !== null)
  ) {
    for (t = 0; t < on.length; t++)
      if (((n = on[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    on = null;
  }
  return e;
}
function Up(e, t) {
  do {
    var n = re;
    try {
      if ((ka(), (Ui.current = po), fo)) {
        for (var r = Z.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        fo = !1;
      }
      if (
        ((dn = 0),
        (le = ie = Z = null),
        (Tr = !1),
        (Zr = 0),
        (Ia.current = null),
        n === null || n.return === null)
      ) {
        (oe = 1), (br = t), (re = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = fe),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = cc(s);
          if (g !== null) {
            (g.flags &= -257),
              fc(g, s, l, o, t),
              g.mode & 1 && uc(o, u, t),
              (t = g),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              uc(o, u, t), $a();
              break e;
            }
            a = Error(x(426));
          }
        } else if (H && l.mode & 1) {
          var k = cc(s);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              fc(k, s, l, o, t),
              xa(Zn(a, l));
            break e;
          }
        }
        (o = a = Zn(a, l)),
          oe !== 4 && (oe = 2),
          Vr === null ? (Vr = [o]) : Vr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = kp(o, a, t);
              nc(o, m);
              break e;
            case 1:
              l = a;
              var p = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Ft === null || !Ft.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = Cp(o, l, t);
                nc(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Hp(n);
    } catch (S) {
      (t = S), re === n && n !== null && (re = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function $p() {
  var e = ho.current;
  return (ho.current = po), e === null ? po : e;
}
function $a() {
  (oe === 0 || oe === 3 || oe === 2) && (oe = 4),
    ue === null || (!(pn & 268435455) && !(zo & 268435455)) || Vt(ue, fe);
}
function yo(e, t) {
  var n = I;
  I |= 2;
  var r = $p();
  (ue !== e || fe !== t) && ((at = null), an(e, t));
  do
    try {
      Ly();
      break;
    } catch (i) {
      Up(e, i);
    }
  while (1);
  if ((ka(), (I = n), (ho.current = r), re !== null)) throw Error(x(261));
  return (ue = null), (fe = 0), oe;
}
function Ly() {
  for (; re !== null; ) Wp(re);
}
function Ay() {
  for (; re !== null && !tg(); ) Wp(re);
}
function Wp(e) {
  var t = Kp(e.alternate, e, De);
  (e.memoizedProps = e.pendingProps),
    t === null ? Hp(e) : (re = t),
    (Ia.current = null);
}
function Hp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Py(n, t)), n !== null)) {
        (n.flags &= 32767), (re = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (oe = 6), (re = null);
        return;
      }
    } else if (((n = xy(n, t, De)), n !== null)) {
      re = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      re = t;
      return;
    }
    re = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function en(e, t, n) {
  var r = B,
    i = We.transition;
  try {
    (We.transition = null), (B = 1), Ry(e, t, n, r);
  } finally {
    (We.transition = i), (B = r);
  }
  return null;
}
function Ry(e, t, n, r) {
  do Wn();
  while (At !== null);
  if (I & 6) throw Error(x(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (fg(e, o),
    e === ue && ((re = ue = null), (fe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ai ||
      ((Ai = !0),
      Qp(Ji, function () {
        return Wn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = We.transition), (We.transition = null);
    var s = B;
    B = 1;
    var l = I;
    (I |= 4),
      (Ia.current = null),
      Cy(e, n),
      zp(n, e),
      Jg(pl),
      (bi = !!dl),
      (pl = dl = null),
      (e.current = n),
      Ty(n),
      ng(),
      (I = l),
      (B = s),
      (We.transition = o);
  } else e.current = n;
  if (
    (Ai && ((Ai = !1), (At = e), (go = i)),
    (o = e.pendingLanes),
    o === 0 && (Ft = null),
    og(n.stateNode),
    Ve(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (mo) throw ((mo = !1), (e = Ml), (Ml = null), e);
  return (
    go & 1 && e.tag !== 0 && Wn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Nl ? Lr++ : ((Lr = 0), (Nl = e))) : (Lr = 0),
    Qt(),
    null
  );
}
function Wn() {
  if (At !== null) {
    var e = Pd(go),
      t = We.transition,
      n = B;
    try {
      if (((We.transition = null), (B = 16 > e ? 16 : e), At === null))
        var r = !1;
      else {
        if (((e = At), (At = null), (go = 0), I & 6)) throw Error(x(331));
        var i = I;
        for (I |= 4, V = e.current; V !== null; ) {
          var o = V,
            s = o.child;
          if (V.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (V = u; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (V = f);
                  else
                    for (; V !== null; ) {
                      c = V;
                      var d = c.sibling,
                        g = c.return;
                      if ((Op(c), c === u)) {
                        V = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (V = d);
                        break;
                      }
                      V = g;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var k = w.sibling;
                    (w.sibling = null), (w = k);
                  } while (w !== null);
                }
              }
              V = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (V = s);
          else
            e: for (; V !== null; ) {
              if (((o = V), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Er(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (V = m);
                break e;
              }
              V = o.return;
            }
        }
        var p = e.current;
        for (V = p; V !== null; ) {
          s = V;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) (h.return = s), (V = h);
          else
            e: for (s = p; V !== null; ) {
              if (((l = V), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Io(9, l);
                  }
                } catch (S) {
                  b(l, l.return, S);
                }
              if (l === s) {
                V = null;
                break e;
              }
              var v = l.sibling;
              if (v !== null) {
                (v.return = l.return), (V = v);
                break e;
              }
              V = l.return;
            }
        }
        if (
          ((I = i), Qt(), ot && typeof ot.onPostCommitFiberRoot == "function")
        )
          try {
            ot.onPostCommitFiberRoot(Lo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), (We.transition = t);
    }
  }
  return !1;
}
function kc(e, t, n) {
  (t = Zn(n, t)),
    (t = kp(e, t, 1)),
    (e = Ot(e, t, 1)),
    (t = _e()),
    e !== null && (si(e, 1, t), Ve(e, t));
}
function b(e, t, n) {
  if (e.tag === 3) kc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        kc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ft === null || !Ft.has(r)))
        ) {
          (e = Zn(n, e)),
            (e = Cp(t, e, 1)),
            (t = Ot(t, e, 1)),
            (e = _e()),
            t !== null && (si(t, 1, e), Ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Dy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = _e()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ue === e &&
      (fe & n) === n &&
      (oe === 4 || (oe === 3 && (fe & 130023424) === fe && 500 > ee() - ja)
        ? an(e, 0)
        : (za |= n)),
    Ve(e, t);
}
function Gp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Si), (Si <<= 1), !(Si & 130023424) && (Si = 4194304))
      : (t = 1));
  var n = _e();
  (e = wt(e, t)), e !== null && (si(e, t, n), Ve(e, n));
}
function My(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Gp(e, n);
}
function Ny(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), Gp(e, n);
}
var Kp;
Kp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Te.current) Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ce = !1), _y(e, t, n);
      Ce = !!(e.flags & 131072);
    }
  else (Ce = !1), H && t.flags & 1048576 && Xd(t, so, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Wi(e, t), (e = t.pendingProps);
      var i = Kn(t, ve.current);
      $n(t, n), (i = Da(null, t, r, e, i, n));
      var o = Ma();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ee(r) ? ((o = !0), io(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ea(t),
            (i.updater = Oo),
            (t.stateNode = i),
            (i._reactInternals = t),
            xl(t, r, e, n),
            (t = Cl(null, t, r, !0, o, n)))
          : ((t.tag = 0), H && o && Sa(t), Se(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Wi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Fy(r)),
          (e = Qe(r, e)),
          i)
        ) {
          case 0:
            t = kl(null, t, r, e, n);
            break e;
          case 1:
            t = hc(null, t, r, e, n);
            break e;
          case 11:
            t = dc(null, t, r, e, n);
            break e;
          case 14:
            t = pc(null, t, r, Qe(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        kl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        hc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Lp(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          bd(e, t),
          uo(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Zn(Error(x(423)), t)), (t = mc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Zn(Error(x(424)), t)), (t = mc(e, t, r, n, i));
            break e;
          } else
            for (
              Me = Nt(t.stateNode.containerInfo.firstChild),
                Ne = t,
                H = !0,
                Xe = null,
                n = rp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Qn(), r === i)) {
            t = St(e, t, n);
            break e;
          }
          Se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ip(t),
        e === null && wl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        hl(r, i) ? (s = null) : o !== null && hl(r, o) && (t.flags |= 32),
        Vp(e, t),
        Se(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && wl(t), null;
    case 13:
      return Ap(e, t, n);
    case 4:
      return (
        Va(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Yn(t, null, r, n)) : Se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        dc(e, t, r, i, n)
      );
    case 7:
      return Se(e, t, t.pendingProps, n), t.child;
    case 8:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          U(lo, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (qe(o.value, s)) {
            if (o.children === i.children && !Te.current) {
              t = St(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = pt(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Sl(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(x(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Sl(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Se(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        $n(t, n),
        (i = He(i)),
        (r = r(i)),
        (t.flags |= 1),
        Se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Qe(r, t.pendingProps)),
        (i = Qe(r.type, i)),
        pc(e, t, r, i, n)
      );
    case 15:
      return Tp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        Wi(e, t),
        (t.tag = 1),
        Ee(r) ? ((e = !0), io(t)) : (e = !1),
        $n(t, n),
        tp(t, r, i),
        xl(t, r, i, n),
        Cl(null, t, r, !0, e, n)
      );
    case 19:
      return Rp(e, t, n);
    case 22:
      return Ep(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function Qp(e, t) {
  return wd(e, t);
}
function Oy(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function $e(e, t, n, r) {
  return new Oy(e, t, n, r);
}
function Wa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Fy(e) {
  if (typeof e == "function") return Wa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === aa)) return 11;
    if (e === ua) return 14;
  }
  return 2;
}
function zt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = $e(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ki(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Wa(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case kn:
        return un(n.children, i, o, t);
      case la:
        (s = 8), (i |= 8);
        break;
      case Ks:
        return (
          (e = $e(12, n, t, i | 2)), (e.elementType = Ks), (e.lanes = o), e
        );
      case Qs:
        return (e = $e(13, n, t, i)), (e.elementType = Qs), (e.lanes = o), e;
      case Ys:
        return (e = $e(19, n, t, i)), (e.elementType = Ys), (e.lanes = o), e;
      case nd:
        return jo(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ed:
              s = 10;
              break e;
            case td:
              s = 9;
              break e;
            case aa:
              s = 11;
              break e;
            case ua:
              s = 14;
              break e;
            case kt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = $e(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function un(e, t, n, r) {
  return (e = $e(7, e, r, t)), (e.lanes = n), e;
}
function jo(e, t, n, r) {
  return (
    (e = $e(22, e, r, t)),
    (e.elementType = nd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ks(e, t, n) {
  return (e = $e(6, e, null, t)), (e.lanes = n), e;
}
function Cs(e, t, n) {
  return (
    (t = $e(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Iy(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = os(0)),
    (this.expirationTimes = os(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = os(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ha(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new Iy(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = $e(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ea(o),
    e
  );
}
function zy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Pn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Yp(e) {
  if (!e) return $t;
  e = e._reactInternals;
  e: {
    if (yn(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ee(n)) return Qd(e, n, t);
  }
  return t;
}
function Xp(e, t, n, r, i, o, s, l, a) {
  return (
    (e = Ha(n, r, !0, e, i, o, s, l, a)),
    (e.context = Yp(null)),
    (n = e.current),
    (r = _e()),
    (i = It(n)),
    (o = pt(r, i)),
    (o.callback = t ?? null),
    Ot(n, o, i),
    (e.current.lanes = i),
    si(e, i, r),
    Ve(e, r),
    e
  );
}
function Bo(e, t, n, r) {
  var i = t.current,
    o = _e(),
    s = It(i);
  return (
    (n = Yp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = pt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ot(i, t, s)),
    e !== null && (Je(e, i, s, o), Bi(e, i, s)),
    s
  );
}
function vo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Cc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ga(e, t) {
  Cc(e, t), (e = e.alternate) && Cc(e, t);
}
function jy() {
  return null;
}
var Zp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ka(e) {
  this._internalRoot = e;
}
Uo.prototype.render = Ka.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  Bo(e, t, null, null);
};
Uo.prototype.unmount = Ka.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hn(function () {
      Bo(null, e, null, null);
    }),
      (t[vt] = null);
  }
};
function Uo(e) {
  this._internalRoot = e;
}
Uo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Td();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++);
    Et.splice(n, 0, e), n === 0 && Vd(e);
  }
};
function Qa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function $o(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Tc() {}
function By(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = vo(s);
        o.call(u);
      };
    }
    var s = Xp(t, r, e, 0, null, !1, !1, "", Tc);
    return (
      (e._reactRootContainer = s),
      (e[vt] = s.current),
      Gr(e.nodeType === 8 ? e.parentNode : e),
      hn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = vo(a);
      l.call(u);
    };
  }
  var a = Ha(e, 0, !1, null, null, !1, !1, "", Tc);
  return (
    (e._reactRootContainer = a),
    (e[vt] = a.current),
    Gr(e.nodeType === 8 ? e.parentNode : e),
    hn(function () {
      Bo(t, a, n, r);
    }),
    a
  );
}
function Wo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = vo(s);
        l.call(a);
      };
    }
    Bo(t, s, e, i);
  } else s = By(n, t, e, i, r);
  return vo(s);
}
kd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = vr(t.pendingLanes);
        n !== 0 &&
          (da(t, n | 1), Ve(t, ee()), !(I & 6) && ((Jn = ee() + 500), Qt()));
      }
      break;
    case 13:
      hn(function () {
        var r = wt(e, 1);
        if (r !== null) {
          var i = _e();
          Je(r, e, 1, i);
        }
      }),
        Ga(e, 1);
  }
};
pa = function (e) {
  if (e.tag === 13) {
    var t = wt(e, 134217728);
    if (t !== null) {
      var n = _e();
      Je(t, e, 134217728, n);
    }
    Ga(e, 134217728);
  }
};
Cd = function (e) {
  if (e.tag === 13) {
    var t = It(e),
      n = wt(e, t);
    if (n !== null) {
      var r = _e();
      Je(n, e, t, r);
    }
    Ga(e, t);
  }
};
Td = function () {
  return B;
};
Ed = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
il = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Js(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Mo(r);
            if (!i) throw Error(x(90));
            id(r), Js(r, i);
          }
        }
      }
      break;
    case "textarea":
      sd(e, n);
      break;
    case "select":
      (t = n.value), t != null && zn(e, !!n.multiple, t, !1);
  }
};
pd = Ba;
hd = hn;
var Uy = { usingClientEntryPoint: !1, Events: [ai, Vn, Mo, fd, dd, Ba] },
  ur = {
    findFiberByHostInstance: rn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  $y = {
    bundleType: ur.bundleType,
    version: ur.version,
    rendererPackageName: ur.rendererPackageName,
    rendererConfig: ur.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: _t.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = yd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ur.findFiberByHostInstance || jy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ri = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ri.isDisabled && Ri.supportsFiber)
    try {
      (Lo = Ri.inject($y)), (ot = Ri);
    } catch {}
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uy;
Ie.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Qa(t)) throw Error(x(200));
  return zy(e, t, null, n);
};
Ie.createRoot = function (e, t) {
  if (!Qa(e)) throw Error(x(299));
  var n = !1,
    r = "",
    i = Zp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ha(e, 1, !1, null, null, n, !1, r, i)),
    (e[vt] = t.current),
    Gr(e.nodeType === 8 ? e.parentNode : e),
    new Ka(t)
  );
};
Ie.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = yd(t)), (e = e === null ? null : e.stateNode), e;
};
Ie.flushSync = function (e) {
  return hn(e);
};
Ie.hydrate = function (e, t, n) {
  if (!$o(t)) throw Error(x(200));
  return Wo(null, e, t, !0, n);
};
Ie.hydrateRoot = function (e, t, n) {
  if (!Qa(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Zp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Xp(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[vt] = t.current),
    Gr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Uo(t);
};
Ie.render = function (e, t, n) {
  if (!$o(t)) throw Error(x(200));
  return Wo(null, e, t, !1, n);
};
Ie.unmountComponentAtNode = function (e) {
  if (!$o(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (hn(function () {
        Wo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[vt] = null);
        });
      }),
      !0)
    : !1;
};
Ie.unstable_batchedUpdates = Ba;
Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!$o(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return Wo(e, t, n, !1, r);
};
Ie.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Ie);
})(jm);
var Ec = Ws;
($s.createRoot = Ec.createRoot), ($s.hydrateRoot = Ec.hydrateRoot);
const Jp = P.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Ho = P.createContext({}),
  Go = P.createContext(null),
  Ko = typeof document < "u",
  wo = Ko ? P.useLayoutEffect : P.useEffect,
  qp = P.createContext({ strict: !1 });
function Wy(e, t, n, r) {
  const { visualElement: i } = P.useContext(Ho),
    o = P.useContext(qp),
    s = P.useContext(Go),
    l = P.useContext(Jp).reducedMotion,
    a = P.useRef();
  (r = r || o.renderer),
    !a.current &&
      r &&
      (a.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const u = a.current;
  return (
    P.useInsertionEffect(() => {
      u && u.update(n, s);
    }),
    wo(() => {
      u && u.render();
    }),
    P.useEffect(() => {
      u && u.updateFeatures();
    }),
    (window.HandoffAppearAnimations ? wo : P.useEffect)(() => {
      u && u.animationState && u.animationState.animateChanges();
    }),
    u
  );
}
function On(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Hy(e, t, n) {
  return P.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : On(n) && (n.current = r));
    },
    [t]
  );
}
function ei(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Qo(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Ya = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Xa = ["initial", ...Ya];
function Yo(e) {
  return Qo(e.animate) || Xa.some((t) => ei(e[t]));
}
function bp(e) {
  return !!(Yo(e) || e.variants);
}
function Gy(e, t) {
  if (Yo(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ei(n) ? n : void 0,
      animate: ei(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Ky(e) {
  const { initial: t, animate: n } = Gy(e, P.useContext(Ho));
  return P.useMemo(() => ({ initial: t, animate: n }), [Vc(t), Vc(n)]);
}
function Vc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Lc = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  ti = {};
for (const e in Lc) ti[e] = { isEnabled: (t) => Lc[e].some((n) => !!t[n]) };
function Qy(e) {
  for (const t in e) ti[t] = { ...ti[t], ...e[t] };
}
function Za(e) {
  const t = P.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Ar = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
let Yy = 1;
function Xy() {
  return Za(() => {
    if (Ar.hasEverUpdated) return Yy++;
  });
}
const Ja = P.createContext({}),
  eh = P.createContext({}),
  Zy = Symbol.for("motionComponentSymbol");
function Jy({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && Qy(e);
  function o(l, a) {
    let u;
    const c = { ...P.useContext(Jp), ...l, layoutId: qy(l) },
      { isStatic: f } = c,
      d = Ky(l),
      g = f ? void 0 : Xy(),
      y = r(l, f);
    if (!f && Ko) {
      d.visualElement = Wy(i, y, c, t);
      const w = P.useContext(eh),
        k = P.useContext(qp).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(c, k, e, g, w));
    }
    return P.createElement(
      Ho.Provider,
      { value: d },
      u && d.visualElement
        ? P.createElement(u, { visualElement: d.visualElement, ...c })
        : null,
      n(i, l, g, Hy(y, d.visualElement, a), y, f, d.visualElement)
    );
  }
  const s = P.forwardRef(o);
  return (s[Zy] = i), s;
}
function qy({ layoutId: e }) {
  const t = P.useContext(Ja).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function by(e) {
  function t(r, i = {}) {
    return Jy(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const ev = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function qa(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(ev.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const So = {};
function tv(e) {
  Object.assign(So, e);
}
const Xo = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  vn = new Set(Xo);
function th(e, { layout: t, layoutId: n }) {
  return (
    vn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!So[e] || e === "opacity"))
  );
}
const Le = (e) => !!(e && e.getVelocity),
  nv = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  rv = Xo.length;
function iv(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let s = 0; s < rv; s++) {
    const l = Xo[s];
    if (e[l] !== void 0) {
      const a = nv[l] || l;
      o += `${a}(${e[l]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
const nh = (e) => (t) => typeof t == "string" && t.startsWith(e),
  rh = nh("--"),
  Il = nh("var(--"),
  ov = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  mn = (e, t, n) => Math.min(Math.max(n, e), t),
  wn = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Rr = { ...wn, transform: (e) => mn(0, 1, e) },
  Di = { ...wn, default: 1 },
  Dr = (e) => Math.round(e * 1e5) / 1e5,
  ni = /(-)?([\d]*\.?[\d])+/g,
  zl =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  sv =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ci(e) {
  return typeof e == "string";
}
const fi = (e) => ({
    test: (t) => ci(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Pt = fi("deg"),
  lt = fi("%"),
  L = fi("px"),
  lv = fi("vh"),
  av = fi("vw"),
  Ac = {
    ...lt,
    parse: (e) => lt.parse(e) / 100,
    transform: (e) => lt.transform(e * 100),
  },
  Rc = { ...wn, transform: Math.round },
  ih = {
    borderWidth: L,
    borderTopWidth: L,
    borderRightWidth: L,
    borderBottomWidth: L,
    borderLeftWidth: L,
    borderRadius: L,
    radius: L,
    borderTopLeftRadius: L,
    borderTopRightRadius: L,
    borderBottomRightRadius: L,
    borderBottomLeftRadius: L,
    width: L,
    maxWidth: L,
    height: L,
    maxHeight: L,
    size: L,
    top: L,
    right: L,
    bottom: L,
    left: L,
    padding: L,
    paddingTop: L,
    paddingRight: L,
    paddingBottom: L,
    paddingLeft: L,
    margin: L,
    marginTop: L,
    marginRight: L,
    marginBottom: L,
    marginLeft: L,
    rotate: Pt,
    rotateX: Pt,
    rotateY: Pt,
    rotateZ: Pt,
    scale: Di,
    scaleX: Di,
    scaleY: Di,
    scaleZ: Di,
    skew: Pt,
    skewX: Pt,
    skewY: Pt,
    distance: L,
    translateX: L,
    translateY: L,
    translateZ: L,
    x: L,
    y: L,
    z: L,
    perspective: L,
    transformPerspective: L,
    opacity: Rr,
    originX: Ac,
    originY: Ac,
    originZ: L,
    zIndex: Rc,
    fillOpacity: Rr,
    strokeOpacity: Rr,
    numOctaves: Rc,
  };
function ba(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: l } = e;
  let a = !1,
    u = !1,
    c = !0;
  for (const f in t) {
    const d = t[f];
    if (rh(f)) {
      o[f] = d;
      continue;
    }
    const g = ih[f],
      y = ov(d, g);
    if (vn.has(f)) {
      if (((a = !0), (s[f] = y), !c)) continue;
      d !== (g.default || 0) && (c = !1);
    } else f.startsWith("origin") ? ((u = !0), (l[f] = y)) : (i[f] = y);
  }
  if (
    (t.transform ||
      (a || r
        ? (i.transform = iv(e.transform, n, c, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: f = "50%", originY: d = "50%", originZ: g = 0 } = l;
    i.transformOrigin = `${f} ${d} ${g}`;
  }
}
const eu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function oh(e, t, n) {
  for (const r in t) !Le(t[r]) && !th(r, n) && (e[r] = t[r]);
}
function uv({ transformTemplate: e }, t, n) {
  return P.useMemo(() => {
    const r = eu();
    return (
      ba(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function cv(e, t, n) {
  const r = e.style || {},
    i = {};
  return (
    oh(i, r, e),
    Object.assign(i, uv(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
  );
}
function fv(e, t, n) {
  const r = {},
    i = cv(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const dv = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function _o(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    dv.has(e)
  );
}
let sh = (e) => !_o(e);
function pv(e) {
  e && (sh = (t) => (t.startsWith("on") ? !_o(t) : e(t)));
}
try {
  pv(require("@emotion/is-prop-valid").default);
} catch {}
function hv(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((sh(i) ||
        (n === !0 && _o(i)) ||
        (!t && !_o(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function Dc(e, t, n) {
  return typeof e == "string" ? e : L.transform(t + n * e);
}
function mv(e, t, n) {
  const r = Dc(t, e.x, e.width),
    i = Dc(n, e.y, e.height);
  return `${r} ${i}`;
}
const gv = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  yv = { offset: "strokeDashoffset", array: "strokeDasharray" };
function vv(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? gv : yv;
  e[o.offset] = L.transform(-r);
  const s = L.transform(t),
    l = L.transform(n);
  e[o.array] = `${s} ${l}`;
}
function tu(
  e,
  {
    attrX: t,
    attrY: n,
    originX: r,
    originY: i,
    pathLength: o,
    pathSpacing: s = 1,
    pathOffset: l = 0,
    ...a
  },
  u,
  c,
  f
) {
  if ((ba(e, a, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: g, dimensions: y } = e;
  d.transform && (y && (g.transform = d.transform), delete d.transform),
    y &&
      (r !== void 0 || i !== void 0 || g.transform) &&
      (g.transformOrigin = mv(
        y,
        r !== void 0 ? r : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    o !== void 0 && vv(d, o, s, l, !1);
}
const lh = () => ({ ...eu(), attrs: {} }),
  nu = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function wv(e, t, n, r) {
  const i = P.useMemo(() => {
    const o = lh();
    return (
      tu(o, t, { enableHardwareAcceleration: !1 }, nu(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    oh(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function Sv(e = !1) {
  return (n, r, i, o, { latestValues: s }, l) => {
    const u = (qa(n) ? wv : fv)(r, s, l, n),
      f = { ...hv(r, typeof n == "string", e), ...u, ref: o },
      { children: d } = r,
      g = P.useMemo(() => (Le(d) ? d.get() : d), [d]);
    return (
      i && (f["data-projection-id"] = i),
      P.createElement(n, { ...f, children: g })
    );
  };
}
const ru = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function ah(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const uh = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function ch(e, t, n, r) {
  ah(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(uh.has(i) ? i : ru(i), t.attrs[i]);
}
function iu(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n)
    (Le(n[i]) || (t.style && Le(t.style[i])) || th(i, e)) && (r[i] = n[i]);
  return r;
}
function fh(e, t) {
  const n = iu(e, t);
  for (const r in e)
    if (Le(e[r]) || Le(t[r])) {
      const i = r === "x" || r === "y" ? "attr" + r.toUpperCase() : r;
      n[i] = e[r];
    }
  return n;
}
function ou(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
const xo = (e) => Array.isArray(e),
  _v = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  xv = (e) => (xo(e) ? e[e.length - 1] || 0 : e);
function Qi(e) {
  const t = Le(e) ? e.get() : e;
  return _v(t) ? t.toValue() : t;
}
function Pv(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const s = { latestValues: kv(r, i, o, e), renderState: t() };
  return n && (s.mount = (l) => n(r, l, s)), s;
}
const dh = (e) => (t, n) => {
  const r = P.useContext(Ho),
    i = P.useContext(Go),
    o = () => Pv(e, t, r, i);
  return n ? o() : Za(o);
};
function kv(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = Qi(o[d]);
  let { initial: s, animate: l } = e;
  const a = Yo(e),
    u = bp(e);
  t &&
    u &&
    !a &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? l : s;
  return (
    f &&
      typeof f != "boolean" &&
      !Qo(f) &&
      (Array.isArray(f) ? f : [f]).forEach((g) => {
        const y = ou(e, g);
        if (!y) return;
        const { transitionEnd: w, transition: k, ...m } = y;
        for (const p in m) {
          let h = m[p];
          if (Array.isArray(h)) {
            const v = c ? h.length - 1 : 0;
            h = h[v];
          }
          h !== null && (i[p] = h);
        }
        for (const p in w) i[p] = w[p];
      }),
    i
  );
}
const Cv = {
    useVisualState: dh({
      scrapeMotionValuesFromProps: fh,
      createRenderState: lh,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        try {
          n.dimensions =
            typeof t.getBBox == "function"
              ? t.getBBox()
              : t.getBoundingClientRect();
        } catch {
          n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        tu(
          n,
          r,
          { enableHardwareAcceleration: !1 },
          nu(t.tagName),
          e.transformTemplate
        ),
          ch(t, n);
      },
    }),
  },
  Tv = {
    useVisualState: dh({
      scrapeMotionValuesFromProps: iu,
      createRenderState: eu,
    }),
  };
function Ev(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(qa(e) ? Cv : Tv),
    preloadedFeatures: n,
    useRender: Sv(t),
    createVisualElement: r,
    Component: e,
  };
}
function dt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const ph = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Zo(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const Vv = (e) => (t) => ph(t) && e(t, Zo(t));
function ht(e, t, n, r) {
  return dt(e, t, Vv(n), r);
}
const Lv = (e, t) => (n) => t(e(n)),
  jt = (...e) => e.reduce(Lv);
function hh(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Mc = hh("dragHorizontal"),
  Nc = hh("dragVertical");
function mh(e) {
  let t = !1;
  if (e === "y") t = Nc();
  else if (e === "x") t = Mc();
  else {
    const n = Mc(),
      r = Nc();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function gh() {
  const e = mh(!0);
  return e ? (e(), !1) : !0;
}
class Yt {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Av(e) {
  let t = [],
    n = [],
    r = 0,
    i = !1,
    o = !1;
  const s = new WeakSet(),
    l = {
      schedule: (a, u = !1, c = !1) => {
        const f = c && i,
          d = f ? t : n;
        return (
          u && s.add(a),
          d.indexOf(a) === -1 && (d.push(a), f && i && (r = t.length)),
          a
        );
      },
      cancel: (a) => {
        const u = n.indexOf(a);
        u !== -1 && n.splice(u, 1), s.delete(a);
      },
      process: (a) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), (n.length = 0), (r = t.length), r))
          for (let u = 0; u < r; u++) {
            const c = t[u];
            c(a), s.has(c) && (l.schedule(c), e());
          }
        (i = !1), o && ((o = !1), l.process(a));
      },
    };
  return l;
}
const ye = { delta: 0, timestamp: 0, isProcessing: !1 },
  Rv = 40;
let jl = !0,
  ri = !1;
const di = ["read", "update", "preRender", "render", "postRender"],
  Jo = di.reduce((e, t) => ((e[t] = Av(() => (ri = !0))), e), {}),
  G = di.reduce((e, t) => {
    const n = Jo[t];
    return (e[t] = (r, i = !1, o = !1) => (ri || Mv(), n.schedule(r, i, o))), e;
  }, {}),
  Wt = di.reduce((e, t) => ((e[t] = Jo[t].cancel), e), {}),
  Ts = di.reduce((e, t) => ((e[t] = () => Jo[t].process(ye)), e), {}),
  Dv = (e) => Jo[e].process(ye),
  yh = (e) => {
    (ri = !1),
      (ye.delta = jl ? 1e3 / 60 : Math.max(Math.min(e - ye.timestamp, Rv), 1)),
      (ye.timestamp = e),
      (ye.isProcessing = !0),
      di.forEach(Dv),
      (ye.isProcessing = !1),
      ri && ((jl = !1), requestAnimationFrame(yh));
  },
  Mv = () => {
    (ri = !0), (jl = !0), ye.isProcessing || requestAnimationFrame(yh);
  };
function Oc(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, s) => {
      if (o.type === "touch" || gh()) return;
      const l = e.getProps();
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive("whileHover", t),
        l[r] && G.update(() => l[r](o, s));
    };
  return ht(e.current, n, i, { passive: !e.getProps()[r] });
}
class Nv extends Yt {
  mount() {
    this.unmount = jt(Oc(this.node, !0), Oc(this.node, !1));
  }
  unmount() {}
}
class Ov extends Yt {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = jt(
      dt(this.node.current, "focus", () => this.onFocus()),
      dt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const vh = (e, t) => (t ? (e === t ? !0 : vh(e, t.parentElement)) : !1),
  ae = (e) => e;
function Es(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Zo(n));
}
class Fv extends Yt {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = ae),
      (this.removeEndListeners = ae),
      (this.removeAccessibleListeners = ae),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          o = ht(
            window,
            "pointerup",
            (l, a) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              G.update(() => {
                vh(this.node.current, l.target) ? u && u(l, a) : c && c(l, a);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = ht(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = jt(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (l) => {
              l.key !== "Enter" ||
                !this.checkPressEnd() ||
                Es("up", (a, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && G.update(() => c(a, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = dt(this.node.current, "keyup", s)),
              Es("down", (l, a) => {
                this.startPress(l, a);
              });
          },
          n = dt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Es("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = dt(this.node.current, "blur", r);
        this.removeAccessibleListeners = jt(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && G.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !gh()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && G.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = ht(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = dt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = jt(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Bl = new WeakMap(),
  Vs = new WeakMap(),
  Iv = (e) => {
    const t = Bl.get(e.target);
    t && t(e);
  },
  zv = (e) => {
    e.forEach(Iv);
  };
function jv({ root: e, ...t }) {
  const n = e || document;
  Vs.has(n) || Vs.set(n, {});
  const r = Vs.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(zv, { root: e, ...t })), r[i];
}
function Bv(e, t, n) {
  const r = jv(t);
  return (
    Bl.set(e, n),
    r.observe(e),
    () => {
      Bl.delete(e), r.unobserve(e);
    }
  );
}
const Uv = { some: 0, all: 1 };
class $v extends Yt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Uv[i],
      },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(a);
      };
    return Bv(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Wv(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Wv({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Hv = {
  inView: { Feature: $v },
  tap: { Feature: Fv },
  focus: { Feature: Ov },
  hover: { Feature: Nv },
};
function wh(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Gv(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function Kv(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function qo(e, t, n) {
  const r = e.getProps();
  return ou(r, t, n !== void 0 ? n : r.custom, Gv(e), Kv(e));
}
const Qv = "framerAppearId",
  Yv = "data-" + ru(Qv);
let Xv = ae,
  su = ae;
const Bt = (e) => e * 1e3,
  mt = (e) => e / 1e3,
  Zv = { current: !1 },
  Sh = (e) => Array.isArray(e) && typeof e[0] == "number";
function _h(e) {
  return !!(
    !e ||
    (typeof e == "string" && xh[e]) ||
    Sh(e) ||
    (Array.isArray(e) && e.every(_h))
  );
}
const Sr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  xh = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Sr([0, 0.65, 0.55, 1]),
    circOut: Sr([0.55, 0, 1, 0.45]),
    backIn: Sr([0.31, 0.01, 0.66, -0.59]),
    backOut: Sr([0.33, 1.53, 0.69, 0.99]),
  };
function Ph(e) {
  if (e) return Sh(e) ? Sr(e) : Array.isArray(e) ? e.map(Ph) : xh[e];
}
function Jv(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: l,
    times: a,
  } = {}
) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = Ph(l);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
const Fc = {
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  },
  Ls = {},
  kh = {};
for (const e in Fc)
  kh[e] = () => (Ls[e] === void 0 && (Ls[e] = Fc[e]()), Ls[e]);
function qv(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const Ch = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  bv = 1e-7,
  e0 = 12;
function t0(e, t, n, r, i) {
  let o,
    s,
    l = 0;
  do (s = t + (n - t) / 2), (o = Ch(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > bv && ++l < e0);
  return s;
}
function pi(e, t, n, r) {
  if (e === t && n === r) return ae;
  const i = (o) => t0(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Ch(i(o), t, r));
}
const n0 = pi(0.42, 0, 1, 1),
  r0 = pi(0, 0, 0.58, 1),
  Th = pi(0.42, 0, 0.58, 1),
  i0 = (e) => Array.isArray(e) && typeof e[0] != "number",
  Eh = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Vh = (e) => (t) => 1 - e(1 - t),
  Lh = (e) => 1 - Math.sin(Math.acos(e)),
  lu = Vh(Lh),
  o0 = Eh(lu),
  Ah = pi(0.33, 1.53, 0.69, 0.99),
  au = Vh(Ah),
  s0 = Eh(au),
  l0 = (e) =>
    (e *= 2) < 1 ? 0.5 * au(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  a0 = {
    linear: ae,
    easeIn: n0,
    easeInOut: Th,
    easeOut: r0,
    circIn: Lh,
    circInOut: o0,
    circOut: lu,
    backIn: au,
    backInOut: s0,
    backOut: Ah,
    anticipate: l0,
  },
  Ic = (e) => {
    if (Array.isArray(e)) {
      su(e.length === 4);
      const [t, n, r, i] = e;
      return pi(t, n, r, i);
    } else if (typeof e == "string") return a0[e];
    return e;
  },
  uu = (e, t) => (n) =>
    !!(
      (ci(n) && sv.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Rh = (e, t, n) => (r) => {
    if (!ci(r)) return r;
    const [i, o, s, l] = r.match(ni);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  u0 = (e) => mn(0, 255, e),
  As = { ...wn, transform: (e) => Math.round(u0(e)) },
  ln = {
    test: uu("rgb", "red"),
    parse: Rh("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      As.transform(e) +
      ", " +
      As.transform(t) +
      ", " +
      As.transform(n) +
      ", " +
      Dr(Rr.transform(r)) +
      ")",
  };
function c0(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Ul = { test: uu("#"), parse: c0, transform: ln.transform },
  Fn = {
    test: uu("hsl", "hue"),
    parse: Rh("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      lt.transform(Dr(t)) +
      ", " +
      lt.transform(Dr(n)) +
      ", " +
      Dr(Rr.transform(r)) +
      ")",
  },
  we = {
    test: (e) => ln.test(e) || Ul.test(e) || Fn.test(e),
    parse: (e) =>
      ln.test(e) ? ln.parse(e) : Fn.test(e) ? Fn.parse(e) : Ul.parse(e),
    transform: (e) =>
      ci(e) ? e : e.hasOwnProperty("red") ? ln.transform(e) : Fn.transform(e),
  },
  X = (e, t, n) => -n * e + n * t + e;
function Rs(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function f0({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (i = Rs(a, l, e + 1 / 3)), (o = Rs(a, l, e)), (s = Rs(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const Ds = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  d0 = [Ul, ln, Fn],
  p0 = (e) => d0.find((t) => t.test(e));
function zc(e) {
  const t = p0(e);
  let n = t.parse(e);
  return t === Fn && (n = f0(n)), n;
}
const Dh = (e, t) => {
    const n = zc(e),
      r = zc(t),
      i = { ...n };
    return (o) => (
      (i.red = Ds(n.red, r.red, o)),
      (i.green = Ds(n.green, r.green, o)),
      (i.blue = Ds(n.blue, r.blue, o)),
      (i.alpha = X(n.alpha, r.alpha, o)),
      ln.transform(i)
    );
  },
  Mh = "${c}",
  Nh = "${n}";
function h0(e) {
  var t, n;
  return (
    isNaN(e) &&
    ci(e) &&
    (((t = e.match(ni)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(zl)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
function Po(e) {
  typeof e == "number" && (e = `${e}`);
  const t = [];
  let n = 0,
    r = 0;
  const i = e.match(zl);
  i && ((n = i.length), (e = e.replace(zl, Mh)), t.push(...i.map(we.parse)));
  const o = e.match(ni);
  return (
    o && ((r = o.length), (e = e.replace(ni, Nh)), t.push(...o.map(wn.parse))),
    { values: t, numColors: n, numNumbers: r, tokenised: e }
  );
}
function Oh(e) {
  return Po(e).values;
}
function Fh(e) {
  const { values: t, numColors: n, tokenised: r } = Po(e),
    i = t.length;
  return (o) => {
    let s = r;
    for (let l = 0; l < i; l++)
      s = s.replace(l < n ? Mh : Nh, l < n ? we.transform(o[l]) : Dr(o[l]));
    return s;
  };
}
const m0 = (e) => (typeof e == "number" ? 0 : e);
function g0(e) {
  const t = Oh(e);
  return Fh(e)(t.map(m0));
}
const Ht = {
  test: h0,
  parse: Oh,
  createTransformer: Fh,
  getAnimatableNone: g0,
};
function Ih(e, t) {
  return typeof e == "number"
    ? (n) => X(e, t, n)
    : we.test(e)
    ? Dh(e, t)
    : jh(e, t);
}
const zh = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((o, s) => Ih(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++) n[s] = i[s](o);
      return n;
    };
  },
  y0 = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = Ih(e[i], t[i]));
    return (i) => {
      for (const o in r) n[o] = r[o](i);
      return n;
    };
  },
  jh = (e, t) => {
    const n = Ht.createTransformer(t),
      r = Po(e),
      i = Po(t);
    return r.numColors === i.numColors && r.numNumbers >= i.numNumbers
      ? jt(zh(r.values, i.values), n)
      : (s) => `${s > 0 ? t : e}`;
  },
  ii = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  jc = (e, t) => (n) => X(e, t, n);
function v0(e) {
  return typeof e == "number"
    ? jc
    : typeof e == "string"
    ? we.test(e)
      ? Dh
      : jh
    : Array.isArray(e)
    ? zh
    : typeof e == "object"
    ? y0
    : jc;
}
function w0(e, t, n) {
  const r = [],
    i = n || v0(e[0]),
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let l = i(e[s], e[s + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[s] || ae : t;
      l = jt(a, l);
    }
    r.push(l);
  }
  return r;
}
function Bh(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((su(o === t.length), o === 1)) return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = w0(t, r, i),
    l = s.length,
    a = (u) => {
      let c = 0;
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = ii(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => a(mn(e[0], e[o - 1], u)) : a;
}
function S0(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = ii(0, t, r);
    e.push(X(n, 1, i));
  }
}
function _0(e) {
  const t = [0];
  return S0(t, e.length - 1), t;
}
function x0(e, t) {
  return e.map((n) => n * t);
}
function P0(e, t) {
  return e.map(() => t || Th).splice(0, e.length - 1);
}
function ko({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = i0(r) ? r.map(Ic) : Ic(r),
    o = { done: !1, value: t[0] },
    s = x0(n && n.length === t.length ? n : _0(t), e),
    l = Bh(s, t, { ease: Array.isArray(i) ? i : P0(t, i) });
  return {
    calculatedDuration: e,
    next: (a) => ((o.value = l(a)), (o.done = a >= e), o),
  };
}
function Uh(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const k0 = 5;
function $h(e, t, n) {
  const r = Math.max(t - k0, 0);
  return Uh(n - e(r), t - r);
}
const Ms = 0.001,
  C0 = 0.01,
  Bc = 10,
  T0 = 0.05,
  E0 = 1;
function V0({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  Xv(e <= Bt(Bc));
  let s = 1 - t;
  (s = mn(T0, E0, s)),
    (e = mn(C0, Bc, mt(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            g = $l(u, s),
            y = Math.exp(-f);
          return Ms - (d / g) * y;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            g = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            w = $l(Math.pow(u, 2), s);
          return ((-i(u) + Ms > 0 ? -1 : 1) * ((d - g) * y)) / w;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Ms + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const l = 5 / e,
    a = A0(i, o, l);
  if (((e = Bt(e)), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const L0 = 12;
function A0(e, t, n) {
  let r = n;
  for (let i = 1; i < L0; i++) r = r - e(r) / t(r);
  return r;
}
function $l(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const R0 = ["duration", "bounce"],
  D0 = ["stiffness", "damping", "mass"];
function Uc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function M0(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Uc(e, D0) && Uc(e, R0)) {
    const n = V0(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Wh({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: l,
      damping: a,
      mass: u,
      velocity: c,
      duration: f,
      isResolvedFromDuration: d,
    } = M0(r),
    g = c ? -mt(c) : 0,
    y = a / (2 * Math.sqrt(l * u)),
    w = o - i,
    k = mt(Math.sqrt(l / u)),
    m = Math.abs(w) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let p;
  if (y < 1) {
    const h = $l(k, y);
    p = (v) => {
      const S = Math.exp(-y * k * v);
      return (
        o - S * (((g + y * k * w) / h) * Math.sin(h * v) + w * Math.cos(h * v))
      );
    };
  } else if (y === 1) p = (h) => o - Math.exp(-k * h) * (w + (g + k * w) * h);
  else {
    const h = k * Math.sqrt(y * y - 1);
    p = (v) => {
      const S = Math.exp(-y * k * v),
        T = Math.min(h * v, 300);
      return (
        o - (S * ((g + y * k * w) * Math.sinh(T) + h * w * Math.cosh(T))) / h
      );
    };
  }
  return {
    calculatedDuration: (d && f) || null,
    next: (h) => {
      const v = p(h);
      if (d) s.done = h >= f;
      else {
        let S = g;
        h !== 0 && (y < 1 ? (S = $h(p, h, v)) : (S = 0));
        const T = Math.abs(S) <= n,
          C = Math.abs(o - v) <= t;
        s.done = T && C;
      }
      return (s.value = s.done ? o : v), s;
    },
  };
}
function $c({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    g = (_) => (l !== void 0 && _ < l) || (a !== void 0 && _ > a),
    y = (_) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - _) < Math.abs(a - _)
        ? l
        : a;
  let w = n * t;
  const k = f + w,
    m = s === void 0 ? k : s(k);
  m !== k && (w = m - f);
  const p = (_) => -w * Math.exp(-_ / r),
    h = (_) => m + p(_),
    v = (_) => {
      const D = p(_),
        R = h(_);
      (d.done = Math.abs(D) <= u), (d.value = d.done ? m : R);
    };
  let S, T;
  const C = (_) => {
    g(d.value) &&
      ((S = _),
      (T = Wh({
        keyframes: [d.value, y(d.value)],
        velocity: $h(h, _, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (_) => {
        let D = !1;
        return (
          !T && S === void 0 && ((D = !0), v(_), C(_)),
          S !== void 0 && _ > S ? T.next(_ - S) : (!D && v(_), d)
        );
      },
    }
  );
}
const N0 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => G.update(t, !0),
      stop: () => Wt.update(t),
      now: () => (ye.isProcessing ? ye.timestamp : performance.now()),
    };
  },
  Wc = 2e4;
function Hc(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Wc; ) (t += n), (r = e.next(t));
  return t >= Wc ? 1 / 0 : t;
}
const O0 = { decay: $c, inertia: $c, tween: ko, keyframes: ko, spring: Wh };
function Co({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = N0,
  keyframes: r,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: s = 0,
  repeatType: l = "loop",
  onPlay: a,
  onStop: u,
  onComplete: c,
  onUpdate: f,
  ...d
}) {
  let g = 1,
    y = !1,
    w,
    k;
  const m = () => {
    w && w(),
      (k = new Promise((N) => {
        w = N;
      }));
  };
  m();
  let p;
  const h = O0[i] || ko;
  let v;
  h !== ko &&
    typeof r[0] != "number" &&
    ((v = Bh([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const S = h({ ...d, keyframes: r });
  let T;
  l === "mirror" &&
    (T = h({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0),
    }));
  let C = "idle",
    _ = null,
    D = null,
    R = null;
  S.calculatedDuration === null && o && (S.calculatedDuration = Hc(S));
  const { calculatedDuration: K } = S;
  let se = 1 / 0,
    q = 1 / 0;
  K !== null && ((se = K + s), (q = se * (o + 1) - s));
  let z = 0;
  const j = (N) => {
      if (D === null) return;
      g > 0 && (D = Math.min(D, N)), _ !== null ? (z = _) : (z = (N - D) * g);
      const Q = z - t,
        Xt = Q < 0;
      (z = Math.max(Q, 0)), C === "finished" && _ === null && (z = q);
      let et = z,
        Sn = S;
      if (o) {
        const bo = z / se;
        let hi = Math.floor(bo),
          Jt = bo % 1;
        !Jt && bo >= 1 && (Jt = 1),
          Jt === 1 && hi--,
          (hi = Math.min(hi, o + 1));
        const yu = !!(hi % 2);
        yu &&
          (l === "reverse"
            ? ((Jt = 1 - Jt), s && (Jt -= s / se))
            : l === "mirror" && (Sn = T));
        let vu = mn(0, 1, Jt);
        z > q && (vu = l === "reverse" && yu ? 1 : 0), (et = vu * se);
      }
      const Ae = Xt ? { done: !1, value: r[0] } : Sn.next(et);
      v && (Ae.value = v(Ae.value));
      let { done: Zt } = Ae;
      !Xt && K !== null && (Zt = z >= q);
      const pm =
        _ === null &&
        (C === "finished" || (C === "running" && Zt) || (g < 0 && z <= 0));
      return f && f(Ae.value), pm && E(), Ae;
    },
    pe = () => {
      p && p.stop(), (p = void 0);
    },
    be = () => {
      (C = "idle"), pe(), m(), (D = R = null);
    },
    E = () => {
      (C = "finished"), c && c(), pe(), m();
    },
    M = () => {
      if (y) return;
      p || (p = n(j));
      const N = p.now();
      a && a(),
        (C = "running"),
        _ !== null ? (D = N - _) : D || (D = N),
        (R = D),
        (_ = null),
        p.start();
    };
  e && M();
  const O = {
    then(N, Q) {
      return k.then(N, Q);
    },
    get time() {
      return mt(z);
    },
    set time(N) {
      (N = Bt(N)),
        (z = N),
        _ !== null || !p || g === 0 ? (_ = N) : (D = p.now() - N / g);
    },
    get duration() {
      const N = S.calculatedDuration === null ? Hc(S) : S.calculatedDuration;
      return mt(N);
    },
    get speed() {
      return g;
    },
    set speed(N) {
      N === g || !p || ((g = N), (O.time = mt(z)));
    },
    get state() {
      return C;
    },
    play: M,
    pause: () => {
      (C = "paused"), (_ = z);
    },
    stop: () => {
      (y = !0), C !== "idle" && ((C = "idle"), u && u(), be());
    },
    cancel: () => {
      R !== null && j(R), be();
    },
    complete: () => {
      C = "finished";
    },
    sample: (N) => ((D = 0), j(N)),
  };
  return O;
}
const F0 = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  Mi = 10,
  I0 = 2e4,
  z0 = (e, t) => t.type === "spring" || e === "backgroundColor" || !_h(t.ease);
function j0(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      kh.waapi() &&
      F0.has(t) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let s = !1,
    l,
    a;
  const u = () => {
    a = new Promise((k) => {
      l = k;
    });
  };
  u();
  let { keyframes: c, duration: f = 300, ease: d, times: g } = i;
  if (z0(t, i)) {
    const k = Co({ ...i, repeat: 0, delay: 0 });
    let m = { done: !1, value: c[0] };
    const p = [];
    let h = 0;
    for (; !m.done && h < I0; ) (m = k.sample(h)), p.push(m.value), (h += Mi);
    (g = void 0), (c = p), (f = h - Mi), (d = "linear");
  }
  const y = Jv(e.owner.current, t, c, { ...i, duration: f, ease: d, times: g }),
    w = () => {
      G.update(() => y.cancel()), l(), u();
    };
  return (
    (y.onfinish = () => {
      e.set(qv(c, i)), r && r(), w();
    }),
    {
      then(k, m) {
        return a.then(k, m);
      },
      get time() {
        return mt(y.currentTime || 0);
      },
      set time(k) {
        y.currentTime = Bt(k);
      },
      get speed() {
        return y.playbackRate;
      },
      set speed(k) {
        y.playbackRate = k;
      },
      get duration() {
        return mt(f);
      },
      play: () => {
        s || y.play();
      },
      pause: () => y.pause(),
      stop: () => {
        if (((s = !0), y.playState === "idle")) return;
        const { currentTime: k } = y;
        if (k) {
          const m = Co({ ...i, autoplay: !1 });
          e.setWithVelocity(m.sample(k - Mi).value, m.sample(k).value, Mi);
        }
        w();
      },
      complete: () => y.finish(),
      cancel: w,
    }
  );
}
function B0({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: ae,
      pause: ae,
      stop: ae,
      then: (o) => (o(), Promise.resolve()),
      cancel: ae,
      complete: ae,
    }
  );
  return t
    ? Co({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
    : i();
}
const U0 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  $0 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  W0 = { type: "keyframes", duration: 0.8 },
  H0 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  G0 = (e, { keyframes: t }) =>
    t.length > 2
      ? W0
      : vn.has(e)
      ? e.startsWith("scale")
        ? $0(t[1])
        : U0
      : H0,
  Wl = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" && Ht.test(t) && !t.startsWith("url("))
        ),
  K0 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Q0(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(ni) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = K0.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const Y0 = /([a-z-]*)\(.*?\)/g,
  Hl = {
    ...Ht,
    getAnimatableNone: (e) => {
      const t = e.match(Y0);
      return t ? t.map(Q0).join(" ") : e;
    },
  },
  X0 = {
    ...ih,
    color: we,
    backgroundColor: we,
    outlineColor: we,
    fill: we,
    stroke: we,
    borderColor: we,
    borderTopColor: we,
    borderRightColor: we,
    borderBottomColor: we,
    borderLeftColor: we,
    filter: Hl,
    WebkitFilter: Hl,
  },
  cu = (e) => X0[e];
function fu(e, t) {
  let n = cu(e);
  return (
    n !== Hl && (n = Ht), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
function Z0({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Gc(e) {
  return (
    e === 0 ||
    (typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1)
  );
}
function Kc(e) {
  return typeof e == "number" ? 0 : fu("", e);
}
function Hh(e, t) {
  return e[t] || e.default || e;
}
function J0(e, [...t]) {
  for (let n = 0; n < t.length; n++)
    t[n] === null && (t[n] = n === 0 ? e : t[n - 1]);
  return t;
}
function q0(e, t, n, r) {
  const i = Wl(t, n);
  let o = r.from !== void 0 ? r.from : e.get();
  return (
    o === "none" && i && typeof n == "string"
      ? (o = fu(t, n))
      : Gc(o) && typeof n == "string"
      ? (o = Kc(n))
      : !Array.isArray(n) && Gc(n) && typeof o == "string" && (n = Kc(o)),
    Array.isArray(n) ? J0(o, n) : [o, n]
  );
}
const du =
  (e, t, n, r = {}) =>
  (i) => {
    const o = Hh(r, e) || {},
      s = o.delay || r.delay || 0;
    let { elapsed: l = 0 } = r;
    l = l - Bt(s);
    const a = q0(t, e, n, o),
      u = a[0],
      c = a[a.length - 1],
      f = Wl(e, u),
      d = Wl(e, c);
    let g = {
      keyframes: a,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...o,
      delay: -l,
      onUpdate: (y) => {
        t.set(y), o.onUpdate && o.onUpdate(y);
      },
      onComplete: () => {
        i(), o.onComplete && o.onComplete();
      },
    };
    if (
      (Z0(o) || (g = { ...g, ...G0(e, g) }),
      g.duration && (g.duration = Bt(g.duration)),
      g.repeatDelay && (g.repeatDelay = Bt(g.repeatDelay)),
      !f || !d || Zv.current || o.type === !1)
    )
      return B0(g);
    if (
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const y = j0(t, e, g);
      if (y) return y;
    }
    return Co(g);
  };
function To(e) {
  return !!(Le(e) && e.add);
}
const b0 = (e) => /^\-?\d*\.?\d+$/.test(e),
  e1 = (e) => /^0[^.\s]+$/.test(e);
function pu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function hu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class mu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return pu(this.subscriptions, t), () => hu(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const t1 = (e) => !isNaN(parseFloat(e));
class n1 {
  constructor(t, n = {}) {
    (this.version = "10.11.2"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: o, timestamp: s } = ye;
        this.lastUpdated !== s &&
          ((this.timeDelta = o),
          (this.lastUpdated = s),
          G.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => G.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = t1(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new mu());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            G.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? Uh(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function qn(e, t) {
  return new n1(e, t);
}
const Gh = (e) => (t) => t.test(e),
  r1 = { test: (e) => e === "auto", parse: (e) => e },
  Kh = [wn, L, lt, Pt, av, lv, r1],
  cr = (e) => Kh.find(Gh(e)),
  i1 = [...Kh, we, Ht],
  o1 = (e) => i1.find(Gh(e));
function s1(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, qn(n));
}
function l1(e, t) {
  const n = qo(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...o
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (const s in o) {
    const l = xv(o[s]);
    s1(e, s, l);
  }
}
function a1(e, t, n) {
  var r, i;
  const o = Object.keys(t).filter((l) => !e.hasValue(l)),
    s = o.length;
  if (s)
    for (let l = 0; l < s; l++) {
      const a = o[l],
        u = t[a];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (i = (r = n[a]) !== null && r !== void 0 ? r : e.readValue(a)) !==
              null && i !== void 0
              ? i
              : t[a]),
        c != null &&
          (typeof c == "string" && (b0(c) || e1(c))
            ? (c = parseFloat(c))
            : !o1(c) && Ht.test(u) && (c = fu(a, u)),
          e.addValue(a, qn(c, { owner: e })),
          n[a] === void 0 && (n[a] = c),
          c !== null && e.setBaseTarget(a, c));
    }
}
function u1(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function c1(e, t, n) {
  const r = {};
  for (const i in e) {
    const o = u1(i, t);
    if (o !== void 0) r[i] = o;
    else {
      const s = n.getValue(i);
      s && (r[i] = s.get());
    }
  }
  return r;
}
function f1({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Qh(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: o = e.getDefaultTransition(),
    transitionEnd: s,
    ...l
  } = e.makeTargetAnimatable(t);
  const a = e.getValue("willChange");
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(f),
      g = l[f];
    if (!d || g === void 0 || (c && f1(c, f))) continue;
    const y = { delay: n, elapsed: 0, ...o };
    if (window.HandoffAppearAnimations && !d.hasAnimated) {
      const k = e.getProps()[Yv];
      k && (y.elapsed = window.HandoffAppearAnimations(k, f, d, G));
    }
    d.start(du(f, d, g, e.shouldReduceMotion && vn.has(f) ? { type: !1 } : y));
    const w = d.animation;
    To(a) && (a.add(f), w.then(() => a.remove(f))), u.push(w);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && l1(e, s);
      }),
    u
  );
}
function Gl(e, t, n = {}) {
  const r = qo(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(Qh(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (a = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: f,
            } = i;
            return d1(e, t, u + a, c, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [a, u] = l === "beforeChildren" ? [o, s] : [s, o];
    return a().then(() => u());
  } else return Promise.all([o(), s(n.delay)]);
}
function d1(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(p1)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            Gl(u, t, { ...o, delay: n + a(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function p1(e, t) {
  return e.sortNodePosition(t);
}
function h1(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Gl(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Gl(e, t, n);
  else {
    const i = typeof t == "function" ? qo(e, t, n.custom) : t;
    r = Promise.all(Qh(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const m1 = [...Ya].reverse(),
  g1 = Ya.length;
function y1(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => h1(e, n, r)));
}
function v1(e) {
  let t = y1(e);
  const n = S1();
  let r = !0;
  const i = (a, u) => {
    const c = qo(e, u);
    if (c) {
      const { transition: f, transitionEnd: d, ...g } = c;
      a = { ...a, ...g, ...d };
    }
    return a;
  };
  function o(a) {
    t = a(e);
  }
  function s(a, u) {
    const c = e.getProps(),
      f = e.getVariantContext(!0) || {},
      d = [],
      g = new Set();
    let y = {},
      w = 1 / 0;
    for (let m = 0; m < g1; m++) {
      const p = m1[m],
        h = n[p],
        v = c[p] !== void 0 ? c[p] : f[p],
        S = ei(v),
        T = p === u ? h.isActive : null;
      T === !1 && (w = m);
      let C = v === f[p] && v !== c[p] && S;
      if (
        (C && r && e.manuallyAnimateOnMount && (C = !1),
        (h.protectedKeys = { ...y }),
        (!h.isActive && T === null) ||
          (!v && !h.prevProp) ||
          Qo(v) ||
          typeof v == "boolean")
      )
        continue;
      const _ = w1(h.prevProp, v);
      let D = _ || (p === u && h.isActive && !C && S) || (m > w && S);
      const R = Array.isArray(v) ? v : [v];
      let K = R.reduce(i, {});
      T === !1 && (K = {});
      const { prevResolvedValues: se = {} } = h,
        q = { ...se, ...K },
        z = (j) => {
          (D = !0), g.delete(j), (h.needsAnimating[j] = !0);
        };
      for (const j in q) {
        const pe = K[j],
          be = se[j];
        y.hasOwnProperty(j) ||
          (pe !== be
            ? xo(pe) && xo(be)
              ? !wh(pe, be) || _
                ? z(j)
                : (h.protectedKeys[j] = !0)
              : pe !== void 0
              ? z(j)
              : g.add(j)
            : pe !== void 0 && g.has(j)
            ? z(j)
            : (h.protectedKeys[j] = !0));
      }
      (h.prevProp = v),
        (h.prevResolvedValues = K),
        h.isActive && (y = { ...y, ...K }),
        r && e.blockInitialAnimation && (D = !1),
        D &&
          !C &&
          d.push(
            ...R.map((j) => ({ animation: j, options: { type: p, ...a } }))
          );
    }
    if (g.size) {
      const m = {};
      g.forEach((p) => {
        const h = e.getBaseTarget(p);
        h !== void 0 && (m[p] = h);
      }),
        d.push({ animation: m });
    }
    let k = !!d.length;
    return (
      r && c.initial === !1 && !e.manuallyAnimateOnMount && (k = !1),
      (r = !1),
      k ? t(d) : Promise.resolve()
    );
  }
  function l(a, u, c) {
    var f;
    if (n[a].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((g) => {
        var y;
        return (y = g.animationState) === null || y === void 0
          ? void 0
          : y.setActive(a, u);
      }),
      (n[a].isActive = u);
    const d = s(c, a);
    for (const g in n) n[g].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function w1(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !wh(t, e) : !1;
}
function qt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function S1() {
  return {
    animate: qt(!0),
    whileInView: qt(),
    whileHover: qt(),
    whileTap: qt(),
    whileDrag: qt(),
    whileFocus: qt(),
    exit: qt(),
  };
}
class _1 extends Yt {
  constructor(t) {
    super(t), t.animationState || (t.animationState = v1(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Qo(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let x1 = 0;
class P1 extends Yt {
  constructor() {
    super(...arguments), (this.id = x1++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const o = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const k1 = { animation: { Feature: _1 }, exit: { Feature: P1 } },
  Qc = (e, t) => Math.abs(e - t);
function C1(e, t) {
  const n = Qc(e.x, t.x),
    r = Qc(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Yh {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = Os(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          f = C1(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !f) return;
        const { point: d } = u,
          { timestamp: g } = ye;
        this.history.push({ ...d, timestamp: g });
        const { onStart: y, onMove: w } = this.handlers;
        c ||
          (y && y(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          w && w(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = Ns(c, this.transformPagePoint)),
          G.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: f, onSessionEnd: d } = this.handlers,
          g = Os(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Ns(c, this.transformPagePoint),
            this.history
          );
        this.startEvent && f && f(u, g), d && d(u, g);
      }),
      !ph(t))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const i = Zo(t),
      o = Ns(i, this.transformPagePoint),
      { point: s } = o,
      { timestamp: l } = ye;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: a } = n;
    a && a(t, Os(o, this.history)),
      (this.removeListeners = jt(
        ht(window, "pointermove", this.handlePointerMove),
        ht(window, "pointerup", this.handlePointerUp),
        ht(window, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Wt.update(this.updatePoint);
  }
}
function Ns(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Yc(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Os({ point: e }, t) {
  return {
    point: e,
    delta: Yc(e, Xh(t)),
    offset: Yc(e, T1(t)),
    velocity: E1(t, 0.1),
  };
}
function T1(e) {
  return e[0];
}
function Xh(e) {
  return e[e.length - 1];
}
function E1(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Xh(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Bt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = mt(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Fe(e) {
  return e.max - e.min;
}
function Kl(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Xc(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = X(t.min, t.max, e.origin)),
    (e.scale = Fe(n) / Fe(t)),
    (Kl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = X(n.min, n.max, e.origin) - e.originPoint),
    (Kl(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Mr(e, t, n, r) {
  Xc(e.x, t.x, n.x, r ? r.originX : void 0),
    Xc(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Zc(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Fe(t));
}
function V1(e, t, n) {
  Zc(e.x, t.x, n.x), Zc(e.y, t.y, n.y);
}
function Jc(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Fe(t));
}
function Nr(e, t, n) {
  Jc(e.x, t.x, n.x), Jc(e.y, t.y, n.y);
}
function L1(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? X(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? X(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function qc(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function A1(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: qc(e.x, n, i), y: qc(e.y, t, r) };
}
function bc(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function R1(e, t) {
  return { x: bc(e.x, t.x), y: bc(e.y, t.y) };
}
function D1(e, t) {
  let n = 0.5;
  const r = Fe(e),
    i = Fe(t);
  return (
    i > r
      ? (n = ii(t.min, t.max - r, e.min))
      : r > i && (n = ii(e.min, e.max - i, t.min)),
    mn(0, 1, n)
  );
}
function M1(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Ql = 0.35;
function N1(e = Ql) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Ql),
    { x: ef(e, "left", "right"), y: ef(e, "top", "bottom") }
  );
}
function ef(e, t, n) {
  return { min: tf(e, t), max: tf(e, n) };
}
function tf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const nf = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Or = () => ({ x: nf(), y: nf() }),
  rf = () => ({ min: 0, max: 0 }),
  te = () => ({ x: rf(), y: rf() });
function rt(e) {
  return [e("x"), e("y")];
}
function Zh({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function O1({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function F1(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Fs(e) {
  return e === void 0 || e === 1;
}
function Yl({ scale: e, scaleX: t, scaleY: n }) {
  return !Fs(e) || !Fs(t) || !Fs(n);
}
function tn(e) {
  return Yl(e) || Jh(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Jh(e) {
  return of(e.x) || of(e.y);
}
function of(e) {
  return e && e !== "0%";
}
function Eo(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function sf(e, t, n, r, i) {
  return i !== void 0 && (e = Eo(e, i, r)), Eo(e, n, r) + t;
}
function Xl(e, t = 0, n = 1, r, i) {
  (e.min = sf(e.min, t, n, r, i)), (e.max = sf(e.max, t, n, r, i));
}
function qh(e, { x: t, y: n }) {
  Xl(e.x, t.translate, t.scale, t.originPoint),
    Xl(e.y, n.translate, n.scale, n.originPoint);
}
function I1(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let l = 0; l < i; l++) {
    (o = n[l]), (s = o.projectionDelta);
    const a = o.instance;
    (a && a.style && a.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        In(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), qh(e, s)),
      r && tn(o.latestValues) && In(e, o.latestValues));
  }
  (t.x = lf(t.x)), (t.y = lf(t.y));
}
function lf(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Tt(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function af(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = X(e.min, e.max, o);
  Xl(e, t[n], t[r], s, t.scale);
}
const z1 = ["x", "scaleX", "originX"],
  j1 = ["y", "scaleY", "originY"];
function In(e, t) {
  af(e.x, t, z1), af(e.y, t, j1);
}
function bh(e, t) {
  return Zh(F1(e.getBoundingClientRect(), t));
}
function B1(e, t, n) {
  const r = bh(e, n),
    { scroll: i } = t;
  return i && (Tt(r.x, i.offset.x), Tt(r.y, i.offset.y)), r;
}
const U1 = new WeakMap();
class $1 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = te()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (a) => {
        this.stopAnimation(), n && this.snapToCursor(Zo(a, "page").point);
      },
      o = (a, u) => {
        const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
        if (
          c &&
          !f &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = mh(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          rt((y) => {
            let w = this.getAxisMotionValue(y).get() || 0;
            if (lt.test(w)) {
              const { projection: k } = this.visualElement;
              if (k && k.layout) {
                const m = k.layout.layoutBox[y];
                m && (w = Fe(m) * (parseFloat(w) / 100));
              }
            }
            this.originPoint[y] = w;
          }),
          d && G.update(() => d(a, u));
        const { animationState: g } = this.visualElement;
        g && g.setActive("whileDrag", !0);
      },
      s = (a, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: f,
          onDirectionLock: d,
          onDrag: g,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: y } = u;
        if (f && this.currentDirection === null) {
          (this.currentDirection = W1(y)),
            this.currentDirection !== null && d && d(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, y),
          this.updateAxis("y", u.point, y),
          this.visualElement.render(),
          g && g(a, u);
      },
      l = (a, u) => this.stop(a, u);
    this.panSession = new Yh(
      t,
      { onSessionStart: i, onStart: o, onMove: s, onSessionEnd: l },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && G.update(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ni(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = L1(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      i = this.constraints;
    t && On(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = A1(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = N1(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        rt((o) => {
          this.getAxisMotionValue(o) &&
            (this.constraints[o] = M1(r.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !On(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = B1(r, i.root, this.visualElement.getTransformPagePoint());
    let s = R1(i.layout.layoutBox, o);
    if (n) {
      const l = n(O1(s));
      (this.hasMutatedConstraints = !!l), l && (s = Zh(l));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = rt((c) => {
        if (!Ni(c, n, this.currentDirection)) return;
        let f = (a && a[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(du(t, r, 0, n));
  }
  stopAnimation() {
    rt((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    rt((n) => {
      const { drag: r } = this.getProps();
      if (!Ni(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: l } = i.layout.layoutBox[n];
        o.set(t[n] - X(s, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!On(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    rt((s) => {
      const l = this.getAxisMotionValue(s);
      if (l) {
        const a = l.get();
        i[s] = D1({ min: a, max: a }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      rt((s) => {
        if (!Ni(s, t, null)) return;
        const l = this.getAxisMotionValue(s),
          { min: a, max: u } = this.constraints[s];
        l.set(X(a, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    U1.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = ht(t, "pointerdown", (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        On(a) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const s = dt(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (rt((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += a[c].translate),
                f.set(f.get() + a[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Ql,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: l,
    };
  }
}
function Ni(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function W1(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class H1 extends Yt {
  constructor(t) {
    super(t),
      (this.removeGroupControls = ae),
      (this.removeListeners = ae),
      (this.controls = new $1(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ae);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const uf = (e) => (t, n) => {
  e && G.update(() => e(t, n));
};
class G1 extends Yt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = ae);
  }
  onPointerDown(t) {
    this.session = new Yh(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: uf(t),
      onStart: uf(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && G.update(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ht(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function K1() {
  const e = P.useContext(Go);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = P.useId();
  return P.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
function cf(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const fr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (L.test(e)) e = parseFloat(e);
        else return e;
      const n = cf(e, t.target.x),
        r = cf(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  em = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Q1(e) {
  const t = em.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function Zl(e, t, n = 1) {
  const [r, i] = Q1(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  return o ? o.trim() : Il(i) ? Zl(i, t, n + 1) : i;
}
function Y1(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      const o = i.get();
      if (!Il(o)) return;
      const s = Zl(o, r);
      s && i.set(s);
    });
  for (const i in t) {
    const o = t[i];
    if (!Il(o)) continue;
    const s = Zl(o, r);
    s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
const ff = "_$css",
  X1 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = e.includes("var("),
        o = [];
      i && (e = e.replace(em, (g) => (o.push(g), ff)));
      const s = Ht.parse(e);
      if (s.length > 5) return r;
      const l = Ht.createTransformer(e),
        a = typeof s[0] != "number" ? 1 : 0,
        u = n.x.scale * t.x,
        c = n.y.scale * t.y;
      (s[0 + a] /= u), (s[1 + a] /= c);
      const f = X(u, c, 0.5);
      typeof s[2 + a] == "number" && (s[2 + a] /= f),
        typeof s[3 + a] == "number" && (s[3 + a] /= f);
      let d = l(s);
      if (i) {
        let g = 0;
        d = d.replace(ff, () => {
          const y = o[g];
          return g++, y;
        });
      }
      return d;
    },
  };
class Z1 extends ra.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    tv(J1),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Ar.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              G.postRender(() => {
                const l = s.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      !t.currentAnimation && t.isLead() && this.safeToRemove());
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function tm(e) {
  const [t, n] = K1(),
    r = P.useContext(Ja);
  return ra.createElement(Z1, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: P.useContext(eh),
    isPresent: t,
    safeToRemove: n,
  });
}
const J1 = {
    borderRadius: {
      ...fr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: fr,
    borderTopRightRadius: fr,
    borderBottomLeftRadius: fr,
    borderBottomRightRadius: fr,
    boxShadow: X1,
  },
  nm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  q1 = nm.length,
  df = (e) => (typeof e == "string" ? parseFloat(e) : e),
  pf = (e) => typeof e == "number" || L.test(e);
function b1(e, t, n, r, i, o) {
  i
    ? ((e.opacity = X(0, n.opacity !== void 0 ? n.opacity : 1, ew(r))),
      (e.opacityExit = X(t.opacity !== void 0 ? t.opacity : 1, 0, tw(r))))
    : o &&
      (e.opacity = X(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < q1; s++) {
    const l = `border${nm[s]}Radius`;
    let a = hf(t, l),
      u = hf(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || pf(a) === pf(u)
        ? ((e[l] = Math.max(X(df(a), df(u), r), 0)),
          (lt.test(u) || lt.test(a)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = X(t.rotate || 0, n.rotate || 0, r));
}
function hf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const ew = rm(0, 0.5, lu),
  tw = rm(0.5, 0.95, ae);
function rm(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(ii(e, t, r)));
}
function mf(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function je(e, t) {
  mf(e.x, t.x), mf(e.y, t.y);
}
function gf(e, t, n, r, i) {
  return (
    (e -= t), (e = Eo(e, 1 / n, r)), i !== void 0 && (e = Eo(e, 1 / i, r)), e
  );
}
function nw(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (lt.test(t) &&
      ((t = parseFloat(t)), (t = X(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let l = X(o.min, o.max, r);
  e === o && (l -= t),
    (e.min = gf(e.min, t, n, l, i)),
    (e.max = gf(e.max, t, n, l, i));
}
function yf(e, t, [n, r, i], o, s) {
  nw(e, t[n], t[r], t[i], t.scale, o, s);
}
const rw = ["x", "scaleX", "originX"],
  iw = ["y", "scaleY", "originY"];
function vf(e, t, n, r) {
  yf(e.x, t, rw, n ? n.x : void 0, r ? r.x : void 0),
    yf(e.y, t, iw, n ? n.y : void 0, r ? r.y : void 0);
}
function wf(e) {
  return e.translate === 0 && e.scale === 1;
}
function im(e) {
  return wf(e.x) && wf(e.y);
}
function Jl(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function Sf(e) {
  return Fe(e.x) / Fe(e.y);
}
class ow {
  constructor() {
    this.members = [];
  }
  add(t) {
    pu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (hu(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function _f(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y;
  if (
    ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: a, rotateX: u, rotateY: c } = n;
    a && (r += `rotate(${a}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const s = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`), r || "none";
}
const sw = (e, t) => e.depth - t.depth;
class lw {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    pu(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    hu(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(sw),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function aw(e, t) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (Wt.read(r), e(o - t));
    };
  return G.read(r, !0), () => Wt.read(r);
}
function uw(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function cw(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function fw(e, t, n) {
  const r = Le(e) ? e : qn(e);
  return r.start(du("", r, t, n)), r.animation;
}
const xf = ["", "X", "Y", "Z"],
  Pf = 1e3;
let dw = 0;
const nn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function om({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s, l = {}, a = t == null ? void 0 : t()) {
      (this.id = dw++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.potentialNodes = new Map()),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (nn.totalNodes =
            nn.resolvedTargetDeltas =
            nn.recalculatedProjection =
              0),
            this.nodes.forEach(mw),
            this.nodes.forEach(ww),
            this.nodes.forEach(Sw),
            this.nodes.forEach(gw),
            uw(nn);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.elementId = s),
        (this.latestValues = l),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0),
        s && this.root.registerPotentialNode(s, this);
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new lw());
    }
    addEventListener(s, l) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new mu()),
        this.eventHandlers.get(s).add(l)
      );
    }
    notifyListeners(s, ...l) {
      const a = this.eventHandlers.get(s);
      a && a.notify(...l);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    registerPotentialNode(s, l) {
      this.potentialNodes.set(s, l);
    }
    mount(s, l = !1) {
      if (this.instance) return;
      (this.isSVG = cw(s)), (this.instance = s);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.elementId && this.root.potentialNodes.delete(this.elementId),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = aw(d, 250)),
            Ar.hasAnimatedSinceResize &&
              ((Ar.hasAnimatedSinceResize = !1), this.nodes.forEach(Cf));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: g,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const w =
                  this.options.transition || c.getDefaultTransition() || Cw,
                { onLayoutAnimationStart: k, onLayoutAnimationComplete: m } =
                  c.getProps(),
                p = !this.targetLayout || !Jl(this.targetLayout, y) || g,
                h = !d && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                h ||
                (d && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, h);
                const v = { ...Hh(w, "layout"), onPlay: k, onComplete: m };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((v.delay = 0), (v.type = !1)),
                  this.startAnimation(v);
              } else
                !d && this.animationProgress === 0 && Cf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Wt.preRender(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(_w),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    didUpdate() {
      if (this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(kf);
        return;
      }
      this.isUpdating &&
        ((this.isUpdating = !1),
        this.potentialNodes.size &&
          (this.potentialNodes.forEach(Tw), this.potentialNodes.clear()),
        this.nodes.forEach(vw),
        this.nodes.forEach(pw),
        this.nodes.forEach(hw),
        this.clearAllSnapshots(),
        Ts.update(),
        Ts.preRender(),
        Ts.render());
    }
    clearAllSnapshots() {
      this.nodes.forEach(yw), this.sharedNodes.forEach(xw);
    }
    scheduleUpdateProjection() {
      G.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      G.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = te()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (l = !1),
        l &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        l = this.projectionDelta && !im(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (l || tn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        s && (a = this.removeTransform(a)),
        Ew(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return te();
      const l = s.measureViewportBox(),
        { scroll: a } = this.root;
      return a && (Tt(l.x, a.offset.x), Tt(l.y, a.offset.y)), l;
    }
    removeElementScroll(s) {
      const l = te();
      je(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a],
          { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            je(l, s);
            const { scroll: d } = this.root;
            d && (Tt(l.x, -d.offset.x), Tt(l.y, -d.offset.y));
          }
          Tt(l.x, c.offset.x), Tt(l.y, c.offset.y);
        }
      }
      return l;
    }
    applyTransform(s, l = !1) {
      const a = te();
      je(a, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          In(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          tn(c.latestValues) && In(a, c.latestValues);
      }
      return tn(this.latestValues) && In(a, this.latestValues), a;
    }
    removeTransform(s) {
      const l = te();
      je(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !tn(u.latestValues)) continue;
        Yl(u.latestValues) && u.updateSnapshot();
        const c = te(),
          f = u.measurePageBox();
        je(c, f),
          vf(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return tn(this.latestValues) && vf(l, this.latestValues), l;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    resolveTargetDelta(s = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = ye.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout
            ? ((this.relativeParent = g),
              (this.relativeTarget = te()),
              (this.relativeTargetOrigin = te()),
              Nr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox
              ),
              je(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = te()), (this.targetWithTransforms = te())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.relativeParent.resolvedRelativeTargetAt !==
                  ye.timestamp && this.relativeParent.resolveTargetDelta(!0),
                V1(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : je(this.target, this.layout.layoutBox),
                qh(this.target, this.targetDelta))
              : je(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target
              ? ((this.relativeParent = g),
                (this.relativeTarget = te()),
                (this.relativeTargetOrigin = te()),
                Nr(this.relativeTargetOrigin, this.target, g.target),
                je(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          nn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Yl(this.parent.latestValues) ||
          Jh(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === ye.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      je(this.layoutCorrected, this.layout.layoutBox),
        I1(this.layoutCorrected, this.treeScale, this.path, a);
      const { target: d } = l;
      if (!d) return;
      this.projectionDelta ||
        ((this.projectionDelta = Or()),
        (this.projectionDeltaWithTransform = Or()));
      const g = this.treeScale.x,
        y = this.treeScale.y,
        w = this.projectionTransform;
      Mr(this.projectionDelta, this.layoutCorrected, d, this.latestValues),
        (this.projectionTransform = _f(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== w ||
          this.treeScale.x !== g ||
          this.treeScale.y !== y) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", d)),
        nn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        f = Or();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const d = te(),
        g = a ? a.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        w = g !== y,
        k = this.getStack(),
        m = !k || k.members.length <= 1,
        p = !!(w && !m && this.options.crossfade === !0 && !this.path.some(kw));
      this.animationProgress = 0;
      let h;
      (this.mixTargetDelta = (v) => {
        const S = v / 1e3;
        Tf(f.x, s.x, S),
          Tf(f.y, s.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Nr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Pw(this.relativeTarget, this.relativeTargetOrigin, d, S),
            h && Jl(this.relativeTarget, h) && (this.isProjectionDirty = !1),
            h || (h = te()),
            je(h, this.relativeTarget)),
          w &&
            ((this.animationValues = c), b1(c, u, this.latestValues, S, p, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Wt.update(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = G.update(() => {
          (Ar.hasAnimatedSinceResize = !0),
            (this.currentAnimation = fw(0, Pf, {
              ...s,
              onUpdate: (l) => {
                this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Pf),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!l || !a || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          sm(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || te();
          const f = Fe(this.layout.layoutBox.x);
          (a.x.min = s.target.x.min), (a.x.max = a.x.min + f);
          const d = Fe(this.layout.layoutBox.y);
          (a.y.min = s.target.y.min), (a.y.max = a.y.min + d);
        }
        je(l, a),
          In(l, c),
          Mr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new ow()),
        this.sharedNodes.get(s).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let l = !1;
      const { latestValues: a } = s;
      if (((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (l = !0), !l))
        return;
      const u = {};
      for (let c = 0; c < xf.length; c++) {
        const f = "rotate" + xf[c];
        a[f] && ((u[f] = a[f]), s.setStaticValue(f, 0));
      }
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s = {}) {
      var l, a;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = "";
      else return { visibility: "hidden" };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Qi(s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const w = {};
        return (
          this.options.layoutId &&
            ((w.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (w.pointerEvents = Qi(s.pointerEvents) || "")),
          this.hasProjected &&
            !tn(this.latestValues) &&
            ((w.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          w
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = _f(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: g, y } = this.projectionDelta;
      (u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (a =
                    (l = d.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const w in So) {
        if (d[w] === void 0) continue;
        const { correct: k, applyTo: m } = So[w],
          p = u.transform === "none" ? d[w] : k(d[w], f);
        if (m) {
          const h = m.length;
          for (let v = 0; v < h; v++) u[m[v]] = p;
        } else u[w] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = f === this ? Qi(s.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l;
        return (l = s.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach(kf),
        this.root.sharedNodes.clear();
    }
  };
}
function pw(e) {
  e.updateLayout();
}
function hw(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? rt((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = Fe(d);
          (d.min = r[f].min), (d.max = d.min + g);
        })
      : sm(o, n.layoutBox, r) &&
        rt((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = Fe(r[f]);
          (d.max = d.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + g));
        });
    const l = Or();
    Mr(l, r, n.layoutBox);
    const a = Or();
    s ? Mr(a, e.applyTransform(i, !0), n.measuredBox) : Mr(a, r, n.layoutBox);
    const u = !im(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const y = te();
          Nr(y, n.layoutBox, d.layoutBox);
          const w = te();
          Nr(w, r, g.layoutBox),
            Jl(y, w) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = w),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function mw(e) {
  nn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function gw(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function yw(e) {
  e.clearSnapshot();
}
function kf(e) {
  e.clearMeasurements();
}
function vw(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Cf(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0);
}
function ww(e) {
  e.resolveTargetDelta();
}
function Sw(e) {
  e.calcProjection();
}
function _w(e) {
  e.resetRotation();
}
function xw(e) {
  e.removeLeadSnapshot();
}
function Tf(e, t, n) {
  (e.translate = X(t.translate, 0, n)),
    (e.scale = X(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Ef(e, t, n, r) {
  (e.min = X(t.min, n.min, r)), (e.max = X(t.max, n.max, r));
}
function Pw(e, t, n, r) {
  Ef(e.x, t.x, n.x, r), Ef(e.y, t.y, n.y, r);
}
function kw(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Cw = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function Tw(e, t) {
  let n = e.root;
  for (let o = e.path.length - 1; o >= 0; o--)
    if (e.path[o].instance) {
      n = e.path[o];
      break;
    }
  const i = (n && n !== e.root ? n.instance : document).querySelector(
    `[data-projection-id="${t}"]`
  );
  i && e.mount(i, !0);
}
function Vf(e) {
  (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
}
function Ew(e) {
  Vf(e.x), Vf(e.y);
}
function sm(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Kl(Sf(t), Sf(n), 0.2))
  );
}
const Vw = om({
    attachResizeListener: (e, t) => dt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Is = { current: void 0 },
  lm = om({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Is.current) {
        const e = new Vw(0, {});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Is.current = e);
      }
      return Is.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Lw = {
    pan: { Feature: G1 },
    drag: { Feature: H1, ProjectionNode: lm, MeasureLayout: tm },
  },
  Aw = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
  am = (e) => Aw.has(e),
  Rw = (e) => Object.keys(e).some(am),
  Lf = (e) => e === wn || e === L,
  Af = (e, t) => parseFloat(e.split(", ")[t]),
  Rf =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return Af(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? Af(o[1], e) : 0;
      }
    },
  Dw = new Set(["x", "y", "z"]),
  Mw = Xo.filter((e) => !Dw.has(e));
function Nw(e) {
  const t = [];
  return (
    Mw.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const Df = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: Rf(4, 13),
    y: Rf(5, 14),
  },
  Ow = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: s } = o,
      l = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        l[u] = Df[u](r, o);
      }),
      t.render();
    const a = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(l[u]), (e[u] = Df[u](a, o));
      }),
      e
    );
  },
  Fw = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(am);
    let o = [],
      s = !1;
    const l = [];
    if (
      (i.forEach((a) => {
        const u = e.getValue(a);
        if (!e.hasValue(a)) return;
        let c = n[a],
          f = cr(c);
        const d = t[a];
        let g;
        if (xo(d)) {
          const y = d.length,
            w = d[0] === null ? 1 : 0;
          (c = d[w]), (f = cr(c));
          for (let k = w; k < y && d[k] !== null; k++)
            g ? su(cr(d[k]) === g) : (g = cr(d[k]));
        } else g = cr(d);
        if (f !== g)
          if (Lf(f) && Lf(g)) {
            const y = u.get();
            typeof y == "string" && u.set(parseFloat(y)),
              typeof d == "string"
                ? (t[a] = parseFloat(d))
                : Array.isArray(d) && g === L && (t[a] = d.map(parseFloat));
          } else
            f != null &&
            f.transform &&
            g != null &&
            g.transform &&
            (c === 0 || d === 0)
              ? c === 0
                ? u.set(g.transform(c))
                : (t[a] = f.transform(d))
              : (s || ((o = Nw(e)), (s = !0)),
                l.push(a),
                (r[a] = r[a] !== void 0 ? r[a] : t[a]),
                u.jump(d));
      }),
      l.length)
    ) {
      const a = l.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = Ow(t, e, l);
      return (
        o.length &&
          o.forEach(([c, f]) => {
            e.getValue(c).set(f);
          }),
        e.render(),
        Ko && a !== null && window.scrollTo({ top: a }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function Iw(e, t, n, r) {
  return Rw(t) ? Fw(e, t, n, r) : { target: t, transitionEnd: r };
}
const zw = (e, t, n, r) => {
    const i = Y1(e, t, r);
    return (t = i.target), (r = i.transitionEnd), Iw(e, t, n, r);
  },
  ql = { current: null },
  um = { current: !1 };
function jw() {
  if (((um.current = !0), !!Ko))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (ql.current = e.matches);
      e.addListener(t), t();
    } else ql.current = !1;
}
function Bw(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      s = n[i];
    if (Le(o)) e.addValue(i, o), To(r) && r.add(i);
    else if (Le(s)) e.addValue(i, qn(o, { owner: e })), To(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        const l = e.getValue(i);
        !l.hasAnimated && l.set(o);
      } else {
        const l = e.getStaticValue(i);
        e.addValue(i, qn(l !== void 0 ? l : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const Mf = new WeakMap(),
  cm = Object.keys(ti),
  Uw = cm.length,
  Nf = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  $w = Xa.length;
class Ww {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: o,
    },
    s = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => G.render(this.render, !1, !0));
    const { latestValues: l, renderState: a } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = a),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = s),
      (this.isControllingVariants = Yo(n)),
      (this.isVariantNode = bp(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in c) {
      const d = c[f];
      l[f] !== void 0 && Le(d) && (d.set(l[f], !1), To(u) && u.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      Mf.set(t, this),
      this.projection && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      um.current || jw(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : ql.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Mf.delete(this.current),
      this.projection && this.projection.unmount(),
      Wt.update(this.notifyUpdate),
      Wt.render(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = vn.has(t),
      i = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && G.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o, s) {
    let l, a;
    for (let u = 0; u < Uw; u++) {
      const c = cm[u],
        {
          isEnabled: f,
          Feature: d,
          ProjectionNode: g,
          MeasureLayout: y,
        } = ti[c];
      g && (l = g),
        f(n) &&
          (!this.features[c] && d && (this.features[c] = new d(this)),
          y && (a = y));
    }
    if (!this.projection && l) {
      this.projection = new l(
        o,
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: u,
        layout: c,
        drag: f,
        dragConstraints: d,
        layoutScroll: g,
        layoutRoot: y,
      } = n;
      this.projection.setOptions({
        layoutId: u,
        layout: c,
        alwaysMeasureLayout: !!f || (d && On(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: s,
        layoutScroll: g,
        layoutRoot: y,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted
        ? n.update(this.props, this.prevProps)
        : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : te();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Nf.length; r++) {
      const i = Nf[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = t["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = Bw(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < $w; r++) {
      const i = Xa[r],
        o = this.props[i];
      (ei(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = qn(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = ou(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Le(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new mu()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class fm extends Ww {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: i },
    o
  ) {
    let s = c1(r, t || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o)) {
      a1(this, r, s);
      const l = zw(this, r, s, n);
      (n = l.transitionEnd), (r = l.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function Hw(e) {
  return window.getComputedStyle(e);
}
class Gw extends fm {
  readValueFromInstance(t, n) {
    if (vn.has(n)) {
      const r = cu(n);
      return (r && r.default) || 0;
    } else {
      const r = Hw(t),
        i = (rh(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return bh(t, n);
  }
  build(t, n, r, i) {
    ba(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return iu(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Le(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    ah(t, n, r, i);
  }
}
class Kw extends fm {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (vn.has(n)) {
      const r = cu(n);
      return (r && r.default) || 0;
    }
    return (n = uh.has(n) ? n : ru(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return te();
  }
  scrapeMotionValuesFromProps(t, n) {
    return fh(t, n);
  }
  build(t, n, r, i) {
    tu(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    ch(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = nu(t.tagName)), super.mount(t);
  }
}
const Qw = (e, t) =>
    qa(e)
      ? new Kw(t, { enableHardwareAcceleration: !1 })
      : new Gw(t, { enableHardwareAcceleration: !0 }),
  Yw = { layout: { ProjectionNode: lm, MeasureLayout: tm } },
  Xw = { ...k1, ...Hv, ...Lw, ...Yw },
  gt = by((e, t) => Ev(e, t, Xw, Qw));
function dm() {
  const e = P.useRef(!1);
  return (
    wo(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function Zw() {
  const e = dm(),
    [t, n] = P.useState(0),
    r = P.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [P.useCallback(() => G.postRender(r), [r]), t];
}
class Jw extends P.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function qw({ children: e, isPresent: t }) {
  const n = P.useId(),
    r = P.useRef(null),
    i = P.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    P.useInsertionEffect(() => {
      const { width: o, height: s, top: l, left: a } = i.current;
      if (t || !r.current || !o || !s) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${a}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    P.createElement(
      Jw,
      { isPresent: t, childRef: r, sizeRef: i },
      P.cloneElement(e, { ref: r })
    )
  );
}
const zs = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
}) => {
  const l = Za(bw),
    a = P.useId(),
    u = P.useMemo(
      () => ({
        id: a,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (c) => {
          l.set(c, !0);
          for (const f of l.values()) if (!f) return;
          r && r();
        },
        register: (c) => (l.set(c, !1), () => l.delete(c)),
      }),
      o ? void 0 : [n]
    );
  return (
    P.useMemo(() => {
      l.forEach((c, f) => l.set(f, !1));
    }, [n]),
    P.useEffect(() => {
      !n && !l.size && r && r();
    }, [n]),
    s === "popLayout" && (e = P.createElement(qw, { isPresent: n }, e)),
    P.createElement(Go.Provider, { value: u }, e)
  );
};
function bw() {
  return new Map();
}
function eS(e) {
  return P.useEffect(() => () => e(), []);
}
const xn = (e) => e.key || "";
function tS(e, t) {
  e.forEach((n) => {
    const r = xn(n);
    t.set(r, n);
  });
}
function nS(e) {
  const t = [];
  return (
    P.Children.forEach(e, (n) => {
      P.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const rS = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    exitBeforeEnter: i,
    presenceAffectsLayout: o = !0,
    mode: s = "sync",
  }) => {
    let [l] = Zw();
    const a = P.useContext(Ja).forceRender;
    a && (l = a);
    const u = dm(),
      c = nS(e);
    let f = c;
    const d = new Set(),
      g = P.useRef(f),
      y = P.useRef(new Map()).current,
      w = P.useRef(!0);
    if (
      (wo(() => {
        (w.current = !1), tS(c, y), (g.current = f);
      }),
      eS(() => {
        (w.current = !0), y.clear(), d.clear();
      }),
      w.current)
    )
      return P.createElement(
        P.Fragment,
        null,
        f.map((h) =>
          P.createElement(
            zs,
            {
              key: xn(h),
              isPresent: !0,
              initial: n ? void 0 : !1,
              presenceAffectsLayout: o,
              mode: s,
            },
            h
          )
        )
      );
    f = [...f];
    const k = g.current.map(xn),
      m = c.map(xn),
      p = k.length;
    for (let h = 0; h < p; h++) {
      const v = k[h];
      m.indexOf(v) === -1 && d.add(v);
    }
    return (
      s === "wait" && d.size && (f = []),
      d.forEach((h) => {
        if (m.indexOf(h) !== -1) return;
        const v = y.get(h);
        if (!v) return;
        const S = k.indexOf(h),
          T = () => {
            y.delete(h), d.delete(h);
            const C = g.current.findIndex((_) => _.key === h);
            if ((g.current.splice(C, 1), !d.size)) {
              if (((g.current = c), u.current === !1)) return;
              l(), r && r();
            }
          };
        f.splice(
          S,
          0,
          P.createElement(
            zs,
            {
              key: xn(v),
              isPresent: !1,
              onExitComplete: T,
              custom: t,
              presenceAffectsLayout: o,
              mode: s,
            },
            v
          )
        );
      }),
      (f = f.map((h) => {
        const v = h.key;
        return d.has(v)
          ? h
          : P.createElement(
              zs,
              { key: xn(h), isPresent: !0, presenceAffectsLayout: o, mode: s },
              h
            );
      })),
      P.createElement(
        P.Fragment,
        null,
        d.size ? f : f.map((h) => P.cloneElement(h))
      )
    );
  },
  iS = "_app_3alen_1",
  oS = "_app__divider_3alen_6",
  sS = "_app__heading_3alen_10",
  lS = "_app__hintsWrapper_3alen_16",
  aS = "_app__instructionsBtn_3alen_40",
  uS = "_app__instructionsBtn__hover_3alen_57",
  cS = "_app__scoreAndRound_3alen_60",
  fS = "_app__scoreAndRound__textWrapper_3alen_65",
  dS = "_app__startEndGameWrapper_3alen_78",
  Re = {
    app: iS,
    app__divider: oS,
    app__heading: sS,
    app__hintsWrapper: lS,
    app__instructionsBtn: aS,
    app__instructionsBtn__hover: uS,
    app__scoreAndRound: cS,
    app__scoreAndRound__textWrapper: fS,
    app__startEndGameWrapper: dS,
  },
  pS = (e) => {
    for (let t = e.length - 1; t > 0; t--) {
      const n = Math.floor(Math.random() * (t + 1));
      [e[t], e[n]] = [e[n], e[t]];
    }
    return e;
  },
  Of = (e) => Math.floor(Math.random() * e.length),
  hS = "_answerFeedback_195el_1",
  mS = "_answerFeedback__img_195el_4",
  js = { answerFeedback: hS, answerFeedback__img: mS },
  gS = "/audiogames/orchestralrange/images/right-answer.svg",
  yS = "/audiogames/orchestralrange/images/wrong-answer.svg",
  vS = ({ isCorrectAnswer: e }) =>
    ne("div", {
      className: js.answerFeedback,
      children: [
        A("img", {
          src: gS,
          alt: "right answer",
          style: e ? { display: "block" } : { display: "none" },
          className: js.answerFeedback__img,
        }),
        A("img", {
          src: yS,
          alt: "wrong answer",
          style: e ? { display: "none" } : { display: "block" },
          className: js.answerFeedback__img,
        }),
      ],
    }),
  wS = "_answerOptions_1ar4o_1",
  SS = { answerOptions: wS },
  _S = "_button_vfaer_1",
  gu = { button: _S },
  xS = ({ name: e, handleClick: t, btnsDisabled: n }) =>
    A("button", {
      className: gu.button,
      onClick: () => t && t(e),
      disabled: n,
      children: e,
    }),
  PS = 4,
  kS = ({ instruments: e, handleClick: t, btnsDisabled: n }) =>
    A("div", {
      className: SS.answerOptions,
      children: e.map((r, i) => {
        if (i < PS)
          return P.createElement(xS, {
            ...r,
            key: r.id,
            handleClick: t,
            btnsDisabled: n,
          });
      }),
    }),
  CS = "_gameOver_q4u43_1",
  TS = "_gameOver__btn_q4u43_6",
  ES = "_gameOver__heading_q4u43_19",
  VS = "_gameOver__icon_q4u43_29",
  LS = "_gameOver__score_q4u43_32",
  AS = "_gameOver__scoreWrapper_q4u43_42",
  dr = {
    gameOver: CS,
    gameOver__btn: TS,
    gameOver__heading: ES,
    gameOver__icon: VS,
    gameOver__score: LS,
    gameOver__scoreWrapper: AS,
  },
  RS = "/audiogames/orchestralrange/images/score-black.svg",
  DS = ({ gameState: e, init: t }) =>
    ne("div", {
      className: dr.gameOver,
      children: [
        A(gt.h1, {
          className: dr.gameOver__heading,
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.3, delay: 0.3, ease: "easeIn" },
          children: "GAME OVER",
        }),
        ne("div", {
          className: dr.gameOver__scoreWrapper,
          children: [
            A("img", { src: RS, alt: "score", className: dr.gameOver__icon }),
            A("div", { className: dr.gameOver__score, children: e.score }),
          ],
        }),
        A("button", {
          onClick: t,
          className: gu.button,
          children: "Play Again?",
        }),
      ],
    }),
  MS = "_gameStart_1yl8e_2",
  NS = "_gameStart__heading_1yl8e_5",
  OS = "_gameStart__icon_1yl8e_26",
  Bs = { gameStart: MS, gameStart__heading: NS, gameStart__icon: OS },
  FS = "/audiogames/orchestralrange/images/conductor.svg",
  Ff = new Audio("/audio/startGame.mp3"),
  IS = ({ setGameStarted: e }) =>
    ne("div", {
      className: Bs.gameStart,
      children: [
        A(gt.img, {
          src: FS,
          alt: "orchestra conductor",
          className: Bs.gameStart__icon,
          animate: { rotateY: "190deg" },
          transition: { type: "spring", stiffness: 320 },
        }),
        A("h1", {
          className: Bs.gameStart__heading,
          children: "Orchestral Range Game",
        }),
        A("button", {
          className: gu.button,
          onClick: () => {
            (Ff.volume = 0.5), Ff.play(), e(!0);
          },
          children: "Start Game",
        }),
      ],
    }),
  zS = "_hint_1sble_1",
  jS = "_hint__headingWrapper_1sble_14",
  BS = "_hint__headingWrapper__heading_1sble_17",
  US = "_hint__headingWrapper__subheading_1sble_20",
  $S = "_hint__description_1sble_24",
  pr = {
    hint: zS,
    hint__headingWrapper: jS,
    hint__headingWrapper__heading: BS,
    hint__headingWrapper__subheading: US,
    hint__description: $S,
  },
  WS = ({ correctAnswerInstrument: e, hintsVisible: t }) =>
    ne(gt.div, {
      initial: { opacity: 0, scale: 0.68 },
      animate: t ? { opacity: 1, scale: 1 } : { opacity: 0, display: "none" },
      transition: { duration: 0.3, delay: 0 },
      className: pr.hint,
      children: [
        ne("div", {
          className: pr.hint__headingWrapper,
          children: [
            A("span", {
              className: pr.hint__headingWrapper__heading,
              children: "Instrument Family:",
            }),
            " ",
            A("span", {
              className: pr.hint__headingWrapper__subheading,
              children: e.family,
            }),
          ],
        }),
        A("div", {
          className: pr.hint__description,
          children: e.shortDescription,
        }),
      ],
    }),
  HS = "_hintToggle_196zy_1",
  GS = "_hintToggle__label_196zy_9",
  KS = "_hintToggle__slider_196zy_19",
  QS = "_hintToggle__round_196zy_52",
  YS = "_hintToggle__switch_196zy_58",
  hr = {
    hintToggle: HS,
    hintToggle__label: GS,
    hintToggle__slider: KS,
    hintToggle__round: QS,
    hintToggle__switch: YS,
    switch: "_switch_196zy_64",
  },
  If = ({ toggleHints: e }) =>
    ne("div", {
      className: hr.hintToggle,
      children: [
        A("span", {
          className: hr.hintToggle__label,
          children: "Enable Hints",
        }),
        ne("label", {
          htmlFor: "hints",
          className: hr.hintToggle__switch,
          children: [
            A("input", {
              type: "checkbox",
              name: "hints",
              id: "hints",
              onChange: e,
            }),
            A("span", {
              className: `${hr.hintToggle__slider} ${hr.hintToggle__round}`,
            }),
          ],
        }),
      ],
    }),
  XS = "_instructions_xmszc_1",
  ZS = "_instructions__closeButton_xmszc_14",
  JS = "_instructions__content_xmszc_21",
  qS = "_instructions__modal_xmszc_27",
  bS = "_instructions__title_xmszc_37",
  mr = {
    instructions: XS,
    instructions__closeButton: ZS,
    instructions__content: JS,
    instructions__modal: qS,
    instructions__title: bS,
  },
  e_ = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: {
      opacity: 0,
      scale: 0.5,
      easing: "easeOut",
      transition: { duration: 1 },
    },
  },
  t_ = ({ onClose: e }) =>
    A("div", {
      className: mr.instructions,
      children: ne(gt.div, {
        className: mr.instructions__modal,
        animate: "animate",
        initial: "initial",
        exit: "exit",
        variants: e_,
        children: [
          A("h2", {
            className: mr.instructions__title,
            children: "Instructions",
          }),
          A("p", {
            className: mr.instructions__content,
            children: `Welcome to the Orchestral Range Game! In this game, you'll be shown an image of staff notation with the range of a particular orchestral instrument. Your goal is to pick the instrument that corresponds to the note range we're showing in the staff. You'll be given 4 answer options with different orchestral instrument names to choose from. Choose the correct one to earn a point! If you need some help, you can enable hints by clicking the "Hints" button at the beginning of the game. The hint will show the instrument family and a short description of the instrument. Good luck and have fun!`,
          }),
          A("button", {
            className: mr.instructions__closeButton,
            onClick: e,
            children: "Close",
          }),
        ],
      }),
    }),
  n_ = "_range_10p41_1",
  r_ = "_range__ellipse_10p41_10",
  i_ = "_range__image_10p41_13",
  o_ = "_range__text_10p41_18",
  Us = { range: n_, range__ellipse: r_, range__image: i_, range__text: o_ },
  s_ = "/images/ranges/",
  l_ = ({ correctAnswerInstrument: e }) =>
    ne("div", {
      className: Us.range,
      children: [
        A(gt.img, {
          src: s_ + e.image,
          alt: "correct answer instrument's range",
          className: Us.range__image,
          initial: { x: -10 },
          animate: { x: 0 },
          transition: { duration: 0.2 },
        }),
        A(gt.div, {
          className: Us.range__text,
          initial: { x: 10 },
          animate: { x: 0 },
          transition: { duration: 0.2 },
          children: e.range,
        }),
      ],
    }),
  a_ = "_round_xb430_1",
  u_ = "_score_xb430_2",
  c_ = "_round__text_xb430_6",
  f_ = "_score__text_xb430_7",
  d_ = "_score__icon_xb430_11",
  p_ = "_round__icon_xb430_15",
  Hn = {
    round: a_,
    score: u_,
    round__text: c_,
    score__text: f_,
    score__icon: d_,
    round__icon: p_,
  },
  h_ = "/audiogames/orchestralrange/images/rounds.svg",
  m_ = ({ round: e, maxRounds: t }) =>
    ne("div", {
      className: Hn.round,
      children: [
        A("img", { src: h_, alt: "rounds", className: Hn.round__icon }),
        ne("span", { className: Hn.round__text, children: [e, "/", t] }),
      ],
    }),
  g_ = "/audiogames/orchestralrange/images/score.svg",
  y_ = ({ score: e }) =>
    ne("div", {
      className: Hn.score,
      children: [
        A("img", { src: g_, alt: "score", className: Hn.score__icon }),
        A("span", { className: Hn.score__text, children: e }),
      ],
    }),
  zf = 2,
  jf = 3e3,
  Bf = 0.1,
  Uf = new Audio("/audio/correctAnswer.mp3"),
  $f = new Audio("/audio/wrongAnswer.mp3");
function v_() {
  const [e, t] = P.useState(!1),
    [n, r] = P.useState(!1),
    [i, o] = P.useState([]),
    [s, l] = P.useState([]),
    [a, u] = P.useState(!1),
    [c, f] = P.useState(!1),
    [d, g] = P.useState({ name: "", range: "", id: 0 }),
    [y, w] = P.useState({ score: 0, round: 1 }),
    [k, m] = P.useState(!1),
    [p, h] = P.useState(!1),
    v = () => {
      r(!0);
    },
    [S, T] = P.useState(!1),
    C = () => {
      T(!0);
    },
    _ = () => {
      T(!1);
    },
    D = () => {
      t(!1),
        w({ score: 0, round: 1 }),
        f(!1),
        u(!0),
        h(!1),
        l([]),
        g({ name: "", range: "", id: 0 }),
        se(i);
    },
    R = (q) => {
      t(!0),
        q === d.name
          ? (w({ ...y, score: y.score + 1 }),
            m(!0),
            (Uf.volume = Bf),
            Uf.play())
          : (w({ ...y }), m(!1), ($f.volume = Bf * 3), $f.play()),
        h(!0),
        y.round < zf
          ? setTimeout(() => {
              w((z) => ({ ...z, round: z.round + 1 })), t(!1), h(!1), se(i);
            }, jf)
          : setTimeout(() => {
              f(!0), u(!1), r(!1);
            }, jf);
    },
    K = (q, z) => {
      let j = [];
      for (; j.length < 3; ) {
        let pe = q[Of(q)];
        !j.includes(pe) && pe !== z && j.push(pe);
      }
      g(z), (j = pS([...j, z])), l(j);
    };
  P.useEffect(() => {
    (async () => {
      const j = await (await fetch("/instruments.json")).json();
      o(j), se(j);
    })();
  }, []);
  const se = (q) => {
    const z = q[Of(q)];
    K(q, z);
  };
  return ne(zm, {
    children: [
      !a &&
        !c &&
        ne(
          gt.div,
          {
            className: Re.app__startEndGameWrapper,
            children: [
              ne("div", {
                children: [
                  A("div", { className: Re.app__scoreAndRound }),
                  A(IS, { setGameStarted: u }),
                ],
              }),
              A("button", {
                onClick: C,
                className: Re.app__instructionsBtn,
                children: "Instructions",
              }),
              A(rS, { children: S && A(t_, { onClose: _ }) }, "modal"),
              A(If, { toggleHints: v }),
              A("div", { className: Re.app__hintsWrapper }),
            ],
          },
          "gamestarted"
        ),
      a &&
        !c &&
        ne(
          gt.div,
          {
            className: Re.app,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1 },
            children: [
              A("div", {
                className: Re.app__scoreAndRound,
                children: ne("div", {
                  className: Re.app__scoreAndRound__textWrapper,
                  children: [
                    A(y_, { score: y.score }),
                    p && A(vS, { isCorrectAnswer: k }),
                    A(m_, { round: y.round, maxRounds: zf }),
                  ],
                }),
              }),
              ne("div", {
                className: Re.app__flexContainer,
                children: [
                  A(l_, { correctAnswerInstrument: d }),
                  A("div", { className: Re.app__divider }),
                  A(kS, { instruments: s, handleClick: R, btnsDisabled: e }),
                ],
              }),
              A(WS, { correctAnswerInstrument: d, hintsVisible: n }),
              A("div", { className: Re.app__hintsWrapper }),
            ],
          },
          "gameplay"
        ),
      !a &&
        c &&
        ne(
          gt.div,
          {
            className: Re.app__startEndGameWrapper,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1 },
            children: [
              A("div", { className: Re.app__scoreAndRound }),
              A(DS, { gameState: y, init: D }),
              A(If, { toggleHints: v }),
              A("div", { className: Re.app__hintsWrapper }),
            ],
          },
          "gameover"
        ),
    ],
  });
}
$s.createRoot(document.getElementById("root")).render(
  A(ra.StrictMode, { children: A(v_, {}) })
);
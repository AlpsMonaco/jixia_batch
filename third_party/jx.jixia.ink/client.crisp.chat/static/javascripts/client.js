/**
 * crisp-client
 * @version v2.8.5 75d9fae
 * @author Crisp IM SAS
 * @date 6/15/2022
 */
(function() {
    try {
        var m = {};
        m.Library = new function() {
            var t, i, n, e, s;
            try {
                this.ns = "CrispLibrary";
                var c = {},
                    o = m;
                c.Console = ((s = {}).i = "production", s.c = "development" == s.i, s.a = void 0 !== window.console, s.o = s.c && s.a, s.h = function(t, i, n) {}, s.warn = function(t, i) {
                    s.o && console.warn(t, i), s.h("warn", t, i)
                }, s.error = function(t, i) {
                    s.o && console.error(t, i), s.h("error", t, i)
                }, s.info = function(t, i) {
                    s.o && console.info(t, i), s.h("info", t, i)
                }, s.log = function(t, i) {
                    s.o && console.log(t, i), s.h("log", t, i)
                }, s.debug = function(t, i) {
                    s.o && (void 0 !== console.debug ? console.debug(t, i) : console.log(t, i)), s.h("debug", t, i)
                }, s.set_log_sink = function(t) {
                    if ("function" != typeof t) throw new Error("Invalid function");
                    s.h = t
                }, s), n = function() {
                    return function e(s, c, a) {
                        function r(i, t) {
                            if (!c[i]) {
                                if (!s[i]) {
                                    var n = "function" == typeof require && require;
                                    if (!t && n) return n(i, !0);
                                    if (o) return o(i, !0);
                                    throw (n = new Error("Cannot find module '" + i + "'")).code = "MODULE_NOT_FOUND", n
                                }
                                n = c[i] = {
                                    exports: {}
                                }, s[i][0].call(n.exports, function(t) {
                                    return r(s[i][1][t] || t)
                                }, n, n.exports, e, s, c, a)
                            }
                            return c[i].exports
                        }
                        for (var o = "function" == typeof require && require, t = 0; t < a.length; t++) r(a[t]);
                        return r
                    }({
                        1: [function(r, t, o) {
                            "use strict";

                            function h(t) {
                                return null != t && "" !== t
                            }

                            function u(i) {
                                return (Array.isArray(i) ? i.map(u) : i && "object" == typeof i ? Object.keys(i).filter(function(t) {
                                    return i[t]
                                }) : [i]).filter(h).join(" ")
                            }
                            o.merge = function t(i, n) {
                                if (1 === arguments.length) {
                                    for (var e = i[0], s = 1; s < i.length; s++) e = t(e, i[s]);
                                    return e
                                }
                                var c, a = i.class,
                                    r = n.class;
                                for (c in (a || r) && (a = a || [], r = r || [], Array.isArray(a) || (a = [a]), Array.isArray(r) || (r = [r]), i.class = a.concat(r).filter(h)), n) "class" != c && (i[c] = n[c]);
                                return i
                            }, o.joinClasses = u, o.cls = function(t, i) {
                                for (var n = [], e = 0; e < t.length; e++) i && i[e] ? n.push(o.escape(u([t[e]]))) : n.push(u(t[e]));
                                var s = u(n);
                                return s.length ? ' class="' + s + '"' : ""
                            }, o.style = function(i) {
                                return i && "object" == typeof i ? Object.keys(i).map(function(t) {
                                    return t + ":" + i[t]
                                }).join(";") : i
                            }, o.attr = function(t, i, n, e) {
                                return "boolean" == typeof(i = "style" === t ? o.style(i) : i) || null == i ? i ? " " + (e ? t : t + '="' + t + '"') : "" : 0 == t.indexOf("data") && "string" != typeof i ? " " + t + "='" + JSON.stringify(i).replace(/'/g, "&apos;") + "'" : n ? " " + t + '="' + o.escape(i) + '"' : " " + t + '="' + i + '"'
                            }, o.attrs = function(t, i) {
                                var n = [],
                                    e = Object.keys(t);
                                if (e.length)
                                    for (var s = 0; s < e.length; ++s) {
                                        var c = e[s],
                                            a = t[c];
                                        "class" == c ? (a = u(a)) && n.push(" " + c + '="' + a + '"') : n.push(o.attr(c, a, !1, i))
                                    }
                                return n.join("")
                            }, o.escape = function(t) {
                                var i = String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
                                return i === "" + t ? t : i
                            }, o.rethrow = function i(n, t, e, s) {
                                if (!(n instanceof Error)) throw n;
                                if (!("undefined" == typeof window && t || s)) throw n.message += " on line " + e, n;
                                try {
                                    s = s || r("fs").readFileSync(t, "utf8")
                                } catch (t) {
                                    i(n, null, e)
                                }
                                var c = s.split("\n"),
                                    a = Math.max(e - 3, 0),
                                    s = Math.min(c.length, e + 3),
                                    s = c.slice(a, s).map(function(t, i) {
                                        return ((i = i + a + 1) == e ? "  > " : "    ") + i + "| " + t
                                    }).join("\n");
                                throw n.path = t, n.message = (t || "Jade") + ":" + e + "\n" + s + "\n\n" + n.message, n
                            }
                        }, {
                            fs: 2
                        }],
                        2: [function(t, i, n) {}, {}]
                    }, {}, [1])(1)
                }, "object" == typeof __crisp_void_exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof __crisp_void_define && define.amd ? define([], n) : (void 0 !== c ? e = c : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self), e.jade = n());
                var oi = function(t, i) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return function(t, i) {
                            var n = [],
                                e = !0,
                                s = !1,
                                c = void 0;
                            try {
                                for (var a, r = t[Symbol.iterator](); !(e = (a = r.next()).done) && (n.push(a.value), !i || n.length !== i); e = !0);
                            } catch (t) {
                                s = !0, c = t
                            } finally {
                                try {
                                    !e && r.return && r.return()
                                } finally {
                                    if (s) throw c
                                }
                            }
                            return n
                        }(t, i);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    },
                    hi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    };

                function ui(t, i, n) {
                    return d(t, "symbol" != (void 0 === i ? "undefined" : hi(i)) ? i + "" : i, n), n
                }
                var a = Object.defineProperty,
                    r = Object.defineProperties,
                    h = Object.getOwnPropertyDescriptors,
                    u = Object.getOwnPropertySymbols,
                    l = Object.prototype.hasOwnProperty,
                    f = Object.prototype.propertyIsEnumerable,
                    d = function(t, i, n) {
                        return i in t ? a(t, i, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: n
                        }) : t[i] = n
                    },
                    li = function(t, i) {
                        for (var n in i = i || {}) l.call(i, n) && d(t, n, i[n]);
                        if (u) {
                            var e = !0,
                                s = !1,
                                c = void 0;
                            try {
                                for (var a, r = u(i)[Symbol.iterator](); !(e = (a = r.next()).done); e = !0) n = a.value, f.call(i, n) && d(t, n, i[n])
                            } catch (t) {
                                s = !0, c = t
                            } finally {
                                try {
                                    !e && r.return && r.return()
                                } finally {
                                    if (s) throw c
                                }
                            }
                        }
                        return t
                    },
                    fi = function(t, i) {
                        return r(t, h(i))
                    };
                c.PetiteVue = function(t) {
                    function r(t) {
                        if (k(t)) {
                            for (var i = {}, n = 0; n < t.length; n++) {
                                var e = t[n],
                                    s = (f(e) ? function(t) {
                                        var i = {};
                                        return t.split(a).forEach(function(t) {
                                            !t || 1 < (t = t.split(o)).length && (i[t[0].trim()] = t[1].trim())
                                        }), i
                                    } : r)(e);
                                if (s)
                                    for (var c in s) i[c] = s[c]
                            }
                            return i
                        }
                        return f(t) || x(t) ? t : void 0
                    }
                    var a = /;(?![^(]*\))/g,
                        o = /:(.+)/;

                    function d(t, i) {
                        if (t === i) return !0;
                        var n = l(t),
                            e = l(i);
                        if (n || e) return !(!n || !e) && t.getTime() === i.getTime();
                        if (n = k(t), e = k(i), n || e) return !(!n || !e) && function(t, i) {
                            if (t.length !== i.length) return !1;
                            for (var n = !0, e = 0; n && e < t.length; e++) n = d(t[e], i[e]);
                            return n
                        }(t, i);
                        if (n = x(t), e = x(i), n || e) {
                            if (!n || !e) return !1;
                            if (Object.keys(t).length !== Object.keys(i).length) return !1;
                            for (var s in t) {
                                var c = t.hasOwnProperty(s),
                                    a = i.hasOwnProperty(s);
                                if (c && !a || !c && a || !d(t[s], i[s])) return !1
                            }
                        }
                        return String(t) === String(i)
                    }

                    function v(t, i) {
                        return t.findIndex(function(t) {
                            return d(t, i)
                        })
                    }

                    function h(t, i) {
                        return n.call(t, i)
                    }

                    function p(t) {
                        return "[object Map]" === g(t)
                    }

                    function u(t) {
                        return "symbol" == (void 0 === t ? "undefined" : hi(t))
                    }

                    function y(t) {
                        return f(t) && "NaN" !== t && "-" !== t[0] && "" + parseInt(t, 10) === t
                    }

                    function m(t) {
                        var i = parseFloat(t);
                        return isNaN(i) ? t : i
                    }
                    var s = Object.assign,
                        n = Object.prototype.hasOwnProperty,
                        k = Array.isArray,
                        l = function(t) {
                            return t instanceof Date
                        },
                        f = function(t) {
                            return "string" == typeof t
                        },
                        x = function(t) {
                            return null !== t && "object" == (void 0 === t ? "undefined" : hi(t))
                        },
                        i = Object.prototype.toString,
                        g = function(t) {
                            return i.call(t)
                        },
                        e = /-(\w)/g,
                        _ = (W = function(i) {
                            var n = Object.create(null);
                            return function(t) {
                                return n[t] || (n[t] = i(t))
                            }
                        })(function(t) {
                            return t.replace(e, function(t, i) {
                                return i ? i.toUpperCase() : ""
                            })
                        }),
                        c = /\B([A-Z])/g,
                        w = W(function(t) {
                            return t.replace(c, "-$1").toLowerCase()
                        });

                    function b(t, i) {
                        i && i.active && i.effects.push(t)
                    }
                    var $ = function(t) {
                            return (t = new Set(t)).w = 0, t.n = 0, t
                        },
                        F = function(t) {
                            return 0 < (t.w & C)
                        },
                        j = function(t) {
                            return 0 < (t.n & C)
                        },
                        E = new WeakMap,
                        z = 0,
                        C = 1,
                        S = void 0,
                        A = Symbol(""),
                        I = Symbol(""),
                        q = (D.prototype.run = function() {
                            if (!this.active) return this.fn();
                            for (var t = S, i = B; t;) {
                                if (t === this) return;
                                t = t.parent
                            }
                            try {
                                return this.parent = S, B = !0, C = 1 << ++z, (z <= 30 ? function(t) {
                                    var i = t.deps;
                                    if (i.length)
                                        for (var n = 0; n < i.length; n++) i[n].w |= C
                                } : O)(S = this), this.fn()
                            } finally {
                                z <= 30 && function(t) {
                                    var i = t.deps;
                                    if (i.length) {
                                        for (var n = 0, e = 0; e < i.length; e++) {
                                            var s = i[e];
                                            F(s) && !j(s) ? s.delete(t) : i[n++] = s, s.w &= ~C, s.n &= ~C
                                        }
                                        i.length = n
                                    }
                                }(this), C = 1 << --z, S = this.parent, B = i, this.parent = void 0
                            }
                        }, D.prototype.stop = function() {
                            this.active && (O(this), this.onStop && this.onStop(), this.active = !1)
                        }, D);

                    function D(t) {
                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments[2];
                        this.fn = t, this.scheduler = i, this.active = !0, this.deps = [], this.parent = void 0, b(this, n)
                    }

                    function O(t) {
                        var i = t.deps;
                        if (i.length) {
                            for (var n = 0; n < i.length; n++) i[n].delete(t);
                            i.length = 0
                        }
                    }

                    function R(t) {
                        t.effect.stop()
                    }
                    var B = !0,
                        M = [];

                    function N(t, i, n) {
                        var e;
                        B && S && ((e = E.get(t)) || E.set(t, e = new Map), (t = e.get(n)) || e.set(n, t = $()), n = t, t = !1, z <= 30 ? j(n) || (n.n |= C, t = !F(n)) : t = !n.has(S), t && (n.add(S), S.deps.push(n)))
                    }

                    function T(t, i, n, e, s, c) {
                        var a = E.get(t);
                        if (a) {
                            var r = [];
                            if ("clear" === i) r = [...a.values()];
                            else if ("length" === n && k(t)) a.forEach(function(t, i) {
                                ("length" === i || e <= i) && r.push(t)
                            });
                            else switch (void 0 !== n && r.push(a.get(n)), i) {
                                case "add":
                                    k(t) ? y(n) && r.push(a.get("length")) : (r.push(a.get(A)), p(t) && r.push(a.get(I)));
                                    break;
                                case "delete":
                                    k(t) || (r.push(a.get(A)), p(t) && r.push(a.get(I)));
                                    break;
                                case "set":
                                    p(t) && r.push(a.get(A))
                            }
                            if (1 === r.length) r[0] && U(r[0]);
                            else {
                                var o = [],
                                    h = !0,
                                    u = !1,
                                    i = void 0;
                                try {
                                    for (var l, f = r[Symbol.iterator](); !(h = (l = f.next()).done); h = !0) {
                                        var d = l.value;
                                        d && o.push(...d)
                                    }
                                } catch (t) {
                                    u = !0, i = t
                                } finally {
                                    try {
                                        !h && f.return && f.return()
                                    } finally {
                                        if (u) throw i
                                    }
                                }
                                U($(o))
                            }
                        }
                    }

                    function U(t, i) {
                        var n = !0,
                            e = !1,
                            s = void 0;
                        try {
                            for (var c, a = (k(t) ? t : [...t])[Symbol.iterator](); !(n = (c = a.next()).done); n = !0) {
                                var r = c.value;
                                r === S && !r.allowRecurse || (r.scheduler ? r.scheduler() : r.run())
                            }
                        } catch (t) {
                            e = !0, s = t
                        } finally {
                            try {
                                !n && a.return && a.return()
                            } finally {
                                if (e) throw s
                            }
                        }
                    }
                    var P, L = function(t, i) {
                            for (var n = Object.create(null), e = "__proto__,__v_isRef,__isVue".split(","), s = 0; s < e.length; s++) n[e[s]] = !0;
                            return function(t) {
                                return !!n[t]
                            }
                        }(),
                        J = new Set(Object.getOwnPropertyNames(Symbol).map(function(t) {
                            return Symbol[t]
                        }).filter(u)),
                        V = G(),
                        W = G(!0),
                        H = (P = {}, ["includes", "indexOf", "lastIndexOf"].forEach(function(r) {
                            P[r] = function() {
                                for (var t = st(this), i = 0, n = this.length; i < n; i++) N(t, 0, i + "");
                                for (var e = arguments.length, s = Array(e), c = 0; c < e; c++) s[c] = arguments[c];
                                var a = t[r](...s);
                                return -1 === a || !1 === a ? t[r](...s.map(st)) : a
                            }
                        }), ["push", "pop", "shift", "unshift", "splice"].forEach(function(c) {
                            P[c] = function() {
                                for (var t = arguments.length, i = Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                                M.push(B), B = !1;
                                var e = st(this)[c].apply(this, i),
                                    s = M.pop();
                                return B = void 0 === s || s, e
                            }
                        }), P);

                    function G() {
                        var s = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                            c = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                        return function(t, i, n) {
                            if ("__v_isReactive" === i) return !s;
                            if ("__v_isReadonly" === i) return s;
                            if ("__v_isShallow" === i) return c;
                            if ("__v_raw" === i && n === (s ? c ? tt : Q : c ? X : Y).get(t)) return t;
                            var e = k(t);
                            return !s && e && h(H, i) ? Reflect.get(H, i, n) : (n = Reflect.get(t, i, n), (u(i) ? J.has(i) : L(i)) || (s || N(t, 0, i), c) ? n : ct(n) ? e && y(i) ? n : n.value : x(n) ? s ? nt(n, !0, Z, null, Q) : it(n) : n)
                        }
                    }
                    var K = {
                            get: V,
                            set: function() {
                                var r = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                                return function(t, i, n, e) {
                                    var s = t[i];
                                    if (et(s) && ct(s) && !ct(n)) return !1;
                                    if (!r && !et(n) && (n && n.__v_isShallow || (n = st(n), s = st(s)), !k(t) && ct(s) && !ct(n))) return s.value = n, !0;
                                    var c = k(t) && y(i) ? Number(i) < t.length : h(t, i),
                                        a = Reflect.set(t, i, n, e);
                                    return t === st(e) && (c ? (c = n, Object.is(c, s) || T(t, "set", i, n)) : T(t, "add", i, n)), a
                                }
                            }(),
                            deleteProperty: function(t, i) {
                                var n = h(t, i);
                                t[i];
                                var e = Reflect.deleteProperty(t, i);
                                return e && n && T(t, "delete", i, void 0), e
                            },
                            has: function(t, i) {
                                var n = Reflect.has(t, i);
                                return u(i) && J.has(i) || N(t, 0, i), n
                            },
                            ownKeys: function(t) {
                                return N(t, 0, k(t) ? "length" : A), Reflect.ownKeys(t)
                            }
                        },
                        Z = {
                            get: W,
                            set: function(t, i) {
                                return !0
                            },
                            deleteProperty: function(t, i) {
                                return !0
                            }
                        },
                        Y = new WeakMap,
                        X = new WeakMap,
                        Q = new WeakMap,
                        tt = new WeakMap;

                    function it(t) {
                        return et(t) ? t : nt(t, !1, K, null, Y)
                    }

                    function nt(t, i, n, e, s) {
                        return x(t) && (!t.__v_raw || i && t.__v_isReactive) ? (i = s.get(t)) ? i : 0 === (i = (c = t).u || !Object.isExtensible(c) ? 0 : function(t) {
                            switch (g(c).slice(8, -1)) {
                                case "Object":
                                case "Array":
                                    return 1;
                                case "Map":
                                case "Set":
                                case "WeakMap":
                                case "WeakSet":
                                    return 2;
                                default:
                                    return 0
                            }
                        }()) ? t : (n = new Proxy(t, 2 === i ? e : n), s.set(t, n), n) : t;
                        var c
                    }

                    function et(t) {
                        return t && t.__v_isReadonly
                    }

                    function st(t) {
                        var i = t && t.__v_raw;
                        return i ? st(i) : t
                    }

                    function ct(t) {
                        return t && !0 === t.__v_isRef
                    }

                    function at(t) {
                        return wt.then(t)
                    }

                    function rt() {
                        var t = !0,
                            i = !1,
                            n = void 0;
                        try {
                            for (var e, s = _t[Symbol.iterator](); !(t = (e = s.next()).done); t = !0)(0, e.value)()
                        } catch (t) {
                            i = !0, n = t
                        } finally {
                            try {
                                !t && s.return && s.return()
                            } finally {
                                if (i) throw n
                            }
                        }
                        _t.length = 0, gt = !1
                    }

                    function ot(t) {
                        var e = t.el,
                            s = t.get,
                            i = t.effect,
                            c = t.arg,
                            a = t.modifiers,
                            r = void 0;
                        "class" === c && (e.l = e.className), i(function() {
                            var t = s();
                            if (c) null != a && a.camel && (c = _(c)), ht(e, c, t, r);
                            else {
                                for (var i in t) ht(e, i, t[i], r && r[i]);
                                for (var n in r) t && n in t || ht(e, n, null)
                            }
                            r = t
                        })
                    }

                    function ht(t, i, n, e) {
                        if ("class" === i) t.setAttribute("class", function t(i) {
                            var n = "";
                            if (f(i)) n = i;
                            else if (k(i))
                                for (var e = 0; e < i.length; e++) {
                                    var s = t(i[e]);
                                    s && (n += s + " ")
                                } else if (x(i))
                                    for (var c in i) i[c] && (n += c + " ");
                            return n.trim()
                        }(t.l ? [t.l, n] : n) || "");
                        else if ("style" === i) {
                            n = r(n);
                            var s = t.style;
                            if (n)
                                if (f(n)) n !== e && (s.cssText = n);
                                else {
                                    for (var c in n) $t(s, c, n[c]);
                                    if (e && !f(e))
                                        for (var a in e) null == n[a] && $t(s, a, "")
                                }
                            else t.removeAttribute("style")
                        } else t instanceof SVGElement || !(i in t) || kt.test(i) ? "true-value" === i ? t._trueValue = n : "false-value" === i ? t._falseValue = n : null != n ? t.setAttribute(i, n) : t.removeAttribute(i) : (t[i] = n, "value" === i && (t._value = n))
                    }

                    function ut(t, i, n, e) {
                        t.addEventListener(i, n, e)
                    }

                    function lt(t) {
                        var i = t.el,
                            n = t.get,
                            e = t.exp,
                            s = t.arg,
                            c = t.ctx,
                            a = t.modifiers;
                        if (s) {
                            var r, o = function(t) {
                                jt.test(e) ? n("" + e)(t) : (c.scope.$event = t, n("" + e), delete c.scope.$event)
                            };
                            if ("vue:mounted" !== s) {
                                if ("vue:unmounted" === s) return function() {
                                    return o()
                                };
                                a && ("click" === s && (a.right && (s = "contextmenu"), a.middle && (s = "mouseup")), r = o, o = function(t) {
                                    if (!("key" in t) || w(t.key) in a) {
                                        for (var i in a)
                                            if ((i = zt[i]) && i(t, a)) return;
                                        return r(t)
                                    }
                                }), ut(i, s, o, a)
                            } else at(o)
                        }
                    }

                    function ft(t) {
                        return null == t ? "" : x(t) ? JSON.stringify(t, null, 2) : String(t)
                    }

                    function dt(t) {
                        return "_value" in t ? t._value : t.value
                    }

                    function vt(t, i) {
                        var n = i ? "_trueValue" : "_falseValue";
                        return n in t ? t[n] : i
                    }

                    function pt(t) {
                        t.target.composing = !0
                    }

                    function yt(t) {
                        var i;
                        (t = t.target).composing && (t.composing = !1, i = t, (t = document.createEvent("HTMLEvents")).initEvent("input", !0, !0), i.dispatchEvent(t))
                    }

                    function mt() {
                        for (var t = arguments.length, i = Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                        throw console.error(i), "ERROR"
                    }
                    Promise.resolve();
                    var gt = !1,
                        _t = [],
                        wt = Promise.resolve(),
                        bt = function(t) {
                            _t.includes(t) || _t.push(t), gt || (gt = !0, at(rt))
                        },
                        kt = /^(spellcheck|draggable|form|list|type)$/,
                        xt = /\s*!important$/,
                        $t = function i(n, e, t) {
                            k(t) ? t.forEach(function(t) {
                                return i(n, e, t)
                            }) : e.startsWith("--") ? n.setProperty(e, t) : xt.test(t) ? n.setProperty(w(e), t.replace(xt, ""), "important") : n[e] = t
                        },
                        Ft = function(t, i) {
                            var n = t.getAttribute(i);
                            return null != n && t.removeAttribute(i), n
                        },
                        jt = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
                        Et = ["ctrl", "shift", "alt", "meta"],
                        zt = {
                            stop: function(t) {
                                return t.stopPropagation()
                            },
                            prevent: function(t) {
                                return t.preventDefault()
                            },
                            self: function(t) {
                                return t.target !== t.currentTarget
                            },
                            ctrl: function(t) {
                                return !t.ctrlKey
                            },
                            shift: function(t) {
                                return !t.shiftKey
                            },
                            alt: function(t) {
                                return !t.altKey
                            },
                            meta: function(t) {
                                return !t.metaKey
                            },
                            left: function(t) {
                                return "button" in t && 0 !== t.button
                            },
                            middle: function(t) {
                                return "button" in t && 1 !== t.button
                            },
                            right: function(t) {
                                return "button" in t && 2 !== t.button
                            },
                            exact: function(i, n) {
                                return Et.some(function(t) {
                                    return i[t + "Key"] && !n[t]
                                })
                            }
                        },
                        Ct = function(t) {
                            var i = t.el,
                                n = t.get;
                            (0, t.effect)(function() {
                                i.textContent = ft(n())
                            })
                        };
                    ({}).constructor.prototype.valueOf;
                    var St = {
                            true: !0,
                            false: !1,
                            null: null,
                            undefined: void 0
                        },
                        At = {};

                    function It() {}
                    "+ - * / % === !== == != < > <= >= && || ! =".split(" ").forEach(function(t) {
                        At[t] = !0
                    });
                    var qt = {
                        n: "\n",
                        f: "\f",
                        r: "\r",
                        t: "\t",
                        v: "\v",
                        "'": "'",
                        '"': '"'
                    };

                    function Dt(t, i) {
                        this.lexer = t, this.options = i
                    }

                    function Ot(t) {
                        return t.type === Dt.Identifier || t.type === Dt.MemberExpression
                    }

                    function Rt() {}

                    function Bt(t, i) {
                        this.ast = new Dt(t, i), this.astCompiler = new Rt
                    }

                    function Mt(t, i, n) {
                        try {
                            return Ut(i)(t)
                        } catch (t) {
                            console.error(t)
                        }
                    }

                    function Nt(t, i) {
                        var n = t.nodeType;
                        if (1 === n) {
                            var e = t;
                            if (!e.hasAttribute("v-pre")) {
                                var s = void 0;
                                if (Ft(e, "v-cloak"), s = Ft(e, "v-if")) return function(t, i, e) {
                                    var s = t.parentElement,
                                        c = new Comment("v-if");
                                    s.insertBefore(c, t);
                                    for (var n, a = [{
                                            exp: i,
                                            el: t
                                        }], r = void 0;
                                        (n = t.nextElementSibling) && (r = null, "" === Ft(n, "v-else") || (r = Ft(n, "v-else-if")));) s.removeChild(n), a.push({
                                        exp: r,
                                        el: n
                                    });

                                    function o() {
                                        h && (s.insertBefore(c, h.el), h.remove(), h = void 0)
                                    }
                                    i = t.nextSibling, s.removeChild(t);
                                    var h = void 0,
                                        u = -1;
                                    return e.effect(function() {
                                        for (var t = 0; t < a.length; t++) {
                                            var i = (n = a[t]).exp,
                                                n = n.el;
                                            if (!i || Pt(e.scope, i)) return void(t !== u && (o(), (h = new ci(n, e)).insert(s, c), s.removeChild(c), u = t))
                                        }
                                        u = -1, o()
                                    }), i
                                }(e, s, i);
                                if (s = Ft(e, "v-for")) return Gt(e, s, i);
                                !(s = Ft(e, "v-scope")) && "" !== s || (f = s ? Pt(i.scope, s) : {}, i = ei(i, f), f.$template && ni(e, f.$template));
                                var c = null != Ft(e, "v-once");
                                c && (Xt = !0), (s = Ft(e, "ref")) && ii(e, Kt, '"' + s + '"', i), Qt(e, i);
                                for (var a = [], r = [...e.attributes], o = 0; o < r.length; o++) {
                                    var h = (u = r[o]).name,
                                        u = u.value;
                                    Zt.test(h) && "v-cloak" !== h && ("v-model" === h ? a.unshift([h, u]) : "@" === h[0] || /^v-on\b/.test(h) ? a.push([h, u]) : ti(e, h, u, i))
                                }
                                var l = !0,
                                    f = !1,
                                    s = void 0;
                                try {
                                    for (var d, v = a[Symbol.iterator](); !(l = (d = v.next()).done); l = !0) {
                                        var p = d.value,
                                            y = oi(p, 2),
                                            m = y[0],
                                            g = y[1];
                                        ti(e, m, g, i)
                                    }
                                } catch (t) {
                                    f = !0, s = t
                                } finally {
                                    try {
                                        !l && v.return && v.return()
                                    } finally {
                                        if (f) throw s
                                    }
                                }
                                c && (Xt = !1)
                            }
                        } else if (3 === n) {
                            var _ = t.data;
                            if (_.includes(i.delimiters[0])) {
                                for (var w, b = [], k = 0; w = i.delimitersRE.exec(_);) {
                                    var x = _.slice(k, w.index);
                                    x && b.push(JSON.stringify(x)), b.push("$s(" + w[1] + ")"), k = w.index + w[0].length
                                }
                                k < _.length && b.push(JSON.stringify(_.slice(k))), ii(t, Ct, b.join("+"), i)
                            }
                        } else 11 === n && Qt(t, i)
                    }

                    function Tt(t) {
                        var e = fi(li({
                            delimiters: ["{{", "}}"],
                            delimitersRE: /\{\{([^]+?)\}\}/g
                        }, t), {
                            scope: t ? t.scope : it({}),
                            dirs: t ? t.dirs : {},
                            effects: [],
                            blocks: [],
                            cleanups: [],
                            effect: function(t) {
                                if (Xt) return bt(t), t;
                                var i, n = (i = {
                                    scheduler: function() {
                                        return bt(n)
                                    }
                                }, t.effect && (t = t.effect.fn), t = new q(t), s(t, i), i.scope && b(t, i.scope), i.lazy || t.run(), (i = t.run.bind(t)).effect = t, i);
                                return e.effects.push(n), n
                            }
                        });
                        return e
                    }
                    It.prototype = {
                        constructor: It,
                        lex: function(t) {
                            for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                                var i, n, e, s, c, a = this.text.charAt(this.index);
                                '"' === a || "'" === a ? this.readString(a) : this.isNumber(a) || "." === a && this.isNumber(this.peek()) ? this.readNumber() : this.isIdentifierStart(this.peekMultichar()) ? this.readIdent() : this.is(a, "(){}[].,;:?") ? (this.tokens.push({
                                    index: this.index,
                                    text: a
                                }), this.index++) : this.isWhitespace(a) ? this.index++ : (n = (i = a + this.peek()) + this.peek(2), e = At[a], s = At[i], c = At[n], e || s || c ? (this.tokens.push({
                                    index: this.index,
                                    text: a = c ? n : s ? i : a,
                                    operator: !0
                                }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1))
                            }
                            return this.tokens
                        },
                        is: function(t, i) {
                            return -1 !== i.indexOf(t)
                        },
                        peek: function(t) {
                            return this.index + (t = t || 1) < this.text.length && this.text.charAt(this.index + t)
                        },
                        isNumber: function(t) {
                            return "0" <= t && t <= "9" && "string" == typeof t
                        },
                        isWhitespace: function(t) {
                            return " " === t || "\r" === t || "\t" === t || "\n" === t || "\v" === t || " " === t
                        },
                        isIdentifierStart: function(t) {
                            return this.isValidIdentifierStart(t)
                        },
                        isValidIdentifierStart: function(t) {
                            return "a" <= t && t <= "z" || "A" <= t && t <= "Z" || "_" === t || "$" === t
                        },
                        isIdentifierContinue: function(t) {
                            return this.isValidIdentifierContinue(t)
                        },
                        isValidIdentifierContinue: function(t, i) {
                            return this.isValidIdentifierStart(t, i) || this.isNumber(t)
                        },
                        codePointAt: function(t) {
                            return 1 === t.length ? t.charCodeAt(0) : (t.charCodeAt(0) << 10) + t.charCodeAt(1) - 56613888
                        },
                        peekMultichar: function() {
                            var t = this.text.charAt(this.index),
                                i = this.peek();
                            if (!i) return t;
                            var n = t.charCodeAt(0),
                                e = i.charCodeAt(0);
                            return 55296 <= n && n <= 56319 && 56320 <= e && e <= 57343 ? t + i : t
                        },
                        isExpOperator: function(t) {
                            return "-" === t || "+" === t || this.isNumber(t)
                        },
                        throwError: function(t, i, n) {
                            throw n = n || this.index, mt("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", t, n = void 0 !== i ? "s " + i + "-" + this.index + " [" + this.text.substring(i, n) + "]" : " " + n, this.text)
                        },
                        readNumber: function() {
                            for (var t = "", i = this.index; this.index < this.text.length;) {
                                var n = this.text.charAt(this.index).toLowerCase();
                                if ("." === n || this.isNumber(n)) t += n;
                                else {
                                    var e = this.peek();
                                    if ("e" === n && this.isExpOperator(e)) t += n;
                                    else if (this.isExpOperator(n) && e && this.isNumber(e) && "e" === t.charAt(t.length - 1)) t += n;
                                    else {
                                        if (!this.isExpOperator(n) || e && this.isNumber(e) || "e" !== t.charAt(t.length - 1)) break;
                                        this.throwError("Invalid exponent")
                                    }
                                }
                                this.index++
                            }
                            this.tokens.push({
                                index: i,
                                text: t,
                                constant: !0,
                                value: Number(t)
                            })
                        },
                        readIdent: function() {
                            var t = this.index;
                            for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
                                var i = this.peekMultichar();
                                if (!this.isIdentifierContinue(i)) break;
                                this.index += i.length
                            }
                            this.tokens.push({
                                index: t,
                                text: this.text.slice(t, this.index),
                                identifier: !0
                            })
                        },
                        readString: function(t) {
                            var i = this.index;
                            this.index++;
                            for (var n = "", e = t, s = !1; this.index < this.text.length;) {
                                var c, a = this.text.charAt(this.index);
                                if (e += a, s) "u" === a ? ((c = this.text.substring(this.index + 1, this.index + 5)).match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + c + "]"), this.index += 4, n += String.fromCharCode(parseInt(c, 16))) : n += qt[a] || a, s = !1;
                                else if ("\\" === a) s = !0;
                                else {
                                    if (a === t) return this.index++, void this.tokens.push({
                                        index: i,
                                        text: e,
                                        constant: !0,
                                        value: n
                                    });
                                    n += a
                                }
                                this.index++
                            }
                            this.throwError("Unterminated quote", i)
                        }
                    }, Dt.Program = "Program", Dt.ExpressionStatement = "ExpressionStatement", Dt.AssignmentExpression = "AssignmentExpression", Dt.ConditionalExpression = "ConditionalExpression", Dt.LogicalExpression = "LogicalExpression", Dt.BinaryExpression = "BinaryExpression", Dt.UnaryExpression = "UnaryExpression", Dt.CallExpression = "CallExpression", Dt.MemberExpression = "MemberExpression", Dt.Identifier = "Identifier", Dt.Literal = "Literal", Dt.ArrayExpression = "ArrayExpression", Dt.Property = "Property", Dt.ObjectExpression = "ObjectExpression", Dt.ThisExpression = "ThisExpression", Dt.LocalsExpression = "LocalsExpression", Dt.NGValueParameter = "NGValueParameter", Dt.prototype = {
                        ast: function(t) {
                            return this.text = t, this.tokens = this.lexer.lex(t), t = this.program(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t
                        },
                        program: function() {
                            for (var t = [];;)
                                if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && t.push(this.expressionStatement()), !this.expect(";")) return {
                                    type: Dt.Program,
                                    body: t
                                }
                        },
                        expressionStatement: function() {
                            return {
                                type: Dt.ExpressionStatement,
                                expression: this.expression()
                            }
                        },
                        expression: function() {
                            return this.assignment()
                        },
                        assignment: function() {
                            var t = this.ternary();
                            if (this.expect("=")) {
                                if (!Ot(t)) throw mt("lval", "Trying to assign a value to a non l-value");
                                t = {
                                    type: Dt.AssignmentExpression,
                                    left: t,
                                    right: this.assignment(),
                                    operator: "="
                                }
                            }
                            return t
                        },
                        ternary: function() {
                            var t, i, n = this.logicalOR();
                            return this.expect("?") && (t = this.expression(), this.consume(":")) ? (i = this.expression(), {
                                type: Dt.ConditionalExpression,
                                test: n,
                                alternate: t,
                                consequent: i
                            }) : n
                        },
                        logicalOR: function() {
                            for (var t = this.logicalAND(); this.expect("||");) t = {
                                type: Dt.LogicalExpression,
                                operator: "||",
                                left: t,
                                right: this.logicalAND()
                            };
                            return t
                        },
                        logicalAND: function() {
                            for (var t = this.equality(); this.expect("&&");) t = {
                                type: Dt.LogicalExpression,
                                operator: "&&",
                                left: t,
                                right: this.equality()
                            };
                            return t
                        },
                        equality: function() {
                            for (var t, i = this.relational(); t = this.expect("==", "!=", "===", "!==");) i = {
                                type: Dt.BinaryExpression,
                                operator: t.text,
                                left: i,
                                right: this.relational()
                            };
                            return i
                        },
                        relational: function() {
                            for (var t, i = this.additive(); t = this.expect("<", ">", "<=", ">=");) i = {
                                type: Dt.BinaryExpression,
                                operator: t.text,
                                left: i,
                                right: this.additive()
                            };
                            return i
                        },
                        additive: function() {
                            for (var t, i = this.multiplicative(); t = this.expect("+", "-");) i = {
                                type: Dt.BinaryExpression,
                                operator: t.text,
                                left: i,
                                right: this.multiplicative()
                            };
                            return i
                        },
                        multiplicative: function() {
                            for (var t, i = this.unary(); t = this.expect("*", "/", "%");) i = {
                                type: Dt.BinaryExpression,
                                operator: t.text,
                                left: i,
                                right: this.unary()
                            };
                            return i
                        },
                        unary: function() {
                            var t;
                            return (t = this.expect("+", "-", "!")) ? {
                                type: Dt.UnaryExpression,
                                operator: t.text,
                                prefix: !0,
                                argument: this.unary()
                            } : this.primary()
                        },
                        primary: function() {
                            var t, i;
                            for (this.expect("(") ? (t = this.expression(), this.consume(")")) : this.expect("[") ? t = this.arrayDeclaration() : this.expect("{") ? t = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? t = Object.assign({}, this.selfReferential[this.consume().text]) : St.hasOwnProperty(this.peek().text) ? t = {
                                    type: Dt.Literal,
                                    value: St[this.consume().text]
                                } : this.peek().identifier ? t = this.identifier() : this.peek().constant ? t = this.constant() : this.throwError("not a primary expression", this.peek()); i = this.expect("(", "[", ".");) "(" === i.text ? (t = {
                                type: Dt.CallExpression,
                                callee: t,
                                arguments: this.parseArguments()
                            }, this.consume(")")) : "[" === i.text ? (t = {
                                type: Dt.MemberExpression,
                                object: t,
                                property: this.expression(),
                                computed: !0
                            }, this.consume("]")) : "." === i.text ? t = {
                                type: Dt.MemberExpression,
                                object: t,
                                property: this.identifier(),
                                computed: !1
                            } : this.throwError("IMPOSSIBLE");
                            return t
                        },
                        parseArguments: function() {
                            var t = [];
                            if (")" !== this.peekToken().text)
                                for (; t.push(this.expression()), this.expect(","););
                            return t
                        },
                        identifier: function() {
                            var t = this.consume();
                            return t.identifier || this.throwError("is not a valid identifier", t), {
                                type: Dt.Identifier,
                                name: t.text
                            }
                        },
                        constant: function() {
                            return {
                                type: Dt.Literal,
                                value: this.consume().value
                            }
                        },
                        arrayDeclaration: function() {
                            var t = [];
                            if ("]" !== this.peekToken().text)
                                for (; !this.peek("]") && (t.push(this.expression()), this.expect(",")););
                            return this.consume("]"), {
                                type: Dt.ArrayExpression,
                                elements: t
                            }
                        },
                        object: function() {
                            var t, i = [];
                            if ("}" !== this.peekToken().text)
                                for (; !this.peek("}") && (t = {
                                        type: Dt.Property,
                                        kind: "init"
                                    }, this.peek().constant ? (t.key = this.constant(), t.computed = !1, this.consume(":"), t.value = this.expression()) : this.peek().identifier ? (t.key = this.identifier(), t.computed = !1, this.peek(":") ? (this.consume(":"), t.value = this.expression()) : t.value = t.key) : this.peek("[") ? (this.consume("["), t.key = this.expression(), this.consume("]"), t.computed = !0, this.consume(":"), t.value = this.expression()) : this.throwError("invalid key", this.peek()), i.push(t), this.expect(",")););
                            return this.consume("}"), {
                                type: Dt.ObjectExpression,
                                properties: i
                            }
                        },
                        throwError: function(t, i) {
                            throw mt("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", i.text, t, i.index + 1, this.text, this.text.substring(i.index))
                        },
                        consume: function(t) {
                            if (0 === this.tokens.length) throw mt("ueoe", "Unexpected end of expression: {0}", this.text);
                            var i = this.expect(t);
                            return i || this.throwError("is unexpected, expecting [" + t + "]", this.peek()), i
                        },
                        peekToken: function() {
                            if (0 === this.tokens.length) throw mt("ueoe", "Unexpected end of expression: {0}", this.text);
                            return this.tokens[0]
                        },
                        peek: function(t, i, n, e) {
                            return this.peekAhead(0, t, i, n, e)
                        },
                        peekAhead: function(t, i, n, e, s) {
                            if (this.tokens.length > t) {
                                var c = this.tokens[t];
                                if ((t = c.text) === i || t === n || t === e || t === s || !i && !n && !e && !s) return c
                            }
                            return !1
                        },
                        expect: function(t, i, n, e) {
                            return !!(e = this.peek(t, i, n, e)) && (this.tokens.shift(), e)
                        },
                        selfReferential: {
                            this: {
                                type: Dt.ThisExpression
                            },
                            $locals: {
                                type: Dt.LocalsExpression
                            }
                        }
                    }, Rt.prototype = {
                        compile: function(i) {
                            var e, s = this;
                            (function i(t, n) {
                                var e, s, c = t.isPure = function(t, i) {
                                    switch (t.type) {
                                        case Dt.MemberExpression:
                                            if (t.computed) return !1;
                                            break;
                                        case Dt.UnaryExpression:
                                            return 1;
                                        case Dt.BinaryExpression:
                                            return "+" !== t.operator && 1;
                                        case Dt.CallExpression:
                                            return !1
                                    }
                                    return void 0 === i ? 2 : i
                                }(t, n);
                                switch (t.type) {
                                    case Dt.Program:
                                        e = !0, t.body.forEach(function(t) {
                                            i(t.expression, c), e = e && t.expression.constant
                                        }), t.constant = e;
                                        break;
                                    case Dt.Literal:
                                        t.constant = !0, t.toWatch = [];
                                        break;
                                    case Dt.UnaryExpression:
                                        i(t.argument, c), t.constant = t.argument.constant, t.toWatch = t.argument.toWatch;
                                        break;
                                    case Dt.BinaryExpression:
                                        i(t.left, c), i(t.right, c), t.constant = t.left.constant && t.right.constant, t.toWatch = t.left.toWatch.concat(t.right.toWatch);
                                        break;
                                    case Dt.LogicalExpression:
                                        i(t.left, c), i(t.right, c), t.constant = t.left.constant && t.right.constant, t.toWatch = t.constant ? [] : [t];
                                        break;
                                    case Dt.ConditionalExpression:
                                        i(t.test, c), i(t.alternate, c), i(t.consequent, c), t.constant = t.test.constant && t.alternate.constant && t.consequent.constant, t.toWatch = t.constant ? [] : [t];
                                        break;
                                    case Dt.Identifier:
                                        t.constant = !1, t.toWatch = [t];
                                        break;
                                    case Dt.MemberExpression:
                                        i(t.object, c), t.computed && i(t.property, c), t.constant = t.object.constant && (!t.computed || t.property.constant), t.toWatch = t.constant ? [] : [t];
                                        break;
                                    case Dt.CallExpression:
                                        e = !1, s = [], t.arguments.forEach(function(t) {
                                            i(t, c), e = e && t.constant, s.push.apply(s, t.toWatch)
                                        }), t.constant = e, t.toWatch = [t];
                                        break;
                                    case Dt.AssignmentExpression:
                                        i(t.left, c), i(t.right, c), t.constant = t.left.constant && t.right.constant, t.toWatch = [t];
                                        break;
                                    case Dt.ArrayExpression:
                                        e = !0, s = [], t.elements.forEach(function(t) {
                                            i(t, c), e = e && t.constant, s.push.apply(s, t.toWatch)
                                        }), t.constant = e, t.toWatch = s;
                                        break;
                                    case Dt.ObjectExpression:
                                        e = !0, s = [], t.properties.forEach(function(t) {
                                            i(t.value, c), e = e && t.value.constant, s.push.apply(s, t.value.toWatch), t.computed && (i(t.key, !1), e = e && t.key.constant, s.push.apply(s, t.key.toWatch))
                                        }), t.constant = e, t.toWatch = s;
                                        break;
                                    case Dt.ThisExpression:
                                    case Dt.LocalsExpression:
                                        t.constant = !1, t.toWatch = []
                                }
                            })(i), (t = function(t) {
                                if (1 === i.body.length && Ot(i.body[0].expression)) return {
                                    type: Dt.AssignmentExpression,
                                    left: i.body[0].expression,
                                    right: {
                                        type: Dt.NGValueParameter
                                    },
                                    operator: "="
                                }
                            }()) && (e = this.recurse(t));
                            var c, t = function(t) {
                                if (1 === t.length) {
                                    var i = t[0].expression;
                                    return 1 !== (t = i.toWatch).length || t[0] !== i ? t : void 0
                                }
                            }(i.body);
                            t && (c = [], t.forEach(function(t, i) {
                                var n = s.recurse(t);
                                n.isPure = t.isPure, t.input = n, c.push(n), t.watchId = i
                            }));
                            var a = [];
                            return i.body.forEach(function(t) {
                                a.push(s.recurse(t.expression))
                            }), t = 0 === i.body.length ? noop : 1 === i.body.length ? a[0] : function(i, n) {
                                var e;
                                return a.forEach(function(t) {
                                    e = t(i, n)
                                }), e
                            }, e && (t.assign = function(t, i, n) {
                                return e(t, n, i)
                            }), c && (t.inputs = c), t
                        },
                        recurse: function(t, o, i) {
                            var c, h, u, n = this;
                            if (t.input) return this.inputs(t.input, t.watchId);
                            switch (t.type) {
                                case Dt.Literal:
                                    return this.value(t.value, o);
                                case Dt.UnaryExpression:
                                    return h = this.recurse(t.argument), this["unary" + t.operator](h, o);
                                case Dt.BinaryExpression:
                                case Dt.LogicalExpression:
                                    return c = this.recurse(t.left), h = this.recurse(t.right), this["binary" + t.operator](c, h, o);
                                case Dt.ConditionalExpression:
                                    return this["ternary?:"](this.recurse(t.test), this.recurse(t.alternate), this.recurse(t.consequent), o);
                                case Dt.Identifier:
                                    return n.identifier(t.name, o, i);
                                case Dt.MemberExpression:
                                    return c = this.recurse(t.object, !1, !!i), t.computed || (h = t.property.name), t.computed && (h = this.recurse(t.property)), t.computed ? this.computedMember(c, h, o, i) : this.nonComputedMember(c, h, o, i);
                                case Dt.CallExpression:
                                    return u = [], t.arguments.forEach(function(t) {
                                            u.push(n.recurse(t))
                                        }), h = this.recurse(t.callee, !0),
                                        function(t, i, n, e) {
                                            var s, c = h(t, i, n, e);
                                            if (null != c.value) {
                                                for (var a = [], r = 0; r < u.length; ++r) a.push(u[r](t, i, n, e));
                                                s = c.value.apply(c.context, a)
                                            }
                                            return o ? {
                                                value: s
                                            } : s
                                        };
                                case Dt.AssignmentExpression:
                                    return c = this.recurse(t.left, !0, 1), h = this.recurse(t.right),
                                        function(t, i, n, e) {
                                            var s = c(t, i, n, e),
                                                e = h(t, i, n, e);
                                            return s.context[s.name] = e, o ? {
                                                value: e
                                            } : e
                                        };
                                case Dt.ArrayExpression:
                                    return u = [], t.elements.forEach(function(t) {
                                            u.push(n.recurse(t))
                                        }),
                                        function(t, i, n, e) {
                                            for (var s = [], c = 0; c < u.length; ++c) s.push(u[c](t, i, n, e));
                                            return o ? {
                                                value: s
                                            } : s
                                        };
                                case Dt.ObjectExpression:
                                    return u = [], t.properties.forEach(function(t) {
                                            t.computed ? u.push({
                                                key: n.recurse(t.key),
                                                computed: !0,
                                                value: n.recurse(t.value)
                                            }) : u.push({
                                                key: t.key.type === Dt.Identifier ? t.key.name : "" + t.key.value,
                                                computed: !1,
                                                value: n.recurse(t.value)
                                            })
                                        }),
                                        function(t, i, n, e) {
                                            for (var s = {}, c = 0; c < u.length; ++c) u[c].computed ? s[u[c].key(t, i, n, e)] = u[c].value(t, i, n, e) : s[u[c].key] = u[c].value(t, i, n, e);
                                            return o ? {
                                                value: s
                                            } : s
                                        };
                                case Dt.ThisExpression:
                                    return function(t) {
                                        return o ? {
                                            value: t
                                        } : t
                                    };
                                case Dt.LocalsExpression:
                                    return function(t, i) {
                                        return o ? {
                                            value: i
                                        } : i
                                    };
                                case Dt.NGValueParameter:
                                    return function(t, i, n) {
                                        return o ? {
                                            value: n
                                        } : n
                                    }
                            }
                        },
                        "unary+": function(s, c) {
                            return function(t, i, n, e) {
                                return e = void 0 !== (e = s(t, i, n, e)) ? +e : 0, c ? {
                                    value: e
                                } : e
                            }
                        },
                        "unary-": function(s, c) {
                            return function(t, i, n, e) {
                                return e = void 0 !== (e = s(t, i, n, e)) ? -e : -0, c ? {
                                    value: e
                                } : e
                            }
                        },
                        "unary!": function(s, c) {
                            return function(t, i, n, e) {
                                return e = !s(t, i, n, e), c ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary+": function(c, a, r) {
                            return function(t, i, n, e) {
                                var s, e = (s = c(t, i, n, e), e = a(t, i, n, e), void 0 === s ? e : void 0 === e ? s : s + e);
                                return r ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary-": function(c, a, r) {
                            return function(t, i, n, e) {
                                var s = c(t, i, n, e),
                                    e = (void 0 !== s ? s : 0) - (void 0 !== (e = a(t, i, n, e)) ? e : 0);
                                return r ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary*": function(s, c, a) {
                            return function(t, i, n, e) {
                                return e = s(t, i, n, e) * c(t, i, n, e), a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary/": function(s, c, a) {
                            return function(t, i, n, e) {
                                return e = s(t, i, n, e) / c(t, i, n, e), a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary%": function(s, c, a) {
                            return function(t, i, n, e) {
                                return e = s(t, i, n, e) % c(t, i, n, e), a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary===": function(s, c, a) {
                            return function(t, i, n, e) {
                                return e = s(t, i, n, e) === c(t, i, n, e), a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary!==": function(s, c, a) {
                            return function(t, i, n, e) {
                                return e = s(t, i, n, e) !== c(t, i, n, e), a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary==": function(s, c, a) {
                            return function(t, i, n, e) {
                                return e = s(t, i, n, e) == c(t, i, n, e), a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary!=": function(s, c, a) {
                            return function(t, i, n, e) {
                                return e = s(t, i, n, e) != c(t, i, n, e), a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary<": function(s, c, a) {
                            return function(t, i, n, e) {
                                return e = s(t, i, n, e) < c(t, i, n, e), a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary>": function(s, c, a) {
                            return function(t, i, n, e) {
                                return e = s(t, i, n, e) > c(t, i, n, e), a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary<=": function(s, c, a) {
                            return function(t, i, n, e) {
                                return e = s(t, i, n, e) <= c(t, i, n, e), a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary>=": function(s, c, a) {
                            return function(t, i, n, e) {
                                return e = s(t, i, n, e) >= c(t, i, n, e), a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary&&": function(s, c, a) {
                            return function(t, i, n, e) {
                                return e = s(t, i, n, e) && c(t, i, n, e), a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary||": function(s, c, a) {
                            return function(t, i, n, e) {
                                return e = s(t, i, n, e) || c(t, i, n, e), a ? {
                                    value: e
                                } : e
                            }
                        },
                        "ternary?:": function(s, c, a, r) {
                            return function(t, i, n, e) {
                                return e = (s(t, i, n, e) ? c : a)(t, i, n, e), r ? {
                                    value: e
                                } : e
                            }
                        },
                        value: function(t, i) {
                            return function() {
                                return i ? {
                                    context: void 0,
                                    name: void 0,
                                    value: t
                                } : t
                            }
                        },
                        identifier: function(s, c, a) {
                            return function(t, i, n, e) {
                                return i = i && s in i ? i : t, a && 1 !== a && i && null == i[s] && (i[s] = {}), t = i ? i[s] : void 0, c ? {
                                    context: i,
                                    name: s,
                                    value: t
                                } : t
                            }
                        },
                        computedMember: function(r, o, h, u) {
                            return function(t, i, n, e) {
                                var s, c, a = r(t, i, n, e);
                                return null != a && (s = o(t, i, n, e), s += "", u && 1 !== u && a && !a[s] && (a[s] = {}), c = a[s]), h ? {
                                    context: a,
                                    name: s,
                                    value: c
                                } : c
                            }
                        },
                        nonComputedMember: function(s, c, a, r) {
                            return function(t, i, n, e) {
                                return n = s(t, i, n, e), r && 1 !== r && n && null == n[c] && (n[c] = {}), e = null != n ? n[c] : void 0, a ? {
                                    context: n,
                                    name: c,
                                    value: e
                                } : e
                            }
                        },
                        inputs: function(s, c) {
                            return function(t, i, n, e) {
                                return e ? e[c] : s(t, i, n)
                            }
                        }
                    };
                    var Ut = new function() {
                            var e = {};
                            return function(t, i) {
                                var n;
                                return t = t.trim(), (n = e[t]) ? n : new Bt(new It).parse(t)
                            }
                        },
                        Pt = function(t, i, n) {
                            return Mt(t, i)
                        },
                        Lt = {
                            bind: ot,
                            on: lt,
                            show: function(t) {
                                var i = t.el,
                                    n = t.get,
                                    t = t.effect,
                                    e = i.style.display;
                                t(function() {
                                    i.style.display = n() ? e : "none"
                                })
                            },
                            text: Ct,
                            html: function(t) {
                                var i = t.el,
                                    n = t.get;
                                (0, t.effect)(function() {
                                    i.innerHTML = n()
                                })
                            },
                            model: function(t) {
                                function c(t) {
                                    o(e + " = '" + t + "'")
                                }
                                var a, i, n, r = t.el,
                                    e = t.exp,
                                    o = t.get,
                                    s = t.effect,
                                    h = t.modifiers,
                                    u = r.type,
                                    l = (t = h || {}).trim,
                                    f = void 0 === (t = t.number) ? "number" === u : t;
                                "SELECT" === r.tagName ? (ut(a = r, "change", function() {
                                    var t = Array.prototype.filter.call(a.options, function(t) {
                                        return t.selected
                                    }).map(function(t) {
                                        return f ? m(dt(t)) : dt(t)
                                    });
                                    c(a.multiple ? t : t[0])
                                }), s(function() {
                                    for (var t = o(), i = a.multiple, n = 0, e = a.options.length; n < e; n++) {
                                        var s = a.options[n],
                                            c = dt(s);
                                        if (i) k(t) ? s.selected = -1 < v(t, c) : s.selected = t.has(c);
                                        else if (d(dt(s), t)) return void(a.selectedIndex !== n && (a.selectedIndex = n))
                                    }
                                    i || -1 === a.selectedIndex || (a.selectedIndex = -1)
                                })) : "checkbox" === u ? (i = void 0, ut(r, "change", function() {
                                    var t, i, n, e = o(),
                                        s = r.checked;
                                    k(e) ? (n = -1 !== (i = v(e, t = dt(r))), s && !n ? c(e.concat(t)) : !s && n && ((e = [...e]).splice(i, 1), c(e))) : c(vt(r, s))
                                }), s(function() {
                                    var t = o();
                                    k(t) ? r.checked = -1 < v(t, dt(r)) : t !== i && (r.checked = d(t, vt(r, !0))), i = t
                                })) : "radio" === u ? (ut(r, "change", function() {
                                    c(dt(r))
                                }), s(function() {
                                    var t = o();
                                    void 0 !== t && (r.checked = d(t, dt(r)))
                                })) : (n = function(t) {
                                    return l ? t.trim() : f ? m(t) : t
                                }, ut(r, "compositionstart", pt), ut(r, "compositionend", yt), ut(r, null != h && h.lazy ? "change" : "input", function() {
                                    r.composing || c(n(r.value))
                                }), l && ut(r, "change", function() {
                                    r.value = r.value.trim()
                                }), s(function() {
                                    var t, i;
                                    r.composing || (t = r.value, i = o(), document.activeElement === r && n(t) === i || t !== i && (r.value = i))
                                }))
                            },
                            effect: function(t) {
                                t.el;
                                var i = t.ctx,
                                    n = t.exp,
                                    e = t.effect;
                                at(function() {
                                    return e(function() {
                                        return Mt(i.scope, n)
                                    })
                                })
                            }
                        },
                        Jt = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
                        Vt = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
                        Wt = /^\(|\)$/g,
                        Ht = /^[{[]\s*((?:[\w_$]+\s*,?\s*)+)[\]}]$/,
                        Gt = function(e, t, u) {
                            if (n = t.match(Jt)) {
                                var i = e.nextSibling,
                                    l = e.parentElement,
                                    f = new Text("");
                                l.insertBefore(f, e), l.removeChild(e);
                                var d = n[2].trim(),
                                    a = void 0,
                                    r = void 0,
                                    o = void 0,
                                    t = void 0,
                                    h = n[1].trim().replace(Wt, "").trim(),
                                    v = !1,
                                    n = "key",
                                    p = e.getAttribute(n) || e.getAttribute(n = ":key") || e.getAttribute(n = "v-bind:key");

                                function y(t, n, i, e) {
                                    var s = {};
                                    a ? a.forEach(function(t, i) {
                                        return s[t] = n[v ? i : t]
                                    }) : s[h] = n, e ? (r && (s[r] = e), o && (s[o] = i)) : r && (s[r] = i);
                                    var c = ei(u, s),
                                        e = p ? Pt(c.scope, p) : i;
                                    return t.set(e, i), c.key = e, c
                                }

                                function m(t, i) {
                                    var n = new ci(e, t);
                                    return n.key = t.key, n.insert(l, i), n
                                }
                                p && (e.removeAttribute(n), "key" === n && (p = JSON.stringify(p))), (t = h.match(Vt)) && (h = h.replace(Vt, "").trim(), r = t[1].trim(), t[2] && (o = t[2].trim())), (t = h.match(Ht)) && (a = t[1].split(",").map(function(t) {
                                    return t.trim()
                                }), v = "[" === h[0]);
                                var g = void 0,
                                    _ = void 0,
                                    w = void 0,
                                    b = !1;
                                return u.effect(function() {
                                    var t = Pt(u.scope, d),
                                        i = w,
                                        t = function(t) {
                                            var i = new Map,
                                                n = [];
                                            if (k(t))
                                                for (var e = 0; e < t.length; e++) n.push(y(i, t[e], e));
                                            else if ("number" == typeof t)
                                                for (var s = 0; s < t; s++) n.push(y(i, s + 1, s));
                                            else if (x(t)) {
                                                var c, a = 0;
                                                for (c in t) n.push(y(i, t[c], a++, c))
                                            }
                                            return [n, i]
                                        }(t),
                                        t = oi(t, 2);
                                    if (_ = t[0], w = t[1], b) {
                                        for (var n = 0; n < g.length; n++) w.has(g[n].key) || g[n].remove();
                                        for (var e = [], s = void 0, c = void 0, a = _.length; a--;) {
                                            var r = _[a],
                                                o = i.get(r.key),
                                                h = void 0;
                                            null == o ? h = m(r, s ? s.el : f) : (h = g[o], Object.assign(h.ctx.scope, r.scope), o === a || g[o + 1] === s && c !== s || (c = h).insert(l, s ? s.el : f)), e.unshift(s = h)
                                        }
                                        g = e
                                    } else g = _.map(function(t) {
                                        return m(t, f)
                                    }), b = !0
                                }), i
                            }
                        },
                        Kt = function(t) {
                            var i = t.el,
                                n = t.ctx.scope.$refs,
                                e = t.get,
                                t = t.effect,
                                s = void 0;
                            return t(function() {
                                    var t = e();
                                    n[t] = i, s && t !== s && delete n[s], s = t
                                }),
                                function() {
                                    s && delete n[s]
                                }
                        },
                        Zt = /^(?:v-|:|@)/,
                        Yt = /\.([\w-]+)/g,
                        Xt = !(Bt.prototype = {
                            constructor: Bt,
                            parse: function(t) {
                                var i = this.getAst(t),
                                    n = this.astCompiler.compile(i.ast);
                                return n.literal = 0 === (t = i.ast).body.length || 1 === t.body.length && (t.body[0].expression.type === Dt.Literal || t.body[0].expression.type === Dt.ArrayExpression || t.body[0].expression.type === Dt.ObjectExpression), n.constant = i.ast.constant, n.oneTime = i.oneTime, n
                            },
                            getAst: function(t) {
                                var i = !1;
                                return ":" === (t = t.trim()).charAt(0) && ":" === t.charAt(1) && (i = !0, t = t.substring(2)), {
                                    ast: this.ast.ast(t),
                                    oneTime: i
                                }
                            }
                        }),
                        Qt = function(t, i) {
                            for (var n = t.firstChild; n;) n = Nt(n, i) || n.nextSibling
                        },
                        ti = function(t, i, n, e) {
                            var s, c = void 0,
                                a = void 0,
                                r = i.replace(Yt, function(t, i) {
                                    return (a = a || {})[i] = !0, ""
                                }),
                                o = ":" === r[0] ? (c = ot, r.slice(1)) : "@" === r[0] ? (c = lt, r.slice(1)) : (s = 0 < (o = r.indexOf(":")) ? r.slice(2, o) : r.slice(2), c = Lt[s] || e.dirs[s], 0 < o ? r.slice(o + 1) : void 0);
                            c && (ii(t, c = c === ot && "ref" === o ? Kt : c, n, e, o, a), t.removeAttribute(i))
                        },
                        ii = function(t, i, n, e, s, c) {
                            (c = i({
                                el: t,
                                get: function() {
                                    return Pt(e.scope, 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : n)
                                },
                                effect: e.effect,
                                ctx: e,
                                exp: n,
                                arg: s,
                                modifiers: c
                            })) && e.cleanups.push(c)
                        },
                        ni = function(t, i) {
                            "#" !== i[0] ? t.innerHTML = i : (i = document.querySelector(i), t.appendChild(i.content.cloneNode(!0)))
                        },
                        ei = function(t) {
                            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                s = t.scope,
                                n = Object.create(s);
                            Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)), n.$refs = Object.create(s.$refs);
                            var c = it(new Proxy(n, {
                                set: function(t, i, n, e) {
                                    return e !== c || t.hasOwnProperty(i) ? Reflect.set(t, i, n, e) : Reflect.set(s, i, n)
                                }
                            }));
                            return si(c), fi(li({}, t), {
                                scope: c
                            })
                        },
                        si = function(t) {
                            var i = !0,
                                n = !1,
                                e = void 0;
                            try {
                                for (var s, c = Object.keys(t)[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                                    var a = s.value;
                                    "function" == typeof t[a] && (t[a] = t[a].bind(t))
                                }
                            } catch (t) {
                                n = !0, e = t
                            } finally {
                                try {
                                    !i && c.return && c.return()
                                } finally {
                                    if (n) throw e
                                }
                            }
                        },
                        ci = (ai.prototype.insert = function(t) {
                            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                            if (this.isFragment)
                                if (this.start)
                                    for (var n = void 0, e = this.start; e && (n = e.nextSibling, t.insertBefore(e, i), e !== this.end);) e = n;
                                else this.start = new Text(""), this.end = new Text(""), t.insertBefore(this.end, i), t.insertBefore(this.start, this.end), t.insertBefore(this.template, this.end);
                            else t.insertBefore(this.template, i)
                        }, ai.prototype.remove = function() {
                            if (this.parentCtx && (-1 < (s = (e = this.parentCtx.blocks).indexOf(this)) && e.splice(s, 1)), this.start)
                                for (var t = this.start.parentNode, i = void 0, n = this.start; n && (i = n.nextSibling, t.removeChild(n), n !== this.end);) n = i;
                            else this.template.parentNode.removeChild(this.template);
                            var e, s;
                            this.teardown()
                        }, ai.prototype.teardown = function() {
                            this.ctx.blocks.forEach(function(t) {
                                t.teardown()
                            }), this.ctx.effects.forEach(R), this.ctx.cleanups.forEach(function(t) {
                                return t()
                            })
                        }, di(ai.prototype, [{
                            key: "el",
                            get: function() {
                                return this.start || this.template
                            }
                        }]), ai);

                    function ai(t, i) {
                        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                        ui(this, "template"), ui(this, "ctx"), ui(this, "key"), ui(this, "parentCtx"), ui(this, "isFragment"), ui(this, "start"), ui(this, "end"), this.isFragment = t instanceof HTMLTemplateElement, n ? this.template = t : this.isFragment ? this.template = t.content.cloneNode(!0) : this.template = t.cloneNode(!0), n ? this.ctx = i : ((this.parentCtx = i).blocks.push(this), this.ctx = Tt(i)), Nt(this.template, this.ctx)
                    }

                    function ri(t) {
                        return t.replace(/[-.*+?^${}()|[\]\/\\]/g, "\\$&")
                    }
                    return V = function(t) {
                        var i, n = Tt();
                        t && (n.scope = it(t), si(n.scope), t.$delimiters) && (i = n.delimiters = t.$delimiters, i = (t = oi(i, 2))[0], t = t[1], n.delimitersRE = new RegExp(ri(i) + "([^]+?)" + ri(t), "g"));
                        var e = void 0;
                        return n.scope.$s = ft, n.scope.$nextTick = at, n.scope.$refs = Object.create(null), {
                            directive: function(t, i) {
                                return i ? (n.dirs[t] = i, this) : n.dirs[t]
                            },
                            mount: function(t) {
                                if ("string" != typeof t || (t = document.querySelector(t))) {
                                    var i = void 0;
                                    return (i = (t = t || document.documentElement).hasAttribute("v-scope") ? [t] : [...t.querySelectorAll("[v-scope]")].filter(function(t) {
                                        return !t.matches("[v-scope] [v-scope]")
                                    })).length || (i = [t]), e = i.map(function(t) {
                                        return new ci(t, n, !0)
                                    }), this
                                }
                            },
                            unmount: function() {
                                e.forEach(function(t) {
                                    return t.teardown()
                                })
                            }
                        }
                    }, (W = document.currentScript) && W.hasAttribute("init") && V().mount(), t.createApp = V, t.nextTick = at, t.reactive = it, Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t[Symbol.toStringTag] = "Module", t
                }({}), i = c, y.prototype.init = function(t) {
                    var i = (n.prototype.code = function(t) {
                        return this.parent.template.render("smiley", {
                            name: t,
                            size: 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "small"
                        })
                    }, n.prototype.parse = function(t) {
                        var i, n, e = void 0,
                            s = void 0,
                            c = t;
                        for (e in this.d)
                            if (this.d.hasOwnProperty(e))
                                for (i = this.d[e]; null !== (n = c.match(i));) s = "small", c === n[2] && (s = "large"), n = this.code(e, s), c = c.replace(i, "$1" + n + "$3");
                        return c
                    }, n.prototype.count = function(t) {
                        var i = 0,
                            n = void 0,
                            e = void 0,
                            s = t;
                        for (n in this.d)
                            if (this.d.hasOwnProperty(n))
                                for (e = this.d[n]; !0 === e.test(s);) i++, s = s.replace(e, "$1[]$3");
                        return i
                    }, n.prototype.name = function(t) {
                        var i, n = void 0,
                            e = null;
                        for (n in this.d)
                            if (this.d.hasOwnProperty(n) && (i = this.d[n], t.match(i))) {
                                e = n;
                                break
                            }
                        return e
                    }, n.prototype.p = function() {
                        var t = void 0;
                        for (t in this.d = {}, this.m) this.d[t] = new RegExp("(^|\\s|\\()" + this.m[t] + "($|\\s|\\))", "i")
                    }, n);

                    function n(t) {
                        this.parent = t, this.smiley_map = {
                            angry: ":@",
                            blushing: ":$",
                            confused: "x)",
                            cool: "8)",
                            crying: ":'(",
                            embarrased: ":/",
                            heart: "<3",
                            laughing: ":'D",
                            sad: ":(",
                            sick: ":S",
                            "small-smile": ":)",
                            "big-smile": ":D",
                            "thumbs-up": "+1",
                            surprised: ":o",
                            tongue: ":P",
                            winking: ";)"
                        }, this.m = {
                            angry: "((?:=|:)(?:-)?@)",
                            blushing: "((?:=|:)(?:-)?\\$)",
                            cool: "(8(?:-)?\\))",
                            confused: "(x(?:-)?\\))",
                            crying: "((?:=|:)'(?:-)?\\()",
                            embarrased: "((?:=|:)(?:-)?\\/)",
                            heart: "(&lt;3)",
                            laughing: "((?:=|:)(?:-)?'D)",
                            sad: "((?:=|:)(?:-)?(?:\\(|\\|))",
                            sick: "((?:=|:)(?:-)?S)",
                            "small-smile": "((?:=|:)(?:-)?\\))",
                            "big-smile": "((?:=|:)(?:-)?D)",
                            "thumbs-up": "(\\+1)",
                            surprised: "((?:=|:)(?:-)?o)",
                            tongue: "((?:=|:)(?:-)?P)",
                            winking: "(;(?:-)?\\))"
                        }, this.p()
                    }
                    var e = (s.prototype.format = function(t) {
                        for (var i, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [], s = void 0, c = t, s = 0; s < this.g.length; s++) i = this.g[s], -1 === e.indexOf(i) && (c = this._[i].bind(this)(c, n));
                        return c
                    }, s.prototype.replace = function(t) {
                        for (var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], n = void 0, e = t, n = 0; n < i.length; n++) e = e.replace("%" + (n + 1) + "s", i[n]);
                        return e
                    }, s.prototype.attribute = function(t) {
                        return this.b(t, {}, this.k)
                    }, s.prototype.html = function(t) {
                        return this.b(t, {}, !0 === (1 < arguments.length && void 0 !== arguments[1] && arguments[1]) ? this.$ : this.F)
                    }, s.prototype.escape_regex = function(t) {
                        return t.replace(this.j, "\\$&")
                    }, s.prototype.b = function(t) {
                        var i, n = void 0,
                            e = t,
                            s = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null) || this.F;
                        for (n in s) s.hasOwnProperty(n) && (i = s[n], e = e.replace(i, n));
                        return e
                    }, s.prototype.z = function(t) {
                        return t.replace(/\n(\s+)?\n(\s+)?\n/g, "\n\n")
                    }, s.prototype.C = function(t) {
                        var i = this.parent.template.render("new_line", {}, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {});
                        return t.trim().replace(/\n/g, i)
                    }, s.prototype.S = function(t) {
                        var s = this,
                            c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        return t.replace(this.A.email, function(t, i, n, e) {
                            return "" + i + s.parent.template.render("link_email", {
                                email: n,
                                no_external_link: s.parent.config.runtime.no_external_link || !1
                            }, c) + e
                        })
                    }, s.prototype.I = function(t) {
                        var s = this,
                            c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        return t.replace(this.A.phone, function(t, i, n, e) {
                            return "" + i + s.parent.template.render("link_phone", {
                                phone: n,
                                no_external_link: s.parent.config.runtime.no_external_link || !1
                            }, c) + e
                        })
                    }, s.prototype.q = function(t) {
                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        t = "\n" + t + "\n";
                        for (var n = 0; n < this.D.length; n++) t = t.replace(this.D[n][1], this.O(this.D[n], i));
                        return t = t.trim()
                    }, s.prototype.R = function(t) {
                        var s = this,
                            c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        return t.replace(this.A.domain, function(t, i, n, e) {
                            return "" + i + s.parent.template.render("link_domain", {
                                domain_value: n,
                                domain_name: n,
                                no_external_link: s.parent.config.runtime.no_external_link || !1
                            }, c) + e
                        })
                    }, s.prototype.B = function(t) {
                        var s = this,
                            c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        return t.replace(this.A.uri, function(t, i, n, e) {
                            return "" + i + s.parent.template.render("link_uri", {
                                uri_value: n,
                                uri_name: n,
                                no_external_link: s.parent.config.runtime.no_external_link || !1
                            }, c) + e
                        })
                    }, s.prototype.M = function(t) {
                        return this.parent.Smileys.parse(t)
                    }, s.prototype.N = function(t) {
                        var i = (t.value || "").match(this.T);
                        i && i[1] ? (t.type = i[1], t.value = i[2]) : t.type = "none", t.value = (t.value || "").trim()
                    }, s.prototype.U = function(t) {
                        var s = (i = t.type.split("|")).slice(1, i.length - 1).map(function(t) {
                                return (t || "").trim()
                            }),
                            i = t.value.split("\n").map(function(t) {
                                var i = (t = t.split("|")).slice(1, t.length - 1).map(function(t) {
                                        return (t || "").trim()
                                    }),
                                    n = s.length - i.length;
                                if (0 != n)
                                    if (n < 0) i = i.slice(0, s.length);
                                    else
                                        for (var e = 0; e < n; e++) i.push("");
                                return i
                            });
                        t.type = s, t.value = i
                    }, s.prototype.O = function(r) {
                        var o = this,
                            h = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        return function(t, i, n, e, s) {
                            var c = "markdown_" + r[0],
                                a = {
                                    type: null,
                                    value: null,
                                    url_crisp_image: o.parent.config.url.crisp_image,
                                    no_external_link: o.parent.config.runtime.no_external_link || !1
                                },
                                i = ("string" == typeof i ? i : null) || "",
                                s = ("string" == typeof s ? s : null) || "";
                            return a.type = n, a.value = e, -1 !== o.P.indexOf(r[0]) && "string" == typeof a.value && (a.value = a.value.trim()), -1 !== o.L.indexOf(r[0]) && "string" == typeof a.value && (a.value = o.J(a.value)), null !== (e = o.V[c] || null) && e.bind(o)(a), "" + i + o.parent.template.render(c, a, h) + s
                        }
                    }, s.prototype.J = function(t) {
                        return (t = this.b(t, {}, this.W)).replace(this.H, function(t) {
                            return "&#" + t.charCodeAt(0) + ";"
                        })
                    }, s.prototype.G = function(t) {
                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "gi",
                            n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                        return new RegExp("" + (n.prefix || "") + t + (n.suffix || ""), i)
                    }, s.prototype.K = function() {
                        this.A = {
                            email: this.G("([\\w\\._-]+@[\\w\\.\\/_-]+)", "gi", this.Z.links),
                            phone: this.G("(\\+[0-9]{1,3}[ \\(\\)\\-0-9]{7,20})", "gi", this.Z.links),
                            domain: this.G(["((?:[^<>\\(\\)\\s,@]+)(?:\\.(?:", this.Y.map(this.escape_regex.bind(this)).join("|"), ")))"].join(""), "gim", this.Z.links),
                            uri: this.G("((?:https?|ftps?|file):(?:[^<>\\(\\)\\s,]+))", "gim", this.Z.links)
                        }
                    }, s.prototype.X = function() {
                        this.D = [
                            ["code_block", this.G("(`{2,3})((?:\\n+)?(?:(?!\\2).(?:\\n+)?)*)(?:\\2)", "gi", {
                                prefix: "(\\s|<[^<>]+\\/>|^)",
                                suffix: "(\\s|\\.|,|:|$)"
                            })],
                            ["code_inline", this.G("(`{1})([^`]*)(?:\\2)", "gim", {
                                prefix: "(\\s|<[^<>]+\\/>|\\(|^)",
                                suffix: "(\\s|\\.|,|:|\\)|<\\/[^<>]+>|$)"
                            })],
                            ["title", this.G("(#{1})(?:[\\s]+)([^#].*)", "gim", this.Z.markdown_simple)],
                            ["title", this.G("(#{2})(?:[\\s]+)([^#].*)", "gim", this.Z.markdown_simple)],
                            ["title", this.G("(#{3})(?:[\\s]+)([^#].*)", "gim", this.Z.markdown_simple)],
                            ["title", this.G("(#{4})(?:[\\s]+)([^#].*)", "gim", this.Z.markdown_simple)],
                            ["title", this.G("(#{5})(?:[\\s]+)([^#].*)", "gim", this.Z.markdown_simple)],
                            ["title", this.G("(#{6})(?:[\\s]+)([^#].*)", "gim", this.Z.markdown_simple)],
                            ["link_image", this.G("\\[!\\[(?:[^\\[]*)\\]\\(([^\\)]+)\\)\\]\\(([^\\)]+)\\)", "gim", this.Z.markdown_includes)],
                            ["image", this.G("!\\[([^\\[]*)\\]\\(([^\\)]+)\\)", "gim", this.Z.markdown_includes)],
                            ["link_text", this.G("\\[([^\\[]+)\\]\\(([^\\)]+)\\)", "gim", {
                                prefix: "(\\s|<[^<>]+\\/>|<[^a][^<>]*>|\\(|^)",
                                suffix: "(\\s|.|,|:|<[^<>]+\\/>|</[^a][^<>]*>|\\)|$)"
                            })],
                            ["youtube", this.G("\\$\\{youtube\\}\\[([^\\[]*)\\]\\(([^\\)]+)\\)", "gim", this.Z.markdown_includes)],
                            ["vimeo", this.G("\\$\\{vimeo\\}\\[([^\\[]*)\\]\\(([^\\)]+)\\)", "gim", this.Z.markdown_includes)],
                            ["dailymotion", this.G("\\$\\{dailymotion\\}\\[([^\\[]*)\\]\\(([^\\)]+)\\)", "gim", this.Z.markdown_includes)],
                            ["frame", this.G("\\$\\{frame\\}\\[([^\\[]*)\\]\\(([^\\)]+)\\)", "gim", this.Z.markdown_includes)],
                            ["bold", this.G("(\\*\\*)(.*?)(?:\\2)", "gim", this.Z.markdown_formatting)],
                            ["underline", this.G("(__)(.*?)(?:\\2)", "gim", this.Z.markdown_formatting)],
                            ["italic", this.G("(\\*|_)(.*?)(?:\\2)", "gim", this.Z.markdown_formatting)],
                            ["delete", this.G("(\\~\\~)(.*?)(?:\\2)", "gim", this.Z.markdown_formatting)],
                            ["highlight", this.G("(\\+\\+)(.*?)(?:\\2)", "gim", this.Z.markdown_formatting)],
                            ["list", this.G("(\\*)(?:[\\s]+)", "gim", this.Z.markdown_list)],
                            ["list", this.G("(?:([\\d]{1,2})\\.)(?:[\\s]+)", "gim", this.Z.markdown_list)],
                            ["blockquote", this.G("(&gt;|\\>)(?:[\\s]+)(.*)", "gim", this.Z.markdown_simple)],
                            ["table", this.G("(?:(\\|(?:[^\\|\\r\\n]{0,999}\\|){1,19})(?: *\\n)(?:\\|(?: *\\-{1,99} *\\|){1,19}))((?: *\\n\\|(?:[^\\|\\r\\n]{0,999}\\|){1,19}){1,49})", "gi", {
                                prefix: "(\\s|^)",
                                suffix: "(\\s|$)"
                            })],
                            ["emphasis", this.G("(\\|{1})(?:[\\s]+)([^\\|].*)", "gim", this.Z.markdown_simple)],
                            ["emphasis", this.G("(\\|{2})(?:[\\s]+)([^\\|].*)", "gim", this.Z.markdown_simple)],
                            ["emphasis", this.G("(\\|{3})(?:[\\s]+)([^\\|].*)", "gim", this.Z.markdown_simple)],
                            ["interpolate", this.G('(?:\\{\\{\\s*)([^\\{\\}\\|\\s]+)(?:\\s*\\|\\s*(?:(?:&quot;)|")([^&"]*)(?:(?:&quot;)|"))?(?:\\s*\\}\\})', "gim", {
                                prefix: "(\\s|\\(|^)",
                                suffix: ""
                            })],
                            ["line", this.G("(-{3,})", "gim", {
                                prefix: "(^)(\\s+)?",
                                suffix: "(\\s|$)"
                            })],
                            ["color", this.G("\\$\\{color\\}\\[(#[0-9A-Fa-f]{6})\\]\\(([^\\)]+)\\)", "gim", this.Z.markdown_includes)]
                        ]
                    }, s);

                    function s(t) {
                        this.parent = t, this.Y = ["com", "net", "org", "info", "biz", "mobi", "chat", "email", "help", "watch", "name", "pro", "aero", "asia", "cat", "coop", "edu", "gov", "int", "jobs", "mil", "museum", "post", "tel", "travel", "xxx", "xyz", "top", "site", "online", "club", "shop", "work", "app", "live", "store", "space", "website", "tech", "life", "dev", "blog", "cloud", "page", "link", "design", "group", "company", "agency", "network", "media", "immo", "ac", "ad", "ae", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "as", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bl", "bm", "bn", "bo", "bq", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cu", "cv", "cw", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "ee", "eg", "eh", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mf", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "ss", "st", "su", "sv", "sx", "sy", "sz", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "um", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "ye", "yt", "za", "zm", "zw"], this.$ = {
                            "&": /&amp;/g,
                            "<": /&lt;/g,
                            ">": /&gt;/g,
                            '"': /&quot;/g
                        }, this.F = {
                            "&amp;": /&/g,
                            "&lt;": /</g,
                            "&gt;": />/g,
                            "&quot;": /"/g
                        }, this.k = {
                            "\\\\": /\\/g,
                            "\\t": /\t/g,
                            "\\n": /\n/g,
                            "\\u00A0": /\u00A0/g,
                            "&quot;": /"/g,
                            "&apos;": /'/g,
                            "&lowbar;": /_/g,
                            "&ast;": /\*/g,
                            "&plus;": /\+/g,
                            "&#126;": /~/g
                        }, this.W = {
                            "<": /&lt;/g,
                            ">": /&gt;/g
                        }, this.j = /[-\/\\^$*+?.()|[\]{}]/g, this.H = /([\#$\*\_\-+![\]\(\)`~><\.|{}])/g, this.T = /^([a-z]{1,20})\n((?:\n?.*)*)$/, this.Z = {
                            links: {
                                prefix: "(\\s|<[^<>]+\\/>|<[^a][^<>]*>|\\(|^)",
                                suffix: "(,|\\s|<[^<>]+\\/>|</[^a][^<>]*>|\\)|$)"
                            },
                            markdown_simple: {
                                prefix: "(^)",
                                suffix: "($)"
                            },
                            markdown_includes: {
                                prefix: "(\\s|<[^<>]+\\/>|<[^<>]+>|\\(|^)",
                                suffix: "(\\s|.|,|:|<[^<>]+\\/>|\\)|$)"
                            },
                            markdown_formatting: {
                                prefix: "(\\s|<[^<>]+\\/>|\\(|^)",
                                suffix: ""
                            },
                            markdown_list: {
                                prefix: "(^\\s*)",
                                suffix: "(.*?)($)"
                            }
                        }, this.P = ["title", "list", "code_inline", "blockquote", "table", "emphasis"], this.L = ["code_block", "code_inline"], this.g = ["escape", "consecutive_lines", "markdown", "links_uri", "links_domain", "emails", "phones", "smileys", "new_lines"], this._ = {
                            escape: this.b,
                            consecutive_lines: this.z,
                            new_lines: this.C,
                            emails: this.S,
                            phones: this.I,
                            markdown: this.q,
                            links_domain: this.R,
                            links_uri: this.B,
                            smileys: this.M
                        }, this.V = {
                            markdown_code_block: this.N,
                            markdown_table: this.U
                        }, this.K(), this.X()
                    }
                    var c = (a.prototype.parse_first_name = function(t) {
                        return this.Q(t, 1)
                    }, a.prototype.parse_last_name = function(t) {
                        return this.Q(t, 3)
                    }, a.prototype.Q = function(t, i) {
                        var n = (t || "").trim();
                        return !n || (t = n.match(this.tt)) && t[i] && (n = t[i].trim()), n
                    }, a);

                    function a(t) {
                        this.parent = t, this.tt = /^(\S+)((?:\s+)(.+))?$/
                    }
                    this.it(t), this.Smileys = new i(this), this.Parse = new e(this), this.Name = new c(this)
                }, y.prototype.it = function(t) {
                    t && t.template && (this.template = t.template), t && t.config && (this.config = t.config)
                }, i.CrispLibraryWeb = new y, hi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, t = c, p.prototype.init = function(t) {
                    var r = {},
                        i = (n.prototype.set_ignore_privacy = function() {
                            this.nt = 0 < arguments.length && void 0 !== arguments[0] && arguments[0]
                        }, n.prototype.set_visitor_compose = function() {
                            this.et = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]
                        }, n.prototype.reset = function() {
                            this.st()
                        }, n.prototype.st = function() {
                            this.nt = !1, this.et = !0
                        }, n);

                    function n(t) {
                        this.parent = t, this.st()
                    }
                    var e = (s.prototype.set_timeout = function(t) {
                        var i = this,
                            n = setTimeout(function() {
                                delete i.ct[n], t()
                            }, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0);
                        return this.ct[n] = n
                    }, s.prototype.clear_timeout = function(t) {
                        t in this.ct && (clearTimeout(this.ct[t]), delete this.ct[t])
                    }, s.prototype.set_interval = function(t) {
                        var i = setInterval(t, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0);
                        return this.at[i] = i
                    }, s.prototype.clear_interval = function(t) {
                        t in this.at && (clearInterval(this.at[t]), delete this.at[t])
                    }, s.prototype.reset = function() {
                        for (var t in this.ct) this.clear_timeout(t);
                        for (var i in this.at) this.clear_interval(i);
                        this.st()
                    }, s.prototype.st = function() {
                        this.ct = {}, this.at = {}
                    }, s);

                    function s(t) {
                        this.parent = t, this.st()
                    }
                    var c = (a.prototype.add_event = function(t, i, n, e) {
                        var s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {},
                            c = this.rt(t, i, n);
                        if (c in this.ot) throw new Error("Event listener is already registered for '" + n + "' event on '" + i + "' instance, cannot re-register");
                        window[i].addEventListener(n, e, s), this.ot[c] = [e, s]
                    }, a.prototype.remove_event = function(t, i, n) {
                        var e = this.rt(t, i, n);
                        e in this.ot && (t = this.ot[e], window[i].removeEventListener(n, t[0], t[1]), delete this.ot[e])
                    }, a.prototype.apply_patch = function(t, i, n, e, s) {
                        if ((t = this.rt(t, i, n)) in this.ht) throw new Error("Patch is already registered for '" + n + "' method on '" + i + "' instance, cannot re-register");
                        var c = e[n];
                        "function" == typeof c && (e[n] = function() {
                            var t = c.apply(e, arguments);
                            return s(arguments), t
                        }, this.ht[t] = [e, c])
                    }, a.prototype.revoke_patch = function(t, i, n) {
                        (t = this.rt(t, i, n)) in this.ht && ((i = this.ht[t])[0][n] = i[1], delete this.ht[t])
                    }, a.prototype.reset = function() {
                        for (var t in this.ot) null !== (t = this.ut(t)) && this.remove_event(t[0], t[1], t[2]);
                        for (var i in this.ht) null !== (i = this.ut(i)) && this.revoke_patch(i[0], i[1], i[2]);
                        this.st()
                    }, a.prototype.rt = function(t, i, n) {
                        return t + ":" + i + ":" + n
                    }, a.prototype.ut = function(t) {
                        return 3 === (t = t.split(":")).length ? t : null
                    }, a.prototype.st = function() {
                        this.ot = {}, this.ht = {}
                    }, a);

                    function a(t) {
                        this.parent = t, this.st()
                    }
                    var o = (h.prototype.get_state = function() {
                        this.lt(this.parent.socket.connected || !1)
                    }, h.prototype.ft = function() {
                        var t = this;
                        this.parent.socket.on("connect", function() {
                            t.lt(!0)
                        }), this.parent.socket.on("disconnect", function() {
                            t.lt(!1)
                        }), this.parent.socket.io.on("reconnect_failed", function() {
                            t.lt(!1, !0)
                        })
                    }, h.prototype.lt = function() {
                        this.parent.event.publish("socket:state", {
                            connected: !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                            failed_reconnect: 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                        })
                    }, h);

                    function h(t) {
                        this.parent = t, this.ft()
                    }
                    var u = (l.prototype.st = function() {
                        this.dt = !1, this.vt = null, this.ot = [], this.pt = {}, this.yt = null, this.mt = null, this.gt = null, this._t = null
                    }, l.prototype.bind_to = function(t, i, n) {
                        var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                            s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null;
                        this.vt = t, this.ot = i, this.pt = n, this.yt = e, this.mt = s, !0 !== this.dt ? this.parent.stream.connect() : this.wt()
                    }, l.prototype.unbind_from = function() {
                        this.bt(), this.parent.stream.disconnect()
                    }, l.prototype.reset = function() {
                        this.st()
                    }, l.prototype.ft = function() {
                        var t = this;
                        this.parent.stream.on("connect", function() {
                            t.dt = !0, t.wt()
                        }), this.parent.stream.on("disconnect", function() {
                            t.dt = !1, t.kt()
                        }), this.parent.stream.on("socket:bound", function() {
                            t.xt()
                        })
                    }, l.prototype.wt = function() {
                        var t;
                        this.gt !== this.vt || this._t !== this.ot ? (this.gt = this.vt, this._t = this.ot, t = [], this.gt && t.push(this.gt), this.parent.stream.emit("socket:bind", {
                            ray: "client",
                            events: this._t,
                            rooms: t,
                            context: this.pt
                        })) : this.xt()
                    }, l.prototype.kt = function() {
                        null !== this.mt && this.mt(), this.bt(), this.gt = null, this._t = null
                    }, l.prototype.xt = function() {
                        null !== this.yt && this.yt(), this.bt()
                    }, l.prototype.bt = function() {
                        this.vt = null, this.ot = [], this.pt = {}, this.yt = null, this.mt = null
                    }, l);

                    function l(t) {
                        this.parent = t, this.st(), this.ft()
                    }
                    var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        },
                        d = (v.prototype.update = function(t, i) {
                            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function() {},
                                e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : function() {},
                                s = {
                                    ray: this.$t(t),
                                    type: t,
                                    data: i
                                };
                            this.Ft.push(s.ray), this.jt[s.ray] = {
                                success: n,
                                error: e
                            }, this.parent.socket.emit("storage:sync:update", s), this.parent.event.publish("storage:sync:update", s)
                        }, v.prototype.get_stamp_local = function(t) {
                            var i = this.Et(t, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []);
                            return "object" === f(window.localStorage) && window.localStorage.getItem(i) || ""
                        }, v.prototype.set_stamp_local = function(t) {
                            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                                n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
                                i = this.Et(t, i);
                            return "object" === f(window.localStorage) && (window.localStorage.setItem(i, n), !0)
                        }, v.prototype.is_syncing_storage = function() {
                            return 0 < this.Ft.length && !0
                        }, v.prototype.reset = function() {
                            this.st()
                        }, v.prototype.Et = function(t) {
                            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                                n = this.zt + "/" + t;
                            return 0 < i.length && (n += "/" + i.join("/")), n
                        }, v.prototype.st = function() {
                            this.Ct = 1, this.St = 0, this.jt = {}, this.Ft = []
                        }, v.prototype.ft = function() {
                            this.parent.socket.on("storage:sync:updated", this.It.At(this))
                        }, v.prototype.It = function(t) {
                            var i;
                            "object" === f(this.jt[t.ray]) && (t.error ? this.jt[t.ray].error() : this.jt[t.ray].success(), delete this.jt[t.ray], -1 !== (i = this.Ft.indexOf(t.ray)) && this.Ft.splice(i, 1)), this.parent.event.publish("storage:sync:updated", t)
                        }, v.prototype.$t = function(t) {
                            return t + "/" + Math.floor(Math.random() * this.qt) + "/" + this.St++
                        }, v);

                    function v(t) {
                        this.parent = t, this.qt = 1e5, this.zt = "crisp-client", this.st(), this.ft()
                    }
                    var p = (y.prototype.update_message = function(t, i) {
                        this.parent.socket.emit("message:update", i = {
                            fingerprint: t,
                            content: i
                        }), this.Dt(i, "local")
                    }, y.prototype.send_raw_message = function(t) {
                        var i, n = this,
                            e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0; - 1 === this.Ot.indexOf(t.fingerprint) && this.Ot.push(t.fingerprint), this.parent.platform_name && this.parent.platform_signature_key && (_signature_data = [this.parent.Session.Rt, t.fingerprint, t.type], (i = this.parent.sha256.hmac.create(this.parent.platform_signature_key.split("/").map(function(t) {
                            return String.fromCharCode(parseInt(t, 36))
                        }).join(""))).update("[" + _signature_data.join("|") + "]"), t.signature = this.parent.platform_name + ":" + i.hex()), this.parent.event.publish("message:send", t), this.parent.Schedule.set_timeout(function() {
                            n.parent.socket.emit("message:send", t)
                        }, e)
                    }, y.prototype.send_text_message = function(t) {
                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                        this.send_raw_message({
                            type: "text",
                            origin: "chat",
                            content: t,
                            timestamp: (new Date).getTime(),
                            fingerprint: this.Bt()
                        }, i)
                    }, y.prototype.send_file_message = function(t, i, n) {
                        var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
                        this.send_raw_message({
                            type: "file",
                            origin: "chat",
                            content: {
                                name: t,
                                url: i,
                                type: n
                            },
                            timestamp: (new Date).getTime(),
                            fingerprint: this.Bt()
                        }, e)
                    }, y.prototype.send_animation_message = function(t, i) {
                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                        this.send_raw_message({
                            type: "animation",
                            origin: "chat",
                            content: {
                                url: t,
                                type: i
                            },
                            timestamp: (new Date).getTime(),
                            fingerprint: this.Bt()
                        }, n)
                    }, y.prototype.send_audio_message = function(t, i, n) {
                        var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
                        this.send_raw_message({
                            type: "audio",
                            origin: "chat",
                            content: {
                                url: t,
                                type: i,
                                duration: n
                            },
                            timestamp: (new Date).getTime(),
                            fingerprint: this.Bt()
                        }, e)
                    }, y.prototype.send_picker_message = function(t, i, n) {
                        var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
                        this.send_raw_message({
                            type: "picker",
                            origin: "chat",
                            content: {
                                id: t,
                                text: i,
                                choices: n
                            },
                            timestamp: (new Date).getTime(),
                            fingerprint: this.Bt()
                        }, e)
                    }, y.prototype.send_field_message = function(t, i, n) {
                        var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
                        this.send_raw_message({
                            type: "field",
                            origin: "chat",
                            content: {
                                id: t,
                                text: i,
                                explain: n
                            },
                            timestamp: (new Date).getTime(),
                            fingerprint: this.Bt()
                        }, e)
                    }, y.prototype.send_message_compose = function(t) {
                        var i = this,
                            n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                        (!0 !== this.parent.Config.nt && "1" === (navigator || {}).doNotTrack || !1 === this.parent.Config.et) && (n = null);
                        var n = this.Mt(n),
                            e = t !== this.Nt.local.type && !0;
                        (1 == e || n !== (this.Nt.local.excerpt || null) || "start" === this.Nt.local.type && this.Tt && (new Date).getTime() - this.Tt >= this.Ut) && (this.Tt = (new Date).getTime(), this.Nt.local = {
                            type: t
                        }, n && (this.Nt.local.excerpt = n), 1 == e && null !== this.Pt && (this.parent.Schedule.clear_timeout(this.Pt), this.Pt = null), null === this.Pt && (this.Pt = this.parent.Schedule.set_timeout(function() {
                            i.Pt = null, i.parent.socket.emit("message:compose:send", i.Nt.local), i.parent.event.publish("message:compose:send", i.Nt.local)
                        }, 1 == e ? 0 : this.Lt)))
                    }, y.prototype.send_message_thread = function(t) {
                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                            n = {
                                type: t
                            };
                        i && (n.text = i), this.parent.socket.emit("message:thread", n), this.parent.event.publish("message:thread", n)
                    }, y.prototype.receive_message_local = function(t, i, n) {
                        var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                            e = {
                                from: "operator",
                                type: t,
                                origin: "local",
                                timestamp: (new Date).getTime(),
                                content: i,
                                fingerprint: null !== e ? e : this.Bt(),
                                user: n
                            };
                        this.parent.socket.emit("message:received:local", e), this.Jt(e)
                    }, y.prototype.receive_message_mirror = function(t, i, n, e) {
                        e = {
                            from: "operator",
                            type: t,
                            origin: i,
                            timestamp: (new Date).getTime(),
                            content: n,
                            fingerprint: e
                        }, this.parent.socket.emit("message:received:mirror", e)
                    }, y.prototype.get_message_compose = function() {
                        this.parent.event.publish("message:compose:received", this.Nt.remote)
                    }, y.prototype.get_cached_messages = function() {
                        return this.Vt
                    }, y.prototype.count_message_history = function() {
                        return this.Vt.length
                    }, y.prototype.count_message_history_diff = function() {
                        return this.Wt.length
                    }, y.prototype.get_message_history = function() {
                        if (0 < this.Vt.length) {
                            for (var t = 0; t < this.Vt.length; t++) this.Vt[t].origin = "history";
                            this.parent.event.publish("history:messages", this.Vt)
                        }
                        for (var i = 0; i < this.Wt.length; i++) this.Ht(this.Wt[i], "diff");
                        this.Wt = []
                    }, y.prototype.is_sending_messages = function() {
                        return 0 < this.Ot.length && !0
                    }, y.prototype.mark_messages_as_read = function() {
                        !0 === this.Gt(void 0, void 0, !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]) && this.Kt()
                    }, y.prototype.set_messages_in_view = function(t) {
                        this.Zt = t, this.mark_messages_as_read(!1)
                    }, y.prototype.get_unread_messages = function() {
                        this.Yt = -1, this.Xt()
                    }, y.prototype.set_unread_messages_callback = function(t) {
                        this.Qt = t
                    }, y.prototype.reset = function() {
                        this.st()
                    }, y.prototype.ti = function(t) {
                        this.ii(t)
                    }, y.prototype.ni = function(t) {
                        t && (this.Nt.remote = t)
                    }, y.prototype.ei = function(t) {
                        if (t) {
                            this.si(t);
                            for (var i = 0; i < t.length; i++) this.Wt.push(t[i]);
                            this.Xt()
                        }
                    }, y.prototype.ii = function(t) {
                        this.Vt = t = t || [], this.ci = [], this.si(this.Vt);
                        for (var i = 0; i < this.Vt.length; i++) {
                            var n = this.Vt[i];
                            this.ci.push(n.fingerprint), t[i].is_me || n.read || this.ai.push(n.fingerprint)
                        }
                        this.Xt()
                    }, y.prototype.st = function() {
                        this.Vt = [], this.ci = [], this.Wt = [], this.ai = [], this.Ot = [], this.ri = [], this.Pt = null, this.Zt = !1, this.Qt = function() {}, this.Yt = -1, this.Tt = 0, this.Nt = {
                            local: {
                                type: "stop"
                            },
                            remote: {
                                type: "stop"
                            }
                        }
                    }, y.prototype.ft = function() {
                        this.parent.socket.on("message:updated", this.Dt.At(this)), this.parent.socket.on("message:sent", this.oi.At(this)), this.parent.socket.on("message:received", this.hi.At(this)), this.parent.socket.on("message:received:local", this.Jt.At(this)), this.parent.socket.on("message:compose:received", this.ui.At(this)), this.parent.socket.on("message:acknowledge:read:send", this.li.At(this)), this.parent.socket.on("message:acknowledge:read:received", this.fi.At(this)), this.parent.socket.on("message:acknowledge:pending", this.di.At(this))
                    }, y.prototype.Mt = function(t) {
                        var i = null;
                        return null === t || (t = t.match(this.vi)) && (i = (t[1] || "").trim()), i
                    }, y.prototype.pi = function(t) {
                        this.parent.socket.emit("message:acknowledge:pending", {
                            origin: "chat",
                            fingerprints: t
                        }), this.parent.socket.emit("message:acknowledge:delivered", {
                            origin: "chat",
                            fingerprints: t
                        })
                    }, y.prototype.yi = function(t) {
                        this.parent.socket.emit("message:acknowledge:read:received", {
                            origin: "chat",
                            fingerprints: t
                        })
                    }, y.prototype.mi = function(t, i) {
                        var n = !1;
                        !1 === i && (this.ai = [], this.Xt());
                        for (var e = 0; e < this.Vt.length; e++) {
                            var s = this.Vt[e];
                            !0 === s.read || 0 !== t.length && -1 === t.indexOf(s.fingerprint) || i === (!0 === s.is_me) && (n = s.read = !0, this.gi(s))
                        }
                        return n
                    }, y.prototype.Gt = function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                            i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                            n = i || !1;
                        return !1 === i && (!0 === (2 < arguments.length && void 0 !== arguments[2] && arguments[2]) || !0 === this.Zt) && 0 < this.ai.length && (this.yi(this.ai), n = !0), !0 === n && this.mi(t, i)
                    }, y.prototype.Kt = function(t, i) {
                        if (0 < this.ri.length) {
                            for (var n = [], e = 0; e < this.Vt.length; e++) {
                                var s = this.Vt[e]; - 1 !== this.ri.indexOf(s.fingerprint) && (delete s.index, n.push(s))
                            }
                            this.ri = [], this.parent.Storage.update("message", n, t, i)
                        } else "function" == typeof t && t()
                    }, y.prototype._i = function(t, i, n) {
                        null === this.wi(t.fingerprint) ? (this.ci.push(t.fingerprint), this.Vt.push(t), this.Gt(), this.gi(t), this.Kt(i, n)) : "function" == typeof i && i()
                    }, y.prototype.wi = function(t) {
                        return 0 <= (t = this.ci.indexOf(t)) && this.Vt[t] || null
                    }, y.prototype.gi = function(t) {
                        -1 === this.ri.indexOf(t.fingerprint) && this.ri.push(t.fingerprint)
                    }, y.prototype.si = function(t) {
                        t.sort(function(t, i) {
                            return t.timestamp < i.timestamp ? -1 : t.timestamp > i.timestamp ? 1 : 0
                        })
                    }, y.prototype.Bt = function() {
                        var t = "" + (new Date).getTime() + Math.ceil(100 * Math.random());
                        return t.length < 15 && (t += new Array(15 - t.length + 1).join("0")), parseInt(t, 10)
                    }, y.prototype.Ht = function(t, i) {
                        t.is_me ? this.oi(t, i) : this.hi(t, i)
                    }, y.prototype.Xt = function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                            i = this.ai.length;
                        i !== this.Yt && (this.Yt = i, "function" == typeof this.Qt && this.Qt(i, this.ai, [].concat(this.Vt, t)))
                    }, y.prototype.Dt = function(t) {
                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "network",
                            n = this.wi(t.fingerprint);
                        null !== n && (n.content = t.content, n.edited = !0, this.Ht(n, "update"), "local" !== i && (this.gi(n), this.Kt()))
                    }, y.prototype.oi = function(t) {
                        var i = this,
                            n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "network",
                            e = this.Ot.indexOf(t.fingerprint); - 1 !== e && this.Ot.splice(e, 1);
                        var s = t.origin;
                        t.origin = n, t.index = {
                            current: 1,
                            total: 1
                        }, this._i(t, function() {
                            "chat" === s || "network" !== n && "diff" !== n || i.pi([t.fingerprint]), i.parent.event.publish("message:sent", t)
                        }), 1 === this.count_message_history() && this.parent.Session.bi()
                    }, y.prototype.hi = function(t) {
                        var i = this,
                            n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "network",
                            e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "message:received";
                        t.origin = n, t.index = {
                            current: 1,
                            total: 1
                        }, "update" !== n && (this.ai.push(t.fingerprint), this.Xt([t])), this._i(t, function() {
                            "network" !== n && "diff" !== n || i.pi([t.fingerprint]), i.parent.event.publish(e, t)
                        })
                    }, y.prototype.Jt = function(t) {
                        this.hi(t, "local", "message:received:local")
                    }, y.prototype.ui = function(t) {
                        this.Nt.remote = t, this.parent.event.publish("message:compose:received", t)
                    }, y.prototype.li = function(t) {
                        !0 === this.Gt(t.fingerprints, !0) && this.Kt(), this.parent.event.publish("message:acknowledge:read:send", t.fingerprints)
                    }, y.prototype.fi = function(t) {
                        for (var i = 0; i < t.fingerprints.length; i++) {
                            var n = this.ai.indexOf(t.fingerprints[i]); - 1 !== n && this.ai.splice(n, 1)
                        }
                        this.Xt()
                    }, y.prototype.di = function(t) {
                        this.parent.event.publish("message:acknowledge:pending", t.fingerprints)
                    }, y);

                    function y(t) {
                        this.parent = t, this.Ut = 6e4, this.Lt = 6e3, this.vi = new RegExp(["(^(?:\\S+(?:(?:\\s+|\\?|\\!|\\.|\\(|\\)|:|;)|(?:[\\u4e00-\\u9fff])|(?:[\\u0e00-\\u0e7f])))+).*$"].join(""), "i"), this.st(), this.ft()
                    }
                    var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        },
                        m = (g.prototype.save = function() {
                            var t = {
                                    domain: this.ki(),
                                    expires: this.xi()
                                },
                                i = this.$i();
                            t.sameSite = i.policy, !0 === i.secure && (t.secure = !0), this.parent.cookie.set(this.Fi(), this.Rt, t), this.parent.token_id && this.parent.cookie.set(this.Fi(this.parent.token_id), this.Rt, t), this.parent.event.publish("session:saved", this.Rt)
                        }, g.prototype.storage_session_retrieve = function(t) {
                            this.ji(t.state), this.parent.Message.ti(t.message)
                        }, g.prototype.sync_session_diff = function(t) {
                            this.parent.Message.ni(t.compose), this.parent.Message.ei(t.messages)
                        }, g.prototype.sync_user_data = function(t) {
                            for (var i = 0; i < this.Ei.length; i++) {
                                var n = this.Ei[i];
                                this.zi[n] && this.zi[n] !== t[n] ? this["set_" + n](this.zi[n], !0, this.Ci[n]) : this.zi[n] = t[n] || null
                            }
                            this.Si(t.segments || [], this.zi.segments), this.Ai(t.data || {}, this.zi.data)
                        }, g.prototype.send_device = function() {
                            var t = this.Ii();
                            null !== t && this.parent.socket.emit("session:device", t)
                        }, g.prototype.send_event = function() {
                            for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], i = {
                                    events: []
                                }, n = 0; n < t.length; n++) {
                                var e = t[n],
                                    s = {
                                        text: e[0]
                                    };
                                null !== e[1] && (s.data = e[1]), null !== e[2] && (s.color = e[2]), i.events.push(s)
                            }
                            0 < i.events.length && this.parent.socket.emit("session:event", i)
                        }, g.prototype.get_request_initiate = function(t) {
                            Object.keys && 0 === Object.keys(this.qi).length && 0 < this.parent.Message.count_message_history_diff() && this.Di({}), "function" == typeof t && t()
                        }, g.prototype.get_state = function(t) {
                            this.handle_state(this.qi, t)
                        }, g.prototype.handle_state = function(t, i) {
                            this.qi = t, this.parent.event.publish("session:state", this.qi), "function" == typeof i && i()
                        }, g.prototype.set_state = function(t, i) {
                            for (var n in t) this.qi[n] = t[n];
                            this.parent.Storage.update("state", t), this.sync_state(t, i)
                        }, g.prototype.sync_state = function(t, i) {
                            this.parent.socket.emit("session:state", t), "function" == typeof i && i()
                        }, g.prototype.create = function() {
                            var t = {
                                website_id: this.parent.website_id,
                                website_domain: this.parent.website_domain,
                                useragent: this.parent.device.useragent || "",
                                timezone: this.parent.device.timezone || 0,
                                capabilities: this.parent.device.capabilities || [],
                                locales: this.parent.device.locales || []
                            };
                            this.parent.token_id && (t.token_id = this.parent.token_id), this.parent.socket.emit("session:create", t)
                        }, g.prototype.get_email = function() {
                            return this.zi.email
                        }, g.prototype.set_email = function(t) {
                            var i, n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                                e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                                s = {};
                            null !== e && ("string" === (i = void 0 === e ? "undefined" : f(e)) ? s.verify = e : "object" === i && (s = e)), !0 === this.Oi("email", t, n, s) && this.bi()
                        }, g.prototype.get_phone = function() {
                            return this.zi.phone
                        }, g.prototype.set_phone = function(t) {
                            this.Oi("phone", t, 1 < arguments.length && void 0 !== arguments[1] && arguments[1])
                        }, g.prototype.get_nickname = function() {
                            return this.zi.nickname
                        }, g.prototype.set_nickname = function(t) {
                            this.Oi("nickname", t, 1 < arguments.length && void 0 !== arguments[1] && arguments[1])
                        }, g.prototype.get_avatar = function() {
                            return this.zi.avatar
                        }, g.prototype.set_avatar = function(t) {
                            this.Oi("avatar", t, 1 < arguments.length && void 0 !== arguments[1] && arguments[1])
                        }, g.prototype.get_company = function() {
                            return this.zi.company
                        }, g.prototype.set_company = function(t) {
                            this.Oi("company", t, 1 < arguments.length && void 0 !== arguments[1] && arguments[1])
                        }, g.prototype.get_data = function() {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                            return null === t ? this.zi.data : this.zi.data[t] || null
                        }, g.prototype.set_data = function(t) {
                            this.Ai(this.zi.data || {}, t)
                        }, g.prototype.set_segments = function(t) {
                            this.Si(this.zi.segments || [], t, 1 < arguments.length && void 0 !== arguments[1] && arguments[1])
                        }, g.prototype.mark_active = function() {
                            var t = (new Date).getTime();
                            t - Math.min(this.Ri || t, this.Bi || t) >= this.Mi && this.Ni(!0), this.Ri = t
                        }, g.prototype.acquire_saved = function() {
                            var t = this.Ti(),
                                i = null,
                                n = (location.search || "").match(this.Ui),
                                e = (document.referrer || "").match(this.Pi);
                            return n && n[2] && n[2] !== t.current && (i = n[2] || null), e = (i = e && e[1] === this.parent.url_go && e[3] !== t.current ? e[3] || null : i) || t.current, i = null, {
                                session_id: e,
                                merge: i = t.previous && t.current !== t.previous && t.current === e ? t.previous : i
                            }
                        }, g.prototype.restore = function() {
                            var t = this.acquire_saved();
                            this.Li(t.session_id, t.merge)
                        }, g.prototype.join = function() {
                            var t, i = {
                                session_id: this.Rt,
                                expire: this.Ji,
                                storage: !0,
                                sync: 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                                useragent: this.parent.device.useragent || "",
                                timezone: this.parent.device.timezone || 0,
                                capabilities: this.parent.device.capabilities || [],
                                locales: this.parent.device.locales || []
                            };
                            this.Vi || null !== (t = this.Ii()) && (i.device = t), null !== this.Wi && (i.merge = {
                                session_id: this.Wi
                            }), this.parent.socket.emit("session:join", i)
                        }, g.prototype.reset = function(t, i) {
                            var n = null;
                            try {
                                for (var e in this.parent) {
                                    var s = this.parent[e];
                                    s !== this && s && "object" === (void 0 === s ? "undefined" : f(s)) && "function" == typeof s.reset && s.reset()
                                }
                                this.Hi()
                            } catch (t) {
                                n = t
                            }
                            n ? "function" == typeof i && i(n) : "function" == typeof t && t()
                        }, g.prototype.bi = function() {
                            var t = this;
                            this.zi.email && (this.Gi && this.parent.Schedule.clear_timeout(this.Gi), this.Gi = this.parent.Schedule.set_timeout(function() {
                                t.Gi = null, t.Ni(!0)
                            }, this.Ki))
                        }, g.prototype.st = function() {
                            this.Rt = null, this.Wi = null, this.Vi = !1, this.Ri = 0, this.Bi = (new Date).getTime(), this.Zi = null, this.Gi = null, this.Yi = null, this.Xi = null, this.zi = {}, this.Ci = {}, this.qi = {}
                        }, g.prototype.ft = function() {
                            var t = this;
                            this.parent.socket.on("session:created", this.Qi.At(this)), this.parent.socket.on("session:joined", this.tn.At(this)), this.parent.socket.on("session:state", this.in.At(this)), this.parent.socket.on("session:error", this.nn.At(this)), this.parent.socket.on("session:request:initiate", this.Di.At(this)), this.parent.socket.on("session:request:purge", this.en.At(this)), this.parent.socket.on("connect", function() {
                                t.Vi ? t.join(!0) : t.restore()
                            })
                        }, g.prototype.Qi = function(t) {
                            var i;
                            t.error ? this.parent.event.publish("session:created", {
                                error: t.error
                            }) : (i = !!this.parent.token_id, this.Rt = t.session_id, this.save(), this.join(i), this.parent.event.publish("session:created", {
                                session_id: this.Rt
                            }))
                        }, g.prototype.tn = function(t) {
                            t.error ? this.parent.event.publish("session:joined", {
                                error: t.error
                            }) : (this.Vi || (this.Vi = !0), this.parent.Website.set_users_available(t.users_available), this.storage_session_retrieve(t.storage || {}), this.sync_session_diff(t.sync || {}), this.sync_user_data(t), this.parent.Browsing.restore_browsing_state(), this.parent.event.publish("session:joined", t), this.sn(t.last_active))
                        }, g.prototype.in = function(t) {
                            this.handle_state(t)
                        }, g.prototype.nn = function(t) {
                            "email:invalid_format" === t.type && (delete this.zi.email, delete this.Ci.email), this.parent.event.publish("session:error", t)
                        }, g.prototype.Di = function(t) {
                            this.parent.event.publish("session:request:initiate", t)
                        }, g.prototype.en = function(t) {
                            this.parent.event.publish("session:request:purge", t)
                        }, g.prototype.Hi = function() {
                            this.st();
                            var t = {
                                domain: this.ki()
                            };
                            this.parent.cookie.expire(this.Fi(), t), this.parent.token_id && this.parent.cookie.expire(this.Fi(this.parent.token_id), t)
                        }, g.prototype.Ti = function() {
                            var t = {
                                previous: null,
                                current: null
                            };
                            return this.parent.token_id ? (this.parent.runtime_configuration && !0 === this.parent.runtime_configuration.session_merge && (t.previous = this.parent.cookie.get(this.Fi()) || null), t.current = this.parent.cookie.get(this.Fi(this.parent.token_id)) || null) : t.current = this.parent.cookie.get(this.Fi()) || null, t
                        }, g.prototype.Li = function(t) {
                            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                            null !== i && (this.Wi = i), t ? (this.Rt = t, this.save(), this.join(!0)) : this.create()
                        }, g.prototype.ji = function(t) {
                            this.qi = t || {}
                        }, g.prototype.sn = function() {
                            this.Ri = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0) || (new Date).getTime(), this.Ni()
                        }, g.prototype.Ni = function() {
                            var t = this,
                                i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                            this.Zi && this.parent.Schedule.clear_timeout(this.Zi), this.Zi = this.parent.Schedule.set_timeout(function() {
                                t.Zi = null, t.Bi = (new Date).getTime(), t.parent.socket.emit("session:heartbeat", {
                                    last_active: t.Ri || 0,
                                    availability: {
                                        type: "online",
                                        time: {
                                            for: t.Ji
                                        }
                                    }
                                }), t.Ni()
                            }, !0 === i ? 0 : this.cn)
                        }, g.prototype.Ii = function() {
                            var t = document.location.href || "";
                            if (this.Yi !== t) {
                                this.Yi = t;
                                var i = (new Date).getTime();
                                if (i - (this.Xi || 0) >= this.an) {
                                    this.Xi = i;
                                    var n = document.title || "";
                                    if (n.length > this.rn && (n = n.substring(0, this.rn - this.hn.length), n += this.hn), !0 === this.un.test(t) && ("?" !== (i = (t = t.replace(this.un, "$1$3"))[t.length - 1]) && "&" !== i || (t = t.substr(0, t.length - 1))), (t = t.length > this.ln ? t.split("?")[0] || "" : t) && n && t.length <= this.ln) return t = {
                                        page_url: t,
                                        page_title: n
                                    }, (n = (document.referrer || "").split("?")[0] || "") && n.length <= this.ln && (t.page_referrer = n), t
                                }
                            }
                            return null
                        }, g.prototype.Fi = function() {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                                i = [this.parent.website_id];
                            return t && i.push(t), this.parent.Storage.Et("session", i)
                        }, g.prototype.xi = function() {
                            return "number" == typeof this.parent.cookie_expire && 0 < this.parent.cookie_expire ? this.parent.cookie_expire : this.dn
                        }, g.prototype.ki = function() {
                            return "string" == typeof this.parent.cookie_domain && this.parent.cookie_domain ? this.parent.cookie_domain : this.vn()
                        }, g.prototype.$i = function() {
                            return !0 === this.parent.runtime_configuration.cross_origin_cookies && "https:" === document.location.protocol ? {
                                policy: "none",
                                secure: !0
                            } : {
                                policy: "lax"
                            }
                        }, g.prototype.vn = function() {
                            var t = document.domain,
                                i = t,
                                n = this.$i(),
                                e = "samesite=" + n.policy + ";" + (!0 === n.secure ? "secure;" : "");
                            try {
                                for (var s = 0, c = i.split("."), a = this.parent.Storage.Et("domain-detect", ["" + (new Date).getTime()]); s < c.length - 1 && -1 === document.cookie.indexOf(a + "=" + a);) i = c.slice(-1 - ++s).join("."), document.cookie = a + "=" + a + ";domain=" + i + ";" + e;
                                document.cookie = a + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + i + ";" + e
                            } catch (t) {} finally {
                                return i || t
                            }
                        }, g.prototype.Oi = function(t, i) {
                            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                                e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
                                s = !1;
                            if (!0 === n ? s = !0 : i instanceof Object ? !1 === this.pn(this.zi[t], i) && (s = !0) : this.zi[t] !== i && (s = !0), !0 !== s || (this.zi[t] = i, this.Ci[t] = e, !0 !== this.Vi)) return !1;
                            var c, a = {};
                            for (c in a[t] = i, e) a[c] = e[c];
                            return this.parent.socket.emit("session:set_" + t, a), !0
                        }, g.prototype.Si = function(t) {
                            for (var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], e = [], s = 0; s < i.length; s++) {
                                var c = (i[s] || "").trim().toLowerCase();
                                c && -1 === t.indexOf(c) && e.push(c)
                            }
                            var a = void 0;
                            !0 === n ? 0 < e.length || t.length !== i.length ? (a = [].concat(i), this.zi.segments = a) : a = [] : this.zi.segments = t.concat(a = e), 0 < a.length && !0 === this.Vi && (a = {
                                segments: a
                            }, !0 === n && (a.overwrite = !0), this.parent.socket.emit("session:set_segments", a))
                        }, g.prototype.Ai = function(t) {
                            var i, n, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                s = !1,
                                c = {};
                            for (i in e) t[i] !== e[i] && (s = !0, c[i] = e[i]);
                            for (n in this.zi.data = t, c) this.zi.data[n] = c[n];
                            !0 === s && !0 === this.Vi && this.parent.socket.emit("session:set_data", {
                                data: c
                            })
                        }, g.prototype.pn = function(t, i) {
                            if (t instanceof Object && i instanceof Object) {
                                var n, e, s = {};
                                for (n in t) s[n] = !0;
                                for (e in i) s[e] = !0;
                                var c, a = !0;
                                for (c in s)
                                    if (!1 === this.pn(t[c], i[c])) {
                                        a = !1;
                                        break
                                    }
                                return a
                            }
                            return t === i && !0
                        }, g);

                    function g(t) {
                        this.parent = t, this.Pi = new RegExp("^(https?\\:\\/\\/[^/]+)\\/chat\\/resume\\/\\?target_url=(.+)&session_id=(.+)$"), this.Ui = /^\?.*(crisp_sid=([^&=]+)).*$/, this.un = /(\?.*)(crisp_sid=[^&=]+&?)(.*)$/, this.Mi = 9e4, this.Ki = 5e3, this.an = 3e3, this.ln = 240, this.rn = 80, this.hn = "...", this.cn = 24e4, this.Ji = 3e5, this.dn = 15768e3, this.Ei = ["email", "phone", "nickname", "avatar", "company"], this.parent.disable_autoload || (this.st(), this.ft())
                    }
                    var _ = (w.prototype.get_users_available = function() {
                        this.yn(!1)
                    }, w.prototype.set_users_available = function(t) {
                        this.mn = t
                    }, w.prototype.reset = function() {
                        this.st()
                    }, w.prototype.st = function() {
                        this.mn = !1
                    }, w.prototype.ft = function() {
                        this.parent.socket.on("website:users:available", this.gn.At(this))
                    }, w.prototype.gn = function(t) {
                        "boolean" == typeof t && (this.set_users_available(t), this.yn(!0))
                    }, w.prototype.yn = function() {
                        this.parent.event.publish("website:users:available", {
                            available: this.mn,
                            changed: 0 < arguments.length && void 0 !== arguments[0] && arguments[0]
                        })
                    }, w);

                    function w(t) {
                        this.parent = t, this.st(), this.ft()
                    }
                    var b = (k.prototype.get_url_upload = function(t, i) {
                        i = {
                            id: "" + (new Date).getTime(),
                            from: "visitor",
                            file: {
                                name: t,
                                type: i
                            }
                        }, this.parent.socket.emit("bucket:url:upload:generate", i), this.parent.event.publish("bucket:url:upload:generate", i)
                    }, k.prototype.ft = function() {
                        this.parent.socket.on("bucket:url:upload:generated", this.wn.At(this))
                    }, k.prototype.wn = function(t) {
                        this.parent.event.publish("bucket:url:upload:generated", t)
                    }, k);

                    function k(t) {
                        this.parent = t, this.ft()
                    }
                    var x = ($.prototype.get_animation_list = function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                            i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
                            i = {
                                id: (new Date).getTime(),
                                from: "visitor",
                                list: {
                                    page: i
                                }
                            };
                        t && (i.list.query = t), this.parent.socket.emit("media:animation:list", i), this.parent.event.publish("media:animation:list", i)
                    }, $.prototype.ft = function() {
                        this.parent.socket.on("media:animation:listed", this.bn.At(this))
                    }, $.prototype.bn = function(t) {
                        this.parent.event.publish("media:animation:listed", t)
                    }, $);

                    function $(t) {
                        this.parent = t, this.ft()
                    }

                    function F(t, i, n) {
                        return i in t ? Object.defineProperty(t, i, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[i] = n, t
                    }
                    var j = (E.prototype.get_article_search = function(t) {
                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                        return this.kn("search", this.xn, "query", this.$n.At(this), t, i)
                    }, E.prototype.get_article_suggest = function(t) {
                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                        return this.kn("suggest", this.Fn, "part", this.jn.At(this), t, i)
                    }, E.prototype.report_article_search = function(t) {
                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
                        (i = (i || "").trim()) && (this.parent.socket.emit("helpdesk:article:report", i = {
                            report: {
                                locale: t,
                                query: i
                            }
                        }), this.parent.event.publish("helpdesk:article:report", i))
                    }, E.prototype.reset = function() {
                        this.st()
                    }, E.prototype.st = function() {
                        this.xn = {}, this.Fn = {}
                    }, E.prototype.ft = function() {
                        this.parent.socket.on("helpdesk:article:searched", this.$n.At(this)), this.parent.socket.on("helpdesk:article:suggested", this.jn.At(this))
                    }, E.prototype.$n = function(t) {
                        return this.En("search", this.xn, "query", t)
                    }, E.prototype.jn = function(t) {
                        return this.En("suggest", this.Fn, "part", t)
                    }, E.prototype.kn = function(t, i, n, e, s) {
                        var c = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : null,
                            a = (i[c || "default"] || {})[s],
                            r = "helpdesk:article:" + t,
                            o = F({
                                id: (new Date).getTime(),
                                from: "visitor"
                            }, t, F({
                                locale: c
                            }, n, s));
                        this.parent.event.publish(r, o), a ? this.parent.Schedule.set_timeout(function() {
                            e(F({
                                id: o.id,
                                results: a
                            }, t, F({
                                locale: c
                            }, n, s)))
                        }, this.zn) : this.parent.socket.emit(r, o)
                    }, E.prototype.En = function(t, i, n, e) {
                        var s;
                        e[t] && "string" == typeof e[t][n] && (i[s = e[t].locale || "default"] = i[s] || {}, i[s][e[t][n]] = e.results), this.parent.event.publish("helpdesk:article:" + t + "ed", e)
                    }, E);

                    function E(t) {
                        this.parent = t, this.zn = 100, this.st(), this.ft()
                    }
                    f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    };
                    var z = (C.prototype.init = function(t, i, n) {
                        var e = this;
                        this.parent.Stream.bind_to(null, this.Cn, {
                            session_id: this.parent.Session.Rt
                        }, function() {
                            -1 === (e.parent.device.capabilities || []).indexOf("browsing") || !0 !== e.parent.Config.nt && "1" === (navigator || {}).doNotTrack ? (e.parent.stream.emit("client:browsing:request:decline", {}), e.Sn()) : (e.An = t.deps.tree_mirror || null, (e.In = !0) === t.resume ? (e.parent.stream.emit("client:browsing:resume", {
                                browsing_id: e.qn
                            }), e.Ni(!0), !0 === e.Dn && e.On(!0)) : (e.Ni(!0), e.parent.stream.emit("client:browsing:request:accept", {
                                useragent: navigator.userAgent
                            }))), "function" == typeof i && i()
                        }, function() {
                            "function" == typeof n && n()
                        })
                    }, C.prototype.restore_browsing_state = function() {
                        this.qn && (!1 === this.Rn() ? this.Bn({
                            resume: !0
                        }) : this.Sn())
                    }, C.prototype.toggle_ignore_scroll_event = function() {
                        this.Mn = 0 < arguments.length && void 0 !== arguments[0] && arguments[0]
                    }, C.prototype.reset = function() {
                        !0 === this.Dn && this.Sn(), this.st(), this.Nn()
                    }, C.prototype.st = function() {
                        if (this.parent.Schedule.clear_interval(this.Tn), this.parent.Schedule.clear_interval(this.Un), this.parent.Schedule.clear_interval(this.Pn), this.parent.Schedule.clear_interval(this.Ln), "object" === f(this.Jn))
                            for (var t in this.Jn) this.parent.Schedule.clear_timeout(this.Jn[t]);
                        if ("object" === f(this.Vn))
                            for (var i in this.Vn) this.parent.Schedule.clear_timeout(this.Vn[i].dead_timeout);
                        (this.Wn || {}).defer_event && this.parent.Schedule.clear_timeout(this.Wn.defer_event), this.In = !1, this.qn = null, this.Dn = !1, this.Bi = null, this.Tn = null, this.Un = null, this.Pn = null, this.Ln = null, this.Mn = !1, this.Hn = null, this.An = null, this.Gn = null, this.Jn = {}, this.Kn = [], this.Vn = {
                            assist: {
                                ongoing: !1,
                                last_heartbeat: null,
                                dead_timeout: null
                            }
                        }, this.Zn = {
                            x: 0,
                            y: 0,
                            last_x: 0,
                            last_y: 0
                        }, this.Yn = {
                            x: 0,
                            y: 0,
                            last_x: 0,
                            last_y: 0
                        }, this.Wn = {
                            last_call: (new Date).getTime(),
                            defer_event: null
                        }
                    }, C.prototype.Fi = function() {
                        return this.parent.Storage.Et("browsing", [this.parent.website_id])
                    }, C.prototype.ft = function() {
                        this.parent.socket.on("browsing:request:initiate", this.Bn.At(this)), this.parent.stream.on("client:browsing:request:initiated", this.Xn.At(this)), this.parent.stream.on("client:browsing:action:start", this.Qn.At(this)), this.parent.stream.on("client:browsing:action:stop", this.te.At(this)), this.parent.stream.on("client:browsing:action:heartbeat", this.ie.At(this)), this.parent.stream.on("client:browsing:assist:start", this.ne.At(this)), this.parent.stream.on("client:browsing:assist:stop", this.ee.At(this)), this.parent.stream.on("client:browsing:assist:heartbeat", this.se.At(this)), this.parent.stream.on("client:browsing:assist:mouse", this.ce.At(this)), this.parent.stream.on("client:browsing:assist:scroll", this.ae.At(this)), this.parent.stream.on("client:browsing:assist:click", this.re.At(this))
                    }, C.prototype.oe = function() {
                        var t;
                        "object" !== f(window.sessionStorage) || (t = window.sessionStorage.getItem(this.Fi())) && (t = JSON.parse(t), this.qn = t.browsing_id || null, this.Dn = t.is_playing || !1, this.Bi = t.last_heartbeat || null)
                    }, C.prototype.Bn = function(t) {
                        !0 === this.In && !0 !== t.resume || (!0 !== t.resume && this.Sn(), this.parent.event.publish("browsing:request:initiate", t || {}))
                    }, C.prototype.Xn = function(t) {
                        !0 === this.In && (this.qn = t.browsing_id, this.Bi = (new Date).getTime(), this.he())
                    }, C.prototype.Qn = function() {
                        !0 === this.In && this.qn && this.On()
                    }, C.prototype.te = function() {
                        !0 === this.In && this.qn && this.Sn()
                    }, C.prototype.ie = function() {
                        !0 === this.In && this.qn && (this.Bi = (new Date).getTime(), this.he())
                    }, C.prototype.ne = function() {
                        !0 === this.In && this.qn && !0 === this.ue("assist") && this.parent.event.publish("browsing:assist:started", {})
                    }, C.prototype.ee = function() {
                        !0 === this.In && this.qn && !0 === this.le("assist") && this.parent.event.publish("browsing:assist:stopped", {})
                    }, C.prototype.se = function() {
                        !0 === this.In && this.qn && this.fe("assist")
                    }, C.prototype.ce = function(t) {
                        !0 === this.In && this.qn && !0 === this.Vn.assist.ongoing && this.parent.event.publish("browsing:assist:mouse", t)
                    }, C.prototype.ae = function(t) {
                        !0 === this.In && this.qn && !0 === this.Vn.assist.ongoing && this.parent.event.publish("browsing:assist:scroll", t)
                    }, C.prototype.re = function(t) {
                        !0 === this.In && this.qn && !0 === this.Vn.assist.ongoing && this.parent.event.publish("browsing:assist:click", t)
                    }, C.prototype.he = function() {
                        "object" === f(window.sessionStorage) && JSON && "function" == typeof JSON.stringify && window.sessionStorage.setItem(this.Fi(), JSON.stringify({
                            browsing_id: this.qn,
                            is_playing: this.Dn,
                            last_heartbeat: this.Bi
                        }))
                    }, C.prototype.Nn = function() {
                        "object" === f(window.sessionStorage) && "object" === f(window.sessionStorage) && window.sessionStorage.removeItem(this.Fi())
                    }, C.prototype.On = function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                        this.Dn = !0, this.Bi = (new Date).getTime(), this.he(), this.de(), this.ve(!0), this.pe(!0), this.ye(!0), !0 !== t && this.parent.stream.emit("client:browsing:action:started", {})
                    }, C.prototype.Sn = function() {
                        var t = this.Dn;
                        this.Gn && this.Gn.disconnect(), this.st(), this.he(), !0 === t && this.parent.stream.emit("client:browsing:action:stopped", {}), this.parent.Stream.unbind_from()
                    }, C.prototype.de = function() {
                        var s = this;
                        if (this.me(), this.ge(), this.we(), this.Gn) return this.be(this.Hn);
                        this.Gn = new this.An(document, {
                            initialize: function(t, i) {
                                s.Hn = {
                                    f: "initialize",
                                    args: [t, i]
                                }, s.be(s.Hn)
                            },
                            applyChanged: function(t, i, n, e) {
                                s.Kn.push({
                                    f: "applyChanged",
                                    args: [t, i, n, e]
                                })
                            }
                        })
                    }, C.prototype.be = function(t) {
                        t.f && t.args && "function" == typeof JSON.stringify && this.parent.stream.emit("client:browsing:stream:mirror", {
                            f: t.f,
                            args: JSON.stringify(t.args)
                        })
                    }, C.prototype.ge = function() {
                        this.parent.stream.emit("client:browsing:stream:tab", {
                            title: document.title,
                            url: document.location.href,
                            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                        })
                    }, C.prototype.me = function() {
                        this.parent.stream.emit("client:browsing:stream:mouse", {
                            x: this.Zn.x,
                            y: this.Zn.y
                        })
                    }, C.prototype.we = function() {
                        this.parent.stream.emit("client:browsing:stream:scroll", {
                            x: this.Yn.x,
                            y: this.Yn.y
                        })
                    }, C.prototype.ke = function() {
                        this.parent.stream.emit("client:browsing:stream:click", {})
                    }, C.prototype.ue = function(t) {
                        var i = !0 !== this.Vn[t].ongoing && !0;
                        return this.Vn[t].ongoing = !0, this.fe(t), this.parent.stream.emit("client:browsing:" + t + ":started", {}), i
                    }, C.prototype.le = function(t) {
                        return !0 === this.Vn[t].ongoing && (this.fe(t, !1), this.Vn[t].ongoing = !1, this.parent.stream.emit("client:browsing:" + t + ":stopped", {}), !0)
                    }, C.prototype.fe = function(t) {
                        var i = this,
                            n = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                        !0 === this.Vn[t].ongoing && (null !== this.Vn[t].dead_timeout && (this.parent.Schedule.clear_timeout(this.Vn[t].dead_timeout), this.Vn[t].dead_timeout = null), !0 === n ? (this.Vn[t].last_heartbeat = (new Date).getTime(), this.Vn[t].dead_timeout = this.parent.Schedule.set_timeout(function() {
                            i.le(t)
                        }, this.xe)) : this.Vn[t].last_heartbeat = null)
                    }, C.prototype.$e = function() {
                        var i = this;
                        this.parent.Listener.add_event("browsing", "document", "mousemove", function(t) {
                            i.Zn.last_x = t.pageX, i.Zn.last_y = t.pageY
                        })
                    }, C.prototype.Fe = function() {
                        var n = this;
                        this.parent.Listener.add_event("browsing", "window", "resize", function() {
                            null !== n.Wn.defer_event && n.parent.Schedule.clear_timeout(n.Wn.defer_event), n.Wn.defer_event = n.parent.Schedule.set_timeout(function() {
                                n.Wn.defer_event = null;
                                var t = n.Wn.last_call,
                                    i = (new Date).getTime();
                                n.Wn.last_call = i, t && i > t + n.je && !0 === n.Dn && n.ge()
                            }, n.Ee)
                        })
                    }, C.prototype.ze = function() {
                        var i = this;
                        this.parent.Listener.add_event("browsing", "window", "scroll", function() {
                            var t;
                            !0 !== i.Mn && (t = document.documentElement, i.Yn.last_x = (window.pageXOffset || t.scrollLeft) - (t.clientLeft || 0), i.Yn.last_y = (window.pageYOffset || t.scrollTop) - (t.clientTop || 0))
                        })
                    }, C.prototype.Ce = function() {
                        var i = this;
                        this.parent.Listener.add_event("browsing", "window", "click", function(t) {
                            !0 !== i.Dn || t.Se || i.Ae("click", function() {
                                i.ke(), i.me()
                            })
                        })
                    }, C.prototype.Rn = function() {
                        return null === this.Bi || null !== this.Bi && (new Date).getTime() - this.Bi >= this.Ie
                    }, C.prototype.Ni = function() {
                        var t = this,
                            i = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                        null !== this.Tn && this.parent.Schedule.clear_interval(this.Tn), !0 === i && (this.Tn = this.parent.Schedule.set_interval(function() {
                            t.parent.stream.emit("client:browsing:heartbeat", {}), !0 === t.Rn() && t.Sn()
                        }, this.qe))
                    }, C.prototype.ve = function() {
                        var t = this,
                            i = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                        null !== this.Pn && (this.parent.Schedule.clear_interval(this.Pn), this.Pn = null), !0 === i && (this.Pn = this.parent.Schedule.set_interval(function() {
                            t.Zn.last_x === t.Zn.x && t.Zn.last_y === t.Zn.y || !0 !== t.Dn || (t.Zn.x = t.Zn.last_x, t.Zn.y = t.Zn.last_y, t.me())
                        }, this.je))
                    }, C.prototype.pe = function() {
                        var t = this,
                            i = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                        null !== this.Ln && (this.parent.Schedule.clear_interval(this.Ln), this.Ln = null), !0 === i && (this.Ln = this.parent.Schedule.set_interval(function() {
                            t.Yn.last_x === t.Yn.x && t.Yn.last_y === t.Yn.y || !0 !== t.Dn || (t.Yn.x = t.Yn.last_x, t.Yn.y = t.Yn.last_y, t.me(), t.we())
                        }, this.je))
                    }, C.prototype.ye = function() {
                        var i = this,
                            t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                        null !== this.Un && this.parent.Schedule.clear_interval(this.Un), !0 === t && (this.Un = this.parent.Schedule.set_interval(function() {
                            for (var t = 0; t < i.Kn.length && !(t >= i.De); t++) i.be(i.Kn[t]);
                            i.Kn.splice(0, i.De)
                        }, this.Oe))
                    }, C.prototype.Ae = function(t, i) {
                        var n = this;
                        void 0 === this.Jn[t] && (this.Jn[t] = this.parent.Schedule.set_timeout(function() {
                            delete n.Jn[t], i()
                        }, this.Re))
                    }, C);

                    function C(t) {
                        this.parent = t, this.qe = 1e4, this.Ie = 45e3, this.xe = 45e3, this.Ee = 1e3, this.je = 1e3, this.Re = 500, this.Oe = 1e3, this.De = 10, this.Cn = ["browsing:action:start", "browsing:action:stop", "browsing:action:heartbeat", "browsing:assist:start", "browsing:assist:stop", "browsing:assist:heartbeat", "browsing:assist:mouse", "browsing:assist:scroll", "browsing:assist:click"], this.st(), this.ft(), this.oe(), this.$e(), this.Fe(), this.ze(), this.Ce()
                    }
                    f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    };
                    var S = (A.prototype.init = function(t, i, n) {
                        var e = this;
                        this.parent.Stream.bind_to(null, this.Cn, {
                            session_id: this.parent.Session.Rt
                        }, function() {
                            e.Be = t.mode || null, e.Me = t.ice || [], !0 === t.has_support ? (e.parent.stream.emit("client:call:request:initiated", {
                                call_id: t.call_id
                            }), e.Ni(!0)) : e.parent.stream.emit("client:call:request:decline", {}), "function" == typeof i && i()
                        }, function() {
                            "function" == typeof n && n()
                        })
                    }, A.prototype.accept = function() {
                        !0 === this.In && (this.Ne = !0, this.parent.stream.emit("client:call:request:accept", {}))
                    }, A.prototype.decline = function() {
                        !0 === this.In && (this.parent.stream.emit("client:call:request:decline", {}), this.Sn())
                    }, A.prototype.stop = function() {
                        !0 === this.In && (this.parent.stream.emit("client:call:action:stopped", {}), this.Sn())
                    }, A.prototype.toggle_audio = function() {
                        return this.Te("audio", "getAudioTracks")
                    }, A.prototype.toggle_video = function() {
                        return this.Te("video", "getVideoTracks")
                    }, A.prototype.toggle_screensharing = function() {
                        return !0 === this.In && null !== this.Ue.local && (!1 === this.Pe ? this.Le() : this.Je()), this.Pe
                    }, A.prototype.is_ongoing = function() {
                        return !0 === this.In && null !== this.Ve && !0
                    }, A.prototype.has_support_screensharing = function() {
                        return !(!navigator.mediaDevices || "function" != typeof navigator.mediaDevices.getDisplayMedia)
                    }, A.prototype.get_stream = function(t) {
                        return this.Ue[t] || null
                    }, A.prototype.reset = function() {
                        !0 === this.In && this.Sn(), this.st()
                    }, A.prototype.st = function() {
                        this.In = !1, this.Pe = !1, this.Ne = !1, this.We = !1, this.qn = null, this.Ve = null, this.Tn = null, this.He = null, this.Be = null, this.Me = [], this.Ue = {
                            local: null,
                            remote: null
                        }, this.Ge = {
                            video: null
                        }
                    }, A.prototype.ft = function() {
                        this.parent.socket.on("call:request:initiate", this.Bn.At(this)), this.parent.stream.on("client:call:request:accepted", this.Ke.At(this)), this.parent.stream.on("client:call:request:declined", this.Ze.At(this)), this.parent.stream.on("client:call:action:stopped", this.Ye.At(this)), this.parent.stream.on("client:call:signaling:sdp", this.Xe.At(this)), this.parent.stream.on("client:call:signaling:candidate", this.Qe.At(this))
                    }, A.prototype.Bn = function(t) {
                        !0 !== this.In && (t.has_support = -1 !== (this.parent.device.capabilities || []).indexOf("call"), this.In = !0, this.parent.event.publish("call:request:initiate", t))
                    }, A.prototype.Ke = function() {
                        !0 === this.In && !0 !== this.Ne && this.Sn()
                    }, A.prototype.Ze = function() {
                        !0 === this.In && this.Sn()
                    }, A.prototype.Ye = function() {
                        !0 === this.In && this.Sn()
                    }, A.prototype.Xe = function(t) {
                        var i = this;
                        !0 === this.In && (this.ts(), "operator" === t.from && this.Ve.setRemoteDescription(new RTCSessionDescription(t.sdp)).then(function() {
                            return i.parent.event.publish("call:peer:remote:success", {}), null === i.Ue.local ? i.es() : "offer" === t.sdp.type ? i.ss("answer") : Promise.resolve()
                        }).catch(function() {
                            i.parent.event.publish("call:peer:remote:error", {})
                        }))
                    }, A.prototype.Qe = function(t) {
                        !0 === this.In && (this.ts(), "operator" === t.from && "object" === f(t.candidate) && null !== t.candidate && this.Ve.addIceCandidate(new RTCIceCandidate({
                            sdpMLineIndex: t.candidate.sdpMLineIndex,
                            candidate: t.candidate.candidate
                        })).catch(function() {}))
                    }, A.prototype.ts = function() {
                        var n = this;
                        null === this.Ve && (this.Ve = new RTCPeerConnection({
                            iceServers: this.Me
                        }), this.Ve.onicecandidate = function(t) {
                            t && t.candidate && n.parent.stream.emit("client:call:signaling:candidate", {
                                from: "user",
                                candidate: t.candidate
                            })
                        }, this.Ve.ontrack = function(t) {
                            t = t.streams[0], n.Ue.remote = t, n.parent.event.publish("call:media:remote:success", {}), t.onremovetrack = function() {
                                n.parent.event.publish("call:media:remote:success", {})
                            }
                        }, this.Ve.oniceconnectionstatechange = function(t) {
                            var i = n.Ve;
                            null !== i && "failed" !== i.iceConnectionState && "closed" !== i.iceConnectionState || n.cs(), null !== i && "disconnected" === i.iceConnectionState && (n.He = n.parent.Schedule.set_timeout(function() {
                                (n.He = null) !== n.Ve && "connected" === i.iceConnectionState || n.cs()
                            }, n.as)), null !== i && "connected" === i.iceConnectionState && !0 !== n.We && n.parent.Schedule.set_timeout(function() {
                                n.es(!0)
                            }, n.rs)
                        }, this.Ve.onnegotiationneeded = function() {
                            n.ss("offer")
                        }, this.Ve.onclose = function() {
                            n.cs()
                        })
                    }, A.prototype.es = function() {
                        function i(t) {
                            n.parent.event.publish("call:peer:local:error", {})
                        }
                        var n = this,
                            e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                        this.os(function(t) {
                            navigator.mediaDevices.getUserMedia({
                                audio: !0,
                                video: "video" === n.Be && !0 === t.video
                            }).then(function(t) {
                                return n.Ue.local = t, n.parent.event.publish("call:media:local:success", {
                                    retried: e || !1
                                }), !0 === e && (n.We = !0), n.hs(t, e)
                            }).catch(i)
                        }, i)
                    }, A.prototype.hs = function(t) {
                        var i = this,
                            n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                            e = t.getTracks();
                        !0 === n && this.Ve.getSenders().forEach(function(t) {
                            t.track && t.track.stop(), i.Ve.removeTrack(t)
                        });
                        for (var s = 0; s < e.length; s++) this.Ve.addTrack(e[s], t);
                        !0 !== n && this.ss("answer")
                    }, A.prototype.os = function(n, e) {
                        var s = {
                            audio: !1,
                            video: !1
                        };
                        navigator.mediaDevices && navigator.mediaDevices.enumerateDevices ? navigator.mediaDevices.enumerateDevices().then(function(t) {
                            for (var i = 0; i < t.length; i++) switch (t[i].kind) {
                                case "audioinput":
                                    s.audio = !0;
                                    break;
                                case "videoinput":
                                    s.video = !0
                            }!0 !== s.audio ? e() : n(s)
                        }).catch(e) : n(s)
                    }, A.prototype.ss = function() {
                        var i = this,
                            n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "offer",
                            e = void 0;
                        return Promise.resolve().then(function() {
                            var t = {
                                OfferToReceiveAudio: !0,
                                OfferToReceiveVideo: !0
                            };
                            return "answer" === n ? i.Ve.createAnswer(t) : i.Ve.createOffer(t)
                        }).then(function(t) {
                            return e = t, i.Ve.setLocalDescription(e)
                        }).then(function() {
                            return i.parent.stream.emit("client:call:signaling:sdp", {
                                from: "user",
                                sdp: e
                            }), i.parent.event.publish("call:peer:local:success", {}), Promise.resolve()
                        }).catch(function() {
                            return i.parent.event.publish("call:peer:local:error", {}), Promise.resolve()
                        })
                    }, A.prototype.Sn = function() {
                        this.cs()
                    }, A.prototype.cs = function() {
                        if (null !== this.Ve) {
                            for (var t = this.Ve.getSenders(), i = 0; i < t.length; i++) null !== t[i].track && t[i].track.stop();
                            null !== this.Ge.video && this.Ge.video.stop(), this.Ve.close(), this.Ve = null
                        }
                        null !== this.He && (this.parent.Schedule.clear_timeout(this.He), this.He = null), this.parent.Stream.unbind_from(), this.In = !1, this.Pe = !1, this.Ne = !1, this.We = !1, this.Be = null, this.Me = [], this.Ue.local = null, this.Ue.remote = null, this.Ge.video = null, this.Ni(!1), this.parent.event.publish("call:action:stopped", {})
                    }, A.prototype.Te = function(t, i) {
                        var n = !1;
                        if (!0 === this.In && null !== this.Ue.local) {
                            for (var e = !1, s = this.Ue.local[i](), c = 0; c < s.length; c++) e = !0, n = !s[c].enabled, s[c].enabled = n;
                            !0 === e && this.parent.event.publish("call:track:local:" + (!0 === n ? "started" : "ended"), {
                                media: t
                            })
                        }
                        return n
                    }, A.prototype.Le = function() {
                        var s = this;
                        !0 === this.has_support_screensharing() && (this.Pe = !0, navigator.mediaDevices.getDisplayMedia({
                            video: !0
                        }).then(function(t) {
                            for (var t = t.getTracks()[0], i = s.Ve.getSenders(), n = null, e = 0; e < i.length; e++)
                                if (i[e].track && "video" === i[e].track.kind) {
                                    n = i[e];
                                    break
                                }
                            null !== n ? (s.Ge.video = n.track, n.replaceTrack(t)) : n = s.Ve.addTrack(t, s.Ue.local), t.onended = function() {
                                null !== s.Ve && (s.us(n), s.parent.event.publish("call:track:local:ended", {
                                    media: "screensharing"
                                }))
                            }, s.parent.event.publish("call:track:local:started", {
                                media: "screensharing"
                            })
                        }).catch(function(t) {
                            s.Pe = !1
                        }))
                    }, A.prototype.Je = function() {
                        for (var t = this.Ve.getSenders(), i = null, n = 0; n < t.length; n++)
                            if (t[n].track && "video" === t[n].track.kind) {
                                i = t[n];
                                break
                            }
                        null !== i && (i.track.stop(), i.track.dispatchEvent(new Event("ended")))
                    }, A.prototype.us = function(t) {
                        null !== this.Ge.video ? (t.replaceTrack(this.Ge.video), this.Ge.video = null) : this.Ve.removeTrack(t), this.Pe = !1
                    }, A.prototype.Ni = function() {
                        var t = this,
                            i = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                        null !== this.Tn && this.parent.Schedule.clear_interval(this.Tn), !0 === i && (this.Tn = this.parent.Schedule.set_interval(function() {
                            t.parent.stream.emit("client:call:heartbeat", {})
                        }, this.qe))
                    }, A);

                    function A(t) {
                        this.parent = t, this.qe = 1e4, this.as = 5e3, this.rs = 200, this.Cn = ["call:request:initiate", "call:request:accepted", "call:request:declined", "call:action:stopped", "call:signaling:sdp", "call:signaling:candidate"], this.st(), this.ft()
                    }
                    var I = (q.prototype.fired = function(t, i) {
                        this.parent.socket.emit("trigger:fired", i = {
                            identifier: t,
                            name: i
                        }), this.parent.event.publish("trigger:fired", i)
                    }, q);

                    function q(t) {
                        this.parent = t
                    }
                    f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    };
                    var D, O, R = (B.prototype.configure = function(t) {
                        this.ls = t.project, this.ds = t.revision, this.vs = t.environment, this.ps = t.useragent, this.ys = t.page
                    }, B.prototype.report = function(t, i, n) {
                        if (!(this.ls && this.ds && this.vs && this.ps && this.ys)) throw new Error("Missing a configuration parameter. Did you call configure() before?");
                        "object" === (void 0 === n ? "undefined" : f(n)) && n instanceof Error && (n = {
                            fileName: n.fileName,
                            lineNumber: n.lineNumber,
                            columnNumber: n.columnNumber,
                            message: n.message,
                            stack: n.stack
                        }), n = {
                            project: this.ls,
                            revision: this.ds,
                            environment: this.vs,
                            useragent: this.ps,
                            page: this.ys,
                            level: t,
                            namespace: i,
                            traceback: n
                        }, this.parent.socket.emit("issue:report", n), this.parent.event.publish("issue:report", n)
                    }, B.prototype.st = function() {
                        this.ls = null, this.ds = null, this.vs = null, this.ps = null, this.ys = null
                    }, B);

                    function B(t) {
                        this.parent = t, this.st()
                    }
                    D = r, O = function() {
                            "use strict";

                            function o(t) {
                                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                            }

                            function e(t, i) {
                                for (var n = 0; n < i.length; n++) {
                                    var e = i[n];
                                    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
                                }
                            }

                            function c(t, i, n) {
                                return i && e(t.prototype, i), n && e(t, n), t
                            }

                            function s() {
                                return (s = Object.assign || function(t) {
                                    for (var i = 1; i < arguments.length; i++) {
                                        var n, e = arguments[i];
                                        for (n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                                    }
                                    return t
                                }).apply(this, arguments)
                            }

                            function a(t, i) {
                                if ("function" != typeof i && null !== i) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(i && i.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), i && r(t, i)
                            }

                            function h(t) {
                                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                                    return t.__proto__ || Object.getPrototypeOf(t)
                                })(t)
                            }

                            function r(t, i) {
                                return (r = Object.setPrototypeOf || function(t, i) {
                                    return t.__proto__ = i, t
                                })(t, i)
                            }

                            function u() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                                } catch (t) {
                                    return !1
                                }
                            }

                            function l(t, i, n) {
                                return (l = u() ? Reflect.construct : function(t, i, n) {
                                    var e = [null];
                                    return e.push.apply(e, i), e = new(Function.bind.apply(t, e)), n && r(e, n.prototype), e
                                }).apply(null, arguments)
                            }

                            function n(t) {
                                var n = "function" == typeof Map ? new Map : void 0;
                                return function(t) {
                                    if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
                                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                                    if (void 0 !== n) {
                                        if (n.has(t)) return n.get(t);
                                        n.set(t, i)
                                    }

                                    function i() {
                                        return l(t, arguments, h(this).constructor)
                                    }
                                    return i.prototype = Object.create(t.prototype, {
                                        constructor: {
                                            value: i,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }), r(i, t)
                                }(t)
                            }

                            function f(t) {
                                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t
                            }

                            function d(n) {
                                var e = u();
                                return function() {
                                    var t, i = h(n);
                                    return function(t, i) {
                                        if (i && ("object" == typeof i || "function" == typeof i)) return i;
                                        if (void 0 !== i) throw new TypeError("Derived constructors may only return object or undefined");
                                        return f(t)
                                    }(this, e ? (t = h(this).constructor, Reflect.construct(i, arguments, t)) : i.apply(this, arguments))
                                }
                            }

                            function v(t, i, n) {
                                return (v = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, i, n) {
                                    if (t = function(t, i) {
                                            for (; !Object.prototype.hasOwnProperty.call(t, i) && null !== (t = h(t)););
                                            return t
                                        }(t, i)) return (i = Object.getOwnPropertyDescriptor(t, i)).get ? i.get.call(n) : i.value
                                })(t, i, n || t)
                            }

                            function p(t, i) {
                                (null == i || i > t.length) && (i = t.length);
                                for (var n = 0, e = new Array(i); n < i; n++) e[n] = t[n];
                                return e
                            }
                            var y = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                                m = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                                g = Object.create(null);
                            g.open = "0", g.close = "1", g.ping = "2", g.pong = "3", g.message = "4", g.upgrade = "5", g.noop = "6";
                            var _ = Object.create(null);
                            Object.keys(g).forEach(function(t) {
                                _[g[t]] = t
                            });
                            for (var w = {
                                    type: "error",
                                    data: "parser error"
                                }, b = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob), k = "function" == typeof ArrayBuffer, x = function(t, i) {
                                    var n = new FileReader;
                                    return n.onload = function() {
                                        var t = n.result.split(",")[1];
                                        i("b" + t)
                                    }, n.readAsDataURL(t)
                                }, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", $ = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), i = 0; i < t.length; i++) $[t.charCodeAt(i)] = i;

                            function F(t, i) {
                                return "blob" === i && t instanceof ArrayBuffer ? new Blob([t]) : t
                            }
                            var j = "function" == typeof ArrayBuffer,
                                E = z;

                            function z(t) {
                                if (t) return function(t) {
                                    for (var i in z.prototype) t[i] = z.prototype[i];
                                    return t
                                }(t)
                            }
                            z.prototype.on = z.prototype.addEventListener = function(t, i) {
                                return this.gs = this.gs || {}, (this.gs["$" + t] = this.gs["$" + t] || []).push(i), this
                            }, z.prototype.once = function(t, i) {
                                function n() {
                                    this.off(t, n), i.apply(this, arguments)
                                }
                                return n.fn = i, this.on(t, n), this
                            }, z.prototype.off = z.prototype.removeListener = z.prototype.removeAllListeners = z.prototype.removeEventListener = function(t, i) {
                                if (this.gs = this.gs || {}, 0 == arguments.length) return this.gs = {}, this;
                                var n, e = this.gs["$" + t];
                                if (!e) return this;
                                if (1 == arguments.length) return delete this.gs["$" + t], this;
                                for (var s = 0; s < e.length; s++)
                                    if ((n = e[s]) === i || n.fn === i) {
                                        e.splice(s, 1);
                                        break
                                    }
                                return 0 === e.length && delete this.gs["$" + t], this
                            }, z.prototype.emitReserved = z.prototype.emit = function(t) {
                                this.gs = this.gs || {};
                                for (var i = new Array(arguments.length - 1), n = this.gs["$" + t], e = 1; e < arguments.length; e++) i[e - 1] = arguments[e];
                                if (n)
                                    for (var e = 0, s = (n = n.slice(0)).length; e < s; ++e) n[e].apply(this, i);
                                return this
                            }, z.prototype.listeners = function(t) {
                                return this.gs = this.gs || {}, this.gs["$" + t] || []
                            }, z.prototype.hasListeners = function(t) {
                                return !!this.listeners(t).length
                            }, "undefined" != typeof self || "undefined" != typeof window || Function("return this")();
                            var C = setTimeout,
                                S = clearTimeout;

                            function A(t, i) {
                                i.useNativeTimers ? (t.setTimeoutFn = C.bind(window), t.clearTimeoutFn = S.bind(window)) : (t.setTimeoutFn = setTimeout.bind(window), t.clearTimeoutFn = clearTimeout.bind(window))
                            }
                            var I, q = function(t) {
                                    a(i, n(Error));
                                    var e = d(i);

                                    function i(t, i, n) {
                                        return (t = e.call(this, t)).description = i, t.context = n, t.type = "TransportError", t
                                    }
                                    return i
                                }(),
                                D = function(t) {
                                    a(e, E);
                                    var n = d(e);

                                    function e(t) {
                                        var i = n.call(this);
                                        return i.writable = !1, A(f(i), t), i.opts = t, i.query = t.query, i.readyState = "", i.socket = t.socket, i
                                    }
                                    return c(e, [{
                                        key: "onError",
                                        value: function(t, i, n) {
                                            return v(h(e.prototype), "emitReserved", this).call(this, "error", new q(t, i, n)), this
                                        }
                                    }, {
                                        key: "open",
                                        value: function() {
                                            return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
                                        }
                                    }, {
                                        key: "close",
                                        value: function() {
                                            return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
                                        }
                                    }, {
                                        key: "send",
                                        value: function(t) {
                                            "open" === this.readyState && this.write(t)
                                        }
                                    }, {
                                        key: "onOpen",
                                        value: function() {
                                            this.readyState = "open", this.writable = !0, v(h(e.prototype), "emitReserved", this).call(this, "open")
                                        }
                                    }, {
                                        key: "onData",
                                        value: function(t) {
                                            t = function(t, i) {
                                                if ("string" != typeof t) return {
                                                    type: "message",
                                                    data: F(t, i)
                                                };
                                                var n, e = t.charAt(0);
                                                return "b" === e ? {
                                                    type: "message",
                                                    data: (n = t.substring(1), i = i, j ? F(function(t) {
                                                        var i, n, e, s, c = .75 * t.length,
                                                            a = t.length,
                                                            r = 0;
                                                        "=" === t[t.length - 1] && (c--, "=" === t[t.length - 2] && c--);
                                                        for (var c = new ArrayBuffer(c), o = new Uint8Array(c), h = 0; h < a; h += 4) i = $[t.charCodeAt(h)], n = $[t.charCodeAt(h + 1)], e = $[t.charCodeAt(h + 2)], s = $[t.charCodeAt(h + 3)], o[r++] = i << 2 | n >> 4, o[r++] = (15 & n) << 4 | e >> 2, o[r++] = (3 & e) << 6 | 63 & s;
                                                        return c
                                                    }(n), i) : {
                                                        base64: !0,
                                                        data: n
                                                    })
                                                } : _[e] ? 1 < t.length ? {
                                                    type: _[e],
                                                    data: t.substring(1)
                                                } : {
                                                    type: _[e]
                                                } : w
                                            }(t, this.socket.binaryType), this.onPacket(t)
                                        }
                                    }, {
                                        key: "onPacket",
                                        value: function(t) {
                                            v(h(e.prototype), "emitReserved", this).call(this, "packet", t)
                                        }
                                    }, {
                                        key: "onClose",
                                        value: function(t) {
                                            this.readyState = "closed", v(h(e.prototype), "emitReserved", this).call(this, "close", t)
                                        }
                                    }]), e
                                }(),
                                O = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
                                R = {},
                                B = 0,
                                M = 0;

                            function N(t) {
                                for (var i = ""; i = O[t % 64] + i, 0 < (t = Math.floor(t / 64)););
                                return i
                            }
                            for (; M < 64; M++) R[O[M]] = M;
                            var T = "function" == typeof Promise && "function" == typeof Promise.resolve ? function(t) {
                                    return Promise.resolve().then(t)
                                } : function(t, i) {
                                    return i(t, 0)
                                },
                                U = window.WebSocket || window.MozWebSocket,
                                P = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(),
                                L = {
                                    websocket: function(t) {
                                        a(i, D);
                                        var n = d(i);

                                        function i(t) {
                                            var i = n.call(this, t);
                                            return i.supportsBinary = !t.forceBase64, i
                                        }
                                        return c(i, [{
                                            key: "name",
                                            get: function() {
                                                return "websocket"
                                            }
                                        }, {
                                            key: "doOpen",
                                            value: function() {
                                                if (this.check()) {
                                                    var t = this.uri(),
                                                        i = this.opts.protocols,
                                                        n = P ? {} : function(n) {
                                                            for (var t = arguments.length, i = new Array(1 < t ? t - 1 : 0), e = 1; e < t; e++) i[e - 1] = arguments[e];
                                                            return i.reduce(function(t, i) {
                                                                return n.hasOwnProperty(i) && (t[i] = n[i]), t
                                                            }, {})
                                                        }(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
                                                    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
                                                    try {
                                                        this.ws = P ? new U(t, i, n) : i ? new U(t, i) : new U(t)
                                                    } catch (t) {
                                                        return this.emitReserved("error", t)
                                                    }
                                                    this.ws.binaryType = this.socket.binaryType || "arraybuffer", this.addEventListeners()
                                                }
                                            }
                                        }, {
                                            key: "addEventListeners",
                                            value: function() {
                                                var i = this;
                                                this.ws.onopen = function() {
                                                    i.opts.autoUnref && i.ws._s.unref(), i.onOpen()
                                                }, this.ws.onclose = function(t) {
                                                    return i.onClose({
                                                        description: "websocket connection closed",
                                                        context: t
                                                    })
                                                }, this.ws.onmessage = function(t) {
                                                    return i.onData(t.data)
                                                }, this.ws.onerror = function(t) {
                                                    return i.onError("websocket error", t)
                                                }
                                            }
                                        }, {
                                            key: "write",
                                            value: function(a) {
                                                var r = this;
                                                this.writable = !1;
                                                for (var t = 0; t < a.length; t++)(function(t) {
                                                    var i, n = a[t],
                                                        e = t === a.length - 1,
                                                        s = n,
                                                        c = r.supportsBinary;
                                                    t = function(t) {
                                                        try {
                                                            r.ws.send(t)
                                                        } catch (t) {}
                                                        e && T(function() {
                                                            r.writable = !0, r.emitReserved("drain")
                                                        }, r.setTimeoutFn)
                                                    }, n = s.type, s = s.data, b && s instanceof Blob ? c ? t(s) : x(s, t) : k && (s instanceof ArrayBuffer || (i = s, "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(i) : i && i.buffer instanceof ArrayBuffer)) ? c ? t(s) : x(new Blob([s]), t) : t(g[n] + (s || ""))
                                                })(t)
                                            }
                                        }, {
                                            key: "doClose",
                                            value: function() {
                                                void 0 !== this.ws && (this.ws.close(), this.ws = null)
                                            }
                                        }, {
                                            key: "uri",
                                            value: function() {
                                                var t, i = this.query || {},
                                                    n = this.opts.secure ? "wss" : "ws",
                                                    e = "";
                                                return this.opts.port && ("wss" == n && 443 !== Number(this.opts.port) || "ws" == n && 80 !== Number(this.opts.port)) && (e = ":" + this.opts.port), this.opts.timestampRequests && (i[this.opts.timestampParam] = (t = N(+new Date)) !== I ? (B = 0, I = t) : t + "." + N(B++)), this.supportsBinary || (i.b64 = 1), i = function(t) {
                                                    var i, n = "";
                                                    for (i in t) t.hasOwnProperty(i) && (n.length && (n += "&"), n += encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
                                                    return n
                                                }(i), n + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + e + this.opts.path + (i.length ? "?" + i : "")
                                            }
                                        }, {
                                            key: "check",
                                            value: function() {
                                                return !(!U || "bs" in U && this.name === i.prototype.name)
                                            }
                                        }]), i
                                    }()
                                },
                                J = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                                V = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

                            function W(t) {
                                var i = t,
                                    n = t.indexOf("["),
                                    e = t.indexOf("]"); - 1 != n && -1 != e && (t = t.substring(0, n) + t.substring(n, e).replace(/:/g, ";") + t.substring(e, t.length));
                                for (var s, c = J.exec(t || ""), a = {}, r = 14; r--;) a[V[r]] = c[r] || "";
                                return -1 != n && -1 != e && (a.source = i, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a.pathNames = (e = (n = a.path).replace(/\/{2,9}/g, "/").split("/"), "/" != n.substr(0, 1) && 0 !== n.length || e.splice(0, 1), "/" == n.substr(n.length - 1, 1) && e.splice(e.length - 1, 1), e), a.queryKey = (i = a.query, s = {}, i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(t, i, n) {
                                    i && (s[i] = n)
                                }), s), a
                            }
                            var H = function(t) {
                                a(l, E);
                                var n = d(l);

                                function l(t) {
                                    var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                        a = n.call(this);
                                    return t && "object" === o(t) && (i = t, t = null), t ? (t = W(t), i.hostname = t.host, i.secure = "https" === t.protocol || "wss" === t.protocol, i.port = t.port, t.query && (i.query = t.query)) : i.host && (i.hostname = W(i.host).host), A(f(a), i), a.secure = null != i.secure ? i.secure : "undefined" != typeof location && "https:" === location.protocol, i.hostname && !i.port && (i.port = a.secure ? "443" : "80"), a.hostname = i.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), a.port = i.port || ("undefined" != typeof location && location.port ? location.port : a.secure ? "443" : "80"), a.transports = i.transports || ["websocket"], a.readyState = "", a.writeBuffer = [], a.prevBufferLen = 0, a.opts = s({
                                        path: "/engine.io",
                                        agent: !1,
                                        withCredentials: !1,
                                        upgrade: !0,
                                        timestampParam: "t",
                                        rememberUpgrade: !1,
                                        rejectUnauthorized: !0,
                                        perMessageDeflate: {
                                            threshold: 1024
                                        },
                                        transportOptions: {},
                                        closeOnBeforeunload: !0
                                    }, i), a.opts.path = a.opts.path.replace(/\/$/, "") + "/", "string" == typeof a.opts.query && (a.opts.query = function(t) {
                                        for (var i = {}, n = a.opts.query.split("&"), e = 0, s = n.length; e < s; e++) {
                                            var c = n[e].split("=");
                                            i[decodeURIComponent(c[0])] = decodeURIComponent(c[1])
                                        }
                                        return i
                                    }()), a.id = null, a.upgrades = null, a.pingInterval = null, a.pingTimeout = null, a.pingTimeoutTimer = null, "function" == typeof addEventListener && (a.opts.closeOnBeforeunload && addEventListener("beforeunload", function() {
                                        a.transport && (a.transport.removeAllListeners(), a.transport.close())
                                    }, !1), "localhost" !== a.hostname && (a.offlineEventListener = function() {
                                        a.onClose("transport close", {
                                            description: "network connection lost"
                                        })
                                    }, addEventListener("offline", a.offlineEventListener, !1))), a.open(), a
                                }
                                return c(l, [{
                                    key: "createTransport",
                                    value: function(t) {
                                        var i = function(t) {
                                            var i, n = {};
                                            for (i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
                                            return n
                                        }(this.opts.query);
                                        return i.EIO = 4, i.transport = t, this.id && (i.sid = this.id), i = s({}, this.opts.transportOptions[t], this.opts, {
                                            query: i,
                                            socket: this,
                                            hostname: this.hostname,
                                            secure: this.secure,
                                            port: this.port
                                        }), new L[t](i)
                                    }
                                }, {
                                    key: "open",
                                    value: function() {
                                        var t, i = this;
                                        if (this.opts.rememberUpgrade && l.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket";
                                        else {
                                            if (0 === this.transports.length) return void this.setTimeoutFn(function() {
                                                i.emitReserved("error", "No transports available")
                                            }, 0);
                                            t = this.transports[0]
                                        }
                                        this.readyState = "opening";
                                        try {
                                            t = this.createTransport(t)
                                        } catch (t) {
                                            return this.transports.shift(), void this.open()
                                        }
                                        t.open(), this.setTransport(t)
                                    }
                                }, {
                                    key: "setTransport",
                                    value: function(t) {
                                        var i = this;
                                        this.transport && this.transport.removeAllListeners(), (this.transport = t).on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", function(t) {
                                            return i.onClose("transport close", t)
                                        })
                                    }
                                }, {
                                    key: "probe",
                                    value: function(t) {
                                        var i = this,
                                            n = this.createTransport(t),
                                            e = !1;
                                        l.priorWebsocketSuccess = !1;
                                        var s = function() {
                                            e || (n.send([{
                                                type: "ping",
                                                data: "probe"
                                            }]), n.once("packet", function(t) {
                                                e || ("pong" === t.type && "probe" === t.data ? (i.upgrading = !0, i.emitReserved("upgrading", n), n && (l.priorWebsocketSuccess = "websocket" === n.name, i.transport.pause(function() {
                                                    e || "closed" !== i.readyState && (u(), i.setTransport(n), n.send([{
                                                        type: "upgrade"
                                                    }]), i.emitReserved("upgrade", n), n = null, i.upgrading = !1, i.flush())
                                                }))) : ((t = new Error("probe error")).transport = n.name, i.emitReserved("upgradeError", t)))
                                            }))
                                        };

                                        function c() {
                                            e || (e = !0, u(), n.close(), n = null)
                                        }
                                        var a = function(t) {
                                            (t = new Error("probe error: " + t)).transport = n.name, c(), i.emitReserved("upgradeError", t)
                                        };

                                        function r() {
                                            a("transport closed")
                                        }

                                        function o() {
                                            a("socket closed")
                                        }

                                        function h(t) {
                                            n && t.name !== n.name && c()
                                        }
                                        var u = function() {
                                            n.removeListener("open", s), n.removeListener("error", a), n.removeListener("close", r), i.off("close", o), i.off("upgrading", h)
                                        };
                                        n.once("open", s), n.once("error", a), n.once("close", r), this.once("close", o), this.once("upgrading", h), n.open()
                                    }
                                }, {
                                    key: "onOpen",
                                    value: function() {
                                        if (this.readyState = "open", l.priorWebsocketSuccess = "websocket" === this.transport.name, this.emitReserved("open"), this.flush(), "open" === this.readyState && this.opts.upgrade && this.transport.pause)
                                            for (var t = 0, i = this.upgrades.length; t < i; t++) this.probe(this.upgrades[t])
                                    }
                                }, {
                                    key: "onPacket",
                                    value: function(t) {
                                        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) {
                                            case "open":
                                                this.onHandshake(JSON.parse(t.data));
                                                break;
                                            case "ping":
                                                this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
                                                break;
                                            case "error":
                                                var i = new Error("server error");
                                                i.code = t.data, this.onError(i);
                                                break;
                                            case "message":
                                                this.emitReserved("data", t.data), this.emitReserved("message", t.data)
                                        }
                                    }
                                }, {
                                    key: "onHandshake",
                                    value: function(t) {
                                        this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.maxPayload = t.maxPayload, this.onOpen(), "closed" !== this.readyState && this.resetPingTimeout()
                                    }
                                }, {
                                    key: "resetPingTimeout",
                                    value: function() {
                                        var t = this;
                                        this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(function() {
                                            t.onClose("ping timeout")
                                        }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref()
                                    }
                                }, {
                                    key: "onDrain",
                                    value: function() {
                                        this.writeBuffer.splice(0, this.prevBufferLen), (this.prevBufferLen = 0) === this.writeBuffer.length ? this.emitReserved("drain") : this.flush()
                                    }
                                }, {
                                    key: "flush",
                                    value: function() {
                                        var t;
                                        "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (t = this.getWritablePackets(), this.transport.send(t), this.prevBufferLen = t.length, this.emitReserved("flush"))
                                    }
                                }, {
                                    key: "getWritablePackets",
                                    value: function() {
                                        if (!(this.maxPayload && "polling" === this.transport.name && 1 < this.writeBuffer.length)) return this.writeBuffer;
                                        for (var t = 1, i = 0; i < this.writeBuffer.length; i++) {
                                            var n = this.writeBuffer[i].data;
                                            if (n && (t += "string" == typeof n ? function(t) {
                                                    for (var i, n = 0, e = 0, s = t.length; e < s; e++)(i = t.charCodeAt(e)) < 128 ? n += 1 : i < 2048 ? n += 2 : i < 55296 || 57344 <= i ? n += 3 : (e++, n += 4);
                                                    return n
                                                }(n) : Math.ceil(1.33 * (n.byteLength || n.size))), 0 < i && t > this.maxPayload) return this.writeBuffer.slice(0, i);
                                            t += 2
                                        }
                                        return this.writeBuffer
                                    }
                                }, {
                                    key: "write",
                                    value: function(t, i, n) {
                                        return this.sendPacket("message", t, i, n), this
                                    }
                                }, {
                                    key: "send",
                                    value: function(t, i, n) {
                                        return this.sendPacket("message", t, i, n), this
                                    }
                                }, {
                                    key: "sendPacket",
                                    value: function(t, i, n, e) {
                                        "function" == typeof i && (e = i, i = void 0), "function" == typeof n && (e = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState && ((n = n || {}).compress = !1 !== n.compress, this.emitReserved("packetCreate", n = {
                                            type: t,
                                            data: i,
                                            options: n
                                        }), this.writeBuffer.push(n), e && this.once("flush", e), this.flush())
                                    }
                                }, {
                                    key: "close",
                                    value: function() {
                                        function t() {
                                            n.off("upgrade", t), n.off("upgradeError", t), e()
                                        }

                                        function i() {
                                            n.once("upgrade", t), n.once("upgradeError", t)
                                        }
                                        var n = this,
                                            e = function() {
                                                n.onClose("forced close"), n.transport.close()
                                            };
                                        return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", function() {
                                            (n.upgrading ? i : e)()
                                        }) : (this.upgrading ? i : e)()), this
                                    }
                                }, {
                                    key: "onError",
                                    value: function(t) {
                                        l.priorWebsocketSuccess = !1, this.emitReserved("error", t), this.onClose("transport error", t)
                                    }
                                }, {
                                    key: "onClose",
                                    value: function(t, i) {
                                        "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), "function" == typeof removeEventListener && removeEventListener("offline", this.offlineEventListener, !1), this.readyState = "closed", this.id = null, this.emitReserved("close", t, i), this.writeBuffer = [], this.prevBufferLen = 0)
                                    }
                                }, {
                                    key: "filterUpgrades",
                                    value: function(t) {
                                        for (var i = [], n = 0, e = t.length; n < e; n++) ~this.transports.indexOf(t[n]) && i.push(t[n]);
                                        return i
                                    }
                                }]), l
                            }();
                            H.protocol = 4;
                            var G, K = "function" == typeof ArrayBuffer,
                                Z = Object.prototype.toString,
                                Y = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Z.call(Blob),
                                X = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === Z.call(File);

                            function Q(t) {
                                return K && (t instanceof ArrayBuffer || (i = t, "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(i) : i.buffer instanceof ArrayBuffer)) || Y && t instanceof Blob || X && t instanceof File;
                                var i
                            }(tt = G = {})[tt.CONNECT = 0] = "CONNECT", tt[tt.DISCONNECT = 1] = "DISCONNECT", tt[tt.EVENT = 2] = "EVENT", tt[tt.ACK = 3] = "ACK", tt[tt.CONNECT_ERROR = 4] = "CONNECT_ERROR", tt[tt.BINARY_EVENT = 5] = "BINARY_EVENT", tt[tt.BINARY_ACK = 6] = "BINARY_ACK";
                            var Z = function() {
                                    function t() {}
                                    return c(t, [{
                                        key: "encode",
                                        value: function(t) {
                                            return t.type !== G.EVENT && t.type !== G.ACK || ! function t(i, n) {
                                                if (!i || "object" !== o(i)) return !1;
                                                if (Array.isArray(i)) {
                                                    for (var e = 0, s = i.length; e < s; e++)
                                                        if (t(i[e])) return !0;
                                                    return !1
                                                }
                                                if (Q(i)) return !0;
                                                if (i.toJSON && "function" == typeof i.toJSON && 1 === arguments.length) return t(i.toJSON(), !0);
                                                for (var c in i)
                                                    if (Object.prototype.hasOwnProperty.call(i, c) && t(i[c])) return !0;
                                                return !1
                                            }(t) ? [this.encodeAsString(t)] : (t.type = t.type === G.EVENT ? G.BINARY_EVENT : G.BINARY_ACK, this.encodeAsBinary(t))
                                        }
                                    }, {
                                        key: "encodeAsString",
                                        value: function(t) {
                                            var i = "" + t.type;
                                            return t.type !== G.BINARY_EVENT && t.type !== G.BINARY_ACK || (i += t.attachments + "-"), t.nsp && "/" !== t.nsp && (i += t.nsp + ","), null != t.id && (i += t.id), null != t.data && (i += JSON.stringify(t.data)), i
                                        }
                                    }, {
                                        key: "encodeAsBinary",
                                        value: function(t) {
                                            var i, n = (n = (i = t).data, i.data = function t(i, n) {
                                                    if (!i) return i;
                                                    if (Q(i)) {
                                                        var e = {
                                                            ks: !0,
                                                            num: n.length
                                                        };
                                                        return n.push(i), e
                                                    }
                                                    if (Array.isArray(i)) {
                                                        for (var s = new Array(i.length), c = 0; c < i.length; c++) s[c] = t(i[c], n);
                                                        return s
                                                    }
                                                    if ("object" !== o(i) || i instanceof Date) return i;
                                                    var a, r = {};
                                                    for (a in i) i.hasOwnProperty(a) && (r[a] = t(i[a], n));
                                                    return r
                                                }(n, n = []), i.attachments = n.length, {
                                                    packet: i,
                                                    buffers: n
                                                }),
                                                t = this.encodeAsString(n.packet);
                                            return (n = n.buffers).unshift(t), n
                                        }
                                    }]), t
                                }(),
                                tt = function(t) {
                                    a(r, E);
                                    var i = d(r);

                                    function r() {
                                        return i.call(this)
                                    }
                                    return c(r, [{
                                        key: "add",
                                        value: function(t) {
                                            var i;
                                            if ("string" == typeof t)(i = this.decodeString(t)).type === G.BINARY_EVENT || i.type === G.BINARY_ACK ? (this.reconstructor = new it(i), 0 === i.attachments && v(h(r.prototype), "emitReserved", this).call(this, "decoded", i)) : v(h(r.prototype), "emitReserved", this).call(this, "decoded", i);
                                            else {
                                                if (!Q(t) && !t.base64) throw new Error("Unknown type: " + t);
                                                if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                                                (i = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, v(h(r.prototype), "emitReserved", this).call(this, "decoded", i))
                                            }
                                        }
                                    }, {
                                        key: "decodeString",
                                        value: function(t) {
                                            var i = 0,
                                                n = {
                                                    type: Number(t.charAt(0))
                                                };
                                            if (void 0 === G[n.type]) throw new Error("unknown packet type " + n.type);
                                            if (n.type === G.BINARY_EVENT || n.type === G.BINARY_ACK) {
                                                for (var e = i + 1;
                                                    "-" !== t.charAt(++i) && i != t.length;);
                                                if ((e = t.substring(e, i)) != Number(e) || "-" !== t.charAt(i)) throw new Error("Illegal attachments");
                                                n.attachments = Number(e)
                                            }
                                            if ("/" === t.charAt(i + 1)) {
                                                for (var s = i + 1; ++i && "," !== t.charAt(i) && i !== t.length;);
                                                n.nsp = t.substring(s, i)
                                            } else n.nsp = "/";
                                            if ("" !== (s = t.charAt(i + 1)) && Number(s) == s) {
                                                for (var c = i + 1; ++i;) {
                                                    var a = t.charAt(i);
                                                    if (null == a || Number(a) != a) {
                                                        --i;
                                                        break
                                                    }
                                                    if (i === t.length) break
                                                }
                                                n.id = Number(t.substring(c, i + 1))
                                            }
                                            if (t.charAt(++i)) {
                                                if (c = function(t) {
                                                        try {
                                                            return JSON.parse(t)
                                                        } catch (t) {
                                                            return !1
                                                        }
                                                    }(t.substr(i)), !r.isPayloadValid(n.type, c)) throw new Error("invalid payload");
                                                n.data = c
                                            }
                                            return n
                                        }
                                    }, {
                                        key: "destroy",
                                        value: function() {
                                            this.reconstructor && this.reconstructor.finishedReconstruction()
                                        }
                                    }], [{
                                        key: "isPayloadValid",
                                        value: function(t, i) {
                                            switch (t) {
                                                case G.CONNECT:
                                                    return "object" === o(i);
                                                case G.DISCONNECT:
                                                    return void 0 === i;
                                                case G.CONNECT_ERROR:
                                                    return "string" == typeof i || "object" === o(i);
                                                case G.EVENT:
                                                case G.BINARY_EVENT:
                                                    return Array.isArray(i) && 0 < i.length;
                                                case G.ACK:
                                                case G.BINARY_ACK:
                                                    return Array.isArray(i)
                                            }
                                        }
                                    }]), r
                                }(),
                                it = function() {
                                    function t(t) {
                                        this.packet = t, this.buffers = [], this.reconPack = t
                                    }
                                    return c(t, [{
                                        key: "takeBinaryData",
                                        value: function(t) {
                                            return this.buffers.push(t), this.buffers.length !== this.reconPack.attachments ? null : (i = this.reconPack, n = this.buffers, i.data = function t(i, n) {
                                                if (!i) return i;
                                                if (i && i.ks) return n[i.num];
                                                if (Array.isArray(i))
                                                    for (var e = 0; e < i.length; e++) i[e] = t(i[e], n);
                                                else if ("object" === o(i))
                                                    for (var s in i) i.hasOwnProperty(s) && (i[s] = t(i[s], n));
                                                return i
                                            }(i.data, n), i.attachments = void 0, t = i, this.finishedReconstruction(), t);
                                            var i, n
                                        }
                                    }, {
                                        key: "finishedReconstruction",
                                        value: function() {
                                            this.reconPack = null, this.buffers = []
                                        }
                                    }]), t
                                }(),
                                nt = Object.freeze({
                                    __proto__: null,
                                    protocol: 5,
                                    get PacketType() {
                                        return G
                                    },
                                    Encoder: Z,
                                    Decoder: tt
                                });

                            function et(t, i, n) {
                                return t.on(i, n),
                                    function() {
                                        t.off(i, n)
                                    }
                            }
                            var st = Object.freeze({
                                    connect: 1,
                                    connect_error: 1,
                                    disconnect: 1,
                                    disconnecting: 1,
                                    newListener: 1,
                                    removeListener: 1
                                }),
                                ct = function(t) {
                                    a(e, E);
                                    var s = d(e);

                                    function e(t, i, n) {
                                        var e = s.call(this);
                                        return e.connected = !1, e.disconnected = !0, e.receiveBuffer = [], e.sendBuffer = [], e.ids = 0, e.acks = {}, e.flags = {}, e.io = t, e.nsp = i, n && n.auth && (e.auth = n.auth), e.io._autoConnect && e.open(), e
                                    }
                                    return c(e, [{
                                        key: "subEvents",
                                        value: function() {
                                            var t;
                                            this.subs || (t = this.io, this.subs = [et(t, "open", this.onopen.bind(this)), et(t, "packet", this.onpacket.bind(this)), et(t, "error", this.onerror.bind(this)), et(t, "close", this.onclose.bind(this))])
                                        }
                                    }, {
                                        key: "active",
                                        get: function() {
                                            return !!this.subs
                                        }
                                    }, {
                                        key: "connect",
                                        value: function() {
                                            return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this
                                        }
                                    }, {
                                        key: "open",
                                        value: function() {
                                            return this.connect()
                                        }
                                    }, {
                                        key: "send",
                                        value: function() {
                                            for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                                            return i.unshift("message"), this.emit.apply(this, i), this
                                        }
                                    }, {
                                        key: "emit",
                                        value: function(t) {
                                            if (st.hasOwnProperty(t)) throw new Error('"' + t + '" is a reserved event name');
                                            for (var i = arguments.length, n = new Array(1 < i ? i - 1 : 0), e = 1; e < i; e++) n[e - 1] = arguments[e];
                                            n.unshift(t);
                                            var s = {
                                                type: G.EVENT,
                                                data: n,
                                                options: {}
                                            };
                                            s.options.compress = !1 !== this.flags.compress, "function" == typeof n[n.length - 1] && (c = this.ids++, t = n.pop(), this._registerAckCallback(c, t), s.id = c);
                                            var c = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
                                            return (!this.flags.volatile || c && this.connected) && (this.connected ? this.packet(s) : this.sendBuffer.push(s)), this.flags = {}, this
                                        }
                                    }, {
                                        key: "_registerAckCallback",
                                        value: function(i, e) {
                                            var s, c = this,
                                                t = this.flags.timeout;
                                            void 0 !== t ? (s = this.io.setTimeoutFn(function() {
                                                delete c.acks[i];
                                                for (var t = 0; t < c.sendBuffer.length; t++) c.sendBuffer[t].id === i && c.sendBuffer.splice(t, 1);
                                                e.call(c, new Error("operation has timed out"))
                                            }, t), this.acks[i] = function() {
                                                c.io.clearTimeoutFn(s);
                                                for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                                                e.apply(c, [null].concat(i))
                                            }) : this.acks[i] = e
                                        }
                                    }, {
                                        key: "packet",
                                        value: function(t) {
                                            t.nsp = this.nsp, this.io._packet(t)
                                        }
                                    }, {
                                        key: "onopen",
                                        value: function() {
                                            var i = this;
                                            "function" == typeof this.auth ? this.auth(function(t) {
                                                i.packet({
                                                    type: G.CONNECT,
                                                    data: t
                                                })
                                            }) : this.packet({
                                                type: G.CONNECT,
                                                data: this.auth
                                            })
                                        }
                                    }, {
                                        key: "onerror",
                                        value: function(t) {
                                            this.connected || this.emitReserved("connect_error", t)
                                        }
                                    }, {
                                        key: "onclose",
                                        value: function(t) {
                                            this.connected = !1, this.disconnected = !0, delete this.id, this.emitReserved("disconnect", t)
                                        }
                                    }, {
                                        key: "onpacket",
                                        value: function(t) {
                                            if (t.nsp === this.nsp) switch (t.type) {
                                                case G.CONNECT:
                                                    t.data && t.data.sid ? (i = t.data.sid, this.onconnect(i)) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                                                    break;
                                                case G.EVENT:
                                                case G.BINARY_EVENT:
                                                    this.onevent(t);
                                                    break;
                                                case G.ACK:
                                                case G.BINARY_ACK:
                                                    this.onack(t);
                                                    break;
                                                case G.DISCONNECT:
                                                    this.ondisconnect();
                                                    break;
                                                case G.CONNECT_ERROR:
                                                    this.destroy();
                                                    var i = new Error(t.data.message);
                                                    i.data = t.data.data, this.emitReserved("connect_error", i)
                                            }
                                        }
                                    }, {
                                        key: "onevent",
                                        value: function(t) {
                                            var i = t.data || [];
                                            null != t.id && i.push(this.ack(t.id)), this.connected ? this.emitEvent(i) : this.receiveBuffer.push(Object.freeze(i))
                                        }
                                    }, {
                                        key: "emitEvent",
                                        value: function(t) {
                                            if (this._anyListeners && this._anyListeners.length) {
                                                var i, n = function(t, i) {
                                                    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                                    if (!n) {
                                                        if (Array.isArray(t) || (n = function(t, i) {
                                                                if (t) {
                                                                    if ("string" == typeof t) return p(t, void 0);
                                                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                                                    return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(t, void 0) : void 0
                                                                }
                                                            }(t)) || i && t && "number" == typeof t.length) {
                                                            n && (t = n);
                                                            var e = 0;
                                                            return {
                                                                s: i = function() {},
                                                                n: function() {
                                                                    return e >= t.length ? {
                                                                        done: !0
                                                                    } : {
                                                                        done: !1,
                                                                        value: t[e++]
                                                                    }
                                                                },
                                                                e: function(t) {
                                                                    throw t
                                                                },
                                                                f: i
                                                            }
                                                        }
                                                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                                    }
                                                    var s, c = !0,
                                                        a = !1;
                                                    return {
                                                        s: function() {
                                                            n = n.call(t)
                                                        },
                                                        n: function() {
                                                            var t = n.next();
                                                            return c = t.done, t
                                                        },
                                                        e: function(t) {
                                                            a = !0, s = t
                                                        },
                                                        f: function() {
                                                            try {
                                                                c || null == n.return || n.return()
                                                            } finally {
                                                                if (a) throw s
                                                            }
                                                        }
                                                    }
                                                }(this._anyListeners.slice());
                                                try {
                                                    for (n.s(); !(i = n.n()).done;) i.value.apply(this, t)
                                                } catch (t) {
                                                    n.e(t)
                                                } finally {
                                                    n.f()
                                                }
                                            }
                                            v(h(e.prototype), "emit", this).apply(this, t)
                                        }
                                    }, {
                                        key: "ack",
                                        value: function(e) {
                                            var s = this,
                                                c = !1;
                                            return function() {
                                                if (!c) {
                                                    c = !0;
                                                    for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                                                    s.packet({
                                                        type: G.ACK,
                                                        id: e,
                                                        data: i
                                                    })
                                                }
                                            }
                                        }
                                    }, {
                                        key: "onack",
                                        value: function(t) {
                                            var i = this.acks[t.id];
                                            "function" == typeof i && (i.apply(this, t.data), delete this.acks[t.id])
                                        }
                                    }, {
                                        key: "onconnect",
                                        value: function(t) {
                                            this.id = t, this.connected = !0, this.disconnected = !1, this.emitBuffered(), this.emitReserved("connect")
                                        }
                                    }, {
                                        key: "emitBuffered",
                                        value: function() {
                                            var i = this;
                                            this.receiveBuffer.forEach(function(t) {
                                                return i.emitEvent(t)
                                            }), this.receiveBuffer = [], this.sendBuffer.forEach(function(t) {
                                                return i.packet(t)
                                            }), this.sendBuffer = []
                                        }
                                    }, {
                                        key: "ondisconnect",
                                        value: function() {
                                            this.destroy(), this.onclose("io server disconnect")
                                        }
                                    }, {
                                        key: "destroy",
                                        value: function() {
                                            this.subs && (this.subs.forEach(function(t) {
                                                return t()
                                            }), this.subs = void 0), this.io._destroy(this)
                                        }
                                    }, {
                                        key: "disconnect",
                                        value: function() {
                                            return this.connected && this.packet({
                                                type: G.DISCONNECT
                                            }), this.destroy(), this.connected && this.onclose("io client disconnect"), this
                                        }
                                    }, {
                                        key: "close",
                                        value: function() {
                                            return this.disconnect()
                                        }
                                    }, {
                                        key: "compress",
                                        value: function(t) {
                                            return this.flags.compress = t, this
                                        }
                                    }, {
                                        key: "volatile",
                                        get: function() {
                                            return this.flags.volatile = !0, this
                                        }
                                    }, {
                                        key: "timeout",
                                        value: function(t) {
                                            return this.flags.timeout = t, this
                                        }
                                    }, {
                                        key: "onAny",
                                        value: function(t) {
                                            return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this
                                        }
                                    }, {
                                        key: "prependAny",
                                        value: function(t) {
                                            return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this
                                        }
                                    }, {
                                        key: "offAny",
                                        value: function(t) {
                                            if (!this._anyListeners) return this;
                                            if (t) {
                                                for (var i = this._anyListeners, n = 0; n < i.length; n++)
                                                    if (t === i[n]) return i.splice(n, 1), this
                                            } else this._anyListeners = [];
                                            return this
                                        }
                                    }, {
                                        key: "listenersAny",
                                        value: function() {
                                            return this._anyListeners || []
                                        }
                                    }]), e
                                }(),
                                at = rt;

                            function rt(t) {
                                this.ms = (t = t || {}).min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = 0 < t.jitter && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0
                            }
                            rt.prototype.duration = function() {
                                var t, i, n = this.ms * Math.pow(this.factor, this.attempts++);
                                return this.jitter && (t = Math.random(), i = Math.floor(t * this.jitter * n), n = 0 == (1 & Math.floor(10 * t)) ? n - i : n + i), 0 | Math.min(n, this.max)
                            }, rt.prototype.reset = function() {
                                this.attempts = 0
                            }, rt.prototype.setMin = function(t) {
                                this.ms = t
                            }, rt.prototype.setMax = function(t) {
                                this.max = t
                            }, rt.prototype.setJitter = function(t) {
                                this.jitter = t
                            };
                            var ot = function(t) {
                                    a(i, E);
                                    var s = d(i);

                                    function i(t, i) {
                                        var n, e = s.call(this);
                                        return e.nsps = {}, e.subs = [], t && "object" === o(t) && (i = t, t = void 0), (i = i || {}).path = i.path || "/socket.io", e.opts = i, A(f(e), i), e.reconnection(!1 !== i.reconnection), e.reconnectionAttempts(i.reconnectionAttempts || 1 / 0), e.reconnectionDelay(i.reconnectionDelay || 1e3), e.reconnectionDelayMax(i.reconnectionDelayMax || 5e3), e.randomizationFactor(null !== (n = i.randomizationFactor) && void 0 !== n ? n : .5), e.backoff = new at({
                                            min: e.reconnectionDelay(),
                                            max: e.reconnectionDelayMax(),
                                            jitter: e.randomizationFactor()
                                        }), e.timeout(null == i.timeout ? 2e4 : i.timeout), e._readyState = "closed", e.uri = t, t = i.parser || nt, e.encoder = new t.Encoder, e.decoder = new t.Decoder, e._autoConnect = !1 !== i.autoConnect, e._autoConnect && e.open(), e
                                    }
                                    return c(i, [{
                                        key: "reconnection",
                                        value: function(t) {
                                            return arguments.length ? (this.xs = !!t, this) : this.xs
                                        }
                                    }, {
                                        key: "reconnectionAttempts",
                                        value: function(t) {
                                            return void 0 === t ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this)
                                        }
                                    }, {
                                        key: "reconnectionDelay",
                                        value: function(t) {
                                            var i;
                                            return void 0 === t ? this._reconnectionDelay : (this._reconnectionDelay = t, null !== (i = this.backoff) && void 0 !== i && i.setMin(t), this)
                                        }
                                    }, {
                                        key: "randomizationFactor",
                                        value: function(t) {
                                            var i;
                                            return void 0 === t ? this._randomizationFactor : (this._randomizationFactor = t, null !== (i = this.backoff) && void 0 !== i && i.setJitter(t), this)
                                        }
                                    }, {
                                        key: "reconnectionDelayMax",
                                        value: function(t) {
                                            var i;
                                            return void 0 === t ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, null !== (i = this.backoff) && void 0 !== i && i.setMax(t), this)
                                        }
                                    }, {
                                        key: "timeout",
                                        value: function(t) {
                                            return arguments.length ? (this.Fs = t, this) : this.Fs
                                        }
                                    }, {
                                        key: "maybeReconnectOnOpen",
                                        value: function() {
                                            !this._reconnecting && this.xs && 0 === this.backoff.attempts && this.reconnect()
                                        }
                                    }, {
                                        key: "open",
                                        value: function(i) {
                                            var n = this;
                                            if (~this._readyState.indexOf("open")) return this;
                                            this.engine = new H(this.uri, this.opts);
                                            var t = this.engine,
                                                e = this;
                                            this._readyState = "opening", this.skipReconnect = !1;
                                            var s, c, a = et(t, "open", function() {
                                                    e.onopen(), i && i()
                                                }),
                                                r = et(t, "error", function(t) {
                                                    e.cleanup(), e._readyState = "closed", n.emitReserved("error", t), i ? i(t) : e.maybeReconnectOnOpen()
                                                });
                                            return !1 !== this.Fs && (0 === (s = this.Fs) && a(), c = this.setTimeoutFn(function() {
                                                a(), t.close(), t.emit("error", new Error("timeout"))
                                            }, s), this.opts.autoUnref && c.unref(), this.subs.push(function() {
                                                clearTimeout(c)
                                            })), this.subs.push(a), this.subs.push(r), this
                                        }
                                    }, {
                                        key: "connect",
                                        value: function(t) {
                                            return this.open(t)
                                        }
                                    }, {
                                        key: "onopen",
                                        value: function() {
                                            this.cleanup(), this._readyState = "open", this.emitReserved("open");
                                            var t = this.engine;
                                            this.subs.push(et(t, "ping", this.onping.bind(this)), et(t, "data", this.ondata.bind(this)), et(t, "error", this.onerror.bind(this)), et(t, "close", this.onclose.bind(this)), et(this.decoder, "decoded", this.ondecoded.bind(this)))
                                        }
                                    }, {
                                        key: "onping",
                                        value: function() {
                                            this.emitReserved("ping")
                                        }
                                    }, {
                                        key: "ondata",
                                        value: function(t) {
                                            this.decoder.add(t)
                                        }
                                    }, {
                                        key: "ondecoded",
                                        value: function(t) {
                                            this.emitReserved("packet", t)
                                        }
                                    }, {
                                        key: "onerror",
                                        value: function(t) {
                                            this.emitReserved("error", t)
                                        }
                                    }, {
                                        key: "socket",
                                        value: function(t, i) {
                                            var n;
                                            return (n = this.nsps[t]) || (n = new ct(this, t, i), this.nsps[t] = n), n
                                        }
                                    }, {
                                        key: "_destroy",
                                        value: function(t) {
                                            for (var i = 0, n = Object.keys(this.nsps); i < n.length; i++) {
                                                var e = n[i];
                                                if (this.nsps[e].active) return
                                            }
                                            this._close()
                                        }
                                    }, {
                                        key: "_packet",
                                        value: function(t) {
                                            for (var i = this.encoder.encode(t), n = 0; n < i.length; n++) this.engine.write(i[n], t.options)
                                        }
                                    }, {
                                        key: "cleanup",
                                        value: function() {
                                            this.subs.forEach(function(t) {
                                                return t()
                                            }), this.subs.length = 0, this.decoder.destroy()
                                        }
                                    }, {
                                        key: "_close",
                                        value: function() {
                                            this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close()
                                        }
                                    }, {
                                        key: "disconnect",
                                        value: function() {
                                            return this._close()
                                        }
                                    }, {
                                        key: "onclose",
                                        value: function(t) {
                                            this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t), this.xs && !this.skipReconnect && this.reconnect()
                                        }
                                    }, {
                                        key: "reconnect",
                                        value: function() {
                                            var i = this;
                                            if (this._reconnecting || this.skipReconnect) return this;
                                            var t, n, e = this;
                                            this.backoff.attempts >= this._reconnectionAttempts ? (this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1) : (t = this.backoff.duration(), this._reconnecting = !0, n = this.setTimeoutFn(function() {
                                                e.skipReconnect || (i.emitReserved("reconnect_attempt", e.backoff.attempts), e.skipReconnect || e.open(function(t) {
                                                    t ? (e._reconnecting = !1, e.reconnect(), i.emitReserved("reconnect_error", t)) : e.onreconnect()
                                                }))
                                            }, t), this.opts.autoUnref && n.unref(), this.subs.push(function() {
                                                clearTimeout(n)
                                            }))
                                        }
                                    }, {
                                        key: "onreconnect",
                                        value: function() {
                                            var t = this.backoff.attempts;
                                            this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t)
                                        }
                                    }]), i
                                }(),
                                ht = {};

                            function ut(t, i) {
                                "object" === o(t) && (i = t, t = void 0);
                                var n = function(t) {
                                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                                            n = t,
                                            e = (2 < arguments.length ? arguments[2] : void 0) || "undefined" != typeof location && location;
                                        return "string" == typeof(t = null == t ? e.protocol + "//" + e.host : t) && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t), n = function(t) {
                                            var i = t,
                                                n = t.indexOf("["),
                                                e = t.indexOf("]"); - 1 != n && -1 != e && (t = t.substring(0, n) + t.substring(n, e).replace(/:/g, ";") + t.substring(e, t.length));
                                            for (var s, c = y.exec(t || ""), a = {}, r = 14; r--;) a[m[r]] = c[r] || "";
                                            return -1 != n && -1 != e && (a.source = i, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a.pathNames = (e = (n = a.path).replace(/\/{2,9}/g, "/").split("/"), "/" != n.substr(0, 1) && 0 !== n.length || e.splice(0, 1), "/" == n.substr(n.length - 1, 1) && e.splice(e.length - 1, 1), e), a.queryKey = (i = a.query, s = {}, i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(t, i, n) {
                                                i && (s[i] = n)
                                            }), s), a
                                        }(t = /^(https?|wss?):\/\//.test(t) ? t : e.protocol + "//" + t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/", t = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host, n.id = n.protocol + "://" + t + ":" + n.port + i, n.href = n.protocol + "://" + t + (e && e.port === n.port ? "" : ":" + n.port), n
                                    }(t, (i = i || {}).path || "/socket.io"),
                                    e = n.source,
                                    s = n.id,
                                    t = n.path,
                                    t = ht[s] && t in ht[s].nsps,
                                    s = i.forceNew || i["force new connection"] || !1 === i.multiplex || t ? new ot(e, i) : (ht[s] || (ht[s] = new ot(e, i)), ht[s]);
                                return n.query && !i.query && (i.query = n.queryKey), s.socket(n.path, i)
                            }
                            return s(ut, {
                                Manager: ot,
                                Socket: ct,
                                io: ut,
                                connect: ut
                            }), ut
                        }, "object" == typeof __crisp_void_exports && "undefined" != typeof module ? module.exports = O() : "function" == typeof __crisp_void_define && define.amd ? define(O) : (D = "undefined" != typeof __crisp_void_global_this ? globalThis : D || self).io = O(),
                        function(t, i) {
                            "use strict";
                            "function" == typeof __crisp_void_define && define.amd ? define(["exports"], i) : "object" == typeof __crisp_void_exports ? i(exports) : i(t.PubSub = {})
                        }("object" == typeof r ? r : this, function(n) {
                            "use strict";
                            var o = {},
                                e = -1;

                            function r(t) {
                                for (var i in t)
                                    if (t.hasOwnProperty(i)) return !0;
                                return !1
                            }

                            function h(t, i, n) {
                                try {
                                    t(i, n)
                                } catch (t) {
                                    setTimeout((e = t, function() {
                                        throw e
                                    }), 0)
                                }
                                var e
                            }

                            function u(t, i, n) {
                                t(i, n)
                            }

                            function l(t, i, n, e) {
                                var s, c = o[i],
                                    a = e ? u : h;
                                if (o.hasOwnProperty(i))
                                    for (s in c) c.hasOwnProperty(s) && a(c[s], t, n)
                            }

                            function s(t, i, n, e) {
                                var s, c, a, e = (c = i, a = e, function() {
                                    var t = String(s),
                                        i = t.lastIndexOf(".");
                                    for (l(s, s, c, a); - 1 !== i;) i = (t = t.substr(0, i)).lastIndexOf("."), l(s, t, c, a)
                                });
                                return !! function(t) {
                                    for (var i = String(s), n = Boolean(o.hasOwnProperty(i) && r(o[i])), e = i.lastIndexOf("."); !n && -1 !== e;) e = (i = i.substr(0, e)).lastIndexOf("."), n = Boolean(o.hasOwnProperty(i) && r(o[i]));
                                    return n
                                }(s = t) && (!0 === n ? e() : setTimeout(e, 0), !0)
                            }
                            n.publish = function(t, i) {
                                return s(t, i, !1, n.immediateExceptions)
                            }, n.publishSync = function(t, i) {
                                return s(t, i, !0, n.immediateExceptions)
                            }, n.subscribe = function(t, i) {
                                if ("function" != typeof i) return !1;
                                o.hasOwnProperty(t) || (o[t] = {});
                                var n = "uid_" + String(++e);
                                return o[t][n] = i, n
                            }, n.clearAllSubscriptions = function() {
                                o = {}
                            }, n.clearSubscriptions = function(t) {
                                for (var i in o) o.hasOwnProperty(i) && 0 === i.indexOf(t) && delete o[i]
                            }, n.unsubscribe = function(t) {
                                var i, n, e, s = "string" == typeof t && o.hasOwnProperty(t),
                                    c = !s && "string" == typeof t,
                                    a = "function" == typeof t,
                                    r = !1;
                                if (!s) {
                                    for (i in o)
                                        if (o.hasOwnProperty(i)) {
                                            if (n = o[i], c && n[t]) {
                                                delete n[t], r = t;
                                                break
                                            }
                                            if (a)
                                                for (e in n) n.hasOwnProperty(e) && n[e] === t && (delete n[e], r = !0)
                                        }
                                    return r
                                }
                                delete o[t]
                            }
                        }),
                        function(t, a) {
                            "use strict";

                            function i(t) {
                                function c(t, i, n) {
                                    return 1 === arguments.length ? c.get(t) : c.set(t, i, n)
                                }
                                return c.js = t.document, c._cacheKeyPrefix = "cookey.", c._maxExpireDate = new Date("Fri, 31 Dec 9999 23:59:59 UTC"), c.defaults = {
                                    path: "/",
                                    secure: !1,
                                    sameSite: a
                                }, c.get = function(t) {
                                    return c._cachedDocumentCookie !== c.js.cookie && c._renewCache(), (t = c.Es[c._cacheKeyPrefix + t]) === a ? a : decodeURIComponent(t)
                                }, c.set = function(t, i, n) {
                                    return (n = c._getExtendedOptions(n)).expires = c._getExpiresDate(i === a ? -1 : n.expires), c.js.cookie = c._generateCookieString(t, i, n), c
                                }, c.expire = function(t, i) {
                                    return c.set(t, a, i)
                                }, c._getExtendedOptions = function(t) {
                                    return {
                                        path: t && t.path || c.defaults.path,
                                        domain: t && t.domain || c.defaults.domain,
                                        expires: t && t.expires || c.defaults.expires,
                                        secure: (t && t.secure !== a ? t : c.defaults).secure,
                                        sameSite: t && t.sameSite || c.defaults.sameSite
                                    }
                                }, c._isValidDate = function(t) {
                                    return "[object Date]" === Object.prototype.toString.call(t) && !isNaN(t.getTime())
                                }, c._getExpiresDate = function(t, i) {
                                    if (i = i || new Date, "number" == typeof t ? t = t === 1 / 0 ? c._maxExpireDate : new Date(i.getTime() + 1e3 * t) : "string" == typeof t && (t = new Date(t)), t && !c._isValidDate(t)) throw new Error("Invalid expires");
                                    return t
                                }, c._generateSameSiteString = function(t) {
                                    switch (t && t.sameSite || c.defaults.sameSite) {
                                        case a:
                                            return "";
                                        case "None":
                                        case "none":
                                            return ";sameSite=None";
                                        case "Lax":
                                        case "lax":
                                            return ";sameSite=Lax";
                                        case "Strict":
                                        case "strict":
                                            return ";sameSite=Strict";
                                        default:
                                            throw new TypeError("Invalid sameSite")
                                    }
                                }, c._generateCookieString = function(t, i, n) {
                                    return i = (t = (t = t.replace(/[^#$&+\^`|]/g, encodeURIComponent)).replace(/\(/g, "%28").replace(/\)/g, "%29")) + "=" + (i + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent), i += (n = n || {}).path ? ";path=" + n.path : "", i += n.domain ? ";domain=" + n.domain : "", i += n.expires ? ";expires=" + n.expires.toUTCString() : "", (i += n.secure ? ";secure" : "") + c._generateSameSiteString(n)
                                }, c._getCacheFromString = function(t) {
                                    for (var i = {}, n = t ? t.split("; ") : [], e = 0; e < n.length; e++) {
                                        var s = c._getKeyValuePairFromCookieString(n[e]);
                                        i[c._cacheKeyPrefix + s.key] === a && (i[c._cacheKeyPrefix + s.key] = s.value)
                                    }
                                    return i
                                }, c._getKeyValuePairFromCookieString = function(t) {
                                    var i, n = (n = t.indexOf("=")) < 0 ? t.length : n,
                                        e = t.substr(0, n);
                                    try {
                                        i = decodeURIComponent(e)
                                    } catch (t) {}
                                    return {
                                        key: i,
                                        value: t.substr(n + 1)
                                    }
                                }, c._renewCache = function() {
                                    c.Es = c._getCacheFromString(c.js.cookie), c._cachedDocumentCookie = c.js.cookie
                                }, c
                            }
                            t.Cookies = t && "object" == typeof t.document ? i(t) : i
                        }(r),
                        function() {
                            "use strict";
                            var t = r,
                                l = "invalid",
                                f = "undefined" != typeof ArrayBuffer,
                                o = "0123456789abcdef".split(""),
                                n = [-2147483648, 8388608, 32768, 128],
                                h = [24, 16, 8, 0],
                                y = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                                i = [];

                            function d(t) {
                                t ? (i[0] = i[16] = i[1] = i[2] = i[3] = i[4] = i[5] = i[6] = i[7] = i[8] = i[9] = i[10] = i[11] = i[12] = i[13] = i[14] = i[15] = 0, this.blocks = i) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225, this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0
                            }

                            function e(t, i) {
                                var n = typeof t;
                                if ("string" == n) {
                                    for (var e, s = [], c = t.length, a = 0, r = 0; r < c; ++r)(e = t.charCodeAt(r)) < 128 ? s[a++] = e : (e < 2048 ? s[a++] = 192 | e >> 6 : (e < 55296 || 57344 <= e ? s[a++] = 224 | e >> 12 : (e = 65536 + ((1023 & e) << 10 | 1023 & t.charCodeAt(++r)), s[a++] = 240 | e >> 18, s[a++] = 128 | e >> 12 & 63), s[a++] = 128 | e >> 6 & 63), s[a++] = 128 | 63 & e);
                                    t = s
                                } else {
                                    if ("object" != n) throw new Error(l);
                                    if (null === t) throw new Error(l);
                                    if (f && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                                    else if (!(Array.isArray(t) || f && ArrayBuffer.isView(t))) throw new Error(l)
                                }
                                64 < t.length && (t = new d(!0).update(t).digest());
                                for (var o = [], h = [], r = 0; r < 64; ++r) {
                                    var u = t[r] || 0;
                                    o[r] = 92 ^ u, h[r] = 54 ^ u
                                }
                                d.call(this, i), this.update(h), this.oKeyPad = o, this.inner = !0, this.memory = i
                            }
                            Array.isArray || (Array.isArray = function(t) {
                                return "[object Array]" === Object.prototype.toString.call(t)
                            }), f && !ArrayBuffer.isView && (ArrayBuffer.isView = function(t) {
                                return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
                            }), d.prototype.update = function(t) {
                                if (!this.finalized) {
                                    var i, n = typeof t;
                                    if ("string" != n) {
                                        if ("object" != n) throw new Error(l);
                                        if (null === t) throw new Error(l);
                                        if (f && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                                        else if (!(Array.isArray(t) || f && ArrayBuffer.isView(t))) throw new Error(l);
                                        i = !0
                                    }
                                    for (var e, s, c = 0, a = t.length, r = this.blocks; c < a;) {
                                        if (this.hashed && (this.hashed = !1, r[0] = this.block, r[16] = r[1] = r[2] = r[3] = r[4] = r[5] = r[6] = r[7] = r[8] = r[9] = r[10] = r[11] = r[12] = r[13] = r[14] = r[15] = 0), i)
                                            for (s = this.start; c < a && s < 64; ++c) r[s >> 2] |= t[c] << h[3 & s++];
                                        else
                                            for (s = this.start; c < a && s < 64; ++c)(e = t.charCodeAt(c)) < 128 ? r[s >> 2] |= e << h[3 & s++] : (e < 2048 ? r[s >> 2] |= (192 | e >> 6) << h[3 & s++] : (e < 55296 || 57344 <= e ? r[s >> 2] |= (224 | e >> 12) << h[3 & s++] : (e = 65536 + ((1023 & e) << 10 | 1023 & t.charCodeAt(++c)), r[s >> 2] |= (240 | e >> 18) << h[3 & s++], r[s >> 2] |= (128 | e >> 12 & 63) << h[3 & s++]), r[s >> 2] |= (128 | e >> 6 & 63) << h[3 & s++]), r[s >> 2] |= (128 | 63 & e) << h[3 & s++]);
                                        this.lastByteIndex = s, this.bytes += s - this.start, 64 <= s ? (this.block = r[16], this.start = s - 64, this.hash(), this.hashed = !0) : this.start = s
                                    }
                                    return 4294967295 < this.bytes && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
                                }
                            }, d.prototype.finalize = function() {
                                var t, i;
                                this.finalized || (this.finalized = !0, t = this.blocks, i = this.lastByteIndex, t[16] = this.block, t[i >> 2] |= n[3 & i], this.block = t[16], 56 <= i && (this.hashed || this.hash(), t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.hBytes << 3 | this.bytes >>> 29, t[15] = this.bytes << 3, this.hash())
                            }, d.prototype.hash = function() {
                                for (var t, i, n, e, s, c, a = this.h0, r = this.h1, o = this.h2, h = this.h3, u = this.h4, l = this.h5, f = this.h6, d = this.h7, v = this.blocks, p = 16; p < 64; ++p) t = ((i = v[p - 15]) >>> 7 | i << 25) ^ (i >>> 18 | i << 14) ^ i >>> 3, i = v[p - 2], v[p] = v[p - 16] + t + v[p - 7] + ((i >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10) << 0;
                                for (c = r & o, p = 0; p < 64; p += 4) this.first ? (d = (i = v[0] - 210244248) - 1521486534 << 0, h = i + 143694565 << 0, this.first = !(n = 704751109)) : (d = h + (i = d + ((u >>> 6 | u << 26) ^ (u >>> 11 | u << 21) ^ (u >>> 25 | u << 7)) + (u & l ^ ~u & f) + y[p] + v[p]) << 0, h = i + ((t = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + ((n = a & r) ^ a & o ^ c)) << 0), f = o + (i = f + ((d >>> 6 | d << 26) ^ (d >>> 11 | d << 21) ^ (d >>> 25 | d << 7)) + (d & u ^ ~d & l) + y[p + 1] + v[p + 1]) << 0, o = i + ((t = (h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((e = h & a) ^ h & r ^ n)) << 0, l = r + (i = l + ((f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7)) + (f & d ^ ~f & u) + y[p + 2] + v[p + 2]) << 0, r = i + ((t = (o >>> 2 | o << 30) ^ (o >>> 13 | o << 19) ^ (o >>> 22 | o << 10)) + ((s = o & h) ^ o & a ^ e)) << 0, u = a + (i = u + ((l >>> 6 | l << 26) ^ (l >>> 11 | l << 21) ^ (l >>> 25 | l << 7)) + (l & f ^ ~l & d) + y[p + 3] + v[p + 3]) << 0, a = i + ((t = (r >>> 2 | r << 30) ^ (r >>> 13 | r << 19) ^ (r >>> 22 | r << 10)) + ((c = r & o) ^ r & h ^ s)) << 0;
                                this.h0 = this.h0 + a << 0, this.h1 = this.h1 + r << 0, this.h2 = this.h2 + o << 0, this.h3 = this.h3 + h << 0, this.h4 = this.h4 + u << 0, this.h5 = this.h5 + l << 0, this.h6 = this.h6 + f << 0, this.h7 = this.h7 + d << 0
                            }, d.prototype.toString = d.prototype.hex = function() {
                                this.finalize();
                                var t = this.h0,
                                    i = this.h1,
                                    n = this.h2,
                                    e = this.h3,
                                    s = this.h4,
                                    c = this.h5,
                                    a = this.h6,
                                    r = this.h7;
                                return o[t >> 28 & 15] + o[t >> 24 & 15] + o[t >> 20 & 15] + o[t >> 16 & 15] + o[t >> 12 & 15] + o[t >> 8 & 15] + o[t >> 4 & 15] + o[15 & t] + o[i >> 28 & 15] + o[i >> 24 & 15] + o[i >> 20 & 15] + o[i >> 16 & 15] + o[i >> 12 & 15] + o[i >> 8 & 15] + o[i >> 4 & 15] + o[15 & i] + o[n >> 28 & 15] + o[n >> 24 & 15] + o[n >> 20 & 15] + o[n >> 16 & 15] + o[n >> 12 & 15] + o[n >> 8 & 15] + o[n >> 4 & 15] + o[15 & n] + o[e >> 28 & 15] + o[e >> 24 & 15] + o[e >> 20 & 15] + o[e >> 16 & 15] + o[e >> 12 & 15] + o[e >> 8 & 15] + o[e >> 4 & 15] + o[15 & e] + o[s >> 28 & 15] + o[s >> 24 & 15] + o[s >> 20 & 15] + o[s >> 16 & 15] + o[s >> 12 & 15] + o[s >> 8 & 15] + o[s >> 4 & 15] + o[15 & s] + o[c >> 28 & 15] + o[c >> 24 & 15] + o[c >> 20 & 15] + o[c >> 16 & 15] + o[c >> 12 & 15] + o[c >> 8 & 15] + o[c >> 4 & 15] + o[15 & c] + o[a >> 28 & 15] + o[a >> 24 & 15] + o[a >> 20 & 15] + o[a >> 16 & 15] + o[a >> 12 & 15] + o[a >> 8 & 15] + o[a >> 4 & 15] + o[15 & a] + o[r >> 28 & 15] + o[r >> 24 & 15] + o[r >> 20 & 15] + o[r >> 16 & 15] + o[r >> 12 & 15] + o[r >> 8 & 15] + o[r >> 4 & 15] + o[15 & r]
                            }, d.prototype.digest = function() {
                                this.finalize();
                                var t = this.h0,
                                    i = this.h1,
                                    n = this.h2,
                                    e = this.h3,
                                    s = this.h4,
                                    c = this.h5,
                                    a = this.h6,
                                    r = this.h7;
                                return [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s, c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, 255 & c, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r]
                            }, (e.prototype = new d).finalize = function() {
                                var t;
                                d.prototype.finalize.call(this), this.inner && (this.inner = !1, t = this.digest(), d.call(this, this.memory), this.update(this.oKeyPad), this.update(t), d.prototype.finalize.call(this))
                            };
                            var s = (c.create = function() {
                                return new d
                            }, c.update = function(t) {
                                return c.create().update(t)
                            }, c);

                            function c(t) {
                                return new d(!0).update(t).hex()
                            }

                            function a(t, i) {
                                return new e(t, !0).update(i).hex()
                            }(s.sha256 = s).sha256.hmac = (a.create = function(t) {
                                return new e(t)
                            }, a.update = function(t, i) {
                                return a.create(t).update(i)
                            }, a), t.sha256 = s.sha256
                        }(), this.zs = /^((?:https?|wss?):\/\/[^\/]+)(\/.*)?$/, this.Cs(), this.it(t), this.Ss(t, r), this.Config = new i(this), this.Schedule = new e(this), this.Listener = new c(this), this.Socket = new o(this), this.Stream = new u(this), this.Storage = new d(this), this.Browsing = new z(this), this.Call = new S(this), this.Message = new p(this), this.Session = new m(this), this.Website = new _(this), this.Bucket = new b(this), this.Media = new x(this), this.Helpdesk = new j(this), this.Trigger = new I(this), this.Issue = new R(this), this.ot(), !0 === t.connect_socket && this.socket.connect()
                }, p.prototype.Cs = function() {
                    this.st()
                }, p.prototype.st = function() {
                    delete this.environment, delete this.disable_autoload, delete this.url_go, delete this.website_domain, delete this.website_id, delete this.token_id, delete this.cookie_expire, delete this.cookie_domain, delete this.platform_name, delete this.platform_signature_key, delete this.runtime_configuration, delete this.device
                }, p.prototype.it = function(t) {
                    t && t.environment && (this.environment = t.environment || "development"), t && t.disable_autoload && (this.disable_autoload = t.disable_autoload), t && t.url_go && (this.url_go = t.url_go), t && t.website_domain && (this.website_domain = t.website_domain), t && t.website_id && (this.website_id = t.website_id), t && t.token_id && (this.token_id = t.token_id), t && t.cookie_expire && (this.cookie_expire = t.cookie_expire), t && t.cookie_domain && (this.cookie_domain = t.cookie_domain), t && t.platform_name && (this.platform_name = t.platform_name), t && t.platform_signature_key && (this.platform_signature_key = t.platform_signature_key), t && t.runtime_configuration && (this.runtime_configuration = t.runtime_configuration), this.device = {}, t && t.useragent && (this.device.useragent = t.useragent), t && t.timezone && (this.device.timezone = t.timezone), t && t.capabilities && (this.device.capabilities = t.capabilities), t && t.locales && (this.device.locales = t.locales)
                }, p.prototype.Ss = function(t, i) {
                    var n = ["websocket"],
                        e = (t.url_relay_client || "").match(this.zs) || [],
                        t = (t.url_relay_stream || "").match(this.zs) || [];
                    this.event = i.PubSub, this.socket = i.io(e[1] || null, {
                        path: e[2] || "/",
                        transports: n,
                        autoConnect: !1,
                        timeout: 25e3,
                        reconnectionDelay: 15e3,
                        reconnectionDelayMax: 6e4,
                        reconnectionAttempts: 5,
                        randomizationFactor: .5
                    }), this.stream = i.io(t[1] || null, {
                        path: t[2] || "/",
                        transports: n,
                        reconnection: !1,
                        autoConnect: !1
                    }), this.cookie = i.Cookies(window), this.sha256 = i.sha256
                }, p.prototype.ot = function() {
                    var t = this;
                    this.Listener.add_event("index", "window", "unload", function() {
                        !0 === t.socket.connected && t.socket.disconnect(), !0 === t.stream.connected && t.stream.disconnect()
                    }), this.Listener.add_event("index", "window", "popstate", function() {
                        t.As()
                    }), "object" === hi(window.history) && (this.Listener.apply_patch("index", "window.history", "pushState", window.history, function() {
                        t.As()
                    }), this.Listener.apply_patch("index", "window.history", "replaceState", window.history, function() {
                        t.As()
                    }))
                }, p.prototype.As = function() {
                    this.Session.send_device(), this.event.publish("window:history", {
                        page_url: document.location.href,
                        page_domain: document.location.hostname
                    })
                }, t.CrispLibraryClient = new p;
                var v = {
                    client: function(t) {
                        var n = [],
                            t = t || {};
                        return function(t, i) {
                            n.push('<div class="crisp-client"><div class="cc-1ctt"></div><div id="crisp-chatbox" :data-hidden="$store.base.is_hidden" :data-force-show="$store.base.force_show" :data-availability="$store.base.availability" :data-lock-maximized="$store.base.runtime.lock_maximized || false" :data-last-operator-face="$store.base.last_operator_face" :data-availability-tooltip="$store.base.configuration.chat.availability_tooltip" :data-hide-vacation="$store.base.configuration.chat.hide_vacation" :data-blocked="$store.base.is_blocked" :data-full-view="$store.base.is_full_view" :data-small-view="$store.base.is_small_view" :data-large-view="$store.base.is_large_view" :data-has-local-messages="$store.base.has_local_messages" :data-was-availability-online="$store.base.was_availability_online" :data-is-activity-ongoing="$store.base.is_activity_ongoing" :data-hide-on-away="$store.base.configuration.chat.hide_on_away" :data-hide-on-mobile="$store.base.configuration.chat.hide_on_mobile" :data-position-reverse="$store.base.configuration.chat.position_reverse"' + o.Library.jade.runtime.attr("lang", "" + i, !0, !0) + o.Library.jade.runtime.attr("dir", "" + t, !0, !0) + ' translate="no" class="cc-52lo"></div></div>')
                        }.call(this, "direction" in t ? t.direction : "undefined" != typeof direction ? direction : void 0, "lang" in t ? t.lang : "undefined" != typeof lang ? lang : void 0), n.join("")
                    },
                    viewport: function(t) {
                        var i = [],
                            t = t || {};
                        return function(t) {
                            i.push('<meta name="viewport"' + o.Library.jade.runtime.attr("content", "" + t, !0, !0) + ">")
                        }.call(this, "content" in t ? t.content : "undefined" != typeof content ? content : void 0), i.join("")
                    },
                    clear: function(t) {
                        var i = [];
                        return i.push('<span class="cc-v38i"></span>'), i.join("")
                    },
                    style_color: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<div class="cc-7gif"><style type="text/css">.crisp-client .cc-52lo .cc-guf7,\n.crisp-client .cc-52lo .cc-u6xv:hover {\n  color: ' + o.Library.jade.runtime.escape(null == (i = t.reverse.hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-1iix,\n.crisp-client .cc-52lo .cc-261u:hover {\n  color: " + o.Library.jade.runtime.escape(null == (i = t[500].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-co2u {\n  background-color: " + o.Library.jade.runtime.escape(null == (i = t.reverse.hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-1wxt {\n  background-color: " + o.Library.jade.runtime.escape(null == (i = t[900].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-dw9j {\n  background-color: " + o.Library.jade.runtime.escape(null == (i = t[600].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-1s3d,\n.crisp-client .cc-52lo .cc-1801:before,\n.crisp-client .cc-52lo .cc-1801:after {\n  background-color: " + o.Library.jade.runtime.escape(null == (i = t[500].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-uqci {\n  background-color: " + o.Library.jade.runtime.escape(null == (i = t[20].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-qovj,\n.crisp-client .cc-52lo .cc-1x4w:hover {\n  background-color: " + o.Library.jade.runtime.escape(null == (i = t[10].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-3g79 {\n  background-image: linear-gradient(125deg, " + o.Library.jade.runtime.escape(null == (i = t[500].hex) ? "" : i) + " -10%, " + o.Library.jade.runtime.escape(null == (i = t[900].hex) ? "" : i) + " 100%) !important;\n}\n\n.crisp-client .cc-52lo .cc-1n87,\n.crisp-client .cc-52lo .cc-bqvd:hover {\n  border-color: " + o.Library.jade.runtime.escape(null == (i = t.reverse.hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-19cc {\n  border-color: " + o.Library.jade.runtime.escape(null == (i = t[900].rgba(.175)) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-1o2b,\n.crisp-client .cc-52lo .cc-1cyj:hover,\n.crisp-client .cc-52lo .cc-1y3p:before,\n.crisp-client .cc-52lo .cc-1y3p:after {\n  border-color: " + o.Library.jade.runtime.escape(null == (i = t[500].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-a742 {\n  border-color: " + o.Library.jade.runtime.escape(null == (i = t[500].rgba(.15)) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-vw1h {\n  border-top-color: " + o.Library.jade.runtime.escape(null == (i = t[500].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-k3po,\n.crisp-client .cc-52lo .cc-9u1x:hover {\n  border-color: " + o.Library.jade.runtime.escape(null == (i = t[20].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-1f79::placeholder {\n  color: " + o.Library.jade.runtime.escape(null == (i = t[200].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-1916::placeholder {\n  color: " + o.Library.jade.runtime.escape(null == (i = t[200].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-12pv,\n.crisp-client .cc-52lo .cc-16ql:hover,\n.crisp-client .cc-52lo .cc-12pv:hover,\n.crisp-client .cc-52lo .cc-16ql:active,\n.crisp-client .cc-52lo .cc-12pv:active,\n.crisp-client .cc-52lo .cc-645b:hover .cc-1je6,\n.crisp-client .cc-52lo .cc-645b .cc-1je6:active {\n  background: " + o.Library.jade.runtime.escape(null == (i = t[900].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-iksl,\n.crisp-client .cc-52lo .cc-1mr2:hover {\n  background: " + o.Library.jade.runtime.escape(null == (i = t[700].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-iksl:hover,\n.crisp-client .cc-52lo .cc-1mr2:active {\n  background: " + o.Library.jade.runtime.escape(null == (i = t[800].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-iksl:active {\n  background: " + o.Library.jade.runtime.escape(null == (i = t[900].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-o5ok:hover .cc-skim {\n  background: " + o.Library.jade.runtime.escape(null == (i = t[700].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-o5ok .cc-skim:active {\n  background: " + o.Library.jade.runtime.escape(null == (i = t[800].hex) ? "" : i) + ' !important;\n}\n\n.crisp-client .cc-52lo .cc-kafm,\n.crisp-client .cc-52lo .cc-bxg7[data-active="true"] {\n  background: ' + o.Library.jade.runtime.escape(null == (i = t[500].hex) ? "" : i) + ' !important;\n}\n\n.crisp-client .cc-52lo .cc-kafm:hover,\n.crisp-client .cc-52lo .cc-bxg7[data-active="true"]:active {\n  background: ' + o.Library.jade.runtime.escape(null == (i = t[600].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-kafm:active {\n  background: " + o.Library.jade.runtime.escape(null == (i = t[700].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-52lo .cc-xh3e::selection,\n.crisp-client .cc-52lo .cc-xh3e *::selection {\n  color: #191919 !important;\n  background-color: " + o.Library.jade.runtime.escape(null == (i = t[100].hex) ? "" : i) + " !important;\n}</style></div>")
                        }.call(this, "colors" in t ? t.colors : "undefined" != typeof colors ? colors : void 0), n.join("")
                    },
                    style_other: function(t) {
                        var n, e = [],
                            t = t || {};
                        return function(t, i) {
                            e.push('<div class="cc-12je"><style type="text/css">.crisp-client .cc-52lo {\n  z-index: ' + o.Library.jade.runtime.escape(null == (n = t) ? "" : n) + ";\n}\n</style>"), !1 === i && e.push('<style type="text/css">.crisp-client .cc-52lo .cc-kegp .cc-1apq .cc-1q8z .cc-1ct5 .cc-lt21 .cc-1rwl {\n  display: none !important;\n}</style>'), e.push("</div>")
                        }.call(this, "container_index" in t ? t.container_index : "undefined" != typeof container_index ? container_index : void 0, "show_operator_count" in t ? t.show_operator_count : "undefined" != typeof show_operator_count ? show_operator_count : void 0), e.join("")
                    },
                    style_position: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<div class="cc-172q">'), t.default_button_horizontal && n.push('<style type="text/css">.crisp-client .cc-52lo[data-full-view="false"][data-position-reverse="false"] .cc-kegp .cc-1oun,\n.crisp-client .cc-52lo[data-full-view="false"][data-position-reverse="false"] .cc-kegp .cc-1apq {\n  margin-right: ' + o.Library.jade.runtime.escape(null == (i = t.default_button_horizontal) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-52lo[data-full-view="false"][data-position-reverse="false"] .cc-kegp .cc-1oun .cc-evsl .cc-1vyl {\n  margin-right: ' + o.Library.jade.runtime.escape(null == (i = t.default_button_horizontal) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-52lo[data-full-view="false"][data-position-reverse="true"] .cc-kegp .cc-1oun,\n.crisp-client .cc-52lo[data-full-view="false"][data-position-reverse="true"] .cc-kegp .cc-1apq {\n  margin-left: ' + o.Library.jade.runtime.escape(null == (i = t.default_button_horizontal) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-52lo[data-full-view="false"][data-position-reverse="true"] .cc-kegp .cc-1oun .cc-evsl .cc-1vyl {\n  margin-left: ' + o.Library.jade.runtime.escape(null == (i = t.default_button_horizontal) ? "" : i) + "px !important;\n}\n</style>"), t.default_button_vertical && n.push('<style type="text/css">.crisp-client .cc-52lo[data-full-view="false"] .cc-kegp .cc-1oun,\n.crisp-client .cc-52lo[data-full-view="false"] .cc-kegp .cc-1apq {\n  margin-bottom: ' + o.Library.jade.runtime.escape(null == (i = t.default_button_vertical) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-52lo[data-full-view="false"] .cc-kegp .cc-1oun .cc-evsl .cc-1vyl {\n  margin-bottom: ' + o.Library.jade.runtime.escape(null == (i = t.default_button_vertical) ? "" : i) + "px !important;\n}\n</style>"), t.mobile_button_horizontal && n.push('<style type="text/css">.crisp-client .cc-52lo[data-full-view="true"][data-position-reverse="false"] .cc-kegp .cc-1oun {\n  margin-right: ' + o.Library.jade.runtime.escape(null == (i = t.mobile_button_horizontal) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-52lo[data-full-view="true"][data-position-reverse="false"] .cc-kegp .cc-1oun .cc-evsl .cc-1vyl {\n  margin-right: ' + o.Library.jade.runtime.escape(null == (i = t.mobile_button_horizontal) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-52lo[data-full-view="true"][data-position-reverse="true"] .cc-kegp .cc-1oun {\n  margin-left: ' + o.Library.jade.runtime.escape(null == (i = t.mobile_button_horizontal) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-52lo[data-full-view="true"][data-position-reverse="true"] .cc-kegp .cc-1oun .cc-evsl .cc-1vyl {\n  margin-left: ' + o.Library.jade.runtime.escape(null == (i = t.mobile_button_horizontal) ? "" : i) + "px !important;\n}\n</style>"), t.mobile_button_vertical && n.push('<style type="text/css">.crisp-client .cc-52lo[data-full-view="true"] .cc-kegp .cc-1oun {\n  margin-bottom: ' + o.Library.jade.runtime.escape(null == (i = t.mobile_button_vertical) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-52lo[data-full-view="true"] .cc-kegp .cc-1oun .cc-evsl .cc-1vyl {\n  margin-bottom: ' + o.Library.jade.runtime.escape(null == (i = t.mobile_button_vertical) ? "" : i) + "px !important;\n}</style>"), n.push("</div>")
                        }.call(this, "position" in t ? t.position : "undefined" != typeof position ? position : void 0), n.join("")
                    },
                    new_line: function(t) {
                        var i = [];
                        return i.push('<br class="cc-9qot">'), i.join("")
                    },
                    link_phone: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push("<a" + o.Library.jade.runtime.attr("href", "tel:" + t, !1, !0) + ' class="cc-d905 cc-5h0w">' + (null == (i = t) ? "" : i) + "</a>")
                        }.call(this, "phone" in t ? t.phone : "undefined" != typeof phone ? phone : void 0), n.join("")
                    },
                    link_email: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push("<a" + o.Library.jade.runtime.attr("href", "mailto:" + t, !1, !0) + ' class="cc-d905 cc-1lyx">' + (null == (i = t) ? "" : i) + "</a>")
                        }.call(this, "email" in t ? t.email : "undefined" != typeof email ? email : void 0), n.join("")
                    },
                    link_uri: function(t) {
                        var n, e = [],
                            t = t || {};
                        return function(t, i) {
                            e.push("<a" + o.Library.jade.runtime.attr("href", "" + i, !1, !0) + ' rel="noopener noreferrer" target="_blank" class="cc-d905 cc-1ad6">' + (null == (n = t) ? "" : n) + "</a>")
                        }.call(this, "uri_name" in t ? t.uri_name : "undefined" != typeof uri_name ? uri_name : void 0, "uri_value" in t ? t.uri_value : "undefined" != typeof uri_value ? uri_value : void 0), e.join("")
                    },
                    link_domain: function(t) {
                        var n, e = [],
                            t = t || {};
                        return function(t, i) {
                            e.push("<a" + o.Library.jade.runtime.attr("href", "http://" + i + "/", !1, !0) + ' rel="noopener noreferrer" target="_blank" class="cc-d905 cc-abgp">' + (null == (n = t) ? "" : n) + "</a>")
                        }.call(this, "domain_name" in t ? t.domain_name : "undefined" != typeof domain_name ? domain_name : void 0, "domain_value" in t ? t.domain_value : "undefined" != typeof domain_value ? domain_value : void 0), e.join("")
                    },
                    markdown_blockquote: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span class="cc-2bwr cc-14bu">' + (null == (i = t) ? "" : i) + "</span>")
                        }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                    },
                    markdown_table: function(t) {
                        var c, a = [],
                            t = t || {};
                        return function(s, t, e) {
                            a.push('<table class="cc-2bwr cc-1m0z">'), 0 < s.length && (a.push('<thead class="cc-ujki"><tr>'), function() {
                                    var t = s;
                                    if ("number" == typeof t.length)
                                        for (var i = 0, n = t.length; i < n; i++) {
                                            var e = t[i];
                                            a.push("<th>" + (null == (c = e) ? "" : c) + "</th>")
                                        } else
                                            for (i in n = 0, t) n++, e = t[i], a.push("<th>" + (null == (c = e) ? "" : c) + "</th>")
                                }.call(this), a.push("</tr></thead>")), a.push("<tbody>"),
                                function() {
                                    var t = e;
                                    if ("number" == typeof t.length)
                                        for (var i = 0, n = t.length; i < n; i++) {
                                            var s = t[i];
                                            a.push("<tr>"),
                                                function() {
                                                    var t = s;
                                                    if ("number" == typeof t.length)
                                                        for (var i = 0, n = t.length; i < n; i++) {
                                                            var e = t[i];
                                                            a.push("<td>" + (null == (c = e) ? "" : c) + "</td>")
                                                        } else
                                                            for (i in n = 0, t) n++, e = t[i], a.push("<td>" + (null == (c = e) ? "" : c) + "</td>")
                                                }.call(this), a.push("</tr>")
                                        } else
                                            for (i in n = 0, t) n++, s = t[i], a.push("<tr>"),
                                                function() {
                                                    var t = s;
                                                    if ("number" == typeof t.length)
                                                        for (var i = 0, n = t.length; i < n; i++) {
                                                            var e = t[i];
                                                            a.push("<td>" + (null == (c = e) ? "" : c) + "</td>")
                                                        } else
                                                            for (i in n = 0, t) n++, e = t[i], a.push("<td>" + (null == (c = e) ? "" : c) + "</td>")
                                                }.call(this), a.push("</tr>")
                                }.call(this), a.push("</tbody></table>")
                        }.call(this, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "undefined" in t ? t.undefined : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), a.join("")
                    },
                    markdown_color: function(t) {
                        var n, e = [],
                            t = t || {};
                        return function(t, i) {
                            e.push("<span" + o.Library.jade.runtime.attr("style", "color: " + t + " !important;", !0, !0) + ' class="cc-2bwr cc-8kl5">' + (null == (n = i) ? "" : n) + "</span>")
                        }.call(this, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), e.join("")
                    },
                    markdown_bold: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span class="cc-2bwr cc-1g1p cc-ujki">' + (null == (i = t) ? "" : i) + "</span>")
                        }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                    },
                    markdown_code_inline: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span class="cc-2bwr cc-1lit cc-142y cc-uqci">' + (null == (i = t) ? "" : i) + "</span>")
                        }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                    },
                    markdown_code_block: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span class="cc-2bwr cc-1lit cc-m2uw cc-uqci">' + (null == (i = t) ? "" : i) + "</span>")
                        }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                    },
                    markdown_delete: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span class="cc-2bwr cc-9htd">' + (null == (i = t) ? "" : i) + "</span>")
                        }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                    },
                    markdown_highlight: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span class="cc-2bwr cc-e6l1">' + (null == (i = t) ? "" : i) + "</span>")
                        }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                    },
                    markdown_emphasis: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span class="cc-2bwr cc-8q9d cc-ujki">' + (null == (i = t) ? "" : i) + "</span>")
                        }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                    },
                    markdown_image: function(t) {
                        var s = [],
                            t = t || {};
                        return function(t, i, n, e) {
                            s.push(""), e = t(e), s.push('<span class="cc-2bwr cc-buew"><img' + o.Library.jade.runtime.attr("src", n + "/process/original/?url=" + e, !1, !0) + o.Library.jade.runtime.attr("alt", "" + i, !1, !0) + "></span>")
                        }.call(this, "encodeURIComponent" in t ? t.encodeURIComponent : "undefined" != typeof encodeURIComponent ? encodeURIComponent : void 0, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "url_crisp_image" in t ? t.url_crisp_image : "undefined" != typeof url_crisp_image ? url_crisp_image : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), s.join("")
                    },
                    markdown_interpolate: function(t) {
                        var n, e = [],
                            t = t || {};
                        return function(t, i) {
                            e.push('<span class="cc-2bwr cc-kcjd">{{ ' + o.Library.jade.runtime.escape(null == (n = t) ? "" : n) + o.Library.jade.runtime.escape(null == (n = i ? ' | "' + i + '"' : "") ? "" : n) + " }}</span>")
                        }.call(this, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), e.join("")
                    },
                    markdown_italic: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span class="cc-2bwr cc-mfpr">' + (null == (i = t) ? "" : i) + "</span>")
                        }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                    },
                    markdown_line: function(t) {
                        var i = [];
                        return i.push('<span class="cc-2bwr cc-pz1a"></span>'), i.join("")
                    },
                    markdown_link_text: function(t) {
                        var e, s = [],
                            t = t || {};
                        return function(t, i, n) {
                            s.push("<a" + o.Library.jade.runtime.attr("href", "" + t.filter_link_safe(n), !1, !0) + o.Library.jade.runtime.attr("target", "" + t.html_attribute("_blank"), !1, !0) + ' rel="noopener noreferrer" class="cc-2bwr cc-12w7 cc-nf9s">' + (null == (e = i) ? "" : e) + "</a>")
                        }.call(this, "methods" in t ? t.methods : "undefined" != typeof methods ? methods : void 0, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), s.join("")
                    },
                    markdown_link_image: function(t) {
                        var c = [],
                            t = t || {};
                        return function(t, i, n, e, s) {
                            c.push(""), n = t(n), c.push("<a" + o.Library.jade.runtime.attr("href", "" + i.filter_link_safe(s), !1, !0) + o.Library.jade.runtime.attr("target", "" + i.html_attribute("_blank"), !1, !0) + ' rel="noopener noreferrer" class="cc-2bwr cc-12w7 cc-8azz"><span class="cc-2bwr cc-buew"><img' + o.Library.jade.runtime.attr("src", e + "/process/original/?url=" + n, !1, !0) + ' alt=""></span></a>')
                        }.call(this, "encodeURIComponent" in t ? t.encodeURIComponent : "undefined" != typeof encodeURIComponent ? encodeURIComponent : void 0, "methods" in t ? t.methods : "undefined" != typeof methods ? methods : void 0, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "url_crisp_image" in t ? t.url_crisp_image : "undefined" != typeof url_crisp_image ? url_crisp_image : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), c.join("")
                    },
                    markdown_list: function(t) {
                        var n, e = [],
                            t = t || {};
                        return function(t, i) {
                            e.push("<span" + o.Library.jade.runtime.attr("data-type", "" + t, !1, !0) + ' class="cc-2bwr cc-1gzx">' + (null == (n = i) ? "" : n) + "</span>")
                        }.call(this, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), e.join("")
                    },
                    markdown_title: function(t) {
                        var n, e = [],
                            t = t || {};
                        return function(t, i) {
                            e.push("<span" + o.Library.jade.runtime.attr("data-type", "" + t, !1, !0) + ' class="cc-2bwr cc-1b7s cc-ujki">' + (null == (n = i) ? "" : n) + "</span>")
                        }.call(this, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), e.join("")
                    },
                    markdown_underline: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span class="cc-2bwr cc-1nxo">' + (null == (i = t) ? "" : i) + "</span>")
                        }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                    },
                    markdown_youtube: function(t) {
                        var a = [],
                            t = t || {};
                        return function(t, i, n, e, s) {
                            a.push("");
                            var c = "https://www.youtube.com/embed/" + t(s) + "?autoplay=1&rel=0",
                                s = t("https://img.youtube.com/vi/" + t(s) + "/hqdefault.jpg");
                            a.push("<a" + o.Library.jade.runtime.attr("href", c, !0, !0) + o.Library.jade.runtime.attr("target", "" + i.html_attribute("_blank"), !1, !0) + ' rel="noopener noreferrer" class="cc-2bwr cc-151c cc-zhsb"><span class="cc-z7nd cc-84tz cc-1anf cc-btdq"><img' + o.Library.jade.runtime.attr("src", e + "/process/resize/?url=" + s + "&width=960&height=960", !0, !0) + o.Library.jade.runtime.attr("alt", "" + n, !0, !0) + "></span></a>")
                        }.call(this, "encodeURIComponent" in t ? t.encodeURIComponent : "undefined" != typeof encodeURIComponent ? encodeURIComponent : void 0, "methods" in t ? t.methods : "undefined" != typeof methods ? methods : void 0, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "url_crisp_image" in t ? t.url_crisp_image : "undefined" != typeof url_crisp_image ? url_crisp_image : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), a.join("")
                    },
                    markdown_vimeo: function(t) {
                        var s, c = [],
                            t = t || {};
                        return function(t, i, n, e) {
                            c.push(""), e = "https://vimeo.com/" + t(e) + "?autoplay=1", c.push("<a" + o.Library.jade.runtime.attr("href", e, !1, !0) + o.Library.jade.runtime.attr("target", "" + i.html_attribute("_blank"), !1, !0) + ' rel="noopener noreferrer" class="cc-d905 cc-1ad6">' + (null == (s = n || e) ? "" : s) + "</a>")
                        }.call(this, "encodeURIComponent" in t ? t.encodeURIComponent : "undefined" != typeof encodeURIComponent ? encodeURIComponent : void 0, "methods" in t ? t.methods : "undefined" != typeof methods ? methods : void 0, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), c.join("")
                    },
                    markdown_dailymotion: function(t) {
                        var a = [],
                            t = t || {};
                        return function(t, i, n, e, s) {
                            a.push("");
                            var c = "https://www.dailymotion.com/embed/video/" + t(s),
                                s = t("https://www.dailymotion.com/thumbnail/video/" + t(s));
                            a.push("<a" + o.Library.jade.runtime.attr("href", c, !0, !0) + o.Library.jade.runtime.attr("target", "" + i.html_attribute("_blank"), !1, !0) + ' rel="noopener noreferrer" class="cc-2bwr cc-151c cc-1ry3"><span class="cc-z7nd cc-lygh cc-1anf cc-btdq"><img' + o.Library.jade.runtime.attr("src", e + "/process/resize/?url=" + s + "&width=320&height=240", !0, !0) + o.Library.jade.runtime.attr("alt", "" + n, !0, !0) + "></span></a>")
                        }.call(this, "encodeURIComponent" in t ? t.encodeURIComponent : "undefined" != typeof encodeURIComponent ? encodeURIComponent : void 0, "methods" in t ? t.methods : "undefined" != typeof methods ? methods : void 0, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "url_crisp_image" in t ? t.url_crisp_image : "undefined" != typeof url_crisp_image ? url_crisp_image : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), a.join("")
                    },
                    markdown_frame: function(t) {
                        var e, s = [],
                            t = t || {};
                        return function(t, i, n) {
                            s.push("<a" + o.Library.jade.runtime.attr("href", "" + t.filter_link_safe(n), !1, !0) + o.Library.jade.runtime.attr("target", "" + t.html_attribute("_blank"), !1, !0) + ' rel="noopener noreferrer" class="cc-d905 cc-1ad6">' + (null == (e = i || n) ? "" : e) + "</a>")
                        }.call(this, "methods" in t ? t.methods : "undefined" != typeof methods ? methods : void 0, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), s.join("")
                    },
                    smiley: function(t) {
                        var n = [],
                            t = t || {};
                        return function(t, i) {
                            n.push("<span" + o.Library.jade.runtime.attr("data-size", i, !0, !0) + o.Library.jade.runtime.attr("data-name", t, !0, !0) + ' class="cc-1g47"></span>')
                        }.call(this, "name" in t ? t.name : "undefined" != typeof name ? name : void 0, "size" in t ? t.size : "undefined" != typeof size ? size : void 0), n.join("")
                    },
                    magnify: function(t) {
                        var i = [];
                        return i.push('<div @click="$events.magnify.disappear_fuzzy" @keydown="$events.magnify.keydown" :data-type="$store.magnify.type" :data-state="$store.magnify.state" tabindex="0" class="cc-1igj"><span class="cc-s4ky cc-1g5r"></span><img v-if="$store.magnify.type === \'image\'" v-on:load="$store.magnify.state = \'loaded\'" @click="$events.magnify.disappear()" :src="$store.magnify.source" alt="" class="cc-ml4i"><video v-else-if="$store.magnify.type === \'video\'" v-on:loadeddata="$store.magnify.state = \'loaded\'" :src="$store.magnify.source" autoplay controls class="cc-ml4i"></video><iframe v-else v-on:load="$store.magnify.state = \'loaded\'" type="text/html" :src="$store.magnify.source" frameborder="0" sandbox="allow-popups allow-same-origin allow-scripts" class="cc-ml4i"></iframe><div class="cc-4vxe"><div class="cc-ft0u"><a v-if="$store.magnify.messages.previous" @click="$events.magnify.navigate_click(\'previous\')" data-action="previous" role="button" class="cc-pzpe"></a><a v-if="$store.magnify.type === \'image\' || $store.magnify.type === \'video\'" :href="$store.magnify.source" :download="$store.magnify.name || $store.magnify.source" data-action="download" rel="noopener noreferrer" target="_blank" class="cc-pzpe"></a><a @click="$events.magnify.disappear()" data-action="close" role="button" class="cc-pzpe"></a><a v-if="$store.magnify.messages.next" @click="$events.magnify.navigate_click(\'next\')" data-action="next" role="button" class="cc-pzpe"></a></div></div></div>'), i.join("")
                    },
                    article: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<div @keydown="$events.article.keydown" @click="$events.article.close_click" :data-state="$store.article.loaded ? \'loaded\' : \'loading\'" tabindex="0" class="cc-1ks8"><span class="cc-cl17 cc-1g5r"></span><div class="cc-14zu"><div class="cc-1wdc"><div class="cc-10kw"><a @click.prevent="$events.article.close_click" role="button" class="cc-18p3 cc-ujki">' + o.Library.jade.runtime.escape(null == (i = t("article", "controls_close")) ? "" : i) + '</a><a :href="$store.article.url" target="_blank" rel="noopener noreferrer" class="cc-dron cc-1s3d cc-ujki">' + o.Library.jade.runtime.escape(null == (i = t("article", "controls_view")) ? "" : i) + '</a></div><div class="cc-h61x cc-qovj"><iframe v-on:load="$store.article.loaded = true" :src="$store.article.url + \'/reader/\'" type="text/html" frameborder="0" class="cc-1it3"></iframe></div></div></div></div>')
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                    },
                    spotlight: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<div @keydown="$events.spotlight.keydown" :data-state="$store.spotlight.loading ? \'loading\' : \'loaded\'" :data-has-results="$store.spotlight.has_results" tabindex="0" class="cc-1rzz"><div @click="$events.spotlight.fuzzy_click" class="cc-19f5"><div class="cc-dnlx"><form action="#" method="post" class="cc-12eg"><span class="cc-ymd4 cc-1s3d"><span class="cc-1bx3 cc-1g5r"></span></span><input @keyup="$events.spotlight.search" v-effect="$el.focus()" v-model="$store.spotlight.input" type="text" name="spotlight_query"' + o.Library.jade.runtime.attr("placeholder", "" + t("spotlight", "search_form_field"), !0, !0) + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="100" class="cc-e45n cc-1f79 cc-z2in cc-18hf"><span class="cc-1e21 cc-18hf"></span><span class="cc-rbdc cc-18hf"></span></form><div class="cc-1q8o"><div v-if="$store.spotlight.has_results" class="cc-rezr"><ul v-if="$store.spotlight.articles.length &gt; 0" @mouseleave="$store.spotlight.current_index = -1" class="cc-12mq"><li v-for="(result, index) in $store.spotlight.articles" :data-locale="result.locale" :data-slug="result.slug" class="cc-1skq"><a @click="$events.spotlight.open_article($event, result.locale, result.slug)" @mouseenter="$store.spotlight.current_index = index" :href="$store.spotlight.url + \'/\' + result.locale + \'/article/\' + result.slug + \'/\'" :data-active="index === $store.spotlight.current_index" target="_blank" rel="noopener noreferrer" class="cc-1fn9 cc-bxg7"><span class="cc-ns1z cc-ujki">{{ result.title }}</span><span class="cc-14zc cc-18hf">' + o.Library.jade.runtime.escape(null == (i = t("spotlight", "result_view")) ? "" : i) + '</span></a></li></ul><span v-else class="cc-tihx cc-ujki">' + o.Library.jade.runtime.escape(null == (i = t("spotlight", "result_empty")) ? "" : i) + '</span></div><ul class="cc-1dbp"><li data-type="close" class="cc-18gp"><a @click="$events.spotlight.close_click" role="button" class="cc-ebj2 cc-utnf cc-ujki">' + o.Library.jade.runtime.escape(null == (i = t("spotlight", "action_close")) ? "" : i) + '</a></li><li v-if="$store.spotlight.url" data-type="open" class="cc-18gp cc-1iix"><a :href="$store.spotlight.url" target="_blank" rel="noopener noreferrer" class="cc-ebj2 cc-ujki">' + o.Library.jade.runtime.escape(null == (i = t("spotlight", "action_open")) ? "" : i) + "</a></li></ul></div></div></div></div>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                    },
                    date_now: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span data-type="now" class="cc-16wb">' + o.Library.jade.runtime.escape(null == (i = t("date", "now")) ? "" : i) + "</span>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                    },
                    date_seconds: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span data-type="seconds" class="cc-16wb">' + o.Library.jade.runtime.escape(null == (i = t("date", "second")) ? "" : i) + "</span>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                    },
                    date_minutes: function(t) {
                        var n, e = [],
                            t = t || {};
                        return function(t, i) {
                            e.push('<span data-type="minutes" class="cc-16wb">'), 1 === i ? e.push(o.Library.jade.runtime.escape(null == (n = t("date", "minute_singular")) ? "" : n)) : e.push(o.Library.jade.runtime.escape(null == (n = t("date", "minute_plural", [i])) ? "" : n)), e.push("</span>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0, "minutes" in t ? t.minutes : "undefined" != typeof minutes ? minutes : void 0), e.join("")
                    },
                    date_hours: function(t) {
                        var n, e = [],
                            t = t || {};
                        return function(t, i) {
                            e.push('<span data-type="hours" class="cc-16wb">'), 1 === i ? e.push(o.Library.jade.runtime.escape(null == (n = t("date", "hour_singular")) ? "" : n)) : e.push(o.Library.jade.runtime.escape(null == (n = t("date", "hour_plural", [i])) ? "" : n)), e.push("</span>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0, "hours" in t ? t.hours : "undefined" != typeof hours ? hours : void 0), e.join("")
                    },
                    date_far_away: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span data-type="far_away" class="cc-16wb">' + o.Library.jade.runtime.escape(null == (i = t) ? "" : i) + "</span>")
                        }.call(this, "date_full" in t ? t.date_full : "undefined" != typeof date_full ? date_full : void 0), n.join("")
                    },
                    duration_now: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span data-type="now" class="cc-y53w">' + o.Library.jade.runtime.escape(null == (i = t("duration", "now")) ? "" : i) + "</span>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                    },
                    duration_seconds: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span data-type="seconds" class="cc-y53w">' + o.Library.jade.runtime.escape(null == (i = t("duration", "second")) ? "" : i) + "</span>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                    },
                    duration_minutes: function(t) {
                        var n, e = [],
                            t = t || {};
                        return function(t, i) {
                            e.push('<span data-type="minutes" class="cc-y53w">'), 1 === i ? e.push(o.Library.jade.runtime.escape(null == (n = t("duration", "minute_singular")) ? "" : n)) : e.push(o.Library.jade.runtime.escape(null == (n = t("duration", "minute_plural", [i])) ? "" : n)), e.push("</span>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0, "minutes" in t ? t.minutes : "undefined" != typeof minutes ? minutes : void 0), e.join("")
                    },
                    duration_hours: function(t) {
                        var n, e = [],
                            t = t || {};
                        return function(t, i) {
                            e.push('<span data-type="hours" class="cc-y53w">'), 1 === i ? e.push(o.Library.jade.runtime.escape(null == (n = t("duration", "hour_singular")) ? "" : n)) : e.push(o.Library.jade.runtime.escape(null == (n = t("duration", "hour_plural", [i])) ? "" : n)), e.push("</span>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0, "hours" in t ? t.hours : "undefined" != typeof hours ? hours : void 0), e.join("")
                    },
                    duration_days: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span data-type="days" class="cc-y53w">' + o.Library.jade.runtime.escape(null == (i = t("duration", "days")) ? "" : i) + "</span>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                    },
                    chat: function(t) {
                        var c, a = [],
                            r = {},
                            t = t || {};
                        return function(t, i, n) {
                            a.push(""), a.push(""), r["text-space"] = c = function() {
                                    this && this.block, this && this.attributes, a.push("<span> </span>")
                                }, a.push('<div class="cc-kegp cc-xh3e"><div :data-visible="$store.chat.is_opened" :data-animate-minimize="$store.chat.animate_minimize" :data-animate-maximize="$store.chat.animate_maximize" :data-chat-status="$store.chat.status_marker" class="cc-1apq"><div v-effect="has_tile = (($store.base.configuration.chat.tile &amp;&amp; $store.base.configuration.chat.tile !== \'default\') ? true : false)" class="cc-1q8z"><div @click.prevent="$events.chat.pane_minimize" :class="(has_tile ? \'cc-645b cc-3g79\' : \'cc-o5ok\')"' + o.Library.jade.runtime.attr("data-tile", i.chat.tile || null, !0, !0) + ' class="cc-1ct5 cc-1s3d"><span class="cc-lt21"><span v-if="$store.chat.status_marker === \'ongoing\'" class="cc-132p"><span class="cc-1qg3 cc-gs4q cc-25ir"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, $store.chat.ongoing_operator.type, $store.chat.ongoing_operator.user_id, $store.chat.ongoing_operator.url) + \') !important\') }" class="cc-1y05 cc-1w1a"></span><span :data-has-name="$store.chat.ongoing_operator.name ? true : false" class="cc-146e cc-eszh cc-1i25 cc-kh00"><span class="cc-7xjx cc-cjdg cc-18hf">{{ $store.chat.ongoing_operator.name }}</span></span></span></span><span v-else class="cc-132p"><span v-for="active_avatar in $store.base.active_operators" class="cc-1qg3 cc-gs4q cc-25ir"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, active_avatar.type, active_avatar.identifier, active_avatar.avatar) + \') !important\') }" class="cc-1y05 cc-1w1a"></span><span :data-has-name="active_avatar.name ? true : false" class="cc-146e cc-eszh cc-1i25 cc-kh00"><span class="cc-7xjx cc-cjdg cc-18hf">{{ active_avatar.name }}</span></span></span><span v-if="$store.base.other_operators_count &gt; 0" :class="(has_tile ? \'cc-1wxt\' : \'cc-dw9j\')" class="cc-1rwl cc-ujki">{{ $store.base.other_operators_count }}+</span></span><span class="cc-v38i"></span></span><span class="cc-1v5t"><span class="cc-m7ux cc-guf7 cc-ujki">' + o.Library.jade.runtime.escape(null == (c = t("theme_text", ["default_chat", i.chat.theme_text + "_chat"])) ? "" : c) + '</span><span v-effect="has_website_name = ($store.chat.ongoing_operator.name !== $store.base.configuration.website.name)" class="cc-1l74 cc-guf7 cc-ujki"><span class="cc-1m2n cc-80ms cc-guf7">{{ $store.chat.ongoing_operator.name }}</span><span v-if="has_website_name" class="cc-1m2n cc-guf7">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_header_ongoing_from")) ? "" : c) + '</span><span v-if="has_website_name" class="cc-1m2n cc-guf7">{{ $store.base.configuration.website.name }}</span><span class="cc-v38i"></span></span><span class="cc-1edu"><span v-effect="has_activity = (($store.base.configuration.chat.activity_metrics === true &amp;&amp; $store.chat.activity.metrics) ? true : false)" data-id="online" class="cc-n717 cc-guf7"><span v-if="has_activity" v-crisp-date="{ type: \'duration\', date : $store.chat.activity.metrics, format : $render._e(\'chat\', \'chat_header_ongoing_status_metrics\')}" data-type="default" class="cc-bqqo cc-guf7 cc-18hf"></span><span v-else data-type="default" class="cc-bqqo cc-guf7 cc-18hf">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_header_ongoing_status_online")) ? "" : c) + '</span><span data-type="ongoing" class="cc-bqqo cc-guf7 cc-18hf">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_header_ongoing_status_online")) ? "" : c) + '</span></span><span v-effect="has_activity = (($store.base.configuration.chat.activity_metrics === true &amp;&amp; $store.chat.activity.last) ? true : false)" data-id="away" class="cc-n717 cc-guf7"><span v-if="has_activity" v-crisp-date="{ date : $store.chat.activity.last, format : $render._e(\'chat\', \'chat_header_ongoing_status_last\')}" data-type="default" class="cc-bqqo cc-1juw cc-guf7 cc-18hf"></span><span v-else data-type="default" class="cc-bqqo cc-1juw cc-guf7 cc-18hf">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_header_ongoing_status_away")) ? "" : c) + '</span><span data-type="ongoing" class="cc-bqqo cc-guf7 cc-18hf">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_header_ongoing_status_away")) ? "" : c) + '</span></span><span class="cc-v38i"></span></span><span class="cc-1jhu"><a @click="$events.chat.header_spotlight_click" v-if="$store.chat.helpdesk.search" data-channel="spotlight" role="button" class="cc-xlt7 cc-12pv cc-25ir"><span class="cc-eszh cc-8vse cc-vlo0"><span class="cc-cjdg cc-18hf">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_welcome_helpdesk")) ? "" : c) + '</span></span></a><a v-for="channel in $store.chat.channels" @click="$events.chat.header_generic_click" :class="(has_tile ? \'cc-12pv\' : \'cc-iksl\')" :data-channel="channel.name" :target="channel.name === \'email\' || channel.name === \'phone\' ? \'_parent\' : \'_blank\'" :href="channel.link" rel="noopener noreferrer" class="cc-xlt7 cc-25ir"><span class="cc-eszh cc-8vse cc-vlo0"><span class="cc-cjdg cc-18hf">{{ $render._e("chat", "chat_header_ongoing_channel_continue", [channel.format]) }}</span></span></a><span class="cc-v38i"></span></span></span><span :class="(has_tile ? \'cc-1je6\' : \'cc-skim\')" class="cc-1krx"><span class="cc-1un6"></span></span></div><span class="cc-1j6c"></span></div><div @click="$events.chat.click_fuzzy" @dragover="$events.chat.file_drop_dragover" :data-has-health="(($store.chat.status.url &amp;&amp; $store.base.configuration.chat.status_health_dead === true &amp;&amp; $store.base.configuration.website.status &amp;&amp; $store.base.configuration.website.status.health === \'dead\' &amp;&amp; ($render.current_time() - $store.base.configuration.website.status.since) &gt;= 180000))" :data-has-offline="$store.chat.has_offline" :data-has-picker-smiley="$store.chat.picker.is_visible &amp;&amp; ($store.chat.picker.type === \'smiley\')" :data-has-picker-gif="$store.chat.picker.is_visible &amp;&amp; ($store.chat.picker.type === \'gif\')" :data-has-alert-wait_reply="$store.chat.current_alert === \'wait_reply\'" :data-has-alert-warn_reply="$store.chat.current_alert === \'warn_reply\'" :data-has-alert-email_invalid="$store.chat.current_alert === \'email_invalid\'" :data-has-drop-zone="$store.chat.has_drop_zone" class="cc-1jpm"><div v-effect="has_form_disabled = ($store.base.runtime.lock_maximized !== true &amp;&amp; ($store.base.configuration.chat.hide_vacation === true || $store.chat.blocked === true))" :data-refer-hide-space="$store.base.configuration.plugins[\'urn:crisp.im:debranding:0\'] &amp;&amp; $store.base.configuration.website.trial === false" class="cc-ggw8"><div :data-reconnect-failed="$store.chat.reconnect_failed" :data-reconnect-inactive="$store.chat.reconnect_inactive" class="cc-1ems cc-tp91 cc-19cc"><div class="cc-13df"><span class="cc-g1rp cc-wpl5"></span><span class="cc-ttnj"><span class="cc-14zl cc-ujki">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_offline_main")) ? "" : c) + '</span><span class="cc-deut cc-ujki">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_offline_inactive")) ? "" : c) + '</span><span class="cc-1o3w cc-ujki">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_offline_fail")) ? "" : c) + '</span><span class="cc-1k7z cc-18hf">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_offline_label_frozen")) ? "" : c) + '</span><span class="cc-ymlw cc-18hf">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_offline_label_resume")) ? "" : c) + '</span></span></div></div><div v-if="$store.chat.status.url" class="cc-aib1 cc-tp91 cc-19cc"><div class="cc-15pv"><span class="cc-10un cc-ujki">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_health_main")) ? "" : c) + '</span><span class="cc-1y7t cc-18hf"><a :href="$store.chat.status.url" target="_blank" rel="noopener noreferrer" class="cc-18jd cc-ujki">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_health_label_link")) ? "" : c) + "</a>"), r["text-space"](), a.push(o.Library.jade.runtime.escape(null == (c = t("chat", "chat_health_label_updates")) ? "" : c) + '</span></div></div><div class="cc-x5kk cc-qovj"><div @scroll="$events.chat.flow_scroll" @touchstart="$events.chat.flow_touch" class="cc-301t"><div class="cc-hh0f wp-exclude-emoji"><div v-for="(message, index) in $store.messages.list" :key="message.fingerprint" :date-has-timestamp="message.timestamp ? true : false" class="cc-1yoz"><div v-if="$store.chat.is_different_date(index, (index - 1))" class="cc-1qw2"><div class="cc-bk8d"><div class="cc-p7so cc-ujki">{{ $store.chat.timestamp_to_properties(message.timestamp).title }}</div></div></div><div :class="{ \'cc-3z9c\': message.metas.is_new }" :data-from="message.from === \'operator\' ? \'operator\' : \'visitor\'" :data-is-preview="message.type === \'animation\'" :data-type="message.type" :data-last-of-group="$store.chat.is_last_of_group(message, index)" :data-last-of-thread="$store.chat.is_last_of_thread(message, index)" class="cc-146d"><span v-if="message.from === \'operator\'" class="cc-f1go cc-gs4q cc-25ir"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, (message.user.type || message.from), message.user.user_id, message.user.avatar) + \') !important\') }" class="cc-m1aa cc-1w1a"></span><span v-if="message.user.nickname" class="cc-eszh cc-1i25 cc-kh00"><span class="cc-cjdg cc-18hf">{{ ((message.user.type === \'website\') ? message.user.nickname : $render._n(message.user.nickname)) }}</span></span></span><span class="cc-914h cc-25ir"><span :class="(message.from === \'operator\') ? \'cc-1s3d\' : \'\'" class="cc-1fd5 cc-z2in"><span @click="$events.chat.message_common_click" :class="(message.from === \'operator\') ? \'cc-guf7\' : \'\'" class="cc-70ck cc-18hf"><span v-if="message.type === \'text\'" class="cc-1k9b"><div v-html="$render._f(message.content, $render.format_context)" @click="$events.chat.message_text_click" class="cc-1krv"></div><span v-if="message.preview" class="cc-c88o"><span v-for="link_preview in message.preview" :data-variant="link_preview.variant || \'none\'" class="cc-12al"><span v-if="link_preview.preview &amp;&amp; link_preview.preview.embed &amp;&amp; link_preview.preview.image" class="cc-wspd"><a @click.prevent="$events.chat.message_file_click(\'embed\', link_preview.preview.embed)" :href="link_preview.preview.embed" :style="{ backgroundImage: (\'url(\' + $render.image_url_resize(link_preview.preview.image) + \') !important\') }" rel="noopener noreferrer" target="_blank" data-type="embed" class="cc-13ft cc-1anf cc-btdq"><span class="cc-lwkk"></span></a></span><span v-else class="cc-wspd"><a v-if="link_preview.preview &amp;&amp; link_preview.preview.image" :style="{ backgroundImage: (\'url(\' + $render.image_url_resize(link_preview.preview.image) + \') !important\') }" :href="link_preview.url" :data-target="link_preview.variant || \'none\'" rel="noopener noreferrer" target="_blank" data-type="image" class="cc-13ft"></a><a @click="link_preview.variant === \'helpdesk\' ? $events.chat.message_welcome_helpdesk_click($event) : null" :class="(message.from === \'operator\' ? \'cc-co2u\' : \'\')" :href="link_preview.url" :data-target="link_preview.variant || \'none\'" rel="noopener noreferrer" target="_blank" data-type="link" class="cc-13ft cc-ujki">{{ (link_preview.title || link_preview.website || link_preview.url) }}</a></span></span></span></span><span v-else-if="message.type === \'file\'" class="cc-1k9b"><span class="cc-c4ij"><span v-if="message.content.name" class="cc-1v6w cc-18hf">{{ message.content.name }}</span><span v-else class="cc-1v6w cc-18hf">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_message_file_name")) ? "" : c) + '</span><a v-if="$store.base.environment.types.file_preview.image.indexOf(message.content.type) !== -1" @click.prevent="$events.chat.message_file_click(\'image\', message.content.url, message.content.name, message.fingerprint)" :href="message.content.url" :data-name="message.content.name" data-action="image" rel="noopener noreferrer" class="cc-vrns cc-1cvn"><span v-if="message.content.type === \'image/gif\'" :style="{ backgroundImage: (\'url(\' + $render.image_url_original(message.content.url) + \') !important\') }" class="cc-121n"></span><span v-else :style="{ backgroundImage: (\'url(\' + $render.image_url_resize(message.content.url) + \') !important\') }" class="cc-121n"></span></a><a v-else-if="$store.base.environment.types.file_preview.video.indexOf(message.content.type) !== -1" @click.prevent="$events.chat.message_file_click(\'video\', message.content.url, message.content.name, message.fingerprint)" :class="(message.from === \'operator\' ? \'cc-co2u\' : \'\')" :href="message.content.url" :data-name="message.content.name" data-action="video" rel="noopener noreferrer" class="cc-283e cc-1cvn"><span class="cc-mxs1 cc-ujki">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_message_file_video")) ? "" : c) + '</span></a><a v-else :class="(message.from === \'operator\' ? \'cc-co2u\' : \'\')" :href="message.content.url" :download="((message.content.type === \'text/html\') ? null : message.content.name || message.content.url)" data-action="download" rel="noopener noreferrer" target="_blank" class="cc-283e"><span class="cc-mxs1 cc-ujki">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_message_file_download")) ? "" : c) + '</span></a></span></span><span v-else-if="message.type === \'animation\'" class="cc-1k9b"><span :data-source="$store.chat.content_source(message.content.url)" class="cc-1rdt"><span :style="{ backgroundImage: (\'url(\' + $render.image_url_original(message.content.url) + \') !important\') }" class="cc-1q59"><span class="cc-1ddu"><span class="cc-11g5"></span></span></span></span></span><span v-else-if="message.type === \'audio\'" class="cc-1k9b"><span v-crisp-audio="{ duration : message.content.duration }" data-state="none" class="cc-1f5o"><span class="cc-1mk6"><a :class="(message.from === \'operator\' ? \'cc-1mr2\' : \'\')" role="button" class="cc-1r6y"></a><span class="cc-1tua"></span><span class="cc-745x cc-18hf">{{ $render.format_time(message.content.duration) }}</span><span class="cc-v38i"></span></span><span :class="(message.from === \'operator\' ? \'cc-dw9j\' : \'\')" class="cc-py56"></span><audio preload="none" class="cc-pczb"><source :src="message.content.url" :type="message.content.type"></audio></span></span><span v-else-if="message.type === \'field\'" class="cc-1k9b"><span :data-has-value="(message.content.value ? \'true\' : \'false\')" class="cc-1no8"><a v-if="message.content.previous &amp;&amp; message.from === \'operator\'" @click="$events.chat.message_previous_click(message)" role="button" class="cc-qzes cc-iksl"></a><span v-html="$render._f(message.content.text, $render.format_context)" class="cc-1krv"></span><span v-if="message.content.value || message.from !== \'operator\'" :class="(message.content.value ? \'cc-ujki\' : \'cc-18hf\')" class="cc-1kx6">{{ (message.content.value || message.content.explain) }}</span><form v-else @submit.prevent="$events.chat.message_fields_send(message)" action="#" method="post" class="cc-7pwq"><input v-model="message.metas.field.value" :name="\'message_field_\' + message.content.id" :placeholder="message.content.explain" type="text" autocapitalize="off" autocorrect="off" spellcheck="false" class="cc-1jfv cc-1f79 cc-18hf"><a @click.prevent="$events.chat.message_fields_send(message)" role="button" class="cc-cwal cc-iksl cc-ujki">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_message_text_identity_ask_field_submit")) ? "" : c) + '</a></form></span></span><span v-else-if="message.type === \'picker\'" class="cc-1k9b"><span v-html="$render._f(message.content.text, $render.format_context)" class="cc-1krv"></span><span :data-has-selected="$store.chat.check_picker_has_selected_choice(message.content)" :data-choices-count="(message.content.choices || []).length" class="cc-1cgp"><a v-for="choice in message.content.choices" @click.prevent="$events.chat.message_picker_button_click(message, choice)" :class="((message.metas &amp;&amp; message.metas.has_selected !== true || choice.selected === true) ? \'cc-ujki\' : \'cc-18hf\')" :data-value="choice.value" :data-selected="((choice.selected === true) ? \'true\' : \'false\')" role="button" class="cc-euhm">{{ choice.label }}</a></span></span></span><span class="cc-v38i"></span></span><span v-if="message.timestamp" class="cc-1l0g cc-eszh cc-8vse cc-vlo0"><span class="cc-cjdg cc-18hf"><span v-crisp-date="{ date : message.timestamp }" class="cc-v3l4"></span><span v-if="(message.user.type === \'participant\') || (message.edited === true) || (message.translated === true)" class="cc-1gts"><span class="cc-zfo2">(<span v-if="message.user.type === \'participant\'">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_message_tag_participant")) ? "" : c) + '<span v-if="message.edited === true || message.translated === true">,'), r["text-space"](), a.push('</span></span><span v-if="message.edited === true">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_message_tag_edited")) ? "" : c) + '<span v-if="message.translated === true">,'), r["text-space"](), a.push('</span></span><span v-if="message.translated === true">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_message_tag_translated")) ? "" : c) + '</span>)</span></span></span></span><span class="cc-v38i"></span></span><span class="cc-v38i"></span><span v-if="message.from === \'user\'" class="cc-kse9"><span v-if="message.read &amp;&amp; $store.messages.latest_fingerprint === message.fingerprint" class="cc-1b1n"><span class="cc-h78m"></span><span class="cc-9h64 cc-18hf">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_message_info_read")) ? "" : c) + '</span><span class="cc-v38i"></span></span><span class="cc-v38i"></span></span><a v-if="message.from === \'user\' &amp;&amp; message.metas.has_error" @click="$events.chat.message_send_retry_click(message)" role="button" class="cc-1s90"><span class="cc-ycnh cc-ujki">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_message_error_retry")) ? "" : c) + '</span><span class="cc-1w7x cc-wpl5"></span><span class="cc-v38i"></span></a><span class="cc-v38i"></span></div><span class="cc-v38i"></span></div></div><div class="cc-2tud"><div v-if="$store.messages.is_composing" class="cc-1qc2"><span class="cc-1ifi cc-1s3d">'),
                                function() {
                                    var t = [1, 2, 3];
                                    if ("number" == typeof t.length)
                                        for (var i = 0, n = t.length; i < n; i++) a.push('<span class="cc-39ut cc-co2u"></span>');
                                    else
                                        for (i in n = 0, t) n++, a.push('<span class="cc-39ut cc-co2u"></span>')
                                }.call(this), a.push('</span><span class="cc-v38i"></span></div></div></div></div><div v-if="$store.base.configuration.chat.file_transfer" class="cc-6ohn"><div @drop="$events.chat.file_drop" @dragleave="$events.chat.file_drop_dragleave" class="cc-1jwj"></div><div class="cc-1dj0 cc-1o2b"><div class="cc-12j0"><div class="cc-1ama cc-1s3d"></div><div class="cc-1qfs cc-ujki">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_form_attach_tooltip")) ? "" : c) + '</div></div></div></div><div v-if="$store.chat.picker.is_visible" @click="$events.chat.picker_click" :data-has-animation="$store.chat.picker.has_animation" class="cc-151i"><div class="cc-1dse cc-k3po"><div class="cc-1l96"><a @click="$events.chat.picker_show(\'smiley\')" :class="($store.chat.picker.type === \'smiley\') ? \'cc-1s3d\' : \'cc-1x4w\'" role="button" data-type="smiley" class="cc-1fd3 cc-ujki">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_pickers_selector_smileys")) ? "" : c) + '</a><a @click="$events.chat.picker_show(\'gif\')" :class="($store.chat.picker.type === \'gif\') ? \'cc-1s3d\' : \'cc-1x4w\'" role="button" data-type="gif" class="cc-1fd3 cc-ujki">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_pickers_selector_gifs")) ? "" : c) + '</a></div><div class="cc-222b"><div v-if="$store.chat.picker.type === \'smiley\'" data-type="smiley" class="cc-14xd"><span class="cc-13dc"><span v-for="(smiley_value, smiley_name) in $store.base.environment.smileys" @click="$events.chat.picker_smiley_click(smiley_value)" :data-name="smiley_name" :data-value="smiley_value" data-size="large" class="cc-1x6i cc-1g47"></span></span></div><div v-if="$store.chat.picker.type === \'gif\'" data-type="gif" :data-has-search="$store.chat.picker.gif.input.length &gt; 0" class="cc-14xd"><span class="cc-1r5w"><span @click="$events.chat.picker_gif_input_reset" data-action="search" class="cc-n7bh">');
                            var e = t("chat", "chat_pickers_gif_search");
                            a.push('<a role="button" class="cc-1pyj"></a><input @keyup="$events.chat.picker_gif_input_keyup" v-effect="$el.focus()" v-model="$store.chat.picker.gif.input" type="text" name="gif_search"' + o.Library.jade.runtime.attr("placeholder", "" + e, !0, !0) + ' maxlength="25" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" class="cc-wrgp cc-z2in cc-18hf"></span></span><span class="cc-13dc"><span v-for="gif in $store.chat.picker.gif.results" :data-type="gif.type" :data-loading="gif.loading" class="cc-1x6i cc-1n87 cc-1cyj"><span @click="$events.chat.picker_gif_item_click(gif)" v-if="gif.url" :style="{ background: (\'url(\' + $store.base.environment.url.crisp_image + \'/process/original/?url=\' + gif.url + \') !important\') }" class="cc-xjsb"></span></span></span><span class="cc-114r"><span v-if="$store.chat.picker.gif.results.length === 0" data-notice="no_results" class="cc-1rer cc-ujki">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_pickers_gif_no_results")) ? "" : c) + '</span></span></div></div></div></div><div v-if="$store.chat.current_alert" class="cc-30ip"><a v-if="$store.chat.current_alert === \'new_messages\'" @click.prevent="$events.chat.alert_new_messages_click()" role="button" data-type="new_messages" class="cc-gcci"><span class="cc-kx3k"><span class="cc-18pk"></span><span class="cc-t4g0 cc-ujki">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_alerts_new_messages")) ? "" : c) + '</span></span></a><a v-else-if="$store.chat.current_alert === \'warn_reply\'" @click.prevent="$events.chat.alert_warn_reply_click()" role="button" data-type="warn_reply" class="cc-gcci"><div class="cc-kx3k"><span class="cc-t4g0 cc-ujki">');
                            var s = "email_default";
                            !0 === i.chat.phone_visitors && !0 !== i.chat.email_visitors ? s = !0 === i.chat.force_identify ? "phone_force" : "phone_default" : !0 === i.chat.force_identify && (s = "email_force"), a.push(o.Library.jade.runtime.escape(null == (c = t("chat", "chat_alerts_warn_reply_" + s)) ? "" : c) + '</span></div></a><a v-else-if="$store.chat.current_alert === \'email_invalid\'" @click.prevent="$events.chat.alert_email_invalid_click()" role="button" data-type="email_invalid" class="cc-gcci"><div class="cc-kx3k"><span class="cc-t4g0 cc-ujki">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_alerts_email_invalid")) ? "" : c) + '</span></div></a><div v-else-if="$store.chat.current_alert === \'wait_reply\'" data-type="wait_reply" class="cc-gcci"><div class="cc-kx3k"><span class="cc-t4g0 cc-ujki"><span data-id="online" class="cc-12eh">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_alerts_wait_reply_online")) ? "" : c) + '</span><span data-id="away" class="cc-12eh">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_alerts_wait_reply_away")) ? "" : c) + '</span></span></div></div></div><div :data-has-value="$store.chat.field.has_value" :data-is-locked="has_form_disabled || $store.chat.is_locked" :data-retain-lock="has_form_disabled" class="cc-mt5q cc-19cc"><form name="form_message" action="#" method="post" class="cc-oqk3">'), e = t("chat", "chat_form_field_message"), s = t("chat", "chat_form_field_disabled"), a.push('<textarea @keyup="$events.chat.textarea_keyup" @keydown="$events.chat.textarea_keydown" @paste="$events.chat.textarea_paste" :disabled="has_form_disabled || $store.chat.is_locked"' + o.Library.jade.runtime.attr(":placeholder", "has_form_disabled ? '" + s + "' : '" + e + "'", !0, !0) + ' name="message" cols="20" rows="1" dir="auto" autocapitalize="off" autocomplete="off" data-has-selection-range class="cc-1dgk cc-z2in cc-1916 cc-18hf"></textarea></form><div class="cc-11qj"><div class="cc-braa"><div @click.prevent="$events.chat.picker_toggle" :data-state="$store.chat.picker.is_visible ? \'active\' : \'none\'" data-type="smiley" class="cc-1xco"><span class="cc-1mnb cc-25ir"><span v-if="$store.chat.picker.is_visible === false" class="cc-eszh cc-8vse cc-kh00"><span class="cc-cjdg cc-18hf">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_form_smiley_tooltip")) ? "" : c) + '</span></span><span v-if="$store.chat.picker.is_visible === false" data-variant="inactive" class="cc-14zd cc-1y5o cc-1o2b"><span class="cc-hkkc"><span class="cc-1p55 cc-14aa cc-1801"></span><span class="cc-l07s cc-14aa cc-1y3p"></span></span></span><span v-if="$store.chat.picker.is_visible === true" data-variant="active" class="cc-14zd cc-1y5o cc-1s3d cc-1o2b"><span class="cc-hkkc"><span class="cc-1p55 cc-14aa cc-1s3d"></span><span class="cc-l07s cc-14aa cc-1801"></span></span></span></span></div>'), !0 === i.chat.file_transfer && a.push('<div :data-state="$store.chat.file.state" data-type="file" class="cc-1xco"><span class="cc-1mnb cc-25ir"><span class="cc-eszh cc-8vse cc-kh00"><span class="cc-cjdg cc-18hf">' + o.Library.jade.runtime.escape(null == (c = t("chat", "chat_form_attach_tooltip")) ? "" : c) + '</span></span><input @change.prevent="$events.chat.file_change" type="file" name="attach_file" title="" multiple class="cc-49pt"><span class="cc-14zd cc-8ohl cc-1o2b cc-14aa cc-1801"></span><span class="cc-1f1j"><span class="cc-1gqr cc-a742 cc-vw1h"></span></span></span></div>'), a.push('<span class="cc-uq9u"><span @click="$events.chat.textarea_send_click" class="cc-6pg0 cc-kafm"><span class="cc-p4tz"></span></span></span><span class="cc-v38i"></span></div><span class="cc-v38i"></span></div></div><div v-if="!$store.base.configuration.plugins[\'urn:crisp.im:debranding:0\'] || $store.base.configuration.website.trial === true" class="cc-1tgm cc-k3po"><div class="cc-1emi"><a :href="$store.base.environment.url.crisp_web + \'/livechat/?ref=chatbox&amp;domain=\' + $store.base.website.domain + \'&amp;name=\' + $store.base.website.name" target="_blank" rel="noopener noreferrer" class="cc-15lb"><span class="cc-r9lx cc-18hf">We run on</span><span class="cc-1o3j"></span><span class="cc-r9lx cc-96mw cc-ujki">Crisp</span><span class="cc-v38i"></span></a><span class="cc-v38i"></span></div><span class="cc-v38i"></span></div></div></div></div><a @click.prevent="$events.chat.pane_toggle" :data-visible="$store.chat.is_opened" :data-maximized="$store.chat.is_opened &amp;&amp; !$store.chat.animate_maximize &amp;&amp; !$store.chat.animate_minimize" :data-animate-maximize="$store.chat.animate_maximize" :data-animate-minimize="$store.chat.animate_minimize" :data-pane-animate-entrance="$store.minimized.pane.animate_entrance" data-is-failure="false" role="button" class="cc-1oun"><span class="cc-evsl"><span v-if="$store.minimized.tooltips.new_messages.visible" :class="{ \'cc-uijy\': $store.minimized.tooltips.new_messages.animate }" data-id="new_messages" class="cc-1vyl"><span class="cc-11e3"><span v-if="$store.messages.preview.length &gt; 0" class="cc-w5i5"><span class="cc-1sec cc-1aqi"></span></span><span class="cc-z1r6"><span v-for="message in $store.messages.preview" :class="{ \'cc-81l4\': message.animate }" class="cc-1p88"><span class="cc-1y0j"><span class="cc-7qsa cc-gs4q"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, (message.user.type || message.from), message.user.user_id, message.user.avatar) + \') !important\') }" class="cc-xhya cc-1w1a"></span></span><span class="cc-y2cz"><span class="cc-qmro"></span><span class="cc-1f5f"><span class="cc-frat cc-18hf">' + o.Library.jade.runtime.escape(null == (c = t("chat", "minimized_tooltip_message_from")) ? "" : c) + '</span><span class="cc-1sxk cc-ujki">{{ (message.user.type === \'website\') ? message.user.nickname : $render._n(message.user.nickname) }}</span><span class="cc-v38i"></span></span><span v-if="message.type === \'text\'" v-html="$render._f(message.content, $render.format_context)" class="cc-1drh cc-18hf"></span><span v-else-if="message.type === \'picker\' || message.type === \'field\'" v-html="$render._f(message.content.text, $render.format_context)" class="cc-1drh cc-18hf"></span><span v-else-if="message.type === \'file\' || message.type === \'animation\'" class="cc-1drh"><span v-if="message.content.type === \'image/gif\' || message.type === \'animation\'" :style="{ backgroundImage: (\'url(\' + $render.image_url_original(message.content.url) + \') !important\') }" class="cc-1fus"></span><span v-else-if="message.content.type === \'image/jpg\' || message.content.type === \'image/jpeg\' || message.content.type === \'image/png\'" :style="{ backgroundImage: (\'url(\' + $render.image_url_resize(message.content.url, 180, 180) + \') !important\') }" class="cc-1fus"></span><span v-else class="cc-1drh cc-18hf">📦 {{ message.content.name }}</span></span><span v-else-if="message.type === \'audio\'" class="cc-1drh cc-18hf">🎧</span></span></span><span class="cc-v38i"></span></span></span></span><span class="cc-18kh"><span class="cc-ltp8"><span data-for-id="new_messages" class="cc-1nyk cc-18hf">' + o.Library.jade.runtime.escape(null == (c = t("chat", "minimized_tooltip_message_compose")) ? "" : c) + '<span class="cc-kwgu"><span class="cc-jtl0"><span data-variant="inactive" class="cc-14zd cc-1y5o"><span class="cc-hkkc"><span class="cc-1p55"></span><span class="cc-l07s"></span></span></span><span class="cc-14zd cc-8ohl"></span></span></span></span><span class="cc-v38i"></span></span></span></span></span><span class="cc-1qth cc-1s3d"><span data-id="chat_opened" class="cc-lgzk"><span :data-is-ongoing="$store.minimized.pane.is_ongoing" class="cc-3ycs"><span v-if="$store.base.configuration.chat.last_operator_face &amp;&amp; $store.base.configuration.website.active_operators.length &gt; 0" class="cc-3gqi cc-gs4q"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, \'operator\', $store.base.configuration.website.active_operators[0].user_id, $store.base.configuration.website.active_operators[0].avatar) + \') !important\') }" class="cc-wg7h cc-1w1a"></span></span><span v-else-if="$store.chat.ongoing_operator.url" class="cc-3gqi cc-gs4q"><span :style="{ backgroundImage: (\'url(\' + $store.chat.ongoing_operator.url + \') !important\') }" class="cc-wg7h cc-1w1a"></span></span><span class="cc-te3s"></span><span v-if="$store.minimized.pane.unread.visible" class="cc-ogwc cc-ujki">{{ $store.minimized.pane.unread.count }}</span></span></span></span></a><span :data-visible="$store.chat.is_opened || $store.minimized.tooltips.new_messages.visible" :data-animate-minimize="$store.chat.animate_minimize" :data-animate-maximize="$store.chat.animate_maximize" :data-visible-subtle="$store.minimized.tooltips.new_messages.visible" class="cc-ilne"><span class="cc-yu4f"></span></span></div>')
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0, "configuration" in t ? t.configuration : "undefined" != typeof configuration ? configuration : void 0, "undefined" in t ? t.undefined : void 0), a.join("")
                    },
                    minimized_authorized: function(t) {
                        var c, a = [],
                            t = t || {};
                        return function(s, t) {
                            a.push(""), a.push('<div class="cc-kegp cc-xh3e"><a @click="$events.minimized.pane_click" :data-pane-animate-entrance="$store.minimized.pane.animate_entrance" data-maximized="false"' + o.Library.jade.runtime.attr("data-is-failure", "false", !0, !0) + ' role="button" class="cc-1oun"><span class="cc-evsl">'), a.push('<span v-if="$store.minimized.pane.general_entice.visible" :data-with-helpdesk="$store.minimized.pane.helpdesk.url !== null" :data-is-concealed="$store.minimized.pane.general_entice.is_concealed" :class="{ \'cc-uijy\': $store.minimized.pane.general_entice.animate_full, \'cc-1a7w\': $store.minimized.pane.general_entice.animate_short }" data-id="general_entice" class="cc-1vyl"><span class="cc-18kh"><span class="cc-ltp8 cc-18hf"><span class="cc-d8mr"><span class="cc-13vc"><span class="cc-1j8t cc-1aqi"></span><span :data-has-avatar="$store.base.active_operators.length &gt; 0" class="cc-fvex"><span class="cc-1mvz"><span class="cc-n8fq cc-ujki">{{ $render._e("theme_text", "default_chat", [$store.base.configuration.chat.theme_text + "_chat"]) }}</span><span data-id="online" class="cc-1f1x cc-18hf">' + o.Library.jade.runtime.escape(null == (c = s("minimized", "tooltip_entice_status_online")) ? "" : c) + '</span><span data-id="away" class="cc-1f1x cc-18hf">' + o.Library.jade.runtime.escape(null == (c = s("minimized", "tooltip_entice_status_away")) ? "" : c) + '</span></span><span v-if="$store.base.active_operators.length &gt; 0" class="cc-1rgu"><span class="cc-30xn cc-gs4q"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, $store.base.active_operators[0].type, $store.base.active_operators[0].identifier, $store.base.active_operators[0].avatar) + \') !important\') }" class="cc-1pur cc-1w1a"></span></span></span></span></span></span>'),
                                function() {
                                    var t = ["online", "away"];
                                    if ("number" == typeof t.length)
                                        for (var i = 0, n = t.length; i < n; i++) {
                                            var e = t[i];
                                            a.push("<span" + o.Library.jade.runtime.attr("data-when", "" + e, !0, !0) + ' class="cc-6l7x"><span' + o.Library.jade.runtime.attr("v-if", "'" + e + "' === 'away' && $store.minimized.pane.helpdesk.url", !0, !0) + ' data-pop="spotlight" class="cc-jnng cc-1x4w"><span class="cc-1itl"><span class="cc-180r cc-1iix cc-ujki">' + o.Library.jade.runtime.escape(null == (c = s("minimized", "tooltip_entice_split_helpdesk")) ? "" : c) + "</span></span></span><span" + o.Library.jade.runtime.attr("v-if", "'" + e + "' === 'away' && $store.minimized.pane.helpdesk.url", !0, !0) + ' class="cc-jnng cc-1x4w"><span class="cc-1itl"><span class="cc-180r cc-ujki">' + o.Library.jade.runtime.escape(null == (c = s("minimized", "tooltip_entice_split_chat")) ? "" : c) + '</span></span></span><span v-else class="cc-jnng cc-1x4w"><span class="cc-1itl"><span class="cc-180r cc-1iix cc-ujki">{{ $render._e("minimized", "tooltip_entice_full_chat", [$store.base.configuration.website.name]) }}</span></span></span></span>')
                                        } else
                                            for (i in n = 0, t) n++, a.push("<span" + o.Library.jade.runtime.attr("data-when", "" + (e = t[i]), !0, !0) + ' class="cc-6l7x"><span' + o.Library.jade.runtime.attr("v-if", "'" + e + "' === 'away' && $store.minimized.pane.helpdesk.url", !0, !0) + ' data-pop="spotlight" class="cc-jnng cc-1x4w"><span class="cc-1itl"><span class="cc-180r cc-1iix cc-ujki">' + o.Library.jade.runtime.escape(null == (c = s("minimized", "tooltip_entice_split_helpdesk")) ? "" : c) + "</span></span></span><span" + o.Library.jade.runtime.attr("v-if", "'" + e + "' === 'away' && $store.minimized.pane.helpdesk.url", !0, !0) + ' class="cc-jnng cc-1x4w"><span class="cc-1itl"><span class="cc-180r cc-ujki">' + o.Library.jade.runtime.escape(null == (c = s("minimized", "tooltip_entice_split_chat")) ? "" : c) + '</span></span></span><span v-else class="cc-jnng cc-1x4w"><span class="cc-1itl"><span class="cc-180r cc-1iix cc-ujki">{{ $render._e("minimized", "tooltip_entice_full_chat", [$store.base.configuration.website.name]) }}</span></span></span></span>')
                                }.call(this), a.push("</span></span></span>"), a.push("</span>"), a.push('<span class="cc-1qth cc-1s3d"><span data-id="chat_closed" class="cc-lgzk"><span v-if="$store.minimized.pane.is_waiting" class="cc-x9k7"><span class="cc-scd4 cc-1g5r"></span></span><span v-else data-is-ongoing="false" class="cc-3ycs"><span v-if="$store.base.configuration.chat.last_operator_face" class="cc-3gqi cc-gs4q"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, $store.base.active_operators[0].type, $store.base.active_operators[0].identifier, $store.base.active_operators[0].avatar) + \') !important\') }" class="cc-wg7h cc-1w1a"></span></span></span></span></span>'), a.push("</a></div>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0, "undefined" in t ? t.undefined : void 0), a.join("")
                    },
                    minimized_unauthorized: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push(""), n.push('<div class="cc-kegp cc-xh3e"><a @click="$events.minimized.pane_click" :data-pane-animate-entrance="$store.minimized.pane.animate_entrance" data-maximized="false"' + o.Library.jade.runtime.attr("data-is-failure", "true", !0, !0) + ' role="button" class="cc-1oun"><span class="cc-evsl">'), n.push('<span data-id="failure_notice" class="cc-1vyl"><span class="cc-18kh"><span class="cc-ltp8 cc-ujki">' + o.Library.jade.runtime.escape(null == (i = t("minimized", "unauthorized_pane")) ? "" : i) + "</span></span></span>"), n.push("</span>"), n.push('<span class="cc-1qth cc-fzlw"><span data-id="in_failure" class="cc-lgzk"><span data-is-ongoing="false" class="cc-3ycs"></span></span></span>'), n.push("</a></div>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                    },
                    chat_game: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<div :data-loaded="$store.chat.game.loaded" class="cc-1uct"><span class="cc-1xni"><a @click="$events.chat.game_stop_click()" role="button" class="cc-qtaq cc-ujki">' + o.Library.jade.runtime.escape(null == (i = t("chat", "chat_game_controls_stop")) ? "" : i) + '</a></span><iframe v-on:load="$store.chat.game.loaded = true" :src="$store.base.environment.url.crisp_game + \'/\'" type="text/html" frameborder="0" class="cc-1ey8"></iframe><span class="cc-1ruy cc-1s3d"><span class="cc-g8yz cc-1g5r"></span></span></div>')
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                    },
                    browsing_assist: function(t) {
                        var i = [];
                        return i.push('<div class="cc-1dag"><div class="cc-10rs"><span class="cc-1iwp cc-25ir cc-r4ig"><span class="cc-atz3"></span><span class="cc-10t2"></span><span class="cc-eszh cc-1wap cc-vlo0"><span class="cc-cjdg cc-18hf">{{ $render._e("browsing", "assist_mouse_tooltip", [$store.base.configuration.website.name]) }}</span></span></span></div></div>'), i.join("")
                    },
                    call_ring: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<div data-browsing-ignore="true" class="cc-r7ht"><div class="cc-14pv"><div class="cc-1gg5 cc-gs4q"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, $store.call.user.type, $store.call.user.user_id) + \') !important\') }" class="cc-xfvp cc-1w1a"></span></div><div class="cc-1xer"><div class="cc-bm1i cc-18hf">{{ $render._e("call", "ring_title_website", [$store.base.configuration.website.name]) }}</div><div class="cc-26xe cc-ujki">{{ $render._e("call", "ring_title_label", [$store.call.user.nickname]) }}</div></div><ul class="cc-aeef"><li data-action="decline" class="cc-yufi"><a @click.prevent="$events.call.ring_decline_click()" role="button" class="cc-a53d"></a><span class="cc-xhz9 cc-ujki">' + o.Library.jade.runtime.escape(null == (i = t("call", "ring_actions_decline")) ? "" : i) + '</span></li><li :data-mode="$store.call.mode" data-action="accept" class="cc-yufi"><a @click.prevent="$events.call.ring_accept_click()" role="button" class="cc-a53d"></a><span class="cc-xhz9 cc-ujki">' + o.Library.jade.runtime.escape(null == (i = t("call", "ring_actions_accept")) ? "" : i) + "</span></li></ul></div></div>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                    },
                    call_screen: function(t) {
                        var a, r = [],
                            t = t || {};
                        return function(s, t) {
                            r.push('<div data-browsing-ignore="true" class="cc-r7ht"><div :data-mode="$store.call.size" tabindex="0" class="cc-wec3"><div class="cc-1p5z"><div data-type="remote" class="cc-1uvq"><span v-if="$store.call.mode === \'audio\'" class="cc-yk6t cc-gs4q"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, $store.call.user.type, $store.call.user.user_id) + \') !important\') }" class="cc-1erk cc-1w1a"></span></span><video v-on:dblclick="$events.call.toggle_fullscreen_mode_click" v-on:fullscreenchange="$events.call.toggle_fullscreen_aspect_ratio_click" alt="" autoplay playsinline class="cc-e7ae"></video></div><ul class="cc-1eyw"><li v-if="$store.call.muted.audio" data-type="audio" class="cc-wa3c cc-18hf">' + o.Library.jade.runtime.escape(null == (a = s("call", "screen_label_audio_muted")) ? "" : a) + '</li><li v-if="$store.call.mode === \'video\' &amp;&amp; $store.call.muted.video" data-type="video" class="cc-wa3c cc-18hf">' + o.Library.jade.runtime.escape(null == (a = s("call", "screen_label_video_muted")) ? "" : a) + '</li></ul><div class="cc-4dzx"><div class="cc-1wpk"><span class="cc-1w8a cc-gs4q"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, $store.call.user.type, $store.call.user.user_id) + \') !important\') }" class="cc-1o44 cc-1w1a"></span></span><div class="cc-f07b"><span class="cc-1bcz"><span class="cc-1c2h cc-ujki">{{ $store.call.user.nickname }}</span></span><span class="cc-1tnk">');
                            var c = ["connecting", "ongoing"];
                            (function() {
                                var t = c;
                                if ("number" == typeof t.length)
                                    for (var i = 0, n = t.length; i < n; i++) {
                                        var e = t[i];
                                        r.push("<span" + o.Library.jade.runtime.attr("v-if", "$store.call.state === '" + e + "'", !0, !0) + o.Library.jade.runtime.attr("data-state", "" + e, !0, !0) + ' class="cc-1gsq cc-18hf">' + o.Library.jade.runtime.escape(null == (a = s("call", "screen_status_" + e)) ? "" : a) + "</span>")
                                    } else
                                        for (i in n = 0, t) n++, r.push("<span" + o.Library.jade.runtime.attr("v-if", "$store.call.state === '" + (e = t[i]) + "'", !0, !0) + o.Library.jade.runtime.attr("data-state", "" + e, !0, !0) + ' class="cc-1gsq cc-18hf">' + o.Library.jade.runtime.escape(null == (a = s("call", "screen_status_" + e)) ? "" : a) + "</span>")
                            }).call(this), r.push('<span v-if="$store.call.state === \'ongoing\'" class="cc-1ge8"></span><span v-if="$store.call.state === \'ongoing\'" class="cc-1b3l cc-18hf">{{ $render.format_time($store.call.duration) }}</span></span></div></div><div class="cc-gykn"><a v-for="action in $store.call.actions" @click="$events.call.action_click(action.type)" :data-type="action.type" :data-state="action.state" :data-visible="action.visible" :data-unsupported="action.supported === false" role="button" class="cc-eari"></a></div></div><div v-if="$store.call.mode === \'video\'" data-type="local" class="cc-1uvq"><video alt="" autoplay playsinline muted></video><span v-if="$store.call.muted.audio" class="cc-11ll"><span class="cc-lz9h"></span></span></div></div></div></div>')
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0, "undefined" in t ? t.undefined : void 0), r.join("")
                    }
                };
                this.logger = c.Console, this.vue = c.PetiteVue, this.crisp = {
                    web: c.CrispLibraryWeb,
                    client: c.CrispLibraryClient
                }, this.jade = {
                    runtime: c.jade,
                    client: v
                }
            } catch (t) {}

            function p() {}

            function y() {}

            function di(t, i) {
                for (var n = 0; n < i.length; n++) {
                    var e = i[n];
                    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
                }
            }
        }, m.Polyfill = (X.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, X.prototype.schedule_warn_incompatible = function() {
            var t = this,
                i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                null !== this.Is && clearTimeout(this.Is), this.Is = setTimeout(function() {
                    !(t.Is = null) !== m.Pipeline.qs && t.Ds()
                }, !0 === i ? 0 : this.Os)
            } catch (t) {}
        }, X.prototype.Rs = function() {
            try {
                this.Bs()
            } catch (t) {}
        }, X.prototype.Bs = function() {
            try {
                Function.prototype.At = function(t) {
                    var i, n = void 0,
                        e = void 0,
                        s = void 0;
                    if ("function" != typeof this) throw new TypeError("Function.prototype.__crisp_bind - not callable");
                    return n = Array.prototype.slice.call(arguments, 1), s = function() {}, i = function() {
                        return e.apply(this instanceof s ? this : t, n.concat(Array.prototype.slice.call(arguments)))
                    }, (e = this).prototype && (s.prototype = this.prototype), i.prototype = new s, i
                }
            } catch (t) {}
        }, X.prototype.Ds = function() {
            try {
                var t = window;
                if (t && t.console && "function" == typeof t.console.warn && "function" == typeof Function.prototype.toString) {
                    for (var i, n, e, s = [
                            [null, t, ["eval", "escape", "unescape", "decodeURI", "encodeURI", "decodeURIComponent", "encodeURIComponent", "setTimeout", "clearTimeout", "setInterval", "clearInterval", "parseInt", "parseFloat", "RTCPeerConnection", "MutationObserver", "XMLHttpRequest", "AudioContext", "WebSocket", "Proxy", "Text", "Comment"]],
                            [null, t, ["Array", "Object", "String", "Number", "Date", "Function", "RegExp", "Symbol", "Set", "Map", "WeakMap", "Event", "Error"]],
                            ["Array", t.Array, ["from", "isArray"]],
                            ["Array.prototype", t.Array.prototype, ["push", "pop", "indexOf", "includes", "sort", "splice", "slice", "shift", "unshift", "map", "filter", "find", "findIndex", "forEach"]],
                            ["Object", t.Object, ["assign", "create", "keys", "values", "is", "isExtensible", "defineProperty", "defineProperties", "getOwnPropertyNames", "getOwnPropertyDescriptors"]],
                            ["Object.prototype", t.Object.prototype, ["hasOwnProperty", "propertyIsEnumerable", "toString"]],
                            ["String", t.String, ["fromCharCode"]],
                            ["String.prototype", t.String.prototype, ["indexOf", "charAt", "charCodeAt", "trim", "toLowerCase", "toUpperCase", "slice", "replace", "match"]],
                            ["Math", t.Math, ["random", "round", "floor", "ceil", "abs"]],
                            ["Date", t.Date, ["now"]],
                            ["Date.prototype", t.Date.prototype, ["getTime", "toISOString"]],
                            ["Function.prototype", t.Function.prototype, ["bind", "apply", "call"]],
                            ["RegExp.prototype", t.RegExp.prototype, ["test", "exec"]],
                            ["Event.prototype", t.Event.prototype, ["preventDefault", "stopPropagation"]],
                            ["Reflect", t.Reflect, ["get", "set", "has", "ownKeys", "deleteProperty"]],
                            ["document", t.document, ["querySelector", "querySelectorAll", "createElement", "createEvent", "addEventListener", "removeEventListener"]],
                            ["JSON", t.JSON, ["stringify", "parse"]],
                            ["localStorage", t.localStorage, ["setItem", "getItem", "removeItem"]],
                            ["sessionStorage", t.sessionStorage, ["setItem", "getItem", "removeItem"]]
                        ], c = [], a = 0; a < s.length; a++)
                        if (void 0 === (n = (i = s[a])[1])) c.push(i[0] || "[root]");
                        else
                            for (var r = i[2] || [], o = 0; o < r.length; o++) void 0 === (e = n[r[o]]) || this.Ms.test("" + e) || (null !== i[0] ? c.push(i[0] + "." + r[o]) : c.push(r[o]));
                    0 < c.length && console.warn('[WARNING] Crisp found shims of native JavaScript methods. This can alter the chatbox behavior and break things. Make sure not to override listed functions to ensure your chatbox works as expected. You may be looking for other JavaScript libraries in use on this page.\n\nYou can disable this warning by adding: $crisp.push(["safe", true]) to your page JavaScript.\n\nMethods to check:', c)
                }
            } catch (t) {}
        }, X.prototype.st = function() {
            try {
                this.Is = null
            } catch (t) {}
        }, new X);
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        m.Utility = (Y.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, Y.prototype.get_or_fallback = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                e = t;
            try {
                e = null !== n ? (void 0 === t ? "undefined" : r(t)) !== n ? i : t : t || i
            } catch (t) {} finally {
                return e
            }
        }, Y.prototype.lower_string_first = function(t) {
            var i = t;
            try {
                t && (i = "" + t.charAt(0).toLowerCase() + t.slice(1))
            } catch (t) {} finally {
                return i
            }
        }, Y.prototype.pad_number = function(t) {
            var i, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "00",
                e = n;
            try {
                0 <= t && (i = n.length - Math.ceil((t + 1) / 10), e = t ? n.substr(0, i) + t : n)
            } catch (t) {} finally {
                return e
            }
        }, Y.prototype.filter_link_safe = function(t) {
            var i = "#";
            try {
                t && !1 === this.Ns.test(t) && (i = t)
            } catch (t) {} finally {
                return i
            }
        }, Y.prototype.filter_image_url_resize = function(t, i, n) {
            var e = "";
            try {
                e = this.Ts(t, m.Base.Us + "/process/resize/?url=" + encodeURIComponent(t) + "&width=" + i + "&height=" + n)
            } catch (t) {} finally {
                return e
            }
        }, Y.prototype.filter_image_url_original = function(t) {
            var i = "";
            try {
                i = this.Ts(t, m.Base.Us + "/process/original/?url=" + encodeURIComponent(t))
            } catch (t) {} finally {
                return i
            }
        }, Y.prototype.to_hashcode = function(t) {
            var i = 0;
            try {
                if (0 < t.length)
                    for (var n = 0; n < t.length; n++) i = (i << 5) - i + t.charCodeAt(n), i &= i
            } catch (t) {} finally {
                return i
            }
        }, Y.prototype.is_empty = function(t) {
            var i = !0;
            try {
                0 < this.keys(t).length && (i = !1)
            } catch (t) {} finally {
                return i
            }
        }, Y.prototype.is_equal = function(t, i) {
            var n = !0;
            try {
                var e, s = -1,
                    c = void 0;
                if ((void 0 === t ? "undefined" : r(t)) !== (void 0 === i ? "undefined" : r(i))) n = !1;
                else if (t && "object" === (void 0 === t ? "undefined" : r(t)) && i && "object" === (void 0 === i ? "undefined" : r(i)))
                    for (t instanceof Array || i instanceof Array ? (c = this.union(t, i), t.length === c.length && i.length === c.length || (n = !1)) : c = this.union(this.keys(t), this.keys(i)); ++s < c.length && !0 === n;) e = c[s], n = this.is_equal(t[e], i[e]);
                else n = t === i && !0
            } catch (t) {} finally {
                return n
            }
        }, Y.prototype.keys = function(t) {
            var i = [];
            try {
                "object" === (void 0 === t ? "undefined" : r(t)) && t && (i = Object.keys(t))
            } catch (t) {} finally {
                return i
            }
        }, Y.prototype.clone = function(t) {
            var i = void 0;
            try {
                var n, e = void 0,
                    i = Array.isArray(t) ? [] : {};
                for (e in t) n = t[e], i[e] = "object" === (void 0 === n ? "undefined" : r(n)) ? this.clone(n) : n
            } catch (t) {} finally {
                return i
            }
        }, Y.prototype.merge = function(t, i) {
            try {
                "object" === (void 0 === t ? "undefined" : r(t)) && t && Object.assign(t, i)
            } catch (t) {} finally {
                return t
            }
        }, Y.prototype.intersect = function(t, i) {
            var n = [];
            try {
                for (var e = 0; e < t.length; e++) - 1 !== i.indexOf(t[e]) && n.push(t[e])
            } catch (t) {} finally {
                return n
            }
        }, Y.prototype.union = function(t, i) {
            var n = [];
            try {
                for (var e = 0; e < t.length; e++) - 1 === n.indexOf(t[e]) && n.push(t[e]);
                for (var s = 0; s < i.length; s++) - 1 === n.indexOf(i[s]) && n.push(i[s])
            } catch (t) {} finally {
                return n
            }
        }, Y.prototype.extract = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
                e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1,
                s = i || n || "";
            try {
                var c = (i || "").trim().match(t),
                    s = c && c[e] ? c[e] : n || ""
            } catch (t) {} finally {
                return s
            }
        }, Y.prototype.compare_rule = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : ".",
                e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : ".",
                s = !1;
            try {
                s = -1 !== (i = !0 === this.Ps.test(i) ? (i = i.replace(this.Ps, this.Ls)).replace(this.Js, "") : i).indexOf("*") ? (i = (i = (i = (i = i.replace(this.Vs, this.Ws)).replace(this.Hs, this.Gs)).replace(this.Ks, e + "*")).replace(this.Zs, n + "*"), new RegExp("^" + i + "$").test(t) && !0) : t === i && !0
            } catch (t) {} finally {
                return s
            }
        }, Y.prototype.compare_rules = function(t, i, n) {
            var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : ".",
                s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : ".",
                c = !1,
                a = !1,
                r = !1;
            try {
                if (0 < i.length) {
                    for (var o = 0; o < i.length && !0 !== a;) a = this.compare_rule(t, i[o], e, s), o++;
                    !1 === a && (c = !0)
                }
                if (!1 === a && 0 < n.length) {
                    for (var h = 0; h < n.length && !0 !== r;) r = this.compare_rule(t, n[h], e, s), h++;
                    c = r
                }
            } catch (t) {} finally {
                return c
            }
        }, Y.prototype.normalize_url_path = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
                e = "";
            try {
                i ? 1 < i.length && "/" !== i[i.length - 1] && "*" !== i[i.length - 1] && (i += "/") : i = "/", e = "" + n + t + i
            } catch (t) {} finally {
                return e
            }
        }, Y.prototype.compare_page_rules = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                e = !1;
            try {
                if (0 < i.length) {
                    var s, c = [],
                        a = [],
                        r = [];
                    null === n && (n = m.Base.Ys);
                    for (var o = 0; o < i.length; o++) {
                        var h = (i[o] || "").trim();
                        h && ((s = (h = !1 === this.Xs.test(h) ? this.normalize_url_path(n, h) : h).match(this.Xs)) ? c.push(this.normalize_url_path(s[2], s[3], s[1])) : c.push("" + n + h))
                    }
                    for (var u = t.match(this.Xs), l = u ? this.normalize_url_path(u[2], u[3], u[1]) : null, f = 0; f < c.length; f++)(!0 === this.Ps.test(c[f]) ? a : r).push(c[f]);
                    !0 === this.compare_rules(l, a, r, "[^/]", ".") && (e = !0)
                }
            } catch (t) {} finally {
                return e
            }
        }, Y.prototype.play_media = function(t) {
            try {
                var i = t.play();
                void 0 !== i && "function" == typeof i.catch && i.catch(function(t) {})
            } catch (t) {}
        }, Y.prototype.acquire_channel_url_regex = function(t, i) {
            var n, e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
                s = null;
            try {
                m.Base.Qs.channels[t] && ((s = (this.tc[t] || {})[i]) || (n = m.Chat.Interface.ic("helpdesk"), s = new RegExp("^" + m.Library.crisp.web.Parse.escape_regex(n) + e + "$"), this.tc[t] = this.tc[t] || {}, this.tc[t][i] = s))
            } catch (t) {} finally {
                return s
            }
        }, Y.prototype.next_render = function(t) {
            try {
                m.Library.vue.nextTick(t)
            } catch (t) {}
        }, Y.prototype.set_timeout = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                n = null;
            try {
                if (!m.Library.crisp.client.Schedule) throw new Error("Could not set timeout after " + i + "ms, as the schedule wrapper is not yet available");
                n = m.Library.crisp.client.Schedule.set_timeout(t, i)
            } catch (t) {} finally {
                return n
            }
        }, Y.prototype.clear_timeout = function(t) {
            try {
                if (!m.Library.crisp.client.Schedule) throw new Error("Could not clear timeout #" + t + ", as the schedule wrapper is not yet available");
                m.Library.crisp.client.Schedule.clear_timeout(t)
            } catch (t) {}
        }, Y.prototype.set_interval = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                n = null;
            try {
                if (!m.Library.crisp.client.Schedule) throw new Error("Could not set interval every " + i + "ms, as the schedule wrapper is not yet available");
                n = m.Library.crisp.client.Schedule.set_interval(t, i)
            } catch (t) {} finally {
                return n
            }
        }, Y.prototype.clear_interval = function(t) {
            try {
                if (!m.Library.crisp.client.Schedule) throw new Error("Could not clear interval #" + t + ", as the schedule wrapper is not yet available");
                m.Library.crisp.client.Schedule.clear_interval(t)
            } catch (t) {}
        }, Y.prototype.add_event_listener = function(t, i, n, e) {
            var s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {};
            try {
                if (!m.Library.crisp.client.Listener) throw new Error("Could not add event listener '" + n + "' to '" + i + "' instance, as the listener wrapper is not yet available");
                m.Library.crisp.client.Listener.add_event(t, i, n, e, s)
            } catch (t) {}
        }, Y.prototype.remove_event_listener = function(t, i, n) {
            try {
                if (!m.Library.crisp.client.Listener) throw new Error("Could not remove event listener '" + n + "' from '" + i + "' instance, as the listener wrapper is not yet available");
                m.Library.crisp.client.Listener.remove_event(t, i, n)
            } catch (t) {}
        }, Y.prototype.reset_instance_children = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            try {
                var n, e = null !== i ? i : t,
                    s = [];
                for (n in t) {
                    var c = t[n];
                    c !== e && c && "object" === (void 0 === c ? "undefined" : r(c)) && "function" == typeof c.reset && c.reset(s)
                }
                for (; 0 < s.length;) s.shift()()
            } catch (t) {}
        }, Y.prototype.Ts = function(t, i) {
            var n = "";
            try {
                n = t.substring(0, m.Base.Us.length) === m.Base.Us ? t : i
            } catch (t) {} finally {
                return n
            }
        }, Y.prototype.st = function() {
            try {
                this.tc = {}
            } catch (t) {}
        }, new Y), m.Feature = (Z.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, Z.prototype.has_screen_touch = function() {
            try {
                return this.nc
            } catch (t) {}
        }, Z.prototype.has_css_animations = function() {
            try {
                return this.ec
            } catch (t) {}
        }, Z.prototype.has_html_audio = function() {
            try {
                return null !== this.sc && !0
            } catch (t) {}
        }, Z.prototype.html_audio_format = function() {
            try {
                return this.sc
            } catch (t) {}
        }, Z.prototype.cc = function(t) {
            var i = !1;
            try {
                i = !!(t in window)
            } catch (t) {} finally {
                return i
            }
        }, Z.prototype.ac = function(t) {
            var i = !1;
            try {
                var n = document.documentElement.style,
                    e = ["Khtml", "Ms", "O", "Moz", "Webkit"],
                    s = e.length;
                if (t in n) i = !0;
                else
                    for (t = t.replace(/^[a-z]/, function(t) {
                            return t.toUpperCase()
                        }); s--;)
                        if (e[s] + t in n) {
                            i = !0;
                            break
                        }
            } catch (t) {} finally {
                return i
            }
        }, Z.prototype.rc = function() {
            var i = this;
            try {
                this.nc = (this.cc("ontouchstart") || 0 < navigator.maxTouchPoints) && !0, window.addEventListener("touchstart", function t() {
                    i.nc = !0, window.removeEventListener("touchstart", t)
                }, !1)
            } catch (t) {}
        }, Z.prototype.oc = function() {
            var t = null;
            try {
                var i = document.createElement("audio"),
                    n = !(!i.canPlayType || !i.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, "")),
                    e = !(!i.canPlayType || !i.canPlayType('audio/mp4; codecs="mp4a.40.2"').replace(/no/, "")),
                    s = !(!i.canPlayType || !i.canPlayType("audio/mpeg;").replace(/no/, ""));
                1 == n ? t = "oga" : 1 == e ? t = "m4a" : 1 == s && (t = "mp3")
            } catch (t) {} finally {
                return t
            }
        }, Z.prototype.st = function() {
            try {
                this.ec = this.ac("animation"), this.sc = this.oc(), this.rc()
            } catch (t) {}
        }, new Z), m.Store = (K.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, K.prototype.hc = function(t, i, n) {
            try {
                if (void 0 === m.Store.$events[t]) {
                    m.Store.$events[t] = {};
                    for (var e = 0; e < i.length; e++) {
                        var s = i[e],
                            c = n[s];
                        if ("function" != typeof c) throw new Error("Event to bind not found in realm: " + t + " for name: " + s);
                        m.Store.$events[t][s] = c.At(n)
                    }
                }
            } catch (t) {}
        }, K.prototype.ft = function() {
            try {
                this.$events = {}
            } catch (t) {}
        }, K.prototype.uc = function() {
            try {
                this.$store = {}, this.lc(), this.fc(), this.dc(), this.vc(), this.pc(), this.yc(), this.mc(), this.gc()
            } catch (t) {}
        }, K.prototype.lc = function() {
            try {
                this.$store.base = m.Library.vue.reactive({
                    availability: "none",
                    is_lock_maximized: !1,
                    is_hidden: !1,
                    is_blocked: !1,
                    is_full_view: !1,
                    is_small_view: !1,
                    is_large_view: !1,
                    is_activity_ongoing: !1,
                    has_local_messages: !1,
                    was_availability_online: !1,
                    last_operator_face: !1,
                    force_show: !1,
                    active_operators: [],
                    other_operators_count: 0,
                    website: {
                        id: "",
                        domain: "",
                        name: ""
                    },
                    environment: {
                        types: {
                            file_preview: {}
                        }
                    },
                    configuration: {},
                    runtime: {}
                })
            } catch (t) {}
        }, K.prototype.fc = function() {
            try {
                this.$store.chat = m.Library.vue.reactive({
                    status_marker: "none",
                    is_visible: !1,
                    is_locked: !1,
                    has_offline: !1,
                    has_drop_zone: !1,
                    has_debranding: !1,
                    animate_minimize: !1,
                    animate_maximize: !1,
                    reconnect_failed: !1,
                    reconnect_inactive: !1,
                    blocked: !1,
                    ongoing_operator: {
                        user_id: "",
                        type: "",
                        name: "",
                        url: ""
                    },
                    current_alert: null,
                    channels: [],
                    helpdesk: {
                        search: !1
                    },
                    activity: {
                        metrics: null,
                        last: null
                    },
                    file: {
                        state: "none"
                    },
                    game: {
                        loaded: !1
                    },
                    status: {
                        url: ""
                    },
                    field: {
                        has_value: !1
                    },
                    picker: {
                        type: "smiley",
                        is_visible: !1,
                        has_animation: !1,
                        gif: {
                            results: [],
                            input: ""
                        }
                    }
                })
            } catch (t) {}
        }, K.prototype.dc = function() {
            try {
                this.$store.magnify = m.Library.vue.reactive({
                    state: null,
                    type: null,
                    source: null,
                    name: null,
                    messages: null
                })
            } catch (t) {}
        }, K.prototype.vc = function() {
            try {
                this.$store.spotlight = m.Library.vue.reactive({
                    input: "",
                    url: "",
                    articles: [],
                    has_results: !1,
                    loading: !1
                })
            } catch (t) {}
        }, K.prototype.pc = function() {
            try {
                this.$store.article = m.Library.vue.reactive({
                    loaded: !1,
                    url: ""
                })
            } catch (t) {}
        }, K.prototype.yc = function() {
            try {
                this.$store.call = m.Library.vue.reactive({
                    mode: null,
                    size: "maximized",
                    state: null,
                    duration: 0,
                    user: {
                        user_id: "",
                        nickname: "",
                        type: ""
                    },
                    muted: {
                        audio: !1,
                        video: !1
                    },
                    actions: []
                })
            } catch (t) {}
        }, K.prototype.mc = function() {
            try {
                this.$store.minimized = m.Library.vue.reactive({
                    pane: {
                        is_ongoing: !1,
                        is_waiting: !1,
                        animate_entrance: !1,
                        general_entice: {
                            visible: !1,
                            is_concealed: !1,
                            animate_full: !1,
                            animate_short: !1
                        },
                        unread: {
                            visible: !1,
                            count: 0
                        },
                        helpdesk: {
                            url: null
                        }
                    },
                    tooltips: {
                        new_messages: {
                            visible: !1,
                            animate: !0
                        }
                    }
                })
            } catch (t) {}
        }, K.prototype.gc = function() {
            try {
                this.$store.messages = m.Library.vue.reactive({
                    list: [],
                    preview: [],
                    fingerprints: {},
                    is_composing: !1,
                    latest_fingerprint: null
                })
            } catch (t) {}
        }, K.prototype.st = function() {
            try {
                this.ft(), this.uc()
            } catch (t) {}
        }, new K), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, m.Action = (G.prototype.reset = function() {
            try {
                void 0 === m.Base._c.__spool.pending_actions && (m.Base._c.__spool.pending_actions = [])
            } catch (t) {}
        }, G.prototype.do_chat_open = function() {
            !0 === m.Chat.wc ? m.Chat.Interface.bc() : m.Minimized.Interface.kc()
        }, G.prototype.do_chat_close = function() {
            !0 === m.Chat.wc && m.Chat.Interface.xc()
        }, G.prototype.do_chat_toggle = function() {
            !0 === this.is_chat_closed() ? this.do_chat_open() : this.do_chat_close()
        }, G.prototype.do_chat_show = function() {
            !0 === this.is_chat_hidden() && (m.Store.$store.base.is_hidden = !1, (m.Store.$store.base.force_show = !0) === m.Chat.wc && m.Utility.next_render(function() {
                m.Chat.Interface.$c()
            }))
        }, G.prototype.do_chat_hide = function() {
            !0 === this.is_chat_visible() && (m.Store.$store.base.is_hidden = !0, m.Store.$store.base.force_show = !1)
        }, G.prototype.do_helpdesk_search = function() {
            if (!0 !== m.Spotlight.Fc()) throw new Error("Helpdesk search is unavailable");
            this.do_chat_show()
        }, G.prototype.do_helpdesk_article_open = function(t, i) {
            if ("string" != typeof t || !t) throw new Error("Invalid article locale");
            if ("string" != typeof i || !i) throw new Error("Invalid article slug");
            if (!0 !== m.Article.Fc(t, i)) throw new Error("Helpdesk article is unavailable");
            this.do_chat_show()
        }, G.prototype.do_helpdesk_query = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
            m.Base.jc(function() {
                m.Library.crisp.client.Helpdesk.get_article_search(t, m.Locale.code())
            })
        }, G.prototype.do_message_send = function(n, e) {
            var s = this;
            m.Base.jc(function() {
                var t = s.Ec(n, e);
                if (null !== t.type && null !== t.content) {
                    var i = !0 === m.Chat.Message.zc() ? s.Cc : 0;
                    switch (t.type) {
                        case "text":
                            m.Library.crisp.client.Message.send_text_message(t.content, i);
                            break;
                        case "file":
                            m.Library.crisp.client.Message.send_file_message(t.content.name, t.content.url, t.content.type, i);
                            break;
                        case "animation":
                            m.Library.crisp.client.Message.send_animation_message(t.content.url, t.content.type, i);
                            break;
                        case "audio":
                            m.Library.crisp.client.Message.send_audio_message(t.content.url, t.content.type, t.content.duration, i);
                            break;
                        case "picker":
                            m.Library.crisp.client.Message.send_picker_message(t.content.id, t.content.text, t.content.choices, i);
                            break;
                        case "field":
                            m.Library.crisp.client.Message.send_field_message(t.content.id, t.content.text, t.content.explain, i)
                    }
                    m.Chat.Sc()
                }
            })
        }, G.prototype.do_message_show = function(i, n) {
            var e = this,
                s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                c = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
            m.Base.jc(function() {
                var t = e.Ec(i, n);
                null !== t.type && null !== t.content && m.Chat.Message.Ac(t.type, t.content, s, c)
            })
        }, G.prototype.do_message_read = function() {
            !0 === m.Chat.wc && m.Library.crisp.client.Message.mark_messages_as_read()
        }, G.prototype.do_message_thread_start = function(t) {
            if ("string" != typeof t || !t) throw new Error("Invalid message thread start text");
            if (!0 !== m.Chat.wc) throw new Error("Chat must be active for message thread to start");
            m.Base.jc(function() {
                m.Library.crisp.client.Message.send_message_thread("start", t)
            })
        }, G.prototype.do_message_thread_end = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
            if (t && ("string" != typeof t || !t)) throw new Error("Invalid message thread end text");
            if (!0 !== m.Chat.wc) throw new Error("Chat must be active for message thread to end");
            m.Base.jc(function() {
                m.Library.crisp.client.Message.send_message_thread("end", t || "")
            })
        }, G.prototype.do_session_reset = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            m.Base.Ic(!1, !0), m.Library.crisp.client.Session.reset(), !1 === t ? (m.Base.qc(), m.Base.reset(), m.Base.Dc()) : document.location.reload(!1)
        }, G.prototype.do_trigger_run = function(t) {
            if (!0 !== m.Trigger.Oc(t)) throw new Error("Trigger does not exist")
        }, G.prototype.is_chat_opened = function() {
            return !(!0 !== m.Store.$store.chat.is_opened || !0 !== m.Chat.wc)
        }, G.prototype.is_chat_closed = function() {
            return !1 === this.is_chat_opened() && !0
        }, G.prototype.is_chat_visible = function() {
            return !1 === this.is_chat_hidden() && !0
        }, G.prototype.is_chat_hidden = function() {
            return (null === m.Base.Rc || !0 === m.Store.$store.base.is_hidden || null === m.Base.Rc.offsetParent) && !0
        }, G.prototype.is_chat_small = function() {
            return !1 === m.Base.Bc() && !0
        }, G.prototype.is_chat_large = function() {
            return !1 === this.is_chat_small() && !0
        }, G.prototype.is_session_ongoing = function() {
            return (!0 === m.Chat.Message.Mc || !0 === m.Chat.Message.Nc) && !0
        }, G.prototype.is_website_available = function() {
            return m.Availability.Tc && !0
        }, G.prototype.get_chat_unread_count = function() {
            return m.Chat.Notification.Uc || 0
        }, G.prototype.get_message_text = function() {
            return !0 === m.Chat.wc && m.Chat.Selector.get("form_textarea_message").value || ""
        }, G.prototype.get_session_identifier = function() {
            return m.Broker.Rt || null
        }, G.prototype.get_session_data = function() {
            return m.Library.crisp.client.Session.get_data(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null) || null
        }, G.prototype.get_user_email = function() {
            return m.Library.crisp.client.Session.get_email() || null
        }, G.prototype.get_user_phone = function() {
            return m.Library.crisp.client.Session.get_phone() || null
        }, G.prototype.get_user_nickname = function() {
            return m.Library.crisp.client.Session.get_nickname() || null
        }, G.prototype.get_user_avatar = function() {
            return m.Library.crisp.client.Session.get_avatar() || null
        }, G.prototype.get_user_company = function() {
            var t = m.Library.crisp.client.Session.get_company() || null;
            return ((t || {}).employment || {}).title && (t.employment = [t.employment.title, t.employment.role]), ((t || {}).geolocation || {}).country && (t.geolocation = [t.geolocation.country, t.geolocation.city || null]), t
        }, G.prototype.set_message_text = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
            if ("string" != typeof t) throw new Error("Invalid message text");
            var i = m.Chat.Selector.get("form_textarea_message");
            i && !0 !== i.disabled && (i.value = t, i.dispatchEvent(new window.KeyboardEvent("keydown")))
        }, G.prototype.set_session_data = function(c, a) {
            m.Base.jc(function() {
                for (var t, i = c instanceof Array && c[0] instanceof Array ? c : [
                        [c, a]
                    ], n = {}, e = 0; e < i.length; e++) {
                    var s = i[e][1];
                    s && "string" == typeof s && ("false" === s ? s = !1 : "true" === s ? s = !0 : !1 === isNaN(s) && (s = Number(s))), n[i[e][0]] = s
                }
                if (!0 !== m.Validate.is_data(n)) throw new Error("Invalid data");
                for (t in m.Library.crisp.client.Session.set_data(n), n) m.Trigger.Pc("user_data", {
                    key: t,
                    value: n[t]
                })
            }, !0)
        }, G.prototype.set_session_segments = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            m.Base.jc(function() {
                if (!t || !0 !== m.Validate.are_segments(t)) throw new Error("Invalid segments value");
                m.Library.crisp.client.Session.set_segments(t, i)
            }, !0)
        }, G.prototype.set_session_event = function(n) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            m.Base.jc(function() {
                var t = n instanceof Array && n[0] instanceof Array ? n : [
                    [n, e, s]
                ];
                if (!0 !== m.Validate.are_events(t)) throw new Error("Invalid event text or data");
                m.Library.crisp.client.Session.send_event(t);
                for (var i = 0; i < t.length; i++) m.Trigger.Pc("user_event", {
                    text: t[i][0]
                })
            }, !0)
        }, G.prototype.set_user_email = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            if (!t || !0 !== m.Validate.is_email(t)) throw new Error("Invalid email");
            if (null !== i && !0 !== this.Lc.test(i)) throw new Error("Invalid verify signature (should be lowercase HMAC-SHA256)");
            m.Library.crisp.client.Session.set_email(t, !1, i), this.Jc(), this.Vc("user:email:changed", t)
        }, G.prototype.set_user_phone = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
            if (!(t = "number" == typeof t ? "" + t : t) || !0 !== m.Validate.is_phone(t)) throw new Error("Invalid phone");
            m.Library.crisp.client.Session.set_phone(t), this.Jc(), this.Vc("user:phone:changed", t)
        }, G.prototype.set_user_nickname = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
            if ("string" != typeof t || !t) throw new Error("Invalid nickname");
            m.Library.crisp.client.Session.set_nickname(t), this.Vc("user:nickname:changed", t)
        }, G.prototype.set_user_avatar = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
            if (!t || !0 !== m.Validate.is_avatar(t)) throw new Error("Invalid avatar");
            m.Library.crisp.client.Session.set_avatar(t), this.Vc("user:avatar:changed", t)
        }, G.prototype.set_user_company = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            if (!t) throw new Error("Invalid company name");
            var n = {
                name: t
            };
            if (i.url) {
                if ("string" != typeof i.url) throw new Error("Invalid URL");
                n.url = i.url
            }
            if (i.description) {
                if ("string" != typeof i.description) throw new Error("Invalid description");
                n.description = i.description
            }
            if ((i.employment || [])[0]) {
                if ("string" != typeof i.employment[0] || "string" != typeof i.employment[1]) throw new Error("Invalid employment");
                n.employment = {
                    title: i.employment[0],
                    role: i.employment[1]
                }
            }
            if ((i.geolocation || [])[0]) {
                if ("string" != typeof i.geolocation[0] || i.geolocation[1] && "string" != typeof i.geolocation[1]) throw new Error("Invalid geolocation");
                n.geolocation = {
                    country: i.geolocation[0],
                    city: i.geolocation[1] || null
                }
            }
            m.Library.crisp.client.Session.set_company(n)
        }, G.prototype.config_availability_tooltip = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            m.Base.Wc("availability_tooltip", t), !0 === t && !0 !== m.Base.Bc() && m.Minimized.Interface.Hc()
        }, G.prototype.config_hide_vacation = function() {
            m.Base.Wc("hide_vacation", 0 < arguments.length && void 0 !== arguments[0] && arguments[0])
        }, G.prototype.config_hide_on_away = function() {
            m.Base.Wc("hide_on_away", 0 < arguments.length && void 0 !== arguments[0] && arguments[0])
        }, G.prototype.config_hide_on_mobile = function() {
            m.Base.Wc("hide_on_mobile", 0 < arguments.length && void 0 !== arguments[0] && arguments[0])
        }, G.prototype.config_position_reverse = function() {
            m.Base.Wc("position_reverse", 0 < arguments.length && void 0 !== arguments[0] && arguments[0])
        }, G.prototype.config_sound_mute = function() {
            m.Sound.mute(0 < arguments.length && void 0 !== arguments[0] && arguments[0])
        }, G.prototype.config_color_theme = function() {
            m.Base.Gc({
                color: {
                    theme: 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null
                }
            })
        }, G.prototype.config_container_index = function() {
            m.Base.Gc({
                other: {
                    container_index: 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null
                }
            })
        }, G.prototype.config_show_operator_count = function() {
            m.Base.Gc({
                other: {
                    show_operator_count: !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]
                }
            })
        }, G.prototype.Kc = function(t, i) {
            if ("function" != typeof i) throw new Error("Handler must be a function");
            this.Zc[t] = i
        }, G.prototype.Yc = function(t) {
            void 0 !== this.Zc[t] && delete this.Zc[t]
        }, G.prototype.Vc = function(t) {
            var i = this,
                n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
            if (-1 === this.Xc.indexOf(t)) throw new Error("Event namespace not recognized: " + t);
            "function" == typeof this.Zc[t] && m.Utility.next_render(function() {
                try {
                    i.Zc[t].apply(window, n instanceof Array ? n : void 0 !== n ? [n] : [])
                } catch (t) {}
            })
        }, G.prototype.Qc = function() {
            try {
                var t = m.Base._c.__spool.pending_actions;
                if (delete m.Base._c.__spool.pending_actions, t && 0 < t.length)
                    for (var i = 0; i < t.length; i++) try {
                        m.Pipeline.push(t[i])
                    } catch (t) {}
            } catch (t) {}
        }, G.prototype.Jc = function() {
            !0 === m.Chat.wc && (!0 === m.Chat.Message.Mc && m.Chat.Alert.ta("wait_reply", "show"), m.Chat.Alert.ta("warn_reply", "hide"), m.Chat.Alert.ta("email_invalid", "hide"), m.Chat.Intent.ta("identity", !1))
        }, G.prototype.Ec = function(t, i) {
            var n = {
                type: null,
                content: null
            };
            switch (t) {
                case "text":
                    if ("string" != typeof i || !i) throw new Error("Invalid text message");
                    n.type = "text", n.content = i;
                    break;
                case "file":
                    if ("object" !== (void 0 === i ? "undefined" : r(i)) || !i.name || !i.url || !i.type) throw new Error("Invalid file message");
                    n.type = "file", n.content = {
                        name: i.name,
                        url: i.url,
                        type: i.type
                    };
                    break;
                case "animation":
                    if ("object" !== (void 0 === i ? "undefined" : r(i)) || !i.url || !i.type) throw new Error("Invalid animation message");
                    n.type = "animation", n.content = {
                        url: i.url,
                        type: i.type
                    };
                    break;
                case "audio":
                    if ("object" !== (void 0 === i ? "undefined" : r(i)) || !i.url || !i.type || !i.duration) throw new Error("Invalid audio message");
                    n.type = "audio", n.content = {
                        url: i.url,
                        type: i.type,
                        duration: i.duration
                    };
                    break;
                case "picker":
                    if ("object" !== (void 0 === i ? "undefined" : r(i)) || !i.id || !i.text || 0 === (i.choices || []).length) throw new Error("Invalid picker message");
                    n.type = "picker", n.content = {
                        id: i.id,
                        text: i.text,
                        choices: i.choices
                    };
                    break;
                case "field":
                    if ("object" !== (void 0 === i ? "undefined" : r(i)) || !i.id || !i.text || !i.explain) throw new Error("Invalid field message");
                    n.type = "field", n.content = {
                        id: i.id,
                        text: i.text,
                        explain: i.explain
                    }
            }
            return n
        }, new G), m.Pipeline = (H.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, H.prototype.push = function(t) {
            var i = (window.$__CRISP_INSTANCE || {}).__spool || {};
            void 0 !== i.pending_actions ? i.pending_actions.push(t) : t[0] && void 0 !== t[1] && -1 !== this.ia.indexOf(t[0]) && "function" == typeof this[t[0]] && this[t[0]](t[1], t[2] || [])
        }, H.prototype.get = function(t) {
            return this.na("get", t, this.ea(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []))
        }, H.prototype.set = function(t) {
            return this.na("set", t, this.ea(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []))
        }, H.prototype.is = function(t) {
            return this.na("is", t)
        }, H.prototype.do = function(t) {
            return this.na("do", t, this.ea(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []))
        }, H.prototype.on = function(t, i) {
            return this.sa("on", t, [t, i])
        }, H.prototype.off = function(t) {
            return this.sa("off", t, [t])
        }, H.prototype.config = function(t) {
            return this.na("config", t, this.ea(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []))
        }, H.prototype.safe = function() {
            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
            if ("boolean" != typeof t) throw new Error("Safe mode value must be 'true' or 'false'.");
            this.qs = t
        }, H.prototype.help = function() {
            var t, i = [];
            for (t in m.Action) {
                var n = t.split("_");
                1 < n.length && -1 !== this.ia.indexOf(n[0]) && "function" == typeof m.Action[t] && i.push("$crisp." + n[0] + "('" + n.slice(1).join(":") + "')")
            }
            for (var e = 0; e < this.ca.length; e++)
                for (var s = 0; s < m.Action.Xc.length; s++) i.push("$crisp." + this.ca[e] + "('" + m.Action.Xc[s] + "')");
            return i
        }, H.prototype.ea = function(t) {
            return t ? t instanceof Array ? t : [t] : []
        }, H.prototype.na = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [];
            try {
                var e = t + "_" + (i || "").replace(/:/g, "_");
                if ("function" == typeof m.Action[e]) return m.Action[e].apply(m.Action, n);
                this.aa(i)
            } catch (t) {
                if (!0 !== this.qs) throw t
            }
        }, H.prototype.sa = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [];
            try {
                var e = m.Action.ra[t];
                if ("function" != typeof e) throw new Error("No such event method for action: " + t);
                if (-1 !== m.Action.Xc.indexOf(i)) return e.apply(m.Action, n);
                this.aa(i)
            } catch (t) {
                if (!0 !== this.qs) throw t
            }
        }, H.prototype.aa = function(t) {
            throw new Error("No such namespace: " + t + " - Call $crisp.help() for a list of available actions.")
        }, H.prototype.st = function() {
            try {
                this.qs = !1
            } catch (t) {}
        }, new H), m.Validate = (W.prototype.is_email = function(t) {
            var i = !1;
            try {
                t.match(this.oa) && (i = !0)
            } catch (t) {} finally {
                return i
            }
        }, W.prototype.is_phone = function(t) {
            var i = !1;
            try {
                t.match(this.ha) && (i = !0)
            } catch (t) {} finally {
                return i
            }
        }, W.prototype.is_avatar = function(t) {
            var i = !1;
            try {
                t.match(this.ua) && (i = !0)
            } catch (t) {} finally {
                return i
            }
        }, W.prototype.is_data = function(t) {
            var i = !1;
            try {
                if (t instanceof Object)
                    for (var n in i = 0 < m.Utility.keys(t).length && !0, t) {
                        var e = t[n];
                        ("string" != typeof n || !0 !== this.la.test(n) || "string" != typeof e && "boolean" != typeof e && "number" != typeof e) && (i = !1)
                    }
            } catch (t) {} finally {
                return i
            }
        }, W.prototype.are_events = function(t) {
            var i = !1;
            try {
                if (t instanceof Array)
                    for (var i = 0 < t.length && !0, n = 0; n < t.length; n++) "string" == typeof t[n][0] && t[n][0] && (!1 !== m.Utility.is_empty(t[n][1]) || !1 !== this.is_data(t[n][1])) || (i = !1)
            } catch (t) {} finally {
                return i
            }
        }, W.prototype.are_segments = function(t) {
            var i = !1;
            try {
                if (t instanceof Array)
                    for (var i = !0, n = [], e = 0; e < t.length; e++) {
                        var s = (t[e] || "").trim();
                        if (!s || s.length > this.fa || -1 !== n.indexOf(s)) {
                            i = !1;
                            break
                        }
                        n.push(s)
                    }
            } catch (t) {} finally {
                return i
            }
        }, new W), m.Date = (V.prototype.directive = function(i) {
            var n = this,
                t = void 0;
            try {
                var e = i.get() || {},
                    s = e.date,
                    c = e.format || "",
                    a = e.type || "date",
                    r = null,
                    o = function() {
                        m.Utility.clear_timeout(r), r = null
                    },
                    h = function() {
                        o(), r = m.Utility.set_timeout(function() {
                            u()
                        }, n.da * n.va)
                    },
                    u = function() {
                        var t = "";
                        switch (a) {
                            case "date":
                                t = n.format_date(n.timestamp_to_iso(s));
                                break;
                            case "duration":
                                t = n.format_duration(s)
                        }
                        c && (t = m.Library.crisp.web.Parse.replace(c, [m.Utility.lower_string_first(t)])), i.el.innerHTML = t, h()
                    };
                i.effect(function() {
                    var t = i.get() || {};
                    s = t.date, c = t.format || "", u()
                }), t = function() {
                    o()
                }
            } catch (t) {} finally {
                return t || function() {}
            }
        }, V.prototype.timestamp_to_iso = function(t) {
            try {
                return new Date(t).toISOString()
            } catch (t) {}
        }, V.prototype.iso_to_timestamp = function(t) {
            try {
                return new Date(t).getTime()
            } catch (t) {}
        }, V.prototype.timestamp_to_properties = function(t) {
            var i, n, e, s = {
                day: "none",
                month: "none",
                year: "none",
                title: null
            };
            try {
                0 < t && (i = new Date(t), n = m.Locale.text("days", this.pa[i.getDay()]), e = m.Locale.text("months", this.ya[i.getMonth()]), s.day = "" + i.getDate(), s.month = "" + (i.getMonth() + 1), s.year = "" + i.getFullYear(), s.title = n + ", " + i.getDate() + " " + e, (new Date).getYear() !== i.getYear() && (s.title += " (" + s.year + ")"))
            } catch (t) {} finally {
                return s
            }
        }, V.prototype.seconds_in_timestamp = function(t) {
            var i = 0;
            try {
                if (isNaN(t)) throw new Error("Timestamp is not a number");
                i = Math.floor(parseInt(t, 10) / this.va)
            } catch (t) {} finally {
                return i
            }
        }, V.prototype.timestamp = function() {
            try {
                return (new Date).getTime()
            } catch (t) {}
        }, V.prototype.difference = function(t, i) {
            var n = -1;
            try {
                n = this.iso_to_timestamp(t) - this.iso_to_timestamp(i)
            } catch (t) {} finally {
                return n
            }
        }, V.prototype.equal = function(t, i) {
            var n = !1;
            try {
                n = 0 === this.difference(t, i) && !0
            } catch (t) {} finally {
                return n
            }
        }, V.prototype.format_time = function(t) {
            var i, n, e, s = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                c = "0:00";
            try {
                0 <= t && (t = Math.round(t), i = Math.floor(t / this.ma), n = Math.floor(t % this.ma / this.ga), e = t % this.ga % this.ma, c = 0 < i || !0 === s ? i + ":" + m.Utility.pad_number(n, "00") + ":" + m.Utility.pad_number(e, "00") : n + ":" + m.Utility.pad_number(e, "00"))
            } catch (t) {} finally {
                return c
            }
        }, V.prototype.format_date = function(t) {
            var i = null;
            try {
                var n = new Date,
                    e = new Date(t),
                    s = n.getTime() - e.getTime(),
                    c = this.wa(s);
                if (c.type || (c.type = "far_away", c.data = {
                        date_full: e.toLocaleDateString()
                    }), !(i = m.Template.dom(m.Template.render("date_" + c.type, c.data)).innerText)) throw new Error("Empty parsed date for ISO string: " + t)
            } catch (t) {} finally {
                return i
            }
        }, V.prototype.format_duration = function(t) {
            var i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                n = null;
            try {
                var e = this.wa(t, i);
                if (e.type || (e.type = "days"), !(n = m.Template.dom(m.Template.render("duration_" + e.type, e.data)).innerText)) throw new Error("Empty parsed duration for duration: " + t)
            } catch (t) {} finally {
                return n
            }
        }, V.prototype.wa = function(t) {
            var i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                n = {};
            try {
                var e = Math.round(t / this.va);
                e < 10 && !0 === i ? n.type = "now" : e < this.ga ? n.type = "seconds" : e < this.ma ? (n.type = "minutes", n.data = {
                    minutes: Math.floor(e / this.ga)
                }) : e < this.ba && (n.type = "hours", n.data = {
                    hours: Math.floor(e / this.ma)
                })
            } catch (t) {} finally {
                return n
            }
        }, new V), m.Theme = (J.prototype.colors = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = {};
            try {
                var e, s = !0 !== i ? m.Plugin.get_customization("color", "chatbox") : {},
                    c = this.ka[t] || this.ka[this.xa];
                for (e in this.$a(s, c), s) n[e] = {
                    hex: s[e],
                    rgba: this.Fa.At(this, s[e])
                }
            } catch (t) {} finally {
                return n
            }
        }, J.prototype.$a = function(t, i) {
            try {
                for (var n in i) t[n] || (t[n] = i[n])
            } catch (t) {}
        }, J.prototype.Fa = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
                n = "rgba(0, 0, 0, 1)";
            try {
                var e = [0, 0, 0],
                    s = t.match(this.ja);
                s && (e[0] = parseInt(s[1], this.Ea), e[1] = parseInt(s[2], this.Ea), e[2] = parseInt(s[3], this.Ea)), n = "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + i + ")"
            } catch (t) {} finally {
                return n
            }
        }, new J), m.Plugin = (L.prototype.get_triggers = function() {
            var t = {};
            try {
                t = ((m.Base.Qs.plugins["urn:crisp.im:triggers:0"] || {}).settings || {}).triggers || {}
            } catch (t) {} finally {
                return t
            }
        }, L.prototype.get_customization = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                e = null;
            try {
                e = (((m.Base.Qs.plugins["urn:crisp.im:customization:0"] || {}).settings || {})[t] || {})[i] || {}, n && (e = e[n] || null)
            } catch (t) {} finally {
                return e
            }
        }, new L), m.Sound = (P.prototype.reset = function() {
            try {
                this.stop(), this.st()
            } catch (t) {}
        }, P.prototype.allow = function() {
            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
            try {
                this.za = t
            } catch (t) {}
        }, P.prototype.mute = function() {
            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
            try {
                this.Ca = t
            } catch (t) {}
        }, P.prototype.initialize = function(t) {
            try {
                if (!1 === this.za) return;
                this.Sa[t] = this.Sa[t] || {};
                for (var i = this.Aa[t], n = 0; n < i.length; n++) void 0 === this.Sa[t][i[n]] && this.Ia(t, i[n])
            } catch (t) {}
        }, P.prototype.start = function(n, e) {
            var s = this,
                c = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 50;
            try {
                if (!1 === this.za) return;
                if (!0 === m.Feature.has_html_audio() && !0 === this.qa(n)) {
                    var t = this.Aa[n];
                    if (void 0 === t) throw new Error("Subset does not exist: " + n);
                    if (-1 === t.indexOf(e)) throw new Error("Sound does not exist: " + e + " in subset " + n);
                    this.stop(), this.Ia(n, e, function(t) {
                        var i;
                        null !== s.Da && ("suspended" === s.Da.state && s.Da.resume(), (i = s.Da.createGain()).gain.setValueAtTime(a / 100, 0), i.connect(s.Da.destination), s.Oa = s.Da.createBufferSource(), s.Oa.buffer = t, s.Oa.loop = c, s.Oa.connect(i), s.Oa.start(), s.Ra = n, s.Ba = e)
                    }, function(t) {})
                }
            } catch (t) {}
        }, P.prototype.stop = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            try {
                null === this.Oa || null !== t && t !== this.Ra || null !== i && i !== this.Ba || (this.Oa.stop(), this.Oa = null, this.Ra = null, this.Ba = null)
            } catch (t) {}
        }, P.prototype.Ia = function(i, n) {
            var t, e, s = this,
                c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function() {},
                a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : function() {};
            try {
                this.Sa[i] = this.Sa[i] || {}, this.Ma[i] = this.Ma[i] || {}, void 0 === this.Ma[i][n] ? (this.Ma[i][n] = {
                    success: [c],
                    error: [a]
                }, void 0 !== this.Sa[i][n] ? this.Na("success", i, n, this.Sa[i][n]) : (t = this.Ta(i, n)) && ((e = new window.XMLHttpRequest).open("GET", t, !0), e.responseType = "arraybuffer", e.onload = function() {
                    null === s.Da && (s.Da = s.Ua()), null !== s.Da ? s.Da.decodeAudioData(e.response, function(t) {
                        s.Sa[i][n] = t, s.Na("success", i, n, t)
                    }, function(t) {
                        s.Na("error", i, n, t)
                    }) : s.Na("error", i, n)
                }, e.onerror = function(t) {
                    s.Na("error", i, n, t)
                }, e.send())) : (this.Ma[i][n].success.push(c), this.Ma[i][n].error.push(a))
            } catch (t) {}
        }, P.prototype.Na = function(t, i, n) {
            var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                s = (this.Ma[i] || {})[n];
            if (void 0 !== s) {
                for (var c = 0; c < s[t].length; c++) s[t][c](e);
                delete this.Ma[i][n]
            }
        }, P.prototype.Ta = function(t, i) {
            var n = null;
            try {
                var e = m.Feature.html_audio_format();
                null !== e && (n = m.Base.Pa + "/static/sounds/" + t + "/" + i + "." + e + "?" + m.Base.La)
            } catch (t) {} finally {
                return n
            }
        }, P.prototype.Ua = function() {
            var t = null;
            try {
                try {
                    !0 === m.Event.Ja && ("function" == typeof window.AudioContext ? t = new window.AudioContext : "function" == typeof window.webkitAudioContext && (t = new window.webkitAudioContext))
                } catch (t) {}
            } catch (t) {} finally {
                return t
            }
        }, P.prototype.qa = function(t) {
            var i = !0;
            try {
                var n = !this.Ca && !0,
                    e = "call" === t || !0 !== m.Library.crisp.client.Call.is_ongoing(),
                    i = n && e && !0
            } catch (t) {} finally {
                return i
            }
        }, P.prototype.st = function() {
            try {
                this.za = !0, this.Ca = !1, this.Da = null, this.Oa = null, this.Ra = null, this.Ba = null, this.Sa = {}, this.Ma = {}
            } catch (t) {}
        }, new P), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, m.Locale = (U.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, U.prototype.detect = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                i = this.Va;
            try {
                var n = void 0,
                    e = void 0,
                    s = [];
                for (t.length && (this.Wa = m.Utility.intersect(t, this.Ha), 0 < this.Wa.length && -1 === this.Wa.indexOf(i) && (i = this.Va = this.Wa[0])), n = 0; n < m.Base.Ga.length; n++)(e = m.Base.Ga[n]) && (s.push(e.toLowerCase()), -1 !== e.indexOf("-") && (e = e.split("-")[0]) && s.push(e.toLowerCase()));
                for (n = 0; n < s.length; n++)
                    if (-1 !== this.Wa.indexOf(s[n])) {
                        i = s[n];
                        break
                    }
            } catch (t) {} finally {
                return i
            }
        }, U.prototype.load = function(t, i) {
            var n = this;
            try {
                var e = t; - 1 === this.Wa.indexOf(t) && (e = this.Va), null !== this.Ka && this.Ka.Za.locale_code !== t && (this.Ka = null), null === this.Ka ? m.Base.Ya("locale", "locales/" + e + ".js", function(t) {
                    try {
                        n.Xa(e, t, i)
                    } catch (t) {}
                }) : "function" == typeof i && i()
            } catch (t) {}
        }, U.prototype.name = function() {
            var t = null;
            try {
                if (null === this.Ka) throw new Error("Cannot get locale name, locale data not loaded");
                t = this.Ka.Za.locale_name
            } catch (t) {} finally {
                return t
            }
        }, U.prototype.code = function() {
            var t = null;
            try {
                if (null === this.Ka) throw new Error("Cannot get locale code, locale data not loaded");
                t = this.Ka.Za.locale_code
            } catch (t) {} finally {
                return t
            }
        }, U.prototype.direction = function() {
            var t = null;
            try {
                if (null === this.Ka) throw new Error("Cannot get locale direction, locale data not loaded");
                t = this.Ka.Za.locale_direction, -1 === this.Qa.indexOf(t) && (t = this.tr)
            } catch (t) {} finally {
                return t
            }
        }, U.prototype.text = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [],
                e = null;
            try {
                var s = void 0,
                    c = void 0;
                if ("object" === (void 0 === i ? "undefined" : r(i)) ? (s = i[0], c = i[1]) : s = c = i, null === this.Ka) throw new Error("Cannot get locale text, locale data not loaded");
                if (void 0 === this.Ka.ir[t]) throw new Error("Locale text group not found: " + t);
                if (void 0 === this.Ka.ir[t][c]) throw new Error("Locale text namespace not found in group: " + c + " in " + t);
                e = m.Plugin.get_customization("text", t, s) || this.Ka.ir[t][c], e = m.Library.crisp.web.Parse.replace(e, n), e = this.nr(e)
            } catch (t) {} finally {
                return e
            }
        }, U.prototype.Xa = function(t, i, n) {
            try {
                if (null !== this.Ka) throw new Error("Locale has already been loaded (double requested handled?)");
                if ("object" !== (void 0 === i ? "undefined" : r(i))) throw new Error("Did not receive a proper locale data file");
                if (i.Za.locale_code !== t) throw new Error("Received a mismatching locale code, expected: " + t);
                this.Ka = i, "function" == typeof n && n()
            } catch (t) {} finally {
                return null
            }
        }, U.prototype.nr = function(i) {
            var n = null;
            try {
                try {
                    n = decodeURIComponent(escape(i))
                } catch (t) {
                    n = i
                }
            } catch (t) {} finally {
                return n
            }
        }, U.prototype.st = function() {
            try {
                this.Ka = null
            } catch (t) {}
        }, new U), m.Audio = (T.prototype.directive = function(n) {
            try {
                var t, i = !1,
                    e = n.el,
                    s = n.el.querySelector(".cc-1r6y"),
                    c = n.el.querySelector(".cc-745x"),
                    a = n.el.querySelector(".cc-pczb"),
                    r = n.el.querySelector(".cc-py56");
                a && (t = a.querySelector("source"), a.addEventListener("play", function() {
                    e.setAttribute("data-state", "loading")
                }), a.addEventListener("pause", function() {
                    e.setAttribute("data-state", "paused")
                }), a.addEventListener("canplay", function() {
                    e.setAttribute("data-state", "playing")
                }), a.addEventListener("stalled", function() {
                    e.setAttribute("data-state", "none")
                }), t && t.addEventListener("error", function() {
                    a.paused || a.pause(), i = !0, alert(m.Locale.text("chat", "chat_message_audio_play_error"))
                }), r && c && a.addEventListener("timeupdate", function(t) {
                    var i;
                    t.target && (t = 0 === (i = (i = Math.ceil(t.target.currentTime / t.target.duration * 100)) < 100 ? i : 0) ? n.get().duration || 0 : Math.floor(t.target.currentTime), c.innerHTML = m.Date.format_time(t), r.style.setProperty("width", i + "%", "important"))
                }), s && s.addEventListener("click", function() {
                    try {
                        a && (a.paused ? (!0 === i && (a.load(), i = !1), m.Utility.play_media(a)) : a.pause())
                    } catch (t) {} finally {
                        return !1
                    }
                }))
            } catch (t) {} finally {
                return function() {}
            }
        }, new T), m.Avatar = (N.prototype.url = function(t, i, n) {
            var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                s = "";
            try {
                s = e ? e.substring(0, m.Base.Us.length) === m.Base.Us ? e : m.Base.Us + "/process/thumbnail/?url=" + encodeURIComponent(e) + "&width=" + t + "&height=" + t + "&" + m.Base.Qs.website.buster : m.Base.Us + "/avatar/" + i + "/" + (n || "default") + "/" + t + "/?" + m.Base.Qs.website.buster
            } catch (t) {} finally {
                return s
            }
        }, new N), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, m.Template = (M.prototype.render = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                e = "";
            try {
                if ("function" != typeof m.Library.jade.client[t]) throw new Error("No such template: " + t);
                if ("object" !== (void 0 === i ? "undefined" : r(i))) throw new Error("Object argument is not an object");
                if (i._e = m.Locale.text.At(m.Locale), !1 === m.Utility.is_empty(n))
                    for (var s in n) void 0 === i[s] && (i[s] = n[s]);
                e = m.Library.jade.client[t](i).trim()
            } catch (t) {} finally {
                return e
            }
        }, M.prototype.dom = function(t) {
            var i = null;
            try {
                var n = document.createElement("div");
                n.innerHTML = t, i = n.firstChild
            } catch (t) {} finally {
                return i
            }
        }, M.prototype.vue = function(t) {
            var e = this,
                i = {};
            i._f = m.Library.crisp.web.Parse.format.At(m.Library.crisp.web.Parse), i._e = m.Locale.text.At(m.Locale), i._a = m.Avatar.url.At(m.Avatar), i._n = m.Library.crisp.web.Name.parse_first_name.At(m.Library.crisp.web.Name), i.format_context = {
                methods: {
                    filter_link_safe: m.Utility.filter_link_safe.At(m.Utility),
                    html_attribute: m.Library.crisp.web.Parse.attribute.At(m.Library.crisp.web.Parse)
                }
            }, i.format_time = m.Date.format_time.At(m.Date), i.image_url_resize = function(t) {
                var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                    n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                return m.Utility.filter_image_url_resize(t, null !== i ? i : e.er, null !== n ? n : e.sr)
            }, i.image_url_original = function(t) {
                return m.Utility.filter_image_url_original(t)
            }, i.current_time = function() {
                return (new Date).getTime()
            }, m.Library.vue.createApp({
                $store: m.Store.$store,
                $events: m.Store.$events,
                $render: i
            }).directive("crisp-date", m.Date.directive.At(m.Date)).directive("crisp-audio", m.Audio.directive.At(m.Audio)).mount(t)
        }, new M), m.Broker = (B.prototype.init = function(t, i, n, e, s, c, a, r, o, h, u, l, f, d) {
            var v = !(14 < arguments.length && void 0 !== arguments[14]) || arguments[14];
            try {
                m.Library.crisp.client.init({
                    environment: t,
                    url_relay_client: i,
                    url_relay_stream: n,
                    url_go: e,
                    website_domain: s,
                    website_id: c,
                    token_id: a,
                    cookie_expire: r,
                    cookie_domain: o,
                    useragent: h,
                    timezone: u,
                    capabilities: l,
                    locales: f,
                    runtime_configuration: d,
                    connect_socket: v,
                    platform_name: "crisp-client",
                    platform_signature_key: "25/2z/2h/3e/33/34/2g/20/2i/1v/2t/24/24/3c/2s/22"
                }), this.cr = m.Library.crisp.client.event, m.Base.ar(), this.rr(), this.or(), this.hr(), this.ur(), this.lr(), this.fr(), this.dr(), this.vr(), this.pr(), this.yr(), this.mr(), this.gr(), this._r(), this.wr(), this.br(), this.kr(), this.xr(), this.$r(), this.Fr(), this.jr(), this.Er(), this.zr(), this.Cr(), this.Sr(), this.Ar(), this.Ir(), this.qr(), this.Dr(), this.Or(), this.Rr(), this.Br(), this.Mr(), this.Nr(), this.Tr(), this.Ur(), this.Pr(), this.Lr(), this.Jr(), this.Vr(), this.Wr(), this.Hr(), this.Gr(), this.Kr(), this.Zr(), this.Yr(), this.Xr(), this.Qr(), this.no()
            } catch (t) {}
        }, B.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, B.prototype.rr = function() {
            var n = this;
            try {
                this.cr.subscribe("socket:state", function(t, i) {
                    !0 !== m.Chat.wc || i.connected === n.eo && i.failed_reconnect === n.so || (n.eo = i.connected || !1, n.so = i.failed_reconnect || !1, m.Chat.Interface.co(n.eo, n.so), !0 === n.eo && m.Event.check_activity_autokill())
                })
            } catch (t) {}
        }, B.prototype.or = function() {
            var n = this;
            try {
                this.cr.subscribe("session:created", function(t, i) {
                    i.error ? "invalid_website_id" === i.error && m.Base.run_error() : i.session_id && (n.ao = !0)
                })
            } catch (t) {}
        }, B.prototype.hr = function() {
            var n = this;
            try {
                this.cr.subscribe("session:joined", function(t, i) {
                    i.error ? "invalid_session" === i.error && ++n.ro <= n.oo && m.Library.crisp.client.Session.reset(function() {
                        m.Library.crisp.client.Session.create()
                    }, function() {}) : (n.Rt = i.session_id || null, n.ho = i.session_hash || null, !1 === i.socket && !0 !== i.initiated && m.Base.Ic(!0), !0 === n.uo ? (n.uo = !1, m.Base.lo(i, function(t, i, n) {
                        !0 !== n && (m.Base.spawn_client(t), m.Library.crisp.client.Website.get_users_available())
                    })) : !0 === m.Chat.wc && m.Chat.Message.fo())
                })
            } catch (t) {}
        }, B.prototype.ur = function() {
            var e = this;
            try {
                this.cr.subscribe("session:state", function(t, i) {
                    if (1 === e.vo && (e.vo++, e.po = !0), !1 === m.Chat.wc) {
                        if (null !== e.yo.master) {
                            e.yo.master(m.Utility.is_empty(i) ? null : i);
                            for (var n = 0; n < e.yo.actions.length; n++) e.yo.actions[n]();
                            e.yo.master = null, e.yo.actions = []
                        } else m.Utility.is_empty(i) ? (m.Minimized.init(!0, e.ao), m.Library.crisp.client.Session.get_request_initiate()) : m.Chat.init(i);
                        m.Utility.next_render(function() {
                            m.Base.mo()
                        })
                    } else !0 === m.Chat.wc && m.Chat.State.receive(i);
                    e.go()
                })
            } catch (t) {}
        }, B.prototype.lr = function() {
            try {
                this.cr.subscribe("session:error", function(t, i) {
                    "email:invalid_format" === i.type && m.Chat.Alert.ta({
                        warn_reply: "hide",
                        wait_reply: "hide",
                        email_invalid: "show"
                    })
                })
            } catch (t) {}
        }, B.prototype.fr = function() {
            try {
                this.cr.subscribe("session:request:initiate", function(t, i) {})
            } catch (t) {}
        }, B.prototype.dr = function() {
            try {
                this.cr.subscribe("session:request:purge", function(t, i) {
                    m.Action.do_session_reset()
                })
            } catch (t) {}
        }, B.prototype.vr = function() {
            var n = this;
            try {
                this.cr.subscribe("website:users:available", function(t, i) {
                    m.Availability.receive(i.available, i.changed), 0 === n.vo ? (n.vo++, m.Library.crisp.client.Session.get_state()) : m.Availability.apply()
                })
            } catch (t) {}
        }, B.prototype.pr = function() {
            var n = this;
            try {
                this.cr.subscribe("message:received", function(t, i) {
                    n.hi(i)
                })
            } catch (t) {}
        }, B.prototype.yr = function() {
            var n = this;
            try {
                this.cr.subscribe("message:received:local", function(t, i) {
                    n.hi(i)
                })
            } catch (t) {}
        }, B.prototype.mr = function() {
            try {
                this.cr.subscribe("message:send", function(t, i) {
                    !0 === m.Chat.wc && m.Chat.Message.sent(i)
                })
            } catch (t) {}
        }, B.prototype.gr = function() {
            try {
                this.cr.subscribe("message:sent", function(t, i) {
                    !0 === m.Chat.wc && m.Chat.Message.sent_acknowledgement(i), m.Action.Vc("message:sent", i)
                })
            } catch (t) {}
        }, B.prototype.wr = function() {
            try {
                this.cr.subscribe("message:compose:send", function(t, i) {
                    m.Action.Vc("message:compose:sent", i)
                })
            } catch (t) {}
        }, B.prototype.br = function() {
            try {
                this.cr.subscribe("message:acknowledge:pending", function(t, i) {})
            } catch (t) {}
        }, B.prototype.kr = function() {
            try {
                this.cr.subscribe("message:acknowledge:read:send", function(t, i) {
                    m.Chat.Message._o(i)
                })
            } catch (t) {}
        }, B.prototype.xr = function() {
            try {
                this.cr.subscribe("message:acknowledge:read:received", function(t, i) {})
            } catch (t) {}
        }, B.prototype.$r = function() {
            try {
                this.cr.subscribe("message:thread", function(t, i) {})
            } catch (t) {}
        }, B.prototype._r = function() {
            try {
                this.cr.subscribe("message:compose:received", function(t, i) {
                    if (!0 === m.Chat.wc && !0 !== m.Base.Qs.chat.operator_privacy) switch (i.type) {
                        case "start":
                            m.Chat.Message.wo(i.timestamp);
                            break;
                        case "stop":
                            m.Chat.Message.bo()
                    }
                    m.Action.Vc("message:compose:received", i)
                })
            } catch (t) {}
        }, B.prototype.Fr = function() {
            try {
                this.cr.subscribe("history:messages", function(t, i) {
                    !0 === m.Chat.wc && m.Chat.Message.history(i)
                })
            } catch (t) {}
        }, B.prototype.jr = function() {
            try {
                this.cr.subscribe("call:request:initiate", function(t, i) {
                    m.Library.crisp.client.Call.init({
                        ice: m.Base.ko,
                        call_id: i.call_id,
                        mode: i.mode,
                        has_support: i.has_support
                    }, function() {
                        m.Call.ring(i)
                    }, function() {})
                })
            } catch (t) {}
        }, B.prototype.Er = function() {
            try {
                this.cr.subscribe("call:action:stopped", function(t, i) {
                    m.Call.stop(i)
                })
            } catch (t) {}
        }, B.prototype.zr = function() {
            try {
                this.cr.subscribe("call:peer:local:error", function(t, i) {
                    m.Call.error("peer_local")
                })
            } catch (t) {}
        }, B.prototype.Cr = function() {
            try {
                this.cr.subscribe("call:peer:remote:error", function(t, i) {
                    m.Call.error("peer_remote")
                })
            } catch (t) {}
        }, B.prototype.Sr = function() {
            try {
                this.cr.subscribe("call:media:local:success", function(t, i) {
                    m.Call.success("media_local")
                })
            } catch (t) {}
        }, B.prototype.Ar = function() {
            try {
                this.cr.subscribe("call:media:local:error", function(t, i) {
                    m.Call.error("media_local")
                })
            } catch (t) {}
        }, B.prototype.Ir = function() {
            try {
                this.cr.subscribe("call:media:remote:success", function(t, i) {
                    m.Call.success("media_remote")
                })
            } catch (t) {}
        }, B.prototype.qr = function() {
            try {
                this.cr.subscribe("call:track:local:started", function(t, i) {
                    m.Call.toggle_media_status(i.media, !0)
                })
            } catch (t) {}
        }, B.prototype.Dr = function() {
            try {
                this.cr.subscribe("call:track:local:ended", function(t, i) {
                    m.Call.toggle_media_status(i.media, !1)
                })
            } catch (t) {}
        }, B.prototype.Or = function() {
            var n = this;
            try {
                this.cr.subscribe("browsing:request:initiate", function(t, i) {
                    n.xo.push(function() {
                        m.Base.Ya("browsing", "browsing.js", function(t) {
                            try {
                                m.Library.crisp.client.Browsing.init({
                                    resume: i.resume || !1,
                                    deps: {
                                        tree_mirror: t.TreeMirrorClient
                                    }
                                }, function() {}, function() {})
                            } catch (t) {}
                        })
                    }), n.go()
                })
            } catch (t) {}
        }, B.prototype.Rr = function() {
            try {
                this.cr.subscribe("browsing:assist:started", function(t, i) {
                    m.Browsing.Assist.start()
                })
            } catch (t) {}
        }, B.prototype.Br = function() {
            try {
                this.cr.subscribe("browsing:assist:stopped", function(t, i) {
                    m.Browsing.Assist.stop()
                })
            } catch (t) {}
        }, B.prototype.Mr = function() {
            try {
                this.cr.subscribe("browsing:assist:mouse", function(t, i) {
                    m.Browsing.Assist.$o(i)
                })
            } catch (t) {}
        }, B.prototype.Nr = function() {
            try {
                this.cr.subscribe("browsing:assist:scroll", function(t, i) {
                    m.Browsing.Assist.Fo(i)
                })
            } catch (t) {}
        }, B.prototype.Tr = function() {
            try {
                this.cr.subscribe("browsing:assist:click", function(t, i) {
                    m.Browsing.Assist.jo(i)
                })
            } catch (t) {}
        }, B.prototype.Ur = function() {
            var n = this;
            try {
                this.cr.subscribe("bucket:url:upload:generate", function(t, i) {
                    n.Eo.bucket_url_upload_generate = i.id
                })
            } catch (t) {}
        }, B.prototype.Pr = function() {
            var s = this;
            try {
                this.cr.subscribe("bucket:url:upload:generated", function(t, i) {
                    var n, e;
                    s.Eo.bucket_url_upload_generate === i.id && "preparing" === (m.Store.$store.chat.file.state || null) && (n = (i.url || {}).signed || "", e = (i.url || {}).resource || "", i = (i.policy || {}).size_limit || 0, m.Chat.File.zo(n, e, i))
                })
            } catch (t) {}
        }, B.prototype.Lr = function() {
            var n = this;
            try {
                this.cr.subscribe("media:animation:list", function(t, i) {
                    n.Eo.media_animation_list = i.id
                })
            } catch (t) {}
        }, B.prototype.Jr = function() {
            var n = this;
            try {
                this.cr.subscribe("media:animation:listed", function(t, i) {
                    n.Eo.media_animation_list === i.id && (m.Store.$store.chat.picker.gif.results = i.results)
                })
            } catch (t) {}
        }, B.prototype.Vr = function() {
            var n = this;
            try {
                this.cr.subscribe("helpdesk:article:search", function(t, i) {
                    n.Eo.helpdesk_article_search = i.id
                })
            } catch (t) {}
        }, B.prototype.Wr = function() {
            var r = this;
            try {
                this.cr.subscribe("helpdesk:article:searched", function(t, i) {
                    if (r.Eo.helpdesk_article_search === i.id) {
                        var n = !(!i.search.query && 0 === i.results.length);
                        m.Spotlight.Co(i.results, i.search, n);
                        var e = m.Chat.Interface.ic("helpdesk");
                        if (e) {
                            for (var s, c = [], a = 0; a < i.results.length; a++) s = i.results[a], c.push({
                                title: s.title,
                                url: "" + e + s.locale + "/article/" + s.slug + "/"
                            });
                            m.Action.Vc("helpdesk:queried", {
                                query: i.search.query,
                                results: c
                            })
                        }
                    }
                })
            } catch (t) {}
        }, B.prototype.Hr = function() {
            var n = this;
            try {
                this.cr.subscribe("helpdesk:article:suggest", function(t, i) {
                    n.Eo.helpdesk_article_suggest = i.id
                })
            } catch (t) {}
        }, B.prototype.Gr = function() {
            var n = this;
            try {
                this.cr.subscribe("helpdesk:article:suggested", function(t, i) {
                    n.Eo.helpdesk_article_suggest === i.id && m.Spotlight.So(i.results)
                })
            } catch (t) {}
        }, B.prototype.Kr = function() {
            try {
                this.cr.subscribe("helpdesk:article:report", function(t, i) {})
            } catch (t) {}
        }, B.prototype.Zr = function() {
            try {
                this.cr.subscribe("storage:sync:update", function(t, i) {})
            } catch (t) {}
        }, B.prototype.Yr = function() {
            try {
                this.cr.subscribe("storage:sync:updated", function(t, i) {})
            } catch (t) {}
        }, B.prototype.Xr = function() {
            try {
                this.cr.subscribe("trigger:fired", function(t, i) {})
            } catch (t) {}
        }, B.prototype.Qr = function() {
            try {
                this.cr.subscribe("issue:report", function(t, i) {})
            } catch (t) {}
        }, B.prototype.no = function() {
            try {
                this.cr.subscribe("window:history", function(t, i) {
                    m.Base.Ao = i.page_url, m.Base.Io = i.page_domain, i = m.Base.qo(), null !== m.Base.Rc && (m.Store.$store.base.is_blocked = i, !0 === m.Chat.wc && !1 === i && m.Utility.next_render(function() {
                        m.Chat.Interface.$c()
                    })), m.Trigger.Do()
                })
            } catch (t) {}
        }, B.prototype.hi = function(t) {
            try {
                m.Chat.Oo();
                var i = "network" === t.origin && !0;
                m.Chat.Message.received(t, i, i, !0, !1), m.Action.Vc("message:received", t)
            } catch (t) {}
        }, B.prototype.go = function() {
            try {
                if (!0 === this.po)
                    for (; 0 < this.xo.length;) this.xo.shift()()
            } catch (t) {}
        }, B.prototype.st = function() {
            try {
                this.Rt = null, this.ho = null, this.eo = !0, this.Eo = {}, this.yo = {
                    master: null,
                    actions: []
                }, this.cr = null, this.ao = !1, this.uo = !0, this.so = !1, this.vo = 0, this.po = !1, this.xo = [], this.ro = 0
            } catch (t) {}
        }, new B), m.Availability = (R.prototype.init = function() {}, R.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, R.prototype.receive = function() {
            var t, i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                this.Tc = i, !0 === n && (t = m.Date.timestamp(), m.Base.Qs.website.last_available = t), m.Action.Vc("website:availability:changed", this.Tc)
            } catch (t) {}
        }, R.prototype.apply = function() {
            try {
                var t = !0 === this.Tc ? "online" : "away";
                m.Store.$store.base.availability = t, !1 === m.Store.$store.base.was_availability_online && "online" == t && (m.Store.$store.base.was_availability_online = !0)
            } catch (t) {}
        }, R.prototype.st = function() {
            try {
                this.Tc = !1
            } catch (t) {}
        }, new R), m.Event = (O.prototype.init = function(t) {
            try {
                this.Ro()
            } catch (t) {}
        }, O.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, O.prototype.trigger_interacted = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                this.Ja = !0, this.Bo(), !0 === t && this.Mo()
            } catch (t) {}
        }, O.prototype.check_activity_autokill = function() {
            try {
                null === this.No && this.To(), null === this.Uo && this.Po()
            } catch (t) {}
        }, O.prototype.Ro = function() {
            try {
                this.Lo(), this.Jo(), this.Vo()
            } catch (t) {}
        }, O.prototype.Lo = function() {
            try {
                m.Utility.add_event_listener(this.ns, "window", "resize", function() {
                    try {
                        !0 === m.Chat.wc ? m.Chat.Interface.$c() : m.Base.Wo()
                    } catch (t) {}
                })
            } catch (t) {}
        }, O.prototype.Jo = function() {
            try {
                this.Bo(), m.Utility.add_event_listener(this.ns, "window", "click", this.Ho.At(this), this.Go), m.Utility.add_event_listener(this.ns, "window", "touchend", this.Ho.At(this), this.Go), m.Utility.add_event_listener(this.ns, "window", "touchmove", this.Ho.At(this), this.Go), m.Utility.add_event_listener(this.ns, "window", "keydown", this.Ho.At(this), this.Go), m.Utility.add_event_listener(this.ns, "window", "mousemove", this.Bo.At(this), this.Go), m.Utility.add_event_listener(this.ns, "window", "focus", this.Bo.At(this), this.Go), m.Utility.add_event_listener(this.ns, "window", "blur", this.Bo.At(this), this.Go)
            } catch (t) {}
        }, O.prototype.Vo = function() {
            try {
                this.Mo()
            } catch (t) {}
        }, O.prototype.Ho = function() {
            try {
                this.trigger_interacted()
            } catch (t) {}
        }, O.prototype.Bo = function() {
            var t = this;
            try {
                null !== this.No && m.Utility.clear_timeout(this.No), this.No = m.Utility.set_timeout(function() {
                    t.No = null, t.To()
                }, this.Ko), !0 === this.Zo && !1 === this.Yo && m.Library.crisp.client.socket.connect(), this.Zo = !1, m.Library.crisp.client.Session.mark_active()
            } catch (t) {}
        }, O.prototype.To = function() {
            try {
                !0 === m.Library.crisp.client.socket.connected && (this.Zo = !0, m.Library.crisp.client.socket.disconnect())
            } catch (t) {}
        }, O.prototype.Mo = function() {
            var t = this;
            try {
                null !== this.Uo && m.Utility.clear_timeout(this.Uo), this.Uo = m.Utility.set_timeout(function() {
                    t.Uo = null, t.Po()
                }, this.Xo), !0 === this.Yo && m.Library.crisp.client.socket.connect(), this.Yo = !1
            } catch (t) {}
        }, O.prototype.Po = function() {
            try {
                !0 !== m.Library.crisp.client.socket.connected && !0 !== this.Zo || (this.Yo = !0) === m.Library.crisp.client.socket.connected && m.Library.crisp.client.socket.disconnect()
            } catch (t) {}
        }, O.prototype.st = function() {
            try {
                this.Ja = !1, this.Zo = !1, this.Yo = !1, this.No = null, this.Uo = null
            } catch (t) {}
        }, new O), m.Trigger = (D.prototype.init = function(t) {
            try {
                this.Qo = t, this.th()
            } catch (t) {}
        }, D.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, D.prototype.Oc = function(t) {
            var i = !1;
            try {
                var n = (this.Qo || {})[t];
                n && !0 === n.enabled && (this.ia(t, n), i = !0)
            } catch (t) {} finally {
                return i
            }
        }, D.prototype.Pc = function(t, i) {
            try {
                for (var n = this.ih[t] || [], e = 0; e < n.length; e++) n[e](i)
            } catch (t) {}
        }, D.prototype.nh = function(t) {
            try {
                -1 === m.Trigger.eh.indexOf(t) && m.Trigger.eh.push(t), m.Library.crisp.client.Storage.set_stamp_local(this.sh, [m.Base.ch, "status", t], this.ah)
            } catch (t) {}
        }, D.prototype.Do = function() {
            try {
                var t, i, n, e;
                for (e in this.Qo)
                    if (!0 === (t = this.Qo[e]).enabled && (i = t.events))
                        for (var s in i) "page" === s && !0 === (n = i[s]).enabled && this.rh(e, t, i, n.settings || {})
            } catch (t) {}
        }, D.prototype.th = function() {
            try {
                var t, i, n, e, s = void 0,
                    c = !1;
                for (e in this.Qo)
                    if (!0 === (t = this.Qo[e]).enabled && (i = t.events))
                        for (var a in i) !0 === (n = i[a]).enabled && "function" == typeof(s = this.oh[a]) && (s.At(this)(e, t, i, n.settings || {}), c = !0);
                !0 === c && this.hh()
            } catch (t) {}
        }, D.prototype.ia = function(s, c) {
            var t, a = this;
            try {
                !0 === this.uh(c) && !1 === this.lh(s) && ((t = m.Utility.clone(this.eh)).push(s), this.fh(function() {
                    m.Chat.State.propagate("trigger", t, !1, function(t) {
                        if (!0 === t && !0 === a.uh(c) && c.actions) {
                            var i, n, e = void 0;
                            for (n in c.actions) !0 === (i = c.actions[n]).enabled && "function" == typeof(e = a.dh[n]) && (e.At(a)(s, c, i.settings || {}), m.Library.crisp.client.Trigger.fired(s, c.name))
                        }
                    })
                }))
            } catch (t) {}
        }, D.prototype.fh = function(t) {
            var i = this;
            try {
                m.Base.jc(function() {
                    !0 !== i.vh && (i.vh = !0, m.Chat.Oo()), t()
                })
            } catch (t) {}
        }, D.prototype.uh = function(t) {
            var i = !1;
            try {
                if (i = !1 === m.Base.ph(), !0 === this.yh(t, "if_website_online") && (i = !0 === m.Action.is_website_available() && i), !0 === this.yh(t, "if_first_visit") && (i = "1" === m.Library.crisp.client.Storage.get_stamp_local(this.sh, this.mh("count")) && i), !0 === this.yh(t, "if_trigger_sole") && (i = !0 !== m.Chat.Message.gh && i), !0 === this.yh(t, "if_countries")) {
                    var n = !1,
                        e = (t.behaviors.if_countries || {}).settings;
                    if (e)
                        for (var s in e) s === m.Base.Qs.chat.country && (n = !0);
                    i = !0 === n && i
                }!1 === m.Base.Bc() && !1 === this._h(t, "desktop") && (i = !1), !0 === m.Base.Bc() && !1 === this._h(t, "mobile") && (i = !1)
            } catch (t) {} finally {
                return i
            }
        }, D.prototype.wh = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                n = 100;
            try {
                !0 === t && i.after && 0 < i.after && (n = i.after * this.va)
            } catch (t) {} finally {
                return n
            }
        }, D.prototype.bh = function(t, i, n, e) {
            try {
                if (e.after && 0 < e.after) {
                    var s, c = !1;
                    for (s in n)
                        if ("delay" !== s && !0 === n[s].enabled) {
                            c = !0;
                            break
                        }!1 === c && this.kh(t, i, {
                        enabled: !0,
                        settings: e
                    })
                }
            } catch (t) {}
        }, D.prototype.xh = function(i, n, e, t) {
            var s = this;
            try {
                for (var c = !0, a = 0; a < this.$h.length; a++) {
                    var r = this.$h[a];
                    if (!0 === (e[r] || {}).enabled && !1 === (c = this.Fh[r].At(this)(e))) break
                }!0 === c && (m.Utility.remove_event_listener(this.ns, "window", "mouseout"), m.Utility.add_event_listener(this.ns, "window", "mouseout", function(t) {
                    try {
                        !0 === s.jh && !t.relatedTarget && !t.toElement && t.clientY <= s.Eh && (s.jh = !1, null === s.zh && (s.zh = s.kh(i, n, e.delay)))
                    } catch (t) {}
                }), m.Utility.remove_event_listener(this.ns, "window", "mouseover"), m.Utility.add_event_listener(this.ns, "window", "mouseover", function() {
                    try {
                        !0 !== s.jh && (s.jh = !0, null !== s.zh && (m.Utility.clear_timeout(s.zh), s.zh = null))
                    } catch (t) {}
                }))
            } catch (t) {}
        }, D.prototype.Ch = function(a, r, o, h) {
            var u = this;
            try {
                h.ids && 0 < h.ids.length && m.Utility.add_event_listener(this.ns, "document", "click", function(t) {
                    try {
                        if (t && t.target && "a" === (t.target.nodeName || "").toLowerCase())
                            for (var i = 0; i < h.ids.length; i++) {
                                var n = document.getElementById(h.ids[i]),
                                    e = "function" == typeof document.querySelectorAll ? document.querySelectorAll(h.ids[i]) : null,
                                    s = !1;
                                if (e && 0 < e.length)
                                    for (var c = 0; c < e.length; c++)
                                        if (e[c] === t.target) {
                                            s = !0;
                                            break
                                        }
                                if (n === t.target || !0 === s) {
                                    u.kh(a, r, o.delay);
                                    break
                                }
                            }
                    } catch (t) {}
                })
            } catch (t) {}
        }, D.prototype.rh = function(t, i, n, e) {
            try {
                !0 !== (n.leave || {}).enabled && !0 === this.Sh(n) && this.kh(t, i, n.delay)
            } catch (t) {}
        }, D.prototype.Ah = function(t, i, n, e) {
            try {
                !0 !== (n.leave || {}).enabled && !0 === this.Ih(n) && this.kh(t, i, n.delay)
            } catch (t) {}
        }, D.prototype.qh = function(i, n, e, s) {
            var c = this;
            try {
                s.points && 0 < m.Utility.keys(s.points).length && this.Dh("user_data", function(t) {
                    t.key && t.value && s.points[t.key] === t.value && c.kh(i, n, e.delay)
                })
            } catch (t) {}
        }, D.prototype.Oh = function(i, n, e, s) {
            var c = this;
            try {
                s.texts && 0 < s.texts.length && this.Dh("user_event", function(t) {
                    -1 !== s.texts.indexOf(t.text) && c.kh(i, n, e.delay)
                })
            } catch (t) {}
        }, D.prototype.Rh = function(t, i, n) {
            var e, s, c;
            try {
                !n || (e = (n[m.Locale.code()] || n.default || "").trim()) && (s = m.Utility.to_hashcode("trigger/" + t), !(c = !1) === this.yh(i, "show_as_website") && (c = !0), m.Action.do_message_show("text", e, s, c))
            } catch (t) {}
        }, D.prototype.Bh = function(t, i, n) {
            try {
                m.Action.do_chat_open()
            } catch (t) {}
        }, D.prototype.Mh = function(t, i, n) {
            try {
                m.Sound.start("events", "chat-message-receive")
            } catch (t) {}
        }, D.prototype.Sh = function(t) {
            var i = !1;
            try {
                var n = (t.page || {}).settings;
                n && n.urls && 0 < n.urls.length && (i = m.Utility.compare_page_rules(m.Base.Ao, n.urls))
            } catch (t) {} finally {
                return i
            }
        }, D.prototype.Ih = function(t) {
            var i = !1;
            try {
                var n = (t.url_parameter || {}).settings || {};
                if (0 < m.Utility.keys(n.parameters || {}).length) {
                    for (var e, s = document.location.search || "", c = s.slice(s.indexOf("?") + 1).split("&"), a = {}, r = 0; r < c.length; r++) {
                        var o = function(t, i) {
                                if (Array.isArray(t)) return t;
                                if (Symbol.iterator in Object(t)) return function(t, i) {
                                    var n = [],
                                        e = !0,
                                        s = !1,
                                        c = void 0;
                                    try {
                                        for (var a, r = t[Symbol.iterator](); !(e = (a = r.next()).done) && (n.push(a.value), 2 !== n.length); e = !0);
                                    } catch (t) {
                                        s = !0, c = t
                                    } finally {
                                        try {
                                            !e && r.return && r.return()
                                        } finally {
                                            if (s) throw c
                                        }
                                    }
                                    return n
                                }(t);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }(c[r].split("=")),
                            h = o[0],
                            u = o[1];
                        h && (a[h.toLowerCase()] = decodeURIComponent(u || "").toLowerCase())
                    }
                    for (e in n.parameters) {
                        var l = e.toLowerCase(),
                            f = n.parameters[l].toLowerCase() + "";
                        if (a[l] === f) {
                            i = !0;
                            break
                        }
                    }
                }
            } catch (t) {} finally {
                return i
            }
        }, D.prototype.kh = function(t, i) {
            var n = this,
                e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                s = null;
            try {
                s = m.Utility.set_timeout(function() {
                    n.ia(t, i)
                }, this.wh((e || {}).enabled, (e || {}).settings))
            } catch (t) {} finally {
                return s
            }
        }, D.prototype.Dh = function(t, i) {
            try {
                this.ih[t] = this.ih[t] || [], this.ih[t].push(i)
            } catch (t) {}
        }, D.prototype.yh = function(t, i) {
            var n = !1;
            try {
                !0 === ((t.behaviors || {})[i] || {}).enabled && (n = !0)
            } catch (t) {} finally {
                return n
            }
        }, D.prototype.lh = function(t) {
            var i = !1;
            try {
                1 != (i = -1 !== this.eh.indexOf(t) && !0) && (i = m.Library.crisp.client.Storage.get_stamp_local(this.sh, [m.Base.ch, "status", t]) === this.ah && !0)
            } catch (t) {} finally {
                return i
            }
        }, D.prototype._h = function(t, i) {
            var n = !0;
            try {
                !1 === ((t.platforms || {})[i] || {}).enabled && (n = !1)
            } catch (t) {} finally {
                return n
            }
        }, D.prototype.hh = function() {
            try {
                var t = this.mh("last"),
                    i = this.mh("count"),
                    n = parseInt(m.Library.crisp.client.Storage.get_stamp_local(this.sh, t) || "0", 10),
                    e = parseInt(m.Library.crisp.client.Storage.get_stamp_local(this.sh, i) || "0", 10),
                    s = m.Date.timestamp();
                (isNaN(n) || isNaN(e) || e <= 0 || s - n >= this.Nh) && (e += 1, n = s, m.Library.crisp.client.Storage.set_stamp_local(this.sh, i, "" + e)), m.Library.crisp.client.Storage.set_stamp_local(this.sh, t, "" + s)
            } catch (t) {}
        }, D.prototype.mh = function(t) {
            var i = [];
            try {
                i = [m.Base.ch, "visit", t]
            } catch (t) {} finally {
                return i
            }
        }, D.prototype.st = function() {
            try {
                this.eh = [], this.Qo = null, this.vh = !1, this.jh = !1, this.zh = null, this.Eh = 10, this.ih = {}
            } catch (t) {}
        }, new D), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, m.Base = (q.prototype.init = function() {
            var i = this,
                t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            try {
                !1 === this.wc && (this.wc = !0, this._c = t.dollar_crisp || null, this.Th = t.project_name || null, this.Uh = t.url_relay_client || null, this.Ph = t.url_relay_stream || null, this.Lh = t.url_website || null, this.Jh = t.url_go || null, this.Us = t.url_image || null, this.Vh = t.url_game || null, this.Pa = t.url_assets || null, this.ko = t.rtc_ice || null, this.Wh = t.client_environment || null, this.La = t.client_revision || null, this.Ys = t.website_domain || null, this.ch = t.website_id || null, this.Hh = t.token_id || null, this.Gh = t.cookie_expire || null, this.Kh = t.cookie_domain || null, this.Ao = t.page_url || null, this.Io = t.page_domain || null, this.Zh = t.browser_useragent || null, this.Yh = t.browser_timezone || null, this.Xh = t.browser_capabilities || null, this.Ga = t.browser_locales || null, this.Qh = t.ready_trigger || null, this.tu = t.reset_handler || null, this.iu = t.runtime_configuration || {}, m.Polyfill.schedule_warn_incompatible(!1), this.nu(function(t) {
                    i.eu = t.socket, i.su = t.buster || 1, i.cu = t.endpoints || {}, !0 === (t = !1 == (t = -1 === document.cookie.indexOf(i.au(!0)) && !1 !== i.eu && !0) && !0 === i.iu.lock_maximized || t) ? i.ru() : i.ou(), m.Event.init()
                }, function(t) {
                    "invalid_website_id" === t && i.run_error()
                }))
            } catch (t) {}
        }, q.prototype.reset = function() {
            try {
                var t = this.tu;
                m.Utility.reset_instance_children(m, this), this.st(), this.hu(), this.tu = t
            } catch (t) {}
        }, q.prototype.spawn_client = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                this.uu(), this.Qs = t, m.Library.crisp.web.init({
                    template: m.Template,
                    config: {
                        url: {
                            crisp_image: this.Us
                        },
                        runtime: this.iu
                    }
                }), !0 !== i && (m.Library.crisp.client.Config.set_ignore_privacy(this.Qs.chat.ignore_privacy), m.Library.crisp.client.Config.set_visitor_compose(this.Qs.chat.visitor_compose)), m.Trigger.init(m.Plugin.get_triggers()), this.uc(), this.lu = m.Template.dom(m.Template.render("client", {
                    lang: m.Locale.code(),
                    direction: m.Locale.direction()
                })), this.fu = this.lu.querySelector(".cc-1ctt"), this.Rc = this.lu.querySelector(".cc-52lo"), this.Gc(), this.du()
            } catch (t) {}
        }, q.prototype.run_error = function() {
            var t = this;
            try {
                m.Locale.load(m.Broker.vu.chat.locale, function() {
                    t.spawn_client(m.Broker.vu, !0), m.Minimized.init(!0, !1, !0)
                })
            } catch (t) {}
        }, q.prototype.Wo = function() {
            try {
                m.Store.$store.base.is_full_view = this.Bc(), m.Store.$store.base.is_small_view = this.pu(), m.Store.$store.base.is_large_view = this.yu()
            } catch (t) {}
        }, q.prototype.Bc = function() {
            try {
                return !0 === this.iu.lock_full_view || window.innerHeight < window.innerWidth && window.innerHeight < this.mu || window.innerWidth < this.mu
            } catch (t) {}
        }, q.prototype.yu = function() {
            try {
                return window.innerHeight < window.innerWidth && window.innerHeight >= this.gu || window.innerWidth < window.innerHeight && window.innerWidth >= this.gu
            } catch (t) {}
        }, q.prototype.pu = function() {
            try {
                return window.innerHeight < window.innerWidth && window.innerHeight < this._u || window.innerWidth < window.innerHeight && window.innerWidth < this._u
            } catch (t) {}
        }, q.prototype.ph = function() {
            try {
                if (!0 !== this.iu.lock_maximized && (!0 !== m.Chat.Message.gh || !0 === this.wu())) {
                    if (!0 === this.bu()) return !0;
                    if (!0 === this.Qs.chat.hide_vacation) return !0;
                    if (!0 === this.Qs.chat.hide_on_away && !0 !== m.Store.$store.base.was_availability_online && !0 !== m.Availability.Tc) return !0;
                    if (!0 === this.Qs.chat.hide_on_mobile && !0 === this.pu()) return !0
                }
                return !1
            } catch (t) {}
        }, q.prototype.bu = function() {
            try {
                return (!0 === this.ku || !0 === this.xu) && !0
            } catch (t) {}
        }, q.prototype.wu = function() {
            try {
                return 0 < m.Chat.Message.$u && m.Date.timestamp() - m.Chat.Message.$u >= this.Fu
            } catch (t) {}
        }, q.prototype.qo = function() {
            try {
                var t = m.Locale.code();
                return this.ku = !(!(0 < this.Qs.chat.allowed_pages.length) || m.Utility.compare_page_rules(this.Ao, this.Qs.chat.allowed_pages)) || m.Utility.compare_page_rules(this.Ao, this.Qs.chat.blocked_pages) && !0, this.xu = -1 !== this.Qs.chat.blocked_locales.indexOf(t), this.bu() || !1
            } catch (t) {}
        }, q.prototype.mo = function() {
            try {
                if ("function" == typeof this.Qh) try {
                    this.Qh(), this.Qh = null
                } catch (t) {}
                m.Action.Qc(), m.Action.Vc("session:loaded", m.Broker.Rt), m.Polyfill.schedule_warn_incompatible(!0)
            } catch (t) {}
        }, q.prototype.Ic = function() {
            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                var n = this.au(t),
                    e = void 0,
                    e = !0 === i ? new Date(0) : new Date((new Date).getTime() + (!0 === t ? this.ju : this.Eu));
                document.cookie = n + "; expires=" + e.toUTCString() + "; path=/; samesite=lax;"
            } catch (t) {}
        }, q.prototype.Wc = function(t) {
            var i, n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                r((this.Qs.chat || {})[t]) === (void 0 === n ? "undefined" : r(n)) && (this.Qs.chat[t] = n, null !== this.Rc && (i = t.replace(this.zu, "-"), this.Rc.setAttribute("data-" + i, !0 === n ? "true" : "false")))
            } catch (t) {}
        }, q.prototype.Gc = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            try {
                var i, n = this.Cu;
                for (i in t)
                    if (t.hasOwnProperty(i)) {
                        n[i] = n[i] || {};
                        var e = t[i];
                        if (null !== e)
                            for (var s in e) e.hasOwnProperty(s) && (n[i][s] = e[s])
                    }
                this.fu.innerHTML = "", this.fu.appendChild(m.Template.dom(m.Template.render("style_color", {
                    colors: m.Theme.colors(n.color.theme || this.Qs.chat.theme, !!n.color.theme)
                }))), this.fu.appendChild(m.Template.dom(m.Template.render("style_other", {
                    container_index: ("number" == typeof n.other.container_index ? n : this.Su).other.container_index,
                    show_operator_count: ("boolean" == typeof n.other.show_operator_count ? n : this.Su).other.show_operator_count
                })));
                var c = m.Plugin.get_customization("position", "chatbox");
                m.Utility.is_empty(c) || this.fu.appendChild(m.Template.dom(m.Template.render("style_position", {
                    position: c
                })))
            } catch (t) {}
        }, q.prototype.Ya = function(t, i, n) {
            var e = this,
                s = 3 < arguments.length && void 0 !== arguments[3] && arguments[3],
                c = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null;
            try {
                var a, r = t + "_handler",
                    o = document.createElement("script");
                o.type = "text/javascript", o.async = 1, !0 === s ? (a = i + "?callback=" + encodeURIComponent("window.$__CRISP_INSTANCE.__spool." + r), c && (a += "&" + encodeURIComponent(c)), o.src = a) : o.src = [this.Pa + "/static/javascripts/" + i, "?" + this.La].join(""), this._c.__spool[r] = function(t) {
                    o.parentNode.removeChild(o), delete e._c.__spool[r], "function" == typeof n && n(t)
                };
                var h = document.getElementsByTagName("head");
                h && h[0] && h[0].appendChild(o)
            } catch (t) {}
        }, q.prototype.lo = function(e, s) {
            var c = this,
                t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            try {
                this.Ya("website", [this.Pa + "/settings/website/", encodeURIComponent(this.ch) + "/"].join(""), function(t) {
                    var i = !(t && !t.error);
                    (t = t || {}).settings = t.settings || {};
                    var n = {
                        website: {
                            name: t.website || "",
                            domain: m.Utility.extract(c.Au, t.domain, c.Ys, 1),
                            mailer: t.mailer || "",
                            buster: e.buster || 1,
                            count_operators: e.count_operators || 0,
                            active_operators: e.active_operators || t.operators || [],
                            response_metrics: e.response_metrics || {},
                            last_available: e.last_available || m.Date.timestamp(),
                            status: e.status || null,
                            trial: t.trial || !1
                        },
                        channels: t.channels || {},
                        plugins: t.plugins || {},
                        chat: {
                            country: m.Utility.get_or_fallback((e.context || {}).country, null),
                            locale: m.Locale.detect(t.settings.locale ? [t.settings.locale] : []),
                            theme: m.Utility.get_or_fallback(t.settings.color_theme, "default"),
                            allowed_pages: m.Utility.get_or_fallback(t.settings.allowed_pages, []),
                            blocked_pages: m.Utility.get_or_fallback(t.settings.blocked_pages, []),
                            blocked_locales: m.Utility.get_or_fallback(t.settings.blocked_locales, []),
                            tile: m.Utility.get_or_fallback(t.settings.tile, "default", "string"),
                            last_operator_face: m.Utility.get_or_fallback(t.settings.last_operator_face, !1, "boolean"),
                            ongoing_operator_face: m.Utility.get_or_fallback(t.settings.ongoing_operator_face, !0, "boolean"),
                            activity_metrics: m.Utility.get_or_fallback(t.settings.activity_metrics, !0, "boolean"),
                            operator_privacy: m.Utility.get_or_fallback(t.settings.operator_privacy, !1, "boolean"),
                            availability_tooltip: m.Utility.get_or_fallback(t.settings.availability_tooltip, !0, "boolean"),
                            hide_vacation: m.Utility.get_or_fallback(t.settings.hide_vacation, !1, "boolean"),
                            hide_on_away: m.Utility.get_or_fallback(t.settings.hide_on_away, !1, "boolean"),
                            hide_on_mobile: m.Utility.get_or_fallback(t.settings.hide_on_mobile, !1, "boolean"),
                            position_reverse: m.Utility.get_or_fallback(t.settings.position_reverse, !1, "boolean"),
                            email_visitors: m.Utility.get_or_fallback(t.settings.email_visitors, !0, "boolean"),
                            phone_visitors: m.Utility.get_or_fallback(t.settings.phone_visitors, !0, "boolean"),
                            force_identify: m.Utility.get_or_fallback(t.settings.force_identify, !1, "boolean"),
                            ignore_privacy: m.Utility.get_or_fallback(t.settings.ignore_privacy, !1, "boolean"),
                            visitor_compose: m.Utility.get_or_fallback(t.settings.visitor_compose, !0, "boolean"),
                            file_transfer: m.Utility.get_or_fallback(t.settings.file_transfer, !0, "boolean"),
                            helpdesk_link: m.Utility.get_or_fallback(t.settings.helpdesk_link, !0, "boolean"),
                            status_health_dead: m.Utility.get_or_fallback(t.settings.status_health_dead, !0, "boolean"),
                            wait_game: m.Utility.get_or_fallback(t.settings.wait_game, !1, "boolean"),
                            theme_text: m.Utility.get_or_fallback(t.settings.text_theme, "default"),
                            theme_welcome: m.Utility.get_or_fallback(t.settings.welcome_message, "default")
                        }
                    };
                    m.Locale.load(n.chat.locale, function() {
                        s(n, t, i)
                    })
                }, !0, t || e.buster)
            } catch (t) {}
        }, q.prototype.jc = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            !0 === m.Library.crisp.client.socket.connected ? t() : !1 !== this.eu && (m.Broker.yo.actions.push(t), null === m.Broker.yo.master && (m.Broker.yo.master = function() {
                !0 === i && m.Minimized.init(!0, !1, !1, !1)
            }), m.Library.crisp.client.socket.connect())
        }, q.prototype.ar = function() {
            var s = this;
            try {
                "production" === this.Wh && (m.Library.crisp.client.Issue.configure({
                    project: this.Th,
                    revision: this.La,
                    environment: this.Wh,
                    useragent: this.Zh,
                    page: this.Ao
                }), m.Library.logger.set_log_sink(function(t, i, n) {
                    var e;
                    "error" === t && ("object" === r((s._c || {}).__spool) && (s._c.__spool.error_last = {
                        ns: i,
                        value: n
                    }), (e = m.Date.timestamp()) - s.Iu >= s.qu && (s.Iu = e, m.Library.crisp.client.Issue.report(t, i, n)))
                }))
            } catch (t) {}
        }, q.prototype.qc = function() {
            try {
                "MutationObserver" in window && (this.Du("html"), this.Du("body")), m.Library.crisp.client.socket.disconnect(), this.uu()
            } catch (t) {}
        }, q.prototype.Dc = function() {
            try {
                "function" == typeof this.tu && this.tu()
            } catch (t) {}
        }, q.prototype.nu = function(n, e) {
            var s = this;
            try {
                var t = new Date,
                    i = t.getFullYear() + "-" + t.getMonth() + "-" + t.getDate() + "-" + t.getHours() + "-" + t.getMinutes();
                this.Ya("website", [this.Pa + "/settings/website/", encodeURIComponent(this.ch) + "/prelude/"].join(""), function(t) {
                    var i = t && t.error ? t.error : null;
                    i ? e(i) : n(t || s.Ou)
                }, !0, i)
            } catch (t) {}
        }, q.prototype.du = function() {
            try {
                this.Ru(), "MutationObserver" in window && (this.Bu(document.documentElement), this.Mu(document.body))
            } catch (t) {}
        }, q.prototype.Ru = function() {
            try {
                var t = document.querySelector("body");
                t && t.appendChild(this.lu), m.Template.vue(this.lu)
            } catch (t) {}
        }, q.prototype.uu = function() {
            try {
                null !== this.lu && (this.lu.remove(), this.lu = null)
            } catch (t) {}
        }, q.prototype.ru = function() {
            try {
                this.Nu(!0)
            } catch (t) {}
        }, q.prototype.ou = function() {
            var e = this;
            try {
                this.Nu(!1), this.lo({}, function(t, i, n) {
                    !0 !== n && m.Availability.receive(i.online || !1, !1), e.spawn_client(t), m.Minimized.init(!1, !1, n), m.Utility.next_render(function() {
                        e.mo()
                    })
                }, this.su)
            } catch (t) {}
        }, q.prototype.Nu = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                var i = this.cu.socket || {},
                    n = i.client || this.Uh,
                    e = i.stream || this.Ph;
                m.Broker.init(this.Wh, n, e, this.Jh, this.Ys, this.ch, this.Hh, this.Gh, this.Kh, this.Zh, this.Yh, this.Xh, this.Ga, this.iu, t)
            } catch (t) {}
        }, q.prototype.Bu = function(t) {
            var c = this;
            try {
                this.Du("html"), this.Tu.html = new window.MutationObserver(function(t) {
                    for (var i = 0; i < (t || []).length; i++) {
                        var n = t[i];
                        if ("childList" === n.type && n.addedNodes)
                            for (var e = 0; e < n.addedNodes.length; e++) {
                                var s = n.addedNodes[e];
                                if ("body" === (s.tagName || "").toLowerCase()) {
                                    c.Mu(s), c.Uu();
                                    break
                                }
                            }
                    }
                }), this.Tu.html.observe(t, this.Pu)
            } catch (t) {}
        }, q.prototype.Mu = function(t) {
            var s = this;
            try {
                this.Du("body"), this.Tu.body = new window.MutationObserver(function(t) {
                    for (var i = 0; i < (t || []).length; i++) {
                        var n = t[i];
                        if ("childList" === n.type && n.removedNodes)
                            for (var e = 0; e < n.removedNodes.length; e++)
                                if (n.removedNodes[e] === s.lu) {
                                    s.Uu();
                                    break
                                }
                    }
                }), this.Tu.body.observe(t, this.Pu)
            } catch (t) {}
        }, q.prototype.Du = function(t) {
            try {
                var i = this.Tu[t];
                void 0 !== i && (i.disconnect(), delete this.Tu[t])
            } catch (t) {}
        }, q.prototype.Uu = function() {
            var t = this;
            try {
                null === this.Lu && (this.Lu = m.Utility.set_timeout(function() {
                    t.Lu = null, t.Ru()
                }, this.Ju))
            } catch (t) {}
        }, q.prototype.au = function() {
            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                i = null;
            try {
                i = encodeURIComponent("crisp-client/socket/" + this.ch) + "=" + encodeURIComponent(!0 === t ? "0" : "1")
            } catch (t) {} finally {
                return i
            }
        }, q.prototype.uc = function() {
            var t = {
                configuration: this.Qs || {},
                runtime: this.iu || {},
                environment: {
                    smileys: {
                        "small-smile": ":)",
                        "big-smile": ":D",
                        blushing: ":$",
                        confused: "x)",
                        cool: "8)",
                        crying: ":'(",
                        embarrased: ":/",
                        heart: "<3",
                        laughing: ":'D",
                        sad: ":(",
                        angry: ":@",
                        sick: ":S",
                        "thumbs-up": "+1",
                        surprised: ":o",
                        tongue: ":P",
                        winking: ";)"
                    },
                    url: {
                        crisp_web: this.Lh,
                        crisp_image: this.Us,
                        crisp_game: this.Vh
                    },
                    types: {
                        file_preview: m.Magnify.Vu
                    }
                },
                website: {
                    id: m.Base.ch,
                    domain: m.Base.Qs.website.domain,
                    name: m.Base.Qs.website.name
                },
                last_operator_face: !0 === this.Qs.chat.last_operator_face && 0 < this.Qs.website.active_operators.length,
                is_blocked: this.qo(),
                is_full_view: this.Bc(),
                is_small_view: this.pu(),
                is_large_view: this.yu()
            };
            m.Utility.merge(m.Store.$store.base, t), this.Wu(), this.Hu()
        }, q.prototype.hu = function() {
            try {
                this.lu = null, this.fu = null, this.Rc = null
            } catch (t) {}
        }, q.prototype.Wu = function() {
            try {
                var t = [],
                    i = m.Store.$store.base.configuration,
                    n = i.website.active_operators;
                if (0 < n.length)
                    for (var e = 0; e < n.length; e++) e < this.Gu && t.push({
                        type: "operator",
                        identifier: n[e].user_id,
                        avatar: n[e].avatar,
                        name: m.Library.crisp.web.Name.parse_first_name(n[e].nickname)
                    });
                else t.push({
                    type: "website",
                    identifier: this.ch,
                    name: i.website.name
                });
                m.Store.$store.base.active_operators = t
            } catch (t) {}
        }, q.prototype.Hu = function() {
            try {
                var t = 0,
                    i = m.Store.$store.base.configuration,
                    n = (i.website.active_operators || []).length || 0;
                i.website.count_operators > n && (t = Math.min(this.Ku, i.website.count_operators - n)), m.Store.$store.base.other_operators_count = t
            } catch (t) {}
        }, q.prototype.st = function() {
            try {
                this.wc = !1, this.Qs = {}, this._c = null, this.Th = null, this.Uh = null, this.Ph = null, this.Lh = null, this.Jh = null, this.Us = null, this.Vh = null, this.Pa = null, this.ko = null, this.Wh = null, this.La = null, this.Ys = null, this.ch = null, this.Hh = null, this.Gh = null, this.Kh = null, this.Ao = null, this.Io = null, this.Zh = null, this.Yh = null, this.Xh = null, this.Ga = null, this.su = 1, this.eu = !0, this.cu = {}, this.ku = !1, this.xu = !1, this.Qh = null, this.tu = null, this.iu = {}, this.Iu = 0, this.Lu = null, this.Cu = {
                    color: {},
                    other: {}
                }, this.Tu = {}
            } catch (t) {}
        }, new q), m.Minimized = (I.prototype.init = function() {
            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                e = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3];
            try {
                this.Zu(n), this.Yu(i, n, t, e), this.wc = !0
            } catch (t) {}
        }, I.prototype.reset = function() {
            try {
                m.Utility.reset_instance_children(m.Minimized), this.st()
            } catch (t) {}
        }, I.prototype.Zu = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                for (var i = void 0, n = [m.Minimized.Interface, m.Minimized.Event], i = 0; i < n.length; i++) n[i].init(t)
            } catch (t) {}
        }, I.prototype.Yu = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                e = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3];
            try {
                !0 !== i ? m.Minimized.Interface.Xu(t, n, e) : m.Minimized.Interface.Qu(t, e), !0 === m.Base.iu.lock_maximized && m.Minimized.Interface.kc()
            } catch (t) {}
        }, I.prototype.st = function() {
            try {
                this.wc = !1
            } catch (t) {}
        }, new I), m.Minimized.Event = (A.prototype.init = function() {}, A.prototype.pane_click = function(t) {
            try {
                var i, n, e = t.target;
                e && ((i = e.getAttribute("data-pop")) || (n = e.closest("[data-pop]")) && (i = n.getAttribute("data-pop") || null), i ? "spotlight" === i && m.Action.do_helpdesk_search() : e && !0 === e.classList.contains("cc-1j8t") ? m.Minimized.Interface.tl() : m.Minimized.Interface.kc())
            } catch (t) {}
        }, A.prototype.il = function() {
            try {
                m.Store.hc("minimized", this.ot, this)
            } catch (t) {}
        }, new A), m.Minimized.Interface = (S.prototype.init = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                this.Yu(t)
            } catch (t) {}
        }, S.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, S.prototype.Xu = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                n = this,
                e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
            try {
                var s = !1;
                !0 === m.Base.Qs.chat.availability_tooltip && (m.Store.$store.minimized.pane.general_entice.is_concealed = m.Library.crisp.client.Storage.get_stamp_local(this.nl, [m.Base.ch, "general_entice", "conceal"]) === this.sl && !0), !0 === m.Base.Qs.chat.helpdesk_link && m.Base.Qs.channels.helpdesk && m.Base.Io !== m.Base.Qs.channels.helpdesk && !0 === m.Library.crisp.client.socket.connected && (m.Store.$store.minimized.pane.helpdesk.url = m.Chat.Interface.ic("helpdesk")), this.cl("minimized_authorized", !0, t, i), this.kc = function() {
                    var i;
                    !1 === s && (!(s = !0) === e ? (n.al(!0), m.Event.trigger_interacted(!0), i = m.Utility.set_timeout(function() {
                        m.Broker.Rt || (alert(m.Locale.text("chat", "minimized_connect_alert_failure")), m.Library.crisp.client.socket.disconnect(), n.al(!1), m.Action.do_chat_hide())
                    }, n.rl), m.Broker.yo.master = function(t) {
                        m.Utility.clear_timeout(i), m.Chat.init(t)
                    }, m.Library.crisp.client.socket.connect()) : m.Chat.init())
                }, m.Availability.apply()
            } catch (t) {}
        }, S.prototype.Qu = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            try {
                this.cl("minimized_unauthorized", !1, t, i), this.kc = function() {}
            } catch (t) {}
        }, S.prototype.Hc = function() {
            try {
                m.Store.$store.minimized.pane.general_entice.visible = !0
            } catch (t) {}
        }, S.prototype.tl = function() {
            try {
                m.Store.$store.minimized.pane.general_entice.is_concealed = !0, m.Library.crisp.client.Storage.set_stamp_local(this.nl, [m.Base.ch, "general_entice", "conceal"], this.sl)
            } catch (t) {}
        }, S.prototype.cl = function(t) {
            var i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                n = this,
                e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                s = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3];
            try {
                m.Minimized.Event.il();
                var c, a, r = m.Template.dom(m.Template.render(t));
                m.Base.Rc.innerHTML = "", m.Base.Rc.appendChild(r), m.Template.vue(r), !0 === i && (c = m.Base.Qs, a = !0 !== m.Base.Bc() && !0 === c.chat.availability_tooltip, !0 === s && m.Feature.has_css_animations() ? (!0 === e && (m.Store.$store.minimized.pane.animate_entrance = !0, m.Utility.set_timeout(function() {
                    m.Store.$store.minimized.pane.animate_entrance = !1
                }, this.ol)), a && m.Utility.set_timeout(function() {
                    var t = m.Store.$store.minimized.pane;
                    n.Hc();
                    var i = !0 === e ? "animate_full" : "animate_short";
                    t.general_entice[i] = !0, m.Utility.set_timeout(function() {
                        t.general_entice[i] = !1
                    }, n.hl)
                }, this.va * (!0 === e ? this.ul : this.ll))) : this.Hc())
            } catch (t) {}
        }, S.prototype.al = function() {
            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
            try {
                m.Store.$store.minimized.pane.is_waiting = t
            } catch (t) {}
        }, S.prototype.Yu = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                !0 !== t && m.Library.crisp.client.Message.get_message_history()
            } catch (t) {}
        }, S.prototype.st = function() {
            try {
                this.kc = function() {}
            } catch (t) {}
        }, new S), m.Chat = (C.prototype.init = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
            try {
                this.Zu(), null !== t && m.Chat.State.fl(t), null === t && m.Action.Vc("chat:initiated"), this.Yu(), m.Base.Ic(!1), this.wc = !0
            } catch (t) {}
        }, C.prototype.reset = function() {
            try {
                m.Utility.reset_instance_children(m.Chat), this.st()
            } catch (t) {}
        }, C.prototype.Oo = function() {
            try {
                this.dl(!1)
            } catch (t) {}
        }, C.prototype.Sc = function() {
            try {
                this.dl(!0)
            } catch (t) {}
        }, C.prototype.dl = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                !0 !== this.wc && (this.init({
                    maximized: t
                }), m.Chat.State.propagate("maximized", t, !0))
            } catch (t) {}
        }, C.prototype.Zu = function() {
            try {
                for (var t = void 0, i = [m.Chat.Alert, m.Chat.Intent, m.Chat.Field, m.Chat.Interface, m.Chat.Message, m.Chat.Misc, m.Chat.Notification, m.Chat.Scroll, m.Chat.State, m.Chat.Selector, m.Chat.Event, m.Chat.Viewport], t = 0; t < i.length; t++) i[t].init()
            } catch (t) {}
        }, C.prototype.Yu = function() {
            try {
                m.Chat.Interface.vl(), m.Chat.Field.pl(), m.Availability.apply(), m.Library.crisp.client.Socket.get_state(), m.Sound.initialize("events"), m.Chat.Message.fl()
            } catch (t) {}
        }, C.prototype.st = function() {
            try {
                this.wc = !1
            } catch (t) {}
        }, new C), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, m.Chat.Alert = (z.prototype.init = function() {}, z.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, z.prototype.ta = function(t, i) {
            try {
                var n, e = void 0,
                    s = void 0,
                    c = void 0;
                "object" === (void 0 === t ? "undefined" : r(t)) ? e = t: (e = {})[t] = i;
                var a = m.Utility.clone(this.yl);
                for (s in e) e.hasOwnProperty(s) && (n = e[s], c = !1, void 0 !== this.yl[s] && this.yl[s] === n && (c = !0), !1 === (c = "lock" === this.yl[s] && "unlock" !== n || c) && (a[s] = n));
                m.Chat.State.propagate("alert", a)
            } catch (t) {}
        }, z.prototype.ml = function(t) {
            var i = !1;
            try {
                i = ("show" === this.yl[t] || "unlock" === this.yl[t]) && !0
            } catch (t) {} finally {
                return i
            }
        }, z.prototype.gl = function(t, i) {
            try {
                var n = this._l[i];
                "function" == typeof n && n.At(this)(t)
            } catch (t) {}
        }, z.prototype.wl = function(t) {
            try {
                this.bl(t)
            } catch (t) {}
        }, z.prototype.kl = function(t) {
            try {
                this.bl(t)
            } catch (t) {}
        }, z.prototype.bl = function(t) {
            try {
                "show" === t ? m.Chat.Message.xl() : m.Chat.Message.$l()
            } catch (t) {}
        }, z.prototype.st = function() {
            try {
                this.yl = {}
            } catch (t) {}
        }, new z), m.Chat.Intent = (E.prototype.init = function() {}, E.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, E.prototype.ta = function(t) {
            var i, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "default",
                e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
            try {
                if (-1 === this.Fl.indexOf(t)) throw new Error("Unknown intent: " + t);
                !0 !== e && !1 === this.yl[t] || (i = m.Utility.clone(this.yl), n || !1 === n ? i[t] = n : delete i[t], m.Chat.State.propagate("intent", i))
            } catch (t) {}
        }, E.prototype.jl = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
            try {
                for (var i, n = void 0, n = 0; n < this.Fl.length; n++) i = this.Fl[n], (t || this.yl)[i] || this.El(i, null)
            } catch (t) {}
        }, E.prototype.El = function(t) {
            var i, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "default",
                e = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
            try {
                -1 === this.Fl.indexOf(t) || "function" == typeof(i = this.zl[t]) && i.At(this)(n, e)
            } catch (t) {}
        }, E.prototype.Cl = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "default",
                i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            try {
                t ? "default" === t ? m.Chat.Message.Sl(i) : m.Chat.Message.Al(t, i) : m.Chat.Message.Il()
            } catch (t) {}
        }, E.prototype.ql = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "default",
                i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            try {
                t ? m.Chat.Message.Dl(i) : m.Chat.Message.Ol()
            } catch (t) {}
        }, E.prototype.st = function() {
            try {
                this.yl = {}
            } catch (t) {}
        }, new E), m.Chat.Picker = (j.prototype.init = function() {}, j.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, j.prototype.El = function(t) {
            try {
                this.Rl = null, m.Store.$store.chat.picker.is_visible = !0 !== m.Store.$store.chat.picker.is_visible, m.Store.$store.chat.picker.has_animation = !0, m.Store.$store.chat.picker.type = "smiley", !0 !== m.Store.$store.chat.picker.is_visible && m.Chat.Field.pl()
            } catch (t) {}
        }, j.prototype.Bl = function() {
            try {
                this.Rl = null, m.Store.$store.chat.picker.is_visible = !1, m.Store.$store.chat.picker.has_animation = !1, m.Store.$store.chat.picker.gif.results = [], m.Store.$store.chat.picker.gif.input = ""
            } catch (t) {}
        }, j.prototype.Fc = function(t) {
            try {
                this.Bl(), m.Store.$store.chat.picker.is_visible = !0, "gif" === (m.Store.$store.chat.picker.type = t) && this.Ml()
            } catch (t) {}
        }, j.prototype.Ml = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
            try {
                if (null !== m.Chat.Event.Nl && (m.Utility.clear_timeout(m.Chat.Event.Nl), m.Chat.Event.Nl = null), this.Rl !== t) {
                    this.Rl = t, m.Library.crisp.client.Media.get_animation_list(t), m.Store.$store.chat.picker.gif.results = [];
                    for (var i = 0; i < this.Tl; i++) m.Store.$store.chat.picker.gif.results.push({
                        loading: !0
                    })
                }
            } catch (t) {}
        }, j.prototype.Ul = function() {
            var t = !1;
            try {
                t = m.Store.$store.chat.picker.is_visible
            } catch (t) {} finally {
                return t
            }
        }, j.prototype.st = function() {
            try {
                this.Pl = null, this.Rl = null
            } catch (t) {}
        }, new j), m.Chat.Event = (F.prototype.init = function() {}, F.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, F.prototype.message_common_click = function(t) {
            var i, n;
            try {
                t && t.target && t.target.href && m.Base.Qs.channels.helpdesk && m.Base.Io !== m.Base.Qs.channels.helpdesk && !0 !== m.Feature.has_screen_touch() && (null === (i = m.Utility.acquire_channel_url_regex("helpdesk", "article", "([^/]+)/article/([^/]+)/.*")) || (n = t.target.href.match(i)) && n[1] && n[2] && (m.Action.do_helpdesk_article_open(n[1], n[2]), t.preventDefault()))
            } catch (t) {}
        }, F.prototype.message_welcome_helpdesk_click = function(t) {
            try {
                t.preventDefault(), m.Event.trigger_interacted(!0), m.Action.do_helpdesk_search()
            } catch (t) {}
        }, F.prototype.message_text_click = function(t) {
            try {
                var i, n = t.target;
                !n || (i = n.closest(".cc-151c")) && i.href && (t.preventDefault(), m.Magnify.Ll("embed", i.href))
            } catch (t) {}
        }, F.prototype.message_file_click = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            try {
                m.Magnify.Ll(t, i, n, e)
            } catch (t) {}
        }, F.prototype.message_picker_button_click = function(t, i) {
            try {
                if ("user" !== t.from) {
                    for (var n = !1, e = i.value, s = null, c = 0; c < t.content.choices.length; c++) {
                        var a = t.content.choices[c];
                        a.value === e ? !0 !== a.selected && (n = a.selected = !0, s = a.handler) : a.selected = !1
                    }!0 === n && ("function" == typeof s ? s(t) : m.Library.crisp.client.Message.update_message(t.fingerprint, t.content))
                }
            } catch (t) {}
        }, F.prototype.message_fields_send = function(t) {
            try {
                "function" == typeof t.content.handler ? t.content.handler(t.metas.field.value) : (t.content.value = t.metas.field.value, m.Library.crisp.client.Message.update_message(t.fingerprint, t.content))
            } catch (t) {}
        }, F.prototype.message_send_retry_click = function(t) {
            try {
                !0 === m.Chat.Message.Jl() && (m.Chat.Message.Vl(t.fingerprint), m.Action.do_message_send(t.type, t.content))
            } catch (t) {}
        }, F.prototype.message_previous_click = function(t) {
            try {
                m.Chat.Intent.ta(t.content.previous)
            } catch (t) {}
        }, F.prototype.game_stop_click = function() {
            try {
                m.Chat.Game.Wl()
            } catch (t) {}
        }, F.prototype.click_fuzzy = function(t) {
            try {
                var i = t.target;
                i && !0 !== i.classList.contains("cc-z2in") && !i.closest(".cc-z2in") && m.Chat.Field.pl()
            } catch (t) {}
        }, F.prototype.pane_minimize = function() {
            try {
                m.Action.do_chat_close()
            } catch (t) {}
        }, F.prototype.pane_toggle = function(t) {
            try {
                var i = t.target;
                i && !0 === i.classList.contains("cc-1sec") ? m.Action.do_message_read() : m.Action.do_chat_toggle()
            } catch (t) {}
        }, F.prototype.flow_scroll = function(t) {
            try {
                m.Chat.Interface.Hl(t.target.scrollTop), t.preventDefault(), t.stopPropagation()
            } catch (t) {}
        }, F.prototype.flow_touch = function(t) {
            try {
                t.stopPropagation()
            } catch (t) {}
        }, F.prototype.file_drop_dragover = function(t) {
            try {
                t.preventDefault(), t.stopPropagation(), m.Chat.File.Gl(!0)
            } catch (t) {}
        }, F.prototype.file_drop_dragleave = function(t) {
            try {
                t.preventDefault(), t.stopPropagation(), m.Chat.File.Gl(!1)
            } catch (t) {}
        }, F.prototype.file_drop = function(t) {
            try {
                t.preventDefault(), t.stopPropagation(), t.dataTransfer && t.dataTransfer.files && 0 < t.dataTransfer.files.length && m.Chat.File.Kl(t.dataTransfer.files), m.Chat.File.Gl(!1)
            } catch (t) {}
        }, F.prototype.file_change = function(t) {
            try {
                !0 === m.Base.Qs.chat.file_transfer && t.target.files && 0 < t.target.files.length && (m.Event.trigger_interacted(!0), m.Chat.File.Kl(t.target.files))
            } catch (t) {}
        }, F.prototype.header_generic_click = function(t) {
            try {
                t.stopPropagation()
            } catch (t) {}
        }, F.prototype.header_spotlight_click = function(t) {
            try {
                t.stopPropagation(), m.Event.trigger_interacted(!0), m.Action.do_helpdesk_search()
            } catch (t) {}
        }, F.prototype.picker_click = function(t) {
            try {
                var i = t.target;
                !i || !0 !== i.classList.contains("cc-151i") && i.closest(".cc-151i") || m.Chat.Picker.Bl()
            } catch (t) {}
        }, F.prototype.picker_show = function(t) {
            try {
                m.Chat.Picker.Fc(t)
            } catch (t) {}
        }, F.prototype.picker_toggle = function() {
            try {
                m.Chat.Picker.El(), !0 === m.Store.$store.chat.picker.is_visible && m.Event.trigger_interacted(!0)
            } catch (t) {}
        }, F.prototype.picker_smiley_click = function(t) {
            try {
                var i, n = void 0,
                    e = m.Chat.Selector.get("form_textarea_message"),
                    s = e.selectionStart;
                (n = m.Action.get_message_text()) && (0 < s && " " !== n[s - 1] && (t = " " + t), s < n.length && " " !== n[s] && (t += " ")), i = n.substr(0, s) + t + n.substr(s), m.Action.set_message_text(i), e.dispatchEvent(new window.KeyboardEvent("keyup")), m.Utility.set_timeout(function() {
                    s += t.length, e.selectionStart = e.selectionEnd = s
                }, 0), m.Chat.Picker.Bl(), m.Chat.Field.pl()
            } catch (t) {}
        }, F.prototype.picker_gif_input_keyup = function(t) {
            try {
                null !== this.Nl && m.Utility.clear_timeout(this.Nl), this.Nl = m.Utility.set_timeout(function() {
                    m.Chat.Picker.Ml((t.target.value || "").trim())
                }, this.Zl)
            } catch (t) {}
        }, F.prototype.picker_gif_input_reset = function(t) {
            try {
                m.Store.$store.chat.picker.gif.input = "", m.Chat.Picker.Ml("")
            } catch (t) {}
        }, F.prototype.picker_gif_item_click = function(t) {
            try {
                t.type && t.url && m.Action.do_message_send("animation", {
                    type: t.type,
                    url: t.url
                }), m.Chat.Picker.Bl()
            } catch (t) {}
        }, F.prototype.alert_warn_reply_click = function() {
            try {
                !0 === m.Base.Qs.chat.phone_visitors && !0 !== m.Base.Qs.chat.email_visitors ? m.Chat.Intent.ta("identity", "phone") : m.Chat.Intent.ta("identity", "email")
            } catch (t) {}
        }, F.prototype.alert_new_messages_click = function() {
            try {
                m.Chat.Scroll.Yl()
            } catch (t) {}
        }, F.prototype.alert_email_invalid_click = function() {
            try {
                m.Chat.Intent.ta("identity", "email", !0)
            } catch (t) {}
        }, F.prototype.textarea_keyup = function(t) {
            try {
                m.Chat.Field.Xl(t)
            } catch (t) {}
        }, F.prototype.textarea_keydown = function(t) {
            try {
                if (13 === t.keyCode && !t.shiftKey) return t.preventDefault(), void m.Chat.Field.Ql();
                if (70 === t.keyCode && t.ctrlKey && m.Base.Qs.channels.helpdesk && m.Base.Io !== m.Base.Qs.channels.helpdesk) return t.preventDefault(), void m.Action.do_helpdesk_search();
                m.Event.trigger_interacted(), m.Chat.Field.Xl(t)
            } catch (t) {}
        }, F.prototype.textarea_paste = function(t) {
            try {
                var i = (t.clipboardData || t.originalEvent.clipboardData || {}).items || [];
                if (0 < i.length) {
                    for (var n, e = [], s = 0; s < i.length; s++) "file" !== i[s].kind || (n = i[s].getAsFile()) && n.type && -1 !== n.type.indexOf("image/") && e.push(n);
                    0 < e.length && (t.preventDefault(), !0 === confirm(m.Locale.text("chat", "chat_form_attach_confirm_upload")) && m.Chat.File.Kl(e))
                }
                m.Utility.set_timeout(function() {
                    m.Chat.Field.Xl(null)
                }, 0)
            } catch (t) {}
        }, F.prototype.textarea_send_click = function(t) {
            try {
                m.Chat.Field.Ql()
            } catch (t) {}
        }, F.prototype.il = function() {
            try {
                m.Store.hc("chat", this.ot, this), this.tf(), this.if()
            } catch (t) {}
        }, F.prototype.tf = function() {
            try {
                m.Utility.add_event_listener(this.ns, "document", "wheel", function(t) {
                    try {
                        var i, n, e = t.target;
                        e && "number" == typeof t.wheelDelta && !0 === m.Action.is_chat_opened() && (e.closest(".crisp-client") || !0 === e.classList.contains("crisp-client")) && ((i = m.Chat.Selector.get("flow")) && (e.closest(".cc-301t") || !0 === e.classList.contains(".cc-301t")) && (n = i.scrollTop - t.wheelDelta, i.scrollTop = 0 <= n ? n : 0), t.stopPropagation(), t.preventDefault(), t.returnValue = !1)
                    } catch (t) {}
                }, {
                    passive: !1
                })
            } catch (t) {}
        }, F.prototype.if = function() {
            try {
                m.Utility.add_event_listener(this.ns, "window", "beforeunload", function(t) {
                    var i, n = null;
                    if (!0 === m.Library.crisp.client.Message.is_sending_messages() && (n = m.Locale.text("chat", "chat_message_send_abort_warn")), !0 === m.Base.Qs.chat.file_transfer && (i = m.Store.$store.chat.file.state, -1 !== ["preparing", "uploading"].indexOf(i) && (n = m.Locale.text("chat", "chat_form_attach_abort_warn"))), n = !0 === m.Library.crisp.client.Call.is_ongoing() ? m.Locale.text("call", "call_abort_warn") : n) return t.returnValue = n
                })
            } catch (t) {}
        }, F.prototype.st = function() {
            try {
                this.Nl = null
            } catch (t) {}
        }, new F), m.Chat.Field = ($.prototype.init = function() {}, $.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, $.prototype.Ql = function() {
            try {
                m.Event.trigger_interacted(!0), m.Chat.Message.send()
            } catch (t) {}
        }, $.prototype.Xl = function(t) {
            try {
                var i, n, e, s, c, a, r = "";
                null !== t && 13 === t.keyCode && !t.shiftKey || (r = m.Action.get_message_text(), i = m.Chat.Selector.get("form_container"), n = m.Chat.Selector.get("form_textarea_message"), 0 === this.nf && (this.nf = parseInt(n.getAttribute("rows"), 10)), this.ef(), r ? (e = 8.5 * r.length / m.Chat.Interface.sf, e += (r.match(this.cf) || []).length, ((s = Math.ceil(e)) - e < this.af || s !== this.rf) && (e = s, this.rf = e, c = m.Chat.Interface.hf - m.Chat.Interface.uf + m.Chat.Interface.uf * e, a = m.Chat.Interface.uf * (e - 1), c < m.Chat.Interface.lf + m.Chat.Interface.hf - this.ff && (n.setAttribute("rows", this.nf + (e - 1)), m.Chat.Field.df(a), i.style.setProperty("height", c + "px", "important"))), m.Store.$store.chat.field.has_value = !0) : (m.Store.$store.chat.field.has_value = !1, i.style.height = null, n.setAttribute("rows", this.nf), this.df(0))), m.Library.crisp.client.Message.send_message_compose(r ? "start" : "stop", r || null)
            } catch (t) {}
        }, $.prototype.pl = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                !0 !== t && m.Feature.has_screen_touch() || !0 !== m.Chat.Interface.vf() || null === m.Chat.Selector.pf || m.Utility.next_render(function() {
                    var t, i = m.Chat.Selector.get("flow_messages");
                    i && (t = i.querySelector(".cc-1jfv"), (i = !(i = null) === m.Chat.Picker.Ul() ? m.Chat.Selector.get("content").querySelector(".cc-wrgp") : t || m.Chat.Selector.get("form_textarea_message")) && i.focus())
                })
            } catch (t) {}
        }, $.prototype.yf = function() {
            try {
                for (var t = m.Base.Rc.querySelectorAll("input"), i = 0; i < t.length; i++) t[i].blur()
            } catch (t) {}
        }, $.prototype.df = function(t) {
            try {
                for (var i = m.Chat.Selector.mf.querySelectorAll([".cc-x5kk", ".cc-kx3k", ".cc-151i"].join(", ")), n = 0; n < i.length; n++) i[n].style.setProperty("margin-bottom", t + "px", "important")
            } catch (t) {}
        }, $.prototype.ef = function() {
            var t = this;
            try {
                null !== this.gf && m.Utility.clear_timeout(this.gf), this.gf = m.Utility.set_timeout(function() {
                    t.gf = null, m.Chat.State.propagate("textarea", m.Action.get_message_text())
                }, this.wf)
            } catch (t) {}
        }, $.prototype.st = function() {
            try {
                this.bf = "", this.nf = 0, this.rf = 1, this.gf = null
            } catch (t) {}
        }, new $), m.Chat.File = (x.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, x.prototype.zo = function(t, i, n) {
            try {
                if (!0 === m.Base.Qs.chat.file_transfer) {
                    if (!this.kf[0]) return void this.xf();
                    if (!t || !i) return alert(m.Locale.text("chat", "chat_form_attach_alert_quota")), void this.xf();
                    if (this.kf[0].size >= n) return alert(m.Locale.text("chat", "chat_form_attach_alert_size")), void this.xf();
                    this.$f = i, this.Ff(t, this.kf[0])
                }
            } catch (t) {}
        }, x.prototype.Gl = function(t) {
            try {
                !0 === m.Base.Qs.chat.file_transfer && (m.Store.$store.chat.has_drop_zone = t)
            } catch (t) {}
        }, x.prototype.Kl = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            try {
                if (!0 === m.Chat.Message.Jl() && 0 < t.length && "none" === m.Store.$store.chat.file.state) {
                    this.kf = [];
                    for (var i = 0; i < t.length; i++) m.Chat.File.kf.push(t[i]);
                    m.Store.$store.chat.file.state = "preparing", m.Library.crisp.client.Bucket.get_url_upload(t[0].name || this.jf, t[0].type || this.Ef)
                }
            } catch (t) {}
        }, x.prototype.Ff = function(t, i) {
            try {
                this.zf = new window.XMLHttpRequest, this.zf.file = i, this.zf.addEventListener("progress", this.Cf.At(this), !1), this.zf.addEventListener("error", this.Sf.At(this), !1), this.zf.addEventListener("abort", this.Sf.At(this), !1), this.zf.addEventListener("load", this.Af.At(this), !1), this.zf.open("PUT", t, !0), this.zf.setRequestHeader("Content-Disposition", "attachment"), this.zf.send(i)
            } catch (t) {}
        }, x.prototype.Cf = function() {
            try {
                m.Store.$store.chat.file.state = "uploading"
            } catch (t) {}
        }, x.prototype.Sf = function() {
            try {
                0 < this.kf.length && alert(m.Locale.text("chat", "chat_form_attach_alert_error")), this.xf()
            } catch (t) {}
        }, x.prototype.Af = function() {
            var t = this;
            try {
                0 < this.kf.length && this.$f && m.Utility.set_timeout(function() {
                    m.Action.do_message_send("file", {
                        url: t.$f,
                        name: t.kf[0].name || t.jf,
                        type: t.kf[0].type || t.Ef
                    }), t.xf()
                }, this.If)
            } catch (t) {}
        }, x.prototype.xf = function() {
            try {
                this.zf && (this.zf.removeEventListener("progress", this.Cf, !1), this.zf.removeEventListener("error", this.Sf, !1), this.zf.removeEventListener("abort", this.Sf, !1), this.zf.removeEventListener("load", this.Af, !1)), m.Chat.Selector.get("form_input_attach").value = null, m.Store.$store.chat.file.state = "none", this.kf.shift(), 0 < this.kf.length && this.Kl(this.kf)
            } catch (t) {}
        }, x.prototype.st = function() {
            try {
                this.kf = [], this.$f = null
            } catch (t) {}
        }, new x), m.Chat.Game = (k.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, k.prototype.qf = function() {
            try {
                null === this.Df && (m.Store.$store.chat.game.loaded = !1, this.Df = m.Template.dom(m.Template.render("chat_game")), m.Template.vue(this.Df), m.Chat.Selector.mf.appendChild(this.Df))
            } catch (t) {}
        }, k.prototype.Wl = function() {
            try {
                null !== this.Df && (this.Df.remove(), this.Df = null)
            } catch (t) {}
        }, k.prototype.st = function() {
            try {
                this.Df = null
            } catch (t) {}
        }, new k), m.Chat.Interface = (b.prototype.init = function() {
            try {
                this.Of()
            } catch (t) {}
        }, b.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, b.prototype.Rf = function() {
            var n = this,
                t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "pane",
                i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            try {
                function e(t) {
                    var i = "close" === t ? "animate_minimize" : "animate_maximize";
                    1 == s && (m.Store.$store.chat.is_opened = !0), null !== n.Bf && m.Utility.clear_timeout(n.Bf), m.Store.$store.chat[i] = !0, n.Bf = m.Utility.set_timeout(function() {
                        m.Store.$store.chat[i] = !1, m.Store.$store.chat.is_opened = s
                    }, n.Mf)
                }
                var s = "chat" === t;
                "pane" === t ? !0 === i ? e("close") : m.Store.$store.chat.is_opened = !1 : !0 === i ? e("open") : m.Store.$store.chat.is_opened = !0, this.Nf(), this.Tf("true" === s)
            } catch (t) {}
        }, b.prototype.co = function() {
            var n = this,
                e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                s = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                null !== this.Uf && m.Utility.clear_timeout(this.Uf), this.Uf = m.Utility.set_timeout(function() {
                    n.Uf = null, m.Store.$store.chat.has_offline = !0 !== e;
                    var t, i = {
                        failed: s,
                        inactive: m.Event.Zo || m.Event.Yo || !1
                    };
                    for (t in i) m.Store.$store.chat["reconnect_" + t] = i[t]
                }, !0 === e ? 0 : this.Pf)
            } catch (t) {}
        }, b.prototype.xc = function() {
            try {
                !0 !== m.Base.iu.lock_maximized && m.Chat.State.propagate("maximized", !1)
            } catch (t) {}
        }, b.prototype.bc = function() {
            try {
                m.Chat.State.propagate("maximized", !0, !1, function() {
                    m.Utility.next_render(function() {
                        m.Chat.Scroll.Yl()
                    })
                })
            } catch (t) {}
        }, b.prototype.vf = function() {
            var t = !0;
            try {
                t = m.Store.$store.chat.is_opened || !1
            } catch (t) {} finally {
                return t
            }
        }, b.prototype.vl = function() {
            var t = this;
            try {
                var i = m.Base.Qs || {};
                i.website, this.uc(), m.Chat.Selector.pf = m.Template.dom(m.Template.render("chat", {
                    configuration: i,
                    environment: {
                        smileys: this.Lf,
                        url: {
                            crisp_web: m.Base.Lh
                        }
                    },
                    methods: {
                        generate_channel_link: this.ic.At(this)
                    },
                    website: {
                        id: m.Base.ch,
                        domain: m.Base.Qs.website.domain,
                        name: m.Base.Qs.website.name
                    }
                })), m.Base.Rc.innerHTML = "", m.Base.Rc.appendChild(m.Chat.Selector.pf), m.Template.vue(m.Chat.Selector.pf), m.Chat.Selector.il(), m.Chat.Event.il(), m.Utility.next_render(function() {
                    t.$c(!0)
                }), this.Jf(), m.Chat.State.Vf(["intent"])
            } catch (t) {}
        }, b.prototype.uc = function() {
            var i = this,
                t = (m.Base.Qs || {}).website || {},
                t = {
                    blocked: m.Base.bu(),
                    helpdesk: {
                        search: m.Base.Qs.chat.helpdesk_link && m.Base.Qs.channels.helpdesk && m.Base.Io !== m.Base.Qs.channels.helpdesk && !0
                    },
                    status: {
                        url: this.ic("status")
                    },
                    activity: {
                        metrics: t.response_metrics && t.response_metrics.mean && t.response_metrics.mean >= this.Wf && t.response_metrics.mean < this.Hf ? t.response_metrics.mean : null,
                        last: t.last_available && 0 < t.last_available ? t.last_available : null
                    },
                    channels: this.Gf()
                };
            m.Store.$store.chat.content_source = function(t) {
                return t.match(i.Kf)[1]
            }, m.Store.$store.chat.timestamp_to_properties = function(t) {
                return m.Date.timestamp_to_properties(t)
            }, m.Store.$store.chat.is_different_date = function(t, i) {
                return t = m.Store.$store.messages.list[t], i = m.Store.$store.messages.list[i], !(t && 0 === t.timestamp || t && i && (i = m.Date.timestamp_to_properties(i.timestamp), t = m.Date.timestamp_to_properties(t.timestamp), i.day === t.day && i.month === t.month && i.year === t.year))
            }, m.Store.$store.chat.is_last_of_group = function(t, i) {
                var n = m.Store.$store.messages.list[i + 1],
                    e = (n || {}).user || {},
                    s = t.user || {};
                return m.Store.$store.chat.is_different_date(i + 1, i) || !n && !0 || (t.sending || t.error) && !(n.sending || n.error) || n && e.user_id !== s.user_id || (e.type || s.type) && s.nickname != s.nickname || !1
            }, m.Store.$store.chat.is_last_of_thread = function(t, i) {
                return m.Store.$store.chat.is_different_date(i + 1, i) || !m.Store.$store.messages.list[i + 1] && !0 || !1
            }, m.Store.$store.chat.check_picker_has_selected_choice = function(t) {
                for (var i = !1, n = 0; n < (t.choices || []).length; n++)
                    if (!0 === t.choices[n].selected) {
                        i = !0;
                        break
                    }
                return i
            }, m.Utility.merge(m.Store.$store.chat, t)
        }, b.prototype.ic = function(t) {
            var i = "";
            try {
                var n = m.Base.Qs.channels[t] || null;
                switch (t) {
                    case "email":
                        var e, s, c = m.Broker.ho;
                        c ? (e = m.Base.Qs.website.name, s = "s." + c + ".i@" + m.Base.Qs.website.mailer, i = "mailto:", e && (i += '"' + encodeURI(e) + '"'), i += "<" + encodeURI(s) + ">") : n && (i = "mailto:" + n);
                        break;
                    case "phone":
                        n && (i = "tel:" + n);
                        break;
                    case "messenger":
                        n && (i = "https://m.me/" + encodeURI(n));
                        break;
                    case "telegram":
                        n && (i = "https://telegram.me/" + encodeURI(n));
                        break;
                    case "twitter":
                        n && (i = "https://twitter.com/" + encodeURI(n));
                        break;
                    case "helpdesk":
                    case "status":
                        n && (i = ("production" === m.Base.Wh ? "https" : "http") + "://" + n + "/")
                }
            } catch (t) {} finally {
                return i
            }
        }, b.prototype.$c = function() {
            var t, i, n, e, s, c, a = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                !0 === m.Action.is_chat_visible() && (!0 === m.Base.yu() ? (this.Zf = this.Yf, this.Xf = this.Qf) : !0 === m.Base.pu() ? (this.Zf = this.td, this.Xf = this.nd) : (this.Zf = this.ed, this.Xf = this.sd), m.Base.Wo(), !0 === m.Base.Bc() && (this.Zf = window.innerHeight, this.Xf = window.innerWidth, this.Zf -= m.Chat.Selector.get("header").offsetHeight), !0 !== m.Chat.wc && !0 !== a || (t = "rtl" === m.Locale.direction() ? "right" : "left", i = "rtl" === m.Locale.direction() ? "left" : "right", n = parseInt(window.getComputedStyle(m.Chat.Selector.get("form_textarea_message"))[t].replace("px", ""), 10), e = parseInt(window.getComputedStyle(m.Chat.Selector.get("form_act"))[i].replace("px", ""), 10), s = this.Xf - this.cd - n - e - m.Chat.Selector.get("form_act").offsetWidth, m.Chat.Selector.mf.style.setProperty("width", this.Xf + "px", "important"), m.Chat.Selector.get("content").style.setProperty("height", this.Zf + "px", "important"), m.Chat.Selector.get("form_textarea_message").style.setProperty("width", s + "px", "important"), this.lf = m.Chat.Selector.get("flow").offsetHeight, this.sf = m.Chat.Selector.get("form_textarea_message").offsetWidth, 0 === this.hf && (this.hf = m.Chat.Selector.get("form_container").offsetHeight), 0 === this.uf && (c = window.getComputedStyle(m.Chat.Selector.get("form_textarea_message")).lineHeight || "", this.uf = parseInt(c.replace("px", ""), 10)), m.Chat.Scroll.ad = this.lf, m.Base.Bc() && !0 === this.vf() ? m.Chat.Viewport.rd() : m.Chat.Viewport.od(), m.Chat.Selector.get("form_textarea_message").dispatchEvent(new window.KeyboardEvent("keyup"))), m.Sound.allow(!m.Base.Bc() || !m.Feature.has_screen_touch()))
            } catch (t) {}
        }, b.prototype.hd = function() {
            try {
                return this.ud && this.vf() && !0
            } catch (t) {}
        }, b.prototype.Hl = function(t) {
            try {
                (Math.abs(t - (m.Chat.Scroll.ld || 0)) >= this.fd || null !== this.dd) && (m.Chat.Scroll.ld = t, this.vd(m.Chat.Scroll.ld))
            } catch (t) {}
        }, b.prototype.Gf = function() {
            for (var t = [], i = 0; i < this.pd.length; i++) {
                var n = this.pd[i][0],
                    e = this.pd[i][1],
                    s = this.ic(n);
                s && ("email" !== n && "phone" !== n || (e = m.Locale.text.At(m.Locale)("chat", "chat_header_ongoing_channel_continue_" + n)), t.push({
                    name: n,
                    format: e,
                    link: s
                }))
            }
            return t
        }, b.prototype.vd = function(t) {
            var i = this;
            try {
                null !== this.dd && m.Utility.clear_timeout(this.dd), this.dd = m.Utility.set_timeout(function() {
                    i.dd = null, m.Chat.State.propagate("scroll", t)
                }, this.yd)
            } catch (t) {}
        }, b.prototype.Tf = function() {
            var t = this,
                i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                null !== this.md && (m.Utility.clear_timeout(this.md), this.md = null), !0 === m.Base.Bc() && window.scroll && (!0 === i ? !0 === m.Base.Bc() && (this.md = m.Utility.set_timeout(function() {
                    !(t.md = null) === t.vf() && (-1 === t.gd && (t.gd = window.scrollY), window.scroll(window.scrollX, document.body.scrollHeight))
                }, this._d)) : -1 < this.gd && (window.scroll(window.scrollX, this.gd), this.gd = -1))
            } catch (t) {}
        }, b.prototype.Nf = function() {
            try {
                var t = this.hd();
                m.Library.crisp.client.Message.set_messages_in_view(t)
            } catch (t) {}
        }, b.prototype.Of = function() {
            var t = this;
            try {
                this.ud = (!window.hasFocus || window.hasFocus()) && !0, m.Utility.add_event_listener(this.ns, "window", "focus", function() {
                    t.ud = !0, t.Nf()
                }, {
                    capture: !1
                }), m.Utility.add_event_listener(this.ns, "window", "blur", function() {
                    t.ud = !1, t.Nf()
                }, {
                    capture: !1
                })
            } catch (t) {}
        }, b.prototype.Jf = function() {
            try {
                m.Store.$store.chat.is_opened = !1
            } catch (t) {}
        }, b.prototype.st = function() {
            try {
                this.lf = 0, this.hf = 0, this.sf = 0, this.uf = 0, this.wd = 40, this.bd = null, this.kd = null, this.Uf = null, this.Bf = null, this.Xf = 0, this.Zf = 0, this.gd = -1, this.md = null, this.dd = null, this.ud = !0
            } catch (t) {}
        }, new b), m.Chat.Message = (w.prototype.init = function() {
            try {
                this.xd()
            } catch (t) {}
        }, w.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, w.prototype.send = function() {
            var t;
            try {
                !0 !== this.Jl() || (t = (t = m.Action.get_message_text()).trim()) && (m.Action.do_message_send("text", t), m.Action.set_message_text(""), m.Chat.Selector.get("form_textarea_message").dispatchEvent(new window.KeyboardEvent("keyup")))
            } catch (t) {}
        }, w.prototype.received = function(t) {
            var i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                e = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
                s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4];
            try {
                var c = this.$d(t);
                !0 === i && !1 === m.Chat.Interface.hd() && m.Sound.start("events", "chat-message-receive"), !0 === n && !0 === c && this.Fd(t.fingerprint), t.user && -1 === this.jd.indexOf(t.user.source) && m.Chat.Misc.Ed(t.user), !1 === s && m.Chat.Game.Wl(), this.zd && 0 < t.timestamp && this.zd < t.timestamp && this.bo(), !0 === e && m.Utility.next_render(function() {
                    m.Chat.Scroll.Cd("from")
                })
            } catch (t) {}
        }, w.prototype.sent = function(t) {
            var i, n, e, s, c = this;
            try {
                t.from = "user", !0 === this.$d(t) && this.Fd(t.fingerprint), this.Sd(t.fingerprint), m.Chat.Intent.yl.identity || !1 === m.Chat.Intent.yl.identity || (i = m.Action.get_user_email(), n = m.Action.get_user_phone(), e = m.Base.Qs.chat.email_visitors, s = m.Base.Qs.chat.phone_visitors, (i || !0 !== e) && (n || !0 !== s) || i || n ? m.Chat.Alert.ta("wait_reply", "show") : (null !== this.Ad && m.Utility.clear_timeout(this.Ad), this.Ad = m.Utility.set_timeout(function() {
                    c.Ad = null;
                    var t = "default";
                    !1 === (e && s) && (!0 === e ? t = "email" : !0 === s && (t = "phone")), m.Chat.Intent.ta("identity", t), m.Chat.Alert.ta("warn_reply", "show")
                }, this.Id))), m.Utility.next_render(function() {
                    m.Chat.Scroll.Cd("to")
                })
            } catch (t) {}
        }, w.prototype.sent_acknowledgement = function(t) {
            try {
                var i = this.qd.indexOf(t.fingerprint); - 1 !== i && this.qd.splice(i, 1), this.$d(t), this.Dd(), m.Utility.next_render(function() {
                    m.Chat.Scroll.Cd("to")
                })
            } catch (t) {}
        }, w.prototype.history = function(t) {
            try {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    this.$d(n), "user" === n.from && !0 === n.read && this.Od.push(n.fingerprint)
                }
                this.Rd()
            } catch (t) {}
        }, w.prototype.Bd = function() {
            try {
                var t = m.Locale.text("theme_welcome", ["default_chat", m.Base.Qs.chat.theme_welcome + "_chat"], [m.Base.Qs.website.name]),
                    i = {
                        website: m.Base.Qs.channels.helpdesk,
                        url: null
                    };
                i.website && !0 === m.Base.Qs.chat.helpdesk_link && m.Base.Io !== i.website && (i.url = m.Chat.Interface.ic("helpdesk")), this.Md("welcome", "default", "text", t, !1, !1, i.website && i.url ? [{
                    variant: "helpdesk",
                    url: i.url,
                    website: i.website,
                    title: m.Locale.text("chat", "chat_welcome_helpdesk")
                }] : [])
            } catch (t) {}
        }, w.prototype.Sl = function() {
            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
            try {
                for (var i = "**" + m.Locale.text("chat", "chat_message_text_identity_main") + "**\n_" + m.Locale.text("chat", "chat_message_text_identity_ask") + "_", n = [], e = 0; e < this.Nd.length; e++) {
                    var s = this.Nd[e];
                    !0 === m.Base.Qs.chat[s + "_visitors"] && n.push({
                        value: s,
                        selected: !1,
                        label: m.Locale.text("chat", "chat_message_text_identity_pick_" + s),
                        handler: function(t) {
                            return function() {
                                m.Chat.Intent.ta("identity", t)
                            }
                        }(s)
                    })
                }
                0 < n.length && this.Md("identity", "default", "picker", {
                    id: "ask-identity",
                    text: i,
                    choices: n
                }, t, t)
            } catch (t) {}
        }, w.prototype.Il = function() {
            try {
                this.Td("identity")
            } catch (t) {}
        }, w.prototype.Al = function(i) {
            var t, n, e = this,
                s = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            try {
                -1 !== this.Nd.indexOf(i) && (t = "chat_message_text_identity_ask_" + i, n = "chat_message_text_identity_ask_field_" + i, this.Md("identity", i, "field", {
                    id: "identity-" + i,
                    text: "_" + m.Locale.text("chat", t) + "_",
                    explain: m.Locale.text("chat", n),
                    previous: "identity",
                    handler: function(t) {
                        try {
                            m.Action["set_user_" + i](t)
                        } catch (t) {}
                        m.Utility.set_timeout(function() {
                            m.Chat.Field.pl()
                        }, e.Ud)
                    }
                }, s, s))
            } catch (t) {}
        }, w.prototype.Dl = function() {
            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
            try {
                var i = "**" + m.Locale.text("chat", "chat_message_text_game_main") + "**\n_" + m.Locale.text("chat", "chat_message_text_game_ask") + "_";
                this.Md("game", "default", "picker", {
                    id: "ask-game",
                    text: i,
                    choices: [{
                        value: "play",
                        selected: !1,
                        label: m.Locale.text("chat", "chat_message_text_game_pick_yes"),
                        handler: function() {
                            m.Chat.Game.qf(), m.Chat.Intent.ta("game", !1)
                        }
                    }, {
                        value: "ignore",
                        selected: !1,
                        label: m.Locale.text("chat", "chat_message_text_game_pick_no"),
                        handler: function() {
                            m.Chat.Intent.ta("game", !1)
                        }
                    }]
                }, t, t)
            } catch (t) {}
        }, w.prototype.Ol = function() {
            try {
                this.Td("game")
            } catch (t) {}
        }, w.prototype.wo = function(t) {
            try {
                var i = m.Store.$store.messages.is_composing || !1;
                this.zd = t, (m.Store.$store.messages.is_composing = !0) !== i && (this.Pd(), m.Utility.next_render(function() {
                    m.Chat.Scroll.Cd(null)
                }))
            } catch (t) {}
        }, w.prototype.bo = function() {
            try {
                m.Store.$store.messages.is_composing = !1, this.zd = null
            } catch (t) {}
        }, w.prototype._o = function(t) {
            try {
                if (!0 !== m.Base.Qs.chat.operator_privacy) {
                    var i = null;
                    if (0 < t.length)
                        for (var n = 0; n < m.Store.$store.messages.list.length; n++) {
                            var e = m.Store.$store.messages.list[n].fingerprint; - 1 !== t.indexOf(e) && (m.Store.$store.messages.list[n].read = !0, i = e)
                        }
                    null !== i && (m.Store.$store.messages.latest_fingerprint = i)
                }
            } catch (t) {}
        }, w.prototype.zc = function() {
            var t = !1;
            try {
                for (var i = [], n = m.Library.crisp.client.Message.get_cached_messages(), e = n.length - 1; 0 <= e && "local" === (n[e].user || {}).source; e--) i.push(n[e]);
                for (var s = 0; s < i.length; s++) {
                    var c = i[s]; - 1 === this.Ld.indexOf(c.fingerprint) && (this.Ld.push(c.fingerprint), m.Library.crisp.client.Message.receive_message_mirror(c.type, this.Jd, c.content, c.fingerprint), t = !0)
                }
            } catch (t) {} finally {
                return t
            }
        }, w.prototype.Ac = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                e = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
            try {
                var s = m.Base.Qs.website.active_operators || [],
                    c = {
                        source: "local"
                    };
                s[0] && !0 !== e ? (c.user_id = s[0].user_id, c.nickname = s[0].nickname, s[0].avatar && (c.avatar = s[0].avatar)) : (c.type = "website", c.user_id = m.Base.ch, c.nickname = m.Base.Qs.website.name), m.Library.crisp.client.Message.receive_message_local(t, i, c, n)
            } catch (t) {}
        }, w.prototype.Vl = function(t) {
            try {
                for (var i = 0; i < m.Store.$store.messages.list.length; i++)
                    if (m.Store.$store.messages.list[i].fingerprint === t) {
                        m.Store.$store.messages.list.splice(i, 1), delete m.Store.$store.messages.fingerprints[t];
                        break
                    }
            } catch (t) {}
        }, w.prototype.fl = function() {
            try {
                m.Chat.Message.Bd(), this.fo()
            } catch (t) {}
        }, w.prototype.fo = function() {
            try {
                m.Library.crisp.client.Message.get_message_compose(), m.Library.crisp.client.Message.get_unread_messages(), m.Library.crisp.client.Message.get_message_history(), 0 === m.Library.crisp.client.Message.count_message_history() && this.Rd()
            } catch (t) {}
        }, w.prototype.Vd = function(t) {
            var i = null;
            try {
                for (var n = 0; n < m.Store.$store.messages.list.length; n++)
                    if (m.Store.$store.messages.list[n].fingerprint === t) {
                        i = m.Store.$store.messages.list[n];
                        break
                    }
            } catch (t) {} finally {
                return i
            }
        }, w.prototype.Jl = function() {
            var t = !0;
            try {
                !0 !== m.Broker.eo && (t = !1, m.Library.crisp.client.socket.connect())
            } catch (t) {} finally {
                return t
            }
        }, w.prototype.xl = function() {
            try {
                !0 === m.Base.Qs.chat.force_identify && (m.Store.$store.chat.is_locked = !0)
            } catch (t) {}
        }, w.prototype.$l = function() {
            try {
                "true" !== m.Chat.Selector.get("form_container").getAttribute("data-retain-lock") && (m.Store.$store.chat.is_locked = !1)
            } catch (t) {}
        }, w.prototype.Pd = function() {
            var t = this;
            try {
                this.zd && (m.Date.timestamp() - this.zd >= this.Wd ? this.bo() : m.Utility.set_timeout(function() {
                    t.Pd()
                }, this.Hd))
            } catch (t) {}
        }, w.prototype.$d = function(t) {
            var i = !0;
            try {
                var n = m.Utility.clone(t);
                if (1 == (i = !m.Store.$store.messages.fingerprints[n.fingerprint])) void 0 === n.read && (n.read = !1), void 0 === n.metas && (n.metas = {
                    is_new: !1,
                    has_error: !1
                }, "field" !== n.type && "picker" !== n.type || (n.metas.field = {
                    value: ""
                })), m.Store.$store.messages.fingerprints[n.fingerprint] = !0, m.Store.$store.messages.list.push(n);
                else
                    for (var e = 0; e < m.Store.$store.messages.list.length; e++)
                        if (m.Store.$store.messages.list[e].fingerprint === n.fingerprint) {
                            m.Utility.merge(m.Store.$store.messages.list[e], n);
                            break
                        }
                this.Gd(n.from, n.user || {}, n.timestamp)
            } catch (t) {} finally {
                return i
            }
        }, w.prototype.Gd = function(t, i, n) {
            try {
                var e = "local" !== i.source && -1 === this.jd.indexOf(i.source) && !0;
                "operator" === t && (this.zd && 0 < n && n > this.zd && this.bo(), 0 < n && 1 == e && (m.Chat.Alert.ta("wait_reply", "lock"), m.Chat.Intent.ta("game", !1))), 0 < n && (this.gh = !0, this.$u = n, 1 == e && ("operator" === t ? this.Nc = !0 : this.Mc = !0), this.Kd()), !1 === m.Store.$store.base.has_local_messages && "local" === i.source && (m.Store.$store.base.has_local_messages = !0)
            } catch (t) {}
        }, w.prototype.Kd = function() {
            try {
                var t, i = !0 === this.gh && !0 !== m.Base.wu();
                m.Store.$store.base.is_activity_ongoing !== i && (m.Store.$store.base.is_activity_ongoing = i, "input" !== (t = ((document.activeElement || {}).tagName || "").toLowerCase()) && "textarea" !== t && m.Utility.next_render(function() {
                    m.Chat.Interface.$c()
                }))
            } catch (t) {}
        }, w.prototype.Fd = function(t) {
            try {
                var i = this.Vd(t);
                i.metas.is_new = !0, m.Utility.set_timeout(function() {
                    i.metas.is_new = !1
                }, this.Zd)
            } catch (t) {}
        }, w.prototype.Rd = function() {
            try {
                this.Yd = !0, 0 < this.Od.length && (this._o(this.Od, !0), this.Od = []), m.Chat.State.Xd("intent"), m.Chat.State.Xd("scroll"), m.Chat.Field.pl(), this.Dd(!0)
            } catch (t) {}
        }, w.prototype.xd = function() {
            try {
                m.Library.crisp.client.Message.set_unread_messages_callback(function(t, i, n) {
                    m.Utility.set_timeout(function() {
                        m.Chat.Notification.Qd(t, i, n)
                    }, 0)
                })
            } catch (t) {}
        }, w.prototype.Sd = function(n) {
            var e = this;
            try {
                this.qd.push(n), m.Utility.set_timeout(function() {
                    try {
                        var t, i = e.qd.indexOf(n); - 1 === i || (t = e.Vd(n)) && (t.metas.has_error = !0), e.qd.splice(i, 1)
                    } catch (t) {}
                }, this.t0)
            } catch (t) {}
        }, w.prototype.Dd = function() {
            var t = this,
                i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                m.Chat.Intent.yl.game || !1 === m.Chat.Intent.yl.game || !0 !== this.Mc || !0 === this.Nc || null === this.i0 && (this.i0 = m.Utility.set_timeout(function() {
                    try {
                        !(t.i0 = null) !== t.Nc && !0 === m.Base.Qs.chat.wait_game && m.Chat.Intent.ta("game")
                    } catch (t) {}
                }, !0 === i ? this.n0 : this.e0))
            } catch (t) {}
        }, w.prototype.Md = function(t, i, n, e) {
            var s, c = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
                a = !(5 < arguments.length && void 0 !== arguments[5]) || arguments[5],
                r = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : [];
            try {
                if (-1 === this.jd.indexOf(t)) throw new Error("Source " + t + " not allowed");
                this.s0[t] !== i && (this.s0[t] = i, s = (new Date).getTime(), "welcome" === t && (s = 0), this.received({
                    type: n,
                    timestamp: s,
                    content: e,
                    fingerprint: "$" + t,
                    preview: r,
                    from: "operator",
                    user: {
                        source: t,
                        type: "website",
                        user_id: m.Base.ch,
                        nickname: m.Base.Qs.website.name
                    }
                }, !1, c, a, !0))
            } catch (t) {}
        }, w.prototype.Td = function(t) {
            try {
                if (-1 === this.jd.indexOf(t)) throw new Error("Source " + t + " not allowed");
                this.s0[t] && (delete this.s0[t], this.Vl("$" + t))
            } catch (t) {}
        }, w.prototype.st = function() {
            try {
                this.gh = !1, this.Nc = !1, this.Mc = !1, this.Yd = !1, this.$u = 0, this.qd = [], this.Od = [], this.Ld = [], this.Ad = null, this.i0 = null, this.zd = null, this.s0 = {}
            } catch (t) {}
        }, new w), m.Chat.Misc = (_.prototype.init = function() {}, _.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, _.prototype.Ed = function(t) {
            try {
                m.Utility.is_equal(t, this.c0) || m.Chat.State.propagate("operator", t)
            } catch (t) {}
        }, _.prototype.st = function() {
            try {
                this.c0 = {}
            } catch (t) {}
        }, new _), m.Chat.Notification = (g.prototype.init = function() {}, g.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, g.prototype.Qd = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                i = this,
                n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [];
            try {
                var s, c = m.Store.$store.minimized.tooltips;
                0 < (this.Uc = t) ? (m.Store.$store.minimized.pane.unread.count = t, s = !1 === m.Store.$store.minimized.tooltips.new_messages.visible, this.a0(t, n, e, s), null === this.r0 && (this.r0 = document.title), this.r0 && !0 !== m.Base.ph() && (document.title = "💬" + t + " - " + this.r0), 1 == s && (null !== this.o0 && m.Utility.clear_timeout(this.o0), this.o0 = m.Utility.set_timeout(function() {
                    i.o0 = null, c.new_messages.visible = !0, c.new_messages.animate = !0, m.Utility.set_timeout(function() {
                        c.new_messages.animate = !1
                    }, i.u0)
                }, this.l0 * this.va), m.Store.$store.minimized.pane.unread.visible = !0)) : (null !== this.o0 && m.Utility.clear_timeout(this.o0), c.new_messages.visible = !1, c.new_messages.animate = !1, m.Store.$store.minimized.pane.unread.visible = !1, this.r0 && (document.title = this.r0))
            } catch (t) {}
        }, g.prototype.f0 = function() {
            try {
                var t = m.Chat.Selector.get("flow").scrollTop,
                    i = m.Chat.Selector.get("flow").scrollHeight;
                m.Chat.Selector.get("flow").clientHeight + t >= i - m.Chat.Interface.wd && m.Chat.Alert.ta("new_messages", "hide")
            } catch (t) {}
        }, g.prototype.a0 = function(t, i, n, e) {
            var s = [];
            try {
                for (var c = null, a = [], r = n.length - 1; 0 <= r && !(-1 !== i.indexOf(n[r].fingerprint) && (s.unshift(n[r]), s.length >= this.d0)); r--);
                m.Store.$store.messages.preview = [];
                for (var o = 0; o < s.length; o++) {
                    var h = s[o],
                        u = m.Utility.clone(h); - 1 !== this.v0.indexOf(h.type) && m.Store.$store.messages.preview.push(u), null === (c = o === s.length - 1 && null === c ? u.fingerprint : c) && null !== this.p0 || a.push(u)
                }
                null !== c && (this.p0 = c);
                for (var l = 0; l < a.length; l++) a[l].animate = !0;
                m.Utility.set_timeout(function() {
                    for (var t = 0; t < a.length; t++) a[t].animate = !1
                }, (!0 === e ? this.l0 * this.va : 0) + this.y0)
            } catch (t) {} finally {
                return s
            }
        }, g.prototype.st = function() {
            try {
                this.Uc = 0, this.va = 1e3, this.l0 = .1, this.o0 = null, this.p0 = null, this.r0 = null, this.u0 = 500, this.y0 = 1e3
            } catch (t) {}
        }, new g), m.Chat.Scroll = (y.prototype.init = function() {}, y.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, y.prototype.Yl = function() {
            var t, i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
            try {
                null === i && (i = (t = m.Chat.Selector.get("flow")).scrollHeight - t.clientHeight), m.Chat.State.propagate("scroll", i), m.Chat.Notification.f0()
            } catch (t) {}
        }, y.prototype.Cd = function() {
            var t, i, n, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "to",
                s = !1;
            try {
                !0 === m.Chat.Interface.vf() && !0 === m.Chat.Message.Yd && (t = m.Chat.Selector.get("flow").scrollTop, i = m.Chat.Selector.get("flow").scrollHeight, n = m.Chat.Selector.get("flow").clientHeight, (!t || n + t >= i - this.ad) && (s = !0, this.Yl()), !1 === s && "from" === e && !1 === m.Chat.Alert.ml("warn_reply") && !1 === m.Chat.Alert.ml("email_invalid") && !1 === m.Chat.Alert.ml("wait_reply") && m.Chat.Alert.ta("new_messages", "show"))
            } catch (t) {} finally {
                return s
            }
        }, y.prototype.st = function() {
            try {
                this.ad = 0, this.ld = 0
            } catch (t) {}
        }, new y), m.Chat.Selector = (p.prototype.init = function() {}, p.prototype.reset = function() {
            try {
                this.st(), this.hu()
            } catch (t) {}
        }, p.prototype.get = function(t) {
            var i = null;
            try {
                if (void 0 !== this.m0[t]) i = this.m0[t];
                else {
                    if (void 0 === this.g0[t]) throw new Error("Selector with namespace " + t + " not found");
                    if (this.pf) {
                        if (null === (i = this.pf.querySelector("." + this.g0[t]))) throw new Error("Could not select the element with namespace: " + t);
                        this.m0[t] = i
                    }
                }
            } catch (t) {} finally {
                return i
            }
        }, p.prototype.il = function() {
            try {
                this._0(), this.w0()
            } catch (t) {}
        }, p.prototype._0 = function() {
            try {
                this.b0 = document.querySelector('head meta[name="viewport"]')
            } catch (t) {}
        }, p.prototype.w0 = function() {
            try {
                this.mf = this.pf.querySelector(".cc-1apq")
            } catch (t) {}
        }, p.prototype.hu = function() {
            try {
                this.b0 = null, this.pf = null, this.mf = null
            } catch (t) {}
        }, p.prototype.st = function() {
            try {
                this.m0 = {}
            } catch (t) {}
        }, new p), m.Chat.State = (v.prototype.init = function() {}, v.prototype.reset = function(t) {
            var i = this;
            try {
                this.st(), t.push(function() {
                    i.k0()
                })
            } catch (t) {}
        }, v.prototype.receive = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                var n = void 0,
                    e = void 0,
                    s = [];
                for (n in t) t.hasOwnProperty(n) && (m.Utility.is_equal(t[n], this.x0[n]) || (s.push(n), this.x0[n] = t[n], !1 === i && void 0 !== this.$0[n] && delete this.$0[n]));
                for (e = 0; e < s.length; e++) n = s[e], this.F0[n].At(this)(this.x0[n])
            } catch (t) {}
        }, v.prototype.propagate = function(t, i) {
            var n, e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                s = this,
                c = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : function() {},
                a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : function() {};
            try {
                !0 !== e && m.Utility.is_equal(this.x0[t], i) ? "function" == typeof c && c(!1) : (this.$0[t] = i, null !== this.j0 && (m.Utility.clear_timeout(this.j0), this.j0 = null), (n = m.Utility.clone(this.x0))[t] = i, this.receive(n, !0), this.j0 = m.Utility.set_timeout(function() {
                    var t;
                    m.Utility.is_empty(s.$0) ? "function" == typeof c && c(!1) : (t = m.Utility.clone(s.$0), s.$0 = {}, s.j0 = null, m.Library.crisp.client.Session.set_state(t, function(t) {
                        t ? "function" == typeof a && a() : "function" == typeof c && c(!0)
                    }))
                }, this.E0))
            } catch (t) {}
        }, v.prototype.fl = function(t) {
            try {
                for (var i in !0 === m.Base.Bc() && (t.maximized = !1), this.z0) void 0 === t[i] && (t[i] = this.z0[i]);
                this.C0 = !0, this.x0 = t, this.S0 = m.Utility.keys(this.x0)
            } catch (t) {}
        }, v.prototype.Xd = function(t) {
            try {
                this.A0(t, this.z0[t])
            } catch (t) {}
        }, v.prototype.Vf = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            try {
                var i = void 0;
                for (i in this.z0) this.z0.hasOwnProperty(i) && this.A0(i, this.z0[i], -1 !== t.indexOf(i))
            } catch (t) {}
        }, v.prototype.A0 = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
            try {
                if ("function" != typeof this.F0[t]) throw new Error("No such state handler: " + t);
                void 0 === this.x0[t] && (this.x0[t] = i), this.F0[t].At(this)(this.x0[t], n)
            } catch (t) {}
        }, v.prototype.I0 = function(t) {
            var i = !1;
            try {
                var n = this.S0.indexOf(t); - 1 !== n && (this.S0.splice(n, 1), i = !0)
            } catch (t) {} finally {
                return i
            }
        }, v.prototype.q0 = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                if (!1 === i && (this.I0("trigger"), t && 0 < t.length))
                    for (var n = 0; n < t.length; n++) m.Trigger.nh(t[n])
            } catch (t) {}
        }, v.prototype.D0 = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                if (!1 === i) {
                    this.I0("alert");
                    var n, e, s, c = void 0,
                        a = void 0,
                        r = void 0,
                        o = [
                            ["show", "unlock"],
                            ["unlock", "show"],
                            ["hide", "lock"],
                            ["lock", "hide"],
                            ["lock", "show"]
                        ];
                    for (a in t)
                        if (t.hasOwnProperty(a)) {
                            if (n = t[a], e = m.Chat.Alert.yl[a], c = !1, e === n) c = !0;
                            else if ("unlock" !== n && "lock" === e) c = !0;
                            else
                                for (r = 0; r < o.length; r++) e === (s = o[r])[0] && n === s[1] && (c = !0);
                            if (!1 === c) {
                                if ("show" === n || "unlock" === n) m.Store.$store.chat.current_alert = a, m.Chat.Alert.gl("show", a);
                                else {
                                    if ("hide" !== n && "lock" !== n) throw new Error("Unknown action: " + n);
                                    m.Store.$store.chat.current_alert === a && (m.Store.$store.chat.current_alert = ""), m.Chat.Alert.gl("hide", a)
                                }
                                m.Chat.Alert.yl[a] = n, m.Chat.Field.pl()
                            } else m.Chat.Alert.yl[a] = n
                        }
                }
            } catch (t) {}
        }, v.prototype.O0 = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                if (m.Chat.Intent.yl = t, !1 === i) {
                    var n = this.I0("intent"),
                        e = void 0;
                    for (e in t) m.Chat.Intent.El(e, t[e], !n);
                    m.Chat.Intent.jl(t)
                }
            } catch (t) {}
        }, v.prototype.R0 = function(t) {
            var i, n, e, s, c, a, r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                !1 === r && (this.I0("operator"), a = c = s = e = n = i = void 0, m.Chat.Misc.c0 = t || {}, m.Utility.is_empty(m.Chat.Misc.c0) ? (i = "initial", e = "website", s = m.Base.ch) : (i = "ongoing", e = t.type || "operator", s = t.user_id, c = t.avatar, n = "website" === t.type ? t.nickname : m.Library.crisp.web.Name.parse_first_name(t.nickname)), (a = c || s ? m.Avatar.url(this.B0, e, s, c) : a) && ("ongoing" === i && (m.Store.$store.chat.ongoing_operator = {
                    type: e,
                    name: n,
                    user_id: s,
                    url: a
                }, !0 === m.Base.Qs.chat.ongoing_operator_face && (m.Store.$store.minimized.pane.is_ongoing = !0)), m.Store.$store.chat.status_marker = i))
            } catch (t) {}
        }, v.prototype.M0 = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                !1 === i && !1 === this.I0("scroll") && (m.Chat.Scroll.ld = t, m.Utility.next_render(function() {
                    m.Chat.Selector.get("flow").scrollTop = m.Chat.Scroll.ld
                }))
            } catch (t) {}
        }, v.prototype.N0 = function(t) {
            var i, n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                !1 === n && (i = !0 !== this.I0("maximized") && !0, !1 === (t = !0 === m.Base.iu.lock_maximized || t) ? (m.Chat.Interface.Rf("pane", i), m.Chat.Field.yf(), m.Chat.Viewport.od(), m.Chat.Picker.Bl(), m.Action.Vc("chat:closed")) : (m.Chat.Interface.Rf("chat", i), m.Chat.Field.pl(), m.Chat.Viewport.rd(), m.Chat.Notification.f0(), m.Action.Vc("chat:opened")))
            } catch (t) {}
        }, v.prototype.T0 = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                !1 === i && (this.I0("textarea"), m.Action.set_message_text(t))
            } catch (t) {}
        }, v.prototype.k0 = function() {
            try {
                this.z0 = {
                    trigger: m.Trigger.eh,
                    alert: m.Chat.Alert.yl,
                    intent: m.Chat.Intent.yl,
                    operator: m.Chat.Misc.c0,
                    scroll: m.Chat.Scroll.ld,
                    maximized: m.Chat.Interface.U0,
                    textarea: m.Chat.Field.bf
                }
            } catch (t) {}
        }, v.prototype.st = function() {
            try {
                this.C0 = !1, this.x0 = {}, this.$0 = {}, this.S0 = [], this.j0 = null
            } catch (t) {}
        }, new v), m.Chat.Viewport = (d.prototype.init = function() {}, d.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, d.prototype.rd = function() {
            var t, i;
            try {
                !0 === m.Base.Bc() ? (!1 === this.P0 && (null === this.L0 && (this.L0 = this.Q()), (t = m.Utility.clone(this.L0)).width = "device-width", t["initial-scale"] = "1", t["maximum-scale"] = "1", t["user-scalable"] = "0", i = this.J0(t), null !== m.Chat.Selector.b0 ? m.Chat.Selector.b0.setAttribute("content", i) : (m.Chat.Selector.b0 = m.Template.dom(m.Template.render("viewport", {
                    content: i
                })), document.querySelector("head").appendChild(m.Chat.Selector.b0))), this.P0 = !0) : this.P0 = !1
            } catch (t) {}
        }, d.prototype.od = function() {
            var t;
            try {
                !0 === this.P0 && (null !== m.Chat.Selector.b0 && 0 < m.Chat.Selector.b0.length && ((t = this.J0(this.L0)) ? m.Chat.Selector.b0.setAttribute("content", t) : (m.Chat.Selector.b0.remove(), m.Chat.Selector.b0 = null)), this.P0 = !1)
            } catch (t) {}
        }, d.prototype.Q = function() {
            var t = {};
            try {
                if (t = {}, null !== m.Chat.Selector.b0) {
                    var i = m.Chat.Selector.b0.getAttribute("content");
                    if (i = (i = i.trim()).replace(this.V0, ","))
                        for (var n, e, s = void 0, c = void 0, a = void 0, r = -1 !== i.indexOf(",") ? i.split(",") : [i], s = 0; s < r.length; s++) - 1 !== (c = r[s]).indexOf("=") && (n = (a = c.split("="))[0].trim(), e = a[1].trim(), n && e && (t[n] = e))
                }
            } catch (t) {} finally {
                return t
            }
        }, d.prototype.J0 = function(t) {
            var i = "";
            try {
                var n = void 0,
                    e = [];
                for (n in t) t.hasOwnProperty(n) && e.push([n, t[n]].join("="));
                i = e.join(", ")
            } catch (t) {} finally {
                return i
            }
        }, d.prototype.st = function() {
            try {
                this.P0 = !1, this.L0 = null
            } catch (t) {}
        }, new d), m.Magnify = (f.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, f.prototype.Ll = function(t, i) {
            var n = this,
                e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            try {
                var c = document.querySelector(".cc-1igj"),
                    a = this.W0(-1 !== this.H0.indexOf(t) ? s : null);
                m.Utility.merge(m.Store.$store.magnify, {
                    state: "loading",
                    type: t,
                    source: i,
                    name: e,
                    messages: a
                });
                var r = m.Template.dom(m.Template.render("magnify"));
                this.G0 = r, c ? c.parentNode.replaceChild(this.G0, c) : m.Base.Rc.appendChild(r), m.Magnify.Event.il(), m.Template.vue(this.G0), m.Utility.set_timeout(function() {
                    n.G0.focus()
                }, this.K0)
            } catch (t) {}
        }, f.prototype.Z0 = function() {
            try {
                this.G0 && this.G0.remove(), !0 === m.Chat.wc && m.Chat.Field.pl()
            } catch (t) {}
        }, f.prototype.Y0 = function(t) {
            try {
                var i, n = m.Store.$store.magnify.messages[t];
                !n || !0 !== m.Chat.wc || (i = m.Chat.Message.Vd(n.fingerprint)) && this.Ll(n.type, i.content.url, i.content.name, i.fingerprint)
            } catch (t) {}
        }, f.prototype.W0 = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                i = {
                    previous: null,
                    next: null
                };
            try {
                if (null !== t && !isNaN(t))
                    for (var n = parseInt(t, 10), e = m.Library.crisp.client.Message.get_cached_messages(), s = 0; s < e.length; s++)
                        if (e[s].fingerprint === n) {
                            if (0 < s)
                                for (var c = s - 1; 0 <= c; c--) {
                                    var a = e[c],
                                        r = this.X0(a);
                                    if (r && a) {
                                        i.previous = {
                                            fingerprint: a.fingerprint,
                                            type: r
                                        };
                                        break
                                    }
                                }
                            if (s < e.length - 1)
                                for (var o = s + 1; o < e.length; o++) {
                                    var h = e[o],
                                        u = this.X0(h);
                                    if (u) {
                                        i.next = {
                                            fingerprint: h.fingerprint,
                                            type: u
                                        };
                                        break
                                    }
                                }
                            break
                        }
            } catch (t) {} finally {
                return i
            }
        }, f.prototype.X0 = function(t) {
            var i = null;
            try {
                var n = (t.content || {}).type || null;
                "file" === t.type && (!0 === this.Vu.image.includes(n) && (i = "image"), !0 === this.Vu.video.includes(n) && (i = "video"))
            } catch (t) {} finally {
                return i
            }
        }, f.prototype.st = function() {
            try {
                this.G0 = null
            } catch (t) {}
        }, new f), m.Magnify.Event = (l.prototype.disappear_fuzzy = function(t) {
            try {
                t && t.target && !0 === t.target.classList.contains("cc-1igj") && m.Magnify.Z0()
            } catch (t) {}
        }, l.prototype.disappear = function() {
            try {
                m.Magnify.Z0()
            } catch (t) {}
        }, l.prototype.navigate_click = function(t) {
            try {
                m.Magnify.Y0(t)
            } catch (t) {}
        }, l.prototype.keydown = function(t) {
            try {
                switch (t.keyCode) {
                    case 27:
                        m.Magnify.Z0();
                        break;
                    case 37:
                        m.Magnify.Y0("previous");
                        break;
                    case 39:
                        m.Magnify.Y0("next")
                }
            } catch (t) {}
        }, l.prototype.il = function() {
            try {
                m.Store.hc("magnify", this.ot, this)
            } catch (t) {}
        }, new l), m.Spotlight = (u.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, u.prototype.Fc = function() {
            var t = !1;
            try {
                var i, n = m.Chat.Interface.ic("helpdesk");
                n && (t = !0, m.Utility.merge(m.Store.$store.spotlight, {
                    url: n,
                    input: "",
                    articles: [],
                    current_index: 0,
                    has_results: !1
                }), null === this.Q0 && (i = m.Template.dom(m.Template.render("spotlight")), this.Q0 = i, m.Spotlight.Event.il(), m.Template.vue(this.Q0), m.Base.Rc.appendChild(i), m.Action.do_helpdesk_query(""), this.tv()))
            } catch (t) {} finally {
                return t
            }
        }, u.prototype.iv = function() {
            try {
                this.nv(), this.Q0 && this.Q0.remove(), this.Q0 = null, m.Chat.Field.pl()
            } catch (t) {}
        }, u.prototype.ev = function() {
            var i = this,
                n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
            try {
                n !== this.sv && (this.nv(), n ? (m.Store.$store.spotlight.loading = !0, this.cv = m.Utility.set_timeout(function() {
                    var t;
                    i.cv = null, i.sv = n, m.Action.do_helpdesk_query(n), !n || (t = n.substring(n.lastIndexOf(" ") + 1).trim()) && t.length >= i.av && m.Library.crisp.client.Helpdesk.get_article_suggest(t, m.Locale.code())
                }, this.rv)) : (delete m.Broker.Eo.helpdesk_article_search, delete m.Broker.Eo.helpdesk_article_suggest, this.sv = "", this.Co([], {}, !1), this.So([])))
            } catch (t) {}
        }, u.prototype.Co = function() {
            var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                e = this,
                s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                t = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
            try {
                null !== this.Q0 && (m.Store.$store.spotlight.articles = [], m.Store.$store.spotlight.has_results = !0, m.Store.$store.spotlight.current_index = 0, m.Store.$store.spotlight.articles = !0 === t ? n : [], m.Store.$store.spotlight.has_results = t || !1, null !== this.kd && m.Utility.clear_timeout(this.kd), s.query && (this.ov = m.Utility.set_timeout(function() {
                    e.ov = null;
                    var t = (s.query || "").trim(),
                        i = s.locale || null;
                    (i = n[0] && n[0].locale ? n[0].locale : i) && t && m.Library.crisp.client.Helpdesk.report_article_search(i, t)
                }, this.hv)), m.Store.$store.spotlight.loading = !1)
            } catch (t) {}
        }, u.prototype.uv = function() {
            try {
                var t = this.Q0.querySelector(".cc-1fn9[data-active='true']");
                t && t.click()
            } catch (t) {}
        }, u.prototype.So = function() {
            var t, i, n, e, s, c, a, r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            try {
                null !== this.Q0 && (t = (r[0] || "").toLowerCase(), n = i = null, !t || (e = (n = m.Store.$store.spotlight.input).substring(n.lastIndexOf(" ") + 1).trim().toLowerCase()) && e.length < t.length && t.substring(0, e.length) === e && (i = t.substring(e.length)), s = this.Q0.querySelector(".cc-rbdc"), c = this.Q0.querySelector(".cc-1e21"), i && n && s ? (s.innerHTML = n, c.innerHTML = i, a = "rtl" === m.Locale.direction() ? "right" : "left", c.style.setProperty(a, s.offsetWidth + "px", "important"), c.style.setProperty("display", "block", "important")) : (c.style.setProperty("display", "none", "important"), c.innerHTML = ""))
            } catch (t) {}
        }, u.prototype.lv = function() {
            try {
                var t = (this.Q0.querySelector(".cc-1e21").innerText || "").trim();
                t && (m.Store.$store.spotlight.input = "" + m.Store.$store.spotlight.input + t, this.So([]))
            } catch (t) {}
        }, u.prototype.fv = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
            try {
                var i = m.Store.$store.spotlight.current_index + t;
                (i = i >= m.Store.$store.spotlight.articles.length ? 0 : i) < 0 && (i = m.Store.$store.spotlight.articles.length - 1), m.Store.$store.spotlight.current_index = i
            } catch (t) {}
        }, u.prototype.tv = function() {
            try {
                var t = this.Q0.querySelector(".cc-e45n");
                t && t.focus()
            } catch (t) {}
        }, u.prototype.nv = function() {
            try {
                null !== this.cv && (m.Utility.clear_timeout(this.cv), this.cv = null), null !== this.ov && (m.Utility.clear_timeout(this.ov), this.ov = null)
            } catch (t) {}
        }, u.prototype.st = function() {
            try {
                this.Q0 = null, this.ov = null, this.sv = ""
            } catch (t) {}
        }, new u), m.Spotlight.Event = (h.prototype.il = function() {
            try {
                m.Store.hc("spotlight", this.ot, this)
            } catch (t) {}
        }, h.prototype.close_click = function() {
            try {
                m.Spotlight.iv()
            } catch (t) {}
        }, h.prototype.fuzzy_click = function(t) {
            try {
                t.target && "cc-19f5" === t.target.className && m.Spotlight.iv()
            } catch (t) {}
        }, h.prototype.open_article = function(t, i, n) {
            try {
                !0 !== m.Feature.has_screen_touch() && (m.Action.do_helpdesk_article_open(i, n), m.Spotlight.iv(), t.preventDefault())
            } catch (t) {}
        }, h.prototype.search = function() {
            try {
                m.Spotlight.ev(m.Store.$store.spotlight.input)
            } catch (t) {}
        }, h.prototype.keydown = function(t) {
            try {
                switch (t.keyCode) {
                    case 27:
                        m.Spotlight.iv();
                        break;
                    case 13:
                        t.preventDefault(), m.Spotlight.uv();
                        break;
                    case 38:
                        m.Spotlight.fv(-1);
                        break;
                    case 40:
                        m.Spotlight.fv(1);
                        break;
                    case 9:
                        t.preventDefault(), m.Spotlight.lv();
                        break;
                    default:
                        !0 !== t.shiftKey && !0 !== t.metaKey && !0 !== t.ctrlKey && !0 !== t.altKey && m.Spotlight.So([])
                }
            } catch (t) {}
        }, new h), m.Article = (o.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, o.prototype.Fc = function(t, i) {
            var n = !1;
            try {
                var e, s, c = m.Chat.Interface.ic("helpdesk");
                c && (n = !0, m.Store.$store.article.loaded = !1, m.Store.$store.article.url = "" + c + t + "/article/" + i, e = document.querySelector(".cc-1ks8"), s = m.Template.dom(m.Template.render("article")), this.dv = s, e ? e.parentNode.replaceChild(this.dv, e) : m.Base.Rc.appendChild(s), m.Article.Event.il(), m.Template.vue(this.dv), m.Utility.set_timeout(function() {
                    s.focus()
                }, this.vv))
            } catch (t) {} finally {
                return n
            }
        }, o.prototype.iv = function() {
            try {
                null !== this.dv && (this.dv.remove(), !(this.dv = null) === m.Chat.wc && m.Chat.Field.pl())
            } catch (t) {}
        }, o.prototype.st = function() {
            try {
                this.dv = null
            } catch (t) {}
        }, new o), m.Article.Event = (a.prototype.close_click = function(t) {
            try {
                var i = t.target.classList;
                !0 !== i.contains("cc-14zu") && !0 !== i.contains("cc-18p3") || (t.preventDefault(), m.Article.iv())
            } catch (t) {}
        }, a.prototype.keydown = function(t) {
            try {
                27 === t.keyCode && m.Article.iv()
            } catch (t) {}
        }, a.prototype.il = function() {
            try {
                m.Store.hc("article", this.ot, this)
            } catch (t) {}
        }, new a), m.Browsing = (c.prototype.reset = function() {
            try {
                m.Utility.reset_instance_children(m.Browsing), this.hu()
            } catch (t) {}
        }, c.prototype.hu = function() {
            try {
                this.pv = null, this.yv = null
            } catch (t) {}
        }, new c), m.Browsing.Assist = (s.prototype.reset = function() {
            try {
                this.stop(), this.hu(), this.st()
            } catch (t) {}
        }, s.prototype.start = function() {
            try {
                null === m.Browsing.yv && (m.Browsing.yv = this.mv, m.Browsing.pv = m.Template.dom(m.Template.render("browsing_assist")), this.gv = m.Browsing.pv.querySelector(".cc-1iwp"), m.Base.Rc.appendChild(m.Browsing.pv), m.Template.vue(m.Browsing.pv))
            } catch (t) {}
        }, s.prototype.stop = function() {
            try {
                m.Browsing.yv === this.mv && (m.Browsing.yv = null, m.Browsing.pv.remove(), m.Browsing.pv = null, this.gv = null)
            } catch (t) {}
        }, s.prototype.$o = function(t) {
            try {
                m.Browsing.yv === this.mv && null !== this.gv && t.mouse && (this.gv.style.setProperty("display", "inline-block", "important"), this.gv.style.setProperty("left", t.mouse.x + "px", "important"), this.gv.style.setProperty("top", t.mouse.y + "px", "important"))
            } catch (t) {}
        }, s.prototype.Fo = function(t) {
            var i = this;
            try {
                if (m.Browsing.yv === this.mv && t.scroll && window.scroll) {
                    null !== this._v && m.Utility.clear_interval(this._v);
                    var n, e = {
                            x: window.scrollX,
                            y: window.scrollY
                        },
                        s = {
                            x: 0,
                            y: 0
                        };
                    for (n in s) s.hasOwnProperty(n) && (s[n] = (t.scroll[n] - e[n]) / this.wv);
                    var c = 0,
                        a = this.bv / this.wv;
                    0 < a && (0 !== s.x || 0 !== s.y) && (m.Library.crisp.client.Browsing.toggle_ignore_scroll_event(!0), this._v = m.Utility.set_interval(function() {
                        e.x += s.x, e.y += s.y, window.scroll(e.x, e.y), ++c >= i.wv && (m.Utility.clear_interval(i._v), (i._v = null) !== i.kv && m.Utility.clear_timeout(i.kv), i.kv = m.Utility.set_timeout(function() {
                            i.kv = null, m.Library.crisp.client.Browsing.toggle_ignore_scroll_event(!1)
                        }, i.xv))
                    }, a))
                }
            } catch (t) {}
        }, s.prototype.jo = function(t) {
            var i, n, e, s, c = this;
            try {
                m.Browsing.yv === this.mv && (null !== this.gv && (this.gv.setAttribute("data-is-clicking", "true"), null !== this.$v && m.Utility.clear_timeout(this.$v), this.$v = m.Utility.set_timeout(function() {
                    c.$v = null, c.gv.removeAttribute("data-is-clicking")
                }, this.Fv)), t.click && (i = t.click.x - this.jv, n = t.click.y, i < 0 && (i = 0), e = document.elementFromPoint(i, n), (s = document.createEvent("MouseEvent")).initMouseEvent("click", !0, !0, window, null, t.click.x, t.click.y, 0, 0, !1, !1, !1, !1, 0, null), s.Se = !0, e && e.dispatchEvent(s)))
            } catch (t) {}
        }, s.prototype.hu = function() {
            try {
                this.gv = null
            } catch (t) {}
        }, s.prototype.st = function() {
            try {
                this._v = null, this.kv = null, this.$v = null
            } catch (t) {}
        }, new s), m.Call = (e.prototype.reset = function() {
            try {
                this.st()
            } catch (t) {}
        }, e.prototype.ring = function(t) {
            try {
                this.Ev(), m.Sound.initialize("call"), m.Utility.merge(m.Store.$store.call, {
                    mode: t.mode,
                    size: "maximized",
                    state: null,
                    duration: 0,
                    user: {
                        user_id: t.user.user_id || m.Base.ch,
                        nickname: t.user.nickname || m.Base.Qs.website.name,
                        type: t.user.user_id ? "operator" : "website"
                    },
                    actions: this.zv(t.mode),
                    muted: {
                        audio: !1,
                        video: !1
                    }
                }), this.Cv = m.Template.dom(m.Template.render("call_ring")), m.Call.Event.il(), m.Template.vue(this.Cv), m.Base.Rc.appendChild(this.Cv), m.Sound.start("call", "call-ring", !0)
            } catch (t) {}
        }, e.prototype.screen = function() {
            try {
                this.Ev(), this.Cv = m.Template.dom(m.Template.render("call_screen")), m.Call.Event.il(), m.Template.vue(this.Cv), this.Sv(), this.Av("connecting"), m.Base.Rc.appendChild(this.Cv)
            } catch (t) {}
        }, e.prototype.stop = function() {
            try {
                this.Ev(), m.Sound.start("call", "call-hangup")
            } catch (t) {}
        }, e.prototype.success = function(t) {
            try {
                switch (t) {
                    case "media_remote":
                        this.Iv();
                        break;
                    case "media_local":
                        this.qv()
                }
            } catch (t) {}
        }, e.prototype.error = function(t) {
            try {
                this.Ev(), m.Sound.start("call", "call-hangup")
            } catch (t) {}
        }, e.prototype.toggle_media_status = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                for (var n = null, e = 0; e < m.Store.$store.call.actions.length; e++) {
                    var s = m.Store.$store.call.actions[e];
                    if (s.type === t) {
                        n = s;
                        break
                    }
                }
                null !== n && (n.state = i), m.Store.$store.call.muted[t] = !1 === i
            } catch (t) {}
        }, e.prototype.toggle_fullscreen_mode = function() {
            var t, i;
            try {
                "minimized" === m.Store.$store.call.size || !0 !== this.Dv("remote") || (t = this.Cv.querySelector('.cc-1uvq[data-type="remote"] video')) && (i = null, "function" == typeof(i = !1 === this.Ov ? t.requestFullscreen || t.msRequestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullScreen || null : t.exitFullscreen || t.msExitFullscreen || t.mozExitFullScreen || t.webkitExitFullScreen || null) && i.At(t)())
            } catch (t) {}
        }, e.prototype.toggle_fullscreen_aspect_ratio = function() {
            var t;
            try {
                this.Ov = !!document.fullscreenElement, !0 !== this.Dv("remote") || (t = this.Cv.querySelector('.cc-1uvq[data-type="remote"]')) && (!0 === this.Ov ? t.setAttribute("data-aspect", "contain") : t.removeAttribute("data-aspect"))
            } catch (t) {}
        }, e.prototype.reset_position = function() {
            try {
                var t = this.Cv.querySelector(".cc-wec3");
                t && (t.style.removeProperty("top"), t.style.removeProperty("left"))
            } catch (t) {}
        }, e.prototype.Ev = function() {
            try {
                null !== this.Cv && (this.Cv.remove(), this.Cv = null, this.Ov = !1, this.Rv(), m.Sound.stop("call", "call-ring"))
            } catch (t) {}
        }, e.prototype.qv = function() {
            try {
                this.Bv("local")
            } catch (t) {}
        }, e.prototype.Iv = function() {
            try {
                !0 === this.Bv("remote") && (this.Av("ongoing"), m.Sound.start("call", "call-established"))
            } catch (t) {}
        }, e.prototype.Bv = function(t) {
            var i = this.Cv.querySelector('.cc-1uvq[data-type="' + t + '"]');
            if (i) {
                var n = i.querySelector("video");
                if (n) return n.srcObject = m.Library.crisp.client.Call.get_stream(t), n.onloadeddata = function() {
                    var t = n.videoWidth < n.videoHeight ? "contain" : null;
                    null !== t && n.setAttribute("data-aspect", t)
                }, !0
            }
            return !1
        }, e.prototype.zv = function(t) {
            var i = void 0;
            try {
                i = [{
                    type: "audio",
                    state: !0,
                    visible: !0,
                    supported: !0
                }, {
                    type: "hangup",
                    state: !1,
                    visible: !0,
                    supported: !0
                }, {
                    type: "toggle",
                    state: !1,
                    visible: !0,
                    supported: !0
                }, {
                    type: "screensharing",
                    state: !1,
                    visible: !0,
                    supported: m.Library.crisp.client.Call.has_support_screensharing()
                }], "video" === t && i.unshift({
                    type: "video",
                    state: !0,
                    visible: !0,
                    supported: !0
                })
            } catch (t) {} finally {
                return i || []
            }
        }, e.prototype.Av = function(t) {
            try {
                "ongoing" === (m.Store.$store.call.state = t) && this.Mv()
            } catch (t) {}
        }, e.prototype.Mv = function() {
            var t = this;
            try {
                this.Rv(), null === this.Nv && (this.Tv = 0, this.Nv = m.Utility.set_interval(function() {
                    t.Tv++, m.Store.$store.call.duration = t.Tv
                }, this.va))
            } catch (t) {}
        }, e.prototype.Rv = function() {
            try {
                null !== this.Nv && (m.Utility.clear_interval(this.Nv), this.Nv = null, m.Store.$store.call.duration = 0)
            } catch (t) {}
        }, e.prototype.Sv = function() {
            var a = this;
            try {
                var r, o, h, u, i, s, n, e, l = this.Cv.querySelector(".cc-wec3");
                l && (u = h = o = r = void 0, i = function(t, i, n, e) {
                    r = l.offsetLeft, o = l.offsetTop, h = t.clientX, u = t.clientY, m.Utility.add_event_listener(a.ns, "document", i, s), m.Utility.add_event_listener(a.ns, "document", n, e)
                }, s = function(t) {
                    t.preventDefault(), t.stopPropagation();
                    var i = (t.touches || [])[0] ? t.touches[0] : t,
                        n = o + (i.clientY - u),
                        e = r + (i.clientX - h),
                        s = a.Uv,
                        c = a.Uv,
                        t = window.innerWidth - l.clientWidth - a.Uv,
                        i = window.innerHeight - l.clientHeight - a.Uv;
                    return e < s ? e = s : t < e && (e = t), n < c ? n = c : i < n && (n = i), l.style.setProperty("top", n + "px", "important"), l.style.setProperty("left", e + "px", "important"), !1
                }, n = function() {
                    m.Utility.remove_event_listener(a.ns, "document", "mousemove"), m.Utility.remove_event_listener(a.ns, "document", "mouseup")
                }, e = function() {
                    m.Utility.remove_event_listener(a.ns, "document", "touchmove"), m.Utility.remove_event_listener(a.ns, "document", "touchend")
                }, l.addEventListener("mousedown", function(t) {
                    "minimized" === m.Store.$store.call.size && i(t, "mousemove", "mouseup", n)
                }), l.addEventListener("touchstart", function(t) {
                    "minimized" !== m.Store.$store.call.size || null !== (t = (t.touches || [])[0] || null) && i(t, "touchmove", "touchend", e)
                }))
            } catch (t) {}
        }, e.prototype.Dv = function(t) {
            return null !== (t = m.Library.crisp.client.Call.get_stream(t)) && 0 < t.getVideoTracks().length
        }, e.prototype.st = function() {
            try {
                this.Cv = null, this.Tv = 0, this.Nv = null, this.Ov = !1
            } catch (t) {}
        }, new e), m.Call.Event = (n.prototype.ring_accept_click = function(t) {
            try {
                m.Library.crisp.client.Call.accept(), m.Call.screen()
            } catch (t) {}
        }, n.prototype.ring_decline_click = function(t) {
            try {
                m.Library.crisp.client.Call.decline()
            } catch (t) {}
        }, n.prototype.action_click = function(t) {
            try {
                switch (t) {
                    case "video":
                        m.Library.crisp.client.Call.toggle_video();
                        break;
                    case "audio":
                        m.Library.crisp.client.Call.toggle_audio();
                        break;
                    case "screensharing":
                        m.Library.crisp.client.Call.toggle_screensharing();
                        break;
                    case "hangup":
                        m.Library.crisp.client.Call.stop();
                        break;
                    case "toggle":
                        m.Store.$store.call.size = "minimized" === m.Store.$store.call.size ? "maximized" : "minimized", m.Call.reset_position()
                }
            } catch (t) {}
        }, n.prototype.toggle_fullscreen_mode_click = function() {
            try {
                m.Call.toggle_fullscreen_mode()
            } catch (t) {}
        }, n.prototype.toggle_fullscreen_aspect_ratio_click = function() {
            try {
                m.Call.toggle_fullscreen_aspect_ratio()
            } catch (t) {}
        }, n.prototype.il = function() {
            try {
                m.Store.hc("call", this.ot, this)
            } catch (t) {}
        }, new n);
        var t = {
            push: m.Pipeline.push.At(m.Pipeline),
            get: m.Pipeline.get.At(m.Pipeline),
            set: m.Pipeline.set.At(m.Pipeline),
            is: m.Pipeline.is.At(m.Pipeline),
            on: m.Pipeline.on.At(m.Pipeline),
            off: m.Pipeline.off.At(m.Pipeline),
            do: m.Pipeline.do.At(m.Pipeline),
            config: m.Pipeline.config.At(m.Pipeline),
            safe: m.Pipeline.safe.At(m.Pipeline),
            help: m.Pipeline.help.At(m.Pipeline)
        };
        if (Object.defineProperty(t, "__init", {
                enumerable: !1,
                value: m.Base.init.At(m.Base)
            }), Object.defineProperty(t, "__spool", {
                enumerable: !1,
                value: {}
            }), Object.defineProperty(t, "__debug", {
                enumerable: !1,
                value: m
            }), t.__spool.pending_actions = [], "object" == typeof window.$crisp && 0 < window.$crisp.length)
            for (var i = 0; i < window.$crisp.length; i++) t.__spool.pending_actions.push(window.$crisp[i]);
        window.$__CRISP_INSTANCE = t, window.$crisp = t
    } catch (t) {}

    function n() {
        try {
            this.ns = "CrispCallEvent", this.ot = ["ring_accept_click", "ring_decline_click", "action_click", "toggle_fullscreen_mode_click", "toggle_fullscreen_aspect_ratio_click"]
        } catch (t) {}
    }

    function e() {
        try {
            this.ns = "CrispCall", this.Uv = 6, this.va = 1e3, this.st()
        } catch (t) {}
    }

    function s() {
        try {
            this.ns = "CrispBrowsingAssist", this.mv = "assist", this.bv = 500, this.xv = 750, this.wv = 100, this.jv = 5, this.Fv = 600, this.hu(), this.st()
        } catch (t) {}
    }

    function c() {
        try {
            this.ns = "CrispBrowsing", this.hu()
        } catch (t) {}
    }

    function a() {
        try {
            this.ns = "CrispArticleEvent", this.ot = ["close_click", "keydown"]
        } catch (t) {}
    }

    function o() {
        try {
            this.ns = "CrispArticle", this.vv = 250, this.st()
        } catch (t) {}
    }

    function h() {
        try {
            this.ns = "CrispSpotlightEvent", this.ot = ["search", "close_click", "fuzzy_click", "open_article", "keydown"]
        } catch (t) {}
    }

    function u() {
        try {
            this.ns = "CrispSpotlight", this.hv = 1e3, this.rv = 100, this.av = 2, this.st()
        } catch (t) {}
    }

    function l() {
        try {
            this.ns = "CrispMagnifyEvent", this.ot = ["disappear_fuzzy", "disappear", "keydown", "navigate_click"]
        } catch (t) {}
    }

    function f() {
        try {
            this.ns = "CrispMagnify", this.Vu = {
                image: ["image/jpg", "image/jpeg", "image/png", "image/gif"],
                video: ["video/mp4", "video/webm"]
            }, this.K0 = 250, this.H0 = ["image", "video"], this.st()
        } catch (t) {}
    }

    function d() {
        try {
            this.ns = "CrispChatViewport", this.V0 = /;/g, this.st()
        } catch (t) {}
    }

    function v() {
        try {
            this.ns = "CrispChatState", this.E0 = 250, this.B0 = 240, this.F0 = {
                trigger: this.q0,
                alert: this.D0,
                intent: this.O0,
                operator: this.R0,
                scroll: this.M0,
                maximized: this.N0,
                textarea: this.T0
            }, this.k0(), this.st()
        } catch (t) {}
    }

    function p() {
        try {
            this.ns = "CrispChatSelector", this.g0 = {
                header: "cc-1ct5",
                content: "cc-1jpm",
                flow: "cc-301t",
                flow_messages: "cc-hh0f",
                form_container: "cc-mt5q",
                form_act: "cc-11qj",
                form_textarea_message: "cc-1dgk",
                form_input_attach: "cc-49pt"
            }, this.hu(), this.st()
        } catch (t) {}
    }

    function y() {
        try {
            this.ns = "CrispChatScroll", this.st()
        } catch (t) {}
    }

    function g() {
        try {
            this.ns = "CrispChatNotification", this.d0 = 5, this.v0 = ["text", "file", "animation", "audio", "picker", "field"], this.st()
        } catch (t) {}
    }

    function _() {
        try {
            this.ns = "CrispChatMisc", this.st()
        } catch (t) {}
    }

    function w() {
        try {
            this.ns = "CrispChatMessage", this.Id = 1500, this.Ud = 500, this.t0 = 3e4, this.e0 = 6e4, this.n0 = 3e4, this.Zd = 400, this.Hd = 5e3, this.Wd = 12e4, this.Jd = "urn:crisp.im:triggers:0", this.jd = ["welcome", "identity", "game"], this.Nd = ["email", "phone"], this.Pv = [".cc-70ck", ".cc-1gts"], this.st()
        } catch (t) {}
    }

    function b() {
        try {
            this.ns = "CrispChatInterface", this.nd = 320, this.td = 380, this.sd = 360, this.ed = 460, this.Qf = 400, this.Yf = 580, this.cd = 8, this.Mf = 500, this.Pf = 1e3, this.Wf = 1e3, this.Hf = 216e5, this._d = 500, this.yd = 1e3, this.fd = 10, this.pd = [
                ["email", "Email"],
                ["phone", "Phone"],
                ["messenger", "Messenger"],
                ["telegram", "Telegram"],
                ["twitter", "Twitter"]
            ], this.Kf = /^(?:https?:)?(?:\/\/)?([^\/\?]+)/, this.st()
        } catch (t) {}
    }

    function k() {
        try {
            this.ns = "CrispChatGame", this.st()
        } catch (t) {}
    }

    function x() {
        try {
            this.ns = "CrispChatFile", this.jf = "File", this.Ef = "application/octet-stream", this.If = 2e3, this.st()
        } catch (t) {}
    }

    function $() {
        try {
            this.ns = "CrispChatField", this.ff = 120, this.wf = 1e3, this.af = .2, this.cf = /\n/g, this.st()
        } catch (t) {}
    }

    function F() {
        try {
            this.ns = "CrispChatEvent", this.ot = ["click_fuzzy", "pane_toggle", "pane_minimize", "picker_click", "picker_toggle", "picker_show", "picker_smiley_click", "picker_gif_input_keyup", "picker_gif_input_reset", "picker_gif_item_click", "message_welcome_helpdesk_click", "message_common_click", "message_text_click", "message_send_retry_click", "message_previous_click", "message_picker_button_click", "message_fields_send", "message_file_click", "alert_email_invalid_click", "alert_warn_reply_click", "alert_new_messages_click", "game_stop_click", "flow_scroll", "flow_touch", "file_drop_dragover", "file_drop_dragleave", "file_drop", "file_change", "textarea_keydown", "textarea_keyup", "textarea_paste", "textarea_send_click", "header_generic_click", "header_spotlight_click"], this.Zl = 500, this.st()
        } catch (t) {}
    }

    function j() {
        try {
            this.ns = "CrispChatPicker", this.Tl = 10, this.st()
        } catch (t) {}
    }

    function E() {
        try {
            this.ns = "CrispChatIntent", this.Fl = ["identity", "game"], this.zl = {
                identity: this.Cl,
                game: this.ql
            }, this.st()
        } catch (t) {}
    }

    function z() {
        try {
            this.ns = "CrispChatAlert", this._l = {
                warn_reply: this.wl,
                email_invalid: this.kl
            }, this.st()
        } catch (t) {}
    }

    function C() {
        try {
            this.ns = "CrispChat", this.st()
        } catch (t) {}
    }

    function S() {
        try {
            this.ns = "CrispMinimizedInterface", this.va = 1e3, this.ll = .25, this.ul = 2, this.ol = 1e3, this.hl = 500, this.rl = 12e3, this.nl = "minimized", this.sl = "1", this.st()
        } catch (t) {}
    }

    function A() {
        try {
            this.ns = "CrispMinimizedEvent", this.ot = ["pane_click"]
        } catch (t) {}
    }

    function I() {
        try {
            this.ns = "CrispMinimized", this.st()
        } catch (t) {}
    }

    function q() {
        try {
            this.ns = "CrispBase", this.mu = 560, this._u = 620, this.gu = 740, this.Fu = 6e5, this.ju = 6e5, this.Eu = 1728e5, this.Ju = 1e3, this.qu = 1e4, this.Gu = 3, this.Ku = 99, this.zu = /_/g, this.Ou = {
                socket: !0,
                buster: 1
            }, this.Su = {
                other: {
                    container_index: 1e6,
                    show_operator_count: !0
                }
            }, this.Pu = {
                childList: !0,
                attributes: !1,
                subtree: !1,
                characterData: !1
            }, this.Au = /^(?:https?:[\/]*)?([^\/]+)(?:\/.*)?$/i, this.hu(), this.st()
        } catch (t) {}
    }

    function D() {
        try {
            this.ns = "CrispTrigger", this.va = 1e3, this.Nh = 18e5, this.sh = "trigger", this.ah = "1", this.$h = ["page", "url_parameter"], this.oh = {
                delay: this.bh,
                leave: this.xh,
                link: this.Ch,
                page: this.rh,
                url_parameter: this.Ah,
                user_data: this.qh,
                user_event: this.Oh
            }, this.dh = {
                message: this.Rh,
                open: this.Bh,
                sound: this.Mh
            }, this.Fh = {
                page: this.Sh,
                url_parameter: this.Ih
            }, this.st()
        } catch (t) {}
    }

    function O() {
        try {
            this.ns = "CrispEvent", this.Ko = 6e5, this.Xo = 36e5, this.Go = {
                capture: !1
            }, this.st()
        } catch (t) {}
    }

    function R() {
        try {
            this.ns = "CrispAvailability", this.st()
        } catch (t) {}
    }

    function B() {
        try {
            this.ns = "CrispBroker", this.oo = 1, this.vu = {
                chat: {
                    country: null,
                    locale: "en",
                    theme: "default",
                    theme_text: "default",
                    theme_welcome: "default",
                    tile: "default",
                    allowed_pages: [],
                    blocked_pages: [],
                    blocked_locales: [],
                    last_operator_face: !1,
                    ongoing_operator_face: !0,
                    activity_metrics: !0,
                    operator_privacy: !1,
                    availability_tooltip: !1,
                    hide_vacation: !1,
                    hide_on_away: !1,
                    hide_on_mobile: !1,
                    position_reverse: !1,
                    email_visitors: !0,
                    phone_visitors: !1,
                    force_identify: !1,
                    ignore_privacy: !1,
                    visitor_compose: !0,
                    file_transfer: !0,
                    helpdesk_link: !0,
                    status_health_dead: !0,
                    wait_game: !0
                },
                website: {
                    name: "",
                    domain: "",
                    mailer: "",
                    buster: 1,
                    count_operators: 0,
                    active_operators: [],
                    response_metrics: {},
                    last_available: m.Date.timestamp(),
                    status: null,
                    trial: !1
                },
                channels: {},
                plugins: {}
            }, this.st()
        } catch (t) {}
    }

    function M() {
        try {
            this.ns = "CrispTemplate", this.er = 600, this.sr = 600
        } catch (t) {}
    }

    function N() {
        try {
            this.ns = "CrispAvatar"
        } catch (t) {}
    }

    function T() {
        try {
            this.ns = "CrispAudio"
        } catch (t) {}
    }

    function U() {
        try {
            this.ns = "CrispLocale", this.Va = "en", this.tr = "ltr", this.Ha = ["af", "ar-ae", "ar-sa", "ar-ye", "ar", "az", "bg", "bn", "ca", "cs", "da", "de", "el", "en", "eo", "es", "et", "eu", "fa", "fi", "fo", "fr", "gu", "he", "hi", "hr", "hu", "hy", "id", "is", "it", "ja", "ka", "ko", "lt", "lv", "ml", "mn", "ms", "nl-be", "nl", "no", "pl", "ps", "pt-br", "pt", "ro", "ru", "sk", "sl", "sr-cyrl-cs", "sr", "sv", "ta", "th", "tr", "uk", "vi", "zh-hk", "zh-tw", "zh"], this.Wa = this.Ha, this.Qa = ["ltr", "rtl"], this.st()
        } catch (t) {}
    }

    function P() {
        try {
            this.ns = "CrispSound", this.Lv = 200, this.Aa = {
                events: ["chat-message-receive"],
                call: ["call-established", "call-hangup", "call-ring"]
            }, this.st()
        } catch (t) {}
    }

    function L() {
        try {
            this.ns = "CrispPlugin"
        } catch (t) {}
    }

    function J() {
        try {
            this.ns = "CrispTheme", this.Ea = 16, this.xa = "default", this.ka = {
                default: {
                    10: "#F5F8FB",
                    20: "#EFF5FE",
                    100: "#E2EEFF",
                    200: "#6E9BDE",
                    500: "#1972F5",
                    600: "#055EE1",
                    700: "#0057D7",
                    800: "#004FC3",
                    900: "#004AB5",
                    reverse: "#FFFFFF"
                },
                red: {
                    10: "#F9F9F9",
                    20: "#F9F3F3",
                    100: "#FFE5E4",
                    200: "#F8796F",
                    500: "#E61D0F",
                    600: "#CC1B0E",
                    700: "#C5170A",
                    800: "#B31A0E",
                    900: "#93150B",
                    reverse: "#FFFFFF"
                },
                pink: {
                    10: "#F9F9F9",
                    20: "#F7F2F2",
                    100: "#FFE0EB",
                    200: "#F26C9A",
                    500: "#F01D65",
                    600: "#DB165A",
                    700: "#CE1454",
                    800: "#B3124A",
                    900: "#A0073C",
                    reverse: "#FFFFFF"
                },
                purple: {
                    10: "#F9F9F9",
                    20: "#F8F3FA",
                    100: "#FADDFF",
                    200: "#CA60DC",
                    500: "#B521CF",
                    600: "#9B19B2",
                    700: "#9614AE",
                    800: "#7D0B91",
                    900: "#6B0A7C",
                    reverse: "#FFFFFF"
                },
                deep_purple: {
                    10: "#F9F9F9",
                    20: "#F6F5FA",
                    100: "#EDE2FF",
                    200: "#936DD6",
                    500: "#682AD5",
                    600: "#581FBB",
                    700: "#5019B0",
                    800: "#42178D",
                    900: "#310B74",
                    reverse: "#FFFFFF"
                },
                indigo: {
                    10: "#F9F9F9",
                    20: "#F5F5FB",
                    100: "#DDE2FF",
                    200: "#5D73EA",
                    500: "#2943D1",
                    600: "#1732C4",
                    700: "#112BB9",
                    800: "#061FA7",
                    900: "#001797",
                    reverse: "#FFFFFF"
                },
                blue: {
                    10: "#F5F8FB",
                    20: "#EFF5FE",
                    100: "#E2EEFF",
                    200: "#6E9BDE",
                    500: "#1972F5",
                    600: "#055EE1",
                    700: "#0057D7",
                    800: "#004FC3",
                    900: "#004AB5",
                    reverse: "#FFFFFF"
                },
                light_blue: {
                    10: "#F9F9F9",
                    20: "#EFF5F7",
                    100: "#DCF0F9",
                    200: "#4CA4CC",
                    500: "#009FDE",
                    600: "#008CCB",
                    700: "#0088C5",
                    800: "#0070A3",
                    900: "#00618E",
                    reverse: "#FFFFFF"
                },
                cyan: {
                    10: "#F9F9F9",
                    20: "#F1F7F7",
                    100: "#DBF7F9",
                    200: "#4EA4AF",
                    500: "#00A3B4",
                    600: "#00909E",
                    700: "#008997",
                    800: "#007685",
                    900: "#005965",
                    reverse: "#FFFFFF"
                },
                teal: {
                    10: "#F9F9F9",
                    20: "#E7F4F4",
                    100: "#D6EEE9",
                    200: "#44B1A7",
                    500: "#00947C",
                    600: "#00816C",
                    700: "#007B66",
                    800: "#006057",
                    900: "#005049",
                    reverse: "#FFFFFF"
                },
                green: {
                    10: "#F9F9F9",
                    20: "#EDF5ED",
                    100: "#D6F3D7",
                    200: "#5BB05E",
                    500: "#28A52D",
                    600: "#1A941F",
                    700: "#148919",
                    800: "#086E0C",
                    900: "#005C03",
                    reverse: "#FFFFFF"
                },
                light_green: {
                    10: "#F9F9F9",
                    20: "#F0F7F0",
                    100: "#DFF6C6",
                    200: "#6FB204",
                    500: "#6EB700",
                    600: "#64A500",
                    700: "#5E9C00",
                    800: "#426C00",
                    900: "#395E00",
                    reverse: "#FFFFFF"
                },
                amber: {
                    10: "#F9F9F9",
                    20: "#F6F4ED",
                    100: "#FFF0C1",
                    200: "#C5A135",
                    500: "#E1AE00",
                    600: "#CD9E00",
                    700: "#C49700",
                    800: "#B28900",
                    900: "#A37E00",
                    reverse: "#FFFFFF"
                },
                orange: {
                    10: "#F9F9F9",
                    20: "#F5F5EF",
                    100: "#FFECCF",
                    200: "#EE9743",
                    500: "#EC7500",
                    600: "#DB6C00",
                    700: "#D06701",
                    800: "#B85C01",
                    900: "#A45100",
                    reverse: "#FFFFFF"
                },
                deep_orange: {
                    10: "#F9F9F9",
                    20: "#FDF5F5",
                    100: "#FFE8E0",
                    200: "#DA7859",
                    500: "#E45300",
                    600: "#CD4A00",
                    700: "#C24702",
                    800: "#963700",
                    900: "#752B00",
                    reverse: "#FFFFFF"
                },
                brown: {
                    10: "#F9F9F9",
                    20: "#F7F1EF",
                    100: "#F2EAE7",
                    200: "#AF7864",
                    500: "#924B32",
                    600: "#864027",
                    700: "#803C24",
                    800: "#702E17",
                    900: "#61240E",
                    reverse: "#FFFFFF"
                },
                grey: {
                    10: "#F9F9F9",
                    20: "#F4F4F4",
                    100: "#E5E5E5",
                    200: "#7D7D7D",
                    500: "#7A7A7A",
                    600: "#6B6B6B",
                    700: "#646464",
                    800: "#4C4C4C",
                    900: "#3E3E3E",
                    reverse: "#FFFFFF"
                },
                blue_grey: {
                    10: "#F9F9F9",
                    20: "#F2F7F8",
                    100: "#DCEDF6",
                    200: "#638EA3",
                    500: "#457991",
                    600: "#396D84",
                    700: "#33657D",
                    800: "#25556D",
                    900: "#1C4D66",
                    reverse: "#FFFFFF"
                },
                black: {
                    10: "#F9F9F9",
                    20: "#F2F2F2",
                    100: "#E9E9E9",
                    200: "#818181",
                    500: "#2A2A2A",
                    600: "#3A3A3A",
                    700: "#3F3F3F",
                    800: "#515151",
                    900: "#5B5B5B",
                    reverse: "#FFFFFF"
                }
            }, this.ja = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i
        } catch (t) {}
    }

    function V() {
        try {
            this.ns = "CrispDate", this.da = 20, this.va = 1e3, this.Jv = 60, this.Vv = 24, this.ga = 60, this.ma = this.Jv * this.ga, this.ba = this.Vv * this.ma, this.pa = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"], this.ya = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
        } catch (t) {}
    }

    function W() {
        try {
            this.ns = "CrispValidate", this.fa = 80, this.oa = /^(([^\s@]+)@([^\s@]+)\.([^\s@]+))$/, this.ha = new RegExp(["^(?:(?:\\(?(?:00|\\+)([1-4]\\d\\d|[1-9]\\d?)\\)?)?", "[\\-\\.\\ \\\\\\/]?)?((?:\\(?\\d{1,}\\)?[\\-\\.\\ \\\\\\/]?){0,})", "(?:[\\-\\.\\ \\\\\\/]?(?:#|ext\\.?|extension|x)[\\-\\.\\ \\\\/]?", "(\\d+))?$"].join(""), "i"), this.ua = /^https?:\/\/(.+)$/, this.la = /^([A-Za-z0-9_\\-]{1,50})$/
        } catch (t) {}
    }

    function H() {
        try {
            this.ns = "CrispPipeline", this.ia = ["get", "set", "is", "do", "on", "off", "config", "safe", "help"], this.ca = ["on", "off"], this.st()
        } catch (t) {}
    }

    function G() {
        try {
            this.ns = "CrispAction", this.Xc = ["session:loaded", "chat:initiated", "chat:opened", "chat:closed", "message:sent", "message:received", "message:compose:sent", "message:compose:received", "user:email:changed", "user:phone:changed", "user:nickname:changed", "user:avatar:changed", "website:availability:changed", "helpdesk:queried"], this.ra = {
                on: this.Kc,
                off: this.Yc
            }, this.Cc = 500, this.Lc = /^([a-f0-9]{64})$/, this.Zc = {}
        } catch (t) {}
    }

    function K() {
        try {
            this.ns = "CrispStore", this.st()
        } catch (t) {}
    }

    function Z() {
        try {
            this.ns = "CrispFeature", this.st()
        } catch (t) {}
    }

    function Y() {
        try {
            this.ns = "CrispUtility", this.Gs = "[match:single]", this.Ws = "[match:double]", this.Ls = "[match:negate]", this.Hs = /([\*]{1})/g, this.Vs = /([\*]{2})/g, this.Ps = /^([\!]{1})/, this.Zs = /(\[match:single\])/g, this.Ks = /(\[match:double\])/g, this.Js = /(\[match:negate\])/g, this.Xs = new RegExp(["^(\\!)?", "(?:https?:[\\/]*)?", "(?:www\\.)?([^\\/]+)([^#?]*)?", "(?:[\\/]+)?", "(?:[#?].*)?"].join(""), "i"), this.Ns = /^(?:\s*)(?:(?:javascript|vbscript):)/i, this.st()
        } catch (t) {}
    }

    function X() {
        try {
            this.ns = "CrispPolyfill", this.Os = 2e4, this.Ms = /\{\s*\[native code\]\s*\}$/, this.st(), this.Rs()
        } catch (t) {}
    }
})();
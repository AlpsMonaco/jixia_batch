(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
    [553], {
        5602: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return g
                }
            });
            var a = i(5861),
                n = i(7757),
                o = i.n(n),
                r = i(4569),
                s = i.n(r),
                l = i(2808),
                c = i.n(l),
                d = i(5264),
                u = i(1413),
                m = i(1391),
                p = i.n(m),
                f = {
                    objKeySort: function(e) {
                        for (var t = Object.keys(e).sort(), i = {}, a = 0; a < t.length; a++) i[t[a]] = e[t[a]];
                        return i
                    },
                    authentication: function(e) {
                        var t = parseInt((new Date).getTime() / 1e3);
                        e.requestId = t, e = this.objKeySort(e);
                        var i = "";
                        for (var a in e) {
                            var n = e[a];
                            "" !== n && void 0 !== n && (i += a + ">" + p()(String(n)) + "/")
                        }
                        i += "t>" + t;
                        var o = p()(String(i));
                        return o = o.toUpperCase(), (0, u.Z)({
                            fuck: o,
                            you: t
                        }, e)
                    }
                },
                h = s().create({
                    baseURL: "https://api.chenflxs.top",
                    timeout: 1e6,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                    }
                });
            h.interceptors.request.use((function(e) {
                return localStorage.getItem("token") && (e.data.token = localStorage.getItem("token")), localStorage.getItem("user_name") && (e.data.username = localStorage.getItem("user_name")), "1" === e.data.ns ? (e.data.mother = p()("jixia"), e.data = c().stringify(f.authentication(e.data))) : e.data = c().stringify(e.data), e
            }), (function(e) {
                return Promise.reject(e.Error)
            })), h.interceptors.response.use((function(e) {
                return e.data
            }), (function(e) {
                return e.message.includes("timeout") || e.message.includes("Error") ? (console.log(e.message), d.Notify.failure("API\u8fde\u63a5\u4e2d \u8bf7\u5237\u65b0\u7f51\u9875")) : d.Notify.failure(e.message), Promise.reject(e)
            }));
            var g = {
                post: function(e, t) {
                    return (0, a.Z)(o().mark((function i() {
                        return o().wrap((function(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    return i.abrupt("return", h({
                                        method: "POST",
                                        url: e,
                                        data: t
                                    }));
                                case 1:
                                case "end":
                                    return i.stop()
                            }
                        }), i)
                    })))()
                }
            }
        },
        553: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(1413),
                n = i(9439),
                o = i(2791),
                r = i(5602),
                s = i(6998),
                l = i.n(s),
                c = i(3742),
                d = i(5264),
                u = i(9459),
                m = i(7123),
                p = i(9157),
                f = i(1691),
                h = i(5661),
                g = i(184);
            t.default = function() {
                var e = (0, o.useState)({
                        msg: "\u83b7\u53d6\u4e2d",
                        detail: "\u83b7\u53d6\u4e2d"
                    }),
                    t = (0, n.Z)(e, 2),
                    i = t[0],
                    s = t[1],
                    x = (0, o.useState)(!1),
                    y = (0, n.Z)(x, 2),
                    v = y[0],
                    j = y[1],
                    w = (0, o.useState)({
                        today_c: "loading",
                        today_s: "ladoing",
                        all_c: "laoding",
                        all_s: "loading"
                    }),
                    b = (0, n.Z)(w, 2),
                    N = b[0],
                    Z = b[1],
                    k = (0, o.useState)(null),
                    C = (0, n.Z)(k, 2),
                    S = C[0],
                    z = C[1],
                    A = (0, o.useState)({
                        msg: "\u83b7\u53d6\u4e2d",
                        all: 1,
                        remain: 1,
                        left: "loading"
                    }),
                    D = (0, n.Z)(A, 2),
                    _ = D[0],
                    E = D[1],
                    I = (0, o.useState)(!1),
                    R = (0, n.Z)(I, 2),
                    B = R[0],
                    L = R[1],
                    F = window.mdui,
                    T = F.JQ;
                (0, o.useEffect)((function() {
                    r.Z.post("/api.php?m=free&act=status", {}).then((function(e) {
                        0 === e.error && (s({
                            msg: e.sviptips,
                            detail: e.msg
                        }), "\u9650\u901f" === e.sviptips && L(!0))
                    })).catch((function(e) {})), r.Z.post("/api.php?m=free&act=counts", {}).then((function(e) {
                        0 === e.error && Z({
                            today_c: e.today.count,
                            today_s: e.today.size,
                            all_c: e.all.count,
                            all_s: e.all.size
                        })
                    })).catch((function(e) {})), r.Z.post("/api.php?m=free&act=getLl", {}).then((function(e) {
                        0 === e.error && E({
                            msg: M(e.remain),
                            all: e.all,
                            remain: e.remain,
                            left: e.left
                        })
                    })).catch((function(e) {}))
                }), []);
                var P = function(e, t, i, a, n) {
                        var o = [e],
                            r = {
                                "max-connection-per-server": "16",
                                "user-agent": t
                            };
                        "" !== i && (r.out = i);
                        var s = {
                            id: "baiduwp-php",
                            jsonrpc: "2.0",
                            method: "aria2.addUri",
                            params: [o, r]
                        };
                        "" !== n && s.params.unshift("token:" + n);
                        if (/^wss?:\/\/(((([A-Za-z0-9]+[A-Za-z0-9-]+[A-Za-z0-9]+)|([A-Za-z0-9]+))(\.(([A-Za-z0-9]+[A-Za-z0-9-]+[A-Za-z0-9]+)|([A-Za-z0-9]+)))*(\.[A-Za-z0-9]{2,10}))|(localhost)|((([01]?\d?\d)|(2[0-4]\d)|(25[0-5]))(\.([01]?\d?\d)|(2[0-4]\d)|(25[0-5])){3})|((\[[A-Za-z0-9:]{2,39}\])|([A-Za-z0-9:]{2,39})))(:\d{1,5})?(\/.*)?$/.test(a)) {
                            var l = new WebSocket(a);
                            l.onerror = function(e) {
                                d.Notify.failure("Motrix\uff0cAria2 \u8fde\u63a5\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u8f6f\u4ef6\uff01", {
                                    position: "right-top",
                                    zindex: 2147483647
                                })
                            }, l.onopen = function() {
                                l.send(JSON.stringify(s))
                            }, l.onmessage = function(e) {
                                var t = JSON.parse(e.data);
                                switch (void 0 !== t.error && 1 === t.error.code && d.Notify.failure("\u901a\u8fc7RPC\u8fde\u63a5\u5931\u8d25,\u8bf7\u6253\u5f00\u63a7\u5236\u53f0\u67e5\u770b\u8be6\u7ec6\u9519\u8bef\u4fe1\u606f\uff0c\u8fd4\u56de\u4fe1\u606f\uff1a" + t.error.message, {
                                    position: "right-top",
                                    zindex: 2147483647
                                }), t.method) {
                                    case "aria2.onDownloadStart":
                                        d.Notify.success("Aria2 \u53d1\u9001\u6210\u529f,\u5df2\u7ecf\u5f00\u59cb\u4e0b\u8f7d\uff01" + i, {
                                            position: "right-top",
                                            zindex: 2147483647
                                        }), localStorage.setItem("aria2wsurl", a), "" !== n && null != n && localStorage.setItem("aria2token", n);
                                        break;
                                    case "aria2.onDownloadError":
                                        d.Notify.failure("Aria2 Motrix\u4e0b\u8f7d\u9519\u8bef\uff01", {
                                            position: "right-top",
                                            zindex: 2147483647
                                        });
                                        break;
                                    case "aria2.onDownloadComplete":
                                        d.Notify.success("Aria2 Motrix\u4e0b\u8f7d\u5b8c\u6210\uff01", {
                                            position: "right-top",
                                            zindex: 2147483647
                                        })
                                }
                            }
                        } else d.Notify.failure("WebSocket \u5730\u5740\u4e0d\u7b26\u5408\u9a8c\u8bc1\u89c4\u5219\uff0c\u8bf7\u68c0\u67e5\u662f\u5426\u586b\u5199\u6b63\u786e\uff01", {
                            position: "right-top",
                            zindex: 2147483647
                        })
                    },
                    U = function(e) {
                        var t = (0, a.Z)({}, S.dirdata),
                            i = (0, a.Z)({}, S.urldata);
                        delete t.src, c.Loading.circle(), r.Z.post("/api.php?m=free&act=jx", (0, a.Z)((0, a.Z)((0, a.Z)({
                            dir: e
                        }, t), i), {}, {
                            ns: "1"
                        })).then((function(e) {
                            0 !== e.error ? d.Notify.failure(e.message, {
                                position: "right-top",
                                zindex: 2147483647
                            }) : (e.urldata = S.urldata, z(e))
                        })).catch((function(e) {})).finally((function() {
                            c.Loading.remove()
                        }))
                    },
                    M = function(e, t) {
                        if (0 === e) return "0 Bytes";
                        var i = t || 2,
                            a = Math.floor(Math.log(e) / Math.log(1e3));
                        return parseFloat((e / Math.pow(1e3, a)).toFixed(i)) + " " + ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][a]
                    };
                return (0, g.jsxs)(g.Fragment, {
                    children: [(0, g.jsx)("div", {
                        className: "mdui-container-fluid",
                        children: (0, g.jsx)("div", {
                            className: "mdui-card",
                            style: {
                                mariginBottom: "20px",
                                paddingBottom: "20px"
                            },
                            children: (0, g.jsx)("div", {
                                className: "mdui-card-content",
                                children: S ? (0, g.jsx)(g.Fragment, {
                                    children: (0, g.jsxs)("ul", {
                                        className: "mdui-list",
                                        children: [(0, g.jsx)("li", {
                                            className: "mdui-list-item",
                                            children: (0, g.jsx)("div", {
                                                className: "mdui-list-item-content",
                                                children: (0, g.jsx)("div", {
                                                    className: "mdui-list-item-title",
                                                    children: S.isroot ? "/" : S.dirdata.src[S.dirdata.src.length - 1].fullsrc
                                                })
                                            })
                                        }), S.isroot ? (0, g.jsxs)("li", {
                                            onClick: function() {
                                                window.location.reload()
                                            },
                                            className: "mdui-list-item mdui-ripple",
                                            children: [(0, g.jsx)("i", {
                                                className: "mdui-list-item-icon mdui-icon material-icons",
                                                children: "home"
                                            }), (0, g.jsx)("div", {
                                                className: "mdui-list-item-content",
                                                children: (0, g.jsx)("div", {
                                                    className: "mdui-list-item-title",
                                                    children: "\u56de\u5230\u9996\u9875"
                                                })
                                            })]
                                        }) : (0, g.jsxs)("li", {
                                            onClick: function() {
                                                var e = S.dirdata.src.length;
                                                U(e > 1 ? S.dirdata.src[e - 2].fullsrc : "")
                                            },
                                            className: "mdui-list-item mdui-ripple",
                                            children: [(0, g.jsx)("i", {
                                                className: "mdui-list-item-icon mdui-icon material-icons",
                                                children: "arrow_upward"
                                            }), (0, g.jsx)("div", {
                                                className: "mdui-list-item-content",
                                                children: (0, g.jsx)("div", {
                                                    className: "mdui-list-item-title",
                                                    children: "\u8fd4\u56de\u4e0a\u4e00\u9875"
                                                })
                                            })]
                                        }), S.filedata.map((function(e, t) {
                                            var i = "file_downloader";
                                            return e.name.includes("mp") && (i = "videocam"), (0, g.jsxs)("li", {
                                                onClick: function() {
                                                    e.isdir ? U(e.path) : function(e) {
                                                        c.Loading.circle();
                                                        var t = (0, a.Z)({}, S.dirdata),
                                                            i = (0, a.Z)({}, S.urldata);
                                                        delete t.src, r.Z.post("/api.php?m=free&act=getLink", (0, a.Z)((0, a.Z)((0, a.Z)((0, a.Z)({}, e), t), i), {}, {
                                                            ns: "1"
                                                        })).then((function(e) {
                                                            if (0 !== e.error) {
                                                                var t, i = e.msg ? e.msg : null !== (t = e.message) && void 0 !== t ? t : "\u83b7\u53d6\u5931\u8d25";
                                                                d.Notify.failure(i, {
                                                                    position: "right-top",
                                                                    zindex: 2147483647
                                                                })
                                                            } else F.dialog({
                                                                title: e.filedata.filename,
                                                                content: "\n                    \u6587\u4ef6\u540d\u79f0: ".concat(e.filedata.filename, " <br />\n                    \u6587\u4ef6\u5927\u5c0f: ").concat(M(e.filedata.size), " <br />\n                    \u4e0a\u4f20\u65f6\u95f4: ").concat(new Date(e.filedata.uploadtime).toDateString(), " <br />\n                    \u7528\u6237\u4ee3\u7406: ").concat(e.user_agent, " <br />\n                    \u5982\u679c\u60a8\u89c9\u5f97\u672c\u9879\u76ee\u4e0d\u9519\u6b22\u8fce\u5927\u5bb6\u5206\u4eab\u6781\u4e0b<br />\n                    "),
                                                                buttons: [{
                                                                    text: "\u590d\u5236\u7528\u6237\u4ee3\u7406",
                                                                    onClick: function() {
                                                                        d.Notify.success("\u7528\u6237\u4ee3\u7406\u5df2\u590d\u5236\u5230\u526a\u8d34\u677f", {
                                                                            position: "right-top",
                                                                            zindex: 2147483647
                                                                        }), l()(e.user_agent)
                                                                    },
                                                                    close: !1
                                                                }, {
                                                                    text: "\u590d\u5236\u4e0b\u8f7d\u94fe\u63a5",
                                                                    onClick: function() {
                                                                        d.Notify.success("\u4e0b\u8f7d\u94fe\u63a5\u5df2\u590d\u5236\u5230\u526a\u8d34\u677f", {
                                                                            position: "right-top",
                                                                            zindex: 2147483647
                                                                        }), l()(e.directlink)
                                                                    },
                                                                    close: !1
                                                                }, {
                                                                    text: "\u53d1\u9001\u5230 aria2",
                                                                    onClick: function() {
                                                                        P(e.directlink, e.user_agent, e.filedata.filename, "ws://localhost:6800/jsonrpc", "")
                                                                    },
                                                                    close: !1
                                                                }, {
                                                                    text: "\u53d1\u9001\u5230 motiox",
                                                                    onClick: function() {
                                                                        P(e.directlink, e.user_agent, e.filedata.filename, "ws://localhost:16800/jsonrpc", "")
                                                                    },
                                                                    close: !1
                                                                }, {
                                                                    text: "\u4fee\u590d\u4e0b\u8f7d\u51fa\u9519\u6587\u4ef6",
                                                                    onClick: function() {
                                                                        c.Loading.circle({
                                                                            zindex: 2147483647
                                                                        }), r.Z.post("/api.php?m=free&act=delete", {
                                                                            md5: e.filedata.md5,
                                                                            fs_id: e.filedata.fs_id,
                                                                            size: e.filedata.size
                                                                        }).then((function(e) {
                                                                            d.Notify.success(e.msg, {
                                                                                position: "right-top",
                                                                                zindex: 2147483647
                                                                            }), window.mdui.dialog.destroy()
                                                                        })).finally((function() {
                                                                            c.Loading.remove()
                                                                        }))
                                                                    }
                                                                }]
                                                            })
                                                        })).catch((function(e) {})).finally((function() {
                                                            c.Loading.remove()
                                                        }))
                                                    }(e)
                                                },
                                                className: "mdui-list-item mdui-ripple file-list-c",
                                                children: [e.isdir ? (0, g.jsx)("i", {
                                                    className: "mdui-list-item-icon mdui-icon material-icons",
                                                    children: "folder"
                                                }) : (0, g.jsx)("i", {
                                                    className: "mdui-list-item-icon mdui-icon material-icons",
                                                    children: i
                                                }), (0, g.jsxs)("div", {
                                                    className: "mdui-list-item-content",
                                                    children: [(0, g.jsx)("div", {
                                                        className: "mdui-list-item-title",
                                                        children: e.name
                                                    }), (0, g.jsxs)("div", {
                                                        className: "mdui-list-item-text",
                                                        children: [e.isdir ? "" : "\u6587\u4ef6\u5927\u5c0f: ".concat(M(e.size), " /"), " ", new Date(1e3 * e.uploadtime).toDateString()]
                                                    })]
                                                })]
                                            }, t)
                                        }))]
                                    })
                                }) : (0, g.jsx)(g.Fragment, {
                                    children: (0, g.jsxs)("div", {
                                        className: "mdui-container mdui-p-t-3",
                                        children: [(0, g.jsx)("div", {
                                            className: "mdui-progress",
                                            style: {
                                                height: "5px"
                                            },
                                            children: (0, g.jsx)("div", {
                                                className: "mdui-progress-determinate",
                                                style: {
                                                    height: "5px",
                                                    width: _.remain / _.all * 100 + "%"
                                                }
                                            })
                                        }), (0, g.jsxs)("div", {
                                            className: "mdui-textfield mdui-textfield-floating-label",
                                            children: [(0, g.jsx)("label", {
                                                className: "mdui-textfield-label",
                                                children: "\u586b\u5165\u5b8c\u6574\u67d0\u5ea6\u7f51\u76d8\u5206\u4eab\u94fe\u63a5\uff08\u5305\u62ec\u6c49\u5b57\uff09"
                                            }), (0, g.jsx)("input", {
                                                id: "surl",
                                                onChange: function() {
                                                    return function() {
                                                        var e = T("#surl").val(),
                                                            t = e.match(/\u63d0\u53d6\u7801.? *(\w{4})/),
                                                            i = e.match(/\?pwd=.? *(\w{4})/);
                                                        null != t && (T("#pwd").val(t[1]), document.getElementById("pwd").focus()), null != i && (T("#pwd").val(i[1]), document.getElementById("pwd").focus())
                                                    }()
                                                },
                                                className: "mdui-textfield-input"
                                            })]
                                        }), (0, g.jsxs)("div", {
                                            className: "mdui-textfield mdui-textfield-floating-label",
                                            children: [(0, g.jsx)("label", {
                                                className: "mdui-textfield-label",
                                                children: "\u63d0\u53d6\u7801\uff08\u65e0\u63d0\u53d6\u7801\u5219\u7559\u7a7a\uff09"
                                            }), (0, g.jsx)("input", {
                                                id: "pwd",
                                                className: "mdui-textfield-input"
                                            })]
                                        }), localStorage.getItem("password") ? (0, g.jsx)("input", {
                                            id: "Password",
                                            value: localStorage.getItem("password"),
                                            onChange: function() {
                                                return null
                                            },
                                            hidden: !0
                                        }) : null, (0, g.jsx)("button", {
                                            className: "mdui-btn mdui-color-theme-accent mdui-ripple mxzl",
                                            disabled: v,
                                            onClick: function(e) {
                                                if (null !== localStorage.getItem("password")) {
                                                    var t = T("#surl").val();
                                                    if (null == t || "" === t) return d.Notify.failure("\u8bf7\u586b\u5199\u5206\u4eab\u94fe\u63a5", {
                                                        position: "right-top",
                                                        zindex: 2147483647
                                                    }), !1;
                                                    t.match(/uk=(\d+)/), t.match(/shareid=(\d+)/);
                                                    var i = t.match(/surl=([A-Za-z0-9-_]+)/);
                                                    if (null == i) {
                                                        if (null == (i = t.match(/\/1[A-Za-z0-9-_]+/))) return d.Notify.failure("\u5206\u4eab\u94fe\u63a5\u586b\u5199\u6709\u8bef\uff0c\u8bf7\u68c0\u67e5", {
                                                            position: "right-top",
                                                            zindex: 2147483647
                                                        }), !1;
                                                        i = i[0]
                                                    } else i = "1" + i[1];
                                                    var a = i = i.replace(/\//g, ""),
                                                        n = T("#pwd").val(),
                                                        o = T("#Password").val();
                                                    j(!0), c.Loading.circle(), r.Z.post("/api.php?m=free&act=jx", {
                                                        url: a,
                                                        pwd: n,
                                                        password: o,
                                                        dir: "",
                                                        ns: "1"
                                                    }).then((function(e) {
                                                        var t;
                                                        0 !== e.error ? (-9 === e.error && localStorage.removeItem("password"), d.Notify.failure(null !== (t = e.msg) && void 0 !== t ? t : e.message, {
                                                            position: "right-top",
                                                            zindex: 2147483647
                                                        })) : (localStorage.setItem("password", o), e.urldata = {
                                                            url: a,
                                                            pwd: n,
                                                            password: o,
                                                            surl: a
                                                        }, z(e))
                                                    })).catch((function(e) {})).finally((function() {
                                                        c.Loading.remove(), j(!1)
                                                    })), e.preventDefault()
                                                } else F.dialog({
                                                    content: '\n                <center>\n                    <h2 STYLE=\'COLOR:RED\'>\u516c\u4f17\u53f7\u56de\u590d: <span STYLE=\'COLOR:green\'>1</span> \u83b7\u53d6\u9a8c\u8bc1\u7801\u3002</h2>\n                    <img src="https://mdui.chenflxs.top/miyaohuoq.jpg" style="height:200px;width:200px"><br />\n                    \n                    <div style="width:60%" class="mdui-textfield mdui-textfield-floating-label"><br />\n                        <label class="mdui-textfield-label">\u586b\u5165\u9a8c\u8bc1\u7801</label>\n                        <input id=\'pwdwdwd\' class="mdui-textfield-input" />\n                    </div>\n                    <button\n                        class="mdui-btn mdui-color-theme-accent mdui-ripple mxzl"\n                        onclick="fucku()"\n                    >\u9a8c\u8bc1</button>\n                </div>\n                </center>\n                ',
                                                    cssClass: "dd-dd"
                                                })
                                            },
                                            children: "\u89e3\u6790\u94fe\u63a5"
                                        }), "\xa0", (0, g.jsx)("button", {
                                            className: "mdui-btn mdui-color-theme-accent mdui-ripple mxzl",
                                            onClick: function() {
                                                return window.open("#/useage")
                                            },
                                            children: "\u4f7f\u7528\u5e2e\u52a9"
                                        }), "\xa0"]
                                    })
                                })
                            })
                        })
                    }), (0, g.jsx)("br", {}), (0, g.jsx)("br", {}), (0, g.jsx)("div", {
                        className: "mdui-container-fluid",
                        children: (0, g.jsx)("div", {
                            className: "mdui-card",
                            children: (0, g.jsxs)("div", {
                                className: "mdui-card-content",
                                children: [(0, g.jsx)("div", {
                                    children: (0, g.jsx)("h2", {
                                        children: "\u7cfb\u7edf\u4f7f\u7528\u7edf\u8ba1 \xa0"
                                    })
                                }), (0, g.jsx)("h3", {
                                    style: {
                                        color: "grey"
                                    },
                                    children: "\u7d2f\u8ba1\u89e3\u6790:".concat(N.all_c, "\u4e2a, \u5171 ").concat(N.all_s)
                                }), (0, g.jsx)("h3", {
                                    style: {
                                        color: "grey"
                                    },
                                    children: "\u4eca\u65e5\u89e3\u6790:".concat(N.today_c, "\u4e2a ,\u5171 ").concat(N.today_s)
                                }), (0, g.jsxs)("h3", {
                                    style: {
                                        color: "grey"
                                    },
                                    children: ["\u4eca\u65e5\u53ef\u7528\u6d41\u91cf: ", _.msg]
                                }), (0, g.jsxs)("h3", {
                                    style: {
                                        color: "grey"
                                    },
                                    children: ["\u4eca\u65e5\u53ef\u7528\u6b21\u6570: ", _.left, "\u6b21"]
                                }), (0, g.jsx)("h3", {
                                    style: {
                                        color: "grey"
                                    },
                                    children: "SVIP\u72b6\u6001:".concat(i.msg)
                                })]
                            })
                        })
                    }), (0, g.jsxs)(u.Z, {
                        open: B,
                        "aria-labelledby": "alert-dialog-title",
                        "aria-describedby": "alert-dialog-description",
                        className: "insdaidbilaskjfalsbfjkasbfkljabslkjfd",
                        children: [(0, g.jsx)(h.Z, {
                            id: "alert-dialog-title",
                            children: "\u5f53\u524d\u5df2\u9650\u901f"
                        }), (0, g.jsx)(p.Z, {
                            children: (0, g.jsxs)(f.Z, {
                                id: "alert-dialog-description",
                                children: [(0, g.jsxs)("font", {
                                    color: "#FF1493",
                                    children: ["\u60a8\u5982\u679c\u770b\u5230\u6b64\u9875\u9762", (0, g.jsx)("br", {}), " "]
                                }), (0, g.jsx)("font", {
                                    color: "#00BFFF",
                                    children: "\u8bf4\u660e\u5f53\u524dsvip\u5df2\u5168\u90e8\u9650\u901f"
                                }), (0, g.jsx)("br", {}), " ", (0, g.jsx)("font", {
                                    color: "#FF0000",
                                    children: "\u8bf7\u8010\u5fc3\u7b49\u5f85\u7ad9\u957f\u5728\u7ebf\u5e76\u4fee\u590d\uff01"
                                })]
                            })
                        }), (0, g.jsx)(m.Z, {
                            children: (0, g.jsx)("button", {
                                className: "mdui-btn mdui-color-theme-accent mdui-ripple",
                                style: {
                                    borderRadius: "10px",
                                    backgroundColor: "rgb(0, 137, 123)"
                                },
                                onClick: function() {
                                    return L(!1)
                                },
                                children: "\u6211\u660e\u767d\u4e86"
                            })
                        })]
                    }), (0, g.jsx)("footer", {
                        style: {
                            textAlign: "center",
                            paddingTop: "1em",
                            paddingBottom: "0em"
                        },
                        children: "copyright 2021-2022 jixia All Right Reserved."
                    })]
                })
            }
        },
        6998: function(e, t, i) {
            "use strict";
            var a = i(2458),
                n = {
                    "text/plain": "Text",
                    "text/html": "Url",
                    default: "Text"
                };
            e.exports = function(e, t) {
                var i, o, r, s, l, c, d = !1;
                t || (t = {}), i = t.debug || !1;
                try {
                    if (r = a(), s = document.createRange(), l = document.getSelection(), (c = document.createElement("span")).textContent = e, c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", (function(a) {
                            if (a.stopPropagation(), t.format)
                                if (a.preventDefault(), "undefined" === typeof a.clipboardData) {
                                    i && console.warn("unable to use e.clipboardData"), i && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                                    var o = n[t.format] || n.default;
                                    window.clipboardData.setData(o, e)
                                } else a.clipboardData.clearData(), a.clipboardData.setData(t.format, e);
                            t.onCopy && (a.preventDefault(), t.onCopy(a.clipboardData))
                        })), document.body.appendChild(c), s.selectNodeContents(c), l.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
                    d = !0
                } catch (u) {
                    i && console.error("unable to copy using execCommand: ", u), i && console.warn("trying IE specific stuff");
                    try {
                        window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), d = !0
                    } catch (u) {
                        i && console.error("unable to copy using clipboardData: ", u), i && console.error("falling back to prompt"), o = function(e) {
                            var t = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
                            return e.replace(/#{\s*key\s*}/g, t)
                        }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(o, e)
                    }
                } finally {
                    l && ("function" == typeof l.removeRange ? l.removeRange(s) : l.removeAllRanges()), c && document.body.removeChild(c), r()
                }
                return d
            }
        },
        2458: function(e) {
            e.exports = function() {
                var e = document.getSelection();
                if (!e.rangeCount) return function() {};
                for (var t = document.activeElement, i = [], a = 0; a < e.rangeCount; a++) i.push(e.getRangeAt(a));
                switch (t.tagName.toUpperCase()) {
                    case "INPUT":
                    case "TEXTAREA":
                        t.blur();
                        break;
                    default:
                        t = null
                }
                return e.removeAllRanges(),
                    function() {
                        "Caret" === e.type && e.removeAllRanges(), e.rangeCount || i.forEach((function(t) {
                            e.addRange(t)
                        })), t && t.focus()
                    }
            }
        }
    }
]);
//# sourceMappingURL=553.41dbaca2.chunk.js.map
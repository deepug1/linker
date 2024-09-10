
    !(function (b) {
  var v = "iCheck",
    C = v + "-helper",
    k = "checkbox",
    y = "radio",
    W = "checked",
    m = "un" + W,
    F = "disabled",
    f = "determinate",
    w = "in" + f,
    J = "update",
    T = "type",
    $ = "click",
    x = "touchbegin.i touchend.i",
    I = "addClass",
    _ = "removeClass",
    E = "trigger",
    q = "label",
    p = "cursor",
    D =
      /android|blackberry|windows phone|opera mini|silk/i.test(
        navigator.userAgent
      ) ||
      /iPad|iPhone|iPod/.test(navigator.platform) ||
      ("MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints);
  function L(e, t, i) {
    var a = e[0],
      n = /er/.test(i) ? w : /bl/.test(i) ? F : W,
      s =
        i == J
          ? {
              checked: a[W],
              disabled: a[F],
              indeterminate: "true" == e.attr(w) || "false" == e.attr(f),
            }
          : a[n];
    if (/^(ch|di|in)/.test(i) && !s) M(e, n);
    else if (/^(un|en|de)/.test(i) && s) R(e, n);
    else if (i == J) for (var r in s) (s[r] ? M : R)(e, r, !0);
    else
      (t && "toggle" != i) ||
        (t || e[E]("ifClicked"), s ? a[T] !== y && R(e, n) : M(e, n));
  }
  function M(e, t, i) {
    var a,
      n,
      s = e[0],
      r = e.parent(),
      o = t == W,
      l = t == w,
      u = t == F,
      d = l ? f : o ? m : "enabled",
      c = g(e, d + U(s[T])),
      h = g(e, t + U(s[T]));
    !0 !== s[t] &&
      (!i &&
        t == W &&
        s[T] == y &&
        s.name &&
        ((a = e.closest("form")),
        (n = 'input[name="' + s.name + '"]'),
        (n = a.length ? a.find(n) : b(n)).each(function () {
          this !== s && b(this).data(v) && R(b(this), t);
        })),
      l
        ? ((s[t] = !0), s[W] && R(e, W, "force"))
        : (i || (s[t] = !0), o && s[w] && R(e, w, !1)),
      H(e, o, t, i)),
      s[F] && g(e, p, !0) && r.find("." + C).css(p, "default"),
      r[I](h || g(e, t) || ""),
      r.attr("role") && !l && r.attr("aria-" + (u ? F : W), "true"),
      r[_](c || g(e, d) || "");
  }
  function R(e, t, i) {
    var a = e[0],
      n = e.parent(),
      s = t == W,
      r = t == w,
      o = t == F,
      l = r ? f : s ? m : "enabled",
      u = g(e, l + U(a[T])),
      d = g(e, t + U(a[T]));
    !1 !== a[t] && ((!r && i && "force" != i) || (a[t] = !1), H(e, s, l, i)),
      !a[F] && g(e, p, !0) && n.find("." + C).css(p, "pointer"),
      n[_](d || g(e, t) || ""),
      n.attr("role") && !r && n.attr("aria-" + (o ? F : W), "false"),
      n[I](u || g(e, l) || "");
  }
  function S(e, t) {
    e.data(v) &&
      (e.parent().html(e.attr("style", e.data(v).s || "")),
      t && e[E](t),
      e.off(".i").unwrap(),
      b(q + '[for="' + e[0].id + '"]')
        .add(e.closest(q))
        .off(".i"));
  }
  function g(e, t, i) {
    if (e.data(v)) return e.data(v).o[t + (i ? "" : "Class")];
  }
  function U(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  function H(e, t, i, a) {
    a || (t && e[E]("ifToggled"), e[E]("ifChanged")[E]("if" + U(i)));
  }
  b.fn[v] = function (t, i) {
    function e(e) {
      e.each(function () {
        var e = b(this);
        s = e.is(n) ? s.add(e) : s.add(e.find(n));
      });
    }
    var d,
      a,
      c,
      h,
      m,
      f,
      p,
      g,
      n = 'input[type="' + k + '"], input[type="' + y + '"]',
      s = b();
    return /^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(
      t
    )
      ? ((t = t.toLowerCase()),
        e(this),
        s.each(function () {
          var e = b(this);
          "destroy" == t ? S(e, "ifDestroyed") : L(e, !0, t),
            b.isFunction(i) && i();
        }))
      : "object" != typeof t && t
      ? this
      : ((a = (d = b.extend(
          {
            checkedClass: W,
            disabledClass: F,
            indeterminateClass: w,
            labelHover: !0,
            aria: !0,
          },
          t
        )).handle),
        (c = d.hoverClass || "hover"),
        (h = d.focusClass || "focus"),
        (m = d.activeClass || "active"),
        (f = !!d.labelHover),
        (p = d.labelHoverClass || "hover"),
        (g = 0 | ("" + d.increaseArea).replace("%", "")),
        (a != k && a != y) || (n = 'input[type="' + a + '"]'),
        g < -50 && (g = -50),
        e(this),
        s.each(function () {
          var a = b(this),
            n = (S(a), this),
            e = n.id,
            t = -g + "%",
            i = 100 + 2 * g + "%",
            t = {
              position: "absolute",
              top: t,
              left: t,
              display: "block",
              width: i,
              height: i,
              margin: 0,
              padding: 0,
              background: "#fff",
              border: 0,
              opacity: 0,
            },
            i = D
              ? { position: "absolute", visibility: "hidden" }
              : g
              ? t
              : { position: "absolute", opacity: 0 },
            s =
              n[T] == k ? d.checkboxClass || "i" + k : d.radioClass || "i" + y,
            r = b(q + '[for="' + e + '"]').add(a.closest(q)),
            o = !!d.aria,
            l = v + "-" + Math.random().toString(36).substr(2, 6),
            u = '<div class="' + s + '" ' + (o ? 'role="' + n[T] + '" ' : "");
          o &&
            r.each(function () {
              (u += 'aria-labelledby="'),
                this.id ? (u += this.id) : ((this.id = l), (u += l)),
                (u += '"');
            }),
            (u = a
              .wrap(u + "/>")
              [E]("ifCreated")
              .parent()
              .append(d.insert)),
            (s = b('<ins class="' + C + '"/>')
              .css(t)
              .appendTo(u)),
            a.data(v, { o: d, s: a.attr("style") }).css(i),
            d.inheritClass && u[I](n.className || ""),
            d.inheritID && e && u.attr("id", v + "-" + e),
            "static" == u.css("position") && u.css("position", "relative"),
            L(a, !0, J),
            r.length &&
              r.on($ + ".i mouseover.i mouseout.i " + x, function (e) {
                var t = e[T],
                  i = b(this);
                if (!n[F]) {
                  if (t == $) {
                    if (b(e.target).is("a")) return;
                    L(a, !1, !0);
                  } else
                    f &&
                      (/ut|nd/.test(t)
                        ? (u[_](c), i[_](p))
                        : (u[I](c), i[I](p)));
                  if (!D) return !1;
                  e.stopPropagation();
                }
              }),
            a.on(
              $ + ".i focus.i blur.i keyup.i keydown.i keypress.i",
              function (e) {
                var t = e[T],
                  e = e.keyCode;
                if (t == $) L(a, !1, J);
                else {
                  if ("keydown" == t && 32 == e)
                    return (n[T] == y && n[W]) || (n[W] ? R : M)(a, W), !1;
                  "keyup" == t && n[T] == y
                    ? n[W] || M(a, W)
                    : /us|ur/.test(t) && u["blur" == t ? _ : I](h);
                }
              }
            ),
            s.on(
              $ + " mousedown mouseup mouseover mouseout " + x,
              function (e) {
                var t = e[T],
                  i = /wn|up/.test(t) ? m : c;
                if (!n[F]) {
                  if (
                    (t == $
                      ? L(a, !1, !0)
                      : (/wn|er|in/.test(t) ? u[I](i) : u[_](i + " " + m),
                        r.length &&
                          f &&
                          i == c &&
                          r[/ut|nd/.test(t) ? _ : I](p)),
                    !D)
                  )
                    return !1;
                  e.stopPropagation();
                }
              }
            );
        }));
  };
})(window.jQuery || window.Zepto);
("use strict");
function Terms() {
  var t,
    i = "By clicking the submit button, I agree to {terms & conditions}.",
    a = JFCustomWidget.getWidgetSettings(),
    n = a.acceptedText || "Accepted";
  document.referrer.indexOf("ndt=1");
  function s() {
    var e = { valid: !1, value: "" };
    return (
      $("#userInput").is(":checked") &&
        ((e.valid = !0), (e.value = n), JFCustomWidget.hideWidgetError()),
      e
    );
  }
  function r() {
    $('#userInput, .iCheck-helper, label[for="userInput"]').on(
      "click touch keyup",
      function (e) {
        ("click" === e.type ||
          "touch" === e.type ||
          ("keyup" === e.type && " " === e.key)) &&
          ((e = s()), JFCustomWidget.sendData({ value: e.value }));
      }
    );
  }
  function o(e) {
    var t = a.termsLink,
      e = `<a href="#" target=${
        e?.jotformNext ? "_top" : "_blank"
      } id="_terms" rel="nofollow">`,
      e = $("#_label").html().replace("{", e).replace("}", "</a>");
    $("#_label").html(e),
      (t =
        t && 0 < t.length
          ? 0 <= t.search("http://") || 0 <= t.toLowerCase().indexOf("https")
            ? t
            : "http://" + t
          : "http://www.jotform.com"),
      $("#_terms").attr("href", t);
  }
  function l() {
    JFCustomWidgetUtils.isMobile()
      ? JFCustomWidget.requestFrameResize({
          height: $("#main").outerHeight() + 30,
        })
      : JFCustomWidget.requestFrameResize({
          height: $("#main").outerHeight() + 20,
        });
  }
  (this.init = function (e) {
    !JFCustomWidget.isWidgetRequired() ||
    ("v2" === e.themeVersion && e.isWidgetLabelEnabled)
      ? $(".required").hide()
      : ($(".required").show(),
        $("#userInput").attr("aria-required", "true"),
        $("#userInput").attr("required", "required"));
    "theme" in a &&
      !JFCustomWidgetUtils.isEmpty(a.theme) &&
      "default" !== a.theme &&
      $("#main").addClass("theme-" + a.theme);
    void 0 !== a.termsText && 0 < a.termsText.length
      ? $("#_label").html(a.termsText)
      : $("#_label").html(i),
      l();
    (t = $("#main input")),
      JFCustomWidgetUtils.isMobile()
        ? e &&
          e.value &&
          t &&
          t[0] &&
          ((t[0].checked = !0), JFCustomWidget.sendData(s()))
        : (t.iCheck({
            checkboxClass: "icheckbox_minimal",
            increaseArea: "20%",
            aria: !1,
          }),
          e && e.value && (t.iCheck("check"), JFCustomWidget.sendData(s())));
    o(e), r();
  }),
    (this.getData = s),
    (this.resetData = function () {
      JFCustomWidgetUtils.isMobile()
        ? $("#main input").prop("checked", !1)
        : t.iCheck("uncheck");
    }),
    (this.updateTermLink = o),
    (this.updateFrameSize = l),
    (this.params = a);
}
window.addEventListener("load", function () {
  var e = document.getElementById("userInput"),
    n = !1;
  e.addEventListener("focus", function (e) {
    var t = JFCustomWidget.getWidgetSettings();
    parent.postMessage({ type: "collapse", qid: t.qid }, "*");
  }),
    JFCustomWidget.subscribe("ready", function (e) {
      var t = new Terms();
      t.init(e),
        (n = !0),
        JFCustomWidget.subscribe("clear", function () {
          t.resetData();
        }),
        JFCustomWidget.subscribe("submit", function () {
          JFCustomWidget.sendSubmit(t.getData());
        });
    }),
    JFCustomWidget.subscribe("translatable", function () {
      function e() {
        var e = JFWidgetTranslation.getTranslatables(function (e) {
          var t = [JFCustomWidget.getWidgetSettings().termsText, "REQUIRED"];
          return e.concat(t);
        });
        JFCustomWidget.sendTranslatables(e);
      }
      var t, i;
      n
        ? e()
        : ((t = 1),
          (i = setInterval(function () {
            (t += 1), (n || 10 < t) && (e(), clearInterval(i));
          }, 500)));
    }),
    JFCustomWidget.subscribe("translate", function (a) {
      function e() {
        var e = JFCustomWidget.getWidgetSettings(),
          t = e.termsText && e.termsText.replace(/\s+/g, " ").trim(),
          t = JFWidgetTranslation.getTranslation(a, t, a.to),
          i = JFWidgetTranslation.getTranslation(a, "REQUIRED", a.to);
        t &&
          ($("#_label").html(t),
          (t = e.termsLink),
          (e = $("#_label")
            .html()
            .replace(
              "{",
              '<a href="#" target="_blank" id="_terms" rel="nofollow">'
            )
            .replace("}", "</a>")),
          $("#_label").html(e),
          (t =
            t && 0 < t.length
              ? 0 <= t.search("http://") ||
                0 <= t.toLowerCase().indexOf("https")
                ? t
                : "http://" + t
              : "http://www.jotform.com"),
          $("#_terms").attr("href", t)),
          i && (document.getElementById("requiredElement").innerHTML = i),
          JFWidgetTranslation.translate(a);
      }
      var t, i;
      n
        ? e()
        : ((t = 1),
          (i = setInterval(function () {
            (t += 1), (n || 10 < t) && (e(), clearInterval(i));
          }, 500)));
    });
});


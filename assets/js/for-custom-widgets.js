
    !(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports["for-custom-widgets"] = e())
    : (t["for-custom-widgets"] = e());
})(this, function () {
  return (function () {
    var t = {
        46513: function (t) {
          var e;
          (e = function () {
            "use strict";
            var t,
              e = Object.hasOwnProperty,
              n = Object.setPrototypeOf,
              i = Object.isFrozen,
              o = Object.getPrototypeOf,
              r = Object.getOwnPropertyDescriptor,
              a = Object.freeze,
              s = Object.seal,
              c = Object.create,
              l = "undefined" != typeof Reflect && Reflect,
              u = l.apply,
              f = l.construct;
            u ||
              (u = function (t, e, n) {
                return t.apply(e, n);
              }),
              a ||
                (a = function (t) {
                  return t;
                }),
              s ||
                (s = function (t) {
                  return t;
                }),
              f ||
                (f = function (t, e) {
                  return new (Function.prototype.bind.apply(
                    t,
                    [null].concat(
                      (function (t) {
                        if (!Array.isArray(t)) return Array.from(t);
                        for (var e = 0, n = Array(t.length); e < t.length; e++)
                          n[e] = t[e];
                        return n;
                      })(e)
                    )
                  ))();
                });
            var d = S(Array.prototype.forEach),
              p = S(Array.prototype.pop),
              m = S(Array.prototype.push),
              h = S(String.prototype.toLowerCase),
              g = S(String.prototype.match),
              v = S(String.prototype.replace),
              y = S(String.prototype.indexOf),
              b = S(String.prototype.trim),
              w = S(RegExp.prototype.test),
              x =
                ((t = TypeError),
                function () {
                  for (
                    var e = arguments.length, n = Array(e), i = 0;
                    i < e;
                    i++
                  )
                    n[i] = arguments[i];
                  return f(t, n);
                });
            function S(t) {
              return function (e) {
                for (
                  var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1;
                  o < n;
                  o++
                )
                  i[o - 1] = arguments[o];
                return u(t, e, i);
              };
            }
            function T(t, e) {
              n && n(t, null);
              for (var o = e.length; o--; ) {
                var r = e[o];
                if ("string" == typeof r) {
                  var a = h(r);
                  a !== r && (i(e) || (e[o] = a), (r = a));
                }
                t[r] = !0;
              }
              return t;
            }
            function A(t) {
              var n = c(null),
                i = void 0;
              for (i in t) u(e, t, [i]) && (n[i] = t[i]);
              return n;
            }
            function k(t, e) {
              for (; null !== t; ) {
                var n = r(t, e);
                if (n) {
                  if (n.get) return S(n.get);
                  if ("function" == typeof n.value) return S(n.value);
                }
                t = o(t);
              }
              return function (t) {
                return console.warn("fallback value for", t), null;
              };
            }
            var D = a([
                "a",
                "abbr",
                "acronym",
                "address",
                "area",
                "article",
                "aside",
                "audio",
                "b",
                "bdi",
                "bdo",
                "big",
                "blink",
                "blockquote",
                "body",
                "br",
                "button",
                "canvas",
                "caption",
                "center",
                "cite",
                "code",
                "col",
                "colgroup",
                "content",
                "data",
                "datalist",
                "dd",
                "decorator",
                "del",
                "details",
                "dfn",
                "dialog",
                "dir",
                "div",
                "dl",
                "dt",
                "element",
                "em",
                "fieldset",
                "figcaption",
                "figure",
                "font",
                "footer",
                "form",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "head",
                "header",
                "hgroup",
                "hr",
                "html",
                "i",
                "img",
                "input",
                "ins",
                "kbd",
                "label",
                "legend",
                "li",
                "main",
                "map",
                "mark",
                "marquee",
                "menu",
                "menuitem",
                "meter",
                "nav",
                "nobr",
                "ol",
                "optgroup",
                "option",
                "output",
                "p",
                "picture",
                "pre",
                "progress",
                "q",
                "rp",
                "rt",
                "ruby",
                "s",
                "samp",
                "section",
                "select",
                "shadow",
                "small",
                "source",
                "spacer",
                "span",
                "strike",
                "strong",
                "style",
                "sub",
                "summary",
                "sup",
                "table",
                "tbody",
                "td",
                "template",
                "textarea",
                "tfoot",
                "th",
                "thead",
                "time",
                "tr",
                "track",
                "tt",
                "u",
                "ul",
                "var",
                "video",
                "wbr",
              ]),
              E = a([
                "svg",
                "a",
                "altglyph",
                "altglyphdef",
                "altglyphitem",
                "animatecolor",
                "animatemotion",
                "animatetransform",
                "circle",
                "clippath",
                "defs",
                "desc",
                "ellipse",
                "filter",
                "font",
                "g",
                "glyph",
                "glyphref",
                "hkern",
                "image",
                "line",
                "lineargradient",
                "marker",
                "mask",
                "metadata",
                "mpath",
                "path",
                "pattern",
                "polygon",
                "polyline",
                "radialgradient",
                "rect",
                "stop",
                "style",
                "switch",
                "symbol",
                "text",
                "textpath",
                "title",
                "tref",
                "tspan",
                "view",
                "vkern",
              ]),
              O = a([
                "feBlend",
                "feColorMatrix",
                "feComponentTransfer",
                "feComposite",
                "feConvolveMatrix",
                "feDiffuseLighting",
                "feDisplacementMap",
                "feDistantLight",
                "feFlood",
                "feFuncA",
                "feFuncB",
                "feFuncG",
                "feFuncR",
                "feGaussianBlur",
                "feMerge",
                "feMergeNode",
                "feMorphology",
                "feOffset",
                "fePointLight",
                "feSpecularLighting",
                "feSpotLight",
                "feTile",
                "feTurbulence",
              ]),
              _ = a([
                "animate",
                "color-profile",
                "cursor",
                "discard",
                "fedropshadow",
                "feimage",
                "font-face",
                "font-face-format",
                "font-face-name",
                "font-face-src",
                "font-face-uri",
                "foreignobject",
                "hatch",
                "hatchpath",
                "mesh",
                "meshgradient",
                "meshpatch",
                "meshrow",
                "missing-glyph",
                "script",
                "set",
                "solidcolor",
                "unknown",
                "use",
              ]),
              I = a([
                "math",
                "menclose",
                "merror",
                "mfenced",
                "mfrac",
                "mglyph",
                "mi",
                "mlabeledtr",
                "mmultiscripts",
                "mn",
                "mo",
                "mover",
                "mpadded",
                "mphantom",
                "mroot",
                "mrow",
                "ms",
                "mspace",
                "msqrt",
                "mstyle",
                "msub",
                "msup",
                "msubsup",
                "mtable",
                "mtd",
                "mtext",
                "mtr",
                "munder",
                "munderover",
              ]),
              N = a([
                "maction",
                "maligngroup",
                "malignmark",
                "mlongdiv",
                "mscarries",
                "mscarry",
                "msgroup",
                "mstack",
                "msline",
                "msrow",
                "semantics",
                "annotation",
                "annotation-xml",
                "mprescripts",
                "none",
              ]),
              C = a(["#text"]),
              L = a([
                "accept",
                "action",
                "align",
                "alt",
                "autocapitalize",
                "autocomplete",
                "autopictureinpicture",
                "autoplay",
                "background",
                "bgcolor",
                "border",
                "capture",
                "cellpadding",
                "cellspacing",
                "checked",
                "cite",
                "class",
                "clear",
                "color",
                "cols",
                "colspan",
                "controls",
                "controlslist",
                "coords",
                "crossorigin",
                "datetime",
                "decoding",
                "default",
                "dir",
                "disabled",
                "disablepictureinpicture",
                "disableremoteplayback",
                "download",
                "draggable",
                "enctype",
                "enterkeyhint",
                "face",
                "for",
                "headers",
                "height",
                "hidden",
                "high",
                "href",
                "hreflang",
                "id",
                "inputmode",
                "integrity",
                "ismap",
                "kind",
                "label",
                "lang",
                "list",
                "loading",
                "loop",
                "low",
                "max",
                "maxlength",
                "media",
                "method",
                "min",
                "minlength",
                "multiple",
                "muted",
                "name",
                "noshade",
                "novalidate",
                "nowrap",
                "open",
                "optimum",
                "pattern",
                "placeholder",
                "playsinline",
                "poster",
                "preload",
                "pubdate",
                "radiogroup",
                "readonly",
                "rel",
                "required",
                "rev",
                "reversed",
                "role",
                "rows",
                "rowspan",
                "spellcheck",
                "scope",
                "selected",
                "shape",
                "size",
                "sizes",
                "span",
                "srclang",
                "start",
                "src",
                "srcset",
                "step",
                "style",
                "summary",
                "tabindex",
                "title",
                "translate",
                "type",
                "usemap",
                "valign",
                "value",
                "width",
                "xmlns",
                "slot",
              ]),
              j = a([
                "accent-height",
                "accumulate",
                "additive",
                "alignment-baseline",
                "ascent",
                "attributename",
                "attributetype",
                "azimuth",
                "basefrequency",
                "baseline-shift",
                "begin",
                "bias",
                "by",
                "class",
                "clip",
                "clippathunits",
                "clip-path",
                "clip-rule",
                "color",
                "color-interpolation",
                "color-interpolation-filters",
                "color-profile",
                "color-rendering",
                "cx",
                "cy",
                "d",
                "dx",
                "dy",
                "diffuseconstant",
                "direction",
                "display",
                "divisor",
                "dur",
                "edgemode",
                "elevation",
                "end",
                "fill",
                "fill-opacity",
                "fill-rule",
                "filter",
                "filterunits",
                "flood-color",
                "flood-opacity",
                "font-family",
                "font-size",
                "font-size-adjust",
                "font-stretch",
                "font-style",
                "font-variant",
                "font-weight",
                "fx",
                "fy",
                "g1",
                "g2",
                "glyph-name",
                "glyphref",
                "gradientunits",
                "gradienttransform",
                "height",
                "href",
                "id",
                "image-rendering",
                "in",
                "in2",
                "k",
                "k1",
                "k2",
                "k3",
                "k4",
                "kerning",
                "keypoints",
                "keysplines",
                "keytimes",
                "lang",
                "lengthadjust",
                "letter-spacing",
                "kernelmatrix",
                "kernelunitlength",
                "lighting-color",
                "local",
                "marker-end",
                "marker-mid",
                "marker-start",
                "markerheight",
                "markerunits",
                "markerwidth",
                "maskcontentunits",
                "maskunits",
                "max",
                "mask",
                "media",
                "method",
                "mode",
                "min",
                "name",
                "numoctaves",
                "offset",
                "operator",
                "opacity",
                "order",
                "orient",
                "orientation",
                "origin",
                "overflow",
                "paint-order",
                "path",
                "pathlength",
                "patterncontentunits",
                "patterntransform",
                "patternunits",
                "points",
                "preservealpha",
                "preserveaspectratio",
                "primitiveunits",
                "r",
                "rx",
                "ry",
                "radius",
                "refx",
                "refy",
                "repeatcount",
                "repeatdur",
                "restart",
                "result",
                "rotate",
                "scale",
                "seed",
                "shape-rendering",
                "specularconstant",
                "specularexponent",
                "spreadmethod",
                "startoffset",
                "stddeviation",
                "stitchtiles",
                "stop-color",
                "stop-opacity",
                "stroke-dasharray",
                "stroke-dashoffset",
                "stroke-linecap",
                "stroke-linejoin",
                "stroke-miterlimit",
                "stroke-opacity",
                "stroke",
                "stroke-width",
                "style",
                "surfacescale",
                "systemlanguage",
                "tabindex",
                "targetx",
                "targety",
                "transform",
                "text-anchor",
                "text-decoration",
                "text-rendering",
                "textlength",
                "type",
                "u1",
                "u2",
                "unicode",
                "values",
                "viewbox",
                "visibility",
                "version",
                "vert-adv-y",
                "vert-origin-x",
                "vert-origin-y",
                "width",
                "word-spacing",
                "wrap",
                "writing-mode",
                "xchannelselector",
                "ychannelselector",
                "x",
                "x1",
                "x2",
                "xmlns",
                "y",
                "y1",
                "y2",
                "z",
                "zoomandpan",
              ]),
              q = a([
                "accent",
                "accentunder",
                "align",
                "bevelled",
                "close",
                "columnsalign",
                "columnlines",
                "columnspan",
                "denomalign",
                "depth",
                "dir",
                "display",
                "displaystyle",
                "encoding",
                "fence",
                "frame",
                "height",
                "href",
                "id",
                "largeop",
                "length",
                "linethickness",
                "lspace",
                "lquote",
                "mathbackground",
                "mathcolor",
                "mathsize",
                "mathvariant",
                "maxsize",
                "minsize",
                "movablelimits",
                "notation",
                "numalign",
                "open",
                "rowalign",
                "rowlines",
                "rowspacing",
                "rowspan",
                "rspace",
                "rquote",
                "scriptlevel",
                "scriptminsize",
                "scriptsizemultiplier",
                "selection",
                "separator",
                "separators",
                "stretchy",
                "subscriptshift",
                "supscriptshift",
                "symmetric",
                "voffset",
                "width",
                "xmlns",
              ]),
              F = a([
                "xlink:href",
                "xml:id",
                "xlink:title",
                "xml:space",
                "xmlns:xlink",
              ]),
              R = s(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
              M = s(/<%[\s\S]*|[\s\S]*%>/gm),
              W = s(/^data-[\-\w.\u00B7-\uFFFF]/),
              U = s(/^aria-[\-\w]+$/),
              P = s(
                /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
              ),
              z = s(/^(?:\w+script|data):/i),
              B = s(
                /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
              ),
              H =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        "function" == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                    };
            function J(t) {
              if (!Array.isArray(t)) return Array.from(t);
              for (var e = 0, n = Array(t.length); e < t.length; e++)
                n[e] = t[e];
              return n;
            }
            var V = function (t, e) {
              if (
                (void 0 === t ? "undefined" : H(t)) !== "object" ||
                "function" != typeof t.createPolicy
              )
                return null;
              var n = null,
                i = "data-tt-policy-suffix";
              e.currentScript &&
                e.currentScript.hasAttribute(i) &&
                (n = e.currentScript.getAttribute(i));
              var o = "dompurify" + (n ? "#" + n : "");
              try {
                return t.createPolicy(o, {
                  createHTML: function (t) {
                    return t;
                  },
                });
              } catch (t) {
                return (
                  console.warn(
                    "TrustedTypes policy " + o + " could not be created."
                  ),
                  null
                );
              }
            };
            return (function t() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "undefined" == typeof window
                    ? null
                    : window,
                n = function (e) {
                  return t(e);
                };
              if (
                ((n.version = "2.3.3"),
                (n.removed = []),
                !e || !e.document || 9 !== e.document.nodeType)
              )
                return (n.isSupported = !1), n;
              var i = e.document,
                o = e.document,
                r = e.DocumentFragment,
                s = e.HTMLTemplateElement,
                c = e.Node,
                l = e.Element,
                u = e.NodeFilter,
                f = e.NamedNodeMap,
                S = void 0 === f ? e.NamedNodeMap || e.MozNamedAttrMap : f,
                G = e.Text,
                $ = e.Comment,
                X = e.DOMParser,
                K = e.trustedTypes,
                Y = l.prototype,
                Q = k(Y, "cloneNode"),
                Z = k(Y, "nextSibling"),
                tt = k(Y, "childNodes"),
                te = k(Y, "parentNode");
              if ("function" == typeof s) {
                var tn = o.createElement("template");
                tn.content &&
                  tn.content.ownerDocument &&
                  (o = tn.content.ownerDocument);
              }
              var ti = V(K, i),
                to = ti && tI ? ti.createHTML("") : "",
                tr = o,
                ta = tr.implementation,
                ts = tr.createNodeIterator,
                tc = tr.createDocumentFragment,
                tl = tr.getElementsByTagName,
                tu = i.importNode,
                tf = {};
              try {
                tf = A(o).documentMode ? o.documentMode : {};
              } catch (t) {}
              var td = {};
              n.isSupported =
                "function" == typeof te &&
                ta &&
                void 0 !== ta.createHTMLDocument &&
                9 !== tf;
              var tp = P,
                tm = null,
                th = T({}, [].concat(J(D), J(E), J(O), J(I), J(C))),
                tg = null,
                tv = T({}, [].concat(J(L), J(j), J(q), J(F))),
                ty = null,
                tb = null,
                tw = !0,
                tx = !0,
                tS = !1,
                tT = !1,
                tA = !1,
                tk = !1,
                tD = !1,
                tE = !1,
                tO = !1,
                t_ = !0,
                tI = !1,
                tN = !0,
                tC = !0,
                tL = !1,
                tj = {},
                tq = null,
                tF = T({}, [
                  "annotation-xml",
                  "audio",
                  "colgroup",
                  "desc",
                  "foreignobject",
                  "head",
                  "iframe",
                  "math",
                  "mi",
                  "mn",
                  "mo",
                  "ms",
                  "mtext",
                  "noembed",
                  "noframes",
                  "noscript",
                  "plaintext",
                  "script",
                  "style",
                  "svg",
                  "template",
                  "thead",
                  "title",
                  "video",
                  "xmp",
                ]),
                tR = null,
                tM = T({}, [
                  "audio",
                  "video",
                  "img",
                  "source",
                  "image",
                  "track",
                ]),
                tW = null,
                tU = T({}, [
                  "alt",
                  "class",
                  "for",
                  "id",
                  "label",
                  "name",
                  "pattern",
                  "placeholder",
                  "role",
                  "summary",
                  "title",
                  "value",
                  "style",
                  "xmlns",
                ]),
                tP = "http://www.w3.org/1998/Math/MathML",
                tz = "http://www.w3.org/2000/svg",
                tB = "http://www.w3.org/1999/xhtml",
                tH = tB,
                tJ = !1,
                tV = void 0,
                tG = ["application/xhtml+xml", "text/html"],
                t$ = void 0,
                tX = null,
                tK = o.createElement("form"),
                tY = function (t) {
                  (tX && tX === t) ||
                    ((t && (void 0 === t ? "undefined" : H(t)) === "object") ||
                      (t = {}),
                    (tm =
                      "ALLOWED_TAGS" in (t = A(t))
                        ? T({}, t.ALLOWED_TAGS)
                        : th),
                    (tg = "ALLOWED_ATTR" in t ? T({}, t.ALLOWED_ATTR) : tv),
                    (tW =
                      "ADD_URI_SAFE_ATTR" in t
                        ? T(A(tU), t.ADD_URI_SAFE_ATTR)
                        : tU),
                    (tR =
                      "ADD_DATA_URI_TAGS" in t
                        ? T(A(tM), t.ADD_DATA_URI_TAGS)
                        : tM),
                    (tq =
                      "FORBID_CONTENTS" in t ? T({}, t.FORBID_CONTENTS) : tF),
                    (ty = "FORBID_TAGS" in t ? T({}, t.FORBID_TAGS) : {}),
                    (tb = "FORBID_ATTR" in t ? T({}, t.FORBID_ATTR) : {}),
                    (tj = "USE_PROFILES" in t && t.USE_PROFILES),
                    (tw = !1 !== t.ALLOW_ARIA_ATTR),
                    (tx = !1 !== t.ALLOW_DATA_ATTR),
                    (tS = t.ALLOW_UNKNOWN_PROTOCOLS || !1),
                    (tT = t.SAFE_FOR_TEMPLATES || !1),
                    (tA = t.WHOLE_DOCUMENT || !1),
                    (tE = t.RETURN_DOM || !1),
                    (tO = t.RETURN_DOM_FRAGMENT || !1),
                    (t_ = !1 !== t.RETURN_DOM_IMPORT),
                    (tI = t.RETURN_TRUSTED_TYPE || !1),
                    (tD = t.FORCE_BODY || !1),
                    (tN = !1 !== t.SANITIZE_DOM),
                    (tC = !1 !== t.KEEP_CONTENT),
                    (tL = t.IN_PLACE || !1),
                    (tp = t.ALLOWED_URI_REGEXP || tp),
                    (tH = t.NAMESPACE || tB),
                    (t$ =
                      "application/xhtml+xml" ===
                      (tV = tV =
                        -1 === tG.indexOf(t.PARSER_MEDIA_TYPE)
                          ? "text/html"
                          : t.PARSER_MEDIA_TYPE)
                        ? function (t) {
                            return t;
                          }
                        : h),
                    tT && (tx = !1),
                    tO && (tE = !0),
                    tj &&
                      ((tm = T({}, [].concat(J(C)))),
                      (tg = []),
                      !0 === tj.html && (T(tm, D), T(tg, L)),
                      !0 === tj.svg && (T(tm, E), T(tg, j), T(tg, F)),
                      !0 === tj.svgFilters && (T(tm, O), T(tg, j), T(tg, F)),
                      !0 === tj.mathMl && (T(tm, I), T(tg, q), T(tg, F))),
                    t.ADD_TAGS &&
                      (tm === th && (tm = A(tm)), T(tm, t.ADD_TAGS)),
                    t.ADD_ATTR &&
                      (tg === tv && (tg = A(tg)), T(tg, t.ADD_ATTR)),
                    t.ADD_URI_SAFE_ATTR && T(tW, t.ADD_URI_SAFE_ATTR),
                    t.FORBID_CONTENTS &&
                      (tq === tF && (tq = A(tq)), T(tq, t.FORBID_CONTENTS)),
                    tC && (tm["#text"] = !0),
                    tA && T(tm, ["html", "head", "body"]),
                    tm.table && (T(tm, ["tbody"]), delete ty.tbody),
                    a && a(t),
                    (tX = t));
                },
                tQ = T({}, ["mi", "mo", "mn", "ms", "mtext"]),
                tZ = T({}, [
                  "foreignobject",
                  "desc",
                  "title",
                  "annotation-xml",
                ]),
                t0 = T({}, E);
              T(t0, O), T(t0, _);
              var t1 = T({}, I);
              T(t1, N);
              var t2 = function (t) {
                  var e = te(t);
                  (e && e.tagName) ||
                    (e = { namespaceURI: tB, tagName: "template" });
                  var n = h(t.tagName),
                    i = h(e.tagName);
                  if (t.namespaceURI === tz)
                    return e.namespaceURI === tB
                      ? "svg" === n
                      : e.namespaceURI === tP
                      ? "svg" === n && ("annotation-xml" === i || tQ[i])
                      : !!t0[n];
                  if (t.namespaceURI === tP)
                    return e.namespaceURI === tB
                      ? "math" === n
                      : e.namespaceURI === tz
                      ? "math" === n && tZ[i]
                      : !!t1[n];
                  if (t.namespaceURI === tB) {
                    if (
                      (e.namespaceURI === tz && !tZ[i]) ||
                      (e.namespaceURI === tP && !tQ[i])
                    )
                      return !1;
                    var o = T({}, ["title", "style", "font", "a", "script"]);
                    return !t1[n] && (o[n] || !t0[n]);
                  }
                  return !1;
                },
                t3 = function (t) {
                  m(n.removed, { element: t });
                  try {
                    t.parentNode.removeChild(t);
                  } catch (e) {
                    try {
                      t.outerHTML = to;
                    } catch (e) {
                      t.remove();
                    }
                  }
                },
                t9 = function (t, e) {
                  try {
                    m(n.removed, { attribute: e.getAttributeNode(t), from: e });
                  } catch (t) {
                    m(n.removed, { attribute: null, from: e });
                  }
                  if ((e.removeAttribute(t), "is" === t && !tg[t])) {
                    if (tE || tO)
                      try {
                        t3(e);
                      } catch (t) {}
                    else
                      try {
                        e.setAttribute(t, "");
                      } catch (t) {}
                  }
                },
                t4 = function (t) {
                  var e = void 0,
                    n = void 0;
                  if (tD) t = "<remove></remove>" + t;
                  else {
                    var i = g(t, /^[\r\n\t ]+/);
                    n = i && i[0];
                  }
                  "application/xhtml+xml" === tV &&
                    (t =
                      '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                      t +
                      "</body></html>");
                  var r = ti ? ti.createHTML(t) : t;
                  if (tH === tB)
                    try {
                      e = new X().parseFromString(r, tV);
                    } catch (t) {}
                  if (!e || !e.documentElement) {
                    e = ta.createDocument(tH, "template", null);
                    try {
                      e.documentElement.innerHTML = tJ ? "" : r;
                    } catch (t) {}
                  }
                  var a = e.body || e.documentElement;
                  return (t &&
                    n &&
                    a.insertBefore(
                      o.createTextNode(n),
                      a.childNodes[0] || null
                    ),
                  tH === tB)
                    ? tl.call(e, tA ? "html" : "body")[0]
                    : tA
                    ? e.documentElement
                    : a;
                },
                t5 = function (t) {
                  return ts.call(
                    t.ownerDocument || t,
                    t,
                    u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT,
                    null,
                    !1
                  );
                },
                t8 = function (t) {
                  return (void 0 === c ? "undefined" : H(c)) === "object"
                    ? t instanceof c
                    : t &&
                        (void 0 === t ? "undefined" : H(t)) === "object" &&
                        "number" == typeof t.nodeType &&
                        "string" == typeof t.nodeName;
                },
                t6 = function (t, e, i) {
                  td[t] &&
                    d(td[t], function (t) {
                      t.call(n, e, i, tX);
                    });
                },
                t7 = function (t) {
                  var e = void 0;
                  if (
                    (t6("beforeSanitizeElements", t, null),
                    (!(t instanceof G) &&
                      !(t instanceof $) &&
                      ("string" != typeof t.nodeName ||
                        "string" != typeof t.textContent ||
                        "function" != typeof t.removeChild ||
                        !(t.attributes instanceof S) ||
                        "function" != typeof t.removeAttribute ||
                        "function" != typeof t.setAttribute ||
                        "string" != typeof t.namespaceURI ||
                        "function" != typeof t.insertBefore)) ||
                      g(t.nodeName, /[\u0080-\uFFFF]/))
                  )
                    return t3(t), !0;
                  var i = t$(t.nodeName);
                  if (
                    (t6("uponSanitizeElement", t, {
                      tagName: i,
                      allowedTags: tm,
                    }),
                    (!t8(t.firstElementChild) &&
                      (!t8(t.content) || !t8(t.content.firstElementChild)) &&
                      w(/<[/\w]/g, t.innerHTML) &&
                      w(/<[/\w]/g, t.textContent)) ||
                      ("select" === i && w(/<template/i, t.innerHTML)))
                  )
                    return t3(t), !0;
                  if (!tm[i] || ty[i]) {
                    if (tC && !tq[i]) {
                      var o = te(t) || t.parentNode,
                        r = tt(t) || t.childNodes;
                      if (r && o)
                        for (var a = r.length, s = a - 1; s >= 0; --s)
                          o.insertBefore(Q(r[s], !0), Z(t));
                    }
                    return t3(t), !0;
                  }
                  return (t instanceof l && !t2(t)) ||
                    (("noscript" === i || "noembed" === i) &&
                      w(/<\/no(script|embed)/i, t.innerHTML))
                    ? (t3(t), !0)
                    : (tT &&
                        3 === t.nodeType &&
                        ((e = v((e = t.textContent), R, " ")),
                        (e = v(e, M, " ")),
                        t.textContent !== e &&
                          (m(n.removed, { element: t.cloneNode() }),
                          (t.textContent = e))),
                      t6("afterSanitizeElements", t, null),
                      !1);
                },
                et = function (t, e, n) {
                  if (tN && ("id" === e || "name" === e) && (n in o || n in tK))
                    return !1;
                  if (tx && !tb[e] && w(W, e));
                  else if (tw && w(U, e));
                  else if (!tg[e] || tb[e]) return !1;
                  else if (tW[e]);
                  else if (w(tp, v(n, B, "")));
                  else if (
                    ("src" === e || "xlink:href" === e || "href" === e) &&
                    "script" !== t &&
                    0 === y(n, "data:") &&
                    tR[t]
                  );
                  else if (tS && !w(z, v(n, B, "")));
                  else if (n) return !1;
                  return !0;
                },
                ee = function (t) {
                  var e = void 0,
                    i = void 0,
                    o = void 0,
                    r = void 0;
                  t6("beforeSanitizeAttributes", t, null);
                  var a = t.attributes;
                  if (a) {
                    var s = {
                      attrName: "",
                      attrValue: "",
                      keepAttr: !0,
                      allowedAttributes: tg,
                    };
                    for (r = a.length; r--; ) {
                      var c = (e = a[r]),
                        l = c.name,
                        u = c.namespaceURI;
                      if (
                        ((i = b(e.value)),
                        (o = t$(l)),
                        (s.attrName = o),
                        (s.attrValue = i),
                        (s.keepAttr = !0),
                        (s.forceKeepAttr = void 0),
                        t6("uponSanitizeAttribute", t, s),
                        (i = s.attrValue),
                        !s.forceKeepAttr && (t9(l, t), s.keepAttr))
                      ) {
                        if (w(/\/>/i, i)) {
                          t9(l, t);
                          continue;
                        }
                        if (
                          (tT && ((i = v(i, R, " ")), (i = v(i, M, " "))),
                          et(t$(t.nodeName), o, i))
                        )
                          try {
                            u
                              ? t.setAttributeNS(u, l, i)
                              : t.setAttribute(l, i),
                              p(n.removed);
                          } catch (t) {}
                      }
                    }
                    t6("afterSanitizeAttributes", t, null);
                  }
                },
                en = function t(e) {
                  var n = void 0,
                    i = t5(e);
                  for (
                    t6("beforeSanitizeShadowDOM", e, null);
                    (n = i.nextNode());

                  )
                    t6("uponSanitizeShadowNode", n, null),
                      t7(n) || (n.content instanceof r && t(n.content), ee(n));
                  t6("afterSanitizeShadowDOM", e, null);
                };
              return (
                (n.sanitize = function (t, o) {
                  var a = void 0,
                    s = void 0,
                    l = void 0,
                    u = void 0,
                    f = void 0;
                  if (
                    ((tJ = !t) && (t = "<!-->"), "string" != typeof t && !t8(t))
                  ) {
                    if ("function" != typeof t.toString)
                      throw x("toString is not a function");
                    if ("string" != typeof (t = t.toString()))
                      throw x("dirty is not a string, aborting");
                  }
                  if (!n.isSupported) {
                    if (
                      "object" === H(e.toStaticHTML) ||
                      "function" == typeof e.toStaticHTML
                    ) {
                      if ("string" == typeof t) return e.toStaticHTML(t);
                      if (t8(t)) return e.toStaticHTML(t.outerHTML);
                    }
                    return t;
                  }
                  if (
                    (tk || tY(o),
                    (n.removed = []),
                    "string" == typeof t && (tL = !1),
                    tL)
                  );
                  else if (t instanceof c)
                    1 ===
                      (s = (a = t4("<!---->")).ownerDocument.importNode(t, !0))
                        .nodeType && "BODY" === s.nodeName
                      ? (a = s)
                      : "HTML" === s.nodeName
                      ? (a = s)
                      : a.appendChild(s);
                  else {
                    if (!tE && !tT && !tA && -1 === t.indexOf("<"))
                      return ti && tI ? ti.createHTML(t) : t;
                    if (!(a = t4(t))) return tE ? null : to;
                  }
                  a && tD && t3(a.firstChild);
                  for (var d = t5(tL ? t : a); (l = d.nextNode()); )
                    (3 === l.nodeType && l === u) ||
                      t7(l) ||
                      (l.content instanceof r && en(l.content), ee(l), (u = l));
                  if (((u = null), tL)) return t;
                  if (tE) {
                    if (tO)
                      for (f = tc.call(a.ownerDocument); a.firstChild; )
                        f.appendChild(a.firstChild);
                    else f = a;
                    return t_ && (f = tu.call(i, f, !0)), f;
                  }
                  var p = tA ? a.outerHTML : a.innerHTML;
                  return (
                    tT && ((p = v(p, R, " ")), (p = v(p, M, " "))),
                    ti && tI ? ti.createHTML(p) : p
                  );
                }),
                (n.setConfig = function (t) {
                  tY(t), (tk = !0);
                }),
                (n.clearConfig = function () {
                  (tX = null), (tk = !1);
                }),
                (n.isValidAttribute = function (t, e, n) {
                  return tX || tY({}), et(t$(t), t$(e), n);
                }),
                (n.addHook = function (t, e) {
                  "function" == typeof e &&
                    ((td[t] = td[t] || []), m(td[t], e));
                }),
                (n.removeHook = function (t) {
                  td[t] && p(td[t]);
                }),
                (n.removeHooks = function (t) {
                  td[t] && (td[t] = []);
                }),
                (n.removeAllHooks = function () {
                  td = {};
                }),
                n
              );
            })();
          }),
            (t.exports = e());
        },
        12409: function (t, e, n) {
          var i;
          !(function () {
            function o(t, e, n) {
              return t.call.apply(t.bind, arguments);
            }
            function r(t, e, n) {
              if (!t) throw Error();
              if (2 < arguments.length) {
                var i = Array.prototype.slice.call(arguments, 2);
                return function () {
                  var n = Array.prototype.slice.call(arguments);
                  return Array.prototype.unshift.apply(n, i), t.apply(e, n);
                };
              }
              return function () {
                return t.apply(e, arguments);
              };
            }
            function a(t, e, n) {
              return (a =
                Function.prototype.bind &&
                -1 != Function.prototype.bind.toString().indexOf("native code")
                  ? o
                  : r).apply(null, arguments);
            }
            var s =
              Date.now ||
              function () {
                return +new Date();
              };
            function c(t, e) {
              (this.a = t), (this.o = e || t), (this.c = this.o.document);
            }
            var l = !!window.FontFace;
            function u(t, e, n, i) {
              if (((e = t.c.createElement(e)), n))
                for (var o in n)
                  n.hasOwnProperty(o) &&
                    ("style" == o
                      ? (e.style.cssText = n[o])
                      : e.setAttribute(o, n[o]));
              return i && e.appendChild(t.c.createTextNode(i)), e;
            }
            function f(t, e, n) {
              (t = t.c.getElementsByTagName(e)[0]) ||
                (t = document.documentElement),
                t.insertBefore(n, t.lastChild);
            }
            function d(t) {
              t.parentNode && t.parentNode.removeChild(t);
            }
            function p(t, e, n) {
              (e = e || []), (n = n || []);
              for (
                var i = t.className.split(/\s+/), o = 0;
                o < e.length;
                o += 1
              ) {
                for (var r = !1, a = 0; a < i.length; a += 1)
                  if (e[o] === i[a]) {
                    r = !0;
                    break;
                  }
                r || i.push(e[o]);
              }
              for (o = 0, e = []; o < i.length; o += 1) {
                for (a = 0, r = !1; a < n.length; a += 1)
                  if (i[o] === n[a]) {
                    r = !0;
                    break;
                  }
                r || e.push(i[o]);
              }
              t.className = e
                .join(" ")
                .replace(/\s+/g, " ")
                .replace(/^\s+|\s+$/, "");
            }
            function m(t, e) {
              for (
                var n = t.className.split(/\s+/), i = 0, o = n.length;
                i < o;
                i++
              )
                if (n[i] == e) return !0;
              return !1;
            }
            function h(t, e, n) {
              function i() {
                s && o && r && (s(a), (s = null));
              }
              e = u(t, "link", { rel: "stylesheet", href: e, media: "all" });
              var o = !1,
                r = !0,
                a = null,
                s = n || null;
              l
                ? ((e.onload = function () {
                    (o = !0), i();
                  }),
                  (e.onerror = function () {
                    (o = !0), (a = Error("Stylesheet failed to load")), i();
                  }))
                : setTimeout(function () {
                    (o = !0), i();
                  }, 0),
                f(t, "head", e);
            }
            function g(t, e, n, i) {
              var o = t.c.getElementsByTagName("head")[0];
              if (o) {
                var r = u(t, "script", { src: e }),
                  a = !1;
                return (
                  (r.onload = r.onreadystatechange =
                    function () {
                      a ||
                        (this.readyState &&
                          "loaded" != this.readyState &&
                          "complete" != this.readyState) ||
                        ((a = !0),
                        n && n(null),
                        (r.onload = r.onreadystatechange = null),
                        "HEAD" == r.parentNode.tagName && o.removeChild(r));
                    }),
                  o.appendChild(r),
                  setTimeout(function () {
                    a || ((a = !0), n && n(Error("Script load timeout")));
                  }, i || 5e3),
                  r
                );
              }
              return null;
            }
            function v() {
              (this.a = 0), (this.c = null);
            }
            function y(t) {
              return (
                t.a++,
                function () {
                  t.a--, b(t);
                }
              );
            }
            function b(t) {
              0 == t.a && t.c && (t.c(), (t.c = null));
            }
            function w(t) {
              this.a = t || "-";
            }
            function x(t, e) {
              (this.c = t), (this.f = 4), (this.a = "n");
              var n = (e || "n4").match(/^([nio])([1-9])$/i);
              n && ((this.a = n[1]), (this.f = parseInt(n[2], 10)));
            }
            function S(t) {
              var e = [];
              t = t.split(/,\s*/);
              for (var n = 0; n < t.length; n++) {
                var i = t[n].replace(/['"]/g, "");
                -1 != i.indexOf(" ") || /^\d/.test(i)
                  ? e.push("'" + i + "'")
                  : e.push(i);
              }
              return e.join(",");
            }
            function T(t) {
              return t.a + t.f;
            }
            function A(t) {
              var e = "normal";
              return (
                "o" === t.a ? (e = "oblique") : "i" === t.a && (e = "italic"), e
              );
            }
            function k(t, e) {
              (this.c = t),
                (this.f = t.o.document.documentElement),
                (this.h = e),
                (this.a = new w("-")),
                (this.j = !1 !== e.events),
                (this.g = !1 !== e.classes);
            }
            function D(t) {
              if (t.g) {
                var e = m(t.f, t.a.c("wf", "active")),
                  n = [],
                  i = [t.a.c("wf", "loading")];
                e || n.push(t.a.c("wf", "inactive")), p(t.f, n, i);
              }
              E(t, "inactive");
            }
            function E(t, e, n) {
              t.j && t.h[e] && (n ? t.h[e](n.c, T(n)) : t.h[e]());
            }
            function O() {
              this.c = {};
            }
            function _(t, e) {
              (this.c = t),
                (this.f = e),
                (this.a = u(this.c, "span", { "aria-hidden": "true" }, this.f));
            }
            function I(t) {
              f(t.c, "body", t.a);
            }
            function N(t) {
              return (
                "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" +
                S(t.c) +
                ";" +
                ("font-style:" + A(t) + ";font-weight:") +
                t.f +
                "00;"
              );
            }
            function C(t, e, n, i, o, r) {
              (this.g = t),
                (this.j = e),
                (this.a = i),
                (this.c = n),
                (this.f = o || 3e3),
                (this.h = r || void 0);
            }
            function L(t, e, n, i, o, r, a) {
              (this.v = t),
                (this.B = e),
                (this.c = n),
                (this.a = i),
                (this.s = a || "BESbswy"),
                (this.f = {}),
                (this.w = o || 3e3),
                (this.u = r || null),
                (this.m = this.j = this.h = this.g = null),
                (this.g = new _(this.c, this.s)),
                (this.h = new _(this.c, this.s)),
                (this.j = new _(this.c, this.s)),
                (this.m = new _(this.c, this.s)),
                (t = N((t = new x(this.a.c + ",serif", T(this.a))))),
                (this.g.a.style.cssText = t),
                (t = N((t = new x(this.a.c + ",sans-serif", T(this.a))))),
                (this.h.a.style.cssText = t),
                (t = N((t = new x("serif", T(this.a))))),
                (this.j.a.style.cssText = t),
                (t = N((t = new x("sans-serif", T(this.a))))),
                (this.m.a.style.cssText = t),
                I(this.g),
                I(this.h),
                I(this.j),
                I(this.m);
            }
            (w.prototype.c = function (t) {
              for (var e = [], n = 0; n < arguments.length; n++)
                e.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
              return e.join(this.a);
            }),
              (C.prototype.start = function () {
                var t = this.c.o.document,
                  e = this,
                  n = s(),
                  i = new Promise(function (i, o) {
                    !(function r() {
                      var a;
                      s() - n >= e.f
                        ? o()
                        : t.fonts
                            .load(
                              A((a = e.a)) + " " + a.f + "00 300px " + S(a.c),
                              e.h
                            )
                            .then(
                              function (t) {
                                1 <= t.length ? i() : setTimeout(r, 25);
                              },
                              function () {
                                o();
                              }
                            );
                    })();
                  }),
                  o = null;
                Promise.race([
                  new Promise(function (t, n) {
                    o = setTimeout(n, e.f);
                  }),
                  i,
                ]).then(
                  function () {
                    o && (clearTimeout(o), (o = null)), e.g(e.a);
                  },
                  function () {
                    e.j(e.a);
                  }
                );
              });
            var j = { D: "serif", C: "sans-serif" },
              q = null;
            function F() {
              if (null === q) {
                var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                  window.navigator.userAgent
                );
                q =
                  !!t &&
                  (536 > parseInt(t[1], 10) ||
                    (536 === parseInt(t[1], 10) && 11 >= parseInt(t[2], 10)));
              }
              return q;
            }
            function R(t, e, n) {
              for (var i in j)
                if (j.hasOwnProperty(i) && e === t.f[j[i]] && n === t.f[j[i]])
                  return !0;
              return !1;
            }
            function M(t, e) {
              setTimeout(
                a(function () {
                  d(this.g.a), d(this.h.a), d(this.j.a), d(this.m.a), e(this.a);
                }, t),
                0
              );
            }
            function W(t, e, n) {
              (this.c = t),
                (this.a = e),
                (this.f = 0),
                (this.m = this.j = !1),
                (this.s = n);
            }
            L.prototype.start = function () {
              (this.f.serif = this.j.a.offsetWidth),
                (this.f["sans-serif"] = this.m.a.offsetWidth),
                (this.A = s()),
                (function t(e) {
                  var n,
                    i = e.g.a.offsetWidth,
                    o = e.h.a.offsetWidth;
                  (n = i === e.f.serif && o === e.f["sans-serif"]) ||
                    (n = F() && R(e, i, o)),
                    n
                      ? s() - e.A >= e.w
                        ? F() &&
                          R(e, i, o) &&
                          (null === e.u || e.u.hasOwnProperty(e.a.c))
                          ? M(e, e.v)
                          : M(e, e.B)
                        : setTimeout(
                            a(function () {
                              t(this);
                            }, e),
                            50
                          )
                      : M(e, e.v);
                })(this);
            };
            var U = null;
            function P(t) {
              0 == --t.f &&
                t.j &&
                (t.m
                  ? ((t = t.a).g &&
                      p(
                        t.f,
                        [t.a.c("wf", "active")],
                        [t.a.c("wf", "loading"), t.a.c("wf", "inactive")]
                      ),
                    E(t, "active"))
                  : D(t.a));
            }
            function z(t) {
              (this.j = t),
                (this.a = new O()),
                (this.h = 0),
                (this.f = this.g = !0);
            }
            function B(t, e) {
              (this.c = t), (this.a = e);
            }
            function H(t, e) {
              (this.c = t), (this.a = e);
            }
            function J(t, e) {
              t ? (this.c = t) : (this.c = V),
                (this.a = []),
                (this.f = []),
                (this.g = e || "");
            }
            (W.prototype.g = function (t) {
              var e = this.a;
              e.g &&
                p(
                  e.f,
                  [e.a.c("wf", t.c, T(t).toString(), "active")],
                  [
                    e.a.c("wf", t.c, T(t).toString(), "loading"),
                    e.a.c("wf", t.c, T(t).toString(), "inactive"),
                  ]
                ),
                E(e, "fontactive", t),
                (this.m = !0),
                P(this);
            }),
              (W.prototype.h = function (t) {
                var e = this.a;
                if (e.g) {
                  var n = m(e.f, e.a.c("wf", t.c, T(t).toString(), "active")),
                    i = [],
                    o = [e.a.c("wf", t.c, T(t).toString(), "loading")];
                  n || i.push(e.a.c("wf", t.c, T(t).toString(), "inactive")),
                    p(e.f, i, o);
                }
                E(e, "fontinactive", t), P(this);
              }),
              (z.prototype.load = function (t) {
                (this.c = new c(this.j, t.context || this.j)),
                  (this.g = !1 !== t.events),
                  (this.f = !1 !== t.classes),
                  (function (t, e, n) {
                    var i,
                      o = [],
                      r = n.timeout;
                    (i = e).g && p(i.f, [i.a.c("wf", "loading")]),
                      E(i, "loading");
                    var o = (function (t, e, n) {
                        var i,
                          o = [];
                        for (i in e)
                          if (e.hasOwnProperty(i)) {
                            var r = t.c[i];
                            r && o.push(r(e[i], n));
                          }
                        return o;
                      })(t.a, n, t.c),
                      s = new W(t.c, e, r);
                    for (t.h = o.length, e = 0, n = o.length; e < n; e++)
                      o[e].load(function (e, n, i) {
                        !(function (t, e, n, i, o) {
                          var r = 0 == --t.h;
                          (t.f || t.g) &&
                            setTimeout(function () {
                              var t = o || null,
                                s = i || {};
                              if (0 === n.length && r) D(e.a);
                              else {
                                (e.f += n.length), r && (e.j = r);
                                var c,
                                  l = [];
                                for (c = 0; c < n.length; c++) {
                                  var u = n[c],
                                    f = s[u.c],
                                    d = e.a,
                                    m = u;
                                  if (
                                    (d.g &&
                                      p(d.f, [
                                        d.a.c(
                                          "wf",
                                          m.c,
                                          T(m).toString(),
                                          "loading"
                                        ),
                                      ]),
                                    E(d, "fontloading", m),
                                    (d = null),
                                    null === U)
                                  ) {
                                    if (window.FontFace) {
                                      var m = /Gecko.*Firefox\/(\d+)/.exec(
                                          window.navigator.userAgent
                                        ),
                                        h =
                                          /OS X.*Version\/10\..*Safari/.exec(
                                            window.navigator.userAgent
                                          ) &&
                                          /Apple/.exec(window.navigator.vendor);
                                      U = m ? 42 < parseInt(m[1], 10) : !h;
                                    } else U = !1;
                                  }
                                  (d = U
                                    ? new C(
                                        a(e.g, e),
                                        a(e.h, e),
                                        e.c,
                                        u,
                                        e.s,
                                        f
                                      )
                                    : new L(
                                        a(e.g, e),
                                        a(e.h, e),
                                        e.c,
                                        u,
                                        e.s,
                                        t,
                                        f
                                      )),
                                    l.push(d);
                                }
                                for (c = 0; c < l.length; c++) l[c].start();
                              }
                            }, 0);
                        })(t, s, e, n, i);
                      });
                  })(this, new k(this.c, t), t);
              }),
              (B.prototype.load = function (t) {
                var e = this,
                  n = e.a.projectId,
                  i = e.a.version;
                if (n) {
                  var o = e.c.o;
                  g(
                    this.c,
                    (e.a.api || "https://fast.fonts.net/jsapi") +
                      "/" +
                      n +
                      ".js" +
                      (i ? "?v=" + i : ""),
                    function (i) {
                      i
                        ? t([])
                        : ((o["__MonotypeConfiguration__" + n] = function () {
                            return e.a;
                          }),
                          (function e() {
                            if (o["__mti_fntLst" + n]) {
                              var i,
                                r = o["__mti_fntLst" + n](),
                                a = [];
                              if (r)
                                for (var s = 0; s < r.length; s++) {
                                  var c = r[s].fontfamily;
                                  void 0 != r[s].fontStyle &&
                                  void 0 != r[s].fontWeight
                                    ? ((i = r[s].fontStyle + r[s].fontWeight),
                                      a.push(new x(c, i)))
                                    : a.push(new x(c));
                                }
                              t(a);
                            } else
                              setTimeout(function () {
                                e();
                              }, 50);
                          })());
                    }
                  ).id = "__MonotypeAPIScript__" + n;
                } else t([]);
              }),
              (H.prototype.load = function (t) {
                var e,
                  n,
                  i,
                  o = this.a.urls || [],
                  r = this.a.families || [],
                  a = this.a.testStrings || {},
                  s = new v();
                for (n = 0, i = o.length; n < i; n++) h(this.c, o[n], y(s));
                var c = [];
                for (n = 0, i = r.length; n < i; n++)
                  if ((o = r[n].split(":"))[1])
                    for (var l = o[1].split(","), u = 0; u < l.length; u += 1)
                      c.push(new x(o[0], l[u]));
                  else c.push(new x(o[0]));
                (e = function () {
                  t(c, a);
                }),
                  (s.c = e),
                  b(s);
              });
            var V = "https://fonts.googleapis.com/css";
            function G(t) {
              (this.f = t), (this.a = []), (this.c = {});
            }
            var $ = {
                latin: "BESbswy",
                "latin-ext": "\xe7\xf6\xfcğş",
                cyrillic: "йяЖ",
                greek: "αβΣ",
                khmer: "កខគ",
                Hanuman: "កខគ",
              },
              X = {
                thin: "1",
                extralight: "2",
                "extra-light": "2",
                ultralight: "2",
                "ultra-light": "2",
                light: "3",
                regular: "4",
                book: "4",
                medium: "5",
                "semi-bold": "6",
                semibold: "6",
                "demi-bold": "6",
                demibold: "6",
                bold: "7",
                "extra-bold": "8",
                extrabold: "8",
                "ultra-bold": "8",
                ultrabold: "8",
                black: "9",
                heavy: "9",
                l: "3",
                r: "4",
                b: "7",
              },
              K = { i: "i", italic: "i", n: "n", normal: "n" },
              Y =
                /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
            function Q(t, e) {
              (this.c = t), (this.a = e);
            }
            var Z = { Arimo: !0, Cousine: !0, Tinos: !0 };
            function tt(t, e) {
              (this.c = t), (this.a = e);
            }
            function te(t, e) {
              (this.c = t), (this.f = e), (this.a = []);
            }
            (Q.prototype.load = function (t) {
              var e,
                n = new v(),
                i = this.c,
                o = new J(this.a.api, this.a.text),
                r = this.a.families;
              !(function (t, e) {
                for (var n = e.length, i = 0; i < n; i++) {
                  var o = e[i].split(":");
                  3 == o.length && t.f.push(o.pop());
                  var r = "";
                  2 == o.length && "" != o[1] && (r = ":"), t.a.push(o.join(r));
                }
              })(o, r);
              var a = new G(r);
              (function (t) {
                for (var e = t.f.length, n = 0; n < e; n++) {
                  var i = t.f[n].split(":"),
                    o = i[0].replace(/\+/g, " "),
                    r = ["n4"];
                  if (2 <= i.length) {
                    var a,
                      s,
                      c = i[1];
                    if (((a = []), c))
                      for (
                        var c = c.split(","), l = c.length, u = 0;
                        u < l;
                        u++
                      ) {
                        if ((s = c[u]).match(/^[\w-]+$/)) {
                          var f = Y.exec(s.toLowerCase());
                          if (null == f) s = "";
                          else {
                            if (
                              ((s = null == (s = f[2]) || "" == s ? "n" : K[s]),
                              null == (f = f[1]) || "" == f)
                            )
                              f = "4";
                            else
                              var d = X[f],
                                f = d || (isNaN(f) ? "4" : f.substr(0, 1));
                            s = [s, f].join("");
                          }
                        } else s = "";
                        s && a.push(s);
                      }
                    0 < a.length && (r = a),
                      3 == i.length &&
                        ((i = i[2]),
                        (a = []),
                        0 < (i = i ? i.split(",") : a).length &&
                          (i = $[i[0]]) &&
                          (t.c[o] = i));
                  }
                  for (
                    t.c[o] || ((i = $[o]) && (t.c[o] = i)), i = 0;
                    i < r.length;
                    i += 1
                  )
                    t.a.push(new x(o, r[i]));
                }
              })(a),
                h(
                  i,
                  (function (t) {
                    if (0 == t.a.length) throw Error("No fonts to load!");
                    if (-1 != t.c.indexOf("kit=")) return t.c;
                    for (var e = t.a.length, n = [], i = 0; i < e; i++)
                      n.push(t.a[i].replace(/ /g, "+"));
                    return (
                      (e = t.c + "?family=" + n.join("%7C")),
                      0 < t.f.length && (e += "&subset=" + t.f.join(",")),
                      0 < t.g.length &&
                        (e += "&text=" + encodeURIComponent(t.g)),
                      e
                    );
                  })(o),
                  y(n)
                ),
                (e = function () {
                  t(a.a, a.c, Z);
                }),
                (n.c = e),
                b(n);
            }),
              (tt.prototype.load = function (t) {
                var e = this.a.id,
                  n = this.c.o;
                e
                  ? g(
                      this.c,
                      (this.a.api || "https://use.typekit.net") +
                        "/" +
                        e +
                        ".js",
                      function (e) {
                        if (e) t([]);
                        else if (
                          n.Typekit &&
                          n.Typekit.config &&
                          n.Typekit.config.fn
                        ) {
                          e = n.Typekit.config.fn;
                          for (var i = [], o = 0; o < e.length; o += 2)
                            for (
                              var r = e[o], a = e[o + 1], s = 0;
                              s < a.length;
                              s++
                            )
                              i.push(new x(r, a[s]));
                          try {
                            n.Typekit.load({
                              events: !1,
                              classes: !1,
                              async: !0,
                            });
                          } catch (t) {}
                          t(i);
                        }
                      },
                      2e3
                    )
                  : t([]);
              }),
              (te.prototype.load = function (t) {
                var e,
                  n = this.f.id,
                  i = this.c.o,
                  o = this;
                n
                  ? (i.__webfontfontdeckmodule__ ||
                      (i.__webfontfontdeckmodule__ = {}),
                    (i.__webfontfontdeckmodule__[n] = function (e, n) {
                      for (var i = 0, r = n.fonts.length; i < r; ++i) {
                        var a = n.fonts[i];
                        o.a.push(
                          new x(
                            a.name,
                            (function (t) {
                              var e = 4,
                                n = "n",
                                i = null;
                              return (
                                t &&
                                  ((i = t.match(/(normal|oblique|italic)/i)) &&
                                    i[1] &&
                                    (n = i[1].substr(0, 1).toLowerCase()),
                                  (i = t.match(/([1-9]00|normal|bold)/i)) &&
                                    i[1] &&
                                    (/bold/i.test(i[1])
                                      ? (e = 7)
                                      : /[1-9]00/.test(i[1]) &&
                                        (e = parseInt(i[1].substr(0, 1), 10)))),
                                n + e
                              );
                            })(
                              "font-weight:" +
                                a.weight +
                                ";font-style:" +
                                a.style
                            )
                          )
                        );
                      }
                      t(o.a);
                    }),
                    g(
                      this.c,
                      (this.f.api || "https://f.fontdeck.com/s/css/js/") +
                        ((e = this.c).o.location.hostname ||
                          e.a.location.hostname) +
                        "/" +
                        n +
                        ".js",
                      function (e) {
                        e && t([]);
                      }
                    ))
                  : t([]);
              });
            var tn = new z(window);
            (tn.a.c.custom = function (t, e) {
              return new H(e, t);
            }),
              (tn.a.c.fontdeck = function (t, e) {
                return new te(e, t);
              }),
              (tn.a.c.monotype = function (t, e) {
                return new B(e, t);
              }),
              (tn.a.c.typekit = function (t, e) {
                return new tt(e, t);
              }),
              (tn.a.c.google = function (t, e) {
                return new Q(e, t);
              });
            var ti = { load: a(tn.load, tn) };
            void 0 !==
              (i = function () {
                return ti;
              }.call(e, n, e, t)) && (t.exports = i);
          })();
        },
      },
      e = {};
    function n(i) {
      var o = e[i];
      if (void 0 !== o) return o.exports;
      var r = (e[i] = { exports: {} });
      return t[i].call(r.exports, r, r.exports, n), r.exports;
    }
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, { a: e }), e;
    }),
      (n.d = function (t, e) {
        for (var i in e)
          n.o(e, i) &&
            !n.o(t, i) &&
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      });
    var i = {};
    return (
      !(function () {
        "use strict";
        function t(t) {
          return t && "undefined" != typeof Symbol && t.constructor === Symbol
            ? "symbol"
            : typeof t;
        }
        n.d(i, {
          default: function () {
            return f;
          },
        });
        var e,
          o = n(12409),
          r = n.n(o),
          a = n(46513),
          s = n.n(a);
        !(function () {
          if (
            (void 0 === window.getIframeWindow &&
              (window.getIframeWindow = function (t) {
                var e;
                return t.contentWindow
                  ? t.contentWindow
                  : t.window
                  ? t.window
                  : (!e && t.contentDocument && (e = t.contentDocument),
                    !e && t.document && (e = t.document),
                    e && e.defaultView)
                  ? e.defaultView
                  : e && e.parentWindow
                  ? e.parentWindow
                  : void 0;
              }),
            void 0 === window.XD)
          ) {
            var t, e, n, i;
            window.XD =
              ((i = 1),
              {
                postMessage: function (t, e, n) {
                  if (e) {
                    var o = n || window.parent;
                    if (window.postMessage) {
                      var r = e.replace(/([^:]+:\/\/[^/]+).*/, "$1");
                      if (
                        ("postMessage" in o || (o = window.getIframeWindow(o)),
                        !o)
                      )
                        return;
                      0 === r.indexOf("file://") && (r = "*"),
                        o.postMessage(t, r);
                    } else
                      e &&
                        (o.location = ""
                          .concat(e.replace(/#.*$/, ""), "#")
                          .concat(+new Date())
                          .concat(i++, "&")
                          .concat(t));
                  }
                },
                receiveMessage: function (i, o) {
                  window.postMessage
                    ? (i &&
                        (n = function (t) {
                          var e = window.location.search.split("?").join("");
                          if (
                            !(
                              e.indexOf("offline_forms=true") > -1 ||
                              e.indexOf("offline_forms=si") > -1
                            ) &&
                            (("string" == typeof o && t.origin !== o) ||
                              ("[object Function]" ===
                                Object.prototype.toString.call(o) &&
                                !1 === o(t.origin)))
                          )
                            return !1;
                          i(t);
                        }),
                      window.addEventListener
                        ? window[
                            i ? "addEventListener" : "removeEventListener"
                          ]("message", n, !1)
                        : window[i ? "attachEvent" : "detachEvent"](
                            "onmessage",
                            n
                          ))
                    : (t && clearInterval(t),
                      (t = null),
                      i &&
                        (t = setInterval(function () {
                          var t = document.location.hash,
                            n = /^#?\d+&/;
                          t !== e &&
                            n.test(t) &&
                            ((e = t), i({ data: t.replace(n, "") }));
                        }, 100)));
                },
              });
          }
        })();
        var c = (e = (function () {
            var n,
              i = -1,
              o = {},
              a = !1,
              c = !1,
              l = !1,
              u = {},
              f = !1,
              d = {
                callback: !1,
                list: [],
                options: { parallel: !1, onLoad: function () {} },
              };
            function p(t, e) {
              null === e && (e = ""),
                (t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"));
              var n = new RegExp("[\\?&]".concat(t, "=([^&#]*)")).exec(
                window.location.href
              );
              return null === n ? e : decodeURIComponent(n[1]);
            }
            var m = { texts: {}, formID: -1, questionID: p("qid") },
              h = p("ref"),
              g = decodeURIComponent(h);
            if ((!h || void 0 === h) && void 0 === p("qid")) {
              var v = document.location.hash.replace(/^#/, ""),
                y = v.lastIndexOf("/");
              (g = decodeURIComponent(v.substr(0, y))),
                (m.questionID = Number(v.substr(y + 1)));
            }
            function b(t, e) {
              "submit" === t && void 0 !== o[t] && o[t].pop(),
                o[t] || (o[t] = []);
              var n = (++i).toString();
              return o[t].push({ func: e, token: n }), n;
            }
            function w(t, e) {
              if (~t.indexOf(" ")) {
                for (var n = t.split(" "), i = [], o = 0; o < n.length; o++) {
                  var r = b(n[o], e);
                  i.push(r);
                }
                return i;
              }
              return b(t, e);
            }
            function x(t) {
              for (var e in o)
                for (var n = o[e], i = 0; i < n.length; i++)
                  if (t === n[i].token) return n.splice(i, 1), t;
              return m;
            }
            function S(t) {
              (t.type = "size"), (t.qid = m.questionID), E(t);
            }
            function T(t, e) {
              E({
                type: "fields:fill",
                fields: t,
                qid: m.questionID,
                identifier: e || "",
              });
            }
            function A(t, e, n) {
              var i = O();
              E({
                fields: t,
                type: "fields:capture",
                eventID: i,
                identifier: e,
                qid: m.questionID,
              }),
                w("event:emitter:".concat(i), n);
            }
            function k(t) {
              if (
                ("string" == typeof t && (t = [t]),
                "[object Array]" !== Object.prototype.toString.call(t) &&
                  (t = []),
                t.length > 0)
              )
                for (var e = 0; e < t.length; e++) d.list.push(t[e]);
            }
            function D() {
              return u && "cardform" in u && !0 === u.cardform;
            }
            function E(t) {
              window.XD.postMessage(JSON.stringify(t), g, parent);
            }
            function O(t, e) {
              void 0 === t && (t = "");
              var n,
                i = function (t, e) {
                  return e < (t = parseInt(t, 10).toString(16)).length
                    ? t.slice(t.length - e)
                    : e > t.length
                    ? Array(1 + (e - t.length)).join("0") + t
                    : t;
                };
              return (
                window.php_js || (window.php_js = {}),
                window.php_js.uniqidSeed ||
                  (window.php_js.uniqidSeed = Math.floor(
                    123456789 * Math.random()
                  )),
                window.php_js.uniqidSeed++,
                (n =
                  t +
                  i(parseInt(new Date().getTime() / 1e3, 10), 8) +
                  i(window.php_js.uniqidSeed, 5)),
                e && (n += (10 * Math.random()).toFixed(8).toString()),
                n
              );
            }
            function _() {
              var t,
                e = {},
                n = window.location.search.substring(1);
              if (n) {
                var i = n.split("&");
                for (t = 0; t < i.length; t++) {
                  var o = i[t].split("=");
                  e[o[0]] = decodeURIComponent(o[1]);
                }
              }
              return e;
            }
            function I(t, e) {
              if (!c) return p(t, e);
              if ((null === e && (e = ""), null === t)) return e;
              var n = N();
              return s().sanitize(n[t]);
            }
            function N() {
              if (!c) return _();
              for (
                var t = JSON.parse(decodeURIComponent(c)), e = {}, n = 0;
                n < t.length;
                n++
              ) {
                var i = t[n],
                  o = JFCustomWidgetUtils.isJsonString(i.value)
                    ? JSON.parse(i.value)
                    : i.value;
                e[i.name] =
                  "string" == typeof o
                    ? s().sanitize(o, { ADD_ATTR: ["target"] })
                    : o;
              }
              var r = _();
              for (var a in r) e[a] = r[a];
              return e;
            }
            function C() {
              try {
                var t = "ndt=",
                  e = document.body.getAttribute("data-type"),
                  n = document.location.search.indexOf("injectCSS=true"),
                  i = new URLSearchParams(window.location.search).get(
                    "offline_forms"
                  );
                (document.referrer.indexOf(t) > -1 ||
                  n > -1 ||
                  (e &&
                    [
                      "smooth-signature",
                      "terms-conditions",
                      "take-photo",
                      "multiple-text-fields",
                      "image-slider",
                      "date-picker",
                      "checklist",
                      "dynamic-textbox",
                      "terms-scroll-widget",
                      "image-preview",
                      "configurable-list",
                      "asm-select",
                    ].indexOf(e) > -1)) &&
                  (function () {
                    var t = !!document.getElementById(
                      "new_default_theme_custom_css"
                    );
                    if (
                      (document.querySelector("body") &&
                        document
                          .querySelector("body")
                          .setAttribute("data-theme", "upcoming"),
                      !t)
                    ) {
                      var e = new Date().getTime(),
                        n = ""
                          .concat(
                            i ? "." : "https://cdn.jotfor.ms",
                            "/themes/CSS/defaultV2.css?v="
                          )
                          .concat(e);
                      if (document.referrer.indexOf(".jotform.pro") > -1) {
                        var o = document.referrer
                          .split(".jotform.pro")[0]
                          .split("://")[1];
                        n = ""
                          .concat(
                            i ? "." : "https://".concat(o, ".jotform.pro"),
                            "/themes/CSS/defaultV2.css?v="
                          )
                          .concat(e);
                      }
                      JFCustomWidgetUtils.loadCSS(
                        n,
                        function () {
                          m.publish("loadNewDefaultThemeCss"),
                            console.log(
                              "New Default Theme custom CSS injected"
                            );
                        },
                        "new_default_theme_custom_css"
                      );
                    }
                  })(),
                  document.referrer.indexOf(t) > -1 &&
                    e &&
                    ["image-preview"].indexOf(e) > -1 &&
                    document.querySelector("body") &&
                    document
                      .querySelector("body")
                      .setAttribute("data-env", "test");
              } catch (t) {
                console.log("NewDefaultTheme Inject Css: ERROR, ", t);
              }
            }
            function L(t) {
              if (
                [
                  "Arial",
                  "Arial Black",
                  "Courier",
                  "Courier New",
                  "Comic Sans MS",
                  "Gill Sans",
                  "Helvetica",
                  "Lucida",
                  "Lucida Grande",
                  "Trebuchet MS",
                  "Tahoma",
                  "Times New Roman",
                  "Verdana",
                  "Calibri",
                ].indexOf(
                  (t = (t = t.replace(/\'|\"|(\,\s*sans-serif)/gi, "")).split(
                    ","
                  )[0])
                ) >= 0
              )
                (document.body.style.fontFamily = '"'.concat(
                  t,
                  '", sans-serif'
                )),
                  m.publish("customfont:active", t),
                  m.publish("customfont", t);
              else {
                document.body.style.fontFamily = '"'.concat(t, '", sans-serif');
                var e = "https://cdn.jotfor.ms/fonts/?family=".concat(t);
                r().load({
                  custom: { urls: [e], families: [t] },
                  active: function () {
                    m.publish("customfont:active", t),
                      m.publish("customfont", t);
                  },
                });
              }
            }
            function j() {
              var t = !1;
              return "onWizard" in u && (t = u.onWizard), t;
            }
            return (
              window.XD.receiveMessage(function (e) {
                if (
                  !(
                    "data" in e &&
                    e.data &&
                    ("string" != typeof e.data ||
                      ("string" == typeof e.data &&
                        (e.data.indexOf("/*framebus*/") > -1 ||
                          e.data.indexOf("webpackHotUpdate") > -1)))
                  )
                ) {
                  var n = JSON.parse(e.data);
                  switch (n.type) {
                    case "ready":
                      if (a) return !1;
                      n.fontFamily &&
                        n.fontFamily.length > 0 &&
                        L(n.fontFamily),
                        n.enterprise && (f = n.enterprise),
                        n.settings &&
                          !c &&
                          ((c = n.settings), delete n.settings),
                        "origin" in n && ((l = n.origin), delete n.origin),
                        (a = !0),
                        (u = n),
                        ("v2" === n.themeVersion || n.isExtendedTheme) &&
                          !D() &&
                          C(),
                        (function () {
                          var t,
                            e,
                            n =
                              ((t = I("customCSS")),
                              (e = document.createElement("div")),
                              t &&
                                "string" == typeof t &&
                                ((t = escape(t)
                                  .replace(/%26/g, "&")
                                  .replace(/%23/g, "#")
                                  .replace(/%3B/g, ";")),
                                (e.innerHTML = t),
                                e.innerText
                                  ? ((t = e.innerText), (e.innerText = ""))
                                  : ((t = e.textContent),
                                    (e.textContent = ""))),
                              unescape(t));
                          if (n && n.length > 0 && "<empty>" !== n) {
                            var i =
                                document.head ||
                                document.getElementsByTagName("head")[0],
                              o = document.createElement("style");
                            (o.type = "text/css"),
                              o.styleSheet
                                ? (o.styleSheet.cssText = n)
                                : o.appendChild(document.createTextNode(n)),
                              i.appendChild(o);
                          }
                        })(),
                        (function t(e) {
                          if (
                            ("function" == typeof d.callback &&
                              (k(d.callback(N())), (d.callback = !1)),
                            d.list.length > 0)
                          ) {
                            var n =
                              "parallel" in d.options && !!d.options.parallel;
                            if ((n = !!n && d.list.length > 1))
                              for (var i = [], o = 0; o < d.list.length; o++) {
                                var r = d.list[o];
                                JFCustomWidgetUtils.loadJS(r, function (t) {
                                  "function" == typeof d.options.onLoad &&
                                    d.options.onLoad(t),
                                    i.push(t),
                                    i.length === d.list.length && e && e();
                                });
                              }
                            else {
                              var r = d.list.shift();
                              JFCustomWidgetUtils.loadJS(r, function (n) {
                                "function" == typeof d.options.onLoad &&
                                  d.options.onLoad(n),
                                  t(e);
                              });
                            }
                          } else e && e();
                        })(function () {
                          !0 === n.cardform
                            ? (function (e, n, i) {
                                if (e && n)
                                  try {
                                    if (
                                      !document.getElementById(
                                        "cardform_widgets_css"
                                      )
                                    ) {
                                      var o = new Date().getTime(),
                                        r =
                                          "92891840837975" === e
                                            ? "https://aysenur.jotform.pro"
                                            : "https://cdn.jotfor.ms",
                                        a = ""
                                          .concat(r, "/stylebuilder/")
                                          .concat(e, ".widgets.")
                                          .concat(n, ".css?v=")
                                          .concat(o),
                                        s = window.location.search
                                          .split("?")
                                          .join(""),
                                        c =
                                          s.indexOf("offline_forms=true") >
                                            -1 ||
                                          s.indexOf("offline_forms=si") > -1,
                                        l =
                                          window &&
                                          window.location &&
                                          window.location.href &&
                                          0 ===
                                            window.location.href.indexOf(
                                              "file://"
                                            ),
                                        u =
                                          window &&
                                          window.navigator &&
                                          window.navigator.onLine;
                                      c && !u && l
                                        ? setTimeout(function () {
                                            i && i();
                                          }, 0)
                                        : JFCustomWidgetUtils.loadCSS(
                                            a,
                                            function () {
                                              i && i(),
                                                m.publish(
                                                  "cardform:widgetcss:active"
                                                );
                                            },
                                            "cardform_widgets_css"
                                          );
                                    }
                                    var f = "cardFormWidget_".concat(n),
                                      d = "card-form-widget";
                                    "object" === t(document.body.classList) &&
                                    "function" ==
                                      typeof document.body.classList.contains
                                      ? document.body.classList.contains(f) ||
                                        (document.body.classList.add(f),
                                        document.body.classList.add(d))
                                      : "string" ==
                                          typeof documeny.body.className &&
                                        -1 ===
                                          document.body.className.indexOf(f) &&
                                        ((document.body.className += " ".concat(
                                          f
                                        )),
                                        (document.body.className += " ".concat(
                                          d
                                        )));
                                  } catch (t) {
                                    console.error(t);
                                  }
                              })(n.formID, n.widgetID, function () {
                                m.publish("ready", n);
                              })
                            : m.publish("ready", n);
                        });
                      break;
                    case "settings":
                      n.settings && !c && (c = n.settings);
                      break;
                    case "event:receiver":
                      "isWidget" in n && n.isWidget
                        ? m.publish("event:emitter:".concat(n.targetQID), n)
                        : m.publish("event:emitter:".concat(n.eventID), n);
                      break;
                    case "formstrings":
                      "formTexts" in n &&
                        Object.keys(m.texts).length < 1 &&
                        (m.texts = n.formTexts);
                      break;
                    case "widgetclear":
                      m.publish("clear", n);
                      break;
                    case "widgetpopulate":
                      m.publish("populate", n);
                      break;
                    case "widgetshift":
                      m.publish("shift", n);
                      break;
                    case "show":
                      m.publish("show", n);
                      break;
                    case "reload":
                      "reload" in window.location && window.location.reload();
                      break;
                    case "disable":
                      m.publish("disable", n);
                      break;
                    case "submit":
                      var i = !1;
                      "method" in n &&
                        "next" === n.method &&
                        ((i = !0), m.publish("next")),
                        m.publish("submit", i);
                      break;
                    case "save":
                      m.publish("save", n);
                      break;
                    case "style":
                      m.publish("style", n);
                      break;
                    case "frameresize":
                      m.publish("frameresize", n);
                      break;
                    case "translatable":
                      (m.formID = n.formID), m.publish("translatable", n);
                      break;
                    case "translate":
                      m.publish("translate", n);
                      break;
                    case "theme":
                      ("v2" === n.themeVersion || n.isExtendedTheme) &&
                        !D() &&
                        C();
                      break;
                    case "reset":
                      m.publish("reset", n);
                  }
                }
              }, g),
              (m.publish = function () {
                var t = arguments[0],
                  e = [].slice.call(arguments, 1);
                if (!o[t]) return !1;
                for (var n = o[t], i = n ? n.length : 0; i--; ) n[i].func(e[0]);
              }),
              (m.subscribe = w),
              (m.on = w),
              (m.unsubscribe = x),
              (m.off = x),
              (m.sendData = function (t) {
                if (j()) return !1;
                (t.type = "data"), (t.qid = m.questionID), E(t);
              }),
              (m.sendCalcValue = function (t) {
                if (j()) return !1;
                (t.type = "calcvalue"), (t.qid = m.questionID), E(t);
              }),
              (m.sendTranslatables = function (t) {
                j() &&
                  E({
                    type: "translation",
                    qid: m.questionID,
                    formID: m.formID,
                    data: t,
                  });
              }),
              (m.sendSubmit = function (t) {
                if (j()) return !1;
                (t.type = "submit"), (t.qid = m.questionID), E(t);
              }),
              (m.sendDisableOrEnableButtons = function (t) {
                if (j()) return !1;
                (t.qid = m.questionID), E(t);
              }),
              (m.sendSave = function (t) {
                E(t);
              }),
              (m.clearWidgetFields = function () {
                var t = document.querySelectorAll("input"),
                  e = document.querySelectorAll("select");
                t.forEach(function (t) {
                  "radio" === t.type || "checkbox" === t.type
                    ? (t.checked = !1)
                    : "button" !== t.type && (t.value = "");
                }),
                  e.forEach(function (t) {
                    t.selectedIndex = -1;
                  });
              }),
              (m.sendReady = function (t) {
                (t.type = "ready"), E(t);
              }),
              (m.requestFrameResize = S),
              (m.setFrameSize = S),
              (m.setFrameStyles = function (t) {
                E({ type: "styles", qid: m.questionID, styles: t || {} });
              }),
              (m.detectFrameMovement = function (t) {
                var e = O();
                E({ eventID: e, type: "frame:move", qid: m.questionID }),
                  w("event:emitter:".concat(e), t);
              }),
              (m.hideWidgetContainer = function () {
                E({ qid: m.questionID, type: "field:hide" });
              }),
              (m.makeInvisibleWidgetContainer = function () {
                E({ qid: m.questionID, type: "field:invisible" });
              }),
              (m.resetWidgetContainer = function () {
                E({ qid: m.questionID, type: "reset" });
              }),
              (m.showWidgetContainer = function () {
                E({ qid: m.questionID, type: "field:show" });
              }),
              (m.replaceWidget = function (t) {
                E({
                  qid: m.questionID,
                  type: "replace",
                  inputType: t.type,
                  mobile: t.isMobile || !1,
                  required: "required" in t && t.required,
                });
              }),
              (m.getWidgetData = function () {
                return u;
              }),
              (m.getFrameData = function (t) {
                var e = O();
                E({ type: "frame:getdata", eventID: e, qid: m.questionID }),
                  w("event:emitter:".concat(e), t);
              }),
              (m.isFromCardform = D),
              (m.setupLibraries = function (t, e) {
                return (
                  "function" == typeof t ? (d.callback = t) : k(t),
                  void 0 !== e &&
                    (d.options = (function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                          i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                          (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (
                              t
                            ) {
                              return Object.getOwnPropertyDescriptor(n, t)
                                .enumerable;
                            })
                          )),
                          i.forEach(function (e) {
                            var i;
                            (i = n[e]),
                              e in t
                                ? Object.defineProperty(t, e, {
                                    value: i,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                  })
                                : (t[e] = i);
                          });
                      }
                      return t;
                    })({}, d.options, e)),
                  m
                );
              }),
              (m.removeSubmittedFrame = function () {
                E({ type: "submit:frame:remove", qid: m.questionID });
              }),
              (m.showWidgetError = function (t, e) {
                return (
                  E({
                    type: "errors",
                    qid: m.questionID,
                    action: "show",
                    msg: t,
                    resetForm: e || !1,
                  }),
                  m.sendSubmit({ valid: !1, value: "" }),
                  m
                );
              }),
              (m.hideWidgetError = function () {
                return (
                  E({ type: "errors", qid: m.questionID, action: "hide" }), m
                );
              }),
              (m.makeWidgetRequired = function () {
                E({ type: "required", qid: m.questionID, action: "set" });
              }),
              (m.makeWidgetNotRequired = function () {
                E({ type: "required", qid: m.questionID, action: "unset" });
              }),
              (m.listenFromField = function (t, e, n) {
                var i, o, r;
                (i = { field: t, event: e }),
                  (o = function (t) {
                    n && n(t.value);
                  }),
                  (r = O()),
                  (i.eventID = r),
                  (i.type = "event:listener"),
                  (i.qid = m.questionID),
                  E(i),
                  void 0 !== o && w("event:emitter:".concat(r), o);
              }),
              (m.listenFromWidget = function (t, e) {
                void 0 !== e &&
                  w("event:emitter:".concat(m.questionID), function (t) {
                    e(t.value);
                  });
              }),
              (m.storeToField = function (t, e, n) {
                var i = void 0 !== n,
                  o = O();
                if (
                  (E({
                    eventID: o,
                    type: "event:store",
                    field: t,
                    value: e,
                    qid: m.questionID,
                    hasCallback: i,
                  }),
                  i)
                )
                  var r = w("event:emitter:".concat(o), function (t) {
                    n(t.value), x(r);
                  });
              }),
              (m.setFieldsValueByLabel = function (t) {
                T(t, "label");
              }),
              (m.setFieldsValueById = function (t) {
                T(t, "id");
              }),
              (m.clearFields = function (t) {
                E({ type: "fields:clear", fields: t, qid: m.questionID });
              }),
              (m.getFieldsValueById = function (t, e) {
                A(t, "id", e);
              }),
              (m.getFieldsValueByName = function (t, e) {
                A(t, "name", e);
              }),
              (m.getFormTrackerID = function (t) {
                var e = O();
                E({ type: "form:trackerID", eventID: e, qid: m.questionID }),
                  w("event:emitter:".concat(e), t);
              }),
              (m.getQueryString = I),
              (m.getAllQueryString = N),
              (m.getWidgetSetting = I),
              (m.getWidgetSettings = N),
              (m.getParentOrigin = function () {
                return l || "";
              }),
              (m.getEnterprise = function () {
                return f;
              }),
              (m.isWidgetRequired = function () {
                var t = !1;
                return "required" in u && (t = u.required), t;
              }),
              (m.isWidgetStatic = function () {
                return "static" in u && u.static;
              }),
              (m.isWidgetOnBuilder = j),
              (m.isWidgetReady = function () {
                return a;
              }),
              m.subscribe("ready", function (t) {
                document.body.style.background = "transparent";
              }),
              m.subscribe("submit", function () {
                m.sendSubmit({ initial: !0, data: !1, valid: !0 });
              }),
              m.subscribe("save", function () {
                m.sendSave({});
              }),
              m.subscribe("style", function (t) {
                void 0 !== t.font && L(t.font.family);
              }),
              m.subscribe("clear", m.clearWidgetFields),
              (n = function () {
                document.addEventListener(
                  "focus",
                  function (t) {
                    var n = e.getWidgetSettings();
                    parent.postMessage(
                      JSON.stringify({ type: "collapse", qid: n.qid }),
                      "*"
                    );
                  },
                  !0
                );
              }),
              "complete" !== document.readyState &&
              ("loading" === document.readyState ||
                document.documentElement.doScroll)
                ? document.addEventListener("DOMContentLoaded", n)
                : n(),
              m
            );
          })()),
          l = (function () {
            var t = {},
              e = {},
              n = {},
              i = {
                input: ["placeholder", "innerText"],
                button: ["innerText", "title"],
                textarea: ["placeholder", "innerText"],
                option: ["innerText"],
                img: ["title"],
              };
            function o(t, e) {
              var n = {};
              for (var i in e) {
                var o = e[i];
                for (var r in ((n[i] = []), t)) {
                  var a = t[r],
                    s = [];
                  for (var c in a) {
                    var l = a[c];
                    s.push({
                      translation: o[l.text],
                      id: l.id,
                      property: l.property,
                    });
                  }
                  n[i][r] = s;
                }
              }
              return n;
            }
            return (
              (t.translate = function (t) {
                var r = {};
                for (var a in (void 0 !== t && (n = t),
                (r = (function (t) {
                  var n = {},
                    r = {};
                  if (
                    (document
                      .querySelectorAll(".translatable")
                      .forEach(function (t) {
                        var e = i[t.tagName.toLowerCase()],
                          o = "_".concat(
                            Math.random().toString(36).substr(2, 9)
                          ),
                          r = [];
                        if (!1 === t.classList.contains("_uidset")) {
                          if (void 0 !== e)
                            e.forEach(function (e) {
                              var n = t[e];
                              void 0 !== n &&
                                0 !== n.length &&
                                "" !== n &&
                                isNaN(n) &&
                                r.push({ id: o, property: e, text: n });
                            });
                          else if (
                            void 0 !== t.innerText &&
                            0 !== t.innerText.length &&
                            "" !== t.innerText &&
                            isNaN(t.innerText)
                          ) {
                            var a = Array.from(t.children),
                              s =
                                a &&
                                a.length > 0 &&
                                !!a.find(function (t) {
                                  return (
                                    "SPAN" === t.tagName &&
                                    "*" === t.innerText &&
                                    t.classList.contains("required")
                                  );
                                });
                            r.push({
                              id: o,
                              property: "innerText",
                              text: s
                                ? t.innerText.replace(/\n\*/, "")
                                : t.innerText,
                            });
                          }
                          0 !== r.length &&
                            ((n[o] = r),
                            t.classList.add(o),
                            t.classList.add("_uidset"));
                        }
                      }),
                    0 === Object.keys(e).length)
                  )
                    (e = n), (r = o(n, t));
                  else {
                    var a = Object.assign(e, n);
                    (e = a), (r = o(a, t));
                  }
                  return r;
                })(n.dictionary)[n.to]))) {
                  var s = r[a];
                  for (var c in s) {
                    var l = s[c],
                      u = document.querySelector(".".concat(l.id));
                    if (null !== u) {
                      var f = s[c].translation,
                        d = s[c].property;
                      if (void 0 !== f && "" !== f) {
                        var p = !1,
                          m = u.getElementsByClassName("required");
                        m.length > 0 &&
                          ((p = m[0].cloneNode(!0)), m[0].remove()),
                          (u[d] = f),
                          p && u.append(p);
                      }
                    }
                  }
                }
              }),
              (t.getTranslatables = function (t) {
                var e = [];
                return (document
                  .querySelectorAll(".translatable")
                  .forEach(function (t) {
                    var n, o;
                    ((n = []),
                    void 0 !== (o = i[t.tagName.toLowerCase()])
                      ? o.forEach(function (e) {
                          var i = "";
                          switch (e) {
                            case "innerText":
                              i = t.innerText;
                              break;
                            case "placeholder":
                              i = t.placeholder;
                              break;
                            case "title":
                              i = t.title;
                          }
                          isNaN(i) && 0 !== i.length && "" !== i && n.push(i);
                        })
                      : isNaN(t.innerText) &&
                        0 !== t.innerText.length &&
                        "" !== t.innerText &&
                        n.push(t.innerText),
                    n).forEach(function (t) {
                      e.indexOf(t) > -1 || e.push(t);
                    });
                  }),
                t)
                  ? t(e)
                  : e;
              }),
              (t.setDictionary = function (t) {
                n = t;
              }),
              (t.getDictionary = function () {
                return n;
              }),
              (t.getTranslation = function (t, e, n) {
                if (void 0 === t || void 0 === e) return !1;
                var i = t.dictionary[void 0 !== n ? n : "en"];
                try {
                  return i[e];
                } catch (t) {
                  return !1;
                }
              }),
              t
            );
          })(),
          u = (function () {
            var e,
              n = {},
              i = "widget_metadata";
            function o(t) {
              if (void 0 !== t && ~t.indexOf("/jotformWidgets/")) {
                var e = t.split("/jotformWidgets/");
                t = "/widget-uploads/".concat(e[1]);
              }
              return t;
            }
            function r() {
              var t = navigator.userAgent.toLowerCase().match(/chrome|crios/),
                e = navigator.userAgent.toLowerCase().match(/firefox|fxios/);
              return (
                navigator.userAgent.toLowerCase().indexOf("safari") > -1 &&
                !t &&
                !e
              );
            }
            function a() {
              return navigator.userAgent.toLowerCase().match(/firefox|fxios/);
            }
            function s(e) {
              try {
                var n = JSON.parse(e);
                if (
                  n &&
                  (void 0 === n ? "undefined" : t(n)) === "object" &&
                  null !== n
                )
                  return !0;
              } catch (t) {}
              return !1;
            }
            function c(t) {
              return Object.prototype.toString
                .call(t)
                .replace(/^\[object (\w+)\]$/, "$1");
            }
            function l(t, n) {
              var i = 5e3;
              "function" == typeof t
                ? ((i = !1), (n = t))
                : "number" == typeof t && (i = t),
                e && window.cancelAnimationFrame(e);
              var o = function () {
                n && n(), (e = window.requestAnimationFrame(o));
              };
              o(),
                i &&
                  setTimeout(function () {
                    e && window.cancelAnimationFrame(e);
                  }, i);
            }
            return (
              (n.domReady = function (t) {
                "loading" != document.readyState
                  ? t()
                  : document.addEventListener
                  ? document.addEventListener("DOMContentLoaded", t)
                  : document.attachEvent("onreadystatechange", function () {
                      "loading" != document.readyState && t();
                    });
              }),
              (n.loadJS = function (t, e) {
                var n = document.createElement("script");
                (n.type = "text/javascript"), (n.async = !1), (n.src = t);
                var i = function (t, e) {
                  "loaded" == t.readyState || "complete" == t.readyState
                    ? e()
                    : setTimeout(function () {
                        i(t, e);
                      }, 100);
                };
                "function" == typeof e &&
                  (void 0 !== n.addEventListener
                    ? n.addEventListener(
                        "load",
                        function () {
                          e(t);
                        },
                        !1
                      )
                    : (n.onreadystatechange = function () {
                        (n.onreadystatechange = null),
                          i(n, function () {
                            e(t);
                          });
                      })),
                  (
                    document.getElementsByTagName("head")[0] ||
                    document.documentElement
                  ).appendChild(n);
              }),
              (n.loadCSS = function (t, e, n) {
                var i = document.createElement("link");
                if (
                  (i.setAttribute("type", "text/css"),
                  i.setAttribute("rel", "stylesheet"),
                  i.setAttribute("media", "all"),
                  i.setAttribute("href", t),
                  void 0 !== n && i.setAttribute("id", n),
                  i.readyState)
                )
                  i.onreadystatechange = function () {
                    ("loaded" == i.readyState || "complete" == i.readyState) &&
                      ((i.onreadystatechange = null), e && e());
                  };
                else if (r() || a()) {
                  (i = document.createElement("style")).textContent =
                    '@import "'.concat(t, '"');
                  var o = setInterval(function () {
                    try {
                      i.sheet.cssRules, e && e(), clearInterval(o);
                    } catch (t) {}
                  }, 10);
                } else
                  i.addEventListener
                    ? i.addEventListener("load", e)
                    : i.attachEvent
                    ? i.attachEvent("onload", e)
                    : "isApplicationInstalled" in navigator &&
                      "onloadcssdefined" in i &&
                      i.onloadcssdefined(e);
                (
                  document.getElementsByTagName("head")[0] ||
                  document.documentElement
                ).appendChild(i);
              }),
              (n.isJsonString = s),
              (n.getIE = function () {
                var t = navigator.userAgent.match(
                  /(?:MSIE |Trident\/.*; rv:)(\d+)/
                );
                return t ? parseInt(t[1]) : void 0;
              }),
              (n.isSafari = r),
              (n.isFirefox = a),
              (n.isMobile = function () {
                var t = navigator.userAgent.toLowerCase();
                return (
                  /iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(
                    t
                  ) ||
                  /ipad|android 3|sch-i800|playbook|tablet|kindle|gt-p1000|sgh-t849|shw-m180s|a510|a511|a100|dell streak|silk/i.test(
                    t
                  ) ||
                  (t.indexOf("macintosh") > -1 && navigator.maxTouchPoints > 1)
                );
              }),
              (n.buildMetadata = function (t, e) {
                if (void 0 === t || void 0 === e || !1 === t || !1 === e)
                  return "";
                var n = {};
                return (n[i] = { type: t, value: e }), JSON.stringify(n);
              }),
              (n.extractMetadata = function (t) {
                var e = [];
                if (!s(t)) return e;
                var n = JSON.parse(t);
                return n.hasOwnProperty(i) && (e = n[i].value), e;
              }),
              (n.hasMetadata = function (t) {
                return !!s(t) && !!JSON.parse(t).hasOwnProperty(i);
              }),
              (n.decodeHtmlEntities = function (t) {
                var e = document.createElement("textarea");
                return (e.innerHTML = t), e.value;
              }),
              (n.encodeHtmlEntities = function (t) {
                var e = document.createElement("textarea");
                return (e.textContent = t), e.innerHTML;
              }),
              (n.getS3UriRelativePath = o),
              (n.fixS3UriOrigin = function (t) {
                var e = t.indexOf("/widget-uploads/");
                return (
                  void 0 !== t &&
                    ~e &&
                    0 === e &&
                    ((t = o(t)), (t = JFCustomWidget.getParentOrigin() + t)),
                  t
                );
              }),
              (n.resetS3UriOrigin = function (t) {
                var e = t.indexOf("/widget-uploads/");
                if (void 0 !== t && ~e && e > 0) {
                  var n = t.split("/widget-uploads/");
                  t = "/widget-uploads/".concat(n[1]);
                }
                return t;
              }),
              (n.executeUntil = l),
              (n.animateUntil = function () {
                l.apply(null, arguments);
              }),
              (n.isEmpty = function (t) {
                return void 0 === t || "" === t || "<empty>" === t;
              }),
              (n.isObject = function (t) {
                return "Object" === c(t);
              }),
              (n.isArray = function (t) {
                return "Array" === c(t);
              }),
              (n.getFormDomain = function () {
                return window.location.search.match(/ref=([^&]+)/)
                  ? "".concat(
                      decodeURIComponent(
                        window.location.search.match(/ref=([^&]+)/)[1]
                      ),
                      "/"
                    )
                  : "https://www.jotform.com/";
              }),
              n
            );
          })();
        (window.JFCustomWidget = c),
          (window.JFWidgetTranslation = l),
          (window.JFCustomWidgetUtils = u);
        var f = {
          JFWidgetTranslation: l,
          JFCustomWidget: c,
          JFCustomWidgetUtils: u,
        };
      })(),
      (i = i.default)
    );
  })();
});


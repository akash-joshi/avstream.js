// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"assets/js/3.20478979.js":[function(require,module,exports) {
(window.webpackJsonp = window.webpackJsonp || []).push([[3], {
  170: function _(t, s, a) {
    "use strict";

    a.r(s);

    var n = function (t, s, a, n, e, r, o, p) {
      var c,
          v = "function" == typeof t ? t.options : t;
      if (s && (v.render = s, v.staticRenderFns = a, v._compiled = !0), n && (v.functional = !0), r && (v._scopeId = "data-v-" + r), o ? (c = function c(t) {
        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), e && e.call(this, t), t && t._registeredComponents && t._registeredComponents.add(o);
      }, v._ssrRegister = c) : e && (c = p ? function () {
        e.call(this, this.$root.$options.shadowRoot);
      } : e), c) if (v.functional) {
        v._injectStyles = c;
        var _ = v.render;

        v.render = function (t, s) {
          return c.call(s), _(t, s);
        };
      } else {
        var i = v.beforeCreate;
        v.beforeCreate = i ? [].concat(i, c) : [c];
      }
      return {
        exports: t,
        options: v
      };
    }({}, function () {
      this.$createElement;
      this._self._c;
      return this._m(0);
    }, [function () {
      var t = this,
          s = t.$createElement,
          a = t._self._c || s;
      return a("div", {
        staticClass: "content"
      }, [a("h1", {
        attrs: {
          id: "audio-video-stream-js"
        }
      }, [a("a", {
        staticClass: "header-anchor",
        attrs: {
          href: "#audio-video-stream-js",
          "aria-hidden": "true"
        }
      }, [t._v("#")]), t._v(" Audio-Video-Stream.js")]), t._v(" "), a("div", {
        attrs: {
          align: "center"
        }
      }, [a("div", [a("img", {
        attrs: {
          src: "img.png",
          alt: "AVStrean"
        }
      })])]), t._v(" "), a("a", {
        attrs: {
          href: "https://github.com/akash-joshi/avstream.js"
        }
      }, [a("img", {
        attrs: {
          src: "https://img.shields.io/badge/github-active-green.svg"
        }
      })]), t._v(" "), a("p", [t._v("A small 500 byte JavaScript library leveraging the native MediaRecorder API to allow streaming of audio or video files to server.")]), t._v(" "), a("p", [t._v("It works by looping the MediaRecorder every "), a("strong", [t._v("x")]), t._v(" milliseconds, which can be used to generate and stream a file at every loop step.")]), t._v(" "), a("h2", {
        attrs: {
          id: "usage"
        }
      }, [a("a", {
        staticClass: "header-anchor",
        attrs: {
          href: "#usage",
          "aria-hidden": "true"
        }
      }, [t._v("#")]), t._v(" Usage")]), t._v(" "), a("p", [t._v("Including script in browser :")]), t._v(" "), a("pre", [a("code", [t._v('<script src="https://unpkg.com/avstream.js/avstream.min.js"><\/script>\n')])]), t._v(" "), a("p", [t._v("To use functions in your JS file :")]), t._v(" "), a("pre", [a("code", [t._v("const { startStream, stopStream } = AVStream    \n")])]), t._v(" "), a("h2", {
        attrs: {
          id: "functions"
        }
      }, [a("a", {
        staticClass: "header-anchor",
        attrs: {
          href: "#functions",
          "aria-hidden": "true"
        }
      }, [t._v("#")]), t._v(" Functions")]), t._v(" "), a("ol", [a("li", [a("code", [t._v("startStream(mediaRecorder,time)")])])]), t._v(" "), a("p", [a("em", [t._v("startStream")]), t._v(" takes your "), a("strong", [t._v("mediaRecorder")]), t._v(" variable, and "), a("strong", [t._v("time")]), t._v(" in milliseconds. The MediaRecorder is restarted according to the time you provide.")]), t._v(" "), a("p", [t._v("This causes "), a("code", [t._v("mediaRecorder.onStop()")]), t._v(" to be called every "), a("strong", [t._v("time")]), t._v(" milliseconds. So, you can write your blob creation and server call in that function.")]), t._v(" "), a("ol", {
        attrs: {
          start: "2"
        }
      }, [a("li", [a("code", [t._v("stopStream()")])])]), t._v(" "), a("p", [a("em", [t._v("stopStream")]), t._v(" stops the stream.")]), t._v(" "), a("h2", {
        attrs: {
          id: "tutorial"
        }
      }, [a("a", {
        staticClass: "header-anchor",
        attrs: {
          href: "#tutorial",
          "aria-hidden": "true"
        }
      }, [t._v("#")]), t._v(" Tutorial")]), t._v(" "), a("div", {
        staticClass: "language-javascript extra-class"
      }, [a("pre", {
        pre: !0,
        attrs: {
          class: "language-javascript"
        }
      }, [a("code", [a("span", {
        pre: !0,
        attrs: {
          class: "token comment"
        }
      }, [t._v("// Record & Stop buttons of your HTML")]), t._v("\n"), a("span", {
        pre: !0,
        attrs: {
          class: "token keyword"
        }
      }, [t._v("const")]), t._v(" record "), a("span", {
        pre: !0,
        attrs: {
          class: "token operator"
        }
      }, [t._v("=")]), t._v(" document"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), a("span", {
        pre: !0,
        attrs: {
          class: "token function"
        }
      }, [t._v("querySelector")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), a("span", {
        pre: !0,
        attrs: {
          class: "token string"
        }
      }, [t._v("'#recordbutton'")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), t._v("\n"), a("span", {
        pre: !0,
        attrs: {
          class: "token keyword"
        }
      }, [t._v("const")]), t._v(" stop "), a("span", {
        pre: !0,
        attrs: {
          class: "token operator"
        }
      }, [t._v("=")]), t._v(" document"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), a("span", {
        pre: !0,
        attrs: {
          class: "token function"
        }
      }, [t._v("querySelector")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), a("span", {
        pre: !0,
        attrs: {
          class: "token string"
        }
      }, [t._v("'#stopbutton'")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), t._v("\n\n"), a("span", {
        pre: !0,
        attrs: {
          class: "token comment"
        }
      }, [t._v("// Importing necessary variables")]), t._v("\n"), a("span", {
        pre: !0,
        attrs: {
          class: "token keyword"
        }
      }, [t._v("const")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("{")]), t._v(" MediaRecorder"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(",")]), t._v(" Blob "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("}")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token operator"
        }
      }, [t._v("=")]), t._v(" window\n"), a("span", {
        pre: !0,
        attrs: {
          class: "token keyword"
        }
      }, [t._v("const")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("{")]), t._v("startStream"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(",")]), t._v("stopStream"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("}")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token operator"
        }
      }, [t._v("=")]), t._v(" AVStream\n\n"), a("span", {
        pre: !0,
        attrs: {
          class: "token comment"
        }
      }, [t._v("// Checking if browser allows getUsermedia")]), t._v("\n"), a("span", {
        pre: !0,
        attrs: {
          class: "token keyword"
        }
      }, [t._v("if")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), t._v("navigator"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), t._v("mediaDevices"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), t._v("getUserMedia"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("{")]), t._v("\n  console"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), a("span", {
        pre: !0,
        attrs: {
          class: "token function"
        }
      }, [t._v("log")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), a("span", {
        pre: !0,
        attrs: {
          class: "token string"
        }
      }, [t._v("'getUserMedia supported.'")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), t._v("\n\n  "), a("span", {
        pre: !0,
        attrs: {
          class: "token comment"
        }
      }, [t._v("// Setting constraints for MediaRecorder")]), t._v("\n  "), a("span", {
        pre: !0,
        attrs: {
          class: "token keyword"
        }
      }, [t._v("const")]), t._v(" constraints "), a("span", {
        pre: !0,
        attrs: {
          class: "token operator"
        }
      }, [t._v("=")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("{")]), t._v(" audio"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(":")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token boolean"
        }
      }, [t._v("true")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(",")]), t._v(" video"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(":")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token boolean"
        }
      }, [t._v("false")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("}")]), t._v("\n\n  "), a("span", {
        pre: !0,
        attrs: {
          class: "token comment"
        }
      }, [t._v("// Declare chunks for our blob")]), t._v("\n  "), a("span", {
        pre: !0,
        attrs: {
          class: "token keyword"
        }
      }, [t._v("let")]), t._v(" chunks "), a("span", {
        pre: !0,
        attrs: {
          class: "token operator"
        }
      }, [t._v("=")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("[")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("]")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(";")]), t._v("\n\n  "), a("span", {
        pre: !0,
        attrs: {
          class: "token keyword"
        }
      }, [t._v("const")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token function-variable function"
        }
      }, [t._v("onSuccess")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token operator"
        }
      }, [t._v("=")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), t._v("stream"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token operator"
        }
      }, [t._v("=>")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("{")]), t._v("\n\n    "), a("span", {
        pre: !0,
        attrs: {
          class: "token comment"
        }
      }, [t._v("// Creating a MediaRecorder object")]), t._v("\n    "), a("span", {
        pre: !0,
        attrs: {
          class: "token keyword"
        }
      }, [t._v("const")]), t._v(" mediaRecorder "), a("span", {
        pre: !0,
        attrs: {
          class: "token operator"
        }
      }, [t._v("=")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token keyword"
        }
      }, [t._v("new")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token class-name"
        }
      }, [t._v("MediaRecorder")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), t._v("stream"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), t._v("\n\n    "), a("span", {
        pre: !0,
        attrs: {
          class: "token comment"
        }
      }, [t._v("// if record button clicked, call startstream ")]), t._v("\n    "), a("span", {
        pre: !0,
        attrs: {
          class: "token comment"
        }
      }, [t._v("// with our mediarecorder object and a 1000ms loop")]), t._v("\n    record"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), a("span", {
        pre: !0,
        attrs: {
          class: "token function-variable function"
        }
      }, [t._v("onclick")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token operator"
        }
      }, [t._v("=")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token operator"
        }
      }, [t._v("=>")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("{")]), t._v("\n      "), a("span", {
        pre: !0,
        attrs: {
          class: "token function"
        }
      }, [t._v("startStream")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), t._v("mediaRecorder"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(",")]), a("span", {
        pre: !0,
        attrs: {
          class: "token number"
        }
      }, [t._v("1000")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), t._v("\n      console"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), a("span", {
        pre: !0,
        attrs: {
          class: "token function"
        }
      }, [t._v("log")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), t._v("mediaRecorder"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), t._v("state"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), t._v("\n      console"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), a("span", {
        pre: !0,
        attrs: {
          class: "token function"
        }
      }, [t._v("log")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), a("span", {
        pre: !0,
        attrs: {
          class: "token string"
        }
      }, [t._v("'recorder started'")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), t._v("\n    "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("}")]), t._v("\n\n    "), a("span", {
        pre: !0,
        attrs: {
          class: "token comment"
        }
      }, [t._v("// stop stream if stop button clicked")]), t._v("\n    stop"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), a("span", {
        pre: !0,
        attrs: {
          class: "token function-variable function"
        }
      }, [t._v("onclick")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token operator"
        }
      }, [t._v("=")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token operator"
        }
      }, [t._v("=>")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("{")]), t._v("\n      "), a("span", {
        pre: !0,
        attrs: {
          class: "token function"
        }
      }, [t._v("stopStream")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), t._v("\n      console"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), a("span", {
        pre: !0,
        attrs: {
          class: "token function"
        }
      }, [t._v("log")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), t._v("mediaRecorder"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), t._v("state"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), t._v("\n      console"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), a("span", {
        pre: !0,
        attrs: {
          class: "token function"
        }
      }, [t._v("log")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), a("span", {
        pre: !0,
        attrs: {
          class: "token string"
        }
      }, [t._v("'recorder stopped'")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), t._v("\n    "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("}")]), t._v("\n\n    "), a("span", {
        pre: !0,
        attrs: {
          class: "token comment"
        }
      }, [t._v("// Blob created and streamed to server")]), t._v("\n    "), a("span", {
        pre: !0,
        attrs: {
          class: "token comment"
        }
      }, [t._v("// Looped according to time we specify")]), t._v("\n    mediaRecorder"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), a("span", {
        pre: !0,
        attrs: {
          class: "token function-variable function"
        }
      }, [t._v("onstop")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token operator"
        }
      }, [t._v("=")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token operator"
        }
      }, [t._v("=>")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("{")]), t._v("\n      console"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), a("span", {
        pre: !0,
        attrs: {
          class: "token function"
        }
      }, [t._v("log")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), a("span", {
        pre: !0,
        attrs: {
          class: "token string"
        }
      }, [t._v("'data available after MediaRecorder.stop() called.'")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), t._v("\n\n      "), a("span", {
        pre: !0,
        attrs: {
          class: "token comment"
        }
      }, [t._v("// Create file from chunks")]), t._v("\n      "), a("span", {
        pre: !0,
        attrs: {
          class: "token keyword"
        }
      }, [t._v("const")]), t._v(" blob "), a("span", {
        pre: !0,
        attrs: {
          class: "token operator"
        }
      }, [t._v("=")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token keyword"
        }
      }, [t._v("new")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token class-name"
        }
      }, [t._v("Blob")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), t._v("chunks"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(",")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("{")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token string"
        }
      }, [t._v("'type'")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(":")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token string"
        }
      }, [t._v("'audio/wav'")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("}")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), t._v("\n      \n      "), a("span", {
        pre: !0,
        attrs: {
          class: "token comment"
        }
      }, [t._v("// Write code to send blob to server here")]), t._v("\n\n      "), a("span", {
        pre: !0,
        attrs: {
          class: "token comment"
        }
      }, [t._v("// Clear chunks for new file")]), t._v("\n      chunks "), a("span", {
        pre: !0,
        attrs: {
          class: "token operator"
        }
      }, [t._v("=")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("[")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("]")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(";")]), t._v("\n    "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("}")]), t._v("\n\n    "), a("span", {
        pre: !0,
        attrs: {
          class: "token comment"
        }
      }, [t._v("// Push chunks when data is available")]), t._v("\n    mediaRecorder"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), a("span", {
        pre: !0,
        attrs: {
          class: "token function-variable function"
        }
      }, [t._v("ondataavailable")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token operator"
        }
      }, [t._v("=")]), t._v(" e "), a("span", {
        pre: !0,
        attrs: {
          class: "token operator"
        }
      }, [t._v("=>")]), t._v(" chunks"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), a("span", {
        pre: !0,
        attrs: {
          class: "token function"
        }
      }, [t._v("push")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), t._v("e"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), t._v("data"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(";")]), t._v("\n  "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("}")]), t._v("\n\n  "), a("span", {
        pre: !0,
        attrs: {
          class: "token comment"
        }
      }, [t._v("// Promise call to start our code")]), t._v("\n  navigator"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), t._v("mediaDevices"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), a("span", {
        pre: !0,
        attrs: {
          class: "token function"
        }
      }, [t._v("getUserMedia")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), t._v("constraints"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), a("span", {
        pre: !0,
        attrs: {
          class: "token function"
        }
      }, [t._v("then")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), t._v("onSuccess"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), a("span", {
        pre: !0,
        attrs: {
          class: "token keyword"
        }
      }, [t._v("catch")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), t._v("err"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), a("span", {
        pre: !0,
        attrs: {
          class: "token operator"
        }
      }, [t._v("=>")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("{")]), t._v("console"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), a("span", {
        pre: !0,
        attrs: {
          class: "token function"
        }
      }, [t._v("error")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), t._v("err"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("}")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), t._v("\n"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("}")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token keyword"
        }
      }, [t._v("else")]), t._v(" "), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("{")]), t._v("\n  console"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(".")]), a("span", {
        pre: !0,
        attrs: {
          class: "token function"
        }
      }, [t._v("error")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("(")]), a("span", {
        pre: !0,
        attrs: {
          class: "token string"
        }
      }, [t._v("'getUserMedia not supported on your browser!'")]), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v(")")]), t._v("\n"), a("span", {
        pre: !0,
        attrs: {
          class: "token punctuation"
        }
      }, [t._v("}")]), t._v("\n")])])]), a("h2", {
        attrs: {
          id: "license"
        }
      }, [a("a", {
        staticClass: "header-anchor",
        attrs: {
          href: "#license",
          "aria-hidden": "true"
        }
      }, [t._v("#")]), t._v(" License")]), t._v(" "), a("p", [t._v("The MIT License (MIT)")])]);
    }], !1, null, null, null);

    s.default = n.exports;
  }
}]);
},{}],"../../Users/crabeatr/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60370" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../Users/crabeatr/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/js/3.20478979.js"], null)
//# sourceMappingURL=/3.20478979.2bf0c48c.map
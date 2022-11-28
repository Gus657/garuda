import { defineComponent as f, ref as h } from "vue";
const y = /* @__PURE__ */ f({
  __name: "ComponentA",
  props: {
    msg: null
  },
  setup(n) {
    return { __sfc: !0, props: n };
  }
});
function u(n, e, p, d, s, _, i, m) {
  var t = typeof n == "function" ? n.options : n;
  e && (t.render = e, t.staticRenderFns = p, t._compiled = !0), d && (t.functional = !0), _ && (t._scopeId = "data-v-" + _);
  var r;
  if (i ? (r = function(o) {
    o = o || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !o && typeof __VUE_SSR_CONTEXT__ < "u" && (o = __VUE_SSR_CONTEXT__), s && s.call(this, o), o && o._registeredComponents && o._registeredComponents.add(i);
  }, t._ssrRegister = r) : s && (r = m ? function() {
    s.call(
      this,
      (t.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : s), r)
    if (t.functional) {
      t._injectStyles = r;
      var v = t.render;
      t.render = function(C, l) {
        return r.call(l), v(C, l);
      };
    } else {
      var a = t.beforeCreate;
      t.beforeCreate = a ? [].concat(a, r) : [r];
    }
  return {
    exports: n,
    options: t
  };
}
var g = function() {
  var e = this;
  return e._self._c, e._self._setupProxy, e._m(0);
}, $ = [function() {
  var n = this, e = n._self._c;
  return n._self._setupProxy, e("div", [n._v(" Hello Gus! "), e("span", { staticClass: "icon-heart", staticStyle: { color: "tomato" } })]);
}], b = /* @__PURE__ */ u(
  y,
  g,
  $,
  !1,
  null,
  null,
  null,
  null
);
const R = b.exports, S = /* @__PURE__ */ f({
  __name: "ComponentB",
  setup(n) {
    return { __sfc: !0, count: h(0) };
  }
});
var M = function() {
  var e = this;
  return e._self._c, e._self._setupProxy, e._m(0);
}, O = [function() {
  var n = this, e = n._self._c;
  return n._self._setupProxy, e("div", { staticClass: "flex align-content-center flex-wrap counter" }, [e("label", { staticClass: "flex align-items-center justify-content-center" }, [n._v("Counter:")]), e("span", { staticClass: "flex align-items-center justify-content-center count" }, [n._v("Hiiii...")])]);
}], P = /* @__PURE__ */ u(
  S,
  M,
  O,
  !1,
  null,
  "ed7439d5",
  null,
  null
);
const T = P.exports, c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComponentA: R,
  ComponentB: T
}, Symbol.toStringTag, { value: "Module" }));
const j = 100, A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MAGIC_NUM: j
}, Symbol.toStringTag, { value: "Module" }));
function x(n, e) {
  return n + e;
}
const B = {
  add: x
};
function U(n) {
  for (const e in c)
    n.component(e, c[e]);
}
const F = { install: U };
export {
  R as ComponentA,
  T as ComponentB,
  A as MyConstants,
  B as MyUtil,
  F as default
};

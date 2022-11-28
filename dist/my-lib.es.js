import { defineComponent, openBlock, createElementBlock, createTextVNode, toDisplayString, createElementVNode, ref, createVNode, unref, pushScopeId, popScopeId } from "vue";
import Button from "primevue/button";
const _hoisted_1$1 = /* @__PURE__ */ createElementVNode("span", {
  class: "icon-heart",
  style: { "color": "tomato" }
}, null, -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    msg: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createTextVNode(" Hello " + toDisplayString(__props.msg) + "! ", 1),
        _hoisted_1$1
      ]);
    };
  }
});
var ComponentB_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _withScopeId = (n) => (pushScopeId("data-v-61aba894"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "flex align-content-center flex-wrap counter" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("label", { class: "flex align-items-center justify-content-center" }, "Counter:", -1));
const _hoisted_3 = { class: "flex align-items-center justify-content-center count" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const count = ref(0);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createVNode(unref(Button), {
          icon: "pi pi-plus",
          class: "p-button-sm flex align-items-center justify-content-center",
          onClick: _cache[0] || (_cache[0] = ($event) => count.value++)
        }),
        createElementVNode("span", _hoisted_3, toDisplayString(count.value), 1),
        createVNode(unref(Button), {
          icon: "pi pi-minus",
          class: "p-button-sm flex align-items-center justify-content-center",
          onClick: _cache[1] || (_cache[1] = ($event) => count.value--)
        })
      ]);
    };
  }
});
var ComponentB = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-61aba894"]]);
var components = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  ComponentA: _sfc_main$1,
  ComponentB
});
var main = "";
const MAGIC_NUM = 100;
var MyConstants = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  MAGIC_NUM
});
function add(a, b) {
  return a + b;
}
var MyUtil = {
  add
};
function install(app) {
  for (const key in components) {
    app.component(key, components[key]);
  }
}
var index = { install };
export { _sfc_main$1 as ComponentA, ComponentB, MyConstants, MyUtil, index as default };

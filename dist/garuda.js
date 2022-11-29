import t from "vue";
const c = t.extend({
  name: "homer-dancing-component"
}), o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DancingHommer: c
}, Symbol.toStringTag, { value: "Module" }));
function r(e) {
  for (const n in o)
    e.component(n, o[n]);
}
const m = { install: r };
export {
  c as DancingHommer,
  m as default
};

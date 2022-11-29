import t from "vue";
const c = t.extend({
  name: "homer-dancing-component"
}), e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DancingHommer: c
}, Symbol.toStringTag, { value: "Module" }));
function m(o) {
  for (const n in e)
    o.component(n, e[n]);
}
const a = { install: m };
export {
  c as DancingHommer,
  a as default
};

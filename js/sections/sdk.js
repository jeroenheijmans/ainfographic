/* SDK & Application Layer — stacked layers, floor (wire protocol) last. */
(function () {
  "use strict";
  const { el } = window.AppKit;

  function renderLayer(l, tier, isFloor) {
    return el("div", { class: "sdk-layer" }, [
      el("div", { class: "sdk-layer-head" }, [
        el("span", { class: "sdk-layer-name", text: l.name }),
        el("span", { class: "sdk-layer-tier", text: isFloor ? tier + " — the floor" : tier })
      ]),
      el("div", { class: "sdk-layer-items" }, l.items.map((i) => el("span", { class: "sdk-chip", text: i })))
    ]);
  }

  function render() {
    const layers = window.DATA.sdk.layers;
    const ordered = layers.slice().reverse();
    return el("div", { class: "sdk-wrap" }, ordered.map((l, i) =>
      renderLayer(l, "Layer " + String(layers.length - i).padStart(2, "0"), i === ordered.length - 1)));
  }

  const meta = window.DATA.sdk;
  window.SECTIONS.push({
    id: meta.id,
    title: meta.title,
    intro: meta.intro,
    render
  });
})();

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

  window.SECTIONS.push({
    id: "sdk-application-layer",
    title: "SDK & Application Layer",
    intro: "Read bottom-up: the wire protocol is the floor, everything above it is convenience.",
    render
  });
})();

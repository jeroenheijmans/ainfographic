/* Inference Providers — hyperscalers, providers grid, routers row. */
(function () {
  "use strict";
  const { el, logoImg } = window.AppKit;

  function hostChip(h) { return el("span", { class: "host-chip", text: h }); }
  function longTailChips(list, longTail) {
    const chips = list.map(hostChip);
    if (longTail) chips.push(el("span", { class: "host-chip host-chip--ellipsis", text: "…" }));
    return chips;
  }

  function renderHyperscaler(p) {
    return el("div", { class: "hyperscaler-card" }, [
      el("div", { class: "hyperscaler-head" }, [
        logoImg(p.key, p.name),
        el("span", { class: "hyperscaler-name", text: p.name }),
        el("span", { class: "hyperscaler-product", text: p.label })
      ]),
      el("div", { class: "host-chips" }, longTailChips(p.hosts, p.longTail))
    ]);
  }

  function renderProvider(p) {
    return el("div", { class: "provider-card" }, [
      el("div", { class: "provider-head" }, [
        logoImg(p.key, p.name),
        el("span", { class: "provider-name", text: p.name })
      ]),
      el("div", { class: "host-chips" }, longTailChips(p.hosts, p.longTail)),
      p.note ? el("div", { class: "provider-note", text: p.note }) : null
    ]);
  }

  function renderRouter(r) {
    return el("div", { class: "router-item" }, [
      el("div", { class: "router-item-head" }, [
        logoImg(r.key, r.name),
        el("span", { class: "router-name", text: r.name })
      ]),
      el("span", { class: "router-hosts", text: r.note || r.hosts.join(", ") })
    ]);
  }

  function render() {
    const data = window.DATA.inference;
    return el("div", { class: "inference-wrap" }, [
      el("div", { class: "hyperscaler-grid" }, data.hyperscalers.map(renderHyperscaler)),
      el("div", { class: "provider-grid" }, data.providers.map(renderProvider)),
      el("div", { class: "router-row" }, [
        el("div", { class: "router-label", text: "Routers" }),
        el("div", { class: "router-grid" }, data.routers.map(renderRouter))
      ])
    ]);
  }

  window.SECTIONS.push({
    id: "inference-providers",
    title: "Inference Providers",
    intro: "Every major lab serves its own models. Listed here are the providers that host several labs' models. Indicative, not exhaustive — a trailing ellipsis means a long tail.",
    render
  });
})();

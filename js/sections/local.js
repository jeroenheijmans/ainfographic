/* Local Inference — lane grid plus a rules-of-thumb side column. */
(function () {
  "use strict";
  const { el } = window.AppKit;

  function renderLane(l) {
    return el("div", { class: "lane-card" }, [
      el("div", { class: "lane-name", text: l.name }),
      el("div", { class: "lane-items" }, l.items.map((i) => el("span", { class: "lane-chip", text: i })))
    ]);
  }

  function render() {
    const data = window.DATA.local;
    return el("div", { class: "local-wrap" }, [
      el("div", { class: "lane-grid" }, data.layers.map(renderLane)),
      el("div", { class: "local-notes" }, [
        el("div", { class: "local-notes-label", text: "Rules of thumb" }),
        el("div", { class: "local-notes-list" }, data.notes.map((n) => el("div", { class: "local-note", text: n })))
      ])
    ]);
  }

  window.SECTIONS.push({
    id: "local-inference",
    title: "Local Inference",
    intro: "Running models on your own hardware: what you need, in what shape it arrives, and where to get it.",
    render
  });
})();

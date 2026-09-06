/* Initiatives & Experiments — card grid. */
(function () {
  "use strict";
  const { el } = window.AppKit;

  function renderItem(i) {
    return el("div", { class: "init-card" }, [
      el("div", { class: "init-name", text: i.name }),
      el("div", { class: "init-def", text: i.def })
    ]);
  }

  function render() {
    return el("div", { class: "init-grid" }, window.DATA.initiatives.items.map(renderItem));
  }

  window.SECTIONS.push({
    id: "initiatives-and-experiments",
    title: "Initiatives & Experiments",
    intro: "Strange and wonderful things at the edge. Stuff that might pop up at the lunch table, but isn't everyday stuff for most developers... for now.",
    render
  });
})();

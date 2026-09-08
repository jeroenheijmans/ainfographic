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

  const meta = window.DATA.initiatives;
  window.SECTIONS.push({
    id: meta.id,
    title: meta.title,
    intro: meta.intro,
    render
  });
})();

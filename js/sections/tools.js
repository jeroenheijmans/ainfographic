/* Development Tools & Harnesses — one row per usage category. */
(function () {
  "use strict";
  const { el, logoImg } = window.AppKit;

  function renderTool(t) {
    return el("span", { class: "tool-chip" }, [
      logoImg(t.toolKey, t.name),
      el("span", { class: "tool-name", text: t.name }),
      el("span", { class: "tool-vendor", text: t.vendor })
    ]);
  }

  function renderCategory(cat) {
    return el("div", { class: "tool-row" }, [
      el("div", { class: "tool-cat" }, [
        el("span", { class: "tool-cat-name", text: cat.name })
      ]),
      el("div", { class: "tool-chips" }, cat.tools.map(renderTool))
    ]);
  }

  function render() {
    const data = window.DATA.tools;
    return el("div", { class: "tools-wrap" }, data.categories.map(renderCategory));
  }

  window.SECTIONS.push({
    id: "development-tools",
    title: "Development Tools & Harnesses",
    intro: "Grouped by the shape in which each tool comes. Several products or suites appear in more than one row.",
    render
  });
})();

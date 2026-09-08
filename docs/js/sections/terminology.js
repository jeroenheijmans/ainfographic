/* Terminology & Theory — indented term tree, laid out in CSS columns. */
(function () {
  "use strict";
  const { el } = window.AppKit;

  function renderNode(node) {
    return el("div", { class: "term-node" }, [
      el("div", { class: "term-name", text: node.name }),
      (node.children && node.children.length)
        ? el("div", { class: "term-children" }, node.children.map((c) => el("div", { class: "term-child", text: c.name })))
        : null
    ]);
  }

  function renderCategory(cat) {
    return el("div", { class: "term-category" }, [
      el("div", { class: "term-category-name", text: cat.name }),
      ...cat.children.map(renderNode)
    ]);
  }

  function render() {
    const data = window.DATA.terminology;
    return el("div", { class: "term-wrap" }, data.tree.map(renderCategory));
  }

  const meta = window.DATA.terminology;
  window.SECTIONS.push({
    id: meta.id,
    title: meta.title,
    intro: meta.intro,
    render
  });
})();

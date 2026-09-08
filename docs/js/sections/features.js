/* Tooling Features — numbered glossary rows. */
(function () {
  "use strict";
  const { el } = window.AppKit;

  function renderTerm(f, i) {
    return el("div", { class: "feature-row" }, [
      el("span", { class: "feature-num", text: "›" }),
      el("span", { class: "feature-term", text: f.term }),
      el("div", { class: "feature-body" }, [
        el("div", { class: "feature-def", text: f.def }),
        f.footnote ? el("div", { class: "feature-footnote", text: f.footnote }) : null
      ])
    ]);
  }

  function render() {
    const data = window.DATA.features;
    return el("div", { class: "features-wrap" }, data.terms.map(renderTerm));
  }

  const meta = window.DATA.features;
  window.SECTIONS.push({
    id: meta.id,
    title: meta.title,
    intro: meta.intro,
    render
  });
})();

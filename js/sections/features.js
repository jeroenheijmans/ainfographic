/* Tooling Features — numbered glossary rows. */
(function () {
  "use strict";
  const { el } = window.AppKit;

  function renderTerm(f, i) {
    return el("div", { class: "feature-row" }, [
      el("span", { class: "feature-num", text: String(i + 1).padStart(2, "0") }),
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

  window.SECTIONS.push({
    id: "tooling-features",
    title: "Tooling Features",
    intro: "The concepts that recur across LLMs and agent harnesses. Names differ per vendor; the ideas do not.",
    render
  });
})();

/* Security & Failure Modes — risks and mitigations, two columns. */
(function () {
  "use strict";
  const { el } = window.AppKit;

  function renderEntry(e, kind) {
    return el("div", { class: "sec-card sec-card--" + kind }, [
      el("div", { class: "sec-term", text: e.term }),
      el("div", { class: "sec-def", text: e.def })
    ]);
  }

  function render() {
    const data = window.DATA.security;
    return el("div", { class: "sec-grid" }, [
      el("div", { class: "sec-col" }, [
        el("div", { class: "sec-col-head sec-col-head--risk" }, [
          el("span", { class: "sec-dot" }),
          el("span", { text: "Angles to know about" })
        ]),
        el("div", { class: "sec-list" }, data.angles.map((e) => renderEntry(e, "risk")))
      ]),
      el("div", { class: "sec-col" }, [
        el("div", { class: "sec-col-head sec-col-head--mitigation" }, [
          el("span", { class: "sec-dot" }),
          el("span", { text: "Mitigations" })
        ]),
        el("div", { class: "sec-list" }, data.mitigations.map((e) => renderEntry(e, "mitigation")))
      ])
    ]);
  }

  window.SECTIONS.push({
    id: "security-and-failure-modes",
    title: "Security & Failure Modes",
    intro: "LLMs and agents blur the line between data and instructions. Risks on the left, the cheap defences on the right.",
    render
  });
})();

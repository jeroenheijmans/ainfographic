/* Labs & Models — region-grouped grid of lab cards. */
(function () {
  "use strict";
  const { el, modelLabel, modelFootnote, logoImg } = window.AppKit;

  function chip(m, kind, footnotes) {
    const label = modelLabel(m);
    const footnote = modelFootnote(m);
    const span = el("span", { class: "lab-chip lab-chip--" + kind }, label);
    if (footnote) {
      footnotes.push(footnote);
      const mark = String(footnotes.length);
      span.appendChild(el("sup", { class: "lab-chip-mark", text: mark }));
      span.title = footnote;
    }
    return span;
  }

  function renderLabCard(lab) {
    const footnotes = [];
    const main = el("div", { class: "lab-chips" }, lab.main.map((m) => chip(m, "main", footnotes)));
    const secondary = (lab.secondary && lab.secondary.length)
      ? el("div", { class: "lab-chips lab-chips--secondary" }, lab.secondary.map((m) => chip(m, "secondary", footnotes)))
      : null;
    const card = el("div", { class: "lab-card" }, [
      el("div", { class: "lab-card-head" }, [
        logoImg(lab.key, lab.name),
        el("span", { class: "lab-name", text: lab.name }),
        el("span", { class: "lab-cc", text: lab.country })
      ]),
      main,
      secondary,
      footnotes.length ? el("div", { class: "lab-footnote", text: footnotes.map((f, i) => (i + 1) + ". " + f).join(" ") }) : null
    ]);
    return card;
  }

  const REGION_HUES = [250, 148, 28, 205, 325, 72];

  // Display-only relabeling: DATA.md groups these by continent, but every
  // lab currently listed under "North America"/"Asia" is US/China respectively,
  // so the section header names the actual countries. The underlying data
  // (region.name, used for DATA.md fidelity elsewhere) is left untouched.
  const REGION_LABELS = { "North America": "US", "Asia": "China" };
  function regionLabel(name) { return REGION_LABELS[name] || name; }

  function renderRegion(region, i) {
    const tally = region.labs.length + (region.labs.length === 1 ? " lab shown" : " labs shown");
    const hue = REGION_HUES[i % REGION_HUES.length];
    return el("div", { class: "lab-region", style: "--region-hue: " + hue }, [
      el("div", { class: "lab-region-head" }, [
        el("span", { class: "lab-region-name", text: regionLabel(region.name) }),
        el("span", { class: "lab-region-tally", text: tally })
      ]),
      el("div", { class: "lab-grid" }, region.labs.map(renderLabCard))
    ]);
  }

  function render() {
    const data = window.DATA.labs;
    const wrap = el("div", { class: "labs-wrap" });

    data.regions.forEach((region, i) => wrap.appendChild(renderRegion(region, i)));

    wrap.appendChild(el("div", { class: "lab-addendum" }, [
      el("span", { class: "lab-addendum-label", text: "Also worth knowing" }),
      el("div", { class: "lab-addendum-chips" },
        data.addendum.map((a) => el("span", { class: "lab-chip lab-chip--addendum", text: a.name + " (" + a.country + ")" })))
    ]));

    return wrap;
  }

  window.SECTIONS.push({
    id: "labs-and-models",
    title: "Labs & Models",
    intro: "Frontier and near-frontier labs, grouped by geography. Each lab lists the model families it is best known for.",
    render
  });
})();

/* The State of Artificial Intelligence — page assembly & shared helpers.
   Each section in js/sections/*.js pushes a descriptor { id, title, num,
   intro, render() } onto window.SECTIONS. render() returns a DOM node built
   from the corresponding window.DATA.* structure — add data, the section
   grows, no other code changes needed. */
(function () {
  "use strict";

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    applyAttrs(node, attrs);
    appendChildren(node, children);
    return node;
  }

  function applyAttrs(node, attrs) {
    if (!attrs) return;
    for (const key in attrs) {
      if (key === "class") node.setAttribute("class", attrs[key]);
      else if (key === "text") node.textContent = attrs[key];
      else node.setAttribute(key, attrs[key]);
    }
  }

  function appendChildren(node, children) {
    if (!children) return;
    (Array.isArray(children) ? children : [children]).forEach((c) => {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
  }

  function modelLabel(m) { return typeof m === "string" ? m : m.name; }
  function modelFootnote(m) { return typeof m === "string" ? null : m.footnote; }

  // Renders a small vendor/company logo when a data entry has a `key`.
  // A missing file swaps to a shared neutral placeholder (logos/_fallback.svg)
  // so every entry keeps the same visual slot until its real logo is added;
  // if even that fails to load, the slot hides itself instead of showing a
  // broken-image icon.
  function logoImg(key, alt) {
    if (!key) return null;
    const ext = (window.DATA.logoFileExtensions && window.DATA.logoFileExtensions[key]) || "svg";
    const img = el("img", {
      class: "vendor-logo",
      src: "logos/" + key + "." + ext,
      alt: "",
      title: alt || "",
      loading: "lazy",
      onerror: "if (this.dataset.fallback) { this.style.display='none'; } else { this.dataset.fallback = '1'; this.src = 'logos/_fallback.svg'; }"
    });
    return img;
  }

  window.AppKit = { el, modelLabel, modelFootnote, logoImg };

  // ---------------------------------------------------------------------
  // Section registry — filled in by js/sections/*.js (each pushes here).
  // ---------------------------------------------------------------------
  window.SECTIONS = window.SECTIONS || [];

  function buildPanel(section, index) {
    const panel = el("section", { class: "panel panel--" + section.id, id: section.id });
    const head = el("div", { class: "panel-head" }, [
      el("a", { class: "panel-head-link", href: "#" + section.id }, [
        el("span", { class: "panel-num", text: String(index + 1).padStart(2, "0") }),
        el("h2", { text: section.title })
      ]),
      el("span", { class: "panel-rule" })
    ]);
    const body = el("div", { class: "panel-body" });
    try {
      body.appendChild(section.render());
    } catch (err) {
      body.appendChild(el("p", { class: "panel-intro", text: "Could not render this section: " + err.message }));
      console.error(section.id, err);
    }
    panel.appendChild(head);
    if (section.intro) panel.appendChild(el("p", { class: "panel-intro", text: section.intro }));
    panel.appendChild(body);
    return panel;
  }

  // Counts shown in the title block: total labs and total model families
  // across the Labs & Models data, recomputed from data so they never drift.
  function computeCounts() {
    const regions = (window.DATA.labs && window.DATA.labs.regions) || [];
    let labCount = 0, modelCount = 0;
    regions.forEach((r) => {
      labCount += r.labs.length;
      r.labs.forEach((l) => {
        modelCount += (l.main || []).length + (l.secondary || []).length;
      });
    });
    return { labCount, modelCount };
  }

  function init() {
    const main = document.getElementById("sections");
    window.SECTIONS.forEach((section, i) => {
      main.appendChild(buildPanel(section, i));
    });

    const renderedAt = "Rendered at " + new Date().toISOString().slice(0, 16).replace("T", " ") + " UTC";
    document.getElementById("edition").textContent = renderedAt;
    document.getElementById("colophon-edition").textContent = renderedAt;

    const { labCount, modelCount } = computeCounts();
    document.getElementById("counts").textContent =
      labCount + " labs · " + modelCount + " model families";

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: no-preference)").matches && "IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.06 });
      document.querySelectorAll(".panel").forEach((n) => io.observe(n));
    } else {
      document.querySelectorAll(".panel").forEach((n) => n.classList.add("is-visible"));
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();

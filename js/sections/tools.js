/* Development Tools & Harnesses — a tools x forms cross table, no tool
   repeated. Below the matrix breakpoint the same DOM restyles into a list of
   tools with their forms as tags, so nothing ever scrolls sideways. */
(function () {
  "use strict";
  const { el, logoImg } = window.AppKit;

  // Inline SVG so the marks and form glyphs inherit currentColor and print
  // as vectors. 24-box, stroke-only, matching the poster's hairline weight.
  const SVG_OPEN =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" ' +
    'stroke-linecap="round" stroke-linejoin="round">';

  const FORM_ICONS = {
    "CLI Tools":
      '<rect x="2.8" y="4.2" width="18.4" height="15.6" rx="2.2"/>' +
      '<path d="M7 10.2 10 13.2 7 16.2"/><path d="M12.6 16.2h4.6"/>',
    "IDE Extensions":
      '<path d="M9 3v4.2M15 3v4.2"/>' +
      '<path d="M6.4 7.2h11.2v3.4a5.6 5.6 0 0 1-11.2 0z"/><path d="M12 16.2V21"/>',
    "IDEs":
      '<rect x="2.8" y="4.2" width="18.4" height="15.6" rx="2.2"/>' +
      '<path d="M9.2 4.2v15.6"/><path d="M12.4 10h5.4M12.4 14h3.6"/>',
    "Standalone GUI":
      '<rect x="2.8" y="4.2" width="18.4" height="12" rx="2"/>' +
      '<path d="M12 16.2v3.4M8.2 19.6h7.6"/>',
    "SaaS Tools":
      '<path d="M17.4 18.6a3.9 3.9 0 0 0 .4-7.8 5.9 5.9 0 0 0-11.3-1.2 3.7 3.7 0 0 0 .6 9z"/>',
    "Browser Apps":
      '<rect x="2.8" y="4.2" width="18.4" height="15.6" rx="2.2"/><path d="M2.8 8.6h18.4"/>' +
      '<path d="M12 10.8l1.25 2.65 2.65 1.25-2.65 1.25L12 18.6l-1.25-2.65L8.1 14.7l2.65-1.25z"/>'
  };

  const CHECK =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" ' +
    'stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.8 17.3 19 7.4"/></svg>';

  function icon(formName) {
    const node = el("span", { class: "tools-icon", "aria-hidden": "true" });
    node.innerHTML = SVG_OPEN + (FORM_ICONS[formName] || "") + "</svg>";
    return node;
  }

  function mark() {
    const node = el("span", { class: "tools-mark", "aria-hidden": "true" });
    node.innerHTML = CHECK;
    return node;
  }

  // Explicit ARIA roles: the narrow layout changes `display`, which would
  // otherwise strip the table's implicit semantics.

  function renderHead(forms) {
    const cells = forms.map((form) =>
      // Visible label is the short one; the full name is the accessible name.
      el("th", {
        class: "tools-col",
        scope: "col",
        role: "columnheader",
        title: form.name,
        "aria-label": form.name
      }, [
        el("span", { class: "tools-col-inner" }, [
          icon(form.name),
          el("span", { class: "tools-col-label", text: form.short })
        ])
      ])
    );
    const corner = el(
      "th",
      { class: "tools-corner", scope: "col", role: "columnheader", text: "Tool" }
    );
    return el("tr", { class: "tools-head-row", role: "row" }, [corner, ...cells]);
  }

  function renderCell(row, form) {
    const on = row.forms.includes(form.name);
    const cell = el("td", { class: "tools-cell" + (on ? " is-on" : ""), role: "cell" }, [
      el("span", { class: "u-visually-hidden", text: on ? "Yes" : "No" })
    ]);
    if (on) {
      cell.appendChild(mark());
      // Shown instead of the mark once the header row is visually hidden.
      cell.appendChild(
        el("span", { class: "tools-tag", "aria-hidden": "true" }, [
          icon(form.name),
          el("span", { text: form.short })
        ])
      );
    }
    return cell;
  }

  function renderRow(row, forms) {
    const stub = el("th", { class: "tools-stub", scope: "row", role: "rowheader" }, [
      el("span", { class: "tools-identity" }, [
        logoImg(row.toolKey, row.name),
        el("span", { class: "tools-identity-text" }, [
          el("span", { class: "tools-name", text: row.name }),
          el("span", { class: "tools-vendor", text: row.vendor })
        ])
      ])
    ]);
    return el("tr", { class: "tools-row", role: "row" }, [
      stub,
      ...forms.map((form) => renderCell(row, form))
    ]);
  }

  function render() {
    const data = window.DATA.tools;
    const table = el("table", { class: "tools-table", role: "table" }, [
      el("thead", { role: "rowgroup" }, renderHead(data.forms)),
      el("tbody", { role: "rowgroup" }, data.rows.map((row) => renderRow(row, data.forms)))
    ]);
    return el("div", { class: "tools-matrix" }, table);
  }

  const meta = window.DATA.tools;
  window.SECTIONS.push({
    id: meta.id,
    title: meta.title,
    intro: meta.intro,
    render
  });
})();

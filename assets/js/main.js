/* ==========================================================================
   main.js — boot, render, and wire interactions
   ========================================================================== */

import { CONTENT, LINKS } from "./content.js";
import {
  getInitialLang,
  storeLang,
  applyDocumentLang,
  resolve,
  parityReport,
  SUPPORTED,
} from "./i18n.js";

let currentLang = getInitialLang();

/* ---------- small DOM helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
function el(tag, props = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(props).forEach(([k, v]) => {
    if (k === "class") node.className = v;
    else if (k === "text") node.textContent = v;
    else if (k.startsWith("aria-") || k === "role" || k === "href" || k === "target" || k === "rel")
      node.setAttribute(k, v);
    else node[k] = v;
  });
  (Array.isArray(children) ? children : [children]).forEach((c) => {
    if (c == null) return;
    node.append(c.nodeType ? c : document.createTextNode(String(c)));
  });
  return node;
}

/* ---------- dynamic section renderers ---------- */
function renderHighlights(c) {
  const grid = $("#highlights-grid");
  if (!grid) return;
  grid.replaceChildren(
    ...c.highlights.items.map((it) =>
      el("article", { class: "card reveal" }, [
        it.year ? el("span", { class: "card__year", text: it.year }) : null,
        el("h3", { class: "card__title", text: it.title }),
        el("p", { class: "card__detail", text: it.detail }),
      ])
    )
  );
}

function renderExperience(c) {
  const wrap = $("#experience-timeline");
  if (!wrap) return;
  wrap.replaceChildren(
    ...c.experience.items.map((it) =>
      el("article", { class: "tl-item reveal" }, [
        el("h3", { class: "tl-item__role", text: it.role }),
        el("p", { class: "tl-item__meta" }, [
          el("span", { class: "org", text: it.org }),
          document.createTextNode(` · ${it.type} · ${it.dates}`),
        ]),
        el(
          "ul",
          { class: "tl-item__bullets" },
          it.bullets.map((b) => el("li", { text: b }))
        ),
      ])
    )
  );
}

function renderSkills(c) {
  const wrap = $("#skills-cluster");
  if (!wrap) return;
  wrap.replaceChildren(...c.skills.items.map((s) => el("li", { class: "badge", text: s })));
}

function renderTraining(c) {
  const wrap = $("#training-list");
  if (!wrap) return;
  wrap.replaceChildren(
    ...c.training.items.map((it) =>
      el("li", { class: "cert" }, [
        el("span", { class: "cert__year", text: it.year || "•" }),
        el("div", {}, [
          el("p", { class: "cert__name", text: it.name }),
          it.issuer ? el("p", { class: "cert__issuer", text: it.issuer }) : null,
        ]),
      ])
    )
  );
}

/* ---------- static text via [data-i18n] ---------- */
function applyStaticText(c) {
  $$("[data-i18n]").forEach((node) => {
    const val = resolve(c, node.dataset.i18n);
    if (typeof val === "string") node.textContent = val;
  });
  $$("[data-i18n-aria-label]").forEach((node) => {
    const val = resolve(c, node.dataset.i18nAriaLabel);
    if (typeof val === "string") node.setAttribute("aria-label", val);
  });
}

/* ---------- main render ---------- */
function render(lang) {
  currentLang = lang;
  const c = CONTENT[lang];
  applyDocumentLang(lang);
  applyStaticText(c);
  renderHighlights(c);
  renderExperience(c);
  renderSkills(c);
  renderTraining(c);

  // language toggle button
  const toggle = $("#lang-toggle");
  if (toggle) {
    toggle.textContent = c.ui.switchTo;
    toggle.setAttribute("aria-label", c.ui.switchToAria);
    toggle.setAttribute("lang", lang === "en" ? "ar" : "en");
  }
  observeReveals();
}

/* ---------- interactions ---------- */
function wireLangToggle() {
  const toggle = $("#lang-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    const next = currentLang === "en" ? "ar" : "en";
    storeLang(next);
    render(next);
  });
}

function wireMobileNav() {
  const btn = $("#nav-toggle");
  const menu = $("#nav-menu");
  if (!btn || !menu) return;
  const setOpen = (open) => {
    menu.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", resolve(CONTENT[currentLang], open ? "ui.close" : "ui.menu"));
  };
  btn.addEventListener("click", () => setOpen(!menu.classList.contains("is-open")));
  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) { setOpen(false); btn.focus(); }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) { setOpen(false); btn.focus(); }
  });
}

function wireScrollSpy() {
  const links = $$(".nav__link[data-section]");
  if (!links.length || !("IntersectionObserver" in window)) return;
  const byId = new Map(links.map((l) => [l.dataset.section, l]));
  const sections = $$("main section[id]");
  const order = sections.map((s) => s.id);
  const visible = new Set();
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)));
      // topmost visible section that has a matching nav link wins; clears when none
      const active = order.find((id) => visible.has(id) && byId.has(id));
      links.forEach((l) => l.removeAttribute("aria-current"));
      if (active) byId.get(active).setAttribute("aria-current", "true");
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => obs.observe(s));
}

let revealObserver = null;
let revealsInitialized = false;
function observeReveals() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = $$(".reveal:not(.is-visible)");
  // After the first scroll-reveal pass (e.g. on a language toggle re-render),
  // show freshly rendered nodes instantly instead of re-animating them.
  if (reduce || !("IntersectionObserver" in window) || revealsInitialized) {
    items.forEach((i) => i.classList.add("is-visible"));
    revealsInitialized = true;
    return;
  }
  revealsInitialized = true;
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries, o) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            o.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
  }
  items.forEach((i) => revealObserver.observe(i));
}

function wireBackToTop() {
  const btn = $("#back-to-top");
  if (!btn) return;
  const onScroll = () => btn.classList.toggle("is-visible", window.scrollY > 600);
  window.addEventListener("scroll", onScroll, { passive: true });
  btn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
  onScroll();
}

/* ---------- boot ---------- */
function init() {
  render(currentLang);
  wireLangToggle();
  wireMobileNav();
  wireScrollSpy();
  wireBackToTop();

  // Dev-time parity assertion (spec FR-003)
  const problems = parityReport();
  if (problems.length) {
    console.warn("[i18n parity] mismatches:", problems);
  } else {
    console.info("[i18n parity] EN/AR content parity OK");
  }
  window.__i18nParity = problems;
  window.__links = LINKS;
  void SUPPORTED;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

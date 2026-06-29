/* ==========================================================================
   i18n.js — language state + document application + parity check
   English is the default on first visit (spec FR-015). Choice persists.
   ========================================================================== */

import { CONTENT } from "./content.js";

const STORAGE_KEY = "pref-lang";
export const SUPPORTED = ["en", "ar"];
export const DEFAULT_LANG = "en";

export function getStoredLang() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(v) ? v : null;
  } catch {
    return null;
  }
}

export function getInitialLang() {
  return getStoredLang() || DEFAULT_LANG; // English first (FR-015)
}

export function storeLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* storage unavailable — non-fatal */
  }
}

function setMeta(selector, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute("content", value);
}

/** Apply language at the document level: <html lang/dir>, title, meta tags. */
export function applyDocumentLang(lang) {
  const meta = CONTENT[lang].meta;
  const html = document.documentElement;
  html.setAttribute("lang", meta.lang);
  html.setAttribute("dir", meta.dir);
  document.title = meta.title;
  setMeta('meta[name="description"]', meta.description);
  setMeta('meta[property="og:title"]', meta.title);
  setMeta('meta[property="og:description"]', meta.description);
  setMeta('meta[property="og:locale"]', meta.ogLocale);
  setMeta('meta[name="twitter:title"]', meta.title);
  setMeta('meta[name="twitter:description"]', meta.description);
}

/** Resolve a dotted path ("about.heading") within a content object. */
export function resolve(obj, path) {
  return path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);
}

/**
 * Verify EN/AR parity (same keys, equal array lengths). Returns an array of
 * problem strings (empty = parity OK). Used by validation (spec FR-003).
 */
export function parityReport() {
  const problems = [];
  const walk = (en, ar, path) => {
    if (Array.isArray(en)) {
      if (!Array.isArray(ar)) return problems.push(`${path}: ar is not an array`);
      if (en.length !== ar.length)
        problems.push(`${path}: length ${en.length} (en) vs ${ar.length} (ar)`);
      en.forEach((v, i) => walk(v, ar[i], `${path}[${i}]`));
    } else if (en && typeof en === "object") {
      if (!ar || typeof ar !== "object") return problems.push(`${path}: ar missing object`);
      Object.keys(en).forEach((k) => {
        if (!(k in ar)) problems.push(`${path}.${k}: missing in ar`);
        else walk(en[k], ar[k], `${path}.${k}`);
      });
    }
  };
  walk(CONTENT.en, CONTENT.ar, "CONTENT");
  return problems;
}

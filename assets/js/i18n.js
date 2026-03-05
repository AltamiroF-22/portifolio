/* ── i18n.js — SRP: language switching ── */
import pt from "../locales/pt.js";
import en from "../locales/en.js";
import de from "../locales/de.js";

const translations = { pt, en, de };
let currentLang = "pt";

export function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang =
    lang === "pt" ? "pt-BR" : lang === "de" ? "de" : "en";
  document.documentElement.setAttribute("data-lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key] !== undefined)
      el.textContent = translations[lang][key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (translations[lang][key] !== undefined)
      el.innerHTML = translations[lang][key];
  });

  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.textContent = translations[lang]["lang.btn"];
    gsap.fromTo(
      btn,
      { opacity: 0, y: -5 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
    );
  }

  try {
    localStorage.setItem("lang", lang);
  } catch (e) {}
}

export function toggleLang() {
  if (currentLang === "pt") applyLang("en");
  else if (currentLang === "en") applyLang("de");
  else applyLang("pt");
}

export function initLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved && saved !== "pt") applyLang(saved);
  } catch (e) {}
}

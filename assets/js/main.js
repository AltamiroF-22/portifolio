/* ── main.js — Entry point ── */
import { initLang, toggleLang } from "./i18n.js";
import { initScroll } from "./scroll.js";
import { initCursor } from "./cursor.js";
import { initPreloader } from "./preloader.js";
import { heroIn, initAnimations } from "./animations.js";

// Expose toggleLang globally so the HTML onclick="toggleLang()" works
window.toggleLang = toggleLang;

gsap.registerPlugin(ScrollTrigger);

initScroll();
initCursor();
initLang();
initPreloader(() => heroIn());
initAnimations();

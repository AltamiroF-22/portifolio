/* ── scroll.js — SRP: Lenis smooth scroll ── */

export function initScroll() {
  const lenis = new Lenis({ lerp: 0.08, smooth: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

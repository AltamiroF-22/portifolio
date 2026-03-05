/* ── preloader.js — SRP: preloader animation ── */

export function initPreloader(onComplete) {
  const pre = document.getElementById("preloader");
  const cnt = document.getElementById("pre-count");
  const bar = document.getElementById("pre-bar");

  gsap
    .timeline()
    .to(bar, { width: "100%", duration: 1.8, ease: "power2.inOut" })
    .to(
      cnt,
      {
        innerText: 100,
        duration: 1.8,
        snap: { innerText: 1 },
        ease: "power2.inOut",
      },
      "<",
    )
    .to(
      pre,
      {
        yPercent: -100,
        duration: 0.9,
        ease: "expo.inOut",
        onComplete: () => {
          pre.style.display = "none";
          onComplete();
        },
      },
      "+=0.15",
    );
}

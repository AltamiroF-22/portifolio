/* ── animations.js — SRP: GSAP reveals, counters, parallax ── */

/* Hero entrance (called by preloader onComplete) */
export function heroIn() {
  gsap.to("#hero .clip > *", {
    y: 0,
    duration: 1.1,
    stagger: 0.1,
    ease: "expo.out",
  });

  gsap.to("#scroll-line", {
    scaleY: 0.25,
    repeat: -1,
    yoyo: true,
    duration: 1.4,
    ease: "power1.inOut",
  });
}

/* All scroll-triggered animations */
export function initAnimations() {
  // DRY: sr-reveal and sr-dark share identical params
  ["sr-reveal", "sr-dark"].forEach((cls) => {
    gsap.utils.toArray(`.${cls}`).forEach((el) => {
      gsap.fromTo(
        el,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        },
      );
    });
  });

  // Project rows
  gsap.utils.toArray(".proj-row").forEach((row, i) => {
    gsap.fromTo(
      row,
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: i * 0.07,
        ease: "power3.out",
        scrollTrigger: { trigger: row, start: "top 92%", once: true },
      },
    );
  });

  // Number counters
  document.querySelectorAll(".counter").forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () =>
        gsap.to(el, {
          innerText: +el.dataset.target,
          duration: 1.6,
          snap: { innerText: 1 },
          ease: "power2.out",
        }),
    });
  });

  // Hero parallax
  gsap.to("#hero .font-display", {
    yPercent: 18,
    ease: "none",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

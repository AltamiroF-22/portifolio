/* ── cursor.js — SRP: custom cursor ── */

export function initCursor() {
  const dot = document.getElementById("cur-dot");
  const ring = document.getElementById("cur-ring");

  let mx = 0,
    my = 0,
    rx = 0,
    ry = 0;

  window.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    gsap.to(dot, { x: mx, y: my, duration: 0.08 });
  });

  gsap.ticker.add(() => {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    gsap.set(ring, { x: rx, y: ry });
  });

  document
    .querySelectorAll("a, button, .proj-row, .cta-btn")
    .forEach((el) => {
      el.addEventListener("mouseenter", () =>
        document.body.classList.add("is-hovering"),
      );
      el.addEventListener("mouseleave", () =>
        document.body.classList.remove("is-hovering"),
      );
    });
}

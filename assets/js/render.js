/* ── render.js — SRP: fetch & inject HTML components ── */

const COMPONENTS = [
  "preloader",
  "nav",
  "hero",
  "ticker",
  "work",
  "about",
  "contact",
  "footer",
];

export async function render() {
  const parts = await Promise.all(
    COMPONENTS.map((name) =>
      fetch(`assets/components/${name}.html`).then((r) => r.text()),
    ),
  );
  // Inject directly into <body> after the cursor elements — no wrapper needed
  document.getElementById("cur-ring").insertAdjacentHTML("afterend", parts.join("\n"));
}

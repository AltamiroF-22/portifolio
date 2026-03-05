# Portfolio — Stack & Convenções

## Tech

| Camada | Escolha |
|--------|---------|
| HTML | Semântico, inline styles (sem framework CSS externo além de Tailwind utilitário) |
| CSS | `assets/css/main.css` — base, cursor, preloader, marquee, cards, responsivo |
| JS | ES Modules (`type="module"`), sem bundler |
| Animações | GSAP 3.12.5 + ScrollTrigger (CDN) |
| Scroll suave | Lenis 1.1.13 (CDN) — `lerp: 0.08`, integrado ao GSAP ticker |
| Tipografia | Inter (300/400/500/italic) + Syne (700/800) — Google Fonts |
| Utilitários | Tailwind CSS (CDN, uso mínimo) |
| i18n | PT → EN → DE (ciclo), locale files em `assets/locales/*.js` com `export default {}` |

---

## Estrutura de arquivos

```
playground/
├── index.html              ← HTML monolítico (todas as seções inline)
├── design.html             ← Design system / documentação visual
├── STACK.md                ← Este arquivo
├── PROMPT.md               ← Prompt inicial para novas sessões de IA
└── assets/
    ├── css/
    │   └── main.css        ← Todos os estilos
    ├── js/
    │   ├── main.js         ← Entry point (imports + inits)
    │   ├── i18n.js         ← Troca de idioma
    │   ├── scroll.js       ← Lenis setup
    │   ├── cursor.js       ← Cursor customizado
    │   ├── preloader.js    ← Animação de carregamento
    │   └── animations.js   ← GSAP: heroIn, sr-reveal, counters, parallax
    └── locales/
        ├── pt.js
        ├── en.js
        └── de.js
```

---

## Paleta

| Token | Valor | Uso |
|-------|-------|-----|
| `--bg` | `#f2ede4` | Fundo claro (body, hero, work, contact) |
| `--fg` | `#0f0f0f` | Texto principal |
| `--dark-bg` | `#0f0f0f` | Seção about |
| `--dark-fg` | `#f2ede4` | Texto sobre fundo escuro |

---

## Tipografia

| Classe | Font | Weight | Uso |
|--------|------|--------|-----|
| `.font-display` | Syne | 700/800 | Títulos, logo, counters |
| *(padrão)* | Inter | 300/400/500 | Corpo, labels, nav |

---

## Convenções de CSS

- **`sr-reveal`** — scroll reveal em seções claras (y: 28, opacity: 0 → 1)
- **`sr-dark`** — scroll reveal em seções escuras (mesmo parâmetros)
- **`.clip > *`** — hero entrance (translateY 110% → 0)
- **`.ul-link::after`** — underline animado nos links
- **`.proj-row`** — linha de projeto com hover (scale thumb + translate title)
- **`.counter`** — número animado via GSAP, precisa de `data-target="N"`

---

## Cursor

```css
#cur-dot  { background: #ffffff; mix-blend-mode: difference; }
#cur-ring { border: 1px solid #ffffff; mix-blend-mode: difference; }
```
Mesmo efeito do nav (`mix-blend-mode: difference` com cor branca).  
Desativado em touch (`@media (hover: hover)`).

---

## Responsivo

| Breakpoint | Comportamento |
|-----------|---------------|
| `≤ 900px` | Projetos em coluna, about em coluna, oculta cursor |
| `≤ 600px` | Nav simplificada, hero sem label top-right |
| `≤ 400px` | Fontes reduzidas, thumbnails menores |

---

## i18n — como adiciona uma nova chave

1. Adiciona a chave em `assets/locales/pt.js`, `en.js` e `de.js`
2. No HTML usa `data-i18n="chave"` (texto) ou `data-i18n-html="chave"` (HTML com tags)

---

## Novas páginas — padrão

Toda nova página deve:
- Linkar `assets/css/main.css` no `<head>`
- Incluir `<div id="cur-dot"></div>` e `<div id="cur-ring"></div>` no topo do `<body>`
- Carregar GSAP, ScrollTrigger, Lenis via CDN (mesmas versões)
- Usar `<script type="module" src="assets/js/main.js"></script>` OU scripts próprios se a página for isolada

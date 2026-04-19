# twa-styleguide-2026

Shared CSS design system used as a git submodule by `twa-ticketapp-2026`. Also deployable standalone as a component showcase.

## Stack

- **Astro 5** — static site framework
- **Plain CSS** — no preprocessors, no utility frameworks
- **Docker** — preferred dev environment (Node 20 Alpine, port 4321)
- **GitHub Pages** — deployed to `pacesmarek.github.io/twa-styleguide-2026`

## Dev server

```bash
docker compose up
```

Showcase served at `http://localhost:4321`.

## CSS files

All shared styles live in `src/styles/`:

| File | Purpose |
|------|---------|
| `tokens.css` | CSS variables — colors, spacing, shadows, radii |
| `typography.css` | Inter font import, base font rules |
| `components.css` | Reusable classes: `.btn`, `.card`, `.input`, `.container`, grid |
| `styleguide.css` | Showcase-only layout styles (not consumed by apps) |

Consumer apps import only the files they need via the `@sg-styles` Vite alias.

## Key design tokens

```css
--color-primary: #6EDB92;
--color-error:   #e53e3e;
--color-bg:      #f5f5f5;
```

## Component classes

- **Grid**: `.container`, `.row`, `.col-1` – `.col-12`
- **Forms**: `.form-group`, `.input`, `.alert`, `.alert-error`
- **UI**: `.btn`, `.btn-primary`, `.card`
- **Layout**: `.login-screen`, `.login-box`

## Project structure

```
src/
├── pages/
│   ├── index.astro     # Component showcase
│   └── login.astro     # Login page template
└── styles/
    ├── tokens.css
    ├── typography.css
    ├── components.css
    └── styleguide.css
astro.config.mjs        # GitHub Pages base path config
docker-compose.yml      # Dev container (port 4321)
```

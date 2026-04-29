# Windrose Compass (windrose-web)

Fan-made companion site for **Windrose** (Early Access): Vue 3 + Vite, wiki tables, guides, interactive map, talent planner.

## Commands

```sh
npm install
npm run dev      # local dev
npm run build    # production build (runs sitemap first)
npm run lint
```

Data maintenance scripts live in `scripts/` (map sync, sitemap, asset checks). See `package.json` for names.

## Stack

Vue 3, Vue Router, Leaflet (map). SEO helpers under `src/seo/`.

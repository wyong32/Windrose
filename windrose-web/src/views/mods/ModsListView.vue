<template>
  <article class="mods-ledger-page">
    <header class="mods-ledger-page__masthead" aria-labelledby="mods-ledger-title">
      <div class="container mods-ledger-page__masthead-inner">
        <nav class="page-breadcrumb mods-ledger-page__crumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            <li class="page-breadcrumb__sep" aria-hidden="true">/</li>
            <li><span aria-current="page">Mods</span></li>
          </ol>
        </nav>
        <div class="mods-ledger-page__masthead-grid">
          <div class="mods-ledger-page__title-block">
            <p class="mods-ledger-page__kicker">Quartermaster manifest · EA</p>
            <h1 id="mods-ledger-title">Windrose Mod loadout</h1>
            <p class="mods-ledger-page__deck">
              Same data shape as Guides, plus <strong>downloadUrl</strong> and an optional <strong>stars</strong> field
              (1–5, editorial). Ledger layout is visual only—fields stay minimal.
            </p>
            <p class="mods-ledger-page__deck mods-ledger-page__deck--note">
              Install only what you trust: snapshot saves before you reorder loadouts, then cross-check gear math in the
              equipment wiki and combat cadence notes on Advanced. Hosting a modded world? Re-read the play-online guide
              so passwords and ports stay aligned with whoever joins.
            </p>
          </div>
          <div class="mods-ledger-page__stat-card" aria-label="Listing count">
            <span class="mods-ledger-page__stat-value">{{ sorted.length }}</span>
            <span class="mods-ledger-page__stat-label">entries</span>
          </div>
        </div>
      </div>
    </header>

    <section class="mods-ledger-page__board" aria-labelledby="mods-ledger-list-heading">
      <div class="container">
        <div class="mods-ledger-page__board-head">
          <h2 id="mods-ledger-list-heading" class="mods-ledger-page__board-title">Manifest</h2>
          <p class="mods-ledger-page__board-hint">Sorted by publish date · newest first</p>
        </div>

        <ol v-if="sorted.length" class="mods-ledger" role="list">
          <li v-for="(m, index) in sorted" :key="m.id" class="mods-ledger__item">
            <a :href="`/mods/${m.addressBar}`" class="mods-ledger__row">
              <span class="mods-ledger__rail" aria-hidden="true" />
              <span class="mods-ledger__idx" aria-hidden="true">{{ rowIndex(index) }}</span>
              <div class="mods-ledger__thumb">
                <img
                  :src="publicAssetUrl(m.imageUrl)"
                  :alt="m.imageAlt"
                  width="96"
                  height="96"
                  :loading="index === 0 ? 'eager' : 'lazy'"
                  decoding="async"
                />
              </div>
              <div class="mods-ledger__body">
                <div class="mods-ledger__title-row">
                  <h3 class="mods-ledger__name">{{ m.title }}</h3>
                  <span
                    v-if="typeof m.stars === 'number' && m.stars >= 1"
                    class="mods-ledger__stars"
                    role="img"
                    :aria-label="`Compass rating ${m.stars} of 5 stars`"
                  >
                    <span
                      v-for="n in 5"
                      :key="n"
                      class="mods-ledger__star"
                      :class="{ 'mods-ledger__star--on': n <= m.stars }"
                      aria-hidden="true"
                    >★</span>
                  </span>
                  <span v-if="index === 0" class="mods-ledger__badge">Latest</span>
                </div>
                <div class="mods-ledger__meta">
                  <time :datetime="m.publishDate">{{ m.publishDate }}</time>
                  <span v-if="m.tags?.length" class="mods-ledger__tags">
                    <span v-for="t in m.tags" :key="t" class="mods-ledger__tag">{{ t }}</span>
                  </span>
                </div>
                <p class="mods-ledger__excerpt">{{ excerpt(m) }}</p>
              </div>
              <span class="mods-ledger__go" aria-hidden="true">↗</span>
            </a>
          </li>
        </ol>
        <p v-else class="mods-ledger-page__empty">No mod entries yet.</p>
      </div>
    </section>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import modArticles from '@/data/mods/modArticles.js'
import { publicAssetUrl } from '@/utils/publicAssetUrl.js'

const sorted = computed(() =>
  [...modArticles].sort((a, b) => String(b.publishDate).localeCompare(String(a.publishDate))),
)

function rowIndex(i) {
  return String(i + 1).padStart(2, '0')
}

function excerpt(item) {
  return item?.description || item?.seo?.description || ''
}
</script>

<style scoped>
.mods-ledger-page {
  padding-bottom: 3.5rem;
}

.mods-ledger-page__masthead {
  padding: 1.25rem 0 1.75rem;
  border-bottom: 1px solid rgba(110, 184, 201, 0.22);
  background: linear-gradient(180deg, rgba(14, 22, 34, 0.92) 0%, rgba(8, 12, 20, 0.55) 100%);
}

.mods-ledger-page__masthead-inner {
  position: relative;
}

.mods-ledger-page__masthead-inner::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.35rem;
  bottom: 0.35rem;
  width: 3px;
  border-radius: 2px;
  background: linear-gradient(180deg, var(--color-cyan-bright), var(--color-sea-deep));
  opacity: 0.85;
}

.mods-ledger-page__crumb {
  margin-bottom: 1rem;
  padding-left: 1rem;
}

.mods-ledger-page__masthead-grid {
  display: grid;
  gap: 1.25rem 2rem;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
  padding-left: 1rem;
}

@media (max-width: 768px) {
  .mods-ledger-page__masthead-grid {
    grid-template-columns: 1fr;
  }
}

.mods-ledger-page__kicker {
  margin: 0 0 0.35rem;
  font-family: ui-monospace, 'Cascadia Code', 'Segoe UI Mono', Menlo, Consolas, monospace;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-cyan-bright);
}

.mods-ledger-page__title-block h1 {
  margin: 0 0 0.65rem;
  font-size: clamp(1.65rem, 4vw, 2.35rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-parchment);
}

.mods-ledger-page__deck {
  margin: 0;
  max-width: 46rem;
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--color-text-muted);
}

.mods-ledger-page__deck--note {
  margin-top: 0.85rem;
}

.mods-ledger-page__deck a {
  color: var(--color-sea);
  font-weight: 600;
}

.mods-ledger-page__stat-card {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  min-width: 5.5rem;
  padding: 0.65rem 0.85rem;
  border: 1px dashed rgba(106, 168, 196, 0.45);
  border-radius: 0.2rem;
  background: rgba(6, 9, 16, 0.65);
}

.mods-ledger-page__stat-value {
  font-family: ui-monospace, 'Cascadia Code', Menlo, Consolas, monospace;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text);
  line-height: 1;
}

.mods-ledger-page__stat-label {
  margin-top: 0.25rem;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.mods-ledger-page__board {
  padding: 1.75rem 0 0;
}

.mods-ledger-page__board-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(170, 182, 197, 0.15);
}

.mods-ledger-page__board-title {
  margin: 0;
  font-family: ui-monospace, 'Cascadia Code', Menlo, Consolas, monospace;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.mods-ledger-page__board-hint {
  margin: 0;
  font-size: 0.72rem;
  color: rgba(170, 182, 197, 0.75);
}

.mods-ledger-page__empty {
  margin: 1.5rem 0 0;
  color: var(--color-text-muted);
}

.mods-ledger {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mods-ledger__item + .mods-ledger__item {
  border-top: 1px solid rgba(106, 168, 196, 0.12);
}

.mods-ledger__row {
  display: grid;
  grid-template-columns: 4px 2.5rem 5.25rem minmax(0, 1fr) auto;
  gap: 0.65rem 1rem;
  align-items: center;
  padding: 1rem 0.35rem 1rem 0;
  text-decoration: none;
  color: inherit;
  border-radius: 0.15rem;
  transition:
    background 0.18s ease,
    box-shadow 0.18s ease;
}

@media (max-width: 768px) {
  .mods-ledger__row {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 0.65rem 0.85rem;
    padding: 1rem 0.25rem 1rem 0;
  }

  .mods-ledger__rail {
    flex: 0 0 4px;
    min-height: 4rem;
    align-self: stretch;
    order: 0;
  }

  .mods-ledger__idx {
    order: 1;
    padding-top: 0.2rem;
  }

  .mods-ledger__thumb {
    order: 2;
  }

  .mods-ledger__go {
    order: 3;
    margin-left: auto;
    padding-top: 0.15rem;
  }

  .mods-ledger__body {
    flex: 1 1 100%;
    order: 4;
    min-width: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mods-ledger__row {
    transition: none;
  }
}

.mods-ledger__row:hover {
  background: rgba(106, 168, 196, 0.06);
  box-shadow: inset 0 0 0 1px rgba(106, 168, 196, 0.12);
}

.mods-ledger__row:focus-visible {
  outline: 2px solid var(--color-cyan-bright);
  outline-offset: 2px;
}

.mods-ledger__rail {
  grid-column: 1;
  align-self: stretch;
  min-height: 3.5rem;
  width: 4px;
  border-radius: 2px;
  background: linear-gradient(180deg, rgba(110, 184, 201, 0.55), rgba(61, 111, 130, 0.35));
}

.mods-ledger__idx {
  grid-column: 2;
  font-family: ui-monospace, Menlo, Consolas, monospace;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: rgba(170, 182, 197, 0.85);
}

.mods-ledger__thumb {
  grid-column: 3;
  width: 100%;
  max-width: 5.25rem;
  aspect-ratio: 1;
  border-radius: 0.2rem;
  overflow: hidden;
  border: 1px solid rgba(106, 168, 196, 0.28);
  background: var(--color-bg-deep);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.35);
}

.mods-ledger__thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 768px) {
  .mods-ledger__thumb {
    flex: 0 0 4.5rem;
    max-width: 4.5rem;
  }
}

.mods-ledger__body {
  grid-column: 4;
  min-width: 0;
}

.mods-ledger__title-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.65rem;
  margin-bottom: 0.35rem;
}

.mods-ledger__name {
  margin: 0;
  font-size: clamp(1.02rem, 2.2vw, 1.18rem);
  font-weight: 650;
  line-height: 1.25;
  color: var(--color-parchment);
}

.mods-ledger__badge {
  font-family: ui-monospace, Menlo, Consolas, monospace;
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 0.12rem 0.4rem;
  border-radius: 0.12rem;
  color: var(--color-bg-deep);
  background: var(--color-cyan-bright);
}

.mods-ledger__stars {
  display: inline-flex;
  gap: 0.02em;
  font-size: 0.78rem;
  line-height: 1;
  letter-spacing: 0.02em;
}

.mods-ledger__star {
  color: rgba(160, 188, 210, 0.22);
}

.mods-ledger__star--on {
  color: #d4a857;
}

.mods-ledger__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem 0.65rem;
  margin-bottom: 0.4rem;
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.mods-ledger__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.mods-ledger__tag {
  padding: 0.1rem 0.38rem;
  border-radius: 0.1rem;
  border: 1px solid rgba(170, 182, 197, 0.28);
  font-size: 0.65rem;
  color: rgba(238, 242, 248, 0.82);
}

.mods-ledger__excerpt {
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--color-text-muted);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.mods-ledger__go {
  grid-column: 5;
  font-size: 1.1rem;
  color: var(--color-cyan-bright);
  opacity: 0.65;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.mods-ledger__row:hover .mods-ledger__go {
  transform: translate(3px, -3px);
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .mods-ledger__go {
    transition: none;
  }

  .mods-ledger__row:hover .mods-ledger__go {
    transform: none;
  }
}
</style>

<template>
  <article class="wiki-module wiki-hub-page">
    <section class="page-hero page-hero--tome" aria-labelledby="wiki-hub-heading">
      <div class="container">
        <nav class="page-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            <li class="page-breadcrumb__sep" aria-hidden="true">/</li>
            <li><span aria-current="page">Wiki</span></li>
          </ol>
        </nav>
        <div class="page-hero__shell">
          <span class="page-hero__sigil" aria-hidden="true" />
          <p class="page-hero__eyebrow">Windrose Compass · fan reference hub · six data decks · Early Access</p>
          <h1 id="wiki-hub-heading">Windrose Wiki — Survival Items, Crafting &amp; Ship Reference</h1>
          <div class="page-hero__meta">
            <span>Early Access tables</span>
            <span>No login</span>
            <span>Fan-maintained</span>
          </div>
          <p class="page-hero__lead">
            Six filterable tables for materials, food, weapons, gear, ship parts, and misc—no login. Fan-maintained; not an
            official site.
          </p>
        </div>

        <!-- 广告位 -->
        <div class="ad-wrap" style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center;">
          <GptBanner gpt-slot-id="div-gpt-ad-wiki-hub-01" :rotation-index="0" />
        </div>
      </div>
    </section>

    <section class="wiki-hub-roster-section" aria-labelledby="wiki-roster-heading">
      <div class="container">
        <h2 id="wiki-roster-heading" class="wiki-hub-roster-section__title">Data deck index</h2>
        <p class="wiki-hub-roster-section__lede">
          Ledger-style index—each row opens that deck’s full table. Use the filter on each page, then Ctrl+F or ⌘F on
          the table if you need a second pass. After big patches, names or icons may lag briefly while we refresh.
        </p>
        <ol class="wiki-hub-roster">
          <li v-for="(slug, index) in WIKI_CATEGORY_ORDER" :key="slug" class="wiki-hub-roster__item">
            <a class="wiki-hub-roster__link" :href="`/wiki/${slug}`">
              <span class="wiki-hub-roster__n" aria-hidden="true">{{ deckIndex(index) }}</span>
              <span class="wiki-hub-roster__code">{{ slug }}</span>
              <span class="wiki-hub-roster__main">
                <span class="wiki-hub-roster__label">{{ WIKI_CATEGORY_META[slug].label }}</span>
                <span class="wiki-hub-roster__tagline">{{ WIKI_CATEGORY_META[slug].tagline }}</span>
              </span>
              <span class="wiki-hub-roster__chev" aria-hidden="true">→</span>
            </a>
          </li>
        </ol>
        <!-- 广告位 -->
        <div class="ad-wrap" style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center;">
          <GptBanner gpt-slot-id="div-gpt-ad-wiki-hub-02" :rotation-index="1" />
        </div>
      </div>
    </section>

    <section class="wiki-hub-after-section" aria-labelledby="wiki-after-use-heading">
      <div class="container">
        <div class="wiki-hub-after wr-html-prose">
          <h2 id="wiki-after-use-heading">How to use this hub</h2>
          <p>
            Use the numbered index above: each row opens that category’s full table. If a map popup names something you
            do not recognize, try another deck, then cross-check pins on the interactive map—when filters or legend jargon
            confuse you once, that workspace is the fastest way to match icons to geography and move on. Planning a full
            respec? Open the talent planner in another tab so you can read perk wording beside these rows.
          </p>

          <p class="wiki-hub-contributor-note">
            Spotted a wrong name, icon, or stat after a patch? It is usually just a slow refresh on our side—check back
            soon or ping the maintainers wherever this site is published.
          </p>
        </div>
        <!-- 广告位 -->
        <div class="ad-wrap" style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center;">
          <GptBanner gpt-slot-id="div-gpt-ad-wiki-hub-03" :rotation-index="2" />
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import GptBanner from '@/components/GptBanner.vue'
import { WIKI_CATEGORY_ORDER, WIKI_CATEGORY_META } from '@/data/wiki/categories.js'

function deckIndex(i) {
  return String(i + 1).padStart(2, '0')
}
</script>

<style src="./wiki-styles.css"></style>

<style scoped>
.wiki-hub-after-section {
  padding: 2rem 0 3rem;
}

.wiki-hub-after {
  margin: 0;
  padding: 1.35rem 1.35rem 1.5rem;
  border-radius: 0.35rem;
  border: 1px solid rgba(201, 164, 92, 0.22);
  background: rgba(8, 9, 12, 0.78);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.45);
}

.wiki-hub-contributor-note {
  margin-bottom: 0;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--color-text-muted);
}

.page-hero__lead :deep(a) {
  color: var(--color-sea);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.page-hero__lead :deep(a:hover) {
  color: var(--color-cyan-bright);
}
</style>

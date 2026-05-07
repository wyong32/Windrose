<template>
  <article class="guides-hub">
    <section class="page-hero page-hero--tome" aria-labelledby="guides-hub-title">
      <div class="container">
        <nav class="page-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            <li class="page-breadcrumb__sep" aria-hidden="true">/</li>
            <li><span aria-current="page">Windrose Guides</span></li>
          </ol>
        </nav>
        <div class="page-hero__shell">
          <span class="page-hero__sigil" aria-hidden="true" />
          <p class="page-hero__eyebrow">Editorial · routes &amp; systems</p>
          <h1 id="guides-hub-title">Windrose Guides</h1>
          <div class="page-hero__meta">
            <span>Map tactics</span>
            <span>Progression</span>
            <span>Patch-safe</span>
          </div>
          <p class="page-hero__lead">
            Long reads for routes, builds, and systems—each card is a full article. Need tables or coordinates? Use the
            wiki or map next.
          </p>
        </div>
        <!-- 广告位 -->
        <div class="ad-wrap" style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center;">
          <GptBanner gpt-slot-id="div-gpt-ad-guides-list-01" :rotation-index="0" />
        </div>
      </div>
    </section>

    <section class="guides-hub__grid-wrap" aria-labelledby="guides-list-heading">
      <div class="container">
        <h2 id="guides-list-heading" class="guides-hub__list-title">Latest articles</h2>
        <ul class="guides-hub__grid" role="list">
          <li v-for="a in sorted" :key="a.id">
            <a :href="`/guides/${a.addressBar}`" class="guides-card">
              <div class="guides-card__media">
                <img
                  :src="a.imageUrl"
                  :alt="a.imageAlt"
                  width="640"
                  height="360"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="guides-card__body">
                <div class="guides-card__meta">
                  <time :datetime="a.publishDate">{{ a.publishDate }}</time>
                  <span v-if="a.tags?.length" class="guides-card__tags">
                    <span v-for="t in a.tags" :key="t" class="guides-card__tag">{{ t }}</span>
                  </span>
                </div>
                <h3 class="guides-card__title">{{ a.title }}</h3>
                <p class="guides-card__excerpt">{{ excerpt(a) }}</p>
              </div>
            </a>
          </li>
        </ul>
        <!-- 广告位 -->
        <div class="ad-wrap" style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center;">
          <GptBanner gpt-slot-id="div-gpt-ad-guides-list-02" :rotation-index="1" />
        </div>
        <div class="guides-hub__after prose-after wr-html-prose">
          <p>
            New to the archipelago? Read Getting Started before you deep-dive build guides. If an article cites a weapon
            family you do not recognize, verify the row in the weapons wiki the same session—patch weeks can shuffle names
            faster than prose updates.
          </p>
        </div>
        <!-- 广告位 -->
        <div class="ad-wrap" style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center;">
          <GptBanner gpt-slot-id="div-gpt-ad-guides-list-03" :rotation-index="2" />
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import GptBanner from '@/components/GptBanner.vue'
import guideArticles from '@/data/guides/guideArticles.js'

const sorted = computed(() =>
  [...guideArticles].sort((a, b) => String(b.publishDate).localeCompare(String(a.publishDate))),
)

function excerpt(item) {
  return item?.description || item?.seo?.description || ''
}
</script>

<style scoped>
.guides-hub {
  padding-bottom: 3rem;
}

.guides-hub__grid-wrap {
  padding: 1.5rem 0 2.5rem;
}

.guides-hub__after {
  margin-top: 1.75rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(160, 188, 210, 0.14);
  max-width: 68ch;
}

.guides-hub__after p {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--color-text-muted);
}

.guides-hub__after a {
  color: var(--color-sea);
  font-weight: 600;
}

.guides-hub__list-title {
  margin: 0 0 1rem;
  font-size: clamp(1.2rem, 2.4vw, 1.45rem);
  color: var(--color-parchment);
}

.guides-hub__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1.1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (max-width: 768px) {
  .guides-hub__grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 1025px) {
  .guides-hub__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.guides-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 0.35rem;
  overflow: hidden;
  border: 1px solid rgba(201, 168, 106, 0.28);
  background: rgba(8, 9, 12, 0.78);
  text-decoration: none;
  color: inherit;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.45);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

@media (prefers-reduced-motion: reduce) {
  .guides-card {
    transition: none;
  }
}

.guides-card:hover {
  border-color: rgba(106, 168, 196, 0.45);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.55);
  transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  .guides-card:hover {
    transform: none;
  }
}

.guides-card:focus-visible {
  outline: 2px solid var(--color-cyan-bright);
  outline-offset: 3px;
}

.guides-card__media {
  aspect-ratio: 16 / 9;
  background: var(--color-bg-deep);
  overflow: hidden;
}

.guides-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.guides-card__body {
  padding: 0.85rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  flex: 1;
}

.guides-card__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem 0.65rem;
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.guides-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.guides-card__tag {
  padding: 0.1rem 0.4rem;
  border-radius: 0.15rem;
  border: 1px solid rgba(201, 168, 106, 0.25);
  font-size: 0.65rem;
  color: rgba(238, 242, 248, 0.88);
}

.guides-card__title {
  margin: 0;
  font-size: clamp(1.05rem, 2vw, 1.2rem);
  line-height: 1.25;
  color: var(--color-parchment);
}

.guides-card__excerpt {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--color-text-muted);
  flex: 1;
}
</style>

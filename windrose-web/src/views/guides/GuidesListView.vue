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
        <div class="ad-wrap">
          <GptBanner gpt-slot-id="div-gpt-ad-guides-list-01" :rotation-index="0" />
        </div>
      </div>
    </section>

    <section class="guides-hub__grid-wrap" aria-labelledby="guides-list-heading">
      <div class="container">
        <div class="guides-hub__filter-block">
          <div class="guides-hub__filter-accent" aria-hidden="true" />
          <div class="guides-hub__filter-head">
            <div class="guides-hub__filter-text">
              <p class="guides-hub__filter-eyebrow">Browse</p>
              <h2 id="guides-list-heading" class="guides-hub__list-title">Latest articles</h2>
              <p class="guides-hub__filter-lead">
                Pick a lane below—newest first within each view. Use
                <span class="guides-hub__filter-hint">All guides</span>
                for the full library.
              </p>
            </div>
          </div>
          <div class="guides-hub__chips-wrap">
            <div class="guides-hub__chips" role="group" aria-label="Guide categories">
            <button
              type="button"
              class="guides-hub__chip"
              :class="{ 'guides-hub__chip--active': selectedClassify === null }"
              :aria-pressed="selectedClassify === null"
              @click="selectedClassify = null"
            >
              <span class="guides-hub__chip-label">All guides</span>
              <span class="guides-hub__chip-count" aria-hidden="true">{{ totalCount }}</span>
            </button>
            <button
              v-for="c in GUIDE_CLASSIFY"
              :key="c.id"
              type="button"
              class="guides-hub__chip"
              :class="{ 'guides-hub__chip--active': selectedClassify === c.id }"
              :aria-pressed="selectedClassify === c.id"
              :title="c.description"
              @click="selectedClassify = c.id"
            >
              <span class="guides-hub__chip-label">{{ c.label }}</span>
              <span class="guides-hub__chip-count" aria-hidden="true">{{ countInClassify(c.id) }}</span>
            </button>
            </div>
          </div>
        </div>

        <p v-if="displayed.length === 0" class="guides-hub__empty" role="status">
          Nothing in this category yet—try another filter or view all guides.
        </p>
        <ul v-else class="guides-hub__grid" role="list">
          <li v-for="a in displayed" :key="a.id">
            <a :href="`/guides/${a.addressBar}`" class="guides-card">
              <div class="guides-card__media">
                <div class="guides-card__media-shade" aria-hidden="true" />
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
                  <span
                    v-if="classifyLabel(a.classify)"
                    class="guides-card__classify"
                    :class="a.classify ? `guides-card__classify--${a.classify}` : ''"
                  >{{ classifyLabel(a.classify) }}</span>
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
        <div class="ad-wrap">
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
        <div class="ad-wrap">
          <GptBanner gpt-slot-id="div-gpt-ad-guides-list-03" :rotation-index="2" />
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { computed, ref } from 'vue'
import GptBanner from '@/components/GptBanner.vue'
import guideArticles from '@/data/guides/guideArticles.js'
import { GUIDE_CLASSIFY } from '@/data/guides/guideClassify.js'

const selectedClassify = ref(null)

const totalCount = computed(() => guideArticles.length)

const sorted = computed(() =>
  [...guideArticles].sort((a, b) => String(b.publishDate).localeCompare(String(a.publishDate))),
)

const displayed = computed(() => {
  const id = selectedClassify.value
  if (!id) return sorted.value
  return sorted.value.filter((a) => a.classify === id)
})

function countInClassify(classifyId) {
  return guideArticles.filter((a) => a.classify === classifyId).length
}

function classifyLabel(classifyId) {
  return GUIDE_CLASSIFY.find((c) => c.id === classifyId)?.label ?? ''
}

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

.guides-hub__filter-block {
  position: relative;
  display: grid;
  gap: 1.2rem;
  margin-bottom: 1.85rem;
  padding: 1.45rem 1.35rem 1.4rem;
  padding-top: 1.55rem;
  border-radius: 0.55rem;
  border: 1px solid rgba(201, 168, 106, 0.2);
  background:
    linear-gradient(155deg, rgba(14, 18, 28, 0.97) 0%, rgba(7, 9, 14, 0.95) 45%, rgba(10, 20, 30, 0.92) 100%),
    radial-gradient(100% 120% at 90% -10%, rgba(90, 188, 214, 0.09), transparent 52%);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.045) inset,
    0 22px 52px rgba(0, 0, 0, 0.44);
}

@media (min-width: 880px) {
  .guides-hub__filter-block {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
    align-items: center;
    gap: 1rem 2rem;
  }
}

.guides-hub__filter-accent {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(320px, 70%);
  height: 3px;
  border-radius: 0 0 6px 6px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(201, 168, 106, 0.35),
    var(--color-brass),
    var(--color-sea),
    rgba(106, 168, 196, 0.45),
    transparent
  );
  opacity: 0.92;
  pointer-events: none;
}

.guides-hub__filter-head {
  min-width: 0;
}

.guides-hub__filter-text {
  margin-bottom: 0;
}

.guides-hub__filter-eyebrow {
  margin: 0 0 0.4rem;
  font-family: var(--font-heading, inherit);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(160, 188, 210, 0.72);
}

.guides-hub__list-title {
  margin: 0 0 0.45rem;
  font-size: clamp(1.22rem, 2.5vw, 1.52rem);
  font-family: var(--font-heading, inherit);
  letter-spacing: 0.02em;
  color: var(--color-parchment);
}

.guides-hub__filter-lead {
  margin: 0;
  max-width: 42rem;
  font-size: 0.91rem;
  line-height: 1.62;
  color: rgba(186, 194, 210, 0.88);
}

.guides-hub__filter-hint {
  color: rgba(244, 248, 255, 0.94);
  font-weight: 600;
}

.guides-hub__chips-wrap {
  min-width: 0;
}

.guides-hub__chips {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.5rem;
  align-items: stretch;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0.2rem 0 0.45rem;
  margin: 0 -0.15rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(160, 188, 210, 0.35) transparent;
  -webkit-overflow-scrolling: touch;
}

.guides-hub__chips::-webkit-scrollbar {
  height: 5px;
}

.guides-hub__chips::-webkit-scrollbar-thumb {
  background: rgba(160, 188, 210, 0.28);
  border-radius: 999px;
}

@media (min-width: 880px) {
  .guides-hub__chips {
    flex-wrap: wrap;
    overflow-x: visible;
    justify-content: flex-end;
    padding-bottom: 0;
    margin: 0;
  }
}

.guides-hub__chip {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.48rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(160, 188, 210, 0.22);
  background: linear-gradient(180deg, rgba(16, 22, 34, 0.92), rgba(6, 8, 12, 0.88));
  color: var(--color-parchment);
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: none;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
  white-space: nowrap;
  transition:
    border-color 0.22s ease,
    background 0.22s ease,
    box-shadow 0.22s ease,
    color 0.22s ease,
    transform 0.18s ease;
}

.guides-hub__chip:hover {
  border-color: rgba(106, 168, 196, 0.42);
  background: linear-gradient(180deg, rgba(22, 32, 44, 0.95), rgba(10, 14, 22, 0.92));
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.35);
}

.guides-hub__chip:active {
  transform: scale(0.98);
}

@media (prefers-reduced-motion: reduce) {
  .guides-hub__chip:active {
    transform: none;
  }
}

.guides-hub__chip:focus-visible {
  outline: 2px solid var(--color-brass);
  outline-offset: 3px;
}

.guides-hub__chip--active {
  border-color: rgba(90, 188, 214, 0.55);
  background: linear-gradient(
    165deg,
    rgba(28, 52, 68, 0.65) 0%,
    rgba(14, 26, 38, 0.92) 55%,
    rgba(8, 12, 20, 0.94) 100%
  );
  color: #f5f8fc;
  box-shadow:
    0 0 0 1px rgba(90, 188, 214, 0.18),
    0 10px 28px rgba(0, 0, 0, 0.38),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

.guides-hub__chip-label {
  line-height: 1.25;
}

.guides-hub__chip-count {
  min-width: 1.4rem;
  padding: 0.14rem 0.42rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.38);
  font-size: 0.64rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  color: rgba(238, 242, 248, 0.92);
}

.guides-hub__chip--active .guides-hub__chip-count {
  background: rgba(0, 0, 0, 0.5);
  color: var(--color-cyan-bright, #6ad4ee);
}

.guides-hub__empty {
  margin: 0 0 1.25rem;
  padding: 1.5rem 1.25rem;
  text-align: center;
  font-size: 0.94rem;
  line-height: 1.55;
  color: rgba(186, 194, 210, 0.88);
  border: 1px dashed rgba(160, 188, 210, 0.28);
  border-radius: 0.45rem;
  background: rgba(6, 8, 12, 0.45);
}

.guides-hub__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1.25rem;
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
  border-radius: 0.45rem;
  overflow: hidden;
  border: 1px solid rgba(201, 168, 106, 0.26);
  background: linear-gradient(180deg, rgba(14, 16, 22, 0.72), rgba(6, 8, 12, 0.85));
  text-decoration: none;
  color: inherit;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.03) inset,
    0 16px 44px rgba(0, 0, 0, 0.48);
  transition:
    border-color 0.22s ease,
    box-shadow 0.22s ease,
    transform 0.22s ease;
}

@media (prefers-reduced-motion: reduce) {
  .guides-card {
    transition: border-color 0.22s ease, box-shadow 0.22s ease;
  }
}

.guides-card:hover {
  border-color: rgba(106, 168, 196, 0.42);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.04) inset,
    0 22px 56px rgba(0, 0, 0, 0.55);
  transform: translateY(-3px);
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
  position: relative;
  aspect-ratio: 16 / 9;
  background: var(--color-bg-deep);
  overflow: hidden;
}

.guides-card__media-shade {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    transparent 38%,
    rgba(4, 6, 10, 0.35) 72%,
    rgba(4, 6, 10, 0.72) 100%
  );
}

.guides-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.guides-card:hover .guides-card__media img {
  transform: scale(1.04);
}

@media (prefers-reduced-motion: reduce) {
  .guides-card:hover .guides-card__media img {
    transform: none;
  }
}

.guides-card__body {
  position: relative;
  padding: 0.95rem 1.05rem 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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

.guides-card__classify {
  flex-basis: 100%;
  margin-bottom: 0.05rem;
  padding: 0.22rem 0.55rem;
  width: fit-content;
  max-width: 100%;
  border-radius: 0.25rem;
  border: 1px solid rgba(160, 188, 210, 0.28);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: rgba(230, 238, 248, 0.95);
  background: rgba(12, 18, 28, 0.65);
}

.guides-card__classify--gameplay {
  border-color: rgba(106, 168, 196, 0.45);
  background: linear-gradient(135deg, rgba(24, 42, 56, 0.55), rgba(10, 18, 28, 0.75));
  color: rgba(186, 228, 242, 0.98);
}

.guides-card__classify--fishing {
  border-color: rgba(90, 200, 190, 0.42);
  background: linear-gradient(135deg, rgba(18, 52, 56, 0.55), rgba(8, 28, 32, 0.78));
  color: rgba(186, 245, 238, 0.96);
}

.guides-card__classify--ships {
  border-color: rgba(201, 168, 106, 0.42);
  background: linear-gradient(135deg, rgba(56, 42, 28, 0.45), rgba(18, 14, 10, 0.82));
  color: rgba(248, 228, 196, 0.96);
}

.guides-card__classify--equipment {
  border-color: rgba(196, 106, 120, 0.38);
  background: linear-gradient(135deg, rgba(52, 28, 36, 0.55), rgba(18, 10, 14, 0.82));
  color: rgba(248, 214, 218, 0.96);
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

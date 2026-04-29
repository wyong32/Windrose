<template>
  <article v-if="article" class="mod-article" :key="article.addressBar">
    <section class="page-hero page-hero--hold page-hero--detail" aria-labelledby="mod-detail-title">
      <div class="container">
        <nav class="page-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            <li class="page-breadcrumb__sep" aria-hidden="true">/</li>
            <li><a href="/mods">Mods</a></li>
            <li class="page-breadcrumb__sep" aria-hidden="true">/</li>
            <li><span aria-current="page">{{ article.title }}</span></li>
          </ol>
        </nav>
        <div class="page-hero__shell">
          <span class="page-hero__sigil" aria-hidden="true" />
          <p class="page-hero__eyebrow">Mod</p>
          <h1 id="mod-detail-title">{{ article.title }}</h1>
          <div class="page-hero__meta">
            <span><time :datetime="article.publishDate">{{ article.publishDate }}</time></span>
            <span v-for="t in article.tags" :key="t">{{ t }}</span>
          </div>
        </div>
      </div>
    </section>

    <div class="mod-article__split-wrap">
      <div class="container mod-article__split">
        <aside class="mod-article__rail" aria-label="Mod sidebar">
          <figure class="mod-article__cover">
            <img
              :src="coverSrc"
              :alt="article.imageAlt"
              width="640"
              height="360"
              loading="lazy"
              decoding="async"
              @error="onCoverError"
            />
          </figure>

          <a
            v-if="article.downloadUrl"
            class="mod-article__download"
            :href="article.downloadUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download mod
            <span aria-hidden="true">↗</span>
          </a>

          <div v-if="ratingStars.length" class="mod-article__rating">
            <p class="mod-article__rating-eyebrow">Compass score</p>
            <p
              class="mod-article__rating-stars"
              role="img"
              :aria-label="`Compass recommendation: ${article.stars} out of 5 stars`"
            >
              <span
                v-for="(on, i) in ratingStars"
                :key="i"
                class="mod-article__star"
                :class="{ 'mod-article__star--on': on }"
                aria-hidden="true"
              >★</span>
            </p>
            <p class="mod-article__rating-note">
              This is <strong>Windrose Compass’ editorial score only</strong>—a quick signal for whether to open the
              download page and skim the listing before you play. It is <strong>not</strong> a technical review of the
              mod or author support. For install folders, versions, conflicts, and patch notes, use the Nexus page opened
              via <strong>Download mod</strong> and the author’s notes there.
            </p>
          </div>

          <div class="mod-article__meta">
            <div>
              <p class="mod-article__meta-label">Published</p>
              <time class="mod-article__meta-value" :datetime="article.publishDate">{{ article.publishDate }}</time>
            </div>
            <div v-if="article.tags?.length">
              <p class="mod-article__meta-label">Tags</p>
              <ul class="mod-article__taglist">
                <li v-for="t in article.tags" :key="t">{{ t }}</li>
              </ul>
            </div>
          </div>

          <div v-if="asideItems.length" class="mod-article__more">
            <p class="mod-article__more-label">More mods</p>
            <ul class="mod-article__morelist">
              <li v-for="l in asideItems" :key="l.to">
                <a :href="l.to">{{ l.label }}</a>
              </li>
            </ul>
            <a href="/mods" class="mod-article__more-all">All mods</a>
          </div>
        </aside>

        <main class="mod-article__main">
          <div class="mod-article__prose wr-html-prose" v-html="article.detailsHtml" />
        </main>
      </div>
    </div>
  </article>

  <article v-else class="mod-article mod-article--missing">
    <div class="container mod-article__missing-inner">
      <h1>Mod not found</h1>
      <p>This slug is not in the local manifest.</p>
      <a href="/mods">Back to mods</a>
    </div>
  </article>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import modArticles from '@/data/mods/modArticles.js'
import { getByAddressBar } from '@/utils/contentLookup.js'
import { publicAssetUrl } from '@/utils/publicAssetUrl.js'

const route = useRoute()

const article = computed(() => getByAddressBar(modArticles, route.params.addressBar))

const coverFallback = () => publicAssetUrl('/images/bg.webp')
const coverBroken = ref(false)

const coverSrc = computed(() => {
  const u = article.value?.imageUrl
  if (!u) return coverFallback()
  if (coverBroken.value) return coverFallback()
  return publicAssetUrl(u)
})

watch(
  () => article.value?.addressBar,
  () => {
    coverBroken.value = false
  },
)

function onCoverError() {
  if (coverBroken.value) return
  coverBroken.value = true
}

/** Five booleans: star slot lit when true */
const ratingStars = computed(() => {
  const n0 = article.value?.stars
  if (typeof n0 !== 'number' || n0 < 1) return []
  const n = Math.min(5, Math.round(n0))
  return Array.from({ length: 5 }, (_, i) => i < n)
})

const asideItems = computed(() => {
  const cur = article.value?.addressBar
  return modArticles
    .filter((a) => a.addressBar !== cur)
    .slice(0, 6)
    .map((a) => ({ label: a.title, to: `/mods/${a.addressBar}` }))
})
</script>

<style scoped>
.mod-article {
  padding-bottom: 3rem;
}

.mod-article__split-wrap {
  padding: 1.5rem 0 2.5rem;
}

.mod-article__split {
  display: grid;
  grid-template-columns: minmax(220px, 280px) minmax(0, 1fr);
  gap: 1.5rem 1.75rem;
  align-items: start;
}

.mod-article__rail {
  position: sticky;
  top: 5.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.mod-article__cover {
  margin: 0;
  border-radius: 0.35rem;
  overflow: hidden;
  border: 1px solid rgba(106, 168, 196, 0.3);
  background: var(--color-bg-deep);
  aspect-ratio: 16 / 10;
}

.mod-article__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.mod-article__download {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.65rem 1rem;
  border-radius: 0.2rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  color: #061018;
  background: linear-gradient(180deg, var(--color-cyan-bright), #4a96a8);
  border: 1px solid rgba(110, 184, 201, 0.5);
  transition: filter 0.15s ease;
}

.mod-article__download:hover {
  filter: brightness(1.06);
}

.mod-article__rating {
  padding: 0.75rem 0.9rem 0.85rem;
  border-radius: 0.35rem;
  border: 1px solid rgba(201, 168, 106, 0.28);
  background: linear-gradient(165deg, rgba(32, 26, 18, 0.55), rgba(8, 9, 12, 0.82));
}

.mod-article__rating-eyebrow {
  margin: 0 0 0.35rem;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-brass);
}

.mod-article__rating-stars {
  margin: 0 0 0.45rem;
  font-size: 1.15rem;
  line-height: 1;
  letter-spacing: 0.06em;
}

.mod-article__star {
  color: rgba(160, 188, 210, 0.22);
}

.mod-article__star--on {
  color: #e6c06a;
  text-shadow: 0 0 12px rgba(230, 192, 106, 0.35);
}

.mod-article__rating-note {
  margin: 0;
  font-size: 0.78rem;
  line-height: 1.55;
  color: var(--color-text-muted);
}

.mod-article__meta {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 0.65rem 0.9rem;
  border-radius: 0.35rem;
  border: 1px dashed rgba(106, 168, 196, 0.25);
  font-size: 0.8rem;
}

.mod-article__meta-label {
  margin: 0 0 0.15rem;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.mod-article__meta-value {
  color: var(--color-text);
  font-weight: 600;
}

.mod-article__taglist {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.mod-article__taglist li {
  padding: 0.12rem 0.45rem;
  border-radius: 0.15rem;
  border: 1px solid rgba(106, 168, 196, 0.25);
  font-size: 0.68rem;
  color: var(--color-text-muted);
}

.mod-article__more {
  padding: 0.75rem 0.9rem 0.9rem;
  border-radius: 0.35rem;
  border: 1px solid rgba(106, 168, 196, 0.22);
  background: rgba(8, 9, 12, 0.55);
}

.mod-article__more-label {
  margin: 0 0 0.45rem;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.mod-article__morelist {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.mod-article__morelist a {
  font-size: 0.82rem;
  line-height: 1.35;
  color: var(--color-sea);
  text-decoration: none;
}

.mod-article__morelist a:hover {
  color: var(--color-brass);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.mod-article__more-all {
  display: inline-block;
  margin-top: 0.6rem;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  text-decoration: none;
}

.mod-article__more-all:hover {
  color: var(--color-cyan-bright);
}

.mod-article__main {
  min-width: 0;
}

.mod-article__prose {
  padding: 1.35rem 1.35rem 1.5rem;
  border-radius: 0.35rem;
  border: 1px solid rgba(106, 168, 196, 0.22);
  background: rgba(8, 9, 12, 0.78);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.45);
  overflow-x: auto;
}

@media (max-width: 1024px) {
  .mod-article__split {
    grid-template-columns: 1fr;
  }

  .mod-article__rail {
    position: static;
  }
}

.mod-article--missing {
  padding: 3rem 0;
}

.mod-article__missing-inner {
  max-width: 36rem;
}

.mod-article__missing-inner h1 {
  margin-top: 0;
}
</style>

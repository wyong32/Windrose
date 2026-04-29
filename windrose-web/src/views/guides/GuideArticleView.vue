<template>
  <article v-if="article" class="guide-detail" :key="article.addressBar">
    <section class="page-hero page-hero--tome page-hero--detail" aria-labelledby="guide-detail-title">
      <div class="container">
        <nav class="page-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            <li class="page-breadcrumb__sep" aria-hidden="true">/</li>
            <li><a href="/guides">Guides</a></li>
            <li class="page-breadcrumb__sep" aria-hidden="true">/</li>
            <li><span aria-current="page">{{ article.title }}</span></li>
          </ol>
        </nav>
        <div class="page-hero__shell">
          <span class="page-hero__sigil" aria-hidden="true" />
          <p class="page-hero__eyebrow">Guide</p>
          <h1 id="guide-detail-title">{{ article.title }}</h1>
          <div class="page-hero__meta">
            <span><time :datetime="article.publishDate">{{ article.publishDate }}</time></span>
            <span v-for="t in article.tags" :key="t">{{ t }}</span>
          </div>
        </div>
      </div>
    </section>

    <div class="guide-detail__split-wrap">
      <div class="container guide-detail__split">
        <main ref="guideMainEl" class="guide-detail__main" @click.capture="onGuideMainClickCapture">
          <div
            v-if="article.iframeUrl"
            class="guide-detail__embed ratio-16-9"
          >
            <iframe
              :src="heroYoutubeEmbedSrc"
              :title="`${article.title} — embedded video`"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
          <div class="guide-detail__prose wr-html-prose" v-html="article.detailsHtml" />
        </main>

        <aside class="guide-detail__aside" aria-label="Article sidebar">
          <div class="aside-stack">
            <figure class="aside-cover">
              <img
                :src="publicAssetUrl(article.imageUrl)"
                :alt="article.imageAlt"
                width="640"
                height="360"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div class="aside-block">
              <p class="aside-block__label">Summary</p>
              <p class="aside-block__summary">{{ summaryText }}</p>
            </div>

            <div class="aside-meta">
              <div>
                <p class="aside-meta__label">Published</p>
                <time class="aside-meta__value" :datetime="article.publishDate">{{ article.publishDate }}</time>
              </div>
              <div v-if="article.tags?.length" class="aside-meta__tags">
                <p class="aside-meta__label">Tags</p>
                <ul class="aside-taglist">
                  <li v-for="t in article.tags" :key="t">{{ t }}</li>
                </ul>
              </div>
            </div>

            <div v-if="asideItems.length" class="aside-more">
              <p class="aside-more__label">{{ asideMoreLabel }}</p>
              <ul class="aside-more__list">
                <li v-for="l in asideItems" :key="l.to">
                  <a :href="l.to">{{ l.label }}</a>
                </li>
              </ul>
              <a v-if="asideMoreShowGuidesLink" href="/guides" class="aside-more__all">All guides</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </article>

  <article v-else class="guide-detail guide-detail--missing">
    <div class="container guide-detail__missing-inner">
      <h1>Guide not found</h1>
      <p>This slug is not in the local guides list yet.</p>
      <a href="/guides">Back to guides</a>
    </div>
  </article>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { publicAssetUrl } from '@/utils/publicAssetUrl.js'
import { useRoute } from 'vue-router'
import guideArticles from '@/data/guides/guideArticles.js'
import { getByAddressBar } from '@/utils/contentLookup.js'

const route = useRoute()
const guideMainEl = ref(null)
/** 顶部 embed 的起始秒（与正文时间戳联动）；换篇时清零 */
const guideVideoStartSeconds = ref(null)

watch(
  () => route.params.addressBar,
  () => {
    guideVideoStartSeconds.value = null
  },
)

/** @param {string | null | undefined} raw */
function parseYoutubeTParamSeconds(raw) {
  if (raw == null || raw === '') return 0
  const s = String(raw).trim()
  if (/^\d+$/.test(s)) return parseInt(s, 10)
  let total = 0
  const h = s.match(/(\d+)h/i)
  const m = s.match(/(\d+)m/i)
  const sec = s.match(/(\d+)s/i)
  if (h) total += parseInt(h[1], 10) * 3600
  if (m) total += parseInt(m[1], 10) * 60
  if (sec) total += parseInt(sec[1], 10)
  else if (!h && !m) {
    const n = parseInt(s.replace(/[^\d]/g, ''), 10)
    if (!Number.isNaN(n)) total = n
  }
  return total
}

/** @param {string} href */
function parseYoutubeWatchJump(href) {
  let url
  try {
    url = new URL(href)
  } catch {
    return null
  }
  const host = url.hostname.replace(/^www\./, '')
  let videoId = null
  let tRaw = null
  if (host === 'youtu.be') {
    videoId = url.pathname.replace(/^\//, '').split('/')[0] || null
    tRaw = url.searchParams.get('t')
  } else if (host === 'youtube.com' || host === 'm.youtube.com') {
    if (url.pathname === '/watch' || url.pathname === '/watch/') {
      videoId = url.searchParams.get('v')
      tRaw = url.searchParams.get('t')
    }
  } else {
    return null
  }
  if (!videoId || tRaw === null || tRaw === '') return null
  return { videoId, startSeconds: parseYoutubeTParamSeconds(tRaw) }
}

/** @param {string} src */
function youtubeEmbedIdFromSrc(src) {
  const m = src.match(/youtube(?:-nocookie)?\.com\/embed\/([^?&#/]+)/)
  return m ? m[1] : null
}

/**
 * @param {string} oldSrc
 * @param {string} videoId
 * @param {number} startSeconds
 * @param {{ autoplay?: boolean }} [opts] 时间戳跳转时开启 autoplay，避免整页重载 iframe 后默认停在暂停态
 */
function buildYoutubeEmbedSrcWithStart(oldSrc, videoId, startSeconds, opts = {}) {
  const nocookie = oldSrc.includes('youtube-nocookie.com')
  const base = nocookie
    ? `https://www.youtube-nocookie.com/embed/${videoId}`
    : `https://www.youtube.com/embed/${videoId}`
  const q = new URLSearchParams()
  q.set('start', String(startSeconds))
  if (opts.autoplay) {
    q.set('autoplay', '1')
    q.set('playsinline', '1')
  }
  return `${base}?${q.toString()}`
}

/** @param {MouseEvent} e */
function onGuideMainClickCapture(e) {
  const el = e.target
  if (!(el instanceof Element)) return
  const anchor = el.closest('a')
  if (!anchor || !anchor.href) return
  const jump = parseYoutubeWatchJump(anchor.getAttribute('href') || anchor.href)
  if (!jump) return
  const main = guideMainEl.value
  if (!main) return
  const prose = main.querySelector('.guide-detail__prose')
  const proseIframes = prose?.querySelectorAll(
    'iframe[src*="youtube.com/embed"], iframe[src*="youtube-nocookie.com/embed"]',
  )
  let updated = false
  const heroRaw = article.value?.iframeUrl
  const heroId = heroRaw ? youtubeEmbedIdFromSrc(heroRaw) : null
  if (heroId === jump.videoId) {
    guideVideoStartSeconds.value = jump.startSeconds
    updated = true
  }
  proseIframes?.forEach((frame) => {
    if (!(frame instanceof HTMLIFrameElement)) return
    const curId = youtubeEmbedIdFromSrc(frame.src)
    if (curId !== jump.videoId) return
    frame.src = buildYoutubeEmbedSrcWithStart(frame.src, jump.videoId, jump.startSeconds, {
      autoplay: true,
    })
    updated = true
  })
  if (!updated) return
  e.preventDefault()
  e.stopPropagation()
  const scrollTarget =
    main.querySelector('.guide-detail__embed iframe') ||
    main.querySelector('.guide-detail__prose iframe[src*="youtube.com/embed"], .guide-detail__prose iframe[src*="youtube-nocookie.com/embed"]')
  if (scrollTarget instanceof HTMLElement) {
    scrollTarget.scrollIntoView({ behavior: 'auto', block: 'center' })
  }
}

const article = computed(() => getByAddressBar(guideArticles, route.params.addressBar))

const heroYoutubeEmbedSrc = computed(() => {
  const raw = article.value?.iframeUrl
  if (!raw) return ''
  const id = youtubeEmbedIdFromSrc(raw)
  if (!id || guideVideoStartSeconds.value == null) return raw
  return buildYoutubeEmbedSrcWithStart(raw, id, guideVideoStartSeconds.value, { autoplay: true })
})

const summaryText = computed(() => article.value?.seo?.description || article.value?.description || '')

const asideItems = computed(() => {
  const cur = article.value?.addressBar
  const others = guideArticles
    .filter((a) => a.addressBar !== cur)
    .slice(0, 6)
    .map((a) => ({ label: a.title, to: `/guides/${a.addressBar}` }))
  if (others.length) return others
  return [
    { label: 'Interactive map', to: '/map' },
    { label: 'Wiki hub', to: '/wiki' },
    { label: 'Mods', to: '/mods' },
  ]
})

const hasOtherGuides = computed(() => {
  const cur = article.value?.addressBar
  return guideArticles.some((a) => a.addressBar !== cur)
})

const asideMoreLabel = computed(() => (hasOtherGuides.value ? 'More guides' : 'On this site'))
const asideMoreShowGuidesLink = hasOtherGuides
</script>

<style scoped>
.guide-detail {
  padding-bottom: 3rem;
}

.guide-detail__split-wrap {
  padding: 1.5rem 0 2.5rem;
}

.guide-detail__split {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(220px, 300px);
  gap: 1.5rem 1.75rem;
  align-items: start;
}

.guide-detail__main {
  min-width: 0;
}

.guide-detail__embed {
  margin-bottom: 1rem;
  border-radius: 0.35rem;
  overflow: hidden;
  border: 1px solid rgba(201, 168, 106, 0.28);
  background: #000;
}

.ratio-16-9 {
  aspect-ratio: 16 / 9;
}

.guide-detail__embed iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

.guide-detail__prose {
  padding: 1.35rem 1.35rem 1.5rem;
  border-radius: 0.35rem;
  border: 1px solid rgba(201, 164, 92, 0.22);
  background: rgba(8, 9, 12, 0.78);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.45);
  overflow-x: auto;
}

.guide-detail__aside {
  min-width: 0;
  position: sticky;
  top: 5.5rem;
}

.aside-stack {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.aside-cover {
  margin: 0;
  border-radius: 0.35rem;
  overflow: hidden;
  border: 1px solid rgba(201, 168, 106, 0.28);
  background: var(--color-bg-deep);
  aspect-ratio: 16 / 10;
}

.aside-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.aside-block {
  padding: 0.75rem 0.9rem;
  border-radius: 0.35rem;
  border: 1px solid rgba(201, 168, 106, 0.22);
  background: rgba(8, 9, 12, 0.78);
}

.aside-block__label {
  margin: 0 0 0.35rem;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.aside-block__summary {
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--color-text-muted);
}

.aside-meta {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 0.65rem 0.9rem;
  border-radius: 0.35rem;
  border: 1px dashed rgba(201, 168, 106, 0.22);
  font-size: 0.8rem;
}

.aside-meta__label {
  margin: 0 0 0.15rem;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.aside-meta__value {
  color: var(--color-text);
  font-weight: 600;
}

.aside-taglist {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.aside-taglist li {
  padding: 0.12rem 0.45rem;
  border-radius: 0.15rem;
  border: 1px solid rgba(201, 168, 106, 0.25);
  font-size: 0.68rem;
  color: var(--color-text-muted);
}

.aside-more {
  padding: 0.75rem 0.9rem 0.9rem;
  border-radius: 0.35rem;
  border: 1px solid rgba(201, 168, 106, 0.22);
  background: rgba(8, 9, 12, 0.55);
}

.aside-more__label {
  margin: 0 0 0.45rem;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.aside-more__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.aside-more__list a {
  font-size: 0.82rem;
  line-height: 1.35;
  color: var(--color-sea);
  text-decoration: none;
}

.aside-more__list a:hover {
  color: var(--color-brass);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.aside-more__all {
  display: inline-block;
  margin-top: 0.6rem;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  text-decoration: none;
}

.aside-more__all:hover {
  color: var(--color-brass);
}

@media (max-width: 1024px) {
  .guide-detail__split {
    grid-template-columns: 1fr;
  }

  .guide-detail__aside {
    order: -1;
    position: static;
  }
}

.guide-detail--missing {
  padding: 3rem 0;
}

.guide-detail__missing-inner {
  max-width: 36rem;
}

.guide-detail__missing-inner h1 {
  margin-top: 0;
}
</style>

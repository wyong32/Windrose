<template>
  <div class="home-page">
    <section class="hero-section" aria-labelledby="hero-heading">
      <div class="container hero-frame">
        <div class="hero-card">
          <p class="hero-eyebrow">Windrose · Early Access · All-out PvE war on the tide</p>
          <div class="hero-rule" aria-hidden="true" />
          <h1 id="hero-heading">
            Windrose Game — Windrose Wiki, Interactive Map, Guides &amp; Mods for Early Access
          </h1>

          <ul class="hero-strip" aria-label="What you will find here">
            <li>
              <span class="hero-strip__label">Maps</span>
              Chart the islands, mark camps and wrecks, and plan routes with the same atlas tools you use in squad voice.
            </li>
            <li>
              <span class="hero-strip__label">Wiki</span>
              Ships, weapons, food, and gear in plain lists—handy when you are theory-crafting a build between voyages.
            </li>
            <li>
              <span class="hero-strip__label">Guides</span>
              Longer reads for first nights, map literacy, and camp habits—written for crews, not for patch-note robots.
            </li>
          </ul>

          <p class="hero-lede">
            Windrose Compass is a fan-made companion for Windrose in Early Access: the same session usually has you
            juggling the interactive map for pins, the wiki for item names, and longer guides when you need more than a
            table row—use the buttons above for the fastest hop; the play-online article is there when you want invite
            codes and host parity explained in plain language.
          </p>

          <p class="hero-tagline" role="presentation">
            Pirates · Open World Survival Craft · PvE · Naval Combat · Exploration · Crafting
          </p>

          <div class="hero-actions">
            <a class="btn btn-primary" href="/guides/play-windrose-online">Play online with friends</a>
            <a class="btn btn-ghost" href="/guides">All guides</a>
            <a class="btn btn-map" href="/map">Interactive Map</a>
            <a class="btn btn-wiki" href="/wiki">Browse wiki</a>
          </div>

          <p class="hero-note">Fan resource · not affiliated with Windrose developers or publishers.</p>
        </div>

        <!-- 广告位（单元路径按 rotationIndex 在 banner_1～3 间轮换） -->
        <div class="ad-wrap" style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center;">
          <GptBanner gpt-slot-id="div-gpt-ad-home-banner-1" :rotation-index="0" />
        </div>
      </div>
    </section>

    <section class="quick-links-section" aria-labelledby="quick-heading">
      <div class="container">
        <div class="quick-links-content">
          <header class="home-section-head">
            <h2 id="quick-heading" class="section-title">Quick Links</h2>
            <p class="section-lead">
              These four entry points mirror how crews actually play: get everyone into the same world, read the chart
              like a second monitor, skim Windrose wiki tables between voyages, and only then peek at curated mods when
              you are ready to change the client.
            </p>
          </header>
          <ul class="quick-links-grid" role="list">
            <li>
              <a class="quick-link-card" href="/guides/play-windrose-online">
                <span class="quick-link-card__glyph" aria-hidden="true">
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect
                      x="7"
                      y="10"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      stroke-width="1.35"
                      fill="rgba(106,168,196,0.1)"
                    />
                    <path d="M11 14h10M11 18h6" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" />
                    <circle cx="22" cy="7" r="2.5" stroke="currentColor" stroke-width="1.25" fill="none" />
                  </svg>
                </span>
                <span class="quick-link-card__body">
                  <span class="quick-link-card__title">Play online with friends</span>
                  <span class="quick-link-card__desc">
                    Official solo-or-co-op flow: invite codes, Connect to Server, passwords, patch parity, and quick
                    connection checks—written for crews, not for JSON tuning.
                  </span>
                </span>
                <span class="quick-link-card__chev" aria-hidden="true">→</span>
              </a>
            </li>
            <li>
              <a class="quick-link-card" href="/map">
                <span class="quick-link-card__glyph" aria-hidden="true">
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 22L12 9l6 7 9-12v20H5v-4z"
                      stroke="currentColor"
                      stroke-width="1.35"
                      stroke-linejoin="round"
                      fill="rgba(106,168,196,0.12)"
                    />
                    <circle cx="23" cy="11" r="2" fill="currentColor" opacity="0.85" />
                  </svg>
                </span>
                <span class="quick-link-card__body">
                  <span class="quick-link-card__title">Interactive map</span>
                  <span class="quick-link-card__desc">
                    Pan and zoom the chart, turn marker types on or off, search by name, and share a link so mates jump
                    to the same pin.
                  </span>
                </span>
                <span class="quick-link-card__chev" aria-hidden="true">→</span>
              </a>
            </li>
            <li>
              <a class="quick-link-card" href="/wiki">
                <span class="quick-link-card__glyph" aria-hidden="true">
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 6h14v20H9V6z"
                      stroke="currentColor"
                      stroke-width="1.35"
                      stroke-linejoin="round"
                      fill="rgba(201,168,106,0.08)"
                    />
                    <path d="M12 11h8M12 16h8M12 21h5" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" />
                  </svg>
                </span>
                <span class="quick-link-card__body">
                  <span class="quick-link-card__title">Wiki hub</span>
                  <span class="quick-link-card__desc">
                    Resources, food and tonics, weapons, worn gear, ship bits, and odd quest items—each category opens
                    its own list.
                  </span>
                </span>
                <span class="quick-link-card__chev" aria-hidden="true">→</span>
              </a>
            </li>
            <li>
              <a class="quick-link-card" href="/mods">
                <span class="quick-link-card__glyph" aria-hidden="true">
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect
                      x="7"
                      y="8"
                      width="18"
                      height="16"
                      rx="2"
                      stroke="currentColor"
                      stroke-width="1.35"
                      fill="rgba(8,12,20,0.5)"
                    />
                    <path d="M11 14h10M11 18h7M11 22h9" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" />
                  </svg>
                </span>
                <span class="quick-link-card__body">
                  <span class="quick-link-card__title">Mods manifest</span>
                  <span class="quick-link-card__desc">
                    Short spotlights with author links and install notes—a tiny shelf, not a full mod warehouse.
                  </span>
                </span>
                <span class="quick-link-card__chev" aria-hidden="true">→</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="ad-wrap" style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center;">
          <GptBanner gpt-slot-id="div-gpt-ad-home-banner-2" :rotation-index="1" />
        </div>
      </div>
    </section>

    <section class="map-teaser-section" aria-labelledby="map-heading">
      <div class="container">
        <div class="map-teaser-content">
          <div class="map-teaser-copy">
            <header class="home-section-head home-section-head--tight">
              <h2 id="map-heading" class="section-title">Windrose Interactive Map</h2>
              <p class="section-lead">
                Plan runs the way you already talk in voice: camps for rest, mines and farms for upkeep, ruins and
                wrecks for risky loot, and exploration pins for “we should check that island later.” When a popup names
                an odd resource, cross-check the resources deck on the wiki, then come back to the chart—the full map
                workspace adds search, filters, and coordinates so you are not juggling five tabs mid-expedition.
              </p>
            </header>
            <ul class="map-teaser-bullets" aria-label="What the full map adds">
              <li>Turn whole categories on or off, then fine-tune single marker types when you only want caves or ship fights.</li>
              <li>Search by place name or a tag you remember from a popup—hit Enter to hop between matches.</li>
              <li>Glance at the corner readout when you need a clean x/y callout for screenshots or squad pings.</li>
              <li>Open a pin card for notes and art; copy the page URL if you want someone else to land on the same spot.</li>
            </ul>
            <a class="home-cta-link" href="/map">Open full map workspace →</a>
            <p class="map-teaser-footnote">
              The preview here is coastline-only so the home page stays light. The full atlas links above include every
              marker family plus the corner readout—pair it with Getting Started when you are still learning pin
              vocabulary, or with Advanced when the crew starts routing faction hauls and fort nights.
            </p>
          </div>
          <div ref="mapTeaserRoot" class="map-teaser-visual">
            <HomeWindroseMapEmbed v-if="showHomeMap" />
            <div v-else class="map-teaser-visual__stub" aria-hidden="true" />
          </div>
        </div>
        <div class="ad-wrap" style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center;">
          <GptBanner gpt-slot-id="div-gpt-ad-home-banner-3" :rotation-index="2" />
        </div>
      </div>
    </section>

    <section class="wiki-hub-home-section" aria-labelledby="wiki-home-heading">
      <div class="container">
        <header class="home-section-head">
          <h2 id="wiki-home-heading" class="section-title">Windrose Wiki</h2>
          <p class="section-lead">
            Six stacks line up with how you browse in game: materials, food and tonics, weapons, worn kit, ship parts,
            and a grab-bag for odd quest items. When a guide mentions a craft you cannot place, search the right deck
            here, then sanity-check the route on the interactive map before you burn sail time. Planning a respec?
            Cross-check numbers with the talent tree planner the same night you change gear.
          </p>
        </header>
        <ul class="wiki-home-grid" role="list">
          <li v-for="slug in wikiOrder" :key="slug">
            <a class="wiki-home-card" :href="`/wiki/${slug}`">
              <span class="wiki-home-card__eyebrow">Deck</span>
              <h3 class="wiki-home-card__title">{{ wikiMeta[slug].label }}</h3>
              <p class="wiki-home-card__tagline">{{ wikiMeta[slug].tagline }}</p>
              <p class="wiki-home-card__desc">{{ wikiMeta[slug].description }}</p>
              <span class="wiki-home-card__cta">Browse {{ wikiMeta[slug].label }} →</span>
            </a>
          </li>
        </ul>
        <p class="wiki-home-all">
          <a class="home-cta-link" href="/wiki">Open wiki hub overview →</a>
        </p>
        <div class="ad-wrap" style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center;">
          <GptBanner gpt-slot-id="div-gpt-ad-home-banner-4" :rotation-index="3" />
        </div>
      </div>
    </section>

    <section class="guides-section" aria-labelledby="guides-heading">
      <div class="container">
        <header class="home-section-head">
          <h2 id="guides-heading" class="section-title">Windrose Guides</h2>
          <p class="section-lead">
            Longer Windrose guides land here first—builds, routes, and systems essays you can read between sessions.
            They complement the wiki tables and the map: use guides for narrative and boss context, then fall back to
            data decks when you only need a number or icon name.
          </p>
        </header>
        <ul v-if="homeGuides.length" class="guides-home-grid" role="list">
          <li v-for="g in homeGuides" :key="g.id">
            <article class="guides-home-card">
              <a class="guides-home-card__link" :href="`/guides/${g.addressBar}`">
                <div class="guides-home-card__media">
                  <img :src="g.imageUrl" :alt="g.imageAlt" width="640" height="360" loading="lazy" decoding="async" />
                </div>
                <div class="guides-home-card__body">
                  <time class="guides-home-card__date" :datetime="g.publishDate">{{ g.publishDate }}</time>
                  <h3 class="guides-home-card__title">{{ g.title }}</h3>
                  <p class="guides-home-card__excerpt">{{ g.description }}</p>
                  <span class="guides-home-card__cta">Read article →</span>
                </div>
              </a>
            </article>
          </li>
        </ul>
        <p v-else class="guides-home-empty">No guides flagged for the home page yet.</p>
        <p class="guides-home-all">
          <a class="home-cta-link" href="/guides">Browse all guides →</a>
        </p>
        <div class="ad-wrap" style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center;">
          <GptBanner gpt-slot-id="div-gpt-ad-home-banner-5" :rotation-index="4" />
        </div>
      </div>
    </section>

    <section class="about-section" aria-labelledby="about-heading">
      <div class="container">
        <div class="about-split">
          <figure class="about-split__figure">
            <img
              src="/images/about-img.jpg"
              width="960"
              height="640"
              alt="Windrose Compass editorial companion mood"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div class="about-split__copy">
            <h2 id="about-heading" class="section-title">Windrose About</h2>
            <p class="about-lead">
              Windrose Compass is a fan-run dock for Windrose in Early Access: one place to open the chart, skim gear
              lists, and read guides when you are not in the client.
            </p>
            <p>
              Most nights you will still live inside three tabs—the map for geography, the wiki for item truth, and
              occasionally talents or guides when you are changing builds or hosting friends. None of that replaces the
              game client; it just cuts down Discord guesswork.
            </p>
            <p>
              We are not the official game site. Patch notes and in-game tooltips still win when a number changes—we
              try to say so plainly when something might be out of date.
            </p>
            <p>
              Whether you are planning tonight’s loot loop, comparing hull ideas with friends, or reading up before you
              host a server for the crew, the aim is simple: fewer tabs, clearer words, more time on the water.
            </p>
            <ul class="about-pillars">
              <li><strong>Maps</strong> — pan, zoom, and filter the archipelago the community marks together.</li>
              <li><strong>Wiki</strong> — six browsable lists for the stuff you craft, wear, eat, and bolt to your ship.</li>
              <li><strong>Guides &amp; mods</strong> — deeper write-ups and a small spotlight shelf when you want more than a table row.</li>
            </ul>
          </div>
        </div>
        <div class="ad-wrap" style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center;">
          <GptBanner gpt-slot-id="div-gpt-ad-home-banner-6" :rotation-index="5" />
        </div>
      </div>
    </section>

    <section class="faq-section" aria-labelledby="faq-heading">
      <div class="container">
        <header class="home-section-head">
          <h2 id="faq-heading" class="section-title">FAQ</h2>
          <p class="section-lead">
            Plain answers for how we run this fan site next to Early Access patches, co-op nights, and whatever the next
            tide brings.
          </p>
        </header>
        <dl class="faq-grid">
          <div v-for="item in faqItems" :key="item.q" class="faq-card">
            <dt class="faq-card__q">{{ item.q }}</dt>
            <dd class="faq-card__a">{{ item.a }}</dd>
          </div>
        </dl>
        <div class="ad-wrap" style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center;">
          <GptBanner gpt-slot-id="div-gpt-ad-home-banner-7" :rotation-index="6" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent, onMounted, onUnmounted, ref } from 'vue'
import GptBanner from '@/components/GptBanner.vue'
import guideArticles from '@/data/guides/guideArticles.js'
import { WIKI_CATEGORY_ORDER, WIKI_CATEGORY_META } from '@/data/wiki/categories.js'

const wikiOrder = WIKI_CATEGORY_ORDER
const wikiMeta = WIKI_CATEGORY_META

/** 延后加载 Leaflet：减首屏主线程压力；chunk 与地图页共用逻辑 */
const HomeWindroseMapEmbed = defineAsyncComponent({
  loader: () => import('@/components/home/HomeWindroseMapEmbed.vue'),
  delay: 100,
})

const mapTeaserRoot = ref(null)
const showHomeMap = ref(false)

let mapTeaserIo = null
let mapTeaserFallbackTimer = null

onMounted(() => {
  const el = mapTeaserRoot.value
  if (!el) {
    showHomeMap.value = true
    return
  }
  const fallbackMs = 4500
  mapTeaserFallbackTimer = window.setTimeout(() => {
    if (!showHomeMap.value) showHomeMap.value = true
  }, fallbackMs)
  mapTeaserIo = new IntersectionObserver(
    (entries) => {
      const hit = entries.some((e) => e.isIntersecting)
      if (hit) {
        showHomeMap.value = true
        mapTeaserIo?.disconnect()
        mapTeaserIo = null
        if (mapTeaserFallbackTimer != null) {
          window.clearTimeout(mapTeaserFallbackTimer)
          mapTeaserFallbackTimer = null
        }
      }
    },
    { root: null, rootMargin: '100px 0px', threshold: 0.01 },
  )
  mapTeaserIo.observe(el)
})

onUnmounted(() => {
  if (mapTeaserFallbackTimer != null) {
    window.clearTimeout(mapTeaserFallbackTimer)
    mapTeaserFallbackTimer = null
  }
  mapTeaserIo?.disconnect()
  mapTeaserIo = null
})

const homeGuides = computed(() =>
  guideArticles
    .filter((a) => a.isHome === true)
    .sort((a, b) => String(b.publishDate).localeCompare(String(a.publishDate))),
)

const faqItems = [
  {
    q: 'Is this the official Windrose site?',
    a: 'No. Windrose Compass is a fan project. When a patch drops, trust the game client, store page, and official patch notes first for what actually changed.',
  },
  {
    q: 'Why does the map here look different from what I see in game?',
    a: 'This map is built from community charts and markers. It is meant for planning and callouts, not a pixel-perfect mirror of every live-world spawn. Cross-check anything that feels off before you sail an hour for one chest.',
  },
  {
    q: 'Can I trust the wiki numbers after a balance patch?',
    a: 'Sometimes yes, sometimes not yet. Big combat or crafting passes can nudge values before we catch up. If a number looks wrong, treat it as a heads-up to double-check in game.',
  },
  {
    q: 'Do I need an account to use the map or wiki?',
    a: 'No sign-up here. Open the pages, bookmark what helps, and play. Links out to mod authors or stores still need the internet when you click them.',
  },
  {
    q: 'How do articles get picked for the home page?',
    a: 'We keep a small spotlight row for guides we think help new crews or map regulars. Everything else lives in the full Guides list.',
  },
  {
    q: 'Can I use the site offline?',
    a: 'After the first visit your browser can cache a lot of it. The map and lists are meant to work without calling extra services, but fresh downloads and store pages still need a connection.',
  },
  {
    q: 'Does this replace mod sites or the workshop?',
    a: 'No. We only highlight a few mods with short write-ups and links. Always read the author page, back up your save, and install only what you trust.',
  },
  {
    q: 'Where should I start if we want to play Windrose online together?',
    a: 'Open the “Play online with friends” guide for invite codes, who hosts, and connection checks. If you need a 24/7 world, use the publisher’s dedicated-server documentation from Steam, Epic, or the official game channels.',
  },
  {
    q: 'Can I reuse your map or lists elsewhere?',
    a: 'Respect the game’s rules for fan work, credit people who helped mark the map, and do not pretend the Windrose team endorsed your project unless they actually said so.',
  },
  {
    q: 'Who runs Windrose Compass?',
    a: 'Players who sail Windrose in Early Access and share notes in public. If you want to help improve a page, use whatever contact path the site owner lists on the project readme.',
  },
]
</script>

<style scoped>
.home-page {
  position: relative;
  padding-bottom: 2.5rem;
  background-color: var(--color-bg-deep);
}

.hero-section {
  position: relative;
  padding: clamp(5rem, 11vw, 7.25rem) 0 clamp(2.75rem, 7vw, 4rem);
  overflow: hidden;
  min-height: clamp(19rem, 48vw, 30rem);
  background-color: var(--color-bg-deep);
  background-image: url('/images/bg.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: linear-gradient(185deg, rgba(6, 10, 18, 0.42) 0%, rgba(6, 10, 18, 0.78) 100%);
}

.hero-frame {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.hero-card {
  position: relative;
  width: 100%;
  max-width: min(65rem, 100%);
  margin-inline: auto;
  padding: clamp(1.6rem, 3.4vw, 2.35rem) clamp(1.25rem, 2.8vw, 2.25rem) clamp(1.45rem, 2.8vw, 2rem);
  text-align: center;
  border: 1px solid rgba(201, 168, 106, 0.42);
  border-radius: 0.2rem;
  background: linear-gradient(168deg, rgba(16, 20, 30, 0.94) 0%, rgba(8, 10, 16, 0.92) 100%);
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.45),
    0 12px 32px rgba(0, 0, 0, 0.38),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.hero-eyebrow {
  margin: 0 auto 0.55rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--color-sea);
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.65);
}

.hero-eyebrow::before,
.hero-eyebrow::after {
  content: '';
  width: min(56px, 12vw);
  height: 2px;
  border-radius: 2px;
}

.hero-eyebrow::before {
  background: linear-gradient(90deg, transparent, rgba(201, 168, 106, 0.6));
}

.hero-eyebrow::after {
  background: linear-gradient(90deg, rgba(106, 168, 196, 0.6), transparent);
}

.hero-rule {
  width: min(180px, 42%);
  height: 2px;
  margin: 0 auto 0.75rem;
  border-radius: 2px;
  background: linear-gradient(90deg, transparent, rgba(201, 168, 106, 0.45), rgba(106, 168, 196, 0.4), transparent);
}

.hero-card h1 {
  margin: 0 0 1.1rem;
  font-size: clamp(1.9rem, 4.5vw, 2.8rem);
  line-height: 1.12;
  text-shadow: 0 3px 28px rgba(0, 0, 0, 0.75);
}

.hero-strip {
  margin: 0 0 1.2rem;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  border: 1px solid rgba(160, 188, 210, 0.16);
  border-radius: 0.18rem;
  overflow: hidden;
  background: rgba(4, 6, 10, 0.35);
}

@media (max-width: 768px) {
  .home-page {
    padding-bottom: 1.75rem;
  }

  .hero-section {
    padding: clamp(4rem, 10vw, 5.25rem) 0 clamp(1.5rem, 5vw, 2.25rem);
    /* 保留占位，避免首屏内容随字体/折行在背景图解码前后跳动（CLS） */
    min-height: min(52vh, 22rem);
  }

  .hero-card {
    padding: 1rem 0.8rem 1.05rem;
  }

  .hero-eyebrow {
    font-size: 0.6rem;
    letter-spacing: 0.14em;
    gap: 0.45rem;
  }

  .hero-card h1 {
    margin-bottom: 0.75rem;
    font-size: clamp(1.38rem, 5.4vw, 1.72rem);
    line-height: 1.18;
  }

  .hero-strip {
    grid-template-columns: 1fr;
    margin-bottom: 0.95rem;
  }

  .hero-strip li {
    border-right: none;
    border-bottom: 1px solid rgba(160, 188, 210, 0.1);
    padding: 0.5rem 0.45rem;
    font-size: 0.74rem;
  }

  .hero-strip li:last-child {
    border-bottom: none;
  }

  .hero-strip__label {
    font-size: 0.58rem;
    letter-spacing: 0.12em;
  }

  .hero-lede {
    font-size: 0.92rem;
    line-height: 1.58;
  }

  .hero-tagline {
    margin-top: 0.75rem;
    font-size: 0.62rem;
    line-height: 1.45;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
    margin-top: 1rem;
    gap: 0.4rem;
    max-width: 18.5rem;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions .btn {
    width: 100%;
    max-width: none;
    padding: 0.52rem 0.75rem;
    font-size: 0.62rem;
    letter-spacing: 0.08em;
  }

  .hero-note {
    margin-top: 0.85rem;
    padding-top: 0.65rem;
    font-size: 0.66rem;
  }

  .quick-links-section,
  .map-teaser-section,
  .wiki-hub-home-section,
  .guides-section,
  .about-section,
  .faq-section {
    padding: clamp(1.35rem, 4vw, 2rem) 0;
  }

  .section-title {
    padding-left: 0.85rem;
    margin-bottom: 0.4rem;
  }

  .section-lead {
    margin-bottom: 1.1rem;
    font-size: 0.9rem;
    line-height: 1.55;
  }

  .quick-link-card {
    padding: 0.9rem 0.85rem;
    gap: 0.65rem 0.75rem;
  }

  .quick-link-card__title {
    font-size: 0.88rem;
  }

  .quick-link-card__desc {
    font-size: 0.8rem;
    line-height: 1.48;
  }

  .wiki-home-card {
    padding: 0.95rem 0.9rem 1rem;
  }

  .wiki-home-card__title {
    font-size: 0.95rem;
  }

  .wiki-home-card__desc {
    font-size: 0.8rem;
  }

  .guides-home-card__body {
    padding: 0.85rem 0.9rem 0.95rem;
  }

  .guides-home-card__title {
    font-size: 0.95rem;
  }

  .guides-home-card__excerpt {
    font-size: 0.8rem;
  }

  .about-lead {
    font-size: 0.92rem;
  }

  .about-split__copy p {
    font-size: 0.88rem;
  }

  .faq-card {
    padding: 0.85rem 0.9rem;
  }

  .faq-card__q {
    font-size: 0.86rem;
  }

  .faq-card__a {
    font-size: 0.8rem;
  }

  .map-teaser-content {
    gap: 1.2rem;
  }

  .map-teaser-bullets {
    font-size: 0.84rem;
    line-height: 1.52;
  }

  .map-teaser-visual {
    min-height: 200px;
    height: min(36vh, 300px);
  }

  .map-teaser-footnote {
    font-size: 0.76rem;
  }

  .home-cta-link {
    font-size: 0.7rem;
  }

  .home-section-head {
    margin-bottom: 0.95rem;
  }
}

.hero-strip li {
  margin: 0;
  padding: 0.65rem 0.55rem;
  text-align: center;
  font-size: 0.8rem;
  line-height: 1.45;
  color: var(--color-text-muted);
  border-right: 1px solid rgba(160, 188, 210, 0.1);
}

.hero-strip li:last-child {
  border-right: none;
}

.hero-strip__label {
  display: block;
  margin-bottom: 0.3rem;
  font-size: 0.64rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-brass);
}

.hero-lede {
  margin: 0;
  color: var(--color-text-muted);
  font-size: clamp(1.02rem, 1.95vw, 1.12rem);
  line-height: 1.68;
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.65);
}

.hero-lede + .hero-lede {
  margin-top: 0.85rem;
}

.hero-tagline {
  margin: 1.05rem auto 0;
  max-width: 38rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: none;
  font-size: clamp(0.68rem, 1.55vw, 0.8rem);
  line-height: 1.55;
  color: var(--color-brass);
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.65);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 0.5rem;
  justify-content: center;
  align-items: stretch;
  margin-top: 1.35rem;
  max-width: 100%;
  width: 100%;
}

.hero-actions .btn {
  flex: 1 1 auto;
  min-width: 0;
  max-width: 100%;
  white-space: normal;
  text-align: center;
  line-height: 1.35;
  hyphens: auto;
}

.hero-note {
  margin: 1.15rem 0 0;
  padding-top: 0.85rem;
  border-top: 1px solid rgba(160, 188, 210, 0.12);
  font-size: 0.72rem;
  line-height: 1.5;
  color: rgba(170, 182, 197, 0.82);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.65rem 1.1rem;
  border-radius: 0.15rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 0.68rem;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid transparent;
  transition: transform 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.btn-primary {
  background: linear-gradient(105deg, var(--color-flame-deep), var(--color-flame) 50%, #a85a3a);
  color: var(--color-parchment);
  border-color: rgba(201, 168, 106, 0.55);
}

.btn-primary:hover {
  transform: translateY(-2px);
  border-color: rgba(201, 168, 106, 0.72);
}

.btn-ghost {
  border-color: rgba(110, 184, 201, 0.65);
  color: var(--color-parchment);
  background: rgba(8, 12, 20, 0.5);
}

.btn-ghost:hover {
  border-color: var(--color-brass);
  color: var(--color-brass);
}

/* Sea-forward solid · pairs with flame primary + cyan ghost */
.btn-map {
  color: var(--color-parchment);
  background: linear-gradient(168deg, rgba(30, 56, 72, 0.95) 0%, rgba(14, 28, 40, 0.92) 100%);
  border-color: rgba(106, 168, 196, 0.55);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

.btn-map:hover {
  transform: translateY(-2px);
  border-color: rgba(140, 200, 214, 0.75);
  color: #f4fbff;
}

/* Brass-forward outline · reads as “reference shelf” */
.btn-wiki {
  color: var(--color-brass);
  background: rgba(8, 10, 16, 0.35);
  border-color: rgba(201, 168, 106, 0.55);
  border-width: 2px;
}

.btn-wiki:hover {
  transform: translateY(-2px);
  border-color: rgba(232, 206, 140, 0.85);
  color: var(--color-sun);
}

@media (prefers-reduced-motion: reduce) {
  .btn-primary:hover,
  .btn-ghost:hover,
  .btn-map:hover,
  .btn-wiki:hover {
    transform: none;
  }
}

.quick-links-section,
.map-teaser-section,
.wiki-hub-home-section,
.guides-section,
.about-section,
.faq-section {
  position: relative;
  padding: clamp(2.1rem, 4.5vw, 3.5rem) 0;
  border-top: 1px solid rgba(160, 188, 210, 0.12);
}

.quick-links-section::before,
.map-teaser-section::before,
.wiki-hub-home-section::before,
.guides-section::before,
.about-section::before,
.faq-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(960px, 88vw);
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, transparent, rgba(201, 168, 106, 0.45), rgba(106, 168, 196, 0.4), transparent);
  opacity: 0.85;
  pointer-events: none;
}

.section-title {
  position: relative;
  margin: 0 0 0.5rem;
  padding-left: 1.1rem;
  text-align: left;
}

.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.08em;
  bottom: 0.08em;
  width: 5px;
  border-radius: 2px;
  background: linear-gradient(180deg, var(--color-flame), var(--color-brass));
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35);
}

.section-lead {
  color: var(--color-text-muted);
  max-width: 64ch;
  margin-bottom: 1.5rem;
}

.home-section-head {
  margin-bottom: 1.25rem;
}

.home-section-head .section-lead {
  margin-bottom: 0;
}

.home-section-head--tight {
  margin-bottom: 0.85rem;
}

.home-cta-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.35rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.78rem;
  text-decoration: none;
  color: var(--color-brass);
  transition: color 0.2s ease;
}

.home-cta-link:hover {
  color: var(--color-sea);
}

.quick-links-grid {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
}

.quick-links-grid > li {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

@media (max-width: 768px) {
  .quick-links-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 1025px) {
  .quick-links-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.quick-link-card {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: start;
  gap: 0.9rem 1rem;
  flex: 1 1 auto;
  width: 100%;
  min-height: 0;
  padding: 1.15rem 1.1rem;
  border-radius: 0.35rem;
  border: 1px solid rgba(201, 168, 106, 0.32);
  background: linear-gradient(165deg, rgba(14, 20, 32, 0.94) 0%, rgba(8, 12, 20, 0.88) 100%);
  text-decoration: none;
  color: inherit;
  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.28);
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.quick-link-card:hover {
  border-color: rgba(106, 168, 196, 0.55);
}

@media (prefers-reduced-motion: no-preference) {
  .quick-link-card:hover {
    transform: translateY(-2px);
  }
}

.quick-link-card__glyph {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.3rem;
  color: var(--color-sea);
  background: rgba(106, 168, 196, 0.1);
  border: 1px solid rgba(106, 168, 196, 0.22);
}

.quick-link-card__glyph svg {
  width: 1.65rem;
  height: 1.65rem;
}

.quick-link-card__body {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-width: 0;
}

.quick-link-card__title {
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--color-parchment);
}

.quick-link-card__desc {
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--color-text-muted);
}

.quick-link-card__chev {
  align-self: center;
  font-size: 1.1rem;
  color: var(--color-brass);
  opacity: 0.85;
}

.map-teaser-content {
  display: grid;
  gap: 1.75rem;
}

@media (min-width: 1025px) {
  .map-teaser-content {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
    align-items: start;
    gap: 2rem;
  }
}

.map-teaser-copy .home-section-head {
  margin-bottom: 0.65rem;
}

.map-teaser-bullets {
  margin: 0 0 1rem;
  padding-left: 1.15rem;
  max-width: 62ch;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

.map-teaser-bullets li {
  margin-bottom: 0.45rem;
}

.map-teaser-bullets li:last-child {
  margin-bottom: 0;
}

/*
 * 首页地图预览：与 MapView 共用 WindroseMapViewport 内部结构。
 * :deep 目标（.windrose-map-viewport、.wr-map__map-wrap、.wr-map__map、.rtv-map-host）须与
 * MapView.vue 无 scoped 样式中的 .wr-map / .map-page 约定保持一致；重命名地图内核类时请两边同改。
 */
.map-teaser-visual {
  position: relative;
  z-index: 0;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  min-height: clamp(220px, 42vw, 440px);
  height: min(46vh, 460px);
  border-radius: 0.4rem;
  overflow: hidden;
  border: 1px solid rgba(201, 168, 106, 0.38);
  background: rgba(6, 10, 16, 0.6);
  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.35);
  --wr-map-ocean: #2a77c4;
}

.map-teaser-visual > :deep(.windrose-map-viewport) {
  flex: 1;
  min-height: 0;
}

/* 内层与外层圆角一致，避免 Leaflet 区比框小一圈 */
.map-teaser-visual :deep(.wr-map__map-wrap),
.map-teaser-visual :deep(.wr-map__map),
.map-teaser-visual :deep(.rtv-map-host) {
  border-radius: 0;
}

.map-teaser-visual__stub {
  flex: 1;
  min-height: 0;
  width: 100%;
  background: linear-gradient(165deg, rgba(42, 119, 196, 0.4) 0%, rgba(8, 14, 24, 0.85) 55%, rgba(6, 10, 16, 0.92) 100%);
}

.map-teaser-footnote {
  margin: 1rem 0 0;
  max-width: 58ch;
  font-size: 0.82rem;
  line-height: 1.55;
  color: var(--color-text-muted);
}

.wiki-home-grid {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (max-width: 768px) {
  .wiki-home-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 1025px) {
  .wiki-home-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.wiki-home-card {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  height: 100%;
  padding: 1.1rem 1.15rem 1.15rem;
  border-radius: 0.35rem;
  border: 1px solid rgba(201, 168, 106, 0.28);
  background: rgba(12, 18, 28, 0.9);
  text-decoration: none;
  color: inherit;
  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.26);
  transition: border-color 0.2s ease;
}

.wiki-home-card:hover {
  border-color: rgba(106, 168, 196, 0.45);
}

.wiki-home-card__eyebrow {
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-sea);
  opacity: 0.9;
}

.wiki-home-card__title {
  margin: 0;
  font-size: 1.05rem;
  font-family: var(--font-heading);
  color: var(--color-parchment);
}

.wiki-home-card__tagline {
  margin: 0;
  font-size: 0.82rem;
  color: var(--color-brass);
  line-height: 1.4;
}

.wiki-home-card__desc {
  margin: 0;
  flex: 1;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--color-text-muted);
}

.wiki-home-card__cta {
  margin-top: 0.35rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-brass);
}

.wiki-home-all {
  margin: 1.35rem 0 0;
}

.guides-home-grid {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
}

@media (max-width: 768px) {
  .guides-home-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 1025px) {
  .guides-home-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.guides-home-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 0.4rem;
  overflow: hidden;
  border: 1px solid rgba(201, 168, 106, 0.3);
  background: rgba(10, 14, 22, 0.92);
  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.3);
  transition: border-color 0.2s ease;
}

.guides-home-card:hover {
  border-color: rgba(106, 168, 196, 0.45);
}

.guides-home-card__link {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  text-decoration: none;
  color: inherit;
}

.guides-home-card__media {
  position: relative;
  flex-shrink: 0;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: rgba(4, 6, 10, 0.85);
}

.guides-home-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.guides-home-card__body {
  padding: 1rem 1.1rem 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.guides-home-card__date {
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-sea);
}

.guides-home-card__title {
  margin: 0;
  font-size: 1.05rem;
  font-family: var(--font-heading);
  line-height: 1.25;
  color: var(--color-parchment);
}

.guides-home-card__excerpt {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--color-text-muted);
  flex: 1;
}

.guides-home-card__cta {
  margin-top: 0.25rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-brass);
}

.guides-home-empty {
  margin: 0;
  padding: 1.25rem;
  border-radius: 0.35rem;
  border: 1px dashed rgba(160, 188, 210, 0.25);
  color: var(--color-text-muted);
  text-align: center;
}

.guides-home-all {
  margin: 1.25rem 0 0;
}

.about-split {
  display: grid;
  gap: 1.75rem;
  align-items: center;
}

@media (min-width: 1025px) {
  .about-split {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
    gap: 2.25rem;
  }
}

.about-split__figure {
  margin: 0;
  border-radius: 0.4rem;
  overflow: hidden;
  border: 1px solid rgba(201, 168, 106, 0.35);
  background: rgba(6, 10, 16, 0.75);
}

.about-split__figure img {
  width: 100%;
  height: auto;
  display: block;
}

.about-split__copy .section-title {
  margin-bottom: 0.65rem;
}

.about-lead {
  margin: 0 0 0.85rem;
  font-size: 1.02rem;
  line-height: 1.6;
  color: var(--color-parchment);
}

.about-split__copy p {
  margin: 0 0 0.85rem;
  max-width: 62ch;
  color: var(--color-text-muted);
  line-height: 1.65;
}

.about-pillars {
  margin: 1rem 0 0;
  padding: 0.85rem 1rem;
  list-style: none;
  border-radius: 0.3rem;
  border: 1px solid rgba(106, 168, 196, 0.2);
  background: rgba(8, 12, 20, 0.55);
}

.about-pillars li {
  margin: 0 0 0.5rem;
  padding-left: 0.15rem;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--color-text-muted);
}

.about-pillars li:last-child {
  margin-bottom: 0;
}

.faq-grid {
  margin: 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (max-width: 768px) {
  .faq-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 1025px) {
  .faq-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.faq-card {
  margin: 0;
  padding: 1rem 1.1rem;
  border-radius: 0.35rem;
  border: 1px solid rgba(201, 168, 106, 0.22);
  background: linear-gradient(168deg, rgba(14, 20, 30, 0.92) 0%, rgba(10, 14, 22, 0.88) 100%);
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.faq-card__q {
  margin: 0;
  font-size: 0.92rem;
  font-weight: 700;
  line-height: 1.35;
  color: var(--color-parchment);
}

.faq-card__a {
  margin: 0;
  font-size: 0.86rem;
  line-height: 1.6;
  color: var(--color-text-muted);
}
</style>

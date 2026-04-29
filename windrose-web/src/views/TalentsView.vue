<template>
  <article class="guide-page">
    <section class="page-hero page-hero--tome" aria-labelledby="talents-h1">
      <div class="container">
        <nav class="page-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            <li class="page-breadcrumb__sep" aria-hidden="true">/</li>
            <li><span aria-current="page">Talents</span></li>
          </ol>
        </nav>
        <div class="page-hero__shell">
          <span class="page-hero__sigil" aria-hidden="true" />
          <p class="page-hero__eyebrow">Windrose Compass · talent points · Early Access</p>
          <h1 id="talents-h1">Windrose Talent Tree Planner</h1>
          <div class="page-hero__meta">
            <span>Fencer · Crusher</span>
            <span>Marksman · Toughguy</span>
            <span>Shareable build URLs</span>
          </div>
          <p class="page-hero__lead">
            This page is an <strong>interactive skill tree</strong>: you click nodes to assign
            <strong>talent points</strong> (same four branches as the game), see locks and three ranks per talent, and
            copy a link so your crew loads the same plan. Rules follow
            <a href="https://windrose.tools/talents" rel="noopener noreferrer" target="_blank">Windrose.tools</a>; data
            can drift after patches—double-check in-game.
          </p>
          <p class="page-hero__lead">
            English sites often say “<strong>talent builder</strong>”—it just means a <strong>web tool to plan your
            talents</strong> before you click confirm in town. Respec is free, but rehearsing here avoids menu juggling on
            a moving ship.
          </p>
          <ul class="page-hero__highlights">
            <li>
              <strong>Four branches, one build</strong>
              Map <strong>Fencer</strong> (one-hand &amp; finesse), <strong>Crusher</strong> (two-hand &amp; cleave),
              <strong>Marksman</strong> (firearms), and <strong>Toughguy</strong> (stamina, mitigation, cheat-death)—the
              same labels you see in the character sheet.
            </li>
            <li>
              <strong>Shareable links</strong>
              Your selections live in the address bar—drop the link in Discord when the crew debates who tanks boarding
              or who holds the musket line.
            </li>
            <li>
              <strong>Guides that match this UI</strong>
              Below we link five player-written builds (stats, Rapier, Plague Halberd boarding, Reliable Musketeer, Saber
              crit) that spell out exact talent order—open them side-by-side with the planner.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <div class="guide-legacy">
      <div class="container">
        <div class="guide-body-content">
          <div class="guide-chunk wr-html-prose">
            <h2 id="how-the-planner-works">How this Windrose talent planner works</h2>
            <p>
              The interactive tree sits below (it is rendered outside the narrow prose column so the art lines up with
              the official layout). Click nodes to add ranks until you hit the
              <strong>level-based talent point cap</strong>; locked branches still show their gates so you can plan what
              to unlock next. When you are happy with the route, copy the page URL—anyone can load the same
              <strong>Windrose skill tree</strong> snapshot in their browser.
            </p>
            <p>
              For world context and stamina economy, keep Getting Started and Advanced in mind while you click—those
              pages explain when survival talents matter more than damage. For raw item math while you respec, keep the
              wiki and the map open so you are not guessing material names mid-build.
            </p>
          </div>

          <div class="talents-page__planner">
            <TalentTreePlanner />
          </div>

          <section class="talents-related" aria-labelledby="talents-guides-heading">
            <h2 id="talents-guides-heading">Windrose talent guides &amp; build write-ups</h2>
            <p class="talents-related__intro">
              These Compass guides go deep on <strong>stats</strong>, <strong>gear</strong>, and
              <strong>exact talent order</strong>—each one cross-links back here so you can mirror the steps in the
              planner before you respec.
            </p>
            <ul class="talents-related__list">
              <li v-for="item in talentGuideLinks" :key="item.to" class="talents-related__item">
                <a class="talents-related__link" :href="item.to">{{ item.title }}</a>
                <p class="talents-related__blurb">{{ item.blurb }}</p>
              </li>
            </ul>
            <p class="talents-related__footer">
              Browse the full list on the Guides hub—new Early Access metas land there first.
            </p>
          </section>

          <div class="guide-chunk wr-html-prose">
            <h2 id="patches-and-planning">Patches change numbers—plan talent order here</h2>
            <p>
              Early Access patches often tweak damage, stamina, and guns. A screenshot of your tree goes out of date fast;
              this planner tracks the same layout rules as
              <a href="https://windrose.tools/talents" rel="noopener noreferrer" target="_blank">Windrose.tools</a> so
              you can agree with your crew which <strong>Marksman</strong> reload nodes or <strong>Toughguy</strong>
              survival picks you are testing, then match ranks after you log in.
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import TalentTreePlanner from '@/components/talents/TalentTreePlanner.vue'
import { resolveCanonicalUrl } from '@/seo/documentMeta.js'
import { buildDocumentTitle } from '@/utils/pageSeo.js'

const route = useRoute()
const JSON_LD_ATTR = 'data-wr-jsonld-talents'

/** In-app guides that pair with the talent planner (SEO + player navigation). */
const talentGuideLinks = [
  {
    to: '/guides/windrose-best-talents-and-stats-guide',
    title: 'Windrose Best Talents & Stats Guide for Beginners',
    blurb:
      'Stat scaling, why splitting Str/Agi kills DPS, free respec, and the early Toughguy survival line—read this before you chase damage nodes.',
  },
  {
    to: '/guides/windrose-best-builds-rapier-build',
    title: 'Best Windrose Rapier Build (Precision / S+ tier)',
    blurb:
      'Precision stacking, Rapier of Devastation combos, and the exact survival→offense talent order for Thousand Cuts vs Devastation phases.',
  },
  {
    to: '/guides/windrose-best-builds-plague-halberd-boarding',
    title: 'Plague Halberd Boarding Build (Crusher / AoE)',
    blurb:
      'Strength boarding setup when Perfect Block is off the table—cleave posture, special heal timing, and Crusher paths for ship decks.',
  },
  {
    to: '/guides/windrose-best-builds-best-ranged-build',
    title: 'Reliable Musketeer Ranged Build (Marksman)',
    blurb:
      'Zero-stamina shooting, Quick Hand + Reliable Musket synergy, Marksman reload and crit priorities for headshot DPS.',
  },
  {
    to: '/guides/windrose-best-builds-saber-dragon',
    title: "Saber & Dragon's Breath Crit Build (Fencer)",
    blurb:
      'Agility crit stacking, Perfect Block requirements, and the Fencer sequence for Deadly Finale / Executioner-style play.',
  },
]

onMounted(() => {
  const headline = buildDocumentTitle(String(route.meta.title || ''))
  const description = String(route.meta.description || '')
  const url = resolveCanonicalUrl('/talents')
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline,
    description,
    keywords:
      'Windrose Talents, Windrose skill, Windrose skills, Windrose skill tree, Windrose talent tree, Windrose Fencer, Windrose Crusher, Windrose Marksman, Windrose Toughguy, Windrose respec, Windrose Early Access',
    author: { '@type': 'Organization', name: 'Windrose Compass' },
    about: {
      '@type': 'VideoGame',
      name: 'Windrose',
      gamePlatform: ['PC', 'Steam', 'Epic Games Store'],
      applicationCategory: 'Game',
    },
    url,
  }
  const el = document.createElement('script')
  el.type = 'application/ld+json'
  el.setAttribute(JSON_LD_ATTR, '')
  el.textContent = JSON.stringify(ld)
  document.head.appendChild(el)
})

onUnmounted(() => {
  document.querySelectorAll(`script[${JSON_LD_ATTR}]`).forEach((n) => n.remove())
})
</script>

<style scoped>
.guide-page {
  padding-bottom: 3rem;
}

.guide-legacy {
  padding: 1.25rem 0 2.75rem;
}

.guide-body-content {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.talents-page__planner {
  margin-top: 0.25rem;
}

.talents-related {
  padding: 1.25rem 0 0.25rem;
  border-top: 1px solid color-mix(in oklab, var(--color-text-muted) 28%, transparent);
}

.talents-related__intro {
  margin: 0.35rem 0 1rem;
  max-width: 62ch;
  line-height: 1.55;
}

.talents-related__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.talents-related__item {
  margin: 0;
  padding: 0.85rem 1rem 1rem;
  border-radius: 10px;
  background: var(--color-bg-elevated);
  border: 1px solid color-mix(in oklab, var(--color-text-muted) 35%, transparent);
}

.talents-related__link {
  font-weight: 600;
  font-size: 1.05rem;
  text-decoration: none;
  color: var(--color-gold-hot);
}

.talents-related__link:hover {
  text-decoration: underline;
}

.talents-related__blurb {
  margin: 0.4rem 0 0;
  font-size: 0.94rem;
  line-height: 1.5;
  color: var(--color-text-muted);
  max-width: 68ch;
}

.talents-related__footer {
  margin: 1.15rem 0 0;
  font-size: 0.92rem;
  opacity: 0.92;
}
</style>

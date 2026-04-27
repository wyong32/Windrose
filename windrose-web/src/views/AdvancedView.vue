<template>
  <article class="guide-page">
    <section class="page-hero page-hero--tome" aria-labelledby="adv-h1">
      <div class="container">
        <nav class="page-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li class="page-breadcrumb__sep" aria-hidden="true">/</li>
            <li><span aria-current="page">Advanced</span></li>
          </ol>
        </nav>
        <div class="page-hero__shell">
          <span class="page-hero__sigil" aria-hidden="true" />
          <p class="page-hero__eyebrow">Windrose Compass · advanced deck · logistics &amp; pressure</p>
          <h1 id="adv-h1">Windrose Pro Tips: Mastering Combat, Ships, and Logistics</h1>
          <div class="page-hero__meta">
            <span>Parry cadence</span>
            <span>Gunpowder ops</span>
            <span>Fleet forts</span>
          </div>
          <p class="page-hero__lead">
            This is the long-form sibling to Getting Started: same panel + table + figure rhythm, but tuned for crews
            who already speak wiki shorthand and need decision frames for combat, industry, forts, and headless servers.
          </p>
          <p class="page-hero__lead">
            Pair with <RouterLink to="/wiki">wiki tables</RouterLink> and the <RouterLink to="/map">interactive map</RouterLink>.
            Night-one questions stay on <RouterLink to="/getting-started">Getting Started</RouterLink>; co-op vocabulary
            overlaps <RouterLink to="/guides/play-windrose-online">Play online</RouterLink>.
          </p>
          <ul class="page-hero__highlights">
            <li>
              <strong>Figures</strong>
              Two still plates break doctrine-heavy sections—same `bg.webp` / `about-img.jpg` pairing as the beginner deck.
            </li>
            <li>
              <strong>Tables</strong>
              Operating picture, land roles, mission vs hull, gunpowder beats, weekly server ops, related routes.
            </li>
            <li>
              <strong>Anchor</strong>
              Hash <code>#dedicated-server</code> still targets the dedicated-server chunk for share links.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <div class="guide-legacy">
      <div class="container">
        <div class="guide-body-content">
          <div class="guide-chunk wr-html-prose">
            <figure>
              <img
                :src="imgHero"
                alt="Night sea plate reused as the advanced chapter masthead."
                width="1120"
                height="480"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Visual continuity: readers recognize the chapter even before they read the H2 stack.</figcaption>
            </figure>
          </div>

          <div class="guide-chunk wr-html-prose">
            <h2>Operating picture</h2>
            <table>
              <thead>
                <tr>
                  <th scope="col">Phase</th>
                  <th scope="col">Pressure</th>
                  <th scope="col">Crew posture</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mid-game</td>
                  <td>Timers overlap—smelt, sail, and defend in one calendar day.</td>
                  <td>Split voice roles: navigator, quartermaster, boatswain.</td>
                </tr>
                <tr>
                  <td>Late-game</td>
                  <td>Biome gates + rare ingots punish ad-hoc trips.</td>
                  <td>Route contracts: who banks mats, who owns pins, who patches.</td>
                </tr>
              </tbody>
            </table>
            <p>
              When three systems demand attention at once, write the smallest possible checklist on map pins—words beat
              paragraphs under fire.
            </p>
          </div>

          <div class="guide-chunk wr-html-prose">
            <figure>
              <img
                :src="imgAbout"
                alt="Lantern still-life between combat doctrine and ship logistics."
                width="960"
                height="420"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Mid-article figure: resets eye strain before tables stack again.</figcaption>
            </figure>
            <h2>Soulslite combat mastery</h2>
            <p>
              Melee rewards spacing reads: dodge on committed animations, parry on audio tells, posture breaks before you
              empty stamina vanity-swinging. Ranged adds reload windows—pair musket shots with teammate staggers. For raw
              stats, pivot to <RouterLink to="/wiki/weapons">weapons</RouterLink> and
              <RouterLink to="/wiki/equipment">equipment</RouterLink> once you pick a build lane.
            </p>
            <h3>Land party roles (shorthand)</h3>
            <table>
              <thead>
                <tr>
                  <th scope="col">Role</th>
                  <th scope="col">Owns</th>
                  <th scope="col">Fails if…</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Aggro</td>
                  <td>Lock-on spacing, bait windows for parries.</td>
                  <td>Chases trash while elites reset posture.</td>
                </tr>
                <tr>
                  <td>Posture</td>
                  <td>Boss pattern calls, burst countdowns.</td>
                  <td>Voice clutter—use compass words (bow, stern, high).</td>
                </tr>
                <tr>
                  <td>Medic</td>
                  <td>Food rotation, revive angles, bandage cadence.</td>
                  <td>Hoards tonics without calling cooldowns.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="guide-chunk wr-html-prose">
            <h2>High-tier ship customization</h2>
            <p>
              Match hull, armor, and gunports to the mission profile: broadside kiting wants reach and stability;
              boarding pushes want survivability and grappling tempo. Split repair stacks so one spiral does not empty
              every chest. Compare hull modules on the <RouterLink to="/wiki/ship">ship wiki</RouterLink> before glam
              frigates your helmsman dreads.
            </p>
            <h3>Mission type vs hull stance</h3>
            <table>
              <thead>
                <tr>
                  <th scope="col">Mission</th>
                  <th scope="col">Hull stance</th>
                  <th scope="col">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Coastal patrol / skirmish</td>
                  <td>Responsive rudder, mixed broadside + small arms</td>
                  <td>Keep spare planks mid-deck for sprint repairs.</td>
                </tr>
                <tr>
                  <td>Open-water haul</td>
                  <td>Cargo-first, conservative sail plan</td>
                  <td>Pre-bandage before storms; food buff timers matter more.</td>
                </tr>
                <tr>
                  <td>Fleet defense / fort support</td>
                  <td>Stable gun lines, overlapping fields of fire</td>
                  <td>Navigator mirrors map pins to deck officers in voice.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="guide-chunk wr-html-prose">
            <h2>Industry: gunpowder &amp; rare metals</h2>
            <p>
              Gunpowder loves structured beats; rare metals love escorted mining windows. When drop tables shift, re-run
              the <RouterLink to="/wiki/resources">resources wiki</RouterLink> before rewriting guild SOPs.
            </p>
            <table>
              <thead>
                <tr>
                  <th scope="col">Beat</th>
                  <th scope="col">Action</th>
                  <th scope="col">Anti-pattern</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Scout</td>
                  <td>Pin sulfur + charcoal clusters on the map.</td>
                  <td>Everyone farms the same beach without a ledger.</td>
                </tr>
                <tr>
                  <td>Smelt</td>
                  <td>Batch charcoal with a beachhead guard.</td>
                  <td>Single furnace queue blocks the night.</td>
                </tr>
                <tr>
                  <td>Bank</td>
                  <td>Named chest tabs: ready powder vs project powder.</td>
                  <td>Mixing stacks hides shortages until embark.</td>
                </tr>
                <tr>
                  <td>Spend</td>
                  <td>Pre-kit expeditions the morning before sails.</td>
                  <td>Crafting ten minutes before boss pull.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="guide-chunk wr-html-prose">
            <figure>
              <img
                :src="imgHero"
                alt="Second wide plate before fort and server sections."
                width="960"
                height="400"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Repeat banner before heavy ops sections—mirrors the old long-article cadence.</figcaption>
            </figure>
            <h2>Territory &amp; forts</h2>
            <p>
              Forts buy time, not immortality: funnel naval AI into overlapping fields of fire, keep repair stations
              manned, and stockpile boarding tools on upper decks. Sync wall damage callouts with map pins so off-watch
              crew knows which segment is hot. Long-form POI writeups live in <RouterLink to="/guides">Guides</RouterLink>
              when you need screenshots beyond tables.
            </p>
          </div>

          <div class="guide-chunk wr-html-prose">
            <h2>Meta progression &amp; workers</h2>
            <figure>
              <img
                :src="imgAbout"
                alt="Warm interior still-life for meta/worker discussion."
                width="880"
                height="400"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                Meta systems (rep grinds, worker assignments, mod risk) read easier with a visual palate cleanser—same
                asset language as Getting Started.
              </figcaption>
            </figure>
            <p>
              Reputation and worker loops reward consistent labeling in chests and pinned map notes—if the crew cannot
              agree on words, they will not agree on who owns the next upgrade path. Mods shift risk: snapshot saves before
              reordering loadouts and read author notes on <RouterLink to="/mods">Mods</RouterLink>.
            </p>
          </div>

          <div class="guide-chunk wr-html-prose">
            <h2 id="dedicated-server">Dedicated server management</h2>
            <p>
              Dedicated hosts keep the archipelago alive when the captain’s PC sleeps—paid for with Windows-only
              tooling, JSON edits, and SteamCMD rehearsals. Pair the official
              <a href="https://playwindrose.com/dedicated-server-guide/" rel="noopener noreferrer" target="_blank">Dedicated Server Guide</a>
              with our <RouterLink to="/guides/play-windrose-online">play online</RouterLink> article so invite-code crews
              and headless hosts share vocabulary (ports, passwords, world folders).
            </p>
            <table>
              <thead>
                <tr>
                  <th scope="col">Weekly op</th>
                  <th scope="col">Why</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SteamCMD / tool update dry run</td>
                  <td>Patch day should not be the first time you type <code>app_update</code>.</td>
                </tr>
                <tr>
                  <td>World folder backup before mod changes</td>
                  <td>Rollback beats diplomacy after a bad load order.</td>
                </tr>
                <tr>
                  <td>UPnP + firewall re-check after router firmware</td>
                  <td>Silent drops often trace to home networks, not the client.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="guide-chunk wr-html-prose">
            <h2>Related pages (quick links)</h2>
            <table>
              <thead>
                <tr>
                  <th scope="col">Topic</th>
                  <th scope="col">Where</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Beginner spine</td>
                  <td><RouterLink to="/getting-started">Getting Started</RouterLink></td>
                </tr>
                <tr>
                  <td>Guides list</td>
                  <td><RouterLink to="/guides">Guides hub</RouterLink></td>
                </tr>
                <tr>
                  <td>Wiki decks</td>
                  <td><RouterLink to="/wiki">Wiki hub</RouterLink></td>
                </tr>
                <tr>
                  <td>Map / pins</td>
                  <td><RouterLink to="/map">Interactive map</RouterLink></td>
                </tr>
                <tr>
                  <td>Mods curation</td>
                  <td><RouterLink to="/mods">Mods</RouterLink></td>
                </tr>
                <tr>
                  <td>Co-op connectivity</td>
                  <td><RouterLink to="/guides/play-windrose-online">Play online guide</RouterLink></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { publicAssetUrl } from '@/utils/publicAssetUrl.js'
import { resolveCanonicalUrl } from '@/seo/documentMeta.js'
import { buildDocumentTitle } from '@/utils/pageSeo.js'

const route = useRoute()
const imgHero = computed(() => publicAssetUrl('/images/bg.webp'))
const imgAbout = computed(() => publicAssetUrl('/images/about-img.jpg'))

const JSON_LD_ATTR = 'data-wr-jsonld-advanced'

onMounted(() => {
  const headline = buildDocumentTitle(String(route.meta.title || ''))
  const description = String(route.meta.description || '')
  const url = resolveCanonicalUrl('/advanced')
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline,
    description,
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
  gap: 1.35rem;
}
</style>

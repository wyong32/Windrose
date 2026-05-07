<template>
  <article class="guide-page">
    <section class="page-hero page-hero--tome" aria-labelledby="adv-h1">
      <div class="container">
        <nav class="page-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            <li class="page-breadcrumb__sep" aria-hidden="true">/</li>
            <li><span aria-current="page">Advanced</span></li>
          </ol>
        </nav>
        <div class="page-hero__shell">
          <span class="page-hero__sigil" aria-hidden="true" />
          <p class="page-hero__eyebrow">Windrose Compass · advanced deck · logistics &amp; pressure</p>
          <h1 id="adv-h1">Windrose Pro Tips: Mastering Combat, Ships, and Logistics</h1>
          <div class="page-hero__meta">
            <span>Land &amp; boarding</span>
            <span>Powder &amp; hauls</span>
            <span>Forts &amp; hosts</span>
          </div>
          <p class="page-hero__lead">
            For crews past the beach: harder POIs, factions, fleet nights. Wiki for numbers, map for pins—verify a guide’s
            “east of the beach” in one pass. Still on your first hull? Use
            <a href="/getting-started">Getting Started</a>. SteamCMD or invites?
            <a href="/guides/play-windrose-online">Play online with friends</a>.
          </p>
          <ul class="page-hero__highlights">
            <li>
              <strong>Combat</strong>
              Parry calls and spacing beat raw DPS on elites and boarding.
            </li>
            <li>
              <strong>Fleet</strong>
              Repairs and gunpowder beat shiny rigging when broadsides are real.
            </li>
            <li>
              <strong>Hosts</strong>
              Backups and dry runs—patch day is not the day to learn SteamCMD.
            </li>
          </ul>
        </div>

        <!-- 广告位 -->
        <div class="ad-wrap" style="width: 100%; min-height: 100px; display: flex; justify-content: center; align-items: center;">
          <GptBanner gpt-slot-id="div-gpt-ad-advanced-01" :rotation-index="0" />
        </div>
      </div>
    </section>

    <div class="guide-legacy">
      <div class="container">
        <div class="guide-body-content">
          <div class="guide-chunk wr-html-prose">
            <figure>
              <img
                src="/images/advanced-01.webp"
                alt="Storm-lit open ocean: long sails, naval pickets, and the space where broadsides or boarding decide the night."
                width="1120"
                height="480"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p>
              The header art is the emotional truth of advanced Windrose: you are no longer scraping fiber—you are routing
              cargo through contested water, juggling faction timers, and keeping repair kits somewhere the boatswain can
              find them in the dark. Below is how experienced crews keep that chaos legible.
            </p>
          </div>

          <div class="guide-chunk wr-html-prose">
            <h2 id="talent-builder">Interactive talent builder</h2>
            <p>
              The in-game tree matches what you can rehearse on our
              <a href="/talents">Windrose talent planner</a>—same Fencer, Crusher, Marksman, and Toughguy branches, with
              branch gates, three ranks per node, and a shareable URL for Discord. Use it when you are about to respec
              after a patch so you do not buy a node that your new musket or halberd never procs.
            </p>
          </div>

          <!-- 广告位 -->
          <div class="ad-wrap" style="width: 100%; min-height: 100px; display: flex; justify-content: center; align-items: center;">
            <GptBanner gpt-slot-id="div-gpt-ad-advanced-02" :rotation-index="1" />
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
                  <td>Early EA mastery</td>
                  <td>Finishing biome quests while stockpiling charcoal, ballistics, and med stacks for the next island hop.</td>
                  <td>One navigator owns pins; one quartermaster owns chest tabs; nobody “just sails.”</td>
                </tr>
                <tr>
                  <td>Mid-game</td>
                  <td>Timers overlap—smelt, sail, and defend in one calendar day.</td>
                  <td>Split voice roles: navigator, quartermaster, boatswain.</td>
                </tr>
                <tr>
                  <td>Late-game</td>
                  <td>Biome gates + rare ingots punish ad-hoc trips; fort nights spike CPU on busy hosts.</td>
                  <td>Route contracts: who banks mats, who owns pins, who patches; downshift party size if frames tank.</td>
                </tr>
              </tbody>
            </table>
            <p>
              When three systems demand attention at once, write the smallest possible checklist on map pins—words beat
              paragraphs under fire.
            </p>
          </div>

          <!-- 广告位 -->
          <div class="ad-wrap" style="width: 100%; min-height: 100px; display: flex; justify-content: center; align-items: center;">
            <GptBanner gpt-slot-id="div-gpt-ad-advanced-03" :rotation-index="2" />
          </div>

          <div class="guide-chunk wr-html-prose">
            <figure>
              <img
                src="/images/advanced-02.webp"
                alt="Harbor-night workbench: charts, lantern, and sidearms laid out before a hard expedition."
                width="960"
                height="420"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <h2>Soulslite combat mastery</h2>
            <p>
              Windrose sells its melee as soulslite-adjacent: dodge on committed animations, parry on audio tells, and
              posture breaks before you empty stamina vanity-swinging. Firearms buy space—pair musket windows with
              teammate staggers so elites never get a free reset. Boarding blurs the rules: treat deck fights like brawls
              with fall hazards and friendly fire discipline, not duels. For raw numbers, pivot to the wiki weapons and
              equipment decks once you pick a build lane.
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
              every chest. Compare hull modules on the ship wiki before glam frigates your helmsman dreads.
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

          <!-- 广告位 -->
          <div class="ad-wrap" style="width: 100%; min-height: 100px; display: flex; justify-content: center; align-items: center;">
            <GptBanner gpt-slot-id="div-gpt-ad-advanced-04" :rotation-index="3" />
          </div>

          <div class="guide-chunk wr-html-prose">
            <h2>Industry: gunpowder &amp; rare metals</h2>
            <p>
              Gunpowder loves structured beats; rare metals love escorted mining windows. When drop tables shift, re-run
              the resources wiki before rewriting guild SOPs.
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
            <h2>Faction hauls &amp; Tortuga rhythm</h2>
            <p>
              Tortuga is your bank, bulletin board, and reputation sink. Advanced crews batch faction errands with smelting
              cycles and map sweeps so every sail clears multiple quest counters—never dock with empty cargo slots on the
              return leg if vendors buy salvage you already planned to farm.
            </p>
            <table>
              <thead>
                <tr>
                  <th scope="col">Goal</th>
                  <th scope="col">Playbook</th>
                  <th scope="col">Anti-pattern</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Stable income</td>
                  <td>Rotate easy board quests while heavier story gates percolate.</td>
                  <td>Everyone grabs the same elite contract without powder banks.</td>
                </tr>
                <tr>
                  <td>Reputation spikes</td>
                  <td>Track which vendors unlock workers, recipes, or hull modules.</td>
                  <td>Dump random gifts into the wrong faction because the UI looked similar.</td>
                </tr>
                <tr>
                  <td>Return logistics</td>
                  <td>Pre-label chest tabs for “sell tonight” vs “craft tomorrow.”</td>
                  <td>Mix quest items with salvage so quartermasters rage-quit sorting.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 广告位 -->
          <div class="ad-wrap" style="width: 100%; min-height: 100px; display: flex; justify-content: center; align-items: center;">
            <GptBanner gpt-slot-id="div-gpt-ad-advanced-05" :rotation-index="4" />
          </div>

          <div class="guide-chunk wr-html-prose">
            <figure>
              <img
                src="/images/advanced-03.webp"
                alt="Wide coastal bastions and surf: the kind of shoreline where fort guns and landing parties trade tempo."
                width="960"
                height="400"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <h2>Territory &amp; forts</h2>
            <p>
              Forts buy time, not immortality: funnel naval AI into overlapping fields of fire, keep repair stations
              manned, and stockpile boarding tools on upper decks. Sync wall damage callouts with map pins so off-watch
              crew knows which segment is hot. When performance dips, strip cosmetic clutter from the build grid, shorten
              draw distance if settings allow, and consider splitting mega-bases across two harbors instead of one
              particle-heavy megafort—Late EA sessions punish overloaded hosts harder than solo beach huts.
            </p>
            <p>
              Long-form POI writeups live in the Guides list when authors publish screenshot-heavy articles beyond our
              tables.
            </p>
          </div>

          <div class="guide-chunk wr-html-prose">
            <h2>Meta progression &amp; workers</h2>
            <figure>
              <img
                src="/images/advanced-02.webp"
                alt="Same harbor-night kit table: planning worker shifts, faction hauls, and who banks rares overnight."
                width="880"
                height="400"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p>
              Reputation swings in Tortuga and faction arcs feed better gear and worker slots—treat them like production
              pipelines, not side quests you “catch up on later.” NPC workers only help if chests are labeled, inputs are
              stocked, and someone owns the morning checklist. If the crew cannot agree on words for pins and tabs, they
              will not agree on who owns the next upgrade path. Mods shift risk: snapshot saves before reordering
              loadouts and read author notes in the Mods list when you change the client.
            </p>
          </div>

          <!-- 广告位 -->
          <div class="ad-wrap" style="width: 100%; min-height: 100px; display: flex; justify-content: center; align-items: center;">
            <GptBanner gpt-slot-id="div-gpt-ad-advanced-06" :rotation-index="5" />
          </div>

          <div class="guide-chunk wr-html-prose">
            <h2 id="dedicated-server">Dedicated server management</h2>
            <p>
              Dedicated hosts keep the archipelago alive when the captain’s PC sleeps—paid for with Windows-focused
              tooling, JSON edits, and SteamCMD rehearsals. Share this section’s link with a trailing
              <code>#dedicated-server</code> hash so Discord mates land on the checklist immediately. Pair the
              publisher’s dedicated-server documentation (Steam, Epic, or the official game site) with our
              <a href="/guides/play-windrose-online">play-online guide</a> so invite-code crews and headless hosts share
              vocabulary (ports, passwords, world folders).
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
                  <td><code>/getting-started</code></td>
                </tr>
                <tr>
                  <td>Guides list</td>
                  <td><code>/guides</code></td>
                </tr>
                <tr>
                  <td>Wiki decks</td>
                  <td><code>/wiki</code></td>
                </tr>
                <tr>
                  <td>Map / pins</td>
                  <td><code>/map</code></td>
                </tr>
                <tr>
                  <td>Mods curation</td>
                  <td><code>/mods</code></td>
                </tr>
                <tr>
                  <td>Co-op connectivity</td>
                  <td><code>/guides/play-windrose-online</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 广告位 -->
        <div class="ad-wrap" style="width: 100%; min-height: 100px; display: flex; justify-content: center; align-items: center;">
          <GptBanner gpt-slot-id="div-gpt-ad-advanced-07" :rotation-index="6" />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import GptBanner from '@/components/GptBanner.vue'
import { resolveCanonicalUrl } from '@/seo/documentMeta.js'
import { buildDocumentTitle } from '@/utils/pageSeo.js'

const route = useRoute()

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

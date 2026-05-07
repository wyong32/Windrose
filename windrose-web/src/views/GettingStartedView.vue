<template>
  <article class="guide-page">
    <section class="page-hero page-hero--tome" aria-labelledby="gs-h1">
      <div class="container">
        <nav class="page-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            <li class="page-breadcrumb__sep" aria-hidden="true">/</li>
            <li><span aria-current="page">Getting Started</span></li>
          </ol>
        </nav>
        <div class="page-hero__shell">
          <span class="page-hero__sigil" aria-hidden="true" />
          <p class="page-hero__eyebrow">Windrose Compass · beginner deck · Early Access</p>
          <h1 id="gs-h1">Windrose Starting Guide: From Shipwreck to Captain</h1>
          <div class="page-hero__meta">
            <span>First nights ashore</span>
            <span>Camp &amp; crafting</span>
            <span>Sails &amp; Tortuga</span>
          </div>
          <p class="page-hero__lead">
            PvE pirate survival—archipelagos, camps, melee, and naval fights. EA changes fast; trust
            your client for live numbers. Map for coordinates, wiki for item names. Co-op?
            <a href="/guides/play-windrose-online">Play online with friends</a>, then
            <a href="/advanced">Advanced</a> when you outgrow the starter chain.
          </p>
          <ul class="page-hero__highlights">
            <li>
              <strong>Survive</strong>
              Fiber, tools, food, and fire before you chase smoke on the horizon.
            </li>
            <li>
              <strong>Base</strong>
              Benches, storage, lights—small and defensible beats huge and empty.
            </li>
            <li>
              <strong>Scale up</strong>
              Talents, Tortuga, factions, hull—milestones, not a day-one sprint.
            </li>
          </ul>
        </div>

        <!-- 广告位 -->
        <div class="ad-wrap" style="width: 100%; min-height: 100px; display: flex; justify-content: center; align-items: center;">
          <GptBanner gpt-slot-id="div-gpt-ad-getting-started-01" :rotation-index="0" />
        </div>
      </div>
    </section>

    <div class="guide-legacy">
      <div class="container">
        <div class="guide-body-content">
          <div class="guide-chunk wr-html-prose">
            <figure>
              <img
                src="/images/getting-01.webp"
                alt="Moonlit archipelago: islands, reefs, and distant sails evoking your first open-water nights."
                width="1120"
                height="480"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p>
              You spend a lot of time reading the horizon: where to beach for clay, which bay hides
              salvage, when to risk a night crossing. Early Access rebalance patches can nudge
              recipes and damage—if a number here drifts from your client, trust the quest journal
              and tooltips you see that week. Keep the wiki open for lookups and the map for pins;
              this hub is fan-written guidance, not official support from Windrose Crew or
              publishers.
            </p>
            <p>
              Before you burn a respec token in town, sketch the next few talent purchases on our
              <a href="/talents">Windrose talent planner</a> so the crew agrees on survival vs
              damage priorities—the URL is shareable when someone else is rebuilding the same night.
            </p>
          </div>

          <!-- 广告位 -->
          <div class="ad-wrap" style="width: 100%; min-height: 100px; display: flex; justify-content: center; align-items: center;">
            <GptBanner gpt-slot-id="div-gpt-ad-getting-started-02" :rotation-index="1" />
          </div>

          <div class="guide-chunk wr-html-prose">
            <h2>What Windrose asks of you in EA</h2>
            <table>
              <thead>
                <tr>
                  <th scope="col">Pillar</th>
                  <th scope="col">In practice</th>
                  <th scope="col">Companion pages</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Combat</td>
                  <td>
                    Lock-on melee with dodge and parry windows, firearms for spacing—wildlife,
                    forts, and bosses punish greedy stamina use on land and during boarding.
                  </td>
                  <td>Weapons and consumables wiki tables; deeper cadence notes in Advanced.</td>
                </tr>
                <tr>
                  <td>Crafting &amp; workers</td>
                  <td>
                    Bench chains, charcoal, repairs, and ammunition feed everything from stone axes
                    to frigate outfits. NPC workers can lighten harvest and production once you
                    unlock them—plan chest labels early.
                  </td>
                  <td>Resources wiki deck; map pins for clay, salvage, and rare beaches.</td>
                </tr>
                <tr>
                  <td>Sailing &amp; naval</td>
                  <td>
                    Wind, draft, and crew tasks matter: trade broadsides at range or commit to
                    boarding with seamless ship-to-shore transitions. Early Access ships range from
                    a nimble ketch up to heavier brigs and frigates as you progress.
                  </td>
                  <td>Ship wiki once modules unlock; map for route callouts.</td>
                </tr>
                <tr>
                  <td>Tortuga &amp; factions</td>
                  <td>
                    The pirate town anchors quests, trade, and reputation swings that feed better
                    gear and workers. Treat return trips as resupply beats, not sightseeing detours.
                  </td>
                  <td>
                    Story specifics stay in-game; use the Guides hub for focused walkthroughs when
                    writers publish them.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 广告位 -->
          <div class="ad-wrap" style="width: 100%; min-height: 100px; display: flex; justify-content: center; align-items: center;">
            <GptBanner gpt-slot-id="div-gpt-ad-getting-started-03" :rotation-index="2" />
          </div>

          <div class="guide-chunk wr-html-prose">
            <h2>Talent tendencies (first identity)</h2>
            <table>
              <thead>
                <tr>
                  <th scope="col">Archetype</th>
                  <th scope="col">Pick if…</th>
                  <th scope="col">Skip if…</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Scout</td>
                  <td>You read the map aloud and mark pins for clay, sulfur, and quest doors.</td>
                  <td>You refuse to pause combat to update markers—delegate instead.</td>
                </tr>
                <tr>
                  <td>Builder</td>
                  <td>
                    You enjoy snapping foundations, rooflines, and lighting for night crafting.
                  </td>
                  <td>You sprint past shelter to chase boats before benches exist.</td>
                </tr>
                <tr>
                  <td>Medic / quartermaster</td>
                  <td>
                    You track food buff timers, chest tabs, and repair kits before naval pulls.
                  </td>
                  <td>You dislike spreadsheet discipline mid-voyage.</td>
                </tr>
                <tr>
                  <td>Bruiser</td>
                  <td>You want to learn parries on trash mobs before story elites.</td>
                  <td>You tunnel bosses alone while the crew lacks revives.</td>
                </tr>
              </tbody>
            </table>
            <p>
              Respec rules and exact numbers move patch-to-patch—read each tooltip the week you
              play. The point is to
              <strong>commit to a crew-facing role</strong> early so talents reinforce habits
              (navigation, crafting, medic, bruiser), not the other way around. When you are ready
              to click for real, mirror the order on the
              <a href="/talents">talent tree page</a> first so nobody buys a dead branch by mistake.
            </p>
          </div>

          <!-- 广告位 -->
          <div class="ad-wrap" style="width: 100%; min-height: 100px; display: flex; justify-content: center; align-items: center;">
            <GptBanner gpt-slot-id="div-gpt-ad-getting-started-04" :rotation-index="3" />
          </div>

          <div class="guide-chunk wr-html-prose">
            <figure>
              <img
                src="/images/getting-02.webp"
                alt="Lantern, tools, and camp supplies: the quiet moment between shoreline scrambles and your first real base push."
                width="960"
                height="420"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <h2>The first 30 minutes: gathering &amp; tools</h2>
            <p>
              The still-life beat above is the fantasy of “camp solved”—in reality you earn it
              minute by minute. Touch every starter loop once: punch trees and rocks, pick fiber,
              loot nearby crates, and craft stone tools before you sprint for distant smoke. Clay
              and salvage usually hug shorelines—bank them early because furnaces and mortars gate
              boats and ballistics. If wildlife deletes you, treat it as a spacing lesson: lock on,
              back off, use elevation, and keep a spare meal in the hotbar.
            </p>
          </div>

          <div class="guide-chunk wr-html-prose">
            <h2>First-week checklist (survival cadence)</h2>
            <table>
              <thead>
                <tr>
                  <th scope="col">When</th>
                  <th scope="col">Goal</th>
                  <th scope="col">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Night 1</td>
                  <td>Bedroll / tent rhythm + stone tools</td>
                  <td>Do not marathon the coastline—secure food before dusk.</td>
                </tr>
                <tr>
                  <td>Day 2–3</td>
                  <td>Shelter footprint + labeled chests</td>
                  <td>Retrofits cost more than labels; teach the crew your naming scheme.</td>
                </tr>
                <tr>
                  <td>End of week</td>
                  <td>First reliable boat + bail-out plan</td>
                  <td>Anchor map pins for home bay, clay, and repair beaches.</td>
                </tr>
                <tr>
                  <td>When Tortuga unlocks</td>
                  <td>Cash-in quests, buy missing basics, hire first workers</td>
                  <td>
                    Travel light: sell junk, bank rares, note which vendors reset which recipes.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 广告位 -->
          <div class="ad-wrap" style="width: 100%; min-height: 100px; display: flex; justify-content: center; align-items: center;">
            <GptBanner gpt-slot-id="div-gpt-ad-getting-started-05" :rotation-index="4" />
          </div>

          <div class="guide-chunk wr-html-prose">
            <h2>Co-op headcount (performance-aware)</h2>
            <p>
              Early Access supports larger parties on self-hosted and dedicated servers, but
              late-game forts and naval brawls get heavy—many crews treat four players as the
              comfort ceiling and split bigger guilds across voice channels instead of one
              overloaded instance. Details change patch to patch; see
              <a href="/guides/play-windrose-online">Play online with friends</a> for connectivity
              patterns that survive router quirks.
            </p>
          </div>

          <div class="guide-chunk wr-html-prose">
            <h2>Building your first shelter</h2>
            <p>
              Start compact near water but off obvious patrol vectors: foundation ring, walls, bed
              or bedroll, storage, and a sheltered crafting cluster beat a sprawling fort you cannot
              light or defend. EA building includes several distinctive style families—pick one
              early so pieces snap cleanly and upgrades feel cohesive. Learn roof snapping before
              you decorate; mid-game teardowns tax morale. Keep interior lights for night benches
              and pin a repair hammer so storm chip damage never strands you off-cycle.
            </p>
            <h2>Crafting your first boat</h2>
            <p>
              Hull reliability beats figurehead glam: anchor feel, rudder response, and cargo for
              one extra expedition matter more than cosmetics. You will progress from a small ketch
              toward brigs and frigates as recipes and story beats unlock—read mast, sail, and
              gunport requirements carefully because missing one rope or tar brick sends the whole
              crew back to shore. When gunports matter, skim the ship wiki before you spend rare
              ingots on a hull your helmsman dreads steering.
            </p>
          </div>

          <!-- 广告位 -->
          <div class="ad-wrap" style="width: 100%; min-height: 100px; display: flex; justify-content: center; align-items: center;">
            <GptBanner gpt-slot-id="div-gpt-ad-getting-started-06" :rotation-index="5" />
          </div>

          <div class="guide-chunk wr-html-prose">
            <h2>Essential survival: food buffs</h2>
            <p>
              Treat meals like loadout slots: one health-forward dish, one stamina-forward dish, and
              one flex buff before hard POIs or naval pulls. Timers and stacking rules change in
              EA—read each tooltip the day you play. Bank dried rations for long sprays; compare
              ingredient costs on the resources wiki before you burn rare fish for marginal gains.
            </p>
          </div>

          <div class="guide-chunk wr-html-prose">
            <h2>Where to sail next (on-site)</h2>
            <table>
              <thead>
                <tr>
                  <th scope="col">Need</th>
                  <th scope="col">Deck</th>
                  <th scope="col">Path</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Coordinates &amp; pins</td>
                  <td>Interactive map</td>
                  <td><code>/map</code></td>
                </tr>
                <tr>
                  <td>Loot tables &amp; crafting math</td>
                  <td>Wiki hub</td>
                  <td><code>/wiki</code></td>
                </tr>
                <tr>
                  <td>Map UI literacy</td>
                  <td>Guides hub</td>
                  <td><code>/guides</code> (see articles list)</td>
                </tr>
                <tr>
                  <td>Logistics &amp; servers</td>
                  <td>Advanced</td>
                  <td><code>/advanced</code></td>
                </tr>
                <tr>
                  <td>Co-op invites</td>
                  <td>Play online guide</td>
                  <td><code>/guides/play-windrose-online</code></td>
                </tr>
                <tr>
                  <td>Mod loadouts</td>
                  <td>Mods list</td>
                  <td><code>/mods</code></td>
                </tr>
              </tbody>
            </table>
            <p>
              When nights stay calm and sails feel predictable, open Advanced for tighter combat
              cadence, gunpowder beats, fort defense, and dedicated server hygiene—those topics
              assume you already speak wiki shorthand.
            </p>
          </div>

          <!-- 广告位 -->
          <div class="ad-wrap" style="width: 100%; min-height: 100px; display: flex; justify-content: center; align-items: center;">
            <GptBanner gpt-slot-id="div-gpt-ad-getting-started-07" :rotation-index="6" />
          </div>

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

const JSON_LD_ATTR = 'data-wr-jsonld-getting-started'

onMounted(() => {
  const headline = buildDocumentTitle(String(route.meta.title || ''))
  const description = String(route.meta.description || '')
  const url = resolveCanonicalUrl('/getting-started')
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

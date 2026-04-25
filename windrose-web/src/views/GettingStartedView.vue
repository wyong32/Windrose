<template>
  <article class="guide-page">
    <section class="page-hero page-hero--tome" aria-labelledby="gs-h1">
      <div class="container">
        <nav class="page-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li class="page-breadcrumb__sep" aria-hidden="true">/</li>
            <li><span aria-current="page">Getting Started</span></li>
          </ol>
        </nav>
        <div class="page-hero__shell">
          <span class="page-hero__sigil" aria-hidden="true" />
          <p class="page-hero__eyebrow">Windrose Compass · beginner deck · Early Access</p>
          <h1 id="gs-h1">Windrose Starting Guide: From Shipwreck to Captain</h1>
          <div class="page-hero__meta">
            <span>First 10 hours</span>
            <span>Camp loop</span>
            <span>Tables + figures</span>
          </div>
          <p class="page-hero__lead">
            Windrose is sold as a PvE pirate survival action game: procedural islands, hand-authored POIs, crafting,
            sailing, and soulslike-leaning melee. This long read mirrors the original Compass layout—hero, dark panels,
            tables, and figures—so you can skim between voyages without hunting patch notes in Discord first.
          </p>
          <p class="page-hero__lead">
            Use the <RouterLink to="/map">interactive map</RouterLink> for coordinates and the
            <RouterLink to="/wiki">wiki hub</RouterLink> for numbers; this page keeps the narrative spine. Multiplayer
            flow lives in <RouterLink to="/guides/play-windrose-online">Play online with friends</RouterLink>. When you
            outgrow checklists, open <RouterLink to="/advanced">Advanced</RouterLink>.
          </p>
          <ul class="page-hero__highlights">
            <li>
              <strong>Panels</strong>
              Each block below is its own “chart table” so long sessions do not blur together.
            </li>
            <li>
              <strong>Figures</strong>
              Two still images (`bg.webp`, `about-img.jpg`) break dense text—same assets the home hero trusts.
            </li>
            <li>
              <strong>Structured data</strong>
              TechArticle JSON-LD (plus VideoGame <code>about</code>) mounts while this tab stays open.
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
                alt="Wide coastal night plate used across Windrose Compass landing pages."
                width="1120"
                height="480"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                Atmosphere plate—not an in-game HUD capture. Swap <code>/public/images/bg.webp</code> if you want a
                different banner; layout spacing already accounts for wide figures.
              </figcaption>
            </figure>
            <p>
              Treat Early Access like a living chart: quest text beats blog posts, but this fan atlas still helps when
              you need English search terms for the wiki or a second monitor for map pins. Nothing here is official
              support—just player prose with outbound links you can audit.
            </p>
          </div>

          <div class="guide-chunk wr-html-prose">
            <h2>EA pillars vs. what we publish</h2>
            <table>
              <thead>
                <tr>
                  <th scope="col">Pillar</th>
                  <th scope="col">What the game stresses</th>
                  <th scope="col">On this compass</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Combat</td>
                  <td>Stamina, lock-on, parries—wildlife and bandits punish greedy swings.</td>
                  <td>
                    Weapons + consumables tables once you know item names; Advanced for cadence talk.
                  </td>
                </tr>
                <tr>
                  <td>Crafting</td>
                  <td>Bench chains, fuel, repairs—boats and guns sit on top of humble fiber math.</td>
                  <td>Resources wiki for ores/fibers; map pins for clay and salvage bays.</td>
                </tr>
                <tr>
                  <td>Sailing</td>
                  <td>Wind, draft, crew tasks—cargo vs speed is a conscious trade every embark.</td>
                  <td>Ship wiki after you unlock hull families; map for route callouts.</td>
                </tr>
              </tbody>
            </table>
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
                  <td>You enjoy snapping foundations, rooflines, and lighting for night crafting.</td>
                  <td>You sprint past shelter to chase boats before benches exist.</td>
                </tr>
                <tr>
                  <td>Medic / quartermaster</td>
                  <td>You track food buff timers, chest tabs, and repair kits before naval pulls.</td>
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
              Respec rules and exact numbers move patch-to-patch—read each tooltip the week you play. The point of the
              table is to **commit to a crew-facing role** early so talents support habits, not the other way around.
            </p>
          </div>

          <div class="guide-chunk wr-html-prose">
            <figure>
              <img
                :src="imgAbout"
                alt="Warm lantern and kit still-life used as a visual divider between early and mid sections."
                width="960"
                height="420"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                Second figure slot (`about-img.jpg`) mirrors the original Compass article rhythm: prose → table →
                figure → prose.
              </figcaption>
            </figure>
            <h2>The first 30 minutes: gathering &amp; tools</h2>
            <p>
              Touch every starter loop once: punch trees and rocks, pick fiber, loot nearby crates, and craft stone tools
              before you sprint for distant smoke. Clay and salvage usually hug shorelines—bank them early because
              furnaces and mortars gate boats and ballistics. If wildlife deletes you, treat it as a spacing lesson: lock
              on, back off, use elevation, and keep a spare meal in the hotbar.
            </p>
          </div>

          <div class="guide-chunk wr-html-prose">
            <h2>First-week checklist (Valheim-style cadence)</h2>
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
              </tbody>
            </table>
          </div>

          <div class="guide-chunk wr-html-prose">
            <h2>Building your first shelter</h2>
            <p>
              Start compact near water but off obvious patrol vectors: foundation ring, walls, bed or bedroll, storage,
              and a sheltered crafting cluster beat a sprawling fort you cannot light or defend. Learn roof snapping
              early—mid-game teardowns tax morale. Keep interior lights for night benches and pin a repair hammer so
              storm chip damage never strands you off-cycle.
            </p>
            <h2>Crafting your first boat</h2>
            <p>
              Hull reliability beats figurehead glam: anchor feel, rudder response, and cargo for one extra expedition
              matter more than cosmetics. Read mast and sail requirements carefully—missing one rope or tar brick sends
              the whole crew back to shore. When gunports unlock, skim the <RouterLink to="/wiki/ship">ship wiki</RouterLink>
              before you spend rare ingots on a frigate your helmsman hates.
            </p>
          </div>

          <div class="guide-chunk wr-html-prose">
            <h2>Essential survival: food buffs</h2>
            <p>
              Treat meals like loadout slots: one health-forward dish, one stamina-forward dish, and one flex buff
              before hard POIs or naval pulls. Timers and stacking rules change in EA—read each tooltip the day you
              play. Bank dried rations for long sprays; compare ingredient costs on the
              <RouterLink to="/wiki/resources">resources wiki</RouterLink> before you burn rare fish for marginal gains.
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
                  <td><RouterLink to="/map">/map</RouterLink></td>
                </tr>
                <tr>
                  <td>Loot tables &amp; crafting math</td>
                  <td>Wiki hub</td>
                  <td><RouterLink to="/wiki">/wiki</RouterLink></td>
                </tr>
                <tr>
                  <td>Map UI literacy</td>
                  <td>Guides hub</td>
                  <td><RouterLink to="/guides">/guides</RouterLink> (see articles list)</td>
                </tr>
                <tr>
                  <td>Logistics &amp; servers</td>
                  <td>Advanced</td>
                  <td><RouterLink to="/advanced">/advanced</RouterLink></td>
                </tr>
                <tr>
                  <td>Co-op invites</td>
                  <td>Play online guide</td>
                  <td><RouterLink to="/guides/play-windrose-online">/guides/play-windrose-online</RouterLink></td>
                </tr>
                <tr>
                  <td>Mod loadouts</td>
                  <td>Mods list</td>
                  <td><RouterLink to="/mods">/mods</RouterLink></td>
                </tr>
              </tbody>
            </table>
            <p>
              After you finish this page, keep Advanced open in another tab for combat cadence, gunpowder beats, forts,
              and dedicated server hygiene—the same “two-pane” workflow the original Windrose Compass writers used.
            </p>
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

const route = useRoute()
const imgHero = computed(() => publicAssetUrl('/images/bg.webp'))
const imgAbout = computed(() => publicAssetUrl('/images/about-img.jpg'))

const JSON_LD_ATTR = 'data-wr-jsonld-getting-started'

onMounted(() => {
  const headline = String(route.meta.title || '')
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

.guide-chunk {
  margin: 0;
  padding: 1.35rem 1.45rem 1.45rem;
  border-radius: 0.35rem;
  border: 1px solid rgba(201, 164, 92, 0.24);
  background: rgba(8, 9, 12, 0.82);
  box-shadow: 0 16px 42px rgba(0, 0, 0, 0.42);
}

.guide-chunk :deep(h2:first-child),
.guide-chunk :deep(figure:first-child) {
  margin-top: 0;
}
</style>

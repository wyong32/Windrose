<template>
  <article class="wiki-module wiki-res-page wiki-shp-page">
    <section class="page-hero page-hero--tome" aria-labelledby="wiki-shp-heading">
      <div class="container">
        <nav class="page-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li class="page-breadcrumb__sep" aria-hidden="true">/</li>
            <li><RouterLink to="/wiki">Wiki</RouterLink></li>
            <li class="page-breadcrumb__sep" aria-hidden="true">/</li>
            <li><span aria-current="page">{{ breadcrumbCurrent }}</span></li>
          </ol>
        </nav>
        <div class="page-hero__shell">
          <span class="page-hero__sigil" aria-hidden="true" />
          <p class="page-hero__eyebrow">{{ eyebrow }}</p>
          <h1 id="wiki-shp-heading">{{ title }}</h1>
          <p v-if="lead" class="page-hero__lead">{{ lead }}</p>
          <p v-if="leadSecondary" class="page-hero__lead">{{ leadSecondary }}</p>
        </div>
      </div>
    </section>

    <section class="wiki-category-section" aria-labelledby="wiki-shp-table-heading">
      <div class="container">
        <h2 id="wiki-shp-table-heading" class="wiki-page-table-heading">{{ tableSectionTitle }}</h2>
        <div class="wiki-res-toolbar wiki-res-toolbar--end">
          <div class="wiki-res-search">
            <label class="sr-only" for="wiki-shp-filter">Filter table</label>
            <input
              id="wiki-shp-filter"
              v-model="filter"
              type="search"
              autocomplete="off"
              placeholder="Filter by name, category, stat, or description…"
            />
          </div>
        </div>

        <div class="wiki-res-table-wrap">
          <table class="wiki-res-table wiki-shp-table">
            <thead>
              <tr>
                <th scope="col">Icon</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Stat</th>
                <th scope="col">Rarity</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in filtered"
                :key="row.id"
                class="wiki-res-row"
                :title="descriptionTitle(row)"
              >
                <td>
                  <img v-if="row.image" class="wiki-res-thumb" :src="row.image" :alt="''" width="44" height="44" />
                  <span v-else class="wiki-res-thumb wiki-res-thumb--mono" aria-hidden="true">{{ monogram(row.name) }}</span>
                </td>
                <td>
                  <span class="wiki-res-name">{{ row.name }}</span>
                </td>
                <td class="wiki-res-desc wiki-shp-desc">{{ row.description }}</td>
                <td class="wiki-shp-category">{{ row.category ?? '—' }}</td>
                <td class="wiki-shp-stat">{{ row.stat ?? '—' }}</td>
                <td>
                  <span class="wiki-res-rarity" :class="rarityClass(row.rarity)">{{ row.rarity ?? '—' }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  items: { type: Array, required: true },
  title: {
    type: String,
    default: 'Windrose Ship Wiki — Hulls, Cannons & Deck Hardware',
  },
  breadcrumbCurrent: { type: String, default: 'Ship' },
  eyebrow: { type: String, default: 'Windrose Compass · ship deck · Early Access tables' },
  tableSectionTitle: {
    type: String,
    default: 'Windrose ship items: full searchable table',
  },
  lead: {
    type: String,
    default:
      'Hull modules, gunports, and deck gadgets for Windrose naval combat—each row includes the description plus a Stat column when we have cannon damage, reload pacing, or range notes.',
  },
  leadSecondary: {
    type: String,
    default:
      'Use the interactive map for geography and the wiki ship deck when you are comparing hull loadouts.',
  },
})

const filter = ref('')

const filtered = computed(() => {
  const q = filter.value.trim().toLowerCase()
  const rows = props.items ?? []
  if (!q) return rows
  return rows.filter((r) => {
    const cat = String(r.category ?? '').toLowerCase()
    const st = String(r.stat ?? '').toLowerCase()
    return (
      String(r.name).toLowerCase().includes(q) ||
      String(r.id).toLowerCase().includes(q) ||
      String(r.description ?? '').toLowerCase().includes(q) ||
      cat.includes(q) ||
      st.includes(q)
    )
  })
})

function monogram(name) {
  const s = String(name || '').trim()
  if (!s) return '?'
  const parts = s.split(/\s+/).filter(Boolean)
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase()
  return s.slice(0, 2).toUpperCase()
}

function rarityClass(r) {
  const k = String(r || '').toLowerCase()
  if (k === 'common') return 'wiki-res-rarity--common'
  if (k === 'uncommon') return 'wiki-res-rarity--uncommon'
  if (k === 'rare') return 'wiki-res-rarity--rare'
  if (k === 'epic') return 'wiki-res-rarity--epic'
  if (k === 'legendary') return 'wiki-res-rarity--legendary'
  return 'wiki-res-rarity--common'
}

function descriptionTitle(row) {
  const name = String(row?.name ?? '').trim()
  const raw = String(row?.description ?? '').trim()
  if (!raw) return name || ''
  return name ? `${name}\n\n${raw}` : raw
}
</script>

<style src="./wiki-styles.css"></style>
<style src="./wiki-resources.css"></style>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.wiki-shp-desc {
  max-width: 32rem;
}

.wiki-shp-category {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  white-space: nowrap;
}

.wiki-shp-stat {
  max-width: 22rem;
  font-size: 0.875rem;
  line-height: 1.4;
  color: var(--color-text-muted);
  white-space: normal;
}
</style>

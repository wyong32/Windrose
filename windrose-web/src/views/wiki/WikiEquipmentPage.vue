<template>
  <article class="wiki-module wiki-res-page">
    <section class="page-hero page-hero--tome" aria-labelledby="wiki-eqp-heading">
      <div class="container">
        <nav class="page-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            <li class="page-breadcrumb__sep" aria-hidden="true">/</li>
            <li><a href="/wiki">Wiki</a></li>
            <li class="page-breadcrumb__sep" aria-hidden="true">/</li>
            <li><span aria-current="page">{{ breadcrumbCurrent }}</span></li>
          </ol>
        </nav>
        <div class="page-hero__shell">
          <span class="page-hero__sigil" aria-hidden="true" />
          <p class="page-hero__eyebrow">{{ eyebrow }}</p>
          <h1 id="wiki-eqp-heading">{{ title }}</h1>
          <p v-if="lead" class="page-hero__lead">{{ lead }}</p>
          <p v-if="leadSecondary" class="page-hero__lead">{{ leadSecondary }}</p>
        </div>
      </div>
    </section>

    <section class="wiki-deck-tip" aria-label="Related Compass tools">
      <div class="container wiki-deck-tip__inner">
        <p>
          Armor and accessory rows read best next to the <a href="/wiki/weapons">weapons wiki</a> so you can see resist
          goals beside the damage type you are eating in forts. Planning a respec after you swap sets? Rehearse points on
          the talent tree page in town before you spend.
        </p>
      </div>
    </section>

    <section class="wiki-category-section" aria-labelledby="wiki-eqp-table-heading">
      <div class="container">
        <h2 id="wiki-eqp-table-heading" class="wiki-page-table-heading">{{ tableSectionTitle }}</h2>
        <div class="wiki-res-toolbar wiki-res-toolbar--end">
          <div class="wiki-res-search">
            <label class="sr-only" for="wiki-eqp-filter">Filter table</label>
            <input
              id="wiki-eqp-filter"
              v-model="filter"
              type="search"
              autocomplete="off"
              placeholder="Filter by name, category, or description…"
            />
          </div>
        </div>

        <div class="wiki-res-table-wrap" data-wiki-deck="equipment">
          <table class="wiki-res-table wiki-eqp-table">
            <thead>
              <tr>
                <th scope="col">Icon</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Rarity</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in filtered"
                :key="row.id"
                :id="'wiki-item-' + row.id"
                :title="descriptionTitle(row)"
              >
                <td>
                  <img v-if="row.image" class="wiki-res-thumb" :src="row.image" :alt="''" width="44" height="44" />
                  <span v-else class="wiki-res-thumb wiki-res-thumb--mono" aria-hidden="true">{{ monogram(row.name) }}</span>
                </td>
                <td>
                  <span class="wiki-res-name">{{ row.name }}</span>
                </td>
                <td class="wiki-res-desc wiki-eqp-desc">{{ row.description }}</td>
                <td class="wiki-eqp-category">{{ row.category ?? '—' }}</td>
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
import bundledItems from '@/data/wiki/items/equipment.js'

const props = defineProps({
  items: { type: Array, default: undefined },
  title: {
    type: String,
    default: 'Windrose Equipment Wiki — Armor, Tools & Worn Gear',
  },
  breadcrumbCurrent: { type: String, default: 'Equipment' },
  eyebrow: { type: String, default: 'Windrose Compass · equipment deck · Early Access tables' },
  tableSectionTitle: {
    type: String,
    default: 'Windrose equipment: full searchable table',
  },
  lead: {
    type: String,
    default:
      'Armor, tools, trinkets—gear that is not under Weapons. Numbers may lag patches; trust live tooltips for exact stats.',
  },
  leadSecondary: {
    type: String,
    default: '',
  },
})

const filter = ref('')

const filtered = computed(() => {
  const q = filter.value.trim().toLowerCase()
  const rows = props.items ?? bundledItems
  if (!q) return rows
  return rows.filter((r) => {
    const cat = String(r.category ?? '').toLowerCase()
    return (
      String(r.name).toLowerCase().includes(q) ||
      String(r.id).toLowerCase().includes(q) ||
      String(r.description ?? '').toLowerCase().includes(q) ||
      cat.includes(q)
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

<style scoped>
.wiki-eqp-desc {
  max-width: 32rem;
}

.wiki-eqp-category {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  white-space: nowrap;
}
</style>

<template>
  <article class="wiki-module wiki-res-page wiki-con-page">
    <section class="page-hero page-hero--tome" aria-labelledby="wiki-con-heading">
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
          <h1 id="wiki-con-heading">{{ title }}</h1>
          <p v-if="lead" class="page-hero__lead">{{ lead }}</p>
          <p v-if="leadSecondary" class="page-hero__lead">{{ leadSecondary }}</p>
        </div>
      </div>
    </section>

    <section class="wiki-category-section" aria-labelledby="wiki-con-table-heading">
      <div class="container">
        <h2 id="wiki-con-table-heading" class="wiki-page-table-heading">{{ tableSectionTitle }}</h2>
        <div class="wiki-res-toolbar wiki-res-toolbar--end">
          <div class="wiki-res-search">
            <label class="sr-only" for="wiki-con-filter">Filter table</label>
            <input
              id="wiki-con-filter"
              v-model="filter"
              type="search"
              autocomplete="off"
              placeholder="Filter by name, category, or description…"
            />
          </div>
        </div>

        <div class="wiki-res-table-wrap">
          <table class="wiki-res-table wiki-con-table">
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
                <td class="wiki-res-desc wiki-con-desc">{{ row.description }}</td>
                <td class="wiki-con-category">{{ row.category ?? '—' }}</td>
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
    default: 'Windrose Consumables Wiki — Food, Tonics & Buff Items',
  },
  breadcrumbCurrent: { type: String, default: 'Consumables' },
  eyebrow: { type: String, default: 'Windrose Compass · consumables deck · Early Access tables' },
  tableSectionTitle: {
    type: String,
    default: 'Windrose consumables: full searchable table',
  },
  lead: {
    type: String,
    default:
      'Meals, medicine, and expendable buffs for Windrose PvE survival—stack rules, categories, and rarity tags in one filterable table. Search by name or effect text when you need the right meal before a fight.',
  },
  leadSecondary: {
    type: String,
    default:
      'Pair this deck with the Resources wiki when a recipe calls for a specific fish or spice, and plan boarding windows using your crew’s own combat notes.',
  },
})

const filter = ref('')

const filtered = computed(() => {
  const q = filter.value.trim().toLowerCase()
  const rows = props.items ?? []
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

.wiki-con-desc {
  max-width: 32rem;
}

.wiki-con-category {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  white-space: nowrap;
}
</style>

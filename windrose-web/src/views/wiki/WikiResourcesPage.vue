<template>
  <article class="wiki-module wiki-res-page">
    <section class="page-hero page-hero--tome" aria-labelledby="wiki-res-heading">
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
          <h1 id="wiki-res-heading">{{ title }}</h1>
          <p v-if="lead" class="page-hero__lead">{{ lead }}</p>
          <p v-if="leadSecondary" class="page-hero__lead">{{ leadSecondary }}</p>
        </div>
        <!-- 广告位 -->
        <div class="ad-wrap" style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center;">
          <GptBanner gpt-slot-id="div-gpt-ad-wiki-resources-01" :rotation-index="0" />
        </div>
      </div>
    </section>

    <section class="wiki-deck-tip" aria-label="Related Compass tools">
      <div class="container wiki-deck-tip__inner">
        <p>
          Cross-reference biome names with pins on the <a href="/map">interactive map</a> before you sail for a rare
          node. When you know what you are crafting tonight, scan the consumables and equipment decks for the outputs that
          consume these mats.
        </p>
      </div>
    </section>

    <section class="wiki-category-section" aria-labelledby="wiki-res-table-heading">
      <div class="container">
        <!-- 广告位 -->
        <div class="ad-wrap" style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center;">
          <GptBanner gpt-slot-id="div-gpt-ad-wiki-resources-02" :rotation-index="1" />
        </div>
        <h2 id="wiki-res-table-heading" class="wiki-page-table-heading">{{ tableSectionTitle }}</h2>
        <div class="wiki-res-toolbar wiki-res-toolbar--end">
          <div class="wiki-res-search">
            <label class="sr-only" for="wiki-res-filter">Filter by name or id</label>
            <input
              id="wiki-res-filter"
              v-model="filter"
              type="search"
              autocomplete="off"
              placeholder="Filter by name or id…"
            />
          </div>
        </div>

        <div class="wiki-res-table-wrap" data-wiki-deck="resources">
          <table class="wiki-res-table">
            <thead>
              <tr>
                <th scope="col">Icon</th>
                <th scope="col">Item</th>
                <th scope="col">Rarity</th>
                <th scope="col">Stack</th>
                <th scope="col">Description</th>
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
                  <span class="wiki-res-id">{{ row.id }}</span>
                </td>
                <td>
                  <span class="wiki-res-rarity" :class="rarityClass(row.rarity)">{{ row.rarity ?? '—' }}</span>
                </td>
                <td class="wiki-res-stack">{{ formatStack(row.stackLimit) }}</td>
                <td class="wiki-res-desc">{{ row.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 广告位 -->
        <div class="ad-wrap" style="width: 100%; height: 100px; display: flex; justify-content: center; align-items: center;">
          <GptBanner gpt-slot-id="div-gpt-ad-wiki-resources-03" :rotation-index="2" />
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { computed, ref } from 'vue'
import GptBanner from '@/components/GptBanner.vue'
import bundledItems from '@/data/wiki/items/resources.js'

const props = defineProps({
  items: { type: Array, default: undefined },
  title: {
    type: String,
    default: 'Windrose Resources Wiki — Raw Materials & World Drops',
  },
  /** 面包屑最后一项文案（通常与 title 一致） */
  breadcrumbCurrent: { type: String, default: 'Resources' },
  eyebrow: { type: String, default: 'Windrose Compass · materials deck · Early Access tables' },
  tableSectionTitle: {
    type: String,
    default: 'Windrose resources: full searchable item table',
  },
  lead: {
    type: String,
    default:
      'Ores, fibers, and drops in one filterable table—use Description and hover tips; match odd pin names to rows here.',
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
  return rows.filter(
    (r) =>
      String(r.name).toLowerCase().includes(q) ||
      String(r.id).toLowerCase().includes(q) ||
      String(r.description ?? '').toLowerCase().includes(q),
  )
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

function formatStack(n) {
  if (n == null) return '—'
  if (Number(n) === 0) return '—'
  return String(n)
}

/** 行悬停提示：与单元格内文案一致，保留换行（浏览器对 title 长度可能截断） */
function descriptionTitle(row) {
  const name = String(row?.name ?? '').trim()
  const raw = String(row?.description ?? '').trim()
  if (!raw) return name || ''
  return name ? `${name}\n\n${raw}` : raw
}
</script>

<style src="./wiki-styles.css"></style>

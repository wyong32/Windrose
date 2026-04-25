<template>
  <article class="wiki-module wiki-category-page">
    <section class="page-hero page-hero--tome" :aria-labelledby="headingId">
      <div class="container">
        <nav class="page-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li class="page-breadcrumb__sep" aria-hidden="true">/</li>
            <li><RouterLink to="/wiki">Wiki</RouterLink></li>
            <li class="page-breadcrumb__sep" aria-hidden="true">/</li>
            <li><span aria-current="page">{{ meta.label }}</span></li>
          </ol>
        </nav>
        <div class="page-hero__shell">
          <span class="page-hero__sigil" aria-hidden="true" />
          <p class="page-hero__eyebrow">{{ meta.tagline }}</p>
          <h1 :id="headingId">Windrose Wiki — {{ meta.label }}</h1>
          <p class="page-hero__lead">{{ meta.description }}</p>
        </div>
      </div>
    </section>

    <section class="wiki-category-section" :aria-labelledby="listHeadingId">
      <div class="container">
        <h2 :id="listHeadingId" class="wiki-page-table-heading">Windrose {{ meta.label }}: reference entries</h2>
        <ul v-if="items.length" class="wiki-category-list">
          <li v-for="row in items" :key="row.id" class="wiki-category-row">
            <p class="wiki-category-row__title">{{ row.title }}</p>
            <p class="wiki-category-row__excerpt">{{ row.excerpt }}</p>
          </li>
        </ul>
        <p v-else class="wiki-category-empty">Nothing listed in this category yet—try again after the next site update.</p>
      </div>
    </section>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  meta: {
    type: Object,
    required: true,
  },
  items: {
    type: Array,
    default: () => [],
  },
})

const headingId = computed(() => `wiki-cat-${props.meta.slug}`)
const listHeadingId = computed(() => `wiki-cat-${props.meta.slug}-list`)
</script>

<style src="./wiki-styles.css"></style>

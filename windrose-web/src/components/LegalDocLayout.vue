<template>
  <article class="legal-doc">
    <section class="legal-doc__hero">
      <div class="container">
        <nav class="legal-doc__crumb" aria-label="Breadcrumb">
          <ol>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li class="legal-doc__crumb-sep" aria-hidden="true">/</li>
            <li><span aria-current="page">{{ title }}</span></li>
          </ol>
        </nav>
        <h1 class="legal-doc__title">{{ title }}</h1>
        <p v-if="updated" class="legal-doc__updated">Last updated: {{ updated }}</p>
      </div>
    </section>
    <div class="legal-doc__body container">
      <div class="legal-doc__prose wr-html-prose">
        <slot />
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  updated: { type: String, default: '' },
})
</script>

<style scoped>
.legal-doc {
  padding-bottom: 3rem;
}

.legal-doc__hero {
  padding: 1.25rem 0 1rem;
  border-bottom: 1px solid rgba(160, 188, 210, 0.18);
  background: linear-gradient(180deg, rgba(12, 16, 24, 0.5), transparent);
}

.legal-doc__crumb ol {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
  list-style: none;
  margin: 0 0 0.75rem;
  padding: 0;
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.legal-doc__crumb a {
  color: var(--color-text-muted);
  text-decoration: none;
}

.legal-doc__crumb a:hover {
  color: var(--color-brass);
}

.legal-doc__crumb-sep {
  opacity: 0.5;
}

.legal-doc__title {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(1.35rem, 2.5vw, 1.75rem);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-parchment);
}

.legal-doc__updated {
  margin: 0.5rem 0 0;
  font-size: 0.82rem;
  color: var(--color-text-muted);
}

.legal-doc__body {
  padding-top: 1.75rem;
}

.legal-doc__prose {
  max-width: 65ch;
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.65;
}

.legal-doc__prose :deep(h2) {
  margin: 1.75rem 0 0.65rem;
  font-family: var(--font-heading);
  font-size: 0.95rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-parchment);
}

.legal-doc__prose :deep(h2:first-child) {
  margin-top: 0;
}

.legal-doc__prose :deep(p) {
  margin: 0 0 1rem;
}

.legal-doc__prose :deep(ul) {
  margin: 0 0 1rem;
  padding-left: 1.25rem;
}

.legal-doc__prose :deep(li) {
  margin-bottom: 0.35rem;
}

.legal-doc__prose :deep(a) {
  color: var(--color-sea);
  text-decoration: underline;
  text-underline-offset: 0.15em;
}

.legal-doc__prose :deep(a:hover) {
  color: var(--color-brass);
}
</style>

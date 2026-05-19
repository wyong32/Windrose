<template>
  <div
    class="home-comments"
    :class="{ 'home-comments--embedded': embedded, 'home-comments--about-column': aboutColumn }"
    role="region"
    aria-labelledby="home-comments-heading"
  >
    <div :class="embedded ? 'home-comments__sheet' : 'container'">
      <div class="home-comments__panel" :class="{ 'home-comments__panel--embedded': embedded }">
        <div v-if="!embedded" class="home-comments__accent" aria-hidden="true" />
        <div v-else-if="!aboutColumn" class="home-comments__accent home-comments__accent--embedded" aria-hidden="true" />

        <header
          class="home-comments__head"
          :class="{ 'home-comments__head--embedded': embedded, 'home-comments__head--about-column': aboutColumn }"
        >
          <p class="home-comments__eyebrow">{{ embedded ? 'This site' : 'Windrose Compass' }}</p>
          <h2 id="home-comments-heading" class="home-comments__title">
            {{ embedded ? 'Leave a message for this site' : 'Guest messages' }}
          </h2>
          <p class="home-comments__lead">
            {{
              embedded
                ? 'Feedback for Windrose Compass only—typos, map ideas, or a quick thanks. For game bugs or purchases, use official Windrose / Steam support. Short text; no ratings.'
                : 'Short messages for this fan hub—no scores, just words. Not official game support; spam may be removed by the comment service.'
            }}
          </p>
        </header>

        <div v-if="!apiKey" class="home-comments__banner home-comments__banner--warn" role="status">
          <strong>Messages unavailable.</strong>
          Set <code class="home-comments__code">VITE_COMMENT_API_KEY</code> in
          <code class="home-comments__code">windrose-web/.env.local</code> (see
          <code class="home-comments__code">.env.example</code>). Never commit the key to Git.
        </div>

        <div v-else-if="listError" class="home-comments__banner home-comments__banner--err" role="alert">
          {{ listError }}
        </div>

        <div v-if="apiKey && !listError" class="home-comments__body">
          <ul v-if="reviews.length" class="home-comments__list" :aria-label="embedded ? 'Messages left for this site' : 'Guest messages'">
            <li v-for="r in reviews" :key="r.id" class="home-comments__item">
              <div class="home-comments__avatar" aria-hidden="true">
                {{ avatarLetter(r.authorDisplayName) }}
              </div>
              <div class="home-comments__bubble">
                <div class="home-comments__meta">
                  <span class="home-comments__name">{{ displayName(r.authorDisplayName) }}</span>
                  <time class="home-comments__time" :datetime="r.createdAt">{{ formatTime(r.createdAt) }}</time>
                </div>
                <p class="home-comments__text">{{ r.body }}</p>
              </div>
            </li>
          </ul>

          <p v-else-if="!listLoading" class="home-comments__empty">No messages yet—you can be the first.</p>

          <div v-if="listLoading" class="home-comments__loading" aria-live="polite">Loading messages…</div>

          <div v-if="apiKey && canLoadMore" class="home-comments__more-wrap">
            <button type="button" class="home-comments__more" :disabled="loadMoreLoading" @click="loadMore">
              {{ loadMoreLoading ? 'Loading…' : 'Older messages' }}
            </button>
          </div>
        </div>

        <form v-if="apiKey" class="home-comments__form" @submit.prevent="onSubmit">
          <div class="home-comments__form-grid">
            <label class="home-comments__field">
              <span class="home-comments__label">Your name <span class="home-comments__optional">(optional)</span></span>
              <input
                v-model.trim="formName"
                type="text"
                name="author"
                maxlength="120"
                autocomplete="nickname"
                class="home-comments__input"
                placeholder="How you’d like to appear"
              />
            </label>
            <label class="home-comments__field">
              <span class="home-comments__label">Message</span>
              <textarea
                v-model="formBody"
                name="body"
                :rows="embedded ? 3 : 4"
                maxlength="2000"
                required
                class="home-comments__textarea"
                placeholder="Site feedback, a fix for a wiki row, or thanks to the editors…"
              />
              <span class="home-comments__count" aria-live="polite">{{ bodyLength }} / 2000</span>
            </label>
          </div>

          <div v-if="submitError" class="home-comments__banner home-comments__banner--err" role="alert">
            {{ submitError }}
          </div>
          <div v-if="submitOk" class="home-comments__banner home-comments__banner--ok" role="status">
            Sent—thank you.
          </div>

          <div class="home-comments__actions">
            <button type="submit" class="home-comments__submit" :disabled="submitting || bodyTrimmed.length < 1">
              {{ submitting ? 'Sending…' : 'Send message' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { createHomeReview, fetchHomeReviews } from '@/api/commentApi.js'

defineProps({
  /** When true, sits inside another section (e.g. About)—lighter chrome, no nested `.container` padding fight. */
  embedded: {
    type: Boolean,
    default: false,
  },
  /** About section side column (image+copy on the other side); tighter layout with `embedded`. */
  aboutColumn: {
    type: Boolean,
    default: false,
  },
})

const apiKey = (import.meta.env.VITE_COMMENT_API_KEY || '').trim()

const reviews = ref([])
const page = ref(1)
const total = ref(0)
const pageSize = 12
const listLoading = ref(false)
const loadMoreLoading = ref(false)
const listError = ref('')

const formName = ref('')
const formBody = ref('')
const submitting = ref(false)
const submitError = ref('')
const submitOk = ref(false)

const bodyTrimmed = computed(() => formBody.value.trim())
const bodyLength = computed(() => formBody.value.length)

const canLoadMore = computed(() => apiKey && reviews.value.length > 0 && reviews.value.length < total.value)

function displayName(name) {
  const s = String(name ?? '').trim()
  return s.length ? s : 'Anonymous'
}

function avatarLetter(name) {
  const s = displayName(name)
  return s.charAt(0).toUpperCase()
}

function formatTime(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

async function loadInitial() {
  if (!apiKey) return
  listLoading.value = true
  listError.value = ''
  const res = await fetchHomeReviews({ apiKey, page: 1, pageSize, sort: 'createdAt_desc' })
  listLoading.value = false
  if (!res.ok) {
    listError.value = humanFetchError(res)
    return
  }
  reviews.value = res.reviews
  total.value = res.total
  page.value = 1
}

function humanFetchError(res) {
  if (res.status === 403) return 'This site origin is not allowed to load messages (check API allowed origins).'
  if (res.status === 401) return 'Messages could not load (invalid API key).'
  if (res.status === 429) return 'Too many requests—try again in a moment.'
  return res.errorMessage || 'Could not load messages.'
}

async function loadMore() {
  if (!apiKey || loadMoreLoading.value) return
  loadMoreLoading.value = true
  const next = page.value + 1
  const res = await fetchHomeReviews({ apiKey, page: next, pageSize, sort: 'createdAt_desc' })
  loadMoreLoading.value = false
  if (!res.ok) {
    listError.value = humanFetchError(res)
    return
  }
  const existing = new Set(reviews.value.map((r) => r.id))
  for (const r of res.reviews) {
    if (!existing.has(r.id)) reviews.value.push(r)
  }
  page.value = next
  total.value = res.total
}

async function onSubmit() {
  submitError.value = ''
  submitOk.value = false
  const body = bodyTrimmed.value
  if (body.length < 1) {
    submitError.value = 'Please write something before sending.'
    return
  }
  submitting.value = true
  const res = await createHomeReview({
    apiKey,
    body,
    authorDisplayName: formName.value.trim() || undefined,
  })
  submitting.value = false
  if (!res.ok) {
    if (res.status === 429) {
      submitError.value = 'You are sending a little too fast—wait a bit and try again.'
    } else if (res.status === 403) {
      submitError.value = 'Sending blocked for this browser origin (check API allowed origins).'
    } else {
      submitError.value = res.errorMessage || 'Could not send your message.'
    }
    return
  }
  submitOk.value = true
  if (res.review && typeof res.review === 'object' && res.review.id) {
    reviews.value = [res.review, ...reviews.value.filter((x) => x.id !== res.review.id)]
    total.value = total.value + 1
  } else {
    await loadInitial()
  }
  formBody.value = ''
}

onMounted(() => {
  loadInitial()
})
</script>

<style scoped>
.home-comments {
  width: 100%;
}

.home-comments--embedded {
  margin-top: clamp(1.75rem, 4vw, 2.5rem);
  padding-top: clamp(1.35rem, 3vw, 1.85rem);
  border-top: 1px solid rgba(160, 188, 210, 0.14);
}

.home-comments--about-column.home-comments--embedded {
  margin-top: 0;
  padding-top: 0;
  border-top: none;
  width: 100%;
}

.home-comments__sheet {
  width: 100%;
  max-width: min(48rem, 100%);
  margin-inline: auto;
}

.home-comments--about-column .home-comments__sheet {
  max-width: none;
  margin-inline: 0;
}

.home-comments__panel {
  position: relative;
  padding: clamp(1.35rem, 3vw, 1.85rem) clamp(1.1rem, 2.5vw, 1.65rem) clamp(1.4rem, 2.5vw, 1.75rem);
  padding-top: 1.65rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(201, 168, 106, 0.22);
  background:
    linear-gradient(168deg, rgba(14, 18, 28, 0.96) 0%, rgba(7, 9, 14, 0.94) 55%, rgba(10, 18, 26, 0.9) 100%),
    radial-gradient(90% 70% at 10% 0%, rgba(90, 188, 214, 0.07), transparent 55%);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.04) inset,
    0 20px 50px rgba(0, 0, 0, 0.42);
}

.home-comments__panel--embedded {
  padding: clamp(1rem, 2.5vw, 1.35rem) clamp(0.85rem, 2vw, 1.15rem) clamp(1.1rem, 2vw, 1.35rem);
  padding-top: 1.2rem;
  border-radius: 0.4rem;
  border-color: rgba(160, 188, 210, 0.16);
  background: linear-gradient(175deg, rgba(10, 14, 22, 0.55) 0%, rgba(6, 8, 12, 0.42) 100%);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.03) inset,
    0 10px 32px rgba(0, 0, 0, 0.28);
}

.home-comments--about-column .home-comments__panel--embedded {
  padding: 0.85rem 0.75rem 1rem;
  padding-top: 0.95rem;
  border-radius: 0.35rem;
  border-color: rgba(201, 168, 106, 0.22);
  background: linear-gradient(180deg, rgba(12, 16, 24, 0.65) 0%, rgba(6, 8, 12, 0.5) 100%);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.03) inset;
}

.home-comments__accent {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(280px, 72%);
  height: 3px;
  border-radius: 0 0 6px 6px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(201, 168, 106, 0.45),
    var(--color-sea, #6aa8c4),
    transparent
  );
  opacity: 0.9;
}

.home-comments__accent--embedded {
  width: min(200px, 55%);
  height: 2px;
  opacity: 0.65;
}

.home-comments__head {
  margin-bottom: 1.35rem;
  text-align: center;
}

.home-comments__head--embedded {
  margin-bottom: 1.05rem;
  text-align: left;
}

.home-comments__eyebrow {
  margin: 0 0 0.45rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(160, 188, 210, 0.72);
}

.home-comments__head--embedded .home-comments__eyebrow {
  margin-bottom: 0.35rem;
  letter-spacing: 0.16em;
  font-size: 0.62rem;
  color: rgba(160, 188, 210, 0.6);
}

.home-comments__title {
  margin: 0 0 0.55rem;
  font-family: var(--font-heading, inherit);
  font-size: clamp(1.25rem, 2.8vw, 1.55rem);
  letter-spacing: 0.02em;
  color: var(--color-parchment);
}

.home-comments__head--embedded .home-comments__title {
  font-size: clamp(1.05rem, 2.2vw, 1.28rem);
  margin-bottom: 0.45rem;
}

.home-comments__lead {
  margin: 0 auto;
  max-width: 46rem;
  font-size: 0.92rem;
  line-height: 1.62;
  color: rgba(186, 194, 210, 0.9);
}

.home-comments__head--embedded .home-comments__lead {
  margin: 0;
  max-width: none;
  font-size: 0.86rem;
  line-height: 1.58;
  color: rgba(170, 182, 200, 0.88);
}

.home-comments__head--about-column {
  margin-bottom: 0.9rem;
}

.home-comments__head--about-column .home-comments__eyebrow {
  margin-bottom: 0.3rem;
}

.home-comments__head--about-column .home-comments__title {
  font-size: clamp(1rem, 2.4vw, 1.15rem);
}

.home-comments__head--about-column .home-comments__lead {
  font-size: 0.82rem;
  line-height: 1.52;
}

.home-comments__banner {
  margin-bottom: 1rem;
  padding: 0.85rem 1rem;
  border-radius: 0.35rem;
  font-size: 0.88rem;
  line-height: 1.55;
}

.home-comments__banner--warn {
  border: 1px dashed rgba(201, 168, 106, 0.45);
  background: rgba(40, 32, 20, 0.35);
  color: rgba(248, 236, 220, 0.92);
}

.home-comments__banner--err {
  border: 1px solid rgba(196, 90, 100, 0.45);
  background: rgba(48, 18, 22, 0.4);
  color: rgba(255, 220, 224, 0.95);
}

.home-comments__banner--ok {
  border: 1px solid rgba(90, 188, 140, 0.4);
  background: rgba(16, 40, 32, 0.4);
  color: rgba(210, 248, 230, 0.95);
}

.home-comments__code {
  padding: 0.08rem 0.28rem;
  border-radius: 0.2rem;
  background: rgba(0, 0, 0, 0.35);
  font-size: 0.82em;
}

.home-comments__body {
  margin-bottom: 1.5rem;
}

.home-comments__panel--embedded .home-comments__body {
  margin-bottom: 1.15rem;
}

.home-comments__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.home-comments__panel--embedded .home-comments__list {
  gap: 0.75rem;
}

.home-comments__item {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.home-comments__avatar {
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(106, 168, 196, 0.35);
  background: linear-gradient(145deg, rgba(24, 44, 56, 0.9), rgba(8, 12, 18, 0.95));
  font-size: 1rem;
  font-weight: 800;
  color: rgba(200, 232, 248, 0.95);
}

.home-comments__panel--embedded .home-comments__avatar {
  width: 2.15rem;
  height: 2.15rem;
  font-size: 0.88rem;
}

.home-comments__bubble {
  flex: 1;
  min-width: 0;
  padding: 0.75rem 1rem;
  border-radius: 0.35rem 0.45rem 0.45rem 0.35rem;
  border: 1px solid rgba(160, 188, 210, 0.14);
  background: rgba(4, 6, 10, 0.55);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
}

.home-comments__panel--embedded .home-comments__bubble {
  padding: 0.6rem 0.85rem;
}

.home-comments__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.35rem 0.75rem;
  margin-bottom: 0.4rem;
}

.home-comments__name {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(238, 242, 248, 0.95);
}

.home-comments__time {
  font-size: 0.72rem;
  color: rgba(160, 188, 210, 0.75);
}

.home-comments__text {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.58;
  color: rgba(220, 226, 236, 0.94);
  white-space: pre-wrap;
  word-break: break-word;
}

.home-comments__panel--embedded .home-comments__text {
  font-size: 0.87rem;
  line-height: 1.52;
}

.home-comments__empty {
  margin: 0;
  padding: 1.25rem 1rem;
  text-align: center;
  font-size: 0.92rem;
  color: rgba(160, 188, 210, 0.8);
  border: 1px dashed rgba(160, 188, 210, 0.2);
  border-radius: 0.35rem;
}

.home-comments__panel--embedded .home-comments__empty {
  padding: 0.85rem 0.75rem;
  font-size: 0.85rem;
}

.home-comments__loading {
  padding: 0.75rem;
  text-align: center;
  font-size: 0.88rem;
  color: rgba(160, 188, 210, 0.85);
}

.home-comments__more-wrap {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.home-comments__panel--embedded .home-comments__more-wrap {
  margin-top: 0.65rem;
}

.home-comments__more {
  padding: 0.45rem 1.15rem;
  border-radius: 999px;
  border: 1px solid rgba(160, 188, 210, 0.28);
  background: rgba(8, 12, 18, 0.75);
  color: var(--color-parchment);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background 0.2s ease;
}

.home-comments__more:hover:not(:disabled) {
  border-color: rgba(106, 168, 196, 0.45);
  background: rgba(14, 22, 32, 0.88);
}

.home-comments__more:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.home-comments__form {
  padding-top: 1.25rem;
  border-top: 1px solid rgba(160, 188, 210, 0.12);
}

.home-comments__panel--embedded .home-comments__form {
  padding-top: 1rem;
}

.home-comments__form-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.home-comments__field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.home-comments__label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(160, 188, 210, 0.85);
}

.home-comments__optional {
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.02em;
  color: rgba(160, 188, 210, 0.55);
}

.home-comments__input,
.home-comments__textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 0.55rem 0.65rem;
  border-radius: 0.3rem;
  border: 1px solid rgba(160, 188, 210, 0.22);
  background: rgba(4, 6, 10, 0.65);
  color: var(--color-parchment);
  font-size: 0.9rem;
  font-family: inherit;
  line-height: 1.45;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.home-comments__textarea {
  resize: vertical;
  min-height: 6.5rem;
}

.home-comments__panel--embedded .home-comments__textarea {
  min-height: 5.25rem;
}

.home-comments__input:focus,
.home-comments__textarea:focus {
  outline: none;
  border-color: rgba(106, 168, 196, 0.55);
  box-shadow: 0 0 0 2px rgba(106, 168, 196, 0.15);
}

.home-comments__count {
  font-size: 0.72rem;
  color: rgba(160, 188, 210, 0.65);
  text-align: right;
}

.home-comments__actions {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}

.home-comments__panel--embedded .home-comments__actions {
  margin-top: 0.75rem;
}

.home-comments__submit {
  padding: 0.55rem 1.35rem;
  border-radius: 0.25rem;
  border: 1px solid rgba(201, 168, 106, 0.45);
  background: linear-gradient(180deg, rgba(52, 42, 28, 0.55), rgba(18, 14, 10, 0.92));
  color: rgba(248, 240, 228, 0.98);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  transition:
    border-color 0.2s ease,
    transform 0.15s ease,
    box-shadow 0.2s ease;
}

.home-comments__submit:hover:not(:disabled) {
  border-color: rgba(106, 168, 196, 0.55);
  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.42);
}

.home-comments__submit:active:not(:disabled) {
  transform: translateY(1px);
}

.home-comments__submit:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.home-comments__submit:focus-visible {
  outline: 2px solid var(--color-brass);
  outline-offset: 3px;
}
</style>

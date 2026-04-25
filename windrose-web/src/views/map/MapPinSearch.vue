<template>
  <div
    class="map-raster-poi-search"
    :class="{ 'map-raster-poi-search--map-loading': disabled }"
    role="search"
  >
    <div class="map-raster-poi-search__shell">
      <label class="map-raster-poi-search__label" :for="inputId">
        <span class="map-raster-poi-search__label-mark" aria-hidden="true" />
        <span class="map-raster-poi-search__label-text">{{ label }}</span>
      </label>

      <div class="map-raster-poi-search__row">
        <div class="map-raster-poi-search__input-wrap">
          <span class="map-raster-poi-search__mag" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M16.2 16.2 21 21" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" />
            </svg>
          </span>
          <input
            :id="inputId"
            :value="modelValue"
            type="search"
            enterkeyhint="search"
            class="map-raster-poi-search__input"
            :placeholder="placeholder"
            :disabled="disabled"
            autocomplete="off"
            spellcheck="false"
            @input="onInput"
            @keydown.enter.prevent="$emit('enter')"
          />
        </div>

        <button
          v-show="modelValue.trim()"
          type="button"
          class="map-raster-poi-search__clear"
          aria-label="Clear search"
          @click="clear"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              d="M8 8l8 8M16 8l-8 8"
              stroke="currentColor"
              stroke-width="1.85"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>

      <p
        v-if="metaLine"
        class="map-raster-poi-search__meta"
        :class="{
          'map-raster-poi-search__meta--warn': showWarnMeta,
          'map-raster-poi-search__meta--ok': showOkMeta,
        }"
      >
        {{ metaLine }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, useId } from 'vue'

defineOptions({ name: 'MapPinSearch' })

const props = defineProps({
  modelValue: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  matchCount: { type: Number, default: 0 },
  label: { type: String, default: 'Search markers' },
  placeholder: { type: String, default: 'Name, id, or popup text…' },
})

const emit = defineEmits(['update:modelValue', 'enter'])

const inputId = useId()

function onInput(e) {
  const el = e.target
  if (!el || el.tagName !== 'INPUT') return
  emit('update:modelValue', el.value)
}

function clear() {
  emit('update:modelValue', '')
}

const hasQuery = computed(() => Boolean(props.modelValue?.trim()))

const metaLine = computed(() => {
  if (!hasQuery.value) return ''
  if (props.matchCount <= 0) return 'No markers match that query.'
  const n = props.matchCount
  return `${n} match${n === 1 ? '' : 'es'} — press Enter to cycle.`
})

const showWarnMeta = computed(() => hasQuery.value && props.matchCount <= 0)
const showOkMeta = computed(() => hasQuery.value && props.matchCount > 0)
</script>

<template>
  <div class="wr-map__map-stage windrose-map-viewport">
    <div class="wr-map__map-wrap">
      <div class="wr-map__map map-raster-map-frame">
        <div
          :ref="bindMapHost"
          class="rtv-map-host"
          :role="hostRole"
          :aria-label="hostAriaLabel"
          tabindex="0"
        />
        <p v-if="mapError" class="windrose-map-viewport__state windrose-map-viewport__state--err" role="alert">
          {{ mapError }}
        </p>
        <p v-else-if="!mapReady" class="windrose-map-viewport__state" aria-live="polite">Loading chart…</p>
        <div v-if="showCoordHud" v-show="mapReady" class="raster-coord-hud wr-map__hud" aria-hidden="true">
          {{ hudText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, unref } from 'vue'

const props = defineProps({
  /** Ref object from `useWindroseMap` (`mapContainer`) */
  mapContainer: { type: Object, required: true },
  mapReady: { type: Boolean, default: false },
  mapError: { type: String, default: '' },
  /** Ref or string; only used when `showCoordHud` is true */
  coordHud: { type: [String, Object], default: '—' },
  showCoordHud: { type: Boolean, default: true },
  hostRole: { type: String, default: 'application' },
  hostAriaLabel: {
    type: String,
    default: 'Zoomable Windrose world map. Use the mouse wheel or pinch to zoom.',
  },
})

function bindMapHost(el) {
  const r = props.mapContainer
  if (r && typeof r === 'object' && 'value' in r) {
    r.value = el
  }
}

const hudText = computed(() => {
  if (!props.showCoordHud) return ''
  const v = props.coordHud
  if (v && typeof v === 'object' && 'value' in v) return unref(v)
  return unref(v) ?? '—'
})
</script>

<style scoped>
/* 地图页样式在 MapView chunk 内，首页单独引用本组件时必须自带 flex 高度链，否则宿主高度为 0 */
.windrose-map-viewport {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  width: 100%;
}

.windrose-map-viewport .wr-map__map-wrap {
  flex: 1;
  min-height: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.windrose-map-viewport .wr-map__map {
  flex: 1;
  min-height: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.windrose-map-viewport .rtv-map-host {
  flex: 1;
  min-height: 0;
  width: 100%;
}

.windrose-map-viewport__state {
  position: absolute;
  inset: 0;
  z-index: 2;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-size: 0.88rem;
  color: var(--color-text-muted, #aab6c5);
  background: rgba(6, 9, 16, 0.55);
  pointer-events: none;
}

.windrose-map-viewport__state--err {
  color: #f0b4a8;
}

.wr-map__map {
  position: relative;
  /* 脱离地图页时 --wr-map-ocean 可能未定义 */
  background: var(--wr-map-ocean, #2a77c4);
}

.rtv-map-host:focus-visible {
  outline: 2px solid var(--color-cyan-bright, #6ad4e8);
  outline-offset: 2px;
}
</style>

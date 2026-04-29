<template>
  <WindroseMapViewport
    :map-container="mapContainerForProp"
    :map-ready="mapReady"
    :map-error="mapError"
    :show-coord-hud="false"
    host-role="img"
    host-aria-label="Windrose archipelago chart preview without POI markers"
  />
</template>

<script setup>
import { computed } from 'vue'
import windroseBundle from '@/data/map/windroseMap.js'
import WindroseMapViewport from '@/views/map/WindroseMapViewport.vue'
import { useWindroseMap } from '@/views/map/useWindroseMap.js'

const homeMapBundle = { ...windroseBundle, pins: [] }
const { mapContainer, mapError, mapReady } = useWindroseMap(homeMapBundle, {
  fitBoundsZoomOffset: 0.65,
  showMarkers: false,
  showZoomControl: false,
})
const mapContainerForProp = computed(() => mapContainer)
</script>

<template>
  <div :id="gptSlotId" ref="slotRoot" style="min-width: 300px; min-height: 250px"></div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'

const props = defineProps({
  gptSlotId: { type: String, required: true },
  rotationIndex: { type: Number, default: 0 },
})

const slotRoot = ref(null)

const PATHS = [
  '/23346398271/windrosegame.net_all_0506/windrosegame.net_0506_banner_1',
  '/23346398271/windrosegame.net_all_0506/windrosegame.net_0506_banner_2',
  '/23346398271/windrosegame.net_all_0506/windrosegame.net_0506_banner_3',
]
const SIZES = [
  [300, 250],
  [970, 250],
]

function appendDisplayScript(el, slotId) {
  if (!el) return
  if (el.querySelector('script[data-gpt-inline-display="1"]')) return
  const s = document.createElement('script')
  s.setAttribute('data-gpt-inline-display', '1')
  s.textContent = `googletag.cmd.push(function() { googletag.display('${slotId}'); });`
  el.prepend(s)
}

function register(slotEl, slotId, rotationIndex) {
  if (typeof window === 'undefined' || !window.googletag?.cmd || !slotEl) return
  window.__wrGptBannerRegistered = window.__wrGptBannerRegistered || {}
  const unitPath = PATHS[rotationIndex % 3]

  window.googletag.cmd.push(function () {
    const g = window.googletag
    if (window.__wrGptBannerRegistered[slotId]) {
      appendDisplayScript(slotEl, slotId)
      return
    }

    const mapping = g
      .sizeMapping()
      .addSize([1024, 768], [
        [970, 250],
        [300, 250],
      ])
      .addSize([0, 0], [300, 250])
      .build()

    g.defineSlot(unitPath, SIZES, slotId).defineSizeMapping(mapping).addService(g.pubads())
    window.__wrGptBannerRegistered[slotId] = true
    appendDisplayScript(slotEl, slotId)
  })
}

onMounted(() => {
  void nextTick(() => {
    register(slotRoot.value, props.gptSlotId, props.rotationIndex)
  })
})
</script>

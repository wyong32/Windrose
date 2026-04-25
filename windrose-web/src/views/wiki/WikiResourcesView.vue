<template>
  <WikiResourcesPage :items="resourceItems" />
</template>

<script setup>
import WikiResourcesPage from './WikiResourcesPage.vue'
import resourceItems from '@/data/wiki/items/resources.js'
</script>

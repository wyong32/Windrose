<template>
  <WikiWeaponsPage :items="items" />
</template>

<script setup>
import WikiWeaponsPage from './WikiWeaponsPage.vue'
import items from '@/data/wiki/items/weapons.js'
</script>

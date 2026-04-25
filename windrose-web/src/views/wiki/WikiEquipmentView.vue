<template>
  <WikiEquipmentPage :items="items" />
</template>

<script setup>
import WikiEquipmentPage from './WikiEquipmentPage.vue'
import items from '@/data/wiki/items/equipment.js'
</script>

<script setup>
import sourceData from '../data.json'
import { reactive } from 'vue'

const state = reactive({
  destinations: sourceData.destinations
})
</script>

<template>
  <div id="nav">
    <RouterLink id="logo" to="/">Vue School Travel App</RouterLink>
    <RouterLink
      v-for="destination in state.destinations"
      :key="destination.id"
      :to="{ name: 'destination', params: { id: destination.id, slug: destination.slug } }"
    >
      {{ destination.name }}
    </RouterLink>
  </div>
</template>

<style lang="css">
#nav .vue-school-active-link {
  border-bottom: 2px solid white;
}
</style>

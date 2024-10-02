<script setup>
import sourceData from '../data.json'
import { reactive } from 'vue'

const state = reactive({
  destinations: sourceData.destinations
})
</script>

<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <RouterLink
        v-for="destination in state.destinations"
        :key="destination.id"
        :to="{ name: 'destinations', params: { id: destination.id } }"
        ><h2>
          {{ destination.name }}
        </h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </RouterLink>
    </div>
  </div>
</template>

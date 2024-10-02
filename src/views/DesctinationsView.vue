<script setup>
import sourceData from '@/data.json'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const destinationData = computed(() => {
  const destinationId = parseInt(route.params.id)
  return sourceData.destinations.find((destination) => destination.id === destinationId)
})
</script>

<template>
  <h1>{{ destinationData.name }}</h1>
  <div class="destination-details">
    <img :src="`/images/${destinationData.image}`" />
    <p>{{ destinationData.description }}</p>
  </div>
</template>

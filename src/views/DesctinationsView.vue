<script setup>
import sourceData from '@/data.json'
import { useRoute } from 'vue-router'

const route = useRoute()

const destinationId = parseInt(route.params.id)

const destination = sourceData.destinations.find((destination) => destination.id === destinationId)
</script>

<template>
  <h1>{{ destination.name }}</h1>
  <div class="destination-details">
    <img :src="`/images/${destination.image}`" />
    <p>{{ destination.description }}</p>
  </div>
</template>

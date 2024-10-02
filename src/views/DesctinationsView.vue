<script setup>
import axios from 'axios'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

const route = useRoute()
const state = reactive({
  destinationData: {},
  isLoading: true,
  error: null
})
// Using onMounted to call api for the first Time
onMounted(async () => {
  try {
    const slug = route.params.slug
    const response = await axios.get(`/api/${slug}.json`)
    state.destinationData = response.data
  } catch (error) {
    state.error = error
    console.log('Error fetching Data', error)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <div v-if="state.isLoading">
    <PulseLoader />
  </div>
  <section v-else class="destination">
    <h1>{{ state.destinationData.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${state.destinationData.image}`" :alt="state.destinationData.name" />
      <p>{{ state.destinationData.description }}</p>
    </div>
  </section>
</template>

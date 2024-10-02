<script setup>
import { RouterView } from 'vue-router'
import TheNavigation from '@/components/TheNavigation.vue'
</script>

<template>
  <div class="container">
    <TheNavigation />
    <RouterView />
  </div>
</template>

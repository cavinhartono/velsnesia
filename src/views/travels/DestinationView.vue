<script setup>
import Destinations from '@/components/travels/DestinationView.vue'
</script>

<template>
  <div class="destinations" id="destinations">
    <div class="flex between full-content mx-md">
      <h2 class="title">Top Destinations</h2>
      <div class="action flex" style="gap: 12px">
        <button class="btn secondary">&larr;</button>
        <button class="btn primary">&rarr;</button>
      </div>
    </div>
    <Destinations />
  </div>
</template>

<script setup>
import Destinations from '@/components/travels/DestinationView.vue'
import BestSellers from '@/components/travels/BestSellersView.vue'
</script>

<template>
  <div class="destinations">
    <div class="flex between full-content mx-md">
      <h2 class="title">Top Destinations</h2>
      <div class="action">
        <button class="btn primary">&rarr;</button>
        <button class="btn secondary">&larr;</button>
      </div>
    </div>
    <Destinations />
    <div class="flex between full-content mx-md">
      <h2 class="title">Best Sellers</h2>
      <div class="action">
        <button class="btn primary">Check As</button>
      </div>
    </div>
    <BestSellers />
  </div>
</template>

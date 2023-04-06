<script setup>
import IconAirplane from '../icons/travels/IconAirplane.vue'
</script>

<template>
  <header class="header flex between">
    <div class="logo">
      <span class="subtitle">Velsnesia</span>
      <span class="icon"><IconAirplane /></span>
    </div>
    <ul class="nav gap flex">
      <li class="list active"><a href="#home" class="link">Home</a></li>
      <li class="list"><a href="#destinations" class="link">Destinations</a></li>
      <li class="list"><a href="#about" class="link">How it works</a></li>
      <li class="list"><a href="/login" class="link btn primary">Login</a></li>
    </ul>
  </header>
</template>

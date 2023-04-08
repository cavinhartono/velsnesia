<script setup>
import Star from '@/components/icons/travels/IconStar.vue'
import Clock from '@/components/icons/travels/IconClock.vue'
</script>

<template>
  <li class="list">
    <div class="img">
      <slot name="image"></slot>
    </div>
    <div class="content">
      <div class="header">
        <div class="label mx-md">
          <h2 class="title"><slot name="title"></slot></h2>
          <p class="text">
            <slot name="desc"></slot>
          </p>
        </div>
        <div class="flex between mx-md">
          <div class="price">
            <p class="subtitle">Harga</p>
            <h2 class="title">
              <slot name="price"></slot>
            </h2>
          </div>
          <div class="review">
            <span class="icon"> <Star /> </span>
            <span class="subtitle"><slot name="review"></slot></span>
          </div>
        </div>
        <div class="duration flex center" style="justify-content: start; gap: 8px">
          <span class="icon"> <Clock /> </span>
          <span class="subtitle"> <slot name="duration"></slot> </span>
        </div>
      </div>
    </div>
  </li>
</template>

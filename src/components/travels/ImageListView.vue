<script setup>
import Star from '@/components/icons/travels/IconStar.vue'
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
        <div class="mx-md" style="text-align: end">
          <div class="review">
            <span class="icon"> <Star /> </span>
            <span class="subtitle"><slot name="review"></slot></span>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

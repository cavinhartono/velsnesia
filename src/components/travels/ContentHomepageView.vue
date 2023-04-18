<script setup>
import IconArrowForward from '@/components/icons/travels/IconArrowForward.vue'
</script>

<template>
  <div class="content" style="position: relative">
    <h2 class="title" style="text-align: center">
      Explore the Beauty of Nature <br />
      Discover the New You
    </h2>
    <form action="" class="form mx-lg">
      <div class="input-form full-content flex gap">
        <div class="field">
          <label for="">Location</label>
          <input type="text" placeholder="Yogyakarta" class="input" />
        </div>
        <div class="field">
          <label for="">Check In</label>
          <input type="date" class="input" />
        </div>
        <div class="field">
          <label for="">Check Out</label>
          <input type="date" class="input" />
        </div>
        <div class="field">
          <label for="">Guests</label>
          <select name="" id="" class="input">
            <option value="-">Option</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div class="field">
          <label for="" style="color: transparent">-</label>
          <button class="btn primary flex center">
            <span class="subtitle">Check Availability</span>
            <span class="icon flex center">
              <IconArrowForward style="stroke: #fff; width: 24px; height: 24px" />
            </span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

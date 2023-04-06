<script setup>
import Header from '@/components/travels/HeaderView.vue'
</script>

<template>
  <section class="container">
    <Header />
    <div class="homepage flex center">
      <div class="img homepage_img">
        <img src="@/components/images/homepage.jpg" alt="Homepage" class="photo" />
      </div>
      <div class="content">
        <h2 class="title">
          Explore the Beauty of Nature <br />
          Discover the New You
        </h2>
        <form action="" class="form">
          <div class="input-form full-content flex gap">
            <div class="field">
              <label for="">Location</label>
              <input type="text" placeholder="Yogyakarta" />
            </div>
            <div class="field">
              <label for="">Check In</label>
              <input type="date" />
            </div>
            <div class="field">
              <label for="">Check Out</label>
              <input type="date" />
            </div>
            <div class="field">
              <label for="">Guests</label>
              <select name="" id="">
                <option value="-">Option</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

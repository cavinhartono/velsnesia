<script setup>
import Card from '@/components/travels/CardInformationView.vue'
import ListWithImage from '@/components/travels/ImageListView.vue'
</script>

<template>
  <div class="trending">
    <h2 class="title">Trending</h2>
    <Card v-for="travel in travels" :key="travel.id">
      <ListWithImage>
        <template #image>
          <img src="`${travel.img}" alt="Gambar" />
        </template>
        <template #title>{{ travel.name }}</template>
        <template #desc>{{ travel.from }}</template>
        <template #review>{{ travel.review }}</template>
      </ListWithImage>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      travels: []
    }
  },
  methods: {
    getTrendingData() {
      fetch('@/API/Trending.json')
        .then((response) => response)
        .then((data) => (this.travels = data))
    }
  }
}
</script>

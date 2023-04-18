<script>
import Card from '@/components/travels/CardInformationView.vue'
import ListWithImage from '@/components/travels/ImageListView.vue'
import TrendingAPI from '../../API/Trending.json'

export default {
  name: 'TrendingView',
  data() {
    return {
      travels: TrendingAPI
    }
  },
  components: { Card, ListWithImage }
}
</script>

<template>
  <div class="trending">
    <h2 class="title">Trending</h2>
    <Card>
      <ListWithImage v-for="travel in travels" :key="travel.id">
        <template #image>
          <img :src="travel.img" alt="Gambar" />
        </template>
        <template #title>{{ travel.name }}</template>
        <template #desc>{{ travel.from }}</template>
        <template #review>{{ travel.review }}</template>
      </ListWithImage>
    </Card>
  </div>
</template>

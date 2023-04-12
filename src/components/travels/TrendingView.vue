<script setup>
import Card from '@/components/travels/CardInformationView.vue'
import ListWithImage from '@/components/travels/ImageListView.vue'
</script>

<template>
  <div class="trending">
    <h2 class="title">Trending</h2>
    <Card v-for="travel in travels">
      <ListWithImage>
        <template #image>
          <img
            src="https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id={{ travel.essId.sourceId }}"
            alt="Gambar"
          />
        </template>
        <template #title>Gunung Agung</template>
        <template #desc>Bali, Indonesia</template>
        <template #review>4.6</template>
        <template #price>IDR. 50.000</template>
        <template #duration>3 Jam</template>
      </ListWithImage>
      <ListWithImage>
        <template #image>
          <img src="@/components/images/pura-1.jpg" alt="Pura" />
        </template>
        <template #title>Gunung Agung</template>
        <template #desc>Bali, Indonesia</template>
        <template #review>4.6</template>
        <template #price>IDR. 50.000</template>
        <template #duration>3 Jam</template>
      </ListWithImage>
      <ListWithImage>
        <template #image>
          <img src="@/components/images/pura-1.jpg" alt="Pura" />
        </template>
        <template #title>Gunung Agung</template>
        <template #desc>Bali, Indonesia</template>
        <template #review>4.6</template>
        <template #price>IDR. 50.000</template>
        <template #duration>3 Jam</template>
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
    fetchData() {
      fetch(
        'https://hotels4.p.rapidapi.com/locations/v3/search?q=bali&locale=en_US&langid=1033&siteid=300000001',
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
          }
        }
      )
        .then((response) => {
          response.json().then((data) => (this.travels = data))
        })
        .catch((err) => console.err(err))
    }
  }
}
</script>

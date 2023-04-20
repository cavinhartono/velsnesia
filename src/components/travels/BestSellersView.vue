<script>
import Destinations from '../../API/Destinations.json'

export default {
  name: 'BestSellersView',
  data() {
    return {
      topSellers: Destinations.slice(0, 3)
    }
  },
  methods: {
    sortObject() {
      let destinations = this.topSellers.sort((a, b) => {
        let fa = a.seller,
          fb = b.seller
        if (fa < fb) return -1
        if (fa > fb) return 1
        return 0
      })

      return destinations.reverse()
    }
  }
}
</script>

<template>
  <div class="best_sellers" id="bestSellers">
    <div class="flex between full-content mx-md">
      <h2 class="title">Best Sellers</h2>
      <div class="action">
        <button class="btn primary">Check As</button>
      </div>
    </div>
    <ul class="flex gap">
      <li class="list" v-for="travel in sortObject()" :key="travel.id">
        <div class="img">
          <img :src="travel.img" alt="Gambar" />
        </div>
        <div class="content mx-md">
          <span class="content flex" style="flex-direction: column; gap: 8px">
            <h2 class="title">{{ travel.name }}</h2>
            <p class="text">
              {{ travel.desc }}
            </p>
          </span>
          <div class="action flex mx-md" style="flex-direction: column; width: 100%; gap: 12px">
            <button class="btn secondary">Show</button>
            <a href="" class="link btn primary">See</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

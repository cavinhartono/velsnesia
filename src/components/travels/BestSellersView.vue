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
      let destinations = this.topSellers

      destinations = destinations.sort((a, b) => {
        if (a.seller < b.seller) return -1
        if (a.seller > b.seller) return 1
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
          <span class="content">
            <h2 class="title">{{ travel.name }}</h2>
            <p class="text">
              {{ travel.desc }}
            </p>
          </span>
          <div class="action flex gap mx-md" style="flex-direction: column; width: 100%">
            <button class="btn secondary">Show</button>
            <a href="" class="link btn primary">See</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

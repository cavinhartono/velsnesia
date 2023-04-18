<script>
import DestinationsAPI from '../../API/Destinations.json'

export default {
  name: 'DestinationView',
  data() {
    return {
      destinations: DestinationsAPI
    }
  }
}
</script>

<template>
  <div class="full-content">
    <ul class="nations flex gap">
      <li
        :class="`list-${destination.id}`"
        v-for="destination in destinations"
        :key="destination.id"
        :style="`--column: ${destination.style.column}; --row: ${destination.style.row}`"
      >
        <a href="#" class="link">
          <img :src="destination.img" class="photo" />
          <div class="desc">
            <h2 class="title" :style="`--title:${destination.style.title}`">
              {{ destination.name }}
            </h2>
            <p class="text" :style="`--text: ${destination.style.text}`">{{ destination.desc }}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import IconAirplane from '../icons/travels/IconAirplane.vue'

var prevScroll = window.pageYOffset

window.onscroll = () => {
  var currentScroll = window.pageYOffset

  if (prevScroll > currentScroll) {
    document.querySelector('.header').style.top = '0'
    document.querySelector('.header').classList.add('active')
  } else {
    document.querySelector('.header').style.top = '-100px'
    document.querySelector('.header').classList.remove('active')
  }

  prevScroll = currentScroll
}

const List = document.querySelectorAll('.nav .list')

List.forEach((e) =>
  e.addEventListener('click', function () {
    List.forEach((item) => item.classList.remove('active'))
    this.classList.add('active')
  })
)
</script>

<template>
  <header class="header flex between">
    <div class="logo">
      <span class="subtitle">Velsnesia</span>
      <span class="icon"><IconAirplane /></span>
    </div>
    <ul class="nav gap flex">
      <li class="list active">
        <a class="link" href="#home">Home</a>
      </li>
      <li class="list">
        <a class="link" href="#destinations">Destinations</a>
      </li>
      <li class="list">
        <a class="link" href="#bestSellers">How it works</a>
      </li>
      <li class="list">
        <RouterLink class="link btn primary" to="/login">Login</RouterLink>
      </li>
    </ul>
  </header>
</template>

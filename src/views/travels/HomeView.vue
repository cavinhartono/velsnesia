<script setup>
import Header from '@/components/travels/HeaderView.vue'
import Content from '@/components/travels/ContentHomepageView.vue'
import Card from '@/components/travels/CardInformationView.vue'
import List from '@/components/travels/ListInformationView.vue'
import Trending from '@/components/travels/TrendingView.vue'
import Footer from '@/components/travels/FooterView.vue'

// Icons
import IconSearch from '@/components/icons/travels/IconSearch.vue'
import IconTicket from '@/components/icons/travels/IconTicket.vue'
import IconMap from '@/components/icons/travels/IconMap.vue'
</script>

<template>
  <section class="container">
    <Header />
    <div class="homepage flex center" style="flex-direction: column">
      <div class="img homepage_img">
        <img src="@/components/images/homepage.jpg" alt="Homepage" class="photo" />
      </div>
      <Content />
      <Card>
        <List>
          <template #icon> <IconSearch /> </template>
          <template #title>Search Your Destination</template>
          <template #desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam et obcaecati voluptate
            fugiat adipisci, distinctio eaque doloremque mollitia.
          </template>
        </List>
        <List>
          <template #icon><IconTicket /></template>
          <template #title>Get Your Tickets</template>
          <template #desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio maxime ea culpa, quo
            assumenda ex laborum, minus libero fugit voluptatem blanditiis quod possimus doloribus?
          </template>
        </List>
        <List>
          <template #icon><IconMap /></template>
          <template #title>Travel Around the Country</template>
          <template #desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor velit, a similique
            praesentium vitae architecto quo quasi blanditiis nulla doloremque, amet odio doloribus
            labore.
          </template>
        </List>
      </Card>
    </div>
    <Trending />
    <Footer />
  </section>
</template>

<template>
  <v-container>
    <carousel :perPageCustom="[[280, 1], [600, 2], [1000, 3], [1260, 4]]">
      <slide v-for="(m,i) in meals" :key="i">
        <v-flex>
          <menu-item :title="m.title" :price="m.price"
                     :image="m.image" :description="m.description">
          </menu-item>
        </v-flex>
      </slide>
    </carousel>
  </v-container>
</template>

<script>
import MenuItem from '../components/MenuItem.vue';
import { Carousel, Slide } from 'vue-carousel';

import menu from '../assets/menu.json'

export default {
  name: 'MenuBar',

  components: {
    Carousel,
    Slide,
    MenuItem
  },
  data: function () {
    return {
      meals: menu,
      scrollPerItem: true
    }
  }
}
</script>

<style>
.v-card {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
</style>

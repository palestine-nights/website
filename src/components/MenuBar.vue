<template>
  <v-container>
    <carousel :perPageCustom="[[280, 1], [600, 2], [1000, 3], [1260, 4]]"
              paginationColor="#6e7177"
              paginationActiveColor="#ffffff">
      <slide v-for="(m,i) in meals" :key="i">
        <menu-item :title="m.title"
                   :price="m.price"
                   :image="m.image"
                   :description="m.description">
        </menu-item>
      </slide>
    </carousel>
  </v-container>
</template>

<script>
import MenuItem from '../components/MenuItem.vue';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'MenuBar',

  components: {
    Carousel,
    Slide,
    MenuItem
  },
  data: function () {
    return {
      meals: require('../assets/menu.json'),
      scrollPerItem: true
    }
  }
}
</script>

<style>
.v-card {
  margin-left: 0.3rem;
  margin-right: 0.3rem;
}
</style>

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
import { Carousel, Slide } from 'vue-carousel';
import MenuItem from '../components/MenuItem.vue';

/**
 *  Localisation files.
 */
import EnMenuContent from '../assets/menu.en.json';
import ArMenuContent from '../assets/menu.ar.json';

export default {
  name: 'MenuBar',
  components: {
    Carousel,
    Slide,
    MenuItem,
  },
  methods: {
    getMenu() {
      if (this.$i18n.locale === 'en') {
        return EnMenuContent;
      } else if (this.$i18n.locale === 'ar') {
        return ArMenuContent;
      }
      return [];
    },
  },
  data() {
    return {
      meals: this.getMenu(),
      scrollPerItem: true,
    };
  },
};
</script>

<style>
.v-card {
  margin-left: 0.3rem;
  margin-right: 0.3rem;
}
</style>
